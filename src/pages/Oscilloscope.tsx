import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Copy, Zap } from "lucide-react";
import Panel from "@/components/shared/Panel";
import StatusLED from "@/components/shared/StatusLED";
import Knob from "@/components/shared/Knob";
import { ToggleSwitch, RockerButton } from "@/components/shared/ToggleSwitch";
import Sparkline from "@/components/shared/Sparkline";
import ScopeCanvas from "@/components/scope/ScopeCanvas";
import { DEFAULT_SCOPE, TIMEBASES, VDIVS, fmtSi } from "@/components/scope/model";
import type { Ch1Src, Ch2Src, ScopeMeasurements, ScopeSettings } from "@/components/scope/model";
import { useSim } from "@/sim/store";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const SETTINGS_KEY = "resonance-lab-scope-v1";
const PINS_KEY = "resonance-lab-notebook-pins";

const TIPS = [
  "Trigger level sits inside the signal or nothing stabilizes.",
  "Measure ten cycles, divide by ten — your frequency error drops tenfold.",
  "The 10 MHz reference looks boring. Boring is the point.",
];

function loadSettings(): ScopeSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) return { ...DEFAULT_SCOPE, ...(JSON.parse(raw) as Partial<ScopeSettings>) };
  } catch {
    /* fall through */
  }
  return DEFAULT_SCOPE;
}

const rise = (i: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.25, ease: EASE, delay: i * 0.06 },
});

function SegButton({
  active,
  onClick,
  children,
  className,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-sm border px-2 py-1 font-mono text-[10px] transition-colors",
        active
          ? "border-trace/60 bg-trace/15 text-trace"
          : "border-line bg-void text-dim hover:border-line-bright hover:text-ink",
        className,
      )}
    >
      {children}
    </button>
  );
}

