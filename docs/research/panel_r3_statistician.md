# ROUND 3 (FINAL) — Dr. D. (Statistician)

## 1. Final verdict

**VIABLE — conditional GO.** With the panel's converged machinery (verbatim estimand, 3-sphere
+ role swap, ABBA blocks, blinded pilot, staged G1–G4 unblinding, α=0.01 with ≤2 OBF looks,
hashed schedule custody, ≥10% shams / ≥5% injections), the design satisfies every statistical
requirement I raised in Round 1. Expected outcome is a null reported as an equivalence
statement |Δf| < 30 mHz (Δf/f ≈ 1.4e-6 @ 20.75 kHz) with exact randomization-based Type-I
control. That bound is ~14 orders weaker than cavity prior art [dim10] but is a legitimate,
honest first direct bound on this macroscopic position-dependence claim — provided C signs
the scope statement (this device, this mode, this position pair). If the scope statement or
the swap is dropped, my vote reverts to NO-GO.

## 2. Final motion + analysis spec (statistical ruling)

**Ruling: full-stroke hops are primary; dither is diagnostic; continuous rotary is rejected.**

- **Primary motion:** full 0.40 m hops, ABBA block sequence (randomized ABBA/BAAB per block),
  dwell τ = 1.5 h, block = 6 h, B = 40 blocks (~10 days hopping) inside a 6-week run with role
  swaps at weeks 2 and 4. Rationale: only the full-stroke contrast measures the preregistered
  estimand Δf = f(x_B) − f(x_A); the gradient-vs-contrast argument stood unrefuted — a
  ±5 mm dither measures df/dx × 5 mm and can null a localized effect. C's continuous rotary is
  rejected as primary: it destroys the discrete permutation reference set, converts the
  estimand into a regression coefficient on a continuous path, and re-opens the Dayton Miller
  drift-aliasing channel [dim06]. B's square-wave is accepted — it *is* the hop sequence,
  just at diagnostic amplitude.
- **Diagnostic motion:** ±5 mm dither, sinusoidal, f_mod fixed by blinded-pilot rule:
  f_mod = argmin of demodulated noise density over [0.05, 0.13] Hz. The upper cap is set by
  A's ring-up τ ≈ 1.5 s (period ≥ 5τ_ring ⇒ f ≤ 0.13 Hz); the lower cap keeps the estimand
  above the thermal-drift corner. A's 0.5–2 mHz (1/τ_ADEV-min) is rejected for the *dither* —
  at mHz the drift corner eats the lock-in SNR — but is noted as the optimal *integration*
  time for the primary hop dwells. B must confirm reaction-force microphonics <1 mHz at the
  chosen f_mod (10 mN on 4.7 kg must not exceed the floor budget) before G1 closes.
- **Analysis (preregistered, hash-frozen):** per-dwell 3-sphere-corrected frequency estimates;
  block contrast c_k = (A1 − B1 − B2 + A2)/2 per ABBA block (exact linear-drift cancellation);
  primary statistic = Σ c_k / B; inference = permutation over the 2^40 block-label
  randomizations actually drawn (custodian-verified hash chain), two-sided α = 0.01; 95%
  interval by inversion; null reported as upper limit U and equivalence claim iff U < SESOI.
  Dither channel: lock-in at f_mod, analyzed as parallel diagnostic + LC-dummy parallel null.

## 3. Final SESOI

**SESOI = 30 mHz @ 20.75 kHz (Δf/f ≈ 1.4e-6), via the preregistered rule
SESOI = clamp(3 × pilot-measured differential floor, 20, 50) mHz.** Nominal 30 mHz = 3× the
10 mHz worst-case combined floor (thermal 0.1–0.3 mHz, dither ≤3 mHz, mount ≤2 mHz, clock
negligible). This satisfies A (≥20, 3× floor), C (30–50 accepted), and E's conservatism via
the upper clamp. The digit is fixed from the blinded pilot *before* any label touches the
analysis; stretch reporting at 2 mHz (1e-7 fractional) labeled secondary, never primary.

## 4. Rulings on E's addition and replication

- **E's "single confirmatory bin + look-elsewhere control": ACCEPTED.** It is exactly my
  Amendment 8: one primary endpoint (Δf of the 20.75 kHz mode at f_mod/hop contrast). The
  permutation test gives exact familywise control for that single bin by construction; all
  other modes/frequencies are exploratory under BH-FDR or descriptive-only. No cost, real
  protection — adopted verbatim into the prereg.
- **Replication criterion: ADOPTED as preregistered text.** Any positive triggers an
  independent-seed replication with frozen pipeline; a public claim requires same-sign
  |Δf| > SESOI in both runs AND combined randomization p < 1e-4 (Fisher combination of the
  two permutation p-values). E's no-press clause binds until both conditions are met.
- **C's scope statement: required signature.** Prereg must read: "This experiment bounds
  position-dependent shift of the 20.75 kHz breathing mode of this 100 mm Cu sphere over a
  0.40 m displacement. It does not test the original '230 kHz' claim, which requires
  R ≈ 0.9 cm hardware [dim04]."

## 5. Final protocol additions (≤10 lines)

1. Prereg (OSF, hash-frozen): estimand verbatim, SESOI rule, B=40, τ=1.5 h, f_mod selection rule, analysis-code hash, deviation policy.
2. Schedule: block-randomized ABBA/BAAB (randomizr), SHA-256 in third-party custody before first data; ≥10% sham hops; ≥5% software injections.
3. Blinded Stage 0.5 pilot: 5 days → noise spectrum/ADEV → fix f_mod ∈ [0.05, 0.13] Hz, confirm σ_pair, set SESOI via clamp rule.
4. Run: 6 weeks, 40 blocks, role swaps weeks 2 and 4; continuous T(×2)/P/RH covariates logged blind.
5. Gates: G1 hashes verified; G2 sham/injection recovery ±10% + LC-dummy null tighter than primary; G3 blinded residual diagnostics; G4 B complete → single primary test.
6. Inference: permutation over realized randomizations, α=0.01, ≤2 OBF looks; report p, 95% interval, U, equivalence vs SESOI.
7. Null result → publish upper limit |Δf| < U ≈ 30 mHz (Δf/f ≈ 1.4e-6) with full systematic budget.
8. Positive result → independent-seed replication; claim only if same-sign, >SESOI, combined p < 1e-4; no press before.
9. Deviations hashed within 24 h; >5% blocks affected → worst-case sensitivity re-analysis; post-unblinding changes exploratory-only.
10. Claim sheet co-signed by all five panelists, including C's scope statement and E's single-bin clause, deposited with the schedule hash.

*Dr. D. signs off: the statistics of this experiment are now sound. What remains is
engineering discipline — hold the 30 µK contract, confirm the dither floor, and do not
touch the pipeline after G1.*
