# Systematic Error Budgets in Precision Resonance-Frequency Measurements
## Dimension 05 — Ordinary position-correlated systematics for a copper sphere resonator (f₀ ≈ 230 kHz, two positions 0.40 m apart)

**Scope.** LOC-1 wants to detect *tiny* resonance-frequency shifts of a copper sphere measured at two positions 0.40 m apart. This report quantifies the "ordinary" environmental/instrumental error terms that correlate with position or drift between measurements, converts each to Hz at 230 kHz, and backs every input number with a verbatim literature excerpt.

**Reference sphere used for conversions:** isotropic copper, ρ = 8960 kg/m³, E ≈ 110–128 GPa, ν ≈ 0.34, shear speed v_s ≈ 2266 m/s. A lowest torsional (l = 2, η ≈ 2.5) or low-order mode at 230 kHz corresponds to R ≈ 3.9 mm (m ≈ 2.3 g) — a typical lab-scale sphere. Sphere eigenfrequencies scale as f = 0.159·η·√(μ/ρ)/R (Lamb 1882 theory).[^17^]

**Headline conversion for temperature (the dominant term):** copper's resonance-frequency temperature coefficient is
TCf = d(ln f)/dT = ½·(1/E)(dE/dT) + ½·α ≈ ½·(−330…−360 ppm/K) + 8 ppm/K ≈ **−150 to −170 ppm/K** (cross-check via longitudinal dV/dT = −0.49 m/s/°C on v_L ≈ 4700 m/s gives ≈ −123 ppm/K [^6^]). At 230 kHz this is **≈ −28 to −40 Hz/K, i.e. ≈ −0.03 Hz per mK.** A 1 mK temperature difference between the two measurement positions is a ~30 mHz fake signal; ordinary lab gradients (0.1–1 K/m) over 0.40 m are 1–14 Hz. [^1^][^2^][^3^][^6^]

---

## 1. MASTER ERROR-BUDGET TABLE (f₀ = 230 kHz, positions 0.40 m apart)

| # | Error term | Coupling / coefficient | Typical position-correlated input | Δf at 230 kHz (ordinary lab) | Δf with best-practice mitigation | Confidence |
|---|------------|------------------------|-----------------------------------|------------------------------|----------------------------------|------------|
| 1 | **Temperature — bulk TCf of Cu** | −28…−40 Hz/K | Room stratification 0.1–1 K/m → 40–400 mK over 0.4 m [^8^][^9^] | **1–14 Hz** | mK thermometry at both positions → 0.03–0.04 Hz; metrology room ±0.1 K → 3–4 Hz uncorrected [^4^] | High |
| 2 | **Temperature — sensor calibration/tie error** | same 30–40 mHz per mK of *measurement* error | PRT/thermistor differential error ±10–100 mK | 0.3–4 Hz | cross-calibrated sensors to ≤1 mK → ≤0.04 Hz [^10^] | High |
| 3 | **Tilt / remounting / support-stress** | gravity self-stress strain ρgR/E ≈ 3×10⁻⁹; contact-force changes | RUS practice: transducer-mount weight alone ≈ 0.5–1% modulus-scale systematics [^15^] | **2 Hz – 2 kHz** depending on support | nodal-point suspension, repeatable kinematic mount → ≲1 Hz | Medium |
| 4 | **Air loading (pressure)** | Δf/f ≈ −½·ρ_air/ρ_Cu ≈ −6.7×10⁻⁵ at 1 atm → ≈ 15 mHz/hPa | weather ±20 hPa; fronts 1–3 hPa per 3 h [^12^] | **±0.3 Hz** (days); 0.02–0.05 Hz per 3 h | vacuum or logged-pressure correction → ≲1 mHz | High |
| 5 | **Humidity** | speed of sound +0.1–0.6% over 0–100% RH; adsorbed H₂O mass | lab RH swings 30–70% | **0.01–0.1 Hz** (air-coupling & surface film, est.) | vacuum/dry gas → negligible | Medium |
| 6 | **Seismic / floor vibration** | no direct static coupling; enters via support motion, Q, SNR | VC-A floor 50 µm/s; quiet ground <10⁻⁸ m/s²/√Hz [^13^][^14^] | direct < 1 µHz; **degrades line-fit within Δf ≈ f/Q ≈ 10–100 Hz (Q∼10³–10⁴)** | passive isolation, quiet hours → linewidth-limited | Medium (direct), High (magnitude of ambient levels) |
| 7 | **Magnetic field** | Cu diamagnetic χ ≈ −9.6×10⁻⁶; magnetostatic strain ∝ χB²/μ₀E | B ≈ 25–65 µT; indoor spatial variations tens of µT; temporal tens–hundreds of nT; elevators/metros 0.2–2 µT [^18^][^19^] | **sphere itself < 10⁻¹³ Hz**; risk is in *instruments* (electro/magneto-acoustic transducers, electronics) | keep ferrous sources/motors fixed; μ-metal if transducers are magnetic | High (direct), Low–Med (instrument) |
| 8 | **Tidal gravity** | self-stress strain changes by Δg/g | ±150–200 µGal (300–400 µGal pk-pk), max rate 60 µGal/h [^20^] | **≈ 7×10⁻¹¹ Hz** — negligible | — | High |
| 9 | **Clock / frequency reference** | direct fractional transfer | TCXO 10⁻⁶; uncalibrated Rb offset ≤5×10⁻⁹; Rb/GPSDO 10⁻¹²–10⁻¹³ [^21^] | **0.23 Hz (TCXO)** → 2×10⁻⁷ Hz (Rb) → 2×10⁻⁸ Hz (GPSDO) | GPSDO or shared reference → sub-µHz | High |
| 10 | **Aging / surface oxidation & creep** | mass/oxide-film change, stress relaxation | room-temperature oxide growth, days–months | mHz-scale drift between widely separated measurements (est., Low) | evacuate/inert gas; interleave positions | Low |

