# Dimension 08 — State-of-the-Art Frequency Resolution & Stability: Measurement Floors for a ~230 kHz Sphere Resonance

**Mission:** Quantify what frequency shifts Δf at f₀ ≈ 230 kHz can actually be resolved, with what instrument/reference, and after what averaging time τ. Covers GPSDO/Rb/atomic references (Allan deviation vs τ), phase-noise floors, thermomechanical (Doppler/thermal) limits for 100–500 kHz mechanical resonators, the Q·SNR-limited resolution law, best published mechanical-resonator stabilities (quartz, MEMS, BAW), and the averaging budget to resolve 1 Hz / 0.1 Hz / 1 mHz at 230 kHz.

**Search count:** 20 web searches + 1 direct document fetch (exceeds ≥15 requirement). All excerpts verbatim. Compiled 2025 (sources dated individually).

---

## 1. Executive summary

Resolving a Δf at 230 kHz is **not limited by the clock reference or the counter**. A GPS-disciplined oscillator contributes fractional noise of ~10⁻¹² at 1 s (≈ 0.23 µHz at 230 kHz), a GPS-disciplined Rb reaches ~10⁻¹³/day (≈ 0.02 µHz), and even the best room-temperature macroscopic mechanical oscillators (5 MHz quartz BVA) flicker-floor at 3–4 × 10⁻¹⁴ (≈ 8 nHz equivalent at 230 kHz). A 12-digit/s reciprocal counter resolves 230 kHz to ~0.2 µHz in 1 s.

The real floors for a macroscopic metal sphere are:

1. **Q·SNR white-noise limit (DR formula):** σ_A(τ) ≈ (1/2Q)(1/SNR)(2πτ)^(−1/2). For Q=10³–10⁵ and SNR=10³–10⁴, this gives 0.05–46 mHz in 1 s at 230 kHz.
2. **Ubiquitous excess 1/f frequency noise:** measured mechanical resonators sit on average **>100× above** the thermomechanical limit (Sansa et al. 2016), producing a flicker floor that does not average down.
3. **Temperature coupling (dominant systematic for a copper sphere):** dln f/dT ≈ −1.6×10⁻⁴ K⁻¹ → **≈ 38 Hz/K at 230 kHz**. A 1 mK thermal excursion mimics a ~38 mHz shift; a 1 mHz shift corresponds to ~27 µK. Millikelvin-class enclosures therefore set a ~tens-of-mHz effective floor unless common-mode rejection (reference sphere) is used.
4. **Resonator response time** τ_r = Q/(πf₀) = 1.4 ms (Q=10³) to 1.4 s (Q=10⁶): sets the minimum settling time between the "two positions" and the bandwidth of any frequency tracking.

**Bottom line:** 1 Hz at 230 kHz is resolvable essentially instantly; 0.1 Hz within ~ms–s; 1 mHz within ~20 s–35 min of averaging in the white-noise regime — but only if flicker frequency noise and temperature are controlled to the same level. The burden of proof for a claimed mHz-level position-dependent Δf rests on demonstrated temperature/flicker floors, not on the GPSDO or counter.

---

## 2. Master table — achievable Δf at f₀ = 230 kHz vs averaging time vs method

Fractional equivalents: **1 Hz = 4.35×10⁻⁶; 0.1 Hz = 4.35×10⁻⁷; 1 mHz = 4.35×10⁻⁹.**

### 2.1 Reference-oscillator contribution (Δf = σ_y × 230 kHz)

| Reference | σ_y @1 s | σ_y @100 s | σ_y @1 day | Δf@1 s | Δf@1 day | Source |
|---|---|---|---|---|---|---|
| TCXO | ~1×10⁻⁹ | ~5×10⁻¹⁰ | drift-dominated | 230 µHz | — | [^2^][^3^] |
| OCXO (good) | ~1×10⁻¹² | ~5×10⁻¹² | ~1e-10/day aging | 0.23 µHz | 23 µHz | [^1^][^3^] |
| GPSDO (OCXO-based, typical lab) | ~1–2×10⁻¹² | ~1×10⁻¹¹ (GPS-link hump) | <1×10⁻¹³ | 0.2–0.5 µHz | ≤0.02 µHz | [^1^][^4^] |
| Rubidium (free-running) | ~1×10⁻¹¹ | ~3×10⁻¹² | ~1×10⁻¹² | 2.3 µHz | 0.23 µHz | [^2^] |
| GPS-disciplined Rb | <2×10⁻¹¹ | ~1×10⁻¹² | ~8×10⁻¹⁴–1×10⁻¹³ | 4.6 µHz | ~0.02 µHz | [^4^][^5^] |
| Hydrogen maser (active) | ~5×10⁻¹³ | ~7×10⁻¹⁵ | ~4×10⁻¹⁵ | 0.11 µHz | 0.9 nHz | [^6^][^7^] |
| 5 MHz quartz BVA (best mechanical osc.) | ~1.7×10⁻¹³ | flicker floor 3.2–6×10⁻¹⁴ | aging 2×10⁻¹³/day | 39 nHz | 46 nHz | [^8^][^9^][^10^] |

