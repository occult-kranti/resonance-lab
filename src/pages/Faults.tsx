import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Clock3,
  Crosshair,
  Eye,
  EyeOff,
  Gauge,
  Lightbulb,
  Radio,
  Scan,
  ShieldCheck,
  Thermometer,
  Video,
  Waves,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Panel, Modal } from "@/components/shared";
import { cn } from "@/lib/utils";
import {
  simActions,
  useActiveFaults,
  useSim,
  formatSessionTime,
} from "@/sim/store";
import type { FaultId, Subsystem } from "@/sim/store";
import type { AccentColor } from "@/components/shared/Panel";
import { useFaultUiStore } from "@/components/faults/faultUiStore";
import { emitUiEvent } from "@/components/learning/simBus";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------------------------------------------------------------- */
/* Catalog metadata (faults.md §Fault catalog — original copy)       */
/* ---------------------------------------------------------------- */
type SeverityTag = "ADVISORY" | "WARN" | "FAULT";

interface FaultMeta {
  id: FaultId;
  name: string;
  subsystem: Subsystem;
  severity: SeverityTag;
  blurb: string;
  flow: string;
  instruments: { icon: LucideIcon; label: string }[];
}

const CATALOG: FaultMeta[] = [
  {
    id: "leak",
    name: "Roughing line leak",
    subsystem: "vacuum",
    severity: "WARN",
    blurb:
      "A virtual O-ring gives up. Pressure falls, then floors around 8×10⁻² hPa. The turbo never gets its chance.",
    flow: "leak → pressure floor ↑ → Q ↓ → dip shallows",
    instruments: [
      { icon: Gauge, label: "Vacuum" },
      { icon: Waves, label: "VNA" },
    ],
  },
  {
    id: "thermal-runaway",
    name: "Thermal runaway",
    subsystem: "thermal",
    severity: "FAULT",
    blurb:
      "The controller's sensor develops ambitions. Temperature ramps +0.05 °C/s until the guard interlock trips at 26 °C.",
    flow: "sensor fault → ramp +0.05 °C/s → drift alarm → f₀ walks −8 Hz/°C",
    instruments: [
      { icon: Thermometer, label: "Thermal" },
      { icon: Waves, label: "VNA" },
    ],
  },
  {
    id: "loose-cable",
    name: "Loose RF cable",
    subsystem: "rf",
    severity: "WARN",
    blurb:
      "The classic. S11 noise ×8, random dropouts, markers jump. Wiggling the (simulated) cable changes nothing, which is itself a clue.",
    flow: "bad contact → noise ×8 → dropouts → σ(f₀) inflates",
    instruments: [
      { icon: Waves, label: "VNA" },
      { icon: Radio, label: "Scope" },
    ],
  },
  {
    id: "clock-holdover",
    name: "Clock holdover",
    subsystem: "clock",
    severity: "WARN",
    blurb:
      "GPS drops out; the Rb flies alone. A slow frequency wander sets in. Looks fine. Isn't.",
    flow: "GPS lost → Rb undisciplined → f₀ reference wanders → fits drift together",
    instruments: [
      { icon: Clock3, label: "Reference" },
      { icon: Waves, label: "VNA" },
    ],
  },
  {
    id: "fan-vibration",
    name: "Fan vibration",
    subsystem: "mechanics",
    severity: "WARN",
    blurb:
      "A rack fan unbalances. 8 Hz jitter on the LDV, broadened dips, camera tremor in 3D. The scope sees it instantly.",
    flow: "unbalance → 8 Hz mechanical jitter → Q degraded → dips broaden",
    instruments: [
      { icon: Scan, label: "LDV" },
      { icon: Radio, label: "Scope" },
      { icon: Video, label: "3D view" },
    ],
  },
  {
    id: "rf-interference",
    name: "RF interference",
    subsystem: "rf",
    severity: "ADVISORY",
    blurb:
      "Someone's imaginary transmitter splatters comb spurs across your sweep and scope. Narrower IF BW helps; so does timing your sweeps.",
    flow: "external emitter → comb spurs → outliers in the fit window",
    instruments: [
      { icon: Waves, label: "VNA" },
      { icon: Radio, label: "Scope" },
    ],
  },
];

