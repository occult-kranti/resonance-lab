import { create } from "zustand";

/* ============================================================
   Chamber page — local UI state (view mode, drive, camera cues)
   Kept out of the sim store: these are viewport/instrument-local.
   ============================================================ */

export type ViewMode = "assembled" | "ghost" | "section";

/** mm → scene units (stage travel ±35 mm maps to ±0.5 units). */
export const MM_TO_U = 0.5 / 35;

/** Chamber geometry constants (scene units). */
export const CHAMBER = {
  /** axis center height */
  cy: 2.4,
  /** outer radius */
  r: 1.7,
  /** body length along z */
  len: 2.6,
} as const;

/** Blinded A/B stage presets (fiction: two positions, mapping hidden). */
export const POS_1 = { x: -20, y: 0, z: 0 } as const;
export const POS_2 = { x: 20, y: 0, z: 0 } as const;

/** Sphere rest position (on top of stage stack, chamber axis height). */
export const SPHERE_BASE = { x: 0, y: CHAMBER.cy, z: 0 } as const;
export const SPHERE_R = 0.55;

export type HoverId =
  | "sphere"
  | "stage"
  | "ldv"
  | "piezo"
  | "turbo"
  | "vessel"
  | null;

interface ChamberUIState {
  viewMode: ViewMode;
  gridVisible: boolean;
  /** exploded-view target 0..1 (eased in the scene) */
  exploded: number;
  reduceMotion: boolean;
  /** drive piezo excitation (page-local instrument) */
  driveOn: boolean;
  driveVolts: number; // 0–10 V
  /** chirp start timestamp (performance.now ms), null when idle */
  chirpStart: number | null;
  /** section clip plane z position */
  sectionZ: number;
  hover: HoverId;
  sphereStatOpen: boolean;
  /** monotonically increasing cues consumed by the camera rig */
  resetViewTick: number;
  frameStageTick: number;
  dollyTick: number;

  setViewMode: (m: ViewMode) => void;
  setGridVisible: (v: boolean) => void;
  setExploded: (v: number) => void;
  setReduceMotion: (v: boolean) => void;
  setDriveOn: (v: boolean) => void;
  setDriveVolts: (v: number) => void;
  startChirp: () => void;
  endChirp: () => void;
  setSectionZ: (z: number) => void;
  setHover: (h: HoverId) => void;
  setSphereStatOpen: (v: boolean) => void;
  requestResetView: () => void;
  requestFrameStage: () => void;
  requestDolly: () => void;
}

export const CHIRP_DURATION_S = 4;
export const CHIRP_F_START_HZ = 227_000;
export const CHIRP_F_STOP_HZ = 232_500;

export const useChamberUi = create<ChamberUIState>()((set) => ({
  viewMode: "ghost",
  gridVisible: true,
  exploded: 0,
  reduceMotion:
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  driveOn: false,
  driveVolts: 2,
  chirpStart: null,
  sectionZ: 0.9,
  hover: null,
  sphereStatOpen: false,
  resetViewTick: 0,
  frameStageTick: 0,
  dollyTick: 0,

  setViewMode: (viewMode) => set({ viewMode }),
  setGridVisible: (gridVisible) => set({ gridVisible }),
  setExploded: (exploded) => set({ exploded }),
  setReduceMotion: (reduceMotion) => set({ reduceMotion }),
  setDriveOn: (driveOn) => set({ driveOn }),
  setDriveVolts: (driveVolts) => set({ driveVolts }),
  startChirp: () => set({ chirpStart: performance.now() }),
  endChirp: () => set({ chirpStart: null }),
  setSectionZ: (sectionZ) => set({ sectionZ }),
  setHover: (hover) => set({ hover }),
  setSphereStatOpen: (sphereStatOpen) => set({ sphereStatOpen }),
  requestResetView: () => set((s) => ({ resetViewTick: s.resetViewTick + 1 })),
  requestFrameStage: () => set((s) => ({ frameStageTick: s.frameStageTick + 1 })),
  requestDolly: () => set((s) => ({ dollyTick: s.dollyTick + 1 })),
}));

/** Chirp drive frequency (Hz) at t seconds after chirp start. */
export function chirpFreqHz(tSec: number): number {
  const k = Math.min(Math.max(tSec / CHIRP_DURATION_S, 0), 1);
  return CHIRP_F_START_HZ + (CHIRP_F_STOP_HZ - CHIRP_F_START_HZ) * k;
}

/** Normalized Lorentzian response 0..1 at frequency f for resonance f0/Q. */
export function lorentzianResponse(f: number, f0: number, q: number): number {
  const gamma = f0 / q;
  const x = (2 * (f - f0)) / gamma;
  return 1 / (1 + x * x);
}