### 2.2 Resonator-physics floors at 230 kHz (the sphere itself)

| Limit / method | Formula | Value at 230 kHz | τ for 1 Hz | τ for 0.1 Hz | τ for 1 mHz |
|---|---|---|---|---|---|
| Linewidth f₀/Q (Q=10³ / 10⁴ / 10⁵) | f₀/Q | 230 / 23 / 2.3 Hz | — | — | — |
| DR white-noise limit, Q=10³, SNR=10³ | (1/2Q)(1/SNR)/√(2πτ) | 46 mHz @1 s | 2 ms | 0.21 s | ~35 min (2100 s) |
| DR limit, Q=10⁴, SNR=10³ | same | 4.6 mHz @1 s | 0.02 ms | 2.1 ms | 21 s |
| DR limit, Q=10⁵, SNR=10⁴ (vacuum) | same | 46 µHz @1 s | ≪ms | ≪ms | ~0.02 s |
| Excess 1/f frequency noise (measured reality, NEMS/MEMS) | ~100× above thermomech. limit (Sansa) | flicker floor ~10⁻⁸–10⁻⁷ ⇒ 2–23 mHz plateau | — | — | **does not average out** |
| Thermomechanical (driven) limit, macroscopic sphere m_eff≈0.1–1 kg, a=1 µm | (1/a)√(k_BT/(mQω₀³τ)) [^16^] | ~10⁻¹⁰ Hz @1 s | negligible | negligible | negligible |
| Free-running thermal (ringdown, no drive), Q=10³–10⁵ | σ²=1/(Qω₀τ) [^13^] | 0.6–6 Hz @1 s | ~1 s (Q=10⁴) | ~100 s | ~10⁶ s (Q=10⁴) |
| **Temperature (copper sphere)** | dln f/dT ≈ −1.6×10⁻⁴/K | **37.6 Hz/K** | 27 mK | 2.7 mK | **27 µK** |
| Resonator response time τ_r = Q/(πf₀) | — | 1.4 ms (Q=10³) → 1.4 s (Q=10⁶) | min. settling time between positions | | |

### 2.3 Readout-instrument floors at 230 kHz

| Instrument | Spec | Δf at 230 kHz |
|---|---|---|
| Keysight 53230A counter (12 digits/s, 20 ps single-shot) [^20^] | ~1×10⁻¹² in 1 s | ~0.23 µHz @1 s gate |
| SRS QCM200 (dedicated resonator counter) [^21^] | 0.1 Hz (1 s gate), 0.01 Hz (10 s gate) | 0.1 Hz / 0.01 Hz |
| FPGA reciprocal counter, typical QCM class [^22^] | 0.01–0.1 Hz in 1 s | 10–100 mHz @1 s |
| PLL-based tracking readout (QCM-class) [^22^] | measured 0.22 Hz @ 0.1–1 s on 5 MHz | ~0.2 Hz equivalent |
| Laser Doppler vibrometer (displacement floor) [^27^] | ≤0.4 pm/√Hz (MSA-500); <30 fm/√Hz (VibroFlex Neo) | sets SNR, not Δf directly |
| Phase-noise floor, best 5–100 MHz BAW oscillators [^30^] | −160 to −180 dBc/Hz | supports σ_y ~ few×10⁻¹⁴ |

---

## 3. Detailed findings — Claim / Source / URL / Date / Excerpt / Context / Confidence

### F1. GPSDO and Rb reference stability (Allan deviation vs τ)

