# LOC-1 / Dimension 02 — Patent Landscape: Precision Resonance-Measurement Instrumentation

**Scope:** Vector network analyzers (VNA), laser Doppler vibrometers (LDV), frequency-reference comparison/discipline methods (GPSDO/Rb), thermal-stabilized chambers, and vibration-isolation patents relevant to micro-Hz-level resonance metrology (LOC-1: copper sphere f₀≈230 kHz measured at two positions, hunting for tiny Δf shifts).

**Method note:** 26 independent English-language web searches were executed (13 search rounds × 2 queries), covering Google Patents/USPTO/Espacenet-indexed content, NIST patent pages, NIST/EPO full-text patent documents, IEEE/UFFC patent histories, and manufacturer disclosures of patented technology. Google Patents, Justia, FreePatentsOnline and USPTO ppubs pages were not directly fetchable in this environment (blocked at network/audit level); verbatim excerpts were therefore sourced from (a) search-index verbatim text of patent documents, (b) NIST-hosted full patent PDFs (nist.gov), (c) EPO publication-server full text (data.epo.org), and (d) manufacturer documents quoting their own patent numbers. Where an excerpt comes from a secondary description of a patent rather than the patent document itself, this is flagged in Context and the confidence rating is lowered accordingly.

**Bottom line (synthesis up front):** Patented instruments relevant to LOC-1 reach the following floors:
- Frequency reference: Rb/GPSDO references deliver 1e-12–1e-13 fractional accuracy and ~7e-13/1000 s stability [^9^][^10^][^11^]; NIST-patented disciplined clocks reach ~1e-15 with tight GPS servo control [^8^].
- f₀ extraction from VNA data: resonance-frequency precision of ~1 part in 10^7–10^8 is demonstrated for Q~10^3–10^5 resonators with vector phase-fitting on VNA sweeps [^17^][^18^]. That is Δf ≈ 0.002–0.02 Hz at 230 kHz — far above micro-Hz. Micro-Hz Δf on a 230 kHz mode requires Δf/f ≈ 4e-12, which no patented VNA/LDV instrument claims; only PLL/ring-down tracking against an atomic/GPSDO reference approaches that regime (DMTD systems reach ADEV <1e-13 at 1 s, cross-correlation floor ~6e-15) [^20^][^21^].
- LDV displacement/velocity floors: pm-class displacement (2.468 pm demonstrated for an all-fiber homodyne LDV; commercial Polytec MSA class ≤0.5 pm/√Hz) [^14^][^15^]; NIST's patented LDV calibrator ties LDV velocity scales directly to a time/frequency reference [^1^].
- Thermal chambers: patented/NIST-built chambers hold ±0.006 °C class stability; NIST refractometer enclosure achieved <1 mK gradients over 100 h [^22^][^23^].
- Vibration isolation: patented STACIS-type piezo "quiet pier" systems cancel floor vibration starting <1 Hz with 40–70% isolation at 1 Hz and >90% above 2 Hz (60 dB at 2 Hz for STACIS 4) [^24^][^25^].

---

## Category A — Laser Doppler Vibrometry

### Claim A1: NIST patented a primary LDV calibration method traceable directly to a time/frequency reference (no moving target needed)
- **Source:** US Patent 11,906,350 B2, "Calibration Apparatus and Calibrating a Laser Doppler Vibrometer" (Gaitan, Reschovsky, Geist, Chijioke; assignee: US Government/Secretary of Commerce, NIST)
- **URL:** https://www.nist.gov/patents/calibration-apparatus-and-calibrating-laser-doppler-vibrometer ; full text PDF https://www.nist.gov/document/calibration-apparatus-and-calibrating-laser-doppler-vibrometer
- **Date:** Filed Jun. 2, 2021; granted Feb. 20, 2024 (term extended 244 days; provisional 63/035,127 filed Jun. 5, 2020)
- **Excerpt (verbatim, patent abstract from the Letters Patent PDF):** "A calibration apparatus for calibrating a laser Doppler vibrometer includes: a frequency shifter stage that: receives, from the laser Doppler vibrometer, primary laser light; produces frequency shifted light; communicates the frequency shifted light to a reflector; receives frequency shifted light reflected by the reflector; produces secondary light; and communicates the secondary light to the laser Doppler vibrometer, such that the laser Doppler vibrometer receives the secondary light from the frequency shifter stage and produces a synthetic velocity shift from the secondary light; and the reflector that receives and reflects the frequency shifted light back to the frequency shifter stage." [^1^]
- **Excerpt (verbatim, NIST patent page):** "The method uses two acousto-optic modulators to frequency shift the light from an LDV by a known quantity to create a synthetic velocity shift that is traceable to a frequency reference. … Primary calibration laboratories currently can only calibrate commercially manufactured LDVs by comparison to laser heterodyne interferometers following ISO 16063-41. Our method allows the primary calibration of an LDV traceable through a time / frequency reference." [^1^]
- **Context:** The systematic-error trick is to replace a mechanical vibration standard with an RF-frequency-controlled optical frequency shift (AOM pair, ±f, f+δ): the LDV's entire velocity chain becomes traceable to a frequency counter/atomic reference — exactly the type of reference (GPSDO/Rb 10 MHz) that LOC-1 already uses. This means the LOC-1 vibrometer readout can in principle be locked to the same reference as the VNA, eliminating the LDV scale factor as an independent systematic.
- **Confidence:** HIGH (NIST-hosted full patent document read directly).

