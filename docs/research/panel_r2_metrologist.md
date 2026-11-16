# PANEL ROUND 2 — Dr. A. (Precision Metrology)

**First, a correction I owe the panel.** My Round-1 thermal sensitivity at 20.75 kHz was
mis-computed: dlnf/dT = −1.6e-4/K gives **3.3 Hz/K at 20.75 kHz**, not 0.6 Hz/K. The
relaxation vs. 230 kHz is ~11×, as Dr. C stated, not my 1.8×. Consequences: the 1 mK
calibration injection predicts **3.3 mHz** (not 0.6); the differential-temperature spec
for a 1 mHz floor is **300 µK** (not 600 µK); my flaw-3 residual becomes 1–2.6 mHz. All
conclusions survive — but a metrologist who won't recalibrate his own numbers has no
business reviewing anyone's. Corrected budget below.

## Responses to other experts

**Dr. B (RF)** — *Largely agree, one substantive disagreement.* Accept: dual self-excited
electrostatic loops, ppm-stabilized bias, DMTD beat-count vs GPSDO (counter 0.2 µHz @1 s
[dim02] is ample), VNA demoted to mode survey, LC dummy electronics channel. **Reject the
thin shell.** 10.5 kHz's TCf of 1.7 Hz/K is only 2× better than the solid sphere's
3.3 Hz/K — and you pay for it in fabrication: two spun hemispheres + an equatorial weld
seam that splits degenerate modes, concentrates mount stress, and defeats dimensional
traceability (you cannot CMM a seam). The solid 100 mm sphere is traceable to gauge
blocks at ±1 µm and has GW-sphere Q heritage (~1e5 [dim04]). We control temperature to
µK either way; 2× TCf is not worth an uncharacterizable artifact. On his question: my
differential spec, restated at the solid sphere, is **≤300 µK pair-differential** for a
1 mHz floor — and the defense is the [dim07] numbers: at 92–97% tracking, that requires
raw gradients ≤3–10 mK across 0.4 m, which a two-stage Cu equalization block delivers.
I'll defend it with the 2-week run's measured tracking residuals, and if residuals show
<95% tracking, the spec tightens automatically via SESOI = 3× floor.

**Dr. C (physicist)** — *Agree on mode, disagree on dither rate and SESOI.* 20.75 kHz:
yes. His "test the specific 230 kHz claim" reframe is right, and I'll sharpen it: the
literal claim (230 kHz breathing on a 10 cm sphere) is falsified **at the Stage-0 mode
survey bench** by LDV mapping — no position data needed, cost ≈ zero. The surviving
experiment is generic position-dependence, and must say so. Dither: 0.1–1 Hz is too
fast. Ring-up at Q=1e5, 20.75 kHz is τ = Q/πf₀ ≈ **1.5 s**; a 1 Hz dither never settles,
and a stage cycling ±5 mm at 1 Hz for weeks is a wear and vibration injector. Dr. B's
0.1–1 mHz is the right band. My spec: **f_mod = 1/τ_ADEV-min** — modulate at the measured
Allan-deviation minimum of the actual lock, expected 0.5–2 mHz (period 500–2000 s);
5τ ≈ 8 s settle per dwell is trivially met. SESOI: 1e-7–1e-8 fractional (0.2–2 mHz) sits
*below* the plausible thermal/remount floor — that's aspirational sensitivity, not a
SESOI. Adopt Dr. D's formula instead (below).

**Dr. D (statistician)** — *Agree almost entirely; adopt his machinery.* The n=3
permutation gate (min p=0.25) is indeed vacuous — good catch. Pilot-for-variance (20
blinded pairs), MDE-powered n, staged unblinding G1–G4, α=0.01, ≤2 O'Brien–Fleming looks:
all adopted. One amendment to his amendment: his 5–15 Hz SESOI is the *un-engineered*
230 kHz figure. At 20.75 kHz with the 300 µK differential and nodal mount, the floor is
mHz-scale. I propose **SESOI = max(3 × measured pilot floor, 20 mHz)**, i.e.
~1e-6–1.5e-6 fractional — and yes, the preregistration must state in the first paragraph
that this is ~13 orders of magnitude weaker than cavity prior art (1e-19 [dim10]). Honest
weakness, stated up front, is the price of doing the experiment at all.

