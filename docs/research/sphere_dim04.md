# Dimension 04 — Physics Literature on Elastic/Acoustic Free Oscillations of Spheres
## Baseline for LOC-1: claimed ~230 kHz breathing mode of a hollow copper sphere, R ≈ 10 cm

**Headline result (high confidence):** The elastic breathing (purely radial, n=0) mode of a *solid* copper sphere of radius 10 cm lies at **≈ 20.8 kHz** (Lamb eigenvalue x = ωR/c_L = 2.7586, with c_L = 4726 m/s). For a *hollow* (thin-shell) copper sphere of the same outer radius the breathing mode is **lower**, ≈ 10.6–15 kHz depending on wall thickness (membrane limit 10.55 kHz). A 230 kHz breathing mode would require a copper sphere of radius **≈ 0.9 cm (solid) or ≈ 0.46 cm (thin shell)** — i.e., the claimed frequency is **11–22× higher** than continuum elasticity allows for a 10 cm-radius object, whatever the wall thickness. This is consistent with the resonant-mass GW-detector literature, where 65–68 cm CuAl6% spheres resonate at ~3 kHz and a 15 cm CuAl sphere at ~13 kHz (f ∝ v_s/R).[^6^][^7^][^8^][^9^]

---

## 1. Claim / Source / URL / Date / Excerpt / Context / Confidence

### A. Breathing-mode frequency formulas

**Claim A1 — The breathing mode of an elastic sphere is governed by the Navier equation reduced to radial form; eigenvalues kR come from a transcendental equation involving tan(kR).**
- Source: D. Châtel, V. Galstyan, O. Arcizet, "A note on the breathing mode of an elastic sphere in Newtonian and complex fluids" (Phys. Rev. E 92, 063201, 2015)
- URL: https://arxiv.org/html/1506.09212v1 — Date: 2015-06-30
- Excerpt (verbatim): *"We consider the purely radial vibration of an elastic sphere of radius R in a compressible viscous fluid. This spherically symmetric motion is also called the breathing mode… We take the divergence of (3a) and define the scalar function ϕ = ∇⋅u to obtain ∂²ϕ/∂t² = c_l²∇²ϕ, where c_l = √((2μ+λ)/ρ_s), which physically represents the velocity of longitudinal waves in an elastic material."*
- Context: Continuum-mechanics derivation; radial mode depends only on c_L and R. The same paper computes quality factors of the breathing mode damped by surrounding fluid.
- Confidence: **High** (peer-reviewed PRE; standard result).

**Claim A2 — Solid-sphere radial-mode eigenvalue equation: tan(x) = 4x/(4 − (c_L/c_T)²x²), x = ωR/c_L; first root x ≈ 2.759 for copper (ν = 0.34) → f₀ ≈ 20.75 kHz at R = 10 cm.**
- Source (equation form): arXiv:1604.06738, "Damping evaluation for free vibration of spherical structures in elastodynamic-acoustic interaction," plus my own numerical solution with copper constants (ρ = 8960 kg/m³, E = 130 GPa, ν = 0.34 → c_L = 4726 m/s, c_T = 2327 m/s).
- URL: https://arxiv.org/html/1604.06738v1 — Date: 2016-02-04
- Excerpt (verbatim): *"The application of the second BC results in the following transcendental equation for δ_m: tan δ_m = βδ_m/(δ_m² + β). This nonlinear equation is solved numerically via a root finding algorithm… A meaningful asymptotic approximation for δ_m at large integer m is given by δ_m ≈ mπ + β/mπ."*
- Context: Equivalent standard form of the Lamb (1882) radial frequency equation. My computation (SciPy root-finding): roots x = 2.7586, 6.1220, 9.3199, … → f = 20.75, 46.0, 70.1 kHz for R = 10 cm. Note c_L computed from copper's moduli is 4726 m/s, matching the "~4700 m/s" figure quoted in the mission.
- Confidence: **High** (analytic formula + numerical check; the ~20.8 kHz figure is robust to ±10% modulus uncertainty).

