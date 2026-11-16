# Dimension 07: Differential / Ratio Measurement Techniques and Matched-Reference Design in Precision Metrology

**Context:** LOC-1 uses two matched copper spheres — one stationary reference, one moved — measuring the frequency **ratio** to cancel common-mode drift. This report surveys the literature and engineering practice behind that architecture: differential null methods, measured common-mode rejection limits, matched-pair fabrication effects (differential aging, CTE/TCF mismatch), ratio metrology with a shared clock, resonator comparison bridges and carrier suppression, and the documented failure modes of two-device differential schemes.

**Method note:** 16 web search queries were executed (requirement ≥15). All excerpts below are verbatim from the cited source (minor OCR artifacts preserved). Confidence ratings: HIGH = primary literature / standards body / manufacturer datasheet, directly on point; MEDIUM = peer-reviewed but adjacent domain, or reputable secondary source; LOW = informal/forum source used only as practice evidence.

---

## 1. Differential Null Measurements — the classical foundation

### Claim 1.1 — A null/ratio measurement eliminates the excitation source from the result; sensitivity comes from null detection, not absolute scaling
- **Source:** Texas Instruments, *Bridge Measurement Systems* (Precision Analog Applications Seminar)
- **URL:** https://www.ti.com/lit/ml/slyp163/slyp163.pdf [^1^]
- **Date:** undated (TI seminar series)
- **Excerpt:** "The principle of the circuit is that if three resistances are known, and the current in the cross branch is zero, the fourth resistance can be calculated. The measurement can be made very accurately since zero current can be detected with extremely high accuracy using a sufficiently sensitive galvanometer."
- **Context:** The Wheatstone bridge (invented by Christie 1833, popularized by Wheatstone) is the canonical differential null measurement. LOC-1's frequency-ratio scheme is the same logical structure: the quantity of interest is extracted from a *balance/ratio*, so absolute drift of the excitation (here: the common drive/clock) drops out to first order.
- **Confidence:** HIGH

### Claim 1.2 — The balance condition depends only on a ratio of arms, and excitation voltage does not appear in the result
- **Source:** Analog IC Tips (Bill Schweber), "Wheatstone bridge, Part 1"
- **URL:** https://www.analogictips.com/wheatstone-bridge-part-1-principles-and-basic-applications/ [^2^]
- **Date:** 2018-11-21
- **Excerpt:** "It is a ratiometric arrangement. The current across the bridge will be at zero when the ratios of the left and right sides are equal. … Note that the value of the bridge excitation voltage does not appear in the equation — this is a major advantage."
- **Context:** Direct statement that ratio/null topologies reject excitation-level noise and drift — the analog of LOC-1 canceling common-mode drift of the measurement chain by using a ratio of two sphere frequencies.
- **Confidence:** MEDIUM (secondary but accurate and standard)

### Claim 1.3 — Bridge accuracy is bounded by ratio-arm matching; perfect matching is unattainable, so parasitic terms are only *reduced*
- **Source:** Wikipedia, "Kelvin bridge" (Accuracy section)
- **URL:** https://en.wikipedia.org/wiki/Kelvin_bridge [^3^]
- **Date:** page continuously updated; content stable
- **Excerpt:** "Also of importance is how close the ratio of R1 to R2 is to the ratio of R′1 to R′2. As shown above, if the ratio is exactly the same, the error caused by the parasitic resistance (Rpar) is eliminated. In a practical bridge, the aim is to make this ratio as close as possible, but it is not possible to make it exactly the same."
- **Context:** Foundational caveat for all matched-reference schemes: cancellation of the undesired term is exactly as good as the *matching*, never perfect. Directly analogous to "no two spheres are identical."
- **Confidence:** HIGH (standard textbook result)

---

## 2. Measured Common-Mode Rejection in Practice (electrical instrumentation)

### Claim 2.1 — Real differential measurement chains achieve ~80 dB at DC but degrade steeply with frequency (~20 dB at 100 MHz), because "it's impossible to perfectly match the two inputs"
- **Source:** Tektronix, *IsoVu White Paper: Isolation Common Mode Rejection*
- **URL:** https://download.tek.com/document/IsoVu%20White%20Paper%20Update%2051W-60485-1%20TN%206-7-17.pdf [^4^]
- **Date:** 2017 (doc id 51W-60485-1)
- **Excerpt:** "In practice, a CMRR of at least 80 dB (10,000:1) will result in usable measurements. Most differential probes can easily obtain a CMRR of 80 dB or higher at DC and low frequencies where it's possible to tune the components accurately. As the frequency of the measurement increases, a differential probe's CMRR degrades because the mismatches become increasingly difficult to control. At 100 MHz, the CMRR capability of most measurement systems is 20 dB or less." And: "Because it's impossible to perfectly match the two inputs of a differential probe, every differential measurement will include some common mode error; it is only a question of how much."
- **Context:** Quantified, industry-measured CMRR-vs-frequency behavior. The static (DC/low-frequency) regime relevant to LOC-1 sphere-frequency ratio measurements is the favorable end; matching errors are the fundamental limit.
- **Confidence:** HIGH

### Claim 2.2 — Manufacturer CMRR figures are obtained under narrowband lab conditions; in-situ broadband rejection is worse
- **Source:** Teledyne LeCroy, "How to Test the CMRR of Differential Probes"
- **URL:** https://www.teledynelecroy.com/oscilloscope/blog/how-to-test-the-cmrr-of-differential-probes/ [^5^]
- **Date:** 2026-01-29 (blog)
- **Excerpt:** "Although CMRR as a function of frequency is a principal specification for differential probes, manufacturer's CMRR plots are the result of testing with a narrowband source under strictly controlled laboratory conditions. In real-world applications of probes to broadband sources, you can expect a different result."
- **Context:** Cautionary practice note: quoted rejection figures overstate field performance — relevant to any claimed "drift cancellation" in LOC-1, which must be validated in situ.
- **Confidence:** MEDIUM

### Claim 2.3 — Asymmetry in the two connection paths (even 1–6 cm of wire) costs 40–60 dB of rejection at high frequency; residual rejection depends on channel matching
- **Source:** Niklaus et al., ETH Zürich, *Next-Generation Measurement Systems with High Common-Mode Rejection* (COMPEL 2018)
- **URL:** https://www.pes-publications.ee.ethz.ch/uploads/tx_ethpublications/20_COMPEL_Next-Generation-Measurement-Systems-with-High-Common-Mode-Rejection_FINAL-FINAL_Niklaus_01.pdf [^6^]
- **Date:** 2018 (IEEE, ISBN 978-1-5386-5541-2)
- **Excerpt:** "…even for the case with a CMC, already very short wires of 1-2cm length lead to a performance degradation of almost 40dB at higher frequencies. Increasing the wire length up to 6cm reduces the rejection by a factor of 1000 (i.e. 60dB) such that at 100MHz only 20dB are achieved…" And: "the performance is improved further and the exact amount is only dependent on the matching of the two channels and only a relative mismatch of Zint between the connections to terminals A and B develops an additional error voltage."
- **Context:** Quantifies how *path asymmetry* — not just device mismatch — sets the rejection floor. For LOC-1, the analogous quantities are the asymmetries in drive/readout coupling to the two spheres.
- **Confidence:** HIGH

### Claim 2.4 — CMRR is a deterministic-signal figure; rejection of *random* common-mode noise follows different (and sometimes better) rules — even 8 dB CMRR rejects >82% of common-mode noise
- **Source:** Pallàs-Areny et al., "Common mode electronic noise in differential circuits" (Universitat Politècnica de Catalunya repository; published in *Measurement*, Elsevier 2019)
- **URL:** https://upcommons.upc.edu/bitstreams/8f03a9f0-0e49-4797-bfb5-bf8cea2ee789/download [^7^]
- **Date:** 2019
- **Excerpt:** "Differential circuits are assumed to reject common-mode noise yet no parameter is available to describe that rejection as the Common Mode Rejection Ratio (CMRR) applies only to deterministic signals, not to random noise. … The analysis shows that the same parameter-matching conditions that improve the CMRR determine common-mode noise rejection but CMRR is more sensitive to mismatching. For example, a low-frequency CMRR as low as 8 dB implies that more than 82% of common-mode noise is rejected."
- **Context:** Important nuance for LOC-1: drift cancellation (deterministic common-mode) is *harder* than noise rejection; the ratio method's performance against slow common drift is governed by the strict (deterministic) matching condition.
- **Confidence:** HIGH

