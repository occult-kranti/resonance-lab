import { memo, useEffect, useRef } from "react";
import type { FitResult, SweepData } from "@/sim/store";

const PAD = { l: 56, r: 16, t: 10, b: 20 };

/**
 * Residuals strip (vna.md §"Results band"): data−fit scatter with ±2σ band.
 * "Residuals should look like weather, not like a curve."
 */
function ResidualsPlotInner({
  sweep,
  fit,
  height = 120,
}: {
  sweep: SweepData | null;
  fit: FitResult | null;
  height?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ sweep, fit });
  useEffect(() => {
    stateRef.current = { sweep, fit };
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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

      const { sweep, fit } = stateRef.current;
      if (!sweep || !fit || fit.residuals.length === 0) {
        ctx.fillStyle = "#4b5b6e";
        ctx.font = "10px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText("no fit — residuals appear here after a sweep", w / 2, h / 2 + 3);
        raf = requestAnimationFrame(draw);
        return;
      }

      const x0 = sweep.params.startKHz;
      const x1 = sweep.params.stopKHz;
      const mean = fit.residuals.reduce((a, b) => a + b, 0) / fit.residuals.length;
      const sd = Math.sqrt(
        fit.residuals.reduce((a, b) => a + (b - mean) * (b - mean), 0) / fit.residuals.length,
      );
      const yMax = Math.max(3 * sd, Math.max(...fit.residuals.map(Math.abs)), 0.05);
      const toPx = (xk: number, r: number) => ({
        px: PAD.l + ((xk - x0) / (x1 - x0)) * (w - PAD.l - PAD.r),
        py: PAD.t + (1 - (r + yMax) / (2 * yMax)) * (h - PAD.t - PAD.b),
      });

      // grid
      ctx.strokeStyle = "rgba(30,42,56,0.55)";
      ctx.lineWidth = 1;
      for (let i = 0; i <= 8; i++) {
        const px = PAD.l + (i / 8) * (w - PAD.l - PAD.r);
        ctx.beginPath();
        ctx.moveTo(px, PAD.t);
        ctx.lineTo(px, h - PAD.b);
        ctx.stroke();
      }

      // ±2σ band
      const top = toPx(x0, 2 * sd).py;
      const bot = toPx(x0, -2 * sd).py;
      ctx.fillStyle = "rgba(61,220,132,0.08)";
      ctx.fillRect(PAD.l, top, w - PAD.l - PAD.r, bot - top);
      ctx.strokeStyle = "rgba(61,220,132,0.35)";
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(PAD.l, top);
      ctx.lineTo(w - PAD.r, top);
      ctx.moveTo(PAD.l, bot);
      ctx.lineTo(w - PAD.r, bot);
      ctx.stroke();
      ctx.setLineDash([]);

      // zero line
      const zy = toPx(x0, 0).py;
      ctx.strokeStyle = "rgba(75,91,110,0.8)";
      ctx.beginPath();
      ctx.moveTo(PAD.l, zy);
      ctx.lineTo(w - PAD.r, zy);
      ctx.stroke();

      // scatter
      ctx.fillStyle = "#2dd4c8";
      const n = fit.residuals.length;
      for (let i = 0; i < n; i++) {
        const { px, py } = toPx(sweep.freqs[i] / 1000, fit.residuals[i]);
        ctx.fillRect(px - 0.75, py - 0.75, 1.5, 1.5);
      }

      // labels
      ctx.fillStyle = "#4b5b6e";
      ctx.font = "9px 'JetBrains Mono', monospace";
      ctx.textAlign = "left";
      ctx.fillText(`±2σ = ${(2 * sd).toFixed(3)} dB`, PAD.l + 6, top + 11);
      ctx.textAlign = "center";
      ctx.fillText("kHz", w - PAD.r - 14, h - 6);

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [height]);

  return (
    <div ref={wrapRef} className="relative">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height, display: "block" }}
        aria-label="Fit residuals"
      />
    </div>
  );
}

const ResidualsPlot = memo(ResidualsPlotInner);
export default ResidualsPlot;
