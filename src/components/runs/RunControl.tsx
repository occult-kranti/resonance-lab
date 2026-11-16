import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Check, ExternalLink, RefreshCw, ScanEye } from "lucide-react";
import Panel from "@/components/shared/Panel";
import StatusLED from "@/components/shared/StatusLED";
import Tooltip from "@/components/shared/Tooltip";
import { cn } from "@/lib/utils";
import {
  QUALITY_PRESSURE_HPA,
  computeQuality,
  simActions,
  useSim,
} from "@/sim/store";
import type { Schedule } from "./schedule";

/* ------------------------------------------------------------------ */
/* Transit shutter — 3 s stage move with blanked readouts (runs.md)    */
/* ------------------------------------------------------------------ */
function TransitShutter({ progress, target }: { progress: number; target: number }) {
  // carriage direction is cosmetic-random per transit (chosen in the click
  // handler): the protocol blanks position telemetry, so the animation must
  // not leak slot grouping.
  return (
    <div className="relative h-14 overflow-hidden rounded-sm border border-line bg-[#070b10]">
      {/* rail */}
      <div className="absolute left-4 right-4 top-1/2 h-px bg-line-bright" />
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute top-1/2 h-2 w-px -translate-y-1/2 bg-line"
          style={{ left: `${10 + i * 10}%` }}
        />
      ))}
      {/* carriage */}
      <motion.div
        aria-hidden
        className="absolute top-1/2 h-4 w-6 -translate-y-1/2 rounded-[2px] border border-dim/60 bg-panel-2"
        initial={{ left: "50%" }}
        animate={{ left: `${target}%` }}
        transition={{ duration: 3, ease: "easeInOut" }}
        style={{ marginLeft: -12 }}
      />
      {/* blinding shutter */}
      <div className="absolute inset-0 flex items-center justify-center bg-panel/60 backdrop-blur-[1px]">
        <span className="rounded-sm border border-line bg-shell px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
          Position blanked
        </span>
      </div>
      {/* progress hairline */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-trace transition-[width] duration-100 ease-linear"
        style={{ width: `${Math.round(progress * 100)}%` }}
      />
    </div>
  );
}

