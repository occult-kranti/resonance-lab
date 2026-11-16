import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Panel,
  StatusLED,
  Readout,
  Sparkline,
  Tooltip,
  ToggleSwitch,
  RockerButton,
  GradedBadge,
} from "@/components/shared";
import type { LedState } from "@/components/shared/StatusLED";
import {
  QUALITY_PRESSURE_HPA,
  computeQuality,
  formatPressure,
  simActions,
  useGrade,
  useSim,
} from "@/sim/store";
import { FAULT_CATALOG } from "@/sim/store";
import type { FaultId } from "@/sim/store";

/* ---------------------------------------------------------------- */
/* Small inline control button                                       */
/* ---------------------------------------------------------------- */
export function MiniButton({
  children,
  onClick,
  disabled,
  tooltip,
  tone = "default",
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  tooltip?: string;
  tone?: "default" | "trace" | "bad";
}) {
  const btn = (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-sm border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] transition-all active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-35",
        tone === "trace" &&
          "border-trace/60 bg-trace/10 text-trace hover:bg-trace/20",
        tone === "bad" && "border-bad/60 bg-bad/10 text-bad hover:bg-bad/20",
        tone === "default" &&
          "border-line text-dim hover:border-line-bright hover:text-ink",
      )}
    >
      {children}
    </button>
  );
  return tooltip ? <Tooltip content={tooltip}>{btn}</Tooltip> : btn;
}

function TileHeader({ name, led }: { name: string; led: LedState }) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <span className="font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-dim">
        {name}
      </span>
      <StatusLED state={led} />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* 1 · POWER                                                         */
/* ---------------------------------------------------------------- */
function PowerTile() {
  const power = useSim((s) => s.power);
  const led: LedState =
    power === "FACILITY_ON" ? "on" : power === "BOOTING" ? "warn" : "off";
  return (
    <Panel accent="trace-2" className="h-full">
      <TileHeader name="Power" led={led} />
      <div className="flex items-center gap-3">
        <RockerButton
          on={power !== "POWER_OFF"}
          onChange={(on) => (on ? simActions.powerOn() : simActions.powerOff())}
          label="Mains"
        />
        <div className="min-w-0">
          <p className="font-mono text-sm font-bold tabular-nums text-ink">
            {power === "FACILITY_ON" ? "MAINS ON" : power === "BOOTING" ? "BOOTING" : "DARK"}
          </p>
          <p className="mt-1 font-mono text-[10px] text-faint">
            {power === "POWER_OFF" ? "facility dark" : "UPS nominal · 230 V"}
          </p>
        </div>
      </div>
    </Panel>
  );
}

