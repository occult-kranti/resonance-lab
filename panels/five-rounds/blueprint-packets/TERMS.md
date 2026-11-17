# Blueprint terminology handbook

Context-scoped definitions. A symbol may have different meanings in different models. Sources and units are declared per entry; this is not a new physical measurement.

## L / L1 / L2 — Inductance
Context: electricity · Stable ID: electricity.inductance
Unit: henry (H)

Inductance tells how current stores magnetic energy.

A scalar coil coefficient or symmetric inductance matrix, according to the attached contract.

Equation: E = ½ L i²

- Drawing diameter and turns are not a measured inductance.

## M — Mutual inductance
Context: electricity · Stable ID: electricity.mutual-inductance
Unit: henry (H)

Changing current in one coil can induce voltage in another.

The signed cross-coil coefficient; its sign depends on the chosen winding/dot convention.

- Mutual coupling does not supply energy.

## k — Coupling coefficient
Context: electricity · Stable ID: electricity.coupling
Unit: dimensionless

Coupling describes how strongly two modeled coils interact.

In this passive positive-definite two-coil fixture, M = k√(L1 L2) and |k| < 1.

Equation: M = k√(L1 L2)

- A selected k is not a measured coil calibration.

## C / C1 / C2 — Capacitance
Context: electricity · Stable ID: electricity.capacitance
Unit: farad (F)

A capacitor stores energy in an electric field.

The capacitance coefficient; it is not the mathematical field of complex numbers ℂ.

Equation: E = ½ C v²

- C as capacitance differs from C used for coulombs or ℂ.

## R / R1 / R2 / RL / Rload / Rloss / Ri — Resistance and useful load
Context: electricity · Stable ID: electricity.resistance
Unit: ohm (Ω)

Resistance converts electrical energy to heat.

The receiving load and winding/internal losses are accounted for separately.

Equation: P = I_rms² R

- R1 can also name a research round; ℝ denotes real numbers, not resistance.

## q — Electric charge
Context: electricity · Stable ID: electricity.charge
Unit: coulomb (C)

Charge measures how much electricity has accumulated.

q is an instantaneous scalar or vector; its time derivative is current.

Equation: dq/dt = i

- The unit C means coulomb here, not capacitance.

## i / I / I1 / I2 — Electrical current
Context: electricity · Stable ID: electricity.current
Unit: ampere (A)

Current is the flow rate of electric charge.

Lowercase i(t) is instantaneous; uppercase I is a phasor whose peak/RMS convention must be declared.

- The imaginary unit i in an impedance equation is a different meaning.

## v / V / e1 / e2 / Vc / Vs / Vl — Voltage and source-port drive
Context: electricity · Stable ID: electricity.voltage
Unit: volt (V)

Voltage is electrical potential difference between two points.

Instantaneous voltages and complex source-port phasors are distinct representations.

- A source knob is not automatically a measured port voltage; declare peak or RMS.

## ω / omega — Angular frequency
Context: electricity · Stable ID: electricity.angular-frequency
Unit: radian per second (rad/s)

Angular frequency counts how quickly a cycle turns through angle.

One cycle is 2π radians, so ω = 2π f.

Equation: ω = 2πf

- Radians per second and hertz differ by 2π.

## Z / X / Z11 / Z22 / Z12 — Impedance and reactance
Context: electricity · Stable ID: electricity.impedance
Unit: ohm (Ω)

Impedance describes opposition to an alternating current.

Complex impedance combines resistance with reactive phase response; X = ωL − 1/(ωC) in the host series circuit.

Equation: Z = R + jX

- Voltage magnification across storage elements is not power gain.

## P / Pin / Psource / Pload / Ploss — Real average power
Context: electricity · Stable ID: electricity.power
Unit: watt (W), equivalent to J/s

Power is the rate at which energy is transferred.

Real average source power uses the real part of voltage times conjugate current, with a convention-dependent factor.

- Peak phasors need a factor ½; RMS phasors do not.

