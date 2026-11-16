import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { STAGE_LIMIT_MM, simActions, useSim } from "@/sim/store";
import type { Axis } from "@/sim/store";

const STEPS = [0.01, 0.1, 1, 10] as const;
const AXES: Axis[] = ["x", "y", "z"];

/** XYZ stage jog pad (design.md §5.8): −/+ buttons, step selector, direct entry, ±35 mm soft limits. */
export default function JogPad({ className }: { className?: string }) {
  const stage = useSim((s) => s.stage);
  const [step, setStep] = useState<number>(1);
  const [flash, setFlash] = useState<Axis | null>(null);

  const jog = (axis: Axis, dir: 1 | -1) => {
    const ok = simActions.jogStage(axis, dir * step);
    if (!ok) {
      setFlash(axis);
      window.setTimeout(() => setFlash(null), 450);
    }
  };

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {/* step size selector */}
      <div className="flex items-center gap-1">
        <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
          Step
        </span>
        {STEPS.map((v) => (
          <button
            key={v}
            onClick={() => setStep(v)}
            className={cn(
              "rounded-sm border px-2 py-1 font-mono text-[11px] transition-colors",
              step === v
                ? "border-trace/60 bg-trace/10 text-trace"
                : "border-line text-dim hover:border-line-bright hover:text-ink",
            )}
          >
            {v}
          </button>
        ))}
        <span className="ml-1 font-mono text-[10px] text-faint">mm</span>
      </div>

      {AXES.map((axis) => {
        const pos = stage[axis];
        const atLimit = Math.abs(pos) >= STAGE_LIMIT_MM - 1e-9;
        return (
          <div
            key={axis}
            className={cn(
              "flex items-center gap-2 rounded-sm border border-transparent p-0.5 transition-colors",
              flash === axis && "border-bad",
            )}
          >
            <span className="w-4 font-display text-xs font-semibold uppercase text-dim">
              {axis}
            </span>
            <button
              aria-label={`jog ${axis} minus`}
              onClick={() => jog(axis, -1)}
              disabled={pos - step < -STAGE_LIMIT_MM}
              className="flex h-7 w-7 items-center justify-center rounded-sm border border-line text-dim transition-all hover:border-line-bright hover:text-ink active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <input
              type="number"
              step={step}
              min={-STAGE_LIMIT_MM}
              max={STAGE_LIMIT_MM}
              value={pos.toFixed(2)}
              onChange={(e) => {
                const v = parseFloat(e.target.value);
                if (!Number.isNaN(v)) {
                  const ok = simActions.setStage(axis, v);
                  if (!ok) {
                    setFlash(axis);
                    window.setTimeout(() => setFlash(null), 450);
                  }
                }
              }}
              className={cn(
                "w-24 rounded-sm border bg-void px-2 py-1 text-center font-mono text-xs tabular-nums text-ink outline-none transition-colors",
                atLimit ? "border-bad/60 text-bad" : "border-line focus:border-line-bright",
              )}
            />
            <button
              aria-label={`jog ${axis} plus`}
              onClick={() => jog(axis, 1)}
              disabled={pos + step > STAGE_LIMIT_MM}
              className="flex h-7 w-7 items-center justify-center rounded-sm border border-line text-dim transition-all hover:border-line-bright hover:text-ink active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
            <span className="font-mono text-[10px] text-faint">mm</span>
            {/* limit indicator */}
            <span className="ml-auto flex items-center gap-1">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  pos <= -STAGE_LIMIT_MM ? "bg-bad led-glow text-bad" : "bg-line",
                )}
              />
              <span className="font-mono text-[9px] text-faint">±{STAGE_LIMIT_MM}</span>
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  pos >= STAGE_LIMIT_MM ? "bg-bad led-glow text-bad" : "bg-line",
                )}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
}