/* ---------------------------------------------------------------- */
/* 2 · VACUUM                                                        */
/* ---------------------------------------------------------------- */
function VacuumTile() {
  const pressure = useSim((s) => s.pressure);
  const roughingOn = useSim((s) => s.roughingOn);
  const turboOn = useSim((s) => s.turboOn);
  const turboSpool = useSim((s) => s.turboSpool);
  const venting = useSim((s) => s.venting);
  const power = useSim((s) => s.power);

  const led: LedState =
    pressure < QUALITY_PRESSURE_HPA ? "on" : roughingOn || turboOn ? "warn" : "off";
  const pumps =
    venting
      ? "VENTING"
      : [
          roughingOn ? "ROUGHING" : null,
          turboOn ? `TURBO ${Math.round(turboSpool)}%` : null,
        ]
          .filter(Boolean)
          .join(" ▪ ") || "PUMPS IDLE";

  const turboDisabled = power !== "FACILITY_ON" || !roughingOn || pressure >= 3;
  const turboTip =
    power !== "FACILITY_ON"
      ? "Facility power off"
      : !roughingOn || pressure >= 3
        ? "Turbo requires roughing below 3 hPa"
        : undefined;

  return (
    <Panel accent="blue" className="h-full">
      <div>
        <TileHeader name="Vacuum" led={led} />
        <Readout label="Chamber" value={formatPressure(pressure)} size="sm" />
        <p className="mt-1 truncate font-mono text-[10px] text-faint">{pumps}</p>
        <div className="mt-2">
          <Sparkline
            getData={() => useSim.getState().pressureHistory}
            log
            color="var(--blue)"
            width={120}
            height={24}
            className="w-full"
          />
        </div>
        <div className="mt-2 flex gap-1.5">
          <MiniButton
            tone={roughingOn ? "trace" : "default"}
            disabled={power !== "FACILITY_ON"}
            tooltip={power !== "FACILITY_ON" ? "Facility power off" : undefined}
            onClick={() =>
              roughingOn ? simActions.stopRoughing() : simActions.startRoughing()
            }
          >
            {roughingOn ? "Rough ✓" : "Rough"}
          </MiniButton>
          <MiniButton
            tone={turboOn ? "trace" : "default"}
            disabled={!turboOn && turboDisabled}
            tooltip={turboOn ? undefined : turboTip}
            onClick={() => (turboOn ? simActions.stopTurbo() : simActions.startTurbo())}
          >
            {turboOn ? "Turbo ✓" : "Turbo"}
          </MiniButton>
        </div>
      </div>
    </Panel>
  );
}

/* ---------------------------------------------------------------- */
/* 3 · THERMAL                                                       */
/* ---------------------------------------------------------------- */
function ThermalTile() {
  const temperature = useSim((s) => s.temperature);
  const setpoint = useSim((s) => s.setpoint);
  const drift = useSim((s) => s.driftCPerMin);
  const stable = useSim((s) => s.thermalStable);
  const enabled = useSim((s) => s.thermalEnabled);
  const power = useSim((s) => s.power);

  const led: LedState = stable ? "on" : enabled ? "warn" : "off";
  const driftOk = Math.abs(drift) <= 0.01;

  return (
    <Panel accent="copper" className="h-full">
      <TileHeader name="Thermal" led={led} />
      <Readout
        label="Chamber temp"
        value={temperature.toFixed(3)}
        unit="°C"
        size="sm"
        live
      />
      <p className="mt-1 font-mono text-[10px]">
        <span className="text-faint">drift </span>
        <span className={driftOk ? "text-go" : "text-warn"}>
          {drift >= 0 ? "+" : ""}
          {drift.toFixed(3)} °C/min
        </span>
      </p>
      <div className="mt-2">
        <Sparkline
          getData={() => useSim.getState().temperatureHistory}
          color="var(--copper)"
          width={120}
          height={24}
          className="w-full"
        />
      </div>
      <div className="mt-2">
        <ToggleSwitch
          on={enabled}
          disabled={power !== "FACILITY_ON"}
          onChange={(on) => simActions.setThermalEnabled(on)}
          label={enabled ? `loop → ${setpoint.toFixed(1)} °C` : "loop off"}
        />
      </div>
    </Panel>
  );
}

/* ---------------------------------------------------------------- */
/* 4 · CLOCK                                                         */
/* ---------------------------------------------------------------- */
function ClockTile() {
  const clock = useSim((s) => s.clock);
  const tickCount = useSim((s) => s.tickCount);
  const led: LedState =
    clock === "LOCKED" ? "on" : clock === "COLD" ? "off" : "warn";
  // stable-looking pseudo offset once locked (deterministic, ±0.5 mHz)
  const offsetMhz =
    clock === "LOCKED" ? 0.3 + 0.2 * Math.sin(tickCount / 37) : 0;
  return (
    <Panel accent="violet" className="h-full">
      <TileHeader name="Clock 10 MHz" led={led} />
      <p
        className={cn(
          "font-mono text-sm font-bold tabular-nums",
          clock === "LOCKED" ? "text-go" : clock === "COLD" ? "text-faint" : "text-warn",
        )}
      >
        {clock}
      </p>
      <p className="mt-1 font-mono text-[10px] text-faint">
        {clock === "LOCKED"
          ? `offset ${offsetMhz >= 0 ? "+" : ""}${offsetMhz.toFixed(1)} mHz`
          : clock === "COLD"
            ? "oscillator cold"
            : "GPSDO discipline running"}
      </p>
      <p className="mt-3 font-mono text-[10px] text-faint">Rb / GPSDO · holdover ready</p>
    </Panel>
  );
}