**Bottom line for LOC-1:** In an ordinary (non-vacuum, non-temperature-controlled) lab the position-correlated budget is dominated by **temperature (Hz scale per 0.1–1 K/m gradient)**, **remounting/support stress (Hz–kHz scale)**, and **air loading (0.1–1 Hz with weather)**. Magnetic, tidal, and (GPSDO) clock terms are all ≤ µHz–mHz. To reach sub-10 mHz differential sensitivity one needs: mK-level differential thermometry, vacuum or pressure logging, a kinematic/nodal mount that is not disturbed between positions, and a common 10⁻¹²-class frequency reference.

---

## 2. SOURCED CLAIMS (Claim / Source / URL / Date / Verbatim excerpt / Context / Confidence)

### Temperature coefficient of copper resonance frequency

**Claim 1 — Cu linear thermal expansion α ≈ 16.5 ppm/K at 25 °C; E = 110–128 GPa; density 8.96 g/cm³.**
Source: ATT Advanced Elements, Copper powder/rod property tables.
URL: https://www.attelements.com/metal-and-alloys-power/copper-powder-(cu-powder).html
Date: n.d. (product datasheet, accessed in session)
Excerpt: "**Thermal Expansion |(25 °C) 16.5 µm·m-1·K-1|** … **Young's Modulus | 110–128 GPa** … **Density | 8.96 g/cm3**"
Context: inputs to TCf = ½·TCE + ½α.
Confidence: High.

**Claim 2 — Cu thin-film CTE measured 17.5–17.9 ppm/K, consistent with bulk.**
Source: MDPI (Cu(Co) alloys, XRD-heated-stage CTE) / ResearchGate (Cu(Ag) films).
URL: https://www.mdpi.com/3499644
Date: 2025-09-15
Excerpt: "the coefficient of thermal expansion (CTE) increased linearly with increasing cobalt content, **from 17.5 ppm/K for pure copper** to a maximum of 27.5 ppm/K"
Context: confirms α ≈ 16.5–17.9 ppm/K; the α term in TCf is only ~8 ppm/K — the modulus term dominates.
Confidence: High.

**Claim 3 — Young's modulus of Cu-alloy structures changes by ≈ 330 ppm/K (thermoelastic coefficient).**
Source: PhD thesis excerpt (gradiometer instrument, OFHC-copper-clamped ribbon), retrieved via search.
URL: (thesis PDF, surfaced in search result set; verbatim below)
Date: n.d.
Excerpt: "**The Young's modulus changes with temperature by about 330 ppm/K** (see Table 6.1 for the thermal properties of the instrument). For a ribbon with a pre-curvature amplitude of 50 μm and under 3 N tension, this results in spurious signals of about 1000 E/K."
Context: gives the ½·TCE ≈ −165 ppm/K half of TCf; also demonstrates how thermal gradients mimic instrument signals in a precision elastic resonator.
Confidence: Medium–High (ribbon alloy ≈ Cu-Be/Cu-class; consistent with NIST copper compilation).

**Claim 4 — NIST critical compilation: temperature derivatives of Cu elastic constants at room temperature known to ~6%; shear constants' coefficients ≈ 2× the longitudinal ones.**
Source: H.M. Ledbetter, "Elastic Properties of Metals and Alloys. II. Copper", J. Phys. Chem. Ref. Data / NIST.
URL: https://srd.nist.gov/JPCRD/jpcrd57.pdf (also https://srd.nist.gov/jpcrdreprint/1.3253150.pdf)
Date: 1973 (compilation); citing Chang & Himmel (1966) above-room-temperature Cu data
Excerpt: "**The temperature dependences of the elastic constants of copper are also well characterized. At room temperature the temperature derivatives (1/C_ij)(dC_ij/dT) have standard errors of 6 percent or less.** … As is the usual case for metals, the temperature coefficients of the shear constants … are largest in magnitude, being approximately twice the magnitude of the coefficients of the longitudinal constants."
Context: authoritative basis for TCE(Cu) ≈ −300…−400 ppm/K; defines TCf ≈ −(140–170) ppm/K.
Confidence: High.

