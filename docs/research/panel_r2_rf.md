# ROUND 2 — Dr. B. (RF/microwave readout)

## Responses

**To Dr. A** — I accept your carrier ruling: **solid 100 mm sphere, f₀ = 20.75 kHz**. It beats my
R1 lean (10.5 kHz shell): GW-sphere Q pedigree [dim04], no shell-seam mode contamination, and
20.75 kHz sits in a quiet spot for JFET front ends (flicker corner ~10–100 Hz, white floor
~1 nV/√Hz). One correction on your thermal math: with dlnf/dT = −1.6e-4/K [dim02], TCf @20.75 kHz
= **3.3 Hz/K**, not 0.6 Hz/K — but your conclusion survives: 30 µK differential ⇒ 0.1 mHz
residual, and ~600 µK per 2 mHz. Your three direct questions:

1. **Lock ADEV <1e-7 fractional @1 s (2 mHz) — YES, with 100× margin.** Self-excited loop:
   electronics phase noise converts as δf = (f₀/2Q)·δφ = 0.104 Hz/rad × δφ. JFET front end at
   1–10 mV sense level gives white PM ~1e-7 rad/√Hz → δf ≈ 1e-8 Hz/√Hz → fractional ADEV
   ≈ 5e-13 @1 s; with 1/f PM corner ~10 Hz, still ≤1e-11. Even a dumb gated counter on the
   beat meets 1e-7. The instrument will sit ≥100× below the mode's own thermal wander
   (0.1 mHz differential = 5e-9 fractional) — exactly where an instrument belongs.
2. **Excitation without Q-loading — YES, electrostatic, non-contact.** Spring softening:
   k_es = ε₀AV²/g³ ≈ 7e-3 N/m per electrode (g = 0.5 mm, A = 1 cm², V = 100 V) vs.
   k_mech ≈ 3e10 N/m (m_eff ~ 2 kg @20.75 kHz) → Δf/f ~ 1e-13. Irrelevant even at 1 kV.
   Loop-induced damping: trim loop phase to <1° quadrature error → synthetic damping <2% of Q;
   verified by open-loop ring-down (τ = Q/πf₀ ≈ 1.5 s at Q=1e5) as the in-situ Q gate.
