import type { SimState } from "@/sim/store";

/**
 * Discipline-loop model for the reference page (reference.md §"Lock telemetry").
 * Converging random walk when LOCKED; diverges under the clock-holdover fault.
 */
export interface DisciplineSample {
  offsetNs: number;
  freqOffsetMHz: number;
  efcPct: number;
  sats: number;
}

export function createDisciplineModel() {
  let offsetNs = 400; // starts far off, converges after lock
  let efcPct = 18;
  let satTimer = 0;
  let sats = 8;

  return function sample(
    dt: number,
    sim: Pick<SimState, "clock" | "power" | "refWanderHz" | "faults">,
  ): DisciplineSample {
    const holdover = sim.faults["clock-holdover"];
    if (sim.power === "POWER_OFF" || sim.clock === "COLD") {
      offsetNs = 400;
      efcPct = 18;
    } else if (sim.clock === "WARMING") {
      // free-running Rb: slow wander
      offsetNs += (Math.random() - 0.5) * 6 * dt;
    } else if (sim.clock === "LOCKING") {
      // discipline loop pulling in
      offsetNs += (-offsetNs * 0.25 + (Math.random() - 0.5) * 12) * dt * 4;
      efcPct += (52 - efcPct) * 0.1 * dt * 4;
    } else {
      // LOCKED
      if (holdover) {
        offsetNs += (sim.refWanderHz * 0.5 + (Math.random() - 0.5) * 8) * dt * 4;
      } else {
        // converging random walk into a ±2 ns band
        offsetNs += (-offsetNs * 0.35 + (Math.random() - 0.5) * 3) * dt * 4;
        offsetNs = Math.max(-2.4, Math.min(2.4, offsetNs));
        efcPct += (52 - efcPct) * 0.05 * dt * 4;
      }
    }
    satTimer += dt;
    if (satTimer > 4) {
      satTimer = 0;
      sats = Math.max(7, Math.min(10, sats + (Math.random() < 0.5 ? -1 : 1)));
    }
    return {
      offsetNs,
      freqOffsetMHz: offsetNs * 1.9 + (Math.random() - 0.5) * (sim.clock === "LOCKED" ? 0.4 : 40),
      efcPct,
      sats,
    };
  };
}

export type DisciplineModelFn = (
  dt: number,
  sim: Pick<SimState, "clock" | "power" | "refWanderHz" | "faults">,
) => DisciplineSample;
