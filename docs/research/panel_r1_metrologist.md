# PANEL ROUND 1 — Dr. A. (Precision Metrology / Error Budgets / Calibration Chains)

**Re: LOC-1 v1 — "position-dependent resonance" of a Cu sphere**

## Position (≤200 words)

**As designed, LOC-1 v1 is not measurable — but it is repairable.** The proposal has a
metrology-grade skeleton (GPSDO/Rb reference, differential readout, blinding,
preregistration) wrapped around two uncalibrated assumptions: the frequency itself and the
thermal plan.

First, the CZ-1 conflict is not a detail, it is an identity problem: a 10 cm Cu sphere
breathes at ≈20.75 kHz (solid) or ≈10.5 kHz (thin shell), not 230 kHz [dim04, dim05].
Whoever specified 230 kHz specified a 0.9 cm-radius sphere. We cannot write an error
budget against a resonance that doesn't exist for the artifact at hand.

Second, the thermal demand is brutal but quantifiable: Cu dlnf/dT ≈ −1.6e-4/K gives
~37.6 Hz/K at 230 kHz (~0.6 Hz/K at 20.7 kHz). A defensible smallest-detectable Δf is
therefore set by thermal equalization of the pair, not by the VNA (23 mHz floor) or
clock (2e-8 Hz) [dim02, dim08].

Third, the differential trap [dim07] is real: 92–97% thermal tracking leaves 3–8% of
gradient error in-band, and one-reference topology aliases drift into signal. Fix mode,
mount, and thermal chain, and this becomes a publishable null experiment.

## Fatal flaws (numbered, with magnitudes)

1. **CZ-1 mode/species error.** Claimed "breathing mode ≈230 kHz" for a 10 cm sphere
   contradicts elasticity: 20.75 kHz (solid) / 10.5 kHz (shell); 230 kHz needs R≈0.9 cm
   [dim04, dim05]. The experiment as written has no defined measurand. Everything
   downstream (Q, mount, electronics) is sized wrong.
2. **Thermal gradient floor dominates the budget.** 40–400 mK gradients over 0.4 m →
   1–14 Hz spurious Δf at 230 kHz [dim05]. With no active equalization specified, this
   is 3–5 orders of magnitude above the instrument floor and would swamp any conceivable
   "signal" band.
3. **One-reference differential topology.** Matched-pair tracking 92–97% means a 10 mK
   chamber gradient appears as 0.3–0.8 mK differential → 11–30 mHz (at 230 kHz) to
   ~0.2–0.5 mHz (at 20.7 kHz) residual, uncorrectable, and per-device aging is
   non-common-mode [dim07]. Drift ≡ signal. This is the Dayton Miller failure mode
   [dim06].
4. **Remount/tilt stress: 2 Hz–2 kHz per move** [dim05]. The act of moving the sphere —
   the very variable under test — injects the largest systematic in the budget. Without a
   kinematic/nodal mount, each "position change" measures mount hysteresis, not position.
5. **Q assumed 18k, literature says ~1e5 (Cu, vacuum, RT)** [dim04]. Linewidth at 20.7
   kHz, Q=1e5 is 0.2 Hz; at Q=18k it's 1.15 Hz. Frequency-fit precision and lock-in time
   constants are mis-sized by 5×.
6. **No calibration chain specified.** "Locked to GPSDO/Rb" is stated, but nothing traces
   the sphere's *dimensional* metrology (diameter, sphericity, CTE) to a standard. A
   metrology claim without an unbroken traceability chain is not a measurement.

## Concrete amendments (numbered, actionable)

1. **Resolve CZ-1 before anything else.** Settle the artifact geometry: adopt a
   **solid 100.00 mm Cu sphere, breathing mode 20.75 kHz** (best characterized; GW-sphere
   pedigree [dim04]) and *drop* 230 kHz, OR if the proponent insists on 230 kHz, the
   artifact becomes a ~18 mm sphere with entirely different mount/thermal numbers. My
   recommendation: 20.7 kHz — thermal sensitivity drops 1.8× (0.6 Hz/K), mount modes are
   easier, and Q literature is direct.
