import { memo, useEffect, useRef, useState } from "react";
import { useSim } from "@/sim/store";
import type { FitResult, SweepData } from "@/sim/store";
import { PLOT_PALETTE } from "@/components/shared/colors";

export interface VnaMarker {
  id: "M1" | "M2";
  xKHz: number;
  color: string;
}

const PAD = { l: 56, r: 16, t: 16, b: 28 };
const Y_MIN = -40;
const Y_MAX = 0;

/** Interpolated S11 (dB) of a sweep at an arbitrary frequency (kHz). */
function interpDb(sweep: SweepData, fKHz: number): number {
  const f = fKHz * 1000;
  const { freqs, s11 } = sweep;
  if (f <= freqs[0]) return s11[0];
  if (f >= freqs[freqs.length - 1]) return s11[s11.length - 1];
  let lo = 0;
  let hi = freqs.length - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (freqs[mid] <= f) lo = mid;
    else hi = mid;
  }
  const t = (f - freqs[lo]) / (freqs[hi] - freqs[lo] || 1);
  return s11[lo] + t * (s11[hi] - s11[lo]);
}

/** Passive Lorentzian model from a fit, evaluated at f (Hz). */
function fitModelDb(fit: FitResult, fHz: number): number {
  const gamma = fit.f0 / fit.q;
  const det = fHz - fit.f0;
  const l = (gamma / 2) ** 2 / (det * det + (gamma / 2) ** 2);
  return -0.25 - fit.depthDb * l;
}

/**
 * VNA S11 sweep plot (vna.md §"Main plot").
 * Fixed 0…−40 dB domain, red passive-limit hairline at 0 dB, animated
 * left→right sweep draw with glow head, dimmed previous trace, dashed
 * fit overlay with ±1σ strip, draggable markers, crosshair tooltip.
 */
