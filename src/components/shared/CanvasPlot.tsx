import { memo, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { plotColor } from "./colors";

export interface PlotTrace {
  id: string;
  color: string;
  data: { x: number[]; y: number[] } | null;
  dashed?: boolean;
  width?: number;
}

export interface PlotMarker {
  id: string;
  x: number;
  color?: string;
}

/**
 * CanvasPlot (design.md §5.5): generic sweep/waveform canvas.
 * Dark bg, hairline grid, mono axis labels, crosshair cursor + value tooltip,
 * multiple traces, dashed fit overlay, draggable markers.
 *
 * Traces are read at rAF via `getTraces()` so live data does not re-render React.
 */
function CanvasPlotInner({
  getTraces,
  xLabel,
  yLabel,
  xFormat = (v) => v.toFixed(1),
  yFormat = (v) => v.toFixed(1),
  xDomain,
  yDomain,
  markers = [],
  onMarkerMove,
  height = 260,
  className,
}: {
  getTraces: () => PlotTrace[];
  xLabel?: string;
  yLabel?: string;
  xFormat?: (v: number) => string;
  yFormat?: (v: number) => string;
  /** fixed domains; if omitted, auto-fit to data */
  xDomain?: [number, number];
  yDomain?: [number, number];
  markers?: PlotMarker[];
  onMarkerMove?: (id: string, x: number) => void;
  height?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<{ px: number; py: number; x: number; y: number } | null>(null);
  const stateRef = useRef({ cursor: null as typeof cursor, markers, getTraces, xDomain, yDomain, xFormat, yFormat, onMarkerMove });
  useEffect(() => {
    stateRef.current = { cursor, markers, getTraces, xDomain, yDomain, xFormat, yFormat, onMarkerMove };
  });
  const draggingRef = useRef<string | null>(null);

  const PAD = { l: 52, r: 14, t: 12, b: 26 };

  const toDomain = (w: number, h: number) => {
    const s = stateRef.current;
    if (s.xDomain && s.yDomain) return { xd: s.xDomain, yd: s.yDomain };
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (const t of s.getTraces()) {
      if (!t.data) continue;
      for (const v of t.data.x) { if (v < x0) x0 = v; if (v > x1) x1 = v; }
      for (const v of t.data.y) { if (v < y0) y0 = v; if (v > y1) y1 = v; }
    }
    if (!isFinite(x0)) { x0 = 0; x1 = 1; y0 = 0; y1 = 1; }
    if (s.xDomain) [x0, x1] = s.xDomain;
    if (s.yDomain) [y0, y1] = s.yDomain;
    if (x1 - x0 < 1e-12) x1 = x0 + 1;
    if (y1 - y0 < 1e-12) y1 = y0 + 1;
    const yp = (y1 - y0) * 0.08;
    void w; void h;
    return { xd: [x0, x1] as [number, number], yd: [y0 - yp, y1 + yp] as [number, number] };
  };

  const toPx = (x: number, y: number, w: number, h: number) => {
    const { xd, yd } = toDomain(w, h);
    return {
      px: PAD.l + ((x - xd[0]) / (xd[1] - xd[0])) * (w - PAD.l - PAD.r),
      py: PAD.t + (1 - (y - yd[0]) / (yd[1] - yd[0])) * (h - PAD.t - PAD.b),
    };
  };

  const fromPx = (px: number, py: number, w: number, h: number) => {
    const { xd, yd } = toDomain(w, h);
    return {
      x: xd[0] + ((px - PAD.l) / (w - PAD.l - PAD.r)) * (xd[1] - xd[0]),
      y: yd[0] + (1 - (py - PAD.t) / (h - PAD.t - PAD.b)) * (yd[1] - yd[0]),
    };
  };

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

      const s = stateRef.current;
      const { xd, yd } = toDomain(w, h);

      // bg
      ctx.fillStyle = "#070b10";
      ctx.fillRect(0, 0, w, h);

      // grid (~12% divisions)
      ctx.strokeStyle = "rgba(30,42,56,0.55)";
      ctx.fillStyle = "#4b5b6e";
      ctx.lineWidth = 1;
      ctx.font = "10px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      const nx = 8, ny = 4;
      for (let i = 0; i <= nx; i++) {
        const px = PAD.l + (i / nx) * (w - PAD.l - PAD.r);
        ctx.beginPath();
        ctx.moveTo(px, PAD.t);
        ctx.lineTo(px, h - PAD.b);
        ctx.stroke();
        ctx.fillText(s.xFormat(xd[0] + (i / nx) * (xd[1] - xd[0])), px, h - 8);
      }
      ctx.textAlign = "right";
      for (let i = 0; i <= ny; i++) {
        const py = PAD.t + (i / ny) * (h - PAD.t - PAD.b);
        ctx.beginPath();
        ctx.moveTo(PAD.l, py);
        ctx.lineTo(w - PAD.r, py);
        ctx.stroke();
        ctx.fillText(s.yFormat(yd[1] - (i / ny) * (yd[1] - yd[0])), PAD.l - 6, py + 3);
      }

      // traces
      for (const t of s.getTraces()) {
        if (!t.data || t.data.x.length < 2) continue;
        ctx.strokeStyle = plotColor(t.color);
        ctx.lineWidth = t.width ?? 1.5;
        ctx.setLineDash(t.dashed ? [5, 4] : []);
        ctx.beginPath();
        const n = t.data.x.length;
        for (let i = 0; i < n; i++) {
          const { px, py } = toPx(t.data.x[i], t.data.y[i], w, h);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // markers
      for (const m of s.markers) {
        const { px } = toPx(m.x, yd[0], w, h);
        ctx.strokeStyle = m.color ?? "#f0b64c";
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(px, PAD.t);
        ctx.lineTo(px, h - PAD.b);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = m.color ?? "#f0b64c";
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
    const { x, y } = fromPx(px, py, rect.width, rect.height);
    setCursor({ px, py, x, y });
    if (draggingRef.current && stateRef.current.onMarkerMove) {
      stateRef.current.onMarkerMove(draggingRef.current, x);
    }
  };

  const handleDown = (e: React.PointerEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = e.clientX - rect.left;
    // grab marker if within 8px
    for (const m of stateRef.current.markers) {
      const { px: mx } = toPx(m.x, 0, rect.width, rect.height);
      if (Math.abs(mx - px) < 8) {
        draggingRef.current = m.id;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        return;
      }
    }
  };

  return (
    <div ref={wrapRef} className={cn("relative", className)}>
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
            left: Math.min(cursor.px + 10, (wrapRef.current?.clientWidth ?? 200) - 130),
            top: Math.max(cursor.py - 28, 4),
          }}
        >
          {xLabel && <span className="text-faint">{xLabel} </span>}
          {stateRef.current.xFormat(cursor.x)}
          {yLabel && <span className="text-faint"> · {yLabel} </span>}
          {!yLabel && " · "}
          {stateRef.current.yFormat(cursor.y)}
        </div>
      )}
    </div>
  );
}

const CanvasPlot = memo(CanvasPlotInner);
export default CanvasPlot;
