# LOC-1 v2 — Improved Experiment Hypothesis & Protocol

**Position-Dependent Resonance of a Copper Sphere: A Blinded, Preregistered Null Test**

*Output of a 10-agent deep-research swarm (patents, open-source, physics literature) followed by a 3-round, 5-expert adversarial panel (precision metrology, RF engineering, precision-tests physics, statistics, methodology/skepticism).*

Version 2.0 — final converged protocol. Panel verdict: **VIABLE AS AMENDED — conditional GO.**

---

## 1. Executive Summary

The original proposal (LOC-1 v1) asked: does a copper sphere's resonant frequency change when the sphere is moved 0.40 m, everything else held constant? The research swarm and expert panel found the v1 design unmeasurable as specified, identified four fatal flaws, and converged on a fully amended design (LOC-1 v2) that is statistically sound, metrologically traceable, and hardened against every known self-deception mode in the history of anomalous-claim physics.

**The panel's five signature findings:**

1. **The claimed band is physically impossible for the claimed object.** A 230 kHz breathing mode requires a ~0.9 cm sphere; a 10 cm copper sphere breathes at ~20.75 kHz (solid) or ~10.5 kHz (thin shell) — Lamb/Rayleigh theory plus direct gravitational-wave-sphere measurements. The 230 kHz/10 cm combination is falsified at the bench before any position data exist.
2. **Thermal gradients are the experiment.** Copper's −1.6×10⁻⁴/K fractional temperature coefficient gives 3.3 Hz/K at 20.75 kHz; ordinary lab stratification over 0.40 m (40–400 mK) would fake a 1–14 Hz "position effect" — orders of magnitude above the instrument floor.
3. **One reference sphere cannot work.** Drift is mathematically indistinguishable from signal in a two-device, one-moved topology. A third witness sphere plus scheduled role swaps is non-negotiable.
4. **The ≥3-pairs unblinding gate was vacuous** (minimum two-sided permutation p = 0.25 at n = 3). Replaced by staged gates G1–G4 with exact randomization inference at α = 0.01.
5. **Modulation beats translation.** The primary estimand uses slow full-stroke 0.40 m ABBA hops (exact linear-drift cancellation); fast dither is diagnostic only; Hz-band dither is ruled out (it injects a contaminant coherent at the signal frequency).

Expected outcome, stated honestly: a null, published as a quotable upper bound |Δf| < 30 mHz at 0.40 m (Δf/f ≈ 1.4×10⁻⁶) — about 13 orders of magnitude weaker than existing cavity-based Lorentz bounds, but the first direct, preregistered, blinded test of this specific macroscopic claim, and a reusable methodological template.

---

## 2. The Claim, Its Origin, and Its Disposition

The hypothesis originates from channeled material (the "Bashar" source), which asserts that an object's location is an intrinsic vibrational variable and points to effects above 230 kHz.

The panel's provenance ruling (unanimous): **provenance is irrelevant to evidential weight — hypotheses are licensed by testability, not origin** — but the source may have zero authority over analysis, interpretation, or post-hoc re-specification. Every reinterpretation after unblinding is logged publicly as a new hypothesis requiring new preregistration.

**Disposition of the literal claim:** the specific assertion "breathing mode above 230 kHz on a bench-scale copper sphere" is internally inconsistent with elasticity theory and prior measurement (Section 4.1). It is falsified at the Stage-0 mode-survey bench at near-zero cost. The surviving confirmatory test targets the physically real breathing mode at 20.75 kHz — and only after the proponent signs a written claim amendment (Section 7.1).

---

## 3. Research Base (what the swarm established)

### 3.1 Patent landscape [dim01, dim02]

