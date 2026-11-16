import type { Grade, RunRecord } from "@/sim/store";

/** Per-run quality grade derived from the fit uncertainty (VALID runs). */
export function runGrade(r: RunRecord): Grade {
  if (!r.valid) return "INVALID";
  if (r.f0Sigma < 0.75) return "S";
  if (r.f0Sigma < 1.5) return "A";
  if (r.f0Sigma < 4) return "B";
  return "C";
}

/** valid pairs = min(valid A, valid B) — the unblinding threshold currency */
export function validPairs(runs: RunRecord[]): number {
  const v = runs.filter((r) => r.valid);
  const a = v.filter((r) => r.label === "A").length;
  const b = v.filter((r) => r.label === "B").length;
  return Math.min(a, b);
}

export interface SlotStats {
  n: number;
  mean: number;
  sem: number;
}

/** Per-position stats over VALID runs. Slot 0 → P1, slot 1 → P2. */
export function slotStats(
  runs: RunRecord[],
  labelToSlot: { A: 0 | 1; B: 0 | 1 },
): [SlotStats | null, SlotStats | null] {
  const groups: [number[], number[]] = [[], []];
  for (const r of runs) {
    if (!r.valid) continue;
    groups[labelToSlot[r.label]].push(r.f0);
  }
  return groups.map((g) => {
    if (g.length === 0) return null;
    const mean = g.reduce((a, b) => a + b, 0) / g.length;
    const varr =
      g.length > 1 ? g.reduce((a, b) => a + (b - mean) ** 2, 0) / (g.length - 1) : 0;
    return { n: g.length, mean, sem: Math.sqrt(varr / g.length) };
  }) as [SlotStats | null, SlotStats | null];
}
