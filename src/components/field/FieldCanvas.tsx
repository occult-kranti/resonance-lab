import { memo, useEffect, useRef } from "react";
import { useSim } from "@/sim/store";
import { useDrive } from "./driveStore";
import { fieldAmplitude, SPHERE_R_MM, POS_OFFSET_MM } from "./physics";
import { rampColor, cellNoise } from "./colormap";

/* World geometry (mm) — schematic chamber cross-section */
const CHAMBER_R_MM = 215;
const VIEW_R_MM = 240;

export interface FieldMarker {
  id: string; // M1..M4
  x: number; // mm
  y: number; // mm
}

export interface ProbePos {
  x: number;
  y: number;
}

interface View {
  cx: number; // canvas px center x of this view
  cy: number;
  scale: number; // px per mm
  x0: number; // view rect left (px)
  w: number; // view rect width (px)
}

const VOID: [number, number, number] = [5, 8, 13]; // #05080d

export interface FieldCanvasProps {
  probe: ProbePos;
  onProbeChange: (p: ProbePos) => void;
  markers: FieldMarker[];
  onMarkerMove: (id: string, x: number, y: number) => void;
  trail: boolean;
  compareAB: boolean;
  activePos: 0 | 1;
  contrast: number;
  showGrid: boolean;
  sectionLine: boolean;
}

/**
 * Spatial field heatmap canvas (field-explorer.md): chamber cross-section,
 * breathing-mode near-field with 1/r² falloff, draggable probe + markers,
 * A/B compare split. Heatmap recomputes at 10 Hz into an offscreen bitmap.
 */
