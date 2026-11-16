import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bookmark, Download, FlaskConical, Play } from "lucide-react";
import Panel from "@/components/shared/Panel";
import StatusLED from "@/components/shared/StatusLED";
import GradedBadge from "@/components/shared/GradedBadge";
import Tooltip from "@/components/shared/Tooltip";
import Knob from "@/components/shared/Knob";
import { ToggleSwitch } from "@/components/shared/ToggleSwitch";
import SweepPlot from "@/components/vna/SweepPlot";
import type { VnaMarker } from "@/components/vna/SweepPlot";
import ResidualsPlot from "@/components/vna/ResidualsPlot";
import { readVnaRefPlugged } from "@/components/reference/outs";
import {
  computeQuality,
  fitSweep,
  formatPressure,
  synthesizeSweep,
  simActions,
  useSim,
  QUALITY_PRESSURE_HPA,
} from "@/sim/store";
import type { FitResult, Grade, SweepData } from "@/sim/store";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const POINTS_OPTIONS = [201, 401, 801, 1601];
const IF_BWS = [10, 100, 1000];
const SPANS_KHZ = [0.5, 1, 2, 5, 10, 20, 40];
const F_MIN = 200;
const F_MAX = 260;
const PINS_KEY = "resonance-lab-notebook-pins";