function SweepPlotInner({
  markers,
  onMarkerMove,
  prevSweep,
  showPrev,
  fit,
  revealSweep,
  height = 440,
}: {
  markers: VnaMarker[];
  onMarkerMove?: (id: string, xKHz: number) => void;
  prevSweep: SweepData | null;
  showPrev: boolean;
  fit: FitResult | null;
  /** locally synthesized sweep revealed progressively while the sim sweeps */
  revealSweep: SweepData | null;
  height?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<{ px: number; py: number; x: number; y: number; w: number } | null>(null);
  const draggingRef = useRef<string | null>(null);
  const fitAnimRef = useRef<{ key: number; start: number } | null>(null);

  const sweeping = useSim((s) => s.sweeping);
  const progress = useSim((s) => s.sweepProgress);
  const lastSweep = useSim((s) => s.lastSweep);

  const stateRef = useRef({
    cursor, markers, onMarkerMove, prevSweep, showPrev, fit, revealSweep,
    sweeping, progress, lastSweep,
  });
  useEffect(() => {
    stateRef.current = {
      cursor, markers, onMarkerMove, prevSweep, showPrev, fit, revealSweep,
      sweeping, progress, lastSweep,
    };
  });

  const getDomain = () => {
    const s = stateRef.current;
    const ref = (s.sweeping && s.revealSweep) || s.lastSweep || s.prevSweep;
    if (ref) return [ref.params.startKHz, ref.params.stopKHz] as [number, number];
    const p = useSim.getState().vnaParams;
    return [p.startKHz, p.stopKHz] as [number, number];
  };

  const toPx = (x: number, y: number, w: number, h: number) => {
    const [x0, x1] = getDomain();
    return {
      px: PAD.l + ((x - x0) / (x1 - x0)) * (w - PAD.l - PAD.r),
      py: PAD.t + (1 - (y - Y_MIN) / (Y_MAX - Y_MIN)) * (h - PAD.t - PAD.b),
    };
  };
  const fromPx = (px: number, w: number) => {
    const [x0, x1] = getDomain();
    return x0 + ((px - PAD.l) / (w - PAD.l - PAD.r)) * (x1 - x0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const draw = (now: number) => {
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
      const s = stateRef.current;
      const [x0, x1] = getDomain();

      // bg
      ctx.fillStyle = "#070b10";
      ctx.fillRect(0, 0, w, h);

      // grid
      ctx.strokeStyle = "rgba(30,42,56,0.55)";
      ctx.fillStyle = "#4b5b6e";
      ctx.lineWidth = 1;
      ctx.font = "10px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      const nx = 10;
      for (let i = 0; i <= nx; i++) {
        const px = PAD.l + (i / nx) * (w - PAD.l - PAD.r);
        ctx.beginPath();
        ctx.moveTo(px, PAD.t);
        ctx.lineTo(px, h - PAD.b);
        ctx.stroke();
        ctx.fillText((x0 + (i / nx) * (x1 - x0)).toFixed(2), px, h - 8);
      }
      ctx.textAlign = "right";
      const ny = 8;
      for (let i = 0; i <= ny; i++) {
        const py = PAD.t + (i / ny) * (h - PAD.t - PAD.b);
        ctx.beginPath();
        ctx.moveTo(PAD.l, py);
        ctx.lineTo(w - PAD.r, py);
        ctx.stroke();
        ctx.fillText(`${(Y_MAX - (i / ny) * (Y_MAX - Y_MIN)).toFixed(0)}`, PAD.l - 6, py + 3);
      }
      ctx.textAlign = "left";
      ctx.fillStyle = "#4b5b6e";
      ctx.fillText("kHz", w - PAD.r - 24, h - 8);
      ctx.fillText("dB", 8, PAD.t + 6);

      // passive limit hairline at 0 dB
      {
        const { py } = toPx(x0, 0, w, h);
        ctx.strokeStyle = "rgba(240,82,79,0.55)";
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(PAD.l, py + 0.5);
        ctx.lineTo(w - PAD.r, py + 0.5);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(240,82,79,0.8)";
        ctx.font = "9px 'JetBrains Mono', monospace";
        ctx.textAlign = "right";
        ctx.fillText("0 dB — passive limit", w - PAD.r - 4, py + 12);
      }

      // fit ±1σ strip + dashed overlay
      if (s.fit) {
        const f0k = s.fit.f0 / 1000;
        const sigK = s.fit.f0Sigma / 1000;
        const a = toPx(f0k - sigK, 0, w, h).px;
        const b = toPx(f0k + sigK, 0, w, h).px;
        ctx.fillStyle = "rgba(61,220,132,0.07)";
        ctx.fillRect(a, PAD.t, Math.max(b - a, 1), h - PAD.t - PAD.b);

        // animated dashed Lorentzian (600 ms stroke reveal)
        const key = s.fit.takenAt * 1e6 + s.fit.f0;
        if (!fitAnimRef.current || fitAnimRef.current.key !== key) {
          fitAnimRef.current = { key, start: now };
        }
        const frac = Math.min(1, (now - fitAnimRef.current.start) / 600);
        const N = Math.max(2, Math.floor(240 * frac));
        ctx.strokeStyle = PLOT_PALETTE["trace-2"];
        ctx.lineWidth = 1.25;
        ctx.setLineDash([5, 4]);
        ctx.beginPath();
        for (let i = 0; i <= N; i++) {
          const fk = x0 + (i / 240) * (x1 - x0);
          const db = Math.min(fitModelDb(s.fit, fk * 1000), 0);
          const { px, py } = toPx(fk, db, w, h);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // previous trace, dimmed
      if (s.showPrev && s.prevSweep && s.prevSweep.freqs.length > 1) {
        ctx.strokeStyle = "rgba(45,212,200,0.25)";
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        const d = s.prevSweep;
        for (let i = 0; i < d.freqs.length; i++) {
          const { px, py } = toPx(d.freqs[i] / 1000, d.s11[i], w, h);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // main trace (revealed partial while sweeping, settled after)
      const main = s.sweeping && s.revealSweep ? s.revealSweep : s.lastSweep;
      let headPt: { px: number; py: number } | null = null;
      if (main && main.freqs.length > 1) {
        const n = s.sweeping
          ? Math.max(2, Math.floor(main.freqs.length * s.progress))
          : main.freqs.length;
        ctx.strokeStyle = PLOT_PALETTE.trace;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = s.sweeping ? 0.92 : 1;
        ctx.beginPath();
        for (let i = 0; i < n; i++) {
          const { px, py } = toPx(main.freqs[i] / 1000, main.s11[i], w, h);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
          if (i === n - 1) headPt = { px, py };
        }
        ctx.stroke();
        ctx.globalAlpha = 1;
        // sweep head glow
        if (s.sweeping && headPt) {
          const hp = headPt as { px: number; py: number };
          ctx.fillStyle = PLOT_PALETTE.trace;
          ctx.shadowColor = PLOT_PALETTE.trace;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(hp.px, hp.py, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // markers
      for (const m of s.markers) {
        const { px } = toPx(m.xKHz, 0, w, h);
        ctx.strokeStyle = m.color;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(px, PAD.t);
        ctx.lineTo(px, h - PAD.b);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = m.color;
        ctx.beginPath();
        ctx.moveTo(px - 5, PAD.t);
        ctx.lineTo(px + 5, PAD.t);
        ctx.lineTo(px, PAD.t + 7);
        ctx.closePath();
        ctx.fill();
        ctx.font = "9px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText(m.id, px, PAD.t + 17);
      }

      // marker readout box (top-left)
      if (s.markers.length > 0 && main) {
        const lines: string[] = [];
        for (const m of s.markers) {
          const db = interpDb(main, m.xKHz);
          lines.push(`${m.id}  ${m.xKHz.toFixed(3)} kHz · ${db.toFixed(2)} dB`);
        }
        if (s.markers.length === 2) {
          const df = Math.abs(s.markers[0].xKHz - s.markers[1].xKHz);
          lines.push(`Δf  ${df.toFixed(3)} kHz`);
        }
        ctx.font = "10px 'JetBrains Mono', monospace";
        const bw = Math.max(...lines.map((l) => ctx.measureText(l).width)) + 16;
        const bh = lines.length * 14 + 10;
        ctx.fillStyle = "rgba(19,27,38,0.92)";
        ctx.strokeStyle = "#2c3d52";
        ctx.beginPath();
        ctx.roundRect(PAD.l + 8, PAD.t + 8, bw, bh, 3);
        ctx.fill();
        ctx.stroke();
        ctx.textAlign = "left";
        lines.forEach((l, i) => {
          ctx.fillStyle = i === lines.length - 1 && lines.length > 1 ? "#f0b64c" : "#d9e2ec";
          ctx.fillText(l, PAD.l + 16, PAD.t + 22 + i * 14);
        });
      }

      // crosshair
      if (s.cursor) {
        ctx.strokeStyle = "rgba(130,150,171,0.5)";
        ctx.setLineDash([2, 3]);
        ctx.beginPath();
        ctx.moveTo(s.cursor.px, PAD.t);
        ctx.lineTo(s.cursor.px, h - PAD.b);
        ctx.moveTo(PAD.l, s.cursor.py);
        ctx.lineTo(w - PAD.r, s.cursor.py);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height]);

  const handleMove = (e: React.PointerEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const x = fromPx(px, rect.width);
    const y = Y_MIN + (1 - (py - PAD.t) / (rect.height - PAD.t - PAD.b)) * (Y_MAX - Y_MIN);
    setCursor({ px, py, x, y, w: rect.width });
    if (draggingRef.current && stateRef.current.onMarkerMove) {
      stateRef.current.onMarkerMove(draggingRef.current, x);
    }
  };

  const handleDown = (e: React.PointerEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = e.clientX - rect.left;
    for (const m of stateRef.current.markers) {
      const { px: mx } = toPx(m.xKHz, 0, rect.width, rect.height);
      if (Math.abs(mx - px) < 9) {
        draggingRef.current = m.id;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        return;
      }
    }
  };

  return (
    <div ref={wrapRef} className="relative">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height, display: "block", cursor: "crosshair" }}
        onPointerMove={handleMove}
        onPointerDown={handleDown}
        onPointerUp={() => (draggingRef.current = null)}
        onPointerLeave={() => {
          setCursor(null);
          draggingRef.current = null;
        }}
      />
      {cursor && (
        <div
          className="pointer-events-none absolute z-10 rounded-sm border border-line-bright bg-panel-2 px-2 py-1 font-mono text-[10px] text-dim"
          style={{
            left: Math.min(cursor.px + 10, cursor.w - 160),
            top: Math.max(cursor.py - 30, 4),
          }}
        >
          <span className="text-faint">f </span>
          {cursor.x.toFixed(3)} kHz
          <span className="text-faint"> · S11 </span>
          {cursor.y.toFixed(2)} dB
        </div>
      )}
    </div>
  );
}

const SweepPlot = memo(SweepPlotInner);
export default SweepPlot;
