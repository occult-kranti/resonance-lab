import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Send } from "lucide-react";
import Panel from "@/components/shared/Panel";
import GradedBadge from "@/components/shared/GradedBadge";
import Readout from "@/components/shared/Readout";
import StatusLED from "@/components/shared/StatusLED";
import { Drawer } from "@/components/shared";
import MiniPlot from "@/components/notebook/MiniPlot";
import { cn } from "@/lib/utils";
import { formatPressure, formatSessionTime } from "@/sim/store";
import type { Grade, RunRecord } from "@/sim/store";
import type { RunMeta } from "./schedule";
import { runGrade } from "./utils";

const FILTERS: Array<"ALL" | "VALID" | Grade> = [
  "ALL",
  "VALID",
  "INVALID",
  "S",
  "A",
  "B",
  "C",
];

/** Run log table + per-run detail drawer (runs.md §Run log). */
export default function RunLog({
  runs,
  meta,
  revealed,
  labelToSlot,
  onSendToNotebook,
}: {
  runs: RunRecord[];
  meta: Record<number, RunMeta>;
  revealed: boolean;
  labelToSlot: { A: 0 | 1; B: 0 | 1 };
  onSendToNotebook: (run: RunRecord) => void;
}) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ALL");
  const [selected, setSelected] = useState<RunRecord | null>(null);

  const rows = useMemo(() => {
    const sorted = [...runs].sort((a, b) => b.id - a.id);
    if (filter === "ALL") return sorted;
    if (filter === "VALID") return sorted.filter((r) => r.valid);
    return sorted.filter((r) => runGrade(r) === filter);
  }, [runs, filter]);

  const posChip = (r: RunRecord) => {
    if (!revealed)
      return (
        <span className="rounded-sm border border-line px-1.5 py-px font-mono text-[9px] tracking-[0.1em] text-faint">
          P?
        </span>
      );
    const slot = labelToSlot[r.label];
    return (
      <span
        className={cn(
          "rounded-sm border px-1.5 py-px font-mono text-[9px] font-bold tracking-[0.1em]",
          slot === 0
            ? "border-trace/60 bg-trace/10 text-trace"
            : "border-trace-2/60 bg-trace-2/10 text-trace-2",
        )}
      >
        {slot === 0 ? "P1" : "P2"}
      </span>
    );
  };

  return (
    <Panel
      title="Run log"
      accent="blue"
      pad={false}
      right={
        <span className="font-mono text-[10px] tabular-nums text-faint">
          {runs.length} committed
        </span>
      }
    >
      {/* filter chips */}
      <div className="flex flex-wrap gap-1.5 border-b border-line px-4 py-2.5">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors",
              filter === f
                ? "border-trace/60 bg-trace/10 text-trace"
                : "border-line text-faint hover:border-line-bright hover:text-dim",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {runs.length === 0 ? (
        <div className="flex flex-col items-center px-6 py-10 text-center">
          <img src="/empty-runs.png" alt="" className="h-auto w-52 opacity-80" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-dim">
            No runs yet. Generate a schedule and take your first blinded
            measurement.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left">
            <thead>
              <tr className="border-b border-line font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                <th className="px-4 py-2 font-medium">#</th>
                <th className="px-2 py-2 font-medium">Sched</th>
                <th className="px-2 py-2 font-medium">f₀ (kHz)</th>
                <th className="px-2 py-2 font-medium">Q</th>
                <th className="px-2 py-2 font-medium">T °C</th>
                <th className="px-2 py-2 font-medium">P hPa</th>
                <th className="px-2 py-2 font-medium">Grade</th>
                <th className="px-2 py-2 font-medium">Note</th>
                <th className="w-8 px-2 py-2" />
              </tr>
            </thead>
            <tbody>
              <AnimatePresence initial={false}>
                {rows.map((r, i) => (
                  <motion.tr
                    key={r.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: Math.min(i, 8) * 0.06 }}
                    onClick={() => setSelected(r)}
                    className="cursor-pointer border-b border-line/50 transition-colors last:border-0 hover:bg-panel-2"
                  >
                    <td className="px-4 py-2 font-mono text-[11px] tabular-nums text-dim">
                      {r.id}
                    </td>
                    <td className="px-2 py-2">{posChip(r)}</td>
                    <td className="px-2 py-2 font-mono text-[11px] tabular-nums text-ink">
                      {(r.f0 / 1000).toFixed(3)}
                      <span className="text-faint">
                        {" "}± {(r.f0Sigma / 1000).toFixed(4)}
                      </span>
                    </td>
                    <td className="px-2 py-2 font-mono text-[11px] tabular-nums text-dim">
                      {Math.round(r.q).toLocaleString()}
                    </td>
                    <td className="px-2 py-2 font-mono text-[11px] tabular-nums text-dim">
                      {r.temperature.toFixed(3)}
                    </td>
                    <td className="px-2 py-2 font-mono text-[11px] tabular-nums text-dim">
                      {formatPressure(r.pressure).replace(" hPa", "")}
                    </td>
                    <td className="px-2 py-2">
                      <GradedBadge
                        grade={runGrade(r)}
                        className="h-5 px-2 text-[9px]"
                      />
                    </td>
                    <td className="max-w-[120px] truncate px-2 py-2 text-[11px] text-faint">
                      {meta[r.id]?.note ?? "—"}
                    </td>
                    <td className="px-2 py-2 text-faint">
                      <ChevronRight size={12} strokeWidth={1.5} />
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
          {rows.length === 0 && (
            <p className="px-4 py-6 text-center font-mono text-[11px] text-faint">
              No runs match this filter.
            </p>
          )}
        </div>
      )}

      {/* detail drawer */}
      <Drawer
        open={selected !== null}
        onClose={() => setSelected(null)}
        title={selected ? `Run #${selected.id} — snapshot` : ""}
      >
        {selected && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {posChip(selected)}
              <GradedBadge grade={runGrade(selected)} className="h-5 px-2 text-[9px]" />
              <StatusLED
                state={selected.valid ? "on" : "fault"}
                label={selected.valid ? "Valid" : "Invalid"}
              />
            </div>

            <MiniPlot kind="dip" f0Hz={selected.f0} q={selected.q} width={340} height={90} className="w-full" />
            <p className="-mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
              S11 dip reconstructed from the committed fit
            </p>

            <div className="grid grid-cols-2 gap-3">
              <Readout
                label="f₀"
                value={(selected.f0 / 1000).toFixed(3)}
                unit="kHz"
                size="sm"
              />
              <Readout
                label="σ(f₀)"
                value={selected.f0Sigma.toFixed(2)}
                unit="Hz"
                size="sm"
              />
              <Readout
                label="Q"
                value={Math.round(selected.q).toLocaleString()}
                size="sm"
              />
              <Readout
                label="σ(Q)"
                value={Math.round(selected.qSigma).toLocaleString()}
                size="sm"
              />
              <Readout
                label="Chamber T"
                value={selected.temperature.toFixed(3)}
                unit="°C"
                size="sm"
              />
              <Readout
                label="Pressure"
                value={formatPressure(selected.pressure).replace(" hPa", "")}
                unit="hPa"
                size="sm"
              />
            </div>

            <div className="rounded-sm border border-line bg-panel-2 p-3 font-mono text-[10px] leading-relaxed text-dim">
              <p>Committed {formatSessionTime(selected.t)} (session)</p>
              <p>
                Schedule slot {(meta[selected.id]?.slot ?? selected.id - 1) + 1}
                {revealed
                  ? ` — position ${labelToSlot[selected.label] === 0 ? "P1" : "P2"}`
                  : " — position blinded"}
              </p>
              {meta[selected.id]?.note && (
                <p className="mt-1 border-t border-line pt-1 text-ink">
                  “{meta[selected.id].note}”
                </p>
              )}
            </div>

            <button
              onClick={() => onSendToNotebook(selected)}
              disabled={meta[selected.id]?.sentToNotebook}
              className="flex w-full items-center justify-center gap-1.5 rounded-sm border border-trace/60 bg-trace/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-trace transition-colors hover:bg-trace/20 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={11} strokeWidth={1.5} />
              {meta[selected.id]?.sentToNotebook ? "In notebook" : "Send to Notebook"}
            </button>
          </div>
        )}
      </Drawer>
    </Panel>
  );
}
