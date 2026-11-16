import { memo, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Panel } from "@/components/shared";
import { trueF0Hz, useSim } from "@/sim/store";

/**
 * Oscilloscope preview (console.md §Row 4F): live LDV velocity waveform —
 * sine burst at f₀ with noise, trigger level line. Click → /oscilloscope.
 * All rendering at rAF from useSim.getState(); zero React re-renders.
 */
const ScopeCanvas = memo(function ScopeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

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
      const t = performance.now() / 1000;

      // grid
      ctx.strokeStyle = "rgba(30,42,56,0.55)";
      ctx.lineWidth = 1;
      for (let i = 1; i < 8; i++) {
        const gx = (i / 8) * w;
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

      // trigger level line
      const trigY = h / 2;
      ctx.strokeStyle = "rgba(240,182,76,0.55)";
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, trigY + 0.5);
      ctx.lineTo(w, trigY + 0.5);
      ctx.stroke();
      ctx.setLineDash([]);
      // trigger arrow
      ctx.fillStyle = "rgba(240,182,76,0.8)";
      ctx.beginPath();
      ctx.moveTo(2, trigY - 4);
      ctx.lineTo(2, trigY + 4);
      ctx.lineTo(8, trigY);
      ctx.closePath();
      ctx.fill();

      const on = s.power === "FACILITY_ON";
      const f0 = trueF0Hz(s, "A");
      // display window: ~12 cycles of f0
      const windowS = 12 / f0;
      // burst envelope: 1.6 s period drive bursts; quiet when facility dark
      const burst = on ? Math.max(0, Math.sin(2 * Math.PI * (t / 1.6))) ** 2 : 0;
      let noise = 0.05;
      if (s.faults["fan-vibration"]) noise *= 4;
      if (s.faults["loose-cable"]) noise *= 2.5;
      if (on && s.pressure > 1e-3) noise *= 1.8;

      ctx.strokeStyle = on ? "#2dd4c8" : "rgba(45,212,200,0.35)";
      ctx.lineWidth = 1.25;
      ctx.beginPath();
      const N = 160;
      for (let i = 0; i <= N; i++) {
        const tau = (i / N) * windowS;
        const phase = 2 * Math.PI * f0 * (t - windowS + tau);
        let v = 0.8 * burst * Math.sin(phase);
        v += (Math.random() * 2 - 1) * noise;
        if (s.faults["rf-interference"] && Math.random() < 0.01) v += (Math.random() - 0.5) * 1.6;
        v = Math.max(-1.05, Math.min(1.05, v));
        const px = (i / N) * w;
        const py = trigY - v * (h * 0.42);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      ctx.fillStyle = "#4b5b6e";
      ctx.font = "9px 'JetBrains Mono', monospace";
      ctx.textAlign = "left";
      ctx.fillText(`LDV vel · ${(f0 / 1000).toFixed(3)} kHz`, 4, 10);
      ctx.textAlign = "right";
      ctx.fillText(`${(windowS * 1e6).toFixed(0)} µs/div-range`, w - 4, 10);

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

export default function ScopePreview() {
  const navigate = useNavigate();
  const power = useSim((s) => s.power);

  return (
    <Panel
      accent="trace"
      title="Oscilloscope preview"
      className="h-full transition-transform duration-150 hover:-translate-y-0.5"
    >
      <button
        onClick={() => navigate("/oscilloscope")}
        className="block w-full text-left"
        aria-label="Open oscilloscope"
      >
        <ScopeCanvas />
        <p className="mt-2 font-mono text-[10px] text-faint">
          {power === "FACILITY_ON" ? "live · LDV velocity channel" : "facility dark — trace idle"}
        </p>
      </button>
    </Panel>
  );
}
