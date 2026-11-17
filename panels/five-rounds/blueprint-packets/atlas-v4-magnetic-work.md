# Magnetic storage and mechanical work
Record: atlas:v4-magnetic-work · exact SVG electromechanical model boundary · proposed\_unbuilt

R4 analytic model schematic, not measured apparatus. The current is 0.2 A, the hypothetical inductance law is 0.01 plus 0.1z henries, and the imposed motion takes 0.2 s. Magnetic storage and mechanical output each receive 40 microjoules from the source. This is separate from the qualitative permanent-magnet bench.

## What this study asks
Read the hypothetical variable-inductance account as a model of source energy, magnetic storage and mechanical work—not the permanent-magnet balance experiment.

## Follow the signal or force
1. The source maintains the stipulated current while the modeled inductance changes with position.
2. Account for both magnetic stored-energy change and mechanical output.
3. Keep the imposed motion, model parameters and source work inside the same boundary.

## What is declared
- The caption declares a hypothetical analytic model with chosen current, inductance law and imposed motion.
- Its numerical energy split is a calculation under those assumptions, not a measured apparatus output.
- Original source status: proposed\_unbuilt.

## What remains unknown
- A real actuator, inductance-versus-position law, friction, controller losses and component ratings are not specified or calibrated.
- The source has no normalized construction-ready parts list for this drawing view.

## Measurement checklist for a future study
- A future physical study would synchronize current, voltage, position and mechanical-force records.
- Include motion-control power, losses and initial/final magnetic storage.

## Questions before interpreting a result
- Is the inductance law measured or stipulated?
- Who imposes the motion and supplies its work?
- Has the model been mistaken for the separate permanent-magnet control?

## Limits
- All apparatus is proposed and unbuilt. Geometry is not a physical measurement or a calibration.
- R4 analytic model schematic, not measured apparatus. The current is 0.2 A, the hypothetical inductance law is 0.01 plus 0.1z henries, and the imposed motion takes 0.2 s. Magnetic storage and mechanical output each receive 40 microjoules from the source. This is separate from the qualitative permanent-magnet bench.
- Detailed parts, coordinates and calibration are not inferred from the image. Inspect the pinned apparatus documentation.
- This guide explains the declared study. It supplies no missing engineering specification, calibration, purchase requirement or construction approval.

## Symbols and short forms
### Inductance (L, L1, L2)
Inductance tells how current stores magnetic energy.
Units: henry (H). A scalar coil coefficient or symmetric inductance matrix, according to the attached contract.
- Drawing diameter and turns are not a measured inductance.
### Resistance and useful load (R, R1, R2, RL, Rload, Rloss, Ri)
Resistance converts electrical energy to heat.
Units: ohm (Ω). The receiving load and winding/internal losses are accounted for separately.
- R1 can also name a research round; ℝ denotes real numbers, not resistance.
### Electrical current (i, I, I1, I2)
Current is the flow rate of electric charge.
Units: ampere (A). Lowercase i(t) is instantaneous; uppercase I is a phasor whose peak/RMS convention must be declared.
- The imaginary unit i in an impedance equation is a different meaning.
### Voltage and source-port drive (v, V, e1, e2, Vc, Vs, Vl)
Voltage is electrical potential difference between two points.
Units: volt (V). Instantaneous voltages and complex source-port phasors are distinct representations.
- A source knob is not automatically a measured port voltage; declare peak or RMS.
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
### Calibration and deterministic error bounds (ε, epsilon, epsilon\_y, epsilon\_w, ΔM, Δa, Delta\_a)
Calibration connects instrument readings with a stated reference.
Units: unit of the bounded quantity. These contracts supply deterministic error radii in volts, amperes, henries or dimensionless transfer units, as declared.
- A stipulated error radius is not measured sensor performance or a confidence interval.
### Not to scale (NTS, not to scale)
A sketch may show relationships without preserving size ratios.
Units: drawing convention; not a measurement. Use written dimensions and declared coordinate units rather than measuring screen pixels.
- An accurate-looking diagram is not an engineering drawing or a calibrated photograph.
### Estimate, difference and time derivative (hat, ˆ, δ, Δ, dot, qdot, idot, ż)
Marks over a symbol tell you which version, change or bound is meant.
Units: depends on quantity; derivative adds /s. A hat denotes an estimate; δ often a difference or perturbation; Δ can denote a final-minus-initial change or a supplied error bound, according to the contract; a dot is a time derivative.
- Δa and ΔM in these contracts are error-bound radii, not temporal changes. Every symbol needs declared units; ż is velocity, not position.
### Contact and magnetic force (N, Fm, F, mg)
A magnet can change how strongly an object presses on a balance.
Units: newton (N). N is upward contact force; Fm is the stipulated upward magnetic force and mg the downward weight.
- A smaller contact reading does not establish changed gravity; N the variable differs from N the unit.
### Mass and gravitational acceleration (m, g)
Mass and gravitational acceleration together determine weight.
Units: kilogram (kg); metre per second squared (m/s²). In the static comparison g is stipulated as 9.80665 m/s², not inferred from a balance change.
- m as mass differs from m as the metre unit.
### Position, velocity and inductance gradient (z, ż, dL/dz)
Changing position can change the modeled inductance.
Units: m; m/s; H/m. z is prescribed position, ż its time derivative and dL/dz the stipulated inductance change per metre.
- This z is not impedance Z; prescribed motion is not a solved free trajectory.
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
- assets/sound-lab-v4/magnetic-work-boundary.svg — https://github.com/occult-kranti/resonance-research-atlas/blob/aabc79d42adf4b72677fdd8e45fbade76b159192/assets/sound-lab-v4/magnetic-work-boundary.svg; Pinned artifact reference; no physical apparatus verification follows.

Explicit guide and selected contextual terms for this record; not automatic coverage of every raw source symbol or an exhaustive technical dictionary.