| Claim | Source | URL | Date | Verbatim excerpt | Context | Confidence |
|---|---|---|---|---|---|---|
| Typical lab GPSDO ADEV ≈ 1.2×10⁻¹² at 1 s; Rb ≈ 3×10⁻¹¹ at 1 s (measured on 10 MHz outputs) | NIST, "Frequency Uncertainty Analysis for Josephson Voltage Standard" | https://tf.nist.gov/general/pdf/1931.pdf | n.d. (NIST TN, accessed 2025) | "Table 1. Allan deviation (k=1) for 10 MHz measurements. τ(s): 1 — Cesium 1.18E-11 … Rubidium 3.05E-11 … GPSDO 1.32E-12 … 1024 — … Rubidium 1.39E-11 … GPSDO 6.59E-12" | Direct measurement of typical lab references. GPSDO shows the familiar hump (OCXO short-term, GPS steering long-term). | High |
| Rb: "Stability at 1 second is typically 1×10⁻¹¹ and can be as small as 1×10⁻¹² at one day" | NIST Time & Frequency A–Z | https://www.nist.gov/pml/time-and-frequency-division/popular-links/time-frequency-z/time-and-frequency-z-re-ru | updated 2023-03-01 | "rubidium oscillators operate near 6.83 GHz… Stability at 1 second is typically 1 × 10-11 and can be as small as 1 × 10-12 at one day." | Authoritative nominal figures. | High |
| GPS-disciplined Rb: <2×10⁻¹¹ @1 s → <1×10⁻¹³ @1 day | Precision Test Systems GPS10RBN datasheet | https://www.ptsyst.com/uploads/product/original/p-gps10rbn_61b9cd6eeb0fe.pdf | n.d. | "Typical Allen deviation is <2x10-11 at 1 second dropping to less than 1x10-13 at 1 day." | Commercial GPS-Rb class performance. | High |
| High-end GPS-disciplined Rb reaches ADEV ~8×10⁻¹⁴/day when locked | Symmetricom/Microchip LN Rb GNSDO user manual | http://ael.chungbuk.ac.kr/lectures/graduate/ICT융합특론/04/ref/Low_Noise_Rubidium_user_manual.pdf | 2015-08-28 | "The ADEV performance approaches 8E-014 per day when locked to GPS." | Best-in-class GPSDO; also notes instrument noise floor 1e-12 @1000 s. | Medium-High (vendor) |
| Active H-maser (space-qualified VCH-1010): ≤3×10⁻¹³ @1 s, 7×10⁻¹⁵ @100 s, 5×10⁻¹⁵ @1 day | Vremya-CH | https://vremya-ch.com/index.php/en/progects-en/spaceapplications-en/vch-1010-en-2/index.html | 2021-08-18 | "Frequency stability 5 MHz (Allan deviation for 5 MHz signal): 1 s ≤3.0·10⁻¹³; 10 s ≤3.0·10⁻¹⁴; 100 s ≤7.0·10⁻¹⁵; 1000 s ≤3.0·10⁻¹⁵; 1 hour ≤2.0·10⁻¹⁵; 1 day ≤5.0·10⁻¹⁵" | Reference-class floor; H-maser ensembles <1e-15 from 4 h–100 d (Parker 1999). | High |
| Safran iMaser-3000: ADEV 1.5×10⁻¹⁵ @1000 s | everythingRF listing | https://www.everythingrf.com/products/frequency-and-time-standards/orolia/914-1447-imaser-3000 | n.d. | "an allan deviation of 1.5 x 10-15 (1,000s)" | Commercial state of the art. | Medium-High |

### F2. Phase-noise floors

| Claim | Source | URL | Date | Verbatim excerpt | Context | Confidence |
|---|---|---|---|---|---|---|
| 5 MHz BVA oscillators: flicker −130 to −134 dBc/Hz @1 Hz offset; white floors −160 to −179 dBc/Hz; 80 MHz BAW floors −180 dBc/Hz | US Army/DTIC report (ADA304719) | https://apps.dtic.mil/sti/tr/pdf/ADA304719.pdf | n.d. (~1995) | "Bloch, et al. reported in 1989 a flicker noise level of [L](f)=-134 dBc/Hz at 1 Hz, and a noise floor of -157 dBc/Hz… In 1991, Norton reported similar flicker noise levels and a white phase noise floor of -160 dBc/Hz… 5 MHz oscillators with flicker noise levels of -130 dBc/Hz at 1 Hz have also been measured with a noise floor of -179 dBc/Hz… Recently, Driscoll has reported noise floors of -180 dBc/Hz on 80 MHz oscillators" | Best published oscillator phase-noise floors; these correspond to the 3–6×10⁻¹⁴ flicker-frequency floors of F3. | High |
| H-maser phase noise: −110 dBc/Hz @10 Hz, −150 dBc/Hz @1 kHz (CH1-76A passive maser) | Vremya-CH CH1-76A | https://zifnn.com/index.php/electronic-measurement-instruments/time-and-frequency-measurement-instruments/4-ch1-76a-passive-hydrogen-maser | n.d. | "Phase noise: 10 Hz –110; 100 Hz –125; 1 kHz –150; 10 kHz –150 [dBc/Hz]" | Reference-grade close-in phase noise. | Medium |

### F3. Best published mechanical-oscillator frequency stabilities

