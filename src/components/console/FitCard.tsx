import { memo, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import { Panel, Readout } from "@/components/shared";
import {
  formatPressure,
  formatSessionTime,
  useSim,
} from "@/sim/store";

/**
 * Mini Lorentzian canvas: last S11 sweep + dashed fit overlay + M1 marker.
 * Reads the store at rAF — no React re-render at tick rate.
 */
const MiniLorentz = memo(function MiniLorentz() {
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
      const h = 96;
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

      // grid
      ctx.strokeStyle = "rgba(30,42,56,0.55)";
      ctx.lineWidth = 1;
      for (let i = 1; i < 6; i++) {
        const x = (i / 6) * w;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.moveTo(0, h / 2 + 0.5);
      ctx.lineTo(w, h / 2 + 0.5);
      ctx.stroke();

      const s = useSim.getState();
      const sweep = s.lastSweep;
      const fit = s.lastFit;
      if (sweep && sweep.freqs.length > 1) {
        const x0 = sweep.freqs[0];
        const x1 = sweep.freqs[sweep.freqs.length - 1];
        // fixed y range: 0 dB top … −20 dB bottom
        const yMin = -20;
        const yMax = 0.5;
        const X = (f: number) => ((f - x0) / (x1 - x0)) * w;
        const Y = (db: number) => (1 - (db - yMin) / (yMax - yMin)) * h;

        // sweep trace
        ctx.strokeStyle = "#2dd4c8";
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        sweep.freqs.forEach((f, i) => {
          const px = X(f);
          const py = Y(Math.max(sweep.s11[i], yMin));
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.stroke();

        // fit overlay (dashed ideal Lorentzian from fit params)
        if (fit) {
          const gamma = fit.f0 / fit.q;
          ctx.strokeStyle = "#f0b64c";
          ctx.setLineDash([4, 3]);
          ctx.lineWidth = 1;
          ctx.beginPath();
          for (let i = 0; i <= 120; i++) {
            const f = x0 + ((x1 - x0) * i) / 120;
            const det = f - fit.f0;
            const db =
              -0.25 - fit.depthDb * ((gamma / 2) ** 2 / (det * det + (gamma / 2) ** 2));
            const px = X(f);
            const py = Y(db);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.stroke();
          ctx.setLineDash([]);

          // M1 marker at f0
          const mx = X(fit.f0);
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
          ctx.font = "8px 'JetBrains Mono', monospace";
          ctx.textAlign = "center";
          ctx.fillText("M1", mx, 14);
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrapRef} className="overflow-hidden rounded-sm border border-line">
      <canvas ref={canvasRef} style={{ width: "100%", height: 96, display: "block" }} />
    </div>
  );
});

/** Current Resonance Fit card (console.md §Row 3B). */
export default function FitCard() {
  const navigate = useNavigate();
  const fit = useSim((s) => s.lastFit);
  const sweep = useSim((s) => s.lastSweep);
  const pressure = useSim((s) => s.pressure);
  const temperature = useSim((s) => s.temperature);
  const clock = useSim((s) => s.clock);

  return (
    <Panel accent="trace" bezel title="Current resonance fit" className="h-full">
      {fit ? (
        <div className="flex min-h-[168px] flex-col">
          <div className="flex items-start gap-6">
            <Readout
              label="f₀"
              value={`${(fit.f0 / 1000).toFixed(3)} ± ${(fit.f0Sigma / 1000).toFixed(4)}`}
              unit="kHz"
              size="md"
              tone="trace"
            />
            <Readout
              label="Q"
              value={`${Math.round(fit.q).toLocaleString()} ± ${Math.round(fit.qSigma).toLocaleString()}`}
              size="md"
            />
          </div>
          <p className="mt-2 font-mono text-[10px] text-faint">
            P = {formatPressure(pressure)} · T = {temperature.toFixed(3)} °C · CLK{" "}
            {clock === "LOCKED" ? "locked" : clock.toLowerCase()}
          </p>
          <div className="mt-3">
            <MiniLorentz />
          </div>
          <p className="mt-2 font-mono text-[10px] text-faint">
            fit @ {formatSessionTime(fit.takenAt)}
            {sweep &&
              ` · ${sweep.params.startKHz.toFixed(3)}–${sweep.params.stopKHz.toFixed(3)} kHz, ${sweep.params.points} pts, IF ${sweep.params.ifBwHz} Hz`}
          </p>
        </div>
      ) : (
        <div className="flex min-h-[168px] flex-col items-center justify-center rounded-sm border border-dashed border-line-bright/60 p-4 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
            No fit yet — run a VNA sweep
          </p>
          <button
            onClick={() => navigate("/vna")}
            className="mt-3 inline-flex items-center gap-2 rounded-sm border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-dim transition-colors hover:border-trace/60 hover:text-trace"
          >
            Open VNA
            <ArrowRight size={12} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </Panel>
  );
}
