/** Rear-panel output plug state (shared with the VNA page via localStorage). */

export const REF_OUTS_KEY = "resonance-lab-ref-outs-v1";

export interface RefOutput {
  id: string;
  label: string;
  kind: "10MHz" | "1PPS";
  plugged: boolean;
}

export const DEFAULT_REF_OUTS: RefOutput[] = [
  { id: "vna", label: "10 MHz OUT 1 → VNA", kind: "10MHz", plugged: true },
  { id: "scope", label: "10 MHz OUT 2 → SCOPE", kind: "10MHz", plugged: true },
  { id: "aux1", label: "10 MHz OUT 3", kind: "10MHz", plugged: false },
  { id: "aux2", label: "10 MHz OUT 4", kind: "10MHz", plugged: false },
  { id: "pps1", label: "1 PPS 1", kind: "1PPS", plugged: false },
  { id: "pps2", label: "1 PPS 2", kind: "1PPS", plugged: false },
];

export function loadRefOuts(): RefOutput[] {
  try {
    const raw = localStorage.getItem(REF_OUTS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as RefOutput[];
      if (Array.isArray(parsed) && parsed.length === DEFAULT_REF_OUTS.length) return parsed;
    }
  } catch {
    /* fall through */
  }
  return DEFAULT_REF_OUTS;
}

/** true when the VNA's 10 MHz rear-panel input is plugged (drives EXT-REF LOST). */
export function readVnaRefPlugged(): boolean {
  const outs = loadRefOuts();
  const vna = outs.find((o) => o.id === "vna");
  return vna ? vna.plugged : true;
}
