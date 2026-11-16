import { memo, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Panel } from "@/components/shared";
import { synthesizeSweep, useSim } from "@/sim/store";
import type { SweepData } from "@/sim/store";

/**
 * VNA S11 preview (console.md §Row 4E): latest sweep, or a live left→right
 * drawing trace while a sweep is in progress. Click → /vna.
 */
const VnaCanvas = memo(function VnaCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pendingRef = useRef<SweepData | null>(null);
  const wasSweepingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const draw = () => {
      const w = wrap.clientWidth;
      const h = 120;
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

      const s = useSim.getState();

      // pick data source: live progressive sweep, else last completed sweep
      let sweep = s.lastSweep;
      let reveal = 1;
      if (s.sweeping) {
        if (!wasSweepingRef.current || !pendingRef.current) {
          // one synthetic trace per sweep; reveal progressively
          pendingRef.current = synthesizeSweep(s, s.vnaParams);
        }
        wasSweepingRef.current = true;
        sweep = pendingRef.current;
        reveal = s.sweepProgress;
      } else {
        wasSweepingRef.current = false;
        pendingRef.current = null;
      }

      const x0 = s.vnaParams.startKHz * 1000;
      const x1 = s.vnaParams.stopKHz * 1000;
      const yMin = -20;
      const yMax = 0.5;
      const X = (f: number) => ((f - x0) / (x1 - x0)) * w;
      const Y = (db: number) => (1 - (Math.max(db, yMin) - yMin) / (yMax - yMin)) * h;

      // grid
      ctx.strokeStyle = "rgba(30,42,56,0.55)";
      ctx.lineWidth = 1;
      for (let i = 1; i < 6; i++) {
        const gx = (i / 6) * w;
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, h);
        ctx.stroke();
      }
      for (let i = 1; i < 4; i++) {
        const gy = (i / 4) * h;
        ctx.beginPath();
        ctx.moveTo(0, gy + 0.5);
        ctx.lineTo(w, gy + 0.5);
        ctx.stroke();
      }
      ctx.fillStyle = "#4b5b6e";
      ctx.font = "9px 'JetBrains Mono', monospace";
      ctx.textAlign = "left";
      ctx.fillText(`${s.vnaParams.startKHz.toFixed(1)}k`, 4, h - 4);
      ctx.textAlign = "right";
      ctx.fillText(`${s.vnaParams.stopKHz.toFixed(3)}k`, w - 4, h - 4);
      ctx.fillText("0 dB", w - 4, 10);

      if (sweep) {
        const n = sweep.freqs.length;
        const upto = Math.max(2, Math.floor(n * reveal));
        ctx.strokeStyle = "#2dd4c8";
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        for (let i = 0; i < upto; i++) {
          const px = X(sweep.freqs[i]);
          const py = Y(sweep.s11[i]);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // sweep cursor
        if (s.sweeping) {
          const cx = X(sweep.freqs[upto - 1]);
          ctx.strokeStyle = "rgba(45,212,200,0.35)";
          ctx.beginPath();
          ctx.moveTo(cx, 0);
          ctx.lineTo(cx, h);
          ctx.stroke();
        }
      } else {
        // idle baseline shimmer at −0.25 dB
        ctx.strokeStyle = "rgba(45,212,200,0.35)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i <= 80; i++) {
          const px = (i / 80) * w;
          const py = Y(-0.25 - Math.random() * 0.06);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // M1 marker at fitted f₀
      if (s.lastFit) {
        const mx = X(s.lastFit.f0);
        if (mx >= 0 && mx <= w) {
          ctx.strokeStyle = "#f0b64c";
          ctx.setLineDash([3, 3]);
          ctx.beginPath();
          ctx.moveTo(mx, 0);
          ctx.lineTo(mx, h);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.fillStyle = "#f0b64c";
          ctx.beginPath();
          ctx.moveTo(mx - 4, 0);
          ctx.lineTo(mx + 4, 0);
          ctx.lineTo(mx, 6);
          ctx.closePath();
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrapRef} className="overflow-hidden rounded-sm border border-line">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: 120, display: "block", cursor: "crosshair" }}
      />
    </div>
  );
});

export default function VnaPreview() {
  const navigate = useNavigate();
  const sweeping = useSim((s) => s.sweeping);
  const hasSweep = useSim((s) => s.lastSweep !== null);

  return (
    <Panel
      accent="trace"
      title="VNA · S11 preview"
      className="h-full transition-transform duration-150 hover:-translate-y-0.5"
    >
      <button
        onClick={() => navigate("/vna")}
        className="block w-full text-left"
        aria-label="Open VNA analysis"
      >
        <VnaCanvas />
        <p className="mt-2 font-mono text-[10px] text-faint">
          {sweeping
            ? "sweep in progress…"
            : hasSweep
              ? "latest sweep · M1 at f₀"
              : "no sweep yet — open VNA"}
        </p>
      </button>
    </Panel>
  );
}
