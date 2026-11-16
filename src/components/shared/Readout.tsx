import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const SIZES = {
  sm: "text-sm",
  md: "text-xl",
  lg: "text-3xl md:text-4xl",
} as const;

/**
 * Numeric readout (design.md §5.3): faint micro label + mono tabular value + unit.
 * `live` adds gentle ±1 LSD digit jitter every 300–700 ms.
 */
export default function Readout({
  label,
  value,
  unit,
  size = "md",
  live = false,
  tone = "ink",
  className,
}: {
  label: string;
  value: ReactNode; // string values support `live` jitter; nodes render as-is
  unit?: string;
  size?: keyof typeof SIZES;
  live?: boolean;
  tone?: "ink" | "trace" | "go" | "warn" | "bad" | "dim" | "faint";
  className?: string;
}) {
  const [jitter, setJitter] = useState<{ base: string; text: string } | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!live || typeof value !== "string") return;
    const schedule = () => {
      timer.current = window.setTimeout(() => {
        // jitter the last digit ±1 LSD
        const m = value.match(/^(.*?)(\d)(\D*)$/);
        if (m) {
          const d = Math.min(9, Math.max(0, parseInt(m[2], 10) + (Math.random() < 0.5 ? -1 : 1)));
          setJitter({ base: value, text: `${m[1]}${d}${m[3]}` });
        }
        schedule();
      }, 300 + Math.random() * 400);
    };
    schedule();
    return () => window.clearTimeout(timer.current);
  }, [value, live]);

  const display =
    live && typeof value === "string" && jitter && jitter.base === value
      ? jitter.text
      : value;

  const toneClass = {
    ink: "text-ink readout-glow",
    trace: "text-trace readout-glow-trace",
    go: "text-go",
    warn: "text-warn",
    bad: "text-bad",
    dim: "text-dim",
    faint: "text-faint",
  }[tone];

  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
        {label}
      </span>
      <span className="flex items-baseline gap-1.5">
        <span
          className={cn(
            "font-mono font-bold tabular-nums leading-none",
            SIZES[size],
            toneClass,
          )}
        >
          {display}
        </span>
        {unit && (
          <span className="font-mono text-[10px] text-faint">{unit}</span>
        )}
      </span>
    </div>
  );
}
