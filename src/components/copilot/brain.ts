import {
  QUALITY_PRESSURE_HPA,
  computeGrade,
  computeQuality,
  formatPressure,
} from "@/sim/store";
import type { SimState } from "@/sim/store";
import { currentLoc1Step, loc1Steps, nextAction } from "@/components/console/loc1";

/**
 * Copilot intent engine (copilot.md §Intent engine) — deterministic,
 * keyword/state-matched, runs 100% in the browser. No external calls.
 *
 * Reply markup: **double-star** segments render as mono ink values.
 */

export interface CopilotLink {
  label: string;
  to: string;
}

export interface CopilotAnswer {
  paragraphs: string[];
  checklist?: { label: string; ok: boolean }[];
  links?: CopilotLink[];
}

const QUALITY_LABELS: { label: string; ok: (s: SimState) => boolean }[] = [
  { label: "Facility power on", ok: (s) => s.power === "FACILITY_ON" },
  { label: "Pressure below 1×10⁻³ hPa", ok: (s) => s.pressure < QUALITY_PRESSURE_HPA },
  { label: "Thermally stable at setpoint", ok: (s) => s.thermalStable },
  { label: "10 MHz reference locked", ok: (s) => s.clock === "LOCKED" },
  { label: "VNA calibrated this session", ok: (s) => s.vnaCalibrated },
];

export function qualityChecklist(s: SimState) {
  return QUALITY_LABELS.map((g) => ({ label: g.label, ok: g.ok(s) }));
}

/* ------------------------------------------------------------------ */
/* Individual intents                                                  */
/* ------------------------------------------------------------------ */

function answerNextStep(s: SimState): CopilotAnswer {
  const m = nextAction(s);
  if (m.complete) {
    return {
      paragraphs: [
        "LOC-1 is complete — three valid blinded pairs are in the log. Nicely run.",
        "Head to **Experiment Runs** to unblind the position assignment and read your grade. If you want a tighter σ first, a few more pairs never hurt anyone.",
      ],
      links: [{ label: "Open Experiment Runs", to: "/runs" }],
    };
  }
  const step = currentLoc1Step(s);
  return {
    paragraphs: [
      `You're on **step ${step.index} of 7 — ${step.title}**. ${m.rationale}`,
      "The same card is pinned on the Console, so you can't lose your place.",
    ],
    links: m.ctaTo
      ? [{ label: m.ctaLabel, to: m.ctaTo }]
      : [{ label: "Open Console", to: "/console" }],
  };
}

function answerGateDiagnosis(s: SimState): CopilotAnswer {
  const gate = computeQuality(s);
  const checklist = qualityChecklist(s);
  if (gate.valid) {
    return {
      paragraphs: [
        "Good news — every gate is closed, so anything you measure right now is **VALID**.",
        `Current grade: **${computeGrade(s)}**. Grades climb as you record more valid blinded pairs with tight σ.`,
      ],
      checklist,
      links: [{ label: "Open Experiment Runs", to: "/runs" }],
    };
  }
  const fixes = gate.reasons.map((r) => {
    if (r.startsWith("Facility power")) return "Flip the mains rocker on the Console.";
    if (r.startsWith("Pressure"))
      return `Pressure is **${formatPressure(s.pressure)}** — you need below **1×10⁻³ hPa**. ${s.turboOn ? `Turbo is at ${Math.round(s.turboSpool)}% — give it time to spool and pull.` : "Is the turbo running? It needs roughing below 3 hPa first."}`;
    if (r.startsWith("Chamber not"))
      return `Chamber is at **${s.temperature.toFixed(3)} °C** vs setpoint ${s.setpoint.toFixed(3)} °C. ${s.thermalEnabled ? "The loop is closing — hold within ±5 mK for 5 s." : "The thermal loop is off — engage it."}`;
    if (r.startsWith("10 MHz"))
      return `Reference is **${s.clock}**. ${s.clock === "COLD" ? "It warms up automatically once the facility has power — about 25 s total." : "Discipline is converging — a few more seconds."}`;
    return "Run an open/short/load calibration on the VNA page (the 10 MHz reference must be locked first).";
  });
  return {
    paragraphs: [
      `Measurement quality is **INVALID** — ${gate.reasons.length} gate${gate.reasons.length > 1 ? "s" : ""} open. Here's exactly what's holding you back:`,
      ...fixes.map((f) => `→ ${f}`),
    ],
    checklist,
    links: [{ label: "Open Console", to: "/console" }],
  };
}

