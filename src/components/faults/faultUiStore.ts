import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { FaultId } from "@/sim/store";

/**
 * Fault Injector UI state (faults.md) — inject timestamps, diagnosis
 * attempts and "called" flags. The faults themselves live in the sim store;
 * this store only tracks the page's bookkeeping.
 */
interface FaultUiState {
  /** faultId → simTime when injected from the UI */
  injectedAt: Partial<Record<FaultId, number>>;
  /** wrong diagnosis submissions in the current hidden-mode session */
  attempts: number;
  /** faultId → simTime when correctly called in the diagnosis panel */
  called: Partial<Record<FaultId, number>>;
  noteInject: (id: FaultId, t: number) => void;
  noteClear: (id: FaultId) => void;
  addAttempt: () => void;
  markCalled: (id: FaultId, t: number) => void;
  resetDiagnosis: () => void;
}

export const useFaultUiStore = create<FaultUiState>()(
  persist(
    (set) => ({
      injectedAt: {},
      attempts: 0,
      called: {},

      noteInject: (id, t) =>
        set((s) => ({
          injectedAt: { ...s.injectedAt, [id]: t },
          // a fresh hidden fault starts a fresh diagnosis session
          attempts: 0,
        })),

      noteClear: (id) =>
        set((s) => {
          const injectedAt = { ...s.injectedAt };
          const called = { ...s.called };
          delete injectedAt[id];
          delete called[id];
          return { injectedAt, called };
        }),

      addAttempt: () => set((s) => ({ attempts: s.attempts + 1 })),

      markCalled: (id, t) =>
        set((s) => ({ called: { ...s.called, [id]: t } })),

      resetDiagnosis: () => set({ attempts: 0, called: {} }),
    }),
    {
      name: "resonance-lab-faults-v1",
      version: 1,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