### Claim A2: Commercial LDV measurement floor is sub-picometer class; heterodyne (Bragg-cell) architecture is the patented norm
- **Source:** Polytec product/patent disclosures + US Patent 9,212,896 B2 (Wörtge, Rembe, Dräbenstedt, Braun, "Optical interferometer and vibrometer comprising such an optical interferometer," 2015) and Polytec QTec multi-path heterodyne interferometer patents
- **URL:** https://opus.lib.uts.edu.au/rest/bitstreams/9ddaddc9-4823-430b-962d-b0435aa0065e/retrieve (thesis bibliography listing the patents); https://www.polytec.com/en/vibrometry/know-how/qtec ; https://www.instrumenthive.com/products/polytec-msa-100-3d-microsystem-analyzer-3d-scanning-laser-doppler-vibrometer/
- **Date:** US 9,212,896 listed as 2015 patent; Polytec MSA-100-3D page accessed 2026
- **Excerpt (verbatim, thesis bibliography):** "Wortge M, Rembe C, Drabenstedt A, Braun T. Optical interferometer and vibrometer comprising such an optical interferometer. US Patent US0000009212896B2. 2015." [^2^]
- **Excerpt (verbatim, QTec page):** "The QTec® heterodyne multi-path interferometer provides exactly the capability to avoid reduced signal at the photo detector by using multiple detectors." [^3^]
- **Excerpt (verbatim, MSA-100-3D spec page):** "Measurement Principle | Heterodyne Laser Doppler Interferometry … Out-of-plane & In-plane Resolution | Sub-picometer (≤ 0.5 pm/√Hz)" [^15^]
- **Context:** Heterodyne carrier (30–40 MHz Bragg shift) plus digital I/Q demodulation removes aging/environment sensitivity of analog decoders ("measurement accuracy is virtually independent of aging and environmental influences" — vendor claim for digital demodulation [^14^]). For LOC-1 at 230 kHz, LDV bandwidth is a non-issue; the limit is velocity/displacement noise floor and speckle dropout on the sphere surface.
- **Confidence:** MEDIUM-HIGH (patent number verified via scholarly bibliography; spec values from vendor pages, not the patent text).

### Claim A3: Multi-beam heterodyne LDV patent (MetroLaser) — simultaneous multi-point measurement, I/Q demodulation
- **Source:** US 6,972,846 B2 / application US 2007/0091316 A1 "Multi-beam heterodyne laser doppler vibrometer" (Lal, Hess, Hurtado, Markov, Aranchuk; MetroLaser; DoD-funded)
- **URL:** https://patexia.com/us/publication/20070091316
- **Date:** US 6,972,846 granted 2005; publication 2007-04-26
- **Excerpt (verbatim):** "There are two interferometric methods conventionally used for LDV applications: homodyne detection and heterodyne detection. An optical quadrature homodyne interferometer is a simple design utilizing low-frequency photodetectors and amplifiers. However, the non-linear behavior of these components causes harmonic distortions of the measured signal and an overall reduction in accuracy." [^4^]
- **Context:** Documents why heterodyne + digital arctangent demodulation became the precision standard. Relevant to LOC-1 if mode-shape mapping of the sphere (which flexural/spheroidal mode at 230 kHz) is needed.
- **Confidence:** HIGH (verbatim from full published application text).

### Claim A4: Demonstrated LDV displacement resolution: 2.468 pm; velocity resolution 62 nm/s at 4 kHz (all-fiber homodyne)
- **Source:** MDPI Sensors, "Development of a High-Resolution All-Fiber Homodyne Laser Doppler Vibrometer" (2020) — research instrument, cited as state of the art context (not a patent)
- **URL:** https://www.mdpi.com/1424-8220/20/20/5801
- **Date:** 2020-10-14
- **Excerpt (verbatim):** "In the calibration experiment, with the glass pasted on a piezoceramic transducer (PZT), the velocity resolution of 62 nm/s at 4 kHz and displacement resolution of 2.468 pm are achieved." [^5^]
- **Context:** Non-patent anchor for the actual achievable floor of the LDV class of instruments.
- **Confidence:** HIGH (peer-reviewed).

---

## Category B — Vector Network Analyzers and Calibration

### Claim B1: Electronic (solid-state) calibration of VNAs is patented technology — removes connector-repeatability error, the dominant VNA systematic at high precision
- **Source:** US Patent 5,434,511, "Electronic microwave calibration device" (Adamian, Falcinelli, Phillips; ATN Microwave, Inc. — later acquired by Agilent); companion US 5,537,046 "Electronic Calibration Method and Apparatus" (granted Jul. 16, 1996)
- **URL:** https://patents.justia.com/assignee/atn-microwave-inc
- **Date:** Filed May 24, 1993; granted Jul. 18, 1995
- **Excerpt (verbatim abstract):** "An electronic microwave calibration device provides an electronic load connected to each of two ports of a vector network analyzer. The load comprises a plurality of PIN diodes interconnected by transmission line. Each of the diodes are biased to generate different loads or conditions at each of the two ports. A control computer controls the biasing of diodes according to a predetermined procedure and compares impedance values measured at each of the two ports by the network analyzer to known values stored by the control computer. The control computer thereby derives calibration coefficients that are stored in the network analyzer and used by the network analyzer in performing further measurements." [^6^]
- **Context:** This is the root patent of Keysight "ECal." The systematic-error control trick: replace repeated mechanical connection of SOLT standards (torque, wear, repeatability) with switchable solid-state impedance states whose S-parameters are factory-characterized. Agilent's own training material states ECal "accuracy equivalent to a short-open-sliding-load calibration" with calibrations in 20–60 s [^7^]. For LOC-1, the practical limit after such calibration at ~230 kHz (low-frequency VNA range) is dominated by IF bandwidth, trace noise and cable stability, not connector repeatability.
- **Confidence:** HIGH (abstract verbatim from Justia patent listing; acquisition history corroborated by Microwaves101 [^7^]).