- Resonance-based position/displacement sensing is a large, ordinary patent family (cavity-length sensors, resonant inductive encoders, MEMS resonant accelerometers, HRG shell rotation sensors): **all operate on external fields/geometry/coupling — none claims intrinsic position memory**, despite the patent system's demonstrated willingness to accept fringe claims (Mach-effect patents exist).
- Instrument floors from the patent record: VNA phase-fit ≈ 1×10⁻⁷ repeatability (~23 mHz at 230 kHz; 3×10⁻¹⁰ only with heroic averaging); LDV calibration is patent-traceable to frequency references; GPSDO/Rb references reach 1×10⁻¹²–1×10⁻¹³, DMTD comparison ADEV <1×10⁻¹³ @1 s.
- Practical patents handed to the project: STACIS-style active vibration isolation; NIST mK-gradient nested-shell thermal enclosures; disciplined-clock common-view difference methods.

### 3.2 Open-source stack [dim03]

End-to-end free tooling exists: **scikit-rf** (VNA/S11), **lmfit** + **resonator_tools** (Lorentzian / circle fitting), **allantools** (Allan deviation), **pymeasure/QCoDeS** (instrument automation + database audit trail), **randomizr** (block randomization), blindr-style blinding. Gap: no mature open elastic-sphere eigenfrequency solver — a small in-house Rayleigh–Lamb verification script is required.

### 3.3 Physics literature [dim04, dim05, dim08, dim10]

- Sphere eigenfrequencies: Lamb (1882) equation; solid 100 mm Cu sphere breathing mode f₀ = 20.75 kHz; thin shell 10.55 kHz; measured GW spheres confirm f ∝ v_s/R (68 cm → 2.9 kHz; 15 cm → 13.2–14.6 kHz).
- Q: Cu sphere ~10⁵ in vacuum at RT (up to 2×10⁷ for CuAl alloy); Earth's ₀S₀ Q ≈ 6000; air loading detunes ~10–100 ppm.
- Error budget at 230 kHz over 0.40 m: thermal gradients 1–14 Hz (dominant), remount stress 2 Hz–2 kHz (unless kinematic mount), barometric ±0.3 Hz, tides ~10⁻¹⁰ Hz, magnetic <10⁻¹³ Hz, clock negligible (2×10⁻⁸ Hz with GPSDO).
- Frequency-metrology floor: clocks are never the limit; 1 mHz resolution requires ≲27 µK thermal control at 230 kHz.
- Prior art: all position-dependence tests null — cavity Lorentz tests to Δν/ν ~10⁻¹⁹; constants-vs-potential coupling k_α = (−5.5 ± 5.2)×10⁻⁷; GR redshift across 1 mm measured (ordinary physics). Zero literature on the specific "230 kHz" claim.

### 3.4 Methodology literature [dim06, dim07, dim09]

- Eöt-Wash lesson: **modulate the variable, never compare statics** — signal at a known frequency/phase separates from lab-fixed drift; Dayton Miller's fake ether drift (thermal aliasing into a position-periodic signal) is the cautionary precedent.
- Differential metrology: matched-pair tracking is percent-level (92–97% thermal CMRR), per-device aging is non-common-mode; one-reference topology is a "singular problem" (drift ≡ signal) — fixed by swap symmetry or a third witness device.
- Preregistration: OSF + PCI Registered Reports path (no standing RR track in core physics journals); g-2-style hidden offset; LIGO Big Dog sham injections; hashed third-party schedule custody; bounded deviation policy; equivalence-bound (TOST) null reporting.

---

## 4. Fatal Flaws Found in v1 (and their dispositions)

### 4.1 The mode/geometry conflict (CRITICAL — falsifies the literal claim at the bench)
Claimed: breathing mode ≈230 kHz on a 10 cm sphere. Physics: 20.75 kHz (solid) / 10.5 kHz (shell); 230 kHz requires R ≈ 0.9 cm. **Disposition:** Stage-0 LDV mode-map gate; retarget to the measured real mode; a cheap secondary R≈0.9 cm channel optionally covers the literal band.

### 4.2 Thermal wall
TCf ≈ −3.3 Hz/K at 20.75 kHz; uncontrolled lab gradients over 0.40 m fake 1–14 Hz at 230 kHz. **Disposition:** two-stage thermal chamber, ≤300 µK pair-differential contract, 2-week warm-dummy verification run before any position data.

