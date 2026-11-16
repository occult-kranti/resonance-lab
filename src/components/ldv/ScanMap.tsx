import { memo, useEffect, useRef } from "react";
import { rampColor } from "@/components/field/colormap";

export interface ScanResult {
  id: number;
  n: number;
  /** n×n amplitudes in nm/s, NaN off-disc */
  values: number[];
  maxV: number;
  takenAt: string; // session time label
  f0kHz: number;
}

/**
 * Surface scan map (ldv.md): N×N polar-grid heatmap of velocity amplitude
 * over the sphere disc. Breathing mode = bright center fading to rim.
 */
function ScanMapInner({
  scan,
  inProgress,
  progressIdx,
  completedAt,
}: {
  /** the scan to display (completed or currently building) */
  scan: ScanResult | null;
  inProgress: boolean;
  progressIdx: number;
  /** epoch ms when the displayed scan completed (drives the glow sweep) */
  completedAt: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const propsRef = useRef({ scan, inProgress, progressIdx, completedAt });
  useEffect(() => {
    propsRef.current = { scan, inProgress, progressIdx, completedAt };
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const draw = () => {
      const { scan, inProgress, progressIdx, completedAt } = propsRef.current;
      const w = wrap.clientWidth;
      const h = Math.min(360, Math.max(240, Math.round(w * 0.34)));
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

      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.42;

      // base disc
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = "#0a0f16";
      ctx.fill();
      ctx.strokeStyle = "#2c3d52";
      ctx.lineWidth = 1.4;
      ctx.stroke();
      // faint polar grid
      ctx.strokeStyle = "rgba(30,42,56,0.6)";
      ctx.lineWidth = 1;
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath(); ctx.arc(cx, cy, (R * i) / 3, 0, Math.PI * 2); ctx.stroke();
      }
      ctx.restore();

      if (scan) {
        const { n, values, maxV } = scan;
        const cell = (2 * R) / n;
        const upto = inProgress ? progressIdx : n * n;
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI * 2);
        ctx.clip();
        for (let k = 0; k < Math.min(upto, n * n); k++) {
          const v = values[k];
          if (Number.isNaN(v)) continue;
          const i = k % n;
          const j = Math.floor(k / n);
          const u = -1 + (2 * (i + 0.5)) / n;
          const wv = -1 + (2 * (j + 0.5)) / n;
          const [r8, g8, b8] = rampColor(v / Math.max(maxV, 1e-9), 1.1);
          const ageFade = inProgress ? Math.min(1, (progressIdx - k) / 2 + 0.35) : 1;
          ctx.fillStyle = `rgb(${r8 | 0},${g8 | 0},${b8 | 0})`;
          ctx.globalAlpha = ageFade;
          ctx.fillRect(cx + u * R - cell / 2, cy + wv * R - cell / 2, cell + 0.5, cell + 0.5);
        }
        ctx.globalAlpha = 1;
        ctx.restore();

        // current scan point marker
        if (inProgress && progressIdx < n * n) {
          const i = progressIdx % n;
          const j = Math.floor(progressIdx / n);
          const u = -1 + (2 * (i + 0.5)) / n;
          const wv = -1 + (2 * (j + 0.5)) / n;
          ctx.save();
          ctx.strokeStyle = "#2dd4c8";
          ctx.shadowColor = "rgba(45,212,200,0.9)";
          ctx.shadowBlur = 8;
          ctx.lineWidth = 1.5;
          ctx.strokeRect(cx + u * R - cell / 2, cy + wv * R - cell / 2, cell, cell);
          ctx.restore();
        }

        // completion glow sweep around the rim
        if (!inProgress && completedAt > 0 && !reduced) {
          const t = (performance.now() - completedAt) / 1200;
          if (t < 1) {
            ctx.save();
            ctx.strokeStyle = `rgba(45,212,200,${0.9 * (1 - t)})`;
            ctx.shadowColor = "rgba(45,212,200,0.9)";
            ctx.shadowBlur = 14;
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(cx, cy, R, -Math.PI / 2, -Math.PI / 2 + t * Math.PI * 2);
            ctx.stroke();
            ctx.restore();
          }
        }
      } else {
        ctx.save();
        ctx.fillStyle = "#4b5b6e";
        ctx.font = "11px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText("No scan yet — run a surface scan to map the mode shape", cx, cy);
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrapRef}>
      <canvas ref={canvasRef} style={{ width: "100%", minHeight: 240, display: "block" }} />
    </div>
  );
}

const ScanMap = memo(ScanMapInner);
export default ScanMap;
