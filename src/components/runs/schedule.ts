import type { RunLabel } from "@/sim/store";

/* ============================================================
   LOC-1 blinded schedule — page-local persistence (runs.md).
   The schedule is stored base64-obfuscated in localStorage.
   Note, operator: base64 is a courtesy curtain, not a vault.
   The protocol trusts you. Don't peek. ;)
   ============================================================ */

const SCHED_KEY = "resonance-lab-loc1-schedule-v1";
const META_KEY = "resonance-lab-loc1-runmeta-v1";

export interface Schedule {
  /** sim session this schedule belongs to */
  sessionId: string;
  /** blinded label sequence; run k consumes seq[k] */
  seq: RunLabel[];
  /** random seed phrase (for the record) */
  seed: string;
  createdWall: number;
}

/** per-run page-local metadata keyed by RunRecord.id */
export interface RunMeta {
  slot?: number;
  note?: string;
  sentToNotebook?: boolean;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Balanced shuffled block of A/B labels. */
function balancedBlock(n: number): RunLabel[] {
  const half = Math.ceil(n / 2);
  const block: RunLabel[] = [
    ...Array<RunLabel>(half).fill("A"),
    ...Array<RunLabel>(Math.floor(n / 2)).fill("B"),
  ];
  return shuffle(block);
}

export function generateSchedule(sessionId: string, length = 6): Schedule {
  return {
    sessionId,
    seq: balancedBlock(length),
    seed: Math.random().toString(36).slice(2, 10),
    createdWall: Date.now(),
  };
}

/** Append another balanced block so the protocol never runs dry. */
export function extendSchedule(s: Schedule, block = 6): Schedule {
  return { ...s, seq: [...s.seq, ...balancedBlock(block)] };
}

export function loadSchedule(sessionId: string): Schedule | null {
  try {
    const raw = localStorage.getItem(SCHED_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(atob(raw)) as Schedule;
    if (parsed.sessionId !== sessionId || !Array.isArray(parsed.seq)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveSchedule(s: Schedule): void {
  try {
    localStorage.setItem(SCHED_KEY, btoa(JSON.stringify(s)));
  } catch {
    /* storage unavailable */
  }
}

export function clearSchedule(): void {
  try {
    localStorage.removeItem(SCHED_KEY);
  } catch {
    /* ignore */
  }
}

export function loadRunMeta(sessionId: string): Record<number, RunMeta> {
  try {
    const raw = localStorage.getItem(META_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as {
      sessionId: string;
      meta: Record<number, RunMeta>;
    };
    if (parsed.sessionId !== sessionId) return {};
    return parsed.meta ?? {};
  } catch {
    return {};
  }
}

export function saveRunMeta(sessionId: string, meta: Record<number, RunMeta>): void {
  try {
    localStorage.setItem(META_KEY, JSON.stringify({ sessionId, meta }));
  } catch {
    /* ignore */
  }
}
