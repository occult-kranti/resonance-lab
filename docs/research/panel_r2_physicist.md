# ROUND 2 — Dr. C. (precision tests / systematics hunting / upper limits)

## Definitive calls on the open questions

**(1) Mode/frequency: solid 10 cm Cu sphere, fundamental breathing mode at 20.75 kHz. Final.**
Scaling argument (first principles): for the fundamental radial mode f₀ ∝ v/R (mode
eigenvalue ξ ≈ const for fixed material/geometry class). Check internal consistency of
[dim04, dim05]: solid 10 cm → 20.75 kHz; shell → 10.5 kHz (factor ~2, expected: shell
stiffness ∝ h/R); 230 kHz ⇒ R ≈ 0.9–1 cm, i.e. ratio 230/20.75 ≈ 11 ≈ radius ratio to a
cm-scale object. No *overtone* rescues the claim: first radial overtone of a solid sphere
sits at ~2–3× f₀ ≈ 45–65 kHz, not 230 kHz. So 230 kHz on a 10 cm body is not a mode
mislabeling — it is a cm-scale object's frequency pasted onto a dm-scale object. The claim
as stated is internally inconsistent; the only honest experiment is at the true f₀. Solid
over shell (contra B): solid is FEA-trivial, mode density near f₀ is low, and shell f₀
carries h/R sensitivity that couples thickness inhomogeneity into the error budget. Shell
is acceptable fallback *only if* Stage-0 Q/mount-loss data favor it.

**(2) Dither frequency: neither extreme. Continuous rotation, f_mod ≈ 3–10 mHz
(period 100–300 s), radius 0.20 m → full 0.4 m sinusoidal position modulation.**
Mechanics: linear dither of ±0.2 m at 0.1 Hz (my R1 suggestion) implies a ≈ 0.08 m/s² —
shakes the chamber; I withdraw it. A's ±5 mm starves the signal 80× if the effect scales
with separation. B's 0.1–1 mHz (period 10³–10⁴ s) sits *inside* the thermal-wander band —
the lock-in then demodulates drift, reproducing Dayton Miller [dim06] with extra steps. A
motorized rotary boom at 100–300 s period gives centripetal a = ω²r ≈ 9e-5 m/s²
(negligible), encoder-defined phase, no start/stop shocks. Final rule: f_mod chosen at the
minimum of the *measured* environmental+chain noise spectrum from Stage-1 pilot data, with
100–300 s as the prediction; demodulate at f_mod and 2f_mod (nonlinearity check).

**(3) SESOI: I concede and converge on A's/D's position.** My R1 figure (Δf/f ~ 1e-7–1e-8)
was a *statistical* sensitivity (DMTD ADEV <1e-13 @1 s [dim08] averaged over ~50 modulation
cycles) and ignored the systematic floor. Per D's rule (SESOI = 3× post-engineering floor)
and A's σ ≈ 5–10 mHz: **preregister SESOI = 50 mHz @ 20.75 kHz, i.e. Δf/f ≈ 2.4e-6, to be
revised once after Stage-1 floor measurement, then frozen.** Reconciliation of D's 5–15 Hz:
that number is correct *at 230 kHz* (37.6 Hz/K [dim02]); at 20.75 kHz the same thermal
terms shrink ~18× → 0.3–0.8 Hz, and the 30 µK differential contract + lock-in rejection
brings the floor to the 10 mHz class. Honest framing (agreeing with D): 2.4e-6 is **13
orders weaker** than cavity bounds (1e-19 [dim10]) and this must appear in the abstract.

**(4) Answer to A — baseline scaling: none exists, and that is itself a finding.** No
literature, no patents, no claimed mechanism [dim10]. GR predicts only the vertical redshift
(1e-19/mm [dim10]); our displacement is horizontal → null to ~10 orders below our floor.
Tides ~1e-10 Hz [dim05]. So the hypothesis predicts *no* scaling because it has no model.
Consequence: the claim sheet (E) must force the claimant to state a functional form
(linear? 1/x? threshold at some x?). If refused, we preregister a shape-agnostic design:
measure at ≥5 positions (x = 0, 0.1, 0.2, 0.3, 0.4 m — the rotary boom gives this
continuously), test null vs. any monotonic trend, and report *coefficient* bounds
(Hz/m for linear, Hz·m for 1/x) so the result constrains any future model. Physics-based
SESOI is impossible; sensitivity-based SESOI (50 mHz) is the honest substitute.

## Responses to panelists

