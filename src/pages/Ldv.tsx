import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Crosshair,
  Focus,
  NotebookPen,
  Play,
  ScanLine,
  ShieldAlert,
  Square,
  Wand2,
} from "lucide-react";
import { Panel, Readout, StatusLED, ToggleSwitch, Modal } from "@/components/shared";
import type { LedState } from "@/components/shared";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useSim, formatSessionTime } from "@/sim/store";
import TargetingCanvas from "@/components/ldv/TargetingCanvas";
import type { AimPoint } from "@/components/ldv/TargetingCanvas";
import LdvWaveform from "@/components/ldv/LdvWaveform";
import LdvSpectrum from "@/components/ldv/LdvSpectrum";
import type { PeakInfo } from "@/components/ldv/LdvSpectrum";
import ScanMap from "@/components/ldv/ScanMap";
import type { ScanResult } from "@/components/ldv/ScanMap";
import { useDrive } from "@/components/field/driveStore";
import { liveF0Hz, surfaceVelocityNmS, ldvNoiseNmS, sensitivityForTheta } from "@/components/field/physics";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const panelAnim = (i: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.25, ease: EASE, delay: i * 0.06 },
});

const NOTEBOOK_INBOX_KEY = "resonance-lab-inbox-v1";

interface Advisory {
  id: number;
  text: string;
  tone: "warn" | "bad" | "go";
}

let advisorySeq = 1;