/* ---------------------------------------------------------------- */
/* 5 · SAFETY / INTERLOCKS                                           */
/* ---------------------------------------------------------------- */
function SafetyTile() {
  const faults = useSim((s) => s.faults);
  const hidden = useSim((s) => s.hiddenFaults);
  const power = useSim((s) => s.power);
  const active = (Object.keys(faults) as FaultId[]).filter((k) => faults[k]);
  const tripped = active.length > 0;
  const led: LedState = tripped ? "fault" : "on";

  const list = (
    <div className="space-y-1">
      <p>DOOR — closed</p>
      <p>VACUUM GUARD — closed</p>
      <p>THERMAL GUARD — closed</p>
      <p>E-STOP CHAIN — closed</p>
      {tripped && !hidden && (
        <p className="text-bad">{active.length} fault(s) active</p>
      )}
    </div>
  );

  return (
    <Tooltip content={list} side="bottom" className="block h-full">
      <Panel
        accent={tripped ? "bad" : "go"}
        className={cn("h-full", tripped && "animate-led-fault border-bad/60")}
      >
        <TileHeader name="Safety" led={led} />
        <p
          className={cn(
            "font-mono text-sm font-bold tabular-nums",
            tripped ? "text-bad" : "text-go",
          )}
        >
          4/4 CLOSED
        </p>
        <p className="mt-1 font-mono text-[10px] text-faint">
          {power === "POWER_OFF" ? "interlocks armed on power-up" : "interlocks armed"}
        </p>
        <p className="mt-3 truncate font-mono text-[10px]">
          {tripped ? (
            hidden ? (
              <span className="text-warn">diagnosis mode active</span>
            ) : (
              <span className="text-bad">
                {FAULT_CATALOG[active[0]].name}
                {active.length > 1 ? ` +${active.length - 1}` : ""}
              </span>
            )
          ) : (
            <span className="text-faint">no faults</span>
          )}
        </p>
      </Panel>
    </Tooltip>
  );
}

/* ---------------------------------------------------------------- */
/* 6 · MEASUREMENT QUALITY                                           */
/* ---------------------------------------------------------------- */
function QualityTile() {
  const grade = useGrade();
  const gate = useSim(computeQuality);
  const led: LedState = gate.valid ? "on" : "off";
  const awaiting = gate.reasons
    .slice(0, 2)
    .map((r) =>
      r
        .replace("Facility power is not on", "power")
        .replace(/Pressure .* hPa/, "vacuum")
        .replace("Chamber not thermally stable at setpoint", "thermal stable")
        .replace("10 MHz reference not locked", "clock lock")
        .replace("VNA not calibrated this session", "cal"),
    )
    .join(", ");
  return (
    <Panel accent="trace" className="h-full">
      <TileHeader name="Measurement" led={led} />
      <GradedBadge grade={grade} />
      <p className="mt-2 font-mono text-[10px] leading-relaxed text-faint">
        {gate.valid ? "all gates closed — data is VALID" : `awaiting: ${awaiting}${gate.reasons.length > 2 ? "…" : ""}`}
      </p>
    </Panel>
  );
}

/* ---------------------------------------------------------------- */
/* Row of six tiles                                                  */
/* ---------------------------------------------------------------- */
export default function StatusTiles() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
      <PowerTile />
      <VacuumTile />
      <ThermalTile />
      <ClockTile />
      <SafetyTile />
      <QualityTile />
    </div>
  );
}
