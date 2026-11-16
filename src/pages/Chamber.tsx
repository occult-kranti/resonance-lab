import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useChamberUi } from "@/components/chamber/chamberUi";
import {
  EnvironmentPanel,
  FacilityStateLabel,
  HoverCallout,
  LegendPanel,
  SphereStatPopover,
  StageControlPanel,
  ViewControlsPanel,
} from "@/components/chamber/panels";

// code-split the heavy WebGL scene (react-dev.md: React.lazy + Suspense)
const ChamberScene = lazy(() => import("@/components/chamber/ChamberScene"));

const panelAnim = (delay: number, from: { x?: number; y?: number }) => ({
  initial: { opacity: 0, ...from },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/**
 * 3D Chamber & Stage (/chamber) — full-area R3F viewport with floating
 * instrument panels (design/chamber.md).
 */
export default function Chamber() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const hover = useChamberUi((s) => s.hover);
  const rootRef = useRef<HTMLDivElement>(null);

  // pointer cursor over hoverable meshes
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    el.style.cursor = hover ? "pointer" : "default";
  }, [hover]);

  return (
    <div
      ref={rootRef}
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100dvh - 76px)", minHeight: "70vh" }}
      onPointerMove={(e) => {
        const r = rootRef.current?.getBoundingClientRect();
        if (r) setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
    >
      {/* 3D viewport */}
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-void">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              Loading chamber viewport…
            </p>
          </div>
        }
      >
        <ChamberScene />
      </Suspense>

      {/* floating UI — pointer events only on the panels themselves */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <motion.div
          {...panelAnim(0, { x: -16 })}
          className="pointer-events-auto absolute left-4 top-4"
        >
          <ViewControlsPanel />
        </motion.div>

        <motion.div
          {...panelAnim(0.08, { x: 16 })}
          className="pointer-events-auto absolute right-4 top-4"
        >
          <StageControlPanel />
        </motion.div>

        <motion.div
          {...panelAnim(0.16, { y: 16 })}
          className="pointer-events-auto absolute bottom-4 left-4"
        >
          <EnvironmentPanel />
        </motion.div>

        <motion.div
          {...panelAnim(0.24, { y: 16 })}
          className="pointer-events-auto absolute bottom-4 right-4 hidden md:block"
        >
          <LegendPanel />
        </motion.div>

        <SphereStatPopover />
        <FacilityStateLabel />
        <HoverCallout x={mouse.x} y={mouse.y} />
      </div>
    </div>
  );
}
