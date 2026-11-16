import { memo, useEffect, useRef } from "react";
import { CanvasPlot } from "@/components/shared";
import type { PlotTrace, PlotMarker } from "@/components/shared";
import { useSim } from "@/sim/store";
import { useDrive } from "@/components/field/driveStore";
import { liveF0Hz, liveQ, surfaceVelocityNmS, ldvNoiseNmS } from "@/components/field/physics";

const SPAN_HZ = 600; // ±Hz around live f0
const NPTS = 320;

export interface PeakInfo {
  fHz: number;
  vNmS: number;
}

/**
 * Velocity spectrum (ldv.md): Lorentzian peak at the live f₀ with linewidth
 * f₀/Q, noise-floor shelf, RF-interference comb spurs, peak-hold envelope.
 */
function LdvSpectrumInner({
  sensitivity,
  focus01,
  beamLive,
  peakHold,
  onPeak,
}: {
  sensitivity: number;
  focus01: number;
  beamLive: boolean;
  peakHold: boolean;
  onPeak: (p: PeakInfo) => void;
}) {
  const propsRef = useRef({ sensitivity, focus01, beamLive, peakHold, onPeak });
  useEffect(() => {
    propsRef.current = { sensitivity, focus01, beamLive, peakHold, onPeak };
  });
  const noiseRef = useRef<Float32Array>(new Float32Array(NPTS));
  const holdRef = useRef<Float32Array>(new Float32Array(NPTS));
  const lastNoiseT = useRef(0);
  const lastPeakCb = useRef(0);

  // re-randomize the noise realization at ~7 Hz so the shelf shimmers calmly
  const refreshNoise = (level: number) => {
    const arr = noiseRef.current;
    for (let i = 0; i < NPTS; i++) arr[i] = Math.abs((Math.random() * 2 - 1) * level);
  };

  useEffect(() => {
    if (!peakHold) holdRef.current = new Float32Array(NPTS);
  }, [peakHold]);

  const getTraces = (): PlotTrace[] => {
    const p = propsRef.current;
    const sim = useSim.getState();
    const drive = useDrive.getState();
    const f0 = liveF0Hz(sim);
    const q = liveQ(sim);
    const gamma = f0 / q; // FWHM Hz
    const live = p.beamLive && drive.on && sim.power === "FACILITY_ON";
    const vpk = surfaceVelocityNmS(sim, drive, p.sensitivity);
    const noise = ldvNoiseNmS(sim, p.focus01);
    const shelf = noise * 0.28;

    const now = performance.now();
    if (now - lastNoiseT.current > 150) {
      refreshNoise(shelf);
      lastNoiseT.current = now;
    }

    const xs: number[] = [];
    const ys: number[] = [];
    let iPk = 0;
    let vPk = -Infinity;
    for (let i = 0; i < NPTS; i++) {
      const f = f0 - SPAN_HZ + (2 * SPAN_HZ * i) / (NPTS - 1);
      xs.push(f);
      let y = shelf * 0.4 + noiseRef.current[i];
      if (live) {
        // Lorentzian amplitude line at f0 (drive sits on resonance)
        const det = f - f0;
        y += vpk * ((gamma / 2) ** 2 / (det * det + (gamma / 2) ** 2)) ** 0.5;
        // RF interference fault → comb spurs
        if (sim.faults["rf-interference"]) {
          for (const off of [-320, -140, 190, 410]) {
            const ds = f - (f0 + off);
            y += vpk * 0.06 * Math.exp(-(ds * ds) / (2 * 3.2 * 3.2));
          }
        }
      }
      ys.push(y);
      if (y > vPk) {
        vPk = y;
        iPk = i;
      }
    }

    const traces: PlotTrace[] = [{ id: "spec", color: "trace", data: { x: xs, y: ys }, width: 1.5 }];

    if (p.peakHold && live) {
      const hold = holdRef.current;
      for (let i = 0; i < NPTS; i++) hold[i] = Math.max(hold[i], ys[i]);
      traces.push({
        id: "hold",
        color: "trace-2",
        data: { x: xs.slice(), y: Array.from(hold) },
        width: 1,
      });
    }

    // report peak at ~2 Hz
    if (now - lastPeakCb.current > 500) {
      lastPeakCb.current = now;
      p.onPeak({ fHz: xs[iPk], vNmS: Math.max(vPk - shelf, 0) });
    }
    return traces;
  };

  const sim = useSim.getState();
  const f0 = liveF0Hz(sim);
  const markers: PlotMarker[] = [{ id: "f₀", x: f0, color: "#f0b64c" }];

  return (
    <CanvasPlot
      getTraces={getTraces}
      xLabel="kHz"
      yLabel="nm/s"
      xFormat={(v) => (v / 1000).toFixed(3)}
      yFormat={(v) => v.toFixed(1)}
      xDomain={[f0 - SPAN_HZ, f0 + SPAN_HZ]}
      yDomain={[0, Math.max(2, surfaceVelocityNmS(sim, useDrive.getState(), propsRef.current.sensitivity) * 1.25)]}
      markers={markers}
      height={160}
    />
  );
}

const LdvSpectrum = memo(LdvSpectrumInner);
export default LdvSpectrum;
