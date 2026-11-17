# Where does the shift come from?

Status: proposed setup and synthetic model. No physical data.

Synthetic differential-ratio teaching model. The OSF registration pd3st was independently retrieved. This toy uses B/A relative change in ppm; LOC-1 specifies 10^9*(mean r_A - mean r_B) in ppb (parts per billion), with covariance and equivalence analysis. These estimands differ in sign, normalization and unit. This is not a replication or registered analysis.

## Begin from scratch

1. Start with the preserved Copper Sphere Lab and its source-bound model contract.
2. For a proposed physical study, identify a mode, acquire both test and stationary reference channels on a shared timebase, then calibrate temperature and mounting response.
3. Freeze randomized blinded A/B positions, sham moves, orientation swaps, exclusion rules and an uncertainty budget before collection.

## Equipment selection leads

- Precision hollow copper specimens: supplier material certificate, actual wall geometry and repeatable mounting; no price or accuracy assumed.
- Partner-lab laser Doppler vibrometer, shared timebase and synchronized acquisition: verify bandwidth, phase, clock locking and calibration certificates.
- Temperature probes and enclosure: determine mode-specific thermal slope and actual spatial stability before choosing a tolerance.

These are equipment classes and criteria, not quotations, stock checks or construction approval.

## Every input

| Symbol / key | Meaning | Unit | Reference value | Supported range |
|---|---|---|---|---|
| f0 / modeHz | An assumed identified mechanical mode, not a frequency derived from this illustration. | Hz | 250000 | 10000 to 500000 |
| dT / deltaK | Test-sphere temperature at B minus A after reference correction; K is kelvin. | K | 0.01 | -0.05 to 0.05 |
| alpha / alpha | Assumed calibration slope; ppm means parts per million. Must be measured for the actual mode. | ppm/K | -100 | -500 to 500 |
| epsilon / injectedPpm | Synthetic test signal only, with zero as the established-model null. | ppm | 0 | -10 to 10 |
| c / commonPpm | Same fractional drift applied to test and reference channels; cancels in their ratio. | ppm | 15 | -100 to 100 |

## Equations and result quantities

**r = f_test / f_reference; D = 10^6 (r_B/r_A - 1)**

r is a dimensionless ratio, D is its A/B fractional change in parts per million. Common multiplicative drift cancels.

**D ≈ alpha*dT + epsilon**

First-order teaching approximation. alpha is an assumed calibration slope in ppm/K that must be measured for the actual mode; dT is differential kelvin; epsilon is a synthetic location term in ppm.

- Apparent ratio shift: -1 ppm. First-order differential thermal term plus deliberately injected location term.
- Frequency equivalent: -0.25 Hz. Selected assumed mode times the fractional ratio shift.
- Thermal contribution: -1 ppm. Can imitate the location signal unless independently calibrated.

## Numbered apparatus references

[Standalone A4 assumed-geometry plan](../setups/sphere.svg) · [A4 protocol field map](../drawings/sphere.svg). Numerals identify parts or fields, not measured values. No physical scale or complete wiring is claimed.

| Reference | Part | Meaning | Position x/y/z (m) | Envelope width/depth/height (m) |
|---|---|---|---|---|
| 801 | Copper sphere A | Proposed paired-sphere metrology specimen. No field, resonance or anomalous force is simulated. | -0.08, 0, 0.135 | 0.1, 0.1, 0.1 |
| 802 | Copper sphere B | Proposed paired-sphere metrology specimen. No field, resonance or anomalous force is simulated. | 0.08, 0, 0.135 | 0.1, 0.1, 0.1 |
| 803 | Length scale | Illustrative 280 mm scale with 10 mm ticks. Not an instrument calibration certificate. | 0, -0.125, 0.024 | 0.28, 0.022, 0.002 |
| 804 | Blank displacement readout | Proposed displacement data acquisition. No measured value or sensitivity is provided. | 0.18, 0.1, 0.066 | 0.14, 0.075, 0.09 |
| 805 | Displacement sensor placeholder | Optical or capacitive modality, mounting stiffness and calibration remain to be selected. | -0.205, 0.015, 0.12 | 0.065, 0.05, 0.045 |

