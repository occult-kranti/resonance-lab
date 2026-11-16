# Dimension 06 — How Physics Tests Extraordinary Claims Well
## Protocol lessons for LOC-1 (position-dependent intrinsic resonance) from Eöt-Wash, fifth-force searches, gravitational-wave blind injections, particle-physics blind analysis, and famous debunkings

**Prepared by:** research sub-agent (dimension 06)
**Date of research:** 2026 (search session); source dates given per item
**Scope note:** LOC-1 tests an extraordinary claim — position-dependent intrinsic resonance (inspired by channeled material). This file extracts concrete, transferable protocol lessons: blinding, modulation/rotation to cancel systematics, dummy/sham runs, preregistration, error budgets, publication of nulls — and asks specifically whether a "rotate or modulate rather than translate once" trick (the Eöt-Wash signature move) can strengthen LOC-1.

---

## 1. Executive synthesis

Physics' most credible extraordinary-claim tests share a single architecture: **convert the hypothetical signal into a periodic modulation at a known frequency and phase, verify that lab-fixed systematics live at different frequencies/phases, hide the answer from the analysts until the pipeline is frozen, validate the pipeline with secretly injected fake signals and dummy runs, publish explicit error budgets, and publish null results.** Every famous debunking (N-rays, polywater, cold fusion, OPERA) is a failure of one or more of these elements; every success story (Eöt-Wash, LIGO, Fermilab g-2, PSI nEDM) is their systematic application.

For LOC-1 the single most important lesson is the Eöt-Wash one: **never take a one-shot static measurement at position A and compare it to position B ("translate"). Instead, modulate the position periodically — oscillate/rotate the sample between (or through) the claimed special locations at a fixed frequency — so the claimed resonance effect becomes an AC signal at a known frequency, cleanly separable from DC and slowly drifting systematics, and detectable with lock-in techniques at SNR far below the noise floor.** Details in §8.

---

## 2. Rotation/modulation as the core anti-systematic weapon (Eöt-Wash)

### 2.1 Up-converting a DC signal to a known frequency

The Eöt-Wash group's decisive innovation was to put the torsion balance on a continuously rotating turntable, moving the signal of interest away from DC where 1/f noise, thermal drifts, and lab-fixed systematics dominate.

> "Frequency modulation is crucial in order to check for violation in the field of the Earth (or of a local mass nearby), otherwise the signal would be DC and therefore very hard to detect, like in the Eötvös experiments. Moreover, the turntable can rotate quite fast, thus increasing the modulation frequency of the signal by about 24 times with respect to [12, 13]." [^1^]

> "Rotation of the torsion balance around the suspension fiber up-converts a violation signal in the field of Earth from zero (DC) to the rotation frequency, making it possible to detect a deflection angle at a known frequency and to distinguish it from systematics. Moreover, it has long been known that in mechanical experiments losses due to internal damping are lower at higher frequencies. Therefore, by up-convertion the signal finds itself in a region of reduced thermal noise." [^2^]

> "Spinning a torsion balance by means of a uniformly rotating turntable allows the Earth to be used as the attractor. Moreover, driving force modulation can be kept at higher frequencies, reducing the thermal noise and disentangling the WEP violating signal from other effects, e.g. temperature variations, that naturally occur at the diurnal frequency, including thermal effects, microseismicity, local mass motions." [^3^]

**Claim:** Rotation/modulation of the *instrument* converts a hard-to-measure DC anomaly into a signal at a known frequency, separated from systematics that live at other frequencies (diurnal, thermal, seismic). **Context:** This is *the* transferable trick for LOC-1's position-dependent claim. **Confidence: High** (multiple independent reviews, primary papers).

### 2.2 Harmonic separation: signal at 1ω, gradients at 2ω

Rotational symmetry gives extra discriminants — the physical signal and its dominant mimics land on *different harmonics* of the rotation:

> "By rotating the balance around an axis directed along ŵ with frequency ν_spin … the violation signal from Earth appears at ν_spin while the tidal effect is at 2ν_spin, and they can be separated." [^2^]

> "However, if the balance arm is flipped, rotating it by 180° around ŵ (or else, the balance is kept fixed and the test masses are exchanged), the torque due to gravity gradient does not change sign. Instead, in case of violation, the torque T_w caused by the forces … would change sign… Thus, by inverting the masses (or by flipping the balance) the deflection angle caused by a violation of equivalence changes sign while the one due to gravity gradient does not." [^2^]

**Claim:** A genuine position/orientation-dependent physical signal has a *sign-flip and harmonic signature* under reversal that the dominant lab systematics lack. Design the modulation so the hypothesized effect and each known systematic occupy distinct Fourier components. **Confidence: High.**

### 2.3 Configuration reversal as a cancellation filter (Eöt-Wash "A/B" protocol)

> "We discriminate against spurious effects by periodically rearranging the test bodies on the pendulum tray, switching between the two mirror image configurations, A and B… Our signal is S := [a_A(1ω) − a_B(1ω)]/2… This procedure is clearly effective in eliminating spurious effects due to coherent irregularities in the turntable since these are unaffected by reconfiguring the pendulum." [^4^]

> "daily reversal of pendulum orientation with respect to turntable rotor canceled turntable imperfections. Test bodies were interchanged after data set 4 to cancel asymmetries in pend body and suspension fiber. Each data point represents about 2 weeks of data" [^5^]

> "To discriminate against stable turntable imperfections, the torsion pendulum orientation can be reversed relative to the turntable by rotating the top attachment of the torsion fiber. The stability of turntable imperfections can be determined by monitoring the pendulum deflection at higher harmonics of the turntable frequency." [^6^]

**Claim:** *Difference signals between deliberately reversed configurations* cancel everything that doesn't track the physical variable of interest. LOC-1 analog: interchange test objects/materials between positions; reverse the direction of position sweep; difference the two. **Confidence: High.**

