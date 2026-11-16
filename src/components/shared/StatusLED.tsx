import { cn } from "@/lib/utils";

export type LedState = "off" | "on" | "warn" | "fault" | "standby";

const LED_CLASSES: Record<LedState, string> = {
  off: "bg-faint/40 text-transparent",
  on: "bg-go text-go led-glow",
  warn: "bg-warn text-warn led-glow animate-led-warn",
  fault: "bg-bad text-bad led-glow animate-led-fault",
  standby: "bg-dim/60 text-transparent",
};

/** 8px status dot + label (design.md §5.2). */
export default function StatusLED({
  state,
  label,
  className,
}: {
  state: LedState;
  label?: string;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span
        className={cn("h-2 w-2 rounded-full", LED_CLASSES[state])}
        aria-hidden
      />
      {label && (
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-dim">
          {label}
        </span>
      )}
    </span>
  );
}
