import { useCallback, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Panel from "@/components/shared/Panel";
import PhaseStepper from "@/components/shared/PhaseStepper";
import type { PhaseStep } from "@/components/shared/PhaseStepper";
import GradedBadge from "@/components/shared/GradedBadge";
import Tooltip from "@/components/shared/Tooltip";
import { Modal } from "@/components/shared";
import { cn } from "@/lib/utils";
import {
  QUALITY_PRESSURE_HPA,
  computeGrade,
  simActions,
  useSim,
} from "@/sim/store";
import type { RunRecord } from "@/sim/store";
import { notebookActions } from "@/components/notebook/store";
import RunControl from "@/components/runs/RunControl";
import RunLog from "@/components/runs/RunLog";
import StatsBand from "@/components/runs/StatsBand";
import { runGrade, validPairs } from "@/components/runs/utils";
import {
  clearSchedule,
  extendSchedule,
  generateSchedule,
  loadRunMeta,
  loadSchedule,
  saveRunMeta,
  saveSchedule,
} from "@/components/runs/schedule";
import type { RunMeta, Schedule } from "@/components/runs/schedule";

const PHASE_TITLES = [
  "Power up",
  "Pump down",
  "Thermal stabilize",
  "Lock reference",
  "Calibrate & sweep",
  "Blinded ABBA blocks",
  "Unblind & grade",
];

const cascade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Runs() {
  const sessionId = useSim((s) => s.sessionId);
  // key-remount on session reset: schedule & run metadata re-initialize
  // from storage (and are discarded if they belonged to the old session)
  return <RunsPage key={sessionId} sessionId={sessionId} />;
}

function RunsPage({ sessionId }: { sessionId: string }) {
  const runs = useSim((s) => s.blinding.runs);
  const revealed = useSim((s) => s.blinding.revealed);
  const labelToSlot = useSim((s) => s.blinding.labelToSlot);
  const events = useSim((s) => s.events);
  const power = useSim((s) => s.power);
  const pressure = useSim((s) => s.pressure);
  const thermalStable = useSim((s) => s.thermalStable);
  const clock = useSim((s) => s.clock);
  const vnaCalibrated = useSim((s) => s.vnaCalibrated);
  const lastFit = useSim((s) => s.lastFit);
  const grade = useSim(computeGrade);

  const [schedule, setScheduleState] = useState<Schedule | null>(() =>
    loadSchedule(sessionId),
  );
  const [meta, setMetaState] = useState<Record<number, RunMeta>>(() =>
    loadRunMeta(sessionId),
  );
  const metaRef = useRef(meta);

  const [revealModal, setRevealModal] = useState<null | "normal" | "early">(null);
  const [regenModal, setRegenModal] = useState(false);

  const setSchedule = useCallback((s: Schedule | null) => {
    setScheduleState(s);
    if (s) saveSchedule(s);
    else clearSchedule();
  }, []);

  const setMeta = useCallback(
    (m: Record<number, RunMeta>) => {
      metaRef.current = m;
      setMetaState(m);
      saveRunMeta(sessionId, m);
    },
    [sessionId],
  );

  /* ---------------- protocol phases (live) ---------------- */
  const pairs = useMemo(() => validPairs(runs), [runs]);
  const steps: PhaseStep[] = useMemo(() => {
    const done = [
      power === "FACILITY_ON",
      pressure < QUALITY_PRESSURE_HPA,
      thermalStable,
      clock === "LOCKED",
      vnaCalibrated && (lastFit !== null || runs.length > 0),
      pairs >= 3,
      revealed,
    ];
    const firstOpen = done.findIndex((d) => !d);
    return PHASE_TITLES.map((title, i) => ({
      index: i + 1,
      title,
      status: done[i] ? "done" : i === firstOpen ? "current" : "locked",
    }));
  }, [power, pressure, thermalStable, clock, vnaCalibrated, lastFit, runs, pairs, revealed]);

  /* ---------------- protocol integrity chip ---------------- */
  const compromised = useMemo(
    () => events.some((e) => e.message.includes("MANUALLY")),
    [events],
  );
  const integrity = compromised
    ? { label: "COMPROMISED", cls: "border-bad/60 bg-bad/10 text-bad" }
    : revealed
      ? { label: "UNBLINDED", cls: "border-trace-2/60 bg-trace-2/10 text-trace-2" }
      : { label: "BLIND INTACT", cls: "border-go/60 bg-go/10 text-go" };

  /* ---------------- actions ---------------- */

  const commitRun = useCallback(
    (note: string): boolean => {
      const sched = schedule;
      if (!sched) return false;
      const slot = useSim.getState().blinding.runs.length;
      const label = sched.seq[Math.min(slot, sched.seq.length - 1)];
      const run = simActions.recordRun(label);
      if (!run) return false;
      setMeta({
        ...metaRef.current,
        [run.id]: { slot, note: note || undefined },
      });
      return true;
    },
    [schedule, setMeta],
  );

  const sendToNotebook = useCallback(
    (run: RunRecord) => {
      const m = metaRef.current[run.id];
      const slot = (m?.slot ?? run.id - 1) + 1;
      const pos = revealed
        ? `position ${labelToSlot[run.label] === 0 ? "P1" : "P2"}`
        : "position blinded";
      notebookActions.addEntry({
        t: useSim.getState().simTime,
        tag: "run",
        body:
          `Run #${run.id} forwarded from the Run Log — schedule slot ${slot}, ${pos}. ` +
          `f₀ = ${(run.f0 / 1000).toFixed(3)} ± ${(run.f0Sigma / 1000).toFixed(4)} kHz, ` +
          `Q = ${Math.round(run.q).toLocaleString()}. Grade ${runGrade(run)}.` +
          (m?.note ? ` Operator note: “${m.note}”` : ""),
      });
      setMeta({
        ...metaRef.current,
        [run.id]: { ...metaRef.current[run.id], slot: m?.slot ?? run.id - 1, sentToNotebook: true },
      });
    },
    [revealed, labelToSlot, setMeta],
  );

  const regenerate = () => {
    setSchedule(generateSchedule(sessionId));
    setRegenModal(false);
  };

  return (
    <div className="p-4 md:p-6">
      <div className="grid grid-cols-12 gap-4">
        {/* -------- protocol status band -------- */}
        <motion.div
          className="col-span-12"
          variants={cascade}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <Panel title="LOC-1 — Blinded A/B position protocol" accent="trace-2" bezel>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="min-w-0 flex-1">
                <PhaseStepper steps={steps} />
              </div>
              <div className="flex shrink-0 items-center gap-3 border-t border-line pt-3 lg:flex-col lg:items-end lg:border-l lg:border-t-0 lg:pl-4 lg:pt-0">
                <GradedBadge grade={grade} />
                <Tooltip
                  content={
                    compromised
                      ? "Blinding was broken early — Timeline recorded it"
                      : revealed
                        ? "Positions revealed after staged gates G1–G4 cleared"
                        : "Position assignments sealed"
                  }
                >
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em]",
                      integrity.cls,
                    )}
                  >
                    {integrity.label}
                  </span>
                </Tooltip>
              </div>
            </div>
          </Panel>
        </motion.div>

        {/* -------- run log -------- */}
        <motion.div
          className="col-span-12 lg:col-span-7"
          variants={cascade}
          initial="hidden"
          animate="show"
          custom={1}
        >
          <RunLog
            runs={runs}
            meta={meta}
            revealed={revealed}
            labelToSlot={labelToSlot}
            onSendToNotebook={sendToNotebook}
          />
        </motion.div>

        {/* -------- run control -------- */}
        <motion.div
          className="col-span-12 lg:col-span-5"
          variants={cascade}
          initial="hidden"
          animate="show"
          custom={2}
        >
          <RunControl
            schedule={schedule}
            revealed={revealed}
            labelToSlot={labelToSlot}
            runsCount={runs.length}
            onGenerate={() => setSchedule(generateSchedule(sessionId))}
            onRegenerateRequest={() => {
              if (runs.length === 0) regenerate();
              else setRegenModal(true);
            }}
            onExtend={() => {
              if (schedule) setSchedule(extendSchedule(schedule));
            }}
            onCommit={commitRun}
          />
        </motion.div>

        {/* -------- stats & unblinding -------- */}
        <motion.div
          className="col-span-12"
          variants={cascade}
          initial="hidden"
          animate="show"
          custom={3}
        >
          <StatsBand
            runs={runs}
            revealed={revealed}
            labelToSlot={labelToSlot}
            onRevealRequest={(early) => setRevealModal(early ? "early" : "normal")}
          />
        </motion.div>
      </div>

      {/* -------- reveal confirm modals -------- */}
      <Modal
        open={revealModal === "normal"}
        onClose={() => setRevealModal(null)}
        title="Reveal positions"
      >
        <p className="text-sm leading-relaxed text-dim">
          All staged gates have cleared: G1 hash verification, G2
          sham/injection recovery, G3 blinded diagnostics, and G4 — the B=40
          ABBA block schedule complete. Unblinding flips every schedule chip to
          its physical position and splits the scatter into P1/P2 groups. This
          cannot be undone for this session.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => setRevealModal(null)}
            className="rounded-sm border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-dim transition-colors hover:text-ink"
          >
            Stay blind
          </button>
          <button
            onClick={() => {
              simActions.revealBlinding(false);
              setRevealModal(null);
            }}
            className="rounded-sm border border-go/60 bg-go/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-go transition-colors hover:bg-go/20"
          >
            Reveal positions
          </button>
        </div>
      </Modal>

      <Modal
        open={revealModal === "early"}
        onClose={() => setRevealModal(null)}
        title="Reveal early — protocol warning"
      >
        <p className="text-sm leading-relaxed text-dim">
          The staged gates are not all clear yet — G4 (B=40 ABBA blocks
          complete) is still open. Peeking now{" "}
          <span className="text-bad">compromises the protocol</span> — the
          Timeline will record it, the integrity chip flips to COMPROMISED, and
          the session grade is capped.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => setRevealModal(null)}
            className="rounded-sm border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-dim transition-colors hover:text-ink"
          >
            Stay blind
          </button>
          <button
            onClick={() => {
              simActions.revealBlinding(true);
              setRevealModal(null);
            }}
            className="rounded-sm border border-bad/60 bg-bad/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-bad transition-colors hover:bg-bad/20"
          >
            Reveal anyway
          </button>
        </div>
      </Modal>

      {/* -------- regenerate confirm -------- */}
      <Modal
        open={regenModal}
        onClose={() => setRegenModal(false)}
        title="Regenerate schedule"
      >
        <p className="text-sm leading-relaxed text-dim">
          Runs are already committed against this schedule. Committed runs keep
          their slots; only the upcoming sequence is reshuffled. The blinded
          assignment itself does not change.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => setRegenModal(false)}
            className="rounded-sm border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-dim transition-colors hover:text-ink"
          >
            Cancel
          </button>
          <button
            onClick={regenerate}
            className="rounded-sm border border-trace/60 bg-trace/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-trace transition-colors hover:bg-trace/20"
          >
            Reshuffle upcoming
          </button>
        </div>
      </Modal>
    </div>
  );
}