### Claim 2.5 — Ignoring noise correlation between the two channels of a differential measurement can bias inferred noise figures by multiple dB
- **Source:** Microwave Journal, "Measuring Differential Noise Figure" (2018-09)
- **URL:** https://www.microwavejournal.com/articles/31006-measuring-differential-noise-figure [^8^]
- **Date:** 2018-09-12
- **Excerpt:** "The uncorrelated results are shown in Figure 4 and compared to those using the direct correlated method and a balun based method… The uncorrelated approach does indeed produce a lower, erratic value and one that was quite unexpected based on the characteristics of the elements in the amplifier. The result was off by multiple dB."
- **Context:** A documented failure mode of two-channel differential analysis: assuming the two devices' noise is uncorrelated when it is not (or vice versa) corrupts the extracted per-device performance. Same trap exists for two-sphere frequency-ratio noise attribution.
- **Confidence:** HIGH

---

## 3. Ratiometric Measurement with a Shared Reference (ADC / bridge practice)

### Claim 3.1 — Ratiometric cancellation works only if the excitation noise is reflected *equally* in signal and reference paths; a measured experiment shows noise tripling when path filtering is mismatched
- **Source:** Texas Instruments Application Note SBAA201, *RTD Ratiometric Measurements and Filtering Using the ADS1148/ADS1248*
- **URL:** https://www.ti.com/lit/pdf/sbaa201 [^9^]
- **Date:** undated (SBAA201)
- **Excerpt:** "In order for effective ratiometric cancellation to occur, the errors due to the excitation source drift and noise must be equally reflected at the inputs of the ADC, and at the reference inputs of the device. In this configuration, the excitation noise cancels, resulting in a stable, high-resolution measurement." … "The input referred noise of the ADS1248 is approximately 350 nVrms … In the case where CREF= 10μF, where a 1.3-Hz heavy low-pass filter is present in the reference path, the increased noise due to the mismatched RC filters is the most severe. The input referred noise changes from 350 nVrms to 1μVrms as the differential input voltage approaches the full-scale range."
- **Context:** Direct measured demonstration that ratio cancellation is conditional on *symmetric transfer functions* of the two paths. Maps to LOC-1: the two sphere channels (drive, detection, thermal environment) must see the common-mode disturbance with matched gain and phase, or the cancellation degrades exactly at large signal excursions.
- **Confidence:** HIGH

### Claim 3.2 — Ratiometric error is proportional to signal magnitude; residual non-ratiometricity is specified separately
- **Source:** Analog Devices ADXRS610 datasheet (via DigiKey mirror)
- **URL:** https://www.digikey.cn/htmldatasheets/production/255788/0/0/1/adxrs610.html [^10^]
- **Date:** datasheet Rev. A
- **Excerpt:** "The ADXRS610 RATEOUT and TEMP signals are ratiometric to the VRATIO voltage, that is, the null voltage, rate sensitivity, and temperature outputs are proportional to VRATIO. Thus, the ADXRS610 is most easily used with a supply-ratiometric ADC that results in self-cancellation of errors due to minor supply variations. There is some small error due to nonratiometric behavior." (Table 3 lists ratiometricity errors up to −0.5% mean, 0.6% sigma.)
- **Context:** Manufacturer acknowledgment that "ratiometric" devices retain a specified non-ratiometric residue. The general lesson: cancellation factors of ~100–1000×, not infinity, are what practical ratio architectures deliver.
- **Confidence:** HIGH

### Claim 3.3 — Matched resistor networks: ratio matching ~0.01% (100 ppm) and TC tracking ~0.2 ppm/°C are the state of the art for co-packaged pairs — far better than the absolute specs of the elements
- **Source:** Analog Devices LT5400 Quad Matched Resistor Network datasheet
- **URL:** https://www.analog.com/media/en/technical-documentation/data-sheets/5400fc.pdf [^11^]
- **Date:** datasheet (LT5400)
- **Excerpt:** "A-Grade: 0.01% Matching … 0.2ppm/°C Matching Temperature Drift … 8ppm/°C Absolute Resistor Value Temperature Drift … Long-Term Stability: <2ppm at 2000 Hrs"
- **Context:** Canonical matched-pair data point: co-fabrication buys ~40× better tracking than absolute TC (0.2 vs 8 ppm/°C), and ratio long-term drift (<2 ppm/2000 h) is much better than element drift. This is the electrical analog of what LOC-1 hopes to get from matched copper spheres — but note the pair must share substrate and thermal environment to get it.
- **Confidence:** HIGH

### Claim 3.4 — Thin-film resistor pairs: laser trimming gives 100 ppm ratio error; TC tracking <3 ppm/°C "inherently"
- **Source:** ScienceDirect Topics, *Precision Resistor — an overview* (from precision analog handbook chapters)
- **URL:** https://www.sciencedirect.com/topics/engineering/precision-resistor [^12^]
- **Date:** undated
- **Excerpt:** "While thin film resistors fabricated on silicon have an initial tolerance of up to ±20%, laser trimming during production allows the ratio error between the resistors to be reduced to 0.01% (100 ppm). Furthermore, the tracking between the temperature coefficients of the thin film resistors is inherently low and is typically less than 3 ppm/°C (0.0003%/°C)."
- **Context:** Confirms the pattern: matching/tracking beats absolute tolerance by 1–3 orders of magnitude *when elements share process and substrate*; separately packaged "matched" parts do not guarantee this (cf. EEVblog practitioner warning below).
- **Confidence:** HIGH

### Claim 3.5 — Practitioner warning: same-spec parts from possibly different batches do *not* reliably track
- **Source:** EEVblog forum, "Low PPM Tc Resistors for Voltage Divider circuit?" (user endolith)
- **URL:** https://electronics.stackexchange.com/questions/15928/low-ppm-tc-resistors-for-voltage-divider-circuit [^13^]
- **Date:** 2011-06-24
- **Excerpt:** "You should not assume two resistors will track just because they have the same specs. In reality, they will probably track somewhat, especially if they are from the same production batch, but you don't know that and shouldn't rely on that. Either get resistors with low enough absolute temperature coefficient, or get resistors that are specifically matched."
- **Context:** Engineering-practice evidence that matched-pair performance requires controlled co-fabrication/selection. Directly relevant to the LOC-1 premise that two separately machined copper spheres will track.
- **Confidence:** LOW-MEDIUM (forum, but reflects standard practice; consistent with datasheet-level sources above)

---

## 4. Ratio Metrology with a Shared Clock (time/frequency)

### Claim 4.1 — In the dual-mixer time-difference (DMTD) method, the shared transfer oscillator "does not have to be particularly stable or accurate because the noise it produces is common to both measurement channels and cancels"
- **Source:** NIST, *Time and Frequency from A to Z* (Dual Mixer Time Difference entry)
- **URL:** https://www.nist.gov/pml/time-and-frequency-division/popular-links/time-frequency-z/time-and-frequency-z-d [^14^]
- **Date:** 2023-03-01 (page update)
- **Excerpt:** "The transfer oscillator does not have to be particularly stable or accurate because the noise it produces is common to both measurement channels and cancels when the phase difference is computed."
- **Context:** The authoritative statement of the shared-clock principle underlying LOC-1's ratio measurement: a common reference's noise drops out of a ratio/difference of two simultaneous channels.
- **Confidence:** HIGH

