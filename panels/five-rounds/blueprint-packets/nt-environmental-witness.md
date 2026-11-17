# Environmental witness and signal leakage
Record: nt:environmental-witness · setup family · proposed\_unbuilt

An independently read pickup and calibrated complex transfer test whether ordinary background can be separated from a receiver-port residual.

## What this study asks
Ask whether an extra observation can help separate an assumed signal from ordinary background without giving the residual a new physical identity.

## Follow the signal or force
1. The receiver observation contains a stipulated signal plus transferred background.
2. The witness channel is a second measurement related to that background after calibration.
3. Subtract the calibrated background contribution while carrying the stated measurement and transfer errors.
4. Check whether signal leakage into the witness or an alternative ordinary source can reproduce the same observations.

## What is declared
- R3 declares an effective-voltage model and explicit competing source explanations.
- The witness voltage is a calibrated equivalent quantity, not automatically the raw voltage from the drawn pickup.
- Original source status: proposed\_unbuilt.

## What remains unknown
- The actual complex transfer, its drift and the pickup calibration are not measured here.
- How much the desired signal leaks into the witness is not known from its position alone.
- A residual does not distinguish an exotic cause from an unmonitored ordinary drive at the same effective port.

## Measurement checklist for a future study
- Calibrate the raw witness and both coherent current channels.
- Record source-off, background-only and deliberate known-injection controls.
- Vary orientation and position; quantify signal leakage and calibration stability.
- Calibrate raw pickup voltage to witness-equivalent w and reconstruct y from the coherent two-current readout.
- Use synchronous channels and independently characterized complex nuisance transfer a.
- Record background-only, source-off and known receiver-port injections; test phase, orientation, position and temporal stability.
- Test signal leakage beta into the witness and additional pickup loading/coupling before reusing a two-loop model.

## Questions before interpreting a result
- What calibration makes this witness comparable to the receiver?
- Can an allowed change in transfer remove the claimed signal?
- What happens when the declared inversion becomes singular?

## Limits
- The R3 quantities y and w are effective calibrated voltages, not automatically raw coil readings. Pickup geometry establishes neither transfer a nor signal leakage beta.
- No hardware data or electromagnetic field solution.
- Unknown a admits an exact zero-signal rival; known cross-leak is singular at 1-a beta=0.
- Even perfect subtraction retains ordinary same-port physical-source rivals.
- No dark-matter coupling, detector sensitivity, gravity modification or free-energy identification.
- This guide explains the declared study. It supplies no missing engineering specification, calibration, purchase requirement or construction approval.

