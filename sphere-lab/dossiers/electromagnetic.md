# Follow every joule.

Status: proposed setup and synthetic model. No physical data.

Known passive RLC model applied here, not a new energy device or proof of a Tesla extraordinary claim.

## Begin from scratch

1. Begin with the virtual model; keep source, load and stored energy as separate channels.
2. For a future low-voltage test, obtain rated passive components and an isolated limited source through a qualified lab; component ratings and tolerances remain unspecified.
3. Measure time-aligned voltage and current across every energy port, including meter supplies and grounds.

## Equipment selection leads

- Rated resistor, inductor and capacitor with measured values, tolerances, parasitics and thermal ratings.
- Isolated current-limited low-voltage source and synchronized voltage/current probes: verify bandwidth, phase error and loading.

These are equipment classes and criteria, not quotations, stock checks or construction approval.

## Every input

| Symbol / key | Meaning | Unit | Reference value | Supported range |
|---|---|---|---|---|
| f / frequencyHz | Frequency of the assumed sinusoidal voltage source. | Hz | 159.15 | 20 to 1000 |
| V_rms / voltageRms | Root mean square voltage; equivalent heating measure for the sinusoidal source. | V | 0.15 | 0 to 5 |
| R_load / loadOhm | Useful resistive load; ideal constant resistance. | ohm | 16 | 0.1 to 100 |
| R_loss / copperOhm | Effective series dissipation in this teaching model. | ohm | 4 | 0.1 to 100 |

## Equations and result quantities

**Z = R_loss + R_load + i*(2*pi*f*L - 1/(2*pi*f*C))**

Z is complex impedance in ohms; i is the imaginary unit, pi is the circle constant; L in henry and C in farad.

**W_source = W_load + W_loss + (E_final - E_initial)**

Each W here is integrated work in joules, not watt; E is stored electric plus magnetic energy in joules.

- Load power: 0.0008999999991318132 W. Energy delivered to the useful resistance each second.
- Copper loss: 0.0002249999997829533 W. Energy dissipated by the series loss resistance each second.
- Energy residual: -3.1763735522036263e-22 J. Source work minus load energy, loss and stored-energy change over 0.025 s.
- Resonance: 159.15494309189532 Hz. Ideal reactance-cancellation frequency, not a new source of energy.

## Numbered apparatus references

[Standalone A4 assumed-geometry plan](../setups/electromagnetic.svg) · [A4 protocol field map](../drawings/electromagnetic.svg). Numerals identify parts or fields, not measured values. No physical scale or complete wiring is claimed.

| Reference | Part | Meaning | Position x/y/z (m) | Envelope width/depth/height (m) |
|---|---|---|---|---|
| 801 | External source placeholder | External electrical input is required. No source amplitude, internal impedance or rating chosen. | -0.2, 0.055, 0.078 | 0.14, 0.1, 0.115 |
| 802 | Blank waveform analyzer | Proposed source/load probes and waveform acquisition. Blank screen; no measured trace. | 0.17, 0.085, 0.096 | 0.19, 0.1, 0.15 |
| 803 | Illustrative inductor | Assumed coil geometry only. Inductance, resistance, parasitic capacitance and ratings are not inferred. | -0.065, -0.035001, 0.077535 | 0.047398, 0.047304, 0.068298 |
| 804 | Capacitor placeholder | Capacitance, dielectric, voltage rating and loss are unspecified. | 0.01, -0.035, 0.067 | 0.034, 0.034, 0.052 |
| 805 | Resistive load placeholder | Useful load dissipates supplied energy. Resistance, temperature coefficient and power rating unselected. | 0.085, -0.035, 0.054 | 0.05, 0.022, 0.022 |
| 806 | Source Probe | Measurement channel placeholder, not a verified connection, bandwidth or calibration. | -0.08, -0.11, 0.055 | 0.008, 0.06, 0.008 |
| 807 | Load Probe | Measurement channel placeholder, not a verified connection, bandwidth or calibration. | 0.08, -0.11, 0.055 | 0.008, 0.06, 0.008 |

## Field-map reference dictionary

- 601: Declared question or prediction. Source-declared question/prediction text, not a verified result or completed experiment. Actual raw fields: question.
- 602: Source identity, model and proposed resources. Actual source identity and any declared model/input/resource fields. Their presence is not a validated apparatus, complete model or bill of materials. Actual raw fields: model, inputs, materials.
- 603: Declared observable or observation channel. Source-declared observation text. Unstated units, transfer functions, calibration and acquired data remain missing. Actual raw fields: observable.
- 604: Proposed controls, rivals and falsifiers. Declared discriminating conditions and alternatives. A listed control or acceptance criterion has not thereby been executed. Actual raw fields: controls, falsifier.
- 605: Status, limitations and disclosure gaps. Original status and declared limits, plus worksheet gaps where present. No completion, legal filing readiness or physical validity is inferred. Actual raw fields: status, limitations.

## Assumptions, controls and falsifier

- Ideal series circuit, inductance L=0.01 H (henry), capacitance C=0.0001 F (farad), periodic steady state.
- Finite energy window 0.025 s; capacitor may be initially charged. Source, load, losses and stored-energy change are all counted.

- Control: Source off, zero initial energy.
- Control: Detune the source and substitute a known load.
- Control: Independently integrate signed source work and verify the complete energy identity.

Falsifier: A nonzero residual beyond independently propagated uncertainty shows missing ports, phase/timing error or model failure, and does not establish free energy.

## Sources and proposed improvements

- [Haus & Melcher — Electromagnetic Fields and Energy §11.2, Poynting’s theorem](https://web.mit.edu/6.013_book/www/chapter11/11.2.html) — Retrieved; selected passages read; Official MIT textbook section: energy-conservation derivation, work density, stored energy and flux roles read.. EM resonance models must account for source work, stored energy, flux and dissipation; response amplitude alone does not show net energy generation. Limits: This is a foundational source, not a recent experimental paper. It does not establish any proposed device’s efficiency, passivity or safety.
- [Tesla, US645576A — System of transmission of electrical energy (1900)](https://patents.google.com/patent/US645576A/en) — Retrieved; selected passages read; Patent description passages identifying driven oscillator, condenser and generator read; not a full claim construction or replication.. The historical proposal has an explicit energy source and tuned transmitter/receiver mechanism. A patent documents a proposal rather than tested efficiency. Limits: Historical high-voltage details are not apparatus instructions here. No free energy, antigravity or copper teleportation result follows from this patent.

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
