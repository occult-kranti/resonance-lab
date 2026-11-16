# ROUND 1 — Dr. B. (RF/microwave: VNA, cavities, PLL, DMTD, low-noise readout)

## Position
The v1 readout concept is instrumentally wrong for its own claimed signal. A VNA doing phase
fits on a ~230 kHz elastic resonance tops out near ~23 mHz [dim02/08] — three to four orders
above the µHz ambitions, and that floor presumes the mode exists, which it does not: 230 kHz
breathing on a 10 cm Cu sphere is geometrically impossible (f₀ ≈ 10.5–20.75 kHz; 230 kHz
needs R ≈ 0.9 cm) [dim04/05]. Second, nobody has specified the transducer, and an "EM pickup"
on a radial breathing mode is the wrong first choice: weak coupling, eddy-current Q-loading,
magnetostrictive noise. The correct architecture is two self-sustained oscillator loops
(electrostatic drive + capacitive sense), mixed down to a Hz-level beat and counted against
GPSDO — a DMTD with ADEV <1e-13 @1 s [dim02]. That gives mHz-class *instrumental* resolution
trivially; the real fight is the 37.6 Hz/K thermal wall [dim05], which no readout fixes.
Proceed only after frequency/geometry reconciliation and a transducer redesign.

## Fatal flaws
1. **Frequency–geometry conflict**: claimed 230 kHz breathing vs. physical 10.5 kHz (thin shell)
   / 20.75 kHz (solid) for 10 cm Cu [dim04/05]. Every downstream number (TCf = 37.6 Hz/K,
   VNA floor 23 mHz) is built on the wrong carrier. Unresolved = unreviewable.
2. **Wrong readout instrument**: VNA swept-S11 phase-fit floor ~1e-7 → ~23 mHz @230 kHz
   [dim02/08]. VNA sweeps with 1–10 Hz IF BW take seconds-to-minutes and alias thermal drift
   (37.6 Hz/K × mK-level wander = Hz-scale smear) directly into the fit. Cannot support mHz,
   let alone µHz, claims.
3. **Unspecified/wrong transducer**: EM (inductive) pickup on a monopole breathing mode couples
   as velocity-through-eddy-currents — poor sensitivity, adds damping (lowers Q below the
   already-contested 18k-vs-1e5 conflict [dim04]), and is microphonic to stray B. Not viable
   as primary.
4. **Resolution arithmetic doesn't close**: 1 µHz @230 kHz = 4e-12 fractional. Even GPSDO at
   1e-12 [dim02] barely touches it, and the mode's own thermal wander is ~10⁹× larger
   (27 µK per mHz [dim05]). The instrument is not the limit; claiming µHz invites ridicule.
5. **Q conflict changes the whole loop design** [dim04]: Q=18k vs 1e5 changes linewidth
   (12.8 Hz vs 0.1 Hz @10.5 kHz), ring-down τ (0.5 s vs 3 s), required loop gain, and
   lock-in time constants. Must be measured in situ before freezing the design.
6. **Single-reference topology = drift ≡ signal** [dim07]: 92–97% thermal tracking leaves a
   residual 1.1–3 Hz/K differential coupling — 10³–10⁶× above any mHz SESOI.

## Concrete amendments
1. **Reconcile the carrier first**: adopt f₀ ≈ 10.5 kHz (thin shell) or shrink the sphere to
   R ≈ 0.9 cm if 230 kHz is sacred. All numbers below assume 10.5 kHz (TCf ≈ 1.7 Hz/K —
   22× gentler than at 230 kHz; mHz needs ~0.6 mK, differential-relaxed to ~10–40 µK).
2. **Readout = dual self-excited oscillator loops + DMTD beat-count**:
   - Each sphere: capacitive drive electrode + capacitive sense electrode, JFET front end
     (nV/√Hz-class at 10 kHz), phase-shifter/AGC closing the loop on the mechanical mode.
   - Mix the two ~10.5 kHz loop outputs (analog DBM or digital) → beat 1–10 Hz.
   - Count beat zero-crossings/phase with a GPSDO-locked counter, 1–1000 s gates, log ADEV
     (allantools [dim03]). Instrumental floor: sub-µHz per √τ; the beat cancels clock noise
     common-mode. The VNA is demoted to one-time mode survey and β/Q verification.
3. **Transducer discipline**:
   - Electrostatic push-pull electrodes (symmetric gap, e.g. 2× 0.5 mm gaps, ~50–200 V bias)
     so the electrostatic negative spring cancels to first order; stabilize bias to ppm
     (a 1e-4 bias wobble on an unsymmetrized gap is a fake position signal).
   - Capacitive displacement floor ~1e-15 m/√Hz at 10 kHz is ample; LDV only as a
     commissioning cross-check (it is a point sensor, shot-noise ~pm/√Hz, and not a
     permanent vacuum feedthrough).
   - No magnetic pickups anywhere near the spheres (Q-loading + magnetostrictive noise).
4. **If the VNA is used at all**: weak coupling β ≤ 0.1 (avoid frequency pulling and Q
   deflation), CW fixed-frequency phase tracking instead of sweeps during data runs, IF BW
   ≤ 10 Hz, ECal daily, and never quote sub-10 mHz from VNA fits. S11 passive-limit honesty:
   a passive resonator's resolvable Δf ~ f₀/(Q·SNR)·(drift terms) — publish the SNR.
5. **Amplitude stabilization**: AGC holds oscillation amplitude to <0.1%; measure the AM→FM
   (Duffing/thermal-bolometric) coefficient by 10–100× drive exaggeration [dim06] and budget
   it. Otherwise amplitude drift from transducer heating masquerades as Δf.
6. **Dummy-channel self-calibration**: run a third oscillator loop on a Q-matched LC dummy
   resonator inside the same thermal enclosure, beat it against each sphere loop. This
   isolates electronics TCf (amplifier phase TC ~ 100 ppm/K × loop phase → mHz–Hz fake
   shifts) from mechanics. The dummy channel must read null or the data channel is void.
7. **Cabling**: λ at 10.5 kHz is ~20 km — cable phase is electrically benign, so use short
   rigid strain-relieved coax; the enemy is triboelectric/microphonic pickup, so clamp all
   cables inside the chamber and put the preamps on the chamber wall in the same thermal
   control zone.
8. **Modulate, don't step**: dither position sinusoidally at ~0.1–1 mHz and lock-in the beat
   at the dither frequency [dim06]; add direction-reversal, label-scramble, and sham-stage
   nulls; swap sphere roles weekly (or 3-device triangle) to break drift≡signal [dim07].

## What I want from the other panelists
- **Mechanical/FEA expert**: confirm the true f₀ and mode shape for the actual sphere
  (wall thickness!), the Q budget (thermoelastic vs support loss), and whether nodal/kinematic
  mounting kills the 2 Hz–2 kHz remount term [dim05]. I need Q within ±20% to design loop gain.
- **Metrology/thermal expert**: defend or kill the 27 µK → 0.6 mK (at 10.5 kHz) thermal
  requirement; what differential tracking residual is *measured*, not assumed, for matched
  Cu pairs [dim07]?
- **Statistics/prereg expert**: set the SESOI. I can deliver mHz instrumental resolution at
  10.5 kHz; if the SESOI is below the differential thermal residual, no readout saves this.
- **Anyone defending 230 kHz**: show me the dispersion calculation that puts a breathing
  mode there on a 10 cm sphere, or concede the carrier change.
