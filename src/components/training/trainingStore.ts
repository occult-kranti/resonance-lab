import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * Training checklist progress (training.md).
 * Persisted independently of the sim session — survives "Reset session"
 * unless the operator explicitly wipes it here.
 */
interface TrainingState {
  /** itemId → simTime (s) when first verified */
  verified: Record<string, number>;
  /** itemId → true while a previously-verified condition is currently lost */
  lost: Record<string, boolean>;
  operatorName: string;
  verify: (id: string, t: number) => void;
  markLost: (id: string) => void;
  clearLost: (id: string) => void;
  attest: (id: string, t: number) => void;
  unattest: (id: string) => void;
  setOperatorName: (name: string) => void;
  reset: () => void;
}

export const useTrainingStore = create<TrainingState>()(
  persist(
    (set) => ({
      verified: {},
      lost: {},
      operatorName: "",

      verify: (id, t) =>
        set((s) =>
          s.verified[id] !== undefined
            ? s
            : { verified: { ...s.verified, [id]: t } },
        ),

      markLost: (id) =>
        set((s) => (s.lost[id] ? s : { lost: { ...s.lost, [id]: true } })),

      clearLost: (id) =>
        set((s) => {
          if (!s.lost[id]) return s;
          const next = { ...s.lost };
          delete next[id];
          return { lost: next };
        }),

      attest: (id, t) =>
        set((s) =>
          s.verified[id] !== undefined
            ? s
            : { verified: { ...s.verified, [id]: t } },
        ),

      unattest: (id) =>
        set((s) => {
          if (s.verified[id] === undefined) return s;
          const next = { ...s.verified };
          delete next[id];
          return { verified: next };
        }),

      setOperatorName: (name) => set({ operatorName: name }),

      reset: () => set({ verified: {}, lost: {} }),
    }),
    {
      name: "resonance-lab-training-v1",
      version: 1,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

/** Fraction of checklist verified (0–1) — also used by Challenge tier gating. */
export function trainingFraction(verified: Record<string, number>, total: number) {
  return total === 0 ? 0 : Object.keys(verified).length / total;
}
