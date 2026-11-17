# Transfer a state. Keep the channel.

Status: proposed setup and synthetic model. No physical data.

Quantum information transfer under stated assumptions, with a uniform pure-qubit classical benchmark of 2/3. No macroscopic object teleportation.

## Begin from scratch

1. Start with the state-vector/density-matrix simulation; the 3D optics scene is a conceptual layout without an optical link budget.
2. A laboratory implementation needs a characterized entanglement source, detectors, timing, interference, Bell analyzer and classical feed-forward.
3. Define heralding, success rate and fair comparison before evaluating fidelity; no matter transport is modeled.

## Equipment selection leads

- Access to an optical quantum-information laboratory; conceptual scene is not a procurement-complete photonic design.
- Characterized entanglement source, photon detectors, interferometric optics and timing/feed-forward equipment; efficiency, losses and success criteria remain unspecified.

These are equipment classes and criteria, not quotations, stock checks or construction approval.

## Every input

| Symbol / key | Meaning | Unit | Reference value | Supported range |
|---|---|---|---|---|
| theta / thetaRad | Bloch-sphere polar angle in radians. | rad | 1.05 | 0 to 3.141592653589793 |
| phi / phiRad | Bloch-sphere azimuth in radians. | rad | 0.7 | 0 to 6.283185307179586 |
| v / visibility | Assumed ideal Bell-resource fraction; remaining fraction is maximally mixed noise. | 1 | 0.85 | 0 to 1 |

## Equations and result quantities

**rho_out = v*rho_in + (1-v)*I/2; F = (1+v)/2**

rho is a density matrix (dimensionless), v is resource visibility, I is the two-dimensional identity matrix and F is state overlap.

**rho_receiver(no message) = I/2**

Average over all four Bell-measurement branches before the two classical bits arrive. State does not depend on the input.

**Bell branches: Phi+, Phi-, Psi+, Psi-; corrections I, Z, X, XZ**

These are names of four maximally entangled basis states. I leaves a state unchanged, Z reverses relative phase, X swaps the two basis amplitudes, XZ applies both (global phase is unobservable). Each branch has probability 1/4 here. A bit is one binary symbol. Bloch x/y/z are three dimensionless coordinates representing the qubit density matrix, not physical locations. Matrix entries use i=sqrt(-1), the imaginary unit.

- Corrected state fidelity: 0.925 1. Overlap between input pure state and corrected noisy output.
- Classical average benchmark: 0.6666666666666666 1. Uniform pure-qubit ensemble measure-and-prepare benchmark; not a threshold for matter transport.
- Classical message: 2 bit. Two binary symbols specify the correction. Entanglement alone sends no usable input information.

## Numbered apparatus references

[Standalone A4 assumed-geometry plan](../setups/quantum.svg) · [A4 protocol field map](../drawings/quantum.svg). Numerals identify parts or fields, not measured values. No physical scale or complete wiring is claimed.

| Reference | Part | Meaning | Position x/y/z (m) | Envelope width/depth/height (m) |
|---|---|---|---|---|
| 801 | Entangled-resource source placeholder | A pre-shared Bell resource is assumed by the ideal qubit model. Real preparation, heralding and noise calibration are missing. | -0.205, 0.07, 0.073 | 0.085, 0.065, 0.072 |
| 802 | Nonlinear-optics mount placeholder | Not a selected entanglement source. Phase matching, pump, filters and efficiencies are unspecified. | -0.12, 0.07, 0.07 | 0.035, 0.035, 0.052 |
| 803 | Alice joint-analysis placeholder | Symbol for Alice Bell measurement only. This optical layout does not implement or verify a complete Bell-state analyzer. | 0, 0.07, 0.072 | 0.045, 0.045, 0.06 |
| 804 | Input-state preparation placeholder | Proposed independent input qubit preparation; source and state tomography hardware remain unspecified. | -0.03, -0.1, 0.071 | 0.052, 0.052, 0.058 |
| 805 | Alice Detector | Detection, heralding, timing and tomography are not supplied. | 0, 0.135, 0.075 | 0.06, 0.045, 0.07 |
| 806 | Bob Receiver | Bob requires the classical result and a conditional Pauli correction. No superluminal channel or matter transport. | 0.2, 0.07, 0.075 | 0.06, 0.045, 0.07 |
| 807 | Classical feed-forward placeholder | Two classical bits in the ideal protocol. No active electronics, timing, correction optics or real feed-forward implementation. | 0.16, -0.1, 0.065 | 0.12, 0.07, 0.05 |

## Field-map reference dictionary

- 601: Declared question or prediction. Source-declared question/prediction text, not a verified result or completed experiment. Actual raw fields: question.
- 602: Source identity, model and proposed resources. Actual source identity and any declared model/input/resource fields. Their presence is not a validated apparatus, complete model or bill of materials. Actual raw fields: model, inputs, materials.
- 603: Declared observable or observation channel. Source-declared observation text. Unstated units, transfer functions, calibration and acquired data remain missing. Actual raw fields: observable.
- 604: Proposed controls, rivals and falsifiers. Declared discriminating conditions and alternatives. A listed control or acceptance criterion has not thereby been executed. Actual raw fields: controls, falsifier.
- 605: Status, limitations and disclosure gaps. Original status and declared limits, plus worksheet gaps where present. No completion, legal filing readiness or physical validity is inferred. Actual raw fields: status, limitations.

## Assumptions, controls and falsifier

- Ideal Bell measurement, feed-forward and single-qubit channel; isotropic Bell resource noise only.
- Two classical bits are required. The receiver without the message is maximally mixed.

- Control: Visibility zero gives fidelity 1/2.
- Control: Visibility one and corrected branches return the input state.
- Control: Remove classical messages: receiver density matrix stays I/2 for every input.

Falsifier: A state-dependent receiver before the classical message would contradict this no-signalling model; branch probabilities and corrections are independently checked.

## Sources and proposed improvements

- [Teleporting an unknown quantum state via dual classical and Einstein-Podolsky-Rosen channels](https://research.ibm.com/publications/teleporting-an-unknown-quantum-state-via-dual-classical-and-einstein-podolsky-rosen-channels) — read-primary; Author-institution publication entry and complete abstract only; original paper not retrieved. Entanglement and an ordinary classical message are separate required resources. Limits: Abstract supports protocol overview, not apparatus rates, noise assumptions or new research novelty.
- [General teleportation channel, singlet fraction and quasi-distillation](https://arxiv.org/abs/quant-ph/9807091v2) — read-primary; Selected PDF passages: section II Eq.10; section III B/C Eqs.14–20; section IV classical fidelity derivation; abstract. Remaining proofs/sections not fully reviewed.. For d=2 the model channel is vρ+(1−v)I/2 with pure-input fidelity (1+v)/2; deterministic uniform-pure-qubit classical benchmark is 2/3. Limits: Not an arbitrary restricted-ensemble, known-state or postselected-experiment benchmark; no physical-copper or acoustic implication.
- [Quantum teleportation coexisting with classical communications in optical fiber](https://arxiv.org/abs/2404.10738v4) — read-primary; Selected preprint PDF: title/version, abstract, section1 introduction, section2/Fig.1 protocol and apparatus description. Results tables and supplementary methods not fully reviewed.. A physical quantum channel uses independently prepared/heralded photons, entanglement, filtering, joint detection and classical correction; it is not an acoustic resonance or matter-transport demonstration. Limits: Selected 2024 experiment, not exhaustive 2026 state-of-art survey; reported abstract values are source claims, not reproduced data; ideal four-outcome deterministic model does not reproduce probabilistic optical hardware.

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
