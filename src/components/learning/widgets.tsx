import { useEffect, useRef, useState } from "react";

/**
 * Sandboxed lesson widgets (learning.md §Lesson overlay).
 * These write NOTHING to the facility sim — pure local canvas demos.
 */

const GRID = "rgba(30,42,56,0.55)";
const TRACE = "#2dd4c8";
const COPPER = "#c47a4a";
const FAINT = "#4b5b6e";

function useCanvas(draw: (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => void, deps: unknown[], animate = false) {
  const ref = useRef<HTMLCanvasElement>(null);
  const drawRef = useRef(draw);
  drawRef.current = draw;
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);
    let raf = 0;
    const frame = (t: number) => {
      drawRef.current(ctx, w, h, t);
      if (animate) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, animate]);
  return ref;
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  return (
    <label className="flex items-center gap-3">
      <span className="w-32 shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
        {label}
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-line accent-[#2dd4c8]"
      />
      <span className="w-24 shrink-0 text-right font-mono text-[11px] tabular-nums text-ink">
        {format(value)}
      </span>
    </label>
  );
}

function WidgetShell({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-sm border border-line bg-[#070b10] p-3">
      {children}
      <p className="mt-2 font-mono text-[10px] leading-relaxed text-faint">
        {caption}
      </p>
    </div>
  );
}

/* ---- 1. Driven damped oscillator: slide drive frequency across resonance ---- */
export function OscillatorWidget({ caption }: { caption: string }) {
  const [driveKHz, setDriveKHz] = useState(229.2);
  const f0 = 229.731;
  const q = 8000;
  const gamma = f0 / q; // FWHM kHz
  const det = driveKHz - f0;
  const lorentz = (gamma / 2) ** 2 / (det * det + (gamma / 2) ** 2);
  const amp = 0.12 + 0.88 * lorentz;

  const ref = useCanvas(
    (ctx, w, h, t) => {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = GRID;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, h / 2 + 0.5);
      ctx.lineTo(w, h / 2 + 0.5);
      ctx.stroke();
      // oscillation trace: amplitude modulated by Lorentzian response
      const mid = h / 2;
      const A = amp * (h * 0.42);
      const cycles = 6;
      ctx.strokeStyle = TRACE;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x <= w; x++) {
        const phase = (x / w) * Math.PI * 2 * cycles + t / 300;
        const y = mid - Math.sin(phase) * A;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      // response % label
      ctx.fillStyle = FAINT;
      ctx.font = "10px 'JetBrains Mono', monospace";
      ctx.fillText(`response ${(amp * 100).toFixed(0)}%`, 8, 14);
    },
    [amp],
    true,
  );

  return (
    <WidgetShell caption={caption}>
      <canvas ref={ref} style={{ width: "100%", height: 120 }} className="block" />
      <div className="mt-2">
        <SliderRow
          label="Drive freq"
          value={driveKHz}
          min={229.0}
          max={230.5}
          step={0.005}
          onChange={setDriveKHz}
          format={(v) => `${v.toFixed(3)} kHz`}
        />
      </div>
    </WidgetShell>
  );
}

/* ---- 2. Q slider → S11 dip sharpens ---- */
export function QDipWidget({ caption }: { caption: string }) {
  const [q, setQ] = useState(6000);
  const f0 = 229.731;

  const ref = useCanvas((ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = GRID;
    ctx.lineWidth = 1;
    for (let i = 1; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(0, (h / 4) * i + 0.5);
      ctx.lineTo(w, (h / 4) * i + 0.5);
      ctx.stroke();
    }
    const fMin = 229.0;
    const fMax = 230.5;
    const gamma = f0 / q;
    const depth = 18 * (0.4 + 0.6 * (q / 18000));
    ctx.strokeStyle = TRACE;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let x = 0; x <= w; x++) {
      const f = fMin + ((fMax - fMin) * x) / w;
      const det = f - f0;
      const s11 = -0.25 - depth * ((gamma / 2) ** 2 / (det * det + (gamma / 2) ** 2));
      const y = ((0 - s11) / 20) * h; // 0 dB top, −20 dB bottom
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.fillStyle = FAINT;
    ctx.font = "10px 'JetBrains Mono', monospace";
    ctx.fillText("0 dB", 8, 12);
    ctx.fillText("−20 dB", 8, h - 6);
    ctx.fillText(`FWHM ${(gamma * 1000).toFixed(1)} Hz`, w - 120, 12);
  }, [q]);

  return (
    <WidgetShell caption={caption}>
      <canvas ref={ref} style={{ width: "100%", height: 130 }} className="block" />
      <div className="mt-2">
        <SliderRow
          label="Q factor"
          value={q}
          min={2000}
          max={20000}
          step={250}
          onChange={setQ}
          format={(v) => v.toLocaleString()}
        />
      </div>
    </WidgetShell>
  );
}

/* ---- 3. Temperature slider → f₀ walks ---- */
export function TempWalkWidget({ caption }: { caption: string }) {
  const [temp, setTemp] = useState(22.0);
  const f0Hz = 229731 - 8 * (temp - 22);

  const ref = useCanvas((ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = GRID;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, h / 2 + 0.5);
    ctx.lineTo(w, h / 2 + 0.5);
    ctx.stroke();
    // dip centered at f0 within a 229.60–229.86 kHz window
    const fMin = 229600;
    const fMax = 229860;
    const gamma = f0Hz / 18000;
    // marker for 22 °C reference position
    const xRef = ((229731 - fMin) / (fMax - fMin)) * w;
    ctx.strokeStyle = "rgba(75,91,110,0.8)";
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(xRef, 6);
    ctx.lineTo(xRef, h - 6);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.strokeStyle = COPPER;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let x = 0; x <= w; x++) {
      const f = fMin + ((fMax - fMin) * x) / w;
      const det = f - f0Hz;
      const s11 = -0.25 - 17 * ((gamma / 2) ** 2 / (det * det + (gamma / 2) ** 2));
      const y = ((0 - s11) / 20) * h;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.fillStyle = FAINT;
    ctx.font = "10px 'JetBrains Mono', monospace";
    ctx.fillText("dashed = 22.000 °C", 8, 12);
  }, [f0Hz]);

  return (
    <WidgetShell caption={caption}>
      <canvas ref={ref} style={{ width: "100%", height: 120 }} className="block" />
      <div className="mt-2 space-y-2">
        <SliderRow
          label="Chamber temp"
          value={temp}
          min={20}
          max={24}
          step={0.05}
          onChange={setTemp}
          format={(v) => `${v.toFixed(2)} °C`}
        />
        <p className="text-right font-mono text-[11px] tabular-nums text-trace">
          f₀ = {(f0Hz / 1000).toFixed(3)} kHz{" "}
          <span className="text-faint">
            ({f0Hz - 229731 >= 0 ? "+" : ""}
            {(f0Hz - 229731).toFixed(1)} Hz vs 22 °C)
          </span>
        </p>
      </div>
    </WidgetShell>
  );
}