3. **LDV under 5 mHz — shot noise yes (~1 mHz/√Hz at 1 nm amplitude), systematics NO.**
   A ~1 mW spot with even 1% absorption deposits ~10 µW; against the sphere's radiative
   conductance (~0.1 W/K) that's ~0.1 mK whole-sphere rise = ~0.3 mHz, plus emissivity drift
   and point-sensor geometry. **LDV is Stage-0 mode-ID only (Dr. E's gate), never the
   metrology channel.** Capacitive sense is the data channel.

**To Dr. C** — Agree the generic effect is dead at 1e-19 [dim10]; we're testing a *claimant's*
anomaly, so SESOI must exceed our floor, not chase LLI bounds. Your 1e-7–1e-8 fractional
(=0.2–2 mHz) is **below my defensible post-engineering floor of ~1–5 mHz** — it would require
3 µK differential, 10× beyond the 30 µK contract. Don't preregister what the hardware can't
guarantee. On dither: 0.1–1 Hz is too fast — see fatal-flaw arithmetic below; pendulum modes
of any mount live at ~1 Hz and you will pump them. To honor "test the specific 230 kHz claim":
the DMTD readout is frequency-agnostic (1 kHz–1 MHz is one JFET design); I propose a
**secondary channel: matched R≈0.9 cm sphere pair at 230 kHz on the same beat counter** —
cost is two electrodes and one mixer. That forecloses the "wrong apparatus" objection cheaply.

**To Dr. D** — Agree the ≥3-pairs gate is vacuous and that the estimand must be the
lock-in-demodulated beat at f_mod. Note: my DMTD output is a *continuous* time series, so the
inference lives on the demodulated series (paired randomization on blocks), not on discrete
pair counts — pilot-for-variance is straightforward. I will supply the **synthetic injections**
you and E demand, at RF level: a DDS-programmed offset (e.g., +10 mHz step) injected into the
reference loop's drive synthesizer, blind to the operators, recovered end-to-end through the
lock-in; ≥5% duty, ±10% recovery required, exactly your spec. On your 5–15 Hz SESOI: that's
the *un-engineered* floor. The 2 Hz–2 kHz remount term [dim05] only exists if you remount;
a rigid internal translation rail never breaks the kinematic mount — we move, we don't
remount. Post-engineering floor is mHz-class, so SESOI = 3× floor ≈ **10–50 mHz** (your rule,
my number; lands on A's 50 mHz at the conservative end).

**To Dr. E** — Full agreement; your Stage-0 LDV gate, claim sheet, hidden offset, and ≥10%
Big Dog shams slot directly into the readout plan. I add hardware-level transparency to your
firewall: continuous logging of loop phase error, AGC level, bias-supply voltage, and S11
impedance snapshots — published raw. If the coupling matrix (exaggerated 10–100×) shows any
coefficient that can't be pulled below SESOI/3, we say so before unblinding, not after.

## Updated position
Converging: **solid 100 mm Cu pair at 20.75 kHz, dual self-excited electrostatic loops,
DMTD beat counted against GPSDO, instrumental floor ~1e-11 fractional @1 s — 100× below the
physics floor.** Post-engineering differential systematic floor ≈ 1–5 mHz (thermal 0.1 mHz
@30 µK; electronics-after-dummy-subtraction 0.1–1 mHz; residual stress/bias/AM-FM ~1 mHz);
SESOI 10–50 mHz = fractional 5e-7–2.4e-6. Secondary 230 kHz small-sphere channel retained for
claim fidelity. The one place I still fight the room: **dither frequency**. 0.1 Hz × ±5 mm on a
4.7 kg sphere = ~10 mN reaction force injected into the shared chamber *at exactly f_mod*;
with Hz-scale stress coupling [dim05] that is a potential in-band fake signal orders above
SESOI unless the stage has an independent seismic pier — and 0.1–1 Hz (C) also sits on mount
pendulum resonances. Dither belongs at **3–10 mHz**: reaction force drops 10²–10⁴×, it sits
above the thermal controller's ~mHz bandwidth (controller can't chase the signal away), and
50 lock-in cycles = ~3–5 h, compatible with D's block randomization. The genuine 0.4 m claim
is covered by a slow A/B square wave (period 1–4 h, settle-then-measure), with the small mHz
dither serving as in-situ calibration of gradient-type couplings. A's σ ≈ 5–10 mHz is
defensible; D's 5–15 Hz SESOI concedes 1000× of sensitivity we don't need to concede;
C's sub-mHz SESOI promises what 30 µK can't deliver.

## Final amendment list (revised)
1. **Carrier**: solid 100 mm Cu spheres, f₀ = 20.75 kHz (breathing, GW pedigree [dim04]).
   Stage-0 gate (E): LDV mode survey identifies f₀ and Q within ±20% before any data run;
   open-loop ring-down (τ ≈ 1.5 s @Q=1e5) confirms intrinsic Q in situ.
2. **Readout**: dual self-excited loops — capacitive push-pull drive+sense (g ≈ 0.5 mm,
   bias 50–200 V, ppm-stabilized), JFET front ends, AGC amplitude to <0.1%, loop phase trimmed
   <1°. Analog/digital mix to 1–10 Hz beat; GPSDO-referenced counting, 1–1000 s gates; ADEV
   logged (allantools [dim03]). Instrumental floor ≤1e-11 fractional @1 s.
3. **Claim-fidelity channel**: matched R ≈ 0.9 cm sphere pair at 230 kHz on the same readout
   (secondary, lower priority), so the claimant's exact band is covered.
4. **VNA**: mode survey and coupling verification only (β ≤ 0.1, IF BW ≤ 10 Hz, ECal daily);
   never a data channel, never quoted below 10 mHz.
5. **LDV**: Stage-0 mode-ID and commissioning cross-check only (shot floor ~1 mHz/√Hz @1 nm;
   ~10 µW absorbed ⇒ ~0.3 mHz thermal bias + emissivity drift → excluded from metrology).
6. **Modulation**: primary = 0.4 m A/B square wave on internal rigid rail (period 1–4 h,
   settle-then-measure, never remount — kills the 2 Hz–2 kHz term [dim05]); calibration =
   ±5 mm dither at 3–10 mHz, piezo/inchworm stage (no holding-current heating), stage on
   independent pier if f_mod ever exceeds 10 mHz. Direction-reversal + label-scramble nulls
   every block [dim06].
7. **Dummy channel**: Q-matched LC resonator loop in the same thermal zone, beat against both
   spheres continuously; isolates electronics TCf; must read null within SESOI/3 or the run
   is void.
8. **Injections & shams**: DDS blind frequency-step injections (+10 mHz class) into the
   reference loop ≥5% duty, recovered ±10%; ≥10% sham position runs; recovery statistics
   preregistered (D's spec).
9. **Coupling matrix** (E): measure AM→FM (10–100× drive), bias→f (±10% bias modulation),
   ΔT→f (±10× thermal dither), vibration→f (calibrated shaker) before unblinding; publish all
   coefficients.
10. **Telemetry**: log loop phase error, AGC level, bias rail, electrode temperatures, S11
    snapshots; raw publication with the beat time series (OSF + executable analysis [dim09]).
11. **SESOI**: 10–50 mHz (= 3× post-engineering floor, D's rule; A's 50 mHz as conservative
    bound). Reject 5–15 Hz (unnecessary concession); reject <2 mHz (exceeds 30 µK contract).
12. **Thermal interface**: readout electronics in the chamber's thermal zone; preamps
    chamber-mounted; cables short, rigid, strain-relieved, clamped (microphonics, not phase
    length, is the enemy at 20 kHz).
