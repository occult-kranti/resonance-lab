# PANEL ROUND 3 (FINAL) — Dr. A. (Precision Metrology)

## (1) Final verdict

**VIABLE as amended — conditional pass.** Every Round-1 fatal flaw is now either
eliminated (CZ-1 by the 20.75 kHz retarget + Stage-0 mode survey; singular topology by
3-sphere + swaps; clock/readout by DMTD at ADEV ~5e-13 @1 s per Dr. B) or gated
(thermal contract and warm-dummy run; Q≥1e5 verification; remount scatter ≤10 mHz).
The experiment's honest value: a preregistered, blinded, calibration-traced null that
falsifies the specific 230 kHz claim (at Stage 0, and again via Dr. B's cheap R≈0.9 cm
secondary channel) and delivers a ~1.5e-6 fractional bound on position-dependence at a
new carrier — 13 orders weaker than cavity prior art [dim10], disclosed in prereg
paragraph 1. That is a publishable methodology result. If any gate fails, the answer is
to stop, not to loosen the gate.

## (2) Ruling on the motion profile

**Adopt Dr. D's primary estimand; my f_mod rule survives only as a diagnostic.** D's
objection is metrologically decisive and I concede it: a ±5 mm dither measures the local
gradient df/dx, not the 0.40 m contrast that constitutes the claim. Measurand first,
instrument second. Dr. C's continuous rotary is rejected: rotation makes mount stress and
tilt continuously time-varying, and a spinning artifact confounds orientation with
position — square-wave hops preserve the A/B swap symmetry the blinding depends on.

**Single prereg spec:**
- **Primary estimand:** full 0.40 m ABBA square-wave hops; dwell 1.5 h (≫ ring-up
  5τ ≈ 8 s and thermal re-equalization); 6 h blocks; B=40 blocks ≈10 days inside the
  6-week run; sphere swaps in weeks 2 and 4.
- **Diagnostic channel (not in the estimand):** small-amplitude ±5 mm dither at
  f_mod = pilot-selected argmin of measured lock ADEV within [0.05, 1] Hz (Dr. D's pilot
  band; 0.05 Hz ⇒ period 20 s ≈ 13τ, settle constraint satisfied). Used for lock-in
  systematics monitoring and df/dx mapping only; any detection claim made from the dither
  channel alone is out of scope by construction.

## (3) Ruling on SESOI

**30 mHz (≈1.5e-6 fractional at 20.75 kHz).** Reasoning: my formula
max(3 × measured floor, 20 mHz) and Dr. D's flat 30 mHz converge, because the pilot floor
will land at 5–10 mHz ⇒ 3× = 15–30 mHz. A single preregistered digit is cleaner for the
estimand machinery than a data-dependent formula — but keep the floor rule as the *floor*:
if the measured pilot floor ×3 ever exceeds 30 mHz, the run is invalid, not the SESOI.
Dr. E's ≥100× rejection of measured systematics is adopted as a **verification
criterion**, not the SESOI itself: at SESOI 30 mHz, total demonstrated systematic
contamination at f_hop must be ≤0.3 mHz. Dr. B's 10–50 mHz band brackets this; 30 mHz is
inside it.

## (4) Final protocol spec additions (metrology section, ≤10 lines)

1. Traceability: sphere diameter/roundness CMM ±1 µm to gauge blocks; CTE of both blanks
   measured ±10%; mass to ±10 mg; records lodged with prereg.
2. Calibration chain: GPSDO → DMTD → counter verified daily; in-situ lock ADEV reported
   24–72 h pre-unblinding and weekly thereafter.
3. End-to-end injection: 1 mK metered heat pulse → 3.3 mHz recovered through the full
   blinded pipeline, ±10%; ≥5% DDS injections per Dr. B.
4. Thermal contract: pair-differential ≤300 µK, raw gradient ≤3–10 mK over 0.4 m;
   ITS-90 bridges, 10 µK resolution, synchronous with frequency timestamps (±1 s).
5. Mount acceptance: 20-remount scatter ≤10 mHz; stage repeatability ≤1 µm, tilt ≤10 µrad,
   verified at each station before G1.
6. Witness sphere never moves; its drift curve is published with the primary result —
   it is the experiment's drift confession.
7. Secondary 230 kHz channel (R≈0.9 cm sphere, Dr. B): exploratory only, fenced in prereg
   as hypothesis-generating; no claims from it enter the primary estimand.
8. Warm-dummy gate (2 wk): ≤300 µK differential, ADEV flat to 1e5 s, no line at f_hop
   >1 mHz; failure = stop, not retune-and-continue.
9. Full uncertainty budget (k=2, GUM-style) published with the null, each term traceable
   to a measurement, not a datasheet.
10. Replication per Dr. D: same-sign |Δf|>SESOI in both runs, combined p<1e-4, before any
    claim; no press pre-replication.

**Bottom line:** the panel has converted an unfalsifiable long-shot into a bounded,
blinded, traceable measurement with pre-committed disconfirmation. As a metrologist I can
put my name on the error budget. Recommended: proceed to Stage 0.
