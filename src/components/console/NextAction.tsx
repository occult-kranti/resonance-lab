import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router";
import { Panel } from "@/components/shared";
import { simActions, useSim } from "@/sim/store";
import { nextAction } from "./loc1";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Next Recommended Action (console.md §Row 3A) — logic-driven LOC-1 step card.
 * Content crossfades on step change; border breathes trace while actionable.
 */
export default function NextAction() {
  const navigate = useNavigate();
  // subscribe to the whole store once; derivation is cheap
  const model = useSim((s) => nextAction(s));

  const fire = () => {
    switch (model.ctaAction) {
      case "power":
        simActions.powerOn();
        break;
      case "roughing":
        simActions.startRoughing();
        break;
      case "turbo":
        simActions.startTurbo();
        break;
      case "thermal":
        simActions.setThermalEnabled(true);
        break;
      case "calibrate":
        simActions.calibrateVna();
        break;
      case "sweep":
        simActions.startSweep();
        break;
      default:
        break;
    }
    if (model.ctaTo) navigate(model.ctaTo);
  };

  const idle = !model.ctaAction && !model.complete && model.ctaTo === null;

  return (
    <Panel
      accent="trace"
      bezel
      title="Next recommended action"
      className={cn(
        "h-full",
        !model.complete && "animate-[nra-breathe_3s_ease-in-out_infinite]",
        model.complete && "border-go/50",
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={model.stepId}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="flex min-h-[168px] flex-col"
        >
          <p
            className={cn(
              "font-display text-sm font-semibold uppercase tracking-[0.12em]",
              model.complete ? "text-go" : "text-trace",
            )}
          >
            {model.title}
          </p>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-dim">
            {model.rationale}
          </p>

          {model.progress !== null && (
            <div className="mt-3">
              <div className="h-1 overflow-hidden rounded-full bg-void">
                <div
                  className={cn(
                    "h-full rounded-full transition-[width] duration-300 ease-linear",
                    model.complete ? "bg-go" : "bg-trace",
                  )}
                  style={{ width: `${Math.round(model.progress * 100)}%` }}
                />
              </div>
            </div>
          )}

          <div className="mt-4">
            <button
              onClick={fire}
              disabled={idle}
              className={cn(
                "inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-all active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40",
                model.complete
                  ? "border-go/60 bg-go/10 text-go hover:bg-go/20"
                  : "border-trace/60 bg-trace/10 text-trace hover:bg-trace/20",
              )}
            >
              {model.complete && <CheckCircle2 size={12} strokeWidth={1.5} />}
              {model.ctaLabel}
              <ArrowRight size={12} strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </Panel>
  );
}