## E / ΔE — Stored energy
Context: electricity · Stable ID: electricity.stored-energy
Unit: joule (J)

Energy can remain in the capacitor and magnetic field.

Initial and final stored states belong in a finite-time source-work budget.

Equation: E = ½Li² + ½CvC²

- Released initial energy is not unexplained energy production.

## W / Win / Wload / Wloss — Work transferred over time
Context: electricity · Stable ID: electricity.work
Unit: joule (J)

Work is energy transferred during a chosen interval.

Integrating signed instantaneous power gives work; uppercase W here is a variable, while W after a number is the watt unit.

Equation: Win = ∫v(t)i(t)dt

- Lowercase w in the witness contract denotes a voltage, not work.

## RMS / Vrms / Irms — Root mean square
Context: measurement · Stable ID: measurement.rms
Unit: same unit as the signal

RMS is the square root of the mean squared signal.

For a pure sine only, peak amplitude is √2 times RMS. For a fixed resistor, RMS determines average heating.

Equation: x_rms = √mean(x²); sine: x_peak = √2 x_rms

- RMS is not the arithmetic mean or a universal peak conversion.

## peak / Vpeak / Ipeak — Peak amplitude
Context: measurement · Stable ID: measurement.peak
Unit: same unit as the signal

Peak amplitude is the largest excursion from zero.

The imported R1/R2/R3 electrical phasors use peak amplitude, while the host circuit inputs use RMS.

- Sample peak, reconstructed true peak and acoustic pressure peak are different measurements.

## φ / phase / CH / CH1 / CH2 — Phase and coherent readout
Context: measurement · Stable ID: measurement.phase
Unit: radian (rad), or declared degrees

Phase locates one repeating signal relative to another.

Coherent complex readout preserves relative amplitude and phase under a declared shared reference.

- Sharing a sample clock does not establish equal gain, stable transfer or calibration.

## ε / epsilon / epsilon_y / epsilon_w / ΔM / Δa / Delta_a — Calibration and deterministic error bounds
Context: measurement · Stable ID: measurement.calibration
Unit: unit of the bounded quantity

Calibration connects instrument readings with a stated reference.

These contracts supply deterministic error radii in volts, amperes, henries or dimensionless transfer units, as declared.

- A stipulated error radius is not measured sensor performance or a confidence interval.

## pilot / drift / pre-roll — Drift, pilot and cross-talk
Context: measurement · Stable ID: measurement.drift
Unit: declared signal unit and time

A reference tone can help notice changes during a recording.

Pilot drift can arise in the source, path or recorder; pre-roll records the background before excitation, and cross-talk mixes channels.

- A stable pilot is not a calibration certificate; two microphones do not guarantee isolation.

## clipping / bandwidth — Clipping and bandwidth
Context: measurement · Stable ID: measurement.clipping
Unit: signal amplitude; hertz (Hz)

A recorder can cut off large signals or miss frequencies.

Clipping limits waveform amplitude; bandwidth declares which frequencies a system can represent with stated accuracy.

- A non-clipping trace alone does not establish calibrated response.

## NTS / not to scale — Not to scale
Context: measurement · Stable ID: measurement.not-to-scale
Unit: drawing convention; not a measurement

A sketch may show relationships without preserving size ratios.

Use written dimensions and declared coordinate units rather than measuring screen pixels.

- An accurate-looking diagram is not an engineering drawing or a calibrated photograph.

## reconstruction_disk — Voltage reconstruction-error disk
Context: measurement · Stable ID: measurement.reconstruction-disk
Unit: volt (V)

A deterministic disk bounds how far the estimated voltage can be wrong.

The supplied current/component error radii are propagated into a complex voltage-error radius.

- This is not a statistical confidence region or a claim of sensor calibration.

## j / i / √−1 — Imaginary unit
Context: math · Stable ID: math.imaginary-unit
Unit: dimensionless

The imaginary unit represents a quarter-turn in complex arithmetic.

