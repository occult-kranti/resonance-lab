# ROUND 3 (FINAL) — Dr. B. (RF/microwave readout)

## 1. Verdict
**Viable as amended — conditional on gates.** v1 was not viable (impossible carrier, wrong
instrument, unspecified transducer, drift≡signal). The amended design — 20.75 kHz solid Cu
pair + third sphere, electrostatic self-excited loops, DMTD beat counting, rail-mounted hops,
dummy null endpoint, injections/shams — has an instrumental floor (~1e-11 fractional @1 s)
that sits ~100× below the physics floor and a defensible mHz-class systematic budget. I will
sign it. The two residual risks are not RF: the 30 µK differential thermal contract, and
carriage-repeatability stress (below). Both are gated, not assumed.

## 2. Motion profile — definitive ruling
**PRIMARY = D's full-0.40 m ABBA hops (τ = 1.5 h, B = 40). DITHER = diagnostic-only at
3–10 mHz. Hz-band dither is ruled out.** D is correct that ±5 mm measures df/dx, not the
0.40 m contrast — I concede the primary. But A's f_mod = 1/τ_ADEV-min must be evaluated on
the *hop* period, not by pushing dither into the Hz band:

- **Force arithmetic (definitive):** sinusoidal ±5 mm on 4.7 kg gives reaction force
  F = mω²A = **10 mN @0.1 Hz, 2.3 mN @0.05 Hz, 0.09 mN @10 mHz, 8 µN @3 mHz**. A and I flagged
  the same hazard from opposite sides; the numbers settle it. Hz-band dither injects
  mN–10 mN *at exactly f_mod* — ruled out unless D's pilot argmin is run on the isolated
  commissioning rig, where the answer will land at mHz anyway.
- **Dither microphonics at 3–10 mHz (the confirmation D requested):** reaction force is
  ≤2e-6 of the 46 N static load. Scaling linearly from the remount term [dim05] (≤2 kHz worst
  case for ~unity load redistribution): worst-case in-band stress coupling ≈ 2 kHz × 2e-6 ≈
  **4 mHz; typical (2–20 Hz remount) ≈ 4–40 µHz**. This holds only if the mount never unloads
  and nothing electrical moves — hence the design rule: **electrodes fixed to the chamber, not
  the carriage; zero wiring on the moving sphere.** Confirmed floor contribution: **≤1 mHz
  budgeted** (worst-case 4 mHz retired by the 100× shaker exaggeration run in the coupling
  matrix). Within your ≤3 mHz allowance.
- **Hop kinematics:** 0.40 m traverse in 100 s (4 mm/s, ~1 s ramps) → ≤0.4 mN transient force,
  entirely outside the measurement window: **600 s settle deadtime after every hop** before
  counting resumes. Piezo/inchworm stage (no holding current) → traverse-only heating,
  low-passed by the chamber's hours-long radiative time constant; verified by the ±10× thermal
  coupling run. Carriage repeatability with flexure rail + hard stops ~µm → stress-term
  estimate 0.2–2 mHz; this is the **least-characterized floor component** and is why I won't
  sign a 10 mHz SESOI before the pilot.

## 3. SESOI — ruling
Quadrature floor: thermal 0.1 mHz ⊕ electronics-after-dummy ≤1 mHz ⊕ dither microphonics
≤1 mHz ⊕ bias/AM–FM ≤0.1 mHz ⊕ carriage stress 0.2–2 mHz ≈ **2.5 mHz**, worst-case ~5 mHz.
By D's 3× rule: **preregister SESOI = 30 mHz (Δf/f ≈ 1.4e-6)** — the honest digit given the
unmeasured carriage term. **Rescale to 10 mHz only if the pilot's measured quadrature floor
≤3 mHz**; rescale upward without shame if any coupling-matrix coefficient fails SESOI/3.
Reject 50 mHz (concedes margin we can demonstrate) and reject ≤10 mHz pre-pilot (promises
what the carriage hasn't yet earned).

## 4. Final protocol spec additions (readout chain, ≤10 lines)
1. Per-sphere loop: capacitive sense (JFET, e_n ≤ 2 nV/√Hz @20.75 kHz) → phase trim → AGC
   (<0.1% amplitude) → push-pull electrostatic drive (2× 0.5 mm gaps, 100 V bias, ppm-stable);
   loop phase error <1°.
2. In-situ Q gate: open-loop ring-down weekly (τ ≈ 1.5 s @Q=1e5); void run if Q < 5e4.
3. Beat: DBM mix to 1–10 Hz vs DDS reference; GPSDO-locked counter, 1 s gates, continuous
   timestamps; ADEV via allantools; instrumental floor ≤1e-11 fractional @1 s.
4. Electrodes chamber-fixed; nothing electrical on the carriage; cables clamped,
   strain-relieved, inside the thermal zone; preamps chamber-wall mounted.
5. LC dummy loop (Q-matched, identical electronics) in the same thermal zone — parallel null
   endpoint; Gate 2 fails unless its upper limit beats the primary's.
6. Blind DDS injections (+10 mHz class, ≥5% duty, ±10% recovery) + ≥10% sham hops.
7. Motion: ABBA 0.40 m hops, 100 s traverse, 600 s deadtime, ~1.4 h dwell, B=40; ±5 mm
   dither @3–10 mHz for coupling-matrix calibration only.
8. Coupling matrix pre-unblinding: AM→FM (10–100× drive), bias→f, ΔT→f (±10×), vibration→f
   (100× shaker), carriage-repeatability (50× hop cycle); publish all coefficients.
9. SESOI = 30 mHz preregistered; →10 mHz iff pilot floor ≤3 mHz.
10. Raw telemetry to OSF: beat timestamps, loop phase error, AGC, bias rail, 8 thermometry
    channels/zone, S11 survey snapshots.

**Secondary channel (unchanged):** R ≈ 0.9 cm pair at 230 kHz on a third mixer channel —
cheap coverage of the literal claim; same gates, same SESOI rule in Hz (fractionally looser).
