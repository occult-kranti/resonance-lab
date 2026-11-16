# LOC-1 Insight Extraction (Phase 6) — sphere_insight.md

## Insight 1 — The experiment as proposed cannot see its own target mode [HIGH]
The claimed band (≈230 kHz breathing mode) is incompatible with a 10 cm copper sphere by a factor ~10 (real: ~20.75 kHz solid / ~10.5 kHz shell; 230 kHz requires R≈0.9 cm). [dim04, dim05]
Derived from: Dim04 × Dim05 (both independently computed the size↔frequency relation).
Implication: The #1 pre-registration decision is mode identity + sphere size, derived from first principles, not from the source material's number.

## Insight 2 — Thermal is not a systematic to "control"; it IS the experiment [HIGH]
TCf ≈ −30…−70 Hz/K while the sought Δf is unknown; 0.4 m lab stratification gives 1–14 Hz fake shifts; µHz ambition demands µK control. Every other systematic (air ±0.3 Hz, tides 1e-10 Hz, magnetic <1e-13 Hz) is orders below thermal. [dim05, dim08, dim04]
Derived from: Dim05 × Dim08 × Dim04.
Implication: Budget and design effort should flow ~80% to thermal equalization between positions (or its elimination via Insight 3), not to instruments — the patent landscape confirms instruments already over-resolve. [dim02]

## Insight 3 — Modulation collapses the hardest problems [HIGH]
A rotary/oscillating stage sweeping through the positions at f_mod with lock-in detection: (a) converts drift into a known-frequency signal, (b) makes thermal time-constants common-mode, (c) allows direction-reversal nulls and label-scramble statistics, (d) matches Eöt-Wash's proven architecture. Static A/B is defenseless (Dayton Miller aliasing precedent). [dim06, dim07, dim05]
Derived from: Dim06 × Dim07 × Dim05.
Implication: Replace discrete repositioning with continuous sinusoidal position modulation; the reference-sphere identifiability "singular problem" (dim07) is largely dissolved because reference sees the same thermal/drift environment on the same timescale.

## Insight 4 — The two-sphere differential design has an identifiability trap [HIGH]
Matched-pair tracking is percent-level (92–97% thermal rejection), not ppb; per-device aging is non-common-mode; with one reference, reference drift is indistinguishable from signal (NOAA "singular problem"). Fixes: three-cornered hat (3 spheres), periodic sphere swap (A↔B exchange symmetry), or modulation per Insight 3. [dim07]
Derived from: Dim07 × Dim06.
Implication: Add a third sphere or swap schedule to the protocol — cheap hardware, closes the largest logical hole.

## Insight 5 — The patent record is a measurement-floor map, and it reroutes the readout [MEDIUM-HIGH]
No patented VNA/LDV reaches µHz (floors: VNA ~1e-7 ≈ 23 mHz @230 kHz; heroic 3e-10). GPSDO + PLL/ring-down/DMTD comparison reaches 1e-12–1e-13. The patent set also hands the project its calibration chain: NIST LDV-calibration patent ties LDV to the frequency reference; ECal removes connector systematics; STACIS patents fix isolation. [dim02, dim01, dim08]
Derived from: Dim02 × Dim08 × Dim01.
Implication: Primary readout should be a phase-locked/ring-down beat against the GPSDO reference (DMTD-style), with the VNA demoted to survey/characterization.

## Insight 6 — The null is the likely and valuable result; design must make it quotable [HIGH]
All position-dependence tests are null at extraordinary precision (Δν/ν ~1e-19 cavity tests; k_α ~1e-7). LOC-1's value is a clean mechanical-sector null with published error budget. That requires: preregistration (OSF + PCI RR path), hidden-offset blinding (g-2 style), sham runs (LIGO Big Dog lesson — the injected set may contain zero signals), executable analysis plan (anti-PARKing), equivalence-bound null machinery (SESOI via sensitivity analysis). [dim10, dim09, dim06]
Derived from: Dim10 × Dim09 × Dim06.
Implication: Write the publication plan for the null first; grade the project on upper-limit quality (e.g., |Δf/f| < X at 95% CL), not on "finding something".

## Insight 7 — Reusable OSS stack exists end-to-end [HIGH]
scikit-rf (VNA/S11), lmfit + resonator_tools (Lorentzian/circle fits), allantools (ADEV), pymeasure/QCoDeS (automation + DB audit trail for preregistration), randomizr (block-randomized schedule). No mature open elastic-sphere eigenfrequency solver found → small in-house Rayleigh–Lamb verification script needed. [dim03]
Derived from: Dim03 × Dim09.
Implication: Software cost ~0; analysis pipeline can be fully public and reproducible, strengthening the preregistration.
