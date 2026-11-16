import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Ban,
  Bot,
  Check,
  Eraser,
  Lock,
  Play,
  RotateCcw,
  Trophy,
  Undo2,
} from "lucide-react";
import { GradedBadge, Modal, Panel, StatusLED } from "@/components/shared";
import type { LedState } from "@/components/shared";
import { cn } from "@/lib/utils";
import {
  computeGrade,
  formatSessionTime,
  simActions,
  useSim,
} from "@/sim/store";
import type { FaultId, Grade } from "@/sim/store";
import {
  SCENARIOS,
  TIER_ORDER,
  gradeFromScore,
  tierRequirement,
  tierUnlocked,
  totalScore,
} from "@/components/challenge/scenarios";
import type {
  ChallengeCtx,
  Scenario,
  Tier,
} from "@/components/challenge/scenarios";
import { useChallengeStore } from "@/components/challenge/challengeStore";
import type { RunState } from "@/components/challenge/challengeStore";
import { useTrainingStore } from "@/components/training/trainingStore";
import { TOTAL_ITEMS } from "@/components/training/checklist";
import { useFaultUiStore } from "@/components/faults/faultUiStore";
import {
  emitUiEvent,
  restoreSim,
  shortHash,
  snapshotSim,
} from "@/components/learning/simBus";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------------------------------------------------------------- */
/* helpers                                                           */
/* ---------------------------------------------------------------- */
function buildCtx(s: ReturnType<typeof useSim.getState>, run: RunState): ChallengeCtx {
  return {
    s,
    startSimTime: run.startSimTime,
    startRuns: run.startRuns,
    sweepsUsed: s.events.filter(
      (e) => e.t >= run.startSimTime && e.message.startsWith("Sweep complete"),
    ).length,
    wrongCalls: Math.max(
      0,
      useFaultUiStore.getState().attempts - run.startAttempts,
    ),
    injectedFault: run.injectedFault,
    faultClearedAt: run.faultClearedAt,
  };
}

function CountUp({ value, duration = 800 }: { value: number; duration?: number }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / duration);
      setV(Math.round(value * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);
  return <>{v.toLocaleString()}</>;
}

