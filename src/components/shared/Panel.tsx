import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type AccentColor =
  | "trace"
  | "trace-2"
  | "copper"
  | "go"
  | "warn"
  | "bad"
  | "violet"
  | "blue"
  | "dim";

const ACCENT_BG: Record<AccentColor, string> = {
  trace: "bg-trace",
  "trace-2": "bg-trace-2",
  copper: "bg-copper",
  go: "bg-go",
  warn: "bg-warn",
  bad: "bg-bad",
  violet: "bg-violet",
  blue: "bg-blue",
  dim: "bg-dim",
};

/** Corner tick SVGs for the "instrument bezel" variant. */
function CornerTicks() {
  const c = "stroke-line-bright";
  const tick = "h-2 w-2 absolute fill-none";
  return (
    <>
      <svg className={cn(tick, "left-1 top-1")} viewBox="0 0 8 8">
        <path d="M0 8V2Q0 0 2 0H8" className={c} strokeWidth="1" />
      </svg>
      <svg className={cn(tick, "right-1 top-1")} viewBox="0 0 8 8">
        <path d="M8 8V2Q8 0 6 0H0" className={c} strokeWidth="1" />
      </svg>
      <svg className={cn(tick, "bottom-1 left-1")} viewBox="0 0 8 8">
        <path d="M0 0V6Q0 8 2 8H8" className={c} strokeWidth="1" />
      </svg>
      <svg className={cn(tick, "bottom-1 right-1")} viewBox="0 0 8 8">
        <path d="M8 0V6Q8 8 6 8H0" className={c} strokeWidth="1" />
      </svg>
    </>
  );
}

export default function Panel({
  title,
  accent,
  bezel = false,
  right,
  className,
  children,
  pad = true,
}: {
  title?: string;
  /** subsystem-colored 2px left edge */
  accent?: AccentColor;
  /** bezel variant: corner ticks + inset top highlight */
  bezel?: boolean;
  /** optional header-right slot */
  right?: ReactNode;
  className?: string;
  children: ReactNode;
  pad?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative rounded-md border border-line bg-panel transition-[border-color,transform] duration-150",
        "hover:border-line-bright",
        bezel && "panel-inset",
        className,
      )}
    >
      {bezel && <CornerTicks />}
      {accent && (
        <span
          className={cn(
            "absolute left-0 top-2 bottom-2 w-[2px] rounded-full",
            ACCENT_BG[accent],
          )}
          aria-hidden
        />
      )}
      {title && (
        <header className="flex items-center justify-between border-b border-line px-4 py-2.5">
          <h2 className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-dim">
            {title}
          </h2>
          {right}
        </header>
      )}
      <div className={cn(pad && "p-4")}>{children}</div>
    </section>
  );
}
