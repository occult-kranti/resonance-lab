import type { Subsystem } from "@/sim/store";

/** Subsystem accent colors (design.md §2 mapping), shared by EventRow and pages. */
export const SUBSYSTEM_COLORS: Record<Subsystem, string> = {
  power: "bg-trace-2",
  vacuum: "bg-blue",
  thermal: "bg-copper",
  clock: "bg-violet",
  rf: "bg-trace",
  mechanics: "bg-dim",
  safety: "bg-go",
  experiment: "bg-trace-2",
};

export const PLOT_PALETTE = {
  trace: "#2dd4c8",
  "trace-2": "#f0b64c",
  violet: "#9d8df1",
  blue: "#5aa2f0",
  go: "#3ddc84",
  bad: "#f0524f",
} as const;

export function plotColor(name: keyof typeof PLOT_PALETTE | string): string {
  return PLOT_PALETTE[name as keyof typeof PLOT_PALETTE] ?? name;
}