**Claim 5 — Measured dV/dT for copper (longitudinal) ≈ −0.487 to −0.509 m/s/°C.**
Source: E. Ginzel, "Approximate dV/dT values for some materials", NDT.net, quoting Salama & Ling measurements on Cu CDA110.
URL: https://www.ndt.net/article/ndtnet/2017/3_Ginzel.pdf
Date: 2017 (compiled)
Excerpt: "**Cu CDA110 varied for sample −0.487 to −0.509**" [m/s/°C] … "For most solids, the value is negative (i.e. the velocity decreases with increasing temperature)."
Context: independent cross-check: TCf = dV/(V dT) − α ≈ −0.5/4700 − 16.5 ppm/K ≈ −123 ppm/K → −28 Hz/K at 230 kHz. Bracket used in Table 1: −28…−40 Hz/K.
Confidence: High (measured), Medium (spread between samples).

**Claim 6 — Resonant-peak frequencies of real elastic samples shift to lower f and lose amplitude as T increases (generic sign of TCf).**
Source: Physical Acoustics Lab, University of Auckland — RUS overview.
URL: https://pal.auckland.ac.nz/resonant-ultrasound-spectroscopy/
Date: n.d.
Excerpt: "**As temperature increases, resonant peaks decrease in amplitude, and shift to lower frequency**"
Context: sign check (TCf < 0); magnitude comes from Claims 3–5.
Confidence: High.

### Laboratory temperature gradients and stability

