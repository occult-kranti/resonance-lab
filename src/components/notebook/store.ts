import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/* ============================================================
   Lab Notebook — local store (notebook.md)
   Manual entries + pins on the auto-logged sim event stream.
   Auto entries themselves are derived live from the sim event
   bus (read-only by design); this store holds everything the
   operator authored or pinned.
   ============================================================ */

export const NOTEBOOK_STORAGE_KEY = "resonance-lab-notebook-v1";

export type EntryTag = "auto" | "note" | "fit" | "run" | "fault" | "copilot";
export type EntryAuthor = "AUTOLOG" | "OPERATOR" | "COPILOT";

export const OPERATOR_NAME = "T. MARLOWE";

export interface NotebookEntry {
  id: string;
  /** session-relative seconds at creation */
  t: number;
  /** epoch ms at creation */
  wall: number;
  author: EntryAuthor;
  tag: EntryTag;
  body: string;
  pinned: boolean;
}

interface NotebookState {
  /** the sim session these entries belong to (cleared on session reset) */
  sessionId: string;
  entries: NotebookEntry[];
  /** ids of pinned auto-log entries (sim event ids) */
  pinnedAuto: number[];
  addEntry: (e: {
    body: string;
    tag: EntryTag;
    author?: EntryAuthor;
    t: number;
  }) => NotebookEntry;
  updateEntry: (id: string, body: string) => void;
  deleteEntry: (id: string) => void;
  restoreEntry: (entry: NotebookEntry) => void;
  togglePin: (id: string) => void;
  togglePinAuto: (eventId: number) => void;
  /** bind to a sim session; wipes entries if the session changed */
  bindSession: (sessionId: string) => void;
}

let entryCounter = 1;

export const useNotebook = create<NotebookState>()(
  persist(
    (set, get) => ({
      sessionId: "",
      entries: [],
      pinnedAuto: [],

      addEntry: ({ body, tag, author = "OPERATOR", t }) => {
        const entry: NotebookEntry = {
          id: `nb-${Date.now().toString(36)}-${entryCounter++}`,
          t,
          wall: Date.now(),
          author,
          tag,
          body,
          pinned: false,
        };
        set({ entries: [...get().entries, entry] });
        return entry;
      },

      updateEntry: (id, body) =>
        set({
          entries: get().entries.map((e) => (e.id === id ? { ...e, body } : e)),
        }),

      deleteEntry: (id) =>
        set({ entries: get().entries.filter((e) => e.id !== id) }),

      restoreEntry: (entry) =>
        set({ entries: [...get().entries, entry] }),

      togglePin: (id) =>
        set({
          entries: get().entries.map((e) =>
            e.id === id ? { ...e, pinned: !e.pinned } : e,
          ),
        }),

      togglePinAuto: (eventId) => {
        const cur = get().pinnedAuto;
        set({
          pinnedAuto: cur.includes(eventId)
            ? cur.filter((i) => i !== eventId)
            : [...cur, eventId],
        });
      },

      bindSession: (sessionId) => {
        if (get().sessionId === sessionId) return;
        set({ sessionId, entries: [], pinnedAuto: [] });
      },
    }),
    {
      name: NOTEBOOK_STORAGE_KEY,
      version: 1,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

/** Direct action access without subscribing components. */
export const notebookActions = {
  addEntry: (e: { body: string; tag: EntryTag; author?: EntryAuthor; t: number }) =>
    useNotebook.getState().addEntry(e),
  togglePin: (id: string) => useNotebook.getState().togglePin(id),
  togglePinAuto: (eventId: number) => useNotebook.getState().togglePinAuto(eventId),
};
