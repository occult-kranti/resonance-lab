# LOC-1 Cross-Verification (Phase 4) — sphere_cross_verification.md

Synthesis across dim01–dim10 (each dim file holds verbatim excerpts + URLs).

## HIGH CONFIDENCE (multi-agent, independent sources)
1. **Thermal effects dominate everything.** Copper resonance TCf ≈ −28…−70 Hz/K at ~230 kHz (dim05: −28…−40; dim08: 37.6; dim04: −25…−70). A 0.4 m position change in an ordinary lab sees 40–400 mK stratification → 1–14 Hz apparent shift. 1 mHz resolution needs ~27 µK control. [dim05, dim08, dim04]
2. **Clock/reference is never the limit.** GPSDO ≈1e-12–1e-13; DMTD ADEV <1e-13 @1 s; counters resolve 0.2 µHz @1 s at 230 kHz. [dim08, dim02]
3. **Zero patents claim intrinsic position-dependent resonance.** All resonance position art is external-field/geometry coupling; fringe boundary (Woodward mass-fluctuation) doesn't claim it either. [dim01]
4. **Modulation > static A/B.** Eöt-Wash signature move: modulate the variable at known f_mod, lock-in detect, direction-reverse, scramble nulls. Static two-point comparison is defenseless against drift (Dayton Miller thermal-aliasing precedent). [dim06]
5. **Matched-pair differential tracking is percent-level, not ppb.** MEMS pairs reject 92–97% thermal; gauge-block CTE spread ±1e-6/K piece-to-piece; aging is per-device. Two-device topology without swap/3rd device is "a singular problem" (NOAA) — reference drift indistinguishable from signal. [dim07]
6. **VNA phase-fit floor ~1e-7 (≈23 mHz @ 230 kHz); heroic averaging 3e-10.** µHz demands PLL/ring-down/DMTD against common reference. [dim02, dim08]
7. **All position-dependence physics tests to date: null.** α-variation k_α=(−5.5±5.2)e-7; cavity Lorentz tests Δν/ν ~1e-19; redshift across 1 mm resolved (GR, ordinary). [dim10]
8. **No scientific literature exists for the "Bashar 230 kHz" claim.** [dim10]

## MEDIUM CONFIDENCE
- Air loading ±0.3 Hz (barometric) if not in vacuum [dim05]; remount stress 2 Hz–2 kHz unless kinematic mount [dim05, med].
- Repos reusable: scikit-rf, lmfit, allantools, resonator_tools, pymeasure, randomizr (licenses mostly BSD/MIT; VICR patent-encumbered; resonator_tools license unstated) [dim03].
- No RR track in core physics journals; PCI RR is the realistic registered-report path [dim09].

## CONFLICT ZONES
- **CZ-1 (CRITICAL): Resonance band mismatch.** Project materials/design target a breathing mode ≈229.731 kHz for a ~10 cm-radius sphere. dim04 (Lamb/Rayleigh elastic theory + GW-sphere measurements) gives f₀ ≈ 20.75 kHz (solid 10 cm Cu) / ≈10.5 kHz (thin shell); 230 kHz breathing needs R ≈ 0.9 cm. Either (a) the sphere must be ~1 cm, (b) the 230 kHz mode is a higher-order/overtone or EM (not elastic breathing) mode, or (c) the number is part of the unverified claim. dim05 independently notes the implied sphere for 230 kHz is R≈3.9 mm. → Panel must resolve; protocol must state mode identity + predicted f₀ from first principles before measurement.
- **CZ-2: Q expectation.** Design/sim used Q≈18,000 (vacuum). dim04 gives ~10⁵ vacuum RT for Cu spheres, up to 2×10⁷ for CuAl alloy; Earth's ₀S₀ Q≈5982. → Adopt measured-during-calibration Q; don't fix it a priori.
- **CZ-3: TCf spread** −28…−70 Hz/K (alloy/sample dependent, ±50%). → Measure own sphere's TCf in calibration phase; don't assume.

## Phase 5 resolution (targeted validation decision)
CZ-1 resolvable only by the project fixing sphere size/mode; carried to expert panel as primary design decision. CZ-2/CZ-3 resolved procedurally (measure in calibration; publish measured values).
