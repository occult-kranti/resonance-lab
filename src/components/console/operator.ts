import { useSyncExternalStore } from "react";

/**
 * Operator identity — persisted to localStorage, shared across pages
 * (Console editor, Timeline/Notebook attribution). The sim store is owned
 * by the scaffold, so the operator name lives in this tiny external store.
 */

const KEY = "resonance-lab-operator";
const CHANGE_EVENT = "resonance-lab:operator";

export function getOperator(): string {
  try {
    return window.localStorage.getItem(KEY) ?? "";
  } catch {
    return "";
  }
}

export function setOperatorName(name: string) {
  try {
    const clean = name.slice(0, 32);
    if (clean) window.localStorage.setItem(KEY, clean);
    else window.localStorage.removeItem(KEY);
  } catch {
    /* storage unavailable — session-only */
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(cb: () => void) {
  window.addEventListener(CHANGE_EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(CHANGE_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

/** Reactive operator name ("" when unsigned). */
export function useOperatorName(): string {
  return useSyncExternalStore(subscribe, getOperator, () => "");
}