### 2.4 Exaggerate-the-suspect calibration (error-budget discipline)

Eöt-Wash measured systematic couplings by deliberately *amplifying* each suspected systematic:

> "We attempted to both reduce the impact of systematic effects through passive shielding or active environmental control and to characterize each effect by exaggerating its source. For gravity gradients and tilts the systematic measurements matched our models, so we applied a correction to the equivalence principle measurements." [^7^]

> "The effect of temperature gradients was measured by placing large temperature-controlled copper plates next to the apparatus and measuring the pendulum signal as a function of the applied temperature gradient. Temperature gradients of up to 15 K/m were applied, while in normal operation the apparatus saw a gradient of ∼4 mK/m." [^8^]

> "The residual q21 of the normal pendulum was then determined by measuring the 1ω signal when the normal pendulum was operated with the gradient compensator rotated by 180°, so that it doubled the ambient gradient — i.e., produced a gravity gradient 90 times larger than in the normal operating condition." [^4^]

**Claim:** Quantify each systematic by intentionally driving it 10–100× harder than normal and scaling back — don't argue from absence. **Confidence: High.** This is directly actionable for LOC-1: drive position, tilt, temperature, EMI, and operator-presence each far beyond ambient and measure the response function.

### 2.5 Error budgets with corrections vs. upper limits

The 2008 Eöt-Wash EP test published an explicit error budget distinguishing corrected effects from bounded ones:

> "Table 2: Error budget for the lab-fixed Be-Ti differential accelerations. Corrections were applied for gravitational gradients and tilt, only upper limits were obtained on the magnetic and temperature effects. All uncertainties are 1σ." [^8^]

Result table (1σ, units 10⁻¹⁵ m/s²): Gravity gradients 1.6±0.2 (N), Tilt 1.2±0.6 (N), Magnetic 0±0.3, Temperature gradients 0±1.7, Total systematic 1.8±1.8 vs. statistical 3.3±2.5. [^5^][^9^]

**Claim:** Every candidate channel gets a line item; measured-and-corrected vs. bounded-only systematics are labeled distinctly. **Confidence: High.**

### 2.6 A fifth-force-era lesson: even the convincing anomalies died under this discipline

> "In 1986, as a result of a detailed reanalysis of Eötvös' original data, Fischbach et al. suggested the existence of a fifth force of nature… During the next four years numerous experiments looked for evidence of the fifth force… Although two early experiments reported positive evidence, the others all yielded null results. Over the range between one and 10⁴ meters, the null experiments produced upper limits on the strength of a postulated fifth force between 10⁻³ and 10⁻⁶ of the strength of gravity." [^10^]

> "After numerous repetitions of the experiment, the discord was resolved and a consensus reached that the Fifth Force did not exist." [^11^]

> Adelberger's retrospective: "It is now impossible for me to believe the striking Eötvös anomaly has anything to do with fundamental physics." [^4^]

**Claim:** Reanalysis-derived anomalies (the "striking Eötvös anomaly" underlying the fifth-force claim) evaporated once experiments with rotation modulation, deliberate exaggeration of systematics, and null-result publication were applied. Position-dependent-claim precedents from channeled/anecdotal sources should expect the same gauntlet. **Confidence: High** (consensus history; note two early positive experiments — Thieberger, Boynton — remind us that early positives are common and often instrumental).

---

## 3. Blinding: the particle/nuclear-physics toolkit

### 3.1 The four things you can hide (Klein & Roodman taxonomy)

> "Perhaps the most straightforward blind analysis method is the hidden signal box. In this technique, a subset of the data, containing the potential signal, is kept hidden until all aspects of the analysis are complete… Only after the data selection requirements, the signal efficiency, and the estimated background are determined is the hidden signal box opened." [^12^]

> "These methods can be grouped according to exactly what is kept hidden in the measurement: 1. The signal events… 2. The result, when the numerical answer can be separated from all other aspects of the analysis. 3. The number of events in the data set… 4. A fraction of the entire data set." [^12^]

> "In general, at least two different types of blinding can be distinguished: 1. Data corresponding to a region of interest is withheld from the analysis team, or, correspondingly, 'fake' events can be added to obscure the signal… 2. For precision experiments the observable of interest can be scaled by an unknown factor, or in some cases, an unknown offset can be added to the observable." [^13^]

**Claim:** For a LOC-1-style precision null/positive test, the right tool is a **hidden offset/scale on the observable** (or hidden position labels), not a hidden signal box. **Confidence: High.**

### 3.2 Fermilab Muon g-2: hardware + software blinding, sealed envelopes

> "The Muon g-2 collaboration employs a blinding technique to prevent unintentional biases in the analysis… This is a hardware blinding done by introducing an unknown frequency offset (Δf) into the clock system used to measure the ω_a frequency. This offset is chosen by a separate independent team and is kept secret until all analysis steps are complete." [^14^]

> "The 40 MHz frequency is purposely detuned in the range [39.997, 39.999] MHz by two Fermilab staff members not part of the Muon g-2 collaboration. The actual 'secret' frequencies are noted in two sealed envelopes and the synthesizers are locked behind a security door. Upon completion of the ω_a and ω_p analyses, and after a unanimous decision to unblind the results, the secret frequency is revealed." [^15^]

> "Once you 'open the box,' you can neither retract nor revise your answer, so you have to trust that all the systematic sources of error have been accounted for." [^16^]

**Claim:** Hardware-level blinding by non-collaboration custodians + staged unblinding votes = the gold standard against experimenter bias. LOC-1 feasible analog: a third party applies a secret offset/scrambling to position labels or the measured resonance quantity; sealed-envelope unblinding after analysis freeze. **Confidence: High.**