/** SVG progress ring for the in-flight sweep. */
function ProgressRing({ progress }: { progress: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
      <circle cx="32" cy="32" r={r} fill="none" stroke="#1e2a38" strokeWidth="3" />
      <circle
        cx="32"
        cy="32"
        r={r}
        fill="none"
        stroke="#2dd4c8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - progress)}
        style={{ transition: "stroke-dashoffset 120ms linear" }}
      />
      <text
        x="32"
        y="36"
        textAnchor="middle"
        className="fill-ink font-mono text-[11px]"
        transform="rotate(90 32 32)"
      >
        {Math.round(progress * 100)}%
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* RunControl — scheduler card + start-run wizard (runs.md)            */
/* ------------------------------------------------------------------ */
export default function RunControl({
  schedule,
  revealed,
  labelToSlot,
  runsCount,
  onGenerate,
  onRegenerateRequest,
  onExtend,
  onCommit,
}: {
  schedule: Schedule | null;
  revealed: boolean;
  labelToSlot: { A: 0 | 1; B: 0 | 1 };
  runsCount: number;
  onGenerate: () => void;
  onRegenerateRequest: () => void;
  onExtend: () => void;
  /** commit the pending fit as the next scheduled run; returns success */
  onCommit: (note: string) => boolean;
}) {
  const power = useSim((s) => s.power);
  const pressure = useSim((s) => s.pressure);
  const thermalStable = useSim((s) => s.thermalStable);
  const clock = useSim((s) => s.clock);
  const vnaCalibrated = useSim((s) => s.vnaCalibrated);
  const sweeping = useSim((s) => s.sweeping);
  const sweepProgress = useSim((s) => s.sweepProgress);
  const lastFit = useSim((s) => s.lastFit);
  const quality = useSim(computeQuality);

  // wizard: 1 gates → 2 transit → 3 measure → 4 review/commit
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [transitProgress, setTransitProgress] = useState(0);
  const [transitTarget, setTransitTarget] = useState(50);
  const [note, setNote] = useState("");
  const [sweepRequestedAt, setSweepRequestedAt] = useState<number | null>(null);

  // auto-extend the schedule when it runs dry
  useEffect(() => {
    if (schedule && runsCount >= schedule.seq.length) onExtend();
  }, [schedule, runsCount, onExtend]);

  // transit drive (3 s); progress + stage move happen in the interval callback
  useEffect(() => {
    if (step !== 2) return;
    const start = performance.now();
    const id = window.setInterval(() => {
      const p = Math.min(1, (performance.now() - start) / 3000);
      setTransitProgress(p);
      if (p >= 1) {
        window.clearInterval(id);
        // move the real stage along the hidden axis (±20 mm within soft limits)
        if (schedule) {
          const label = schedule.seq[Math.min(runsCount, schedule.seq.length - 1)];
          const slot = labelToSlot[label];
          const axis = (["x", "y", "z"] as const)[schedule.seed.charCodeAt(0) % 3];
          simActions.setStage(axis, slot === 0 ? -20 : 20);
        }
        setStep(3);
      }
    }, 100);
    return () => window.clearInterval(id);
  }, [step, schedule, runsCount, labelToSlot]);

  // a fresh fit taken after the sweep request ends the measure step (derived,
  // so a fit from the VNA console also lands here)
  const fitReady =
    step === 3 &&
    sweepRequestedAt !== null &&
    !sweeping &&
    lastFit !== null &&
    lastFit.takenAt >= sweepRequestedAt;
  const effectiveStep = fitReady ? 4 : step;

  const gates = [
    { label: "Facility power", ok: power === "FACILITY_ON" },
    { label: "High vacuum < 1×10⁻³ hPa", ok: pressure < QUALITY_PRESSURE_HPA },
    { label: "Thermal stable at setpoint", ok: thermalStable },
    { label: "10 MHz reference locked", ok: clock === "LOCKED" },
    { label: "VNA calibrated this session", ok: vnaCalibrated },
  ];
  const gatesOpen = gates.filter((g) => !g.ok).length;

  const commit = () => {
    if (onCommit(note.trim())) {
      setNote("");
      setSweepRequestedAt(null);
      setStep(1);
    }
  };

  const nextSlot = schedule ? Math.min(runsCount, schedule.seq.length - 1) : 0;

  const btn =
    "rounded-sm border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors";
  const btnPrimary = cn(
    btn,
    "border-trace/60 bg-trace/10 text-trace hover:bg-trace/20 disabled:cursor-not-allowed disabled:opacity-40",
  );
  const btnGhost = cn(btn, "border-line text-dim hover:border-line-bright hover:text-ink");

  return (
    <Panel title="Run control" accent="trace" bezel>
      {/* -------- scheduler card -------- */}
      <div className="rounded-sm border border-line bg-panel-2 p-3">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            Scheduler
          </p>
          {schedule && (
            <Tooltip
              content={
                runsCount > 0
                  ? "Reshuffles upcoming slots; committed runs keep theirs"
                  : "Draw a new blinded sequence"
              }
            >
              <button
                onClick={onRegenerateRequest}
                className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:text-ink"
              >
                <RefreshCw size={11} strokeWidth={1.5} />
                Regenerate
              </button>
            </Tooltip>
          )}
        </div>

        {!schedule ? (
          <div className="mt-2">
            <p className="text-xs leading-relaxed text-dim">
              Draw a randomized, blinded sequence of position visits. The
              assignment is sealed in local storage — obfuscated, not
              encrypted. The protocol trusts you: don't peek.
            </p>
            <button onClick={onGenerate} className={cn(btnPrimary, "mt-3 w-full")}>
              Generate schedule
            </button>
          </div>
        ) : (
          <div className="mt-2">
            <div className="flex flex-wrap gap-1.5">
              {schedule.seq.map((label, i) => {
                const committed = i < runsCount;
                const current = i === runsCount;
                const posLabel = revealed
                  ? labelToSlot[label] === 0
                    ? "P1"
                    : "P2"
                  : "P?";
                return (
                  <motion.div
                    key={`${schedule.seed}-${i}`}
                    initial={false}
                    animate={{ rotateY: revealed ? 360 : 0 }}
                    transition={{ duration: 0.4, delay: revealed ? i * 0.06 : 0 }}
                    className={cn(
                      "flex h-7 items-center gap-1.5 rounded-sm border px-2 font-mono text-[10px]",
                      committed
                        ? "border-line text-faint"
                        : current
                          ? "border-trace/60 bg-trace/10 text-trace"
                          : "border-line text-dim",
                    )}
                  >
                    <span className="text-faint">{i + 1}</span>
                    <span
                      className={cn(
                        revealed && !committed && "font-bold",
                        revealed &&
                          (labelToSlot[label] === 0 ? "text-trace" : "text-trace-2"),
                      )}
                    >
                      {posLabel}
                    </span>
                    {committed && <Check size={10} strokeWidth={2} className="text-go" />}
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-line pt-2">
              <span className="font-mono text-[10px] text-faint">
                ΔX = 0.40 m (hidden axis)
              </span>
              <span className="font-mono text-[10px] text-faint">
                SEED {schedule.seed.toUpperCase()}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* -------- wizard -------- */}
      <div className="mt-3">
        <div className="mb-2 flex items-center gap-2">
          {[1, 2, 3, 4].map((n) => (
            <span
              key={n}
              aria-hidden
              className={cn(
                "h-1 flex-1 rounded-full",
                n < effectiveStep ? "bg-trace" : n === effectiveStep ? "bg-trace-2" : "bg-line",
              )}
            />
          ))}
        </div>

        {effectiveStep === 1 && (
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              ① Confirm gates — slot {nextSlot + 1}
            </p>
            <ul className="space-y-1.5">
              {gates.map((g) => (
                <li key={g.label} className="flex items-center justify-between">
                  <StatusLED state={g.ok ? "on" : "off"} label={g.label} />
                  <span
                    className={cn(
                      "font-mono text-[9px] uppercase tracking-[0.12em]",
                      g.ok ? "text-go" : "text-faint",
                    )}
                  >
                    {g.ok ? "Closed" : "Open"}
                  </span>
                </li>
              ))}
            </ul>
            {gatesOpen > 0 && (
              <p className="mt-2 text-[11px] leading-relaxed text-trace-2">
                {gatesOpen} gate{gatesOpen > 1 ? "s" : ""} open — the run will be
                committed as INVALID. That's allowed: it's data too, it just
                won't count.
              </p>
            )}
            <button
              onClick={() => {
                setTransitProgress(0);
                setTransitTarget(Math.random() < 0.5 ? 18 : 82);
                setStep(2);
              }}
              disabled={!schedule}
              className={cn(btnPrimary, "mt-3 w-full")}
            >
              Move stage →
            </button>
            {!schedule && (
              <p className="mt-1.5 text-center font-mono text-[9px] text-faint">
                Generate a schedule first.
              </p>
            )}
          </div>
        )}

        {effectiveStep === 2 && (
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              ② Stage in transit
            </p>
            <TransitShutter progress={transitProgress} target={transitTarget} />
            <div className="mt-2 flex items-center justify-between">
              <span className="font-mono text-[10px] text-faint">
                XYZ ▮▮▮ / ▮▮▮ / ▮▮▮ mm
              </span>
              <span className="font-mono text-[10px] tabular-nums text-dim">
                {Math.round(transitProgress * 100)}%
              </span>
            </div>
          </div>
        )}

        {effectiveStep === 3 && (
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              ③ Take measurement
            </p>
            <div className="flex items-center gap-3">
              {sweeping ? (
                <ProgressRing progress={sweepProgress} />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line">
                  <ScanEye size={20} strokeWidth={1.5} className="text-dim" />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="text-xs leading-relaxed text-dim">
                  {sweeping
                    ? "Remote S11 sweep in progress with the last VNA configuration."
                    : "Launch a remote S11 sweep with the last VNA configuration, or open the VNA for a manual pass."}
                </p>
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() => {
                      setSweepRequestedAt(useSim.getState().simTime);
                      simActions.startSweep();
                    }}
                    disabled={sweeping || power !== "FACILITY_ON"}
                    className={btnPrimary}
                  >
                    {sweeping ? "Sweeping…" : "Take measurement"}
                  </button>
                  <Link to="/vna" className={cn(btnGhost, "flex items-center gap-1")}>
                    Open VNA
                    <ExternalLink size={10} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </div>
            <p className="mt-2 font-mono text-[9px] text-faint">
              A fresh fit from any source (here or the VNA console) completes
              this step.
            </p>
            <button
              onClick={() => {
                setSweepRequestedAt(null);
                setStep(1);
              }}
              className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-faint transition-colors hover:text-dim"
            >
              ← Back to gates
            </button>
          </div>
        )}

        {effectiveStep === 4 && lastFit && (
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              ④ Fit landed — review & commit
            </p>
            <div className="grid grid-cols-2 gap-2 rounded-sm border border-line bg-panel-2 p-3">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">f₀</p>
                <p className="font-mono text-sm tabular-nums text-ink">
                  {(lastFit.f0 / 1000).toFixed(3)}{" "}
                  <span className="text-faint">± {(lastFit.f0Sigma / 1000).toFixed(4)} kHz</span>
                </p>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">Q</p>
                <p className="font-mono text-sm tabular-nums text-ink">
                  {Math.round(lastFit.q).toLocaleString()}{" "}
                  <span className="text-faint">± {Math.round(lastFit.qSigma).toLocaleString()}</span>
                </p>
              </div>
            </div>
            <p
              className={cn(
                "mt-2 font-mono text-[10px] uppercase tracking-[0.1em]",
                quality.valid ? "text-go" : "text-trace-2",
              )}
            >
              {quality.valid
                ? "All gates closed — run will count as VALID"
                : `Open gates — run commits as INVALID (${quality.reasons[0] ?? ""})`}
            </p>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              placeholder="Operator note (optional)…"
              aria-label="Operator note"
              className="mt-2 w-full resize-y rounded-sm border border-line bg-void p-2 font-mono text-[11px] text-ink placeholder:text-faint focus:border-trace/60 focus:outline-none"
            />
            <div className="mt-2 flex gap-2">
              <button onClick={commit} className={cn(btnPrimary, "flex-1")}>
                Commit run
              </button>
              <button
                onClick={() => {
                  setSweepRequestedAt(null);
                  setStep(3);
                }}
                className={btnGhost}
              >
                Re-measure
              </button>
            </div>
          </div>
        )}
      </div>
    </Panel>
  );
}
