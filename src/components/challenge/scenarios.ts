import {
  computeGrade,
  computeQuality,
  useSim,
} from "@/sim/store";
import type { FaultId, Grade, SimState } from "@/sim/store";
import { useFaultUiStore } from "@/components/faults/faultUiStore";

/**
 * Challenge scenarios (challenge.md §Scenarios — original copy).
 * Each scenario snapshots/resets the facility (handled by the page),
 * optionally stages an initial state, and defines live objectives,
 * completion, scoring axes, and grade thresholds.
 */

export type Tier = "CADET" | "OPERATOR" | "METROLOGIST";

export interface ChallengeCtx {
  s: SimState;
  startSimTime: number;
  startRuns: number;
  sweepsUsed: number;
  wrongCalls: number;
  injectedFault: FaultId | null;
  faultClearedAt: number | null;
}

export interface Objective {
  id: string;
  label: string;
  done: (ctx: ChallengeCtx) => boolean;
}

export interface AxisScores {
  time: number; // 0–100
  quality: number; // 0–100
  economy: number; // 0–100
}

export interface Scenario {
  id: string;
  tier: Tier;
  pips: 1 | 2 | 3 | 4 | 5;
  title: string;
  briefing: string;
  axes: [string, string, string];
  par: number; // par time, sim seconds
  timeLimit: number | null; // hard limit, sim seconds (null = none)
  /** staged initial state, applied after resetSession */
  setup: () => { injectedFault: FaultId | null };
  /** optional mid-run behavior, polled each tick */
  onTick?: (ctx: ChallengeCtx, inject: (id: FaultId) => void) => void;
  objectives: Objective[];
  complete: (ctx: ChallengeCtx) => boolean;
  scores: (ctx: ChallengeCtx) => AxisScores;
}

/* ---------------- helpers ---------------- */

export function timeScore(elapsed: number, par: number): number {
  if (elapsed <= 0.5 * par) return 100;
  if (elapsed <= par) return 100 - (60 * (elapsed - 0.5 * par)) / (0.5 * par);
  if (elapsed <= 2 * par) return 40 - (40 * (elapsed - par)) / par;
  return 0;
}

export function sigmaScore(sigmaHz: number): number {
  if (sigmaHz <= 2) return 100;
  if (sigmaHz <= 5) return 85;
  if (sigmaHz <= 10) return 65;
  if (sigmaHz <= 25) return 40;
  return 20;
}

export function totalScore(a: AxisScores): number {
  return Math.round((0.45 * a.time + 0.35 * a.quality + 0.2 * a.economy) * 10);
}

export function gradeFromScore(total: number, completed: boolean): Grade {
  if (!completed) return "INVALID";
  if (total >= 900) return "S";
  if (total >= 750) return "A";
  if (total >= 550) return "B";
  return "C";
}

const validPairs = (s: SimState) => {
  const v = s.blinding.runs.filter((r) => r.valid);
  return Math.min(
    v.filter((r) => r.label === "A").length,
    v.filter((r) => r.label === "B").length,
  );
};

const freshFit = (ctx: ChallengeCtx) =>
  ctx.s.lastFit !== null && ctx.s.lastFit.takenAt >= ctx.startSimTime;

const gateOk = (s: SimState) => computeQuality(s).valid;

/** Stage a warmed-up, VALID-gate-ready facility (scenario 3). */
function stageReadyFacility() {
  useSim.setState({
    power: "FACILITY_ON",
    bootT: 5,
    roughingOn: true,
    turboOn: true,
    turboSpool: 100,
    pressure: 3e-5,
    venting: false,
    thermalEnabled: true,
    temperature: 22.0002,
    thermalVel: 0,
    thermalStable: true,
    stableTimer: 10,
    clock: "LOCKED",
    clockT: 0,
    vnaCalibrated: true,
  });
}

/* ---------------- scenarios ---------------- */

