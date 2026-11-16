import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Panel, EventRow } from "@/components/shared";
import { useEvents } from "@/sim/store";

/** Session strip (console.md §Row 5): last 5 events ticker + quick links. */
export default function SessionStrip() {
  const events = useEvents();
  const last = events.slice(-5).reverse();

  return (
    <Panel
      title="Session log"
      right={
        <Link
          to="/timeline"
          className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:text-trace"
        >
          View full timeline
          <ArrowRight size={11} strokeWidth={1.5} />
        </Link>
      }
      pad={false}
    >
      <div>
        {last.length === 0 ? (
          <p className="px-3 py-3 font-mono text-[11px] text-faint">
            No events yet — power up the facility and the log starts writing itself.
          </p>
        ) : (
          last.map((e) => <EventRow key={e.id} event={e} />)
        )}
        <div className="flex flex-wrap items-center gap-4 border-t border-line/50 px-3 py-2">
          <Link
            to="/notebook"
            className="font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:text-trace"
          >
            Notebook
          </Link>
          <Link
            to="/training"
            className="font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:text-trace"
          >
            Training checklist
          </Link>
          <Link
            to="/faults"
            className="font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:text-trace"
          >
            Inject a fault (training mode)
          </Link>
        </div>
      </div>
    </Panel>
  );
}