### 3.3 PSI nEDM: injecting a fake signal into the data, multi-team blinding

> "only data blinding is a traceable and trustworthy method that can circumvent the bias and convince a public audience that there is not even an accidental psychological bias." [^13^]

> "Results of an automated analysis of the data are used to change the recorded spin state of a few neutrons within each measurement cycle. The flexible algorithm may be applied twice (or more) to the data, thus providing the option of sequentially applying various blinding offsets for separate analysis steps with independent teams." [^13^]

> "the false signal in the blinded data had a value significantly away from zero, and thus included a clearly identifiable sign… at one point it actually revealed a mistake in an early version of our data analysis when the code was tested with a known nEDM offset." [^13^]

Final result published as a null: "|d| < 1.8×10⁻²⁶ e·cm @ 90% CL" with "Two separate groups performed the statistical analysis on blinded datasets." [^17^]

**Claim:** A deliberately injected fake signal into blinded data *validates the analysis pipeline* (it caught a sign error here) and enables staged, multi-team unblinding. **Confidence: High.**

---

## 4. Gravitational-wave protocols: blind injections, dummy runs, time slides, box-opening

### 4.1 Blind injections ("Big Dog", Sept 2010) — full end-to-end dress rehearsal

> "A blind injection test was also carried out during September 2010. In this process, designed to provide a stress-test for the full data analysis pipeline and science procedures, signals were secretly injected into the detector data stream by a small group of analysts. The parameters of these signals were sealed in an envelope, to be opened only after the full collaboration had searched the data and carried out a full exercise of the processes leading from potential detection to approval of a publication." [^18^]

> "a few carefully-selected members of the collaborations would secretly inject some (zero, one, or maybe more) signals into the data without telling anyone. The secret goes into a 'Blind Injection Envelope', to be opened when the searches are complete. Such a 'mock data challenge' has the potential to stress-test the full procedure and uncover problems that could not be found in other ways." [^19^]

The Big Dog exercise did uncover surprises: "there was a problem in the blind injection software. The team that injected the simulated gravitational wave signal into the detector had used some old software containing two 'bugs'… But most importantly, those bugs did not prevent the scientists from finding the injected event in the first place." [^19^]

**Claim:** Secret dummy-signal injections test the *whole* protocol including the human chain — and importantly the injected set can contain **zero** signals (a pure sham run). LOC-1 should include both fake-effect injections and pure-sham sessions. **Confidence: High.**

### 4.2 GW150914: checking it was NOT a fake

> "The collaboration spent five months verifying that the event was not a hardware injection, not a calibration test, not malicious mischief, before announcing it to the world on February 11, 2016." [^20^]

> "this potentially momentous signal was initially greeted with skepticism; many, if not all, of the scientists aware of it assumed that it was a fake, placed in the data to test the analysis pipelines… A careful public record is kept of these injected signals such that they will never be mistaken for a real signal." [^21^]

> "Since aLIGO was still in engineering mode, there was no way to inject fake signals, i.e., hardware injections. Therefore, everyone was nearly 100% certain that this was a detection." [^22^]

**Claim:** For extraordinary claims the *first* hypothesis to exclude is "it's our own test signal." Keep an immutable, queryable log of all test/sham activity. **Confidence: High.**

### 4.3 Time slides: estimating the false-alarm background without trusting the noise model

> "Unlike a particle detector we cannot simply turn off the source, or change the orientation of the instrument like one would do in astronomy. Because we require coincidence in time between triggers in multiple detectors, an alternative is to take the trigger files from the filtering stage of two instruments and shift one set in time with respect with the other… and look for coincidences." [^23^]

> "by shifting the data between the two aLIGO detectors more than 15 ms out of sync any event 'detected' in both interferometers is guaranteed to be purely from a background population… the false alarm rate is then estimated by counting accidental coincidences louder than a given candidate." [^24^]

GW150914's significance: "we expect an event as strong as GW150914 to appear by chance only once in about 200,000 years… a significance of more than 5 sigma." [^25^]

**Claim:** **Scramble the variable that carries the physics** (here: time alignment; for LOC-1: position labels or position-vs-time pairing) to build an empirical null distribution — this is the "offline" version of a sham run and should be LOC-1's primary significance estimator. **Confidence: High.**

### 4.4 Freeze-then-open: "box opening" discipline in O1

> "Tune analysis pipeline and data quality vetoes 'blindly', using time-slid data to estimate the background, and software injections for the signal. All tuning finalized before 'opening the box' on in-time coincident triggers." [^26^]

**Claim:** All analysis choices frozen before looking at the in-time (real) data — the physics field's working equivalent of preregistration. **Confidence: High.**

---

## 5. Famous debunkings — what failed, and which protocol would have caught it

### 5.1 N-rays (1904): no blinding of the observer; expectation-driven threshold perception

> "unseen by Blondlot and his assistant, Wood removed the crucial prism from the apparatus. He then asked Blondlot to repeat the observations of the N-ray spectrum. Not knowing the prism had been removed, Blondlot continued to insist he saw the very same pattern he had claimed to see when the prism was in place." [^27^]

> "'After spending three hours or more in witnessing various experiments, I am not only unable to report a single observation which appeared to indicate the existence of the rays, but left with a very firm conviction that the few experimenters who have obtained positive results have been in some way deluded,' he wrote in his report to Nature." [^27^]

> "Wood then covertly replaced a metal file allegedly emitting the N-rays with a wooden object that had been asserted previously by Blondlot not to emit N-rays. Again Blondlot blithely confirmed the presence of N-rays." [^28^]

**Claim:** When the readout is a subjective threshold judgment, unblinded observers see what they expect. The fix used by Wood in 1904 — **covertly disabled apparatus + sham source substitution** — is exactly the sham-run and blinding discipline LOC-1 needs, especially if any human judgment enters the resonance readout. **Confidence: High** (APS historical account).

