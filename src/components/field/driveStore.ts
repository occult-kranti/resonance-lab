import { create } from "zustand";
import { useSim } from "@/sim/store";
import { liveF0Hz } from "./physics";

/**
 * Shared piezo drive state for the instrument pages (Field Explorer owns the
 * panel; LDV / Scope read the same source). Kept out of the persisted sim
 * store — the drive is a bench signal generator, not facility state.
 */
export interface DriveState {
  on: boolean;
  /** 0–10 V */
  amplitudeV: number;
  /** drive frequency, Hz */
  freqHz: number;
  /** chirp through resonance */
  chirping: boolean;
  chirpT0: number;
  chirpFromHz: number;
  chirpToHz: number;

  setOn: (on: boolean) => void;
  setAmplitudeV: (v: number) => void;
  setFreqHz: (f: number) => void;
  /** 6 s linear chirp ±420 Hz around the current live resonance. */
  startChirp: () => void;
  stopChirp: () => void;
}

const CHIRP_MS = 6000;
let chirpTimer: number | undefined;

export const useDrive = create<DriveState>()((set, get) => ({
  on: false,
  amplitudeV: 4,
  freqHz: 20_750,
  chirping: false,
  chirpT0: 0,
  chirpFromHz: 0,
  chirpToHz: 0,

  setOn: (on) => {
    if (!on) get().stopChirp();
    set({ on });
  },
  setAmplitudeV: (v) => set({ amplitudeV: Math.min(10, Math.max(0, v)) }),
  setFreqHz: (f) => set({ freqHz: f }),

  startChirp: () => {
    if (get().chirping) return;
    const f0 = liveF0Hz(useSim.getState());
    set({
      on: true,
      chirping: true,
      chirpT0: performance.now(),
      chirpFromHz: f0 - 420,
      chirpToHz: f0 + 420,
      freqHz: f0 - 420,
    });
    window.clearInterval(chirpTimer);
    chirpTimer = window.setInterval(() => {
      const d = get();
      const t = (performance.now() - d.chirpT0) / CHIRP_MS;
      if (t >= 1) {
        window.clearInterval(chirpTimer);
        chirpTimer = undefined;
        // park back on resonance after the chirp
        set({ chirping: false, freqHz: liveF0Hz(useSim.getState()) });
        return;
      }
      set({ freqHz: d.chirpFromHz + (d.chirpToHz - d.chirpFromHz) * t });
    }, 50);
  },

  stopChirp: () => {
    if (chirpTimer !== undefined) {
      window.clearInterval(chirpTimer);
      chirpTimer = undefined;
    }
    if (get().chirping) set({ chirping: false });
  },
}));
