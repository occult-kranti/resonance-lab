# Coupled-coil energy and phase bench
Record: nt:coupled-coils · setup family · proposed\_unbuilt

An adjustable low-voltage, two-loop bench with complete energy accounting and simultaneous phase-resolved readout.

## What this study asks
Follow the energy supplied to one electrical loop, transferred to a second loop, dissipated as heat and temporarily stored. A higher receiving voltage is not automatically more output energy.

## Follow the signal or force
1. Start with the declared source voltage and the current it supplies to the first loop.
2. The two coils couple through their magnetic fields. The receiving loop also changes the load seen by the source.
3. Separate useful-load heating from winding loss and energy still stored in inductors and capacitors.
4. Compare the complete signed energy account and phase-aware observations, not just the largest displayed voltage.

## What is declared
- This is one proposed setup family with separate R1 forward-energy and R2 reconstruction contracts.
- The drawing supplies proposed placement geometry; the contracts separately stipulate numerical component values.
- The frozen R1 coupled fixture declares 1 V peak at its source. The separate host series-RLC default declares 0.15 V RMS (root mean square), about 0.212 V peak for a sine. These are different examples and circuit topologies; no normalization or parameter transfer is implied.
- Original source status: proposed\_unbuilt.

## What remains unknown
- Coil turns, wire gauge, core choice and real parasitic effects are not specified as a validated build.
- Actual inductance, mutual coupling, resistance, source impedance and readout loading require measurement.
- Component voltage/current/power ratings, tolerances and validated assembly instructions are not supplied by the numerical fixture.

## Measurement checklist for a future study
- Record source voltage, primary current, receiver current and load voltage on a common calibrated timebase.
- Record initial and final capacitor voltages and coil currents before comparing finite-time energy.
- Characterize signed mutual coupling and both self-inductances at each proposed gap.
- Simultaneous source voltage, primary current, receiver current and load voltage with a common timebase and calibrated channel phase.
- For transient storage: endpoint currents and capacitor voltages with sign conventions retained.
- Separate L1, L2 and signed M characterization at every gap; include winding and source losses.
- Receiver loop floats; differential readout must preserve isolation. All sensor burden enters the implemented model.

## Questions before interpreting a result
- Does changing the receiving load also change the demand on the source?
- Which voltage convention is used: peak phasor or root mean square?
- Could omitted stored energy, phase error or sensor loading explain the apparent gain?

