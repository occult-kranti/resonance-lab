/** Scope model: constants, types, formatting (non-component module). */

export const TIMEBASES = [5e-6, 1e-5, 2e-5, 5e-5, 1e-4, 2e-4, 5e-4, 1e-3, 2e-3, 5e-3];
export const VDIVS = [0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1];

export type Ch1Src = "ldv" | "drive" | "acoustic";
export type Ch2Src = "ref" | "drive" | "off";

export interface ScopeSettings {
  timebaseIdx: number;
  ch1Src: Ch1Src;
  ch1VDivIdx: number;
  ch2Src: Ch2Src;
  ch2VDivIdx: number;
  trigSource: 1 | 2;
  trigEdge: "rising" | "falling";
  trigLevelV: number;
  trigMode: "auto" | "normal";
  run: boolean;
  persistence: boolean;
  fft: boolean;
  cursors: boolean;
  cursorsT: [number, number]; // seconds, offset from window start
  cursorsV: [number, number]; // volts, CH1 scale
}

export interface ScopeMeasurements {
  freqHz: number | null;
  vpp: number;
  vrms: number;
  noiseMv: number;
  fftPeakHz: number | null;
  refOffsetMHz: number | null;
}

export const DEFAULT_SCOPE: ScopeSettings = {
  timebaseIdx: 1, // 10 µs/div
  ch1Src: "ldv",
  ch1VDivIdx: 2, // 20 mV/div
  ch2Src: "ref",
  ch2VDivIdx: 6, // 0.5 V/div
  trigSource: 1,
  trigEdge: "rising",
  trigLevelV: 0,
  trigMode: "auto",
  run: true,
  persistence: true,
  fft: false,
  cursors: false,
  cursorsT: [30e-6, 34.35e-6],
  cursorsV: [-0.02, 0.02],
};

export function fmtSi(v: number, unit: string): string {
  const a = Math.abs(v);
  if (a >= 1) return `${v.toFixed(2)} ${unit}`;
  if (a >= 1e-3) return `${(v * 1e3).toFixed(2)} m${unit}`;
  if (a >= 1e-6) return `${(v * 1e6).toFixed(2)} µ${unit}`;
  return `${(v * 1e9).toFixed(2)} n${unit}`;
}