j² = −1; imported contracts often write i instead. It is not electrical current i(t).

Equation: j² = −1

- Interpret i from its equation context, not from its character alone.

## phasor — Phasor
Context: math · Stable ID: math.phasor
Unit: same unit as represented voltage/current

A phasor combines a sinusoid’s size and phase into one complex number.

It represents a single-frequency sinusoid under an explicitly selected peak or RMS convention.

- A phasor is not an instantaneous waveform or automatically a physical electromagnetic field.

## ℂ / C² / ℝ / R⁴ — Complex and real-number domains
Context: math · Stable ID: math.complex-field
Unit: dimensionless domain notation

A complex number has a real and an imaginary part.

Two complex source values have four real coordinates: ℂ² is represented by ℝ⁴.

Equation: ℂ² ≅ ℝ⁴

- ℂ is not capacitance C; ℝ is not electrical resistance R.

## Re / Im / conj / conjugate / * — Real part, imaginary part and conjugate
Context: math · Stable ID: math.complex-parts
Unit: same unit as the complex quantity

These operations separate or reverse parts of a complex number.

For z = a + jb, Re(z)=a, Im(z)=b and conjugate(z)=a−jb.

- The a and b here are generic coordinates, not automatically witness transfer parameters.

## |z| / |I|² / squared_magnitudes — Magnitude and squared magnitude
Context: math · Stable ID: math.magnitude
Unit: signal unit; its square for squared magnitude

Magnitude measures the size of a complex quantity without its phase.

For z=a+jb, |z|²=a²+b²; measuring magnitude discards phase information.

- A² is squared amperes here; it is not a new kind of current.

## hat / ˆ / δ / Δ / dot / qdot / idot / ż — Estimate, difference and time derivative
Context: math · Stable ID: math.estimates
Unit: depends on quantity; derivative adds /s

Marks over a symbol tell you which version, change or bound is meant.

A hat denotes an estimate; δ often a difference or perturbation; Δ can denote a final-minus-initial change or a supplied error bound, according to the contract; a dot is a time derivative.

Equation: ż = dz/dt

- Δa and ΔM in these contracts are error-bound radii, not temporal changes. Every symbol needs declared units; ż is velocity, not position.

## T / diag / Z^-1 / matrix — Matrix, transpose, diagonal and inverse
Context: math · Stable ID: math.matrix
Unit: depends on its mapping

A matrix collects several linked equations into one map.

Transpose T swaps rows/columns; diag forms a diagonal matrix; inverse undoes an invertible map.

- A matrix inverse is not defined at a singular parameter choice.

## rank / nullity / kernel — Rank, nullity and kernel
Context: math · Stable ID: math.rank-nullity
Unit: counts of real or complex dimensions, explicitly declared

Some different inputs can produce exactly the same observations.

Rank counts independent observed directions; nullity counts unobserved directions; a kernel vector maps to zero.

Equation: domain dimension = rank + nullity

- State whether dimensions are real or complex. A nonzero kernel defeats unique reconstruction.

## Jacobian — Jacobian and local reconstruction
Context: math · Stable ID: math.jacobian
Unit: output unit / input unit per entry

A Jacobian describes how small input changes affect observations.

It is the derivative matrix of a nonlinear observation map at one input.

- Local rank does not by itself prove global uniqueness; zero-current boundaries can change rank.

## det / 1−aβ / conditioning — Determinant and conditioning
Context: math · Stable ID: math.determinant
Unit: depends on matrix units; dimensionless for witness map

A determinant can reveal when a square map cannot be inverted.

The witness map is singular when 1−aβ=0; conditioning describes sensitivity near inversion.

Equation: det([[1,a],[β,1]]) = 1−aβ

- A small numerical residual is not a guarantee of stable physical inference.

## positive definite / |k|<1 — Positive-definite stored-energy form
Context: math · Stable ID: math.positive-definite
Unit: energy form yields joules

A positive-definite energy form is positive for every nonzero state.

