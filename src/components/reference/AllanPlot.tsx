import { memo, useEffect, useRef, useState } from "react";
import { PLOT_PALETTE } from "@/components/shared/colors";

/** averaging times τ (s) for the ADEV curve */
const TAUS = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];

/** GPSDO-disciplined Rb model: white-FM −1/2 slope → flicker floor ~1e-12 @ 1000 s → aging upturn. */
function adevGpsdo(tau: number): number {
  const white = 3e-11 * Math.pow(tau, -0.5);
  const floor = 1e-12;
  const aging = 1e-13 * (tau / 1000);
  return Math.sqrt(white * white + floor * floor + aging * aging);
}

/** OCXO-only comparison: noisier white region, higher floor, faster drift. */
function adevOcxo(tau: number): number {
  const white = 1e-10 * Math.pow(tau, -0.5);
  const floor = 1e-11;
  const drift = 1e-11 * (tau / 100);
  return Math.sqrt(white * white + floor * floor + drift * drift);
}

const X0 = Math.log10(TAUS[0]);
const X1 = Math.log10(TAUS[TAUS.length - 1]);
const Y0 = -13.5;
const Y1 = -8.5;
const PAD = { l: 52, r: 14, t: 12, b: 26 };

/**
 * Allan deviation teaching plot (reference.md §"Allan deviation").
 * Log-log canvas; points populate progressively with session uptime.
 */
function AllanPlotInner({
  uptime,
  showOcxo,
  height = 260,
}: {
  uptime: number;
  showOcxo: boolean;
  height?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<{ px: number; py: number; tau: number; adev: number; w: number } | null>(null);
  const stateRef = useRef({ uptime, showOcxo, cursor });
  useEffect(() => {
    stateRef.current = { uptime, showOcxo, cursor };
  });

  const toPx = (tau: number, adev: number, w: number, h: number) => ({
    px: PAD.l + ((Math.log10(tau) - X0) / (X1 - X0)) * (w - PAD.l - PAD.r),
    py: PAD.t + (1 - (Math.log10(adev) - Y0) / (Y1 - Y0)) * (h - PAD.t - PAD.b),
  });

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

      ctx.fillStyle = "#070b10";
      ctx.fillRect(0, 0, w, h);

      // log-log grid
      ctx.font = "9px 'JetBrains Mono', monospace";
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(30,42,56,0.55)";
      ctx.fillStyle = "#4b5b6e";
      ctx.textAlign = "center";
      for (let e = Math.ceil(X0); e <= Math.floor(X1); e++) {
        const { px } = toPx(Math.pow(10, e), 1e-12, w, h);
        ctx.beginPath();
        ctx.moveTo(px, PAD.t);
        ctx.lineTo(px, h - PAD.b);
        ctx.stroke();
        ctx.fillText(`${e === 0 ? "1" : `10${sup(e)}`} s`, px, h - 8);
      }
      ctx.textAlign = "right";
      for (let e = Math.ceil(Y0); e <= Math.floor(Y1); e++) {
        const { py } = toPx(1, Math.pow(10, e), w, h);
        ctx.beginPath();
        ctx.moveTo(PAD.l, py);
        ctx.lineTo(w - PAD.r, py);
        ctx.stroke();
        ctx.fillText(`10${sup(e)}`, PAD.l - 6, py + 3);
      }

      const maxTau = Math.max(0.1, s.uptime / 2); // need ≥2 τ of data for a sane estimate

      // OCXO comparison (dimmed)
      if (s.showOcxo) {
        ctx.strokeStyle = "rgba(130,150,171,0.4)";
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        TAUS.forEach((tau, i) => {
          if (tau > maxTau) return;
          const { px, py } = toPx(tau, adevOcxo(tau), w, h);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.stroke();
        ctx.setLineDash([]);
        if (maxTau > 50) {
          ctx.fillStyle = "rgba(130,150,171,0.6)";
          ctx.textAlign = "left";
          const lp = toPx(Math.min(maxTau, 500), adevOcxo(Math.min(maxTau, 500)), w, h);
          ctx.fillText("OCXO-only (no GPSDO)", lp.px + 6, lp.py - 6);
        }
      }

      // GPSDO/Rb curve
      ctx.strokeStyle = PLOT_PALETTE.violet;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      let started = false;
      for (const tau of TAUS) {
        if (tau > maxTau) break;
        // live noise shimmer on the youngest points
        const shimmer = tau > maxTau / 4 ? 1 + (Math.random() - 0.5) * 0.12 : 1;
        const { px, py } = toPx(tau, adevGpsdo(tau) * shimmer, w, h);
        if (!started) {
          ctx.moveTo(px, py);
          started = true;
        } else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.fillStyle = PLOT_PALETTE.violet;
      ctx.textAlign = "left";
      ctx.fillText("GPSDO / Rb (this lab)", PAD.l + 8, PAD.t + 12);

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
  }, [height]);

  const handleMove = (e: React.PointerEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const tau = Math.pow(10, X0 + ((px - PAD.l) / (rect.width - PAD.l - PAD.r)) * (X1 - X0));
    const adev = Math.pow(10, Y0 + (1 - (py - PAD.t) / (rect.height - PAD.t - PAD.b)) * (Y1 - Y0));
    setCursor({ px, py, tau, adev, w: rect.width });
  };

  return (
    <div ref={wrapRef} className="relative">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height, display: "block", cursor: "crosshair" }}
        onPointerMove={handleMove}
        onPointerLeave={() => setCursor(null)}
      />
      {cursor && (
        <div
          className="pointer-events-none absolute z-10 rounded-sm border border-line-bright bg-panel-2 px-2 py-1 font-mono text-[10px] text-dim"
          style={{
            left: Math.min(cursor.px + 10, cursor.w - 150),
            top: Math.max(cursor.py - 30, 4),
          }}
        >
          τ {cursor.tau < 1 ? `${(cursor.tau * 1000).toFixed(0)} ms` : `${cursor.tau.toFixed(cursor.tau < 10 ? 1 : 0)} s`}
          {" · "}σy {cursor.adev.toExponential(1)}
        </div>
      )}
    </div>
  );
}

function sup(n: number): string {
  const map: Record<string, string> = {
    "-": "⁻", "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
    "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  };
  return String(n).split("").map((c) => map[c] ?? c).join("");
}

const AllanPlot = memo(AllanPlotInner);
export default AllanPlot;
