import { useSim } from "@/sim/store";
import type { Severity, SimEvent, Subsystem } from "@/sim/store";

let uiEventSeq = 0;

/**
 * Append a UI-originated event to the shared sim timeline.
 * The sim store does not expose `emit` as an action, so learning/training/
 * challenge/faults pages append their own events here (ids are spaced far
 * away from the engine's internal counter to avoid collisions).
 */
export function emitUiEvent(
  subsystem: Subsystem,
  severity: Severity,
  message: string,
) {
  const s = useSim.getState();
  const e: SimEvent = {
    id: 1_000_000_000 + Date.now() % 1_000_000_000 + uiEventSeq++,
    t: s.simTime,
    wall: Date.now(),
    subsystem,
    severity,
    message,
  };
  useSim.setState({ events: [...s.events.slice(-499), e] });
}

/** Snapshot all data (non-function) fields of the sim store. */
export function snapshotSim(): Record<string, unknown> {
  const s = useSim.getState() as unknown as Record<string, unknown>;
  const snap = Object.fromEntries(
    Object.entries(s).filter(([, v]) => typeof v !== "function"),
  );
  // bulky / transient buffers are not worth checkpointing
  delete snap.lastSweep;
  delete snap.lastFit;
  delete snap.pressureHistory;
  delete snap.temperatureHistory;
  snap.sweeping = false;
  snap.sweepProgress = 0;
  return snap;
}

/** Restore a snapshot produced by `snapshotSim`. */
export function restoreSim(snap: Record<string, unknown>) {
  useSim.setState(snap);
}

/** Short non-crypto hash → upper-hex string (for serials / conditions hashes). */
export function shortHash(input: string, len = 6): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).toUpperCase().padStart(8, "0").slice(0, len);
}