| Claim | Source | URL | Date | Verbatim excerpt | Context | Confidence |
|---|---|---|---|---|---|---|
| Quartz BAW oscillators are "the most stable macroscopic mechanical harmonic oscillators, with fractional frequency stabilities as low as 2.5×10⁻¹⁴" at room temperature; cryogenic BVA Q > 10⁹; projected σ_y ~ 2×10⁻¹⁶ | Goryachev et al., "Acoustic tests of Lorentz symmetry using quartz oscillators" | https://arxiv.org/abs/1412.2142 | v4 2015-12-08 | "Such oscillators are also the most stable macroscopic mechanical harmonic oscillators, with fractional frequency stabilities as low as 2.5×10⁻¹⁴ [69] for room temperature devices." / "σ_y = (1/2Q)√(2 ln2 S_φ(1 Hz)) ~ 2×10⁻¹⁶" | Benchmark for macroscopic mechanical resonator stability. Note: achieved at 5–10 MHz, not 230 kHz. | High |
| Best BVA flicker-frequency floor ever reported: 3.2×10⁻¹⁴ (ADEV, few-second averaging) | Kuna et al., "Lowest Flicker-Frequency Floor Measured on BVA Oscillators" (Freq. Control Symp.) | https://engineering.purdue.edu/oxidemems/conferences/fcs2009/PDFs/Papers/036_7222.pdf | 2009 | "The corresponding flicker-frequency floors are 3.2×10⁻¹⁴, 4.0×10⁻¹⁴ and 4.5×10⁻¹⁴… The FFM floor of 3.2×10⁻¹⁴ in terms of Allan deviation for averaging interval of few seconds obtained for the H (SN 692) unit is to our knowledge the best value ever reported on a BVA oscillator." | Required a custom dual-mixer time-difference system with background <1e-14 @1 s. | High |
| Norton/APL 5 MHz BVA: σ_y = 1.7×10⁻¹³ @1 s, 8.9×10⁻¹⁴ @10 s, 6.6×10⁻¹⁴ @100 s | Norton & Cloeren, JHU APL Tech. Digest | https://secwww.jhuapl.edu/techdigest/content/techdigest/pdf/V15-N01/15-01-Norton.pdf | 1994 | "Tau(s): 0.1 → 8.1×10⁻¹³; 1 → 1.7×10⁻¹³; 10 → 8.9×10⁻¹⁴; 100 → 6.6×10⁻¹⁴; 1000 → 7.4×10⁻¹⁴" | Classic spaceflight-grade ultrastable quartz. | High |
| Best oven-controlled MEMS: ±14 ppb stability, ADEV 0.09 ppb @289 s | Xu et al., Microsystems & Nanoengineering 2025 | https://pmc.ncbi.nlm.nih.gov/articles/PMC12460679/ | 2025 | "A final frequency stability of ±14 ppb was achieved… The Allan deviation of the oscillation frequency is calculated as 0.17 ppb at an integration time of 104 s" / "reaches 0.09 ppb at an integration time of 289 s" | State of the art MEMS (5.37 MHz, Q=1.7×10⁶). | High |
| Best short-term MEMS BAW: σ_A = 1.69×10⁻¹⁰ @0.3 s (PLL), 1.23×10⁻¹⁰ @4.8 s (open loop), 11 MHz AlN/Si | IEEE IFCS/ memoir, "Approaching ~0.1 ppb Frequency Stability…" | https://ieeexplore.ieee.org/document/10918012/ | conf. 2025-01 | "The best measured ADEV specifications are σA = 3.76×10⁻⁹ at averaging time τ ≈ 0.4s in SSO scheme, σA = 1.69×10⁻¹⁰ at τ ≈ 0.3s in PLL scheme, and σA = 1.23×10⁻¹⁰ at τ ≈ 4.8s for open-loop operation." | Sub-ppb short-term MEMS stability. | High |
| Si BAW MEMS: ADEV 36 ppt @400 ms (no thermal compensation); macro-ovenized Lamé: modified ADEV 42 ppt @85 s | MDPI Sensors review 2026 | https://www.mdpi.com/1424-8220/26/17/5425 | 2026-08-27 | "a silicon BAW resonator with anchors aligned with nodal locations reached Q=1.8×10⁶ at 1.25 MHz and an Allan deviation of 36 ppt at 400 ms, although without active thermal compensation ambient fluctuations degraded that to 0.3 ppm at two hours" | Illustrates the short-term vs drift gap that dominates real deployments. | High |

### F4. Q·SNR-limited resolution (DR formula) and its real-world failure

