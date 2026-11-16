import { memo, useEffect, useRef } from "react";
import type { RunRecord } from "@/sim/store";
import { cn } from "@/lib/utils";
import { slotStats } from "./utils";

const COLORS = {
  trace: "#2dd4c8",
  trace2: "#f0b64c",
  bad: "#f0524f",
  faint: "#4b5b6e",
  dim: "#8296ab",
  grid: "rgba(30,42,56,0.55)",
};

/**
 * RunsScatter (runs.md §Stats band): f₀ vs run # on canvas.
 * Blinded: points phosphor-teal (INVALID hollow). After unblind: split by
 * physical position (P1 teal / P2 amber), group means with ±SEM error bars,
 * 600 ms crossfade.
 */
function RunsScatterInner({
  runs,
  revealed,
  labelToSlot,
  height = 240,
  className,
}: {
  runs: RunRecord[];
  revealed: boolean;
  labelToSlot: { A: 0 | 1; B: 0 | 1 };
  height?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ runs, revealed, labelToSlot });
  const transitionRef = useRef<{ from: boolean; start: number } | null>(null);

  useEffect(() => {
    if (stateRef.current.revealed !== revealed) {
      transitionRef.current = { from: stateRef.current.revealed, start: performance.now() };
    }
    stateRef.current = { runs, revealed, labelToSlot };
  }, [runs, revealed, labelToSlot]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const PAD = { l: 64, r: 40, t: 14, b: 26 };

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

      const s = stateRef.current;
      const data = s.runs;

      // domain
      let y0 = Infinity;
      let y1 = -Infinity;
      for (const r of data) {
        if (r.f0 < y0) y0 = r.f0;
        if (r.f0 > y1) y1 = r.f0;
      }
      if (!isFinite(y0)) {
        y0 = 0;
        y1 = 1;
      }
      const ypad = Math.max((y1 - y0) * 0.25, 5);
      y0 -= ypad;
      y1 += ypad;
      const x0 = 0.5;
      const x1 = Math.max(data.length + 0.5, 6.5);

      const toPx = (x: number, y: number) => ({
        px: PAD.l + ((x - x0) / (x1 - x0)) * (w - PAD.l - PAD.r),
        py: PAD.t + (1 - (y - y0) / (y1 - y0)) * (h - PAD.t - PAD.b),
      });

      // grid + axis labels
      ctx.strokeStyle = COLORS.grid;
      ctx.fillStyle = COLORS.faint;
      ctx.lineWidth = 1;
      ctx.font = "10px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      const nx = 6;
      for (let i = 0; i <= nx; i++) {
        const x = x0 + (i / nx) * (x1 - x0);
        const { px } = toPx(x, y0);
        ctx.beginPath();
        ctx.moveTo(px, PAD.t);
        ctx.lineTo(px, h - PAD.b);
        ctx.stroke();
        ctx.fillText(String(Math.round(x)), px, h - 8);
      }
      ctx.textAlign = "right";
      const ny = 4;
      for (let i = 0; i <= ny; i++) {
        const y = y0 + (i / ny) * (y1 - y0);
        const { py } = toPx(x0, y);
        ctx.beginPath();
        ctx.moveTo(PAD.l, py);
        ctx.lineTo(w - PAD.r, py);
        ctx.stroke();
        ctx.fillText((y / 1000).toFixed(4), PAD.l - 6, py + 3);
      }
      ctx.textAlign = "left";
      ctx.fillText("f₀ (kHz)", 6, PAD.t + 2);
      ctx.textAlign = "right";
      ctx.fillText("RUN #", w - PAD.r, h - 8);

      // crossfade progress
      let mix = 1;
      const tr = transitionRef.current;
      if (tr) {
        mix = Math.min(1, (performance.now() - tr.start) / 600);
        if (mix >= 1) transitionRef.current = null;
      }
      const showRevealed = s.revealed;
      const alphaNew = tr ? mix : 1;
      const alphaOld = tr ? 1 - mix : 0;

      const drawPoints = (mode: "blind" | "split", alpha: number) => {
        if (alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = alpha;
        for (const r of data) {
          const { px, py } = toPx(r.id, r.f0);
          const slot = s.labelToSlot[r.label];
          const color =
            mode === "split" ? (slot === 0 ? COLORS.trace : COLORS.trace2) : COLORS.trace;
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          if (r.valid) {
            ctx.fillStyle = color;
            ctx.fill();
          } else {
            ctx.strokeStyle = COLORS.bad;
            ctx.lineWidth = 1.25;
            ctx.stroke(); // hollow = INVALID
          }
        }
        ctx.restore();
      };

      const drawMeans = (alpha: number) => {
        if (alpha <= 0) return;
        const stats = slotStats(data, s.labelToSlot);
        ctx.save();
        ctx.globalAlpha = alpha;
        stats.forEach((st, slot) => {
          if (!st) return;
          const color = slot === 0 ? COLORS.trace : COLORS.trace2;
          const { py } = toPx(x0, st.mean);
          // mean line
          ctx.strokeStyle = color;
          ctx.lineWidth = 1.25;
          ctx.setLineDash([5, 4]);
          ctx.beginPath();
          ctx.moveTo(PAD.l, py);
          ctx.lineTo(w - PAD.r, py);
          ctx.stroke();
          ctx.setLineDash([]);
          // ±SEM error bar at right edge
          const ex = w - PAD.r + 10;
          const { py: pyHi } = toPx(x0, st.mean + st.sem);
          const { py: pyLo } = toPx(x0, st.mean - st.sem);
          ctx.beginPath();
          ctx.moveTo(ex, pyHi);
          ctx.lineTo(ex, pyLo);
          ctx.moveTo(ex - 4, pyHi);
          ctx.lineTo(ex + 4, pyHi);
          ctx.moveTo(ex - 4, pyLo);
          ctx.lineTo(ex + 4, pyLo);
          ctx.stroke();
          // label
          ctx.fillStyle = color;
          ctx.font = "9px 'JetBrains Mono', monospace";
          ctx.textAlign = "left";
          ctx.fillText(slot === 0 ? "P1" : "P2", PAD.l + 4, py - 5);
        });
        ctx.restore();
      };

      if (showRevealed) {
        if (alphaOld > 0) drawPoints("blind", alphaOld);
        drawPoints("split", alphaNew);
        drawMeans(alphaNew);
      } else {
        drawPoints("blind", 1);
      }

      if (data.length === 0) {
        ctx.fillStyle = COLORS.faint;
        ctx.font = "11px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText("NO RUNS COMMITTED", w / 2, h / 2);
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [height]);

  return (
    <div ref={wrapRef} className={cn("w-full", className)}>
      <canvas ref={canvasRef} style={{ width: "100%", height }} className="block" aria-hidden />
    </div>
  );
}

const RunsScatter = memo(RunsScatterInner);
export default RunsScatter;
