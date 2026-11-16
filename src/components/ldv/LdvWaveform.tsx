import { memo, useEffect, useRef } from "react";
import { CanvasPlot } from "@/components/shared";
import type { PlotTrace } from "@/components/shared";
import { useSim } from "@/sim/store";
import { useDrive } from "@/components/field/driveStore";
import { surfaceVelocityNmS, ldvNoiseNmS } from "@/components/field/physics";

/**
 * Surface-velocity waveform (ldv.md): phase-locked ("triggered") sine whose
 * amplitude follows drive × resonance enhancement × local sensitivity.
 * Trace data is synthesized at rAF from live sim state — no React re-renders.
 */
function LdvWaveformInner({
  sensitivity,
  focus01,
  beamLive,
}: {
  sensitivity: number;
  focus01: number;
  beamLive: boolean;
}) {
  const propsRef = useRef({ sensitivity, focus01, beamLive });
  useEffect(() => {
    propsRef.current = { sensitivity, focus01, beamLive };
  });
  const phaseRef = useRef(0);

  const getTraces = (): PlotTrace[] => {
    const p = propsRef.current;
    const sim = useSim.getState();
    const drive = useDrive.getState();
    const live = p.beamLive && drive.on && sim.power === "FACILITY_ON";
    const vel = surfaceVelocityNmS(sim, drive, p.sensitivity);
    const noise = ldvNoiseNmS(sim, p.focus01);

    const N = 256;
    const xs: number[] = [];
    const ys: number[] = [];

    // trigger stability: locked clock → phase-locked; otherwise slow drift
    const locked = sim.clock === "LOCKED";
    if (!locked) phaseRef.current += 0.02;
    // fan vibration: 8 Hz jitter bursts on the zero crossings
    const jitter = sim.faults["fan-vibration"] ? 0.05 * Math.sin(sim.simTime * 2 * Math.PI * 8) : 0;

    for (let i = 0; i < N; i++) {
      const cyc = (i / (N - 1)) * 2; // two cycles across the screen
      xs.push(cyc);
      let y = 0;
      if (live) y = vel * Math.sin(2 * Math.PI * (cyc + jitter) + phaseRef.current);
      y += (Math.random() * 2 - 1) * noise;
      ys.push(y);
    }
    return [
      { id: "vel", color: "trace", data: { x: xs, y: ys }, width: 1.5 },
    ];
  };

  // amplitude-scaled fixed domain so the trace doesn't pump the autoscale
  const sim = useSim.getState();
  const drive = useDrive.getState();
  const amp = surfaceVelocityNmS(sim, drive, propsRef.current.sensitivity);
  const noise = ldvNoiseNmS(sim, propsRef.current.focus01);
  const yMax = Math.max(1, amp * 1.4 + noise * 5);

  return (
    <CanvasPlot
      getTraces={getTraces}
      xLabel="cyc"
      yLabel="nm/s"
      xFormat={(v) => v.toFixed(2)}
      yFormat={(v) => v.toFixed(1)}
      xDomain={[0, 2]}
      yDomain={[-yMax, yMax]}
      height={160}
    />
  );
}

const LdvWaveform = memo(LdvWaveformInner);
export default LdvWaveform;