function FieldExplorerCanvasInner(props: FieldCanvasProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const propsRef = useRef(props);
  useEffect(() => {
    propsRef.current = props;
  });

  const trailRef = useRef<{ x: number; y: number; t: number }[]>([]);
  const heatRef = useRef<{ img: ImageData; bmp: HTMLCanvasElement | null; t: number; frozenUntil: number }[]>([]);
  const driveOnSinceRef = useRef<number>(0);
  const wasDrivingRef = useRef(false);
  const dragRef = useRef<{ kind: "probe" | "marker"; id?: string } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;

    /** field value (0–1+) at world coords around a sphere centered (cx,cy) */
    const valueAt = (
      wx: number,
      wy: number,
      cx: number,
      cy: number,
      t: number,
      ix: number,
      iy: number,
      slice: number,
      bloom: number,
    ): number => {
      const sim = useSim.getState();
      const drive = useDrive.getState();
      const dead = !drive.on || sim.power !== "FACILITY_ON";
      if (dead) {
        // noise-floor shimmer — nothing to see
        return 0.012 + 0.03 * cellNoise(ix, iy, slice);
      }
      const r = Math.hypot(wx - cx, wy - cy);
      const th = Math.atan2(wy - cy, wx - cx);
      let a = fieldAmplitude(sim, drive, r, SPHERE_R_MM);
      // subtle angular modulation (mode imperfection)
      a *= 1 + 0.07 * Math.cos(3 * th + 0.5 * Math.sin(t * 0.23));
      // outward phase ripple (slowed for legibility)
      if (!reduced) a *= 0.85 + 0.15 * Math.cos((r * 2 * Math.PI) / 95 - t * 2 * Math.PI * 0.4);
      // thermal instability → slow spatial shimmer
      if (!sim.thermalStable) a *= 1 + 0.08 * Math.sin(t * 0.6 + wx * 0.04 + wy * 0.03);
      a *= bloom;
      a += 0.004 * cellNoise(ix, iy, slice);
      return Math.max(0, a);
    };

    const probePhaseDeg = (r: number, t: number): number => {
      const ph = (r * 360) / 95 - t * 360 * 0.4;
      return ((ph % 360) + 360) % 360;
    };

    const computeHeat = (view: View, slotCenter: { x: number; y: number }, slot: number) => {
      const CELL = 4;
      const sim = useSim.getState();
      const t = sim.simTime;
      const now = performance.now();
      // loose-cable fault → random 300 ms dropouts (map freezes)
      let entry = heatRef.current[slot];
      if (entry && entry.frozenUntil > now) return;
      if (sim.faults["loose-cable"] && Math.random() < 0.012 && entry) {
        entry.frozenUntil = now + 300;
        return;
      }
      const bloom = Math.min(1, (now - driveOnSinceRef.current) / 200);
      const cw = Math.ceil(view.w / CELL);
      const cssH = wrap.clientHeight || canvas.clientHeight || 480;
      const rows = Math.ceil(cssH / CELL);
      if (!entry || entry.img.width !== cw || entry.img.height !== rows) {
        entry = { img: new ImageData(cw, rows), bmp: null, t: 0, frozenUntil: 0 };
        heatRef.current[slot] = entry;
      }
      const img = entry.img;
      const d = img.data;
      const contrast = propsRef.current.contrast;
      const slice = Math.floor(t * 10);
      for (let iy = 0; iy < rows; iy++) {
        for (let ix = 0; ix < cw; ix++) {
          const px = view.x0 + ix * CELL + CELL / 2;
          const py = iy * CELL + CELL / 2;
          const wx = (px - view.cx) / view.scale;
          const wy = (view.cy - py) / view.scale;
          const i = (iy * cw + ix) * 4;
          if (Math.hypot(wx, wy) > CHAMBER_R_MM) {
            d[i] = VOID[0]; d[i + 1] = VOID[1]; d[i + 2] = VOID[2]; d[i + 3] = 255;
            continue;
          }
          const v = valueAt(wx, wy, slotCenter.x, slotCenter.y, t, ix, iy, slice, bloom);
          const [r8, g8, b8] = rampColor(v, contrast);
          d[i] = r8; d[i + 1] = g8; d[i + 2] = b8; d[i + 3] = 255;
        }
      }
      entry.t = t;
    };

    const drawGrid = (view: View, h: number) => {
      ctx.save();
      ctx.strokeStyle = "rgba(30,42,56,0.5)";
      ctx.fillStyle = "#4b5b6e";
      ctx.lineWidth = 1;
      ctx.font = "9px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      for (let gx = -200; gx <= 200; gx += 50) {
        const px = view.cx + gx * view.scale;
        if (px < view.x0 || px > view.x0 + view.w) continue;
        ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, h); ctx.stroke();
        ctx.fillText(`${gx}`, px, h - 6);
      }
      for (let gy = -200; gy <= 200; gy += 50) {
        const py = view.cy - gy * view.scale;
        ctx.beginPath(); ctx.moveTo(view.x0, py); ctx.lineTo(view.x0 + view.w, py); ctx.stroke();
        ctx.textAlign = "left";
        ctx.fillText(`${gy}`, view.x0 + 4, py - 3);
        ctx.textAlign = "center";
      }
      ctx.restore();
    };

    const drawSphere = (
      view: View,
      center: { x: number; y: number },
      opts: { ghost?: boolean; label: string; active?: boolean },
    ) => {
      const sim = useSim.getState();
      const drive = useDrive.getState();
      const px = view.cx + center.x * view.scale;
      const py = view.cy - center.y * view.scale;
      const Rp = SPHERE_R_MM * view.scale;

      if (opts.ghost) {
        ctx.save();
        ctx.strokeStyle = opts.active ? "rgba(90,162,240,0.85)" : "rgba(90,162,240,0.45)";
        ctx.setLineDash([5, 4]);
        ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.arc(px, py, Rp, 0, Math.PI * 2); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(90,162,240,0.7)";
        ctx.font = "10px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText(opts.label, px, py - Rp - 6);
        ctx.restore();
        return;
      }

      // breathing pulse synced with drive (slowed to a legible 1.6 Hz)
      const pulse =
        drive.on && sim.power === "FACILITY_ON"
          ? (drive.amplitudeV / 10) * 0.05 * Math.sin(sim.simTime * 2 * Math.PI * 1.6)
          : 0;
      const R = Rp * (1 + (reduced ? 0 : pulse));

      // copper disc with limb darkening
      const g = ctx.createRadialGradient(px - R * 0.3, py - R * 0.3, R * 0.1, px, py, R);
      g.addColorStop(0, "#e09a63");
      g.addColorStop(0.55, "#c47a4a");
      g.addColorStop(1, "#5c3a24");
      ctx.save();
      ctx.beginPath(); ctx.arc(px, py, R, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
      ctx.strokeStyle = "rgba(196,122,74,0.9)"; ctx.lineWidth = 1.2; ctx.stroke();
      ctx.restore();

      // stage crosshair under sphere
      ctx.save();
      ctx.strokeStyle = "rgba(130,150,171,0.6)";
      ctx.lineWidth = 1;
      const sy = py + Rp + 14;
      ctx.beginPath();
      ctx.moveTo(px - 10, sy); ctx.lineTo(px + 10, sy);
      ctx.moveTo(px, sy - 10); ctx.lineTo(px, sy + 10);
      ctx.stroke();
      ctx.fillStyle = "#4b5b6e";
      ctx.font = "8px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText("STAGE", px, sy + 20);
      // position label
      ctx.fillStyle = "rgba(217,226,236,0.85)";
      ctx.font = "10px 'JetBrains Mono', monospace";
      ctx.fillText(opts.label, px, py - R - 7);
      ctx.restore();
    };

    const draw = () => {
      const p = propsRef.current;
      const sim = useSim.getState();
      const drive = useDrive.getState();
      const w = wrap.clientWidth;
      const h = Math.max(480, Math.round(w * 0.75));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        heatRef.current = []; // force recompute at new size
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#05080d";
      ctx.fillRect(0, 0, w, h);

      // bloom tracking
      const driving = drive.on && sim.power === "FACILITY_ON";
      if (driving && !wasDrivingRef.current) driveOnSinceRef.current = performance.now();
      wasDrivingRef.current = driving;

      // views: single or side-by-side compare
      const stageCx = sim.stage.x;
      const stageCy = sim.stage.y;
      const centers = [
        { x: stageCx - POS_OFFSET_MM, y: stageCy },
        { x: stageCx + POS_OFFSET_MM, y: stageCy },
      ];
      const views: View[] = p.compareAB
        ? [0, 1].map((i) => ({
            x0: i * (w / 2),
            w: w / 2,
            cx: i * (w / 2) + w / 4,
            cy: h / 2,
            scale: Math.min(w / 2, h) / (2 * VIEW_R_MM),
          }))
        : [{ x0: 0, w, cx: w / 2, cy: h / 2, scale: Math.min(w, h) / (2 * VIEW_R_MM) }];

      // recompute heatmaps at 10 Hz (sim tick cadence)
      const lastT = heatRef.current[0]?.t ?? -1;
      if (sim.simTime !== lastT || heatRef.current.length !== views.length) {
        views.forEach((v, i) => {
          const slot = p.compareAB ? i : p.activePos;
          computeHeat(v, centers[slot], i);
        });
      }

      // composite heatmap(s) with optional fan-vibration jitter (2 px, 8 Hz)
      views.forEach((v, i) => {
        const entry = heatRef.current[i];
        if (!entry) return;
        if (!entry.bmp) {
          entry.bmp = document.createElement("canvas");
          entry.bmp.width = entry.img.width;
          entry.bmp.height = entry.img.height;
        }
        const bctx = entry.bmp.getContext("2d");
        if (!bctx) return;
        bctx.putImageData(entry.img, 0, 0);
        let jx = 0, jy = 0;
        if (sim.faults["fan-vibration"] && !reduced) {
          jx = 2 * Math.sin(sim.simTime * 2 * Math.PI * 8);
          jy = 2 * Math.cos(sim.simTime * 2 * Math.PI * 8 + 1.3);
        }
        ctx.save();
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(entry.bmp, v.x0 + jx, jy, v.w, h);
        ctx.restore();
      });

      // chamber outline
      for (const v of views) {
        ctx.save();
        ctx.strokeStyle = "#2c3d52";
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(v.cx, v.cy, CHAMBER_R_MM * v.scale, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      if (p.showGrid) views.forEach((v) => drawGrid(v, h));

      // blinding-aware labels
      const revealed = sim.blinding.revealed;
      const slotLabel = (slot: number) => {
        if (!revealed) return slot === 0 ? "P1" : "P2";
        return sim.blinding.labelToSlot.A === slot ? "A" : "B";
      };

      // spheres
      if (p.compareAB) {
        views.forEach((v, i) =>
          drawSphere(v, centers[i], { label: slotLabel(i) }),
        );
      } else {
        centers.forEach((c, i) => {
          if (i === p.activePos) return;
          drawSphere(views[0], c, { ghost: true, label: slotLabel(i), active: false });
        });
        drawSphere(views[0], centers[p.activePos], { label: slotLabel(p.activePos) });
      }

      // compare divider
      if (p.compareAB) {
        ctx.save();
        ctx.strokeStyle = "#1e2a38";
        ctx.beginPath(); ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h); ctx.stroke();
        ctx.restore();
      }

      // section line at probe height
      if (p.sectionLine) {
        for (const v of views) {
          const py = v.cy - p.probe.y * v.scale;
          ctx.save();
          ctx.strokeStyle = "rgba(157,141,241,0.6)";
          ctx.setLineDash([6, 4]);
          ctx.beginPath(); ctx.moveTo(v.x0, py); ctx.lineTo(v.x0 + v.w, py); ctx.stroke();
          ctx.setLineDash([]);
          ctx.restore();
        }
      }

      // markers
      for (const m of p.markers) {
        const v = views[0];
        const px = v.cx + m.x * v.scale;
        const py = v.cy - m.y * v.scale;
        const slice = Math.floor(sim.simTime * 10);
        const a = valueAt(m.x, m.y, centers[p.activePos].x, centers[p.activePos].y, sim.simTime, 0, 0, slice, 1);
        ctx.save();
        ctx.strokeStyle = "#f0b64c";
        ctx.fillStyle = "#f0b64c";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(px, py - 6); ctx.lineTo(px + 6, py); ctx.lineTo(px, py + 6); ctx.lineTo(px - 6, py);
        ctx.closePath(); ctx.stroke();
        ctx.font = "9px 'JetBrains Mono', monospace";
        ctx.textAlign = "left";
        ctx.fillText(`${m.id} · A ${a.toFixed(3)}`, px + 9, py + 3);
        ctx.restore();
      }

      // probe trail
      if (p.trail) {
        const tr = trailRef.current;
        const last = tr[tr.length - 1];
        if (!last || Math.hypot(last.x - p.probe.x, last.y - p.probe.y) > 3) {
          tr.push({ x: p.probe.x, y: p.probe.y, t: performance.now() });
          if (tr.length > 60) tr.shift();
        }
        const v = views[0];
        ctx.save();
        for (const tp of tr) {
          const age = (performance.now() - tp.t) / 6000;
          if (age > 1) continue;
          ctx.fillStyle = `rgba(45,212,200,${(1 - age) * 0.4})`;
          ctx.beginPath();
          ctx.arc(v.cx + tp.x * v.scale, v.cy - tp.y * v.scale, 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      } else if (trailRef.current.length) {
        trailRef.current = [];
      }

      // probe crosshair + anchored readout line (per view in compare mode)
      views.forEach((v, vi) => {
        const slot = p.compareAB ? vi : p.activePos;
        const c = centers[slot];
        const px = v.cx + p.probe.x * v.scale;
        const py = v.cy - p.probe.y * v.scale;
        const r = Math.hypot(p.probe.x - c.x, p.probe.y - c.y);
        const slice = Math.floor(sim.simTime * 10);
        const a = valueAt(p.probe.x, p.probe.y, c.x, c.y, sim.simTime, 0, 0, slice, 1);
        const phase = probePhaseDeg(r, sim.simTime);
        ctx.save();
        ctx.strokeStyle = "#2dd4c8";
        ctx.lineWidth = 1.2;
        ctx.shadowColor = "rgba(45,212,200,0.8)";
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.moveTo(px - 11, py); ctx.lineTo(px + 11, py);
        ctx.moveTo(px, py - 11); ctx.lineTo(px, py + 11);
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.font = "10px 'JetBrains Mono', monospace";
        ctx.textAlign = "left";
        const label = `r = ${r.toFixed(1)} mm · A = ${a.toFixed(3)} (rel.) · phase ${phase.toFixed(0)}°`;
        const tx = Math.min(px + 14, v.x0 + v.w - ctx.measureText(label).width - 8);
        const ty = py - 14 < 12 ? py + 22 : py - 12;
        ctx.fillStyle = "rgba(5,8,13,0.75)";
        ctx.fillRect(tx - 4, ty - 11, ctx.measureText(label).width + 8, 15);
        ctx.fillStyle = "#d9e2ec";
        ctx.fillText(label, tx, ty);
        ctx.restore();
      });

      // dead-state label
      if (!driving) {
        ctx.save();
        ctx.fillStyle = "rgba(75,91,110,0.9)";
        ctx.font = "11px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        const msg =
          sim.power !== "FACILITY_ON"
            ? "FACILITY OFF / NO VACUUM — nothing to see"
            : "NO DRIVE — nothing to see";
        ctx.fillText(msg, views[0].cx, 26);
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* -------- pointer interaction -------- */

  const pickViewAndWorld = (e: React.PointerEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;
    const p = propsRef.current;
    const viewIdx = p.compareAB ? (px < w / 2 ? 0 : 1) : 0;
    const x0 = viewIdx * (w / 2);
    const vw = p.compareAB ? w / 2 : w;
    const scale = Math.min(vw, h) / (2 * VIEW_R_MM);
    const cx = x0 + vw / 2;
    const cy = h / 2;
    return {
      wx: (px - cx) / scale,
      wy: (cy - py) / scale,
      px,
      py,
      scale,
      cx,
      cy,
    };
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const hit = pickViewAndWorld(e);
    if (!hit) return;
    const p = propsRef.current;
    // grab marker?
    for (const m of p.markers) {
      if (Math.hypot(m.x - hit.wx, m.y - hit.wy) * hit.scale < 12) {
        dragRef.current = { kind: "marker", id: m.id };
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        return;
      }
    }
    // grab probe?
    if (Math.hypot(p.probe.x - hit.wx, p.probe.y - hit.wy) * hit.scale < 14) {
      dragRef.current = { kind: "probe" };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      return;
    }
    // plain click moves the probe
    dragRef.current = { kind: "probe" };
    p.onProbeChange({ x: Math.round(hit.wx * 10) / 10, y: Math.round(hit.wy * 10) / 10 });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d) return;
    const hit = pickViewAndWorld(e);
    if (!hit) return;
    const p = propsRef.current;
    const x = Math.round(hit.wx * 10) / 10;
    const y = Math.round(hit.wy * 10) / 10;
    if (d.kind === "probe") p.onProbeChange({ x, y });
    else if (d.id) p.onMarkerMove(d.id, x, y);
  };

  const onPointerUp = () => {
    dragRef.current = null;
  };

  return (
    <div ref={wrapRef} className="relative">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", minHeight: 480, display: "block", cursor: "crosshair", touchAction: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      />
    </div>
  );
}

const FieldExplorerCanvas = memo(FieldExplorerCanvasInner);
export default FieldExplorerCanvas;
