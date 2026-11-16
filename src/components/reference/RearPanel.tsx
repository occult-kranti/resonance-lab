import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { loadRefOuts, REF_OUTS_KEY } from "./outs";
import type { RefOutput } from "./outs";

/**
 * Rear-panel backplate (reference.md §"Rear-panel outputs").
 * 4× BNC 10 MHz + 2× 1 PPS; click to plug/unplug the cable. Plug state is
 * persisted so other instruments (VNA) can sense an EXT-REF loss.
 */
export default function RearPanel({ onChange }: { onChange?: (outs: RefOutput[]) => void }) {
  const [outs, setOuts] = useState<RefOutput[]>(loadRefOuts);

  useEffect(() => {
    try {
      localStorage.setItem(REF_OUTS_KEY, JSON.stringify(outs));
    } catch {
      /* storage unavailable */
    }
    onChange?.(outs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outs]);

  const toggle = (id: string) =>
    setOuts((o) => o.map((x) => (x.id === id ? { ...x, plugged: !x.plugged } : x)));

  return (
    <div className="rounded-sm border border-line bg-void p-3 panel-inset">
      {/* screw corners */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
        {outs.map((o) => (
          <button
            key={o.id}
            onClick={() => toggle(o.id)}
            className="group flex flex-col items-center gap-1.5"
            title={o.plugged ? "Click to unplug" : "Click to plug in"}
          >
            <svg viewBox="0 0 64 44" className="h-11 w-16">
              {/* BNC barrel */}
              <circle
                cx={32}
                cy={20}
                r={13}
                className={cn(
                  "fill-panel-2 stroke-line-bright transition-colors",
                  o.plugged && "stroke-violet/70",
                )}
                strokeWidth={1.5}
              />
              <circle cx={32} cy={20} r={7} className="fill-void stroke-line" strokeWidth={1} />
              <circle
                cx={32}
                cy={20}
                r={2.2}
                className={o.plugged ? "fill-violet" : "fill-faint"}
              />
              {/* BNC bayonet lugs */}
              <rect x={18} y={15} width={3} height={5} className="fill-line-bright" />
              <rect x={43} y={15} width={3} height={5} className="fill-line-bright" />
              {/* cable stub when plugged */}
              {o.plugged && (
                <path
                  d="M45 20 C 54 20, 54 34, 62 34"
                  className="fill-none stroke-violet"
                  strokeWidth={3}
                  strokeLinecap="round"
                />
              )}
            </svg>
            <span className="flex items-center gap-1.5">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  o.plugged ? "bg-go led-glow text-go" : "bg-faint/50",
                )}
              />
              <span
                className={cn(
                  "font-mono text-[9px] uppercase tracking-[0.1em]",
                  o.plugged ? "text-dim group-hover:text-ink" : "text-faint group-hover:text-dim",
                )}
              >
                {o.label}
              </span>
            </span>
          </button>
        ))}
      </div>
      <p className="mt-3 border-t border-line pt-2 font-mono text-[9px] leading-relaxed text-faint">
        Unplugging the VNA&apos;s 10 MHz input degrades its f₀ uncertainty ×20 and flags fits
        EXT-REF LOST — an advisory, not a fault. Every honest number traces back to this backplate.
      </p>
    </div>
  );
}
