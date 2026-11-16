import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/* ============================================================
   RESONANCE LAB — Simulation Engine (design.md §6)
   Tick-based zustand store. 10 Hz tick driven by SimProvider.
   Honest physics: passive Lorentzian dips only (S11 ≤ 0 dB).
   v2: corrected to the physically real 20.75 kHz breathing mode
   of a 100 mm solid copper sphere (was a fictitious 229.731 kHz
   hollow-shell mode; see Learning → "Resonance, honestly").
   ============================================================ */

export const STORE_VERSION = 2;
// persistence key is stable across versions; `migrate` below resets v1 state
export const STORAGE_KEY = "resonance-lab-v1";

export const F0_BASE_HZ = 20_750; // breathing mode of the 100 mm solid Cu sphere ≈ 20.75 kHz
export const F0_TEMP_COEFF_HZ_PER_C = -3.3; // −3.3 Hz/K (−0.0033 Hz/mK) from 22 °C
export const SETPOINT_C = 22.0;
export const AMBIENT_C = 21.5;
export const ATM_HPA = 1013;
export const ROUGH_FLOOR_HPA = 2;
export const TURBO_FLOOR_HPA = 1e-5;
export const QUALITY_PRESSURE_HPA = 1e-3;
export const STAGE_LIMIT_MM = 35;
export const Q_VACUUM = 100_000; // intrinsic-loss-limited Q of the solid sphere in vacuum
export const Q_ATM = 3_000; // gas damping at 20.75 kHz caps Q far below the intrinsic limit
export const MAX_S11_DIP_DB = -18;
export const HISTORY_LEN = 240; // 24 s at 10 Hz

export type PowerState = "POWER_OFF" | "BOOTING" | "FACILITY_ON";
export type ClockState = "COLD" | "WARMING" | "LOCKING" | "LOCKED";
export type Severity = "NOMINAL" | "ADVISORY" | "WARNING" | "FAULT" | "INTERLOCK";
export type Subsystem =
  | "power"
  | "vacuum"
  | "thermal"
  | "clock"
  | "rf"
  | "mechanics"
  | "safety"
  | "experiment";

export interface SimEvent {
  id: number;
  t: number; // session-relative seconds
  wall: number; // epoch ms
  subsystem: Subsystem;
  severity: Severity;
  message: string;
}

export type FaultId =
  | "leak"
  | "loose-cable"
  | "thermal-runaway"
  | "clock-holdover"
  | "fan-vibration"
  | "rf-interference";

export const FAULT_CATALOG: Record<
  FaultId,
  { name: string; subsystem: Subsystem; description: string }
> = {
  leak: {
    name: "Virtual leak",
    subsystem: "vacuum",
    description: "Pressure floor rises; turbo cannot reach high vacuum.",
  },
  "loose-cable": {
    name: "Loose RF cable",
    subsystem: "rf",
    description: "S11 noise ×8 with intermittent dropouts.",
  },
  "thermal-runaway": {
    name: "Thermal runaway",
    subsystem: "thermal",
    description: "Heater fault ramps chamber +0.05 °C/s.",
  },
  "clock-holdover": {
    name: "Clock holdover",
    subsystem: "clock",
    description: "Reference wanders ±200 Hz; discipline lost.",
  },
  "fan-vibration": {
    name: "Fan vibration",
    subsystem: "mechanics",
    description: "LDV noise floor rises; measured Q degrades.",
  },
  "rf-interference": {
    name: "RF interference",
    subsystem: "rf",
    description: "Spurs appear on scope and S11 traces.",
  },
};

export type Axis = "x" | "y" | "z";
export type RunLabel = "A" | "B";
export type Grade = "INVALID" | "C" | "B" | "A" | "S";

export interface RunRecord {
  id: number;
  label: RunLabel;
  f0: number;
  f0Sigma: number;
  q: number;
  qSigma: number;
  valid: boolean;
  temperature: number;
  pressure: number;
  t: number; // session seconds
}

export interface VnaParams {
  startKHz: number;
  stopKHz: number;
  points: number;
  ifBwHz: number;
  powerDbm: number;
}

export interface SweepData {
  freqs: number[]; // Hz
  s11: number[]; // dB (always ≤ 0 — passive)
  takenAt: number; // session seconds
  params: VnaParams;
}

export interface FitResult {
  f0: number;
  f0Sigma: number;
  q: number;
  qSigma: number;
  depthDb: number;
  residuals: number[];
  takenAt: number;
}

export interface QualityGate {
  valid: boolean;
  reasons: string[];
}

interface BlindingState {
  /** label → slot index (0 or 1). Hidden until reveal. */
  labelToSlot: { A: 0 | 1; B: 0 | 1 };
  /** per-slot resonance offset in Hz; |Δ| = 40–90 Hz, random per session */
  slotOffsetsHz: [number, number];
  revealed: boolean;
  runs: RunRecord[];
}

