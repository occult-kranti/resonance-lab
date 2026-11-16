import { memo, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Sparkline (design.md §5.4): 96×28 canvas, last N samples of a sim channel.
 * Reads `getData()` at rAF so it animates smoothly without re-rendering.
 */
function SparklineInner({
  getData,
  width = 96,
  height = 28,
  color = "var(--trace)",
  log = false,
  className,
}: {
  /** returns the sample array (e.g. pressureHistory); called every rAF */
  getData: () => number[];
  width?: number;
  height?: number;
  color?: string;
  /** log10-scale the values (useful for pressure) */
  log?: boolean;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getDataRef = useRef(getData);
  useEffect(() => {
    getDataRef.current = getData;
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

    let raf = 0;
    const draw = () => {
      const data = getDataRef.current();
      ctx.clearRect(0, 0, width, height);

      // subtle grid
      ctx.strokeStyle = "rgba(30,42,56,0.5)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, height / 2 + 0.5);
      ctx.lineTo(width, height / 2 + 0.5);
      ctx.stroke();

      if (data.length >= 2) {
        const vals = log ? data.map((v) => Math.log10(Math.max(v, 1e-9))) : data;
        let min = Math.min(...vals);
        let max = Math.max(...vals);
        if (max - min < 1e-9) {
          min -= 1;
          max += 1;
        }
        const pad = (max - min) * 0.1;
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
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [width, height, color, log]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width, height }}
      className={cn("block", className)}
      aria-hidden
    />
  );
}

const Sparkline = memo(SparklineInner);
export default Sparkline;