### 4.3 Drift ≡ signal topology
One stationary reference + one moved device is non-identifiable. **Disposition:** three spheres (test / reference / never-moved witness) plus blinded role swaps in weeks 2 and 4.

### 4.4 Vacuous unblinding gate
≥3 pairs cannot reject anything (p ≥ 0.25). **Disposition:** staged gates G1–G4; permutation over 2⁴⁰ realized randomizations; α = 0 0.01; ≤2 interim looks with O'Brien–Fleming spending.

### 4.5 Instrument mismatch
VNA phase-fit (~23 mHz floor) was the planned primary readout against mHz ambitions. **Disposition:** VNA demoted to mode survey; primary readout = dual self-excited electrostatic oscillator loops mixed to a 1–10 Hz beat counted against GPSDO (DMTD; instrumental floor ~5×10⁻¹³ fractional @1 s).

---

## 5. LOC-1 v2 — The Amended Protocol (final, panel-signed)

### 5.1 Artifact and mode
- Solid 100.00 mm copper sphere (traceable: CMM ±1 µm to gauge blocks; CTE ±10%; mass ±10 mg).
- Breathing mode 20.75 kHz; TCf −3.3 Hz/K (measured per artifact in calibration); Q ≥ 1×10⁵ verified by ring-down (weekly; void if Q < 5×10⁴).
- Stage-0 LDV mode map of all spheres vs. theory (FEA ±2%) before any position data.

### 5.2 Thermal system
- Two-stage chamber: ±10 mK outer, ±0.5 mK inner Cu equalization block; raw gradient ≤3–10 mK over the 0.40 m path.
- Pair-differential spec ≤300 µK; ITS-90 thermistor bridges, 10 µK resolution, logged synchronously (±1 s) with frequency data.
- **Warm-dummy gate (2 weeks):** inert Cu dummies + fully live electronics; pass = ≤300 µK differential, ADEV flat to 10⁵ s, no spectral line at f_hop >1 mHz. Failure = stop, not retune.

### 5.3 Mount and motion
- Kinematic nodal three-point mount; flexure stage ≤1 µm repeatability, ≤10 µrad tilt; remount scatter ≤10 mHz over 20 trials.
- **Primary motion:** full 0.40 m hops, randomized ABBA/BAAB blocks, dwell τ = 1.5 h, 6 h blocks, B = 40 blocks (~10 days hopping) inside a 6-week run; **jittered hop times** (no stable spectral line); post-hop settling veto ≥300 s + accelerometer; ≥5% null hops (command issued, stage disabled — pipeline must null).
- **Diagnostic motion (never in the estimand):** ±5 mm dither, f_mod = argmin of demodulated noise density in [0.05, 0.13] Hz fixed from the blinded pilot; Hz-band dither ruled out (reaction force ≈10 mN @0.1 Hz coherent at f_mod; ring-up τ ≈ 1.5 s).
- Continuous rotary modulation was considered and rejected as primary (rotating wiring injects microphonics at f_mod; measures while moving); retained as an optional independent cross-check with its own frozen pipeline.

### 5.4 Readout chain
- Dual self-excited electrostatic push-pull loops (ppm-stabilized bias; loop phase <1°; spring-softening k_es/k_mech ~10⁻¹³); chamber-fixed electrodes, zero wiring moves with the sphere.
- Beat-down to 1–10 Hz; counter against GPSDO (DMTD; ADEV ~5×10⁻¹³ @1 s instrumental).
- LC dummy third loop as continuous electronics-temperature null channel — analyzed as a parallel null endpoint whose upper limit must be tighter than the primary's (else Gate 2 fails).
- VNA: mode survey and coupling checks only (β ≤ 0.1, CW phase tracking, IF BW ≤ 10 Hz). LDV: Stage-0 mode identification only (photothermal bias ~0.3 mHz disqualifies it as metrology channel).
- Daily chain verification: GPSDO → DMTD → counter. In-situ lock ADEV measured 24–72 h pre-unblinding and weekly.