### Claim 4.2 — DMTD cancellation is not automatic: it degrades with relative phase delay between channels; the measured noise floor is set by channel delay mismatch
- **Source:** W. J. Riley, *A Small Dual Mixer Time Difference (DMTD) Clock Measuring System*
- **URL:** http://wriley.com/A%20Small%20DMTD%20System.pdf [^15^]
- **Date:** undated (Hamilton Technical Services)
- **Excerpt:** "The offset reference need not be coherent, nor must it have particularly low noise or high accuracy, because its effect cancels out in the overall measurement process. For best cancellation, the zero-crossings should be coincident or interpolated to a common epoch." … "The most important factor determining the noise floor appears to be the relative delay between the two RF inputs rather than any aspect of the measuring system itself. When this phase difference is large, cancellation of the RF source noise is poor and one sees white FM noise at a higher level than when the phase difference is small."
- **Context:** Documents the *simultaneity/symmetry* condition of shared-clock ratio metrology: cancellation of the common reference requires temporal coincidence of the two channels. For LOC-1, asynchronous sampling or unequal group delays of the two sphere channels would similarly leak common-mode drift into the ratio.
- **Confidence:** HIGH

### Claim 4.3 — Optical-clock frequency *ratio* measurements are the most accurate measurements of any kind (5.2×10⁻¹⁷ in 2008; ≤3.2×10⁻¹⁸ in 2025), and they rely on common-mode cancellation plus careful correlation bookkeeping
- **Source (a):** Rosenband et al., *Science* 319, 1808 (2008) — PubMed abstract
- **URL:** https://pubmed.ncbi.nlm.nih.gov/18323415/ [^16^]
- **Date:** 2008
- **Excerpt:** "We report the frequency ratio of two optical atomic clocks with a fractional uncertainty of 5.2 x 10(-17). The ratio of aluminum and mercury single-ion optical clock frequencies νAl+/νHg+ is 1.052871833148990438(55), where the uncertainty comprises a statistical measurement uncertainty of 4.3 x 10(-17), and systematic uncertainties of 1.9 x 10(-17) and 2.3 x 10(-17) in the mercury and aluminum frequency standards, respectively."
- **Source (b):** NIST, "Optical clock frequency ratios with uncertainty ≤ 3.2×10⁻¹⁸"
- **URL:** https://www.nist.gov/publications/optical-clock-frequency-ratios-uncertainty-32-10-18 [^17^]
- **Date:** 2026-04-10 (NIST publication entry)
- **Excerpt:** "A key innovation in this work is the use of a common ultrastable reference delivered to all clocks via a 3.6 km phase-stabilized fiber link between the institutions. … Discrepancies in 87Sr ratios at 1 × 10⁻¹⁶ and the Al+/Yb ratio at 1.5 × 10⁻¹⁷ in fractional units compared to our previous measurement underscore the importance of repeated, high-precision comparisons by different laboratories."
- **Context:** Ratio metrology's high-water mark; also a warning: even world-class ratio measurements exhibit inter-campaign discrepancies at the 10⁻¹⁶–10⁻¹⁷ level, i.e. ratio measurement does not immunize against device-specific systematics.
- **Confidence:** HIGH

### Claim 4.4 — Synchronous comparison of two clocks interrogated by the *same* laser cancels the Dick effect; residual instability reveals incomplete rejection
- **Source:** Takano et al., "Systematic evaluation of a 171Yb optical clock by synchronous comparison between two lattice systems," *Scientific Reports* (PMC)
- **URL:** https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5964087/ [^18^]
- **Date:** 2018
- **Excerpt:** "Synchronous frequency comparison between optical clocks provides a powerful means to cancel out the laser frequency noise. When comparing the two lattice systems, the interrogation of the two samples of cold atoms in Yb1 and Yb2 are precisely synchronized." … "However, the single clock stability still lies above the estimation from the Dick effect (blue dashed line). This may be attributed to an incomplete rejection of the clock laser noise."
- **Context:** Two-device comparison sharing one local oscillator: the common-mode (laser) noise cancels only to the degree that both devices sample it identically and simultaneously. "Incomplete rejection" is measured, not hypothetical.
- **Confidence:** HIGH

### Claim 4.5 — Correlation between supposedly independent ratio measurements must be explicitly modeled (shared-clock covariance can reach r ≈ 0.8)
- **Source:** Margolis et al., "The CIPM list 'Recommended values of standard frequencies'," *Metrologia* 61 (2024) 035005
- **URL:** https://iopscience.iop.org/article/10.1088/1681-7575/ad3afc/pdf [^19^]
- **Date:** 2024
- **Excerpt:** "significant correlations are likely to arise if an atomic clock participates in more than one frequency comparison during the same period. … For example the uncertainty evaluation of the Hg optical lattice clock at RIKEN was largely common between the 199Hg/87Sr frequency ratio measurement q59, published in 2015 [68] and the 199Hg/171Yb frequency ratio measurement q79, published in 2020 [88], resulting in an estimated correlation coefficient of 0.826."
- **Context:** In ratio metrology, a shared element (here one clock used twice; in LOC-1 the shared reference sphere or shared clock) correlates nominally separate results — a statistical failure mode of the two-device method when used repeatedly or as absolute calibration.
- **Confidence:** HIGH

---

## 5. Three-Device Generalization: the Three-Cornered Hat (diagnosing two-device ambiguity)

### Claim 5.1 — With only two devices, individual noise cannot be separated; three pairwise comparisons of independent oscillators resolve individual variances (Gray & Allan 1974)
- **Source:** Gray & Allan method as summarized in AGU/Wiley review and IEEE literature
- **URL:** https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2023JB026908 [^20^]
- **Date:** 2023-11-03
- **Excerpt:** "The method was first proposed by Gray and Allan (1974) to estimate the frequency stability of each individual oscillator in a set of three oscillators by comparing them in pairs."
- **Context:** The fundamental identifiability limit of LOC-1's two-device scheme: with one reference and one DUT you can never tell which device drifted. The three-cornered hat is the standard escape — at the cost of a third device and the *independence* assumption.
- **Confidence:** HIGH

### Claim 5.2 — The three-cornered hat fails (negative variances) when oscillators are correlated or instrument noise is significant; environmental coupling is the usual culprit
- **Source (a):** Vernotte, Calosso, Rubiola, "Three-Cornered Hat versus Allan Covariance" (IFCS 2016)
- **URL:** https://rubiola.org/pdf-articles/conference/2016-IFCS-Three-cornered.pdf [^21^]
- **Date:** 2016
- **Excerpt:** "Two obvious hypotheses are required, that the oscillators are statistically independent, and that the three measures overlap in time. … The weakness of the Three-Cornered Hat is that the phase noise of the instruments (chiefly white and flicker PM) biases σ² … Negative values of σ²A, σ²B and σ²C are sometimes seen for this reason."
- **Source (b):** time-nuts mailing list (Bruce Griffiths), archived at febo.com
- **URL:** https://www.febo.com/pipermail/time-nuts/2008-November.txt [^22^]
- **Date:** 2008-11
- **Excerpt:** "If the calculations assign negative values to one or more of the individual variances then the phase fluctuations for the individual oscillators may be correlated or at least one of the oscillators may be much quieter than the others. Eventually common environmental variations such as temperature pressure and humidity fluctuations introduce correlations invalidating the above simplified analysis."
- **Context:** Directly names the failure mode most relevant to LOC-1: two devices in the *same* environment have correlated fluctuations, and pairwise-difference methods misattribute or over-subtract noise when that correlation is unmodeled.
- **Confidence:** HIGH (a); MEDIUM (b, expert mailing list)

