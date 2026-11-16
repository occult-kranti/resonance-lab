import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Crosshair,
  Flag,
  RotateCcw,
  X,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Panel from "@/components/shared/Panel";
import JogPad from "@/components/shared/JogPad";
import Readout from "@/components/shared/Readout";
import { ToggleSwitch } from "@/components/shared/ToggleSwitch";
import {
  STAGE_LIMIT_MM,
  formatPressure,
  qForPressure,
  simActions,
  trueF0Hz,
  useSim,
} from "@/sim/store";
import type { Axis } from "@/sim/store";
import {
  CHIRP_DURATION_S,
  POS_1,
  POS_2,
  useChamberUi,
} from "./chamberUi";
import type { ViewMode } from "./chamberUi";

/* ------------------------------------------------------------------ */
/* View controls (top-left)                                            */
/* ------------------------------------------------------------------ */

const VIEW_MODES: { id: ViewMode; label: string }[] = [
  { id: "assembled", label: "Assembled" },
  { id: "ghost", label: "Ghost" },
  { id: "section", label: "Section" },
];

export function ViewControlsPanel() {
  const viewMode = useChamberUi((s) => s.viewMode);
  const gridVisible = useChamberUi((s) => s.gridVisible);
  const exploded = useChamberUi((s) => s.exploded);
  const ui = useChamberUi.getState();

  return (
    <Panel title="View" accent="trace" bezel className="w-60" pad={false}>
      <div className="flex flex-col gap-3 p-3">
        {/* segmented view mode */}
        <div className="flex rounded-sm border border-line bg-void p-0.5">
          {VIEW_MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => ui.setViewMode(m.id)}
              className={cn(
                "flex-1 rounded-[3px] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors",
                viewMode === m.id
                  ? "bg-trace/15 text-trace"
                  : "text-dim hover:text-ink",
              )}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => ui.requestResetView()}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-sm border border-line px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:border-line-bright hover:text-ink active:scale-95"
          >
            <RotateCcw size={11} strokeWidth={1.5} />
            Reset view
          </button>
          <button
            onClick={() => ui.requestFrameStage()}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-sm border border-line px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim transition-colors hover:border-line-bright hover:text-ink active:scale-95"
          >
            <Crosshair size={11} strokeWidth={1.5} />
            Frame stage
          </button>
        </div>

        <div className="flex items-center justify-between">
          <ToggleSwitch
            on={gridVisible}
            onChange={(v) => ui.setGridVisible(v)}
            label="Bench grid"
          />
          <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-faint">
            dbl-click sphere: close-up
          </span>
        </div>

        {/* exploded slider */}
        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
              Exploded
            </span>
            <span className="font-mono text-[10px] tabular-nums text-dim">
              {Math.round(exploded * 100)}%
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={Math.round(exploded * 100)}
            onChange={(e) => ui.setExploded(Number(e.target.value) / 100)}
            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-line accent-trace"
            aria-label="Exploded view amount"
          />
        </div>

        {viewMode === "section" && (
          <p className="font-mono text-[9px] leading-relaxed text-faint">
            Drag the teal ring on the vessel edge to slide the cut plane.
          </p>
        )}
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Stage control (right column)                                        */
/* ------------------------------------------------------------------ */

function TravelBar({ axis }: { axis: Axis }) {
  const pos = useSim((s) => s.stage[axis]);
  const pct = ((pos + STAGE_LIMIT_MM) / (2 * STAGE_LIMIT_MM)) * 100;
  return (
    <div className="flex items-center gap-2">
      <span className="w-3 font-display text-[10px] font-semibold uppercase text-faint">
        {axis}
      </span>
      <div className="relative h-1.5 flex-1 rounded-full bg-line">
        {/* red end zones */}
        <span className="absolute inset-y-0 left-0 w-[8%] rounded-l-full bg-bad/35" />
        <span className="absolute inset-y-0 right-0 w-[8%] rounded-r-full bg-bad/35" />
        {/* needle */}
        <span
          className="absolute top-1/2 h-3 w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-trace led-glow text-trace transition-[left] duration-100"
          style={{ left: `${pct}%` }}
        />
      </div>
      <span className="w-16 text-right font-mono text-[10px] tabular-nums text-dim">
        {pos >= 0 ? "+" : "−"}
        {Math.abs(pos).toFixed(2)}
      </span>
    </div>
  );
}

/** Smooth slew of all axes toward a target with an accel/decel profile. */
function slewTo(target: Record<Axis, number>, cancelRef: { current: number | null }) {
  if (cancelRef.current != null) cancelAnimationFrame(cancelRef.current);
  const from = { ...useSim.getState().stage };
  const dist = Math.max(
    Math.abs(target.x - from.x),
    Math.abs(target.y - from.y),
    Math.abs(target.z - from.z),
  );
  if (dist < 0.005) return;
  const durMs = Math.min(2.4, Math.max(0.8, 0.8 + (dist / STAGE_LIMIT_MM) * 1.2)) * 1000;
  const t0 = performance.now();
  const stepFn = () => {
    const p = Math.min(1, (performance.now() - t0) / durMs);
    const e = p * p * (3 - 2 * p); // smoothstep: accel/decel
    (Object.keys(target) as Axis[]).forEach((a) => {
      simActions.setStage(a, from[a] + (target[a] - from[a]) * e);
    });
    if (p < 1) {
      cancelRef.current = requestAnimationFrame(stepFn);
    } else {
      cancelRef.current = null;
    }
  };
  cancelRef.current = requestAnimationFrame(stepFn);
}

export function StageControlPanel() {
  const sweeping = useSim((s) => s.sweeping);
  const [toast, setToast] = useState(false);
  const [toastKey, setToastKey] = useState(0);
  const slewCancel = useRef<number | null>(null);

  // soft-limit toast: sim emits a mechanics WARNING when a jog is refused
  useEffect(() => {
    let timeout: number | undefined;
    const unsub = useSim.subscribe((s, prev) => {
      const last = s.events[s.events.length - 1];
      if (!last || last.id === prev.events[prev.events.length - 1]?.id) return;
      if (last.subsystem === "mechanics" && last.message.includes("Soft limit")) {
        setToast(true);
        setToastKey((k) => k + 1);
        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => setToast(false), 2600);
      }
    });
    return () => {
      unsub();
      window.clearTimeout(timeout);
    };
  }, []);

  useEffect(
    () => () => {
      if (slewCancel.current != null) cancelAnimationFrame(slewCancel.current);
    },
    [],
  );

  return (
    <Panel title="Stage control" accent="dim" bezel className="w-72" pad={false}>
      <div className="relative flex flex-col gap-3 p-3">
        {/* sweep interlock */}
        {sweeping && (
          <div className="rounded-sm border border-warn/50 bg-warn/10 px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-warn">
            Hold still — sweep in progress
          </div>
        )}

        <div
          className={cn(
            sweeping && "pointer-events-none opacity-50",
            "transition-opacity",
          )}
        >
          <JogPad />
        </div>

        {/* travel bars */}
        <div className="flex flex-col gap-1.5 border-t border-line pt-3">
          <TravelBar axis="x" />
          <TravelBar axis="y" />
          <TravelBar axis="z" />
          <p className="text-right font-mono text-[9px] text-faint">
            travel ±{STAGE_LIMIT_MM} mm
          </p>
        </div>

        {/* blinded goto markers */}
        <div className="flex gap-2">
          <button
            disabled={sweeping}
            onClick={() => slewTo({ ...POS_1 }, slewCancel)}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-sm border border-trace-2/50 bg-trace-2/10 px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-trace-2 transition-all hover:bg-trace-2/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Flag size={11} strokeWidth={1.5} />
            Go to position 1
          </button>
          <button
            disabled={sweeping}
            onClick={() => slewTo({ ...POS_2 }, slewCancel)}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-sm border border-violet/50 bg-violet/10 px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-violet transition-all hover:bg-violet/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Flag size={11} strokeWidth={1.5} />
            Go to position 2
          </button>
        </div>
        <p className="font-mono text-[9px] leading-relaxed text-faint">
          Blinded markers — A/B assignment is hidden until unblinding.
        </p>

        {/* soft-limit toast */}
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toastKey}
              initial={{ opacity: 0, y: 6, x: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                x: [0, -5, 5, -3, 3, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.35,
                x: { duration: 0.4, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
              }}
              className="absolute left-1/2 top-2 z-10 -translate-x-1/2 whitespace-nowrap rounded-sm border border-bad/60 bg-panel-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-bad"
            >
              Soft limit — travel is ±{STAGE_LIMIT_MM} mm
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Environment (bottom-left)                                           */
/* ------------------------------------------------------------------ */

export function EnvironmentPanel() {
  const pressure = useSim((s) => s.pressure);
  const temperature = useSim((s) => s.temperature);
  const powered = useSim((s) => s.power === "FACILITY_ON");
  const driveOn = useChamberUi((s) => s.driveOn);
  const driveVolts = useChamberUi((s) => s.driveVolts);
  const chirpStart = useChamberUi((s) => s.chirpStart);
  const [chirpPct, setChirpPct] = useState(0);

  // chirp progress at rAF while active
  useEffect(() => {
    if (chirpStart == null) return;
    let raf = 0;
    const loop = () => {
      const p = Math.min(1, (performance.now() - chirpStart) / 1000 / CHIRP_DURATION_S);
      setChirpPct(p);
      if (p < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [chirpStart]);

  const chirping = chirpStart != null && chirpPct < 1;
  const ui = useChamberUi.getState();

  return (
    <Panel title="Environment & drive" accent="copper" bezel className="w-72" pad={false}>
      <div className="flex flex-col gap-3 p-3">
        <div className="grid grid-cols-2 gap-3">
          <Readout
            label="Pressure"
            value={formatPressure(pressure).replace(" hPa", "")}
            unit="hPa"
            size="sm"
            live
            tone={pressure < 1e-3 ? "go" : pressure < 3 ? "warn" : "ink"}
          />
          <Readout
            label="Chamber temp"
            value={temperature.toFixed(3)}
            unit="°C"
            size="sm"
            live
          />
        </div>

        {/* drive amplitude */}
        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
              Drive amplitude
            </span>
            <span className="font-mono text-[11px] tabular-nums text-ink">
              {driveVolts.toFixed(1)} <span className="text-faint">V</span>
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={10}
            step={0.1}
            value={driveVolts}
            disabled={!powered}
            onChange={(e) => ui.setDriveVolts(Number(e.target.value))}
            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-line accent-trace-2 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Drive amplitude (volts)"
          />
        </div>

        <div className="flex items-center justify-between gap-2">
          <ToggleSwitch
            on={driveOn}
            onChange={(v) => ui.setDriveOn(v)}
            label={powered ? "Drive on" : "Drive (no power)"}
            disabled={!powered}
          />
          <button
            disabled={!powered || !driveOn || chirping}
            onClick={() => ui.startChirp()}
            className="relative flex items-center gap-1.5 overflow-hidden rounded-sm border border-trace/50 bg-trace/10 px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-trace transition-all hover:bg-trace/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {chirping && (
              <span
                className="absolute inset-y-0 left-0 bg-trace/20"
                style={{ width: `${chirpPct * 100}%` }}
              />
            )}
            <Zap size={11} strokeWidth={1.5} className="relative" />
            <span className="relative">
              {chirping ? `Sweeping ${Math.round(chirpPct * 100)}%` : "Sweep drive through f₀"}
            </span>
          </button>
        </div>
        <p className="font-mono text-[9px] leading-relaxed text-faint">
          4 s chirp 227.0–232.5 kHz — the sphere pulses hardest near resonance.
          Output never exceeds drive input.
        </p>
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Legend (bottom-right)                                               */
/* ------------------------------------------------------------------ */

const LEGEND_CHIPS: { color: string; label: string }[] = [
  { color: "#2dd4c8", label: "LDV beam" },
  { color: "#c47a4a", label: "Copper sphere / drive" },
  { color: "#f0b64c", label: "Marker · position 1" },
  { color: "#9d8df1", label: "Marker · position 2" },
  { color: "#5aa2f0", label: "Vacuum / turbo" },
  { color: "#3ddc84", label: "Interlock OK" },
  { color: "#f0524f", label: "Interlock fault" },
];

export function LegendPanel() {
  const reduceMotion = useChamberUi((s) => s.reduceMotion);
  return (
    <Panel title="Legend" bezel className="w-56" pad={false}>
      <div className="flex flex-col gap-2 p-3">
        <div className="grid grid-cols-1 gap-1.5">
          {LEGEND_CHIPS.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-sm"
                style={{ backgroundColor: c.color, boxShadow: `0 0 6px ${c.color}66` }}
              />
              <span className="font-mono text-[10px] text-dim">{c.label}</span>
            </span>
          ))}
        </div>
        <div className="border-t border-line pt-2">
          <ToggleSwitch
            on={reduceMotion}
            onChange={(v) => useChamberUi.getState().setReduceMotion(v)}
            label="Reduce motion"
          />
        </div>
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Hover callout                                                       */
/* ------------------------------------------------------------------ */

function useCalloutData(id: NonNullable<ReturnType<typeof useChamberUi.getState>["hover"]>) {
  const s = useSim();
  const driveOn = useChamberUi((u) => u.driveOn);
  const driveVolts = useChamberUi((u) => u.driveVolts);

  const fmt = (v: number) =>
    `${v >= 0 ? "+" : "−"}${Math.abs(v).toFixed(2)}`;

  switch (id) {
    case "sphere": {
      const f0 = trueF0Hz(s, null);
      const q = qForPressure(s.pressure);
      return {
        title: "Copper sphere — DUT",
        rows: [
          ["Breathing mode", `${(f0 / 1000).toFixed(3)} kHz`],
          ["Q", `${(q / 1000).toFixed(1)}k`],
          ["Drive", driveOn ? `${driveVolts.toFixed(1)} V pk` : "off"],
        ],
      };
    }
    case "stage":
      return {
        title: "XYZ stage",
        rows: [
          ["Position", `X ${fmt(s.stage.x)} Y ${fmt(s.stage.y)} Z ${fmt(s.stage.z)} mm`],
          ["Travel", `±${STAGE_LIMIT_MM} mm per axis`],
        ],
      };
    case "ldv": {
      const q = qForPressure(s.pressure);
      const vel = driveOn
        ? (driveVolts / 10) * Math.min(1, q / 9000) * 130
        : 0;
      return {
        title: "LDV beam",
        rows: [
          ["Surface velocity", `${vel.toFixed(0)} nm/s pk`],
          ["Beam", s.power === "FACILITY_ON" ? "on" : "off"],
        ],
      };
    }
    case "piezo":
      return {
        title: "Drive piezo",
        rows: [
          ["State", driveOn && s.power === "FACILITY_ON" ? "driving" : "idle"],
          ["Level", `${driveVolts.toFixed(1)} V pk`],
        ],
      };
    case "turbo":
      return {
        title: "Pump stack",
        rows: [
          ["Turbo", `${s.turboSpool.toFixed(0)}% · ${((s.turboSpool / 100) * 52).toFixed(0)} krpm`],
          ["Roughing", s.roughingOn ? "running" : "stopped"],
        ],
      };
    case "vessel":
      return {
        title: "Vacuum vessel",
        rows: [
          ["Pressure", formatPressure(s.pressure)],
          ["Shell", `${s.temperature.toFixed(3)} °C`],
        ],
      };
  }
}

export function HoverCallout({ x, y }: { x: number; y: number }) {
  const hover = useChamberUi((s) => s.hover);
  return (
    <AnimatePresence>
      {hover && (
        <motion.div
          key={hover}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.12 }}
          className="pointer-events-none absolute z-30"
          style={{ left: x + 18, top: y + 14 }}
        >
          <CalloutCard id={hover} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CalloutCard({ id }: { id: NonNullable<ReturnType<typeof useChamberUi.getState>["hover"]> }) {
  const body = useCalloutData(id);
  return (
    <div className="w-56 rounded-md border border-line-bright bg-panel-2/95 p-3 shadow-lg panel-inset">
      <p className="mb-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-ink">
        {body.title}
      </p>
      {body.rows.map(([k, v]) => (
        <p key={k} className="flex items-baseline justify-between gap-2 font-mono text-[10px]">
          <span className="text-faint">{k}</span>
          <span className="tabular-nums text-dim">{v}</span>
        </p>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sphere quick-stat popover (click sphere)                            */
/* ------------------------------------------------------------------ */

export function SphereStatPopover() {
  const open = useChamberUi((s) => s.sphereStatOpen);
  const s = useSim();
  const driveOn = useChamberUi((u) => u.driveOn);
  const driveVolts = useChamberUi((u) => u.driveVolts);
  const f0 = trueF0Hz(s, null);
  const q = qForPressure(s.pressure);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="absolute left-1/2 top-4 z-30 w-72 -translate-x-1/2"
        >
          <Panel
            title="Sphere — quick stats"
            accent="copper"
            bezel
            pad={false}
            right={
              <button
                onClick={() => useChamberUi.getState().setSphereStatOpen(false)}
                aria-label="Close sphere stats"
                className="text-dim transition-colors hover:text-ink"
              >
                <X size={13} strokeWidth={1.5} />
              </button>
            }
          >
            <div className="flex flex-col gap-1 p-3">
              {[
                ["Breathing mode f₀", `${(f0 / 1000).toFixed(3)} kHz`],
                ["Q (this pressure)", `${Math.round(q).toLocaleString()}`],
                ["Temp coeff", "−8 Hz/°C from 22 °C"],
                ["Drive", driveOn ? `${driveVolts.toFixed(1)} V pk` : "off"],
              ].map(([k, v]) => (
                <p key={k} className="flex items-baseline justify-between font-mono text-[11px]">
                  <span className="text-faint">{k}</span>
                  <span className="tabular-nums text-ink">{v}</span>
                </p>
              ))}
              <p className="mt-1 border-t border-line pt-2 font-mono text-[9px] leading-relaxed text-faint">
                The sphere stores and returns a fraction of the drive energy — it
                never adds any.
              </p>
            </div>
          </Panel>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/* Facility dark overlay label                                         */
/* ------------------------------------------------------------------ */

export function FacilityStateLabel() {
  const power = useSim((s) => s.power);
  if (power === "FACILITY_ON") return null;
  return (
    <div className="pointer-events-none absolute inset-x-0 top-1/3 z-20 flex justify-center">
      <p className="rounded-sm border border-line bg-shell/80 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
        {power === "BOOTING" ? "Facility booting…" : "Facility dark — mains off"}
      </p>
    </div>
  );
}