### 5.5 Statistics (frozen)
- **Estimand (verbatim, preregistered):** Δf = f(x_B) − f(x_A) over the 0.40 m pair, within-block ABBA contrast c_k = (A1 − B1 − B2 + A2)/2 of the 3-sphere-corrected lock output, covariate-adjusted (T×2, pressure, humidity) per hash-frozen code. Primary statistic Σc_k/B.
- **Inference:** permutation over the 2⁴⁰ realized randomizations (custodian-verified), two-sided α = 0.01; 95% interval by inversion; null reported as upper limit U with equivalence iff U < SESOI.
- **SESOI = 30 mHz at 20.75 kHz (Δf/f ≈ 1.4×10⁻⁶)**, via rule SESOI = clamp(3 × pilot-measured differential floor, 20, 50) mHz, fixed from the blinded pilot before labels touch analysis. Achieved-resolution figures (~1e-7) reported as secondary, clearly labeled non-confirmatory.
- **Pilot (Stage 0.5):** 5 days blinded → spectrum/ADEV → fix f_mod, confirm σ_pair, set SESOI. No position contrast computed.
- **Gates:** G1 hash verification (code + schedule); G2 sham/injection recovery ±10% + LC-dummy null tighter than primary; G3 blinded residual diagnostics (whiteness, ADEV ≈ pilot); G4 B = 40 complete → single primary test. ≤2 interim looks, O'Brien–Fleming, α_total = 0.01.
- **Multiplicity:** one confirmatory frequency bin; everything else descriptive or BH-FDR exploratory.
- **Deviations:** hashed within 24 h; >5% of blocks affected → worst-case inclusion/exclusion sensitivity re-analysis; post-unblinding changes are exploratory-only.

### 5.6 Blinding bundle (single contract)
- Third-party hidden frequency offset (g-2 style), ceremonially logged gated unblinding.
- Block-randomized schedule (randomizr), SHA-256 hash in independent custody before data; hash chain released before unblinding.
- ≥10% sham hops; ≥5% zero-signal DDS injections (+10 mHz), recovered within ±10% or the gate stays shut.
- Frozen containerized analysis pipeline; code hash on OSF.
- Stage positions masked during blinded running; early peek marks the record COMPROMISED permanently.

### 5.7 Governance and publication (signed before data)
1. Claim sheet + both-sides bet (update conditions) signed and hashed on OSF before hardware lock; refusal recorded verbatim.
2. Immutable timestamped raw data, auto-archived; exclusions only via preregistered quantitative thresholds.
3. Internal positive = "unconfirmed anomaly"; public claim requires independent-seed replication on different hardware: same-sign |Δf| > SESOI in both runs AND combined randomization p < 1×10⁻⁴. No press before replication.
4. Public amendment log: every post-unblinding reinterpretation = new hypothesis, new preregistration.
5. Null publication target: equivalence bound with full GUM-style uncertainty budget (k=2), every term traceable to measurement; OSF + PCI Registered Report path.
6. Final report carries the provenance paragraph and the signed claim sheet as supplementary material.

---

## 6. Error Budget (LOC-1 v2, at 20.75 kHz)

| Term | v1 (uncontrolled) | v2 (post-engineering) | Mechanism of suppression |
|---|---|---|---|
| Differential temperature | 1–14 Hz equiv. | ≤0.1–0.3 mHz | 300 µK contract + witness sphere + warm-dummy verification |
| Remount/stage stress | 2 Hz–2 kHz | ≤2 mHz | kinematic nodal mount; hops with deadtime; no remounts (rail translation) |
| Barometric / humidity | ±0.3 Hz / 0.1 Hz | ~0 (vacuum) | chamber |
| Dither microphonics | n/a | ≤1 mHz (diagnostic channel only) | mHz-band dither, chamber-fixed electrodes |
| Clock | 2×10⁻⁸ Hz | negligible | GPSDO + DMTD |
| Seismic/tides/magnetic | <1 mHz | negligible | isolation + non-magnetic artifact |
| Electronics TCf | unmonitored | nulled | LC dummy parallel null |
| **Combined floor** | ~1–15 Hz | **≈5–10 mHz worst case** | SESOI = 3× floor = **30 mHz** |