## Field-map reference dictionary

- 601: Declared question or prediction. Source-declared question/prediction text, not a verified result or completed experiment. Actual raw fields: question.
- 602: Source identity, model and proposed resources. Actual source identity and any declared model/input/resource fields. Their presence is not a validated apparatus, complete model or bill of materials. Actual raw fields: model, inputs, materials.
- 603: Declared observable or observation channel. Source-declared observation text. Unstated units, transfer functions, calibration and acquired data remain missing. Actual raw fields: observable.
- 604: Proposed controls, rivals and falsifiers. Declared discriminating conditions and alternatives. A listed control or acceptance criterion has not thereby been executed. Actual raw fields: controls, falsifier.
- 605: Status, limitations and disclosure gaps. Original status and declared limits, plus worksheet gaps where present. No completion, legal filing readiness or physical validity is inferred. Actual raw fields: status, limitations.

## Assumptions, controls and falsifier

- First-order small fractional shifts; matched common clock factors cancel exactly in the defined ratio.
- The reference has no differential temperature change in this toy model. No measured sphere coefficient or mode identification is supplied.
- The paired 3D specimens have illustrative 0.16 m centre spacing; they are not LOC-1 positions A/B, which are 0.40 m apart. Test/reference object roles and position labels must be assigned separately.

- Control: Set injected location term to zero and vary temperature.
- Control: Change common clock drift: the ratio result must stay constant.
- Control: Swap sensors and mounts, include sham motion and hold-out temperature calibration.

Falsifier: An alleged location signal that follows differential temperature, mounting, readout gain or clock mismatch does not discriminate the location hypothesis.

## Sources and proposed improvements

- [Project S.P.H.E.R.E. — About](https://spheredesci.org/about/) — Retrieved; selected passages read; Captured page: key facts, project status, method, exclusions and license.. The project proposes a controlled location comparison of a hollow copper sphere; its >230 kHz band is a proposed selection, not a validated threshold. Limits: A first-party description establishes what is proposed, not physical validation. Research-page text: SPHERE Research, LLC, CC BY 4.0.
- [Protocol LOC-1 — plain-language overview](https://spheredesci.org/protocol/) — Retrieved; selected passages read; Captured full plain-language protocol sections, controls, amendment and interpretation.. Mechanical/optical resonance tracking and RF response require separate definitions and simultaneous readout qualification. Limits: The OSF registration controls exact specifications. Four objects yield six correlated pairs, not six independent replications.
- [OSF Preregistration pd3st — Protocol LOC-1](https://osf.io/pd3st/) — Retrieved; selected passages read; Parent node metadata and registrations relationship retrieved; actual registration attributes and registered_meta on questions, sample, blinding, design, outcomes and analysis read.. Registration pd3st specifies80 placements(40 A / 40 B),10 blocks of8,0.40 m separation, default30 min settling and ratio/covariance analysis. The parent5b6mj is a project node with registration=false and links this registration. Limits: These are preregistered choices, not verified power, achieved stability or results. Default settling must still be qualified experimentally; the four-object proposal is not silently substituted.
- [Archived SPHERE-Whitepaper-LOC1-Draft-v1.0.pdf](https://zenodo.org/api/records/23583932/files/SPHERE-Whitepaper-LOC1-Draft-v1.0.pdf/content) — Retrieved; selected passages read; Downloaded38-page PDF; extracted text; selected introduction, primary-measurand, digital-twin and risk passages read.. The actual archived PDF is a proposal; its SHA matches the file named in the OSF registration. Limits: Full PDF downloaded does not mean every page or cited underlying source was reviewed. Attribution: Michael P. Goodman / SPHERE Research, LLC, CC BY4.0.
- [JCGM100:2008 — Guide to the expression of uncertainty in measurement](https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf) — Retrieved; selected passages read; Official PDF downloaded/text extracted; §§5.2.2,5.2.5,6.2.2–6.3.3 read.. A/B differences and shared-reference ratios need covariance terms. A chosen coverage factor is not automatically a calibrated95% interval. Limits: Metrology guidance does not provide this apparatus’s uncertainty or detect an intrinsic location variable. Local copies are research captures; publisher terms retained.

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
