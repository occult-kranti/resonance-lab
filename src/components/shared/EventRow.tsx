import { AlertTriangle, CircleAlert, Info, OctagonX, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatSessionTime } from "@/sim/store";
import { SUBSYSTEM_COLORS } from "./colors";
import type { Severity, SimEvent } from "@/sim/store";

const SEVERITY_ICON: Record<Severity, typeof Info> = {
  NOMINAL: Info,
  ADVISORY: ShieldCheck,
  WARNING: AlertTriangle,
  FAULT: CircleAlert,
  INTERLOCK: OctagonX,
};

const SEVERITY_COLOR: Record<Severity, string> = {
  NOMINAL: "text-faint",
  ADVISORY: "text-blue",
  WARNING: "text-warn",
  FAULT: "text-bad",
  INTERLOCK: "text-bad",
};

/** Timeline event row (design.md §5.10). */
export default function EventRow({
  event,
  className,
}: {
  event: SimEvent;
  className?: string;
}) {
  const Icon = SEVERITY_ICON[event.severity];
  return (
    <div
      className={cn(
        "flex items-center gap-3 border-b border-line/50 px-3 py-1.5",
        className,
      )}
      title={new Date(event.wall).toLocaleTimeString()}
    >
      <span className="w-20 shrink-0 font-mono text-[10px] tabular-nums text-faint">
        {formatSessionTime(event.t)}
      </span>
      <span
        aria-hidden
        className={cn("h-1.5 w-1.5 shrink-0 rounded-full", SUBSYSTEM_COLORS[event.subsystem])}
      />
      <span className="w-16 shrink-0 font-mono text-[9px] uppercase tracking-[0.1em] text-faint">
        {event.subsystem}
      </span>
      <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-dim">
        {event.message}
      </span>
      <Icon size={12} strokeWidth={1.5} className={cn("shrink-0", SEVERITY_COLOR[event.severity])} />
    </div>
  );
}
