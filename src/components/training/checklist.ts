import type { AccentColor } from "@/components/shared/Panel";
import {
  formatPressure,
  type SimState,
} from "@/sim/store";

/**
 * LOC-1 checklist definition (training.md §Checklist sections).
 * `auto` items verify themselves against live sim state.
 * `attest` items are judgment calls the operator ticks manually.
 * The `name` item verifies when the operator name is set.
 */

export type ItemKind = "auto" | "attest" | "name";

export interface CheckItem {
  id: string;
  text: string;
  kind: ItemKind;
  /** deep-link route for "Go there" */
  route?: string;
  pred?: (s: SimState) => boolean;
  live?: (s: SimState) => string;
}

export interface CheckSection {
  id: string;
  title: string;
  accent: AccentColor;
  items: CheckItem[];
}

const validPairs = (s: SimState) => {
  const v = s.blinding.runs.filter((r) => r.valid);
  return Math.min(
    v.filter((r) => r.label === "A").length,
    v.filter((r) => r.label === "B").length,
  );
};

const earlyPeek = (s: SimState) =>
  s.events.some((e) => e.message.includes("MANUALLY before"));

export const SECTIONS: CheckSection[] = [
  {
    id: "bringup",
    title: "Bring the bay alive",
    accent: "trace-2",
    items: [
      {
        id: "boot",
        text: "Mains on, boot complete",
        kind: "auto",
        route: "/console",
        pred: (s) => s.power === "FACILITY_ON",
        live: (s) =>
          s.power === "FACILITY_ON"
            ? "FACILITY ON"
            : s.power === "BOOTING"
              ? `BOOTING ${s.bootT.toFixed(1)} s`
              : "POWER OFF",
      },
      {
        id: "sign",
        text: "Sign the console (operator name set)",
        kind: "name",
        route: "/console",
      },
      {
        id: "interlocks",
        text: "Confirm all four interlocks closed",
        kind: "auto",
        route: "/console",
        pred: (s) =>
          s.power === "FACILITY_ON" &&
          !s.venting &&
          !Object.values(s.faults).some(Boolean),
        live: (s) =>
          s.power !== "FACILITY_ON"
            ? "POWER OFF"
            : Object.values(s.faults).some(Boolean) || s.venting
              ? "INTERLOCK OPEN"
              : "4/4 CLOSED",
      },
    ],
  },
  {
    id: "vacuum",
    title: "Make nothing (vacuum)",
    accent: "blue",
    items: [
      {
        id: "roughing",
        text: "Start roughing pump",
        kind: "auto",
        route: "/console",
        pred: (s) => s.roughingOn,
        live: (s) => (s.roughingOn ? "ROUGHING ON" : "ROUGHING OFF"),
      },
      {
        id: "crossover",
        text: "Reach crossover < 2 hPa",
        kind: "auto",
        route: "/console",
        pred: (s) => s.pressure < 2,
        live: (s) => formatPressure(s.pressure),
      },
      {
        id: "spool",
        text: "Spool turbo to 100%",
        kind: "auto",
        route: "/console",
        pred: (s) => s.turboSpool >= 100,
        live: (s) => `${s.turboSpool.toFixed(0)} %`,
      },
      {
        id: "highvac",
        text: "Reach < 1×10⁻³ hPa",
        kind: "auto",
        route: "/console",
        pred: (s) => s.pressure < 1e-3,
        live: (s) => formatPressure(s.pressure),
      },
      {
        id: "workvac",
        text: "Reach working vacuum < 5×10⁻⁵ hPa",
        kind: "auto",
        route: "/console",
        pred: (s) => s.pressure < 5e-5,
        live: (s) => formatPressure(s.pressure),
      },
    ],
  },
  {
    id: "thermal",
    title: "Twenty-two point zero zero zero",
    accent: "copper",
    items: [
      {
        id: "engage",
        text: "Engage thermal loop",
        kind: "auto",
        route: "/console",
        pred: (s) => s.thermalEnabled,
        live: (s) => (s.thermalEnabled ? "LOOP ENGAGED" : "LOOP IDLE"),
      },
      {
        id: "near",
        text: "Reach setpoint ± 0.05 °C",
        kind: "auto",
        route: "/console",
        pred: (s) => Math.abs(s.temperature - s.setpoint) < 0.05,
        live: (s) => `${s.temperature.toFixed(3)} °C`,
      },
      {
        id: "hold",
        text: "Hold |Δ| < 0.005 °C for 5 s",
        kind: "auto",
        route: "/console",
        pred: (s) => s.thermalStable,
        live: (s) =>
          s.thermalStable
            ? "STABLE"
            : `hold ${Math.min(s.stableTimer, 5).toFixed(1)} / 5 s`,
      },
      {
        id: "drift",
        text: "Drift |rate| ≤ 0.01 °C/min",
        kind: "auto",
        route: "/console",
        pred: (s) => s.thermalStable && Math.abs(s.driftCPerMin) <= 0.01,
        live: (s) => `${s.driftCPerMin >= 0 ? "+" : ""}${s.driftCPerMin.toFixed(3)} °C/min`,
      },
    ],
  },
  {
    id: "clock",
    title: "Discipline the clock",
    accent: "violet",
    items: [
      {
        id: "refpower",
        text: "Reference powered",
        kind: "auto",
        route: "/reference",
        pred: (s) => s.clock !== "COLD",
        live: (s) => s.clock,
      },
      {
        id: "warmup",
        text: "Warmup complete (lamp + oven)",
        kind: "auto",
        route: "/reference",
        pred: (s) => s.clock === "LOCKING" || s.clock === "LOCKED",
        live: (s) => s.clock,
      },
      {
        id: "lock",
        text: "LOCK achieved on the 10 MHz output",
        kind: "auto",
        route: "/reference",
        pred: (s) => s.clock === "LOCKED",
        live: (s) => s.clock,
      },
      {
        id: "bnc",
        text: "VNA ref input connected (BNC) — self-attested",
        kind: "attest",
        route: "/reference",
      },
    ],
  },
  {
    id: "cal",
    title: "Calibrate, then measure",
    accent: "trace",
    items: [
      {
        id: "osl",
        text: "Open/Short/Load standards done",
        kind: "auto",
        route: "/vna",
        pred: (s) => s.vnaCalibrated,
        live: (s) => (s.vnaCalibrated ? "CAL OK" : "NOT CALIBRATED"),
      },
      {
        id: "span",
        text: "Sweep window straddles the resonance",
        kind: "auto",
        route: "/vna",
        pred: (s) =>
          !!s.lastSweep &&
          s.lastSweep.params.startKHz <= 229.5 &&
          s.lastSweep.params.stopKHz >= 230.0,
        live: (s) =>
          s.lastSweep
            ? `${s.lastSweep.params.startKHz.toFixed(1)}–${s.lastSweep.params.stopKHz.toFixed(1)} kHz`
            : `${s.vnaParams.startKHz.toFixed(1)}–${s.vnaParams.stopKHz.toFixed(1)} kHz (not swept)`,
      },
      {
        id: "points",
        text: "≥ 401 points in the sweep",
        kind: "auto",
        route: "/vna",
        pred: (s) => !!s.lastSweep && s.lastSweep.params.points >= 401,
        live: (s) =>
          `${s.lastSweep ? s.lastSweep.params.points : s.vnaParams.points} pts`,
      },
      {
        id: "fit",
        text: "Fit converged, σ(f₀) ≤ 0.01 kHz",
        kind: "auto",
        route: "/vna",
        pred: (s) => !!s.lastFit && s.lastFit.f0Sigma <= 10,
        live: (s) =>
          s.lastFit ? `σ ${s.lastFit.f0Sigma.toFixed(2)} Hz` : "no fit yet",
      },
      {
        id: "residuals",
        text: "Residuals look like weather, not a curve — self-attested",
        kind: "attest",
        route: "/vna",
      },
    ],
  },
  {
    id: "blind",
    title: "Run it blind",
    accent: "dim",
    items: [
      {
        id: "schedule",
        text: "Schedule generated (≥ 6 runs) — self-attested",
        kind: "attest",
        route: "/runs",
      },
      {
        id: "handover",
        text: "Stage handed to the scheduler — self-attested",
        kind: "attest",
        route: "/runs",
      },
      {
        id: "pairs",
        text: "≥ 3 valid pairs committed",
        kind: "auto",
        route: "/runs",
        pred: (s) => validPairs(s) >= 3,
        live: (s) => `${Math.min(validPairs(s), 3)} / 3 pairs`,
      },
      {
        id: "nopeek",
        text: "No early peeking (protocol integrity intact)",
        kind: "auto",
        route: "/runs",
        pred: (s) => validPairs(s) >= 3 && !earlyPeek(s),
        live: (s) =>
          earlyPeek(s) ? "PEEKED EARLY" : "INTEGRITY INTACT",
      },
    ],
  },
  {
    id: "grade",
    title: "Grade and reflect",
    accent: "go",
    items: [
      {
        id: "unblind",
        text: "Unblind after statistics",
        kind: "auto",
        route: "/runs",
        pred: (s) => s.blinding.revealed,
        live: (s) => (s.blinding.revealed ? "REVEALED" : "BLINDED"),
      },
      {
        id: "notebook",
        text: "Write session summary in the Notebook — self-attested",
        kind: "attest",
        route: "/notebook",
      },
      {
        id: "copilot",
        text: "State your limiting uncertainty aloud to the Copilot — self-attested",
        kind: "attest",
        route: "/copilot",
      },
    ],
  },
];

export const ALL_ITEMS = SECTIONS.flatMap((s) => s.items);
export const TOTAL_ITEMS = ALL_ITEMS.length;