export interface SimState {
  // session
  sessionId: string;
  simTime: number; // seconds since session start
  tickCount: number;
  eventSeq: number;
  runSeq: number;
  seenIntro: boolean;

  // power
  power: PowerState;
  bootT: number; // seconds since power applied

  // vacuum
  roughingOn: boolean;
  turboOn: boolean;
  turboSpool: number; // 0–100 %
  pressure: number; // hPa
  venting: boolean;

  // thermal
  thermalEnabled: boolean;
  setpoint: number;
  temperature: number;
  thermalVel: number;
  driftCPerMin: number;
  stableTimer: number;
  thermalStable: boolean;

  // clock
  clock: ClockState;
  clockT: number; // seconds in current clock phase
  refWanderHz: number; // apparent f0 wander from holdover fault

  // VNA
  vnaCalibrated: boolean;
  vnaParams: VnaParams;
  sweeping: boolean;
  sweepProgress: number; // 0–1
  lastSweep: SweepData | null;
  lastFit: FitResult | null;

  // stage
  stage: Record<Axis, number>;

  // blinding
  blinding: BlindingState;

  // faults
  faults: Record<FaultId, boolean>;
  hiddenFaults: boolean;

  // event bus
  events: SimEvent[];

  // history ring buffers (for sparklines)
  pressureHistory: number[];
  temperatureHistory: number[];

  // actions
  tick: () => void;
  powerOn: () => void;
  powerOff: () => void;
  startRoughing: () => void;
  stopRoughing: () => void;
  startTurbo: () => void;
  stopTurbo: () => void;
  ventChamber: () => void;
  setThermalEnabled: (on: boolean) => void;
  setSetpoint: (c: number) => void;
  jogStage: (axis: Axis, deltaMm: number) => boolean;
  setStage: (axis: Axis, mm: number) => boolean;
  calibrateVna: () => void;
  setVnaParams: (p: Partial<VnaParams>) => void;
  startSweep: () => void;
  recordRun: (label: RunLabel) => RunRecord | null;
  revealBlinding: (manual?: boolean) => void;
  injectFault: (id: FaultId) => void;
  clearFault: (id: FaultId) => void;
  clearAllFaults: () => void;
  setHiddenFaults: (hidden: boolean) => void;
  markIntroSeen: () => void;
  resetSession: () => void;
}

/* ---------------- helpers ---------------- */

function makeSessionOffsets(): { labelToSlot: { A: 0 | 1; B: 0 | 1 }; slotOffsetsHz: [number, number] } {
  const flip = Math.random() < 0.5;
  const delta = 40 + Math.random() * 50; // 40–90 Hz
  const sign = Math.random() < 0.5 ? 1 : -1;
  const a = (sign * delta) / 2;
  const b = (-sign * delta) / 2;
  return {
    labelToSlot: flip ? { A: 1, B: 0 } : { A: 0, B: 1 },
    slotOffsetsHz: [a, b],
  };
}

let eventIdCounter = 1;

function ev(
  t: number,
  subsystem: Subsystem,
  severity: Severity,
  message: string,
): SimEvent {
  return { id: eventIdCounter++, t, wall: Date.now(), subsystem, severity, message };
}

/** Vacuum quality factor: interpolates Q_ATM → Q_VACUUM with log pressure. */
export function qForPressure(pressureHpa: number): number {
  const p = Math.min(Math.max(pressureHpa, TURBO_FLOOR_HPA), ATM_HPA);
  const frac =
    (Math.log10(ATM_HPA) - Math.log10(p)) /
    (Math.log10(ATM_HPA) - Math.log10(TURBO_FLOOR_HPA));
  return Q_ATM + (Q_VACUUM - Q_ATM) * frac;
}

/** True breathing-mode frequency (Hz) for the current conditions + blinded slot. */
export function trueF0Hz(
  s: Pick<SimState, "temperature" | "blinding" | "faults" | "refWanderHz">,
  label: RunLabel | null,
): number {
  let f = F0_BASE_HZ + F0_TEMP_COEFF_HZ_PER_C * (s.temperature - SETPOINT_C);
  if (label) {
    f += s.blinding.slotOffsetsHz[s.blinding.labelToSlot[label]];
  }
  if (s.faults["clock-holdover"]) f += s.refWanderHz;
  return f;
}

/** Measurement quality gate (design.md §6.5). */
export function computeQuality(s: SimState): QualityGate {
  const reasons: string[] = [];
  if (s.power !== "FACILITY_ON") reasons.push("Facility power is not on");
  if (s.pressure >= QUALITY_PRESSURE_HPA)
    reasons.push(`Pressure ${formatPressure(s.pressure)} ≥ 1×10⁻³ hPa`);
  if (!s.thermalStable) reasons.push("Chamber not thermally stable at setpoint");
  if (s.clock !== "LOCKED") reasons.push("10 MHz reference not locked");
  if (!s.vnaCalibrated) reasons.push("VNA not calibrated this session");
  return { valid: reasons.length === 0, reasons };
}

