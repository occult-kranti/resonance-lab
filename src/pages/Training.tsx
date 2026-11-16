import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  RotateCcw,
  TriangleAlert,
} from "lucide-react";
import { Panel, Modal } from "@/components/shared";
import { cn } from "@/lib/utils";
import { useSim, formatSessionTime } from "@/sim/store";
import {
  SECTIONS,
  TOTAL_ITEMS,
} from "@/components/training/checklist";
import type { CheckItem, CheckSection } from "@/components/training/checklist";
import { useTrainingStore } from "@/components/training/trainingStore";
import { emitUiEvent, shortHash } from "@/components/learning/simBus";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------------------------------------------------------------- */
/* Checkbox (locked → auto-verifying → verified)                     */
/* ---------------------------------------------------------------- */
function Checkbox({
  verified,
  lost,
  clickable,
  onToggle,
}: {
  verified: boolean;
  lost: boolean;
  clickable: boolean;
  onToggle?: () => void;
}) {
  return (
    <button
      type="button"
      disabled={!clickable}
      onClick={onToggle}
      aria-checked={verified}
      role="checkbox"
      title={
        clickable
          ? "Self-attested — click to toggle"
          : "Self-verifies against live facility state"
      }
      className={cn(
        "mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[3px] border transition-colors",
        verified
          ? lost
            ? "border-warn/70 bg-warn/10"
            : "border-go/70 bg-go/15"
          : clickable
            ? "border-line-bright bg-panel-2 hover:border-trace/60 cursor-pointer"
            : "border-line bg-void cursor-not-allowed",
      )}
    >
      <svg viewBox="0 0 12 12" className="h-3 w-3">
        <path
          d="M2 6.5L5 9.5L10 2.5"
          fill="none"
          stroke={lost ? "#f0b64c" : "#3ddc84"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="14"
          style={{
            strokeDashoffset: verified ? 0 : 14,
            transition: "stroke-dashoffset 300ms cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </svg>
    </button>
  );
}

/* ---------------------------------------------------------------- */
/* Item row                                                          */
/* ---------------------------------------------------------------- */
function ItemRow({
  item,
  isNext,
  flash,
}: {
  item: CheckItem;
  isNext: boolean;
  flash: boolean;
}) {
  const sim = useSim();
  const verified = useTrainingStore((s) => s.verified[item.id] !== undefined);
  const lost = useTrainingStore((s) => !!s.lost[item.id]);
  const attest = useTrainingStore((s) => s.attest);
  const unattest = useTrainingStore((s) => s.unattest);
  const operatorName = useTrainingStore((s) => s.operatorName);
  const setOperatorName = useTrainingStore((s) => s.setOperatorName);

  return (
    <motion.li
      animate={flash ? { backgroundColor: ["rgba(61,220,132,0.10)", "rgba(61,220,132,0)"] } : {}}
      transition={{ duration: 1 }}
      className="flex items-start gap-3 rounded-sm px-2 py-2"
    >
      <Checkbox
        verified={verified}
        lost={lost}
        clickable={item.kind === "attest"}
        onToggle={() =>
          verified ? unattest(item.id) : attest(item.id, sim.simTime)
        }
      />
      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "text-sm leading-snug",
            verified ? "text-faint line-through decoration-faint/40" : "text-ink",
          )}
        >
          {item.text}
          {item.kind === "attest" && (
            <span className="ml-2 rounded-sm border border-line px-1 py-px font-mono text-[8px] uppercase tracking-[0.12em] text-faint">
              self-attested
            </span>
          )}
        </p>
        {item.kind === "name" && (
          <div className="mt-1.5 flex items-center gap-2">
            <input
              value={operatorName}
              onChange={(e) => setOperatorName(e.target.value)}
              placeholder="OPERATOR NAME"
              maxLength={24}
              className="w-44 rounded-sm border border-line bg-void px-2 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink placeholder:text-faint focus:border-trace/60 focus:outline-none"
            />
            <span className="font-mono text-[10px] text-faint">
              {operatorName.trim().length >= 2 ? "SIGNED" : "UNSIGNED"}
            </span>
          </div>
        )}
        <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5">
          {item.live && (
            <span
              className={cn(
                "font-mono text-[10px] tabular-nums uppercase tracking-[0.08em]",
                verified ? "text-faint" : "text-dim",
              )}
            >
              {item.live(sim)}
            </span>
          )}
          {verified && (
            <span className="font-mono text-[10px] tabular-nums text-go">
              ✓ {formatSessionTime(useTrainingStore.getState().verified[item.id] ?? 0)}
            </span>
          )}
          {lost && (
            <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] text-warn">
              <TriangleAlert size={10} strokeWidth={1.5} />
              Condition lost — restore to re-clear
            </span>
          )}
        </div>
      </div>
      {item.route && (
        <Link
          to={item.route}
          className={cn(
            "mt-0.5 flex shrink-0 items-center gap-1 rounded-sm border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors",
            isNext && !verified
              ? "border-trace/60 bg-trace/10 text-trace animate-led-warn"
              : "border-line text-faint hover:border-line-bright hover:text-ink",
          )}
        >
          Go there
          <ArrowRight size={10} strokeWidth={1.5} />
        </Link>
      )}
    </motion.li>
  );
}