**Claim A3 — Thin spherical shell membrane breathing (n=0) mode: f = (1/2πR)·√(2E/[ρ(1−ν)]) → ≈ 10.55 kHz for copper at R = 10 cm; the hollow-sphere breathing frequency rises from this membrane limit toward the solid-sphere value as the wall thickens (my exact two-surface Bessel solution: 10.8 kHz at wall 1 mm → 15.4 kHz at wall 7 cm → 20.75 kHz solid).**
- Source (thin-shell formula and n=0 = breathing identification): OSTI report "Vibrations of complete spherical shells with imperfections"; UPL Open book chapter on spherical-shell vibration.
- URLs: https://www.osti.gov/servlets/purl/977882 (undated report); https://www.uplopen.com/books/11107/files/072bfdf1-6694-4d43-bb7b-87951b99d4da.pdf
- Excerpts (verbatim): *"n = 0 on the membrane branch is the so-called 'fundamental', pure breathing, mode of the spherical vessel."* (OSTI); *"the zero-order ('breathing') mode, where the displacements are purely radial… The resonance frequency corresponding to the zero mode of vibration is considered as the fundamental mode."* (UPL book)
- Context: Shell theory (membrane branch). My hollow-sphere computation (traction-free inner+outer surfaces, spherical Bessel j₁/y₁ determinant) confirms the breathing eigenvalue x rises monotonically from ≈1.44 (thin shell) to 2.759 (solid). **No wall thickness gives anything close to 230 kHz at R = 10 cm.**
- Confidence: **High** for the range 10.5–21 kHz; the spurious low-x root sometimes produced by catastrophic cancellation in the y₁ terms was identified and discarded.

**Claim A4 — Foundational theory: Lamb (1882) and Chree (1889) first solved the free vibration of the elastic sphere; two classes: toroidal (no radial motion) and spheroidal (radial; n = 0 is the breathing mode).**
- Source: Hasheminejad & Geji, J. Sound Vib. (2011), "Exact 3D elasticity solution for free vibrations of an eccentric hollow sphere"; Lamb's original: Proc. London Math. Soc. 13, 189 (1882).
- URLs: https://www.sciencedirect.com/science/article/pii/S0022460X10005365 ; https://www.scirp.org/reference/referencespapers?referenceid=437193
- Excerpt (verbatim): *"Lamb presented two basic types of free vibrations: torsional (toroidal or equivoluminal) vibrations…; and spheroidal (pulsating or coupled bending–stretching) vibrations… related to the distortion of the elastic sphere due to vibrations in the radial direction."*
- Confidence: **High**.

**Claim A5 — Rule of thumb used by the spherical-GW-detector community: first quadrupole mode f ≈ v_s/4R; more precisely f_{n=1,l=2} = 1.62·v_s/(2πR) for a solid sphere.**
- Source: Bassan et al., "Acoustic properties of a hollow sphere for gravitational wave detectors" (submitted to CQG, 2009).
- URL: https://hal.science/hal-00569773/document — Date: 2009-11-13
- Excerpt (verbatim): *"The resonant frequency of the first spheroidal quadrupolar modes is roughly v_s/4R, where v_s is the sound velocity of the material and R the sphere radius… The solution for a bulk sphere boils down to a rather simple equation for its first quadrupolar modes at f{n=1,l=2}=1.62 v_s/2πR."*
- Context: Quadrupole (l=2) modes sit *below* the breathing (l=0) mode. All sphere modes scale as f ∝ v/R.
- Confidence: **High**.

### B. Measured sphere resonances (reality check on scaling)

