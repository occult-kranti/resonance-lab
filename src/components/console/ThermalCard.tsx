import { memo, useEffect, useRef } from "react";
import { Panel, Readout } from "@/components/shared";
import { useSim } from "@/sim/store";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* 10-minute temperature history — module-level 1 Hz ring buffer.      */
/* Subscribes to the sim store once (app lifetime), downsampling the   */
/* 10 Hz tick. Survives page navigation within the SPA session.        */
/* ------------------------------------------------------------------ */
const CAP = 600; // 10 min @ 1 Hz
const history: number[] = [];
let subscribed = false;
let lastSampleMs = 0;

function ensureHistory() {
  if (subscribed) return;
  subscribed = true;
  const st = useSim.getState();
  history.push(st.temperature);
  lastSampleMs = performance.now();
  useSim.subscribe((s) => {
    const now = performance.now();
    if (now - lastSampleMs >= 1000) {
      lastSampleMs = now;
      history.push(s.temperature);
      if (history.length > CAP) history.splice(0, history.length - CAP);
    }
  });
}

/** Scrolling temperature canvas: setpoint hairline, ±5 mK stable band, mK auto-zoom. */
const TempCanvas = memo(function TempCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  // animated y-domain half-span (°C), lerps toward target each frame
  const spanRef = useRef(0.6);

  useEffect(() => {
    ensureHistory();
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const draw = () => {
      const w = wrap.clientWidth;
      const h = 110;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const s = useSim.getState();
      const setp = s.setpoint;
      const data = history;

      // target span: tight ±12 mK once stable (satisfying zoom-in), else fit data
      let target = 0.012;
      if (!s.thermalStable) {
        let mn = setp - 0.005;
        let mx = setp + 0.005;
        for (const v of data) {
          if (v < mn) mn = v;
          if (v > mx) mx = v;
        }
        target = Math.max((mx - mn) / 2, 0.02) * 1.15;
      }
      // ease (≈600 ms settle)
      spanRef.current += (target - spanRef.current) * 0.06;
      const span = spanRef.current;

      ctx.fillStyle = "#070b10";
      ctx.fillRect(0, 0, w, h);

      const Y = (t: number) => (1 - (t - (setp - span)) / (2 * span)) * h;
      const X = (i: number) => w - ((data.length - 1 - i) / (CAP - 1)) * w;

      // ±5 mK stable band (go at 8%)
      if (span <= 0.05) {
        const yTop = Y(setp + 0.005);
        const yBot = Y(setp - 0.005);
        ctx.fillStyle = "rgba(61,220,132,0.08)";
        ctx.fillRect(0, yTop, w, yBot - yTop);
      }

      // grid
      ctx.strokeStyle = "rgba(30,42,56,0.55)";
      ctx.lineWidth = 1;
      for (let i = 1; i < 4; i++) {
        const y = (i / 4) * h;
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(w, y + 0.5);
        ctx.stroke();
      }

      // setpoint hairline
      ctx.strokeStyle = "rgba(130,150,171,0.6)";
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, Y(setp) + 0.5);
      ctx.lineTo(w, Y(setp) + 0.5);
      ctx.stroke();
      ctx.setLineDash([]);

      // trace
      if (data.length >= 2) {
        ctx.strokeStyle = "#c47a4a";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        data.forEach((v, i) => {
          const px = X(i);
          const py = Math.max(-4, Math.min(h + 4, Y(v)));
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.stroke();
      }

      // axis labels
      ctx.fillStyle = "#4b5b6e";
      ctx.font = "9px 'JetBrains Mono', monospace";
      ctx.textAlign = "left";
      ctx.fillText(`${(setp + span).toFixed(3)}`, 4, 10);
      ctx.fillText(`${setp.toFixed(3)}`, 4, Y(setp) - 4);
      ctx.fillText(`${(setp - span).toFixed(3)}`, 4, h - 4);
      ctx.textAlign = "right";
      ctx.fillText("−10 min", w - 4, h - 4);
      ctx.fillText("now", w - 4, 10);

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrapRef} className="overflow-hidden rounded-sm border border-line">
      <canvas ref={canvasRef} style={{ width: "100%", height: 110, display: "block" }} />
    </div>
  );
});

/** Thermal Stability card (console.md §Row 3C). */
export default function ThermalCard() {
  const temperature = useSim((s) => s.temperature);
  const drift = useSim((s) => s.driftCPerMin);
  const stable = useSim((s) => s.thermalStable);
  const stableTimer = useSim((s) => s.stableTimer);
  const setpoint = useSim((s) => s.setpoint);
  const enabled = useSim((s) => s.thermalEnabled);

  const driftOk = Math.abs(drift) <= 0.01;
  const mm = Math.floor(stableTimer / 60);
  const ss = Math.floor(stableTimer % 60);
  const verdict = stable
    ? `STABLE ${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`
    : enabled
      ? "SETTLING…"
      : "LOOP OFF";

  return (
    <Panel accent="copper" bezel title="Thermal stability" className="h-full">
      <div className="flex min-h-[168px] flex-col">
        <div className="flex items-start gap-6">
          <Readout label="Chamber" value={temperature.toFixed(3)} unit="°C" size="md" live />
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              drift · limit ±0.010
            </span>
            <span
              className={cn(
                "font-mono text-xl font-bold tabular-nums leading-none",
                driftOk ? "text-go" : "text-warn",
              )}
            >
              {drift >= 0 ? "+" : ""}
              {drift.toFixed(3)}
              <span className="ml-1 font-mono text-[10px] font-normal text-faint">°C/min</span>
            </span>
          </div>
        </div>
        <p className="mt-2 font-mono text-[10px] text-faint">
          setpoint {setpoint.toFixed(3)} °C · band ±0.005 °C
        </p>
        <div className="mt-3">
          <TempCanvas />
        </div>
        <p
          className={cn(
            "mt-2 font-mono text-[10px] uppercase tracking-[0.12em]",
            stable ? "text-go" : enabled ? "text-warn" : "text-faint",
          )}
        >
          {verdict}
        </p>
      </div>
    </Panel>
  );
}