### Claim B2: VNA-based resonance-frequency extraction precision: ~1 part in 10^7 (repeatability) to 1 part in 10^8–10^10 (high-SNR phase-fit averaging) — the actual f₀ floor of VNA instruments
- **Source (i):** NPL Report MAT 58, "Q-factor Measurement by using a Vector Network Analyser" (UK National Physical Laboratory); Source (ii): Peterson & Anlage, J. Appl. Phys. 1998, "Measurement of resonant frequency and quality factor of microwave resonators"
- **URL:** https://eprintspublications.npl.co.uk/9304/3/MAT58.pdf ; https://anlage.umd.edu/AnlagePubs/PetersonJAP1998.pdf
- **Date:** NPL MAT58 (Gregory, ~2012 era); Peterson/Anlage 1998
- **Excerpt (verbatim, NPL):** "the histograms show that the repeatability of measurements of f is approximately one part in 107. The repeatability (1-sigma) of the Q-factor measurements is approximately ±0.05% at IFBW 100Hz" [^18^]
- **Excerpt (verbatim, Peterson & Anlage):** "the phase versus frequency fit has the highest precision and accuracy in the determination of fo and Q … precise to about one part in 105 when Q=102, and to about 1 part in 108 when Q=105, averaged over 100 traces with SNR≈65" and "At high power (SNR>350) the phase versus frequency fit is precise to about three parts in 1010 for the resonant frequency and to three parts in 1010 for the quality factor, when averaged over about 75 traces." [^17^]
- **Context:** These are not patents but are the canonical metrology-lab demonstrations of what VNA-based resonance metrology reaches. At 230 kHz, 1e-7 relative ≈ 23 mHz; even the heroic 3e-10 averaging case ≈ 69 µHz. **A micro-Hz Δf at 230 kHz (≈4e-12) is below the VNA measurement floor by 2–4 orders of magnitude.** NPL also documents the key systematic: "The resonant f, and Q… suffered from thermal drift, particularly at IFBW 10.00Hz as the time required for the set of measurement was comparatively long (20 minutes)" [^18^] — i.e., long narrow-band sweeps trade noise for drift.
- **Confidence:** HIGH (both are primary-source documents read verbatim).

### Claim B3: Classic 12-term SOLT/TRL error models define the VNA systematic-error budget
- **Source:** Keysight AN 1287-3 "Applying Error Correction to Vector Network Analyzer Measurements" (5965-7709E)
- **URL:** https://www.keysight.com/us/en/assets/7018-06761/application-notes/5965-7709.pdf
- **Date:** undated application note (current Keysight site)
- **Excerpt (verbatim):** "A one-port calibration can measure and remove three systematic error terms (directivity, source match, and reflection tracking) from reflection measurements." … "In an example that calculates the measurement error after a two-port calibration (Figure 14), the worst-case measurement errors for the filter have been reduced to about ±0.5 dB for reflection measurements and ±0.05 dB for transmission measurements. Phase errors are similarly small." [^16^]
- **Context:** VNA correction is a *systematic*-error (not drift) remover; it does not correct time-varying drift of cables/instrument between cal and measurement — the reason LOC-1-style experiments lock the whole chain to a common 10 MHz reference.
- **Confidence:** HIGH (vendor primary source).

---

## Category C — Frequency Reference, Comparison and Discipline

### Claim C1: NIST patented disciplined-clock architecture (MSCVDC) — common-view frequency locking to a remote reference, fail-safe redundancy
- **Source:** US Patent 10,466,363 B2, "Disciplined clock for providing a disciplined time and a disciplined frequency synchronous with a reference clock" (Michael A. Lombardi, NIST)
- **URL:** https://www.nist.gov/patents/disciplined-clock-providing-disciplined-time-and-disciplined-frequency-synchronous-reference ; full patent PDF https://www.nist.gov/system/files/documents/2021/01/30/15-015US1_Letters%20Patent_11-5-19.pdf
- **Date:** Granted Nov. 5, 2019 (provisional Jul. 5, 2016)
- **Excerpt (verbatim, Brief Description, Letters Patent):** "Disclosed is a disciplined clock to provide a disciplined time and a disciplined frequency synchronous with a reference clock, the disciplined clock comprising: a time receiver to: receive a common view signal from the common view clock; and produce a receiver timing signal; a local clock to: receive a frequency correction; and produce a local timing signal; a time interval counter to: receive the receiver timing signal from the time receiver; receive the local timing signal from the lock [sic] clock; and determine a time difference between the receiver timing signal and the local timing signal; and a controller: receive the time difference from the time interval counter; and communicate the frequency correction, based on the time difference, to the local clock." [^8^]
- **Excerpt (verbatim, patent PDF):** "It has been discovered that a disciplined clock herein is a multi-source common-view disciplined clock (MSCVDC) that is a time and frequency article that provides redundant sources of reference time at a very high accuracy (e.g., within 100 nanoseconds of Coordinated Universal Time (UTC))." [^8^]
- **Context:** The trick relevant to LOC-1: the reference's *own* error cancels in the difference (common-view): "The CVS is simply a vehicle used to transfer time from one site to another, and its own time accuracy is unimportant" (NIST patent page). For a two-position Δf experiment, an analogous cancellation applies — any common reference error drops out of the position-to-position difference.
- **Confidence:** HIGH (full patent document read from NIST site).

### Claim C2: GPSDO + Rb references reach 1e-12–1e-13 accuracy; tightly-steered GPSDO frequency accuracy ~1e-15 demonstrated; holdover behavior varies by >2 orders of magnitude between units
- **Source:** NIST technical paper TF2297, "The Use of GPS Disciplined Oscillators as Primary Frequency Standards" (M. Lombardi); Precision Test Systems GPS10R datasheet; Quartzlock/IEM Kvarz PTTI paper
- **URL:** https://tf.nist.gov/general/pdf/2297.pdf ; https://www.ptsyst.com/GPS10R-B.pdf ; https://www.ion.org/publications/abstract.cfm?articleID=14155
- **Date:** NIST TF2297 (2009); PTTI paper Dec. 1998
- **Excerpt (verbatim, NIST TF2297):** "The frequency accuracy, as estimated from the slope of the phase, was about 1 x 10-15. In sharp contrast, the frequency of Device B was very loosely controlled … The frequency accuracy during this segment was about 150 x 10-15." [^9^]
- **Excerpt (verbatim, GPS10R datasheet):** "The GPS10R achieves short and long-term frequency accuracy of parts in 10-13. Thus the GPS10R exceeds the requirements of a Stratum 1 level frequency standard. … This enables the GPS10R to be used as a frequency reference for frequency counters etc and measurements can be made in seconds, not days or weeks" [^10^]
- **Excerpt (verbatim, PTTI abstract):** "both short-term stability (STS) at 10^-13 level and long-term stability (LTS) to 10^-14 is realized … Time output accuracy meets GPS time transfer atomic clock comparisons at < 5 ns" [^11^]
- **Context:** NIST's measured spread across four commercial GPSDOs is a warning for LOC-1: holdover frequency accuracy ranged from 3e-12 to 1000e-12 across nominally similar Rb GPSDOs. Systematic control = continuous comparison logging (cf. Pendulum FTR-210R's built-in gap-free comparator: "The received GNSS signal is gap-free and continuously measured against the local oscillator. Phase and frequency deviations are stored internally" [^12^]).
- **Confidence:** HIGH for NIST/PTTI (primary); MEDIUM-HIGH for datasheets (vendor claims).

