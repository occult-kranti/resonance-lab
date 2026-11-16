import { cn } from "@/lib/utils";
import type { Grade } from "@/sim/store";

const STYLES: Record<Grade, string> = {
  INVALID: "border border-bad/70 text-bad",
  C: "bg-copper/20 border border-copper/60 text-copper",
  B: "bg-trace-2/20 border border-trace-2/60 text-trace-2",
  A: "bg-trace/20 border border-trace/60 text-trace readout-glow-trace",
  S: "bg-go/20 border border-go text-go led-glow",
};

/** Measurement quality badge — 28px pill (design.md §5.6). */
export default function GradedBadge({
  grade,
  className,
}: {
  grade: Grade;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center justify-center rounded-full px-3 font-display text-xs font-bold tracking-[0.14em]",
        STYLES[grade],
        className,
      )}
    >
      {grade === "INVALID" ? "INVALID" : `GRADE ${grade}`}
    </span>
  );
}
