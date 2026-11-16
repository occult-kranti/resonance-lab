import { memo, useEffect, useRef } from "react";
import type { RefObject } from "react";
import { PLOT_PALETTE } from "@/components/shared/colors";

const PAD = { l: 46, r: 10, t: 10, b: 20 };

/**
 * Offset-vs-time mini plot (reference.md §"Lock telemetry").
 * Converging violet trace; symlog-style y (linear band ±5 ns, log beyond).
 */
function OffsetPlotInner({
  historyRef,
  height = 150,
}: {
  historyRef: RefObject<number[]>;
  height?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const yMap = (v: number, h: number) => {
      // symlog feel: linear to ±5 ns, log-compressed beyond
      const cap = 500;
      const clamped = Math.max(-cap, Math.min(cap, v));
      const a = Math.abs(clamped);
      const norm = a <= 5 ? a / 5 : 1 + Math.log10(a / 5);
      const maxNorm = 1 + Math.log10(cap / 5);
      const frac = norm / maxNorm;
      return PAD.t + (1 - (Math.sign(clamped) * frac + 1) / 2) * (h - PAD.t - PAD.b);
    };

    let raf = 0;
    const draw = () => {
      const w = wrap.clientWidth;
      const h = height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#070b10";
      ctx.fillRect(0, 0, w, h);

      // grid + y labels (±5 ns linear band markers)
      ctx.strokeStyle = "rgba(30,42,56,0.6)";
      ctx.lineWidth = 1;
      ctx.font = "9px 'JetBrains Mono', monospace";
      ctx.textAlign = "right";
      ctx.fillStyle = "#4b5b6e";
      for (const v of [-500, -5, 0, 5, 500]) {
        const py = yMap(v, h);
        ctx.beginPath();
        ctx.moveTo(PAD.l, py);
        ctx.lineTo(w - PAD.r, py);
        ctx.stroke();
        ctx.fillText(v === 0 ? "0" : v > 0 ? `+${v}` : `${v}`, PAD.l - 5, py + 3);
      }

      const data = historyRef.current ?? [];
      if (data.length >= 2) {
        ctx.strokeStyle = PLOT_PALETTE.violet;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        data.forEach((v, i) => {
          const px = PAD.l + (i / (data.length - 1)) * (w - PAD.l - PAD.r);
          const py = yMap(v, h);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.stroke();
      } else {
        ctx.fillStyle = "#4b5b6e";
        ctx.textAlign = "center";
        ctx.fillText("accumulating discipline data…", w / 2, h / 2 + 3);
      }
      ctx.fillStyle = "#4b5b6e";
      ctx.textAlign = "left";
      ctx.fillText("phase offset, ns", PAD.l + 4, PAD.t + 10);

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [height, historyRef]);

  return (
    <div ref={wrapRef} className="relative">
      <canvas ref={canvasRef} style={{ width: "100%", height, display: "block" }} />
    </div>
  );
}

const OffsetPlot = memo(OffsetPlotInner);
export default OffsetPlot;