The passive two-coil fixture uses positive L1/L2 and |k|<1 to ensure a positive-definite inductance matrix.

- This declared ideal model does not prove a real apparatus is passive.

## s / b / y — Signal and nuisance contributions
Context: witness · Stable ID: witness.signal
Unit: volt (V), complex peak

The receiver can mix the intended signal with ordinary background.

s is a stipulated receiver signal, b a witness-equivalent nuisance and y their combined effective receiver voltage.

Equation: y = s + ab

- A recovered same-port signal is not automatically an exotic physical source.

## w / W — Calibrated witness-equivalent voltage
Context: witness · Stable ID: witness.voltage
Unit: volt (V), complex peak

A witness channel observes a declared background reference.

The variable w is a calibrated equivalent voltage, not automatically the raw pickup-coil voltage.

Equation: w = b  (clean witness)

- w is not work; a label W on a recorder identifies its role, not watts.

## a / ahat — Nuisance transfer
Context: witness · Stable ID: witness.transfer
Unit: complex dimensionless ratio

Transfer tells how the background enters the receiver.

a maps witness-equivalent nuisance voltage into receiver effective voltage at one selected frequency.

- Geometry alone does not calibrate a; unknown transfer can preserve rival explanations.

## Δa / Delta_a — Transfer uncertainty radius
Context: witness · Stable ID: witness.transfer-uncertainty
Unit: dimensionless

The contract places a bound on how much the transfer ratio may be wrong.

Δa bounds the magnitude of the difference between true and estimated complex nuisance transfer.

Equation: |a_true − ahat| ≤ Δa

- It is not a voltage or a final-minus-initial time change; the bound is supplied, not measured here.

## β / beta — Signal leakage into the witness
Context: witness · Stable ID: witness.leakage
Unit: complex dimensionless ratio

A reference channel can accidentally contain the signal too.

β maps the intended receiver signal into the witness channel.

Equation: w = b + βs

- This β is not a pressure-reflection coefficient or a statistical error probability.

## reconstruction_disk / disk / εy / εw — Deterministic reconstruction disk
Context: witness · Stable ID: witness.error-disk
Unit: volt (V)

The stated assumptions bound the reconstruction inside a disk.

Triangle inequalities propagate supplied complex error radii into a worst-case voltage radius.

- A deterministic bound is not a confidence interval or evidence of a new force.

## N / Fm / F / mg — Contact and magnetic force
Context: magnetism · Stable ID: magnetism.contact-force
Unit: newton (N)

A magnet can change how strongly an object presses on a balance.

N is upward contact force; Fm is the stipulated upward magnetic force and mg the downward weight.

Equation: N = mg − Fm, while N ≥ 0

- A smaller contact reading does not establish changed gravity; N the variable differs from N the unit.

## m / g — Mass and gravitational acceleration
Context: magnetism · Stable ID: magnetism.mass-gravity
Unit: kilogram (kg); metre per second squared (m/s²)

Mass and gravitational acceleration together determine weight.

In the static comparison g is stipulated as 9.80665 m/s², not inferred from a balance change.

Equation: weight = mg

- m as mass differs from m as the metre unit.

## z / ż / dL/dz — Position, velocity and inductance gradient
Context: magnetism · Stable ID: magnetism.motion
Unit: m; m/s; H/m

Changing position can change the modeled inductance.

z is prescribed position, ż its time derivative and dL/dz the stipulated inductance change per metre.

Equation: F = ½ I² dL/dz

- This z is not impedance Z; prescribed motion is not a solved free trajectory.

## f / Hz / T — Frequency and period
Context: acoustics · Stable ID: acoustics.frequency
Unit: hertz (Hz = cycles/s); second (s)

Frequency counts repeating cycles each second.

A period is one cycle duration; f=1/T. A recorded spectrum can contain many peaks.

Equation: f = 1/T

- Frequency f differs from force F; a monument does not automatically have one scalar frequency.

## p / pressure — Acoustic pressure
Context: acoustics · Stable ID: acoustics.pressure
Unit: pascal (Pa), if calibrated