### Claim C3: Dual-Mixer Time Difference (DMTD) is the precision frequency-comparison technique behind micro-Hz-capable instrumentation: 20 fs resolution, ADEV <1e-13 at 1 s, cross-correlation floor ~6e-15
- **Source:** W. Riley (Hamilton Technical Services), "A Small Dual Mixer Time Difference (DMTD) Clock Measuring System" (stable32.com); Moreira et al., FCS 2010 digital DMTD (CERN/White Rabbit)
- **URL:** http://www.stable32.com/A%20Small%20DMTD%20System.pdf ; https://engineering.purdue.edu/oxidemems/conferences/fcs2010/PDFs/Papers/096_6197.pdf
- **Date:** Riley undated (post-2000); Moreira et al. 2010
- **Excerpt (verbatim, Riley):** "The offset reference need not be coherent, nor must it have particularly low noise or high accuracy, because it's effect cancels out in the overall measurement process. … if two 5 MHz sources are mixed against a common 5 MHz - 10 Hz offset oscillator (providing a 5x10^6/10 = 5x10^5 heterodyne factor), and the beatnote is timetagged with a resolution of 100 nsec (10 MHz clock), the measuring overall system resolution is 10-7/5x10^5 = 0.2 psec." [^20^]
- **Excerpt (verbatim, Riley, specs table):** "Resolution | 20 femtoseconds | At 10 MHz with 10 Hz offset; Noise Floor | ADEV < 1 x 10^-13 at 1-second" and "These data produced a 1-second cross-correlation ADEV of about 6.0x10-15 … the cross-correlation technique improved the noise floor by a factor of about x10." [^20^]
- **Excerpt (verbatim, Moreira):** "the DMTD system is appropriate for short-term measurements but not for long-term measurements if clk2 and clk1 do not remain quasi synchronous." [^21^]
- **Context:** DMTD is the practical "trick" that reaches the LOC-1-relevant regime: converting a tiny Δf between two same-nominal-frequency signals into an amplified low-frequency beat, with common-reference noise cancellation. A heterodyne/PLL lock of the 230 kHz sphere mode against a GPSDO-referenced synthesizer is the natural analog. Not itself patented (metrology public domain), but embodied in patented commercial comparators (e.g., Quartzlock A7, Timing Solutions 5110A mentioned in Riley's comparison table).
- **Confidence:** HIGH (primary technical documents; note: not patents).

### Claim C4: Patented high-resolution time-interval counting (interpolation) underlies frequency comparison instruments
- **Source:** US Patent 5,333,162, "High resolution time interval counter" (K.J. Condreva; Sandia/US DOE)
- **URL:** https://www.osti.gov/biblio/869415
- **Date:** Granted 1994 (listed 1994; filed 1993)
- **Excerpt (verbatim, OSTI patent record):** "A high resolution counter circuit measures the time interval between the occurrence of an initial and a subsequent electrical pulse to two nanoseconds resolution using an eight megahertz clock. … Errors associated with the pulse stretchers are corrected by providing calibration data to both stretcher circuits, and recording start and stop counter values." [^13^]
- **Context:** Analog "pulse stretcher" interpolation + autocalibration is the patented route to sub-clock-period resolution; modern time-stamping counters (Pendulum CNT-90 class, 12 digits/s via regression on continuous timestamps [^19^]) are its descendants. HP 5370A vernier interpolation reached ±20 ps single-shot [^19^].
- **Confidence:** HIGH (OSTI is an official US government patent record; abstract verbatim).

### Claim C5: Rubidium frequency standard patent lineage — the physics-package tricks (buffer gas, isotopic filter, ovenized lamp, synthesizer lock) that set Rb stability
- **Source:** IEEE UFFC history, "A History of the Rubidium Frequency Standard" (J. Vanier / C. Mandache lineage document hosted by IEEE UFFC), citing Varian patent US 3,363,159 (filed 1966) and ITT patent US 3,174,114 (filed 1959), plus early patents US 2,850,222 / 2,852,493 / 2,884,254 / 2,927,278; modern optical Rb standard US 10,684,591 B1 (Utah State University SDL, granted Jun. 16, 2020)
- **URL:** https://ieee-uffc.org/files/ieeeuffcorg/2021-09/A%20History%20of%20the%20Rubidium%20Frequency%20Standard.pdf ; https://eureka.patsnap.com/patent-US10684591B1
- **Date:** IEEE history undated (2021 archive); US 10,684,591 granted Jun. 16, 2020
- **Excerpt (verbatim, IEEE history, OCR-imperfect):** "This figure from a circa 1960 Varian pa­tent shows all the ingredients of a modern RFS block diagram: Rb lamp … and oven assembly with iso­to­pic fil­ter … absorption cell/microwave cavity assembly, … magnetic shield … photode­tector … synchron­ous detector … VCXO … phase modulat­or and RF amplifier chains … Varian patent 3,363,159 filed in 1966 shows a completely modern RFS block diagram that includes a synthesizer scheme." [^26^]
- **Excerpt (verbatim, US 10,684,591 via SDL brochure PDF header):** "OPTICAL RUBIDIUM ATOMIC FREQUENCY STANDARD … The embodiments herein generally relate to atomic clocks, and more particularly to the optical rubidium atomic frequency standard for atomic clocks." [^27^]
- **Context:** Rb standards carry known systematics (buffer-gas pressure shift, light shift, temperature) — the reason they are secondary standards and why LOC-1 should treat the 10 MHz reference as transfer standard disciplined to GPS rather than absolute truth. The 2020 optical Rb patent shows the frontier (two-photon transition, frequency-comb referenced).
- **Confidence:** MEDIUM (verbatim quotes are from an OCR-degraded history PDF and a patent aggregator; patent numbers cross-checked across two sources).

---

## Category D — Thermal-Stabilized Chambers / Thermal Systematics

### Claim D1: Metrology-grade chambers achieve ±0.006 °C (NIST resistance chamber) to <1 mK gradients (NIST refractometer enclosure) — passive multi-shell + active PID at the outer shell is the standard patented architecture
- **Source (i):** NIST J. Res. 125.012, "Advanced Temperature-Control Chamber for Resistance Metrology"; Source (ii): NIST/NCSLI 2010, "Temperature stabilization system with millikelvin gradients for refractometry"
- **URL:** https://nvlpubs.nist.gov/nistpubs/jres/125/jres.125.012.pdf ; https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=906095
- **Date:** JRES 2020; NCSLI 2010
- **Excerpt (verbatim, JRES):** "a precise temperature-control chamber that can provide a constant-temperature environment with a stability of ±0.006°C for standard resistors … Aluminum double-wall construction with 5 cm thick polyisocyanurate rigid foam insulation effectively provides thermal isolation from the laboratory environment." [^22^]
- **Excerpt (verbatim, NCSLI):** "The PID controllers were capable of stabilizing temperature at the outer aluminum enclosure thermistors to within 1mK over 100h (max: 1.43mK, min: −1.66mK, std: 0.81mK)." and "With passive stabilization only … absolute temperature fluctuations were less than 20mK over 100h … and the gradients between thermocouples were less than 2mK." [^23^]
- **Context:** The disclosed tricks: multiple nested high-conductivity (Al) shells inside foam; active PID only on the outer shell (inner layers passive low-pass filters); thermocouples referenced to a single thermistor standard in a copper block to kill thermal-EMF offsets; Airy-point suspension of the resonator cavities inside. Thermal time constant ~92 h is deliberately exploited as a low-pass filter. For LOC-1: copper sphere Young's-modulus temperature coefficient (~3–4e-4/°C for Cu) means 1 mK stability maps to ~3e-7 relative f₀ stability (~70 mHz at 230 kHz) — thermal control alone cannot support µHz Δf; differential/common-mode strategies are essential.
- **Confidence:** HIGH (NIST primary documents; note these are published instrument designs, not patents — patent claims on generic temperature chambers exist but are commodity-level).

### Claim D2: Ovenized oscillator patents: double-oven and resonator-as-sensor (dual-mode) temperature control
- **Source:** US 2015/0054590 A1, "Oven controlled crystal oscillator" (two ovens + frequency-difference temperature sensing); US 2017/0019109 A1 "Oven controlled crystal oscillator" (heat-influence reduction)
- **URL:** https://eureka.patsnap.com/patent-US20150054590A1 ; https://www.patentsencyclopedia.com/app/20170019109
- **Date:** published 2015-02-26; published 2017-01-19
- **Excerpt (verbatim, US20150054590A1 via aggregator):** "This patent is about an oven controlled crystal oscillator that has two thermostatic ovens, a temperature sensing element, and two resonators. The temperature sensing element detects the temperature in the first oven and a control circuit adjusts the temperature to keep it within a certain range. The frequency difference detecting unit also monitors the oscillation frequency and a control circuit adjusts the temperature in the second oven to match the frequency difference." (AI technical summary of the patent — flagged) [^28^]
- **Excerpt (verbatim, US20170019109 full text):** "Oven controlled crystal oscillator (OCXO; Oven Controlled Crystal Oscillator) includes an oven that keeps a crystal resonator at a constant temperature, and ensures high frequency stability. … The OCXO, which is required to be highly stable, may not be allowed to neglect a small frequency variation caused by this slight variation of the current." [^29^]
- **Context:** The dual-mode trick (use the resonator's own B-mode/C-mode beat as its thermometer — "Since the temperature sensor is the resonator itself, there is no static error in the oven set temperature" [^30^]) is directly analogous to using the sphere's own modes as thermometers in LOC-1. Commercial DOCXOs reach ±0.01–0.1 ppb over temperature [^31^].
- **Confidence:** MEDIUM (excerpt for the 2015 application is an aggregator AI summary; the 2017 application full text was read verbatim; patent numbers/dates verified).

---

## Category E — Vibration Isolation Patents

### Claim E1: STACIS piezo "quiet pier" active cancellation — US 5,660,255 (and US 5,823,307) — the workhorse patents of sub-Hz active isolation for metrology
- **Source:** US Patent 5,660,255, "Stiff actuator active vibration isolation system" (D.W. Schubert et al., Applied Power/TMC), filed Apr. 4, 1994, granted Aug. 26, 1997; companion US 5,823,307; TMC technical documentation
- **URL:** https://www.guicking.de/dieter/Ov-oK16.pdf (patent index, entry 1525); https://www.gmp.ch/pdf/vibration_isolation_technical_information.pdf
- **Date:** granted 1997-08-26
- **Excerpt (verbatim, patent index):** "D.W.Schubert et al.(Applied Power,US). Stiff actuator active vibration isolation system. US 5,660,255. Filed: April 4, 1994. Patented: Aug. 26, 1997. Relat[ed]: BR,CA,DE,EP,IL,JP,KR." [^24^]
- **Excerpt (verbatim, TMC technical information):** "Figure 18 shows the concept of a 'quiet pier' isolator such as TMC's STACIS line of active isolators (patent #5,660,255). It consists of an intermediate mass which is hard mounted to the floor through a piezoelectric transducer (PZT). A geophone is mounted to it, and its signal fed back to the PZT in a wide-bandwidth servo loop. This makes a 'quiet pier' for supporting the payload to be isolated. Isolation at frequencies above the servo's active bandwidth is provided by a ~20Hz elastomer mount." [^25^]
- **Context:** Tricks disclosed/implemented: inertial geophone feedback against floor-referenced PZT stack ("hard mount," no soft air spring), elastomer series stage for >20 Hz, multiple independent quiet piers decoupled by the elastomer to prevent cross-talk. Performance (STACIS iX/4): "Vibration isolation starts at 0.6 Hz, with 40% to 70% isolation at 1 Hz; Provides greater than 90% isolation at frequencies 2 Hz and higher" [^24b]; STACIS 4 "reduces building floor vibration by 60 dB at 2 Hz and 27dB at 1Hz" (vendor, FloorSense) [^32^]. Limitation disclosed: "the PZT has a range of motion which is limited (around 20-25 µm). Thus the servo saturates and 'unlocks' if the floor motion exceeds this peak-to-peak" [^25^].
- **Confidence:** HIGH for the patent existence/number/date (two independent sources); verbatim concept description is TMC's own documentation of the patented system.

### Claim E2: Related TMC patents: MaxDamp multi-axis viscous damping US 5,918,862; Compact Sub-Hertz Pendulum US 5,779,010; PEPS II US 5,882,806
- **Source:** TMC Resource Guide 15 (manufacturer document quoting its own patents)
- **URL:** https://www.gmp.ch/pdf/catalogues/TMC_Resource_Guide_15.pdf
- **Date:** document current; patents late-1990s
- **Excerpt (verbatim):** "TMC's MaxDamp® isolators use a different method: Multi-axis viscous fluid damping (Patent No. 5,918,862)." and "TMC's CSP® (Compact Sub-Hertz Pendulum System) (Patent No. 5,779,010) uses a different type of pendulum concept to extend horizontal resonant frequencies as low as 0.3 Hz. This isolator uses a geometrical lever effect to 'fold' a 0.3 Hz pendulum into a package less than 16 in. (400 mm) high. An equivalent simple pendulum would have to be 110 in. (almost 3m) tall." and "PEPS® II (Precision Electronic Positioning System, U.S. Patent No. 5,882,806), which has a ~0.0001 in. (~2 µm) position stability." [^33^]
- **Context:** Horizontal isolation down to 0.3–0.5 Hz is what matters for suppressing tilt coupling into a sphere resonance measurement; pendulum folding is the space-saving trick.
- **Confidence:** HIGH (manufacturer's own catalog text verbatim; patent numbers plausible for era, not independently re-verified on USPTO due to access limits).

### Claim E3: Modern active-isolation servo patent: EP 4667773 A1 (Tokkyokiki Corp.) — separating vibration-isolation and vibration-damping actuators to break the performance trade-off
- **Source:** EP 4667773 A1, "Fluid control system, and control method" (Tokkyokiki Corporation; priority JP 2023-021471)
- **URL:** https://data.epo.org/publication-server/rest/v1.2/publication-dates/2025-12-24/patents/EP4667773NWA1/document.pdf
- **Date:** Published 24.12.2025 (EPO Bulletin 2025/52); filed 13.02.2024; priority 15.02.2023
- **Excerpt (verbatim, full text read from EPO server):** "[0001] The present invention is intended for a vibration isolation device that supports a precision instrument susceptible to vibration, such as a semiconductor-related device or a precision measurement device" and "[0026] … as the flow rate increases, a gradient of a control flow rate with respect to a valve input current increases, and a resolution of the servo valve decreases. That is, the vibration damping performance and the vibration isolation performance have been originally in a trade-off relationship." and "[0034] … In the present invention in which the pneumatic actuators for vibration isolation and vibration damping are independently arranged, the fluid control system can simultaneously obtain the best vibration damping performance and vibration isolation performance." [^34^]
- **Context:** State-of-the-art thinking on active isolation systematics: separate soft (isolation) and stiff (damping) actuators, release damping air spring to atmosphere during isolation so its stiffness ≈ 0 (doesn't raise the isolation resonance).
- **Confidence:** HIGH (full EP document read from EPO publication server).

### Claim E4: Precision-instrument vibration isolation platform with equal-stiffness 3-axis spring layout (CN112013078B)
- **Source:** CN 112013078 B, "A precision instrument vibration isolation platform"
- **URL:** https://eureka.patsnap.com/patent-CN112013078B
- **Date:** granted/published 2022-03-04 (aggregator listing)
- **Excerpt (verbatim, machine-translated description):** "Precision measuring instrument is a high-precision and large-scale measuring instrument commonly used in industrial measuring systems (including laser tracker, latitude and longitude measuring instrument, laser interferometer and micro-deformation optical measuring system, etc.)." [^35^]
- **Context:** Represents the passive-platform patent family (equal-stiffness/isotropic support). Lower precision relevance than STACIS-class active systems for µHz metrology; included for landscape completeness.
- **Confidence:** MEDIUM (aggregator machine translation; patent number/date as listed).

---

## Category F — Cable / Interconnect Systematics

### Claim F1: Coaxial cable phase drift (Teflon knee, hysteresis) is a documented dominant systematic; mitigation = temperature-stabilized cable or active phase compensation
- **Source:** EuCARD-PUB-2011-001, "Temperature Stability of Coaxial Cables" (CERN); ResearchGate, "Ultra-Stable RF Transmission Over Coaxial Cables via Phase Fluctuation Compensation" (2023, active PI-servo phase compensation over 100 m coax)
- **URL:** https://cds.cern.ch/record/1349292/files/EuCARD-PUB-2011-001.pdf ; https://www.scilit.com/publications/c4bb2bc9de702e0f9a50f9c7a07b101c
- **Date:** CERN 2011; active-compensation letter 2023
- **Excerpt (verbatim, CERN):** "Another very important observation is the hysteresis in the measurement plots. Due to different behavior of the molecular transition when increasing and when decreasing temperature various signal phase transitions are measured. This effect causes difficulties in numerical compensation of phase drifts as one would need to record the direction of temperature changes." and "Significant improvement of phase stability can be achieved by applying temperature stabilization on the cables." [^36^]
- **Excerpt (verbatim, 2023 letter abstract):** "The phase fluctuations caused by the coaxial cable are detected and compensated in real-time by a proportional–integral (PI) servo controller." [^37^]
- **Context:** For VNA-in-the-loop resonance measurements, cable phase drift sits directly on the f₀ extraction path; the patented/product answer is phase-stable cables (e.g., "±3° up to 18 GHz under flexure" class) plus thermal anchoring [^38^]. In a 230 kHz audio-range setup cable effects are small in absolute phase but matter at µHz Δf if the phase-fit method is used.
- **Confidence:** HIGH (CERN primary document verbatim).

---

## What the patented instruments actually reach (floor summary)

| Instrument class | Patented/demonstrated floor | Key tricks disclosed |
|---|---|---|
| VNA f₀ extraction | ~1e-7 relative repeatability; 1e-8–3e-10 with high-SNR phase-fit averaging [^17^][^18^] | 12-term/TRL error models; ECal solid-state standards (US 5,434,511) [^6^]; weak coupling; fitted line lengths; drift-corrected interleaving |
| LDV | ≤0.5 pm/√Hz displacement class; calibration traceable to frequency reference (US 11,906,350) [^1^][^15^] | Heterodyne Bragg carrier; digital I/Q arctangent demodulation; AOM synthetic-velocity calibration; multi-path diversity (QTec) |
| Rb/GPSDO reference | 1e-12–1e-13 accuracy; 1e-15 achievable tightly-steered; ADEV 4e-13 floor [^9^][^10^][^11^] | GPS disciplining loop; holdover algorithms; continuous gap-free comparator logging (FTR-210R); common-view cancellation (US 10,466,363) [^8^] |
| Frequency comparison | 20 fs resolution; ADEV <1e-13 @1 s; 6e-15 cross-correlated [^20^] | DMTD heterodyne factor; offset-reference noise cancellation; interpolating counters (US 5,333,162) [^13^] |
| Thermal chamber | ±0.006 °C (NIST resistance chamber); <1 mK gradients/100 h (NIST refractometer) [^22^][^23^] | Nested Al shells; active PID on outer shell only; thermocouples referenced to single standard; 92-h time constant as filter; dual-mode resonator-as-thermometer (US 2015/0054590) |
| Vibration isolation | Active cancellation from <1 Hz; >90% above 2 Hz; 60 dB @2 Hz (STACIS 4) [^24^][^25^][^32^] | Quiet-pier geophone→PZT feedback (US 5,660,255); folded 0.3 Hz pendulum (US 5,779,010); separate isolation/damping actuators (EP 4667773) |

**Implication for LOC-1:** At f₀≈230 kHz, a µHz Δf is Δf/f≈4e-12. No patented VNA or LDV instrument reaches this directly; the VNA f₀ floor is ~1e-7 relative. The patent landscape instead points to the standard metrology stack: (1) GPSDO/Rb reference (1e-12–1e-13) as common clock for VNA and LDV digitizer; (2) PLL/ring-down or DMTD-style heterodyne comparison of the sphere mode against that reference (the only demonstrated µHz-class route); (3) differential two-position protocols where reference and cable errors cancel in common mode (the same cancellation principle disclosed in the MSCVDC and DMTD literature); (4) mK-class nested thermal enclosure + sub-Hz active isolation to control the two dominant environmental systematics, with the caveat that thermal expansion of copper sets a ~70 mHz/mK f₀ floor — differential mode/position referencing is mandatory.

---

## References

[^1^]: NIST, "Calibration Apparatus And Calibrating A Laser Doppler Vibrometer," US 11,906,350 B2. https://www.nist.gov/patents/calibration-apparatus-and-calibrating-laser-doppler-vibrometer and https://www.nist.gov/document/calibration-apparatus-and-calibrating-laser-doppler-vibrometer
[^2^]: UTS thesis bibliography listing US 9,212,896 B2 (Wörtge/Rembe/Dräbenstedt/Braun). https://opus.lib.uts.edu.au/rest/bitstreams/9ddaddc9-4823-430b-962d-b0435aa0065e/retrieve
[^3^]: Polytec, "QTec® reinventing vibrometry." https://www.polytec.com/en/vibrometry/know-how/qtec
[^4^]: US 2007/0091316 A1 / US 6,972,846 B2, "Multi-beam heterodyne laser doppler vibrometer," via Patexia. https://patexia.com/us/publication/20070091316
[^5^]: Zhang et al., "Development of a High-Resolution All-Fiber Homodyne Laser Doppler Vibrometer," Sensors 20(20):5801 (2020). https://www.mdpi.com/1424-8220/20/20/5801
[^6^]: US 5,434,511, "Electronic microwave calibration device" (ATN Microwave; Adamian, Falcinelli, Phillips), granted 1995-07-18. https://patents.justia.com/assignee/atn-microwave-inc
[^7^]: Microwaves101, "eCalibration" (Adamian/ATN 1993 patent attribution); Agilent, "Advanced Calibration Techniques for Vector Network Analyzers." https://www.microwaves101.com/encyclopedias/ecalibration ; https://anlage.umd.edu/Agilent_Advanced_VNA_calibration.pdf
[^8^]: NIST, US 10,466,363 B2, "Disciplined clock for providing a disciplined time and a disciplined frequency synchronous with a reference clock" (Lombardi), granted 2019-11-05. https://www.nist.gov/patents/disciplined-clock-providing-disciplined-time-and-disciplined-frequency-synchronous-reference ; PDF https://www.nist.gov/system/files/documents/2021/01/30/15-015US1_Letters%20Patent_11-5-19.pdf
[^9^]: Lombardi, "The Use of GPS Disciplined Oscillators as Primary Frequency Standards," NIST. https://tf.nist.gov/general/pdf/2297.pdf
[^10^]: Precision Test Systems, "GPS10R 10 MHz GPS Disciplined Rubidium Frequency Standards." https://www.ptsyst.com/GPS10R-B.pdf
[^11^]: Green, "IEM Kvarz and Quartzlock GPS Disciplined Rubidium Frequency and Time Standard," Proc. 30th PTTI (1998). https://www.ion.org/publications/abstract.cfm?articleID=14155
[^12^]: Pendulum Instruments, FTR-210R GNSS-disciplined Rubidium Frequency & Time Reference datasheet/manual. https://newtek.bg/shop/izmervatelna-tehnika/chestometri/pendulum-ftr-210r-gnss-disciplined-rubidium-frequency-time-reference/
[^13^]: US 5,333,162, "High resolution time interval counter" (Condreva), OSTI record. https://www.osti.gov/biblio/869415
[^14^]: Simtrum, "Laser Doppler Vibrometer 0.1 Hz to 5 MHz" (digital demodulation description). https://www.simtrum.com/WebShop/ProductList5.aspx?pid=1857
[^15^]: InstrumentHive, Polytec MSA-100-3D specifications. https://www.instrumenthive.com/products/polytec-msa-100-3d-microsystem-analyzer-3d-scanning-laser-doppler-vibrometer/
[^16^]: Keysight AN 1287-3, "Applying Error Correction to Vector Network Analyzer Measurements" (5965-7709E). https://www.keysight.com/us/en/assets/7018-06761/application-notes/5965-7709.pdf
[^17^]: Petersan & Anlage, "Measurement of resonant frequency and quality factor of microwave resonators," J. Appl. Phys. 84, 3392 (1998). https://anlage.umd.edu/AnlagePubs/PetersonJAP1998.pdf
[^18^]: NPL Report MAT 58, "Q-factor Measurement by using a Vector Network Analyser." https://eprintspublications.npl.co.uk/9304/3/MAT58.pdf
[^19^]: Johansson (Pendulum), "New frequency counting principle improves resolution"; HP, "Fundamentals of Time Interval Measurements." https://pendulum-instruments.com/wp-content/uploads/2022/05/Continuous-timestamping-article.pdf ; https://ilrs.gsfc.nasa.gov/docs/time_interval_measurements.pdf
[^20^]: Riley, "A Small Dual Mixer Time Difference (DMTD) Clock Measuring System." http://www.stable32.com/A%20Small%20DMTD%20System.pdf
[^21^]: Moreira et al., "Digital Dual Mixer Time Difference for Sub-Nanosecond Time Synchronization," FCS 2010. https://engineering.purdue.edu/oxidemems/conferences/fcs2010/PDFs/Papers/096_6197.pdf
[^22^]: NIST J. Res. 125.012, "Advanced Temperature-Control Chamber for Resistance Metrology." https://nvlpubs.nist.gov/nistpubs/jres/125/jres.125.012.pdf
[^23^]: NIST/NCSLI 2010, "Temperature stabilization system with millikelvin gradients for refractometry." https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=906095
[^24^]: Guicking, "Patents on Active Control of Sound and Vibration — an Overview" (entry 1525: US 5,660,255). https://www.guicking.de/dieter/Ov-oK16.pdf ; [^24b] TMC Resource Guide 15 (STACIS iX specs). https://www.gmp.ch/pdf/catalogues/TMC_Resource_Guide_15.pdf
[^25^]: TMC, "Vibration isolation technical information" (quiet-pier concept, patent #5,660,255). https://www.gmp.ch/pdf/vibration_isolation_technical_information.pdf
[^26^]: "A History of the Rubidium Frequency Standard," IEEE UFFC archive (Varian US 3,363,159; early RFS patents). https://ieee-uffc.org/files/ieeeuffcorg/2021-09/A%20History%20of%20the%20Rubidium%20Frequency%20Standard.pdf
[^27^]: US 10,684,591 B1, "Optical rubidium atomic frequency standard" (Burke, Lemke, Phelps, Martin, Stuhl; USU SDL), granted 2020-06-16. https://eureka.patsnap.com/patent-US10684591B1
[^28^]: US 2015/0054590 A1, "Oven controlled crystal oscillator" (dual-oven, frequency-difference control). https://eureka.patsnap.com/patent-US20150054590A1
[^29^]: US 2017/0019109 A1, "Oven controlled crystal oscillator." https://www.patentsencyclopedia.com/app/20170019109
[^30^]: Penn State ETDA, "An Ultra-Compact and Low-Power Oven Controlled Crystal Oscillator" (dual-mode resonator-as-thermometer; DOCXO <0.1 ppb). https://etda.libraries.psu.edu/files/final_submissions/3071
[^31^]: Dynamic Engineers, DOCXO5050AN-10MHz announcement (±0.01 ppb vs temperature). https://www.dynamicengineers.com/news/double-oven-ultra-precision-oven-controlled-crystal-oscillator
[^32^]: TMC/AZoM, "Elevating Industry Standards in Precision Vibration Isolation" (STACIS 4: 60 dB @ 2 Hz). https://www.azom.com/article.aspx?ArticleID=22951
[^33^]: TMC Resource Guide 15 (US 5,918,862; US 5,779,010; US 5,882,806). https://www.gmp.ch/pdf/catalogues/TMC_Resource_Guide_15.pdf
[^34^]: EP 4667773 A1, "Fluid control system, and control method" (Tokkyokiki), EPO publication server. https://data.epo.org/publication-server/rest/v1.2/publication-dates/2025-12-24/patents/EP4667773NWA1/document.pdf
[^35^]: CN 112013078 B, "A precision instrument vibration isolation platform." https://eureka.patsnap.com/patent-CN112013078B
[^36^]: EuCARD-PUB-2011-001 (CERN), "Temperature Stability of Coaxial Cables." https://cds.cern.ch/record/1349292/files/EuCARD-PUB-2011-001.pdf
[^37^]: Hamza et al., "Ultra-Stable RF Transmission Over Coaxial Cables via Phase Fluctuation Compensation" (2023). https://www.scilit.com/publications/c4bb2bc9de702e0f9a50f9c7a07b101c
[^38^]: TPS-Elektronik, "Phase stable coaxial test cables" FAQ. https://tps-elektronik.com/en/how-to-equip-general-purpose-rf-test-benches-with-high-quality-phase-stable-coaxial-test-cables-and-adapters-from-tps/