**Dr. E (skeptic)** — *Agree, with one engineering fix.* Signed pre-committed claim sheet
before hardware: yes — and CZ-1 proves its worth, since the sheet would have caught the
230 kHz error before a dollar was spent. Stage-0 LDV mode-ID gate: yes, and it likely
falsifies the literal claim outright (see Dr. C). **2-week empty-chamber run: feasible
but must be "warm-dummy," not empty.** An empty chamber misses drive self-heating and LDV
photothermal loading. Run it with inert Cu dummy spheres (same mass/finish, unpowered
resonators) + fully live electronics: 2 weeks = ~1200 dither cycles at 1 mHz, 2 full
swap cycles, ADEV characterizable to τ≈1e5 s. Gate criteria: pair-differential ≤300 µK,
ADEV flat to 1e5 s, no spectral line at f_mod above 1 mHz. It misses seasonal drift —
accept the limitation, note it in the prereg. g-2 hidden offset, ≥10% shams, source
firewall: cheap, adopt all.

## Updated position (≤200 words)

**LOC-1 is viable as a rigorous null experiment — at 20.75 kHz, on a solid 100 mm Cu
sphere, with a measured-floor SESOI of ~20 mHz (≈1e-6 fractional), and it must be sold as
methodology plus claim-falsification, not sensitivity.** The panel has converged
correctly: mode retarget (B, C, me), swap + third device + pilot (D, me), claim sheet +
Stage-0 gate (E, C), modulation at the ADEV minimum (B's band, my criterion). Remaining
genuine disagreements are narrow: shell vs. solid (I hold solid — traceability beats a
2× TCf), and whether the prereg tests the literal 230 kHz claim (Stage 0 does it for
free) or only generic position-dependence. The honest framing: cavity tests bound
position-dependence at 1e-19 [dim10]; we would see 1e-6. Our contribution is a
preregistered, blinded, calibration-traced null at a new carrier with a complete error
budget — the first time *this specific claim* is tested with rigorous null methodology.
That is publishable. Anything stronger would be dishonest.

## Final amendment list (revised, numbered)

1. **Artifact & mode:** solid 100.00 mm Cu sphere, breathing mode 20.75 kHz (TCf
   −3.3 Hz/K corrected), Q≥1e5 verified. Stage-0 LDV mode map on both spheres before any
   position data; 230 kHz on this geometry = claim falsified at the bench.
2. **Thermal:** two-stage chamber; pair-differential **≤300 µK** (1 mHz floor), raw
   gradient ≤3–10 mK per [dim07] tracking; ITS-90-traceable bridges, 10 µK resolution,
   synchronous logging.
3. **Topology:** three spheres (test, reference, never-moved witness) + weekly blinded
   swaps. Electronics-null LC dummy loop per Dr. B is additional, not a substitute.
4. **Mount & modulation:** kinematic nodal 3-point mount; flexure stage ≤1 µm / ≤10 µrad;
   remount scatter ≤10 mHz over 20 trials; dither ±5 mm at **f_mod = 1/τ_ADEV-min**
   (expected 0.5–2 mHz), lock-in detection; ring-up τ≈1.5 s respected.
5. **Readout:** dual self-excited electrostatic loops, DMTD beat vs GPSDO (per Dr. B);
   VNA = mode survey only; in-situ lock ADEV measured 24–72 h pre-unblinding.
6. **Calibration chain:** CMM ±1 µm to gauge blocks; CTE of blanks ±10%; daily
   counter/DMTD check vs GPSDO; end-to-end **1 mK injection → 3.3 mHz recovered** through
   blinding software (corrected prediction); ≥10% sham runs.
7. **Statistics (adopt Dr. D):** estimand defined pre-hoc; 20-pair blinded
   pilot-for-variance; **SESOI = max(3 × measured floor, 20 mHz)**; G1–G4 staged
   unblinding, α=0.01, ≤2 OBF looks; prereg states 13-orders-weaker-than-cavities in
   paragraph 1.
8. **Verification gate (amend Dr. E):** 2-week **warm-dummy** blind run (inert spheres,
   live electronics) — pass criteria: ≤300 µK differential, ADEV flat to 1e5 s, no f_mod
   line >1 mHz; seasonal limitation disclosed in prereg.