2. **Thermal equalization, not just control.** Target **differential pair ΔT ≤ 30 µK**
   (sets 1 mHz floor at 230 kHz [dim02]; only ~600 µK needed at 20.7 kHz for the same
   floor — a 20× relaxation). Spec: two-stage chamber (outer ±10 mK, inner copper
   equalization block ±0.5 mK), each sphere in its own thermally lagged sub-enclosure,
   **4× calibrated thin-film Pt100 or thermistor bridges per sphere** (calibrated against
   SPRT to ITS-90, 1 mK absolute, 10 µK resolution), logged synchronously with frequency.
   Gradient map of the full 0.4 m translation path before first data.
3. **Kill the singular topology.** Add a **third sphere** (witness, never moved) or a
   **swap protocol** (each sphere occupies each station; position effect survives swaps,
   device drift does not) [dim07]. A/B/A/B with sphere identity scrambled and blinded.
4. **Kinematic nodal mount.** Support at vibrational node (three-point tungsten carbide
   or fused-silica point contacts at the breathing-mode nodal circle for the breathing
   mode, or wire suspension for torsional readout). Move with a **closed-loop flexure
   translation stage** (repeatability ≤1 µm, tilt ≤10 µrad), and add a **dither
   modulation** (±5 mm, 0.1 Hz) with lock-in detection per [dim06] — modulate the
   variable instead of static A/B. Re-approach repeatability of the mount itself must be
   measured: remount 20×, record Δf scatter, require ≤10 mHz.
5. **Clock/readout chain.** GPSDO (1e-12–1e-13) → VNA/external LO; verify with **DMTD
   against the Rb** (ADEV <1e-13 @1 s [dim02]). Measure **Allan deviation of the actual
   sphere-lock loop** in situ for 24–72 h before unblinding; that ADEV curve, not the VNA
   datasheet, sets the defensible smallest-detectable Δf.
6. **Defensible smallest-detectable Δf (my number).** With amendments 2–5: **σ ≈ 5–10
   mHz at 20.7 kHz** (fractional ~3–5e-7), dominated by residual differential temperature
   and remount scatter — 3 orders of magnitude better than v1's uncontrolled 1–14 Hz.
   Claim a SESOI of 50 mHz (5σ) and power the run count from the measured ADEV.
7. **Calibration chain (traceability).** Sphere diameter/roundness on a CMM or
   roundness tester (±1 µm, traceable to gauge blocks/laser wavelength); CTE of the
   actual blanks measured (−1.6e-4/K assumed, verify ±10%); frequency counter and DMTD
   verified against GPSDO daily; inject a **known synthetic shift** (heat one sphere by a
   metered 1 mK → predicted 0.6 mHz at 20.7 kHz) as an end-to-end calibration of the
   entire chain including the blinding software — the metrologist's version of a Big Dog
   injection [dim06].
8. **Systematics exaggeration runs** [dim06]: deliberately impose 1 K gradients, 100 µm
   remount offsets, 10× tilt; confirm the analysis pipeline returns the injected values.
   Pipeline that can't recover a 1 K injection can't be trusted at 30 µK.

## What I want to hear from the other panelists

- **RF engineer**: Can you hold a 20.7 kHz (or 230 kHz) sphere resonance in a phase lock
  with ADEV <1e-7 fractional at 1 s given Q≈1e5 (linewidth 0.2 Hz)? What excitation
  (piezo vs. electrostatic) avoids loading Q, and does the LDV photothermal/shot noise
  floor fit under my 5 mHz? Also: is the VNA phase-fit 1e-7 claim [dim02] achievable on
  *this* resonator, or only on the datasheet DUT?
- **Experimental physicist**: The 230 kHz figure — is there *any* claimed provenance for
  it, and does the hypothesis survive restating at 20.7 kHz? If the "effect" is
  position-dependent, what's the predicted scaling with the 0.4 m baseline so we can set
  the SESOI honestly rather than by sensitivity alone?
- **Statistician**: Given my target σ≈5–10 mHz and a drift-dominated noise floor, what
  does the swap/dither design do to the required N, and how do we handle non-stationary
  (1/f, aging) noise in the preregistered estimator without eating our blinding?
- **Methodologist**: Is the OSF + PCI RR preregistration [dim09] structured so that the
  CZ-1 geometry decision (10 cm @20.7 kHz vs 0.9 cm @230 kHz) is frozen *before*
  unblinding? And does the equivalence-bound null machinery accept a SESOI set by
  measured ADEV (a sensitivity argument), or do we need the proponent to state a
  predicted magnitude first?
