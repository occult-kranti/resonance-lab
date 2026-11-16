import { cn } from "@/lib/utils";

/** Small instrument toggle (design.md §5.13). */
export function ToggleSwitch({
  on,
  onChange,
  label,
  disabled,
  className,
}: {
  on: boolean;
  onChange: (on: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      disabled={disabled}
      onClick={() => onChange(!on)}
      className={cn(
        "group inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
    >
      <span
        className={cn(
          "relative h-4 w-8 rounded-full border transition-colors",
          on ? "border-trace/60 bg-trace/20" : "border-line bg-void",
        )}
      >
        <span
          className={cn(
            "absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full transition-all duration-150",
            on ? "left-[18px] bg-trace led-glow" : "left-[3px] bg-faint",
          )}
        />
      </span>
      {label && (
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-dim group-hover:text-ink">
          {label}
        </span>
      )}
    </button>
  );
}

/** Instrument rocker for mains power — larger, with travel animation (design.md §5.13). */
export function RockerButton({
  on,
  onChange,
  label = "MAINS",
  disabled,
  className,
}: {
  on: boolean;
  onChange: (on: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      disabled={disabled}
      onClick={() => onChange(!on)}
      className={cn(
        "group flex flex-col items-center gap-1.5 disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
    >
      <span
        className={cn(
          "relative h-14 w-10 overflow-hidden rounded-sm border bg-void transition-colors panel-inset",
          on ? "border-trace-2/70" : "border-line group-hover:border-line-bright",
        )}
      >
        {/* rocker paddle — top half pressed when ON */}
        <span
          className={cn(
            "absolute inset-x-1 top-1 h-[calc(50%-4px)] rounded-[2px] border transition-transform duration-150",
            on
              ? "translate-y-[22px] border-trace-2/70 bg-trace-2/15"
              : "translate-y-0 border-line-bright bg-panel-2",
          )}
        />
        <span
          className={cn(
            "absolute inset-x-0 top-1/2 text-center font-mono text-[8px] leading-none tracking-widest",
            on ? "text-trace-2" : "text-faint",
          )}
        >
          {on ? "I" : "O"}
        </span>
      </span>
      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim group-hover:text-ink">
        {label}
      </span>
    </button>
  );
}