- **Dr. A:** Agree on solid sphere, 20.75 kHz, 30 µK contract, kinematic nodal mount, third
  sphere, synthetic injections. Disagree on ±5 mm dither — see call (2); your σ budget
  survives because rotary motion is gentler than linear shuttling. Note discrepancy: you
  quote 0.6 Hz/K @20.75 kHz; fractional TCf −1.6e-4/K [dim02] gives 3.3 Hz/K. At 30 µK
  both give ≪1 mHz, but resolve the coefficient before Stage 1. Answers to your three
  questions: no provenance for 230 kHz [dim10]; hypothesis survives only restated at the
  true mode; no predicted scaling — handled shape-agnostically (call 4).
- **Dr. B:** DMTD beat-count vs GPSDO as the physics channel and VNA demoted to survey —
  adopted, this kills my R1 VNA floor concern. Dual self-excited loops and LC dummy null
  channel — adopted; the dummy channel is a free sham that runs 100% of the time. Reject
  0.1–1 mHz dither (thermal aliasing, call 2). On shell-vs-solid: I take solid; if your
  FEA shows the shell's Q and TCf (1.7 Hz/K) beat solid's mode-purity advantage, I'll swap
  — decide from Stage-0 data, not argument.
- **Dr. D:** Concede the SESOI point (call 3). Agree estimand verbatim in prereg, staged
  gates, α = 0.01, ≤2 looks, pilot-for-variance. The "≥3-pairs gate" was indeed vacuous as
  I stated it; replace with your estimand-first formulation.
- **Dr. E:** Your claim sheet is the gate that determines whether this experiment exists.
  If the claimant will not pre-commit mode, f₀, magnitude, sign, scaling, and
  disconfirmation criterion *in writing*, there is no hypothesis to test and we should say
  so in the report. Agree Stage-0 LDV mode-ID before any position data, source firewall,
  no press pre-replication.

## Updated position (≤150 words)

The experiment is now well-posed: solid 10 cm Cu sphere, 20.75 kHz breathing mode, rotary
continuous position modulation (r = 0.20 m, period 100–300 s), DMTD beat-count readout vs
GPSDO, three spheres with role swaps, 30 µK differential thermal contract, hidden-offset
blinding, continuous LC dummy + ≥10% sham runs, equivalence-bound null with SESOI = 50 mHz
(Δf/f ≈ 2.4e-6) frozen after Stage-1 floor measurement. The original 230 kHz claim is dead
and its non-provenance must be documented. The deliverable is a bound on the *specific*
restated claim, explicitly 13 orders weaker than cavity tests [dim10] — publishable via
PCI RR as a direct mechanical test with rigorous null methodology, not as a competitive
fundamental-physics bound.

## Final amendment list (revised, supersedes R1)

1. **Geometry:** solid 10 cm Cu sphere; target f₀ = 20.75 kHz; Stage-0 LDV mode-ID +
   FEA ±2% cross-check before anything else. Shell fallback only on Stage-0 Q evidence.
2. **Modulation:** motorized rotary boom, r = 0.20 m, continuous rotation period 100–300 s
   (f_mod ≈ 3–10 mHz, finalized at measured noise-spectrum minimum in Stage 1); lock-in at
   f_mod and 2f_mod; encoder phase logged; x₀ = 0 (parked) runs as continuous null.
3. **Readout:** dual self-excited electrostatic loops (B), DMTD beat-count vs GPSDO
   (ADEV <1e-13 @1 s [dim08]); VNA survey-only; LC dummy channel always on.
4. **Identifiability:** 3 spheres, all pairings, role swaps on rotary schedule; estimand
   written verbatim in preregistration (D).
5. **Thermal:** ≤30 µK differential between sphere positions over a full rotation (A);
   resolve TCf coefficient discrepancy (0.6 vs 3.3 Hz/K) in Stage 1; exaggeration runs at
   ±1 K and 100× tilt to calibrate couplings [dim06].
6. **Blinding:** hidden per-run additive offset (third-party custody), hashed schedule on
   OSF, ≥10% sham injections, pipeline must return null on all shams and the LC channel.
7. **Statistics:** equivalence-bound null; SESOI = 50 mHz = 3× post-engineering floor,
   one revision allowed after Stage 1 then frozen; α = 0.01; ≤2 looks; pilot-for-variance;
   report coefficient bounds (Hz/m, Hz·m) not just point null.
8. **Claim governance (E):** pre-committed claim sheet (mode, f₀, magnitude, sign, scaling,
   disconfirmation) before hardware purchase; provenance of 230 kHz documented as absent
   [dim10]; source firewall; no public claims pre-replication.
9. **Framing:** abstract states Δf/f ≈ 2.4e-6 reach vs. 1e-19 cavity bounds [dim10];
   deliverable defined as a bound on the restated specific claim.