| Claim | Source | URL | Date | Verbatim excerpt | Context | Confidence |
|---|---|---|---|---|---|---|
| Frequency resolution scales as 1/(Q·SNR·√τ): σ_A ≅ (1/2Q)(N_T/S)(1/√(2πτ)) | Sansa et al., Nat. Nanotechnol. 11, 552–558 (2016) | https://arxiv.org/pdf/1506.08135 ; https://pmc.ncbi.nlm.nih.gov/articles/PMC4892353/ | 2016 | "The dashed lines in Figure 2c show the theoretical Allan deviation… based on the DR formula expressed in the voltage domain: σ_A ≅ (1/2Q)(N_T/S)√(1/2πτ)" | The canonical Q·SNR law used throughout the mission analysis. | High |
| **Measured mechanical-resonator stabilities sit on average >100× above the thermomechanical limit** — flicker (1/f) frequency noise floor | Sansa et al. 2016 (same) | same | 2016 | "A careful review of most published frequency stability measurements for nanoresonators showed that none of them attained the limit set by thermomechanical noise, and that the Allan deviation measured was on average more than two orders of magnitude higher than this limit." / "the limit-of-detection for this NEMS is more than two orders of magnitude higher than expected for a typical measurement time of 100 ms" | The single most important caveat: DR-formula extrapolations systematically overpromise. Origin still debated; observed even in monocrystalline Si at RT. | High |
| Thermodynamic (free-running thermal) limit: σ² = 1/(Q·ω₀·τ); driven resonators improve with 1/SNR | Gavartin, Verlot, Kippenberg, Nat. Commun. 4, 2860 (2013) | https://arxiv.org/html/1212.3358v1 | 2012-12-13 (arXiv); 2013 (journal) | "Using Eqs. S15 and S25, one obtains for the frequency Allan deviation: σ²(τ) = 1/(Q_M Ω_M τ)" | Stabilized a nanomechanical oscillator to within a factor 2 of its thermal limit; gives the no-drive (ringdown) floor used in Table 2.2. | High |
| Open-loop tracking stability is split by the resonator response time τ_r ∝ Q; detection noise dominates below τ_r | Sadeghi et al., Phys. Rev. B 102, 214106 (2020) | https://arxiv.org/abs/2009.12331 | 2020-09-25 | "the Allan deviation gets separated into two regimes, one limited by the thermomechanical noise of the resonator and the other by the detection noise… The point of transition between the two regimes is the resonator response time, which can be shown to have a linear dependence on Q." | Explains why very high Q does not help fast position-to-position comparisons; closed loop trades noise for speed. | High |
| At fixed bandwidth, more damping can improve stability: σ_fb(τ) = √(3/2)·(1/SNR)·(1/ω₀τ) (flatband regime); 60 µK temperature resolution demonstrated | Roy et al., Science 360, eaar5220 (2018) | https://arxiv.org/html/1710.11280v1 ; PubMed 29903939 | 2018 | "Astonishingly, rather than staying constant, the Allan deviation is actually improving as the pressure increases and Q falls, up to 40 Torr pressure… Incredibly, stability gets better in proportion to the amount of damping." | Counterintuitive but experimentally verified: for a driven resonator measured within the linewidth, SNR ∝ 1/Q cancels the Q-loss. Relevant to whether LOC-1 should maximize Q at all costs. | High |
| Formal resolution limits: τ_c = (√3/π)(Q/f₀); linear-regime σ_y0(τ) = (1/a_x)√(k_BT/(mQω₀³τ)) | Manzaneque et al., Phys. Rev. Appl. 19, 054074 (2023) | https://arxiv.org/pdf/2205.11903 | 2023-05-23 | "The integration time that defines the boundaries between the different τ ranges is τ_c = (√3/π)(Q/f₀)." / "σ_y(τ≪τ_c/χ) = (1/a_x)√(k_BT/(mQω₀³τ))" | Authoritative recent theory of resonant-sensor frequency resolution incl. Duffing. Used for Table 2.2 thermomechanical row. | High |
| Thermal-fluctuation (temperature) noise can directly limit frequency stability (demonstrated) | Zhang & St-Gelais, Appl. Phys. Lett. 122, 193501 (2023) | DOI 10.1063/5.0145780 (via https://pubs.acs.org/doi/abs/10.1021/acs.jpcc.3c04361 ref list) | 2023 | "Zhang, C.; St-Gelais, R. Demonstration of frequency stability limited by thermal fluctuation noise in silicon nitride nanomechanical resonators. Appl. Phys. Lett. 2023, 122, 193501." | Temperature noise — not displacement noise — can be the binding constraint; directly analogous to the sphere's 38 Hz/K sensitivity. | High |

### F5. Temperature coupling of a metal sphere resonance (dominant systematic)

| Claim | Source | URL | Date | Verbatim excerpt | Context | Confidence |
|---|---|---|---|---|---|---|
| Copper Young's modulus temperature coefficient: dE/dT = −5.5×10³ psi/°C at E = 16×10⁶ psi ⇒ (1/E)dE/dT ≈ −3.4×10⁻⁴/K | "Elements of Physical Metallurgy", 2nd ed. (table 8-2) | https://ia601407.us.archive.org/7/items/in.ernet.dli.2015.125545/2015.125545.Elements-Of-Physical-Metallurgy-Ed2nd_text.pdf | (classic text) | "Copper | 16 X10⁶ | −5.5X10³ |" (Young's modulus at 20 °C and temperature coefficient dE/dT, 0–100 °C) | Combined with CTE below. | Medium-High |
| Copper CTE = 16.5 ppm/K | Sentient ION materials note | https://china.sentiention.com/operation/solid-state-phase-evolution-dynamics-and-kirkendall-void-mitigation-under-extreme-thermal-cycling/ | 2026-10-21 | "Copper maintains an isotropic face-centered cubic structure with an expansion coefficient of 16.5 ppm per Kelvin." | Standard reference value. | High |
| **Derived: dln f/dT ≈ −1.6×10⁻⁴/K ⇒ ≈ 38 Hz/K at 230 kHz; 1 mK ⇒ ~38 mHz; 1 mHz ⇔ 27 µK** | This analysis (f ∝ √(E/ρ)/L) | — | 2025 | — | First-order estimate for a free copper sphere's acoustic eigenfrequencies. Dominant artifact for any position-dependent Δf claim; mK-class enclosures leave ~tens-of-mHz wander. | Medium (derived, ±30%) |
| Quartz-oscillator precedent: 3×10⁻¹⁴ stability needs resonator temperature slew < 3 nK/s | Walls, NIST, "The Quest to Understand and Reduce 1/f Noise…" | https://tf.nist.gov/general/pdf/1086.pdf | ~1995 | "To achieve a frequency stability of 3×10⁻¹⁴ requires that the temperature of the resonator change no faster than 3 nK/s." | Shows how the best mechanical oscillators are ultimately temperature-limited. | High |
| MEMS precedent: TC_f of 5.3 Hz/°C ⇒ 10 µK ≡ 1 ppb; TEC control ~1 mK limited the device | Resonant MEMS Accelerometer w/ CW laser excitation (JMEMS 2020) | https://sci-hub.se/downloads/2020-09-07/4e/10.1109@JMEMS.2020.3015291.pdf | 2020 | "For the measured resonant frequency response of ∼5.3 Hz/°C, a device temperature change of only ∼10⁻⁵ °C causes a relative frequency change of 1 ppb. However, the die temperature was only controlled by a TEC with ∼1 mK precision." | Direct precedent that mK thermal control → ~ppb (~0.2 Hz at 230 kHz) frequency floors. | Medium-High (mirror link) |

