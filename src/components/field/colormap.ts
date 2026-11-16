/** Shared heatmap colormap: dark → trace → trace-2 (field-explorer.md). */

const BG: [number, number, number] = [7, 11, 16]; // #070b10
const TRACE: [number, number, number] = [45, 212, 200];
const TRACE2: [number, number, number] = [240, 182, 76];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/** v in 0..1 → RGB, with contrast exponent (0.5–2.5). */
export function rampColor(v: number, contrast: number): [number, number, number] {
  const c = Math.min(1, Math.max(0, Math.pow(Math.min(1, Math.max(0, v)), 1 / contrast)));
  if (c <= 0.5) {
    const t = c * 2;
    return [lerp(BG[0], TRACE[0], t), lerp(BG[1], TRACE[1], t), lerp(BG[2], TRACE[2], t)];
  }
  const t = (c - 0.5) * 2;
  return [lerp(TRACE[0], TRACE2[0], t), lerp(TRACE[1], TRACE2[1], t), lerp(TRACE[2], TRACE2[2], t)];
}

/** cheap deterministic hash noise per cell per time slice */
export function cellNoise(ix: number, iy: number, slice: number): number {
  let h = (ix * 374761393 + iy * 668265263 + slice * 2246822519) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}