### Claim 5.3 — A two-clock beat experiment cannot distinguish instrumental drift from signal ("a singular problem")
- **Source:** NOAA technical report, *Relativistic Geodesy* (NOS 118 NGS 36)
- **URL:** https://www.ngs.noaa.gov/PUBS_LIB/RelativisticGeodesy_TR_NOS118_NGS36.pdf [^23^]
- **Date:** undated (NOAA/NGS)
- **Excerpt:** "Two clocks (1) and (2) are calibrated and give identical frequencies at a point. Clock (2) is then moved to a new position (Q). The beat frequency is now (f1-f2). What is the instrumental drift and what is the true drift? This is a singular problem without any meaningful solution. If either the true drift or the instrumental drift is known, then the remaining one can be determined."
- **Context:** This is *exactly* the LOC-1 topology (one stationary, one moved device, beat-frequency readout) and the report states its fundamental degeneracy: differential drift of the reference device is indistinguishable from the signal unless independently bounded. Mitigation requires swap/closure measurements or a third device.
- **Confidence:** HIGH

---

## 6. Matched Resonator Pairs: How Well Do They Actually Track?

### Claim 6.1 — Weakly coupled resonator pairs reject common-mode temperature/pressure to first order, but only because the perturbation is common; measured rejection leaves residuals of a few percent of the raw drift
- **Source:** Thiruvenkatanathan, Yan, Seshia, "Common Mode Rejection in Electrically Coupled MEMS Resonators Utilizing Mode Localization for Sensor Application," IEEE FCS 2009 (Purdue mirror)
- **URL:** https://engineering.purdue.edu/oxidemems/conferences/fcs2009/PDFs/Papers/071_7230.pdf [^24^]
- **Date:** 2009
- **Excerpt:** "…any effects on the stiffness due to ambient environmental fluctuations (e.g.: temperature) would affect both the identical resonators to the same extent thereby leading to a common mode cancellation of these effects to the first order. However, any changes in the stiffness on one of the resonators relative to the other (differential mode), leads to significant shifts in the eigenstates under conditions of weak internal coupling…"
- **Context:** Establishes the first-order-only nature of common-mode cancellation in matched resonator pairs, and the intentional exploitation of *differential* response — the same physics as a reference sphere + moved sphere.
- **Confidence:** HIGH

### Claim 6.2 — Fabrication mismatch means common-mode effects are "reduced dramatically but not completely"
- **Source:** "A Review on Coupled Bulk Acoustic Wave MEMS Resonators," *Micromachines* 13(3), MDPI 2022
- **URL:** https://www.mdpi.com/1424-8220/22/10/3857?type=check_update&version=2 [^25^]
- **Date:** 2022-05-19
- **Excerpt:** "However, in reality, the two resonators are not fully identical due to fabrication errors, and the influence of ΔKT on the sensitivity (the frequency shift or the AR) can be reduced dramatically but not completely."
- **Context:** The literature's standard caveat on matched-pair resonators: differential cancellation is bounded by as-fabricated asymmetry. For two machined copper spheres, geometric/material asymmetry plays this role.
- **Confidence:** HIGH

### Claim 6.3 — Quantified tracking of mode-localized pairs: amplitude-ratio output shows max error 8.8% vs >1000% for frequency output under temperature change; 2.74% vs 21.6% under pressure change
- **Source:** "Dual-Resonator-Based (DRB) and Multiple-Resonator-Based (MRB) MEMS Sensors: A Review," *Micromachines* 12(11):1361, MDPI 2021
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC8621490/ [^26^]
- **Date:** 2021-11-04
- **Excerpt:** "The maximum error of AR based output in sensitivity was 2.74%, whereas that of the frequency shift output reached to about 21.6% for a pressure range of 2.6 to 20 Pa." … "Results in [92] presented that when temperature changes, maximum measurement error in the AR output is 8.8% whereas maximum error in measurement of frequency shift output is >1000%. … The reason for the proposed advantage of using AR shift output is that any ambient variable (for instance temperature/pressure) will equally affect the output sine waveform of each of the resonators. Therefore, environmental effect is cancelled to the first order with the ratio-based output."
- **Context:** Best quantitative data found on *measured* common-mode tracking of matched resonators: ratio metrics reject ~92–97% of common drift, not 99.99%. A calibrated expectation for LOC-1: matched spheres will cancel most, not nearly all, of common thermal drift unless engineered further.
- **Confidence:** HIGH