export default function Ldv() {
  const power = useSim((s) => s.power);
  const lastFit = useSim((s) => s.lastFit);
  // 2 Hz refresh for panel readouts
  useSim((s) => Math.floor(s.tickCount / 5));
  const drive = useDrive();

  /* ---------------- targeting state ---------------- */
  const [aim, setAim] = useState<AimPoint>({ theta: 24, phi: 118, r: Math.sin((24 * Math.PI) / 180), onDisc: true });
  const [focus, setFocus] = useState(72);
  const [searching, setSearching] = useState(false);
  const searchTimer = useRef<number | undefined>(undefined);
  const [advisories, setAdvisories] = useState<Advisory[]>([]);

  const pushAdvisory = useCallback((text: string, tone: Advisory["tone"] = "warn") => {
    const id = advisorySeq++;
    setAdvisories((a) => [...a.slice(-3), { id, text, tone }]);
    window.setTimeout(() => setAdvisories((l) => l.filter((a2) => a2.id !== id)), 4500);
  }, []);

  const onAim = useCallback(
    (a: AimPoint, snapped: boolean) => {
      setAim(a);
      setSearching(true);
      window.clearTimeout(searchTimer.current);
      searchTimer.current = window.setTimeout(() => setSearching(false), 350);
      if (snapped) pushAdvisory("Beam off-target — velocity signal lost", "bad");
    },
    [pushAdvisory],
  );

  /* ---------------- interlocks ---------------- */
  const [shutterOpen, setShutterOpen] = useState(false);
  const [laserArmed, setLaserArmed] = useState(false);
  const [armConfirm, setArmConfirm] = useState(false);
  const beamLive = shutterOpen && laserArmed;

  /* ---------------- spectrum / peak ---------------- */
  const [peakHold, setPeakHold] = useState(false);
  const [peak, setPeak] = useState<PeakInfo | null>(null);
  const [sentNote, setSentNote] = useState(false);

  /* ---------------- scan state ---------------- */
  const [scanN, setScanN] = useState<5 | 9 | 15>(9);
  const [scanning, setScanning] = useState<{ n: number; idx: number; values: number[]; t0: number } | null>(null);
  const [scans, setScans] = useState<ScanResult[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [completedAt, setCompletedAt] = useState(0);
  const scanSeq = useRef(1);

  /* ---------------- auto-focus (1.5 s sweep to minimum noise) ---------------- */
  const [autoFocusing, setAutoFocusing] = useState(false);
  const autoFocus = () => {
    if (autoFocusing) return;
    setAutoFocusing(true);
    const from = focus;
    const to = 96;
    const t0 = performance.now();
    const step = () => {
      const t = Math.min(1, (performance.now() - t0) / 1500);
      const e = 1 - Math.pow(1 - t, 3);
      setFocus(from + (to - from) * e);
      if (t < 1) requestAnimationFrame(step);
      else {
        setAutoFocusing(false);
        pushAdvisory("Auto-focus settled at minimum noise", "go");
      }
    };
    requestAnimationFrame(step);
  };

  /* ---------------- scan engine ---------------- */
  // refs so the scan interval reads fresh values without restarting
  const focusRef = useRef(focus);
  focusRef.current = focus;
  const beamLiveRef = useRef(beamLive);
  beamLiveRef.current = beamLive;

  useEffect(() => {
    if (!scanning) return;
    const id = window.setInterval(() => {
      setScanning((cur) => {
        if (!cur) return null;
        const sim = useSim.getState();
        const drv = useDrive.getState();
        const n = cur.n;
        const i = cur.idx % n;
        const j = Math.floor(cur.idx / n);
        const u = -1 + (2 * (i + 0.5)) / n;
        const v = -1 + (2 * (j + 0.5)) / n;
        const r = Math.hypot(u, v);
        const values = cur.values.slice();
        if (r > 1) {
          values[cur.idx] = NaN;
        } else {
          const sens = Math.cos(Math.asin(Math.min(1, r)));
          const amp = surfaceVelocityNmS(sim, drv, sens);
          const noise = ldvNoiseNmS(sim, focusRef.current / 100);
          // measured amplitude: signal + rectified noise; beam blocked → noise only
          values[cur.idx] = beamLiveRef.current
            ? amp + Math.abs((Math.random() * 2 - 1) * noise)
            : Math.abs((Math.random() * 2 - 1) * noise);
        }
        const nextIdx = cur.idx + 1;
        if (nextIdx >= n * n) {
          const finite = values.filter((x) => !Number.isNaN(x));
          const scan: ScanResult = {
            id: scanSeq.current++,
            n,
            values,
            maxV: Math.max(...finite, 1e-9),
            takenAt: formatSessionTime(sim.simTime),
            f0kHz: liveF0Hz(sim) / 1000,
          };
          setScans((ss) => {
            const next = [...ss, scan].slice(-3);
            setActiveTab(next.length - 1);
            return next;
          });
          setCompletedAt(performance.now());
          pushAdvisory(`Surface scan complete — ${n}×${n} grid, ${(n * n * 0.4).toFixed(0)} s`, "go");
          return null;
        }
        return { ...cur, idx: nextIdx, values };
      });
    }, 400);
    return () => window.clearInterval(id);
  }, [scanning, pushAdvisory]);

  // refs are declared above the scan effect
  const startScan = () => {
    if (scanning) return;
    setScanning({ n: scanN, idx: 0, values: new Array(scanN * scanN).fill(NaN), t0: performance.now() });
  };
  const cancelScan = () => {
    setScanning(null);
    pushAdvisory("Surface scan cancelled", "warn");
  };

  const scanSpot = useMemo(() => {
    if (!scanning) return null;
    const n = scanning.n;
    const i = scanning.idx % n;
    const j = Math.floor(scanning.idx / n);
    return { x: -1 + (2 * (i + 0.5)) / n, y: -1 + (2 * (j + 0.5)) / n };
  }, [scanning]);

  /* ---------------- derived live values ---------------- */
  const sim = useSim.getState();
  const sens = sensitivityForTheta(aim.theta);
  const velPk = surfaceVelocityNmS(sim, drive, sens);
  const noise = ldvNoiseNmS(sim, focus / 100);
  const f0 = liveF0Hz(sim);
  const measuring = beamLive && drive.on && power === "FACILITY_ON";
  const velRms = velPk / Math.SQRT2;
  const dispPm = measuring && f0 > 0 ? (velPk / (2 * Math.PI * f0)) * 1000 : 0; // nm → pm
  const driftWarn = focus < 60 || sim.faults["fan-vibration"] || sim.pressure > 1;
  const corr = measuring ? Math.max(0, Math.min(0.9999, velPk / (velPk + 2.2 * noise))) : null;

  // beam state LED
  const beamState: { state: LedState; label: string } = !beamLive
    ? { state: "standby", label: "BEAM OFF" }
    : searching
      ? { state: "warn", label: "SEARCHING" }
      : aim.onDisc
        ? { state: "on", label: "ON TARGET" }
        : { state: "fault", label: "OFF TARGET" };

  // LDV-vs-VNA corroboration check
  const mismatch =
    measuring &&
    lastFit &&
    peak &&
    peak.vNmS > 3 * noise &&
    Math.abs(peak.fHz - lastFit.f0) > 3 * Math.max(lastFit.f0Sigma, 0.5);

  const sendPeakToNotebook = () => {
    if (!peak) return;
    try {
      const prev = JSON.parse(localStorage.getItem(NOTEBOOK_INBOX_KEY) ?? "[]") as unknown[];
      prev.push({
        type: "ldv-peak",
        f0Hz: Math.round(peak.fHz * 10) / 10,
        velocityNmS: Math.round(peak.vNmS * 10) / 10,
        takenAt: formatSessionTime(sim.simTime),
        note: "LDV velocity-spectrum peak (corroborates VNA fit)",
      });
      localStorage.setItem(NOTEBOOK_INBOX_KEY, JSON.stringify(prev.slice(-50)));
      setSentNote(true);
      window.setTimeout(() => setSentNote(false), 2500);
      pushAdvisory("Peak sent to Notebook", "go");
    } catch {
      pushAdvisory("Notebook handoff failed — storage unavailable", "bad");
    }
  };

  const etaS = scanning ? (scanning.n * scanning.n - scanning.idx) * 0.4 : 0;

  return (
    <div className="p-4 md:p-6">
      {/* header */}
      <motion.div {...panelAnim(0)} className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
            LDV Scanner
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-dim">
            Laser Doppler vibrometer — non-contact surface-velocity readout. Aim the beam, map the
            breathing mode, and corroborate the VNA fit with an independent sensor.
          </p>
        </div>
        <StatusLED state={beamState.state} label={beamState.label} />
      </motion.div>

      {/* advisory chips */}
      {advisories.length > 0 && (
        <div className="pointer-events-none fixed right-4 top-16 z-40 flex flex-col items-end gap-1.5">
          {advisories.map((a) => (
            <div
              key={a.id}
              className={cn(
                "rounded-sm border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] backdrop-blur-sm",
                a.tone === "bad" && "border-bad/60 bg-bad/15 text-bad",
                a.tone === "warn" && "border-warn/60 bg-warn/15 text-warn",
                a.tone === "go" && "border-go/60 bg-go/15 text-go",
              )}
            >
              {a.text}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-12 gap-4">
        {/* -------- left: targeting -------- */}
        <motion.div {...panelAnim(1)} className="col-span-12 lg:col-span-5">
          <Panel
            title="Targeting — sphere face-on"
            accent="trace"
            bezel
            pad={false}
            right={
              <span className="font-mono text-[10px] text-faint">
                θ {aim.theta.toFixed(0)}° · φ {aim.phi.toFixed(0)}°
              </span>
            }
          >
            <TargetingCanvas
              aim={aim}
              onAim={onAim}
              focus={focus}
              beamLive={beamLive}
              scanning={!!scanning}
              scanSpot={scanSpot}
            />
            <div className="border-t border-line p-4">
              <div className="grid grid-cols-3 gap-3">
                <Readout label="θ from normal" value={aim.theta.toFixed(0)} unit="deg" size="sm" />
                <Readout label="φ azimuth" value={aim.phi.toFixed(0)} unit="deg" size="sm" />
                <Readout
                  label="Sensitivity"
                  value={sens.toFixed(2)}
                  unit="× cos θ"
                  size="sm"
                  tone={sens > 0.85 ? "go" : sens > 0.5 ? "ink" : "warn"}
                />
              </div>
              <p className="mt-2 font-mono text-[10px] leading-relaxed text-faint">
                Breathing mode: sensitivity falls as cos θ from disc center — maximum at the pole,
                zero at the rim.
              </p>
              {/* focus control */}
              <div className="mt-4">
                <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] text-faint">
                  <span className="flex items-center gap-1.5 uppercase tracking-[0.14em]">
                    <Focus size={11} strokeWidth={1.5} />
                    Focus
                  </span>
                  <span className="text-ink">{focus.toFixed(0)}%</span>
                </div>
                <Slider
                  value={[focus]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={([v]) => setFocus(v)}
                  disabled={autoFocusing}
                  className="[&_[data-slot=slider-thumb]]:border-trace [&_[data-slot=slider-thumb]]:bg-trace [&_[data-slot=slider-range]]:bg-trace [&_[data-slot=slider-track]]:bg-line"
                />
                <div className="mt-2 flex items-center justify-between">
                  <button
                    onClick={autoFocus}
                    disabled={autoFocusing}
                    className="flex items-center gap-1.5 rounded-sm border border-line-bright bg-panel-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-dim transition-colors hover:border-trace hover:text-trace disabled:opacity-40"
                  >
                    <Wand2 size={11} strokeWidth={1.5} />
                    {autoFocusing ? "Focusing…" : "Auto-focus"}
                  </button>
                  {focus < 60 && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-warn">
                      Signal noisy — check focus
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Panel>
        </motion.div>

        {/* -------- right: signals -------- */}
        <div className="col-span-12 flex flex-col gap-4 lg:col-span-7">
          {/* mini stack: interlocks + readouts */}
          <motion.div {...panelAnim(2)} className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Panel
              title="Interlocks"
              accent="go"
              right={<ShieldAlert size={12} strokeWidth={1.5} className="text-faint" />}
            >
              <div className="flex flex-col gap-2.5">
                <ToggleSwitch on={shutterOpen} onChange={setShutterOpen} label="Viewport shutter" />
                <ToggleSwitch
                  on={laserArmed}
                  onChange={(on) => (on ? setArmConfirm(true) : setLaserArmed(false))}
                  label="Laser armed"
                />
                <StatusLED state={laserArmed ? "warn" : "off"} label={laserArmed ? "Laser live" : "Laser safe"} />
              </div>
              <p className="mt-3 rounded-sm border border-line bg-void px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-faint">
                Simulated laser — no eye hazards were harmed
              </p>
            </Panel>

            <Panel title="Readouts" accent="trace" right={<Crosshair size={12} strokeWidth={1.5} className="text-faint" />}>
              <div className="grid grid-cols-2 gap-3">
                <Readout
                  label="Velocity pk"
                  value={measuring ? velPk.toFixed(1) : "—"}
                  unit="nm/s"
                  size="sm"
                  tone={measuring ? "trace" : "dim"}
                />
                <Readout
                  label="Velocity RMS"
                  value={measuring ? velRms.toFixed(1) : "—"}
                  unit="nm/s"
                  size="sm"
                />
                <Readout
                  label="Displacement est."
                  value={measuring ? dispPm.toFixed(1) : "—"}
                  unit="pm"
                  size="sm"
                  tone={driftWarn ? "warn" : "ink"}
                />
                <Readout
                  label="Corr. vs drive"
                  value={corr !== null ? corr.toFixed(3) : "—"}
                  unit="ρ"
                  size="sm"
                  tone={corr !== null && corr > 0.8 ? "go" : "dim"}
                />
              </div>
              {driftWarn && measuring && (
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.1em] text-warn">
                  Drift warning — integrating noise degrades the displacement estimate
                </p>
              )}
            </Panel>
          </motion.div>

          {/* waveform */}
          <motion.div {...panelAnim(3)}>
            <Panel
              title="Surface velocity — triggered sweep"
              accent="trace"
              pad={false}
              right={
                <span className="font-mono text-[10px] text-faint">
                  {measuring ? `${velPk.toFixed(1)} nm/s pk @ ${(f0 / 1000).toFixed(3)} kHz` : "idle"}
                </span>
              }
            >
              <div className="relative p-3">
                <LdvWaveform sensitivity={sens} focus01={focus / 100} beamLive={beamLive} />
                {!measuring && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="rounded-sm border border-line bg-void/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                      {!beamLive ? "Beam blocked" : "Drive off"}
                    </span>
                  </div>
                )}
              </div>
            </Panel>
          </motion.div>

          {/* spectrum */}
          <motion.div {...panelAnim(4)}>
            <Panel
              title="Velocity spectrum"
              accent="trace"
              pad={false}
              right={
                <div className="flex items-center gap-3">
                  <ToggleSwitch on={peakHold} onChange={setPeakHold} label="Peak hold" />
                  <button
                    onClick={sendPeakToNotebook}
                    disabled={!peak || !measuring}
                    className={cn(
                      "flex items-center gap-1.5 rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                      sentNote
                        ? "border-go/60 bg-go/15 text-go"
                        : "border-line-bright bg-panel-2 text-dim hover:border-trace hover:text-trace",
                    )}
                  >
                    <NotebookPen size={11} strokeWidth={1.5} />
                    {sentNote ? "Sent" : "Send peak to Notebook"}
                  </button>
                </div>
              }
            >
              <div className="p-3">
                <LdvSpectrum
                  sensitivity={sens}
                  focus01={focus / 100}
                  beamLive={beamLive}
                  peakHold={peakHold}
                  onPeak={setPeak}
                />
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[11px] text-dim">
                    {measuring && peak ? (
                      <>
                        fpeak <span className="text-ink">{(peak.fHz / 1000).toFixed(3)} kHz</span>
                        {" · "}
                        <span className="text-ink">{peak.vNmS.toFixed(1)} nm/s</span> pk
                      </>
                    ) : (
                      <span className="text-faint">fpeak — · — nm/s</span>
                    )}
                  </span>
                  {lastFit && (
                    <span className="font-mono text-[10px] text-faint">
                      VNA f₀ {(lastFit.f0 / 1000).toFixed(3)} kHz ± {lastFit.f0Sigma.toFixed(1)} Hz
                    </span>
                  )}
                </div>
                {mismatch && (
                  <p className="mt-2 rounded-sm border border-warn/50 bg-warn/10 px-2 py-1.5 font-mono text-[10px] leading-relaxed text-warn">
                    MISMATCH — LDV peak disagrees with the VNA fit (&gt;3σ). The LDV corroborates,
                    never replaces, the VNA f₀. Ask the Copilot about clock lock, focus, and scan
                    point sensitivity.
                  </p>
                )}
              </div>
            </Panel>
          </motion.div>
        </div>

        {/* -------- bottom: scan map -------- */}
        <motion.div {...panelAnim(5)} className="col-span-12">
          <Panel
            title="Surface scan — breathing-mode map"
            accent="copper"
            bezel
            pad={false}
            right={
              <div className="flex items-center gap-2">
                {scans.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveTab(i)}
                    className={cn(
                      "rounded-sm border px-2 py-0.5 font-mono text-[10px] transition-colors",
                      i === activeTab
                        ? "border-trace/60 bg-trace/15 text-trace"
                        : "border-line bg-void text-faint hover:text-dim",
                    )}
                  >
                    #{s.id} {s.n}×{s.n}
                  </button>
                ))}
              </div>
            }
          >
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <ScanMap
                  scan={scanning ? { id: 0, n: scanning.n, values: scanning.values, maxV: Math.max(...scanning.values.filter((v) => !Number.isNaN(v)), 1e-9), takenAt: "", f0kHz: f0 / 1000 } : scans[activeTab] ?? null}
                  inProgress={!!scanning}
                  progressIdx={scanning?.idx ?? 0}
                  completedAt={completedAt}
                />
              </div>
              <div className="flex flex-col gap-4 border-t border-line p-4 lg:border-l lg:border-t-0">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                    Grid density
                  </span>
                  <div className="mt-1.5 flex gap-1">
                    {([5, 9, 15] as const).map((n) => (
                      <button
                        key={n}
                        onClick={() => setScanN(n)}
                        disabled={!!scanning}
                        className={cn(
                          "flex-1 rounded-sm border px-2 py-1 font-mono text-[11px] transition-colors disabled:opacity-40",
                          scanN === n
                            ? "border-copper/70 bg-copper/15 text-copper"
                            : "border-line bg-void text-faint hover:text-dim",
                        )}
                      >
                        {n}×{n}
                      </button>
                    ))}
                  </div>
                </div>
                {scanning ? (
                  <div>
                    <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] text-faint">
                      <span>
                        Point {scanning.idx + 1}/{scanning.n * scanning.n}
                      </span>
                      <span>ETA {etaS.toFixed(0)} s</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-void">
                      <div
                        className="h-full rounded-full bg-trace transition-[width] duration-300"
                        style={{ width: `${(100 * scanning.idx) / (scanning.n * scanning.n)}%` }}
                      />
                    </div>
                    <button
                      onClick={cancelScan}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-sm border border-bad/60 bg-bad/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-bad transition-colors hover:bg-bad/20"
                    >
                      <Square size={11} strokeWidth={1.5} />
                      Cancel scan
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={startScan}
                    disabled={power !== "FACILITY_ON"}
                    className="flex w-full items-center justify-center gap-2 rounded-sm border border-line-bright bg-panel-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-dim transition-colors hover:border-trace hover:text-trace disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {scans.length ? <ScanLine size={11} strokeWidth={1.5} /> : <Play size={11} strokeWidth={1.5} />}
                    Run surface scan
                  </button>
                )}
                {scans[activeTab] && !scanning && (
                  <div className="font-mono text-[10px] leading-relaxed text-faint">
                    <p>
                      Scan #{scans[activeTab].id} · {scans[activeTab].takenAt} · f₀{" "}
                      {scans[activeTab].f0kHz.toFixed(3)} kHz
                    </p>
                    <p>peak {scans[activeTab].maxV.toFixed(1)} nm/s at disc center</p>
                  </div>
                )}
                <p className="mt-auto text-[11px] italic leading-relaxed text-faint">
                  A mode shape is a map of where the motion lives. This one lives everywhere equally
                  — that's what "breathing" means.
                </p>
              </div>
            </div>
          </Panel>
        </motion.div>
      </div>

      {/* laser arm confirm */}
      <Modal open={armConfirm} onClose={() => setArmConfirm(false)} title="Arm LDV laser">
        <p className="text-sm leading-relaxed text-dim">
          Arm the vibrometer laser? In a real bay this enables a Class 3B beam path to the chamber
          viewport. Here it only enables the simulated signal chain.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => setArmConfirm(false)}
            className="rounded-sm border border-line bg-void px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-dim transition-colors hover:text-ink"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setLaserArmed(true);
              setArmConfirm(false);
              pushAdvisory("LDV laser armed — simulated beam live", "warn");
            }}
            className="rounded-sm border border-warn/60 bg-warn/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-warn transition-colors hover:bg-warn/25"
          >
            Arm laser
          </button>
        </div>
      </Modal>
    </div>
  );
}