function Pips({ n }: { n: number }) {
  return (
    <span className="flex gap-1" aria-label={`difficulty ${n} of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            i < n ? "bg-trace-2 led-glow text-trace-2" : "bg-line",
          )}
        />
      ))}
    </span>
  );
}

function MiniLeds() {
  const power = useSim((s) => s.power);
  const pressure = useSim((s) => s.pressure);
  const thermalStable = useSim((s) => s.thermalStable);
  const thermalEnabled = useSim((s) => s.thermalEnabled);
  const clock = useSim((s) => s.clock);
  const anyFault = useSim((s) => Object.values(s.faults).some(Boolean));
  const pwr: LedState = power === "FACILITY_ON" ? "on" : power === "BOOTING" ? "warn" : "off";
  const vac: LedState = pressure < 1e-3 ? "on" : pressure < 3 ? "warn" : "off";
  const thm: LedState = thermalStable ? "on" : thermalEnabled ? "warn" : "off";
  const clk: LedState = clock === "LOCKED" ? "on" : clock === "COLD" ? "off" : "warn";
  const saf: LedState = anyFault ? "fault" : "on";
  return (
    <div className="flex items-center gap-3">
      <StatusLED state={pwr} label="PWR" />
      <StatusLED state={vac} label="VAC" />
      <StatusLED state={thm} label="THM" />
      <StatusLED state={clk} label="CLK" />
      <StatusLED state={saf} label="SAF" />
    </div>
  );
}

function AxisBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-0 flex-1">
      <div className="flex justify-between font-mono text-[9px] uppercase tracking-[0.12em]">
        <span className="text-faint">{label}</span>
        <span className="tabular-nums text-dim">{Math.round(value)}</span>
      </div>
      <div className="mt-1 h-1 overflow-hidden rounded-full bg-line">
        <motion.div
          className="h-full rounded-full bg-trace"
          initial={false}
          animate={{ width: `${Math.max(0, Math.min(100, value))}%` }}
          transition={{ duration: 0.25, ease: "linear" }}
        />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Finish card                                                       */
/* ---------------------------------------------------------------- */
function FinishCard({
  sc,
  run,
  onRetry,
  onRestore,
}: {
  sc: Scenario;
  run: RunState;
  onRetry: () => void;
  onRestore: () => void;
}) {
  const f = run.finish!;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, ease: EASE }}
    >
      <Panel
        accent={f.completed ? "go" : "bad"}
        bezel
        title={f.completed ? "Challenge complete" : "Time expired"}
      >
        <div className="flex flex-wrap items-center gap-5">
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 17, delay: 0.15 }}
          >
            <GradedBadge grade={f.grade} />
          </motion.div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              Total score
            </p>
            <p className="font-mono text-3xl font-bold tabular-nums text-ink readout-glow">
              <CountUp value={f.total} />
            </p>
          </div>
          <div className="font-mono text-[11px] tabular-nums text-dim">
            <p>elapsed {formatSessionTime(f.elapsed)}</p>
            <p>par {formatSessionTime(sc.par)}</p>
          </div>
          {f.isBest && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.4, 1] }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="rounded-full border border-go/60 bg-go/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-go led-glow"
            >
              New best
            </motion.span>
          )}
        </div>

        {/* per-axis count-up bars */}
        <div className="mt-4 space-y-2">
          {sc.axes.map((axis, i) => {
            const val = [f.scores.time, f.scores.quality, f.scores.economy][i];
            return (
              <div key={axis} className="flex items-center gap-3">
                <span className="w-28 shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                  {axis}
                </span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                  <motion.div
                    className="h-full rounded-full bg-trace"
                    initial={{ width: 0 }}
                    animate={{ width: `${val}%` }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: EASE }}
                  />
                </div>
                <span className="w-10 text-right font-mono text-[11px] tabular-nums text-ink">
                  <CountUp value={Math.round(val)} />
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={onRetry}
            className="flex items-center gap-1.5 rounded-sm border border-trace/60 bg-trace/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-trace transition-colors hover:bg-trace/20"
          >
            <RotateCcw size={11} strokeWidth={1.5} />
            Retry
          </button>
          <button
            onClick={onRestore}
            className="flex items-center gap-1.5 rounded-sm border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-dim transition-colors hover:border-line-bright hover:text-ink"
          >
            <Undo2 size={11} strokeWidth={1.5} />
            Restore session
          </button>
        </div>
      </Panel>
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/* Active-challenge HUD (replaces the grid while running)            */
/* ---------------------------------------------------------------- */
function Hud({
  sc,
  run,
  onAbort,
  onRetry,
  onRestore,
}: {
  sc: Scenario;
  run: RunState;
  onAbort: () => void;
  onRetry: () => void;
  onRestore: () => void;
}) {
  const sim = useSim();
  const ctx = buildCtx(sim, run);
  const elapsed = Math.max(0, sim.simTime - run.startSimTime);
  const overPar = elapsed > 0.8 * sc.par;
  const remaining = sc.timeLimit !== null ? Math.max(0, sc.timeLimit - elapsed) : null;
  const grade = computeGrade(sim);
  const live = sc.scores(ctx);

  if (run.finish) {
    return <FinishCard sc={sc} run={run} onRetry={onRetry} onRestore={onRestore} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="space-y-4"
    >
      {/* top band */}
      <Panel accent="trace-2" bezel pad={false}>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 px-4 py-3">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
              {sc.tier} · live
            </p>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
              {sc.title}
            </h2>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
              {remaining !== null ? "remaining" : "elapsed"}
            </p>
            <p
              className={cn(
                "font-mono text-2xl font-bold tabular-nums leading-none",
                overPar || (remaining !== null && remaining < 60)
                  ? "text-warn"
                  : "text-ink readout-glow",
              )}
            >
              {formatSessionTime(remaining ?? elapsed)}
            </p>
          </div>
          <div className="flex min-w-52 flex-1 items-center gap-4">
            <AxisBar label={sc.axes[0]} value={live.time} />
            <AxisBar label={sc.axes[1]} value={live.quality} />
            <AxisBar label={sc.axes[2]} value={live.economy} />
          </div>
          <GradedBadge grade={grade} />
          <button
            onClick={onAbort}
            className="flex items-center gap-1.5 rounded-sm border border-bad/60 bg-bad/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-bad transition-colors hover:bg-bad/20"
          >
            <Ban size={11} strokeWidth={1.5} />
            Abort
          </button>
        </div>
      </Panel>

      <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
        {/* objectives */}
        <Panel title="Objectives — auto-verified">
          <ul className="space-y-2">
            {sc.objectives.map((o) => {
              const done = o.done(ctx);
              return (
                <li key={o.id} className="flex items-center gap-2.5 text-sm">
                  <span
                    className={cn(
                      "flex h-4 w-4 items-center justify-center rounded-[3px] border",
                      done ? "border-go/70 bg-go/15" : "border-line bg-void",
                    )}
                  >
                    {done && <Check size={10} strokeWidth={2.5} className="text-go" />}
                  </span>
                  <span className={done ? "text-faint line-through decoration-faint/40" : "text-ink"}>
                    {o.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </Panel>

        {/* facility mini status + copilot gag */}
        <div className="space-y-4">
          <Panel title="Facility">
            <MiniLeds />
          </Panel>
          <Panel>
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
              <Bot size={12} strokeWidth={1.5} />
              Copilot muted — you're on your own
            </p>
          </Panel>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/* Page                                                              */
/* ---------------------------------------------------------------- */
export default function Challenge() {
  const sim = useSim();
  const run = useChallengeStore((s) => s.run);
  const bests = useChallengeStore((s) => s.bests);
  const trainingVerified = useTrainingStore((s) => s.verified);
  const trainingFrac = Object.keys(trainingVerified).length / TOTAL_ITEMS;

  const [tier, setTier] = useState<Tier>("CADET");
  const [confirmStart, setConfirmStart] = useState<Scenario | null>(null);
  const [confirmAbort, setConfirmAbort] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

  const activeScenario = run
    ? (SCENARIOS.find((s) => s.id === run.scenarioId) ?? null)
    : null;

  /* ---- lifecycle: begin / finish / abort / restore ---- */
  const begin = (sc: Scenario, checkpoint?: Record<string, unknown>) => {
    const cp = checkpoint ?? snapshotSim();
    simActions.resetSession();
    const { injectedFault } = sc.setup();
    const s = useSim.getState();
    useChallengeStore.getState().startRun({
      scenarioId: sc.id,
      startSimTime: s.simTime,
      startRuns: s.blinding.runs.length,
      startAttempts: useFaultUiStore.getState().attempts,
      checkpoint: cp,
      injectedFault,
      faultClearedAt: null,
      finish: null,
    });
    emitUiEvent("experiment", "NOMINAL", `Challenge started: ${sc.title} (${sc.tier})`);
  };

  const finishRun = (completed: boolean) => {
    const st = useChallengeStore.getState();
    const r = st.run;
    if (!r || r.finish) return;
    const sc = SCENARIOS.find((s) => s.id === r.scenarioId)!;
    const ctx = buildCtx(useSim.getState(), r);
    const scores = sc.scores(ctx);
    const total = completed
      ? totalScore(scores)
      : Math.round(totalScore(scores) * 0.3);
    const grade: Grade = gradeFromScore(total, completed);
    const isBest = st.recordBest(sc.id, {
      score: total,
      grade,
      date: new Date().toISOString().slice(0, 10),
      hash: shortHash(`${sc.id}:${useSim.getState().sessionId}:${r.injectedFault ?? "none"}`),
    });
    st.patchRun({
      finish: {
        completed,
        scores,
        total,
        grade,
        elapsed: ctx.s.simTime - r.startSimTime,
        isBest,
      },
    });
    emitUiEvent(
      "experiment",
      completed ? "NOMINAL" : "WARNING",
      `Challenge ${completed ? "complete" : "timed out"}: ${sc.title} — score ${total}, grade ${grade}${isBest ? " (new best)" : ""}`,
    );
  };

  const abort = () => {
    const r = useChallengeStore.getState().run;
    if (r?.checkpoint) restoreSim(r.checkpoint);
    if (r?.injectedFault) useFaultUiStore.getState().noteClear(r.injectedFault);
    useChallengeStore.getState().endRun();
    emitUiEvent("experiment", "ADVISORY", "Challenge aborted — session checkpoint restored");
    setConfirmAbort(false);
  };

  const restore = () => {
    const r = useChallengeStore.getState().run;
    if (r?.checkpoint) restoreSim(r.checkpoint);
    useChallengeStore.getState().endRun();
  };

  const retry = () => {
    const r = useChallengeStore.getState().run;
    if (!r) return;
    const sc = SCENARIOS.find((s) => s.id === r.scenarioId)!;
    const cp = r.checkpoint ?? undefined;
    useChallengeStore.getState().endRun();
    begin(sc, cp);
  };

  /* ---- per-tick engine: mid-run fault injection, clear detection,
         completion + timeout ---- */
  useEffect(() => {
    const r = useChallengeStore.getState().run;
    if (!r || r.finish || !activeScenario) return;
    const ctx = buildCtx(sim, r);
    const patch = useChallengeStore.getState().patchRun;

    if (activeScenario.onTick) {
      activeScenario.onTick(ctx, (id: FaultId) => {
        simActions.injectFault(id);
        useFaultUiStore.getState().noteInject(id, sim.simTime);
        patch({ injectedFault: id });
      });
    }
    if (
      r.injectedFault &&
      !sim.faults[r.injectedFault] &&
      r.faultClearedAt === null
    ) {
      patch({ faultClearedAt: sim.simTime });
    }
    const elapsed = sim.simTime - r.startSimTime;
    if (activeScenario.complete(ctx)) finishRun(true);
    else if (activeScenario.timeLimit !== null && elapsed >= activeScenario.timeLimit)
      finishRun(false);
  }, [sim, activeScenario]);

  const tierLocked = (t: Tier) => !tierUnlocked(t, trainingFrac);
  const shown = SCENARIOS.filter((s) => s.tier === tier);

  return (
    <div className="mx-auto max-w-6xl p-4 md:p-6">
      {/* header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
            Challenge Mode
          </h1>
          <p className="mt-1 text-sm text-dim">
            The same lab, with a clock and consequences.
          </p>
        </div>
        {/* tier tabs */}
        <div className="relative flex rounded-sm border border-line bg-void p-0.5">
          {TIER_ORDER.map((t) => {
            const locked = tierLocked(t);
            return (
              <button
                key={t}
                onClick={() => !locked && setTier(t)}
                disabled={locked}
                title={locked ? (tierRequirement(t) ?? undefined) : undefined}
                className={cn(
                  "relative flex items-center gap-1.5 rounded-[3px] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors",
                  tier === t ? "text-trace" : locked ? "text-faint/50" : "text-faint hover:text-dim",
                  locked && "cursor-not-allowed",
                )}
              >
                {tier === t && (
                  <motion.span
                    layoutId="tier-pill"
                    className="absolute inset-0 rounded-[3px] bg-trace/15"
                    transition={{ duration: 0.2, ease: EASE }}
                  />
                )}
                <span className="relative flex items-center gap-1.5">
                  {locked && <Lock size={10} strokeWidth={1.5} />}
                  {t}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* locked-tier requirement chip */}
      {tierLocked(tier) && (
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-warn">
          {tierRequirement(tier)} — current {Math.round(trainingFrac * 100)}%
        </p>
      )}

      {/* HUD or grid */}
      <div className="mt-5">
        {run && activeScenario ? (
          <Hud
            sc={activeScenario}
            run={run}
            onAbort={() => setConfirmAbort(true)}
            onRetry={retry}
            onRestore={restore}
          />
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {shown.map((sc, i) => {
              const best = bests[sc.id];
              return (
                <motion.div
                  key={sc.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.07, ease: EASE }}
                >
                  <Panel className="h-full">
                    <div className="flex items-center justify-between">
                      <Pips n={sc.pips} />
                      {best && (
                        <span className="flex items-center gap-1.5 rounded-full border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-dim">
                          <Trophy size={9} strokeWidth={1.5} className="text-trace-2" />
                          best {best.score.toLocaleString()} · {best.grade}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 font-display text-sm font-semibold uppercase tracking-[0.1em] text-ink">
                      {sc.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-dim">
                      {sc.briefing}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[9px] uppercase tracking-[0.1em] text-faint">
                      {sc.axes.map((a) => (
                        <span key={a}>{a}</span>
                      ))}
                      <span>· par {formatSessionTime(sc.par)}</span>
                      {sc.timeLimit !== null && (
                        <span className="text-warn">
                          · hard limit {formatSessionTime(sc.timeLimit)}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setConfirmStart(sc)}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-sm border border-trace/60 bg-trace/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-trace transition-colors hover:bg-trace/20"
                    >
                      <Play size={11} strokeWidth={1.5} />
                      Start
                    </button>
                  </Panel>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* personal bests */}
      <div className="mt-6">
        <Panel
          title="Personal bests"
          right={
            <button
              onClick={() => setConfirmClear(true)}
              className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.12em] text-faint transition-colors hover:text-bad"
            >
              <Eraser size={10} strokeWidth={1.5} />
              Clear history
            </button>
          }
        >
          {Object.keys(bests).length === 0 ? (
            <p className="text-sm text-dim">
              No scores yet. The leaderboard is you vs. you — the honest kind.
            </p>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-line font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
                  <th className="py-1.5 pr-3 font-medium">Scenario</th>
                  <th className="py-1.5 pr-3 font-medium">Best</th>
                  <th className="py-1.5 pr-3 font-medium">Grade</th>
                  <th className="py-1.5 pr-3 font-medium">Date</th>
                  <th className="py-1.5 font-medium">Cond.</th>
                </tr>
              </thead>
              <tbody>
                {SCENARIOS.filter((s) => bests[s.id]).map((s) => (
                  <tr
                    key={s.id}
                    className="border-b border-line/50 font-mono text-[11px] text-dim"
                  >
                    <td className="py-1.5 pr-3 text-ink">{s.title}</td>
                    <td className="py-1.5 pr-3 tabular-nums text-trace">
                      {bests[s.id].score.toLocaleString()}
                    </td>
                    <td className="py-1.5 pr-3">{bests[s.id].grade}</td>
                    <td className="py-1.5 pr-3 tabular-nums">{bests[s.id].date}</td>
                    <td className="py-1.5 tabular-nums text-faint">
                      #{bests[s.id].hash}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Panel>
      </div>

      {/* start confirm */}
      <Modal
        open={confirmStart !== null}
        onClose={() => setConfirmStart(null)}
        title={confirmStart ? `Start: ${confirmStart.title}` : ""}
      >
        <p className="text-sm leading-relaxed text-dim">
          Starting snapshots your current facility session and resets the sim into
          the scenario's initial state. Your session is checkpointed and
          restorable on abort or from the finish card.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => setConfirmStart(null)}
            className="rounded-sm border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-dim hover:text-ink"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (confirmStart) begin(confirmStart);
              setConfirmStart(null);
            }}
            className="rounded-sm border border-trace/60 bg-trace/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-trace hover:bg-trace/20"
          >
            Checkpoint &amp; start
          </button>
        </div>
      </Modal>

      {/* abort confirm */}
      <Modal
        open={confirmAbort}
        onClose={() => setConfirmAbort(false)}
        title="Abort challenge"
      >
        <p className="text-sm leading-relaxed text-dim">
          Aborting discards the run and restores your checkpointed session.
          Nothing is scored.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => setConfirmAbort(false)}
            className="rounded-sm border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-dim hover:text-ink"
          >
            Keep running
          </button>
          <button
            onClick={abort}
            className="rounded-sm border border-bad/60 bg-bad/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-bad hover:bg-bad/20"
          >
            Abort &amp; restore
          </button>
        </div>
      </Modal>

      {/* clear history confirm */}
      <Modal
        open={confirmClear}
        onClose={() => setConfirmClear(false)}
        title="Clear personal bests"
      >
        <p className="text-sm leading-relaxed text-dim">
          This wipes all locally stored challenge scores. There is no backup —
          the leaderboard is you vs. you, and you're about to forget you.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => setConfirmClear(false)}
            className="rounded-sm border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-dim hover:text-ink"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              useChallengeStore.getState().clearHistory();
              setConfirmClear(false);
            }}
            className="rounded-sm border border-bad/60 bg-bad/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-bad hover:bg-bad/20"
          >
            Clear history
          </button>
        </div>
      </Modal>
    </div>
  );
}
