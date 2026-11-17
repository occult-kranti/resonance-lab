# Optional source-monitor channel
Record: atlas:v4-dual-channel-plan · dimensioned SVG apparatus plan · proposed\_unbuilt

Proposed optional upgrade. Two inputs share a sampling clock; equal gain, stable source amplitude and isolated signals remain unproven. A source monitor constrains source drift only after its own response is characterized. No hardware purchase is required by the least-material proposal.

## What this study asks
Understand what an additional source-monitor channel could constrain, and why a shared sampling clock does not make the gains equal.

## Follow the signal or force
1. A source-monitor channel observes a declared reference.
2. A second channel observes the experimental response on the same clock.
3. Compare them only after their gains, phase and signal separation are characterized.

## What is declared
- This is an optional proposed upgrade, not required hardware for the least-material study.
- Shared sampling time and calibrated channel gain are separate conditions.
- Original source status: proposed\_unbuilt.

## What remains unknown
- Equal gains, stable source amplitude, channel isolation and monitor response are unproven.
- No complete purchased-parts or calibration specification is supplied by the drawing.

## Measurement checklist for a future study
- Measure channel transfer and crosstalk using known signals.
- Repeat with channels exchanged and retain independent source-stability checks.

## Questions before interpreting a result
- What does the monitor measure that the original channel cannot?
- Can unequal gains or leakage create the apparent change?

## Limits
- All apparatus is proposed and unbuilt. Geometry is not a physical measurement or a calibration.
- Proposed optional upgrade. Two inputs share a sampling clock; equal gain, stable source amplitude and isolated signals remain unproven. A source monitor constrains source drift only after its own response is characterized. No hardware purchase is required by the least-material proposal.
- Detailed parts, coordinates and calibration are not inferred from the image. Inspect the pinned apparatus documentation.
- This guide explains the declared study. It supplies no missing engineering specification, calibration, purchase requirement or construction approval.

## Symbols and short forms
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
### Drift, pilot and cross-talk (pilot, drift, pre-roll)
A reference tone can help notice changes during a recording.
Units: declared signal unit and time. Pilot drift can arise in the source, path or recorder; pre-roll records the background before excitation, and cross-talk mixes channels.
- A stable pilot is not a calibration certificate; two microphones do not guarantee isolation.
### Clipping and bandwidth (clipping, bandwidth)
A recorder can cut off large signals or miss frequencies.
Units: signal amplitude; hertz (Hz). Clipping limits waveform amplitude; bandwidth declares which frequencies a system can represent with stated accuracy.
- A non-clipping trace alone does not establish calibrated response.
### Not to scale (NTS, not to scale)
A sketch may show relationships without preserving size ratios.
Units: drawing convention; not a measurement. Use written dimensions and declared coordinate units rather than measuring screen pixels.
- An accurate-looking diagram is not an engineering drawing or a calibrated photograph.
### Frequency and period (f, Hz, T)
Frequency counts repeating cycles each second.
Units: hertz (Hz = cycles/s); second (s). A period is one cycle duration; f=1/T. A recorded spectrum can contain many peaks.
- Frequency f differs from force F; a monument does not automatically have one scalar frequency.
### Acoustic pressure (p, pressure)
Sound pressure is a changing pressure measured in air.
Units: pascal (Pa), if calibrated. Pressure spectra, electrical voltage, displacement and digital sample amplitude are different channels.
- The synthetic room model is relative digital amplitude, not calibrated Pa or dB SPL.
### Path distance, delay and sound speed (d, t, c)
Longer sound paths arrive later.
Units: metre (m); second (s); m/s. The early-reflection model uses t=d/c with c=343 m/s unless otherwise declared.
- This c is sound speed, not vacuum light speed or capacitance C.
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
### Fast Fourier transform (FFT, DFT)
A Fourier transform separates a sampled waveform into frequency components.
Units: frequency bins in Hz; amplitude units declared separately. FFT is an efficient algorithm for the discrete Fourier transform; bin spacing is sample rate divided by transform length.
- A spectral peak is not necessarily the fundamental, a material mode or calibrated acoustic pressure.
### Pulse-code modulation and sampling (PCM, sample rate, Nyquist)
PCM represents a waveform as a sequence of numbered samples.
Units: samples/s (Hz); declared bit depth. PCM16 encodes signed 16-bit samples; sample rate sets the time interval. Frequencies must stay below half the sample rate.
- A 48 kHz sample rate is not the pitch of the sound.
### Decibels relative to digital full scale (dBFS, sample peak)
dBFS expresses digital signal level below the largest sample value.
Units: decibel (dB) relative to full-scale amplitude. For normalized amplitude A, level is 20 log10(\|A\|). A −24 dBFS master is a digital gain choice.
- It is not calibrated sound-pressure level or a guarantee of safe ear exposure.

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
- assets/sound-lab-v4/dual-channel-plan.svg — https://github.com/occult-kranti/resonance-research-atlas/blob/aabc79d42adf4b72677fdd8e45fbade76b159192/assets/sound-lab-v4/dual-channel-plan.svg; Pinned artifact reference; no physical apparatus verification follows.

Explicit guide and selected contextual terms for this record; not automatic coverage of every raw source symbol or an exhaustive technical dictionary.
