import { formatSessionTime, useSim } from "@/sim/store";
import { getOperator } from "@/components/console/operator";

/**
 * Notebook bridge — Copilot/Timeline can append entries to the Lab Notebook.
 * The sim store is scaffold-owned and has no notebook slice, so entries are
 * staged in localStorage and announced with a window CustomEvent; the
 * Notebook page consumes `resonance-lab-notebook-extras` + this event.
 */

export interface NotebookExtra {
  id: string;
  t: number; // session seconds
  wall: number; // epoch ms
  author: "COPILOT" | "OPERATOR";
  tag: "copilot" | "note" | "auto";
  title: string;
  body: string;
}

const KEY = "resonance-lab-notebook-extras";
export const NOTEBOOK_EVENT = "resonance-lab:notebook-entry";

export function listNotebookExtras(): NotebookExtra[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as { sessionId?: string; entries?: NotebookExtra[] };
    // entries belong to a session; a new session starts with a clean notebook
    if (parsed.sessionId !== useSim.getState().sessionId) return [];
    return parsed.entries ?? [];
  } catch {
    return [];
  }
}

export function appendNotebookEntry(entry: Omit<NotebookExtra, "id" | "t" | "wall">) {
  const s = useSim.getState();
  const full: NotebookExtra = {
    ...entry,
    id: Math.random().toString(36).slice(2, 10),
    t: s.simTime,
    wall: Date.now(),
  };
  try {
    const entries = [...listNotebookExtras(), full].slice(-200);
    window.localStorage.setItem(
      KEY,
      JSON.stringify({ sessionId: s.sessionId, entries }),
    );
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new CustomEvent(NOTEBOOK_EVENT, { detail: full }));
}

/** Copy-to-Notebook payload for a batch of timeline events. */
export function appendTimelineToNotebook(lines: string[]) {
  const operator = getOperator();
  appendNotebookEntry({
    author: "OPERATOR",
    tag: "note",
    title: `Timeline excerpt${operator ? ` by ${operator}` : ""} — ${lines.length} events @ ${formatSessionTime(useSim.getState().simTime)}`,
    body: lines.join("\n"),
  });
}