### 5.2 Polywater (1960s–1973): contamination revealed only by differential controls

> "'Anomalous water' condensed in 1% to 5% (more with higher chamber pressure) of the capillaries that Rousseau and Porto placed on the bottom of the desiccator, but no condensate formed in any of the suspended capillaries (an obvious clue to the possible role of impurities)." [^29^]

> "Denis Rousseau undertook an experiment with his own sweat after playing a handball game at the lab and found it had identical properties… In August 1973, Derjaguin and N. V. Churaev published a letter in the journal Nature in which they wrote: 'these [anomalous] properties should be attributed to impurities rather than to the existence of polymeric water molecules'." [^30^]

**Claim:** (a) *Differential control arms* (suspended vs. wall-contact capillaries) exposed the systematic; (b) the anomaly vanished with clean controls; (c) **the original proponent published the retraction** — a model of honest null publication. **Confidence: High.**

### 5.3 Cold fusion (1989): announcement before replication, unblinded ad-hoc analysis

> "Many of the problems they noticed would likely have been caught in a thorough peer review, and some mistakes were surprisingly simple. For example, scientists noted that Pons and Fleischmann hadn't stirred the heavy water inside their fusion cells… not stirring the water in a fusion cell leads to uneven heat distribution and inaccurate temperature measurements." [^31^]

> "Steven E. Koonin of Caltech called the Utah report a result of 'the incompetence and delusion of Pons and Fleischmann,' which was met with a standing ovation. Douglas R. O. Morrison, a physicist representing CERN, was the first to call the episode an example of pathological science." [^32^]

> "Extraordinary claims have to survive scrutiny before they are announced, not after… Announcing first and validating later inverts that safeguard, and reputations and public trust pay for it when the result does not hold." [^33^]

**Claim:** Press-conference-before-verification plus idiosyncratic calorimetry (heat-exchange corrections "must be carefully estimated… If two groups handle these adjustments differently… they might come to different conclusions") is the canonical protocol failure. LOC-1 must pre-commit analysis and seek independent replication *before* any public claim. **Confidence: High** on the history and the lesson; note a minority LENR literature disputes the consensus — treat as low-credibility counterclaim.

### 5.4 OPERA faster-than-light neutrinos (2011–2012): two opposing hardware systematics mimicked a "believable" signal

> "His slides indicate that a connector for a fibre-optic cable that was incorrectly plugged in definitely contributed towards the error. But the cable error alone would have been much larger than the observed error… The other error that occurred – a problem with one of OPERA's oscillators that led to a 'time-stamp drift' – caused the neutrino time of flight that was recorded to be longer than the actual travel time. The unfortunate combination of these two 'opposing' errors meant that the final result of the neutrinos travelling at a velocity 20 parts per million above the speed of light was an almost believable result." [^34^]

> "about 30 of the 160 member collaboration removed their names from the pre-print and journal submission because they did not believe that all sources of error had been accounted for." [^35^]

> "Hoping for ideas to explain this apparent violation of physical law CERN opened the result to broader scrutiny, uploading the results in unprecedented detail to the physics pre-print archive, arXiv.org. More than 200 papers appeared on arXiv.org attempting to debunk or explain the effect." [^36^]

Final resolution: "in May 2012, the Gran Sasso experiments BOREXINO, ICARUS, LVD and OPERA all measured neutrino velocity with a short-pulsed beam, and obtained agreement with the speed of light, showing that the original OPERA result was mistaken." [^37^]

**Claim:** (a) High statistical significance (nominally 6σ) does *not* protect against unknown systematics; (b) multiple partially cancelling errors can conspire into a plausible-looking number — end-to-end closure tests (inject known signal, recover it) are mandatory; (c) open data + independent detectors (ICARUS et al.) settled it. **Confidence: High.**

### 5.5 Dayton Miller's "ether drift" (1920s–33): systematic drift masquerading as a periodic signal — the cautionary tale most relevant to LOC-1

> "Shankland concluded that Miller's observed signal was partly due to statistical fluctuations and partly due to local temperature conditions, and also suggested that the results of Miller were due to a systematic error rather than an observed existence of aether." [^38^]

> "Clearly the interferometer systematically drifted about 6 fringes during this run… the averaging of the turns cannot remove the effects of this drift because it systematically introduces correlations in the values… this is every experimenter's nightmare: Miller was unknowingly looking at statistically insignificant patterns in his systematic drift that precisely mimicked the appearance of a real signal." [^39^]

**Claim:** A slowly drifting systematic, sampled at discrete orientations/positions and then averaged, can *exactly mimic* a position-dependent periodic signal at an amplitude ~10× below the resolution of individual readings. This is precisely the failure mode LOC-1's "position-dependent resonance" must defend against: randomize/modulate the position sequence, record environmental channels continuously, and show the effect survives position-scramble null tests. **Confidence: High** (Shankland 1955 reanalysis; Roberts 2006 DSP reanalysis giving 6 km/s upper bound at 90% CL).

---

## 6. Preregistration and the physics equivalents

> "Preregistration refers to the practice of publicly registering a research project on an online platform without peer review… a registered report involves a two-stage process in which methods and planned analyses undergo preregistration as well as peer review before data collection starts." [^40^]

> "This format defuses three well-documented problems at once: Publication bias — null results get published too, because acceptance was decided before the outcome. p-hacking — trying analyses until something is 'significant' is blocked by a pre-approved plan. HARKing — hypothesising after the results are known is prevented, because the hypotheses were registered first." [^41^]

