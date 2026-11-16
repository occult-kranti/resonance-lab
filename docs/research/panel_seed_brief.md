# PANEL SEED BRIEF — LOC-1 "position-dependent resonance" experiment (v1 under review)

## The proposal under review (v1)
Test whether moving a hollow copper sphere between two positions (0.40 m apart) shifts its
resonant frequency beyond ordinary systematics. Setup: two matched Cu spheres in a shielded,
thermal-controlled vacuum chamber; one reference (stationary), one moved; VNA + LDV readout
locked to GPSDO/Rb 10 MHz; blinded randomized schedule; preregistered analysis (OSF);
claimed band ≈230 kHz ("breathing mode"); quality grading; publish either way.

## Key evidence from research swarm (cite as [dimNN])

**CRITICAL CONFLICT**: 230 kHz breathing mode is incompatible with a 10 cm Cu sphere.
Lamb/Rayleigh theory + GW-sphere measurements: solid 10 cm Cu → f₀ ≈ 20.75 kHz; thin shell
→ ≈10.5 kHz; 230 kHz breathing requires R ≈ 0.9 cm. [dim04, dim05]

**Error budget @ ~230 kHz, 0.4 m separation** [dim05]:
- thermal gradients: 1–14 Hz (TCf_Cu ≈ −28…−40 Hz/K; 40–400 mK over 0.4 m)
- remount/tilt stress: 2 Hz – 2 kHz unless kinematic/nodal mount
- air loading (barometric): ±0.3 Hz; humidity: 0.01–0.1 Hz
- seismic: negligible direct Δf (affects SNR); magnetic: <1e-13 Hz; tides: ~1e-10 Hz
- clock: 0.23 Hz (TCXO) → 2e-8 Hz (GPSDO)

**Instrument floors** [dim02, dim08]: VNA phase-fit ~1e-7 → ~23 mHz @230 kHz (heroic 3e-10);
GPSDO 1e-12–1e-13; DMTD ADEV <1e-13 @1 s; counter 0.2 µHz @1 s. Resolution of 1 mHz needs
≲27 µK thermal control. Copper dlnf/dT ≈ −1.6e-4/K → 37.6 Hz/K @230 kHz.

**Differential trap** [dim07]: matched-pair thermal tracking 92–97% (not ppb); per-device
aging non-common-mode; one-reference topology = "singular problem" (drift ≡ signal) unless
swap or 3rd device; best field CMRR 28–47 dB.

**Null-test lessons** [dim06]: modulate the variable (rotary/dither stage + lock-in) rather
than static A/B; direction-reversal & label-scramble nulls; hidden-offset blinding (g-2);
sham/dummy runs (LIGO Big Dog — zero-signal injections); exaggerate systematics 10–100× to
characterize; Dayton Miller = thermal drift aliasing into fake position-periodic signal.

**Preregistration** [dim09]: OSF + PCI RR path (no RR track in core physics journals);
executable analysis plan; hashed 3rd-party schedule custody; gated unblinding; bounded
deviation policy; equivalence-bound null machinery; SESOI via sensitivity analysis.

**Prior art** [dim10, dim01]: all position-dependence tests null (cavity Δν/ν ~1e-19;
k_α=(−5.5±5.2)e-7); zero patents claim intrinsic position resonance; zero literature on the
"230 kHz" claim. GR position effects exist but are ordinary (redshift 1e-19/mm measured).

**Q conflict**: design assumed Q≈18k vacuum; literature: Cu sphere ~1e5 vacuum RT, up to
2e7 CuAl; Earth ₀S₀ Q≈5982. [dim04]

**OSS stack** [dim03]: scikit-rf, lmfit, resonator_tools, allantools, pymeasure/QCoDeS,
randomizr.

## Panel task
3 rounds. Round 1: initial position + fatal flaws + concrete amendments. Round 2: respond
to other experts, refine. Round 3: converge — final amended protocol + viability verdict.
The panel's job is to produce the strongest honest version of this experiment — or state
clearly which parts cannot be saved.