**Claim B1 — MiniGRAIL: 68 cm diameter CuAl6% sphere, 1150–1400 kg, quadrupole modes ≈ 2.9–3.25 kHz; sound velocity ≈ 4100 m/s; Q ~ 10⁷ at low temperature.**
- Source: arXiv:0705.0122; MiniGRAIL CQG proceedings (minigrail.nl/LISAproceedings2002.pdf); de Waard thesis abstract (Leiden, 2012).
- URLs: https://arxiv.org/pdf/0705.0122 ; http://www.minigrail.nl/Publications/LISAproceedings2002.pdf ; https://scholarlypublications.universiteitleiden.nl/handle/1887/18979
- Excerpts (verbatim): *"The antenna is a massive sphere in CuAl, has a diameter of 68 cm, a mass of about 1.3 ton and the GW sensitive spheroidal quadrupole modes have frequencies around 2980 Hz at 4.2 K… Q ~ 10⁷ at low temperature… V_s ≈ 4100 m/s."* (arXiv:0705.0122); *"We have measured mechanical quality factors of 20 million in CuAl6% samples."* (LISA proceedings)
- Context: f·R ≈ 2980 Hz × 0.34 m ≈ 1010 m/s ≈ v_s/4 — exactly the scaling in Claim A5. Scaling this to R = 10 cm gives ~10 kHz for quadrupoles and ~21 kHz for the breathing mode — nowhere near 230 kHz.
- Confidence: **High**.

**Claim B2 — Mario Schenberg detector: CuAl6% sphere, R = 32.33 cm, M = 1124 kg, band 3.15–3.26 kHz, Q ~ 2×10⁶ at 4 K.**
- Source: PMC10582151 / arXiv:2302.01232 (design sensitivity paper).
- URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC10582151/ — Date: 2023
- Excerpt (verbatim): *"The Mario Schenberg Brazilian detector is based on the detection of five quadrupole modes relative to the mechanical vibrations of a spherical resonant-mass of M_S = 1124 kg and radius R = 32.33 cm. The operating frequency band is 3.15–3.26 kHz. The antenna is made of a CuAl(6%) alloy, which has a high mechanical quality factor Q ~ 2×10⁶ at 4 K."*
- Confidence: **High**.

**Claim B3 — Directly measured 15 cm CuAl6% sphere: quadrupole modes 13 161–14 593 Hz at 4.2 K (predicted 13 270 Hz); after hollowing to ξ = t/R = 0.293 (wall 22 mm), modes drop to 7072–7602 Hz (57% of bulk) — hollowing *lowers* resonance; Q ~ 10⁵ at 300 K, ~10⁶ at 4 K.**
- Source: Bassan et al. 2009 (same as A5).
- URL: https://hal.science/hal-00569773/document — Date: 2009-11-13
- Excerpts (verbatim): *"Eq.(1) predicts a value f0 = 13270 Hz, fully compatible with our experimentally measured (at 4.2 K) values, ranging from 13161 to 14593 Hz."* ; *"The Q values we recorded… were spread around 10⁵ at room temperature and just below 10⁶ at liquid Helium temperature."* ; *"the resonant frequency of operation is lowered to about half (57% in our case) of the initial value"* (after hollowing).
- Context: This is the closest published analogue to LOC-1's hollow copper(-alloy) sphere. A 10 cm-radius *hollow* copper sphere must breathe *below* ~21 kHz, and its lowest modes are in the single-digit kHz.
- Confidence: **High**.

### C. Earth's free oscillations (same physics, planet scale)

**Claim C1 — Earth's radial breathing mode ₀S₀: period 20.5 min (f ≈ 0.814 mHz); fundamental spheroidal ₀S₂ period ≈ 54 min.**
- Sources: EOST Strasbourg (Rosat group page); Benioff, JGR 66, 605 (1961); Caltech thesis (Benioff/Press).
- URLs: https://eost.unistra.fr/observatoire/geodesie-et-gravimetrie/gravimetrie/recherches-associees/modes-propres/ ; http://ui.adsabs.harvard.edu/abs/1961JGR....66..605B/abstract ; https://thesis.caltech.edu/6319/
- Excerpts (verbatim): *"le mode 0S0 (période 20.5 minutes) appelé mode « respiration » de la Terre puisqu'il s'agit d'un mode de déformation radiale"* (EOST); *"The gravest spheroidal mode shows a split spectral peak with periods of 54.7 and 53.1 minutes."* (Benioff 1961); *"The period of the fundamental spheroidal mode ₀S₂ is 53.82 minutes."* (Caltech thesis)
- Confidence: **High**.