## Symbols and short forms
### Peak amplitude (peak, Vpeak, Ipeak)
Peak amplitude is the largest excursion from zero.
Units: same unit as the signal. The imported R1/R2/R3 electrical phasors use peak amplitude, while the host circuit inputs use RMS.
- Sample peak, reconstructed true peak and acoustic pressure peak are different measurements.
### Phase and coherent readout (φ, phase, CH, CH1, CH2)
Phase locates one repeating signal relative to another.
Units: radian (rad), or declared degrees. Coherent complex readout preserves relative amplitude and phase under a declared shared reference.
- Sharing a sample clock does not establish equal gain, stable transfer or calibration.
### Calibration and deterministic error bounds (ε, epsilon, epsilon\_y, epsilon\_w, ΔM, Δa, Delta\_a)
Calibration connects instrument readings with a stated reference.
Units: unit of the bounded quantity. These contracts supply deterministic error radii in volts, amperes, henries or dimensionless transfer units, as declared.
- A stipulated error radius is not measured sensor performance or a confidence interval.
### Not to scale (NTS, not to scale)
A sketch may show relationships without preserving size ratios.
Units: drawing convention; not a measurement. Use written dimensions and declared coordinate units rather than measuring screen pixels.
- An accurate-looking diagram is not an engineering drawing or a calibrated photograph.
### Imaginary unit (j, i, √−1)
The imaginary unit represents a quarter-turn in complex arithmetic.
Units: dimensionless. j² = −1; imported contracts often write i instead. It is not electrical current i(t).
- Interpret i from its equation context, not from its character alone.
### Phasor (phasor)
A phasor combines a sinusoid’s size and phase into one complex number.
Units: same unit as represented voltage/current. It represents a single-frequency sinusoid under an explicitly selected peak or RMS convention.
- A phasor is not an instantaneous waveform or automatically a physical electromagnetic field.
### Complex and real-number domains (ℂ, C², ℝ, R⁴)
A complex number has a real and an imaginary part.
Units: dimensionless domain notation. Two complex source values have four real coordinates: ℂ² is represented by ℝ⁴.
- ℂ is not capacitance C; ℝ is not electrical resistance R.
### Real part, imaginary part and conjugate (Re, Im, conj, conjugate, \*)
These operations separate or reverse parts of a complex number.
Units: same unit as the complex quantity. For z = a + jb, Re(z)=a, Im(z)=b and conjugate(z)=a−jb.
- The a and b here are generic coordinates, not automatically witness transfer parameters.
### Magnitude and squared magnitude (\|z\|, \|I\|², squared\_magnitudes)
Magnitude measures the size of a complex quantity without its phase.
Units: signal unit; its square for squared magnitude. For z=a+jb, \|z\|²=a²+b²; measuring magnitude discards phase information.
- A² is squared amperes here; it is not a new kind of current.
### Estimate, difference and time derivative (hat, ˆ, δ, Δ, dot, qdot, idot, ż)
Marks over a symbol tell you which version, change or bound is meant.
Units: depends on quantity; derivative adds /s. A hat denotes an estimate; δ often a difference or perturbation; Δ can denote a final-minus-initial change or a supplied error bound, according to the contract; a dot is a time derivative.
- Δa and ΔM in these contracts are error-bound radii, not temporal changes. Every symbol needs declared units; ż is velocity, not position.
### Matrix, transpose, diagonal and inverse (T, diag, Z^-1, matrix)
A matrix collects several linked equations into one map.
Units: depends on its mapping. Transpose T swaps rows/columns; diag forms a diagonal matrix; inverse undoes an invertible map.
- A matrix inverse is not defined at a singular parameter choice.
### Rank, nullity and kernel (rank, nullity, kernel)
Some different inputs can produce exactly the same observations.
Units: counts of real or complex dimensions, explicitly declared. Rank counts independent observed directions; nullity counts unobserved directions; a kernel vector maps to zero.
- State whether dimensions are real or complex. A nonzero kernel defeats unique reconstruction.
### Determinant and conditioning (det, 1−aβ, conditioning)
A determinant can reveal when a square map cannot be inverted.
Units: depends on matrix units; dimensionless for witness map. The witness map is singular when 1−aβ=0; conditioning describes sensitivity near inversion.
- A small numerical residual is not a guarantee of stable physical inference.
### Signal and nuisance contributions (s, b, y)
The receiver can mix the intended signal with ordinary background.
Units: volt (V), complex peak. s is a stipulated receiver signal, b a witness-equivalent nuisance and y their combined effective receiver voltage.
- A recovered same-port signal is not automatically an exotic physical source.
### Calibrated witness-equivalent voltage (w, W)
A witness channel observes a declared background reference.
Units: volt (V), complex peak. The variable w is a calibrated equivalent voltage, not automatically the raw pickup-coil voltage.
- w is not work; a label W on a recorder identifies its role, not watts.
### Nuisance transfer (a, ahat)
Transfer tells how the background enters the receiver.
Units: complex dimensionless ratio. a maps witness-equivalent nuisance voltage into receiver effective voltage at one selected frequency.
- Geometry alone does not calibrate a; unknown transfer can preserve rival explanations.
### Transfer uncertainty radius (Δa, Delta\_a)
The contract places a bound on how much the transfer ratio may be wrong.
Units: dimensionless. Δa bounds the magnitude of the difference between true and estimated complex nuisance transfer.
- It is not a voltage or a final-minus-initial time change; the bound is supplied, not measured here.
### Signal leakage into the witness (β, beta)
A reference channel can accidentally contain the signal too.
Units: complex dimensionless ratio. β maps the intended receiver signal into the witness channel.
- This β is not a pressure-reflection coefficient or a statistical error probability.
### Deterministic reconstruction disk (reconstruction\_disk, disk, εy, εw)
The stated assumptions bound the reconstruction inside a disk.
Units: volt (V). Triangle inequalities propagate supplied complex error radii into a worst-case voltage radius.
- A deterministic bound is not a confidence interval or evidence of a new force.
### Numerical sample and grid counts (frequency\_points, load\_points, transient\_samples, error\_phase\_points, boundary\_phase\_points)
A grid count says how many numerical evaluations were requested.
Units: integer count, dimensionless. These are computational sampling choices, not counts of physical measurements or participants.
- More grid points do not themselves establish model accuracy or experimental replication.
### Dimensionless witness-leakage path (t, crossleak\_path\_t)
This parameter moves along a family of leakage settings.
Units: dimensionless. In the R3 conditioning probe, β=t/a so aβ=t. At t=1 the witness map is singular.
- This t is not elapsed time in seconds or the acoustic path delay.
### SI and unit prefixes (SI, m, cm, mm, µ, milli, micro, nano)
SI is the international system of measurement units.
Units: declared physical unit. cm=0.01 m, mm=0.001 m, µ=10⁻⁶, milli=10⁻³ and nano=10⁻⁹ of the stated unit.
- A source drawing in cm or mm is not silently a metres-based parts table.
### Scalable Vector Graphics (SVG)
SVG stores a drawing as shapes and text.
Units: file format; no physical unit. A vector drawing can retain dimensions and annotations independently of display resolution.
- A precise-looking SVG is not a validated construction drawing.
### JavaScript Object Notation (JSON)
JSON stores structured data that can be exported and inspected.
Units: data format; no physical unit. A receipt encodes declared inputs, outputs and provenance as text records.
- Serialization does not authenticate a claim or measure a device.
### SHA-256 content digest (SHA-256, SHA256)
A digest helps compare whether two files have the same bytes.
Units: 256-bit digest. SHA means Secure Hash Algorithm; the digest identifies content under the named algorithm.
- A matching digest proves neither the truth of content nor its author.