function useVnaRefPlugged(): boolean {
  const [plugged, setPlugged] = useState(readVnaRefPlugged);
  useEffect(() => {
    const id = window.setInterval(() => setPlugged(readVnaRefPlugged()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return plugged;
}

/** 400 ms count-up tween on fit value changes. */
function CountUp({ value, decimals, className }: { value: number; decimals: number; className?: string }) {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);
  useEffect(() => {
    const from = prevRef.current;
    const to = value;
    prevRef.current = value;
    if (from === to) return;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / 400);
      const e = 1 - Math.pow(1 - t, 3);
      setDisplay(from + (to - from) * e);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <span className={className}>{display.toFixed(decimals)}</span>;
}

const rise = (i: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.25, ease: EASE, delay: i * 0.06 },
});

type CalStandard = "open" | "short" | "load";
const CAL_ORDER: CalStandard[] = ["open", "short", "load"];

export default function Vna() {
  const params = useSim((s) => s.vnaParams);
  const sweeping = useSim((s) => s.sweeping);
  const sweepProgress = useSim((s) => s.sweepProgress);
  const lastSweep = useSim((s) => s.lastSweep);
  const lastFit = useSim((s) => s.lastFit);
  const calibrated = useSim((s) => s.vnaCalibrated);
  const power = useSim((s) => s.power);
  const pressure = useSim((s) => s.pressure);
  const temperature = useSim((s) => s.temperature);
  const clock = useSim((s) => s.clock);
  const thermalStable = useSim((s) => s.thermalStable);
  const quality = useSim(computeQuality);
  const refPlugged = useVnaRefPlugged();

  // local UI state
  const [m1, setM1] = useState<number | null>(null);
  const [m2, setM2] = useState<number | null>(null);
  const [showPrev, setShowPrev] = useState(true);
  const [prevSweep, setPrevSweep] = useState<SweepData | null>(null);
  const [revealSweep, setRevealSweep] = useState<SweepData | null>(null);
  const [manualFit, setManualFit] = useState<FitResult | null>(null);
  const [fitHistory, setFitHistory] = useState<number[]>([]);
  const [startText, setStartText] = useState(params.startKHz.toFixed(3));
  const [stopText, setStopText] = useState(params.stopKHz.toFixed(3));
  const [notice, setNotice] = useState<string | null>(null);

  // calibration wizard state
  const [calDone, setCalDone] = useState<Record<CalStandard, boolean>>({ open: false, short: false, load: false });
  const [calRunning, setCalRunning] = useState<CalStandard | null>(null);
  const [calProg, setCalProg] = useState(0);

  const fit = manualFit ?? lastFit;
  const extRefLost = !refPlugged;
  // EXT-REF LOST degrades f₀ uncertainty ×20 (reference page teaching consequence)
  const effF0Sigma = fit ? fit.f0Sigma * (extRefLost ? 20 : 1) : 0;

  const facilityOn = power === "FACILITY_ON";
  const sweepTime = Math.min(4, Math.max(2, (params.points / params.ifBwHz) * 10));

  // synthesized preview trace for the animated draw while the sim sweeps
  const wasSweeping = useRef(false);
  useEffect(() => {
    if (sweeping && !wasSweeping.current) {
      setRevealSweep(synthesizeSweep(useSim.getState(), useSim.getState().vnaParams));
    }
    if (!sweeping && wasSweeping.current) setRevealSweep(null);
    wasSweeping.current = sweeping;
  }, [sweeping]);

  // keep the previous completed sweep for the dimmed compare overlay
  const lastTakenAt = lastSweep?.takenAt;
  const prevTakenRef = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (lastTakenAt !== undefined && lastTakenAt !== prevTakenRef.current) {
      const prior = prevSweepRef.current;
      if (prior && prior.takenAt !== lastTakenAt) setPrevSweep(prior);
      prevTakenRef.current = lastTakenAt;
      setManualFit(null);
    }
    prevSweepRef.current = lastSweep;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastTakenAt]);
  const prevSweepRef = useRef<SweepData | null>(null);

  // fit history (for drift note)
  const fitKey = fit ? fit.takenAt * 1e6 + fit.f0 : 0;
  useEffect(() => {
    if (fit && !fitHistory.includes(fitKey)) setFitHistory((h) => [...h, fitKey]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fitKey]);

  // warn on real page unload mid-sweep
  useEffect(() => {
    if (!sweeping) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [sweeping]);

  const flashNotice = (msg: string) => {
    setNotice(msg);
    window.setTimeout(() => setNotice(null), 2600);
  };

  /* ---------------- marker handling ---------------- */

  const markers: VnaMarker[] = useMemo(() => {
    const list: VnaMarker[] = [];
    if (m1 !== null) list.push({ id: "M1", xKHz: m1, color: "#f0b64c" });
    if (m2 !== null) list.push({ id: "M2", xKHz: m2, color: "#5aa2f0" });
    return list;
  }, [m1, m2]);

  const snapToLocalMin = useCallback(
    (xKHz: number): number => {
      const sw = useSim.getState().lastSweep;
      if (!sw) return xKHz;
      // magnetic snap: local S11 minimum within 1 kHz
      let best = xKHz;
      let bestDb = Infinity;
      for (let i = 0; i < sw.freqs.length; i++) {
        const fk = sw.freqs[i] / 1000;
        if (Math.abs(fk - xKHz) <= 1 && sw.s11[i] < bestDb) {
          bestDb = sw.s11[i];
          best = fk;
        }
      }
      return best;
    },
    [],
  );

  const handleMarkerMove = useCallback(
    (id: string, xKHz: number) => {
      const [x0, x1] = lastSweep
        ? [lastSweep.params.startKHz, lastSweep.params.stopKHz]
        : [params.startKHz, params.stopKHz];
      const clamped = Math.max(x0, Math.min(x1, xKHz));
      const snapped = snapToLocalMin(clamped);
      if (id === "M1") setM1(snapped);
      else setM2(snapped);
    },
    [lastSweep, params.startKHz, params.stopKHz, snapToLocalMin],
  );

  const autoSeekMin = () => {
    if (!lastSweep) return;
    let iMin = 0;
    for (let i = 1; i < lastSweep.s11.length; i++)
      if (lastSweep.s11[i] < lastSweep.s11[iMin]) iMin = i;
    setM1(lastSweep.freqs[iMin] / 1000);
  };

  /* ---------------- sweep param helpers ---------------- */

  const center = (params.startKHz + params.stopKHz) / 2;
  const span = params.stopKHz - params.startKHz;

  const setCenterSpan = (c: number, sp: number) => {
    let s0 = c - sp / 2;
    let s1 = c + sp / 2;
    if (s0 < F_MIN) {
      s1 += F_MIN - s0;
      s0 = F_MIN;
    }
    if (s1 > F_MAX) {
      s0 -= s1 - F_MAX;
      s1 = F_MAX;
    }
    s0 = Math.max(F_MIN, s0);
    s1 = Math.min(F_MAX, s1);
    simActions.setVnaParams({ startKHz: s0, stopKHz: s1 });
    setStartText(s0.toFixed(3));
    setStopText(s1.toFixed(3));
  };

  const commitStart = () => {
    const v = parseFloat(startText);
    if (isFinite(v)) {
      const s0 = Math.max(F_MIN, Math.min(v, params.stopKHz - 0.5));
      setCenterSpan(s0 + span / 2, params.stopKHz - s0);
    } else setStartText(params.startKHz.toFixed(3));
  };
  const commitStop = () => {
    const v = parseFloat(stopText);
    if (isFinite(v)) {
      const s1 = Math.min(F_MAX, Math.max(v, params.startKHz + 0.5));
      setCenterSpan(params.startKHz + (s1 - params.startKHz) / 2, s1 - params.startKHz);
    } else setStopText(params.stopKHz.toFixed(3));
  };

  /* ---------------- calibration wizard ---------------- */

  const runCalStandard = (std: CalStandard) => {
    if (calRunning) return;
    setCalRunning(std);
    setCalProg(0);
    const start = performance.now();
    const id = window.setInterval(() => {
      const t = (performance.now() - start) / 2000;
      if (t >= 1) {
        window.clearInterval(id);
        setCalDone((d) => ({ ...d, [std]: true }));
        setCalRunning(null);
        setCalProg(0);
      } else setCalProg(t);
    }, 50);
  };

  const calReady = CAL_ORDER.every((k) => calDone[k]);
  const doCalibrate = () => {
    simActions.calibrateVna();
    if (useSim.getState().vnaCalibrated) flashNotice("Calibration stored — session flag set");
  };

  /* ---------------- actions ---------------- */

  const doFit = () => {
    if (!lastSweep) return;
    const f = fitSweep(useSim.getState(), lastSweep);
    setManualFit(f);
    flashNotice("Fit updated — weighted Lorentzian, 1 iteration");
  };

  const exportCsv = () => {
    if (!lastSweep) return;
    const header = [
      "# RESONANCE LAB — VNA S11 sweep export (educational simulator, not a real measurement)",
      "# Physics is idealized and energy-conserving: S11 is always <= 0 dB (passive device).",
      `# taken_at_s,${lastSweep.takenAt.toFixed(1)}`,
      `# start_khz,${lastSweep.params.startKHz}`,
      `# stop_khz,${lastSweep.params.stopKHz}`,
      `# points,${lastSweep.params.points}`,
      `# if_bw_hz,${lastSweep.params.ifBwHz}`,
      `# calibrated,${calibrated}`,
      `# pressure_hpa,${pressure}`,
      `# temperature_c,${temperature.toFixed(3)}`,
      `# clock,${clock}`,
      "freq_hz,s11_db",
    ];
    const rows = lastSweep.freqs.map((f, i) => `${f.toFixed(1)},${lastSweep.s11[i].toFixed(4)}`);
    const blob = new Blob([header.join("\n") + "\n" + rows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `resonance-lab-s11-${Math.round(lastSweep.takenAt)}s.csv`;
    a.click();
    URL.revokeObjectURL(url);
    flashNotice("CSV exported");
  };

  const saveToNotebook = () => {
    if (!fit) return;
    const pin = {
      t: useSim.getState().simTime,
      type: "vna-fit",
      text: `VNA fit — f₀ ${(fit.f0 / 1000).toFixed(3)} kHz ± ${effF0Sigma.toFixed(1)} Hz, Q ${Math.round(fit.q).toLocaleString()} ± ${Math.round(fit.qSigma)}, depth ${fit.depthDb.toFixed(1)} dB (${calibrated ? "CAL" : "UNCAL"})`,
    };
    try {
      const raw = localStorage.getItem(PINS_KEY);
      const pins = raw ? (JSON.parse(raw) as unknown[]) : [];
      pins.push(pin);
      localStorage.setItem(PINS_KEY, JSON.stringify(pins));
      flashNotice("Pinned to Notebook");
    } catch {
      flashNotice("Notebook pin failed — storage unavailable");
    }
  };

  const sendToRuns = (label: "A" | "B") => {
    const run = simActions.recordRun(label);
    flashNotice(
      run
        ? `Run #${run.id} recorded at position ${label} — ${run.valid ? "VALID" : "INVALID"}`
        : "Run rejected — no fit available",
    );
  };

  /* ---------------- derived display values ---------------- */

  const fitNum = fit ? fitHistory.indexOf(fitKey) + 1 : 0;
  const prevFitKey = fitNum >= 2 ? fitHistory[fitNum - 2] : null;
  const prevFitF0 = prevFitKey !== null ? prevFitKey % 1e6 : null;

  const localGrade: Grade = useMemo(() => {
    if (!fit) return "INVALID";
    if (!quality.valid) return "INVALID";
    const s = effF0Sigma;
    if (s < 2) return "S";
    if (s < 5) return "A";
    if (s < 15) return "B";
    return "C";
  }, [fit, quality.valid, effF0Sigma]);

  const q = fit?.q ?? 0;
  const qContext = pressure < QUALITY_PRESSURE_HPA ? "vacuum · high-Q" : "air loading · Q≈6k";

  return (
    <div className="p-4 md:p-6">
      <div className="grid grid-cols-12 gap-4">
        {/* header row */}
        <motion.div {...rise(0)} className="col-span-12 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
              VNA Analysis
            </h1>
            <p className="mt-1 font-mono text-[11px] text-faint">
              S11 reflection sweep · breathing mode · passive device (S11 ≤ 0 dB, always)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <StatusLED state={calibrated ? "on" : "warn"} label={calibrated ? "CAL" : "UNCAL"} />
            <StatusLED
              state={extRefLost ? "fault" : "on"}
              label={extRefLost ? "EXT-REF LOST" : "EXT REF"}
            />
            {sweeping && <StatusLED state="warn" label={`SWEEPING ${(sweepProgress * 100).toFixed(0)}%`} />}
          </div>
        </motion.div>

        {/* main plot */}
        <motion.div {...rise(1)} className="col-span-12 lg:col-span-8">
          <Panel title="S11 — reflection magnitude" accent="trace" bezel pad={false}>
            <SweepPlot
              markers={markers}
              onMarkerMove={handleMarkerMove}
              prevSweep={prevSweep}
              showPrev={showPrev}
              fit={fit}
              revealSweep={revealSweep}
              height={440}
            />
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line px-4 py-2">
              <div className="flex items-center gap-4 font-mono text-[10px] text-faint">
                <span>
                  {params.startKHz.toFixed(3)}–{params.stopKHz.toFixed(3)} kHz · {params.points} pts · IF {params.ifBwHz} Hz
                </span>
                {!calibrated && <span className="text-warn">UNCALIBRATED — f₀ carries fixture offset</span>}
              </div>
              <ToggleSwitch on={showPrev} onChange={setShowPrev} label="compare prev" />
            </div>
          </Panel>
        </motion.div>

        {/* right rail: control stack */}
        <div className="col-span-12 flex flex-col gap-4 lg:col-span-4">
          {/* SWEEP */}
          <motion.div {...rise(2)}>
            <Panel title="Sweep" accent="trace">
              <div className="grid grid-cols-2 gap-2">
                <label className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">start (kHz)</span>
                  <input
                    value={startText}
                    onChange={(e) => setStartText(e.target.value)}
                    onBlur={commitStart}
                    onKeyDown={(e) => e.key === "Enter" && commitStart()}
                    className="rounded-sm border border-line bg-void px-2 py-1.5 font-mono text-sm text-ink outline-none focus:border-trace/60"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">stop (kHz)</span>
                  <input
                    value={stopText}
                    onChange={(e) => setStopText(e.target.value)}
                    onBlur={commitStop}
                    onKeyDown={(e) => e.key === "Enter" && commitStop()}
                    className="rounded-sm border border-line bg-void px-2 py-1.5 font-mono text-sm text-ink outline-none focus:border-trace/60"
                  />
                </label>
              </div>

              <div className="mt-3 flex items-start justify-around">
                <div className="flex flex-col items-center gap-1">
                  <Knob
                    value={center}
                    min={F_MIN + span / 2}
                    max={F_MAX - span / 2}
                    detents={25}
                    onChange={(v) => setCenterSpan(v, span)}
                    label="center"
                    size={52}
                  />
                  <span className="font-mono text-[10px] text-dim">{center.toFixed(2)} kHz</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Knob
                    value={SPANS_KHZ.reduce((b, v, i) => (Math.abs(v - span) < Math.abs(SPANS_KHZ[b] - span) ? i : b), 0)}
                    min={0}
                    max={SPANS_KHZ.length - 1}
                    detents={SPANS_KHZ.length}
                    onChange={(i) => setCenterSpan(center, SPANS_KHZ[Math.round(i)])}
                    label="span"
                    size={52}
                  />
                  <span className="font-mono text-[10px] text-dim">{span.toFixed(2)} kHz</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Knob
                    value={IF_BWS.indexOf(params.ifBwHz)}
                    min={0}
                    max={IF_BWS.length - 1}
                    detents={IF_BWS.length}
                    onChange={(i) => simActions.setVnaParams({ ifBwHz: IF_BWS[Math.round(i)] })}
                    label="IF BW"
                    size={52}
                  />
                  <span className="font-mono text-[10px] text-dim">{params.ifBwHz} Hz</span>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <div className="flex gap-1">
                  {POINTS_OPTIONS.map((p) => (
                    <button
                      key={p}
                      onClick={() => simActions.setVnaParams({ points: p })}
                      className={cn(
                        "rounded-sm border px-2 py-1 font-mono text-[10px]",
                        params.points === p
                          ? "border-trace/60 bg-trace/15 text-trace"
                          : "border-line bg-void text-dim hover:border-line-bright",
                      )}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <span className="font-mono text-[10px] text-faint">sweep ≈ {sweepTime.toFixed(1)} s</span>
              </div>

              <div className="mt-3">
                <Tooltip
                  content={
                    !facilityOn
                      ? "Facility power required"
                      : clock !== "LOCKED"
                        ? "Sweep runs, but an unlocked reference inflates σ×5"
                        : "Start S11 sweep"
                  }
                >
                  <button
                    onClick={() => simActions.startSweep()}
                    disabled={!facilityOn || sweeping}
                    className={cn(
                      "flex w-full items-center justify-center gap-2 rounded-sm border px-3 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.16em] transition-all",
                      facilityOn && !sweeping
                        ? "border-trace/70 bg-trace/20 text-trace hover:bg-trace/30 active:scale-[0.98]"
                        : "cursor-not-allowed border-line bg-panel-2 text-faint",
                    )}
                  >
                    <Play size={13} strokeWidth={1.5} />
                    {sweeping ? `Sweeping… ${(sweepProgress * 100).toFixed(0)}%` : "Sweep"}
                  </button>
                </Tooltip>
              </div>

              <div className="mt-3 space-y-1.5 border-t border-line pt-3">
                {[
                  { ok: facilityOn, label: "facility power" },
                  { ok: clock === "LOCKED", label: "10 MHz reference locked" },
                  { ok: pressure < QUALITY_PRESSURE_HPA, label: "pressure < 1×10⁻³ hPa" },
                  { ok: thermalStable, label: "thermal stable" },
                ].map((g) => (
                  <div key={g.label} className="flex items-center gap-2">
                    <StatusLED state={g.ok ? "on" : "warn"} />
                    <span className={cn("font-mono text-[10px]", g.ok ? "text-dim" : "text-warn")}>{g.label}</span>
                  </div>
                ))}
              </div>
            </Panel>
          </motion.div>

          {/* CALIBRATION */}
          <motion.div {...rise(3)}>
            <Panel title="Calibration — 1-port" accent="trace-2">
              <p className="mb-3 text-xs leading-relaxed text-dim">
                Calibration removes the cables from the measurement. Skip it and your f₀ is everyone
                else&apos;s f₀.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {CAL_ORDER.map((std) => (
                  <button
                    key={std}
                    onClick={() => runCalStandard(std)}
                    disabled={!facilityOn || calRunning !== null || calDone[std]}
                    className={cn(
                      "relative overflow-hidden rounded-sm border px-2 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-all",
                      calDone[std]
                        ? "border-go/50 bg-go/10 text-go"
                        : calRunning === std
                          ? "border-trace-2/60 bg-trace-2/10 text-trace-2"
                          : facilityOn
                            ? "border-line-bright bg-void text-dim hover:text-ink active:scale-[0.97]"
                            : "cursor-not-allowed border-line text-faint",
                    )}
                  >
                    {calRunning === std && (
                      <span
                        className="absolute inset-y-0 left-0 bg-trace-2/15"
                        style={{ width: `${calProg * 100}%` }}
                      />
                    )}
                    <span className="relative">{std}</span>
                  </button>
                ))}
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex gap-3">
                  {CAL_ORDER.map((std) => (
                    <StatusLED key={std} state={calDone[std] ? "on" : calRunning === std ? "warn" : "off"} label={std} />
                  ))}
                </div>
              </div>
              <button
                onClick={doCalibrate}
                disabled={!calReady || calibrated || !facilityOn || clock !== "LOCKED"}
                className={cn(
                  "mt-3 w-full rounded-sm border px-3 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.14em] transition-all",
                  calibrated
                    ? "border-go/50 bg-go/10 text-go"
                    : calReady && facilityOn && clock === "LOCKED"
                      ? "border-trace-2/70 bg-trace-2/15 text-trace-2 hover:bg-trace-2/25 active:scale-[0.98]"
                      : "cursor-not-allowed border-line bg-panel-2 text-faint",
                )}
              >
                {calibrated ? "Calibrated ✓" : "Calibrate"}
              </button>
              {calReady && !calibrated && clock !== "LOCKED" && (
                <p className="mt-2 font-mono text-[10px] text-warn">
                  INTERLOCK — reference must be LOCKED to store a cal.
                </p>
              )}
            </Panel>
          </motion.div>

          {/* MARKERS & FIT */}
          <motion.div {...rise(4)}>
            <Panel title="Markers & fit" accent="trace">
              <div className="flex items-center gap-4">
                <ToggleSwitch on={m1 !== null} onChange={(on) => setM1(on ? (params.startKHz + params.stopKHz) / 2 : null)} label="M1" />
                <ToggleSwitch on={m2 !== null} onChange={(on) => setM2(on ? (params.startKHz + params.stopKHz) / 2 + 0.5 : null)} label="M2" />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  onClick={autoSeekMin}
                  disabled={!lastSweep}
                  className="rounded-sm border border-line-bright bg-void px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-dim transition-colors hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Auto-seek min
                </button>
                <button
                  onClick={doFit}
                  disabled={!lastSweep || sweeping}
                  className="rounded-sm border border-trace/60 bg-trace/10 px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-trace transition-colors hover:bg-trace/20 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Fit resonance
                </button>
              </div>
              <p className="mt-2 font-mono text-[9px] text-faint">weighted Lorentzian, 1 iteration</p>
              {notice && (
                <p className="mt-2 rounded-sm border border-line-bright bg-panel-2 px-2 py-1 font-mono text-[10px] text-trace">
                  {notice}
                </p>
              )}
            </Panel>
          </motion.div>
        </div>

        {/* results band */}
        <motion.div {...rise(5)} className="col-span-12">
          <Panel title="Fit results" accent="go">
            {!fit ? (
              <p className="py-6 text-center font-mono text-[11px] text-faint">
                No sweep yet — power up the facility, lock the reference, calibrate, then sweep.
              </p>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {/* f0 */}
                  <div className="rounded-sm border border-line bg-panel-2 p-3 panel-inset">
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
                      f₀ {fitNum > 0 && <span className="text-faint">(fit {fitNum})</span>}
                    </p>
                    <p className="mt-1 font-mono text-2xl font-bold tabular-nums text-ink readout-glow">
                      <CountUp value={fit.f0 / 1000} decimals={3} />
                      <span className="ml-1 text-[10px] font-normal text-faint">kHz</span>
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] text-dim">
                      ± {effF0Sigma.toFixed(1)} Hz σ
                      {extRefLost && <span className="text-bad"> · EXT-REF LOST ×20</span>}
                    </p>
                    {prevFitF0 !== null && (
                      <p className="mt-0.5 font-mono text-[10px] text-faint">
                        {fit.f0 - prevFitF0 >= 0 ? "+" : ""}
                        {((fit.f0 - prevFitF0) / 1000).toFixed(3)} kHz since fit {fitNum - 1}
                      </p>
                    )}
                  </div>

                  {/* Q */}
                  <div className="rounded-sm border border-line bg-panel-2 p-3 panel-inset">
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">quality factor</p>
                    <p className="mt-1 font-mono text-2xl font-bold tabular-nums text-ink readout-glow">
                      {Math.round(q).toLocaleString()}
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] text-dim">± {Math.round(fit.qSigma).toLocaleString()}</p>
                    <span
                      className={cn(
                        "mt-1 inline-block rounded-full border px-2 py-0.5 font-mono text-[9px]",
                        pressure < QUALITY_PRESSURE_HPA
                          ? "border-trace/50 text-trace"
                          : "border-trace-2/50 text-trace-2",
                      )}
                    >
                      {qContext}
                    </span>
                  </div>

                  {/* conditions */}
                  <div className="rounded-sm border border-line bg-panel-2 p-3 panel-inset">
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">conditions at fit</p>
                    <ul className="mt-1 space-y-1 font-mono text-[10px] text-dim">
                      <li>
                        p <span className="text-ink">{formatPressure(pressure)}</span>
                      </li>
                      <li>
                        T <span className="text-ink">{temperature.toFixed(3)} °C</span>
                      </li>
                      <li>
                        CLK <span className={clock === "LOCKED" ? "text-go" : "text-warn"}>{clock}</span>
                      </li>
                      <li>
                        POS <span className="text-ink">?</span> <span className="text-faint">(blinded)</span>
                      </li>
                    </ul>
                  </div>

                  {/* quality */}
                  <div className="rounded-sm border border-line bg-panel-2 p-3 panel-inset">
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">measurement quality</p>
                    <div className="mt-1.5">
                      <GradedBadge grade={localGrade} />
                    </div>
                    {quality.valid ? (
                      <p className="mt-1.5 font-mono text-[9px] text-go">all gates pass</p>
                    ) : (
                      <ul className="mt-1.5 space-y-0.5">
                        {quality.reasons.slice(0, 3).map((r) => (
                          <li key={r} className="font-mono text-[9px] leading-snug text-bad">
                            · {r}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* residuals */}
                <div className="mt-4 rounded-sm border border-line bg-panel-2 panel-inset">
                  <ResidualsPlot sweep={lastSweep} fit={fit} height={120} />
                  <p className="border-t border-line px-3 py-1.5 font-mono text-[10px] text-faint">
                    Residuals should look like weather, not like a curve.
                  </p>
                </div>

                {/* actions */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <button
                    onClick={saveToNotebook}
                    className="flex items-center gap-1.5 rounded-sm border border-line-bright bg-void px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-dim transition-colors hover:text-ink"
                  >
                    <Bookmark size={12} strokeWidth={1.5} /> Save to Notebook
                  </button>
                  <div className="flex items-center gap-1 rounded-sm border border-line-bright bg-void px-2 py-1">
                    <FlaskConical size={12} strokeWidth={1.5} className="text-dim" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">Send to Runs:</span>
                    {(["A", "B"] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => sendToRuns(l)}
                        className="rounded-sm border border-line px-2 py-0.5 font-mono text-[10px] text-trace-2 transition-colors hover:border-trace-2/60"
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={exportCsv}
                    className="flex items-center gap-1.5 rounded-sm border border-line-bright bg-void px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-dim transition-colors hover:text-ink"
                  >
                    <Download size={12} strokeWidth={1.5} /> Export CSV
                  </button>
                </div>
              </>
            )}
          </Panel>
        </motion.div>
      </div>
    </div>
  );
}
