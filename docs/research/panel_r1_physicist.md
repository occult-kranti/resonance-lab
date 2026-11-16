# ROUND 1 — Dr. C. (precision tests / systematics hunting / upper limits)

## Position (≤200 words)

v1 as written is dead on arrival, but the *protocol skeleton* (preregistration, blinding,
differential readout, publish-either-way [dim09]) is exactly right, so I want to save the
method and kill the apparatus. Two terminal problems: (1) the claimed 230 kHz breathing mode
cannot exist on a 10 cm Cu sphere — theory and GW-sphere data put it at 20.75 kHz (solid) or
~10.5 kHz (thin shell); 230 kHz needs R ≈ 0.9 cm [dim04, dim05]. Any experiment "confirming"
230 kHz on a 10 cm body would be measuring an overtone, a mount resonance, or nothing.
(2) A static two-position A/B comparison with one reference is the classic
drift-aliases-signal trap (Dayton Miller, [dim06, dim07]): matched-pair thermal tracking of
92–97% leaves percent-level non-common-mode drift, and at 37.6 Hz/K @230 kHz [dim02] even
1 mK of differential wander = ~38 mHz of fake "position effect."

Fix is standard null-search craft: modulate position continuously at f_mod, lock in at f_mod,
add a third sphere + swap runs for identifiability, sham runs and hidden-offset blinding, and
pre-register an equivalence-bound null with a sensitivity-derived SESOI. Accept from the start
that cavity tests already bound position-dependent Δν/ν at ~1e-19 [dim10]; this experiment's
value is a *direct mechanical-resonance test of the specific claim*, not a competitive
fundamental bound. Phrase it that way and a null is publishable.

## Fatal flaws (numbered, with magnitudes)

1. **Wrong mode frequency — factor ~11–22.** 230 kHz on 10 cm Cu is physically excluded;
   correct f₀ = 20.75 kHz (solid) / 10.5 kHz (thin shell); 230 kHz ⇒ R = 0.9 cm
   [dim04, dim05]. The preregistered band targets a nonexistent mode.
2. **Static A/B design aliases drift into signal.** Position changed discretely, drift is
   continuous ⇒ any slow trend with the A/B period reads as effect. Dayton Miller's entire
   career is this failure mode [dim06]. Expected fake-signal magnitude: differential thermal
   wander 40–400 mK × 37.6 Hz/K = **1.5–15 Hz** of position-correlated garbage vs. an
   instrument floor of ~23 mHz [dim05, dim02] — 60–600× above the noise.
3. **One-reference topology is non-identifiable [dim07].** With one moving and one reference
   sphere, reference aging = signal. No analysis fixes this; it's a hardware defect.
   Matched-pair tracking of 92–97% leaves 3–8% of ~tens-of-Hz thermal terms
   non-common-mode → 0.5–1.2 Hz residual systematics.
4. **Thermal control underspecified by ~4 orders.** 1 mHz resolution @230 kHz needs ≤27 µK
   stability [dim02]; no plausible 0.4 m translation stage holds two positions to 27 µK.
5. **Q assumption conflicts with literature [dim04].** Design assumed Q ≈ 18k; measured Cu
   sphere Q ≈ 1e5 (vacuum, RT). Lower Q inflates linewidth → frequency-fit error and
   raises the achievable thermal load; design around measured Q, not assumed Q.
6. **No characterization-by-exaggeration step.** Without driving temperature/tilt 10–100×
   to measure the actual couplings [dim06], the error budget is unverified numerology.
7. **Claim framing ignores existing bounds.** Cavity tests null position-dependence at
   Δν/ν ~ 1e-19 and k_α = (−5.5 ± 5.2)e-7 [dim10, dim01]. A mechanical sphere test tops out
   near Δf/f ~ 1e-8–1e-9 at best — **10 orders looser**. Selling this as a "position-dependence
   test" in general is dishonest; it can only test the *specific 230 kHz anomaly claim*.

## Concrete amendments (numbered, actionable)

