import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Panel from "@/components/shared/Panel";
import StatusLED from "@/components/shared/StatusLED";
import type { LedState } from "@/components/shared/StatusLED";
import { RockerButton } from "@/components/shared/ToggleSwitch";
import AllanPlot from "@/components/reference/AllanPlot";
import OffsetPlot from "@/components/reference/OffsetPlot";
import RearPanel from "@/components/reference/RearPanel";
import { createDisciplineModel } from "@/components/reference/discipline";
import type { DisciplineSample } from "@/components/reference/discipline";
import { formatSessionTime, simActions, useSim } from "@/sim/store";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const rise = (i: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.25, ease: EASE, delay: i * 0.06 },
});

/* Warmup timeline (s): lamp 3 → oven 8 → GPS 6 → discipline 5 → LOCK ≈ 25 s total.
   Sim store: WARMING lasts 15 s, LOCKING 10 s. */
const T_LAMP = 3;
const T_OVEN = 11;
const T_GPS = 17; // 15 + 2 into LOCKING
const T_DISC = 22; // 15 + 7 into LOCKING
const T_LOCK = 25;

function warmupElapsed(clock: string, clockT: number): number {
  if (clock === "COLD") return 0;
  if (clock === "WARMING") return Math.min(clockT, 15);
  if (clock === "LOCKING") return 15 + clockT;
  return T_LOCK;
}

/** 10-digit readout with lock-state-dependent wander and mount scramble. */
function FrequencyDigits({ clock, holdover, wanderHz }: { clock: string; holdover: boolean; wanderHz: number }) {
  const [offsetHz, setOffsetHz] = useState(0);
  const [noise, setNoise] = useState<{ chars: string[]; settled: number } | null>(null);
  const walk = useRef(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      const target =
        clock === "LOCKED" ? (holdover ? wanderHz : 0) : clock === "COLD" ? 0 : 0;
      const band = clock === "LOCKED" ? (holdover ? 30 : 0.0006) : clock === "WARMING" ? 0.35 : 0.03;
      walk.current = walk.current * 0.85 + (Math.random() - 0.5) * band + target * 0.02;
      setOffsetHz(walk.current);
    }, 250);
    return () => window.clearInterval(id);
  }, [clock, holdover, wanderHz]);

  // mount scramble: digits settle right-to-left over 600 ms
  useEffect(() => {
    const pool = "0123456789";
    const start = performance.now();
    const id = window.setInterval(() => {
      const t = performance.now() - start;
      if (t >= 600) {
        setNoise(null);
        window.clearInterval(id);
        return;
      }
      setNoise({
        chars: Array.from({ length: 16 }, () => pool[Math.floor(Math.random() * 10)]),
        settled: Math.floor((t / 600) * 16),
      });
    }, 40);
    return () => window.clearInterval(id);
  }, []);

  if (clock === "COLD") {
    return (
      <span className="font-mono text-3xl font-bold tabular-nums text-faint md:text-4xl">
        –– –––– –––.––––
      </span>
    );
  }
  const f = 10e6 + offsetHz;
  const int = Math.floor(f);
  const frac = (f - int).toFixed(4).slice(1); // ".0000"
  const grouped = int.toLocaleString("en-US").replace(/,/g, " ");
  let text = `${grouped}${frac}`;
  if (noise) {
    const totalDigits = text.replace(/\D/g, "").length;
    let digitIdx = 0;
    text = text
      .split("")
      .map((c) => {
        if (!/\d/.test(c)) return c;
        const i = digitIdx++;
        // settle right-to-left
        return i < totalDigits - noise.settled ? noise.chars[i % noise.chars.length] : c;
      })
      .join("");
    return (
      <span className="font-mono text-3xl font-bold tabular-nums text-violet md:text-4xl">{text}</span>
    );
  }
  return (
    <span
      className={cn(
        "font-mono text-3xl font-bold tabular-nums md:text-4xl",
        clock === "LOCKED" && !holdover ? "text-violet" : "text-dim",
      )}
      style={
        clock === "LOCKED" && !holdover ? { textShadow: "0 0 14px rgba(157,141,241,0.4)" } : undefined
      }
    >
      {text}
      <span className="ml-2 text-sm font-normal text-faint">Hz</span>
    </span>
  );
}