/** Coarse measurement grade from gate + accumulated valid pairs. */
export function computeGrade(s: SimState): Grade {
  const gate = computeQuality(s);
  const validRuns = s.blinding.runs.filter((r) => r.valid);
  const pairs = Math.min(
    validRuns.filter((r) => r.label === "A").length,
    validRuns.filter((r) => r.label === "B").length,
  );
  if (!gate.valid || validRuns.length === 0) return "INVALID";
  const worstSigma = Math.max(...validRuns.map((r) => r.f0Sigma));
  if (pairs >= 3 && worstSigma < 2) return "S";
  if (pairs >= 3) return "A";
  if (pairs >= 2) return "B";
  return "C";
}

export function formatPressure(hpa: number): string {
  if (hpa <= 0) return "0 hPa";
  if (hpa >= 0.01) return `${hpa.toFixed(hpa >= 100 ? 0 : hpa >= 10 ? 1 : 2)} hPa`;
  const exp = Math.floor(Math.log10(hpa));
  const mant = hpa / Math.pow(10, exp);
  return `${mant.toFixed(1)}×10${superscript(exp)} hPa`;
}

export function superscript(n: number): string {
  const map: Record<string, string> = {
    "-": "⁻", "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
    "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  };
  return String(n).split("").map((c) => map[c] ?? c).join("");
}

export function formatSessionTime(tSec: number): string {
  const t = Math.max(0, Math.floor(tSec));
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `T+${pad(h)}:${pad(m)}:${pad(s)}`;
}

/* ---------------- S11 synthesis + fit ---------------- */

/**
 * Passive Lorentzian absorption dip (S11 ≤ 0 dB always).
 * Noise floor scales with IF bandwidth and facility conditions.
 */
export function synthesizeSweep(s: SimState, params: VnaParams): SweepData {
  const { startKHz, stopKHz, points } = params;
  const freqs: number[] = [];
  const s11: number[] = [];
  const inWindow = (f0: number) => f0 > startKHz * 1000 && f0 < stopKHz * 1000;

  // Use whichever blinded slot the stage is "parked" on (A slot) for raw sweeps.
  const f0 = trueF0Hz(s, "A");
  const q = qForPressure(s.pressure) * (s.faults["fan-vibration"] ? 0.55 : 1);
  const gamma = f0 / q; // FWHM Hz
  const depth = MAX_S11_DIP_DB * (0.6 + 0.4 * (q / Q_VACUUM)); // shallower at low Q

  // Noise floor: scales with sqrt(IF BW); loose cable multiplies ×8
  let noiseDb = 0.03 * Math.sqrt(params.ifBwHz / 1000);
  if (s.faults["loose-cable"]) noiseDb *= 8;
  if (s.pressure > QUALITY_PRESSURE_HPA) noiseDb *= 1.6;

  for (let i = 0; i < points; i++) {
    const f = startKHz * 1000 + ((stopKHz - startKHz) * 1000 * i) / (points - 1);
    freqs.push(f);
    let v = -0.25; // passive cable/fixture loss baseline
    if (inWindow(f0)) {
      const det = f - f0;
      v += depth * ((gamma / 2) * (gamma / 2)) / (det * det + (gamma / 2) * (gamma / 2));
    }
    // additive noise (still clamped to ≤ 0 dB — passive device)
    v += (Math.random() * 2 - 1) * noiseDb;
    // loose-cable dropouts: occasional snaps back toward baseline
    if (s.faults["loose-cable"] && Math.random() < 0.015) v = -0.25 + Math.random() * 0.05;
    // RF interference: narrow spurs
    if (s.faults["rf-interference"] && Math.random() < 0.01) v -= 1.5 + Math.random() * 3;
    s11.push(Math.min(v, -0.001)); // hard clamp: passive, never gain
  }
  return { freqs, s11, takenAt: s.simTime, params };
}

/** Single-iteration Lorentzian estimate → f₀±σ, Q±σ (design.md §6 "Fit"). */
export function fitSweep(s: SimState, sweep: SweepData): FitResult {
  const { freqs, s11 } = sweep;
  // locate dip minimum
  let iMin = 0;
  for (let i = 1; i < s11.length; i++) if (s11[i] < s11[iMin]) iMin = i;
  const minDb = s11[iMin];
  const baseline = -0.25;
  const depthDb = Math.max(baseline - minDb, 0.5);
  const half = baseline - depthDb / 2;

  // FWHM from crossings
  let lo = freqs[0];
  let hi = freqs[freqs.length - 1];
  for (let i = iMin; i >= 1; i--) {
    if (s11[i] >= half) {
      const f0p = freqs[i];
      const f1p = freqs[i - 1];
      const y0 = s11[i];
      const y1 = s11[i - 1];
      lo = y0 === y1 ? f0p : f0p + ((half - y0) * (f1p - f0p)) / (y1 - y0);
      break;
    }
  }
  for (let i = iMin; i < s11.length - 1; i++) {
    if (s11[i] >= half) {
      const f0p = freqs[i];
      const f1p = freqs[i + 1];
      const y0 = s11[i];
      const y1 = s11[i + 1];
      hi = y0 === y1 ? f0p : f0p + ((half - y0) * (f1p - f0p)) / (y1 - y0);
      break;
    }
  }

  // refine f0 with a centroid around the dip
  let num = 0;
  let den = 0;
  const loB = freqs[iMin] - (hi - lo);
  const hiB = freqs[iMin] + (hi - lo);
  for (let i = 0; i < freqs.length; i++) {
    if (freqs[i] >= loB && freqs[i] <= hiB) {
      const w = Math.max(baseline - s11[i], 0);
      num += freqs[i] * w;
      den += w;
    }
  }
  const f0 = den > 0 ? num / den : freqs[iMin];
  const q = hi > lo ? f0 / (hi - lo) : qForPressure(s.pressure);

  // σ shrinks with more points, narrower IF BW, better conditions
  const noiseDb =
    0.03 * Math.sqrt(sweep.params.ifBwHz / 1000) * (s.faults["loose-cable"] ? 8 : 1);
  let f0Sigma = (0.35 + 12 * noiseDb) * Math.sqrt(401 / sweep.params.points);
  if (!s.thermalStable) f0Sigma *= 3;
  if (s.pressure > QUALITY_PRESSURE_HPA) f0Sigma *= 2;
  if (s.clock !== "LOCKED") f0Sigma *= 5;
  const qSigma = q * Math.min(0.02 + 2.5 * noiseDb, 0.35);

  // residuals vs ideal Lorentzian
  const gamma = f0 / q;
  const residuals = freqs.map((f, i) => {
    const det = f - f0;
    const model = baseline - depthDb * ((gamma / 2) ** 2 / (det * det + (gamma / 2) ** 2));
    return s11[i] - model;
  });

  return { f0, f0Sigma, q, qSigma, depthDb, residuals, takenAt: s.simTime };
}

/* ---------------- initial state ---------------- */

function freshState() {
  const offsets = makeSessionOffsets();
  return {
    sessionId: Math.random().toString(36).slice(2, 10),
    simTime: 0,
    tickCount: 0,
    eventSeq: 0,
    runSeq: 0,
    seenIntro: false,

    power: "POWER_OFF" as PowerState,
    bootT: 0,

    roughingOn: false,
    turboOn: false,
    turboSpool: 0,
    pressure: ATM_HPA,
    venting: false,

    thermalEnabled: false,
    setpoint: SETPOINT_C,
    temperature: AMBIENT_C + (Math.random() * 0.4 - 0.2),
    thermalVel: 0,
    driftCPerMin: 0,
    stableTimer: 0,
    thermalStable: false,

    clock: "COLD" as ClockState,
    clockT: 0,
    refWanderHz: 0,

    vnaCalibrated: false,
    vnaParams: { startKHz: 20.5, stopKHz: 21.0, points: 401, ifBwHz: 100, powerDbm: -10 },
    sweeping: false,
    sweepProgress: 0,
    lastSweep: null as SweepData | null,
    lastFit: null as FitResult | null,

    stage: { x: 0, y: 0, z: 0 } as Record<Axis, number>,

    blinding: {
      labelToSlot: offsets.labelToSlot,
      slotOffsetsHz: offsets.slotOffsetsHz,
      revealed: false,
      runs: [] as RunRecord[],
    },

    faults: {
      leak: false,
      "loose-cable": false,
      "thermal-runaway": false,
      "clock-holdover": false,
      "fan-vibration": false,
      "rf-interference": false,
    } as Record<FaultId, boolean>,
    hiddenFaults: false,

    events: [] as SimEvent[],
    pressureHistory: [ATM_HPA],
    temperatureHistory: [AMBIENT_C],
  };
}

/* ---------------- store ---------------- */

const DT = 0.1; // 10 Hz
const CLOCK_WARM_S = 15;
const CLOCK_LOCK_S = 10;
const BOOT_S = 4;

export const useSim = create<SimState>()(
  persist(
    (set, get) => {
      /** append event (capped at 500) */
      const emit = (subsystem: Subsystem, severity: Severity, message: string) => {
        const s = get();
        const e = ev(s.simTime, subsystem, severity, message);
        set({ events: [...s.events.slice(-499), e] });
      };

      return {
        ...freshState(),

        tick: () => {
          const s = get();
          const patch: Partial<SimState> = {
            simTime: s.simTime + DT,
            tickCount: s.tickCount + 1,
          };

          /* ---- power / boot ---- */
          if (s.power === "BOOTING") {
            const bootT = s.bootT + DT;
            patch.bootT = bootT;
            if (bootT >= BOOT_S) {
              patch.power = "FACILITY_ON";
              emit("power", "NOMINAL", "Facility online — all instruments booted");
            }
          }

          /* ---- vacuum ---- */
          const leak = s.faults.leak;
          const roughFloor = leak ? 45 : ROUGH_FLOOR_HPA;
          const turboFloor = leak ? 8e-3 : TURBO_FLOOR_HPA;
          let pressure = s.pressure;
          let venting = s.venting;

          if (venting) {
            pressure = Math.min(ATM_HPA, pressure * Math.pow(ATM_HPA / Math.max(pressure, 1e-6), DT / 2.5) + 0.5);
            if (pressure >= ATM_HPA * 0.995) {
              pressure = ATM_HPA;
              venting = false;
              patch.venting = false;
              emit("vacuum", "ADVISORY", "Chamber at atmosphere — vent complete");
            }
            patch.pressure = pressure;
          } else if (s.power !== "POWER_OFF") {
            // turbo spool dynamics
            let spool = s.turboSpool;
            if (s.turboOn && pressure < 3) {
              spool = Math.min(100, spool + (100 / 15) * DT);
              if (spool >= 100 && s.turboSpool < 100)
                emit("vacuum", "NOMINAL", "Turbomolecular pump at full speed");
            } else if (!s.turboOn && spool > 0) {
              spool = Math.max(0, spool - (100 / 5) * DT);
            }
            patch.turboSpool = spool;

            if (s.roughingOn) {
              pressure = roughFloor + (pressure - roughFloor) * Math.exp(-DT / 3.2);
            }
            if (s.turboOn && spool > 60) {
              const eff = (spool - 40) / 60; // ramps in as spool completes
              const floorNow = leak ? Math.max(roughFloor * 0.2, turboFloor) : turboFloor;
              if (pressure > floorNow) {
                pressure = floorNow + (pressure - floorNow) * Math.exp((-DT * eff) / 4);
              }
            }
            // outgassing floor wobble (log-scale jitter)
            if (pressure < 0.01) pressure *= 1 + (Math.random() - 0.5) * 0.02;
            patch.pressure = Math.max(pressure, turboFloor);
          }

          /* ---- thermal ---- */
          let temperature = s.temperature;
          let thermalVel = s.thermalVel;
          if (s.power === "FACILITY_ON" && s.thermalEnabled) {
            // damped servo: ω=0.35, ζ=0.45 → ~30 s convergence, small overshoot
            const w = 0.35;
            const z = 0.45;
            const accel = w * w * (s.setpoint - temperature) - 2 * z * w * thermalVel;
            thermalVel += accel * DT;
            temperature += thermalVel * DT;
          } else {
            // relax toward ambient
            temperature += (AMBIENT_C - temperature) * (DT / 120);
            thermalVel *= 1 - DT;
          }
          if (s.faults["thermal-runaway"]) temperature += 0.05 * DT;
          temperature += (Math.random() - 0.5) * 0.0006; // sensor noise
          patch.temperature = temperature;
          patch.thermalVel = thermalVel;

          const drift =
            Math.abs(s.setpoint - temperature) < 0.005
              ? s.driftCPerMin * 0.95 + (Math.random() - 0.5) * 0.02 * 0.05 +
                (thermalVel * 60) * 0.05
              : thermalVel * 60;
          patch.driftCPerMin = Math.max(-0.01, Math.min(0.01, drift));

          const within = Math.abs(temperature - s.setpoint) < 0.005;
          const stableTimer = within ? s.stableTimer + DT : 0;
          patch.stableTimer = stableTimer;
          const wasStable = s.thermalStable;
          const nowStable = stableTimer >= 5;
          patch.thermalStable = nowStable;
          if (nowStable && !wasStable)
            emit("thermal", "NOMINAL", `Chamber stable at ${s.setpoint.toFixed(3)} °C (|ΔT| < 5 mK, 5 s)`);
          if (!nowStable && wasStable)
            emit("thermal", "WARNING", "Thermal stability lost");

          /* ---- clock ---- */
          if (s.power === "POWER_OFF") {
            if (s.clock !== "COLD") {
              patch.clock = "COLD";
              patch.clockT = 0;
              emit("clock", "WARNING", "Reference lost power — oscillator cold");
            }
          } else {
            let clockT = s.clockT + DT;
            if (s.clock === "COLD") {
              patch.clock = "WARMING";
              patch.clockT = 0;
              emit("clock", "NOMINAL", "Rubidium lamp warming — oven cycle started");
            } else if (s.clock === "WARMING" && clockT >= CLOCK_WARM_S) {
              patch.clock = "LOCKING";
              patch.clockT = 0;
              clockT = 0;
              emit("clock", "NOMINAL", "Oven at temperature — disciplining to GPSDO");
            } else if (s.clock === "LOCKING" && clockT >= CLOCK_LOCK_S) {
              patch.clock = "LOCKED";
              patch.clockT = 0;
              clockT = 0;
              emit("clock", "NOMINAL", "10 MHz reference LOCKED (GPSDO/Rb)");
            } else {
              patch.clockT = clockT;
            }
          }
          if (s.faults["clock-holdover"]) {
            patch.refWanderHz = Math.max(
              -200,
              Math.min(200, s.refWanderHz + (Math.random() - 0.5) * 18),
            );
          } else if (s.refWanderHz !== 0) {
            patch.refWanderHz = s.refWanderHz * 0.9;
          }

          /* ---- sweep ---- */
          if (s.sweeping) {
            const p = s.vnaParams;
            // sweep duration: points × ~1/IF BW, clamped 2–4 s
            const dur = Math.min(4, Math.max(2, (p.points / p.ifBwHz) * 10));
            const prog = s.sweepProgress + DT / dur;
            if (prog >= 1) {
              const cur = { ...get(), ...patch } as SimState;
              const sweep = synthesizeSweep(cur, p);
              const fit = fitSweep(cur, sweep);
              patch.sweeping = false;
              patch.sweepProgress = 0;
              patch.lastSweep = sweep;
              patch.lastFit = fit;
              emit(
                "rf",
                "NOMINAL",
                `Sweep complete — f₀ ${(fit.f0 / 1000).toFixed(3)} kHz ± ${fit.f0Sigma.toFixed(2)} Hz, Q ${Math.round(fit.q).toLocaleString()}`,
              );
            } else {
              patch.sweepProgress = prog;
            }
          }

          /* ---- history buffers ---- */
          patch.pressureHistory = [...s.pressureHistory.slice(-(HISTORY_LEN - 1)), patch.pressure ?? s.pressure];
          patch.temperatureHistory = [...s.temperatureHistory.slice(-(HISTORY_LEN - 1)), patch.temperature ?? s.temperature];

          set(patch);
        },

        /* ---------------- actions ---------------- */

        powerOn: () => {
          const s = get();
          if (s.power !== "POWER_OFF") return;
          set({ power: "BOOTING", bootT: 0, venting: false });
          emit("power", "NOMINAL", "Mains rocker ON — instrument rack booting (staggered)");
          emit("safety", "NOMINAL", "Interlocks armed");
        },

        powerOff: () => {
          const s = get();
          if (s.power === "POWER_OFF") return;
          set({
            power: "POWER_OFF",
            bootT: 0,
            roughingOn: false,
            turboOn: false,
            turboSpool: 0,
            thermalEnabled: false,
            thermalStable: false,
            stableTimer: 0,
            clock: "COLD",
            clockT: 0,
            sweeping: false,
            sweepProgress: 0,
          });
          emit("power", "WARNING", "Mains rocker OFF — facility down, pumps stopped");
        },

        startRoughing: () => {
          const s = get();
          if (s.power !== "FACILITY_ON") {
            emit("vacuum", "INTERLOCK", "Roughing pump refused — facility power off");
            return;
          }
          if (s.roughingOn) return;
          set({ roughingOn: true });
          emit("vacuum", "NOMINAL", "Roughing pump started");
        },

        stopRoughing: () => {
          const s = get();
          if (!s.roughingOn) return;
          set({ roughingOn: false });
          emit("vacuum", "ADVISORY", "Roughing pump stopped");
        },

        startTurbo: () => {
          const s = get();
          if (s.power !== "FACILITY_ON") {
            emit("vacuum", "INTERLOCK", "Turbo refused — facility power off");
            return;
          }
          if (!s.roughingOn || s.pressure >= 3) {
            emit("vacuum", "INTERLOCK", "Turbo refused — roughing not established (< 3 hPa required)");
            return;
          }
          if (s.turboOn) return;
          set({ turboOn: true });
          emit("vacuum", "NOMINAL", "Turbomolecular pump spooling up");
        },

        stopTurbo: () => {
          const s = get();
          if (!s.turboOn) return;
          set({ turboOn: false });
          emit("vacuum", "ADVISORY", "Turbo spinning down");
        },

        ventChamber: () => {
          const s = get();
          set({ venting: true, turboOn: false, roughingOn: false, turboSpool: 0 });
          emit("vacuum", "WARNING", "Vent valve opened — chamber rising to atmosphere");
          void s;
        },

        setThermalEnabled: (on) => {
          const s = get();
          if (on && s.power !== "FACILITY_ON") {
            emit("thermal", "INTERLOCK", "Thermal controller refused — facility power off");
            return;
          }
          set({ thermalEnabled: on });
          emit(
            "thermal",
            "NOMINAL",
            on ? `Thermal loop engaged — setpoint ${s.setpoint.toFixed(3)} °C` : "Thermal loop disengaged",
          );
        },

        setSetpoint: (c) => {
          set({ setpoint: c, thermalStable: false, stableTimer: 0 });
          emit("thermal", "ADVISORY", `Setpoint changed to ${c.toFixed(3)} °C`);
        },

        jogStage: (axis, deltaMm) => {
          const s = get();
          const next = s.stage[axis] + deltaMm;
          if (Math.abs(next) > STAGE_LIMIT_MM) {
            emit("mechanics", "WARNING", `Soft limit reached — ${axis.toUpperCase()} axis at ±${STAGE_LIMIT_MM} mm`);
            return false;
          }
          set({ stage: { ...s.stage, [axis]: Math.round(next * 100) / 100 } });
          return true;
        },

        setStage: (axis, mm) => {
          const s = get();
          if (Math.abs(mm) > STAGE_LIMIT_MM) {
            emit("mechanics", "WARNING", `Soft limit — ${axis.toUpperCase()} clamped to ±${STAGE_LIMIT_MM} mm`);
            return false;
          }
          set({ stage: { ...s.stage, [axis]: Math.round(mm * 100) / 100 } });
          return true;
        },

        calibrateVna: () => {
          const s = get();
          if (s.power !== "FACILITY_ON") {
            emit("rf", "INTERLOCK", "Calibration refused — facility power off");
            return;
          }
          if (s.clock !== "LOCKED") {
            emit("rf", "INTERLOCK", "Calibration refused — 10 MHz reference not locked");
            return;
          }
          set({ vnaCalibrated: true });
          emit("rf", "NOMINAL", "VNA S11 calibration complete (open/short/load, this session)");
        },

        setVnaParams: (p) => {
          const s = get();
          set({ vnaParams: { ...s.vnaParams, ...p } });
        },

        startSweep: () => {
          const s = get();
          if (s.sweeping) return;
          if (s.power !== "FACILITY_ON") {
            emit("rf", "INTERLOCK", "Sweep refused — facility power off");
            return;
          }
          set({ sweeping: true, sweepProgress: 0 });
          emit("rf", "NOMINAL", `S11 sweep started — ${s.vnaParams.startKHz.toFixed(3)}–${s.vnaParams.stopKHz.toFixed(3)} kHz, ${s.vnaParams.points} pts, IF BW ${s.vnaParams.ifBwHz} Hz`);
        },

        recordRun: (label) => {
          const s = get();
          if (!s.lastFit) {
            emit("experiment", "WARNING", "Run rejected — no fit available. Sweep first.");
            return null;
          }
          const gate = computeQuality(s);
          const run: RunRecord = {
            id: s.runSeq + 1,
            label,
            f0: s.lastFit.f0 + (label === "B" ? s.blinding.slotOffsetsHz[s.blinding.labelToSlot.B] - s.blinding.slotOffsetsHz[s.blinding.labelToSlot.A] : 0),
            f0Sigma: s.lastFit.f0Sigma,
            q: s.lastFit.q,
            qSigma: s.lastFit.qSigma,
            valid: gate.valid,
            temperature: s.temperature,
            pressure: s.pressure,
            t: s.simTime,
          };
          set({
            runSeq: s.runSeq + 1,
            blinding: { ...s.blinding, runs: [...s.blinding.runs, run] },
          });
          emit(
            "experiment",
            run.valid ? "NOMINAL" : "WARNING",
            `Run #${run.id} recorded at position ${label} — f₀ ${(run.f0 / 1000).toFixed(3)} kHz (${run.valid ? "VALID" : "INVALID: " + gate.reasons[0]})`,
          );
          return run;
        },

        revealBlinding: (manual = false) => {
          const s = get();
          if (s.blinding.revealed) return;
          const validRuns = s.blinding.runs.filter((r) => r.valid);
          const pairs = Math.min(
            validRuns.filter((r) => r.label === "A").length,
            validRuns.filter((r) => r.label === "B").length,
          );
          if (manual && pairs < 3) {
            emit("experiment", "WARNING", "Blinding revealed MANUALLY before staged gates G1–G4 cleared — grade capped");
          } else {
            emit("experiment", "NOMINAL", "Blinding revealed — A/B position assignments unblinded");
          }
          set({ blinding: { ...s.blinding, revealed: true } });
        },

        injectFault: (id) => {
          const s = get();
          if (s.faults[id]) return;
          set({ faults: { ...s.faults, [id]: true } });
          if (!s.hiddenFaults)
            emit("safety", "FAULT", `Fault injected: ${FAULT_CATALOG[id].name}`);
        },

        clearFault: (id) => {
          const s = get();
          if (!s.faults[id]) return;
          set({ faults: { ...s.faults, [id]: false } });
          emit("safety", "NOMINAL", `Fault cleared: ${FAULT_CATALOG[id].name}`);
        },

        clearAllFaults: () => {
          const s = get();
          const cleared = (Object.keys(s.faults) as FaultId[]).filter((k) => s.faults[k]);
          if (cleared.length === 0) return;
          set({ faults: { ...s.faults, ...Object.fromEntries(cleared.map((k) => [k, false])) } as Record<FaultId, boolean> });
          emit("safety", "NOMINAL", `All faults cleared (${cleared.length})`);
        },

        setHiddenFaults: (hidden) => {
          set({ hiddenFaults: hidden });
          emit("safety", "ADVISORY", hidden ? "Hidden-diagnosis mode ON — fault banners suppressed" : "Hidden-diagnosis mode OFF");
        },

        markIntroSeen: () => set({ seenIntro: true }),

        resetSession: () => {
          const fresh = freshState();
          set({ ...fresh, seenIntro: get().seenIntro });
          emit("power", "ADVISORY", "Session reset — facility returned to initial state");
        },
      };
    },
    {
      name: STORAGE_KEY,
      version: STORE_VERSION,
      // v1 → v2: physics constants changed (20.75 kHz mode); discard any
      // persisted v1 session and restart from a clean state.
      migrate: () => freshState() as unknown as SimState,
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => {
        // exclude transient + bulky sweep buffers from persistence
        const exclude = new Set([
          "sweeping",
          "sweepProgress",
          "lastSweep",
          "lastFit",
          "pressureHistory",
          "temperatureHistory",
          "thermalVel",
          "refWanderHz",
        ]);
        return Object.fromEntries(
          Object.entries(s).filter(([k]) => !exclude.has(k)),
        ) as unknown as SimState;
      },
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.sweeping = false;
          state.sweepProgress = 0;
          if (state.power === "BOOTING") state.power = "FACILITY_ON";
        }
      },
    },
  ),
);