const EXPLAINERS: { re: RegExp; make: (s: SimState) => CopilotAnswer }[] = [
  {
    re: /\bs[\s-]?11\b|scattering|reflection coefficient/,
    make: () => ({
      paragraphs: [
        "**S11** is the reflection coefficient: of the signal you send into the sphere's coupler, how much comes back, in dB. It is always ≤ 0 dB here — a passive sphere can only absorb or reflect, never amplify.",
        "At the breathing-mode resonance the sphere absorbs a little more drive power, so S11 dips. That dip's center is **f₀**, its width sets **Q**.",
        "Every watt you measure started as a watt you supplied — the dip is energy leaving the line into the sphere's motion, then dissipated.",
      ],
      links: [{ label: "Open VNA", to: "/vna" }],
    }),
  },
  {
    re: /\bldv\b|vibrometer|laser/,
    make: () => ({
      paragraphs: [
        "The **LDV** (laser Doppler vibrometer) measures surface velocity without touching the sphere. Light reflected from a moving surface is Doppler-shifted; mixing it with the reference beam turns vibration into a voltage.",
        "Point it at the sphere on the Chamber page, and its velocity spectrum shows the same breathing mode the VNA sees electrically — a nice cross-check between domains.",
      ],
      links: [{ label: "Open LDV Scanner", to: "/ldv" }],
    }),
  },
  {
    re: /allan|clock stability|holdover/,
    make: () => ({
      paragraphs: [
        "**Allan deviation** is the clock world's way of saying “how much does the frequency wander between measurements τ apart”. It averages out the noise that makes a plain standard deviation misleading for oscillators.",
        "The GPSDO/Rb reference disciplines a rubidium oscillator to GPS — short-term stability from the Rb, long-term truth from the satellite constellation.",
      ],
      links: [{ label: "Open Frequency Reference", to: "/reference" }],
    }),
  },
  {
    re: /\bq\b|q factor|quality factor|linewidth/,
    make: (s) => ({
      paragraphs: [
        "**Q** (quality factor) is how underdamped the resonance is: Q = f₀ / Δf, the center frequency over the linewidth. High Q means the sphere rings for a long time and the dip is narrow.",
        `In vacuum Q climbs toward **${(100000).toLocaleString()}** — there's almost no air to carry energy away. At atmosphere, gas damping caps it near **3,000**. Right now your conditions give roughly **Q ≈ ${Math.round(s.lastFit?.q ?? 100000).toLocaleString()}**.`,
        "Q is measured energy loss per cycle — never gain. The sphere does not create energy; it stores and returns a tiny fraction of what you drive into it.",
      ],
      links: [{ label: "Open Learning Paths", to: "/learning" }],
    }),
  },
  {
    re: /why (the )?vacuum|pump|turbo|roughing/,
    make: () => ({
      paragraphs: [
        "Air damping steals energy from the sphere's motion — every collision with a gas molecule broadens the resonance and drops Q.",
        "Two pumps because each owns a pressure decade: the **roughing pump** is a workhorse from atmosphere to ~2 hPa; the **turbomolecular pump** only works below that, spinning at tens of thousands of RPM to drag you to **10⁻⁵ hPa**.",
        "Sending the turbo against atmosphere would stall it — that's why the interlock exists.",
      ],
      links: [{ label: "Open Console", to: "/console" }],
    }),
  },
  {
    re: /22 degrees|why 22|temperature|thermal|setpoint/,
    make: () => ({
      paragraphs: [
        "The sphere's resonance slides with temperature — about **−3.3 Hz per kelvin** for this solid copper sphere. An unstabilized chamber turns your frequency measurement into a thermometer reading.",
        "Holding **22.000 °C ± 5 mK** makes temperature a constant instead of a variable. 22 °C is simply this lab's reference temperature — metrology labs pick one and defend it.",
      ],
      links: [{ label: "Open Console", to: "/console" }],
    }),
  },
  {
    re: /lorentz|curve shape|dip shape/,
    make: () => ({
      paragraphs: [
        "A damped oscillator's response near resonance follows a **Lorentzian**: depth ∝ 1/(1 + (2(f−f₀)/Δf)²). It's the Fourier fingerprint of exponential ring-down.",
        "Fitting a Lorentzian to your S11 sweep gives you f₀ and Q with honest uncertainties — that's the whole job of the VNA page.",
      ],
      links: [{ label: "Open VNA", to: "/vna" }],
    }),
  },
  {
    re: /blind|position 1|position 2|a\/b/,
    make: () => ({
      paragraphs: [
        "LOC-1 is **blinded**: the scheduler assigns POSITION 1 and POSITION 2 to the two stage slots and hides which is which until the staged gates G1–G4 clear — hash verification, sham/injection recovery, blinded diagnostics, and finally enough ABBA blocks complete.",
        "Blinding keeps you from (unconsciously) nudging the data toward the answer you expect. The two positions sit 0.40 m apart along the beam axis, shifting f₀ by a few tens of Hz.",
      ],
      links: [{ label: "Open Experiment Runs", to: "/runs" }],
    }),
  },
];

