import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Printer, Search } from "lucide-react";
import Panel from "@/components/shared/Panel";
import GradedBadge from "@/components/shared/GradedBadge";
import Readout from "@/components/shared/Readout";
import { Modal } from "@/components/shared";
import { cn } from "@/lib/utils";
import {
  computeGrade,
  formatSessionTime,
  useEvents,
  useSim,
} from "@/sim/store";
import type { SimEvent } from "@/sim/store";
import {
  OPERATOR_NAME,
  notebookActions,
  useNotebook,
} from "@/components/notebook/store";
import type { EntryTag, NotebookEntry } from "@/components/notebook/store";
import EntryCard from "@/components/notebook/EntryCard";
import Composer from "@/components/notebook/Composer";
import MiniPlot from "@/components/notebook/MiniPlot";
import type { MiniPlotKind } from "@/components/notebook/MiniPlot";
import {
  buildExportMarkdown,
  entryToExport,
  eventToExport,
} from "@/components/notebook/exportMarkdown";

/* ---------------- auto-log derivation ---------------- */

function tagForEvent(e: SimEvent): EntryTag {
  if (e.severity === "FAULT" || e.severity === "INTERLOCK") return "fault";
  if (e.subsystem === "experiment") {
    if (e.message.startsWith("Run #") || e.message.includes("Blinding")) return "run";
    return "auto";
  }
  if (e.subsystem === "rf") return "fit";
  return "auto";
}

function attachmentForEvent(e: SimEvent): MiniPlotKind | null {
  if (e.subsystem === "rf" && e.message.startsWith("Sweep complete")) return "dip";
  if (e.subsystem === "experiment" && e.message.startsWith("Run #")) return "dip";
  if (e.subsystem === "thermal" && e.message.includes("stable")) return "temp";
  if (e.subsystem === "vacuum" && e.message.includes("full speed")) return "pressure";
  return null;
}

function attachmentForTag(tag: EntryTag): MiniPlotKind | null {
  if (tag === "fit") return "residuals";
  if (tag === "run") return "dip";
  if (tag === "fault") return "temp";
  return null;
}

const TAG_FILTERS: Array<EntryTag | "all"> = [
  "all",
  "auto",
  "note",
  "fit",
  "run",
  "fault",
  "copilot",
];

/** Live elapsed session time (isolated so the 10 Hz tick re-renders only this). */
function Elapsed() {
  const t = useSim((s) => s.simTime);
  return <>{formatSessionTime(t)}</>;
}

/* ---------------- page ---------------- */

type StreamItem =
  | { kind: "auto"; key: string; event: SimEvent }
  | { kind: "manual"; key: string; entry: NotebookEntry };