export const SCENARIOS: Scenario[] = [
  {
    id: "cold-start",
    tier: "CADET",
    pips: 1,
    title: "Cold start",
    briefing:
      "Bay is dark, shift starts now. Reach a VALID fit in the shortest time. No faults — just discipline.",
    axes: ["Time", "Fit quality", "Economy"],
    par: 240,
    timeLimit: null,
    setup: () => ({ injectedFault: null }),
    objectives: [
      { id: "pwr", label: "Facility powered", done: (c) => c.s.power === "FACILITY_ON" },
      { id: "vac", label: "Pressure < 1×10⁻³ hPa", done: (c) => c.s.pressure < 1e-3 },
      { id: "thm", label: "Thermally stable", done: (c) => c.s.thermalStable },
      { id: "clk", label: "Reference LOCKED", done: (c) => c.s.clock === "LOCKED" },
      { id: "cal", label: "VNA calibrated", done: (c) => c.s.vnaCalibrated },
      {
        id: "fit",
        label: "VALID fit on record",
        done: (c) => gateOk(c.s) && freshFit(c),
      },
    ],
    complete: (c) => gateOk(c.s) && freshFit(c),
    scores: (c) => ({
      time: timeScore(c.s.simTime - c.startSimTime, 240),
      quality: c.s.lastFit ? sigmaScore(c.s.lastFit.f0Sigma) : 0,
      economy: Math.max(0, 100 - 10 * Math.max(0, c.sweepsUsed - 2)),
    }),
  },
  {
    id: "impatient-scheduler",
    tier: "CADET",
    pips: 2,
    title: "The impatient scheduler",
    briefing:
      "Six blinded runs wanted before the simulated shift ends (6:00 on the clock). Commit fast — but INVALID runs waste a slot.",
    axes: ["Time", "Valid runs", "Discipline"],
    par: 360,
    timeLimit: 360,
    setup: () => ({ injectedFault: null }),
    objectives: [
      {
        id: "gate",
        label: "Quality gate VALID",
        done: (c) => gateOk(c.s),
      },
      {
        id: "r2",
        label: "2 runs committed",
        done: (c) => c.s.blinding.runs.length - c.startRuns >= 2,
      },
      {
        id: "r4",
        label: "4 runs committed",
        done: (c) => c.s.blinding.runs.length - c.startRuns >= 4,
      },
      {
        id: "r6",
        label: "6 runs committed",
        done: (c) => c.s.blinding.runs.length - c.startRuns >= 6,
      },
    ],
    complete: (c) => c.s.blinding.runs.length - c.startRuns >= 6,
    scores: (c) => {
      const committed = c.s.blinding.runs.slice(c.startRuns);
      const valid = committed.filter((r) => r.valid).length;
      const invalid = committed.length - valid;
      return {
        time: timeScore(c.s.simTime - c.startSimTime, 360),
        quality: Math.min(100, (valid / 6) * 100),
        economy: Math.max(0, 100 - 15 * invalid),
      };
    },
  },
  {
    id: "somethings-off",
    tier: "OPERATOR",
    pips: 3,
    title: "Something's off",
    briefing:
      "A hidden fault is live. Restore a VALID measurement. Every minute of downtime costs; every wrong accusation costs more.",
    axes: ["Time", "Diagnosis", "Restored quality"],
    par: 300,
    timeLimit: null,
    setup: () => {
      stageReadyFacility();
      useSim.setState({ hiddenFaults: true });
      const pool: FaultId[] = ["leak", "thermal-runaway"];
      const pick = pool[Math.floor(Math.random() * pool.length)];
      useSim.getState().injectFault(pick);
      useFaultUiStore.getState().noteInject(pick, useSim.getState().simTime);
      return { injectedFault: pick };
    },
    objectives: [
      {
        id: "call",
        label: "Call the fault in Fault Injector",
        done: (c) =>
          c.injectedFault !== null &&
          useFaultUiStore.getState().called[c.injectedFault] !== undefined,
      },
      {
        id: "clear",
        label: "Fault cleared",
        done: (c) => c.faultClearedAt !== null,
      },
      { id: "gate", label: "Gate back to VALID", done: (c) => gateOk(c.s) },
      {
        id: "fit",
        label: "Fresh VALID fit after the clear",
        done: (c) =>
          gateOk(c.s) &&
          c.s.lastFit !== null &&
          c.faultClearedAt !== null &&
          c.s.lastFit.takenAt >= c.faultClearedAt,
      },
    ],
    complete: (c) =>
      c.faultClearedAt !== null &&
      gateOk(c.s) &&
      c.s.lastFit !== null &&
      c.s.lastFit.takenAt >= c.faultClearedAt &&
      c.injectedFault !== null &&
      useFaultUiStore.getState().called[c.injectedFault] !== undefined,
    scores: (c) => ({
      time: timeScore(c.s.simTime - c.startSimTime, 300),
      quality: Math.max(0, 100 - 25 * c.wrongCalls),
      economy: c.s.lastFit ? sigmaScore(c.s.lastFit.f0Sigma) : 0,
    }),
  },
  {
    id: "squeeze-sigma",
    tier: "OPERATOR",
    pips: 4,
    title: "Squeeze the sigma",
    briefing:
      "Get σ(f₀) below 0.002 kHz. You'll need points, bandwidth, thermal patience, and a fresh cal. The clock is rude.",
    axes: ["Time", "σ(f₀)", "Economy"],
    par: 360,
    timeLimit: null,
    setup: () => {
      // warmed bay, but thermal still settling and the VNA uncalibrated
      // with coarse sweep defaults — the squeeze is yours to make
      useSim.setState({
        power: "FACILITY_ON",
        bootT: 5,
        roughingOn: true,
        turboOn: true,
        turboSpool: 100,
        pressure: 4e-5,
        venting: false,
        thermalEnabled: true,
        temperature: 21.2,
        thermalVel: 0,
        thermalStable: false,
        stableTimer: 0,
        clock: "LOCKED",
        clockT: 0,
        vnaCalibrated: false,
        vnaParams: { startKHz: 20.5, stopKHz: 21.0, points: 201, ifBwHz: 1000, powerDbm: -10 },
      });
      return { injectedFault: null };
    },
    objectives: [
      { id: "thm", label: "Thermally stable", done: (c) => c.s.thermalStable },
      { id: "cal", label: "VNA calibrated", done: (c) => c.s.vnaCalibrated },
      {
        id: "pts",
        label: "Sweep with ≥ 401 points",
        done: (c) =>
          !!c.s.lastSweep &&
          c.s.lastSweep.takenAt >= c.startSimTime &&
          c.s.lastSweep.params.points >= 401,
      },
      {
        id: "sig",
        label: "σ(f₀) ≤ 0.002 kHz, gate VALID",
        done: (c) =>
          gateOk(c.s) && !!c.s.lastFit && freshFit(c) && c.s.lastFit.f0Sigma <= 2,
      },
    ],
    complete: (c) =>
      gateOk(c.s) && !!c.s.lastFit && freshFit(c) && c.s.lastFit.f0Sigma <= 2,
    scores: (c) => {
      const sig = c.s.lastFit?.f0Sigma ?? 99;
      return {
        time: timeScore(c.s.simTime - c.startSimTime, 360),
        quality:
          sig <= 0.5 ? 100 : sig <= 1 ? 90 : sig <= 2 ? 75 : sigmaScore(sig) - 10,
        economy: Math.max(0, 100 - 10 * Math.max(0, c.sweepsUsed - 3)),
      };
    },
  },
  {
    id: "full-protocol",
    tier: "METROLOGIST",
    pips: 5,
    title: "Full protocol, no excuses",
    briefing:
      "Cold bay → unblinded LOC-1 with grade A or better, one hidden fault somewhere in the middle. Good luck. Take notes.",
    axes: ["Time", "Grade", "Diagnosis"],
    par: 1200,
    timeLimit: null,
    setup: () => {
      useSim.setState({ hiddenFaults: true });
      return { injectedFault: null }; // injected mid-run by onTick
    },
    onTick: (ctx, inject) => {
      if (ctx.injectedFault === null && ctx.s.simTime - ctx.startSimTime >= 90) {
        const pool: FaultId[] = [
          "leak",
          "thermal-runaway",
          "loose-cable",
          "clock-holdover",
        ];
        inject(pool[Math.floor(Math.random() * pool.length)]);
      }
    },
    objectives: [
      { id: "gate", label: "Quality gate VALID", done: (c) => gateOk(c.s) },
      {
        id: "pairs",
        label: "≥ 3 valid blinded pairs",
        done: (c) => validPairs(c.s) >= 3,
      },
      {
        id: "fault",
        label: "Hidden fault found & cleared",
        done: (c) =>
          c.injectedFault !== null && c.faultClearedAt !== null,
      },
      { id: "unblind", label: "Blinding revealed", done: (c) => c.s.blinding.revealed },
      {
        id: "grade",
        label: "Grade A or better",
        done: (c) => {
          const g = computeGrade(c.s);
          return c.s.blinding.revealed && (g === "A" || g === "S");
        },
      },
    ],
    complete: (c) => {
      const g = computeGrade(c.s);
      return c.s.blinding.revealed && (g === "A" || g === "S");
    },
    scores: (c) => {
      const g = computeGrade(c.s);
      return {
        time: timeScore(c.s.simTime - c.startSimTime, 1200),
        quality: g === "S" ? 100 : g === "A" ? 85 : g === "B" ? 55 : 30,
        economy: Math.max(0, 100 - 25 * c.wrongCalls),
      };
    },
  },
];

export const TIER_ORDER: Tier[] = ["CADET", "OPERATOR", "METROLOGIST"];

/** Tier gating reads Training progress (challenge.md §Header + tiers). */
export function tierUnlocked(tier: Tier, trainingFrac: number): boolean {
  if (tier === "CADET") return true;
  if (tier === "OPERATOR") return trainingFrac >= 0.6;
  return trainingFrac >= 1;
}

export function tierRequirement(tier: Tier): string | null {
  if (tier === "CADET") return null;
  if (tier === "OPERATOR") return "Needs Training 60%";
  return "Needs Training 100%";
}
