import {
  ATM_HPA,
  QUALITY_PRESSURE_HPA,
  formatPressure,
} from "@/sim/store";
import type { SimState } from "@/sim/store";

/**
 * LOC-1 protocol model (design.md §6, console.md §Row 3A, copilot.md).
 * Pure derivations from sim state — shared by the Console "Next Recommended
 * Action" card and the Copilot intent engine.
 */

export interface Loc1Step {
  index: number; // 1..7
  id: string;
  title: string;
  done: boolean;
}

export interface NextActionModel {
  /** 1..7, or 0 when the protocol is complete */
  stepIndex: number;
  stepId: string;
  title: string;
  rationale: string;
  /** 0..1 progress bar value, or null when not applicable */
  progress: number | null;
  /** primary CTA */
  ctaLabel: string;
  /** route to navigate to, or null when the CTA fires a direct sim action */
  ctaTo: string | null;
  /** direct sim action id, or null */
  ctaAction: "power" | "roughing" | "turbo" | "thermal" | "calibrate" | "sweep" | null;
  complete: boolean;
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

export function loc1Steps(s: SimState): Loc1Step[] {
  const runs = s.blinding.runs.filter((r) => r.valid);
  const pairs = Math.min(
    runs.filter((r) => r.label === "A").length,
    runs.filter((r) => r.label === "B").length,
  );
  const done = {
    power: s.power === "FACILITY_ON",
    vacuum: s.pressure < QUALITY_PRESSURE_HPA,
    thermal: s.thermalStable,
    clock: s.clock === "LOCKED",
    cal: s.vnaCalibrated,
    fit: s.lastFit !== null,
    runs: pairs >= 3,
  };
  return [
    { index: 1, id: "power", title: "Power up", done: done.power },
    { index: 2, id: "pump", title: "Pump down", done: done.vacuum },
    { index: 3, id: "thermal", title: "Stabilize thermal", done: done.thermal },
    { index: 4, id: "clock", title: "Lock reference", done: done.clock },
    { index: 5, id: "cal", title: "Calibrate VNA", done: done.cal },
    { index: 6, id: "sweep", title: "Sweep & fit", done: done.fit },
    { index: 7, id: "runs", title: "Blinded A/B runs", done: done.runs },
  ];
}

export function currentLoc1Step(s: SimState): Loc1Step {
  const steps = loc1Steps(s);
  return steps.find((st) => !st.done) ?? steps[steps.length - 1];
}

export function loc1Complete(s: SimState): boolean {
  return loc1Steps(s).every((st) => st.done);
}

/** Log-scale pump-down progress from atmosphere to the quality threshold. */
function pumpProgress(pressure: number): number {
  const p = Math.min(Math.max(pressure, QUALITY_PRESSURE_HPA), ATM_HPA);
  return (
    (Math.log10(ATM_HPA) - Math.log10(p)) /
    (Math.log10(ATM_HPA) - Math.log10(QUALITY_PRESSURE_HPA))
  );
}

export function nextAction(s: SimState): NextActionModel {
  // Step 1 — power
  if (s.power === "POWER_OFF") {
    return {
      stepIndex: 1,
      stepId: "power",
      title: "STEP 1 — POWER UP",
      rationale:
        "The bay is dark. Flip the mains rocker and let the instrument rack boot — pumps, thermal and the reference all need facility power.",
      progress: null,
      ctaLabel: "Power on",
      ctaTo: null,
      ctaAction: "power",
      complete: false,
    };
  }
  if (s.power === "BOOTING") {
    return {
      stepIndex: 1,
      stepId: "power",
      title: "STEP 1 — POWER UP",
      rationale: `Instrument rack booting (staggered self-tests) — ${Math.max(0, 4 - s.bootT).toFixed(1)} s remaining.`,
      progress: clamp01(s.bootT / 4),
      ctaLabel: "Booting…",
      ctaTo: null,
      ctaAction: null,
      complete: false,
    };
  }

  // Step 2 — vacuum
  if (s.pressure >= QUALITY_PRESSURE_HPA) {
    if (!s.roughingOn && !s.turboOn) {
      return {
        stepIndex: 2,
        stepId: "pump",
        title: "STEP 2 — PUMP DOWN",
        rationale: `Chamber is at ${formatPressure(s.pressure)}. Start the roughing pump to reach below 2 hPa, then the turbo can take over.`,
        progress: pumpProgress(s.pressure),
        ctaLabel: "Start roughing pump",
        ctaTo: null,
        ctaAction: "roughing",
        complete: false,
      };
    }
    if (s.roughingOn && s.pressure >= 3 && !s.turboOn) {
      return {
        stepIndex: 2,
        stepId: "pump",
        title: "STEP 2 — PUMP DOWN",
        rationale: `Roughing pump pulling — ${formatPressure(s.pressure)} and falling. The turbo unlocks below 3 hPa.`,
        progress: pumpProgress(s.pressure),
        ctaLabel: "Roughing…",
        ctaTo: null,
        ctaAction: null,
        complete: false,
      };
    }
    if (!s.turboOn) {
      return {
        stepIndex: 2,
        stepId: "pump",
        title: "STEP 2 — PUMP DOWN",
        rationale: `Crossover reached at ${formatPressure(s.pressure)} — the turbomolecular pump is authorized. Spool it up for high vacuum.`,
        progress: pumpProgress(s.pressure),
        ctaLabel: "Start turbo pump",
        ctaTo: null,
        ctaAction: "turbo",
        complete: false,
      };
    }
    return {
      stepIndex: 2,
      stepId: "pump",
      title: "STEP 2 — PUMP DOWN",
      rationale: `Turbo at ${Math.round(s.turboSpool)}% — pressure ${formatPressure(s.pressure)}, target below 1×10⁻³ hPa.`,
      progress: pumpProgress(s.pressure),
      ctaLabel: "Pumping…",
      ctaTo: null,
      ctaAction: null,
      complete: false,
    };
  }

  // Step 3 — thermal
  if (!s.thermalStable) {
    if (!s.thermalEnabled) {
      return {
        stepIndex: 3,
        stepId: "thermal",
        title: "STEP 3 — STABILIZE THERMAL",
        rationale: `Vacuum is good (${formatPressure(s.pressure)}), but the chamber is at ${s.temperature.toFixed(3)} °C. Engage the thermal loop toward ${s.setpoint.toFixed(3)} °C.`,
        progress: null,
        ctaLabel: "Engage thermal loop",
        ctaTo: null,
        ctaAction: "thermal",
        complete: false,
      };
    }
    const err = Math.abs(s.temperature - s.setpoint);
    const eta = err < 0.005 ? Math.max(0, 5 - s.stableTimer) : Math.min(90, err * 25 + 10);
    return {
      stepIndex: 3,
      stepId: "thermal",
      title: "STEP 3 — STABILIZE THERMAL",
      rationale: `Chamber is at ${s.temperature.toFixed(3)} °C — thermal loop closing. Estimated ${Math.round(eta)} s to stable.`,
      progress: clamp01(1 - err / 0.6),
      ctaLabel: "Open thermal view",
      ctaTo: "/console",
      ctaAction: null,
      complete: false,
    };
  }

  // Step 4 — clock
  if (s.clock !== "LOCKED") {
    const phase = s.clock === "WARMING" ? 15 : 10;
    const label =
      s.clock === "WARMING"
        ? "Rubidium oven warming"
        : s.clock === "LOCKING"
          ? "Disciplining to GPSDO"
          : "Oscillator cold";
    return {
      stepIndex: 4,
      stepId: "clock",
      title: "STEP 4 — LOCK REFERENCE",
      rationale: `${label} — the 10 MHz GPSDO/Rb reference needs ${Math.max(0, phase - s.clockT).toFixed(0)} s more. A swept measurement is only as good as its clock.`,
      progress: clamp01(s.clockT / phase),
      ctaLabel: "Open reference",
      ctaTo: "/reference",
      ctaAction: null,
      complete: false,
    };
  }

  // Step 5 — VNA cal
  if (!s.vnaCalibrated) {
    return {
      stepIndex: 5,
      stepId: "cal",
      title: "STEP 5 — CALIBRATE VNA",
      rationale:
        "Reference locked. Run an open/short/load calibration so the S11 sweep measures the sphere — not the cables.",
      progress: null,
      ctaLabel: "Calibrate VNA",
      ctaTo: null,
      ctaAction: "calibrate",
      complete: false,
    };
  }

  // Step 6 — sweep & fit
  if (!s.lastFit) {
    return {
      stepIndex: 6,
      stepId: "sweep",
      title: "STEP 6 — SWEEP & FIT",
      rationale:
        "All gates are green. Sweep S11 across 20.5–21.0 kHz and fit the breathing-mode dip (expect ≈ 20.75 kHz, Q ≈ 100,000).",
      progress: s.sweeping ? clamp01(s.sweepProgress) : null,
      ctaLabel: s.sweeping ? "Sweeping…" : "Start sweep",
      ctaTo: s.sweeping ? "/vna" : null,
      ctaAction: s.sweeping ? null : "sweep",
      complete: false,
    };
  }

  // Step 7 — blinded runs
  const runs = s.blinding.runs.filter((r) => r.valid);
  const pairs = Math.min(
    runs.filter((r) => r.label === "A").length,
    runs.filter((r) => r.label === "B").length,
  );
  if (pairs < 3) {
    return {
      stepIndex: 7,
      stepId: "runs",
      title: "STEP 7 — BLINDED A/B RUNS",
      rationale: `${pairs}/3 valid position pairs recorded. Alternate POSITION 1 / POSITION 2 on the stage, re-sweep, and record each run — the scheduler keeps the assignment hidden.`,
      progress: clamp01(pairs / 3),
      ctaLabel: "Open Experiment Runs",
      ctaTo: "/runs",
      ctaAction: null,
      complete: false,
    };
  }

  return {
    stepIndex: 0,
    stepId: "done",
    title: "LOC-1 COMPLETE",
    rationale:
      "Three valid blinded pairs recorded. Review your measurement grade and unblind the positions in Experiment Runs.",
    progress: 1,
    ctaLabel: "Review grade",
    ctaTo: "/runs",
    ctaAction: null,
    complete: true,
  };
}