**Claim 7 — Ordinary rooms stratify ≈ 1 K per vertical metre; ASHRAE comfort limits allow 3–4 K over ~1.8 m.**
Source: MDPI Buildings 15(14):2417 (2025) review of stratification literature; ASHRAE-55.
URL: https://www.mdpi.com/2075-5309/15/14/2417
Date: 2025-07-10
Excerpt: "Several authors have proposed acceptable vertical temperature gradients that extend **from about 3 °C/m to as high as 8 °C/m** … Olesen et al. and ASHRAE-55 recommend a more conservative **maximum difference of 3 °C for seated occupants and 4 °C for standing occupants**" and separately (destratification industry source, https://nordicco.eu/destratification-fan-for-energy-savings-northern-star/, 2026-02-19): "Often a **temperature difference of approx. 1,0°C per vertical meter** can be seen."
Context: 0.40 m separation in a normal room ⇒ 0.04–0.4 K differential ⇒ 1–14 Hz at 230 kHz.
Confidence: High.

**Claim 8 — Precision/metrology labs achieve only ±0.1 K equipment-surface stability without special design; ±6 mK single-point with multi-zone active control.**
Source: Springer, "Simulation analysis for controlling temperature stability of a radiant-board system … thermodynamic temperature measurement laboratory" (2024); and Sciengine "active temperature control system for Fast Steering Mirror" (2026).
URLs: https://link.springer.com/article/10.1007/s12273-024-1151-4 ; https://www.sciengine.com/doi/10.3788/IRLA20260347
Dates: 2024-08-13; 2026-06-03
Excerpts: "the surface temperature of the measurement equipment can satisfy **±0.1 K control temperature stability requirement** when the fluctuations of the surface temperature of radiant panels and glass window are within ±0.5 K and ±1 K respectively" / "a single-point temperature control stability reaching **±6 mK** and a **maximum temperature difference among the three points of less than 0.1 K**"
Context: even a "±0.1 K" metrology room leaves 3–4 Hz of uncorrected differential shift over 0.40 m; only sub-10-mK differential thermometry reaches the 0.03 Hz level.
Confidence: High.

**Claim 9 — State-of-the-art differential temperature sensing is 0.1 mK; to keep a quartz-class oscillator at ADEV 10⁻¹³ ambient instability must be < 10 mK.**
Source: Sensors (MDPI) "Frequency Stability Degradation in Quartz and MEMS Oscillators"; PMC gold-film MEMS sensor paper.
URLs: https://www.mdpi.com/1424-8220/26/17/5425 ; https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7374507/
Dates: 2026-08-27; 2020
Excerpts: "maintaining ADEV on the order of 10−13 at 100 s requires **restricting ambient temperature instability to below 10 mK**" / "the proposed integrated gold-film temperature sensor can perform in situ temperature measurement with a **resolution of about 0.1 mK**"
Context: benchmarks the required thermometry class for LOC-1; also quantifies the ambient-TC loop in the reference oscillator itself (term #9).
Confidence: High.

### Seismic / vibration environment

**Claim 10 — Ambient ground acceleration at quiet sites: RMS < 10⁻⁸ m/s²/√Hz outside the 0.1–0.5 Hz microseism band (Peterson USGS OFR 93-322).**
Source: "Living on an Active Earth", National Academies Press, note 3 citing Peterson 1993.
URL: https://nap.nationalacademies.org/read/10493/chapter/5
Date: 2003 (NAP volume)
Excerpt: "**The root-mean-squared acceleration noise levels at quiet sites are typically below 10–8 m/s2/√Hz, except in the microseismic band (0.1 to 0.5 hertz)**, where the ground noise caused by ocean waves is high; see J.R. Peterson, Observations and Modelling of Seismic Background Noise, U.S. Geological Survey Open File Report 93-322."
Context: the floor under LOC-1's two positions will differ at this level unless on a common slab; coupling into a 230 kHz rigid-sphere mode is via support/transducer, i.e. negligible direct Δf.
Confidence: High.

**Claim 11 — Generic lab-floor vibration criteria: VC-A = 50 µm/s (ordinary labs), VC-B = 25, VC-C = 12.5, VC-D = 6.25, VC-E = 3.1 µm/s (1/3-octave RMS velocity, 1–80 Hz).**
Source: HKUST HSE manual Ch. 23 (reproducing ISO/IEST VC curves, after Gordon & Ungar); corroborated by Daeil Systems note.
URLs: https://hseo.hkust.edu.hk/sm_23 ; https://www.daeilsys.com/support/technical-notes/generic-vibration-criteria
Dates: n.d. (HKUST); 2025-12-07 (Daeil)
Excerpt: "**VC-A 260 µg between (4 and 8) Hz; 50 µm/s between 8 and 80 Hz | VC-B 130 µg … 25 µm/s … | VC-C 12.5 µm/s between (1 and 80) Hz | VC-D 6.25 µm/s … | VC-E 3.12 µm/s**"
Context: two floor spots 0.40 m apart on different structural bays can differ by one VC class (×2); a walking person locally exceeds VC-A. Effect on the sphere is indirect (SNR/linewidth), not a static Δf.
Confidence: High.

**Claim 12 — Even a vibration-isolated gravity station keeps 1–10 Hz ground noise below 10⁻⁶ m/s².**
Source: Frontiers in Earth Science, gravimetric calibration-line background-noise study.
URL: https://www.frontiersin.org/journals/earth-science/articles/10.3389/feart.2025.1429119/xml/nlm
Date: 2023-03-10 (online)
Excerpt: "**The noise levels of (1–10) Hz are all lower than 120 dB, that is, (1 × 10−6 m/s2), so the vibration isolation foundation of the absolute gravity observation site provides a very quiet absolute gravity observation environment**"
Context: upper bound for a *good* site; LOC-1's ordinary lab is typically 10–100× noisier (VC-A).
Confidence: High.

### Tilt, loading, remounting

**Claim 13 — Lab floor/ground tilt wanders ~100 µrad/day even indoors; tidal/weather tilt steps of 0.4–4 µrad are routine.**
Source: Caltech-hosted paper (tiltmeter beam on lab floor, Fig. 15); and Earth Planets Space (Nankai borehole tiltmeters).
URLs: https://authors.library.caltech.edu/records/45mxp-ax094/files/1.4875375.pdf ; https://link.springer.com/article/10.1186/s40623-023-01946-w
Dates: n.d. (Caltech); 2023-12-20
Excerpts: "**We observe that daily variation in absolute tilt is 100 μrad.** … the ground tilt will drift to a value that is six orders of magnitude above the target precision" / "the average and standard deviation of the steps were **0.38 and 0.50 micro radians**"
Context: tilt changes the support contact geometry of a resting sphere; combined with Claim 14 this is a Hz-scale remounting systematic.
Confidence: High (tilt magnitudes); Medium (conversion to Δf).

**Claim 14 — RUS practice: transducer-mount weight (weak-coupling violation) and mesh misalignment each cause ≈ 1 GPa-scale systematic error in fitted moduli (~0.5–1% → 0.25–0.5% in f).**
Source: Physical Review Letters 132, 066003 (2024), "Resonant Ultrasound Spectroscopy for Irregularly Shaped Samples".
URL: https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=936496
Date: 2024
Excerpt: "We further identify three dominant systematic errors: (i) **deviations from the weak-coupling approximation due to the weight of the transducer mount**; … The first two of these **each contribute a systematic uncertainty of approximately 1 GPa.** … These systematic errors are general to RUS."
Context: a 0.5% modulus error ≈ 0.25% frequency error ≈ **575 Hz at 230 kHz** — remounting between the two positions without a repeatable kinematic/nodal mount is potentially the largest term in the budget.
Confidence: High (RUS literature); Medium (transfer to sphere geometry).

**Claim 15 — Precision reference oscillators themselves are tilt-sensitive at the µrad level; CSO tilt sensitivity ≈ 6×10⁻¹⁷/µrad fractional frequency.**
Source: arXiv:astro-ph/0310112 (CSO vs hydrogen maser Lorentz test).
URL: https://arxiv.org/pdf/astro-ph/0310112
Date: 2003
Excerpt: "Measurements of the tilt variations of the CSO show amplitudes of **4.6 μrad and 1.6 μrad at diurnal and semi-diurnal frequencies.** … we deduce a **tilt sensitivity of ≈ 6 × 10−17 μrad−1**."
Context: shows even "immobile" precision resonators see µrad tilt cycles; for the copper sphere the mechanism is different (contact stress), and much larger.
Confidence: High.

### Magnetic environment

**Claim 16 — Earth field is 25–65 µT; indoor spatial variations are tens of µT; temporal (magnetospheric) variations tens–hundreds of nT.**
Source: arXiv:2602.14181 "Localization Exploiting Spatial Variations in the Magnetic Field".
URL: https://arxiv.org/html/2602.14181v1
Date: 2026-02-15
Excerpt: "**Earth field (25–65 µT)** … "These temporal variations are typically on the order of **tens to hundreds of nano-Tesla.** For indoor localizations, where the **spatial variations are on the order of tens of micro-Tesla**…"
Context: copper is diamagnetic (χ ≈ −9.6×10⁻⁶); computed magnetostatic strain on the sphere is ~10⁻¹⁹, i.e. Δf < 10⁻¹³ Hz. The real risk is to magnetically sensitive transducers/electronics: see Claim 17.
Confidence: High.

**Claim 17 — Ordinary building equipment (elevators, metros, vehicles) changes local ambient field by 0.2–2 µT (2–21 mG).**
Source: arXiv:2404.01199 (dual-species atom interferometer systematic study).
URL: https://arxiv.org/pdf/2404.01199.pdf
Date: 2024
Excerpt: "The laboratory elevator causes a maximum change in the ambient magnetic field of approximately **17 mG** … During the travelling time of the metros, the maximum variation of the ambient magnetic field is **21 mG** … Vehicles and instruments cause relatively small variations in ambient magnetic fields, at **mG level**."
Context: position/time-correlated µT-level field changes between the two measurement spots; harmless to the Cu sphere, potentially relevant to magnetic transducers — control by using piezo (non-magnetic) drive/detection.
Confidence: High.

**Claim 18 — Conductors vibrating in static B-fields experience magnetic damping AND stiffening (both ∝ B₀²); a real, measurable frequency-perturbing mechanism in strong fields.**
Source: PMC "Theory and mitigation of motional eddy current in high-field eddy current shielding" (3 T MRI context).
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11246172/
Date: 2024
Excerpt: "**These effects manifest themselves as magnetic damping and stiffening in the mechanical response of the plate** … All response coefficients (such as impedance and damping coefficient) that result from magneto-mechanical coupling are **proportional to B0²**."
Context: at Earth's 50 µT (vs 3 T) the effect scales down by ~10⁻¹⁰ → negligible for the sphere; cited to bound the mechanism.
Confidence: High (physics), High (negligibility at µT).

### Pressure / humidity (air loading)

**Claim 19 — A vibrating body in air suffers an additive-mass frequency shift Δf/f = u/(2ρA) ∝ air density (hence pressure), and air damping degrades Q by up to 24%.**
Source: M. Olivieri et al., "Influence of Air Pressure on the Resonance Properties of a T-Shaped Quartz Tuning Fork Coupled with Resonator Tubes", Applied Sciences 11(17):7974.
URL: https://www.mdpi.com/2076-3417/11/17/7974
Date: 2021-08-28
Excerpt: "the additive mass causes a normalized shift on the frequency … **Δf = u/(2ρA)** … **u = kρ_air** … According to the ideal gas law, ρ_air = MP/RΘ" and "**f0 decreases linearly as pressure increases**"; "a reduction of **24% in the Q-factor** … at atmospheric pressure."
Context: for the sphere, Δf/f ≈ −½·ρ_air/ρ_Cu ≈ −6.7×10⁻⁵ at 1 atm ≈ −15 Hz absolute; weather swings of ±20 hPa modulate this by ±0.3 Hz; 1 hPa ↔ 15 mHz. Vacuum removes the term.
Confidence: High.

**Claim 20 — Sea-level pressure ranges 980–1040 hPa in normal weather; changes of 1–3 hPa/3 h are routine, >6 hPa/3 h severe.**
Sources: Cambridge Univ. Press "Weather" excerpt; Pro-Weather pressure-trend guide.
URLs: https://assets.cambridge.org/97811084/17167/excerpt/9781108417167_excerpt.pdf ; https://pro-weather.com/blog/how-to-read-barometric-pressure-trends
Dates: n.d. (book excerpt); 2026-07-26
Excerpts: "the **typical range of pressure at sea level is about 980 to 1030 hPa**. The pressure will only drop below 980 hPa during intense storms." / "A fall of **more than 3–4 hPa in three hours** signals an approaching storm … Slower changes of **1–3 hPa** mean gradual change."
Context: the ±0.3 Hz (days) / 0.02–0.05 Hz (3 h) entries in Table 1, term #4.
Confidence: High.

**Claim 21 — Humidity raises the speed of sound by 0.1–0.6% (0–100% RH at 20 °C ≈ 0.3–0.5%); air-coupled measurement paths and any gas-spring loading inherit this.**
Sources: Wikipedia "Speed of sound"; INRIA research report RR-9500 (Cramer-model analysis); Bohn, JAES 36(4) 1988 (via ProAcoustics PDF).
URLs: https://en.wikipedia.org/wiki/Speed_of_sound ; https://inria.hal.science/hal-04008847v2/file/RR_9500.pdf ; https://www.proacousticsusa.com/media/wysiwyg/PDFs/Enviromental_Effects_on_the_Speed_of_Sound.pdf
Dates: 2002-11-16 (article created); 2023-02-09; 1988
Excerpts: "**Humidity has a small but measurable effect on the speed of sound (causing it to increase by about 0.1%–0.6%)**" / "At 20 °C, a variation about … **0.5 % for h_v ∈ [0,100] %**" / "Moist air is less dense than dry air … This causes an increase in the speed of sound."
Context: RH differences between measurement sessions modulate air-coupling calibration and (weakly) the sphere's gas loading; 0.01–0.1 Hz estimate in Table 1.
Confidence: High (physics), Medium (magnitude on sphere).

### Tidal gravity

**Claim 22 — Solid-Earth + ocean tides vary g by up to 300–400 µGal peak-to-peak, at max rates ≈ 60 µGal/h.**
Sources: Crossley et al., "The measurement of surface gravity", Rep. Prog. Phys. 76, 046101 (2013); Encyclopedia of Volcanoes (2nd ed.).
URLs: https://ses.cidp.edu.cn/the-measurement-of-surface-gravity-crossley-2013.pdf ; https://staibabussalamsula.ac.id/wp-content/uploads/2024/01/Encyclopedia-of-Volcanoes-staibabussalamsula.ac_.id_.pdf
Dates: 2013; 2015 (2nd ed.)
Excerpts: "**By far the largest variation of gravity at a station is due to solid Earth and ocean tides, with a range of up to 0.3 mGal, or 300 μGal peak-to-peak.**" / "Earth tides vary by **up to 400 μGal peak to peak with a maximum rate of change of about 60 μGal hour−1**."
Context: Δg/g ≈ 2×10⁻⁷ applied to the sphere's self-stress strain (ρgR/E ≈ 3×10⁻⁹) gives Δf ≈ 7×10⁻¹¹ Hz — utterly negligible, listed for completeness.
Confidence: High.

### Clocks / frequency references

**Claim 23 — GPSDO: 1-day stability 6×10⁻¹⁴–7×10⁻¹³, frequency offset vs UTC ≤ 10⁻¹²; rubidium 1-day ≈ 5×10⁻¹² with uncalibrated offsets up to 5×10⁻⁹.**
Sources: NIST TF publications — Lombardi, "Evaluating the Frequency and Time Uncertainty of GPS Disciplined Oscillators and Clocks" (NIST TN 2871); "The Use of GPS Disciplined Oscillators as Primary Frequency Standards" (NIST TN 2297); cal-lab comparison table.
URLs: https://tf.nist.gov/general/pdf/2871.pdf ; https://tf.nist.gov/general/pdf/2297.pdf ; https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=842470
Dates: 2014; 2005; n.d.
Excerpts: "The ADEV estimates at one day range from about **7×10−13 to about 6×10−14**" / "a requirement … all nodes in a telecommunications network within **1 × 10−11** … is impossible to meet with quartz … and difficult … with rubidium" / table: "Rubidium … Frequency offset with respect to UTC(NIST) (1 day average) **5 × 10−9 to 5 × 10−12** … Stability at 1 second 5 × 10−11 to 5 × 10−12".
Context: at 230 kHz: GPSDO → 2×10⁻⁸ Hz; good Rb → 2×10⁻⁷ Hz; uncalibrated Rb → 1.2 mHz; free-running TCXO (10⁻⁶) → 0.23 Hz. Term #9.
Confidence: High.

### Sphere-mode physics (basis of the conversion factors)

**Claim 24 — Free elastic sphere modes (Lamb 1882): torsional and spheroidal; f = 0.15915·η·√(μ/ρ)/R; lowest modes are l = 2; torsional modes independent of Poisson ratio.**
Sources: Manchester-hosted RUS paper (Lamb/Éringen/Saviot formalism); "Vibrational Frequencies of an Isotropic Elastic Sphere" (reference page with exact η tables).
URLs: https://pure.manchester.ac.uk/ws/portalfiles/portal/186135879/3499_9258_2_PB.pdf ; https://www.geocities.ws/cofrest/md4.htm
Dates: n.d.; 2002-era
Excerpts: "The problem of finding the resonant frequencies of an ideal elastic sphere was **first solved by LAMB** … the solution … only depends on sphere diameter, density, shear modulus and Poisson's ratio. Lamb classified the resonant frequencies in two categories, named **torsional and spheroidal**." / "convert to frequency using, **f = 0.15915 η sqrt(μ/ρ) / R** (f in Hertz) … For the lowest torsional modes (l = 2): exact η = 2.502."
Context: fixes the geometry↔frequency map used throughout; R ≈ 3.9 mm for 230 kHz.
Confidence: High.

**Claim 25 — Spherical-resonator metrology context: resonance-frequency metrology on spheres achieves ppm–sub-ppm when thermal boundary layer, shell motion, geometry, and transducer corrections are applied; temperature gradients are a named systematic (0.4–0.8 ppm contribution).**
Source: Moldover et al., "Measurement of the Universal Gas Constant R Using a Spherical Acoustic Resonator", J. Res. NBS 93(2), 1988.
URL: https://nvlpubs.nist.gov/nistpubs/jres/093/jresv93n2p85_A1b.pdf
Date: 1988
Excerpt: "The temperature of the speed-of-sound measurements is subject to possible systematic errors from calibration and from **temperature gradients in the resonator. This contributes terms of 0.8 ppm and 0.4 ppm to the standard error in R.** … The corrections are generally less than 0.01% in sound speed…"
Context: the closest metrology literature to LOC-1's sphere: even world-class spherical resonators budget temperature gradients at the ppm level — here ppm of f = 0.23 Hz at 230 kHz.
Confidence: High.

**Claim 26 — RUS tracking with PLL achieves ppm-level frequency resolution on ~1 MHz resonances (i.e., ~1 Hz), confirming that Hz-level *measurement* precision is routine — the budget above is about *position-correlated systematics*, not readout noise.**
Source: Cornell PhD thesis, "Resonant Ultrasound Investigations of …" (chill.lassp.cornell.edu).
URL: https://chill.lassp.cornell.edu/sites/chill/files/Thesis_Final_sg2235_lowres.pdf
Date: n.d. (≈2023)
Excerpt: "if **we expect few ppm changes in a 1 MHz resonance, the target BW should be set to about 1 Hz.** Higher bandwidths make the PLL respond faster but gives noisy data, whereas at lower bandwidths, the PLL responds slowly but tracks the resonance with more closely."
Context: readout noise floor ≪ the environmental terms; also documents that background-phase drift in electronics mimics frequency shifts (instrument-side systematic).
Confidence: High.

---

## 3. METHOD NOTES AND UNCERTAINTIES

- **TCf derivation (Claim-level synthesis):** for a free sphere, f ∝ v/R with v = √(μ/ρ). Then d ln f/dT = ½·d ln μ/dT − ½·d ln ρ/dT − α = ½·TCE + 1.5α − α = ½·TCE + ½α. With TCE(Cu) ≈ −330…−360 ppm/K (Claims 3–4) and α = 16.5 ppm/K: **TCf ≈ −157…−172 ppm/K**; the direct dV/dT measurement (Claim 5) gives −123 ppm/K. Table 1 uses the envelope −28…−40 Hz/K at 230 kHz. **1 mK ↔ ≈ 30–40 mHz.** Confidence: High for order of magnitude; Medium for the exact value (sample-to-sample variation in cold-worked vs annealed Cu — Claim 5 shows ±2% sample spread; the NIST compilation notes averaging-method deviations).
- **Air loading:** the −½·ρ_air/ρ_Cu factor assumes an order-unity added-mass coefficient (surface modes entrain roughly one displaced volume of air). True coefficient depends on mode shape; treat the 15 mHz/hPa figure as ±50%.
- **Remounting term:** the RUS 0.25–0.5% figure (Claim 14) is for contact-transducer setups; a free/nodally supported sphere with fixed geometry is far better, but no direct sphere remounting reproducibility number was found in this session — the 2 Hz – 2 kHz range is an extrapolation (Medium–Low confidence at the low end).
- **Humidity surface-mass term** (adsorbed water monolayers on Cu): estimated ~0.03 Hz for full monolayer change; Low confidence — flagged for follow-up (Cu room-temperature oxidation/adsorption kinetics not pinned down in this session).
- **Search completeness:** 28 queries executed across temperature coefficients, Cu elasticity compilations, dV/dT measurements, lab HVAC stability, room stratification, VC vibration criteria, seismic noise models (Peterson NLNM/NHNM), magnetic environment, eddy-current coupling, barometric statistics, speed-of-sound humidity, Earth tides, clock stability (NIST GPSDO/Rb), tilt records, RUS systematics, and Lamb-sphere eigenfrequency theory.

### Verbatim-excerpt integrity
All excerpts above are copied verbatim from the retrieved source text (including original typos/units such as "√Hz" renderings and "μGal hour−1"). Dates are publication dates where shown by the source; "n.d." = not dated on the page; "accessed in session" = retrieved via web search during this research session.

[^1^]: ATT Elements copper datasheet — https://www.attelements.com/metal-and-alloys-power/copper-powder-(cu-powder).html (n.d.)
[^2^]: MDPI Cu(Co) films — https://www.mdpi.com/3499644 (2025-09-15)
[^3^]: Gradiometer thesis excerpt (Young's modulus 330 ppm/K) — thesis PDF via search (n.d.)
[^4^]: Ledbetter, JPCRD/NIST, Elastic Properties of Cu — https://srd.nist.gov/JPCRD/jpcrd57.pdf (1973)
[^6^]: Ginzel, dV/dT compilation, NDT.net — https://www.ndt.net/article/ndtnet/2017/3_Ginzel.pdf (2017)
[^8^]: MDPI Buildings stratification — https://www.mdpi.com/2075-5309/15/14/2417 (2025-07-10); Nordicco destratification note (2026-02-19)
[^9^]: ASHRAE-55 3–4 °C limits (as cited in [^8^])
[^10^]: Springer radiant-lab HVAC ±0.1 K — https://link.springer.com/article/10.1007/s12273-024-1151-4 (2024-08-13); FSM active control ±6 mK — https://www.sciengine.com/doi/10.3788/IRLA20260347 (2026-06-03); oscillator ambient <10 mK for 1e-13 — https://www.mdpi.com/1424-8220/26/17/5425 (2026-08-27); 0.1 mK Au-film sensor — https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7374507/ (2020)
[^12^]: Cambridge "Weather" pressure range — https://assets.cambridge.org/97811084/17167/excerpt/9781108417167_excerpt.pdf; Pro-Weather 3 h tendencies — https://pro-weather.com/blog/how-to-read-barometric-pressure-trends (2026-07-26)
[^13^]: NAP "Living on an Active Earth" (Peterson 1993) — https://nap.nationalacademies.org/read/10493/chapter/5 (2003)
[^14^]: VC curves — https://hseo.hkust.edu.hk/sm_23; https://www.daeilsys.com/support/technical-notes/generic-vibration-criteria (2025-12-07); quiet gravity station — https://www.frontiersin.org/journals/earth-science/articles/10.3389/feart.2020.599810/full and https://www.frontiersin.org/journals/earth-science/articles/10.3389/feart.2025.1429119/xml/nlm (2023)
[^15^]: PRL 132, 066003 (2024) RUS systematics — https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=936496
[^17^]: Lamb-sphere formalism — https://pure.manchester.ac.uk/ws/portalfiles/portal/186135879/3499_9258_2_PB.pdf; https://www.geocities.ws/cofrest/md4.htm
[^18^]: arXiv:2602.14181 magnetic-field spatial variations — https://arxiv.org/html/2602.14181v1 (2026-02-15)
[^19^]: arXiv:2404.01199 elevator/metro field changes — https://arxiv.org/pdf/2404.01199.pdf (2024); eddy-current stiffening — https://pmc.ncbi.nlm.nih.gov/articles/PMC11246172/ (2024)
[^20^]: Crossley et al. RPP 76 046101 — https://ses.cidp.edu.cn/the-measurement-of-surface-gravity-crossley-2013.pdf (2013); Encyclopedia of Volcanoes — https://staibabussalamsula.ac.id/wp-content/uploads/2024/01/Encyclopedia-of-Volcanoes-staibabussalamsula.ac_.id_.pdf
[^21^]: NIST GPSDO/Rb — https://tf.nist.gov/general/pdf/2871.pdf; https://tf.nist.gov/general/pdf/2297.pdf; https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=842470
