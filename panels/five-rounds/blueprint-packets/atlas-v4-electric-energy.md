# Series RLC: source, load and stored energy
Record: atlas:v4-electric-energy · exact SVG circuit and measurement-boundary diagram · proposed\_unbuilt

Exact R3 model topology; a physical measurement arrangement is proposed and unbuilt. Voltage gain can exceed one while source work closes against load heat, internal loss and storage change. Probe symbols indicate waveform acquisition, not slow-meter readings; real sensor loading and bandwidth need characterization.

## What this study asks
Follow one series resistance–inductance–capacitance energy account and see why a large component voltage need not imply energy gain.

## Follow the signal or force
1. A declared source supplies current through the series circuit.
2. Resistance dissipates energy while inductance and capacitance store and return energy.
3. Integrate signed source power and compare load heat, internal losses and the storage change.

## What is declared
- The source caption identifies an exact numerical model topology and a proposed unbuilt measurement arrangement.
- Probe symbols denote waveform acquisition, not complete information from a slow meter.
- Original source status: proposed\_unbuilt.

## What remains unknown
- Physical probe bandwidth, loading, calibration and real component ratings are not inferred.
- The source drawing does not supply a complete normalized manufacturing or parts specification.

## Measurement checklist for a future study
- Acquire simultaneous voltage and current waveforms with signs and time alignment.
- Include endpoint stored energy and every implemented loss/source in the finite-time account.

## Questions before interpreting a result
- Is the comparison about voltage, power or energy?
- Which source of stored energy is present at the start of the window?
- Does a sensor alter the circuit being measured?

## Limits
- All apparatus is proposed and unbuilt. Geometry is not a physical measurement or a calibration.
- Exact R3 model topology; a physical measurement arrangement is proposed and unbuilt. Voltage gain can exceed one while source work closes against load heat, internal loss and storage change. Probe symbols indicate waveform acquisition, not slow-meter readings; real sensor loading and bandwidth need characterization.
- Detailed parts, coordinates and calibration are not inferred from the image. Inspect the pinned apparatus documentation.
- This guide explains the declared study. It supplies no missing engineering specification, calibration, purchase requirement or construction approval.

