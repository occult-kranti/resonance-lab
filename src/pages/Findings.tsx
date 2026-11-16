import { motion, useReducedMotion } from "framer-motion";
import {
  AudioWaveform,
  Clock3,
  Gavel,
  Ruler,
  Scale,
  Target,
  Thermometer,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Panel, Readout, StatusLED } from "@/components/shared";
import type { AccentColor } from "@/components/shared";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------------------------------------------------------------- */
/* Content                                                           */
/* ---------------------------------------------------------------- */

interface Finding {
  id: string;
  icon: LucideIcon;
  accent: AccentColor;
  title: string;
  body: string;
  stat?: { label: string; value: string; unit?: string };
}

const FINDINGS: Finding[] = [
  {
    id: "F-01",
    icon: Ruler,
    accent: "trace",
    title: "Geometry fixes the frequency, not the other way around",
    body:
      "The circulating claim of a ~230 kHz breathing mode does not survive a back-of-envelope eigenfrequency check. A 100 mm copper sphere breathes at roughly 20.75 kHz if solid, and nearer 10.5 kHz as a thin shell; 230 kHz would demand a sphere only ~0.9 cm across. The simulator therefore now runs the experiment at 20.75 kHz, matching the real artifact.",
    stat: { label: "Revised mode frequency", value: "20.75", unit: "kHz" },
  },
  {
    id: "F-02",
    icon: Thermometer,
    accent: "copper",
    title: "Thermal effects dominate the error budget",
    body:
      "With a temperature coefficient of frequency near −3.3 Hz/K at 20.75 kHz, ordinary lab gradients of 40–400 mK across the 0.40 m baseline would masquerade as 0.13–1.3 Hz position shifts — thousands of times the target signal. The engineering specification is a ≤300 µK differential between the two measurement positions, verified before any live run.",
    stat: { label: "Thermal spec", value: "≤300", unit: "µK diff" },
  },
  {
    id: "F-03",
    icon: Clock3,
    accent: "violet",
    title: "Instruments are never the limit",
    body:
      "A GPSDO-disciplined reference holds fractional stability around 1×10⁻¹² — orders of magnitude below the smallest shift of interest. This experiment is systematics-limited, not sensitivity-limited: every marginal dollar belongs to thermal and mechanical control, not to a better clock.",
    stat: { label: "Reference stability", value: "1×10⁻¹²", unit: "GPSDO" },
  },
  {
    id: "F-04",
    icon: Users,
    accent: "warn",
    title: "The two-sphere drift trap",
    body:
      "With one reference sphere and one moved device, slow resonator drift is mathematically indistinguishable from a position signal — no amount of averaging separates them. The amended design adds a third, unmoved witness sphere and rotates roles, so drift and position decouple.",
    stat: { label: "Spheres required", value: "3", unit: "ref + dev + witness" },
  },
  {
    id: "F-05",
    icon: AudioWaveform,
    accent: "trace-2",
    title: "Modulation discipline: hop, don't dither",
    body:
      "Position must be modulated with slow, full-stroke ABBA hops, never a fast dither. A dither whose mechanical reaction force is coherent at the modulation frequency aliases directly into the detection band and can counterfeit a signal at exactly the frequency being averaged.",
    stat: { label: "Hop dwell", value: "1.5", unit: "h / block" },
  },
  {
    id: "F-06",
    icon: Scale,
    accent: "blue",
    title: "Patent landscape is empty of the strong claim",
    body:
      "Every piece of resonance-based position-sensing art located in the review works through external field or geometry coupling — coils, capacitors, cavities, gratings. No patent claims an intrinsic position memory of a free resonator. Freedom-to-operate looks clean precisely because nobody has patented the implausible.",
    stat: { label: "Intrinsic-memory claims found", value: "0" },
  },
  {
    id: "F-07",
    icon: Target,
    accent: "go",
    title: "Null is a result",
    body:
      "Prior position-dependence tests across several physical systems are null to extreme precision. If this experiment stays null after the gates are passed, a clean, published upper bound is the deliverable — a contribution to the literature, not a failure of the program.",
    stat: { label: "Target deliverable", value: "≤30", unit: "mHz bound" },
  },
];

const GATES = [
  {
    label: "Claim sheet signed",
    detail:
      "The exact estimand, analysis code, and decision rules are frozen and countersigned before any data run.",
  },
  {
    label: "Stage-0 mode-ID gate",
    detail:
      "LDV mode shape and VNA spectrum must agree that the tracked line is the 20.75 kHz breathing mode before the experiment proceeds.",
  },
  {
    label: "Two-week warm-dummy verification",
    detail:
      "Fourteen days of full protocol on an electrically heated dummy must hold the ≤300 µK pair-differential with margin.",
  },
];