const SUB_ACCENT: Record<Subsystem, AccentColor> = {
  power: "trace-2",
  vacuum: "blue",
  thermal: "copper",
  clock: "violet",
  rf: "trace",
  mechanics: "dim",
  safety: "go",
  experiment: "trace-2",
};

const SEV_CLASS: Record<SeverityTag, string> = {
  ADVISORY: "border-blue/60 bg-blue/10 text-blue",
  WARN: "border-warn/60 bg-warn/10 text-warn",
  FAULT: "border-bad/60 bg-bad/10 text-bad",
};

const GREEK = ["α", "β", "γ", "δ", "ε", "ζ"];

const EDU_CARDS = [
  "Every fault here was chosen because it happened to someone, somewhere, probably on a Friday.",
  "Diagnosis order: safety → power → vacuum → thermal → clock → RF. Trust the order.",
  "The instrument that looks wrong is often downstream of the one that is wrong.",
];

/* ---------------------------------------------------------------- */
/* Fault card                                                        */
/* ---------------------------------------------------------------- */
function FaultCard({
  meta,
  index,
  hidden,
  onToast,
}: {
  meta: FaultMeta;
  index: number;
  hidden: boolean;
  onToast: (msg: string, tone: "bad" | "go") => void;
}) {
  const active = useSim((s) => s.faults[meta.id]);
  const simTime = useSim((s) => s.simTime);
  const noteInject = useFaultUiStore((s) => s.noteInject);
  const noteClear = useFaultUiStore((s) => s.noteClear);

  const inject = () => {
    simActions.injectFault(meta.id);
    noteInject(meta.id, simTime);
    if (hidden) {
      emitUiEvent("safety", "ADVISORY", "Routine telemetry checkpoint logged");
      onToast("Advisory logged", "go");
    } else {
      onToast(`Fault live: ${meta.name}`, "bad");
    }
  };
  const clear = () => {
    simActions.clearFault(meta.id);
    noteClear(meta.id);
    onToast(`Cleared: ${meta.name}`, "go");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: EASE }}
    >
      <Panel
        accent={SUB_ACCENT[meta.subsystem]}
        className={cn(
          "h-full transition-colors",
          active && !hidden && "border-bad/70",
          active && hidden && "border-line-bright",
        )}
      >
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em]",
              SEV_CLASS[meta.severity],
            )}
          >
            {meta.severity}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
            {meta.subsystem}
          </span>
          {active && (
            <span
              className={cn(
                "ml-auto h-2 w-2 rounded-full",
                hidden
                  ? "bg-warn text-warn led-glow animate-led-warn"
                  : "bg-bad text-bad led-glow animate-led-fault",
              )}
              aria-hidden
            />
          )}
        </div>

        <h3 className="mt-2 font-display text-sm font-semibold uppercase tracking-[0.1em] text-ink">
          {meta.name}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-dim">{meta.blurb}</p>

        <div className="mt-2.5 flex items-center gap-2.5">
          {meta.instruments.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.1em] text-faint"
            >
              <Icon size={11} strokeWidth={1.5} />
              {label}
            </span>
          ))}
        </div>

        {!hidden && (
          <p className="mt-2.5 border-t border-line pt-2 font-mono text-[10px] leading-relaxed text-faint">
            {meta.flow}
          </p>
        )}

        <div className="mt-3">
          {active ? (
            <button
              onClick={clear}
              className="w-full rounded-sm border border-go/60 bg-go/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-go transition-colors hover:bg-go/20"
            >
              Clear
            </button>
          ) : (
            <button
              onClick={inject}
              className="w-full rounded-sm border border-bad/60 bg-bad/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-bad transition-colors hover:bg-bad/20"
            >
              Inject
            </button>
          )}
        </div>
      </Panel>
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/* Active-faults band                                                */
/* ---------------------------------------------------------------- */
function ActiveBand({ hidden }: { hidden: boolean }) {
  const active = useActiveFaults();
  const simTime = useSim((s) => s.simTime);
  const injectedAt = useFaultUiStore((s) => s.injectedAt);
  const called = useFaultUiStore((s) => s.called);
  const noteClear = useFaultUiStore((s) => s.noteClear);
  const [confirmOverride, setConfirmOverride] = useState<FaultId | null>(null);

  const compound = active.some((id) => id === "thermal-runaway")
    ? "FAULT"
    : active.length > 0
      ? "WARN"
      : "NOMINAL";

  return (
    <div className="sticky top-12 z-30 -mx-1 rounded-md border border-line bg-shell/95 px-3 py-2 backdrop-blur-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "font-mono text-[10px] uppercase tracking-[0.14em]",
            hidden
              ? "text-warn"
              : compound === "NOMINAL"
                ? "text-go"
                : compound === "FAULT"
                  ? "text-bad"
                  : "text-warn",
          )}
        >
          {hidden
            ? "Diagnosis mode active"
            : compound === "NOMINAL"
              ? "Facility nominal"
              : `Facility ${compound.toLowerCase()} — ${active.length} fault${active.length > 1 ? "s" : ""} live`}
        </span>

        {active.map((id, i) => {
          const meta = CATALOG.find((m) => m.id === id)!;
          const at = injectedAt[id];
          const elapsed = at !== undefined ? Math.max(0, simTime - at) : null;
          const isCalled = called[id] !== undefined;
          return (
            <motion.span
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={cn(
                "flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em]",
                hidden
                  ? "border-warn/50 bg-warn/10 text-warn"
                  : "border-bad/50 bg-bad/10 text-bad",
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  hidden ? "bg-warn animate-led-warn" : "bg-bad animate-led-fault",
                )}
                aria-hidden
              />
              {hidden ? `Fault ${GREEK[i] ?? i + 1}` : meta.name}
              <span className="tabular-nums text-faint">
                {elapsed !== null ? formatSessionTime(elapsed).slice(2) : "—"}
              </span>
              {(!hidden || isCalled) && (
                <button
                  onClick={() => {
                    simActions.clearFault(id);
                    noteClear(id);
                  }}
                  aria-label={`Clear ${meta.name}`}
                  className="text-faint transition-colors hover:text-go"
                >
                  <X size={11} strokeWidth={2} />
                </button>
              )}
              {hidden && !isCalled && (
                <button
                  onClick={() => setConfirmOverride(id)}
                  className="text-faint underline decoration-dotted underline-offset-2 transition-colors hover:text-warn"
                  title="Clear without a diagnosis call — score penalty"
                >
                  override
                </button>
              )}
            </motion.span>
          );
        })}
      </div>

      <Modal
        open={confirmOverride !== null}
        onClose={() => setConfirmOverride(null)}
        title="Override clear"
      >
        <p className="text-sm leading-relaxed text-dim">
          Clearing a hidden fault without calling the diagnosis ends the exercise
          without credit — in Challenge Mode this is scored as a failed
          diagnosis. The instruments keep the honest record either way.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => setConfirmOverride(null)}
            className="rounded-sm border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-dim hover:text-ink"
          >
            Keep diagnosing
          </button>
          <button
            onClick={() => {
              if (confirmOverride) {
                simActions.clearFault(confirmOverride);
                useFaultUiStore.getState().noteClear(confirmOverride);
                emitUiEvent("safety", "ADVISORY", "Hidden fault cleared by override — no diagnosis credit");
              }
              setConfirmOverride(null);
            }}
            className="rounded-sm border border-warn/60 bg-warn/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-warn hover:bg-warn/20"
          >
            Override (−score)
          </button>
        </div>
      </Modal>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Diagnosis panel (hidden mode)                                     */