function answerFit(s: SimState): CopilotAnswer {
  const fit = s.lastFit;
  if (!fit) {
    return {
      paragraphs: [
        "There's no fit on the table yet — sweep first, then ask me to judge it.",
        "For a first pass: span **20.5–21.0 kHz**, **401 points**, IF bandwidth **100 Hz**. Narrower IF BW trades sweep time for less noise.",
      ],
      links: [{ label: "Open VNA", to: "/vna" }],
    };
  }
  const notes: string[] = [];
  if (fit.f0Sigma > 2) notes.push("σ(f₀) is loose — try more sweep points or a narrower IF bandwidth.");
  if (!s.thermalStable) notes.push("You fit while thermally unsettled — waiting for stability cuts σ roughly 3×.");
  if (s.pressure > QUALITY_PRESSURE_HPA) notes.push("Pressure above 1×10⁻³ hPa doubles your σ and drops Q. Let the turbo finish.");
  if (s.clock !== "LOCKED") notes.push("The reference wasn't locked — σ inflates 5×. Never fit against a free-running clock.");
  if (notes.length === 0)
    notes.push("σ is tight, residuals look like noise. This one can go in the log with a straight face.");
  return {
    paragraphs: [
      `Latest fit: **f₀ = ${(fit.f0 / 1000).toFixed(3)} kHz ± ${fit.f0Sigma.toFixed(2)} Hz**, **Q = ${Math.round(fit.q).toLocaleString()} ± ${Math.round(fit.qSigma).toLocaleString()}**, dip depth ${fit.depthDb.toFixed(1)} dB.`,
      ...notes.map((n) => `→ ${n}`),
    ],
    links: [{ label: "Open VNA", to: "/vna" }],
  };
}

function answerFaultDiagnosis(s: SimState): CopilotAnswer {
  const active = (Object.keys(s.faults) as (keyof typeof s.faults)[]).filter(
    (k) => s.faults[k],
  );
  if (active.length === 0) {
    return {
      paragraphs: [
        "From where I sit, every subsystem reads nominal — no fault flags, and the instruments agree with each other.",
        "If something still feels off, trust the data over the vibe: compare the current S11 noise floor and pressure trend against earlier sweeps on the Timeline.",
      ],
      links: [{ label: "Open Timeline", to: "/timeline" }],
    };
  }
  if (s.hiddenFaults) {
    // Diagnosis mode: symptom questions only, never the answer.
    return {
      paragraphs: [
        "Diagnosis mode is active, so I won't hand you the answer — but I can teach you how a metrologist hunts.",
        "Work the symptoms, in order: Is the **pressure trend** on the Timeline still falling, or stuck at a floor? Compare the **scope noise floor** with earlier — has it climbed? Is the **temperature** holding 22.000 °C or creeping? Does **f₀ wander** between identical sweeps?",
        "Each symptom points at one subsystem. When you've called it, open the Fault Injector and make the accusation — I'll confirm.",
      ],
      links: [
        { label: "Open Timeline", to: "/timeline" },
        { label: "Open Fault Injector", to: "/faults" },
      ],
    };
  }
  return {
    paragraphs: [
      `Fault flags are up: **${active.join(", ")}**. The instruments will show matching symptoms — pressure floor, noise, drift, or wander depending on the fault.`,
      "Clear them from the Fault Injector page, then re-check your quality gates before trusting new data.",
    ],
    links: [{ label: "Open Fault Injector", to: "/faults" }],
  };
}

function answerHonestPhysics(): CopilotAnswer {
  return {
    paragraphs: [
      "Not here, and not anywhere. The sphere returns **less** energy than you drive in — the simulator enforces it, and so does nature.",
      "Every resonance in this lab is a passive absorption dip: S11 never rises above 0 dB, Q only counts losses, and the copper sphere warms (imperceptibly) with what it absorbs.",
      "If you ever see a device claiming more out than in, the correct instrument is skepticism. The Learning Paths module on energy conservation walks the math.",
    ],
    links: [{ label: "Open Learning Paths", to: "/learning" }],
  };
}

function answerWalkthrough(s: SimState): CopilotAnswer {
  const steps = loc1Steps(s);
  const list = steps
    .map((st) => `${st.done ? "✓" : st.index} — ${st.title}`)
    .join("\n");
  const m = nextAction(s);
  return {
    paragraphs: [
      "**LOC-1 — Localized Oscillation Characterization.** Seven honest steps: power up, pump down, stabilize at 22.000 °C, lock the 10 MHz reference, calibrate the VNA, sweep and fit the breathing mode, then record blinded A/B position runs.",
      list,
      m.complete
        ? "All seven done — go read your grade."
        : `Right now: ${m.title.toLowerCase()}. ${m.rationale}`,
    ],
    links: [{ label: "Open Training checklist", to: "/training" }],
  };
}