### F6. Sphere-mode specifics and readout

| Claim | Source | URL | Date | Verbatim excerpt | Context | Confidence |
|---|---|---|---|---|---|---|
| Solid metal/oxide spheres have well-characterized torsional/spheroidal mode spectra in the ~85–93 kHz range (cm-scale); mode structure fully computable | Lakes group, "The resonant ultrasound spectroscopy method for spheres" (preprint) | http://silver.neep.wisc.edu/~lakes/RUSspheresPreprint.pdf | n.d. | "The first torsional modes were found to be the lowest mode of steel and silica spheres with a frequency of 85.4 kHz and 92.6 kHz, respectively" | Confirms ~100–500 kHz eigenmodes of mm–cm spheres are routine RUS territory; Q extracted from peak width. | High |
| Metal internal friction typically caps bell/sphere Q at ~10³ in air (up to 10⁴–10⁵ in vacuum) | Physics StackExchange (expert answer, R. Nesbet) | https://physics.stackexchange.com/questions/169009/bell-in-a-vacuum-where-does-the-sound-energy-go | 2015-03-08 | "The internal friction of a metal bell will limit the quality factor to ~1000 and so the ringdown time will be approximately 3*freq_bell*Q." | Order-of-magnitude anchor for the Q=10³ row of Table 2.2; vacuum raises Q. | Medium (informal but consistent with RUS literature) |
| LDV displacement floors: ≤0.4 pm/√Hz (MSA-500); <30 fm/√Hz and 1.5 nm/s/√Hz velocity (VibroFlex Neo) | Polytec datasheets | https://www.acoutronic.se/pdf/vibration/Polytec_Datasheet_MSA-500.pdf ; https://www.polytec.com/en/vibrometry/products/single-point-vibrometers/vibroflex/vibroflex-neo | n.d. (accessed 2025) | "Displacement resolution … 0.4 pm/√Hz" / "Best velocity resolution, 1.5 nm/s/√Hz ; Best displacement resolution, < 30 fm/√Hz." | Optical readout adds negligible noise: at 230 kHz, 1 pm ↔ v=1.4 mm/s… the SNR in the DR formula is vibrometer-limited only at sub-pm vibration amplitudes. | High |
| Counter resolution: 12 digits/s, 20 ps single-shot (53230A); dedicated resonator counters give 0.01 Hz @10 s gate; reciprocal-counter rule Δf = f/(f_ref·t) | Keysight 53230A listings; SRS QCM200 datasheet; Park et al. 2022 QCM system | https://www.testequipmenthq.com/product-search/keysight-53230a ; https://www.si-gmbh.de/wp-content/uploads/2021/02/SI_QCM200c.pdf ; https://pdfs.semanticscholar.org/7176/f917463d60de3c71939b65caff9b9b0d6417.pdf | various | "12 digits/sec resolution, 15 digits max; 20 ps single-shot time resolution" / "Display resolution 0.01 Hz (10 second gate); 0.1 Hz (1 second gate)" / "Most reciprocal counters were designed with a field-programmable gate array (FPGA) that yields a frequency resolution between 0.1 Hz and 0.01 Hz with a measurement time of 1 s" | Instrumentation is 5–8 orders of magnitude below the 1 mHz target: not a limit. | High |
| QCM-class practical stability at 5 MHz: 0.002 Hz second-to-second; tempco 8 Hz/°C | SRS QCM100 theory note | https://www.thinksrs.com/downloads/pdfs/other%20stuff/QCM_Theory.pdf | n.d. | "Stability (second to second) 0.002 Hz; Stability (minute to minute) 0.10 Hz; Temperature coefficient 8 Hz/°C" | Real-world mHz-level short-term stability of a driven 5 MHz resonator in modest conditions; again temperature-limited. | High |

