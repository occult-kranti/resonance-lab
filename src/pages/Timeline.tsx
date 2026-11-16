import { Fragment, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  CircleAlert,
  Copy,
  Download,
  Info,
  NotebookPen,
  OctagonX,
  Pause,
  Play,
  ShieldCheck,
} from "lucide-react";
import { Drawer, Panel } from "@/components/shared";
import type { PhaseStep } from "@/components/shared";
import {
  formatPressure,
  formatSessionTime,
  useEvents,
  useSim,
} from "@/sim/store";
import type { Severity, SimEvent, Subsystem } from "@/sim/store";
import { appendTimelineToNotebook } from "@/components/copilot/notebookBridge";
import { getOperator } from "@/components/console/operator";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/* Taxonomy                                                            */
/* ------------------------------------------------------------------ */

const SUBSYSTEMS: { id: Subsystem; label: string; text: string; dot: string }[] = [
  { id: "power", label: "Power", text: "text-trace-2", dot: "bg-trace-2" },
  { id: "vacuum", label: "Vacuum", text: "text-blue", dot: "bg-blue" },
  { id: "thermal", label: "Thermal", text: "text-copper", dot: "bg-copper" },
  { id: "clock", label: "Clock", text: "text-violet", dot: "bg-violet" },
  { id: "rf", label: "RF/VNA", text: "text-trace", dot: "bg-trace" },
  { id: "mechanics", label: "Stage", text: "text-dim", dot: "bg-dim" },
  { id: "safety", label: "Safety", text: "text-go", dot: "bg-go" },
  { id: "experiment", label: "Experiment", text: "text-trace-2", dot: "bg-trace-2" },
];

const SEV_ICON: Record<Severity, typeof Info> = {
  NOMINAL: Info,
  ADVISORY: ShieldCheck,
  WARNING: AlertTriangle,
  FAULT: CircleAlert,
  INTERLOCK: OctagonX,
};
const SEV_COLOR: Record<Severity, string> = {
  NOMINAL: "text-faint",
  ADVISORY: "text-blue",
  WARNING: "text-warn",
  FAULT: "text-bad",
  INTERLOCK: "text-bad",
};
const SEV_RANK: Record<Severity, number> = {
  NOMINAL: 0,
  ADVISORY: 1,
  WARNING: 2,
  FAULT: 3,
  INTERLOCK: 4,
};
const SEV_FILTERS = [
  { id: "all", label: "ALL", min: 0 },
  { id: "adv", label: "ADVISORY+", min: 1 },
  { id: "warn", label: "WARNING+", min: 2 },
  { id: "fault", label: "FAULT", min: 3 },
] as const;

/* ------------------------------------------------------------------ */
/* Phase inference (events carry no phase tag — derive from content)   */
/* ------------------------------------------------------------------ */

const PHASES = [
  "Power up",
  "Pump down",
  "Thermal stabilization",
  "Reference lock",
  "VNA calibrate & sweep",
  "Blinded runs",
] as const;

function phaseOf(e: SimEvent): number {
  switch (e.subsystem) {
    case "power":
      return 0;
    case "vacuum":
      return 1;
    case "thermal":
      return 2;
    case "clock":
      return 3;
    case "rf":
      return 4;
    case "experiment":
      return 5;
    default:
      return -1; // safety/mechanics attach to surrounding phase
  }
}