Physics' native equivalents: (a) blind analysis with frozen cuts before unblinding (§3, §4.4); (b) analysis-plans and mock-data challenges (§4.1); (c) for LOC-1, a public timestamped preregistration (OSF) of the resonance hypothesis, positions, modulation scheme, exclusion cuts, and the position-scramble null test would add credibility that channeled-material-inspired claims usually lack. **Confidence: High** that these are the recognized mechanisms; Medium that a small bench experiment will use Registered Reports (rare in physics — OSF preregistration is the practical route).

---

## 7. Publication of nulls and explicit limits

> "It has been sought experimentally for almost seven decades, with ever-improving sensitivity, but to date all results have been compatible with zero." [^13^] (nEDM — a 70-year program of *published nulls*, each one a landmark.)

> "No gravitational-wave signal is identified and upper limits are calculated." [^42^] (routine LIGO/Virgo null papers with computed upper limits)

> "The nEDM collaboration… Two separate groups performed the statistical analysis on blinded datasets… The observed EDM is compatible with zero and a new improved limit, |d| < 1.8×10⁻²⁶ e·cm @ 90% CL, was set." [^17^]

> Dark-matter conventions: "we recommend that collaborations should decide in advance on a significance [threshold]" and publish limit bands "containing 68% and 95% of upper limits under the null hypothesis." [^43^]

**Claim:** In frontier physics a well-conducted null with a quantitative upper limit is a publishable, citable, field-defining result. LOC-1 should be designed from the start to deliver a *defensible upper limit* on any position-dependence of the resonance, not only a binary detection claim. **Confidence: High.**

---

## 8. Application to LOC-1: "rotate rather than translate" — an analogous trick

**Answer: Yes — the Eöt-Wash modulation principle transfers directly, and it is arguably the single highest-value upgrade for LOC-1.** The claim under test is that some intrinsic resonance (frequency, amplitude, Q, phase — whatever the measured observable is) depends on the sample's *position*. The naive protocol (measure at position A, move to position B, compare) is a DC differential measurement — exactly the configuration the torsion-balance field abandoned because DC comparisons are defenseless against drift. Concretely:

1. **Modulate position periodically.** Put the sample/resonator on a motorized stage that oscillates or rotates through the claimed special position(s) at a fixed frequency f_mod (e.g., a rotary table sweeping through the "special" bearing once per period, or a linear stage dithering between A and B). The hypothesized effect then appears at f_mod (and possibly 2f_mod if the position dependence is symmetric) — directly analogous to "the violation signal from Earth appears at ν_spin while the tidal effect is at 2ν_spin, and they can be separated" [^2^]. **Confidence: High** that this is the correct analog; the exact harmonic structure depends on LOC-1's position-dependence model (Medium on details).

2. **Lock-in detection at f_mod.** Detect the resonance observable with phase-sensitive detection referenced to the stage encoder: "A lock-in amplifier can be used to detect small AC signals that may be obscured by noise several orders of magnitude larger than the signal. The lock-in can be thought of as behaving as a bandpass filter of very narrow bandwidth." [^44^] Choose f_mod away from mains harmonics and known lab periodicities; "the reference signal frequency should be… different from known noise sources such as 50/60 Hz mains frequency… and should also be high enough to reduce the effect of flicker (1/f) noise." [^45^]

3. **Reversal/difference channels.** Sweep position in both directions and in mirror-image configurations (the A/B test-body swap analog [^4^]); a true position effect flips sign with sweep direction reversal in some coordinates, while thermal/elastic hysteresis from motion itself has a different signature. Also interchange two physically distinct resonators between positions (test-body interchange [^5^]).

4. **Position-scramble null distribution.** Randomly permute the position labels (or phase-shift the encoder reference) to build an empirical false-alarm distribution — the time-slide analog [^23^][^24^]. Report the observed modulation amplitude against this background (p-value / equivalent sigma), not against an assumed noise model.

5. **Sham and injection runs.** Interleave: (a) sham sessions where the stage moves but the claimed positions are secretly absent/dummy-labeled (Big Dog zero-injection logic [^19^]); (b) fake-effect injections where a third party secretly adds a known synthetic position dependence to the recorded data stream, recovered only if the pipeline works (nEDM-style [^13^], g-2-style sealed offsets [^15^]).

6. **Blinding of the human element.** If any step involves human judgment of resonance (threshold perception — the N-rays failure [^27^]), the operator must not know the true position sequence; use coded labels held by a non-analysis custodian.

7. **Exaggerate-the-systematic calibration.** Deliberately drive tilt, vibration, temperature, EMI, and operator presence 10–100× above ambient during position modulation and measure the feed-through at f_mod; publish each as an error-budget line with "correction applied" vs. "upper limit only" labeling (Eöt-Wash Table 2 model [^8^]).

8. **Record environmental witnesses continuously** at the same cadence as the resonance observable (Eöt-Wash: "The pendulum's twist angle and 27 other environmental sensors were recorded every ≈3 s" [^8^]).

9. **Preregister and publish the null.** Timestamp the analysis plan publicly before data-taking; commit to publishing the upper limit on position dependence regardless of outcome [^40^][^41^][^43^].

10. **The Miller warning.** Before claiming anything, demonstrate that the putative effect is *not* a slow drift aliased into position dependence: show it survives random position orderings, appears at f_mod with the predicted phase, and is absent in all scramble nulls [^39^].

---

## 9. Consolidated evidence table

