import { cn } from "@/lib/utils";

export interface PhaseStep {
  index: number;
  title: string;
  body?: string;
  status: "done" | "current" | "locked";
}

/** LOC-1 phase stepper (design.md §5.7). Horizontal on desktop, vertical on mobile. */
export default function PhaseStepper({
  steps,
  orientation = "horizontal",
  className,
}: {
  steps: PhaseStep[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}) {
  const horizontal = orientation === "horizontal";
  return (
    <ol
      className={cn(
        horizontal ? "flex flex-col gap-0 md:flex-row md:gap-0" : "flex flex-col",
        className,
      )}
    >
      {steps.map((step, i) => (
        <li
          key={step.index}
          className={cn("relative flex", horizontal ? "md:flex-1 md:flex-col" : "flex-row gap-4 pb-6")}
        >
          {/* connector hairline */}
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className={cn(
                "absolute bg-line",
                horizontal
                  ? "left-4 right-0 top-[13px] hidden h-px md:left-[calc(50%+14px)] md:right-[calc(-50%+14px)] md:block"
                  : "bottom-0 left-[13px] top-7 w-px",
              )}
            />
          )}
          <div className={cn("flex items-start gap-3", horizontal && "md:flex-col md:items-center md:text-center")}>
            <span
              className={cn(
                "z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] transition-colors",
                step.status === "done" && "border-trace bg-trace/15 text-trace",
                step.status === "current" && "animate-led-warn border-trace-2 bg-trace-2/15 text-trace-2",
                step.status === "locked" && "border-line bg-panel text-faint",
              )}
            >
              {step.status === "done" ? "✓" : step.index}
            </span>
            <div className={cn("min-w-0", horizontal && "md:px-2")}>
              <p
                className={cn(
                  "font-display text-[11px] font-semibold uppercase tracking-[0.12em]",
                  step.status === "locked" ? "text-faint" : step.status === "current" ? "text-trace-2" : "text-ink",
                )}
              >
                {step.title}
              </p>
              {step.body && (
                <p className="mt-1 text-xs leading-relaxed text-dim">{step.body}</p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
