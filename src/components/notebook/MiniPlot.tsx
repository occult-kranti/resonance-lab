import { memo, useEffect, useRef } from "react";
import { useSim, MAX_S11_DIP_DB } from "@/sim/store";
import { cn } from "@/lib/utils";

export type MiniPlotKind = "dip" | "temp" | "pressure" | "residuals";

/**
 * MiniPlot — small live canvas snapshot for notebook attachments / pinned rail
 * (notebook.md §Entries stream). Reads sim state at rAF so it stays live
 * without re-rendering React.
 *
 * - `dip`: S11 Lorentzian dip — from `f0Hz`/`q` props if given (static
 *   snapshot, e.g. a committed run), else the latest fit.
 * - `temp` / `pressure`: rolling history buffers (pressure on log scale).
 * - `residuals`: latest fit residuals.
 */
function MiniPlotInner({
  kind,
  f0Hz,
  q,
  width = 132,
  height = 48,
  className,
}: {
  kind: MiniPlotKind;
  /** static dip parameters (optional — defaults to latest fit) */
  f0Hz?: number;
  q?: number;
  width?: number;
  height?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const propsRef = useRef({ kind, f0Hz, q });
  useEffect(() => {
    propsRef.current = { kind, f0Hz, q };
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const grid = () => {
      ctx.strokeStyle = "rgba(30,42,56,0.5)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, height / 2 + 0.5);
      ctx.lineTo(width, height / 2 + 0.5);
      ctx.stroke();
    };

    const drawSeries = (vals: number[], color: string) => {
      if (vals.length < 2) return;
      let min = Math.min(...vals);
      let max = Math.max(...vals);
      if (max - min < 1e-9) {
        min -= 1;
        max += 1;
      }
      const pad = (max - min) * 0.12;
      min -= pad;
      max += pad;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.25;
      ctx.beginPath();
      vals.forEach((v, i) => {
        const x = (i / (vals.length - 1)) * width;
        const y = height - ((v - min) / (max - min)) * height;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    };

    const drawDip = (f0: number, qq: number) => {
      // render a passive Lorentzian dip spanning ±6 FWHM around f0
      const gamma = f0 / qq;
      const span = gamma * 6;
      const depth = MAX_S11_DIP_DB * 0.85;
      const pts: number[] = [];
      for (let i = 0; i < width; i++) {
        const f = f0 - span + (2 * span * i) / (width - 1);
        const det = f - f0;
        pts.push(-0.25 + depth * ((gamma / 2) ** 2 / (det * det + (gamma / 2) ** 2)));
      }
      // fixed dB window so dips look comparable
      const y0 = 0.5;
      const y1 = MAX_S11_DIP_DB * 1.15;
      ctx.strokeStyle = "#2dd4c8";
      ctx.lineWidth = 1.25;
      ctx.beginPath();
      pts.forEach((v, i) => {
        const y = ((v - y0) / (y1 - y0)) * (height - 6) + 3;
        if (i === 0) ctx.moveTo(i, y);
        else ctx.lineTo(i, y);
      });
      ctx.stroke();
    };

    let raf = 0;
    const draw = () => {
      const p = propsRef.current;
      const s = useSim.getState();
      ctx.clearRect(0, 0, width, height);
      grid();
      switch (p.kind) {
        case "dip": {
          const f0 = p.f0Hz ?? s.lastFit?.f0;
          const qq = p.q ?? s.lastFit?.q;
          if (f0 && qq) drawDip(f0, qq);
          break;
        }
        case "temp":
          drawSeries(s.temperatureHistory, "#c47a4a");
          break;
        case "pressure":
          drawSeries(
            s.pressureHistory.map((v) => Math.log10(Math.max(v, 1e-9))),
            "#5aa2f0",
          );
          break;
        case "residuals":
          if (s.lastFit) drawSeries(s.lastFit.residuals, "#9d8df1");
          break;
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width, height }}
      className={cn("block rounded-sm border border-line bg-[#070b10]", className)}
      aria-hidden
    />
  );
}

const MiniPlot = memo(MiniPlotInner);
export default MiniPlot;