### Claim 6.4 — There is a dedicated study of *practical limits* of common-mode rejection in matched resonators; mismatch and choice of output metric set the floor
- **Source:** Pandit, Zhao, Sobreviela, Seshia, "Practical Limits to Common Mode Rejection in Mode Localized Weakly Coupled Resonators," IEEE Sensors J. 20, 6818–6825
- **URL:** https://ieeexplore.ieee.org/document/8771180 [^27^]
- **Date:** 2020 (online 2019)
- **Excerpt (from the author's Cambridge thesis describing the study):** "…an apt comparison has not been made to a differential frequency shift output which is the convention with resonant sensors. This study fills these gaps in the current state-of-the-art and sheds light on all the important factors impacting the common mode rejection capabilities of amplitude ratio readout metric in mode-localised resonators." (Repository: https://www.repository.cam.ac.uk/bitstreams/5d0428a9-8acd-4b73-b504-edc0f4c6a038/download [^28^])
- **Context:** Points the LOC-1 analysis at the most directly relevant literature: measured CMR limits of matched resonator pairs including fabrication-mismatch effects. (Full text is paywalled; the thesis chapter reproduces the results.)
- **Confidence:** HIGH (existence/scope); MEDIUM (details, via thesis)

### Claim 6.5 — Co-fabricating the pair on one die with ~100 µm separation yields 20–30 µK effective temperature resolution via frequency ratio, with only ~52 mK simulated thermal offset under heat flux
- **Source (a):** SiTime DualMEMS white paper (2018)
- **URL:** https://www.sitime.com/api/gated/TechPaper-DualMEMS-Temp-Sensing-2018.pdf [^29^]
- **Date:** 2018-09
- **Excerpt:** "The ratio of frequencies between these two resonators provides an extremely fast and accurate reading of the resonator temperature with 30 µK resolution and bandwidth that runs at 100s of Hz."
- **Source (b):** SiTime Endura application note
- **URL:** https://www.sitime.com/api/gated/Robust-Aerospace-and%20Defense-with-Ruggedized-Endura-MEMS-Oscillators.pdf [^30^]
- **Date:** undated
- **Excerpt:** "Another key feature is the tight thermal coupling between the TF and TS resonators, which is due to their small 100-micron separation and their fabrication on the same die substrate. This construction results in virtually no thermal gradient between the TF and TS resonators. Simulations have shown only 52 milliKelvin (m°K) temperature offset between the TF and TS resonators under heat flux."
- **Source (c):** Heidarpour Roshan et al., "A MEMS-Assisted Temperature Sensor With 20-µK Resolution…," JSSC 2016 (author copy)
- **URL:** https://jcdoll.github.io/papers/2016_JSSC_DualMems.pdf [^31^]
- **Date:** 2016
- **Excerpt:** "The key benefit of this technique is the fact that the output noise of the temperature sensor is only set by the PNs of the input clocks and not by the frequency ratio engine, thereby offering a high resolution. In addition, this topology is robust against aging, as it operates based on two feedback loops that force the output to be always a function of the frequencies of the input clocks."
- **Context:** State-of-practice for frequency-ratio readout of two matched resonators sharing a substrate. Two design lessons for LOC-1: (i) minimize the *spatial separation* of the pair (thermal gradients between the spheres are the enemy); (ii) ratio-of-frequencies readout transfers the noise budget onto the two resonators themselves.
- **Confidence:** HIGH (datasheets/JSSC), noting vendor self-interest

### Claim 6.6 — Dual modes of a *single* resonator beat two separate resonators for tracking, because both modes share one thermal/mechanical volume (self-thermometry; MCXO)
- **Source (a):** Vig, "Introduction to Quartz Frequency Standards" (IEEE UFFC tutorial)
- **URL:** https://ieee-uffc.org/files/ieeeuffcorg/2021-12/Introquartzfrequencystandards.pdf [^32^]
- **Date:** 2021-12 (posted)
- **Excerpt:** "The MCXO contains an SC-cut resonator and a dual mode oscillator that excites both the fundamental mode and the third overtone of the resonator. … when the third overtone frequency is subtracted from three times the fundamental mode frequency, the resulting 'beat frequency' is a monotonic and nearly linear function of temperature. This beat frequency enables the resonator to sense its own temperature. … A typical MCXO may have an f vs. T stability of ±2 × 10⁻⁸ for a temperature range of -55°C to +85°C."
- **Source (b):** Vig (review abstract), "Dual-mode oscillators for clocks and sensors"
- **URL:** https://www.academia.edu/106872400/Dual_mode_oscillators_for_clocks_and_sensors [^33^]
- **Date:** 2023 (posted)
- **Excerpt:** "In dual mode excitation, the two excited modes occupy the same volume of quartz, thereby eliminating gradients between the resonator and sensor."
- **Context:** Suggests a design upgrade path for LOC-1: where possible, sense the reference and signal with two modes of the *same* mechanical element (or both spheres in one thermal enclosure) to eliminate inter-device gradients — the dominant residual of physically separate pairs.
- **Confidence:** HIGH

---

## 7. Differential Aging and Fabrication Effects (why matched pairs drift apart)

### Claim 7.1 — Resonator aging is driven by per-device processes (surface mass transfer, stress relaxation, package leaks) that do not correlate between devices
- **Source:** J. R. Vig, *Quartz Crystal Resonators and Oscillators* (tutorial)
- **URL:** https://www.soselectronic.com/novinky/pdf/2318_vig-tutorial-8-5-2-2.pdf [^34^]
- **Date:** 2004 version (cited 87×)
- **Excerpt:** "Because the frequency of a thickness shear resonator, such as an AT-cut or SC-cut, is inversely proportional to the thickness of the crystal plate, and because, for example, a 5-MHz 3rd overtone plate is on the order of 1 million atomic layers thick, the adsorption or desorption of contamination equivalent to the mass of one atomic layer of quartz changes the frequency by about 1 ppm." … "The main causes of aging appear to be mass transfer to or from the resonator surfaces (due to adsorption and desorption of contamination) and stress relief within the mounting structure or at the interface between the quartz and the electrodes."
- **Context:** Aging is microscopic-history-dependent (surface contamination, mounting stress relaxation), hence device-specific. A matched copper-sphere pair must be assumed to age *differentially*; the ratio cancels only the truly common-mode part (e.g., shared temperature history), not independent stress relaxation or surface evolution.
- **Confidence:** HIGH

### Claim 7.2 — Aging can reverse sign and is multi-mechanism and logarithmic; each thermal restart begins a new aging cycle
- **Source:** Vig, "Introduction to Quartz Frequency Standards" (IEEE UFFC)
- **URL:** https://ieee-uffc.org/files/ieeeuffcorg/2021-12/Introquartzfrequencystandards.pdf [^32^]
- **Date:** 2021-12 (posted)
- **Excerpt:** "Aging can be positive or negative. Occasionally, a reversal in aging direction is observed. At a constant temperature, aging usually has an approximately logarithmic dependence on time. … A reversal indicates the presence of at least two aging mechanisms. … When the temperature of a crystal unit is changed (e.g., when an OCXO is turned off and turned on at a later time), a new aging cycle starts."
- **Context:** Quantifies why "differential aging" between two spheres is not a simple linear drift that can be modeled out: it can be non-monotonic, mechanism-switched, and history-dependent (thermal cycling of the pair restarts both devices' aging, not necessarily in step).
- **Confidence:** HIGH

### Claim 7.3 — Stresses from differential thermal expansion, bonding, machining, and mounting are primary frequency-drift drivers in mechanical resonators
- **Source:** Vig tutorial (as [^34^])
- **URL:** https://www.soselectronic.com/novinky/pdf/2318_vig-tutorial-8-5-2-2.pdf [^34^]
- **Date:** 2004
- **Excerpt:** "Causes: Thermal expansion coefficient differences; Bonding materials changing dimensions upon solidifying/curing; Residual stresses due to clip forming and welding operations, sealing; Intrinsic stresses in electrodes; Nonuniform growth, impurities & other defects during quartz growing; Surface damage due to cutting, lapping and (mechanical) polishing."
- **Context:** For copper spheres: machining-induced residual stress, mounting/bond stress, and CTE mismatch against the mount are all device-specific and evolve with time — the fabrication-level origin of differential drift.
- **Confidence:** HIGH

### Claim 7.4 — Even nominally identical artifacts of the same material differ in CTE by up to ~±1×10⁻⁶/K; matched-material comparison nulls the common CTE but residual Δα × ΔT terms remain
- **Source:** Doiron & Beers, *The Gauge Block Handbook*, NIST Monograph 180
- **URL:** https://www.nist.gov/system/files/documents/calibrations/mono180.pdf [^35^]
- **Date:** NIST monograph (1995+)
- **Excerpt:** "Gauge block manufacturers give 11.5×10⁻⁶/°C for steel blocks. This average value may be uncertain by up to 0.6×10⁻⁶/°C for individual blocks. The expansion coefficient for longer sizes can differ from the nominal 11.5×10⁻⁶/°C by nearly 1×10⁻⁶/°C." … "A key result of the comparative principle is that if the two blocks being compared are the same material, Cp and Ct are zero." … "A large error in the comparison process can be introduced by temperature gradients between blocks, or even within a single block. For example, a temperature difference of 0.5°C between two 100 mm steel blocks will cause an error of nearly 0.6 μm (24 μin) in the comparison."
- **Context:** The closest dimensional-metrology analog to two matched copper spheres: same-material comparison cancels the *nominal* expansion, but (i) per-piece CTE spread (~±5–9% of nominal) and (ii) inter-artifact temperature differences set the residual. Expect the same two terms to bound LOC-1's common-mode rejection of temperature.
- **Confidence:** HIGH

### Claim 7.5 — Process control on a matched pair (e.g., difference of two masters) proves stability, not accuracy
- **Source:** NIST Gauge Block Handbook (as [^35^])
- **URL:** https://www.nist.gov/system/files/documents/calibrations/mono180.pdf [^35^]
- **Date:** NIST monograph
- **Excerpt:** "SPC only attempts to guarantee that the process today is the same as the process in the past. If the process begins flawed, i.e., gives the wrong answer, process control will only guarantee that the process continues to give wrong answers."
- **Context:** A two-device differential measurement with an internal consistency check (sphere A vs sphere B stable) cannot detect a *common, systematic* bias — e.g., both spheres responding identically to an unmodeled common perturbation that correlates with the moved sphere's position. External/absolute checks remain necessary.
- **Confidence:** HIGH

---

## 8. Resonator Comparison Bridges and Carrier Suppression

### Claim 8.1 — Carrier suppression (bridge with antiphase cancellation of the carrier) amplifies device noise above the measurement floor by 10–60 dB; introduced by Sann (1968)
- **Source (a):** Li, Ferre-Pikal, Nelson, Walls (NIST), "Review of PM and AM Noise Measurement Systems," NIST
- **URL:** https://tf.nist.gov/general/pdf/1528.pdf [^36^]
- **Date:** undated (NIST Time & Frequency)
- **Excerpt:** "As shown in Figure 7 the carrier signal in the DUT and arm A of the bridge are partially canceled by the carrier signal in arm B of the bridge when two signals are combined 180° out of phase in a hybrid. The noise about the carrier generated by the DUT is not changed when carrier suppression is applied, only the carrier and the noise originally associated with the carrier is reduced. … This technique often allows us to attain noise floors comparable or lower than the cross-correlation technique, without the need for long averaging."
- **Source (b):** Walls et al., "Suppressed carrier based PM and AM noise measurement techniques," IEEE FCS 1997
- **URL:** https://ieeexplore.ieee.org/document/638647 [^37^]
- **Date:** 1997-05-30
- **Excerpt:** "The major advantages of these configurations over conventional measurements is that the noise contribution of the phase or amplitude detector is reduced by the degree of carrier suppression until the thermal noise limit is reached. This typically results in an improvement of 10-60 dB in the noise floor."
- **Context:** The classical "resonator comparison bridge": nulling the common carrier before amplification is precisely a differential-null measurement in the frequency domain. Directly applicable if LOC-1 mixes the two sphere frequencies: null the carrier/common part, amplify the residual difference.
- **Confidence:** HIGH

### Claim 8.2 — Practical carrier suppression achieves 80–90 dB but is stable only ~1 hour; balance must be maintained
- **Source:** Rubiola et al., "Dual carrier suppression interferometer for measurement of …" (rubiola.org author copy)
- **URL:** https://rubiola.org/pdf-articles/journal/2000ell(rubiola)dual-carrier-suppression.pdf [^38^]
- **Date:** 2000-09-11 (Electronics Letters)
- **Excerpt:** "A method for carrier suppression of 80-90dB can be obtained, stable for about one hour."
- **Context:** Measured practical limit of bridge null stability: even carefully built RF bridges drift out of null on hour timescales. For LOC-1, any bridge/nulling front-end needs periodic rebalancing or autonulling if measurements run longer.
- **Confidence:** HIGH

### Claim 8.3 — Resonator-pair comparison bridges are used for precision passive characterization of matched crystal pairs (impedance bridge + carrier suppression)
- **Source:** A. Pokharel PhD thesis, FEMTO-ST/CNES (HAL)
- **URL:** https://theses.hal.science/tel-03022147v1/file/these_A_POKHAREL_Alok_2020.pdf [^39^]
- **Date:** 2020
- **Excerpt:** "In this work, high quality LGT resonator pairs at 10 MHz have been measured on an advanced phase noise measurement system setup in collaboration with Centre National d'Etudes Spatiales (CNES). The noise measurement system is equipped with carrier suppression technic and allows a passive characterization of the resonator pair in Fourier frequencies. Because of low intrinsic impedance, lower than 10 Ω, special adaptation was necessary using transformers to maximize the loaded Q-factor in the measurement system. The simulation of an impedance bridge was done in Pspice software using an advance optimization process."
- **Context:** Existence proof of dedicated *resonator comparison bridge* instrumentation for matched pairs — the instrument class LOC-1 would need to characterize sphere-pair tracking before deployment.
- **Confidence:** HIGH

---

## 9. Matched Mechanical References in Ultrastable Cavities (closest precision analog)

### Claim 9.1 — Two cavities on one monoblock give common-mode rejection of thermal drift and creep, but tracking errors require FEA-optimized mounting; differential sensitivity ~4.5×10⁻⁹/g in a bad geometry
- **Source (a):** Banyal & Reiners, "A dual cavity Fabry-Perot device for high precision Doppler measurements in astronomy," J. Astron. Instrum. 2017 (arXiv)
- **URL:** https://arxiv.org/abs/1612.07431 [^40^]
- **Date:** 2016-12-22 (v1); published March 2017
- **Excerpt:** "The horizontal geometry showed vibrational sensitivity up to ~45×10⁻¹⁰ g⁻¹ … for acceleration directed along the longer edge (x-axis) of the block. The noise along y- and z-direction is common and does not contribute to differential length change. … Numerical simulations show that temperature gradient within the FP enclosure has to be accurately controlled and relative length offset between two cavities should be minimized to avoid differential length changes that may cause spurious drift and unintended tracking errors." (Optimized design reaches fractional differential length change ΔL/L ≈ 1.5×10⁻¹².)
- **Source (b):** Chen et al., "Vibration-induced elastic deformation of Fabry-Perot cavities," Phys. Rev. A 74, 053801
- **URL:** https://link.aps.org/doi/10.1103/PhysRevA.74.053801 [^41^]
- **Date:** 2006-11-02
- **Excerpt:** "…the double-cavity-in-one-piece configuration can possibly offer improved common-mode rejection of the thermal drift and isotropic material creep."
- **Context:** State of the art for "two matched mechanical resonators, one reference": (i) monoblock co-fabrication is the preferred way to make the pair track; (ii) even so, anisotropic vibration coupling breaks common-mode rejection along the measurement axis — the exact analog of "moving one sphere" along a specific axis; (iii) thermal *gradients* across the pair are the dominant tracking error, not the mean temperature.
- **Confidence:** HIGH

### Claim 9.2 — Dual-beam/dual-element differential readout reveals the uncorrelated noise floor but does not reduce the common noise of each element; relative drift between the two paths reappears at long times
- **Source:** M. Lindén, *Slow Light Cavities for Thermal Noise Mitigation in Laser Stabilization* (Lund Univ. thesis)
- **URL:** https://lup.lub.lu.se/search/files/219164186/Avhandling_Marcus_Linden_LUCRIS.pdf [^42^]
- **Date:** undated (Lund PhD thesis)
- **Excerpt:** "By comparing the two beam paths, this shared noise can be largely rejected, allowing the differential signal to highlight uncorrelated effects. … However, it should be noted that any common mode noise that is canceled (like fiber noise, mechanical noise, etc.) still contributes to the noise level of the laser. … The early onset of drift compared to the single-beam locks is likely due to relative mode drift between the two modes. The drift experienced by each mode depends on the relative position within the window. Thus, if the modes are separated in frequency, they will have different drift rates, which can be problematic."
- **Context:** Concise statement of a subtle failure mode: the *differential* channel exposes uncorrelated noise but the underlying devices keep their full common noise; and if the two references sit at slightly different operating points (different mode positions / different sphere frequencies), their drift *rates* differ and the differential channel drifts faster than either element.
- **Confidence:** HIGH

### Claim 9.3 — Ultrastable-cavity practice: per-cavity drift rates of order 10⁻¹⁹/s are device- and power-dependent, i.e. inherently differential
- **Source:** Robinson et al., "Crystalline optical cavity at 4 K with thermal-noise-limited instability and ultralow drift," Optica 6, 240 (2019) — Glasgow ePrints
- **URL:** https://eprints.gla.ac.uk/220300/ [^43^]
- **Date:** 2019-02-20 (published); ePrint record 2020-07-10
- **Excerpt:** "We also report for the first time, to the best of our knowledge, a clear linear dependence of the cavity frequency drift on incident optical power. The lowest fractional frequency drift of −3×10⁻¹⁹/s is attained at a transmitted power of 40 nW, with an extrapolated drift approaching zero in the absence of optical power."
- **Context:** Even state-of-the-art matched cavity references have drive-level-dependent drift; if the two LOC-1 spheres are driven/measured at different amplitudes, their aging/drift coefficients differ and the ratio drifts.
- **Confidence:** HIGH

---

## 10. Measured CMRR of Two-Device Differential Instruments (atom interferometry)

### Claim 10.1 — Two simultaneous atom interferometers sharing one laser reference reject vibration by a measured 140 dB — but tilts/rotations couple differentially and break the rejection
- **Source:** J. Fixler, *Atom Interferometer-Based Gravity Gradiometer* (Stanford PhD thesis, Kasevich group)
- **URL:** http://web.stanford.edu/group/kasevich/cgi-bin/wordpress/wp-content/uploads/2012/09/FixlerThesis.pdf [^44^]
- **Date:** 2003 (thesis)
- **Excerpt:** "The common-mode rejection ratio is measured to be 140dB, i.e. seven orders of magnitude. This demonstrates the common-mode nature of the gradiometer in rejecting vertical vibration noise of the reference platform." … "Tilts of the reference platform at a rotational rate, Ω, produce differential acceleration noise between the two interferometers, as δRΩ², for accelerometer separation δR."
- **Context:** The best measured CMRR found for a matched two-sensor differential instrument (140 dB for a truly common input). The catch: any perturbation that does *not* couple identically (rotations, gradients across the baseline) appears fully in the difference. LOC-1 analog: position-dependent fields (thermal, magnetic, vibrational gradients across the two spheres) are not rejected.
- **Confidence:** HIGH

### Claim 10.2 — Ellipse-fitting extraction of the differential phase introduces significant bias; uncorrelated large noise degrades rejection
- **Source:** Pereira dos Santos group, "Differential phase extraction in an atom gradiometer" (HAL)
- **URL:** https://hal.science/hal-01160291v1/document [^45^]
- **Date:** 2015
- **Excerpt:** "A method based on ellipse fits was first used in [17], but was shown to introduce significant biases, that are errors in the determination of this differential phase. … In a recent study, it was shown that the use of a simultaneous third measurement allows for the retrieval of the differential phase(s) with negligible bias(es) using a robust three dimensional fit."
- **Context:** Documents (i) estimator bias as a data-analysis failure mode of two-channel differential measurements, and (ii) that adding a *third* simultaneous measurement fixes it — reinforcing Claim 5.x on the value of a third element.
- **Confidence:** HIGH

### Claim 10.3 — Compact differential quantum gravimeter: measured lower bound CMRR ≈ 24 (28 dB) passive; ≈230 (47 dB) with active compensation
- **Source:** "Compact differential gravimeter at the quantum projection-noise limit" (HAL)
- **URL:** https://hal.science/hal-03561035/document [^46^]
- **Date:** 2022 (HAL deposit)
- **Excerpt:** "From this value and the sensitivity on the gravity measurement we estimate a lower bound for the common mode rejection ratio to be at least 24, and the total vibration rejection on the differential signal to be close to 230 owing to the active vibration compensation."
- **Context:** Real-world (non-laboratory-grade) differential instrument rejection is more like 1–2 orders of magnitude passively — a sobering calibration point between the 140 dB best case and the MEMS few-percent residuals.
- **Confidence:** HIGH

---

## 11. Consolidated Failure Modes of the Two-Device Differential / Ratio Method

1. **Identifiability degeneracy** — with only a reference and a DUT, drift of the *reference* is indistinguishable from signal ("a singular problem") [^23^]. Mitigation: third device / three-cornered hat [^20^][^21^], device swaps, or independent absolute checks [^35^].
2. **First-order-only cancellation** — cancellation applies to the truly common component; mismatched sensitivities (fabrication, mounting, drive level) leak the common stimulus into the difference [^3^][^25^][^26^].
3. **Asymmetry of the readout paths** — unequal delays/filters between channels destroy cancellation at exactly the level it is needed; measured 350 nVrms → 1 µVrms degradation for mismatched ratiometric filters [^9^]; DMTD noise floor set by channel delay mismatch [^15^].
4. **Thermal gradients between the pair** — the dominant residual for spatially separated references: 0.5 °C between two 100 mm steel artifacts → 0.6 µm error [^35^]; cavity-pair FEA demands enclosure gradient control [^40^]; dual-mode-in-one-element designs exist precisely to kill this term [^32^][^33^].
5. **Differential aging** — aging mechanisms (surface mass transfer, stress relaxation, outgassing) are per-device, non-monotonic, and restart after thermal cycling; matched fabrication does not make them common-mode [^32^][^34^]. Drift is also drive-level-dependent [^43^].
6. **Correlation assumptions in noise attribution** — assuming two channels' noise is uncorrelated when it is correlated (or vice versa) biases inferred device noise by multiple dB [^8^]; three-cornered-hat yields nonphysical negative variances under environmental correlation [^21^][^22^].
7. **Null/bridge drift** — carrier-suppression nulls of 80–90 dB persist only ~1 h before rebalance [^38^].
8. **Estimator bias** — differential extraction from fringe/ellipse fits can be significantly biased; third-measurement or auxiliary-sensor methods are the documented fix [^45^].
9. **Quoted rejection is measured under benign conditions** — lab CMRR specs overstate in-situ broadband rejection [^5^]; passive field instruments realize 28–47 dB [^46^] vs 140 dB best case [^44^].
10. **Ratio readout transfers the budget to the devices** — a clean ratio engine makes the *pair's own* phase noise and tracking the floor [^31^]; residual "non-ratiometricity" (~0.1–0.5%) persists even in purpose-built ratiometric parts [^10^].

---

## 12. Synthesis for LOC-1 (two matched copper spheres, frequency-ratio readout)

- The architecture rests on the oldest and best-validated trick in metrology (null/ratio measurement), and the shared-clock frequency ratio is *the* most accurate measurement type in existence (≤3×10⁻¹⁸) — but those results are between two fully independent, individually calibrated clocks, not two "matched" passive artifacts [^16^][^17^][^19^].
- What matched pairs actually deliver: co-fabricated resonators track to ~0.2 ppm/°C (electrical) [^11^] or reject ~92–97% of common drift (mechanical resonators) [^26^]; separate same-material artifacts differ in CTE by up to ~10% of nominal [^35^]. Expect percent-level residuals of thermal drift in the sphere ratio unless the pair is co-mounted with near-zero thermal gradient.
- The dominant LOC-1 risks, per this literature: (a) thermal gradient between the two spheres [^35^][^40^][^30^]; (b) differential aging/stress relaxation of each sphere and its mount [^34^][^32^][^43^]; (c) readout-channel asymmetry leaking common-mode drift [^9^][^15^][^6^]; (d) reference-sphere drift masquerading as signal (needs swap or third sphere) [^23^][^20^].
- Recommended instrument patterns from adjacent fields: carrier-suppression bridge for the beat/null front-end with auto-rebalance [^36^][^38^]; strictly synchronous sampling of both channels [^18^][^15^]; monoblock or minimal-separation mounting [^40^][^29^]; dual-mode operation of one element as a gradient-free reference where feasible [^32^][^33^].

---

## Sources

[^1^]: Texas Instruments, *Bridge Measurement Systems*, Precision Analog Applications Seminar. https://www.ti.com/lit/ml/slyp163/slyp163.pdf
[^2^]: Analog IC Tips, "Wheatstone bridge, Part 1: Principles and basic applications," 2018-11-21. https://www.analogictips.com/wheatstone-bridge-part-1-principles-and-basic-applications/
[^3^]: Wikipedia, "Kelvin bridge," Accuracy section. https://en.wikipedia.org/wiki/Kelvin_bridge
[^4^]: Tektronix, *IsoVu White Paper: Isolation Common Mode Rejection*, 51W-60485-1, 2017. https://download.tek.com/document/IsoVu%20White%20Paper%20Update%2051W-60485-1%20TN%206-7-17.pdf
[^5^]: Teledyne LeCroy, "How to Test the CMRR of Differential Probes," 2026-01-29. https://www.teledynelecroy.com/oscilloscope/blog/how-to-test-the-cmrr-of-differential-probes/
[^6^]: Niklaus et al., "Next Generation Measurement Systems with High Common-Mode Rejection," COMPEL 2018 (ETH Zürich). https://www.pes-publications.ee.ethz.ch/uploads/tx_ethpublications/20_COMPEL_Next-Generation-Measurement-Systems-with-High-Common-Mode-Rejection_FINAL-FINAL_Niklaus_01.pdf
[^7^]: Pallàs-Areny et al., "Common mode electronic noise in differential circuits," *Measurement* (Elsevier), 2019. https://upcommons.upc.edu/bitstreams/8f03a9f0-0e49-4797-bfb5-bf8cea2ee789/download
[^8^]: Microwave Journal, "Measuring Differential Noise Figure," 2018-09-12. https://www.microwavejournal.com/articles/31006-measuring-differential-noise-figure
[^9^]: Texas Instruments, App. Note SBAA201, *RTD Ratiometric Measurements and Filtering Using the ADS1148 and ADS1248*. https://www.ti.com/lit/pdf/sbaa201
[^10^]: Analog Devices, ADXRS610 datasheet (DigiKey mirror). https://www.digikey.cn/htmldatasheets/production/255788/0/0/1/adxrs610.html
[^11^]: Analog Devices, LT5400 Quad Matched Resistor Network datasheet. https://www.analog.com/media/en/technical-documentation/data-sheets/5400fc.pdf
[^12^]: ScienceDirect Topics, "Precision Resistor — an overview." https://www.sciencedirect.com/topics/engineering/precision-resistor
[^13^]: StackExchange (Electrical Engineering), "Low PPM Tc Resistors for Voltage Divider circuit?", 2011-06-24. https://electronics.stackexchange.com/questions/15928/low-ppm-tc-resistors-for-voltage-divider-circuit
[^14^]: NIST, "Time and Frequency from A to Z, D" (DMTD entry), updated 2023-03-01. https://www.nist.gov/pml/time-and-frequency-division/popular-links/time-frequency-z/time-and-frequency-z-d
[^15^]: W. J. Riley, *A Small Dual Mixer Time Difference (DMTD) Clock Measuring System*, Hamilton Technical Services. http://wriley.com/A%20Small%20DMTD%20System.pdf
[^16^]: Rosenband et al., "Frequency Ratio of Al+ and Hg+ Single-Ion Optical Clocks; Metrology at the 17th Decimal Place," *Science* 319, 1808 (2008). https://pubmed.ncbi.nlm.nih.gov/18323415/
[^17^]: NIST, "Optical clock frequency ratios with uncertainty ≤ 3.2×10⁻¹⁸," publication entry dated 2026-04-10. https://www.nist.gov/publications/optical-clock-frequency-ratios-uncertainty-32-10-18
[^18^]: Takano et al., "Systematic evaluation of a 171Yb optical clock by synchronous comparison between two lattice systems," *Sci. Rep.* 8 (2018). https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5964087/
[^19^]: Margolis et al., "The CIPM list 'Recommended values of standard frequencies'," *Metrologia* 61 (2024) 035005. https://iopscience.iop.org/article/10.1088/1681-7575/ad3afc/pdf
[^20^]: Wiley/AGU, "A Multi-Source GRACE Fusion Solution via Uncertainty Quantification…," 2023-11-03 (TCH history: Gray & Allan 1974). https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2023JB026908
[^21^]: Vernotte, Calosso, Rubiola, "Three-Cornered Hat versus Allan Covariance," IFCS 2016. https://rubiola.org/pdf-articles/conference/2016-IFCS-Three-cornered.pdf
[^22^]: time-nuts mailing list archive (Bruce Griffiths), Nov 2008. https://www.febo.com/pipermail/time-nuts/2008-November.txt
[^23^]: NOAA/NGS, *Relativistic Geodesy*, Tech. Report NOS 118 NGS 36. https://www.ngs.noaa.gov/PUBS_LIB/RelativisticGeodesy_TR_NOS118_NGS36.pdf
[^24^]: Thiruvenkatanathan, Yan, Seshia, "Common Mode Rejection in Electrically Coupled MEMS Resonators Utilizing Mode Localization for Sensor Application," IEEE FCS 2009, pp. 358–363. https://engineering.purdue.edu/oxidemems/conferences/fcs2009/PDFs/Papers/071_7230.pdf
[^25^]: "A Review on Coupled Bulk Acoustic Wave MEMS Resonators," *Sensors* 22(10):3857, MDPI, 2022-05-19. https://www.mdpi.com/1424-8220/22/10/3857
[^26^]: "Dual-Resonator-Based (DRB) and Multiple-Resonator-Based (MRB) MEMS Sensors: A Review," *Micromachines* 12(11):1361, 2021-11-04. https://pmc.ncbi.nlm.nih.gov/articles/PMC8621490/
[^27^]: Pandit, Zhao, Sobreviela, Seshia, "Practical Limits to Common Mode Rejection in Mode Localized Weakly Coupled Resonators," *IEEE Sensors J.* 20, 6818–6825 (2020). https://ieeexplore.ieee.org/document/8771180
[^28^]: M. Pandit, PhD thesis, University of Cambridge (repository copy). https://www.repository.cam.ac.uk/bitstreams/5d0428a9-8acd-4b73-b504-edc0f4c6a038/download
[^29^]: SiTime, *DualMEMS and TurboCompensation Temperature Sensing Technology* white paper, Sep 2018. https://www.sitime.com/api/gated/TechPaper-DualMEMS-Temp-Sensing-2018.pdf
[^30^]: SiTime, *Robust Aerospace and Defense with Ruggedized Endura MEMS Oscillators* (application note). https://www.sitime.com/api/gated/Robust-Aerospace-and%20Defense-with-Ruggedized-Endura-MEMS-Oscillators.pdf
[^31^]: Heidarpour Roshan et al., "A MEMS-Assisted Temperature Sensor With 20-µK Resolution…," *IEEE JSSC* 2016 (author copy). https://jcdoll.github.io/papers/2016_JSSC_DualMems.pdf
[^32^]: J. R. Vig, "Introduction to Quartz Frequency Standards," IEEE UFFC tutorial. https://ieee-uffc.org/files/ieeeuffcorg/2021-12/Introquartzfrequencystandards.pdf
[^33^]: J. R. Vig, "Dual-mode oscillators for clocks and sensors" (review; Academia.edu mirror), posted 2023-09-19. https://www.academia.edu/106872400/Dual_mode_oscillators_for_clocks_and_sensors
[^34^]: J. R. Vig, *Quartz Crystal Resonators and Oscillators for Frequency Control and Timing Applications* (tutorial, 2004). https://www.soselectronic.com/novinky/pdf/2318_vig-tutorial-8-5-2-2.pdf
[^35^]: T. Doiron & J. Beers, *The Gauge Block Handbook*, NIST Monograph 180. https://www.nist.gov/system/files/documents/calibrations/mono180.pdf
[^36^]: Li, Ferre-Pikal, Nelson, Walls, "Review of PM and AM Noise Measurement Systems," NIST. https://tf.nist.gov/general/pdf/1528.pdf
[^37^]: Walls et al., "Suppressed carrier based PM and AM noise measurement techniques," IEEE FCS 1997. https://ieeexplore.ieee.org/document/638647
[^38^]: Rubiola et al., "Dual carrier suppression interferometer for measurement of phase noise," *Electronics Letters*, 2000-09-11. https://rubiola.org/pdf-articles/journal/2000ell(rubiola)dual-carrier-suppression.pdf
[^39^]: A. Pokharel, PhD thesis, FEMTO-ST, 2020 (HAL). https://theses.hal.science/tel-03022147v1/file/these_A_POKHAREL_Alok_2020.pdf
[^40^]: Banyal & Reiners, "A Dual Cavity Fabry-Perot Device for High Precision Doppler Measurements in Astronomy," *J. Astron. Instrum.* (2017), arXiv:1612.07431. https://arxiv.org/abs/1612.07431
[^41^]: Chen et al., "Vibration-induced elastic deformation of Fabry-Perot cavities," *Phys. Rev. A* 74, 053801 (2006-11-02). https://link.aps.org/doi/10.1103/PhysRevA.74.053801
[^42^]: M. Lindén, *Slow Light Cavities for Thermal Noise Mitigation in Laser Stabilization*, Lund University PhD thesis. https://lup.lub.lu.se/search/files/219164186/Avhandling_Marcus_Linden_LUCRIS.pdf
[^43^]: Robinson et al., "Crystalline optical cavity at 4 K with thermal-noise-limited instability and ultralow drift," *Optica* 6, 240 (2019). https://eprints.gla.ac.uk/220300/
[^44^]: J. Fixler, *Atom Interferometer-Based Gravity Gradiometer*, Stanford PhD thesis (2003). http://web.stanford.edu/group/kasevich/cgi-bin/wordpress/wp-content/uploads/2012/09/FixlerThesis.pdf
[^45^]: "Differential phase extraction in an atom gradiometer" (Pereira dos Santos group), HAL, 2015. https://hal.science/hal-01160291v1/document
[^46^]: "Compact differential gravimeter at the quantum projection-noise limit," HAL deposit 2022. https://hal.science/hal-03561035/document
