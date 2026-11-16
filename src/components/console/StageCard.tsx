import { useEffect, useState } from "react";
import { Crosshair } from "lucide-react";
import { Panel, JogPad } from "@/components/shared";
import { STAGE_LIMIT_MM, simActions, useSim } from "@/sim/store";
import type { Axis } from "@/sim/store";
import { cn } from "@/lib/utils";

const AXES: Axis[] = ["x", "y", "z"];
const SLEW_MM_PER_S = 12; // realistic stage slew for readout easing

/** Eased position readouts — values glide toward target at a realistic slew rate. */
function useSlewedStage(): Record<Axis, number> {
  const [disp, setDisp] = useState<Record<Axis, number>>(() => ({
    ...useSim.getState().stage,
  }));

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    let cur = { ...useSim.getState().stage };
    const step = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      const target = useSim.getState().stage;
      let changed = false;
      const next = { ...cur };
      for (const a of AXES) {
        const d = target[a] - cur[a];
        if (Math.abs(d) > 0.004) {
          changed = true;
          const maxStep = SLEW_MM_PER_S * dt;
          next[a] = cur[a] + Math.sign(d) * Math.min(Math.abs(d), maxStep);
        } else if (cur[a] !== target[a]) {
          next[a] = target[a];
          changed = true;
        }
      }
      if (changed) {
        cur = next;
        setDisp(next);
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return disp;
}

/** Stage Position card (console.md §Row 4D): readouts, JogPad, GOTO 1/2 (blinded). */
export default function StageCard() {
  const pos = useSlewedStage();
  const revealed = useSim((s) => s.blinding.revealed);

  const goto = (slot: 1 | 2) => {
    // Position 1 = X −20.00 mm, Position 2 = X +20.00 mm (0.40 m beam path)
    simActions.setStage("x", slot === 1 ? -20 : 20);
  };

  return (
    <Panel accent="dim" title="Stage position" className="h-full">
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-2">
          {AXES.map((a) => {
            const atLimit = Math.abs(pos[a]) >= STAGE_LIMIT_MM - 1e-9;
            return (
              <div key={a} className="flex flex-col gap-0.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  {a}
                </span>
                <span
                  className={cn(
                    "font-mono text-lg font-bold tabular-nums leading-none",
                    atLimit ? "text-bad" : "text-ink readout-glow",
                  )}
                >
                  {pos[a].toFixed(2)}
                </span>
                <span className="font-mono text-[9px] text-faint">mm · ±{STAGE_LIMIT_MM}</span>
              </div>
            );
          })}
        </div>

        <JogPad />

        <div className="flex gap-2">
          {([1, 2] as const).map((slot) => (
            <button
              key={slot}
              onClick={() => goto(slot)}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-sm border border-line px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-all hover:border-trace/60 hover:text-trace active:scale-[0.97]"
              title={
                revealed
                  ? slot === 1
                    ? "X −20.00 mm"
                    : "X +20.00 mm"
                  : "Blinded position — assignment hidden"
              }
            >
              <Crosshair size={11} strokeWidth={1.5} />
              {revealed ? `GOTO ${slot === 1 ? "A" : "B"}` : `POSITION ${slot}`}
            </button>
          ))}
        </div>
      </div>
    </Panel>
  );
}
