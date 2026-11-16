import { formatSessionTime } from "@/sim/store";
import type { SimEvent } from "@/sim/store";
import type { EntryTag, NotebookEntry } from "./store";

/* ------------------------------------------------------------------
   Export helpers (notebook.md — "Export .md")
   ------------------------------------------------------------------ */

export interface ExportItem {
  t: number;
  wall: number;
  authorLabel: string;
  tag: EntryTag;
  body: string;
}

/** Build the full notebook as a Markdown document with disclaimer header. */
export function buildExportMarkdown(items: ExportItem[]): string {
  const ordered = [...items].sort((a, b) => a.t - b.t || a.wall - b.wall);
  const lines: string[] = [
    "# RESONANCE LAB — Lab Notebook Export",
    "",
    "> Educational simulator. Physics is idealized and energy-conserving — measured",
    "> output is always less than input. Not a real measurement device.",
    "",
    `> MERIDIAN STANDARDS LABORATORY — Teaching Bay 3 · Experiment LOC-1`,
    `> Exported ${new Date().toISOString()} · ${ordered.length} entries`,
    "",
    "---",
    "",
  ];
  for (const e of ordered) {
    const wall = new Date(e.wall).toLocaleTimeString();
    lines.push(`### ${formatSessionTime(e.t)} — ${e.tag.toUpperCase()}`);
    lines.push(`*${e.authorLabel} · wall ${wall}*`);
    lines.push("");
    lines.push(e.body);
    lines.push("");
  }
  return lines.join("\n");
}

/** Flatten a manual entry to an export item. */
export function entryToExport(e: NotebookEntry, operatorName: string): ExportItem {
  return {
    t: e.t,
    wall: e.wall,
    authorLabel: e.author === "OPERATOR" ? operatorName : e.author,
    tag: e.tag,
    body: e.body,
  };
}

/** Flatten a sim event (auto-logged) to an export item. */
export function eventToExport(e: SimEvent, tag: EntryTag): ExportItem {
  return {
    t: e.t,
    wall: e.wall,
    authorLabel: "AUTOLOG",
    tag,
    body: e.message,
  };
}
