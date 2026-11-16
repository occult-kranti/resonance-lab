import { memo, useEffect, useRef } from "react";
import { useSim } from "@/sim/store";
import { useDrive } from "./driveStore";
import { fieldAmplitude, SPHERE_R_MM, POS_OFFSET_MM } from "./physics";

/**
 * Section line strip (field-explorer.md VIEW): 1D amplitude-vs-x cut at the
 * probe's y, hand-rolled canvas with optional log-y.
 */
function SectionPlotInner({ y, logY, activePos }: { y: number; logY: boolean; activePos: 0 | 1 }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const propsRef = useRef({ y, logY, activePos });
  useEffect(() => {
    propsRef.current = { y, logY, activePos };
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const H = 110;
    const PAD = { l: 46, r: 12, t: 8, b: 20 };
    let raf = 0;

    const draw = () => {
      const { y: cy, logY: lg, activePos: ap } = propsRef.current;
      const sim = useSim.getState();
      const drive = useDrive.getState();
      const w = wrap.clientWidth;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== w * dpr || canvas.height !== H * dpr) {
        canvas.width = w * dpr;
        canvas.height = H * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${H}px`;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#070b10";
      ctx.fillRect(0, 0, w, H);

      const RANGE = 240; // ±mm
      const centerX = sim.stage.x + (ap === 0 ? -POS_OFFSET_MM : POS_OFFSET_MM);
      const toPx = (x: number) => PAD.l + ((x + RANGE) / (2 * RANGE)) * (w - PAD.l - PAD.r);
      const toPy = (a: number) => {
        let v: number;
        if (lg) {
          const lo = Math.log10(Math.max(a, 1e-4));
          v = (lo + 4) / 4; // 1e-4 .. 1
        } else {
          v = Math.min(1, a);
        }
        return PAD.t + (1 - Math.min(1, Math.max(0, v))) * (H - PAD.t - PAD.b);
      };

      // grid + labels
      ctx.strokeStyle = "rgba(30,42,56,0.55)";
      ctx.fillStyle = "#4b5b6e";
      ctx.lineWidth = 1;
      ctx.font = "9px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      for (let gx = -200; gx <= 200; gx += 100) {
        const px = toPx(gx);
        ctx.beginPath(); ctx.moveTo(px, PAD.t); ctx.lineTo(px, H - PAD.b); ctx.stroke();
        ctx.fillText(`${gx} mm`, px, H - 6);
      }
      ctx.textAlign = "right";
      const yTicks = lg ? [1, 0.01, 1e-4] : [1, 0.5, 0];
      for (const tv of yTicks) {
        const py = toPy(tv === 0 ? 1e-4 : tv);
        ctx.beginPath(); ctx.moveTo(PAD.l, py); ctx.lineTo(w - PAD.r, py); ctx.stroke();
        ctx.fillText(lg ? `1e${Math.round(Math.log10(tv))}` : tv.toFixed(1), PAD.l - 5, py + 3);
      }

      // trace
      ctx.strokeStyle = "#9d8df1";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const N = 240;
      for (let i = 0; i <= N; i++) {
        const x = -RANGE + (2 * RANGE * i) / N;
        const r = Math.hypot(x - centerX, cy - sim.stage.y);
        const a = fieldAmplitude(sim, drive, r, SPHERE_R_MM);
        const px = toPx(x);
        const py = toPy(a);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // marker at sphere center-x
      const spx = toPx(centerX);
      ctx.strokeStyle = "rgba(196,122,74,0.6)";
      ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(spx, PAD.t); ctx.lineTo(spx, H - PAD.b); ctx.stroke();
      ctx.setLineDash([]);

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrapRef}>
      <canvas ref={canvasRef} style={{ width: "100%", height: 110, display: "block" }} />
    </div>
  );
}

const SectionPlot = memo(SectionPlotInner);
export default SectionPlot;