---

## 4. Averaging budget to resolve 1 Hz / 0.1 Hz / 1 mHz at 230 kHz

| Target Δf | Fractional | Reference+counter floor | DR white-noise (Q=10⁴, SNR=10³) | With Sansa-type 1/f excess (×100) | Temperature-limited (1 mK ctrl, Cu sphere) |
|---|---|---|---|---|---|
| 1 Hz | 4.3×10⁻⁶ | <1 s (trivial) | ~0.02 ms | ~0.2 s | τ must beat 27 mK wander — easy |
| 0.1 Hz | 4.3×10⁻⁷ | <1 s | ~2 ms | ~20 s | needs ≲2.7 mK — marginal with mK control |
| 1 mHz | 4.3×10⁻⁹ | <1 s instrument; Rb/GPSDO reference fine | ~21 s | ~2.4 days (if white-ish) — usually blocked by flicker floor | needs ≲27 µK — beyond mK-class enclosures without common-mode rejection |

**Interpretation for LOC-1-type claims:** A claimed Δf at the mHz level between two sphere positions is *instrumentally* feasible with off-the-shelf GPSDO + counter + LDV in minutes, but *physically* requires (i) thermal stability ~tens of µK or a co-located reference sphere for common-mode rejection, and (ii) demonstrated flicker-frequency floor of the actual sphere (expect ≥100× above the DR/thermomechanical prediction unless proven otherwise). Published analogues: quartz BVA achieves 3×10⁻¹⁴ flicker floors only with nK-class thermal control and decades of engineering; MEMS achieve 0.1–1 ppb (≈ 20–230 mHz at 230 kHz) ADEV floors with ovenization.

---

## 5. Confidence summary and caveats

- **High confidence:** reference-oscillator ADEV figures (NIST-measured and vendor-specified, mutually consistent); quartz BVA/MEMS records (peer-reviewed); DR formula and the Sansa 100× excess-noise finding (peer-reviewed, widely replicated); response-time scaling.
- **Medium confidence:** the copper-sphere temperature coefficient (derived from handbook dE/dT and CTE, first-order, ignoring mode-dependent elastic constants — expect ±30%); metal-sphere Q ~10³ in air (informal source; RUS literature supports 10²–10⁴ range depending on material and mounting).
- **Negative results:** No literature found locating a specific published "LOC-1" 230 kHz sphere experiment; analysis therefore uses generic metal-sphere physics. No published macroscopic *passive* resonator stability measurements at exactly 100–500 kHz were found; the closest anchors are 5 MHz quartz BAW (best case) and MEMS/NEMS at 0.1–80 MHz (which show the 1/f excess that dominates in practice).
- **Key transferable insight:** For macroscopic resonators (m_eff ≳ grams), thermomechanical displacement noise is ~10⁻¹⁰ Hz at 230 kHz and never binding; the floors that matter are temperature (~38 Hz/K for Cu), 1/f frequency noise, and drift between the two measurement positions.

## Footnotes