/* ---------------------------------------------------------------- */
const SYMPTOMS = [
  "pressure stuck",
  "noise high",
  "f₀ drifting",
  "temperature ramping",
  "dip broadened",
  "spurs on trace",
  "dropouts",
];

function DiagnosisPanel() {
  const active = useActiveFaults();
  const simTime = useSim((s) => s.simTime);
  const attempts = useFaultUiStore((s) => s.attempts);
  const called = useFaultUiStore((s) => s.called);
  const injectedAt = useFaultUiStore((s) => s.injectedAt);

  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [subsystem, setSubsystem] = useState<Subsystem | "">("");
  const [faultId, setFaultId] = useState<FaultId | "">("");
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [lastCorrect, setLastCorrect] = useState<FaultId | null>(null);

  const candidates = CATALOG.filter(
    (m) => subsystem === "" || m.subsystem === subsystem,
  );

  const uncalled = active.filter((id) => called[id] === undefined);

  const submit = () => {
    if (!faultId) return;
    if (uncalled.includes(faultId)) {
      useFaultUiStore.getState().markCalled(faultId, simTime);
      setResult("correct");
      setLastCorrect(faultId);
      emitUiEvent(
        "safety",
        "NOMINAL",
        `Diagnosis correct: ${CATALOG.find((m) => m.id === faultId)!.name} identified after ${attempts} wrong call${attempts === 1 ? "" : "s"}`,
      );
    } else {
      useFaultUiStore.getState().addAttempt();
      setResult("wrong");
    }
  };

  const stampId =
    lastCorrect !== null &&
    active.includes(lastCorrect) &&
    called[lastCorrect] !== undefined
      ? lastCorrect
      : null;

  return (
    <Panel title="Diagnosis — call it" accent="bad" bezel>
      {/* symptom checklist — organizational only */}
      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
        Observed symptoms (organizational — not verified)
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {SYMPTOMS.map((s) => (
          <button
            key={s}
            onClick={() => setChecks((c) => ({ ...c, [s]: !c[s] }))}
            className={cn(
              "rounded-full border px-2.5 py-1 font-mono text-[10px] transition-colors",
              checks[s]
                ? "border-trace/60 bg-trace/10 text-trace"
                : "border-line text-faint hover:text-dim",
            )}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
        <select
          value={subsystem}
          onChange={(e) => {
            setSubsystem(e.target.value as Subsystem | "");
            setFaultId("");
            setResult(null);
          }}
          className="rounded-sm border border-line bg-void px-2 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-ink focus:border-trace/60 focus:outline-none"
        >
          <option value="">Subsystem…</option>
          {(["vacuum", "thermal", "clock", "rf", "mechanics"] as Subsystem[]).map(
            (s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ),
          )}
        </select>
        <select
          value={faultId}
          onChange={(e) => {
            setFaultId(e.target.value as FaultId | "");
            setResult(null);
          }}
          className="rounded-sm border border-line bg-void px-2 py-2 font-mono text-[11px] text-ink focus:border-trace/60 focus:outline-none"
        >
          <option value="">Specific fault…</option>
          {candidates.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>
        <motion.button
          onClick={submit}
          disabled={!faultId || uncalled.length === 0}
          animate={result === "wrong" ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
          transition={{ duration: 0.35 }}
          className="flex items-center justify-center gap-2 rounded-sm border border-bad/60 bg-bad/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-bad transition-colors hover:bg-bad/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Crosshair size={12} strokeWidth={1.5} />
          Submit diagnosis
        </motion.button>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.1em]">
        <span className="text-faint">
          wrong calls: <span className={attempts > 0 ? "text-bad" : "text-dim"}>{attempts}</span>
        </span>
        <AnimatePresence>
          {result === "correct" && stampId && (
            <motion.span
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 480, damping: 20 }}
              className="flex items-center gap-2 rounded-full border border-go/60 bg-go/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-go"
            >
              <ShieldCheck size={11} strokeWidth={2} />
              Correct — {CATALOG.find((m) => m.id === stampId)?.name} · elapsed{" "}
              {injectedAt[stampId] !== undefined
                ? formatSessionTime(Math.max(0, simTime - injectedAt[stampId]!)).slice(2)
                : "—"}
            </motion.span>
          )}
          {result === "wrong" && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-full border border-bad/60 bg-bad/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-bad"
            >
              Wrong call — −1 attempt
            </motion.span>
          )}
        </AnimatePresence>
        {attempts >= 2 && uncalled.length > 0 && (
          <span className="flex items-center gap-1.5 text-warn normal-case tracking-normal">
            <Lightbulb size={11} strokeWidth={1.5} />
            Hint: compare the current pressure curve to a healthy pump-down on the
            Timeline.
          </span>
        )}
      </div>
      {uncalled.length === 0 && active.length > 0 && (
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-go">
          All live faults called — clearing is now unlocked.
        </p>
      )}
      {active.length === 0 && (
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
          No hidden fault live. Inject one above to practice.
        </p>
      )}
    </Panel>
  );
}

/* ---------------------------------------------------------------- */
/* Page                                                              */
/* ---------------------------------------------------------------- */
export default function Faults() {
  const hidden = useSim((s) => s.hiddenFaults);
  const active = useActiveFaults();
  const [confirmHidden, setConfirmHidden] = useState(false);
  const [toast, setToast] = useState<{ msg: string; tone: "bad" | "go" } | null>(null);
  const [eduIndex, setEduIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setEduIndex((i) => (i + 1) % EDU_CARDS.length),
      7000,
    );
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(id);
  }, [toast]);

  const setMode = (toHidden: boolean) => {
    if (toHidden === hidden) return;
    if (toHidden && active.length > 0) {
      setConfirmHidden(true);
      return;
    }
    simActions.setHiddenFaults(toHidden);
    useFaultUiStore.getState().resetDiagnosis();
  };

  const edu = useMemo(() => EDU_CARDS[eduIndex], [eduIndex]);

  return (
    <div className="mx-auto max-w-6xl p-4 md:p-6">
      {/* header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
            Fault Injector
          </h1>
          <p className="mt-1 text-sm text-dim">
            Break it on purpose. Learn what breaking looks like.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-faint sm:flex">
            <ShieldCheck size={11} strokeWidth={1.5} />
            Simulated faults only — no actual hardware exists to harm
          </span>
          {/* segmented mode control */}
          <div className="flex rounded-sm border border-line bg-void p-0.5">
            {([
              { h: false, label: "Visible", icon: Eye },
              { h: true, label: "Hidden", icon: EyeOff },
            ] as const).map(({ h, label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => setMode(h)}
                className={cn(
                  "flex items-center gap-1.5 rounded-[3px] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors",
                  hidden === h
                    ? h
                      ? "bg-warn/15 text-warn"
                      : "bg-trace/15 text-trace"
                    : "text-faint hover:text-dim",
                )}
              >
                <Icon size={11} strokeWidth={1.5} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* active band */}
      <div className="mt-4">
        <ActiveBand hidden={hidden} />
      </div>

      {/* catalog */}
      <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {CATALOG.map((meta, i) => (
          <FaultCard
            key={meta.id}
            meta={meta}
            index={i}
            hidden={hidden}
            onToast={(msg, tone) => setToast({ msg, tone })}
          />
        ))}
      </div>

      {/* diagnosis panel */}
      {hidden && (
        <div className="mt-4">
          <DiagnosisPanel />
        </div>
      )}

      {/* education strip */}
      <div className="mt-4">
        <Panel pad={false}>
          <div className="relative h-14 overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={eduIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="flex h-14 items-center gap-2 text-[13px] italic leading-snug text-dim"
              >
                <Lightbulb size={13} strokeWidth={1.5} className="shrink-0 text-trace-2" />
                {edu}
              </motion.p>
            </AnimatePresence>
          </div>
        </Panel>
      </div>

      {/* toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: EASE }}
            className={cn(
              "fixed bottom-10 right-6 z-50 rounded-sm border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.1em] panel-inset",
              toast.tone === "bad"
                ? "border-bad/60 bg-panel text-bad"
                : "border-go/60 bg-panel text-go",
            )}
          >
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* hidden-mode switch confirm */}
      <Modal
        open={confirmHidden}
        onClose={() => setConfirmHidden(false)}
        title="Enter hidden mode"
      >
        <p className="text-sm leading-relaxed text-dim">
          {active.length} visible fault{active.length > 1 ? "s" : ""} currently
          live. Hidden mode masks fault banners and timeline entries — switching
          clears the visible faults first so the exercise starts clean.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => setConfirmHidden(false)}
            className="rounded-sm border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-dim hover:text-ink"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              simActions.clearAllFaults();
              simActions.setHiddenFaults(true);
              useFaultUiStore.getState().resetDiagnosis();
              setConfirmHidden(false);
            }}
            className="rounded-sm border border-warn/60 bg-warn/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-warn hover:bg-warn/20"
          >
            Clear &amp; go hidden
          </button>
        </div>
      </Modal>
    </div>
  );
}