Sound pressure is a changing pressure measured in air.

Pressure spectra, electrical voltage, displacement and digital sample amplitude are different channels.

- The synthetic room model is relative digital amplitude, not calibrated Pa or dB SPL.

## r / α / alpha — Pressure reflectivity and energy absorption
Context: acoustics · Stable ID: acoustics.reflection
Unit: dimensionless

A reflection coefficient sets the modeled returning wave amplitude.

r is a pressure-amplitude coefficient. Under the restricted real, non-transmitting energy convention, |r|=√(1−α).

Equation: |r| = √(1−α)

- Do not substitute r=1−α for energy absorption. Witness β is unrelated.

## d / t / c — Path distance, delay and sound speed
Context: acoustics · Stable ID: acoustics.delay
Unit: metre (m); second (s); m/s

Longer sound paths arrive later.

The early-reflection model uses t=d/c with c=343 m/s unless otherwise declared.

Equation: t = d/c

- This c is sound speed, not vacuum light speed or capacitance C.

## IR / RIR / h / convolution — Impulse response and convolution
Context: acoustics · Stable ID: acoustics.impulse
Unit: relative discrete transfer; time in s

An impulse response describes how a model changes a short source sound.

Convolution applies delayed, weighted copies of a dry signal. RIR means room impulse response.

- Seven first-order paths are not a measured full-room response or a complete late-reverberation model.

## L1 / Σ|h| / listeningScale — L1 listening bound
Context: acoustics · Stable ID: acoustics.normalization
Unit: dimensionless digital gain

A shared scale limits the sum of digital path amplitudes.

The sum of absolute discrete impulse weights bounds convolution sample peak for bounded input.

Equation: scale = 1/max(1, Σ|raw weights|)

- This operator bound is not proof of physical room-energy conservation.

## RT60 — Reverberation time
Context: acoustics · Stable ID: acoustics.rt60
Unit: second (s)

RT60 describes a 60-decibel decay in a room sound field.

It requires an appropriate decay measurement or model and stated estimation method.

- The first-order early-reflection model does not compute RT60.

## n / n1 / n2 — Refractive index
Context: optics · Stable ID: optics.refractive-index
Unit: dimensionless

Refractive index describes light propagation relative to vacuum.

The prism drawing uses stipulated indices, not a measured wavelength-dependent glass model.

Equation: n1 sin θ1 = n2 sin θ2

- n here differs from integer acoustic mode indices.

## λ / wavelength / θ / incidence — Wavelength and angle of incidence
Context: optics · Stable ID: optics.wavelength
Unit: metre (m), often nanometre (nm); rad or declared degrees

Wavelength is the spatial length of a wave cycle.

Incidence/refraction angles in Snell’s law are measured from the surface normal; a drawing direction needs its own axis reference.

- Do not confuse a 20° drawing direction with a surface-normal incidence without checking geometry.

## frequency_points / load_points / transient_samples / error_phase_points / boundary_phase_points — Numerical sample and grid counts
Context: protocol · Stable ID: protocol.sampling-grid
Unit: integer count, dimensionless

A grid count says how many numerical evaluations were requested.

These are computational sampling choices, not counts of physical measurements or participants.

- More grid points do not themselves establish model accuracy or experimental replication.

## transient_end_s — Simulation time window
Context: protocol · Stable ID: protocol.time-window
Unit: second (s)

A time window sets how long the model is evaluated.

The endpoint and sample counts describe a computational transient, not an operated apparatus.

- A requested sample count and duration do not establish real recorder bandwidth.

## frequency_ratio_domain — Normalized frequency domain
Context: protocol · Stable ID: protocol.frequency-ratio
Unit: dimensionless frequency ratio

A ratio compares the selected frequency with the model’s reference frequency.

The R1 frequency sweep spans a declared multiple of the nominal resonant angular frequency.

- A ratio is not a new absolute frequency measurement.

