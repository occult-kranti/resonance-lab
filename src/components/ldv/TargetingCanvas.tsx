import { memo, useEffect, useRef } from "react";
import { useSim } from "@/sim/store";
import { useDrive } from "@/components/field/driveStore";
import { surfaceVelocityNmS, sensitivityForTheta } from "@/components/field/physics";

export interface AimPoint {
  /** degrees from disc-center surface normal (0 = center, 90 = rim) */
  theta: number;
  /** azimuth degrees */
  phi: number;
  /** normalized radius 0–1 */
  r: number;
  onDisc: boolean;
}

export interface TargetingProps {
  aim: AimPoint;
  onAim: (a: AimPoint, snapped: boolean) => void;
  focus: number; // 0–100
  beamLive: boolean; // shutter open + laser armed
  scanning: boolean;
  /** scan-driven spot target (normalized x,y −1..1) while scanning */
  scanSpot: { x: number; y: number } | null;
}

/**
 * Targeting view (ldv.md): face-on copper sphere with polar grid and a
 * laser spot that can be aimed by click/drag. Spot motion is a critically
 * damped spring (~300 ms settle); defocus widens/blurs the spot.
 */
function TargetingCanvasInner({ aim, onAim, focus, beamLive, scanning, scanSpot }: TargetingProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const propsRef = useRef({ aim, onAim, focus, beamLive, scanning, scanSpot });
  useEffect(() => {
    propsRef.current = { aim, onAim, focus, beamLive, scanning, scanSpot };
  });

  const spotRef = useRef({ x: 0, y: 0, vx: 0, vy: 0 }); // normalized disc coords
  const lastTRef = useRef(0);
  const draggingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const draw = (nowMs: number) => {
      const p = propsRef.current;
      const sim = useSim.getState();
      const drive = useDrive.getState();
      const w = wrap.clientWidth;
      const h = Math.max(320, Math.round(w * 0.9));
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

      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.4;

      /* ---- sphere disc: copper radial gradient with limb darkening ---- */
      const g = ctx.createRadialGradient(cx - R * 0.25, cy - R * 0.25, R * 0.08, cx, cy, R);
      g.addColorStop(0, "#e09a63");
      g.addColorStop(0.5, "#c47a4a");
      g.addColorStop(0.85, "#7c4b2c");
      g.addColorStop(1, "#41281a");
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.restore();

      /* ---- polar grid overlay ---- */
      ctx.save();
      ctx.strokeStyle = "rgba(30,42,56,0.8)";
      ctx.lineWidth = 1;
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, (R * i) / 4, 0, Math.PI * 2);
        ctx.stroke();
      }
      for (let a = 0; a < 360; a += 30) {
        const rad = (a * Math.PI) / 180;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(rad) * R * 0.25, cy + Math.sin(rad) * R * 0.25);
        ctx.lineTo(cx + Math.cos(rad) * R, cy + Math.sin(rad) * R);
        ctx.stroke();
      }
      // rim
      ctx.strokeStyle = "#2c3d52";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();
      // ring labels
      ctx.fillStyle = "#4b5b6e";
      ctx.font = "9px 'JetBrains Mono', monospace";
      ctx.textAlign = "left";
      for (let i = 1; i <= 4; i++) {
        ctx.fillText(`${i * 22.5 | 0}°`, cx + (R * i) / 4 + 3, cy - 3);
      }
      ctx.restore();

      /* ---- laser spot: critically damped spring toward target ---- */
      // target in normalized coords
      let tx: number, ty: number;
      if (p.scanning && p.scanSpot) {
        tx = p.scanSpot.x;
        ty = p.scanSpot.y;
      } else {
        const rad = (p.aim.phi * Math.PI) / 180;
        tx = p.aim.r * Math.cos(rad);
        ty = p.aim.r * Math.sin(rad);
      }
      const s = spotRef.current;
      const dt = Math.min(0.05, Math.max(0.001, (nowMs - lastTRef.current) / 1000));
      lastTRef.current = nowMs;
      if (reduced) {
        // reduced motion: instant hops
        s.x = tx; s.y = ty; s.vx = 0; s.vy = 0;
      } else {
        const omega = (2 * Math.PI) / 0.3; // ~300 ms settle
        const ax = omega * omega * (tx - s.x) - 2 * omega * s.vx;
        const ay = omega * omega * (ty - s.y) - 2 * omega * s.vy;
        s.vx += ax * dt;
        s.vy += ay * dt;
        s.x += s.vx * dt;
        s.y += s.vy * dt;
      }

      const sens = sensitivityForTheta(p.aim.theta);
      const vel = surfaceVelocityNmS(sim, drive, sens);
      const measuring = p.beamLive && drive.on && sim.power === "FACILITY_ON";
      // glow pulses while measuring
      const pulse = measuring && !reduced ? 0.65 + 0.35 * Math.sin(nowMs * 2 * Math.PI * 0.5) : 0.65;
      const defocus = 1 - p.focus / 100;
      const spotR = 3 + defocus * 9;

      const spx = cx + s.x * R;
      const spy = cy + s.y * R;

      if (p.beamLive) {
        ctx.save();
        // halo
        ctx.shadowColor = `rgba(45,212,200,${0.8 * pulse})`;
        ctx.shadowBlur = 4 + spotR * 2;
        ctx.fillStyle = `rgba(45,212,200,${0.9 * pulse})`;
        ctx.beginPath();
        ctx.arc(spx, spy, spotR, 0, Math.PI * 2);
        ctx.fill();
        // 4px halo ring
        ctx.shadowBlur = 0;
        ctx.strokeStyle = `rgba(45,212,200,${0.35 * pulse})`;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(spx, spy, spotR + 4, 0, Math.PI * 2);
        ctx.stroke();
        // velocity magnitude caption
        ctx.fillStyle = "rgba(217,226,236,0.85)";
        ctx.font = "10px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText(`${vel.toFixed(1)} nm/s`, spx, Math.min(spy + spotR + 20, h - 8));
        ctx.restore();
      } else {
        // beam blocked: faint cross at aim
        ctx.save();
        ctx.strokeStyle = "rgba(75,91,110,0.8)";
        ctx.beginPath();
        ctx.moveTo(spx - 7, spy); ctx.lineTo(spx + 7, spy);
        ctx.moveTo(spx, spy - 7); ctx.lineTo(spx, spy + 7);
        ctx.stroke();
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* -------- aim interaction -------- */
  const aimFromEvent = (e: React.PointerEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const w = rect.width;
    const h = rect.height;
    const R = Math.min(w, h) * 0.4;
    const nx = (e.clientX - rect.left - w / 2) / R;
    const ny = (e.clientY - rect.top - h / 2) / R;
    let r = Math.hypot(nx, ny);
    const offDisc = r > 1;
    if (offDisc) r = 1; // snap to rim
    const phi = ((Math.atan2(ny, nx) * 180) / Math.PI + 360) % 360;
    const theta = Math.asin(Math.min(1, r)) * (180 / Math.PI);
    return { aim: { theta, phi, r, onDisc: !offDisc }, offDisc };
  };

  return (
    <div ref={wrapRef}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", minHeight: 320, display: "block", cursor: "crosshair", touchAction: "none" }}
        onPointerDown={(e) => {
          draggingRef.current = true;
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
          const hit = aimFromEvent(e);
          if (hit) propsRef.current.onAim(hit.aim, hit.offDisc);
        }}
        onPointerMove={(e) => {
          if (!draggingRef.current) return;
          const hit = aimFromEvent(e);
          if (hit) propsRef.current.onAim(hit.aim, hit.offDisc);
        }}
        onPointerUp={() => (draggingRef.current = false)}
        onPointerLeave={() => (draggingRef.current = false)}
      />
    </div>
  );
}

const TargetingCanvas = memo(TargetingCanvasInner);
export default TargetingCanvas;
