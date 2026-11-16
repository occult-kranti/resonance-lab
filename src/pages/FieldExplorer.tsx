import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Crosshair, MapPin, Trash2, Waves, GraduationCap, Play, Square } from "lucide-react";
import { Panel, Readout, StatusLED, ToggleSwitch } from "@/components/shared";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useSim } from "@/sim/store";
import FieldExplorerCanvas from "@/components/field/FieldCanvas";
import type { FieldMarker, ProbePos } from "@/components/field/FieldCanvas";
import SectionPlot from "@/components/field/SectionPlot";
import { useDrive } from "@/components/field/driveStore";
import { fieldAmplitude, liveF0Hz, liveQ, SPHERE_R_MM, POS_OFFSET_MM } from "@/components/field/physics";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const TIPS = [
  "Double the distance, quarter the amplitude — 1/r².",
  "In air, acoustic loading broadens the resonance: watch Q fall when you vent.",
  "Amplitude peaks exactly at the drive frequency that matches f₀ — sweep and watch the bloom.",
  "The field carries away only a fraction of the drive energy. Nothing here is gained, only stored and returned.",
  "A 40–90 Hz resonance shift between positions is all LOC-1 asks you to detect — that's why runs are blinded.",
];

const panelAnim = (i: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.25, ease: EASE, delay: i * 0.06 },
});

