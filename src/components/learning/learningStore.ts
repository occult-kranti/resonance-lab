import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface ModuleProgress {
  complete: boolean;
  bestScore: number; // best quiz score (0–3)
  attempts: number;
  completedAt: number | null; // epoch ms
}

interface LearningState {
  progress: Record<string, ModuleProgress>;
  unlockAll: boolean;
  streak: number;
  lastCompletionDay: string | null; // YYYY-MM-DD
  setUnlockAll: (b: boolean) => void;
  /** Record a quiz result; returns true if this attempt newly completed the module. */
  recordQuiz: (moduleId: string, score: number, passMark: number) => boolean;
  resetAll: () => void;
}

function dayKey(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set, get) => ({
      progress: {},
      unlockAll: false,
      streak: 0,
      lastCompletionDay: null,

      setUnlockAll: (b) => set({ unlockAll: b }),

      recordQuiz: (moduleId, score, passMark) => {
        const s = get();
        const prev: ModuleProgress =
          s.progress[moduleId] ?? {
            complete: false,
            bestScore: 0,
            attempts: 0,
            completedAt: null,
          };
        const passed = score >= passMark;
        const newlyComplete = passed && !prev.complete;

        let streak = s.streak;
        let lastCompletionDay = s.lastCompletionDay;
        if (newlyComplete) {
          const today = dayKey(new Date());
          const yesterday = dayKey(new Date(Date.now() - 86_400_000));
          streak =
            lastCompletionDay === today
              ? streak
              : lastCompletionDay === yesterday
                ? streak + 1
                : 1;
          lastCompletionDay = today;
        }

        set({
          streak,
          lastCompletionDay,
          progress: {
            ...s.progress,
            [moduleId]: {
              complete: prev.complete || passed,
              bestScore: Math.max(prev.bestScore, score),
              attempts: prev.attempts + 1,
              completedAt: newlyComplete ? Date.now() : prev.completedAt,
            },
          },
        });
        return newlyComplete;
      },

      resetAll: () =>
        set({ progress: {}, streak: 0, lastCompletionDay: null }),
    }),
    {
      name: "resonance-lab-learning-v1",
      version: 1,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