export default function Oscilloscope() {
  const [settings, setSettings] = useState<ScopeSettings>(loadSettings);
  const [meas, setMeas] = useState<ScopeMeasurements>({
    freqHz: null,
    vpp: 0,
    vrms: 0,
    noiseMv: 0,
    fftPeakHz: null,
    refOffsetMHz: null,
  });
  const [trigFlash, setTrigFlash] = useState(false);
  const [shutter, setShutter] = useState(false);
  const [tipIdx, setTipIdx] = useState(0);
  const [tipsOpen, setTipsOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const power = useSim((s) => s.power);
  const clock = useSim((s) => s.clock);

  const [hists, setHists] = useState<Record<"freq" | "vpp" | "rms" | "noise", number[]>>({
    freq: [],
    vpp: [],
    rms: [],
    noise: [],
  });

  const patch = useCallback((p: Partial<ScopeSettings>) => {
    setSettings((s) => {
      const next = { ...s, ...p };
      try {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable */
      }
      return next;
    });
  }, []);

  const onMeasurements = useCallback((m: ScopeMeasurements) => {
    setMeas(m);
    setHists((h) => ({
      freq: m.freqHz !== null ? [...h.freq.slice(-119), m.freqHz / 1000] : h.freq,
      vpp: [...h.vpp.slice(-119), m.vpp * 1000],
      rms: [...h.rms.slice(-119), m.vrms * 1000],
      noise: [...h.noise.slice(-119), m.noiseMv],
    }));
  }, []);

  const onTrigger = useCallback(() => {
    setTrigFlash(true);
    window.setTimeout(() => setTrigFlash(false), 90);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setTipIdx((i) => (i + 1) % TIPS.length), 8000);
    return () => window.clearInterval(id);
  }, []);

  const singleShot = () => {
    patch({ run: true });
    window.setTimeout(() => {
      patch({ run: false });
      setShutter(true);
      window.setTimeout(() => setShutter(false), 220);
    }, 400);
  };

  const copyMeasurements = () => {
    const lines = [
      `SCOPE ${new Date().toISOString()}`,
      `CH1 freq ${meas.freqHz ? `${(meas.freqHz / 1000).toFixed(3)} kHz` : "—"}`,
      `Vpp ${(meas.vpp * 1000).toFixed(1)} mV · RMS ${(meas.vrms * 1000).toFixed(1)} mV · noise ${meas.noiseMv.toFixed(2)} mV`,
      meas.refOffsetMHz !== null ? `REF offset ${meas.refOffsetMHz.toFixed(2)} mHz` : null,
      "— RESONANCE LAB educational simulator (not a real measurement device)",
    ].filter(Boolean);
    const text = lines.join("\n");
    try {
      const raw = localStorage.getItem(PINS_KEY);
      const pins = raw ? (JSON.parse(raw) as unknown[]) : [];
      pins.push({ t: useSim.getState().simTime, type: "scope-measurements", text });
      localStorage.setItem(PINS_KEY, JSON.stringify(pins));
    } catch {
      /* storage unavailable */
    }
    void navigator.clipboard?.writeText(text).catch(() => undefined);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const dT = Math.abs(settings.cursorsT[1] - settings.cursorsT[0]);
  const dV = Math.abs(settings.cursorsV[1] - settings.cursorsV[0]);
  const tb = TIMEBASES[settings.timebaseIdx];

  return (
    <div className="p-4 md:p-6">
      <div className="grid grid-cols-12 gap-4">
        <motion.div {...rise(0)} className="col-span-12 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
              Oscilloscope
            </h1>
            <p className="mt-1 font-mono text-[11px] text-faint">
              dual-channel · 10×8 div · the fastest “something is wrong” surface in the lab
            </p>
          </div>
          <div className="flex items-center gap-3">
            <StatusLED state={power !== "POWER_OFF" ? "on" : "standby"} label="PWR" />
            <StatusLED state={trigFlash ? "on" : "off"} label="TRIG" />
            <StatusLED state={clock === "LOCKED" ? "on" : clock === "COLD" ? "off" : "warn"} label="REF" />
          </div>
        </motion.div>

        {/* scope screen */}
        <motion.div {...rise(1)} className="col-span-12 lg:col-span-8">
          <Panel title="Acquisition display" accent="trace" bezel pad={false}>
            <div className="relative">
              <ScopeCanvas
                settings={settings}
                onSettings={patch}
                onMeasurements={onMeasurements}
                onTrigger={onTrigger}
                height={460}
              />
              {shutter && (
                <div className="pointer-events-none absolute inset-0 animate-pulse bg-ink/10" />
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-line px-4 py-2 font-mono text-[10px] text-faint">
              <span>
                trig: CH{settings.trigSource} {settings.trigEdge === "rising" ? "↑" : "↓"}{" "}
                {fmtSi(settings.trigLevelV, "V")} · {settings.trigMode}
              </span>
              {settings.cursors && (
                <span className="text-trace-2">
                  Δt {fmtSi(dT, "s")}
                  {dT > 0 && <> → {(1 / dT / 1000).toFixed(2)} kHz</>} · Δv {fmtSi(dV, "V")}
                </span>
              )}
              <span className="ml-auto">{settings.run ? "RUN" : "STOP"}</span>
            </div>
          </Panel>
        </motion.div>

        {/* control cluster */}
        <div className="col-span-12 flex flex-col gap-4 lg:col-span-4">
          <motion.div {...rise(2)}>
            <Panel title="Horizontal" accent="trace">
              <div className="flex items-center justify-around">
                <div className="flex flex-col items-center gap-1">
                  <Knob
                    value={settings.timebaseIdx}
                    min={0}
                    max={TIMEBASES.length - 1}
                    detents={TIMEBASES.length}
                    onChange={(i) => patch({ timebaseIdx: Math.round(i) })}
                    label="timebase"
                    size={56}
                  />
                  <span className="font-mono text-[10px] text-dim">{fmtSi(tb, "s")}/div</span>
                </div>
                <button
                  onClick={() => patch({ timebaseIdx: 1 })}
                  className="rounded-sm border border-line-bright bg-void px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:text-ink"
                >
                  Fit resonance in view
                  <span className="block text-[9px] text-faint">10 µs/div</span>
                </button>
              </div>
            </Panel>
          </motion.div>

          <motion.div {...rise(3)}>
            <Panel title="Vertical" accent="trace">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center gap-1.5">
                  <Knob
                    value={settings.ch1VDivIdx}
                    min={0}
                    max={VDIVS.length - 1}
                    detents={VDIVS.length}
                    onChange={(i) => patch({ ch1VDivIdx: Math.round(i) })}
                    label="CH1 V/div"
                    size={48}
                  />
                  <span className="font-mono text-[10px] text-trace">{fmtSi(VDIVS[settings.ch1VDivIdx], "V")}/div</span>
                  <div className="flex flex-col gap-1">
                    {(
                      [
                        ["ldv", "LDV velocity"],
                        ["drive", "RF drive mon"],
                        ["acoustic", "Acoustic (air)"],
                      ] as [Ch1Src, string][]
                    ).map(([v, l]) => (
                      <SegButton key={v} active={settings.ch1Src === v} onClick={() => patch({ ch1Src: v })}>
                        {l}
                      </SegButton>
                    ))}
                  </div>
                  <span className="font-mono text-[9px] text-faint">DC 1 MΩ</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Knob
                    value={settings.ch2VDivIdx}
                    min={0}
                    max={VDIVS.length - 1}
                    detents={VDIVS.length}
                    onChange={(i) => patch({ ch2VDivIdx: Math.round(i) })}
                    label="CH2 V/div"
                    size={48}
                  />
                  <span className="font-mono text-[10px] text-trace-2">{fmtSi(VDIVS[settings.ch2VDivIdx], "V")}/div</span>
                  <div className="flex flex-col gap-1">
                    {(
                      [
                        ["ref", "10 MHz reference"],
                        ["drive", "Drive monitor"],
                        ["off", "Off"],
                      ] as [Ch2Src, string][]
                    ).map(([v, l]) => (
                      <SegButton key={v} active={settings.ch2Src === v} onClick={() => patch({ ch2Src: v })}>
                        {l}
                      </SegButton>
                    ))}
                  </div>
                  <span className="font-mono text-[9px] text-faint">DC 1 MΩ</span>
                </div>
              </div>
            </Panel>
          </motion.div>

          <motion.div {...rise(4)}>
            <Panel title="Trigger" accent="trace-2">
              <div className="flex flex-wrap gap-1.5">
                <SegButton active={settings.trigSource === 1} onClick={() => patch({ trigSource: 1 })}>
                  src CH1
                </SegButton>
                <SegButton active={settings.trigSource === 2} onClick={() => patch({ trigSource: 2 })}>
                  src CH2
                </SegButton>
                <SegButton
                  active={settings.trigEdge === "rising"}
                  onClick={() => patch({ trigEdge: "rising" })}
                >
                  rising
                </SegButton>
                <SegButton
                  active={settings.trigEdge === "falling"}
                  onClick={() => patch({ trigEdge: "falling" })}
                >
                  falling
                </SegButton>
                <SegButton active={settings.trigMode === "auto"} onClick={() => patch({ trigMode: "auto" })}>
                  Auto
                </SegButton>
                <SegButton active={settings.trigMode === "normal"} onClick={() => patch({ trigMode: "normal" })}>
                  Normal
                </SegButton>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-mono text-[10px] text-dim">
                  level {fmtSi(settings.trigLevelV, "V")} <span className="text-faint">(drag ▸ on screen)</span>
                </span>
                <button
                  onClick={onTrigger}
                  className="flex items-center gap-1 rounded-sm border border-line-bright bg-void px-2 py-1 font-mono text-[10px] uppercase text-dim hover:text-ink"
                >
                  <Zap size={11} strokeWidth={1.5} /> Force trig
                </button>
              </div>
            </Panel>
          </motion.div>

          <motion.div {...rise(5)}>
            <Panel title="Acquire" accent="trace">
              <div className="flex items-center gap-4">
                <RockerButton
                  on={settings.run}
                  onChange={(on) => patch({ run: on })}
                  label={settings.run ? "Run" : "Stop"}
                />
                <button
                  onClick={singleShot}
                  className="rounded-sm border border-trace/60 bg-trace/10 px-3 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-trace transition-colors hover:bg-trace/20 active:scale-[0.97]"
                >
                  Single
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                <ToggleSwitch on={settings.persistence} onChange={(on) => patch({ persistence: on })} label="persistence" />
                <ToggleSwitch on={settings.fft} onChange={(on) => patch({ fft: on })} label="FFT" />
                <ToggleSwitch on={settings.cursors} onChange={(on) => patch({ cursors: on })} label="cursors" />
              </div>
            </Panel>
          </motion.div>
        </div>

        {/* measurements band */}
        <motion.div {...rise(6)} className="col-span-12">
          <Panel
            title="Measurements"
            accent="trace"
            right={
              <button
                onClick={copyMeasurements}
                className="flex items-center gap-1.5 rounded-sm border border-line-bright bg-void px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:text-ink"
              >
                <Copy size={11} strokeWidth={1.5} />
                {copied ? "Copied + pinned" : "Copy to Notebook"}
              </button>
            }
          >
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              {(
                [
                  {
                    label: "Freq (CH1)",
                    value: meas.freqHz ? `${(meas.freqHz / 1000).toFixed(3)}` : "—",
                    unit: "kHz",
                    hist: hists.freq,
                    color: "var(--trace)",
                  },
                  {
                    label: "Vpp (CH1)",
                    value: (meas.vpp * 1000).toFixed(1),
                    unit: "mV",
                    hist: hists.vpp,
                    color: "var(--trace)",
                  },
                  {
                    label: "RMS (CH1)",
                    value: (meas.vrms * 1000).toFixed(1),
                    unit: "mV",
                    hist: hists.rms,
                    color: "var(--trace)",
                  },
                  {
                    label: "Noise est.",
                    value: meas.noiseMv.toFixed(2),
                    unit: "mV rms",
                    hist: hists.noise,
                    color: "var(--trace-2)",
                  },
                ] as const
              ).map((c) => (
                <div key={c.label} className="rounded-sm border border-line bg-panel-2 p-3 panel-inset">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">{c.label}</p>
                  <p className="mt-1 font-mono text-lg font-bold tabular-nums text-ink">
                    {valueOrDash(settings.run, c.value)}
                    <span className="ml-1 text-[9px] font-normal text-faint">{c.unit}</span>
                  </p>
                  <Sparkline getData={() => c.hist} width={96} height={24} color={c.color} className="mt-1" />
                </div>
              ))}
              {/* REF offset card — only when CH2 shows the reference and it is locked */}
              <div
                className={cn(
                  "rounded-sm border p-3 panel-inset",
                  settings.ch2Src === "ref" && clock === "LOCKED"
                    ? "border-violet/40 bg-violet/5"
                    : "border-line bg-panel-2 opacity-50",
                )}
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">REF offset</p>
                <p className="mt-1 font-mono text-lg font-bold tabular-nums text-violet">
                  {meas.refOffsetMHz !== null && settings.run ? meas.refOffsetMHz.toFixed(2) : "—"}
                  <span className="ml-1 text-[9px] font-normal text-faint">mHz</span>
                </p>
                <p className="mt-1 font-mono text-[9px] text-faint">
                  {settings.ch2Src === "ref" ? (clock === "LOCKED" ? "10 MHz vs GPSDO" : "ref not locked") : "CH2 ≠ ref"}
                </p>
              </div>
            </div>
          </Panel>
        </motion.div>

        {/* teaching strip */}
        <motion.div {...rise(7)} className="col-span-12">
          <Panel accent="go" className="cursor-pointer" pad={false}>
            <button
              onClick={() => setTipsOpen((o) => !o)}
              className="flex w-full items-center justify-between px-4 py-2.5"
            >
              <span className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-dim">
                Bench notes
              </span>
              <span className="font-mono text-[10px] text-faint">{tipsOpen ? "collapse −" : "expand +"}</span>
            </button>
            {tipsOpen && (
              <p key={tipIdx} className="border-t border-line px-4 py-3 text-sm text-dim">
                <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.12em] text-go">tip</span>
                {TIPS[tipIdx]}
              </p>
            )}
          </Panel>
        </motion.div>
      </div>
    </div>
  );
}

function valueOrDash(run: boolean, v: string): string {
  return run ? v : "—";
}