## Source-declared variables and parameters
### docs/contracts/R3.json
Only the actual state\_and\_units and parameters keys are audited. Equation prose, other sections and future unknown keys are not automatically interpreted or scientifically validated.
- state\_and\_units.s: "stipulated signal contribution at receiver port, complex V peak". Stipulated signal contribution at the receiver port. Unit: V complex peak. Physical identity is not established by algebraic separation.
- state\_and\_units.b: "environmental witness-equivalent nuisance, complex V peak". Environmental witness-equivalent nuisance voltage. Unit: V complex peak. Equivalent signal quantity, not a measured magnetic field.
- state\_and\_units.y: "reconstructed receiver effective voltage, complex V peak". Reconstructed effective receiver voltage. Unit: V complex peak. Contains signal and nuisance transfer.
- state\_and\_units.w: "calibrated witness-equivalent voltage, complex V peak; not automatically raw coil voltage". Calibrated witness-equivalent voltage. Unit: V complex peak. Not automatically a raw coil voltage or work.
- state\_and\_units.a: "complex dimensionless nuisance-to-receiver transfer". Nuisance-to-receiver transfer ratio. Unit: complex dimensionless. Needs separate calibration.
- state\_and\_units.beta: "complex dimensionless signal leakage into witness". Signal leakage into the witness. Unit: complex dimensionless. Not the acoustic reflection coefficient.
- state\_and\_units.epsilon\_y,epsilon\_w: "supplied deterministic complex measurement-error radii, V". Supplied measurement-error radii for receiver and witness. Unit: V. Deterministic bounds, not experimental uncertainty estimates.
- state\_and\_units.Delta\_a: "supplied complex transfer uncertainty radius, dimensionless". Supplied uncertainty radius of transfer a. Unit: dimensionless. Not a voltage or temporal increment.
- parameters.signal\_amplitude\_V: 0.005. Synthetic signal contribution amplitude. Unit: V peak. A stipulated fixture, not a measured novel field.
- parameters.signal\_phase\_rad: 1.0471975511965976. Selected signal phase. Unit: rad. Relative to the shared complex reference.
- parameters.background\_amplitude\_V: 0.02. Synthetic nuisance-equivalent amplitude. Unit: V peak. An effective voltage, not field strength.
- parameters.background\_phase\_rad: 0.5235987755982988. Selected nuisance phase. Unit: rad. Relative phase in the fixed-frequency model.
- parameters.nominal\_transfer\_a: \[0.6,0.2\]. Nominal transfer as real and imaginary components. Unit: complex dimensionless. Two array coordinates, not separate measurements.
- parameters.receiver\_error\_bound\_V: 0.002. Supplied receiver effective-voltage error radius. Unit: V. A new stipulated R3 bound; no real sensor performance claimed.
- parameters.witness\_error\_bound\_V: 0.0005. Supplied witness equivalent-voltage error radius. Unit: V. Deterministic bound, not confidence.
- parameters.transfer\_error\_bound: 0.02. Supplied complex transfer-error radius. Unit: dimensionless. Matches Δa, not volts.
- parameters.boundary\_phase\_points: 8. Number of directions sampled on an error boundary. Unit: integer count. Finite numerical probe, not calibrated coverage probability.
- parameters.crossleak\_path\_t: \[0,0.25,0.5,0.9,0.99,1,1.01,1.1\]. Selected leakage-path values along β=t/a. Unit: dimensionless. t=1 is singular; this t is not time.

