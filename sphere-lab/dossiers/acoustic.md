# Can pressure support a particle?

Status: proposed setup and synthetic model. No physical data.

Simulated force support, not antigravity. Momentum is exchanged with the acoustic apparatus.

## Begin from scratch

1. Use a manufacturer-rated acoustic levitator as a supervised apparatus lead; this scene is not a wiring or drive design.
2. Measure air conditions, particle size/density and peak pressure with a calibrated suitable microphone.
3. Record particle displacement with a scale and camera; compare predicted and observed positions while varying drive.

## Equipment selection leads

- Manufacturer-rated acoustic levitation apparatus and matching controller: request field geometry, operating limits and published pressure calibration.
- Appropriate calibrated ultrasonic microphone, size/density reference and camera scale: verify bandwidth rather than assuming an ordinary audio microphone suffices.

These are equipment classes and criteria, not quotations, stock checks or construction approval.

## Every input

| Symbol / key | Meaning | Unit | Reference value | Supported range |
|---|---|---|---|---|
| f / frequencyHz | Cycles of sound pressure per second. | Hz | 40000 | 20000 to 80000 |
| p_a / pressurePa | Standing-wave peak pressure in pascals; must be calibrated independently, not inferred from supply voltage. | Pa | 1000 | 0 to 5000 |
| a / radiusM | Spherical particle radius; Rayleigh validity depends on a times wave number. | m | 0.0001 | 0.00001 to 0.003 |
| rho_p / density | Assumed particle density; not a measured specimen. | kg/m3 | 25 | 1 to 9000 |
| Phi / phi | Assumed dimensionless material contrast. It is not fitted to force an equilibrium. | 1 | 0.8 | 0 to 1 |

## Equations and result quantities

**F_rad(z) = 4*pi*a^3*k*E_ac*Phi*sin(2*k*z)**

a radius (m), k wave number (rad/m), E_ac=p_a^2/(4*rho*c^2) energy density (J/m3), Phi dimensionless contrast; z position (m). Force is newton (N).

**F_weight,eff = (4*pi*a^3/3)*(rho_p-rho)*g**

rho_p particle and rho medium density (kg/m3); g=9.80665 m/s2 is assumed standard gravity.

- Particle size parameter: 0.07327329804291063 1. k*a, with k=2*pi*f/c; conservative small-particle gate is 0.1.
- Maximum upward force: 1.3000823799398536e-8 N. Ideal maximum radiation force; does not establish stable capture.
- Effective weight: 9.774920751922423e-10 N. Weight minus buoyancy in the declared medium.

## Numbered apparatus references

[Standalone A4 assumed-geometry plan](../setups/acoustic.svg) · [A4 protocol field map](../drawings/acoustic.svg). Numerals identify parts or fields, not measured values. No physical scale or complete wiring is claimed.

| Reference | Part | Meaning | Position x/y/z (m) | Envelope width/depth/height (m) |
|---|---|---|---|---|
| 801 | Ultrasonic transducer placeholder | External drive supplies acoustic energy. Frequency, electrical rating and radiated field are unspecified. | 0, 0, 0.066 | 0.088, 0.088, 0.055 |
| 802 | Assumed reflector | Proposed acoustic boundary. Spacing is a visual assumption, not a standing-wave condition. | 0, 0, 0.245 | 0.11, 0.11, 0.009 |
| 803 | Target bead placement | Shown at a proposed target position. No levitation, stable node, force balance or physical observation is claimed. | 0, 0, 0.165 | 0.008, 0.008, 0.008 |
| 804 | Blank driver/readout | Drive chain placeholder. No voltage, acoustic pressure, operating frequency or measured result. | 0.19, -0.075, 0.06 | 0.14, 0.085, 0.08 |
| 805 | Length reference | Assumed 180 mm ruler with 10 mm ticks. No calibrated uncertainty. | -0.07, -0.13, 0.024 | 0.18, 0.022, 0.002 |

## Field-map reference dictionary

- 601: Declared question or prediction. Source-declared question/prediction text, not a verified result or completed experiment. Actual raw fields: question.
- 602: Source identity, model and proposed resources. Actual source identity and any declared model/input/resource fields. Their presence is not a validated apparatus, complete model or bill of materials. Actual raw fields: model, inputs, materials.
- 603: Declared observable or observation channel. Source-declared observation text. Unstated units, transfer functions, calibration and acquired data remain missing. Actual raw fields: observable.
- 604: Proposed controls, rivals and falsifiers. Declared discriminating conditions and alternatives. A listed control or acceptance criterion has not thereby been executed. Actual raw fields: controls, falsifier.
- 605: Status, limitations and disclosure gaps. Original status and declared limits, plus worksheet gaps where present. No completion, legal filing readiness or physical validity is inferred. Actual raw fields: status, limitations.

## Assumptions, controls and falsifier

- One-dimensional standing wave in air: density 1.204 kg/m3, sound speed 343 m/s.
- Small spherical particle, weak linear field, no streaming, heating, viscosity correction or stability guarantee.
- The visible concept bead is 8 mm in diameter for illustration, outside this small-particle model at 40 kHz. The default calculation uses a 0.2 mm diameter particle. No force prediction is attached to the rendered bead.

- Control: Drive-off and empty-fixture baseline.
- Control: Change radius, material contrast and pressure independently.
- Control: Withhold prediction outside small-particle/linear-field validity.

Falsifier: A pressure/radius sweep inconsistent with the declared force law after calibration rejects this ideal approximation for that apparatus.

## Sources and proposed improvements

- [Contact-free magnetic resonance imaging and spectroscopy with acoustic levitation](https://pmc.ncbi.nlm.nih.gov/articles/PMC12032270/) — primary-experiment; Abstract, introduction, Results acoustic levitator paragraph, Discussion, Methods acoustic levitation apparatus read; no supplementary datasets or replication.. Reports contact-free MR imaging/spectroscopy of 0.5–5 microlitre droplets with a demagnetized 40kHz levitator, including apparatus-specific stability and deformation effects. Limits: Small droplets and a specific multi-transducer field; not a hollow copper-sphere force calibration, large-body levitation, human health result or validation of this simplified 1D model.
- [Sparse identification of nonlinear dynamics applied to the acoustic levitation of acoustically large objects](https://pmc.ncbi.nlm.nih.gov/articles/PMC12630794/) — primary-experiment-and-model-identification; Abstract, introduction, Gor’kov small-object methodology and experimental-setup sections read. XML equations contain inline images; equations from image-only content were not recovered or claimed independently transcribed.. Reports separate synthetic small-object benchmark and experimental larger-object identification, illustrating failure of small-sphere extrapolation. Limits: Data-driven, setup-dependent dynamics; not a universal extension of Gor’kov or proof that a large copper shell can be supported by the implemented force law.

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
