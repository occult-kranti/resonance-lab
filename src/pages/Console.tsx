import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GradedBadge } from "@/components/shared";
import { formatSessionTime, useGrade, useSim } from "@/sim/store";
import StatusTiles from "@/components/console/StatusTiles";
import NextAction from "@/components/console/NextAction";
import FitCard from "@/components/console/FitCard";
import ThermalCard from "@/components/console/ThermalCard";
import StageCard from "@/components/console/StageCard";
import VnaPreview from "@/components/console/VnaPreview";
import ScopePreview from "@/components/console/ScopePreview";
import MiniChamber from "@/components/console/MiniChamber";
import SessionStrip from "@/components/console/SessionStrip";
import { setOperatorName, useOperatorName } from "@/components/console/operator";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Page-local keyframes (index.css is scaffold-owned). */
function ConsoleKeyframes() {
  return (
    <style>{`
      @media (prefers-reduced-motion: no-preference) {
        @keyframes nra-breathe {
          0%, 100% { border-color: var(--line); box-shadow: none; }
          50% { border-color: rgba(45,212,200,0.45); box-shadow: 0 0 16px rgba(45,212,200,0.08); }
        }
        @keyframes sphere-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.004); }
        }
        @keyframes ldv-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      }
    `}</style>
  );
}

/** Staggered slide-in title letters (60 ms per letter). */
function StaggeredTitle({ text }: { text: string }) {
  return (
    <h1
      aria-label={text}
      className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl"
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          aria-hidden
          className="inline-block"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06, duration: 0.25, ease: EASE }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </h1>
  );
}

/** Session elapsed timer, ticking 1 Hz straight from the sim store. */
function SessionTimer() {
  const [, force] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => force((n) => n + 1), 1000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
        Session
      </span>
      <span className="font-mono text-xl font-bold tabular-nums leading-none text-ink readout-glow">
        {formatSessionTime(useSim.getState().simTime)}
      </span>
    </div>
  );
}

/** Inline-editable operator identity, persisted via console/operator store. */
function OperatorSignIn() {
  const name = useOperatorName();
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
        Who is at the bench
      </span>
      <input
        value={name}
        onChange={(e) => setOperatorName(e.target.value)}
        placeholder="tap to sign in"
        spellCheck={false}
        maxLength={32}
        className={cn(
          "w-44 rounded-sm border border-transparent bg-transparent px-1 py-0.5 font-mono text-sm tabular-nums outline-none transition-colors",
          "placeholder:text-faint/70 hover:border-line focus:border-line-bright focus:bg-void",
          name ? "text-trace" : "text-faint",
        )}
        aria-label="Operator name"
      />
    </div>
  );
}

function QualityBadgePop() {
  const grade = useGrade();
  return (
    <motion.div
      key={grade}
      initial={{ scale: 0.8, opacity: 0.4 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.22, ease: EASE }}
      className="flex flex-col items-end gap-0.5"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
        Session quality
      </span>
      <GradedBadge grade={grade} />
    </motion.div>
  );
}

/**
 * Operator Console (console.md) — mission-control dashboard.
 * Facility-dark dims the work area 40% until mains is on.
 */
export default function Console() {
  const power = useSim((s) => s.power);
  const dark = power === "POWER_OFF";

  return (
    <div className="p-4 md:p-6">
      <ConsoleKeyframes />
      <div className="grid grid-cols-12 gap-4">
        {/* Row 1 — header band */}
        <motion.div
          className="relative col-span-12 overflow-hidden rounded-md border border-line bg-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "url(/noise-texture.png)", backgroundSize: "256px" }}
          />
          <div className="relative flex flex-wrap items-center gap-x-8 gap-y-3 px-4 py-3">
            <StaggeredTitle text="Operator Console" />
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 md:ml-auto">
              <OperatorSignIn />
              <SessionTimer />
              <QualityBadgePop />
            </div>
          </div>
        </motion.div>

        {/* Rows 2–5 — dimmed while facility dark */}
        <motion.div
          className="col-span-12 grid grid-cols-12 gap-4"
          initial="off"
          animate="on"
          variants={{ on: { transition: { staggerChildren: 0.06 } } }}
        >
          {dark && (
            <p className="col-span-12 -mb-1 rounded-sm border border-line bg-shell px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
              Facility dark — readings frozen. Flip mains power to bring the bay alive.
            </p>
          )}

          <motion.div
            className="col-span-12"
            variants={{
              off: { opacity: 0, y: 16 },
              on: { opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE } },
            }}
          >
            <StatusTiles />
          </motion.div>

          <motion.div
            className="col-span-12 lg:col-span-4"
            variants={{
              off: { opacity: 0, y: 16 },
              on: { opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE } },
            }}
          >
            <NextAction />
          </motion.div>
          <motion.div
            className={cn("col-span-12 lg:col-span-4", dark && "opacity-60")}
            variants={{
              off: { opacity: 0, y: 16 },
              on: { opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE } },
            }}
          >
            <FitCard />
          </motion.div>
          <motion.div
            className={cn("col-span-12 lg:col-span-4", dark && "opacity-60")}
            variants={{
              off: { opacity: 0, y: 16 },
              on: { opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE } },
            }}
          >
            <ThermalCard />
          </motion.div>

          <motion.div
            className={cn("col-span-12 md:col-span-6 xl:col-span-3", dark && "opacity-60")}
            variants={{
              off: { opacity: 0, y: 16 },
              on: { opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE } },
            }}
          >
            <StageCard />
          </motion.div>
          <motion.div
            className={cn("col-span-12 md:col-span-6 xl:col-span-3", dark && "opacity-60")}
            variants={{
              off: { opacity: 0, y: 16 },
              on: { opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE } },
            }}
          >
            <VnaPreview />
          </motion.div>
          <motion.div
            className={cn("col-span-12 md:col-span-6 xl:col-span-3", dark && "opacity-60")}
            variants={{
              off: { opacity: 0, y: 16 },
              on: { opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE } },
            }}
          >
            <ScopePreview />
          </motion.div>
          <motion.div
            className={cn("col-span-12 md:col-span-6 xl:col-span-3", dark && "opacity-60")}
            variants={{
              off: { opacity: 0, y: 16 },
              on: { opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE } },
            }}
          >
            <MiniChamber />
          </motion.div>

          <motion.div
            className="col-span-12"
            variants={{
              off: { opacity: 0, y: 16 },
              on: { opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE } },
            }}
          >
            <SessionStrip />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