function answerFacility(): CopilotAnswer {
  return {
    paragraphs: [
      "You're in **Meridian Standards Laboratory — Teaching Bay 3**, a simulated resonance-metrology bench. Inside a shielded vacuum chamber, a 100 mm solid copper sphere sits on a motorized XYZ stage.",
      "Your job in **LOC-1**: characterize the sphere's breathing-mode resonance near **20.75 kHz** — under vacuum, at a stabilized 22.000 °C, against a GPS-disciplined clock — and measure how it shifts between two blinded stage positions.",
      "It's a teaching simulator: the physics is idealized and energy-conserving, and nothing here is a real measurement device.",
    ],
    links: [{ label: "Open Lab Overview", to: "/" }],
  };
}

const FALLBACK: CopilotAnswer = {
  paragraphs: [
    "I'm a small scripted brain — I pattern-match, I don't think. Try **“next step”**, **“why invalid”**, **“explain Q”**, **“is my fit good”**, or **“something is wrong”**.",
    "For structured lessons, Learning Paths is the better teacher.",
  ],
  links: [{ label: "Open Learning Paths", to: "/learning" }],
};

/* ------------------------------------------------------------------ */
/* Matcher                                                             */
/* ------------------------------------------------------------------ */

export function answer(query: string, s: SimState): CopilotAnswer {
  const q = query.toLowerCase().trim();

  if (/free energy|over.?unity|more (energy|power|out) than|perpetual|energy gain|gain device/.test(q))
    return answerHonestPhysics();
  if (/something.*(wrong|off|weird)|diagnos|\bfault\b|broken|misbehav|acting up|not working/.test(q))
    return answerFaultDiagnosis(s);
  if (/why.*invalid|invalid|quality|grade|valid\b/.test(q))
    return answerGateDiagnosis(s);
  if (/what now|next step|next action|stuck|what should|where do i|what do i do/.test(q))
    return answerNextStep(s);
  if (/fit good|good fit|uncertain|sigma|residual|explain (my |the )?fit|fit quality/.test(q))
    return answerFit(s);
  if (/walk me|walkthrough|procedure|\bloc[\s-]?1\b|checklist/.test(q))
    return answerWalkthrough(s);
  if (/what is this|this facility|where am i|about this|what am i looking/.test(q))
    return answerFacility();
  if (/^(hi|hello|hey|yo|good (morning|afternoon|evening))\b/.test(q))
    return {
      paragraphs: [
        "Hello, operator. I'm watching the facility — ask me what's next, why a gate is open, or how any instrument works.",
      ],
    };

  for (const ex of EXPLAINERS) if (ex.re.test(q)) return ex.make(s);

  // state-flavored soft fallbacks
  if (/sweep|vna|calibrat/.test(q))
    return {
      paragraphs: [
        "The VNA sweeps S11 across your span and fits the Lorentzian dip. Sequence matters: **clock locked → calibrate → sweep**.",
        `Right now the reference is **${s.clock}** and calibration is **${s.vnaCalibrated ? "done" : "not done"}**.`,
      ],
      links: [{ label: "Open VNA", to: "/vna" }],
    };
  if (/stage|jog|move|position/.test(q))
    return {
      paragraphs: [
        `The XYZ stage is at **x ${s.stage.x.toFixed(2)}, y ${s.stage.y.toFixed(2)}, z ${s.stage.z.toFixed(2)} mm** with ±35 mm soft limits. Jog it from the Console or in the 3D Chamber view.`,
        "During blinded runs, use the POSITION 1 / POSITION 2 buttons — the assignment stays hidden until unblinding.",
      ],
      links: [{ label: "Open Chamber", to: "/chamber" }],
    };

  return FALLBACK;
}

/* ------------------------------------------------------------------ */
/* Context-aware suggestion chips (max 4)                              */
/* ------------------------------------------------------------------ */

export function suggestions(s: SimState): string[] {
  const out: string[] = [];
  const activeFaults = Object.values(s.faults).some(Boolean);
  const gate = computeQuality(s);

  if (s.power === "POWER_OFF") {
    out.push("Walk me through LOC-1", "What is this facility?");
  } else if (s.pressure >= QUALITY_PRESSURE_HPA) {
    out.push("Why two pumps?", "How long to high vacuum?");
  } else if (!s.vnaCalibrated || !s.lastFit) {
    out.push("How do I get a good fit?", "What is S11?");
  } else {
    out.push("Is my fit good?", "Explain uncertainty");
  }

  if (!gate.valid && s.power !== "POWER_OFF") out.unshift("Why is my quality INVALID?");
  if (activeFaults && s.hiddenFaults) out.unshift("Help me diagnose");
  out.push("Explain honest physics");

  return [...new Set(out)].slice(0, 4);
}