## Source hierarchy
### Why this subject is here
Historical or external publications provide context; their claims and reading depth do not become new measurements.
- NT-ABRA2021 · Calibration and Supplementary III, magnet-off veto, moving/background lines and fringe-field vibration — https://arxiv.org/html/2102.06722v1; Frozen contract reports: Source researcher selected full-text reading; advisor opened source and read report. This is not a new primary-source reading.
### How the model or drawing was declared
Pinned source records and contracts identify assumptions. Drawing geometry does not determine missing electrical or material properties.
- newton-tesla-research-lab/data/setups.json — https://github.com/occult-kranti/newton-tesla-research-lab/blob/2faece1d6dde6be63f7758c2754a0369d1a34fce/data/setups.json; Local source file read directly by registry generator; upstream primary publications retain their separate source-ledger reading depth.
- newton-tesla-research-lab/docs/contracts/R3.json — https://github.com/occult-kranti/newton-tesla-research-lab/blob/2faece1d6dde6be63f7758c2754a0369d1a34fce/docs/contracts/R3.json; Local source file read directly by registry generator; upstream primary publications retain their separate source-ledger reading depth.
- newton-tesla-research-lab/docs/apparatus.md — https://github.com/occult-kranti/newton-tesla-research-lab/blob/2faece1d6dde6be63f7758c2754a0369d1a34fce/docs/apparatus.md; Local source file read directly by registry generator; upstream primary publications retain their separate source-ledger reading depth.
### Which file was viewed
Source and already-served copies are different observations. A content hash identifies bytes, not scientific truth, authorship certification or construction readiness.
- Third pickup and isolated differential leads — https://github.com/occult-kranti/newton-tesla-research-lab/blob/2faece1d6dde6be63f7758c2754a0369d1a34fce/assets/setups/environmental-witness-plan.svg; Pinned artifact reference; no physical apparatus verification follows.
- Deterministic witness coordinate 3D — https://github.com/occult-kranti/newton-tesla-research-lab/blob/2faece1d6dde6be63f7758c2754a0369d1a34fce/assets/setups/environmental-witness-3d.png; Pinned artifact reference; no physical apparatus verification follows.
- Calibration, subtraction and cross-leak map — https://github.com/occult-kranti/newton-tesla-research-lab/blob/2faece1d6dde6be63f7758c2754a0369d1a34fce/assets/setups/environmental-witness-map.svg; Pinned artifact reference; no physical apparatus verification follows.

Explicit guide and selected contextual terms for this record; not automatic coverage of every raw source symbol or an exhaustive technical dictionary.