## load_log_domain_ohm / loads_ohm / nominal_load_ohm — Positive load sweep domain
Context: protocol · Stable ID: protocol.load-domain
Unit: ohm (Ω)

The model tries stated receiver-load resistances.

The positive endpoint domain supports a logarithmically spaced numerical sweep; the reported resistance values still have ohm units.

- A logarithmic grid does not mean the displayed resistance has logarithmic units.

## inherits — Inherited model fixture
Context: protocol · Stable ID: protocol.inheritance
Unit: configuration reference; no physical unit

A later contract can reuse declared parameters from an earlier model.

R2 explicitly inherits the R1 nominal circuit; missing values are not independently measured.

- Inheritance is a computational dependency, not independent evidence.

## t / crossleak_path_t — Dimensionless witness-leakage path
Context: protocol · Stable ID: protocol.crossleak-path
Unit: dimensionless

This parameter moves along a family of leakage settings.

In the R3 conditioning probe, β=t/a so aβ=t. At t=1 the witness map is singular.

Equation: β = t/a; det = 1−t

- This t is not elapsed time in seconds or the acoustic path delay.

## SI / m / cm / mm / µ / milli / micro / nano — SI and unit prefixes
Context: units · Stable ID: units.si
Unit: declared physical unit

SI is the international system of measurement units.

cm=0.01 m, mm=0.001 m, µ=10⁻⁶, milli=10⁻³ and nano=10⁻⁹ of the stated unit.

- A source drawing in cm or mm is not silently a metres-based parts table.

## W / mW — Watt unit
Context: units · Stable ID: units.watt
Unit: J/s

A watt is one joule transferred each second.

W after a numeric value denotes the power unit; mW is one thousandth of a watt.

- W as a work variable instead has joule units; witness w is voltage.

## SVG — Scalable Vector Graphics
Context: digital · Stable ID: digital.svg
Unit: file format; no physical unit

SVG stores a drawing as shapes and text.

A vector drawing can retain dimensions and annotations independently of display resolution.

- A precise-looking SVG is not a validated construction drawing.

## JSON — JavaScript Object Notation
Context: digital · Stable ID: digital.json
Unit: data format; no physical unit

JSON stores structured data that can be exported and inspected.

A receipt encodes declared inputs, outputs and provenance as text records.

- Serialization does not authenticate a claim or measure a device.

## SHA-256 / SHA256 — SHA-256 content digest
Context: digital · Stable ID: digital.sha256
Unit: 256-bit digest

A digest helps compare whether two files have the same bytes.

SHA means Secure Hash Algorithm; the digest identifies content under the named algorithm.

- A matching digest proves neither the truth of content nor its author.

## FFT / DFT — Fast Fourier transform
Context: digital · Stable ID: digital.fft
Unit: frequency bins in Hz; amplitude units declared separately

A Fourier transform separates a sampled waveform into frequency components.

FFT is an efficient algorithm for the discrete Fourier transform; bin spacing is sample rate divided by transform length.

Equation: Δf = sampleRate / N

- A spectral peak is not necessarily the fundamental, a material mode or calibrated acoustic pressure.

## PCM / sample rate / Nyquist — Pulse-code modulation and sampling
Context: digital · Stable ID: digital.pcm
Unit: samples/s (Hz); declared bit depth

PCM represents a waveform as a sequence of numbered samples.

PCM16 encodes signed 16-bit samples; sample rate sets the time interval. Frequencies must stay below half the sample rate.

- A 48 kHz sample rate is not the pitch of the sound.

## dBFS / sample peak — Decibels relative to digital full scale
Context: digital · Stable ID: digital.dbfs
Unit: decibel (dB) relative to full-scale amplitude

dBFS expresses digital signal level below the largest sample value.

For normalized amplitude A, level is 20 log10(|A|). A −24 dBFS master is a digital gain choice.

Equation: dBFS = 20 log10(|A|)

- It is not calibrated sound-pressure level or a guarantee of safe ear exposure.