## Limits
- The R1/R2 lumped circuit is a numerical fixture. Pack dimensions do not derive L, M, resistance, capacitance or sensor performance.
- Unbuilt layout, no experimental observation or detector sensitivity.
- Turns, wire gauge, core, parasitics and actual L/M remain unspecified; this is not a validated construction kit.
- An inferred effective receiver-port source is not a physical-cause identification.
- Optional receiver injection is a deliberate positive control whose work must be included.
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
### Voltage reconstruction-error disk (reconstruction\_disk)
A deterministic disk bounds how far the estimated voltage can be wrong.
Units: volt (V). The supplied current/component error radii are propagated into a complex voltage-error radius.
- This is not a statistical confidence region or a claim of sensor calibration.
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
### Jacobian and local reconstruction (Jacobian)
A Jacobian describes how small input changes affect observations.
Units: output unit / input unit per entry. It is the derivative matrix of a nonlinear observation map at one input.
- Local rank does not by itself prove global uniqueness; zero-current boundaries can change rank.
### Determinant and conditioning (det, 1−aβ, conditioning)
A determinant can reveal when a square map cannot be inverted.
Units: depends on matrix units; dimensionless for witness map. The witness map is singular when 1−aβ=0; conditioning describes sensitivity near inversion.
- A small numerical residual is not a guarantee of stable physical inference.
### Positive-definite stored-energy form (positive definite, \|k\|&lt;1)
A positive-definite energy form is positive for every nonzero state.
Units: energy form yields joules. The passive two-coil fixture uses positive L1/L2 and \|k\|&lt;1 to ensure a positive-definite inductance matrix.
- This declared ideal model does not prove a real apparatus is passive.
### Numerical sample and grid counts (frequency\_points, load\_points, transient\_samples, error\_phase\_points, boundary\_phase\_points)
A grid count says how many numerical evaluations were requested.
Units: integer count, dimensionless. These are computational sampling choices, not counts of physical measurements or participants.
- More grid points do not themselves establish model accuracy or experimental replication.
### Simulation time window (transient\_end\_s)
A time window sets how long the model is evaluated.
Units: second (s). The endpoint and sample counts describe a computational transient, not an operated apparatus.
- A requested sample count and duration do not establish real recorder bandwidth.
### Normalized frequency domain (frequency\_ratio\_domain)
A ratio compares the selected frequency with the model’s reference frequency.
Units: dimensionless frequency ratio. The R1 frequency sweep spans a declared multiple of the nominal resonant angular frequency.
- A ratio is not a new absolute frequency measurement.
### Positive load sweep domain (load\_log\_domain\_ohm, loads\_ohm, nominal\_load\_ohm)
The model tries stated receiver-load resistances.
Units: ohm (Ω). The positive endpoint domain supports a logarithmically spaced numerical sweep; the reported resistance values still have ohm units.
- A logarithmic grid does not mean the displayed resistance has logarithmic units.
### Inherited model fixture (inherits)
A later contract can reuse declared parameters from an earlier model.
Units: configuration reference; no physical unit. R2 explicitly inherits the R1 nominal circuit; missing values are not independently measured.
- Inheritance is a computational dependency, not independent evidence.
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
### docs/contracts/R1.json
Only the actual state\_and\_units and parameters keys are audited. Equation prose, other sections and future unknown keys are not automatically interpreted or scientifically validated.
- state\_and\_units.q: "charge vector, C". Instantaneous charge vector. Unit: C. Time-domain state, not a phasor.
- state\_and\_units.i: "current vector, A". Instantaneous current vector. Unit: A. Time-domain state; i elsewhere in complex impedance can mean the imaginary unit.
- state\_and\_units.L: "symmetric inductance matrix, H". Symmetric inductance matrix coupling both coils. Unit: H. Includes self and mutual inductances.
- state\_and\_units.C: "positive diagonal capacitances, F". Positive diagonal capacitances. Unit: F. Capacitance, not the complex-number domain.
- state\_and\_units.R: "series resistances including receiver load, ohm". Series resistances including receiving load. Unit: Ω. A component model, not the real-number domain.
- state\_and\_units.v: "source voltage, V". Supplied source voltage. Unit: V. Instantaneous drive in transient model; source phasor convention separately peak.
- state\_and\_units.E: "stored electrical/magnetic energy, J". Stored electrical and magnetic energy. Unit: J. Computed from instantaneous state.
- state\_and\_units.omega: "angular frequency, rad/s". Angular frequency of the drive. Unit: rad/s. ω=2πf, not directly hertz.
- state\_and\_units.P: "cycle-average real power, W". Cycle-average real power. Unit: W. Peak-amplitude phasor convention includes factor ½.
- parameters.L1\_H: 0.01. First coil self-inductance. Unit: H. Stipulated ideal model coefficient.
- parameters.L2\_H: 0.04. Second coil self-inductance. Unit: H. Stipulated ideal model coefficient.
- parameters.C1\_F: 0.00001. First circuit capacitance. Unit: F. Stipulated component value.
- parameters.C2\_F: 0.0000025. Second circuit capacitance. Unit: F. Stipulated component value.
- parameters.k: 0.15. Signed coil coupling coefficient. Unit: dimensionless. M=k√(L1 L2); positive-definite fixture requires \|k\|&lt;1.
- parameters.M\_H: 0.003. Mutual inductance between coils. Unit: H. Signed winding convention belongs to the model.
- parameters.R1\_ohm: 2. First winding resistance. Unit: Ω. Here R1 is a component value, not the round identifier.
- parameters.R2\_ohm: 3. Second winding resistance. Unit: Ω. Receiving load is accounted separately.
- parameters.source\_peak\_V: 1. Peak source-voltage amplitude. Unit: V peak. This 1 V peak source is not the host RMS default.
- parameters.loads\_ohm: \[1,5,20,100\]. Explicit load values examined. Unit: Ω. Numerical model selections, not measured samples.
- parameters.nominal\_load\_ohm: 20. Nominal receiving load. Unit: Ω. Reference fixture resistance.
- parameters.frequency\_ratio\_domain: \[0.3,1.7\]. Endpoints of the normalized drive-frequency sweep. Unit: dimensionless ratio. Ratio to the model reference angular frequency.
- parameters.frequency\_points: 701. Number of frequency evaluations. Unit: integer count. Computational grid size, not observations.
- parameters.load\_log\_domain\_ohm: \[1,1000\]. Positive resistance endpoints for a log-spaced load grid. Unit: Ω. Actual endpoint units remain ohms.
- parameters.load\_points: 401. Number of load-grid evaluations. Unit: integer count. Computational grid size.
- parameters.transient\_end\_s: 0.25. End time of the transient calculation. Unit: s. Model time after zero initial charge/current.
- parameters.transient\_samples: \[5001,10001\]. Sample counts used for transient convergence comparison. Unit: integer counts. Two model discretizations; not physical recorder measurements.
### docs/contracts/R2.json
Only the actual state\_and\_units and parameters keys are audited. Equation prose, other sections and future unknown keys are not automatically interpreted or scientifically validated.
- state\_and\_units.e1,e2: "unknown complex effective peak source voltages, V; domain C² = R⁴". Unknown effective source-port voltages. Unit: V complex peak. Two complex values are four real unknown coordinates.
- state\_and\_units.I1,I2: "complex peak currents, A". Complex currents at the two ports. Unit: A complex peak. Peak amplitudes; coherent readout retains relative phase.
- state\_and\_units.squared\_magnitudes: "A²". Squared current magnitudes. Unit: A². Phase is discarded; units are squared amperes.
- state\_and\_units.M: "mutual inductance, H". Mutual inductance used in reconstruction. Unit: H. Its supplied uncertainty is separate.
- state\_and\_units.omega: "rad/s". Selected angular frequency. Unit: rad/s. Inherited nominal R1 reference.
- state\_and\_units.phase: "rad". Relative complex phase. Unit: rad. A radian is an angular unit.
- state\_and\_units.reconstruction\_disk: "deterministic complex voltage-error disk, V; not a confidence interval". Deterministic complex voltage-error region. Unit: V. Not a statistical confidence interval.
- parameters.inherits: "R1 nominal inductances, capacitances, R1,R2,RL20ohm, omega0". Reuses the specified nominal R1 circuit and frequency. Unit: configuration reference. Dependency declaration, not a new measurement.
- parameters.source1\_complex\_V: \[1,0\]. First source voltage as real and imaginary components. Unit: V complex peak. The two array entries are not two time samples.
- parameters.injected\_receiver\_amplitude\_V: 0.005. Stipulated amplitude of the second effective drive. Unit: V peak. A synthetic injected fixture, not an observed exotic source.
- parameters.injected\_receiver\_phase\_rad: 1.0471975511965976. Phase of the synthetic second drive. Unit: rad. Declared relative to the model reference.
- parameters.current\_error\_bounds\_A: \[0.00001,0.00001\]. Supplied complex current-error radii for both currents. Unit: A. Deterministic magnitude bounds; not confidence intervals.
- parameters.mutual\_inductance\_error\_bound\_H: 0.000003. Supplied error radius for mutual inductance. Unit: H. ΔM denotes uncertainty here, not time evolution.
- parameters.error\_phase\_points: 8. Number of boundary-phase directions sampled. Unit: integer count. Numerical error-fixture grid, not participant count.
- parameters.phase\_error\_grid\_rad: \[0,0.001,0.003,0.01\]. Selected phase miscalibrations applied to measured current. Unit: rad. Synthetic error-control values.
- parameters.finite\_rival\_receiver\_phase\_rotation\_rad: 1.5707963267948966. Finite current-phase rotation used to construct a rival drive. Unit: rad. Tests identical restricted observations, not a detection.