interface BudgetRow {
  term: string;
  uncontrolled: string;
  engineered: string;
  suppression: string;
}

const BUDGET: BudgetRow[] = [
  {
    term: "Differential temperature",
    uncontrolled: "0.13–1.3 Hz",
    engineered: "≤ 1 mHz",
    suppression: "≤300 µK pair-differential control + 2-week warm-dummy gate",
  },
  {
    term: "Remount / stage stress",
    uncontrolled: "10–100 mHz",
    engineered: "few mHz",
    suppression: "Kinematic nodal mount; torque-controlled clamping; role swaps",
  },
  {
    term: "Barometric / humidity",
    uncontrolled: "10–50 mHz",
    engineered: "< 1 mHz",
    suppression: "Vacuum enclosure with sealed reference volume",
  },
  {
    term: "Dither microphonics",
    uncontrolled: "Coherent alias",
    engineered: "Rejected by design",
    suppression: "Slow full-stroke ABBA hops at τ = 1.5 h; no coherent modulation in band",
  },
  {
    term: "Clock",
    uncontrolled: "< 1 µHz",
    engineered: "< 1 µHz",
    suppression: "GPSDO at ~1×10⁻¹² with DMTD beat readout",
  },
  {
    term: "Seismic / tides / magnetic",
    uncontrolled: "5–50 mHz",
    engineered: "1–5 mHz",
    suppression: "Nodal mounting, shielding, witness-sphere subtraction",
  },
];

const PROTOCOL: Array<{ title: string; detail: string }> = [
  {
    title: "Artifact & mode",
    detail:
      "Solid 100 mm copper sphere, breathing mode at 20.75 kHz, requiring Q ≥ 1×10⁵ before any block counts.",
  },
  {
    title: "Thermal",
    detail:
      "≤300 µK pair-differential between positions, gated by a two-week warm-dummy verification run.",
  },
  {
    title: "Mount & motion",
    detail:
      "Kinematic nodal mount; ABBA full-stroke hops with τ = 1.5 h dwell; B = 40 blocks; jittered switch times; role swaps in weeks 2 and 4.",
  },
  {
    title: "Readout",
    detail:
      "Electrostatic self-excited loops; DMTD beat against the GPSDO; VNA restricted to survey duty; LDV confined to the Stage-0 mode-identification gate.",
  },
  {
    title: "Statistics",
    detail:
      "Verbatim pre-registered estimand; exact permutation over all 2⁴⁰ randomizations; α = 0.01; SESOI = 30 mHz with the clamp rule applied to any smaller observed effect.",
  },
  {
    title: "Blinding bundle",
    detail:
      "Hidden position offset; ≥10% sham hops; ≥5% injected signals; hashed chain of custody from raw data to figure.",
  },
  {
    title: "Governance",
    detail:
      "Claim sheet signed before data; no press before independent replication; results published either way.",
  },
];

/* ---------------------------------------------------------------- */
/* Page                                                              */
/* ---------------------------------------------------------------- */