export default function Reference() {
  const power = useSim((s) => s.power);
  const clock = useSim((s) => s.clock);
  const clockT = useSim((s) => s.clockT);
  const refWanderHz = useSim((s) => s.refWanderHz);
  const holdover = useSim((s) => s.faults["clock-holdover"]);
  const simTime = useSim((s) => s.simTime);

  const [showOcxo, setShowOcxo] = useState(true);
  const [uptime, setUptime] = useState(0);
  const [sample, setSample] = useState<DisciplineSample>({ offsetNs: 0, freqOffsetMHz: 0, efcPct: 18, sats: 8 });
  const historyRef = useRef<number[]>([]);
  const modelRef = useRef(createDisciplineModel());
  const prevTick = useRef(simTime);
  const powerOnAt = useRef<number | null>(null);

  const powered = power !== "POWER_OFF";

  // discipline model + uptime sampled at 4 Hz
  useEffect(() => {
    const id = window.setInterval(() => {
      const s = useSim.getState();
      const dt = Math.max(0.05, Math.min(1, s.simTime - prevTick.current));
      prevTick.current = s.simTime;
      const smp = modelRef.current(dt, s);
      setSample(smp);
      historyRef.current = [...historyRef.current.slice(-239), smp.offsetNs];
      if (s.power !== "POWER_OFF") {
        if (powerOnAt.current === null) powerOnAt.current = s.simTime;
        setUptime(Math.max(0, s.simTime - powerOnAt.current));
      } else {
        powerOnAt.current = null;
        setUptime(0);
      }
    }, 250);
    return () => window.clearInterval(id);
  }, []);

  const elapsed = warmupElapsed(clock, clockT);
  const progress = powered ? Math.min(1, elapsed / T_LOCK) : 0;
  const etaS = Math.max(0, T_LOCK - elapsed);

  const led = (onAt: number): LedState => {
    if (!powered) return "off";
    if (elapsed >= onAt) return "on";
    // next phase pending → standby
    return "standby";
  };
  const gpsLed: LedState = !powered ? "off" : holdover ? "warn" : elapsed >= T_GPS ? "on" : "standby";
  const lockLed: LedState = !powered ? "off" : holdover ? "warn" : clock === "LOCKED" ? "on" : clock === "LOCKING" ? "warn" : "standby";

  const phaseTicks = [
    { t: T_LAMP, label: "lamp" },
    { t: T_OVEN, label: "oven" },
    { t: T_GPS, label: "gps" },
    { t: T_DISC, label: "disc" },
    { t: T_LOCK, label: "lock" },
  ];

  return (
    <div className="mx-auto max-w-5xl p-4 md:p-6">
      <div className="flex flex-col gap-4">
        <motion.div {...rise(0)}>
          <h1 className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
            Frequency Reference
          </h1>
          <p className="mt-1 font-mono text-[11px] text-faint">
            GPSDO-disciplined rubidium · 10 MHz · every number in the lab is only as good as this box
          </p>
        </motion.div>

        {/* front-panel hero */}
        <motion.div {...rise(1)}>
          <Panel title="Rb-10 GPSDO — front panel" accent="violet" bezel>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">output frequency</p>
                <div className="mt-1">
                  <FrequencyDigits clock={clock} holdover={holdover} wanderHz={refWanderHz} />
                </div>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                  <StatusLED state={powered ? "on" : "off"} label="POWER" />
                  <StatusLED state={led(T_LAMP)} label="RB LAMP" />
                  <StatusLED state={led(T_OVEN)} label="OVEN" />
                  <StatusLED state={gpsLed} label="GPS RX" />
                  <StatusLED state={elapsed >= T_DISC ? (holdover ? "warn" : "on") : powered ? "standby" : "off"} label="DISCIPLINE" />
                  <StatusLED state={lockLed} label="LOCK" />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <RockerButton
                  on={powered}
                  onChange={(on) => (on ? simActions.powerOn() : simActions.powerOff())}
                  label="POWER"
                />
                <button
                  onClick={() => (holdover ? simActions.clearFault("clock-holdover") : simActions.injectFault("clock-holdover"))}
                  disabled={!powered}
                  className={cn(
                    "rounded-sm border px-3 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.12em] transition-all",
                    holdover
                      ? "border-warn/70 bg-warn/15 text-warn"
                      : "border-line-bright bg-void text-dim hover:text-ink disabled:cursor-not-allowed disabled:opacity-40",
                  )}
                >
                  {holdover ? "End holdover" : "Holdover sim"}
                </button>
              </div>
            </div>

            {/* warmup progress */}
            <div className="mt-4">
              <div className="flex items-center justify-between font-mono text-[10px] text-faint">
                <span>
                  {clock === "LOCKED"
                    ? holdover
                      ? "HOLDOVER — GPS lost, Rb free-running"
                      : "LOCKED to GPSDO"
                    : powered
                      ? `warm-up phase: ${clock}`
                      : "cold — apply power"}
                </span>
                <span>
                  {clock !== "LOCKED" && powered && (
                    <>LOCK in ≈ 00:{String(Math.ceil(etaS)).padStart(2, "0")}</>
                  )}
                </span>
              </div>
              <div className="relative mt-1.5 h-2 rounded-full border border-line bg-void">
                <div
                  className={cn(
                    "h-full rounded-full transition-[width] duration-200",
                    clock === "LOCKED" ? "bg-go" : "bg-violet",
                  )}
                  style={{ width: `${progress * 100}%` }}
                />
                {phaseTicks.map((p) => (
                  <span
                    key={p.label}
                    className="absolute top-1/2 h-3 w-px -translate-y-1/2 bg-line-bright"
                    style={{ left: `${(p.t / T_LOCK) * 100}%` }}
                  />
                ))}
              </div>
              <div className="relative mt-1 h-3 font-mono text-[8px] uppercase text-faint">
                {phaseTicks.map((p) => (
                  <span
                    key={p.label}
                    className="absolute -translate-x-1/2"
                    style={{ left: `${(p.t / T_LOCK) * 100}%` }}
                  >
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
          </Panel>
        </motion.div>

        {/* middle: telemetry + ADEV */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <motion.div {...rise(2)}>
            <Panel title="Lock telemetry" accent="violet">
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {[
                  { l: "phase offset", v: `${sample.offsetNs >= 0 ? "+" : ""}${sample.offsetNs.toFixed(2)}`, u: "ns" },
                  { l: "freq offset", v: `${sample.freqOffsetMHz >= 0 ? "+" : ""}${sample.freqOffsetMHz.toFixed(2)}`, u: "mHz" },
                  { l: "EFC voltage", v: sample.efcPct.toFixed(1), u: "%" },
                  { l: "GPS satellites", v: String(powered ? sample.sats : 0), u: "tracked" },
                  { l: "uptime", v: formatSessionTime(uptime), u: "" },
                  { l: "state", v: holdover ? "HOLDOVER" : clock, u: "" },
                ].map((r) => (
                  <div key={r.l} className="rounded-sm border border-line bg-panel-2 px-3 py-2 panel-inset">
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">{r.l}</p>
                    <p className="mt-0.5 font-mono text-sm font-bold tabular-nums text-ink">
                      {r.v} <span className="text-[9px] font-normal text-faint">{r.u}</span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-sm border border-line bg-void">
                <OffsetPlot historyRef={historyRef} height={150} />
              </div>
            </Panel>
          </motion.div>

          <motion.div {...rise(3)}>
            <Panel
              title="Allan deviation"
              accent="violet"
              right={
                <button
                  onClick={() => setShowOcxo((v) => !v)}
                  className={cn(
                    "rounded-sm border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] transition-colors",
                    showOcxo ? "border-line-bright text-dim" : "border-line text-faint",
                  )}
                >
                  OCXO compare {showOcxo ? "on" : "off"}
                </button>
              }
            >
              <AllanPlot uptime={uptime} showOcxo={showOcxo} height={260} />
              <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-faint">
                <span>N samples {Math.floor(uptime)}</span>
                <span>τ ≤ {(Math.max(0.1, uptime / 2)).toFixed(uptime < 20 ? 1 : 0)} s so far</span>
              </div>
              <p className="mt-2 border-t border-line pt-2 text-xs leading-relaxed text-dim">
                Average longer, know better — until aging says stop.
              </p>
            </Panel>
          </motion.div>
        </div>

        {/* bottom: explainer + rear panel */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <motion.div {...rise(4)}>
            <Panel title="Why discipline matters" accent="violet">
              <p className="text-sm leading-relaxed text-dim">
                Your VNA measures frequency by counting against a reference. A 1 mHz error here is a
                2 mHz error at 20.75 kHz scaled — small, until you compare runs days apart. The
                rubidium is stable; GPS is accurate; the GPSDO marries them. Every honest number in
                this lab traces back to the 10 MHz on the back panel.
              </p>
              <p className="mt-3 border-t border-line pt-3 font-mono text-[10px] leading-relaxed text-faint">
                Try it: press HOLDOVER SIM, watch the phase offset walk away, then end it and watch
                the discipline loop reel it back in.
              </p>
            </Panel>
          </motion.div>
          <motion.div {...rise(5)}>
            <Panel title="Rear-panel outputs" accent="violet">
              <RearPanel />
            </Panel>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