| # | Claim | Source / Date | URL | Confidence |
|---|-------|---------------|-----|-----------|
| C1 | Rotating the torsion balance up-converts a DC violation signal to the turntable frequency, separating it from lab-fixed systematics and lowering thermal noise | Nobili, "Relevance of the weak equivalence principle…", arXiv:1709.02768v2, 2017-10-01 [^2^]; Nobili Varenna lectures [^1^] | https://arxiv.org/html/1709.02768v2 | High |
| C2 | EP signal at ν_spin vs. tidal gradient at 2ν_spin; sign-flip under 180° flip distinguishes violation from gravity gradient | Nobili 2017 [^2^] | https://arxiv.org/html/1709.02768v2 | High |
| C3 | A/B test-body interchange + daily pendulum reversal cancels turntable and pendulum asymmetries | Adelberger talk (SFU 2015; INFN slides) [^5^]; Eöt-Wash conference writeup [^4^] | https://www.sfu.ca/physics/cosmology/TestingGravity2015/talks/Adelberger.pdf | High |
| C4 | Systematics quantified by deliberate exaggeration (15 K/m applied vs. 4 mK/m operational; 90× gravity gradient) | Wagner et al., Class. Quantum Grav. 29 184002, 2012-07-10 [^8^]; [^4^] | https://arxiv.org/html/1207.2442v1 | High |
| C5 | Explicit error budgets separating corrected vs. upper-limit systematics; 1σ convention | Wagner et al. 2012, Table 2 [^8^]; Schlamminger et al. PRL 100, 041101, 2008-01-28 [^9^] | https://link.aps.org/doi/10.1103/PhysRevLett.100.041101 | High |
| C6 | Fifth force: reanalysis-derived anomaly; two early positives; then all nulls; limits 10⁻³–10⁻⁶ of gravity over 1–10⁴ m | Will, Living Rev. Relativ. 17, 4 (2014) [^10^]; SEP "Fall of the Fifth Force" [^11^] | https://link.springer.com/article/10.12942/lrr-2014-4 | High |
| C7 | Blind-analysis taxonomy: hide signal box / result / event count / data fraction; offset or scale for precision experiments | Klein & Roodman, Annu. Rev. Nucl. Part. Sci. 55:141, 2005 [^12^]; nEDM blinding paper [^13^] | https://www.pp.rhul.ac.uk/~cowan/stat/annurev.nucl.55.090704.pdf | High |
| C8 | g-2: secret clock detune by outsiders, sealed envelopes, unanimous unblinding vote; "you can neither retract nor revise your answer" | Muon g-2 Run 2/3 paper, arXiv:2506.21219, 2025-06-26 [^14^]; thesis [^15^]; APS Physics 14, 54, 2021-04-07 [^16^] | https://arxiv.org/html/2506.21219v1 | High |
| C9 | nEDM: fake EDM injected by flipping recorded spin states; double blinding for two teams; fake sign caught an analysis bug; null published | EPJ A 57, 74 (2021) / arXiv:1912.09244, 2019-12-19 [^13^]; ICHEP 2020 abstract [^17^] | https://arxiv.org/abs/1912.09244 | High |
| C10 | LIGO blind injections: secret zero/one/more signals, sealed envelope, full pipeline dress rehearsal incl. publication approval; caught software bugs | LSC blind-injection page [^19^]; arXiv:1111.1701 [^18^] | https://ligo.org/blind-injection/ | High |
| C11 | GW150914 treated as presumed fake until injection log excluded it; 5-month verification; >5σ via time-slide background | LIGO-T1500536 [^21^]; Nautilus, 2016-10-27 [^20^]; LIGO science summary [^25^] | https://dcc.ligo.org/public/0122/T1500536/004/DARM_recon.pdf | High |
| C12 | Time slides: shift data > light-travel time so coincidences are guaranteed background; empirical false-alarm rate | Goggin thesis [^23^]; Haster thesis [^24^]; IGWN user guide | https://gwic.science/assets/docs/theses/Goggin_Thesis.pdf | High |
| C13 | Box-opening: all tuning/vetoes frozen on time-slid data before unblinding in-time triggers | LIGO blind-injection slides, 2017-03-13 [^26^] | https://dcc.ligo.org/public/0141/G1700556/001/LIGO_Blind_20170313.pdf | High |
| C14 | N-rays died to covert prism removal and sham-source substitution: observer "deluded" by expectation | APS News, 2007-08-01 [^27^]; Stanford exhibit [^28^] | https://www.aps.org/apsnews/2007/08/robert-wood-debunks-nrays | High |
| C15 | Polywater killed by differential controls (suspended vs. resting capillaries) and trace-impurity analysis; proponents published retraction in Nature 1973 | NIST SP955 history [^29^]; Wikipedia/polywater [^30^] | https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication955.pdf | High |
| C16 | Cold fusion: simple unchecked systematics (unstirred cells), press-conference-before-replication, non-reproducibility | Berkeley case study [^31^]; Wikipedia/cold fusion [^32^]; Failurepedia [^33^] | https://undsci.berkeley.edu/wp-content/uploads/2022/08/cold_fusion.pdf | High (minority LENR dissent exists; low credibility) |
| C17 | OPERA: two opposing hardware errors conspired to an "almost believable" 6σ anomaly; open data + independent detectors resolved it; speed-of-light confirmed May–Jul 2012 | Physics World [^34^]; Pitt dissertation [^35^]; Royal Society open-science report [^36^]; [^37^] | https://physicsworld.com/page/1384/?action=view_event&event_id=629 | High |
| C18 | Miller ether drift: systematic drift aliased into a fake periodic signal 10× below single-reading resolution; Shankland 1955 and Roberts 2006 (6 km/s, 90% CL bound) | Wikipedia/Dayton Miller [^38^]; Roberts, arXiv:physics/0608238 [^39^] | https://arxiv.org/pdf/physics/0608238 | High |
| C19 | Preregistration/Registered Reports defuse publication bias, p-hacking, HARKing | publisso.de FAQ [^40^]; Directive Publications [^41^] | https://www.publisso.de/en/advice/publishing-advice-faqs/preregistration-and-registered-reports | High |
| C20 | Physics publishes quantitative nulls as first-class results (nEDM 70-yr null program; LIGO upper-limit papers; DM limit conventions) | [^13^][^17^][^42^][^43^] | https://arxiv.org/html/2105.00599v3 | High |
| C21 | Lock-in/phase-sensitive detection at a modulation frequency chosen away from mains and 1/f noise recovers signals far below the noise floor | UT Austin thesis [^44^]; [^45^]; Zurich Instruments | https://raizenlab.ph.utexas.edu/pub/todd_thesis.pdf | High |