**Claim C2 — Measured Q of Earth's breathing mode ₀S₀ ≈ 5982; gravest modes have Q of a few hundred (mantle) to ~6000 (radial mode).**
- Source: Talavera-Soza et al., Geophys. J. Int. 224, 1211 (2021); Benioff 1961.
- URLs: https://academic.oup.com/gji/article/224/2/1211/5925335 ; http://ui.adsabs.harvard.edu/abs/1961JGR....66..605B/abstract
- Excerpts (verbatim): *"For mode 0S0, [we] measure a Q value of 5982"* (Talavera-Soza 2021); *"For the spheroidal mode S3 (T = 35.5 min), Q = 380, and for the mode S18 (T = 6.2 min), Q = 170."* (Benioff 1961)
- Context: Even a planet-sized, self-graviting "resonator" reaches Q ~ 6×10³ in its breathing mode — laboratory metal spheres in vacuum do better (10⁵–10⁷) because of better material Q and suspension.
- Confidence: **High**.

### D. Resonant ultrasound spectroscopy (RUS) of spheres

**Claim D1 — RUS determines elastic constants from free-vibration resonance spectra of mm-scale samples; standard forward theory for spheres is Visscher et al. 1991 (JASA); sphere-resonance variant: Mochizuki 1988, Soga & Anderson 1967 (tektites), Oda et al. 1994 (periclase sphere); RUS works for samples with Q of several hundred and up.**
- Sources: Visscher, Migliori, Bell, Reinert, JASA 90, 2154 (1991); Liu & Maynard review material; ScienceDirect RUS-FEM paper (2021).
- URLs: https://www.osti.gov/pages/biblio/2448392 ; https://www.sciencedirect.com/science/article/pii/S1751616121004884
- Excerpts (verbatim): *"RUS is a material elastic property measurement technology… considered by physicists to be the most accurate method for measuring the elastic constants of solid materials with quality factor (namely Q) on the order of several hundreds and up… RRM requires the sample to be a regular homogeneous body such as a parallelepiped, cylinder or sphere."* (2021 paper); *"Ultrasonic spectroscopy of metallic spheres using electromagnetic-acoustic transduction — Johnson, Ward L.; Norton, Stephen J.; Bendec, Felix — The Journal of the Acoustical Society of America, Vol. 91, Issue 5, May 1992."* (OSTI reference list)
- Context: A ~10 cm copper sphere at its true breathing mode (~21 kHz) is a routine RUS-type measurement; the inverse problem would return E, ν, ρ with ~0.1% precision. There is no RUS literature supporting a 230 kHz fundamental radial mode for a 10 cm metal sphere.
- Confidence: **High**.

### E. Temperature coefficient of the resonance frequency

**Claim E1 — General relation: TCf = (1/f)(df/dT) = ½(TCE + α), with TCE = (1/E)(dE/dT) and α the linear thermal expansion coefficient.**
- Source: Ng et al.-style MEMS analysis, Sensors & Actuators A 189 (2013) equivalent; verbatim from the Si/SiC micro-cantilever paper.
- URL: https://www.sciencedirect.com/science/article/abs/pii/S0924424713001969 — Date: 2015 (online)
- Excerpt (verbatim): *"The temperature coefficient of frequency (TCf) is given by the derivative of Eq. (3) and can be written as: TCf = (1/f)(δf/δT) = ½(TCE + α) where TCE is given by 1/E·δE/δT and α is the linear coefficient of thermal expansion."*
- Confidence: **High** (standard result).