/* ---------------------------------------------------------------- */
/* Section accordion                                                 */
/* ---------------------------------------------------------------- */
function Section({
  section,
  open,
  onToggle,
  nextItemId,
  flashIds,
}: {
  section: CheckSection;
  open: boolean;
  onToggle: () => void;
  nextItemId: string | null;
  flashIds: Set<string>;
}) {
  const verified = useTrainingStore((s) => s.verified);
  const doneCount = section.items.filter(
    (i) => verified[i.id] !== undefined,
  ).length;
  const clear = doneCount === section.items.length;

  return (
    <Panel accent={section.accent} pad={false}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-3 px-4 py-3 text-left"
      >
        <h2 className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-dim">
          {section.title}
        </h2>
        <span className="font-mono text-[10px] tabular-nums text-faint">
          {doneCount}/{section.items.length}
        </span>
        {clear && (
          <motion.span
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 480, damping: 20 }}
            className="rounded-full border border-go/60 bg-go/10 px-2 py-0.5 font-display text-[9px] font-bold uppercase tracking-[0.14em] text-go"
          >
            Section clear
          </motion.span>
        )}
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={cn(
            "ml-auto text-faint transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="overflow-hidden"
          >
            <ul className="border-t border-line px-2 py-1.5">
              {section.items.map((item) => (
                <ItemRow
                  key={item.id}
                  item={item}
                  isNext={item.id === nextItemId}
                  flash={flashIds.has(item.id)}
                />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </Panel>
  );
}

/* ---------------------------------------------------------------- */
/* Page                                                              */
/* ---------------------------------------------------------------- */
export default function Training() {
  const sim = useSim();
  const verified = useTrainingStore((s) => s.verified);
  const lost = useTrainingStore((s) => s.lost);
  const operatorName = useTrainingStore((s) => s.operatorName);
  const sessionId = useSim((s) => s.sessionId);

  const [openSections, setOpenSections] = useState<string[]>([SECTIONS[0].id]);
  const [flashIds, setFlashIds] = useState<Set<string>>(new Set());
  const [confirmReset, setConfirmReset] = useState(false);
  const flashTimers = useRef<number[]>([]);

  const verifiedCount = Object.keys(verified).length;
  const frac = verifiedCount / TOTAL_ITEMS;
  const allDone = verifiedCount === TOTAL_ITEMS;

  // first unverified item across all sections (guided focus)
  const nextItem =
    SECTIONS.flatMap((s) => s.items).find((i) => verified[i.id] === undefined) ??
    null;

  /* ---- live verification engine ---- */
  useEffect(() => {
    const st = useTrainingStore.getState();
    for (const item of SECTIONS.flatMap((s) => s.items)) {
      const isVerified = st.verified[item.id] !== undefined;
      if (item.kind === "attest") continue;

      const ok =
        item.kind === "name"
          ? st.operatorName.trim().length >= 2
          : (item.pred?.(sim) ?? false);

      if (!isVerified && ok) {
        st.verify(item.id, sim.simTime);
        emitUiEvent(
          "experiment",
          "NOMINAL",
          `Checklist verified: ${item.text.replace(/ — self-attested$/, "")}`,
        );
        setFlashIds((prev) => new Set(prev).add(item.id));
        const t = window.setTimeout(() => {
          setFlashIds((prev) => {
            const next = new Set(prev);
            next.delete(item.id);
            return next;
          });
        }, 1100);
        flashTimers.current.push(t);
      } else if (isVerified && item.kind !== "name") {
        // re-verify (not un-verify): condition lost annotation
        if (!ok) st.markLost(item.id);
        else if (st.lost[item.id]) st.clearLost(item.id);
      }
    }
  }, [sim]);

  useEffect(
    () => () => {
      flashTimers.current.forEach((t) => window.clearTimeout(t));
    },
    [],
  );

  /* ---- auto-expand the first section that still has open items ---- */
  useEffect(() => {
    const current = SECTIONS.find((s) =>
      s.items.some((i) => verified[i.id] === undefined),
    );
    if (current && !openSections.includes(current.id)) {
      setOpenSections((prev) => [...prev, current.id]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verified]);

  const lostCount = Object.keys(lost).length;

  return (
    <div className="mx-auto max-w-3xl p-4 md:p-6">
      {/* header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
            Training &amp; Checklist
          </h1>
          <p className="mt-1 text-sm text-dim">
            LOC-1, step by step. The checklist checks the lab — not your memory.
          </p>
        </div>
        <button
          onClick={() => setConfirmReset(true)}
          className="flex items-center gap-1.5 rounded-sm border border-line px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:border-line-bright hover:text-ink"
        >
          <RotateCcw size={11} strokeWidth={1.5} />
          Reset checklist
        </button>
      </div>

      {/* progress */}
      <div className="mt-4">
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-[11px] tabular-nums text-dim">
            {verifiedCount} of {TOTAL_ITEMS} verified
          </span>
          {lostCount > 0 && (
            <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] text-warn">
              <TriangleAlert size={10} strokeWidth={1.5} />
              {lostCount} condition{lostCount > 1 ? "s" : ""} lost
            </span>
          )}
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-line">
          <motion.div
            className="h-full rounded-full bg-trace"
            style={{ boxShadow: "0 0 8px rgba(45,212,200,0.5)" }}
            initial={false}
            animate={{ width: `${frac * 100}%` }}
            transition={{ duration: 0.5, ease: EASE }}
          />
        </div>
      </div>

      {/* sections */}
      <div className="mt-5 space-y-3">
        {SECTIONS.map((section) => (
          <Section
            key={section.id}
            section={section}
            open={openSections.includes(section.id)}
            onToggle={() =>
              setOpenSections((prev) =>
                prev.includes(section.id)
                  ? prev.filter((id) => id !== section.id)
                  : [...prev, section.id],
              )
            }
            nextItemId={nextItem?.id ?? null}
            flashIds={flashIds}
          />
        ))}
      </div>

      {/* certification card */}
      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mt-5"
          >
            <Panel accent="go" bezel>
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-go/60 bg-go/10 text-go led-glow">
                  <BadgeCheck size={22} strokeWidth={1.5} />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-go readout-glow">
                    Operator qualified — LOC-1 (Simulated)
                  </h2>
                  <p className="mt-1 font-mono text-[11px] tabular-nums text-dim">
                    OP {operatorName.trim() || "UNSIGNED"} · SERIAL QL-
                    {shortHash(`${sessionId}-qualified`, 6)} ·{" "}
                    {new Date().toISOString().slice(0, 10)} · {verifiedCount}/
                    {TOTAL_ITEMS} VERIFIED
                  </p>
                  <p className="mt-1.5 text-[12px] italic leading-relaxed text-faint">
                    Qualifies you to run a fictional experiment beautifully. Real
                    labs require real supervision.
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-trace">
                    Challenge tiers unlocked — see Challenge Mode
                  </p>
                </div>
              </div>
            </Panel>
          </motion.div>
        )}
      </AnimatePresence>

      {/* reset confirm */}
      <Modal
        open={confirmReset}
        onClose={() => setConfirmReset(false)}
        title="Reset checklist"
      >
        <p className="text-sm leading-relaxed text-dim">
          This wipes all {TOTAL_ITEMS} checklist verifications and condition-lost
          annotations. The facility session is untouched — only the training
          record is cleared.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => setConfirmReset(false)}
            className="rounded-sm border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-dim transition-colors hover:text-ink"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              useTrainingStore.getState().reset();
              setConfirmReset(false);
              setOpenSections([SECTIONS[0].id]);
            }}
            className="rounded-sm border border-bad/60 bg-bad/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-bad transition-colors hover:bg-bad/20"
          >
            Wipe checklist
          </button>
        </div>
      </Modal>
    </div>
  );
}