---

## 10. Caveats and open points

- **LOC-1 detail gap:** The exact LOC-1 observable (acoustic? mechanical Q? EM resonance?) and claimed position map were not provided to this dimension; §8's harmonic assignments (1f vs. 2f) depend on whether the claimed position dependence is dipolar or symmetric under reversal. Recommend the lead supply the position-dependence model so the modulation-harmonic strategy can be fixed exactly.
- **Blinding cost caveat:** A dissenting arXiv note [^46^] argues blinding "has little place in physics research" because it can impede systematic-error hunting and follow-up of surprises — the practical resolution (also in Klein & Roodman) is *staged* blinding with sham/injection channels and full access after freezing, which §8 adopts.
- **ECREE framing:** "Extraordinary claims require extraordinary evidence" (Sagan, *Broca's Brain*, 1979; earlier Truzzi 1975, Laplace 1812, Hume 1748) [^47^] is a heuristic, not a quantitative standard — LOC-1's credibility will in practice be set by protocol rigor (this file's items), not by the aphorism.
- Counter-literature exists defending Miller and cold fusion; both are fringe and contradicted by the cited reanalyses/replications; flagged for completeness only.

---

## Footnotes / Sources

[^1^]: A. M. Nobili, "Precise gravitation measurements on Earth and in space: Tests of the Equivalence Principle," Varenna lecture notes (2000). http://eotvos.dm.unipi.it/murst/varenna2000/var_sec_5.pdf
[^2^]: A. M. Nobili, "Relevance of the weak equivalence principle and experiments to test it: lessons from the past and improvements expected in space," arXiv:1709.02768v2 (2017-10-01). https://arxiv.org/html/1709.02768v2
[^3^]: M. Ravera et al., "Precision Gravity Tests and the Einstein Equivalence Principle," arXiv:2002.02907v2 (2020-04-07). https://arxiv.org/html/2002.02907v2
[^4^]: E. G. Adelberger et al., "High-sensitivity hillside results from the Eöt-Wash…" (Eöt-Wash conference writeup, incl. A/B protocol and Fig. 10 Eötvös comparison). https://s3.cern.ch/inspire-prod-files-2/254214322863ea8272a481f0d76bc2ae
[^5^]: E. Adelberger, "Table top tests of gravity" (Testing Gravity 2015, SFU slides). https://www.sfu.ca/physics/cosmology/TestingGravity2015/talks/Adelberger.pdf
[^6^]: E. G. Adelberger, J. H. Gundlach, B. R. Heckel, S. Hoedl, S. Schlamminger, "Torsion balance experiments: A low-energy frontier of particle physics," Prog. Part. Nucl. Phys. 62 (2009) 102, §6.4. https://gwern.net/doc/science/physics/2009-adelberger.pdf
[^7^]: T. A. Wagner, PhD dissertation chapter on systematic effects (U. Washington, Eöt-Wash). https://digital.lib.washington.edu/researchworks/bitstreams/dd6edd56-1b9d-4d77-ac05-2b9a65a735de/download
[^8^]: T. A. Wagner, S. Schlamminger, J. H. Gundlach, E. G. Adelberger, "Torsion-balance tests of the weak equivalence principle," Class. Quantum Grav. 29 184002 (2012-07-10). https://arxiv.org/html/1207.2442v1
[^9^]: S. Schlamminger et al., "Test of the Equivalence Principle Using a Rotating Torsion Balance," Phys. Rev. Lett. 100, 041101 (2008-01-28). https://link.aps.org/doi/10.1103/PhysRevLett.100.041101
[^10^]: C. M. Will, "The Confrontation between General Relativity and Experiment," Living Rev. Relativ. 17, 4 (2014). https://link.springer.com/article/10.12942/lrr-2014-4
[^11^]: A. Franklin, "Experiment in Physics, Appendix 4: The Fall of the Fifth Force," Stanford Encyclopedia of Philosophy (Fall 2014 ed.). https://plato.stanford.edu/archives/fall2014/entries/physics-experiment/app4.html
[^12^]: J. R. Klein & A. Roodman, "Blind Analysis in Nuclear and Particle Physics," Annu. Rev. Nucl. Part. Sci. 55:141–163 (2005). https://www.pp.rhul.ac.uk/~cowan/stat/annurev.nucl.55.090704.pdf
[^13^]: nEDM collaboration (PSI), "Data blinding for the nEDM experiment at PSI," arXiv:1912.09244 (2019-12-19); EPJ A 57, 74 (2021). https://arxiv.org/abs/1912.09244 ; https://pmc.ncbi.nlm.nih.gov/articles/PMC8550649/
[^14^]: Muon g-2 Collaboration, "Run 2/3 measurement of the muon anomalous magnetic moment… at Fermilab," arXiv:2506.21219v1 (2025-06-26). https://arxiv.org/html/2506.21219v1
[^15^]: Fermilab thesis (2023), §7.1 "Blinded analysis" (hardware 40 MHz detune, sealed envelopes, MD5 software offsets). https://lss.fnal.gov/archive/thesis/2000/fermilab-thesis-2023-12.pdf
[^16^]: M. K. Pohl? — "Muon's Escalating Challenge to the Standard Model," APS Physics 14, 54 (2021-04-07). https://physics.aps.org/articles/v14/54
[^17^]: B. Clement (nEDM/PSI), "New measurement of the neutron electric dipole moment at PSI," ICHEP 2020 book of abstracts. https://indico.cern.ch/event/868940/book-of-abstracts.pdf
[^18^]: "Gravitational Waves and Time Domain Astronomy," arXiv:1111.1701v1 (§2.1 blind injection description). https://arxiv.org/html/1111.1701v1
[^19^]: LIGO Scientific Collaboration, "'Blind injection' stress-tests LIGO and Virgo's search for gravitational waves." https://ligo.org/blind-injection/
[^20^]: Nautilus, "The Astrophysicists Who Faked It" (2016-10-27). https://nautil.us/the-cosmologists-who-faked-it-236171
[^21^]: M. Evans, "Following GW150914 Through the DARM Signal Chain," LIGO-T1500536-v3. https://dcc.ligo.org/public/0122/T1500536/004/DARM_recon.pdf
[^22^]: "A Brief History of Gravitational Waves" (ProQuest abstract, 2015-09-14). https://www.proquest.com/scholarly-journals/brief-history-gravitational-waves/docview/2124813155/se-2
[^23^]: L. Goggin, PhD thesis, "A Search for Gravitational Waves from Perturbed Black Hole Ringdowns in LIGO Data," §7.3. https://gwic.science/assets/docs/theses/Goggin_Thesis.pdf
[^24^]: C.-J. Haster, PhD thesis (U. Birmingham, 2016), background-by-timeshift discussion. https://etheses.bham.ac.uk/id/eprint/6839/1/Haster16PhD.pdf
[^25^]: LIGO/Caltech, "Observation of gravitational waves from a binary black hole merger — science summary." https://www.ligo.caltech.edu/system/media_files/binaries/301/original/detection-science-summary.pdf
[^26^]: LIGO, "Searching for Gravitational Waves with LIGO: the role of blind analysis" (2017-03-13). https://dcc.ligo.org/public/0141/G1700556/001/LIGO_Blind_20170313.pdf
[^27^]: APS News, "1904: Robert Wood Debunks N-rays" (August 2007). https://www.aps.org/apsnews/2007/08/robert-wood-debunks-nrays
[^28^]: Stanford Libraries, "Robert W. Wood: Photographing the Invisible, Debunking the Incredible." http://boole.stanford.edu/Wood/
[^29^]: NIST, "Responding to National Needs: NBS becomes NIST 1969–1993" (SP 955), polywater section. https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication955.pdf
[^30^]: Wikipedia, "Polywater." https://en.wikipedia.org/wiki/Polywater
[^31^]: Understanding Science (UC Berkeley), "Cold fusion: A case study for scientific behavior." https://undsci.berkeley.edu/wp-content/uploads/2022/08/cold_fusion.pdf
[^32^]: Wikipedia, "Cold fusion." https://en.m.wikipedia.org/wiki/Cold_fusion
[^33^]: Failurepedia, "Cold fusion (1989): why it failed." https://www.failurepedia.com/cases/cold-fusion/
[^34^]: Physics World, report on LNGS neutrino-velocity workshop (2012). https://physicsworld.com/page/1384/?action=view_event&event_id=629
[^35^]: H. Dang, "Epistemology of Scientific Collaborations," PhD dissertation (U. Pittsburgh). https://d-scholarship.pitt.edu/37233/1/Dang_-_ETD_Formatted_Dissertation_FINAL.pdf
[^36^]: Royal Society, "Science as an Open Enterprise" (2012). https://www.researchgate.net/publication/266381896_Science_as_an_Open_Enterprise
[^37^]: Wikipedia-derived chronology reprinted in Applied Physics Research V10N6 (OPERA resolution, May 2012 multi-experiment agreement). https://epe.lac-bac.gc.ca/100/201/300/applied_physics_research/2018/APR-V10N6-All.pdf
[^38^]: Wikipedia, "Dayton Miller — Shankland analysis." https://en.wikipedia.org/wiki/Dayton_Miller
[^39^]: T. J. Roberts, "An Explanation of Dayton Miller's Anomalous 'Ether Drift' Result," arXiv:physics/0608238 (2006). https://arxiv.org/pdf/physics/0608238
[^40^]: publisso.de, "Preregistration and registered reports in the scientific process." https://www.publisso.de/en/advice/publishing-advice-faqs/preregistration-and-registered-reports
[^41^]: Directive Publications, "Registered Reports and Study Preregistration." https://directivepublications.org/blog/registered-reports-and-preregistration
[^42^]: LIGO/Virgo, "Search for Gravitational Waves from Compact Binary Coalescence in LIGO and Virgo Data from S5 and VSR1" (NTRS mirror). https://ntrs.nasa.gov/api/citations/20120016051/downloads/20120016051.pdf
[^43^]: "Recommended conventions for reporting results from direct dark matter searches," arXiv:2105.00599v3 (2025-06-18). https://arxiv.org/html/2105.00599v3
[^44^]: T. (Raizen lab, UT Austin), thesis §3.2 "Lock-in Amplifiers." https://raizenlab.ph.utexas.edu/pub/todd_thesis.pdf
[^45^]: "All-Digital 1550 nm Optical Aqueous Glucose Solution Measurement System" (phase-sensitive detection background; modulation-frequency choice). https://westminsterresearch.westminster.ac.uk/download/a52d5a2ae5533a7ccc582e3fe375c863e370d4110d9982f40f17bc0073cc5a01/500258/PID5100749.pdf
[^46^]: Dissenting note on blinding in physics, arXiv:2311.13542. https://arxiv.org/pdf/2311.13542
[^47^]: Wikipedia, "Extraordinary claims require extraordinary evidence"; Quote Investigator chronology. https://en.wikipedia.org/wiki/Extraordinary_claims_require_extraordinary_evidence