**Claim E2 — Copper inputs: α ≈ 16.5–17.7 ppm/K; shear modulus temperature regression G(GPa) = 51.2 − 4.63×10⁻⁵ T² (4–300 K, OFHC copper) → (1/G)(dG/dT) ≈ −5.8×10⁻⁴/K at 295 K; elastic moduli decrease linearly with T above Θ_D/2, shear-constant coefficients ≈ 2× the longitudinal-constant coefficients.**
- Sources: U. Chicago expansion-coefficient table; NIST Monograph 177 (Simon, Drexler, Reed, 1992); Ledbetter & Naimon, J. Phys. Chem. Ref. Data 2 (1973) / NIST reprint.
- URLs: https://psec.uchicago.edu/thermal_coefficients/cte_metals_05517-90143.pdf ; https://nvlpubs.nist.gov/nistpubs/Legacy/MONO/nistmonograph177.pdf ; https://srd.nist.gov/jpcrdreprint/1.3253150.pdf
- Excerpts (verbatim): *"Pure Copper 16.5 [10⁻⁶/K]"* (U. Chicago table); *"G(GPa) = 51.2 − 4.63×10⁻⁵ T² where 4 K ≤ T ≤ 300 K"* (NIST Mono 177); *"The temperature behavior of copper's elastic moduli is classic—continuously decreasing with increasing temperature… linear behavior at high temperatures… the temperature coefficients of the shear constants (C₄₄ and C′) are largest in magnitude, being approximately twice the magnitude of the coefficients of the longitudinal constants."* (Ledbetter & Naimon)
- Confidence: **High**.

**Claim E3 — Resulting thermal sensitivity of the breathing mode of a copper sphere: TCf ≈ −(150 ± 150) ppm/K (½TCE term dominates; TCE of c_L² ∝ (λ+2μ) for Cu ≈ −(2.5–4)×10⁻⁴/K; +α/2 ≈ +8 ppm/K). Hence a 1 K temperature fluctuation shifts a 21 kHz breathing mode by ≈ −3 Hz and a (hypothetical) 230 kHz mode by ≈ −35 Hz. Temperature is the dominant environmental noise source; stabilizing to 1 mK still leaves ~3 mHz (21 kHz) / ~35 mHz (230 kHz) of frequency wander.**
- Source: derived by me from Claims E1–E2 (no single verbatim source; standard).
- Context: This is the *baseline noise floor* LOC-1 must beat. Any claimed position-dependent or anomalous shift must exceed ~10⁻⁴/K × ΔT and be shown not to be thermal.
- Confidence: **Medium-High** (sign and order of magnitude certain; exact TCE for the specific alloy/temper varies ±50%).

### F. Q in air vs. vacuum; other shifts

**Claim F1 — Air loading damps and detunes: 32.768 kHz quartz tuning fork: Q ≈ 10 000 in vacuum vs ≈ 1000 in air; resonance drops 32768 → 32755 Hz (−400 ppm) on admitting air.**
- Source: "Introduction to the quartz tuning fork," Am. J. Phys. (UMD course copy).
- URL: https://www.physics.umd.edu/courses/Phys410/AJP000415.pdf
- Excerpt (verbatim): *"The quality factor is about 10000 in vacuum and about 1000 in air. The resonance frequency drops from 32768 Hz in vacuum to 32755 Hz in air."*
- Context: For a macroscopic cm-scale metal sphere the air *damping* is proportionally smaller (favourable volume/surface), but the fractional added-mass/loading detune is set by ρ_air/ρ_Cu ≈ 1.3×10⁻⁴, i.e. **air-vs-vacuum shifts of order 10–100 ppm** — easily visible and a systematic to control. Expect Q_air ~ 10²–10⁴ for a cm-scale hollow shell at tens of kHz (viscous boundary layer δ ≈ 2 µm at 230 kHz in air).
- Confidence: **Medium-High** (tuning-fork numbers verbatim; sphere extrapolation is physics estimation).

**Claim F2 — In vacuum, metal sphere Q's: ~10⁵ at 300 K, ~10⁶ at 4 K (15 cm CuAl sphere); up to 2×10⁷ for CuAl6% samples; Earth's ₀S₀ Q ≈ 6000. Suspension losses can be made negligible (centre-of-mass vs surface suspension showed no Q degradation).**
- Source: Bassan et al. 2009; de Waard et al., CQG 20, S143 (2003).
- URLs: https://hal.science/hal-00569773/document ; http://www.minigrail.nl/Publications/LISAproceedings2002.pdf
- Excerpts (verbatim): *"Q values… spread around 10⁵ at room temperature and just below 10⁶ at liquid Helium temperature"* ; *"We have measured mechanical quality factors of 20 million in CuAl6% samples"* ; *"Their measurements show, at all temperatures down to 20 millikelvin, no difference in Q due to the suspension, up to within the 10⁷ [level]."*
- Confidence: **High**.