1. **Retarget the mode.** Either (a) move to the true breathing mode: solid 10 cm Cu at
   20.75 kHz or thin shell at ~10.5 kHz [dim04, dim05] — which also relaxes thermal
   demand ~11× (3.3 Hz/K, so 1 mHz needs ~300 µK instead of 27 µK); or (b) shrink to a
   R ≈ 0.9 cm sphere to keep 230 kHz. I strongly prefer (a).
2. **Modulate, don't step.** Mount the moving sphere on a rotary stage or linear dither
   stage oscillating x(t) = x₀ sin(2π f_mod t), x₀ = ±0.20 m, f_mod = 0.1–1 Hz (slow enough
   to be quasi-static, fast enough to sit above 1/f drift). Demodulate f(t) at f_mod with a
   lock-in; require the signal to (i) appear only at f_mod, (ii) track dither amplitude
   linearly, (iii) vanish when x₀ = 0. Drift aliases only if it contains power exactly at
   f_mod — measure that explicitly.
3. **Three-sphere identifiability.** Add a third sphere. Run all three pairings
   (A-B, B-C, C-A) plus physical swaps of the "moved" role. A true position effect follows
   the *location*; an instrument effect follows the *device*; a readout effect follows the
   *channel*. Only 3 devices + swaps separates all three [dim07].
4. **Blinding mechanics.** Hidden-offset blinding g-2 style: analysis code receives
   f(t) with a sealed additive offset per run, held by a third party, removed only after the
   analysis pipeline is frozen. Schedule custody: hashed randomized schedule committed to OSF
   before first data [dim09]. Insert ≥10% sham runs (stage commanded but position decoder
   returns null pattern / "Big Dog" zero-signal injections [dim06]) — the pipeline must
   return null on every sham or the run is void.
5. **Exaggerate to calibrate.** Before physics data: drive chamber temperature ±1 K
   (≈100× the 10 mK operating goal) and tilt by 100× spec, measure Δf response, and
   hard-code the measured coupling coefficients into the preregistered error budget [dim06].
6. **Preregister an equivalence-bound null.** Define SESOI from measured sensitivity, not
   hope: with 23 mHz VNA floor [dim02] and ~1000 s at f_mod, expect σ_Δf ≈ 1–5 mHz →
   Δf/f ≈ 1e-7–1e-8 @ 20 kHz. Register: "position-dependent fractional frequency shift
   between x = 0 and x = 0.40 m with |Δf/f| < SESOI at 95% equivalence" — a two-one-sided
   test, publishable as a null either way via PCI RR [dim09].
7. **Hypothesis phrasing.** State the hypothesis as: "the specific claim of a 230 kHz-class
   position-dependent mechanical resonance shift is tested at Δf/f ~ 1e-7–1e-8 in a direct
   laboratory geometry." Explicitly acknowledge cavity bounds at 1e-19 [dim10] constrain
   *generic* position dependence; this experiment closes the loophole that the claimed
   effect is mode/apparatus-specific. That framing makes a null a result, not a failure.
8. **Direction-reversal nulls.** Rotate the translation axis 180° between runs and scramble
   sphere labels in the analysis; any "effect" must reverse with geometry [dim06].

## What I want to hear from the other panelists

- **Theorist:** What, precisely, would the "230 kHz position resonance" claim have to be to
  survive the [dim04, dim05] mode calculation? Is there *any* honest target observable, or
  are we testing a claim that is already internally inconsistent?
- **Metrologist/statistician:** Is 0.1–1 Hz the right f_mod given the actual Allan deviation
  floor of the VNA + GPSDO chain [dim02, dim08]? And review my SESOI math (1e-7–1e-8).
- **Materials/resonator expert:** Measured Q and mount-loss budget for a kinematically
  mounted 10 cm Cu sphere at 20 kHz in vacuum — is Q ≈ 1e5 [dim04] realistic with LDV readout?
- **Data/blinding expert:** Red-team my sham-run and hidden-offset scheme — where does
  leakage occur when the same operator moves the stage?
- **Everyone:** Do you agree the experiment's only honest deliverable is a bound on the
  *specific claim*, given the 10-orders-of-magnitude gap to cavity tests [dim10]?