[^1^]: NIST, Frequency Uncertainty Analysis for JVS — https://tf.nist.gov/general/pdf/1931.pdf
[^2^]: NIST, Time and Frequency from A to Z, Re–Ru — https://www.nist.gov/pml/time-and-frequency-division/popular-links/time-frequency-z/time-and-frequency-z-re-ru (upd. 2023-03-01)
[^3^]: Safran SecureSync 2400 manual, oscillator stability table — https://safran-navigation-timing.com/wp-content/uploads/2026/05/SecureSync2400_UserManual_PN_2400-5000-0050_r12.1.pdf
[^4^]: Precision Test Systems GPS10RBN datasheet — https://www.ptsyst.com/uploads/product/original/p-gps10rbn_61b9cd6eeb0fe.pdf
[^5^]: Microchip Low-Noise Rb GNSDO manual — http://ael.chungbuk.ac.kr/lectures/graduate/ICT융합특론/04/ref/Low_Noise_Rubidium_user_manual.pdf (2015-08-28)
[^6^]: Vremya-CH VCH-1010 active H-maser — https://vremya-ch.com/index.php/en/progects-en/spaceapplications-en/vch-1010-en-2/index.html (2021-08-18)
[^7^]: Safran iMaser-3000 listing — https://www.everythingrf.com/products/frequency-and-time-standards/orolia/914-1447-imaser-3000
[^8^]: Kuna et al., Lowest Flicker-Frequency Floor Measured on BVA Oscillators, FCS 2009 — https://engineering.purdue.edu/oxidemems/conferences/fcs2009/PDFs/Papers/036_7222.pdf
[^9^]: Norton & Cloeren, Precision Quartz Oscillators, JHU APL Tech Digest 15(1) — https://secwww.jhuapl.edu/techdigest/content/techdigest/pdf/V15-N01/15-01-Norton.pdf (1994)
[^10^]: Goryachev et al., arXiv:1412.2142 — https://arxiv.org/abs/1412.2142 (v4, 2015-12-08)
[^11^]: Sansa et al., Nat. Nanotechnol. 11, 552–558 — https://arxiv.org/pdf/1506.08135 and https://pmc.ncbi.nlm.nih.gov/articles/PMC4892353/ (2016)
[^12^]: Sansa et al., Supplementary Information, eq. S2 — http://nano.caltech.edu/publications/papers/Sansa2016-SI.pdf
[^13^]: Gavartin, Verlot & Kippenberg, Nat. Commun. 4, 2860 — https://arxiv.org/html/1212.3358v1 (2012/2013)
[^14^]: Sadeghi et al., Phys. Rev. B 102, 214106 — https://arxiv.org/abs/2009.12331 (2020-09-25)
[^15^]: Roy et al., Science 360, eaar5220 — https://arxiv.org/html/1710.11280v1 ; https://pubmed.ncbi.nlm.nih.gov/29903939/ (2018)
[^16^]: Manzaneque et al., Phys. Rev. Appl. 19, 054074 — https://arxiv.org/pdf/2205.11903 (2023-05-23)
[^17^]: Xu et al., Microsystems & Nanoengineering (2025) — https://pmc.ncbi.nlm.nih.gov/articles/PMC12460679/
[^18^]: IEEE (2025), ~0.1 ppb AlN/Si BAW MEMS — https://ieeexplore.ieee.org/document/10918012/ (conf. 2025-01-19)
[^19^]: MDPI Sensors review, Frequency Stability Degradation in Quartz and MEMS Oscillators — https://www.mdpi.com/1424-8220/26/17/5425 (2026-08-27)
[^20^]: Keysight 53230A specifications — https://www.testequipmenthq.com/product-search/keysight-53230a
[^21^]: SRS QCM200 datasheet — https://www.si-gmbh.de/wp-content/uploads/2021/02/SI_QCM200c.pdf
[^22^]: Park et al., Miniaturized QCM system (2022) — https://pdfs.semanticscholar.org/7176/f917463d60de3c71939b65caff9b9b0d6417.pdf
[^23^]: SRS QCM100 Theory — https://www.thinksrs.com/downloads/pdfs/other%20stuff/QCM_Theory.pdf
[^24^]: Elements of Physical Metallurgy, 2nd ed., Table 8-2 — https://ia601407.us.archive.org/7/items/in.ernet.dli.2015.125545/2015.125545.Elements-Of-Physical-Metallurgy-Ed2nd_text.pdf
[^25^]: Copper CTE 16.5 ppm/K — https://china.sentiention.com/operation/solid-state-phase-evolution-dynamics-and-kirkendall-void-mitigation-under-extreme-thermal-cycling/ (2026-10-21)
[^26^]: Lakes group, RUS of spheres — http://silver.neep.wisc.edu/~lakes/RUSspheresPreprint.pdf
[^27^]: Polytec MSA-500 / VibroFlex Neo datasheets — https://www.acoutronic.se/pdf/vibration/Polytec_Datasheet_MSA-500.pdf ; https://www.polytec.com/en/vibrometry/products/single-point-vibrometers/vibroflex/vibroflex-neo
[^28^]: Thermal noise-driven resonant sensors — https://pmc.ncbi.nlm.nih.gov/articles/PMC11208434/
[^29^]: Resonant MEMS Accelerometer with CW Laser Excitation, JMEMS 2020 — https://sci-hub.se/downloads/2020-09-07/4e/10.1109@JMEMS.2020.3015291.pdf
[^30^]: DTIC ADA304719, state-of-the-art BAW phase noise — https://apps.dtic.mil/sti/tr/pdf/ADA304719.pdf
[^31^]: Zhang & St-Gelais, Appl. Phys. Lett. 122, 193501 (2023) — DOI 10.1063/5.0145780