**Claim F3 — Aging/stress relaxation drifts resonances: quartz BAW resonators age ~1–10 ppm/yr (stress relief in mounts, mass loading by adsorption; one monolayer on a 5 MHz plate ≈ 1 ppm); welded/brazed hollow spheres show Q degradation 20–60% and irreversible Q loss after thermal shock (crack formation) — i.e., mechanical history measurably shifts/damps sphere resonances.**
- Sources: Vig tutorial "Quartz Crystal Resonators and Oscillators"; IQD app note; Bassan et al. 2009.
- URLs: https://www.soselectronic.com/novinky/pdf/2318_vig-tutorial-8-5-2-2.pdf ; https://www.iqdfrequencyproducts.com/en/app-note/quartz-crystal-ageing ; https://hal.science/hal-00569773/document
- Excerpts (verbatim): *"The main causes of aging appear to be mass transfer to or from the resonator surfaces… and stress relief within the mounting structure"* (Vig); *"when the sample was shock-cooled in liquid Nitrogen, its Q was irreversibly degraded, most probably due to the insurgence of a crack in the weld"* (Bassan et al.); *"small metallurgical differences in the alloy or in the aging history of the sample"* (Bassan et al., on Q scatter between nominally identical spheres).
- Confidence: **High** (that such effects exist at ppm level); magnitude for a specific copper sphere is sample-dependent.

### G. Summary table — baseline numbers for LOC-1

| Quantity | Value for hollow Cu sphere, R = 10 cm | Source/confidence |
|---|---|---|
| Breathing (n=0) mode, solid limit | 20.75 kHz | computation, High |
| Breathing mode, thin-shell limit | 10.55 kHz | shell formula, High |
| Breathing mode, wall 1 mm–7 cm | 10.8–15.4 kHz | exact Bessel solution, High |
| Radius required for 230 kHz breathing mode | ≈ 0.9 cm (solid), 0.46 cm (shell) | scaling, High |
| Quadrupole l=2 modes | ~4–10 kHz (cf. 13 kHz at R=7.5 cm measured) | Bassan et al., High |
| Temperature coefficient of f₀ | ≈ −(100–300) ppm/K → −2 to −6 Hz/K at 21 kHz; −25 to −70 Hz/K at 230 kHz | derived from NIST/JPCRD, Med-High |
| Air-vs-vacuum detune | order 10–100 ppm | tuning-fork data + ρ ratio, Med-High |
| Q in air | ~10²–10⁴ | extrapolation, Medium |
| Q in vacuum, 300 K | ~10⁵ | Bassan et al., High |
| Q in vacuum, 4 K | ~10⁶ (sphere), 2×10⁷ (best CuAl samples) | Bassan/de Waard, High |
| Aging/stress drift | ~ppm/yr scale; irreversible jumps after thermal/mechanical shock | Vig, Bassan, High (existence) |

**Bottom line for the swarm:** orthodox continuum elasticity (Lamb 1882; confirmed to ~1% by the GW-detector sphere literature) puts the breathing mode of a 10 cm-radius copper sphere — solid or hollow, any wall thickness — in the **10–21 kHz** range. A claimed **230 kHz** breathing resonance is incompatible with the stated size by a factor of 11–22 in frequency (equivalently, a factor ~10 in radius). Whatever LOC-1 measures at 230 kHz cannot be the sphere's elastic breathing mode (it could be a high overtone, a transducer/mount resonance, or an electromagnetic artifact). The environmental noise floor that any genuine mode-frequency experiment must beat is dominated by temperature (~150 ppm/K), air loading (~10–100 ppm), and aging (~ppm/yr); Q is ~10⁵ in vacuum at RT.

---