export default function FieldExplorer() {
  const power = useSim((s) => s.power);
  const pressure = useSim((s) => s.pressure);
  const thermalStable = useSim((s) => s.thermalStable);
  const revealed = useSim((s) => s.blinding.revealed);

  const drive = useDrive();

  const [probe, setProbe] = useState<ProbePos>({ x: 95, y: 40 });
  const [markers, setMarkers] = useState<FieldMarker[]>([]);
  const [trail, setTrail] = useState(true);
  const [compareAB, setCompareAB] = useState(false);
  const [activePos, setActivePos] = useState<0 | 1>(0);
  const [contrast, setContrast] = useState(1);
  const [showGrid, setShowGrid] = useState(true);
  const [sectionLine, setSectionLine] = useState(false);
  const [logY, setLogY] = useState(false);
  const [tipIdx, setTipIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTipIdx((i) => (i + 1) % TIPS.length), 8000);
    return () => window.clearInterval(id);
  }, []);

  const sim = useSim.getState();
  // 2 Hz refresh so panel readouts (f₀ drift, amplitudes) stay live
  useSim((s) => Math.floor(s.tickCount / 5));
  const f0 = liveF0Hz(sim);
  const q = liveQ(sim);

  // live probe physics (updated at render cadence; canvas reads its own)
  const centerX = sim.stage.x + (activePos === 0 ? -POS_OFFSET_MM : POS_OFFSET_MM);
  const probeR = Math.hypot(probe.x - centerX, probe.y - sim.stage.y);
  const probeA = fieldAmplitude(sim, drive, probeR, SPHERE_R_MM);
  // ΔA at probe between the two positions (compare mode)
  const r1 = Math.hypot(probe.x - (sim.stage.x - POS_OFFSET_MM), probe.y - sim.stage.y);
  const r2 = Math.hypot(probe.x - (sim.stage.x + POS_OFFSET_MM), probe.y - sim.stage.y);
  const deltaA = Math.abs(
    fieldAmplitude(sim, drive, r1, SPHERE_R_MM) - fieldAmplitude(sim, drive, r2, SPHERE_R_MM),
  );

  const nextMarkerId = useMemo(() => {
    for (let i = 1; i <= 4; i++) {
      if (!markers.some((m) => m.id === `M${i}`)) return `M${i}`;
    }
    return null;
  }, [markers]);

  const dropMarker = () => {
    if (!nextMarkerId) return;
    setMarkers((ms) => [...ms, { id: nextMarkerId, x: probe.x, y: probe.y }]);
  };

  const driveActive = drive.on && power === "FACILITY_ON";
  const enhancementBar = Math.min(
    1,
    // Q-scaled gain indicator, capped — passive response
    (drive.amplitudeV / 10) *
      (1 / Math.sqrt(1 + Math.pow((2 * q * (drive.freqHz - f0)) / f0, 2))),
  );

  return (
    <div className="p-4 md:p-6">
      {/* header */}
      <motion.div {...panelAnim(0)} className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
            Spatial Field Explorer
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-dim">
            Probe the breathing-mode near-field around the sphere. Position matters — this is why
            the A/B runs are blinded.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <StatusLED state={driveActive ? "on" : "standby"} label={driveActive ? "Field live" : "Field idle"} />
          <StatusLED
            state={pressure < 1e-3 ? "on" : pressure < 3 ? "warn" : "off"}
            label={pressure < 1e-3 ? "High vacuum" : pressure < 3 ? "Rough vacuum" : "Air"}
          />
        </div>
      </motion.div>

      <p className="mb-4 max-w-3xl text-[11px] italic leading-relaxed text-faint">
        Visualization of a decaying near-field around a driven, damped resonator. Amplitudes are
        relative, normalized to the drive; the field carries away only a fraction of the input
        energy.
      </p>

      <div className="grid grid-cols-12 gap-4">
        {/* main visualization */}
        <motion.div {...panelAnim(1)} className="col-span-12 lg:col-span-8">
          <Panel
            title="Chamber cross-section — breathing-mode near-field"
            accent="trace"
            bezel
            pad={false}
            right={
              <span className="font-mono text-[10px] text-faint">
                mm grid · A/B spacing schematic (actual 0.40 m)
              </span>
            }
          >
            <div className="relative">
              <FieldExplorerCanvas
                probe={probe}
                onProbeChange={setProbe}
                markers={markers}
                onMarkerMove={(id, x, y) =>
                  setMarkers((ms) => ms.map((m) => (m.id === id ? { ...m, x, y } : m)))
                }
                trail={trail}
                compareAB={compareAB}
                activePos={activePos}
                contrast={contrast}
                showGrid={showGrid}
                sectionLine={sectionLine}
              />
              {/* active position selector (single view) */}
              {!compareAB && (
                <div className="absolute left-3 top-3 flex gap-1">
                  {([0, 1] as const).map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setActivePos(slot)}
                      className={cn(
                        "rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors",
                        activePos === slot
                          ? "border-blue/70 bg-blue/15 text-blue"
                          : "border-line bg-void/70 text-faint hover:text-dim",
                      )}
                    >
                      {revealed ? (sim.blinding.labelToSlot.A === slot ? "A" : "B") : `P${slot + 1}`}
                    </button>
                  ))}
                </div>
              )}
              {compareAB && (
                <div className="absolute right-3 top-3 rounded-sm border border-line-bright bg-void/80 px-2 py-1 font-mono text-[10px] text-dim">
                  ΔA at probe: <span className="text-trace-2">{deltaA.toFixed(3)}</span> rel.
                </div>
              )}
            </div>
            {sectionLine && (
              <div className="border-t border-line p-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                    Section cut @ y = {probe.y.toFixed(1)} mm
                  </span>
                  <ToggleSwitch on={logY} onChange={setLogY} label="log y" />
                </div>
                <SectionPlot y={probe.y} logY={logY} activePos={activePos} />
              </div>
            )}
          </Panel>
        </motion.div>

        {/* right control stack */}
        <div className="col-span-12 flex flex-col gap-4 lg:col-span-4">
          {/* DRIVE */}
          <motion.div {...panelAnim(2)}>
            <Panel title="Drive" accent="trace-2">
              <div className="flex items-center justify-between">
                <ToggleSwitch on={drive.on} onChange={drive.setOn} label={drive.on ? "Drive on" : "Drive off"} />
                <span className="font-mono text-[10px] text-faint">piezo, 0–10 V</span>
              </div>
              <div className="mt-4">
                <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] text-faint">
                  <span className="uppercase tracking-[0.14em]">Amplitude</span>
                  <span className="text-ink">{drive.amplitudeV.toFixed(1)} V</span>
                </div>
                <Slider
                  value={[drive.amplitudeV]}
                  min={0}
                  max={10}
                  step={0.1}
                  onValueChange={([v]) => drive.setAmplitudeV(v)}
                  className="[&_[data-slot=slider-thumb]]:border-trace-2 [&_[data-slot=slider-thumb]]:bg-trace-2 [&_[data-slot=slider-range]]:bg-trace-2 [&_[data-slot=slider-track]]:bg-line"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Readout
                  label="Drive freq"
                  value={(drive.freqHz / 1000).toFixed(3)}
                  unit="kHz"
                  size="sm"
                  tone={drive.chirping ? "warn" : "ink"}
                />
                <Readout label="Live f₀" value={(f0 / 1000).toFixed(3)} unit="kHz" size="sm" tone="trace" live />
              </div>
              <button
                onClick={() => (drive.chirping ? drive.stopChirp() : drive.startChirp())}
                disabled={power !== "FACILITY_ON"}
                className={cn(
                  "mt-4 flex w-full items-center justify-center gap-2 rounded-sm border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                  drive.chirping
                    ? "border-warn/70 bg-warn/15 text-warn"
                    : "border-line-bright bg-panel-2 text-dim hover:border-trace hover:text-trace",
                )}
              >
                {drive.chirping ? <Square size={11} strokeWidth={1.5} /> : <Play size={11} strokeWidth={1.5} />}
                {drive.chirping ? "Stop sweep" : "Sweep through resonance"}
              </button>
              {/* resonance-enhancement bar */}
              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between font-mono text-[10px] text-faint">
                  <span className="uppercase tracking-[0.14em]">Resonance enhancement</span>
                  <span>passive response · Q {Math.round(q).toLocaleString()}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-void">
                  <div
                    className="h-full rounded-full bg-trace transition-[width] duration-150"
                    style={{ width: `${Math.round(enhancementBar * 100)}%` }}
                  />
                </div>
              </div>
            </Panel>
          </motion.div>

          {/* PROBE */}
          <motion.div {...panelAnim(3)}>
            <Panel
              title="Probe"
              accent="trace"
              right={<Crosshair size={12} strokeWidth={1.5} className="text-faint" />}
            >
              <div className="grid grid-cols-2 gap-3">
                <label className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">X (mm)</span>
                  <input
                    type="number"
                    value={probe.x}
                    step={1}
                    onChange={(e) => setProbe((p) => ({ ...p, x: Number(e.target.value) || 0 }))}
                    className="rounded-sm border border-line bg-void px-2 py-1 font-mono text-sm text-ink outline-none focus:border-line-bright"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">Y (mm)</span>
                  <input
                    type="number"
                    value={probe.y}
                    step={1}
                    onChange={(e) => setProbe((p) => ({ ...p, y: Number(e.target.value) || 0 }))}
                    className="rounded-sm border border-line bg-void px-2 py-1 font-mono text-sm text-ink outline-none focus:border-line-bright"
                  />
                </label>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <Readout label="r from sphere" value={probeR.toFixed(1)} unit="mm" size="sm" />
                <Readout
                  label="Amplitude"
                  value={probeA.toFixed(3)}
                  unit="rel."
                  size="sm"
                  tone={driveActive ? "trace" : "dim"}
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <button
                  onClick={dropMarker}
                  disabled={!nextMarkerId}
                  className="flex items-center gap-1.5 rounded-sm border border-line-bright bg-panel-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-dim transition-colors hover:border-trace-2 hover:text-trace-2 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <MapPin size={11} strokeWidth={1.5} />
                  Drop marker {nextMarkerId ?? "(max 4)"}
                </button>
                <ToggleSwitch on={trail} onChange={setTrail} label="Trail" />
              </div>
              {markers.length > 0 && (
                <ul className="mt-3 space-y-1">
                  {markers.map((m) => (
                    <li
                      key={m.id}
                      className="flex items-center justify-between rounded-sm border border-line bg-void px-2 py-1 font-mono text-[10px] text-dim"
                    >
                      <span>
                        <span className="text-trace-2">{m.id}</span> · x {m.x.toFixed(1)} · y {m.y.toFixed(1)} mm
                      </span>
                      <button
                        aria-label={`Delete ${m.id}`}
                        onClick={() => setMarkers((ms) => ms.filter((k) => k.id !== m.id))}
                        className="text-faint transition-colors hover:text-bad"
                      >
                        <Trash2 size={11} strokeWidth={1.5} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </Panel>
          </motion.div>

          {/* VIEW */}
          <motion.div {...panelAnim(4)}>
            <Panel title="View" accent="violet">
              <div className="flex flex-col gap-2.5">
                <ToggleSwitch on={compareAB} onChange={setCompareAB} label="Compare A/B (split view)" />
                <ToggleSwitch on={showGrid} onChange={setShowGrid} label="mm grid" />
                <ToggleSwitch on={sectionLine} onChange={setSectionLine} label="Section line + 1D cut" />
              </div>
              <div className="mt-4">
                <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] text-faint">
                  <span className="uppercase tracking-[0.14em]">Colormap contrast</span>
                  <span className="text-ink">{contrast.toFixed(2)}×</span>
                </div>
                <Slider
                  value={[contrast]}
                  min={0.5}
                  max={2.5}
                  step={0.05}
                  onValueChange={([v]) => setContrast(v)}
                  className="[&_[data-slot=slider-thumb]]:border-violet [&_[data-slot=slider-thumb]]:bg-violet [&_[data-slot=slider-range]]:bg-violet [&_[data-slot=slider-track]]:bg-line"
                />
              </div>
              {!thermalStable && power === "FACILITY_ON" && (
                <p className="mt-3 font-mono text-[10px] text-warn">
                  ADVISORY — chamber not thermally stable; expect slow spatial shimmer.
                </p>
              )}
            </Panel>
          </motion.div>

          {/* LEARN */}
          <motion.div {...panelAnim(5)}>
            <Panel
              title="Learn"
              accent="go"
              right={<GraduationCap size={12} strokeWidth={1.5} className="text-faint" />}
            >
              <div className="flex items-start gap-2">
                <Waves size={13} strokeWidth={1.5} className="mt-0.5 shrink-0 text-go" />
                <p key={tipIdx} className="text-sm leading-relaxed text-dim">
                  {TIPS[tipIdx]}
                </p>
              </div>
              <Link
                to="/learning"
                className="mt-3 inline-block font-mono text-[11px] text-blue transition-colors hover:text-trace"
              >
                Open Learning Paths →
              </Link>
            </Panel>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
