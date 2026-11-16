import { memo, useEffect, useRef } from "react";
import { useSim, trueF0Hz } from "@/sim/store";
import { PLOT_PALETTE } from "@/components/shared/colors";
import { TIMEBASES, VDIVS, fmtSi } from "./model";
import type { Ch1Src, Ch2Src, ScopeMeasurements, ScopeSettings } from "./model";

const N = 1200; // samples per acquisition window
const PAD = { l: 8, r: 26, t: 8, b: 22 };

/** deterministic pseudo-random from a time slot (for dropouts/spikes) */
function hashSlot(n: number): number {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

type Sim = ReturnType<typeof useSim.getState>;

/** CH1 voltage at absolute time t (seconds). */
function ch1At(s: Sim, src: Ch1Src, t: number, f0: number): number {
  if (s.power === "POWER_OFF") return 0;
  const loose = s.faults["loose-cable"];
  const rfi = s.faults["rf-interference"];
  const fan = s.faults["fan-vibration"];
  // loose-cable dropout windows (~6% of time)
  if (loose && hashSlot(Math.floor(t * 23)) < 0.06) return 0;
  let v = 0;
  const w = 2 * Math.PI * f0 * t;
  if (src === "ldv") {
    const mod = fan ? 1 + 0.25 * Math.sin(2 * Math.PI * 37 * t) : 1;
    v = 0.03 * mod * Math.sin(w) + (Math.random() - 0.5) * (fan ? 0.008 : 0.002);
  } else if (src === "drive") {
    v = 0.5 * Math.sin(w) + 0.015 * Math.sin(2 * w) + (Math.random() - 0.5) * 0.004;
  } else {
    // acoustic pickup — in-air only
    if (s.pressure > 100) v = 0.012 * Math.sin(w) + (Math.random() - 0.5) * 0.008;
    else v = (Math.random() - 0.5) * 0.001;
  }
  if (rfi) {
    v += 0.01 * Math.sin(2 * Math.PI * 50e3 * t);
    if (Math.random() < 0.004) v += (Math.random() - 0.5) * 0.3;
  }
  return v;
}

/** CH2 voltage at absolute time t. */
function ch2At(s: Sim, src: Ch2Src, t: number, f0: number): number {
  if (s.power === "POWER_OFF" || src === "off") return 0;
  const rfi = s.faults["rf-interference"];
  let v = 0;
  if (src === "ref") {
    if (s.clock === "COLD") return 0;
    const locked = s.clock === "LOCKED";
    const wander = s.refWanderHz; // holdover fault
    const f = 10e6 + (locked ? wander : 800 * Math.sin(2 * Math.PI * 0.07 * t));
    const phaseJitter = locked ? 0.02 : 0.9 * Math.sin(2 * Math.PI * 0.11 * t);
    const amp = locked ? 0.5 : 0.32 + 0.18 * Math.sin(2 * Math.PI * 0.05 * t + 1);
    v = amp * Math.sin(2 * Math.PI * f * t + phaseJitter);
    if (!locked) v += (Math.random() - 0.5) * 0.05;
  } else {
    // drive monitor
    const w = 2 * Math.PI * f0 * t;
    v = 0.5 * Math.sin(w) + 0.015 * Math.sin(2 * w) + (Math.random() - 0.5) * 0.004;
  }
  if (rfi) {
    v += 0.05 * Math.sin(2 * Math.PI * 50e3 * t);
    if (Math.random() < 0.004) v += (Math.random() - 0.5) * 1.2;
  }
  return v;
}

/**
 * Oscilloscope screen (oscilloscope.md §"Scope screen").
 * 10×8 graticule, dual trace, edge trigger, phosphor persistence, FFT split
 * view, draggable cursors + trigger level. Reads sim via useSim.getState().
 */
function ScopeCanvasInner({
  settings,
  onSettings,
  onMeasurements,
  onTrigger,
  height = 460,
}: {
  settings: ScopeSettings;
  onSettings: (patch: Partial<ScopeSettings>) => void;
  onMeasurements: (m: ScopeMeasurements) => void;
  onTrigger: () => void;
  height?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ settings, onSettings, onMeasurements, onTrigger });
  useEffect(() => {
    stateRef.current = { settings, onSettings, onMeasurements, onTrigger };
  });
  const dragRef = useRef<
    | { kind: "trig" }
    | { kind: "ct"; idx: 0 | 1 }
    | { kind: "cv"; idx: 0 | 1 }
    | null
  >(null);
  const lastMeasRef = useRef(0);
  const lastTrigRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let firstFrame = true;

    const draw = (now: number) => {
      const w = wrap.clientWidth;
      const h = height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        firstFrame = true;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const st = stateRef.current.settings;
      const sim = useSim.getState();
      const f0 = trueF0Hz(sim, "A");
      const tb = TIMEBASES[st.timebaseIdx];
      const T = 10 * tb;
      const dt = T / N;
      const vdiv1 = VDIVS[st.ch1VDivIdx];
      const vdiv2 = VDIVS[st.ch2VDivIdx];
      const fftSplit = st.fft;
      const timeH = fftSplit ? (h - PAD.t - PAD.b) * 0.55 : h - PAD.t - PAD.b;
      const midY = PAD.t + timeH / 2;
      const pxPerV1 = timeH / (8 * vdiv1);
      const pxPerV2 = timeH / (8 * vdiv2);
      const powered = sim.power !== "POWER_OFF";

      // phosphor fade or clear
      if (!st.run && !firstFrame) {
        // frozen: keep previous frame, just overlay graticule + cursors
      } else {
        ctx.fillStyle = st.persistence && !firstFrame ? "rgba(7,11,16,0.32)" : "#070b10";
        ctx.fillRect(0, 0, w, h);
      }
      firstFrame = false;

      const toPxT = (tOff: number) => PAD.l + (tOff / T) * (w - PAD.l - PAD.r);

      // graticule 10×8
      const graticule = (regionH: number, top: number) => {
        ctx.strokeStyle = "rgba(30,42,56,0.7)";
        ctx.lineWidth = 1;
        for (let i = 0; i <= 10; i++) {
          const px = PAD.l + (i / 10) * (w - PAD.l - PAD.r);
          ctx.beginPath();
          ctx.moveTo(px, top);
          ctx.lineTo(px, top + regionH);
          ctx.stroke();
        }
        for (let i = 0; i <= 8; i++) {
          const py = top + (i / 8) * regionH;
          ctx.beginPath();
          ctx.moveTo(PAD.l, py);
          ctx.lineTo(w - PAD.r, py);
          ctx.stroke();
        }
        // center axes brighter
        ctx.strokeStyle = "rgba(44,61,82,0.9)";
        ctx.beginPath();
        ctx.moveTo(PAD.l + 0.5 * (w - PAD.l - PAD.r), top);
        ctx.lineTo(PAD.l + 0.5 * (w - PAD.l - PAD.r), top + regionH);
        ctx.moveTo(PAD.l, top + regionH / 2);
        ctx.lineTo(w - PAD.r, top + regionH / 2);
        ctx.stroke();
      };
      graticule(timeH, PAD.t);

      if (!powered) {
        // standby: dark screen + LED only
        ctx.fillStyle = "rgba(5,8,13,0.85)";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = "#4b5b6e";
        ctx.font = "11px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText("STANDBY — facility power off", w / 2, h / 2);
        ctx.fillStyle = "#8296ab";
        ctx.beginPath();
        ctx.arc(w / 2 - 190, h / 2 - 4, 3, 0, Math.PI * 2);
        ctx.fill();
        raf = requestAnimationFrame(draw);
        return;
      }

      if (st.run) {
        /* ---- trigger search ---- */
        const tNow = sim.simTime;
        const trigFn = (t: number) =>
          st.trigSource === 1 ? ch1At(sim, st.ch1Src, t, f0) : ch2At(sim, st.ch2Src, t, f0);
        let tTrig: number | null = null;
        {
          const coarse = T / 1200;
          let prev = trigFn(tNow - 2 * T) - st.trigLevelV;
          for (let t = tNow - 2 * T + coarse; t <= tNow; t += coarse) {
            const cur = trigFn(t) - st.trigLevelV;
            const cross =
              st.trigEdge === "rising" ? prev < 0 && cur >= 0 : prev > 0 && cur <= 0;
            if (cross) tTrig = t;
            prev = cur;
          }
        }
        let tStart: number;
        if (tTrig !== null) {
          tStart = tTrig - 0.3 * T;
          if (now - lastTrigRef.current > 120) {
            lastTrigRef.current = now;
            stateRef.current.onTrigger();
          }
        } else {
          // Auto free-runs; Normal shows a rolling unsynced trace
          tStart = tNow - T;
        }

        /* ---- acquire + draw channels ---- */
        const ch1 = new Float32Array(N);
        const ch2 = new Float32Array(N);
        for (let i = 0; i < N; i++) {
          const t = tStart + i * dt;
          ch1[i] = ch1At(sim, st.ch1Src, t, f0);
          ch2[i] = ch2At(sim, st.ch2Src, t, f0);
        }

        const drawChannel = (buf: Float32Array, pxPerV: number, color: string) => {
          ctx.strokeStyle = color;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          for (let i = 0; i < N; i++) {
            const px = toPxT(i * dt);
            let py = midY - buf[i] * pxPerV;
            py = Math.max(PAD.t - 4, Math.min(PAD.t + timeH + 4, py));
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.stroke();
        };
        drawChannel(ch1, pxPerV1, PLOT_PALETTE.trace);
        if (st.ch2Src !== "off") drawChannel(ch2, pxPerV2, PLOT_PALETTE["trace-2"]);

        // dropout annotation
        if (sim.faults["loose-cable"] && hashSlot(Math.floor(tNow * 23)) < 0.06) {
          ctx.fillStyle = PLOT_PALETTE.bad;
          ctx.font = "10px 'JetBrains Mono', monospace";
          ctx.textAlign = "center";
          ctx.fillText("NO SIGNAL", w / 2, PAD.t + 14);
        }

        /* ---- FFT split view ---- */
        let fftPeakHz: number | null = null;
        if (fftSplit) {
          const specTop = PAD.t + timeH + 6;
          const specH = h - PAD.b - specTop;
          ctx.strokeStyle = "rgba(44,61,82,0.9)";
          ctx.strokeRect(PAD.l, specTop, w - PAD.l - PAD.r, specH);
          const M = 512;
          const fs = 1 / dt;
          // Hann-windowed DFT magnitudes (skip DC)
          const mags: number[] = [];
          let peakMag = 0;
          let peakBin = 0;
          const halfBins = M / 2;
          for (let k = 1; k < halfBins; k++) {
            let re = 0;
            let im = 0;
            for (let n = 0; n < M; n++) {
              const win = 0.5 - 0.5 * Math.cos((2 * Math.PI * n) / (M - 1));
              const ph = (2 * Math.PI * k * n) / M;
              re += ch1[n] * win * Math.cos(ph);
              im -= ch1[n] * win * Math.sin(ph);
            }
            const mag = Math.sqrt(re * re + im * im) / (M / 4);
            mags.push(mag);
            if (mag > peakMag) {
              peakMag = mag;
              peakBin = k;
            }
          }
          fftPeakHz = (peakBin * fs) / M;
          ctx.strokeStyle = PLOT_PALETTE.trace;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          const maxMag = Math.max(peakMag, 1e-6);
          for (let k = 0; k < mags.length; k++) {
            const px = PAD.l + (k / mags.length) * (w - PAD.l - PAD.r);
            const db = 20 * Math.log10(mags[k] / maxMag + 1e-4);
            const py = specTop + (1 - Math.min(1, Math.max(0, (db + 60) / 60))) * specH;
            if (k === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.stroke();
          ctx.fillStyle = "#8296ab";
          ctx.font = "9px 'JetBrains Mono', monospace";
          ctx.textAlign = "left";
          ctx.fillText(`FFT CH1 · 0–${(fs / 2 / 1e3).toFixed(0)} kHz · peak ${(fftPeakHz / 1e3).toFixed(2)} kHz`, PAD.l + 6, specTop + 12);
        }

        /* ---- measurements @ ~4 Hz ---- */
        if (now - lastMeasRef.current > 250) {
          lastMeasRef.current = now;
          let vmin = Infinity;
          let vmax = -Infinity;
          let sum = 0;
          let sum2 = 0;
          for (let i = 0; i < N; i++) {
            const v = ch1[i];
            if (v < vmin) vmin = v;
            if (v > vmax) vmax = v;
            sum += v;
            sum2 += v * v;
          }
          const mean = sum / N;
          const vrms = Math.sqrt(Math.max(0, sum2 / N - mean * mean));
          // zero-crossing frequency on CH1
          let crossings = 0;
          for (let i = 1; i < N; i++) {
            if (ch1[i - 1] < mean && ch1[i] >= mean) crossings++;
          }
          const freqHz = crossings >= 2 ? crossings / T : null;
          // noise: deviation from 5-point smoothing
          let nsum = 0;
          let ncnt = 0;
          for (let i = 2; i < N - 2; i++) {
            const sm = (ch1[i - 2] + ch1[i - 1] + ch1[i] + ch1[i + 1] + ch1[i + 2]) / 5;
            nsum += (ch1[i] - sm) ** 2;
            ncnt++;
          }
          const noiseMv = Math.sqrt(nsum / Math.max(1, ncnt)) * 1000;
          stateRef.current.onMeasurements({
            freqHz,
            vpp: vmax - vmin,
            vrms,
            noiseMv,
            fftPeakHz,
            refOffsetMHz:
              st.ch2Src === "ref" && sim.clock === "LOCKED"
                ? sim.refWanderHz * 1000 + (Math.random() - 0.5) * 0.4
                : null,
          });
        }
      }

      /* ---- annotations (always, even frozen) ---- */
      ctx.font = "10px 'JetBrains Mono', monospace";
      ctx.textAlign = "left";
      ctx.fillStyle = PLOT_PALETTE.trace;
      const ch1Label =
        st.ch1Src === "ldv" ? "LDV vel" : st.ch1Src === "drive" ? "RF drive" : "Acoustic";
      ctx.fillText(`CH1 ${fmtSi(vdiv1, "V")}/div · ${ch1Label}`, PAD.l + 4, PAD.t + 12);
      if (st.ch2Src !== "off") {
        ctx.fillStyle = PLOT_PALETTE["trace-2"];
        ctx.fillText(
          `CH2 ${fmtSi(vdiv2, "V")}/div · ${st.ch2Src === "ref" ? "10 MHz ref" : "drive mon"}`,
          PAD.l + 4,
          PAD.t + 25,
        );
      }
      ctx.fillStyle = "#8296ab";
      ctx.textAlign = "center";
      ctx.fillText(`${fmtSi(tb, "s")}/div`, PAD.l + (w - PAD.l - PAD.r) / 2, h - 8);
      // undersampling advisory
      {
        const dtNow = T / N;
        const worst = Math.max(f0 * dtNow, st.ch2Src === "ref" ? 10e6 * dtNow : 0);
        if (worst > 0.5) {
          ctx.fillStyle = PLOT_PALETTE["trace-2"];
          ctx.textAlign = "left";
          ctx.fillText("ADVISORY: undersampled — increase timebase", PAD.l + 4, h - 8);
        }
      }

      /* ---- trigger level arrow (right edge) ---- */
      {
        const ppv = st.trigSource === 1 ? pxPerV1 : pxPerV2;
        const py = Math.max(PAD.t, Math.min(PAD.t + timeH, midY - st.trigLevelV * ppv));
        ctx.fillStyle = PLOT_PALETTE["trace-2"];
        ctx.beginPath();
        ctx.moveTo(w - PAD.r + 12, py);
        ctx.lineTo(w - PAD.r + 20, py - 5);
        ctx.lineTo(w - PAD.r + 20, py + 5);
        ctx.closePath();
        ctx.fill();
        ctx.font = "8px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText("T", w - PAD.r + 16, py - 8);
      }

      /* ---- cursors ---- */
      if (st.cursors) {
        ctx.setLineDash([4, 3]);
        ctx.font = "9px 'JetBrains Mono', monospace";
        st.cursorsT.forEach((tc, i) => {
          const px = toPxT(Math.max(0, Math.min(T, tc)));
          ctx.strokeStyle = i === 0 ? "#f0b64c" : "#5aa2f0";
          ctx.beginPath();
          ctx.moveTo(px, PAD.t);
          ctx.lineTo(px, PAD.t + timeH);
          ctx.stroke();
          ctx.fillStyle = i === 0 ? "#f0b64c" : "#5aa2f0";
          ctx.textAlign = "center";
          ctx.fillText(`t${i + 1}`, px, PAD.t + timeH + 10);
        });
        st.cursorsV.forEach((vc, i) => {
          const py = Math.max(PAD.t, Math.min(PAD.t + timeH, midY - vc * pxPerV1));
          ctx.strokeStyle = i === 0 ? "#c47a4a" : "#9d8df1";
          ctx.beginPath();
          ctx.moveTo(PAD.l, py);
          ctx.lineTo(w - PAD.r, py);
          ctx.stroke();
          ctx.fillStyle = i === 0 ? "#c47a4a" : "#9d8df1";
          ctx.textAlign = "left";
          ctx.fillText(`v${i + 1}`, w - PAD.r - 16, py - 3);
        });
        ctx.setLineDash([]);
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [height]);

  /* ---- pointer interaction: trigger arrow + cursors ---- */
  const geom = () => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const st = stateRef.current.settings;
    const tb = TIMEBASES[st.timebaseIdx];
    const T = 10 * tb;
    const timeH = (st.fft ? (rect.height - PAD.t - PAD.b) * 0.55 : rect.height - PAD.t - PAD.b);
    const midY = PAD.t + timeH / 2;
    const pxPerV1 = timeH / (8 * VDIVS[st.ch1VDivIdx]);
    const pxPerV2 = timeH / (8 * VDIVS[st.ch2VDivIdx]);
    return { rect, T, timeH, midY, pxPerV1, pxPerV2 };
  };

  const handleDown = (e: React.PointerEvent) => {
    const g = geom();
    if (!g) return;
    const st = stateRef.current.settings;
    const px = e.clientX - g.rect.left;
    const py = e.clientY - g.rect.top;
    // trigger arrow?
    const ppvT = st.trigSource === 1 ? g.pxPerV1 : g.pxPerV2;
    const trigPy = g.midY - st.trigLevelV * ppvT;
    if (Math.abs(px - (g.rect.width - PAD.r + 16)) < 12 && Math.abs(py - trigPy) < 12) {
      dragRef.current = { kind: "trig" };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      return;
    }
    if (st.cursors) {
      for (const i of [0, 1] as const) {
        const cx = PAD.l + (st.cursorsT[i] / g.T) * (g.rect.width - PAD.l - PAD.r);
        if (Math.abs(px - cx) < 7) {
          dragRef.current = { kind: "ct", idx: i };
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
          return;
        }
      }
      for (const i of [0, 1] as const) {
        const cy = g.midY - st.cursorsV[i] * g.pxPerV1;
        if (Math.abs(py - cy) < 7) {
          dragRef.current = { kind: "cv", idx: i };
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
          return;
        }
      }
    }
  };

  const handleMove = (e: React.PointerEvent) => {
    const g = geom();
    const drag = dragRef.current;
    if (!g || !drag) return;
    const st = stateRef.current.settings;
    const px = e.clientX - g.rect.left;
    const py = e.clientY - g.rect.top;
    if (drag.kind === "trig") {
      const ppv = st.trigSource === 1 ? g.pxPerV1 : g.pxPerV2;
      let v = (g.midY - py) / ppv;
      v = Math.round(v / 0.005) * 0.005; // snap 5 mV
      stateRef.current.onSettings({ trigLevelV: v });
    } else if (drag.kind === "ct") {
      const t = Math.max(0, Math.min(g.T, ((px - PAD.l) / (g.rect.width - PAD.l - PAD.r)) * g.T));
      const c = [...st.cursorsT] as [number, number];
      c[drag.idx] = t;
      stateRef.current.onSettings({ cursorsT: c });
    } else {
      const v = (g.midY - py) / g.pxPerV1;
      const c = [...st.cursorsV] as [number, number];
      c[drag.idx] = v;
      stateRef.current.onSettings({ cursorsV: c });
    }
  };

  return (
    <div ref={wrapRef} className="relative">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height, display: "block", cursor: "crosshair" }}
        onPointerDown={handleDown}
        onPointerMove={handleMove}
        onPointerUp={() => (dragRef.current = null)}
        onPointerLeave={() => (dragRef.current = null)}
      />
    </div>
  );
}

const ScopeCanvas = memo(ScopeCanvasInner);
export default ScopeCanvas;
