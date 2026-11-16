import { useMemo } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import Panel from "@/components/shared/Panel";
import GradedBadge from "@/components/shared/GradedBadge";
import Readout from "@/components/shared/Readout";
import Tooltip from "@/components/shared/Tooltip";
import { cn } from "@/lib/utils";
import { computeGrade, useSim } from "@/sim/store";
import type { RunRecord } from "@/sim/store";
import RunsScatter from "./RunsScatter";
import { slotStats, validPairs } from "./utils";

function Criterion({ label, score }: { label: string; score: number }) {
  const pct = Math.round(Math.max(0, Math.min(1, score)) * 100);
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
          {label}
        </span>
        <span className="font-mono text-[9px] tabular-nums text-dim">{pct}%</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-line">
        <motion.div
          className={cn(
            "h-full rounded-full",
            pct >= 80 ? "bg-go" : pct >= 50 ? "bg-trace" : pct > 0 ? "bg-trace-2" : "bg-line",
          )}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

/** Stats & unblinding band (runs.md §Stats band). */
export default function StatsBand({
  runs,
  revealed,
  labelToSlot,
  onRevealRequest,
}: {
  runs: RunRecord[];
  revealed: boolean;
  labelToSlot: { A: 0 | 1; B: 0 | 1 };
  /** early=true → manual reveal (compromises protocol) */
  onRevealRequest: (early: boolean) => void;
}) {
  const grade = useSim(computeGrade);
  const vnaCalibrated = useSim((s) => s.vnaCalibrated);
  const faults = useSim((s) => s.faults);
  const anyFault = Object.values(faults).some(Boolean);

  const valid = useMemo(() => runs.filter((r) => r.valid), [runs]);
  const pairs = useMemo(() => validPairs(runs), [runs]);

  const pooled = useMemo(() => {
    if (valid.length === 0) return null;
    const mean = valid.reduce((a, r) => a + r.f0, 0) / valid.length;
    const varr =
      valid.length > 1
        ? valid.reduce((a, r) => a + (r.f0 - mean) ** 2, 0) / (valid.length - 1)
        : 0;
    return { mean, sem: Math.sqrt(varr / valid.length), n: valid.length };
  }, [valid]);

  const [p1, p2] = useMemo(() => slotStats(runs, labelToSlot), [runs, labelToSlot]);
  const delta =
    revealed && p1 && p2
      ? { d: p2.mean - p1.mean, sem: Math.hypot(p1.sem, p2.sem) }
      : null;

  /* -------- session grade criteria (runs.md §Session grade summary) -------- */
  const criteria = useMemo(() => {
    const gateDiscipline = runs.length ? valid.length / runs.length : 0;
    const replication = Math.min(1, pairs / 3);
    let sigmaTrend = 0;
    if (valid.length >= 2) {
      const half = Math.floor(valid.length / 2);
      const first = valid.slice(0, half);
      const second = valid.slice(half);
      const avg = (xs: RunRecord[]) =>
        xs.reduce((a, r) => a + r.f0Sigma, 0) / xs.length;
      const ratio = avg(first) / Math.max(avg(second), 1e-9);
      sigmaTrend = Math.max(0, Math.min(1, ratio / 2)); // σ halving → 100%
    }
    return [
      { label: "Gate discipline", score: gateDiscipline },
      { label: "Replication (ABBA blocks)", score: replication },
      { label: "σ trend", score: sigmaTrend },
      { label: "Calibration freshness", score: vnaCalibrated ? 1 : 0 },
      { label: "Fault handling", score: anyFault ? 0.4 : 1 },
    ];
  }, [runs, valid, pairs, vnaCalibrated, anyFault]);

  return (
    <Panel title="Statistics & unblinding" accent="violet" bezel>
      {/* aggregates */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Readout
          label="Pooled f₀ (valid)"
          value={pooled ? (pooled.mean / 1000).toFixed(4) : "—"}
          unit={pooled ? "kHz" : undefined}
          size="sm"
        />
        <Readout
          label="σ/√N"
          value={pooled ? pooled.sem.toFixed(2) : "—"}
          unit={pooled ? "Hz" : undefined}
          size="sm"
        />
        <Readout
          label="Valid runs"
          value={`${valid.length} / ${runs.length}`}
          size="sm"
          tone={valid.length > 0 ? "ink" : "faint"}
        />
        <Readout
          label="Valid pairs"
          value={String(pairs)}
          size="sm"
          tone={pairs >= 3 ? "go" : "ink"}
        />
      </div>

      {/* scatter */}
      <div className="mt-4">
        <RunsScatter runs={runs} revealed={revealed} labelToSlot={labelToSlot} />
        <div className="mt-1 flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
          {revealed ? (
            <>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-trace" /> P1
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-trace-2" /> P2
              </span>
            </>
          ) : (
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-trace" /> Valid (blinded)
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full border border-bad" /> Invalid
          </span>
        </div>
      </div>

      {/* unblind control */}
      {!revealed && (
        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-sm border border-line bg-panel-2 p-3">
          {pairs >= 3 ? (
            <button
              onClick={() => onRevealRequest(false)}
              className="flex items-center gap-1.5 rounded-sm border border-go/60 bg-go/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-go transition-colors hover:bg-go/20"
            >
              <Eye size={12} strokeWidth={1.5} />
              Reveal positions
            </button>
          ) : (
            <Tooltip content="Blinding only protects you if you can't peek after two points.">
              <button
                disabled
                className="flex cursor-not-allowed items-center gap-1.5 rounded-sm border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-faint opacity-60"
              >
                <Eye size={12} strokeWidth={1.5} />
                Reveal positions (gate G4 · {pairs}/3 blocks)
              </button>
            </Tooltip>
          )}
          <p className="min-w-0 flex-1 text-[11px] leading-relaxed text-dim">
            {pairs >= 3
              ? "Staged gates G1–G4 clear — hash verification, sham/injection recovery, and blinded diagnostics passed; the ABBA block schedule supports a two-position comparison."
              : "The reveal walks staged gates G1–G4: hash verification → sham/injection recovery → blinded diagnostics → blocks complete. More blinded ABBA blocks, then the schedule opens itself."}
          </p>
          <button
            onClick={() => onRevealRequest(true)}
            className="font-mono text-[10px] uppercase tracking-[0.1em] text-trace-2 underline-offset-2 transition-colors hover:text-warn hover:underline"
          >
            Reveal early…
          </button>
        </div>
      )}

      {/* post-reveal result card */}
      {revealed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 rounded-sm border border-trace/40 bg-trace/5 p-4"
        >
          {delta ? (
            <>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                Unblinded result
              </p>
              <p className="mt-1 font-mono text-xl font-bold tabular-nums text-ink readout-glow">
                Δf₀(P2−P1) = {delta.d >= 0 ? "+" : "−"}
                {Math.abs(delta.d).toFixed(1)} ± {delta.sem.toFixed(1)}{" "}
                <span className="text-sm text-faint">Hz</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-dim">
                A position-dependent shift of this size is consistent with a
                coupling gradient — see Learning Paths: Systematics.
              </p>
              <p className="mt-1 border-t border-line pt-2 font-mono text-[10px] leading-relaxed text-faint">
                Two positions, one instrument, one session. Internal
                consistency, not a discovery.
              </p>
            </>
          ) : (
            <p className="text-sm text-dim">
              Positions revealed, but at least one position has no valid runs
              yet — keep measuring to compute Δf₀.
            </p>
          )}
        </motion.div>
      )}

      {/* session grade summary */}
      <div className="mt-4 grid gap-4 border-t border-line pt-4 md:grid-cols-[auto_1fr]">
        <div className="flex flex-col items-start gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            Session grade
          </span>
          <GradedBadge grade={grade} />
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {criteria.map((c) => (
            <Criterion key={c.label} label={c.label} score={c.score} />
          ))}
        </div>
      </div>
    </Panel>
  );
}