Instrument resolution (loop + counter): ~0.1 µHz–mHz class — two-plus orders below the physics floor. The experiment is systematic-limited by design intent, and the systematics are measured, not assumed.

---

## 7. Claims Disposition and Provenance Text

### 7.1 The claim sheet (required signature)
Before hardware lock, the proponent signs: mode identity, expected f₀ (factor-2 tolerance), expected shift magnitude and sign, the disconfirmation condition ("null below 30 mHz at 0.40 m rejects the claim as specified"), and a personal update condition ("what result would change your mind"). Refusal is recorded verbatim and the work proceeds as a *demonstration*, published as such.

### 7.2 Provenance paragraph (for the final report)
"This experiment originated from a claim obtained through a non-empirical (channeled) source, asserting a position-dependent resonance near 230 kHz. The panel treats provenance as irrelevant to evidential weight — hypotheses are licensed by their testability, not their origin — while noting the literal claim is falsified on physical grounds before data-taking: a 230 kHz breathing mode is incompatible with a 100 mm copper sphere, for which theory and prior measurement give 10.5–20.75 kHz. With the proponent's written amendment, the confirmatory test targets the physically real breathing mode at 20.75 kHz. We report this history in full because the credibility of a null experiment rests on the claim being pinned down before, not after, the data."

---

## 8. Expert Panel Change Log (3 rounds)

**Round 1 — attack.** Metrologist: mode error, thermal wall, singular topology, no calibration chain. RF engineer: VNA mismatched, transducer unspecified, µHz fantasy vs thermal wander; proposed DMTD beat readout. Physicist: retarget mode, modulate not translate, 3-sphere swap, equivalence-bound null. Statistician: no estimand, vacuous gate, drift ≡ signal, no SESOI. Skeptic: unpinned claim = unfalsifiable; governance absent.

**Round 2 — convergence.** Mode settled: solid 100 mm @ 20.75 kHz (B conceded shell; C's scaling argument adopted; A self-corrected TCf to 3.3 Hz/K). SESOI rule adopted (3× floor; digits 20/30/50 debated). Dither-band fight: Hz vs mHz. D's gradient-vs-contrast objection elevated full-stroke hops to primary. E's claim-sheet and D's estimand recognized as the same object.

**Round 3 — verdict.** Motion: hops primary (ABBA, τ = 1.5 h, B = 40, jittered, null hops, ≥300 s veto); dither diagnostic only at pilot-selected f_mod ∈ [0.05, 0.13] Hz; rotary rejected as primary (rotating-wiring microphonics), kept as optional cross-check. SESOI = 30 mHz via clamp rule (signed by all; B's carriage term bounded ≤1 mHz by design rule). Scope statement signed by C. Replication criterion adopted as prereg text. **Unanimous: VIABLE AS AMENDED — conditional GO** (conditions: claim-sheet signature, Stage-0 gate, warm-dummy gate; failure of any gate = stop, not loosen).

---

## Appendix — Evidence Files

All raw research artifacts (verbatim excerpts, URLs, dates, confidence ratings) live in `/mnt/agents/output/research/`:

- `sphere_dim01.md` … `sphere_dim10.md` — the ten research dimensions (patents ×2, repos, sphere physics, error budget, null-test lessons, differential metrology, frequency floors, preregistration, prior art)
- `sphere_cross_verification.md` — confidence tiers and conflict zones (CZ-1 mode conflict, CZ-2 Q, CZ-3 TCf)
- `sphere_insight.md` — the seven cross-dimension insights
- `panel_seed_brief.md`, `panel_r{1,2,3}_{metrologist,rf,physicist,statistician,skeptic}.md` — full three-round panel record