/* ---------------- typed selectors / hooks ---------------- */

export const useFacility = () =>
  useSim((s) => ({
    power: s.power,
    bootT: s.bootT,
    pressure: s.pressure,
    roughingOn: s.roughingOn,
    turboOn: s.turboOn,
    turboSpool: s.turboSpool,
    venting: s.venting,
    temperature: s.temperature,
    setpoint: s.setpoint,
    thermalEnabled: s.thermalEnabled,
    thermalStable: s.thermalStable,
    driftCPerMin: s.driftCPerMin,
    clock: s.clock,
    vnaCalibrated: s.vnaCalibrated,
  }));

export const useEvents = () => useSim((s) => s.events);
export const useQuality = () => useSim(computeQuality);
export const useGrade = () => useSim(computeGrade);

export const useActiveFaults = () =>
  useSim((s) => (Object.keys(s.faults) as FaultId[]).filter((k) => s.faults[k]));

/** Direct action access without subscribing components to the store. */
export const simActions = {
  powerOn: () => useSim.getState().powerOn(),
  powerOff: () => useSim.getState().powerOff(),
  startRoughing: () => useSim.getState().startRoughing(),
  stopRoughing: () => useSim.getState().stopRoughing(),
  startTurbo: () => useSim.getState().startTurbo(),
  stopTurbo: () => useSim.getState().stopTurbo(),
  ventChamber: () => useSim.getState().ventChamber(),
  setThermalEnabled: (on: boolean) => useSim.getState().setThermalEnabled(on),
  setSetpoint: (c: number) => useSim.getState().setSetpoint(c),
  jogStage: (axis: Axis, delta: number) => useSim.getState().jogStage(axis, delta),
  setStage: (axis: Axis, mm: number) => useSim.getState().setStage(axis, mm),
  calibrateVna: () => useSim.getState().calibrateVna(),
  setVnaParams: (p: Partial<VnaParams>) => useSim.getState().setVnaParams(p),
  startSweep: () => useSim.getState().startSweep(),
  recordRun: (label: RunLabel) => useSim.getState().recordRun(label),
  revealBlinding: (manual?: boolean) => useSim.getState().revealBlinding(manual),
  injectFault: (id: FaultId) => useSim.getState().injectFault(id),
  clearFault: (id: FaultId) => useSim.getState().clearFault(id),
  clearAllFaults: () => useSim.getState().clearAllFaults(),
  setHiddenFaults: (h: boolean) => useSim.getState().setHiddenFaults(h),
  markIntroSeen: () => useSim.getState().markIntroSeen(),
  resetSession: () => useSim.getState().resetSession(),
};
