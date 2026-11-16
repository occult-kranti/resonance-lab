import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { RotateCcw } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StatusLED from "./shared/StatusLED";
import { Modal } from "./shared";
import { QUALITY_PRESSURE_HPA, formatSessionTime, simActions, useSim } from "@/sim/store";
import type { LedState } from "./shared/StatusLED";

const ROUTE_NAMES: Record<string, string> = {
  "/": "Lab Overview",
  "/console": "Operator Console",
  "/chamber": "Chamber & Stage",
  "/copilot": "AI Copilot",
  "/timeline": "Live Timeline",
  "/field-explorer": "Spatial Field Explorer",
  "/vna": "VNA Analysis",
  "/ldv": "LDV Scanner",
  "/oscilloscope": "Oscilloscope",
  "/reference": "Frequency Reference",
  "/runs": "Experiment Runs",
  "/notebook": "Lab Notebook",
  "/learning": "Learning Paths",
  "/training": "Training & Checklist",
  "/challenge": "Challenge Mode",
  "/faults": "Fault Injector",
};

function SessionClock() {
  const [, force] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => force((n) => n + 1), 1000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span className="font-mono text-[11px] tabular-nums text-dim">
      {formatSessionTime(useSim.getState().simTime)}
    </span>
  );
}

function FacilityLeds() {
  const power = useSim((s) => s.power);
  const pressure = useSim((s) => s.pressure);
  const thermalStable = useSim((s) => s.thermalStable);
  const thermalEnabled = useSim((s) => s.thermalEnabled);
  const clock = useSim((s) => s.clock);
  const faults = useSim((s) => s.faults);
  const anyFault = Object.values(faults).some(Boolean);

  const pwr: LedState = power === "FACILITY_ON" ? "on" : power === "BOOTING" ? "warn" : "off";
  const vac: LedState =
    pressure < QUALITY_PRESSURE_HPA ? "on" : pressure < 3 ? "warn" : "off";
  const thm: LedState = thermalStable ? "on" : thermalEnabled ? "warn" : "off";
  const clk: LedState =
    clock === "LOCKED" ? "on" : clock === "COLD" ? "off" : "warn";
  const saf: LedState = anyFault ? "fault" : "on";

  return (
    <div className="hidden items-center gap-4 rounded-full border border-line bg-panel px-4 py-1 md:flex">
      <StatusLED state={pwr} label="PWR" />
      <StatusLED state={vac} label="VAC" />
      <StatusLED state={thm} label="THM" />
      <StatusLED state={clk} label="CLK" />
      <StatusLED state={saf} label="SAF" />
    </div>
  );
}

/**
 * App shell (design.md §4): collapsible sidebar (normal flow, sticky),
 * 48px top status bar, content slot, 28px footer disclaimer.
 * Nested-route pattern: renders <Outlet/> (see react-dev.md contract).
 */
export default function Layout() {
  const location = useLocation();
  const [confirmReset, setConfirmReset] = useState(false);
  const pageName = ROUTE_NAMES[location.pathname] ?? "Resonance Lab";

  return (
    <div className="flex min-h-[100dvh] bg-void">
      <Navbar />
      <div className="flex min-w-0 flex-1 flex-col">
        {/* top status bar */}
        <header className="sticky top-0 z-40 flex h-12 shrink-0 items-center gap-4 border-b border-line bg-shell px-4">
          <p className="min-w-0 truncate font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-dim">
            <span className="text-faint">Bay 3 / </span>
            {pageName}
          </p>
          <div className="mx-auto">
            <FacilityLeds />
          </div>
          <div className="ml-auto flex items-center gap-3">
            <SessionClock />
            <span className="hidden font-mono text-[11px] text-faint sm:inline">
              OP: T. MARLOWE
            </span>
            <button
              onClick={() => setConfirmReset(true)}
              className="flex items-center gap-1.5 rounded-sm border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:border-line-bright hover:text-ink"
            >
              <RotateCcw size={11} strokeWidth={1.5} />
              Reset
            </button>
          </div>
        </header>

        {/* content slot */}
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>

      <Modal
        open={confirmReset}
        onClose={() => setConfirmReset(false)}
        title="Reset session"
      >
        <p className="text-sm leading-relaxed text-dim">
          This returns the facility to its initial state: power off, chamber at
          atmosphere, all runs and fit results discarded. Blinding is re-randomized.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => setConfirmReset(false)}
            className="rounded-sm border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-dim transition-colors hover:text-ink"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              simActions.resetSession();
              setConfirmReset(false);
            }}
            className="rounded-sm border border-bad/60 bg-bad/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-bad transition-colors hover:bg-bad/20"
          >
            Reset session
          </button>
        </div>
      </Modal>
    </div>
  );
}