export default function Notebook() {
  const events = useEvents();
  const sessionId = useSim((s) => s.sessionId);
  const runs = useSim((s) => s.blinding.runs);
  const grade = useSim(computeGrade);
  const manualEntries = useNotebook((s) => s.entries);
  const pinnedAuto = useNotebook((s) => s.pinnedAuto);

  const [query, setQuery] = useState("");
  const [tagFilter, setTagFilter] = useState<EntryTag | "all">("all");
  const [undoEntry, setUndoEntry] = useState<NotebookEntry | null>(null);
  const [confirmEnd, setConfirmEnd] = useState(false);
  const undoTimer = useRef<number | undefined>(undefined);

  // manual entries belong to a sim session; wipe them when the session resets
  useEffect(() => {
    useNotebook.getState().bindSession(sessionId);
  }, [sessionId]);

  useEffect(() => () => window.clearTimeout(undoTimer.current), []);

  /* -------- merged stream, reverse chronological -------- */
  const stream = useMemo<StreamItem[]>(() => {
    const items: StreamItem[] = [
      ...events.map((event) => ({
        kind: "auto" as const,
        key: `auto-${event.id}`,
        event,
      })),
      ...manualEntries.map((entry) => ({
        kind: "manual" as const,
        key: entry.id,
        entry,
      })),
    ];
    items.sort((a, b) => {
      const ta = a.kind === "auto" ? a.event.t : a.entry.t;
      const tb = b.kind === "auto" ? b.event.t : b.entry.t;
      if (tb !== ta) return tb - ta;
      const wa = a.kind === "auto" ? a.event.wall : a.entry.wall;
      const wb = b.kind === "auto" ? b.event.wall : b.entry.wall;
      return wb - wa;
    });
    return items;
  }, [events, manualEntries]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stream.filter((item) => {
      const tag =
        item.kind === "auto" ? tagForEvent(item.event) : item.entry.tag;
      if (tagFilter !== "all" && tag !== tagFilter) return false;
      if (!q) return true;
      const body = item.kind === "auto" ? item.event.message : item.entry.body;
      return body.toLowerCase().includes(q);
    });
  }, [stream, query, tagFilter]);

  /* -------- attachment budget: only the newest few live canvases -------- */
  const attachmentByKey = useMemo(() => {
    const map = new Map<string, MiniPlotKind>();
    let budget = 6;
    for (const item of stream) {
      if (budget <= 0) break;
      if (item.kind === "auto") {
        const kind = attachmentForEvent(item.event);
        if (kind) {
          map.set(item.key, kind);
          budget--;
        }
      } else if (item.entry.pinned) {
        const kind = attachmentForTag(item.entry.tag);
        if (kind) {
          map.set(item.key, kind);
          budget--;
        }
      }
    }
    return map;
  }, [stream]);

  /* -------- session facts -------- */
  const fitCount = useMemo(
    () => events.filter((e) => e.message.startsWith("Sweep complete")).length,
    [events],
  );
  const validRuns = runs.filter((r) => r.valid);
  const validFraction = runs.length ? validRuns.length / runs.length : 0;

  /* -------- pinned rail -------- */
  const pinnedItems = useMemo(() => {
    const manual = manualEntries
      .filter((e) => e.pinned)
      .map((entry) => ({
        key: entry.id,
        anchorId: `entry-${entry.id}`,
        caption: entry.body,
        kind: attachmentForTag(entry.tag) ?? ("dip" as MiniPlotKind),
        t: entry.t,
      }));
    const auto = events
      .filter((e) => pinnedAuto.includes(e.id))
      .map((e) => ({
        key: `auto-${e.id}`,
        anchorId: `entry-auto-${e.id}`,
        caption: e.message,
        kind: attachmentForEvent(e) ?? ("dip" as MiniPlotKind),
        t: e.t,
      }));
    return [...manual, ...auto].sort((a, b) => b.t - a.t).slice(0, 8);
  }, [manualEntries, events, pinnedAuto]);

  /* -------- actions -------- */

  const addManual = (body: string, tag: EntryTag) => {
    notebookActions.addEntry({ body, tag, t: useSim.getState().simTime });
  };

  const deleteManual = (entry: NotebookEntry) => {
    useNotebook.getState().deleteEntry(entry.id);
    setUndoEntry(entry);
    window.clearTimeout(undoTimer.current);
    undoTimer.current = window.setTimeout(() => setUndoEntry(null), 5000);
  };

  const exportMarkdown = () => {
    const md = buildExportMarkdown([
      ...manualEntries.map((e) => entryToExport(e, OPERATOR_NAME)),
      ...events.map((e) => eventToExport(e, tagForEvent(e))),
    ]);
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resonance-lab-notebook.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  const endSession = () => {
    const t = useSim.getState().simTime;
    const hours = Math.floor(t / 3600);
    const mins = Math.floor((t % 3600) / 60);
    const bestSigma = validRuns.length
      ? Math.min(...validRuns.map((r) => r.f0Sigma))
      : null;
    const body =
      `Session ${hours}h ${String(mins).padStart(2, "0")}m. ` +
      `${fitCount} fits, ${runs.length} runs (${validRuns.length} valid). ` +
      (bestSigma !== null ? `Best σ(f₀) = ${bestSigma.toFixed(1)} Hz. ` : "") +
      `Final grade: ${grade}. ` +
      `The sphere, as always, gave back less than it was given.`;
    notebookActions.addEntry({ body, tag: "note", author: "AUTOLOG", t });
    setConfirmEnd(false);
  };

  const totalCount = events.length + manualEntries.length;
  const empty = filtered.length === 0 && totalCount === 0;

  return (
    <div className="notebook-root mx-auto max-w-5xl p-4 md:p-6">
      {/* print stylesheet: light theme, chrome hidden, entries expanded */}
      <style>{`
        @media print {
          aside.sticky, header.sticky, footer { display: none !important; }
          html, body { background: #ffffff !important; }
          .notebook-root .no-print { display: none !important; }
          .notebook-root article, .notebook-root section {
            background: #ffffff !important;
            border-color: #cccccc !important;
            break-inside: avoid;
          }
          .notebook-root * { color: #1a1a1a !important; text-shadow: none !important; }
        }
      `}</style>

      {/* header */}
      <header className="mb-4">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
            Lab Notebook
          </h1>
          <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim">
            OP {OPERATOR_NAME}
          </span>
          <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim">
            Session {sessionId}
          </span>
          <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim">
            {totalCount} entries
          </span>
          <span className="no-print ml-auto flex items-center gap-2">
            <button
              onClick={exportMarkdown}
              className="flex items-center gap-1.5 rounded-sm border border-line px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:border-line-bright hover:text-ink"
            >
              <Download size={12} strokeWidth={1.5} />
              Export .md
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 rounded-sm border border-line px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:border-line-bright hover:text-ink"
            >
              <Printer size={12} strokeWidth={1.5} />
              Print / PDF
            </button>
          </span>
        </div>

        {/* search + tag filters */}
        <div className="no-print mt-3 flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search
              size={12}
              strokeWidth={1.5}
              className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-faint"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search entries…"
              aria-label="Search entries"
              className="w-52 rounded-sm border border-line bg-panel py-1.5 pl-7 pr-2 font-mono text-[11px] text-ink placeholder:text-faint focus:border-trace/60 focus:outline-none"
            />
          </div>
          {TAG_FILTERS.map((t) => (
            <button
              key={t}
              onClick={() => setTagFilter(t)}
              className={cn(
                "rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors",
                tagFilter === t
                  ? "border-trace/60 bg-trace/10 text-trace"
                  : "border-line text-faint hover:border-line-bright hover:text-dim",
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </header>

      <div className="flex flex-col gap-4 xl:flex-row">
        {/* entries stream */}
        <div className="min-w-0 flex-1">
          {empty ? (
            <Panel pad={false} className="overflow-hidden">
              <div className="flex flex-col items-center px-6 py-10 text-center">
                <img
                  src="/empty-runs.png"
                  alt=""
                  className="h-auto w-56 opacity-80"
                />
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-dim">
                  Blank page, full chamber. Power up and the first entries write
                  themselves — or leave the first note yourself.
                </p>
              </div>
            </Panel>
          ) : filtered.length === 0 ? (
            <Panel>
              <p className="py-6 text-center font-mono text-[11px] text-faint">
                No entries match the current filter.
              </p>
            </Panel>
          ) : (
            <AnimatePresence initial={false}>
              {filtered.map((item) =>
                item.kind === "auto" ? (
                  <EntryCard
                    key={item.key}
                    anchorId={`entry-${item.key}`}
                    t={item.event.t}
                    wall={item.event.wall}
                    author="AUTOLOG"
                    authorLabel="AUTOLOG"
                    tag={tagForEvent(item.event)}
                    body={item.event.message}
                    manual={false}
                    pinned={pinnedAuto.includes(item.event.id)}
                    attachment={attachmentByKey.get(item.key) ?? null}
                    onPin={() => notebookActions.togglePinAuto(item.event.id)}
                  />
                ) : (
                  <EntryCard
                    key={item.key}
                    anchorId={`entry-${item.key}`}
                    t={item.entry.t}
                    wall={item.entry.wall}
                    author={item.entry.author}
                    authorLabel={
                      item.entry.author === "OPERATOR"
                        ? OPERATOR_NAME
                        : item.entry.author
                    }
                    tag={item.entry.tag}
                    body={item.entry.body}
                    manual
                    pinned={item.entry.pinned}
                    attachment={attachmentByKey.get(item.key) ?? null}
                    onPin={() => notebookActions.togglePin(item.entry.id)}
                    onEdit={(body) =>
                      useNotebook.getState().updateEntry(item.entry.id, body)
                    }
                    onDelete={() => deleteManual(item.entry)}
                  />
                ),
              )}
            </AnimatePresence>
          )}

          <div className="no-print">
            <Composer onAdd={addManual} />
          </div>
        </div>

        {/* right rail */}
        <div className="no-print w-full shrink-0 space-y-4 xl:w-72">
          <Panel title="Pinned" accent="trace">
            {pinnedItems.length === 0 ? (
              <p className="font-mono text-[10px] leading-relaxed text-faint">
                Nothing pinned. Pin entries to keep their plots on the rail.
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-2 xl:grid-cols-1">
                <AnimatePresence initial={false}>
                  {pinnedItems.map((p) => (
                    <motion.figure
                      key={p.key}
                      layout
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{ duration: 0.18 }}
                      className="rounded-sm border border-line bg-panel-2 p-2"
                    >
                      <MiniPlot kind={p.kind} width={200} height={44} className="w-full" />
                      <figcaption className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-dim">
                        {p.caption}
                      </figcaption>
                      <button
                        onClick={() =>
                          document
                            .getElementById(p.anchorId)
                            ?.scrollIntoView({ behavior: "smooth", block: "center" })
                        }
                        className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-trace hover:underline"
                      >
                        Jump to entry →
                      </button>
                    </motion.figure>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </Panel>

          <Panel title="Session facts" accent="violet">
            <div className="grid grid-cols-2 gap-3">
              <Readout label="Elapsed" value={<Elapsed />} size="sm" />
              <Readout label="Fits" value={String(fitCount)} size="sm" />
              <Readout label="Runs" value={String(runs.length)} size="sm" />
              <Readout
                label="Valid fraction"
                value={`${Math.round(validFraction * 100)}%`}
                size="sm"
                tone={validFraction >= 0.8 ? "go" : validFraction > 0 ? "warn" : "faint"}
              />
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                Current grade
              </span>
              <GradedBadge grade={grade} className="h-5 px-2 text-[10px]" />
            </div>
            <button
              onClick={() => setConfirmEnd(true)}
              className="mt-3 w-full rounded-sm border border-trace-2/60 bg-trace-2/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-trace-2 transition-colors hover:bg-trace-2/20"
            >
              End session
            </button>
            <p className="mt-2 font-mono text-[9px] leading-relaxed text-faint">
              Writes an auto-summary entry to the notebook. The facility keeps
              running.
            </p>
          </Panel>
        </div>
      </div>

      {/* undo toast */}
      <AnimatePresence>
        {undoEntry && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.18 }}
            className="no-print fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-md border border-line-bright bg-panel-2 px-4 py-2.5 shadow-lg"
          >
            <span className="font-mono text-[11px] text-dim">Entry deleted.</span>
            <button
              onClick={() => {
                useNotebook.getState().restoreEntry(undoEntry);
                setUndoEntry(null);
                window.clearTimeout(undoTimer.current);
              }}
              className="rounded-sm border border-trace/60 bg-trace/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-trace hover:bg-trace/20"
            >
              Undo
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* end-session confirm */}
      <Modal
        open={confirmEnd}
        onClose={() => setConfirmEnd(false)}
        title="End session"
      >
        <p className="text-sm leading-relaxed text-dim">
          This writes an auto-generated summary of the whole session into the
          notebook — fits, runs, valid fraction, best σ, final grade. The
          facility itself keeps running; use <span className="font-mono text-ink">Reset</span> in
          the top bar to return to a cold start.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => setConfirmEnd(false)}
            className="rounded-sm border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-dim transition-colors hover:text-ink"
          >
            Cancel
          </button>
          <button
            onClick={endSession}
            className="rounded-sm border border-trace/60 bg-trace/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-trace transition-colors hover:bg-trace/20"
          >
            Write summary
          </button>
        </div>
      </Modal>
    </div>
  );
}