[^1^]: Châtel, Galstyan, Arcizet, "A note on the breathing mode of an elastic sphere in Newtonian and complex fluids," PRE 92, 063201 (2015). https://arxiv.org/html/1506.09212v1 (2015-06-30)
[^2^]: Hasheminejad & Geji, "Exact 3D elasticity solution for free vibrations of an eccentric hollow sphere," J. Sound Vib. (2011). https://www.sciencedirect.com/science/article/pii/S0022460X10005365
[^3^]: Lamb, "On the Vibrations of an Elastic Sphere," Proc. London Math. Soc. 13, 189–212 (1882). https://www.scirp.org/reference/referencespapers?referenceid=437193
[^4^]: "Damping evaluation for free vibration of spherical structures in elastodynamic-acoustic interaction," arXiv:1604.06738 (2016-02-04). https://arxiv.org/html/1604.06738v1
[^5^]: OSTI, "Vibrations of complete spherical shells with imperfections." https://www.osti.gov/servlets/purl/977882 ; UPL Open book chapter. https://www.uplopen.com/books/11107/files/072bfdf1-6694-4d43-bb7b-87951b99d4da.pdf
[^6^]: Bassan, de Waard, Frossati et al., "Acoustic properties of a hollow sphere for gravitational wave detectors" (2009-11-13). https://hal.science/hal-00569773/document
[^7^]: MiniGRAIL transducer paper, arXiv:0705.0122. https://arxiv.org/pdf/0705.0122
[^8^]: de Waard et al., "MiniGRAIL, the first spherical detector," CQG 20, S143 (2003). http://www.minigrail.nl/Publications/LISAproceedings2002.pdf
[^9^]: Schenberg design sensitivity, PMC10582151 / arXiv:2302.01232 (2023). https://pmc.ncbi.nlm.nih.gov/articles/PMC10582151/
[^10^]: EOST Strasbourg, "Modes propres" (₀S₀ = 20.5 min breathing mode). https://eost.unistra.fr/observatoire/geodesie-et-gravimetrie/gravimetrie/recherches-associees/modes-propres/
[^11^]: Benioff et al., "Excitation of the Free Oscillations of the Earth by Earthquakes," JGR 66, 605 (1961). http://ui.adsabs.harvard.edu/abs/1961JGR....66..605B/abstract
[^12^]: Talavera-Soza et al., "New measurements of long-period radial modes…," GJI 224, 1211 (2021). https://academic.oup.com/gji/article/224/2/1211/5925335
[^13^]: Visscher, Migliori, Bell, Reinert, JASA 90, 2154 (1991) and RUS review material. https://www.osti.gov/pages/biblio/2448392 ; https://www.sciencedirect.com/science/article/pii/S1751616121004884
[^14^]: Si/SiC micro-cantilever TCf paper, Sens. Actuators A 189 (2013). https://www.sciencedirect.com/science/article/abs/pii/S0924424713001969
[^15^]: Thermal expansion of copper: U. Chicago table (16.5 ppm/K). https://psec.uchicago.edu/thermal_coefficients/cte_metals_05517-90143.pdf ; Wikipedia (17 ppm/K). https://en.wikipedia.org/wiki/Thermal_expansion
[^16^]: Simon, Drexler, Reed, NIST Monograph 177, "Properties of Copper and Copper Alloys at Cryogenic Temperatures" (G = 51.2 − 4.63e-5 T² GPa). https://nvlpubs.nist.gov/nistpubs/Legacy/MONO/nistmonograph177.pdf
[^17^]: Ledbetter & Naimon, "Elastic Properties of Metals and Alloys. II. Copper," J. Phys. Chem. Ref. Data 3 (1974). https://srd.nist.gov/jpcrdreprint/1.3253150.pdf
[^18^]: "Introduction to the quartz tuning fork," Am. J. Phys. (Q: 10 000 vacuum / 1 000 air; 32768→32755 Hz). https://www.physics.umd.edu/courses/Phys410/AJP000415.pdf
[^19^]: Vig, "Quartz Crystal Resonators and Oscillators — A Tutorial" (aging mechanisms; 1 monolayer ≈ 1 ppm at 5 MHz). https://www.soselectronic.com/novinky/pdf/2318_vig-tutorial-8-5-2-2.pdf
[^20^]: "MEMS Resonator Parameter Estimation from Fast Frequency Sweeps," ONERA (ringdown; Q vs f). https://hal.science/hal-04059802/file/MEMS_Resonator_Parameter_Estimation_from_Fast_Frequency_Sweeps.pdf
