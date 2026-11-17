# A beat is a signal, not an outcome.

Status: proposed setup and synthetic model. No physical data.

Deterministic audio arithmetic and a graded literature review. No treatment, healing simulation or clinical recommendation.

## Begin from scratch

1. Inspect generated samples and the documented digital amplitude before any future listening use.
2. For acoustic measurements, characterize DAC (digital-to-analog converter), amplifier, transducer and microphone separately.
3. Any clinical question needs a defined intervention, comparator, participant safeguards and a validated clinical outcome; oscillator equations do not supply them.

## Equipment selection leads

- Calibrated audio interface, headphones or speaker and appropriate measurement microphone if acoustic output is later studied.
- For a separate human study, qualified clinical protocol design and outcome instruments; no treatment instructions or efficacy assumptions supplied.

These are equipment classes and criteria, not quotations, stock checks or construction approval.

## Every input

| Symbol / key | Meaning | Unit | Reference value | Supported range |
|---|---|---|---|---|
| f_c / carrierHz | Midpoint of the two generated tones, not a human natural frequency. | Hz | 220 | 100 to 1000 |
| d_f / beatHz | Difference between component frequencies; no health or brain-state prediction follows. | Hz | 8 | 0 to 40 |

## Equations and result quantities

**sin(2*pi*f1*t) + sin(2*pi*f2*t) = 2*sin(2*pi*f_c*t)*cos(pi*d_f*t)**

f1 and f2 are component frequencies; f_c their midpoint, d_f their difference (Hz), t time in seconds. Multiply the two-tone sum by 10^(-24/20)/2 and a linear taper. At sample i, taper=min(1, i/T, (N-1-i)/T), N=2000, T=min(floor(0.02*8000), floor(N/4))=160 samples. Both endpoints are zero. The plot retains every 8000 Hz sample.

- Lower component: 216 Hz. First synthetic tone.
- Upper component: 224 Hz. Second synthetic tone.
- Tone separation: 8 Hz. Physical component difference; not a measured brainwave or clinical endpoint.

## Numbered apparatus references

[Standalone A4 assumed-geometry plan](../setups/audio.svg) · [A4 protocol field map](../drawings/audio.svg). Numerals identify parts or fields, not measured values. No physical scale or complete wiring is claimed.

| Reference | Part | Meaning | Position x/y/z (m) | Envelope width/depth/height (m) |
|---|---|---|---|---|
| 801 | Left Cup | Proposed separate audio channel. Render specifies no carrier, level, binaural beat or physiological response. | -0.205, 0, 0.174 | 0.032, 0.096, 0.096 |
| 802 | Right Cup | Proposed separate audio channel. Render specifies no carrier, level, binaural beat or physiological response. | -0.035, 0, 0.174 | 0.032, 0.096, 0.096 |
| 803 | Headband | Assumed support geometry; not an ergonomic or acoustic fit test. | -0.12, 0, 0.243627 | 0.192823, 0.024, 0.131571 |
| 804 | Blank two-channel analyzer | Digital/acoustic channels require their own calibration. No brainwave, neural entrainment or therapeutic measurement. | 0.15, 0.05, 0.085 | 0.2, 0.12, 0.12 |
| 805 | Measurement coupler placeholder | A proposed microphone/coupler stage. Ear simulator standard, transfer function and microphone not selected. | 0.065, -0.1, 0.045 | 0.052, 0.052, 0.036 |

## Field-map reference dictionary

- 601: Declared question or prediction. Source-declared question/prediction text, not a verified result or completed experiment. Actual raw fields: question.
- 602: Source identity, model and proposed resources. Actual source identity and any declared model/input/resource fields. Their presence is not a validated apparatus, complete model or bill of materials. Actual raw fields: model, inputs, materials.
- 603: Declared observable or observation channel. Source-declared observation text. Unstated units, transfer functions, calibration and acquired data remain missing. Actual raw fields: observable.
- 604: Proposed controls, rivals and falsifiers. Declared discriminating conditions and alternatives. A listed control or acceptance criterion has not thereby been executed. Actual raw fields: controls, falsifier.
- 605: Status, limitations and disclosure gaps. Original status and declared limits, plus worksheet gaps where present. No completion, legal filing readiness or physical validity is inferred. Actual raw fields: status, limitations.

## Assumptions, controls and falsifier

- A two-tone monaural demonstration with fixed quiet digital amplitude; not a binaural physiological model.
- Waveform is synthetic at 8000 samples/s over 0.25 s. Linear taper lasts min(20 ms, one-quarter of the sample count) at each end; ms means millisecond. Master sample-peak ceiling is -24 dBFS (decibels relative to digital full scale), gain 10^(-24/20); this is not measured sound pressure or a true-peak limit. This page does not play sound.

- Control: Equal tones and zero separation.
- Control: Matched loudness and expectancy controls in any separate human study.
- Control: Compare source arithmetic with acoustic output; digital amplitude is not sound pressure.

