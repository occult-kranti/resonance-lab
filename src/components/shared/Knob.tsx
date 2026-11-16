import { useRef } from "react";
import { cn } from "@/lib/utils";

/** Rotary knob (design.md §5.14): drag vertically to change value; detent ticks. */
export default function Knob({
  value,
  min,
  max,
  onChange,
  label,
  size = 48,
  detents = 11,
  className,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  label?: string;
  size?: number;
  detents?: number;
  className?: string;
}) {
  const dragRef = useRef<{ startY: number; startVal: number } | null>(null);
  const frac = (value - min) / (max - min || 1);
  const angle = -135 + frac * 270;

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { startY: e.clientY, startVal: value };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    const dy = dragRef.current.startY - e.clientY;
    const range = max - min;
    let v = dragRef.current.startVal + (dy / 120) * range;
    // snap to detents
    const steps = detents - 1;
    v = Math.round(((v - min) / range) * steps) * (range / steps) + min;
    v = Math.max(min, Math.min(max, v));
    onChange(v);
  };
  const onPointerUp = () => (dragRef.current = null);

  const ticks = Array.from({ length: detents }, (_, i) => -135 + (i / (detents - 1)) * 270);

  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <div
        role="slider"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onKeyDown={(e) => {
          const stepv = (max - min) / (detents - 1);
          if (e.key === "ArrowUp" || e.key === "ArrowRight") onChange(Math.min(max, value + stepv));
          if (e.key === "ArrowDown" || e.key === "ArrowLeft") onChange(Math.max(min, value - stepv));
        }}
        className="relative cursor-grab touch-none rounded-full border border-line-bright bg-panel-2 outline-none panel-inset focus:border-trace/60 active:cursor-grabbing"
        style={{ width: size, height: size }}
      >
        {/* detent ticks */}
        {ticks.map((a) => (
          <span
            key={a}
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[3px] w-px bg-faint"
            style={{
              transform: `translate(-50%,-50%) rotate(${a}deg) translateY(${-size / 2 + 3}px)`,
            }}
          />
        ))}
        {/* pointer */}
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[40%] w-[2px] origin-bottom rounded-full bg-trace"
          style={{ transform: `translate(-50%,-100%) rotate(${angle}deg)` }}
        />
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-faint"
        />
      </div>
      {label && (
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
          {label}
        </span>
      )}
    </div>
  );
}
