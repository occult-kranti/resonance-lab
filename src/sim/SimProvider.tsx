import { useEffect } from "react";
import type { ReactNode } from "react";
import { useSim } from "./store";

/**
 * SimProvider — drives the 10 Hz simulation tick (design.md §6).
 * Mount once near the root. Plots read store state at rAF via useSim.getState().
 */
export default function SimProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const id = window.setInterval(() => {
      useSim.getState().tick();
    }, 100);
    return () => window.clearInterval(id);
  }, []);

  return <>{children}</>;
}