## Source hierarchy
### Why this subject is here
Historical or external publications provide context; their claims and reading depth do not become new measurements.
- TESLA-1892 · Coil construction; capacity/self-induction adjustment; losses — https://www.gutenberg.org/files/13476/old/13476-h/13476-h.htm; Frozen contract reports: Skill reference selected passages; source agent will separately document direct project reading. This is not a new primary-source reading.
- ATLAS-V4-R3 · R3 electrical energy budget — https://github.com/occult-kranti/resonance-research-atlas/tree/main/research/sound-lab-v4; Frozen contract reports: Recovered prior project result in session; no physical data. This is not a new primary-source reading.
- NT-ABRA2021 · Supplementary III calibration EqS1; magnet-off/background controls — https://arxiv.org/html/2102.06722v1; Frozen contract reports: Source agent selected full-text reading; advisor opened paper. This is not a new primary-source reading.
- NT-DMRADIO-CORE2026 · II, III.1 and III.2 pickup/readout and phase coherence — https://arxiv.org/html/2604.16602v1; Frozen contract reports: Advisor selected full-text reading; Eq2 frequency notation inconsistency recorded by source agent. This is not a new primary-source reading.
### How the model or drawing was declared
Pinned source records and contracts identify assumptions. Drawing geometry does not determine missing electrical or material properties.
- newton-tesla-research-lab/data/setups.json — https://github.com/occult-kranti/newton-tesla-research-lab/blob/2faece1d6dde6be63f7758c2754a0369d1a34fce/data/setups.json; Local source file read directly by registry generator; upstream primary publications retain their separate source-ledger reading depth.
- newton-tesla-research-lab/docs/contracts/R1.json — https://github.com/occult-kranti/newton-tesla-research-lab/blob/2faece1d6dde6be63f7758c2754a0369d1a34fce/docs/contracts/R1.json; Local source file read directly by registry generator; upstream primary publications retain their separate source-ledger reading depth.
- newton-tesla-research-lab/docs/contracts/R2.json — https://github.com/occult-kranti/newton-tesla-research-lab/blob/2faece1d6dde6be63f7758c2754a0369d1a34fce/docs/contracts/R2.json; Local source file read directly by registry generator; upstream primary publications retain their separate source-ledger reading depth.
- newton-tesla-research-lab/docs/apparatus.md — https://github.com/occult-kranti/newton-tesla-research-lab/blob/2faece1d6dde6be63f7758c2754a0369d1a34fce/docs/apparatus.md; Local source file read directly by registry generator; upstream primary publications retain their separate source-ledger reading depth.
### Which file was viewed
Source and already-served copies are different observations. A content hash identifies bytes, not scientific truth, authorship certification or construction readiness.
- Dimensioned conductive-loop plan — https://github.com/occult-kranti/newton-tesla-research-lab/blob/2faece1d6dde6be63f7758c2754a0369d1a34fce/assets/setups/coupled-coils-plan.svg; Pinned artifact reference; no physical apparatus verification follows.
- Coil spacing and elevation — https://github.com/occult-kranti/newton-tesla-research-lab/blob/2faece1d6dde6be63f7758c2754a0369d1a34fce/assets/setups/coupled-coils-elevation.svg; Pinned artifact reference; no physical apparatus verification follows.
- Dot convention and complete energy boundary — https://github.com/occult-kranti/newton-tesla-research-lab/blob/2faece1d6dde6be63f7758c2754a0369d1a34fce/assets/setups/coupled-coils-circuit.svg; Pinned artifact reference; no physical apparatus verification follows.
- Deterministic coordinate 3D — https://github.com/occult-kranti/newton-tesla-research-lab/blob/2faece1d6dde6be63f7758c2754a0369d1a34fce/assets/setups/coupled-coils-3d.png; Pinned artifact reference; no physical apparatus verification follows.
- Coherent two-current observation — https://github.com/occult-kranti/newton-tesla-research-lab/blob/2faece1d6dde6be63f7758c2754a0369d1a34fce/assets/setups/coherent-readout.svg; Pinned artifact reference; no physical apparatus verification follows.

Explicit guide and selected contextual terms for this record; not automatic coverage of every raw source symbol or an exhaustive technical dictionary.