## Symbols and short forms
### Inductance (L, L1, L2)
Inductance tells how current stores magnetic energy.
Units: henry (H). A scalar coil coefficient or symmetric inductance matrix, according to the attached contract.
- Drawing diameter and turns are not a measured inductance.
### Mutual inductance (M)
Changing current in one coil can induce voltage in another.
Units: henry (H). The signed cross-coil coefficient; its sign depends on the chosen winding/dot convention.
- Mutual coupling does not supply energy.
### Coupling coefficient (k)
Coupling describes how strongly two modeled coils interact.
Units: dimensionless. In this passive positive-definite two-coil fixture, M = k√(L1 L2) and \|k\| &lt; 1.
- A selected k is not a measured coil calibration.
### Capacitance (C, C1, C2)
A capacitor stores energy in an electric field.
Units: farad (F). The capacitance coefficient; it is not the mathematical field of complex numbers ℂ.
- C as capacitance differs from C used for coulombs or ℂ.
### Resistance and useful load (R, R1, R2, RL, Rload, Rloss, Ri)
Resistance converts electrical energy to heat.
Units: ohm (Ω). The receiving load and winding/internal losses are accounted for separately.
- R1 can also name a research round; ℝ denotes real numbers, not resistance.
### Electric charge (q)
Charge measures how much electricity has accumulated.
Units: coulomb (C). q is an instantaneous scalar or vector; its time derivative is current.
- The unit C means coulomb here, not capacitance.
### Electrical current (i, I, I1, I2)
Current is the flow rate of electric charge.
Units: ampere (A). Lowercase i(t) is instantaneous; uppercase I is a phasor whose peak/RMS convention must be declared.
- The imaginary unit i in an impedance equation is a different meaning.
### Voltage and source-port drive (v, V, e1, e2, Vc, Vs, Vl)
Voltage is electrical potential difference between two points.
Units: volt (V). Instantaneous voltages and complex source-port phasors are distinct representations.
- A source knob is not automatically a measured port voltage; declare peak or RMS.
### Angular frequency (ω, omega)
Angular frequency counts how quickly a cycle turns through angle.
Units: radian per second (rad/s). One cycle is 2π radians, so ω = 2π f.
- Radians per second and hertz differ by 2π.
### Impedance and reactance (Z, X, Z11, Z22, Z12)
Impedance describes opposition to an alternating current.
Units: ohm (Ω). Complex impedance combines resistance with reactive phase response; X = ωL − 1/(ωC) in the host series circuit.
- Voltage magnification across storage elements is not power gain.
### Real average power (P, Pin, Psource, Pload, Ploss)
Power is the rate at which energy is transferred.
Units: watt (W), equivalent to J/s. Real average source power uses the real part of voltage times conjugate current, with a convention-dependent factor.
- Peak phasors need a factor ½; RMS phasors do not.
### Stored energy (E, ΔE)
Energy can remain in the capacitor and magnetic field.
Units: joule (J). Initial and final stored states belong in a finite-time source-work budget.
- Released initial energy is not unexplained energy production.
### Work transferred over time (W, Win, Wload, Wloss)
Work is energy transferred during a chosen interval.
Units: joule (J). Integrating signed instantaneous power gives work; uppercase W here is a variable, while W after a number is the watt unit.
- Lowercase w in the witness contract denotes a voltage, not work.
### Root mean square (RMS, Vrms, Irms)
RMS is the square root of the mean squared signal.
Units: same unit as the signal. For a pure sine only, peak amplitude is √2 times RMS. For a fixed resistor, RMS determines average heating.
- RMS is not the arithmetic mean or a universal peak conversion.
### Peak amplitude (peak, Vpeak, Ipeak)
Peak amplitude is the largest excursion from zero.
Units: same unit as the signal. The imported R1/R2/R3 electrical phasors use peak amplitude, while the host circuit inputs use RMS.
- Sample peak, reconstructed true peak and acoustic pressure peak are different measurements.
### Not to scale (NTS, not to scale)
A sketch may show relationships without preserving size ratios.
Units: drawing convention; not a measurement. Use written dimensions and declared coordinate units rather than measuring screen pixels.
- An accurate-looking diagram is not an engineering drawing or a calibrated photograph.
### Estimate, difference and time derivative (hat, ˆ, δ, Δ, dot, qdot, idot, ż)
Marks over a symbol tell you which version, change or bound is meant.
Units: depends on quantity; derivative adds /s. A hat denotes an estimate; δ often a difference or perturbation; Δ can denote a final-minus-initial change or a supplied error bound, according to the contract; a dot is a time derivative.
- Δa and ΔM in these contracts are error-bound radii, not temporal changes. Every symbol needs declared units; ż is velocity, not position.
### Matrix, transpose, diagonal and inverse (T, diag, Z^-1, matrix)
A matrix collects several linked equations into one map.
Units: depends on its mapping. Transpose T swaps rows/columns; diag forms a diagonal matrix; inverse undoes an invertible map.
- A matrix inverse is not defined at a singular parameter choice.
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

## Source hierarchy
### Why this subject is here
Historical or external publications provide context; their claims and reading depth do not become new measurements.
### How the model or drawing was declared
Pinned source records and contracts identify assumptions. Drawing geometry does not determine missing electrical or material properties.
- resonance-research-atlas/docs/panel-v4/setup-catalog.json — https://github.com/occult-kranti/resonance-research-atlas/blob/aabc79d42adf4b72677fdd8e45fbade76b159192/docs/panel-v4/setup-catalog.json; Local source file read directly by registry generator; upstream primary publications retain their separate source-ledger reading depth.
- resonance-research-atlas/docs/panel-v4/apparatus.md — https://github.com/occult-kranti/resonance-research-atlas/blob/aabc79d42adf4b72677fdd8e45fbade76b159192/docs/panel-v4/apparatus.md; Local source file read directly by registry generator; upstream primary publications retain their separate source-ledger reading depth.
### Which file was viewed
Source and already-served copies are different observations. A content hash identifies bytes, not scientific truth, authorship certification or construction readiness.
- assets/sound-lab-v4/electrical-energy-boundary.svg — https://github.com/occult-kranti/resonance-research-atlas/blob/aabc79d42adf4b72677fdd8e45fbade76b159192/assets/sound-lab-v4/electrical-energy-boundary.svg; Pinned artifact reference; no physical apparatus verification follows.

Explicit guide and selected contextual terms for this record; not automatic coverage of every raw source symbol or an exhaustive technical dictionary.
