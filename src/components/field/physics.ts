import {
  trueF0Hz,
  qForPressure,
  type SimState,
} from "@/sim/store";

/**
 * Shared physics helpers for the LDV Scanner and Spatial Field Explorer.
 * Everything derives from the live sim store — values stay consistent with
 * the VNA/fit pages. Honest physics: passive response only, amplitude never
 * exceeds what the drive supplies.
 */

/** Live breathing-mode frequency (Hz) incl. temperature + clock wander. */
export function liveF0Hz(s: SimState): number {
  return trueF0Hz(s, null);
}

/** Effective Q: vacuum-limited, degraded by the fan-vibration fault. */
export function liveQ(s: SimState): number {
  return qForPressure(s.pressure) * (s.faults["fan-vibration"] ? 0.55 : 1);
}

/**
 * Normalized passive Lorentzian velocity response of a driven damped
 * oscillator at drive frequency f (≤ 1 at resonance, no gain).
 */
export function resonanceEnhancement(fHz: number, f0Hz: number, q: number): number {
  const x = (2 * q * (fHz - f0Hz)) / f0Hz;
  return 1 / Math.sqrt(1 + x * x);
}

/**
 * Acoustic loading factor: in air the surface velocity for the same drive
 * drops ~3× (energy is carried away by the gas). 1 in high vacuum.
 */
export function airLoadingFactor(pressureHpa: number): number {
  const p = Math.max(pressureHpa, 1e-6);
  const t = Math.min(1, Math.max(0, (Math.log10(p) + 3) / (Math.log10(1013) + 3)));
  return 1 - (2 / 3) * t;
}

/**
 * Peak surface velocity (nm/s) at the beam point.
 * amplitudeV: drive volts (0–10). sensitivity: local mode-shape factor 0–1.
 */
export function surfaceVelocityNmS(
  s: SimState,
  drive: { on: boolean; amplitudeV: number; freqHz: number },
  sensitivity: number,
): number {
  if (!drive.on || s.power !== "FACILITY_ON") return 0;
  const f0 = liveF0Hz(s);
  const q = liveQ(s);
  const enh = resonanceEnhancement(drive.freqHz, f0, q);
  // 8.5 nm/s per volt at resonance in vacuum — passive, drive-limited.
  return 8.5 * drive.amplitudeV * enh * sensitivity * airLoadingFactor(s.pressure);
}

/** LDV velocity noise floor (nm/s rms) given focus 0–1 and facility state. */
export function ldvNoiseNmS(s: SimState, focus01: number): number {
  let n = 0.35;
  n *= 1 + Math.pow(1 - focus01, 2) * 8; // defocus multiplies noise
  n *= 1 + 2 * (1 - airLoadingFactor(s.pressure)); // air: acoustic noise
  if (s.faults["fan-vibration"]) n *= 4;
  if (s.faults["loose-cable"]) n *= 1.5;
  return n;
}

/** Field amplitude (relative, 0–1) at radius rMm from the sphere surface. */
export function fieldAmplitude(
  s: SimState,
  drive: { on: boolean; amplitudeV: number; freqHz: number },
  rMm: number,
  sphereRadiusMm: number,
): number {
  if (!drive.on || s.power !== "FACILITY_ON") return 0;
  const f0 = liveF0Hz(s);
  const q = liveQ(s);
  const enh = resonanceEnhancement(drive.freqHz, f0, q);
  const r = Math.max(rMm, sphereRadiusMm);
  const falloff = (sphereRadiusMm * sphereRadiusMm) / (r * r); // 1/r²
  const a = (drive.amplitudeV / 10) * enh * falloff * airLoadingFactor(s.pressure);
  return Math.min(1, a);
}

/* ---------------- shared geometry ---------------- */

/** Copper sphere radius (mm), schematic cross-section. */
export const SPHERE_R_MM = 25;
/** A/B slots straddle the stage park position (schematic; actual separation 0.40 m). */
export const POS_OFFSET_MM = 78;

/** breathing-mode local sensitivity on the face-on disc: cos falloff, 1 at center */
export function sensitivityForTheta(thetaDeg: number): number {
  return Math.max(0, Math.cos((thetaDeg * Math.PI) / 180));
}

