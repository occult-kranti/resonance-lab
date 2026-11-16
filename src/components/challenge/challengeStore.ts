import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { FaultId, Grade } from "@/sim/store";
import type { AxisScores } from "./scenarios";

export interface BestEntry {
  score: number;
  grade: Grade;
  date: string; // ISO date
  hash: string; // conditions hash
}

export interface FinishResult {
  completed: boolean;
  scores: AxisScores;
  total: number;
  grade: Grade;
  elapsed: number; // sim seconds
  isBest: boolean;
}

/** Active challenge run — global (survives navigation to Fault Injector
 *  during diagnosis scenarios) but NOT persisted. */
export interface RunState {
  scenarioId: string;
  startSimTime: number;
  startRuns: number;
  startAttempts: number;
  checkpoint: Record<string, unknown> | null;
  injectedFault: FaultId | null;
  faultClearedAt: number | null;
  finish: FinishResult | null;
}

interface ChallengeState {
  bests: Record<string, BestEntry>;
  run: RunState | null;
  recordBest: (scenarioId: string, entry: BestEntry) => boolean;
  clearHistory: () => void;
  startRun: (run: RunState) => void;
  patchRun: (patch: Partial<RunState>) => void;
  endRun: () => void;
}

export const useChallengeStore = create<ChallengeState>()(
  persist(
    (set, get) => ({
      bests: {},
      run: null,

      recordBest: (scenarioId, entry) => {
        const prev = get().bests[scenarioId];
        if (prev && prev.score >= entry.score) return false;
        set({ bests: { ...get().bests, [scenarioId]: entry } });
        return true;
      },

      clearHistory: () => set({ bests: {} }),

      startRun: (run) => set({ run }),
      patchRun: (patch) =>
        set((s) => (s.run ? { run: { ...s.run, ...patch } } : s)),
      endRun: () => set({ run: null }),
    }),
    {
      name: "resonance-lab-challenge-v1",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ bests: s.bests }) as ChallengeState,
    },
  ),
);