Falsifier: A proposed physiological mechanism must predict a preregistered measured outcome beyond credible sham/expectancy controls; tone arithmetic alone cannot satisfy it.

## Sources and proposed improvements

- [Binaural beats to entrain the brain? A systematic review of the effects of binaural beat stimulation on brain oscillatory activity, and the implications for psychological research and intervention](https://pmc.ncbi.nlm.nih.gov/articles/PMC10198548/) — systematic-review; Abstract, study selection/inclusion criteria, Results overview, Discussion, Limitations and Conclusion read; individual primary trials and supplementary data not independently reanalysed.. Fourteen included studies: abstract/discussion summarize five supportive, eight contradictory and one mixed; authors find inconsistent EEG entrainment and cannot pool effect sizes. Limits: Review concerns dichotic binaural stimulation and EEG in selected healthy adults, not all music or all treatments; monaural arithmetic cannot establish clinical healing. Results count overlapping support/mixed categories internally, so no vote-count probability or effect estimate is inferred.
- [Shukla et al. — Effectiveness of Binaural Beats in Reducing Dental Pain and Anxiety among Children and Adults: A Systematic Review and Meta-analysis (2025)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12451561/) — Systematic review and meta-analysis; low-certainty clinical evidence; Primary full-text XML retrieved. Abstract, inclusion criteria, Results risk-of-bias/GRADE and comparisons, Discussion limitations and Conclusion read. Individual trials and forest plots not independently reanalysed.. Nine studies entered qualitative review and six quantitative analysis. Some anxiety comparisons favored binaural beats; dental pain versus no intervention was inconclusive with substantial heterogeneity. The authors report high selection/detection bias and urge caution. Limits: A specific dental-procedure evidence base is not universal healing, proof of a unique curative frequency, or a validation of this app. Pre/post change alone does not identify a specific binaural mechanism. EEG entrainment and clinical benefit are distinct outcomes.

## Technical shorthand

- SI: International System of Units.
- Hz: Hertz, cycles per second.
- kHz: Kilohertz, one thousand hertz.
- Pa: Pascal, pressure equal to one newton per square metre.
- K: Kelvin, the SI unit of temperature; temperature differences of 1K and 1°C have equal size.
- ppm: Parts per million; a relative value multiplied by one million.
- ppb: Parts per billion; a relative value multiplied by one billion.
- RLC: A circuit containing resistance R in ohms, inductance L in henry and capacitance C in farad.
- RMS: Root mean square, a waveform amplitude convention distinct from peak.
- DAC: Digital-to-analog converter, the electronic stage that turns numeric samples into a voltage.
- EEG: Electroencephalography, a measured scalp electrical signal; not simulated here.
- SPL: Sound pressure level, an acoustic measurement requiring calibration.
- GLB: Binary glTF, a 3D scene file format; this file contains illustrative geometry.
- SVG: Scalable Vector Graphics, a vector drawing format.
- OSF: Open Science Framework, the repository hosting the independently retrieved registration.
- TOST: Two one-sided tests, an equivalence-testing method; its margin and uncertainty need a declared plan.
- A: Position or condition A in the named protocol; not an ampere unless explicitly stated.
- B: Position or condition B in the named protocol; not magnetic flux density unless explicitly stated.
- LOC1: The external Sphere location-comparison protocol, with its own registered estimand.

## Drawing convention and remaining gaps

- [US drawing requirements:37CFR1.84](https://www.ecfr.gov/current/title-37/chapter-I/subchapter-A/part-1/subpart-B/section-1.84)
- [EPO President decision on presentation of application documents, OJ2025A49](https://www.epo.org/en/legal/official-journal/2025/07/a49)

- Standalone single-view draft; no FIG label. A filing-specific drawing set needs consistent figure numbering and complete claimed views.
- Illustrated dimensions are assumed, not measured or manufacturing specifications.
- Only declared component envelopes are projected; decorative meshes, mounts, internal wiring, optical paths and safety enclosures are omitted.
- Geometric projection and drafting-format checks do not certify US/EPO filing compliance, enablement, patentability or physical validity.
- Leader lines may cross projected parts in crowded layouts; every identity is also recorded in the companion numbered reference table.
- Documentation concept map only: undirected connections are not execution order, causal proof, acquired data or invented hardware.
- Numerals601–605 identify actual worksheet/schema field groups; companion sourceFieldPaths and missingFieldKeys explain their coverage.
- Missing raw fields remain gaps; a field-group box does not establish that a physical apparatus or complete model was declared.
- This single-view A4 draft omits the printed FIG. label and is not legal filing approval, patentability or scientific validation.
- Source review is a selected dated corpus; no exhaustive state-of-the-art, novelty or legal conclusion.
- Geometry remains fixed illustration; changing a simulation input does not update the scene or imply a measured setup.

The JSON companion preserves complete source passages, reading depth, hashes, model inputs, all declared scene dimensions and every reference mapping.
