# ROUND 3 (FINAL) — Dr. C.

## (1) Verdict: VIABLE AS AMENDED. Proceed to Stage 0.

The proposal we converge on is not the proposal we were handed, which is the panel working
as intended: the 230 kHz/10 cm claim was physically impossible [dim04, dim05], and the
surviving experiment — 20.75 kHz breathing mode, 3-sphere swap topology, DMTD readout,
full blinding/sham machinery, equivalence-bound null at ~50 mHz — is an honest,
publishable-either-way null test of the restated specific claim. Gate G1 (claim sheet) and
G2 (Stage-0 LDV mode-ID + FEA ±2%) remain kill gates; if the claimant won't sign the claim
sheet, the correct deliverable is a report saying why no test occurred.

## (2) Motion profile ruling: I accept D's hops-primary synthesis. Rotary demoted to
##    diagnostic. I was wrong on two engineering counts.

D's gradient-vs-contrast argument is correct and decisive. A small dither measures the
local df/dx; if the claimed effect is nonlinear or threshold-like in x (the claim sheet
specifies no functional form — R2 call 4), then ∫(df/dx)dx ≠ Δf(0.40 m). Only a full-stroke
contrast measurement tests the claim as stated. My rotary at r = 0.20 m did sweep the full
0.4 m, so it was not strictly vulnerable to that critique — but I now weight two costs I
under-called in R2: (a) continuous rotation in vacuum requires rotary feedthroughs and
slip-ring/rotating wiring for the electrostatic drive and DMTD pickup, injecting
microphonics *at exactly f_mod* — the co-located-drive fake signal is the canonical
modulation-experiment failure mode; (b) it measures while moving, so every vibration
transient is in-band. The hop design measures only while stationary: move in seconds, veto
the ringdown, dwell 45 min. Reaction forces (~mN-class during the move, per A/B's flag)
are then out-of-band by construction, verified by accelerometer veto of the first ≥300 s
after each hop. This is the proven torsion-balance pattern (move attractor, dwell,
measure) adapted to a wired resonator — and Eöt-Wash can rotate continuously precisely
because their pendulum is wiring-free; ours is not.

**Adopted:** PRIMARY = full 0.40 m ABBA hops, τ = 1.5 h dwells, 6 h blocks, B = 40, role
swaps in weeks 2 & 4 (D's design verbatim). DIAGNOSTIC = ±5 mm dither at f_mod ∈ [0.05, 1]
Hz set by measured noise minimum (D's pilot), used only to map df/dx and to confirm that
the hop contrast equals the integrated gradient — a powerful internal consistency check:
if ∫(df/dx)dx over the stroke ≠ measured hop contrast, that discrepancy is itself a
finding (nonlinearity) and must be pre-registered as a reported quantity.

## (3) Scope statement: SIGNED, with one clarifying clause.

I sign: "this device, this mode; 13 orders weaker than cavity prior art stated in prereg
paragraph 1." Added clause: "B's R ≈ 0.9 cm / 230 kHz channel is an independent secondary
estimand with its own SESOI; a null there constrains the literal claim as stated but does
not rescue or refute the primary estimand, and vice versa."

## (4) SESOI digit: **50 mHz (Δf/f ≈ 2.4e-6 @ 20.75 kHz), primary, frozen.**

Set as 3× the Stage-1 demonstrated floor if floor ≤ ~17 mHz; if Stage-1 floor exceeds
17 mHz, SESOI = 3× measured floor, revised once, then frozen. 30 mHz (1.4e-6) is the
pre-registered stretch goal reported only if floor ≤ 10 mHz. Statistical-only sensitivity
(my R1 1e-7–1e-8) is demoted to a secondary "achieved resolution" figure, clearly labeled
non-discovering. Secondary channel (R ≈ 0.9 cm @ 230 kHz): SESOI = 3× its own Stage-1
floor; expect ~1 Hz class given 37.6 Hz/K [dim02] — reported honestly as such.

## (5) Final protocol additions (≤10 lines)

1. Hop transient veto: discard first ≥300 s and any data with accelerometer >3σ after each
   0.40 m move; veto window frozen in prereg.
2. Contrast-vs-gradient consistency test pre-registered: report hop contrast and
   ∫(df/dx)dx from dither diagnostic; discrepancy >3σ triggers the bounded-deviation
   policy [dim09], not silent model-shopping.
3. f_mod for the dither diagnostic = argmin of measured noise spectrum in [0.05, 1] Hz,
   chosen in Stage 1, frozen afterward (D's pilot rule).
4. Every hop block accompanied by simultaneous LC dummy channel and third-sphere
   stationary control; both must null or the block is void.
5. ≥10% sham blocks (commanded hop, null decoder); hidden per-run offset held by
   third-party custodian; unblinding only after pipeline freeze + gate sign-off.
6. Drift cancellation verified, not assumed: ABBA residual vs. quadratic-drift model
   reported per block; blocks failing residual > pre-set bound are void.
7. SESOI revision permitted exactly once, at Stage-1 close, documented with floor data.
8. Replication criterion: any positive requires blind replication with swapped sphere
   roles and rotated axis (180°) before any claim beyond "unresolved anomaly."
9. Prereg paragraph 1 carries the scope statement verbatim, including the 1e-19 cavity
   comparison [dim10].
10. Publication route: PCI RR, publish either way [dim09]; no press pre-replication (E).

**Closing:** The panel converged. Remaining execution risks are ordinary engineering
(30 µK differential control, feedthrough microphonics), all gated and measurable in
Stages 0–1. I co-sign the amended protocol.