/** Deep link relevant to an event's subsystem. */
function deepLink(e: SimEvent): { label: string; to: string } | null {
  switch (e.subsystem) {
    case "rf":
      return { label: "Open VNA", to: "/vna" };
    case "vacuum":
    case "thermal":
    case "power":
      return { label: "Open Console", to: "/console" };
    case "clock":
      return { label: "Open Reference", to: "/reference" };
    case "mechanics":
      return { label: "Open Chamber", to: "/chamber" };
    case "experiment":
      return { label: "Open Runs", to: "/runs" };
    case "safety":
      return { label: "Open Fault Injector", to: "/faults" };
    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/* Highlighted message (search matches in trace-2)                     */
/* ------------------------------------------------------------------ */

function Highlighted({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-trace-2/20 text-trace-2">
        {text.slice(idx, idx + query.length)}
      </mark>
      <Highlighted text={text.slice(idx + query.length)} query={query} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Export .log                                                         */
/* ------------------------------------------------------------------ */

function exportLog(events: SimEvent[]) {
  const s = useSim.getState();
  const header = [
    "RESONANCE LAB — SESSION LOG",
    `Session: ${s.sessionId}`,
    `Operator: ${getOperator() || "(unsigned)"}`,
    `Exported: ${new Date().toISOString()}`,
    "Educational simulator — idealized, energy-conserving physics. Not a real measurement device.",
    "",
  ];
  const lines = events.map(
    (e) =>
      `${formatSessionTime(e.t)}  [${e.severity.padEnd(9)}]  ${e.subsystem.padEnd(10)}  ${e.message}`,
  );
  const blob = new Blob([[...header, ...lines].join("\n")], {
    type: "text/plain;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `resonance-lab-${s.sessionId}.log`;
  a.click();
  URL.revokeObjectURL(url);
}

/* ------------------------------------------------------------------ */
/* Event row                                                           */
/* ------------------------------------------------------------------ */

function TimelineRow({
  event,
  query,
  fresh,
  onOpen,
}: {
  event: SimEvent;
  query: string;
  fresh: boolean;
  onOpen: (e: SimEvent) => void;
}) {
  const Icon = SEV_ICON[event.severity];
  const sub = SUBSYSTEMS.find((x) => x.id === event.subsystem);
  const bad = event.severity === "FAULT" || event.severity === "INTERLOCK";
  return (
    <motion.button
      layout={false}
      initial={fresh ? { opacity: 0, y: -10 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: EASE }}
      onClick={() => onOpen(event)}
      className={cn(
        "group flex w-full items-center gap-3 border-b border-line/50 px-3 py-2 text-left transition-colors hover:bg-panel-2/60",
        fresh && (bad ? "animate-[rowflash-bad_1s_ease-out]" : "animate-[rowflash_1s_ease-out]"),
      )}
    >
      <span
        className="w-20 shrink-0 font-mono text-[10px] tabular-nums text-faint"
        title={new Date(event.wall).toLocaleString()}
      >
        {formatSessionTime(event.t)}
      </span>
      <span aria-hidden className={cn("h-4 w-[6px] shrink-0 rounded-[2px]", sub?.dot ?? "bg-dim")} />
      <span className={cn("w-20 shrink-0 font-mono text-[9px] uppercase tracking-[0.1em]", sub?.text ?? "text-dim")}>
        {sub?.label ?? event.subsystem}
      </span>
      <span className="min-w-0 flex-1 font-mono text-[11px] leading-relaxed text-ink">
        <Highlighted text={event.message} query={query} />
      </span>
      <Icon size={13} strokeWidth={1.5} className={cn("shrink-0", SEV_COLOR[event.severity])} />
      <span className="hidden shrink-0 items-center gap-2 opacity-0 transition-opacity group-hover:flex group-hover:opacity-100">
        <span
          role="button"
          tabIndex={-1}
          aria-label="Copy event"
          onClick={(e) => {
            e.stopPropagation();
            void navigator.clipboard
              .writeText(`${formatSessionTime(event.t)} [${event.severity}] ${event.message}`)
              .catch(() => undefined);
          }}
          className="text-faint transition-colors hover:text-ink"
        >
          <Copy size={12} strokeWidth={1.5} />
        </span>
      </span>
    </motion.button>
  );
}

/* ------------------------------------------------------------------ */
/* Live facility snapshot for the detail drawer (self-subscribed)      */
/* ------------------------------------------------------------------ */

function FacilitySnapshot() {
  const pressure = useSim((s) => s.pressure);
  const temperature = useSim((s) => s.temperature);
  const clock = useSim((s) => s.clock);
  const thermalStable = useSim((s) => s.thermalStable);
  return (
    <div className="rounded-sm border border-line bg-void p-3">
      <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
        Facility now
      </p>
      <p className="font-mono text-[11px] leading-relaxed text-dim">
        P = {formatPressure(pressure)}
        <br />
        T = {temperature.toFixed(3)} °C ({thermalStable ? "stable" : "settling"})
        <br />
        CLK = {clock}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Timeline() {
  const events = useEvents();
  const [paused, setPaused] = useState(false);
  const [frozen, setFrozen] = useState<SimEvent[] | null>(null);
  const [enabledSub, setEnabledSub] = useState<Set<Subsystem>>(new Set());
  const [sevMin, setSevMin] = useState(0);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<SimEvent | null>(null);
  const [notebookToast, setNotebookToast] = useState(false);
  const streamRef = useRef<HTMLDivElement>(null);

  // Pause freezes the visible list; resume catches up.
  const visible = frozen ?? events;
  const pendingCount = frozen ? events.length - frozen.length : 0;

  const togglePause = () => {
    if (paused) {
      setFrozen(null);
      setPaused(false);
    } else {
      setFrozen(events);
      setPaused(true);
    }
  };

  // fresh-row flash: ids above the previous events array's last id animate in.
  // (React-sanctioned adjust-state-during-render pattern.)
  const lastId = events.at(-1)?.id ?? 0;
  const [freshMark, setFreshMark] = useState(() => ({
    last: lastId,
    freshAfter: Number.MAX_SAFE_INTEGER,
  }));
  if (freshMark.last !== lastId) {
    setFreshMark({ last: lastId, freshAfter: freshMark.last });
  }
  const isFresh = (e: SimEvent) => e.id > freshMark.freshAfter;

  // filtering
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return visible.filter(
      (e) =>
        (enabledSub.size === 0 || enabledSub.has(e.subsystem)) &&
        SEV_RANK[e.severity] >= sevMin &&
        (!q || e.message.toLowerCase().includes(q)),
    );
  }, [visible, enabledSub, sevMin, query]);
  const newestFirst = useMemo(() => [...filtered].reverse(), [filtered]);

  // per-subsystem counts (on the unfiltered visible list)
  const counts = useMemo(() => {
    const m = new Map<Subsystem, number>();
    for (const e of visible) m.set(e.subsystem, (m.get(e.subsystem) ?? 0) + 1);
    return m;
  }, [visible]);

  // phase bands: for each phase present (in chronological order), first/last time
  const phaseInfo = useMemo(() => {
    const info = new Map<number, { first: number; last: number }>();
    let lastPhase = -1;
    for (const e of filtered) {
      let p = phaseOf(e);
      if (p < 0) p = lastPhase;
      if (p < 0) continue;
      lastPhase = p;
      const cur = info.get(p);
      if (cur) cur.last = e.t;
      else info.set(p, { first: e.t, last: e.t });
    }
    return info;
  }, [filtered]);

  const phaseSteps: PhaseStep[] = PHASES.map((title, i) => ({
    index: i + 1,
    title,
    status: !phaseInfo.has(i) ? "locked" : i === Math.max(...phaseInfo.keys()) ? "current" : "done",
  }));

  const jumpToPhase = (idx: number) => {
    const el = streamRef.current?.querySelector(`[data-phase-band="${idx}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleSub = (id: Subsystem) => {
    setEnabledSub((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const copyToNotebook = () => {
    appendTimelineToNotebook(
      filtered.map(
        (e) => `${formatSessionTime(e.t)} [${e.severity}] ${e.subsystem}: ${e.message}`,
      ),
    );
    setNotebookToast(true);
    window.setTimeout(() => setNotebookToast(false), 2000);
  };

  return (
    <div className="p-4 md:p-6">
      {/* page-local row-flash keyframes */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes rowflash {
            0% { background-color: rgba(45,212,200,0.10); }
            100% { background-color: transparent; }
          }
          @keyframes rowflash-bad {
            0% { background-color: rgba(240,82,79,0.15); }
            100% { background-color: transparent; }
          }
        }
      `}</style>

      {/* header */}
      <header className="mb-4 flex flex-wrap items-center gap-3">
        <h1 className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
          Live Timeline
        </h1>
        {paused ? (
          <button
            onClick={togglePause}
            className="flex items-center gap-1.5 rounded-full border border-warn/50 bg-warn/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-warn transition-colors hover:bg-warn/20"
          >
            <Play size={11} strokeWidth={1.5} />
            Paused{pendingCount > 0 ? ` — +${pendingCount} new` : ""}
          </button>
        ) : (
          <span className="flex items-center gap-1.5 rounded-full border border-go/40 bg-go/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-go">
            <span className="h-1.5 w-1.5 animate-led-warn rounded-full bg-go led-glow" />
            Streaming
          </span>
        )}
        <span className="font-mono text-[11px] tabular-nums text-faint">
          {filtered.length} event{filtered.length === 1 ? "" : "s"}
        </span>
        <div className="ml-auto flex items-center gap-2">
          {!paused && (
            <button
              onClick={togglePause}
              className="flex items-center gap-1.5 rounded-sm border border-line px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:border-line-bright hover:text-ink"
            >
              <Pause size={11} strokeWidth={1.5} />
              Pause
            </button>
          )}
          <button
            onClick={() => exportLog(filtered)}
            className="flex items-center gap-1.5 rounded-sm border border-line px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:border-line-bright hover:text-ink"
          >
            <Download size={11} strokeWidth={1.5} />
            Export .log
          </button>
          <button
            onClick={copyToNotebook}
            className="flex items-center gap-1.5 rounded-sm border border-line px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:border-line-bright hover:text-ink"
          >
            <NotebookPen size={11} strokeWidth={1.5} />
            {notebookToast ? "Added ✓" : "Copy to Notebook"}
          </button>
        </div>
      </header>

      <div className="flex flex-col gap-4 md:flex-row">
        {/* filter rail */}
        <aside className="w-full shrink-0 md:w-56">
          <Panel title="Filters" className="md:sticky md:top-16">
            {/* subsystem chips */}
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
              Subsystem
            </p>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {SUBSYSTEMS.map((sub) => {
                const active = enabledSub.has(sub.id);
                return (
                  <button
                    key={sub.id}
                    onClick={() => toggleSub(sub.id)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full border px-2 py-1 font-mono text-[10px] transition-colors",
                      active
                        ? "border-line-bright bg-panel-2 text-ink"
                        : "border-line text-faint hover:text-dim",
                    )}
                  >
                    <span className={cn("h-1.5 w-1.5 rounded-full", sub.dot, !active && "opacity-40")} />
                    {sub.label}
                    <span className="text-faint">{counts.get(sub.id) ?? 0}</span>
                  </button>
                );
              })}
            </div>

            {/* severity segmented */}
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
              Severity
            </p>
            <div className="mb-4 flex overflow-hidden rounded-sm border border-line">
              {SEV_FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSevMin(f.min)}
                  className={cn(
                    "flex-1 px-1 py-1.5 font-mono text-[9px] uppercase tracking-[0.06em] transition-colors",
                    sevMin === f.min
                      ? "bg-panel-2 text-trace"
                      : "text-faint hover:text-dim",
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* search */}
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
              Search
            </p>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="match message text…"
              className="mb-4 w-full rounded-sm border border-line bg-void px-2 py-1.5 font-mono text-[11px] text-ink outline-none transition-colors placeholder:text-faint focus:border-line-bright"
            />

            {/* phase jump */}
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
              Phase jump
            </p>
            <ol className="space-y-1">
              {phaseSteps.map((p, i) => (
                <li key={p.index}>
                  <button
                    onClick={() => jumpToPhase(i)}
                    disabled={!phaseInfo.has(i)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-sm px-1.5 py-1 text-left font-mono text-[10px] transition-colors disabled:cursor-not-allowed disabled:opacity-35",
                      p.status === "current" ? "text-trace" : "text-dim hover:text-ink",
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        p.status === "done" && "bg-trace",
                        p.status === "current" && "bg-trace-2 animate-led-warn",
                        p.status === "locked" && "bg-line",
                      )}
                    />
                    {p.title}
                  </button>
                </li>
              ))}
            </ol>
          </Panel>
        </aside>

        {/* event stream */}
        <div className="min-w-0 max-w-4xl flex-1">
          <Panel pad={false} className="overflow-hidden">
            <div ref={streamRef} className="max-h-[70dvh] overflow-y-auto">
              {newestFirst.length === 0 ? (
                <div className="flex flex-col items-center gap-3 px-6 py-14 text-center">
                  <img
                    src="/empty-runs.png"
                    alt=""
                    className="w-48 opacity-80"
                    onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                  />
                  <p className="max-w-sm text-sm leading-relaxed text-dim">
                    Nothing has happened yet. Power up the facility and the story
                    starts writing itself.
                  </p>
                  <Link
                    to="/console"
                    className="rounded-sm border border-trace/60 bg-trace/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-trace transition-colors hover:bg-trace/20"
                  >
                    Open Console
                  </Link>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {newestFirst.map((e, i) => {
                    const p = phaseOf(e);
                    // band when this row's phase differs from the next-newer row's
                    const newer = newestFirst[i - 1];
                    const newerPhase = newer ? phaseOf(newer) : -99;
                    const showBand =
                      p >= 0 && phaseInfo.has(p) && p !== (newerPhase >= 0 ? newerPhase : -99);
                    const info = p >= 0 ? phaseInfo.get(p) : undefined;
                    return (
                      <Fragment key={e.id}>
                        {showBand && info && (
                          <div
                            data-phase-band={p}
                            className={cn(
                              "sticky top-0 z-10 flex items-center gap-3 border-b border-line bg-shell/95 px-3 py-1.5 backdrop-blur-sm",
                              phaseSteps[p]?.status === "current" && "border-l-2 border-l-trace",
                            )}
                          >
                            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-dim">
                              Phase {p + 1} — {PHASES[p]}
                            </span>
                            <span className="h-px flex-1 bg-line" />
                            <span className="font-mono text-[9px] tabular-nums text-faint">
                              {formatSessionTime(info.last - info.first)} elapsed
                            </span>
                          </div>
                        )}
                        <TimelineRow
                          event={e}
                          query={query.trim()}
                          fresh={isFresh(e)}
                          onOpen={setSelected}
                        />
                      </Fragment>
                    );
                  })}
                </AnimatePresence>
              )}
            </div>
          </Panel>
          <p className="mt-2 font-mono text-[10px] text-faint">
            Newest first · click a row for detail · read the log before you touch the hardware
          </p>
        </div>
      </div>

      {/* detail drawer */}
      <Drawer
        open={selected !== null}
        onClose={() => setSelected(null)}
        title="Event detail"
      >
        {selected && (
          <div className="space-y-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                Timestamp
              </p>
              <p className="font-mono text-sm tabular-nums text-ink">
                {formatSessionTime(selected.t)}
              </p>
              <p className="font-mono text-[10px] text-faint">
                {new Date(selected.wall).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                Subsystem · severity
              </p>
              <p className="font-mono text-sm text-ink">
                {selected.subsystem} ·{" "}
                <span className={SEV_COLOR[selected.severity]}>{selected.severity}</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                Message
              </p>
              <p className="text-sm leading-relaxed text-ink">{selected.message}</p>
            </div>
            <FacilitySnapshot />
            {deepLink(selected) && (
              <Link
                to={deepLink(selected)!.to}
                onClick={() => setSelected(null)}
                className="inline-block rounded-sm border border-trace/60 bg-trace/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-trace transition-colors hover:bg-trace/20"
              >
                → {deepLink(selected)!.label}
              </Link>
            )}
          </div>
        )}
      </Drawer>
    </div>
  );
}