export default function Findings() {
  const reduced = useReducedMotion();
  const rise = (i: number) => ({
    initial: reduced ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.25, ease: EASE, delay: reduced ? 0 : i * 0.05 },
  });

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4 md:p-6">
      {/* ---- hero band ---- */}
      <motion.div {...rise(0)}>
        <Panel bezel className="overflow-hidden">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="min-w-0 max-w-2xl">
              <div className="flex items-center gap-3">
                <h1 className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
                  Research Findings
                </h1>
                <StatusLED state="on" label="Review complete" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-dim">
                A deep patent, literature, and open-source review — plus a
                three-round, five-expert panel review — of the
                position-dependent resonance experiment design that this
                simulator models. What survived scrutiny, what had to change,
                and the conditions under which the experiment is worth
                running.
              </p>
            </div>
            <div className="flex shrink-0 gap-8">
              <Readout label="Panel rounds" value="3" size="md" tone="ink" />
              <Readout label="Expert reviewers" value="5" size="md" tone="ink" />
              <Readout
                label="Verdict"
                value="GO*"
                unit="conditional"
                size="md"
                tone="go"
              />
            </div>
          </div>
        </Panel>
      </motion.div>

      {/* ---- key findings grid ---- */}
      <div className="grid gap-4 md:grid-cols-2">
        {FINDINGS.map((f, i) => (
          <motion.div key={f.id} {...rise(i + 1)}>
            <Panel accent={f.accent} className="h-full">
              <div className="flex h-full flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <f.icon size={16} strokeWidth={1.5} className="shrink-0 text-dim" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                    {f.id}
                  </span>
                  <h2 className="font-display text-[12px] font-semibold uppercase tracking-[0.1em] text-ink">
                    {f.title}
                  </h2>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-dim">{f.body}</p>
                {f.stat && (
                  <Readout
                    label={f.stat.label}
                    value={f.stat.value}
                    unit={f.stat.unit}
                    size="sm"
                    tone="ink"
                    className="border-t border-line pt-2"
                  />
                )}
              </div>
            </Panel>
          </motion.div>
        ))}

        {/* verdict panel */}
        <motion.div {...rise(FINDINGS.length + 1)} className="md:col-span-2">
          <Panel accent="go" bezel>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <Gavel size={16} strokeWidth={1.5} className="text-go" />
                <h2 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-go">
                  Verdict: Viable as amended — conditional GO
                </h2>
                <StatusLED state="warn" label="Gates pending" className="ml-auto" />
              </div>
              <p className="text-sm leading-relaxed text-dim">
                The panel does not endorse the experiment as originally posed,
                and does not dismiss it either. Proceed only when all three
                gate conditions below are met; if any gate fails, the program
                stops and the finding is published as-is.
              </p>
              <ol className="grid gap-3 md:grid-cols-3">
                {GATES.map((g, i) => (
                  <li
                    key={g.label}
                    className="rounded-sm border border-line bg-panel-2 p-3"
                  >
                    <p className="flex items-baseline gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-ink">
                      <span className="font-mono text-[10px] text-go">
                        G{i + 1}
                      </span>
                      {g.label}
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-dim">
                      {g.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Panel>
        </motion.div>
      </div>

      {/* ---- error budget ---- */}
      <motion.div {...rise(FINDINGS.length + 2)}>
        <Panel title="Error budget — position-shift equivalents at 20.75 kHz" accent="trace">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-line">
                  {["Term", "Uncontrolled", "Post-engineering", "Suppression mechanism"].map(
                    (h) => (
                      <th
                        key={h}
                        className="pb-2 pr-4 font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-faint"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {BUDGET.map((r) => (
                  <tr
                    key={r.term}
                    className="border-b border-line/60 last:border-0"
                  >
                    <td className="py-2 pr-4 text-[13px] font-medium text-ink">
                      {r.term}
                    </td>
                    <td className="py-2 pr-4 font-mono text-[12px] tabular-nums text-warn">
                      {r.uncontrolled}
                    </td>
                    <td className="py-2 pr-4 font-mono text-[12px] tabular-nums text-go">
                      {r.engineered}
                    </td>
                    <td className="py-2 pr-4 text-[12px] leading-snug text-dim">
                      {r.suppression}
                    </td>
                  </tr>
                ))}
                <tr className="border-t border-line-bright bg-panel-2/50">
                  <td className="py-2 pr-4 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-ink">
                    Combined floor
                  </td>
                  <td className="py-2 pr-4 font-mono text-[12px] tabular-nums text-faint">
                    —
                  </td>
                  <td className="py-2 pr-4 font-mono text-[12px] font-bold tabular-nums text-trace">
                    ≈ 5–10 mHz
                  </td>
                  <td className="py-2 pr-4 text-[12px] leading-snug text-dim">
                    Sits below the SESOI clamp of 30 mHz — the smallest effect
                    the experiment is designed to care about.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>
      </motion.div>

      {/* ---- protocol v2 ---- */}
      <motion.div {...rise(FINDINGS.length + 3)}>
        <Panel title="Protocol v2 — summary of the seven blocks" accent="blue">
          <ol className="grid gap-3 md:grid-cols-2">
            {PROTOCOL.map((p, i) => (
              <li
                key={p.title}
                className={cn(
                  "flex gap-3 rounded-sm border border-line bg-panel-2 p-3",
                  i === PROTOCOL.length - 1 && "md:col-span-2",
                )}
              >
                <span className="font-mono text-sm font-bold tabular-nums text-trace">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-ink">
                    {p.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-dim">
                    {p.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Panel>
      </motion.div>

      {/* ---- methodology note ---- */}
      <motion.p
        {...rise(FINDINGS.length + 4)}
        className="border-t border-line pt-3 text-[11px] leading-relaxed text-faint"
      >
        Methodology note — this page summarizes a multi-agent research and
        expert-panel review of the experiment concept: a patent and
        literature sweep, an open-source hardware survey, and three scored
        deliberation rounds across five reviewer personas. Figures are the
        panel's consensus estimates for the design as amended. The full
        report — sources, scoring sheets, and dissenting opinions — is
        available as a separate document.
      </motion.p>
    </div>
  );
}
