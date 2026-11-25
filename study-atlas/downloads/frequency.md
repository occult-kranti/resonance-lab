# Frequency, spectra and time metrology

Research cutoff: 25 November 2026.

This is a source-linked selected corpus, with reviewed, mapped and lead coverage states. Formulas retain their hypotheses, units and derivations. Contemporary software-agent reviews do not constitute human peer review or physical validation. Statements about AI mathematics distinguish an announced result, a benchmark answer, independent mathematical review and formal verification.

Symbol dictionaries preserve the exact locally scoped identifiers. A TeX identifier beginning with a backslash names the rendered symbol in the equation. The same letter can represent different quantities in different records; units, object type and the accompanying definition determine its meaning. Legacy TeX fraction/font syntax is translated only for equivalent document typesetting; original formula strings remain in the JSON corpus.

## SI constants and uncertainty

Source: https://physics.nist.gov/cuu/Constants/Table/allascii.txt; 2022 CODATA adjustment, actual static table inspected 2026-11-25.

| Symbol | Quantity | Value | Standard uncertainty | Unit |
|---|---|---|---|---|
| k_B | Boltzmann constant | 1.380 649 e-23 | (exact) | J K^-1 |
| e | elementary charge | 1.602 176 634 e-19 | (exact) | C |
| alpha | fine-structure constant | 7.297 352 5643 e-3 | 0.000 000 0011 e-3 | dimensionless |
| G | Newtonian constant of gravitation | 6.674 30 e-11 | 0.000 15 e-11 | m^3 kg^-1 s^-2 |
| h | Planck constant | 6.626 070 15 e-34 | (exact) | J Hz^-1 |
| c | speed of light in vacuum | 299 792 458 | (exact) | m s^-1 |
| epsilon_0 | vacuum electric permittivity | 8.854 187 8188 e-12 | 0.000 000 0014 e-12 | F m^-1 |
| mu_0 | vacuum mag. permeability | 1.256 637 061 27 e-6 | 0.000 000 000 20 e-6 | N A^-2 |

- The 2019 SI fixes c, h, e and k_B by definition. Measured realizations still have uncertainty.
- mu_0 and epsilon_0 are not exact defined constants in the revised SI. A textbook value 4*pi*1e-7 is an approximation for mu_0.
- Angular frequency in radians per second and ordinary frequency in hertz need the explicit factor 2*pi.
- G is measured, not fixed exactly; quoted digits and standard uncertainty remain attached.

The notation e-12 means multiplication by ten to the power minus twelve. A standard uncertainty is not automatically a confidence interval. Defined exact constants differ from uncertain instrument realizations.

# Frequency: from a repeated event to a defensible measurement

A frequency number becomes useful when it answers four questions: what changes, which clock measures the change, which mathematical model connects the observations, and what would count as an alternative explanation? A violin string, a microphone voltage, an optical transition and a clock-comparison residual can all be described using hertz. They are not therefore the same physical channel. This chapter follows the common mathematics while preserving those distinctions. Its scope is a selected learning and research map through 25 November 2026, with 73 taxonomy nodes, 42 formula records and 18 retrieved sources. Those counts describe this corpus, not the fraction of a scientific field that has been solved.

The route starts with time and phase, moves through oscillators and waves, and then asks what survives finite sampling and imperfect instruments. It reaches quantum spectroscopy and contemporary clocks only after those foundations. At each stage, forward reasoning derives an observable from stated assumptions. Reverse reasoning starts with a proposed interpretation and asks which missing measurements would distinguish it from ordinary alternatives. Agreement between a formula and a chosen anchor is weaker than agreement with an independent measurement and a discriminating control.

The accompanying technical appendix contains every included equation with variables, units, conditions, a derivation, a worked example and a limiting case. This narrative explains why one should choose a particular equation and when one should refuse to use it. The linked source records state which sections were actually read. A full downloaded document is not automatically a fully reviewed paper, and an abstract-only review is not quietly promoted to a methods audit.

## 1. Begin with an event, a coordinate and a clock

Imagine a small displacement sensor attached to a vibrating beam. Its output is a voltage sampled against an electronic clock. Before calculating a spectrum, identify whether the intended observable is displacement, acceleration, strain, pressure or voltage. A conversion from volts to metres requires a calibration model, and that model may depend on frequency. The sensor position matters because it may lie near a mode node. The fixture matters because it changes the boundary conditions. Temperature matters because it can affect both the structure and the readout. These are parts of the measurement, not distractions from a supposedly pure frequency hidden inside the object.

For a repeating event, the period is the elapsed duration between equivalent points in successive cycles. One cycle every two milliseconds is 500 hertz. The number does not specify the amplitude, energy, material or mechanism. A large movement and a barely detectable movement can have the same period. An event with irregular spacing may be better described by a distribution, a phase model or a time-dependent rate than by one period. A single transient can have a broad Fourier spectrum without having completed a recurring physical oscillation.

The SI second is currently defined through the unperturbed ground-state hyperfine transition frequency of cesium-133, assigned exactly 9,192,631,770 hertz. The BIPM brochure also makes clear that the second is a unit of proper time and that comparisons across locations require relativistic corrections. Exact defining constants do not make every laboratory realization exact. A real apparatus has external fields, finite signal-to-noise ratio, calibration uncertainty and a method for transferring its reference. The distinction between a unit definition and its realization remains essential even when reading the most precise optical-clock paper. [freq-si-brochure]

A useful first control is therefore to keep the physical signal unchanged and alter the readout reference or channel. If the reported frequency changes, the result concerns the combined measurement system. That may be valuable information, but it is not yet an intrinsic change of the specimen.

## 2. Phase connects cycles to local change

Ordinary frequency counts cycles per second. Angular frequency counts radians per second, with one cycle corresponding to two pi radians. The conversion looks elementary, yet a missed factor of two pi can move an inferred stiffness, linewidth or energy by a substantial factor. The radian is dimensionless in SI dimensional analysis, but retaining its name in an angular-frequency label is a practical safeguard. A symbol called omega should not receive a numerical value in hertz unless the conversion has been made explicitly.

For one well-resolved component, a continuously unwrapped phase can define an instantaneous frequency through its derivative. Consider a phase that increases as two pi times the sum of 100t and 5t squared. Its frequency rises from 100 hertz at a rate of ten hertz per second. At two seconds it is 120 hertz. This calculation does not establish that every arbitrary waveform has a unique instantaneous frequency. A sum of components can produce amplitude zeros, phase jumps and representation-dependent local behaviour. Differentiating a noisy estimated phase also magnifies high-frequency errors.

A phase trace should therefore be accompanied by its amplitude, preprocessing and definition. If an analytic-signal construction is used, state the filtering and component-selection assumptions. If a fitted sinusoid is used, state its time interval and residuals. A phase derivative that becomes extreme near a signal zero may reveal failure of the chosen representation rather than a spectacular physical acceleration. This boundary is especially relevant when software draws an attractive coloured instantaneous-frequency ridge.

The reverse question is simple: could two decompositions explain the same waveform? If so, a local-frequency claim needs an additional convention or measurement. A narrowband instrument, an independent channel, a controlled excitation or a physically constrained model may provide it. The mathematical operation alone does not. The atlas consequently treats instantaneous frequency as a conditional result and separates it from the elementary reciprocal-period definition. [freq-numpy-fft; freq-scipy-stft]

## 3. Units prevent several false connections

The same dimension can appear in distinct mechanisms. A hertz is an inverse second, but an acoustic pressure oscillation, an electromagnetic carrier and a radioactive decay rate do not become interchangeable because all involve inverse time. Even the word rate can refer to a count rate, exponential decay coefficient, phase derivative or transition probability. The observable and equation determine the interpretation.

Dimensional checking is a first filter for a proposed relationship. A mass–spring angular frequency involves the square root of stiffness divided by mass. A propagation wavelength involves a speed divided by frequency. A photon energy involves Planck’s constant multiplied by frequency. Substituting the vacuum speed of light into an air-acoustic wavelength calculation is a channel error, even though the resulting expression still has units of length. Dimensional consistency is necessary, but many physically wrong equations pass it.

For this reason, each introduced parameter should have a role as well as a unit. Is it an externally selected drive, a calibrated observable, an inferred mode, a coordinate convention or a fitted coefficient? A speed chosen to make an image correspond to a preferred note is an external mapping parameter. A measured sound speed with uncertainty is different evidence. A fitted coefficient from one observation does not become a fundamental constant when written with many decimal places.

The revised SI also requires care with electromagnetic constants. Planck’s constant, the vacuum light speed, elementary charge and Boltzmann’s constant have exact defining numerical values. Vacuum permeability and permittivity do not: their 2022 CODATA entries carry measured uncertainty. The old textbook permeability value of four pi times ten to the minus seven is now an approximation. The shared constants registry retains these distinctions, and this chapter’s added NIST source record uses the moderator’s exact raw capture after a separate repeat request was blocked. An unsuccessful HTTP request was not counted as fresh source access. [freq-codata-2022]

Uncertainty also has a structure. For two channels sharing the same timebase, the errors can be correlated. Treating them as independent can either inflate or underestimate the uncertainty of a ratio or difference. The first-order covariance propagation formula retains these cross terms. In a simple difference of two unit-variance quantities with covariance 0.9, the variance of the difference is 0.2, not two. Perfectly common fluctuations cancel in an ideal difference, while differential effects remain. A useful control deliberately changes the common reference and checks that the supposed cancellation behaves as predicted. The validity of a small-uncertainty linearization should itself be checked near uncertain denominators or strongly nonlinear responses. [freq-nist-stability]

## 4. A natural frequency belongs to a specified dynamical problem

The ideal mass on a linear spring is an effective teaching model because every assumption is visible. Mass supplies inertia; the spring supplies a restoring force proportional to displacement; the coordinate is measured from equilibrium. Substituting a sinusoid into the equation of motion yields an angular frequency equal to the square root of stiffness divided by mass. Gravity can shift the equilibrium without changing that linearized frequency when the spring remains ideal. A different geometry, nonlinear force or changing constraint needs a different model.

The Feynman harmonic-oscillator chapter explicitly introduces a mass whose spring first balances gravity and then studies displacement from that equilibrium. It also illustrates numerical evolution before presenting the familiar cosine solution. That ordering matters: the equation, initial conditions and chosen units define the mathematical problem. Recognizing a cosine-shaped trace is not enough to infer a unique spring and mass. Many parameter pairs share the same stiffness-to-mass ratio. [freq-feynman-oscillator]

Add viscous damping and the characteristic roots acquire a negative real part. Free oscillation then combines an exponential amplitude envelope with an oscillation frequency shifted below the undamped value. At critical damping there is no sinusoidal ring-down frequency. Calling a decaying transient a low-quality oscillation without checking this regime can be misleading. An actual fit should compare underdamped, overdamped, multimode and instrument-response alternatives where appropriate.

Notation creates a less dramatic but common trap. Feynman’s resonance chapter writes its damping coefficient in the normalized differential equation as mass-normalized b/m. This atlas uses gamma for the amplitude decay rate b/(2m). These are not contradictory physical laws: the source gamma is twice the atlas gamma. The formula records and source note preserve that translation. Reusing a printed symbol without preserving its definition would introduce a factor-of-two error into damped frequencies and quality factors. [freq-feynman-resonance]

## 5. A response peak is not automatically the undamped mode

A driven oscillator answers a different question from a freely ringing one. In steady sinusoidal forcing, the displacement depends on the complex dynamic stiffness: restoring stiffness, inertial stiffness and a damping term that carries phase. The complex response makes both gain and phase available for testing. Under the declared positive-exponential phasor convention, the displacement lags the resonant force by a quarter cycle in the simple viscous model. Changing the mathematical sign convention conjugates intermediate expressions, not the predicted physical lag.

For constant force amplitude and frequency-independent viscous damping, the maximum displacement occurs below the undamped natural frequency. The free ring-down frequency is shifted by a different amount. A velocity maximum, absorbed-power maximum and microphone-voltage maximum can be different again. Consequently, a frequency found by taking the largest FFT bin should be labelled a peak of that measured channel over that observation window. Interpreting it as a material eigenfrequency requires an additional response model and calibration.

Quality factor makes the role of losses explicit. In a narrow isolated resonance, a half-power linewidth can estimate Q. The threshold is half power, not half amplitude. Loaded Q includes energy leaving through a drive port, sensor, suspension, radiation or other coupling. A measurement that changes the loading can change Q and shift the apparent response without modifying an isolated material constant. High Q means that supplied energy persists for many oscillations under the model; it supplies no extra energy source.

A strong practical test compares several observables rather than fitting one amplitude curve. Does phase evolve as predicted? Does ring-down agree with the damping inferred from a sweep? Does the fitted response remain when the sensor position changes? Do neighbouring peaks require a coupled-mode model? A successful common fit is stronger evidence than one visually impressive resonance. A disagreement is useful because it identifies an omitted physical premise or a calibration problem rather than requiring an extraordinary new force. [freq-feynman-resonance]

## 6. Coupled modes turn one coordinate into a family

Real structures rarely have only one useful coordinate. A beam, shell, room or assembled instrument supports many motion patterns. In a finite conservative approximation, the mass and stiffness matrices define a generalized eigenvalue problem. Its eigenvectors are mode shapes and its eigenvalues determine squared angular frequencies. Boundary conditions, geometry and material parameters enter those matrices. A rigid-body motion can produce a zero eigenvalue; it is not a positive resonance that should be assigned a musical pitch.

The distinction between shape and scale provides a direct inverse-problem control. Two geometrically similar systems can share a normalized mode shape while having different physical dimensions, material constants or tensions. Their frequencies need not agree. Conversely, different parameter combinations can share a frequency. A photograph can constrain visible geometry but ordinarily leaves thickness, internal cavities, stiffness, pre-stress, supports and damping unresolved. A unique frequency inferred from pixels alone therefore needs assumptions that must remain visible in the result.

A two-coordinate example is sufficient to see the principle without pretending to solve an archaeological monument. With a unit mass matrix and diagonal stiffness entries four and nine, the two angular frequencies are two and three radians per second. Introducing coupling changes the eigenvectors and eigenvalues together. A sensor that observes only one coordinate may fail to detect a mode that exists in the mathematical system. A driven response also depends on how the force overlaps the modes.

This is why the atlas connects normal modes to measurement identifiability. Existence in a model, excitation by a source and observability at a receiver are separate propositions. A convincing modal experiment specifies all three. The same distinction applies when a cymatics board renders ideal nodal patterns: a visual match is an explicitly chosen comparison, not a recovery of an unspecified object’s complete spectrum. The mathematical appendix includes simple string and cavity examples to make those premises concrete rather than concealing them behind a generic resonance label.

## 7. Waves require a medium and boundary conditions

A uniform nondispersive wave equation connects temporal angular frequency with spatial wave number through a declared speed. It does not, by itself, select a discrete set of modes. A finite boundary-value problem must also state its supports or wall conditions. A string fixed at both ends admits integer numbers of spatial half-wavelengths. A rigid rectangular acoustic cavity admits pressure modes indexed along three axes. An elastic plate, an open cavity and an irregular coupled structure need their own equations.

Consider a five-metre rigid-room axial mode in air whose assumed sound speed is 343 metres per second. The simple model gives 34.3 hertz for the first axial mode. Double every room dimension while preserving the medium and ideal boundaries and every model frequency halves. Keep the photograph identical while changing the assumed scale and the model changes. That is a constructive demonstration of missing information, not evidence that a particular monument carries 34.3 hertz.

Dispersion adds another layer. Phase speed follows a crest; group speed follows a narrow packet envelope under a smooth dispersion relation. In a quadratic dispersion example, group and phase speeds differ by a factor of two. Strong absorption or pulse reshaping can make a naive envelope interpretation inadequate. A surprising group-speed value alone does not establish an information-front velocity or a way to send messages outside relativistic causal constraints.

The electromagnetic vacuum relation uses the exact vacuum speed of light. An acoustic relation uses a sound speed appropriate to its medium and conditions. The same frequency therefore corresponds to very different wavelengths in air, water, a solid or vacuum electromagnetic propagation. The atlas retains the channel name alongside the quantity. This prevents a common leap from an audible tone to an electromagnetic or quantum claim merely because a shared numerical frequency can be written in hertz. [freq-si-brochure]

## 8. Fourier and Laplace transforms answer related but distinct questions

A Fourier transform resolves a signal against complex exponentials under a declared sign and normalization. If the input is displacement in metres and time is integrated in seconds, the continuous transform has metre-second units. An inverse transform integrates over hertz and restores metres. Magnitude alone generally loses phase information, so a magnitude plot does not specify a unique time waveform.

The finite DFT is a different, exact object: an invertible coordinate transform of an N-sample vector. Under the atlas convention the forward sum is unscaled and the inverse divides by N. NumPy’s documentation pins this convention, the ordering of positive and negative bins and the special Nyquist bin. The FFT is an efficient algorithm for this transform, not a separate physical instrument. Parseval’s finite identity supplies a normalization check by matching squared norms in the two coordinate systems. Turning that norm into joules still requires a calibrated channel, sampling interval and physical energy model. [freq-numpy-fft]

The Laplace transform adds exponential weighting through a complex parameter whose real part controls growth or decay. Its region of convergence is part of the answer. For a causal exponential decay with rate two per second, the algebraic transform is reciprocal s plus two, but the causal integral converges only to the right of its stated boundary. Formal substitution onto an imaginary axis is not a proof that every required Fourier integral exists there. SymPy’s documentation retains convergence conditions in its transform interface, illustrating why an algebraic expression is incomplete without its domain. No SymPy result was executed as a substitute for that reasoning here. [freq-sympy-laplace]

For experimental work, choose the transform after stating the signal class and question. A transient impulse response, a stationary random process, a finite noisy record and an unstable growth experiment do not have identical analytical obligations. A useful symbolic result can fail as a physical inference if those obligations are skipped.

## 9. Sampling creates exact ambiguities

Uniform sampling identifies frequencies that differ by integer multiples of the sampling rate. The extra phase accumulated at each sample is an integer multiple of two pi, so the sampled complex exponentials are exactly equal. For real signals, additional sign equivalences appear. This is a mathematical non-identifiability, not merely an imprecise estimator. No later algorithm can distinguish identical input arrays without extra physical assumptions or measurements.

The familiar strict Nyquist condition requires the represented signal to be appropriately bandlimited before sampling. Real acquisition chains need analog filtering and a transition band. Sampling faster does not by itself prove that the microphone, accelerometer or optical detector has the assumed bandwidth. It also does not certify timing accuracy. A sample-clock error changes the inferred frequency axis, and timebase jitter can introduce additional effects.

A particularly sharp null uses a sine exactly at half the sample rate. With an unfortunate phase it is zero at every sample. The physical signal can be nonzero between observations while the finite vector is identically zero. Another counterexample compares 100 hertz and 1100 hertz at a 1000-sample-per-second rate: their complex sample sequences coincide. These examples explain why equality at the Nyquist boundary needs care and why a label saying high-resolution sampling cannot replace a bandwidth contract.

The observation duration supplies another limit. A two-second record at 1000 samples per second has a standard DFT grid spacing of half a hertz. Zero padding can draw a smoother interpolated spectrum, but it has not collected a longer record. Grid spacing, the uncertainty of a fitted line centre and the ability to distinguish two nearby noisy tones are separate concepts. Estimation can sometimes localize a single constrained tone more finely than one grid interval; that does not remove model uncertainty or solve arbitrary two-tone separation.

Any downstream display can introduce a second sampling problem. Retaining every fourth point to make a graph cheaper changes its displayed sampling rate. A high-frequency sine can land on every displayed zero crossing even when the original acquisition was adequate. Plot-decimation controls therefore belong in a scientific interface as well as acquisition controls. The correct remedy is an appropriate display representation or filtering, not interpreting a flattened polyline as physical silence.

## 10. Windows and spectral densities change what the plot means

A finite record implicitly makes choices about its ends. Multiplying by a window reduces discontinuities in the repeated-record interpretation, but broadens peaks and changes calibration. The periodic Hann window used for DFT analysis differs from a symmetric Hann window used in some other tasks. Even a familiar name is insufficient without the exact convention.

A coherent tone and broadband noise require different normalization factors. A bin-centred coherent tone depends on the sum of window weights, often expressed as coherent gain. Noise-density normalization depends on the sum of squared weights and the sampling rate. Dividing one by the other without checking the estimator creates amplitude or power errors. SciPy’s periodogram documentation explicitly distinguishes squared-spectrum units from spectral-density units, such as volts squared per hertz. Integrating a density across frequency yields signal squared; an individual bin value is not automatically total physical power. [freq-scipy-periodogram]

Welch estimation averages modified periodograms from segments, often overlapping. This can reduce estimator variability at the cost of shorter segment duration and coarser frequency discrimination. Overlap does not make every segment independent. Its choice affects effective degrees of freedom and uncertainty. Median and mean averaging also answer different robustness questions. The source documentation gives a reproducible algorithmic contract, but the number of visible averages does not itself supply a confidence interval. [freq-scipy-welch]

One-sided spectral-density conversion has precise endpoint rules. For real data, positive interior bins receive twice their two-sided density because their negative-frequency partners are combined. The DC bin is not doubled. When the sample count is even, its Nyquist bin is also not doubled; when the count is odd there is no Nyquist endpoint. A constant signal or an alternating-sign Nyquist sequence is a useful counterexample to blanket doubling: that mistake doubles the inferred mean square even though no second independent spectral component exists.

A clean measurement record should preserve the original sampling rate and units, detrending choice, window, segment length, overlap, transform normalization and one-sided or two-sided convention. Decibels require a reference and a declaration of whether the plotted quantity is amplitude, power or density. Digital full scale cannot be converted to acoustic sound-pressure level without a calibrated playback or recording chain. For a reconstructed waveform, a sampled peak is also distinct from a bandlimited reconstructed true peak. These distinctions make exported results inspectable rather than merely attractive.

## 11. Local spectra are representations with tunable scales

A single global spectrum can conceal a chirp, abrupt event, drifting resonance or changing operating condition. The short-time Fourier transform moves a chosen window across the record and transforms each segment. Its hop determines how densely the analysis is evaluated in time. A smaller hop produces more columns, but it does not independently improve the frequency discrimination set by the window duration and shape. Boundary padding and phase conventions can also affect the representation. [freq-scipy-stft]

Wavelets offer a different organization of scale. A mother wavelet is translated and stretched, with a normalization such as the stated L2 convention. A dimensionless software scale measured in samples differs from a continuous scale measured in seconds. Converting scale to a pseudo-frequency requires the wavelet centre-frequency convention and the sampling period. Two wavelets can assign different pseudo-frequencies to the same numerical scale. That does not make one a direct measurement of an inherent object frequency.

The PyWavelets documentation provides an especially useful warning: small scales may create inadequately sampled analysing filters and aliasing even when the input signal itself was sampled sensibly. Thus an advanced time-frequency method does not erase basic sampling obligations. A coloured ridge can move when the wavelet, window length, padding or preprocessing changes. Such sensitivity should be examined and reported rather than suppressed. [freq-pywavelets-cwt]

A disciplined local-spectrum experiment compares several analysis scales and asks whether the physically meaningful conclusion remains. For a known chirp, does the inferred ridge follow the injected phase derivative away from edges? For a transient, does a claimed narrow line persist when observation duration changes? For an amplitude zero, does a phase-frequency estimate become unstable? These are inexpensive synthetic controls that identify representational artifacts before an explanation is attached to physiology, archaeology or a new interaction.

## 12. Periodic driving, Floquet analysis and frequency combs

Periodic coefficients in a linear dynamical equation allow a Floquet factorization of its fundamental solution. A periodic factor contains the within-cycle motion, while a constant generator describes accumulated growth and phase. The decomposition requires mathematical hypotheses and a choice of logarithm branch. Quasifrequencies are consequently defined modulo the drive frequency under an appropriate convention. This is a structured description of a declared periodically driven system, not a general theorem that every recurring stimulus forces every part of a material or organism to its own frequency.

A 2026 primary paper on chirality-selective second-harmonic response in monolayer molybdenum disulfide provides a bounded modern example. The inspected abstract and introduction describe circularly polarized ultrafast optical driving, optical Stark and Bloch–Siegert shifts, and a tunable nonlinear optical response. Those are specific material, field and observable claims. They do not validate arbitrary frequency interventions, and this experimental paper is not used as the proof of the general mathematical Floquet theorem. The atlas records the theorem’s assumptions and labels the source relationship as contextual application. [freq-floquet-2026]

A frequency comb organizes another kind of periodic structure. Its tooth frequencies are indexed by an integer times the repetition rate plus a carrier-envelope-offset frequency. The integer is indispensable. An extremely narrow measured beat can still correspond to the wrong absolute optical frequency if the mode number is misidentified. Stabilization, reference transfer and systematic corrections remain necessary.

A 2026 comb-ranging paper combines a coarse time-of-flight estimate with a fine interferometric measurement. The abstract and conclusion describe how the coarse measurement resolves ambiguities that would remain in the fine signal alone. This is a concrete demonstration of the relationship between precision and identifiability: a finely resolved local feature does not necessarily identify the global solution. The authors’ apparatus-specific error figures were not independently reanalysed here, and neither the comb equation nor a narrow interference fringe supplies a complete air-index or distance uncertainty budget. [freq-comb-ranging-2026]

## 13. Beats, carriers and quantum energy require separate explanations

The sum of two equal-phase sine waves factors into a fast carrier and a slowly varying signed cosine. For tones at 220 and 228 hertz, the midpoint is 224 hertz and the magnitude envelope repeats at eight hertz. The signed cosine factor has half that ordinary frequency because its sign reverses on successive magnitude maxima. Confusing signed modulation with absolute-envelope repetition is one source of apparently inconsistent beat formulas.

This is monaural acoustic superposition. Presenting separate tones to separate ears introduces a different auditory situation, and an EEG response introduces another measured channel. A clinical benefit introduces an outcome, comparator and participant population. The algebraic beat identity establishes none of those empirical links. Equal tones provide the simple null: the sum becomes one steady tone with doubled amplitude, rather than an eight-hertz modulation. An experiment that changes tone separation should control loudness and other relevant confounds before interpreting the effect.

Planck’s relation concerns photon energy or a specified quantum energy gap. Its dimensions follow from joule-seconds multiplied by inverse seconds. A photon at an optical frequency has a corresponding quantum energy, but the total energy in a classical acoustic wave also depends on amplitude, volume and occupation. A quiet tone and a loud tone at the same frequency need not carry the same total energy. Assigning one photon-energy number to an entire vibrating body without declaring a quantum model is a category mistake. [freq-si-brochure]

A quantum transition can be unusually low in energy for its category. Thorium-229 is important because its low-energy nuclear transition is accessible in the vacuum-ultraviolet range. That does not mean a nucleus behaves like a speaker, and the adjective nuclear does not guarantee a gamma-ray frequency or superior clock performance. The experimental achievement, the selected transition, the host environment and the frequency comparison must each be described separately.

## 14. What was demonstrated in the 2024 thorium work?

Two distinct steps appear in the selected 2024 sources. Tiedau and colleagues reported resonant laser excitation of the thorium-229 isomer in doped calcium-fluoride crystals. The deposited abstract includes a useful isotope control: the corresponding resonance fluorescence was absent in thorium-232 control material. That supports a specific discrimination within the experiment. The abstract does not, by itself, supply a full clock uncertainty budget or a laboratory replication. This atlas read the DOI record and deposited abstract, not the complete publisher article. [freq-thorium-laser-2024]

A separate Nature paper reported a frequency-ratio link between the thorium nuclear transition and a strontium atomic clock using a vacuum-ultraviolet frequency comb. Its visible abstract describes stabilization of the fundamental comb to the strontium reference and coherent upconversion to the seventh harmonic. It also reports spectroscopic access to nuclear quadrupole structure. The publisher page available here is explicitly a subscription preview. Therefore the review is abstract-only, even though the capture contains page navigation, citations and figure captions. Methods behind an access boundary were not inferred from a large HTML file. [freq-thorium-ratio-2024]

This source audit caught a real provenance failure during discovery. An initially guessed arXiv identifier resolved successfully over HTTP but described a different subject, rather than the desired laser-excitation paper. A successful download and a hash did not make it the right source. The mismatched document is retained privately as a failed identity match and contributes no evidence edge. The verified DOI record replaced that guess for the bounded abstract review.

The conceptual sequence is important: observing excitation, measuring a transition frequency, linking it to an atomic reference, closing a feedback loop and assessing clock systematic uncertainty are related advances, but they are not synonyms. A research graph should connect them with typed relationships rather than compressing all into a node called nuclear clock proved.

## 15. Clocks compare oscillators rather than escaping measurement theory

A clock requires more than a narrow line. It needs a repeatable reference process, an oscillator, interrogation, detection, a servo or equivalent comparison procedure, and an account of shifts and uncertainty. The measured fractional frequency deviation normalizes a difference by a declared nominal frequency. This dimensionless quantity allows comparisons between very different carriers, but both channels and their correlations remain part of the experiment.

A shared reference can be valuable because some fluctuations cancel in a ratio. It can also hide common errors or create correlated uncertainty. A remote comparison adds transfer links, timing conventions, propagation effects and possibly intermittent data. A frequency standard’s internal systematic uncertainty, a measurement against another standard and agreement with a coordinated timescale answer different questions.

Relativity becomes part of this practical accounting. In a small local static height difference near Earth, the higher clock runs faster by approximately gravitational acceleration times height divided by the vacuum light speed squared. A one-centimetre height difference is roughly a part in ten to the eighteenth under this approximation. Precision comparisons require a geopotential model and separate kinematic terms rather than a casual height correction. The observation does not imply that ordinary translation changes a specimen’s intrinsic material constants.

The SI brochure distinguishes an ideal unperturbed defining transition from practical realizations subject to external perturbations. An optical reference can have excellent reproducibility while the formal second remains defined through cesium until a separate metrological decision changes that definition. The selected 2024 and 2026 experiments therefore belong in a dated frontier map, not an assertion that every later clock paper has redefined time. Stating an access date and a bounded source set is more useful than declaring an unqualified world record. [freq-si-brochure; freq-thorium-ratio-2024]

## 16. Stability, accuracy and Allan statistics

A constant frequency bias illustrates the difference between stability and accuracy. Adjacent interval averages are identical, so their Allan variance is zero. Yet every interval can be consistently wrong relative to the intended reference. A stability curve alone cannot identify or remove that bias. Conversely, an unbiased oscillator can fluctuate substantially on short timescales. A meaningful clock report keeps systematic shifts, statistical instability, reference uncertainty and transfer errors distinct.

The non-overlapping Allan estimator squares differences between adjacent fractional-frequency averages and divides their mean by two. Its averaging time is an argument, not an incidental annotation. Other estimators use overlapping data, extra averaging or higher differences. NIST’s frequency-stability handbook explains why the usual sample variance can behave badly for some clock-noise classes, and why Allan, modified Allan, Hadamard and related measures answer different questions. This chapter does not claim that one statistic is universally best. [freq-nist-stability]

For white frequency noise, averaging can produce an Allan-deviation slope proportional to inverse square root of averaging time. A value of one part in ten to the fifteenth at one second would then become one part in ten to the sixteenth at one hundred seconds. That is a conditional benchmark, not a promise of unlimited improvement. Flicker floors, drift, dead time, nonstationarity and correlated noise change the behaviour. Extrapolating a fitted slope far beyond the measured interval is a new assumption that should be visible.

Practical reporting should include the statistic, averaging scheme, dead-time treatment, drift removal, confidence or effective degrees of freedom when assessed, and the raw time-record provenance. Removing drift can improve a stability curve while removing a phenomenon that matters to another question. A pipeline should preserve both the original and transformed records and state what hypothesis each supports. Excellent short-term stability is a technical achievement, but it is not automatically an accurate long-term clock, an independent discovery or a biological timing mechanism.

## 17. Selected 2026 frontier: nuclear feedback and continuous interrogation

The selected 2026 thorium paper reports a feedback-stabilized optical nuclear clock in a room-temperature calcium-fluoride host. The inspected abstract describes a continuous-wave laser coupled to the roughly 148-nanometre transition and comparison through a subharmonic to a ytterbium-ion reference. It also discusses a search for periodic fluctuations and slow drifts relevant to dark-matter models. The evidence status here is selected abstract and introductory text; the full shift budget and source data were not independently reconstructed. Projected future improvement is not reported as already achieved performance. [freq-nuclear-feedback-2026]

This advances a different stage from the 2024 excitation and ratio measurements. It also raises concrete questions: how do host fields and sample conditions shift the transition? How does feedback map detection noise into the stabilized oscillator? Which correlations enter the comparison reference? Which observed fluctuations constrain which coupling model? A measured residual constrains the stated statistical and physical model; it is not a generic detection of a new field simply because the transition is nuclear.

Another 2026 paper reports spatially defined Rabi spectroscopy of continuously transported strontium atoms. The inspected abstract and conclusion describe a 1.2-hertz-wide spectrum and spatial separation of preparation, interrogation and detection. The authors frame this as a route toward dead-time-free clock stabilization. It is therefore important to distinguish an uninterrupted interrogation demonstration from a complete closed-loop clock whose absolute uncertainty has been fully evaluated. [freq-optical-rabi-2026]

Dead time links advanced clock research back to ordinary sampling theory. Intermittent interrogation can alias local-oscillator noise into the clock readout, known as the Dick effect. A continuous architecture targets a specific limitation rather than overriding all uncertainty sources. The source’s promised next step should remain a next step in the atlas. These papers illustrate why frontier review needs a question, observable, method, inspected result and missing premise for each publication, rather than a list of impressive titles arranged by year.

The second-round body reading makes the nuclear-clock performance boundary more concrete. Its Clock operation and Clock performance sections distinguish feedback integration times of twenty seconds and thirty minutes from the averaging time on an overlapping Allan-deviation plot. Within one run the paper reports instability in the low ten-to-the-minus-fourteen range, while repeatability between different days is limited to about five times ten to the minus thirteen. Scans at different crystal positions shift line centres by up to 1.7 kilohertz. The authors propose local strain and host inhomogeneity as an explanation. A successful transition lock and a good within-run Allan curve therefore do not erase reproducibility limits. Prospective gains from more VUV power, narrower lines or improved hosts remain projections. These are source-reported results from inspected body sections, not an independently reconstructed uncertainty budget. [freq-nuclear-feedback-2026]

The strontium body sections also sharpen the meaning of a narrow spectrum. Twelve millimetres divided by sixteen millimetres per second gives a 0.75-second interaction. A rectangular coherent interaction produces a sinc-squared power profile whose full half-power width is approximately 0.886 divided by interaction time, or about 1.18 hertz here. This explains why the reported 1.2-hertz width is compatible with transit time; it is not a measurement of a Lorentzian intrinsic coherence lifetime. The Discussion explicitly leaves closed-loop dead-time-free stabilization as future work and notes response-time and transport-delay bandwidth constraints. The inspected blackbody-shift section uses approximate environmental weighting and thermometry added in a later apparatus run. Those limitations belong beside the line width instead of disappearing into a generic clock-accuracy headline. [freq-optical-rabi-2026]

## 18. A measured spectrum usually has more than one explanation

A simple frequency-domain measurement model multiplies a source spectrum by a channel transfer function and adds noise. If the output component is six in some calibrated units, source amplitude three with gain two and source amplitude two with gain three are indistinguishable from that output alone. A transfer-function zero can make a source component unobservable. Magnitude-only data can lose phase. Multiple physical configurations can share the same finite record within uncertainty.

Cross-spectral methods help when there are two measured channels and defensible assumptions. SciPy’s documentation states its conjugation convention explicitly: the conjugate transform of one channel multiplies the transform of the other. Reversing channel order changes phase conventions. Estimating a transfer function further requires decisions about input noise, output noise, uncorrelated disturbances and excitation coverage. Correlation is not automatically a causal pathway, and a fitted transfer function is not automatically valid outside the measured band or operating regime. [freq-scipy-csd]

The same reasoning limits claims about people, plants, monuments and images. A person has many evolving spectra: breathing, pulse-related motion, vocal pressure, electrical activity and instrument-dependent artifacts. There is no automatically defined single scalar frequency that represents the person across those channels. A monument supports a family of structural and acoustic responses under particular geometry, material and boundary conditions. A sigil or crop-pattern image supplies visible geometry and provenance, not a unique speed, scale or dynamical equation.

A sonification can still be useful when its chosen mapping is documented. A visual descriptor can organize a corpus. A hypothetical frequency can help compare model assumptions. The claim becomes problematic when those selected conversions are presented as measurements or mechanisms. The atlas therefore keeps the free parameter, anchor, channel, uncertainty and alternative model beside any mapping. An attractive graph edge between two topics is a relationship of documentation or mathematical analogy unless independent physical evidence establishes more.

## 19. An executable path through the atlas

A learner can start with the five-level path from frequency through time, phase, instantaneous frequency and the phase-zero counterexample. A second path moves through oscillators, driven response, loading and the distinction between a sensor peak and a mode. A third follows digital measurement through sampling to the disappearing Nyquist sine. These are different investigations, not the same topic renamed to create apparent depth. The topic records label reviewed formula-bearing branches separately from mapped specialties that deserve later expansion.

For a new experiment, write a compact measurement contract before collecting a persuasive example. Name the channel, its units and calibration. State the clock and sampling rate. Define the excitation, observation interval, environmental conditions and boundary model. Preserve raw data and record transformations. Choose a representative null that could expose the proposed interpretation: drive off, equal tone frequencies, matched channels, swapped sensors, doubled scale, a known aliased tone or an unchanged specimen with a changed reference.

Then compute a forward prediction and reconstruct a plausible alternative. A mass–spring fit predicts phase as well as amplitude. A rigid-room calculation predicts a family, not one preferred mode. A comb measurement requires an integer tooth assignment. A clock-stability calculation requires an averaging convention. Use an independent expression or operation for at least one check: compare a response denominator with direct numerical evolution, verify DFT normalization with Parseval, or compare phase accumulation with counted cycles. Re-running the same implementation is useful regression testing but is not an independent reconstruction.

Finally, state the surviving claim at its actual level. An algebraic identity can be exact. A boundary-model prediction can be conditional. A calibrated experiment can support a mechanism over a measured domain. A published abstract can document that its authors report a result. None automatically establishes the broader interpretation that originally motivated the study. Preserving that ladder makes the research product expandable: later measurements can strengthen or reject a particular link without rewriting every earlier mathematical fact.

## 20. Finite coverage and the next useful questions

This chapter includes established mathematical tools, conditional physical models and selected current experiments. It does not provide an exhaustive survey of spectroscopy, nonlinear dynamics, frequency standards, statistical inference or time-frequency theory. In particular, full proofs of general Floquet theory, every distributional transform hypothesis, comprehensive modern clock rankings and full experimental uncertainty budgets remain outside the reviewed corpus. The 2026 sources are a dated selection through the verified cutoff, not an assertion that no competing or later result exists.

The useful next questions are precise. Which additional calibrated channel resolves a source–receiver ambiguity? Which scale and boundary data justify moving from an image to an acoustic solver? Which systematic shifts limit a nuclear transition lock? Which analysis conclusion survives changing windows and observation duration? Which result fails an intentionally discriminating null? Answers to those questions can become new source-linked records and independent checks. A generic assertion that everything is frequency cannot substitute for them.


## Complete formula and theorem register


### Period and frequency — `freq-period`

Status: established-model.

$$
f=1/T
$$

Frequency counts repeated cycles per elapsed time; period is the duration of one complete repetition. This definition presupposes a repeatable event and a declared clock, rather than assigning an oscillation to any object by naming it.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | ordinary frequency in cycles per second | Hz | scalar |
| `T` | period of one cycle | s | scalar |

**Conditions and domain**

- T>0; stationary periodic signal; cycles counted consistently.

**Derivation or proof guide**

1. Choose successive equivalent phase crossings.
2. Divide the number of complete cycles by the elapsed time; for one cycle invert its duration.

**Worked example**

Inputs: {"T_s": 0.002}

1. Invert 0.002 seconds.

Result: 500; units: Hz

**Limits and counterchecks**

- As T grows without bound, f approaches zero.

**Common mistakes**

- A transient or irregular record need not have one period.

Source records: `freq-si-brochure`.

### Ordinary versus angular frequency — `freq-angular`

Status: established-model.

$$
\omega=2\pi f
$$

A full cycle is 2π radians. Ordinary frequency and angular frequency describe the same periodic evolution with different phase-counting conventions. The radian is a named dimensionless SI unit, but retaining rad in labels prevents factor-of-2π mistakes.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `ω` | angular frequency | rad s⁻¹ | scalar |
| `f` | ordinary frequency in cycles per second | Hz | scalar |
| `π` | circle constant, about 3.141592653589793 | dimensionless | constant |

**Conditions and domain**

- Sinusoidal phase or a specified phase-rate definition.

**Derivation or proof guide**

1. One cycle increments phase by 2π.
2. Differentiate phase 2πft with respect to time.

**Worked example**

Inputs: {"f_Hz": 50}

1. Multiply 50 by 2π.

Result: 314.159; units: rad s⁻¹

**Limits and counterchecks**

- Zero frequency gives zero angular frequency.

**Common mistakes**

- Do not insert a frequency in Hz into an equation that expects rad/s.

Source records: `freq-si-brochure`, `freq-feynman-oscillator`.

### Instantaneous phase frequency — `freq-instantaneous`

Status: conditional-result.

$$
f(t)=\frac{1}{2\pi}\frac{d\phi}{dt}
$$

For a resolved single-component signal, phase slope defines a local frequency. This is conditional on choosing a continuous phase representation and on adequate amplitude and signal quality. It is not a unique decomposition of an arbitrary multicomponent waveform.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | ordinary frequency in cycles per second | Hz | scalar |
| `φ` | continuous phase under stated unwrap convention | rad | scalar |
| `t` | elapsed time | s | coordinate |
| `π` | circle constant, about 3.141592653589793 | dimensionless | constant |

**Conditions and domain**

- Unwrapped differentiable phase; amplitude not zero; phase model declared.

**Derivation or proof guide**

1. Represent one component by amplitude times cosine of phase.
2. Define frequency as cycles of phase accumulated per unit time.

**Worked example**

Inputs: {"phase": "φ(t)=2π(100t+5t²)"}

1. Differentiate: dφ/dt=2π(100+10t).
2. Evaluate at t=2 s.

Result: 120; units: Hz

**Limits and counterchecks**

- Constant phase has zero local frequency.

**Common mistakes**

- Phase at an amplitude zero can be undefined; differentiation amplifies noise.

Source records: `freq-numpy-fft`, `freq-scipy-stft`.

### Undamped mass–spring natural frequency — `freq-oscillator`

Status: established-model.

$$
\omega_0=\sqrt{K/m}
$$

The free natural frequency follows from stiffness and inertia, not from the current drive. It is the frequency of one selected linearized coordinate under specified constraints. A real body generally supplies many coordinates and modes.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `ω₀` | undamped natural angular frequency | rad s⁻¹ | scalar |
| `K` | linear stiffness | N m⁻¹ | coupling |
| `m` | mass | kg | scalar |

**Conditions and domain**

- m>0; K>0; linear Hookean restoring force; no damping.

**Derivation or proof guide**

1. Start with m x″+Kx=0.
2. Insert x=A cos(ωt) and require K−mω²=0.

**Worked example**

Inputs: {"K_N_per_m": 100, "m_kg": 1}

1. Take sqrt(100/1).
2. Divide angular frequency by 2π to express Hz.

Result: ω₀=10 rad/s; f₀≈1.59155 Hz; units: rad s⁻¹ and Hz

**Limits and counterchecks**

- K→0 removes the restoring oscillation.

**Common mistakes**

- Support stiffness and effective mass must match the same coordinate.

Source records: `freq-feynman-oscillator`.

### Damped free oscillation — `freq-damped`

Status: established-model.

$$
\omega_d=\sqrt{\omega_0^2-\gamma^2},\quad\gamma=b/(2m)
$$

A viscously damped oscillator rings with an exponential envelope and a shifted oscillation frequency. This describes the underdamped free motion; the frequency of the maximum forced displacement is a different quantity.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `ω_d` | damped free angular frequency | rad s⁻¹ | scalar |
| `ω₀` | undamped natural angular frequency | rad s⁻¹ | scalar |
| `γ` | amplitude decay rate b/(2m) | s⁻¹ | scalar |
| `b` | viscous damping coefficient | kg s⁻¹ | coupling |
| `m` | mass | kg | scalar |

**Conditions and domain**

- Linear viscous damping; 0≤γ<ω₀.

**Derivation or proof guide**

1. Solve the characteristic polynomial r²+2γr+ω₀²=0.
2. Its roots are −γ±iω_d; the real part sets decay and imaginary part sets oscillation.

**Worked example**

Inputs: {"omega0_rad_s": 10, "gamma_per_s": 1}

1. Compute sqrt(100−1).

Result: 9.949874; units: rad s⁻¹

**Limits and counterchecks**

- At γ=0 recover ω₀; critical damping has no sinusoidal ringing.

**Common mistakes**

- Do not continue the square root as a real oscillation above critical damping.
- Feynman I23 writes the damping coefficient as b/m; this atlas gamma is b/(2m), requiring an explicit factor-of-two translation.

Source records: `freq-feynman-resonance`.

### Quality factor in the weakly damped oscillator — `freq-q`

Status: approximation.

$$
Q=\omega_0/(2\gamma)=m\omega_0/b
$$

Quality factor compares stored energy with energy dissipated over an oscillation. For this linear viscous model the damping definition gives Q=ω₀/(2γ); the familiar energy-lost-per-cycle interpretation is most direct when damping is weak.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Q` | quality factor under the stated energy/linewidth convention | dimensionless | scalar |
| `ω₀` | undamped natural angular frequency | rad s⁻¹ | scalar |
| `γ` | amplitude decay rate b/(2m) | s⁻¹ | scalar |
| `m` | mass | kg | scalar |
| `b` | viscous damping coefficient | kg s⁻¹ | coupling |

**Conditions and domain**

- Positive viscous damping; energy/linewidth comparisons use weak damping.

**Derivation or proof guide**

1. The displacement envelope decays as e^(−γt), so energy decays twice as fast.
2. Compare the energy-loss timescale with the oscillation timescale.

**Worked example**

Inputs: {"omega0_rad_s": 1000, "gamma_per_s": 5}

1. Divide 1000 by 10.

Result: 100; units: dimensionless

**Limits and counterchecks**

- b→0 yields diverging Q in the lossless idealization.

**Common mistakes**

- A high Q stores supplied energy; it is not energy creation.
- Feynman I23 writes the damping coefficient as b/m; this atlas gamma is b/(2m), requiring an explicit factor-of-two translation.
- Free ring-down amplitude decays at γ while energy decays at 2γ; loaded Q, internal Q and external-coupling Q are not interchangeable.

Source records: `freq-feynman-resonance`.

### Complex forced displacement response — `freq-response`

Status: established-model.

$$
H(\omega)=\frac{1}{K-m\omega^2+\mathrm{i}b\omega}
$$

The displacement-to-force transfer function contains both gain and phase. The stated sign follows the e^(iωt) convention. It makes an experimentally useful prediction only when force and displacement channels, units, loading and calibration are specified.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `H` | displacement/force frequency response | m N⁻¹ | operator |
| `K` | linear stiffness | N m⁻¹ | coupling |
| `m` | mass | kg | scalar |
| `b` | viscous damping coefficient | kg s⁻¹ | coupling |
| `ω` | angular frequency | rad s⁻¹ | scalar |
| `i` | imaginary unit satisfying i²=−1; not electric current | dimensionless | constant |

**Conditions and domain**

- Steady sinusoidal forcing; linear time-invariant system; e^(iωt) phasors.

**Derivation or proof guide**

1. Insert complex sinusoidal force and displacement into the equation of motion.
2. Cancel the common time factor and divide displacement amplitude by force amplitude.

**Worked example**

Inputs: {"K": 100, "m": 1, "b": 2, "omega": 10}

1. At ω=10 the real stiffness and inertia cancel.
2. H=1/(i20)=−i0.05.

Result: |H|=0.05; phase=−π/2; units: m N⁻¹; rad

**Limits and counterchecks**

- At ω=0 recover static compliance 1/K.

**Common mistakes**

- Changing phasor convention conjugates the imaginary sign, not the measurable prediction.

Source records: `freq-feynman-resonance`.

### Forced-displacement peak frequency — `freq-peak`

Status: established-model.

$$
\omega_r=\sqrt{\omega_0^2-2\gamma^2}
$$

For a flat force amplitude and frequency-independent viscous damping, the maximum displacement occurs below the undamped natural frequency. Other measured quantities, such as velocity, absorbed power or a microphone output, can peak elsewhere.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `ω_r` | displacement-amplitude peak angular frequency | rad s⁻¹ | scalar |
| `ω₀` | undamped natural angular frequency | rad s⁻¹ | scalar |
| `γ` | amplitude decay rate b/(2m) | s⁻¹ | scalar |

**Conditions and domain**

- γ<ω₀/√2; displacement amplitude; constant driving-force amplitude.

**Derivation or proof guide**

1. Square the magnitude of the denominator of H.
2. Set its frequency derivative to zero and select the positive minimum.

**Worked example**

Inputs: {"omega0": 10, "gamma": 1}

1. Compute sqrt(100−2).

Result: 9.899495; units: rad s⁻¹

**Limits and counterchecks**

- At zero damping this approaches ω₀; above the stated bound the interior displacement peak disappears.

**Common mistakes**

- A spectral maximum does not automatically equal the isolated object natural mode.
- Feynman I23 writes the damping coefficient as b/m; this atlas gamma is b/(2m), requiring an explicit factor-of-two translation.

Source records: `freq-feynman-resonance`.

### Loaded resonance linewidth — `freq-linewidth`

Status: approximation.

$$
Q\simeq f_0/\Delta f
$$

The linewidth relationship uses the half-power bandwidth of a single narrow resonance. Loaded Q includes energy loss through the measurement and drive ports as well as internal loss. A different amplitude threshold or a superposition of modes changes the inference.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Q` | quality factor under the stated energy/linewidth convention | dimensionless | scalar |
| `f₀` | centre frequency of the isolated narrow resonance | Hz | scalar |
| `Δf` | specified bandwidth or tone separation, as defined locally | Hz | scalar |

**Conditions and domain**

- Isolated weakly damped resonance; Δf is full width at half maximum of power.

**Derivation or proof guide**

1. Approximate the response denominator near its resonance.
2. Find the two frequencies where response power is half its peak value.

**Worked example**

Inputs: {"f0_Hz": 1000, "bandwidth_Hz": 10}

1. Divide 1000 by 10.

Result: 100; units: dimensionless

**Limits and counterchecks**

- Vanishing linewidth gives divergent ideal Q.

**Common mistakes**

- Half amplitude is not half power; unresolved neighboring peaks violate the fit model.
- Δf is the full half-power width, not the half-width-at-half-maximum (HWHM=Δf/2). Loaded loss rates add only when the declared independent-port linear-loss model applies.

Source records: `freq-feynman-resonance`.

### Coupled normal-mode eigenproblem — `freq-modes`

Status: established-model.

$$
Kq=\omega^2Mq
$$

A coupled body has a family of mode shapes and eigenfrequencies. Positive mass and appropriate stiffness/boundary conditions determine the mathematical problem. A plotted shape alone does not specify the matrices, physical scale or material properties.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `K` | stiffness matrix | N m⁻¹ | tensor |
| `M` | positive mass matrix | kg | tensor |
| `q` | normal-mode displacement vector | m | vector |
| `ω` | angular frequency | rad s⁻¹ | scalar |

**Conditions and domain**

- Linear conservative finite-dimensional model; M positive definite; declared supports.

**Derivation or proof guide**

1. Insert q(t)=q₀e^(iωt) into Mq″+Kq=0.
2. Require a nonzero eigenvector instead of inverting a singular dynamic stiffness.

**Worked example**

Inputs: {"M": "I kg", "K": "diag(4,9) N/m"}

1. Read the two eigenvalues 4 and 9.
2. Take their positive square roots.

Result: 2 and 3; units: rad s⁻¹

**Limits and counterchecks**

- A zero stiffness eigenvalue is a rigid or marginal mode, not a positive resonance.

**Common mistakes**

- Degeneracies and damping can require different modal coordinates.

Source records: `freq-feynman-oscillator`.

### Nondispersive wave equation — `freq-wave`

Status: established-model.

$$
\partial_t^2u=c^2\partial_x^2u,\quad\omega=ck
$$

For a uniform one-dimensional nondispersive medium, sinusoidal plane waves satisfy a linear relation between angular frequency and spatial wave number. The medium speed belongs to that wave equation and is not automatically the vacuum speed of light.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `u` | wave-field displacement | m | state |
| `c` | phase speed in the declared medium | m s⁻¹ | scalar |
| `k` | spatial angular wave number | rad m⁻¹ | scalar |
| `ω` | angular frequency | rad s⁻¹ | scalar |
| `x` | displacement | m | coordinate |
| `t` | elapsed time | s | coordinate |

**Conditions and domain**

- Linear uniform 1D medium; no dispersion, dissipation or unspecified boundaries.

**Derivation or proof guide**

1. Insert u=A exp(i(kx−ωt)).
2. Cancel the nonzero wave factor and compare ω² with c²k².

**Worked example**

Inputs: {"c_m_s": 343, "f_Hz": 343}

1. Use λ=c/f=1 m.
2. Thus k=2π rad/m.

Result: λ=1 m; ω=2π·343 rad/s; units: m and rad s⁻¹

**Limits and counterchecks**

- At k=0 the chosen acoustic branch has ω=0.

**Common mistakes**

- A boundary-value spectrum needs boundary conditions beyond a plane-wave dispersion law.

Source records: `freq-feynman-oscillator`.

### Phase and group velocity — `freq-velocities`

Status: conditional-result.

$$
v_p=\omega/k,\quad v_g=d\omega/dk
$$

Phase speed follows constant phase; group speed follows the envelope of a narrow wave packet under suitable smooth dispersion. Neither expression alone proves a signal-front speed or licenses superluminal information transfer.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `v_p` | phase velocity | m s⁻¹ | scalar |
| `v_g` | group velocity dω/dk | m s⁻¹ | scalar |
| `ω` | angular frequency | rad s⁻¹ | scalar |
| `k` | spatial angular wave number | rad m⁻¹ | scalar |

**Conditions and domain**

- k≠0 for phase speed; smooth branch and narrowband packet for group speed.

**Derivation or proof guide**

1. Keep kx−ωt constant for a phase crest.
2. Expand ω(k) to first order around the carrier to obtain envelope translation.

**Worked example**

Inputs: {"dispersion": "ω=αk²", "at": "k=2 m⁻¹, α=3 m²/s"}

1. Compute ω=12 s⁻¹.
2. v_p=6 and v_g=2αk=12.

Result: v_p=6; v_g=12; units: m s⁻¹

**Limits and counterchecks**

- For ω=ck both reduce to c.

**Common mistakes**

- Absorbing and strongly distorted pulses need more than an envelope-velocity formula.

Source records: `freq-feynman-oscillator`.

### Fixed-end string modes — `freq-string`

Status: established-model.

$$
f_n=nc/(2L)
$$

A string fixed at both ends supports integer spatial half-wavelengths. This is a declared string model, not a formula that assigns a monument, sigil or arbitrary image its natural frequency.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | ordinary frequency in cycles per second | Hz | scalar |
| `n` | integer mode or comb index under the local definition | dimensionless | scalar |
| `c` | phase speed in the declared medium | m s⁻¹ | scalar |
| `L` | specified physical length | m | scalar |

**Conditions and domain**

- Uniform ideal string; fixed displacement at both ends; n positive integer.

**Derivation or proof guide**

1. Boundary zeros require k_nL=nπ.
2. Combine ω=ck with f=ω/(2π).

**Worked example**

Inputs: {"L_m": 1, "c_m_s": 100, "n": 3}

1. Evaluate 3·100/(2·1).

Result: 150; units: Hz

**Limits and counterchecks**

- Double L at fixed c and n to halve f.

**Common mistakes**

- Air cavities and elastic plates have different boundary equations.

Source records: `freq-feynman-oscillator`.

### Ideal rigid rectangular-room modes — `freq-room`

Status: conditional-result.

$$
f_{n_xn_yn_z}=\frac c2\sqrt{(n_x/L_x)^2+(n_y/L_y)^2+(n_z/L_z)^2}
$$

A separable pressure-wave model in a rigid rectangular cavity gives a modal family indexed by three nonnegative integers. Wall impedance, openings, obstacles and real geometry change this spectrum and its linewidths.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | ordinary frequency in cycles per second | Hz | scalar |
| `c` | phase speed in the declared medium | m s⁻¹ | scalar |
| `L_x` | room dimension along x | m | scalar |
| `L_y` | room dimension along y | m | scalar |
| `L_z` | room dimension along z | m | scalar |
| `n_x` | nonnegative integer mode index along x | dimensionless | scalar |
| `n_y` | nonnegative integer mode index along y | dimensionless | scalar |
| `n_z` | nonnegative integer mode index along z | dimensionless | scalar |

**Conditions and domain**

- Rigid-wall pressure Neumann boundaries; rectangular uniform medium; indices not all zero.

**Derivation or proof guide**

1. Separate the Helmholtz equation into three cosine factors.
2. Add the squared axial wave numbers and convert angular frequency to Hz.

**Worked example**

Inputs: {"lengths_m": [5, 4, 3], "c_m_s": 343, "indices": [1, 0, 0]}

1. Only the 5 m axial term remains.
2. Compute 343/(2·5).

Result: 34.3; units: Hz

**Limits and counterchecks**

- Scale every room dimension by two to halve every mode frequency.

**Common mistakes**

- L_x,L_y,L_z each have units m; n_x,n_y,n_z are integer indices. A photograph does not supply these dimensions or walls.

Source records: `freq-feynman-oscillator`.

### Continuous Fourier transform convention — `freq-fourier`

Status: established-model.

$$
X(f)=\int_{-\infty}^{\infty}x(t)e^{-\mathrm{i}2\pi ft}\,dt
$$

The transform resolves a time signal into complex frequency components under one explicit normalization. Displacement data produce transform units of metre-seconds. Generalized functions are needed for ideal infinite-duration pure tones.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `X(f)` | continuous Fourier transform of x(t) | m s | operator |
| `x` | displacement | m | coordinate |
| `f` | ordinary frequency in cycles per second | Hz | scalar |
| `t` | elapsed time | s | coordinate |
| `π` | circle constant, about 3.141592653589793 | dimensionless | constant |
| `i` | imaginary unit satisfying i²=−1; not electric current | dimensionless | constant |

**Conditions and domain**

- Integrable signal or stated generalized-function/L2 interpretation.

**Derivation or proof guide**

1. Project the signal onto complex exponentials with frequency f.
2. Retain the dt factor, which supplies the time dimension.

**Worked example**

Inputs: {"signal": "x(t)=e^(−at) for t≥0; a=2 s⁻¹, amplitude1 m"}

1. Integrate the decaying complex exponential.

Result: X(f)=1/(2+i2πf) m·s; units: m s

**Limits and counterchecks**

- At f=0 the transform equals the time integral of the signal.

**Common mistakes**

- An FFT array is not automatically the continuous transform without sample-spacing scaling.

Source records: `freq-numpy-fft`, `freq-sympy-laplace`.

### Inverse Fourier reconstruction — `freq-inverse-fourier`

Status: theorem.

$$
x(t)=\int_{-\infty}^{\infty}X(f)e^{\mathrm{i}2\pi ft}\,df
$$

Under compatible hypotheses the inverse combines complex components to recover the signal. The frequency integral supplies inverse seconds, restoring the original signal units; phase is essential to the reconstruction.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `x` | displacement | m | coordinate |
| `X(f)` | continuous Fourier transform of x(t) | m s | operator |
| `f` | ordinary frequency in cycles per second | Hz | scalar |
| `t` | elapsed time | s | coordinate |
| `π` | circle constant, about 3.141592653589793 | dimensionless | constant |
| `i` | imaginary unit satisfying i²=−1; not electric current | dimensionless | constant |

**Conditions and domain**

- Sufficient pointwise form: x and its Fourier transform X are both integrable on R; the inverse equals x almost everywhere and at continuity points. L2 inversion is a separate mean-square statement.

**Derivation or proof guide**

1. Use orthogonality in the distributional or Hilbert-space sense.
2. Integrate X against the opposite-sign exponential.

**Worked example**

Inputs: {"pair": "exp(−2t)·1(t) ↔ 1/(2+i2πf)"}

1. Apply the inverse with its specified sign.

Result: Recover the causal exponential at continuity points.; units: m

**Limits and counterchecks**

- Removing all Fourier components gives the zero signal.

**Common mistakes**

- Magnitude-only spectra generally cannot reconstruct phase or a unique time waveform.

Source records: `freq-numpy-fft`, `freq-sympy-laplace`.

### Linear convolution theorem — `freq-convolution`

Status: theorem.

$$
\mathcal F\{h*x\}(f)=H(f)X(f)
$$

For a linear time-invariant channel, convolution in time corresponds to multiplication in frequency. The output spectrum includes the channel response, so a strong output line can come from propagation, sensor or electronics rather than the source alone.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `h(t)` | time-domain LTI impulse-response kernel | output/(input·s) | operator |
| `x(t)` | input signal, here displacement for unit illustration | m | state |
| `*` | convolution: (h*x)(t)=∫h(t−u)x(u)du, where u and t are time coordinates in seconds | operator convention; includes integration over s | operator |
| `𝓕` | Fourier transform with negative exponent −i2πft | maps a signal unit to signal unit·s | operator |
| `H(f)` | Fourier transform of the impulse response | output/input | operator |
| `X(f)` | Fourier transform of the input | m s | state |
| `f` | ordinary transform frequency | Hz | coordinate |

**Conditions and domain**

- Sufficient classical form: x,h are integrable on R, so Fubini applies; compatible Fourier convention. A physical time-domain impulse kernel has output/(input·s) units and its H has output/input units.

**Derivation or proof guide**

1. Insert the convolution integral into the Fourier definition.
2. Exchange integrals under appropriate convergence conditions and shift the time variable.

**Worked example**

Inputs: {"gain": "H=2 dimensionless", "input_component": "X=3 m·s"}

1. Multiply the complex components.

Result: Y=6; units: m s

**Limits and counterchecks**

- H=0 suppresses every source component at that frequency.

**Common mistakes**

- A transfer-function zero destroys information that naive division cannot restore.

Source records: `freq-scipy-csd`.

### Causal Laplace transform and convergence — `freq-laplace`

Status: established-model.

$$
X(s)=\int_0^{\infty}x(t)e^{-st}\,dt,\quad s=\sigma+\mathrm{i}\omega
$$

The Laplace variable carries both decay/growth weighting and angular oscillation. Its region of convergence is part of the transform. A formal substitution s=iω does not establish that a Fourier transform exists on that boundary.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `X(s)` | causal Laplace transform of displacement x(t) | m s | operator |
| `s` | complex Laplace frequency σ+iω | s⁻¹ | scalar |
| `σ` | Laplace exponential growth/decay parameter | s⁻¹ | scalar |
| `ω` | angular frequency | rad s⁻¹ | scalar |
| `x` | displacement | m | coordinate |
| `t` | elapsed time | s | coordinate |
| `i` | imaginary unit satisfying i²=−1; not electric current | dimensionless | constant |

**Conditions and domain**

- Causal convention; integral converges for stated Re(s).

**Derivation or proof guide**

1. Multiply the causal response by exponential weighting.
2. Identify where the tail integral converges before simplifying algebra.

**Worked example**

Inputs: {"x": "e^(−2t)·1(t) m"}

1. Integrate exp[−(s+2)t].

Result: X=1/(s+2); Re(s)>−2; units: m s

**Limits and counterchecks**

- At s=0 recover total area 0.5 m·s.

**Common mistakes**

- The algebraic fraction alone omits the causal region of convergence.

Source records: `freq-sympy-laplace`.

### Finite discrete Fourier transform — `freq-dft`

Status: theorem.

$$
X_k=\sum_{j=0}^{N-1}x_j e^{-\mathrm{i}2\pi jk/N}
$$

The DFT is an exact invertible change of coordinates for a finite sample vector under its chosen normalization. It is not, by itself, proof of the spectrum of the unsampled physical world.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `X_k` | unscaled forward DFT coefficient | m | state |
| `x_j` | sampled signal, here displacement for unit illustration | m | state |
| `N` | number of samples | dimensionless | scalar |
| `j` | time-sample integer index | dimensionless | scalar |
| `k` | DFT integer bin index | dimensionless | scalar |
| `π` | circle constant, about 3.141592653589793 | dimensionless | constant |
| `i` | imaginary unit satisfying i²=−1; not electric current | dimensionless | constant |

**Conditions and domain**

- N positive integer; forward transform unscaled, inverse divided by N.

**Derivation or proof guide**

1. Choose the N orthogonal discrete complex exponentials.
2. Compute their finite inner products with the sample vector.

**Worked example**

Inputs: {"samples": [1, 0, -1, 0]}

1. Use the four-point forward convention.

Result: [0,2,0,2]; units: input unit (m in this illustration)

**Limits and counterchecks**

- A constant vector has only its DC coefficient nonzero.

**Common mistakes**

- FFT names an algorithm; DFT names the mathematical transform.

Source records: `freq-numpy-fft`.

### DFT frequency grid — `freq-bins`

Status: established-model.

$$
f_k=kf_s/N,\quad\Delta f=f_s/N=1/T_{obs}
$$

The standard DFT grid spacing is reciprocal record duration. Zero padding provides additional interpolation points but does not create an independently longer measurement or separate arbitrarily close noisy components.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | ordinary frequency in cycles per second | Hz | scalar |
| `k` | DFT integer bin index | dimensionless | scalar |
| `f_s` | sampling rate | Hz | scalar |
| `N` | number of samples | dimensionless | scalar |
| `Δf` | specified bandwidth or tone separation, as defined locally | Hz | scalar |
| `T_obs` | observation duration | s | scalar |

**Conditions and domain**

- Uniform sampling; T_obs=N/f_s; signed negative bins identified consistently.

**Derivation or proof guide**

1. N equally spaced phase patterns span the finite vector.
2. Convert phase advance per sample into cycles per second.

**Worked example**

Inputs: {"fs_Hz": 1000, "N": 2000}

1. T_obs=2 s.
2. Compute 1000/2000.

Result: 0.5; units: Hz

**Limits and counterchecks**

- Doubling observation duration at fixed rate halves grid spacing.

**Common mistakes**

- Grid spacing, estimator uncertainty and two-line resolution are different notions.

Source records: `freq-numpy-fft`.

### Discrete-time alias equivalence — `freq-alias`

Status: theorem.

$$
e^{\mathrm{i}2\pi(f+nf_s)j/f_s}=e^{\mathrm{i}2\pi fj/f_s}
$$

Sampling identifies complex tones whose frequencies differ by an integer sampling rate. Real cosines add sign ambiguity. No later plot or machine-learning method can distinguish those aliases from the identical samples without additional assumptions or measurements.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | ordinary frequency in cycles per second | Hz | scalar |
| `n` | integer mode or comb index under the local definition | dimensionless | scalar |
| `f_s` | sampling rate | Hz | scalar |
| `j` | time-sample integer index | dimensionless | scalar |
| `π` | circle constant, about 3.141592653589793 | dimensionless | constant |
| `i` | imaginary unit satisfying i²=−1; not electric current | dimensionless | constant |

**Conditions and domain**

- Uniform ideal sample times; n and j integers.

**Derivation or proof guide**

1. Expand the extra phase as 2πnj.
2. Its complex exponential equals one for every sample.

**Worked example**

Inputs: {"fs_Hz": 1000, "tones_Hz": [100, 1100]}

1. Their difference is one sampling rate.

Result: Identical complex sample sequences.; units: dimensionless identity

**Limits and counterchecks**

- Adding n=0 leaves the same frequency.

**Common mistakes**

- Anti-alias filtering must occur before irrecoverable sampling.

Source records: `freq-numpy-fft`.

### Bandlimited sampling condition — `freq-nyquist`

Status: theorem.

$$
f_{max}<f_s/2
$$

A strictly bandlimited signal can be reconstructed in the ideal sampling theorem when the sample rate exceeds twice its highest frequency. Equality is delicate: a sine exactly at Nyquist can vanish at every sample. Real hardware needs a transition band and analog filtering.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f_max` | highest absolute occupied signal frequency B, not an arbitrary oscillator carrier | Hz | scalar |
| `f_s` | uniform sampling rate | Hz | scalar |
| `B` | bandlimit used in the stated theorem hypothesis; equal to f_max | Hz | scalar |

**Conditions and domain**

- Ideal theorem: an L2 continuous-time signal has Fourier support in [−B,B] with B<f_s/2; infinitely many exact uniform samples and the associated ideal reconstruction are available. A finite record and real filter need extra error analysis.

**Derivation or proof guide**

1. Sampling repeats the spectrum every f_s.
2. Require its shifted copies not to overlap.

**Worked example**

Inputs: {"fs_Hz": 8000}

1. Choose frequencies strictly below 4000 Hz.

Result: A 4000 Hz zero-phase sine samples to zero; 1000 Hz is within the strict band.; units: Hz

**Limits and counterchecks**

- DC remains representable if the measurement chain preserves it.

**Common mistakes**

- A high sample rate alone does not certify bandwidth, clock accuracy or sensor calibration.

Source records: `freq-numpy-fft`, `freq-pywavelets-cwt`.

### Periodic Hann analysis window — `freq-hann`

Status: established-model.

$$
w_j=\tfrac12[1-\cos(2\pi j/N)]
$$

Windowing reduces discontinuities in the assumed repeated record, trading spectral leakage against main-lobe width and changing amplitude normalization. The periodic N-denominator form differs from the symmetric N−1 form used in some applications.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `w_j` | dimensionless discrete window | dimensionless | scalar |
| `j` | time-sample integer index | dimensionless | scalar |
| `N` | number of samples | dimensionless | scalar |
| `π` | circle constant, about 3.141592653589793 | dimensionless | constant |

**Conditions and domain**

- N>1; explicitly periodic window for DFT analysis.

**Derivation or proof guide**

1. Combine a constant with one cosine over the record.
2. Multiplication in time convolves spectra and changes apparent peak shape.

**Worked example**

Inputs: {"N": 4}

1. Evaluate j=0,1,2,3.

Result: [0,0.5,1,0.5]; units: dimensionless

**Limits and counterchecks**

- A rectangular window is the distinct choice w_j=1.

**Common mistakes**

- Do not mix symmetric and periodic window calibration constants.

Source records: `freq-scipy-periodogram`, `freq-scipy-welch`.

### Coherent window gain — `freq-gain`

Status: established-model.

$$
G=N^{-1}\sum_{j=0}^{N-1}w_j
$$

The mean window weight calibrates a bin-centred coherent tone under the declared transform convention. It is not the same normalization used for broadband noise power, which depends on the sum of squared weights.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `G` | coherent gain, mean window value | dimensionless | scalar |
| `N` | number of samples | dimensionless | scalar |
| `w_j` | dimensionless discrete window | dimensionless | scalar |
| `j` | time-sample integer index | dimensionless | scalar |

**Conditions and domain**

- Coherent bin-centred tone; nonzero sum of window values; corresponding amplitude estimator.

**Derivation or proof guide**

1. Window a coherent complex tone and evaluate its matching DFT bin.
2. All phase terms cancel, leaving the sum of window weights.

**Worked example**

Inputs: {"window": "periodic Hann", "N": 4}

1. Sum [0,0.5,1,0.5]=2.
2. Divide by 4.

Result: 0.5; units: dimensionless

**Limits and counterchecks**

- A rectangular window gives G=1.

**Common mistakes**

- For real tone amplitude, also account for the positive/negative-frequency split and DC/Nyquist exceptions.

Source records: `freq-scipy-periodogram`.

### Two-sided windowed periodogram density — `freq-psd`

Status: established-model.

$$
P_k=|\mathrm{DFT}(w_jx_j)_k|^2/(f_s\sum_jw_j^2)
$$

Power spectral density records signal squared per hertz, rather than signal amplitude or a per-bin power. A one-sided real-data form doubles the positive interior bins, retaining separate DC and Nyquist treatment.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `P_k` | two-sided displacement spectral-density estimate | m² Hz⁻¹ | scalar |
| `x_j` | sampled signal, here displacement for unit illustration | m | state |
| `w_j` | dimensionless discrete window | dimensionless | scalar |
| `N` | number of samples | dimensionless | scalar |
| `j` | time-sample integer index | dimensionless | scalar |
| `k` | DFT integer bin index | dimensionless | scalar |
| `f_s` | sampling rate | Hz | scalar |

**Conditions and domain**

- Real or complex finite samples; detrending and two-sided convention stated; nonzero window energy.
- For real data, one-sided interior positive-frequency bins are doubled. DC is not doubled; for even N the Nyquist bin is not doubled; for odd N there is no Nyquist endpoint bin.

**Derivation or proof guide**

1. Square the windowed transform magnitude.
2. Normalize by sample rate and total window-squared weight for density units.

**Worked example**

Inputs: {"unit": "voltage samples in V", "fs_Hz": 1000}

1. DFT squared has V².
2. The denominator contributes Hz.

Result: PSD unit is V²/Hz; an integrated band has V².; units: signal² Hz⁻¹

**Limits and counterchecks**

- Zero samples produce zero PSD.

**Common mistakes**

- A log plot must state its reference and whether it displays amplitude, power or density.

Source records: `freq-scipy-periodogram`, `freq-scipy-welch`.

### DFT energy identity — `freq-parseval`

Status: theorem.

$$
\sum_j|x_j|^2=N^{-1}\sum_k|X_k|^2
$$

Parseval’s finite identity checks normalization by matching the squared norm in sample and DFT coordinates. It is a mathematical identity for this vector; converting it to physical energy still requires sample spacing, impedances and a calibrated channel model.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `x_j` | sampled signal, here displacement for unit illustration | m | state |
| `X_k` | unscaled forward DFT coefficient | m | state |
| `N` | number of samples | dimensionless | scalar |
| `j` | time-sample integer index | dimensionless | scalar |
| `k` | DFT integer bin index | dimensionless | scalar |

**Conditions and domain**

- Unscaled forward DFT and 1/N inverse; finite vector.

**Derivation or proof guide**

1. Use discrete exponential orthogonality.
2. Cross terms vanish except matching sample indices.

**Worked example**

Inputs: {"samples": [1, 0, -1, 0], "DFT": [0, 2, 0, 2]}

1. Time squared sum=2.
2. Frequency squared sum/4=8/4.

Result: Both sides equal 2.; units: signal²

**Limits and counterchecks**

- The zero vector gives zero on both sides.

**Common mistakes**

- Sum of microphone-pressure squared is not automatically joules.

Source records: `freq-numpy-fft`.

### Short-time Fourier transform — `freq-stft`

Status: established-model.

$$
S(\tau,f)=\int x(t)w(t-\tau)e^{-\mathrm{i}2\pi ft}\,dt
$$

The STFT measures local spectral content under a chosen window and hop. It shows change across the record but trades temporal localization against frequency discrimination. A bright ridge is conditional on this representation and its calibration.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `S(τ,f)` | windowed Fourier transform | m s | operator |
| `x` | displacement | m | coordinate |
| `w(t−τ)` | dimensionless continuous analysis window translated to τ | dimensionless | state |
| `τ` | window centre or averaging time as declared locally | s | coordinate |
| `f` | ordinary frequency in cycles per second | Hz | scalar |
| `t` | elapsed time | s | coordinate |
| `π` | circle constant, about 3.141592653589793 | dimensionless | constant |
| `i` | imaginary unit satisfying i²=−1; not electric current | dimensionless | constant |

**Conditions and domain**

- Specified window, overlap/hop, padding, normalization and sampling.

**Derivation or proof guide**

1. Multiply by a translated window.
2. Transform that local weighted segment and repeat across centre times.

**Worked example**

Inputs: {"window_s": 0.1, "fs_Hz": 10000}

1. A 1000-sample window spans 0.1 s.
2. Its basic frequency grid is 10 Hz before padding.

Result: 100 ms window; 10 Hz grid.; units: s and Hz

**Limits and counterchecks**

- A window covering the full record reduces to one windowed transform.

**Common mistakes**

- A smaller hop does not independently improve the window’s frequency resolution.

Source records: `freq-scipy-stft`.

### L2-normalized continuous wavelet transform — `freq-wavelet`

Status: conditional-result.

$$
W(a,\tau)=a^{-1/2}\int x(t)\psi^*((t-\tau)/a)\,dt
$$

Wavelet scale stretches a declared mother wavelet. Scale is not automatically hertz; converting it to frequency depends on the wavelet’s centre-frequency convention and sample period. Small sampled scales may alias even when the original input was properly sampled.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `W(a,τ)` | continuous wavelet coefficient for L2-normalized scale | m s^1/2 | operator |
| `a` | positive wavelet scale | s | scalar |
| `τ` | window centre or averaging time as declared locally | s | coordinate |
| `ψ` | dimensionless mother wavelet | dimensionless | state |
| `x` | displacement | m | coordinate |
| `t` | elapsed time | s | coordinate |

**Conditions and domain**

- a>0; admissible suitable mother wavelet; dimensional scale in seconds here.

**Derivation or proof guide**

1. Translate the analysing wavelet in time.
2. Stretch it by a and normalize its L2 norm before taking the signal inner product.

**Worked example**

Inputs: {"wavelet_centre_cycles": 1, "scale_s": 0.01}

1. For this declared centre, divide one cycle by 0.01 s.

Result: 100 Hz pseudo-frequency under this convention.; units: coefficient m s^1/2; pseudo-frequency Hz

**Limits and counterchecks**

- Different mother-wavelet centres give different scale-to-Hz mappings.

**Common mistakes**

- Software scales may be dimensionless sample counts; do not reuse a seconds-based formula without conversion.

Source records: `freq-pywavelets-cwt`.

### Floquet factorization of periodic linear dynamics — `freq-floquet`

Status: theorem.

$$
U(t)=P(t)e^{Bt},\quad P(t+T)=P(t)
$$

A periodic linear differential equation admits a fundamental-matrix factorization under standard continuity conditions. The eigenvalues of its constant generator describe growth and phase modulo a drive-frequency convention. This is not a general claim that all periodically driven matter has a single frequency.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `U(t)` | fundamental matrix of linear periodic dynamics | dimensionless | operator |
| `P(t)` | periodic factor of fundamental matrix | dimensionless | operator |
| `B` | constant Floquet generator | s⁻¹ | operator |
| `t` | elapsed time | s | coordinate |
| `T` | period of one cycle | s | scalar |

**Conditions and domain**

- Finite-dimensional complex linear system u′=A(t)u with continuous A(t+T)=A(t), T>0; normalized invertible fundamental matrix U(0)=I; a complex logarithm of its nonsingular monodromy is chosen.

**Derivation or proof guide**

1. Propagate over one drive period to form the monodromy matrix.
2. Choose a matrix logarithm and remove its exponential evolution to leave a periodic factor.

**Worked example**

Inputs: {"equation": "x′=iωx; coefficients are constant and hence T-periodic"}

1. Choose P=1 and B=iω.

Result: U=e^(iωt); quasifrequency is defined modulo 2π/T under branch changes.; units: U,P dimensionless; B s⁻¹

**Limits and counterchecks**

- With zero drive the autonomous solution remains included.

**Common mistakes**

- A branch of a logarithm and stability/observable definitions must be declared.

Source records: `freq-floquet-2026`.

### Optical frequency-comb tooth relation — `freq-comb`

Status: established-model.

$$
f_n=nf_{rep}+f_{CEO}
$$

A stabilized comb links an integer sequence of optical modes to repetition and carrier-envelope-offset frequencies. Its utility requires mode-number identification, controlled offsets and a calibrated reference; the formula alone is not an accurate clock or range measurement.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | ordinary frequency in cycles per second | Hz | scalar |
| `n` | integer mode or comb index under the local definition | dimensionless | scalar |
| `f_rep` | pulse repetition frequency | Hz | scalar |
| `f_CEO` | carrier-envelope-offset frequency | Hz | scalar |

**Conditions and domain**

- Comb regime with identifiable mode index and defined offset/repetition references.

**Derivation or proof guide**

1. A pulse train supplies equally spaced Fourier components.
2. Pulse-to-pulse carrier-envelope slip offsets the entire tooth grid.

**Worked example**

Inputs: {"n": 1000000, "frep_Hz": 100000000, "fCEO_Hz": 20000000}

1. Multiply mode number by repetition rate and add offset.

Result: 100000020000000; units: Hz

**Limits and counterchecks**

- f_CEO=0 yields an integer repetition-rate grid.

**Common mistakes**

- An incorrect tooth number creates an enormous systematic error despite a narrow beat note.

Source records: `freq-comb-ranging-2026`, `freq-thorium-ratio-2024`.

### Two-tone beating identity — `freq-beats`

Status: established-model.

$$
\sin(2\pi f_1t)+\sin(2\pi f_2t)=2\sin(2\pi f_ct)\cos(\pi\Delta f t)
$$

A pair of monaural tones has a rapid carrier factor and a slowly varying signed factor. The magnitude envelope repeats at the absolute tone separation. This algebra does not model dichotic binaural perception, EEG entrainment or clinical outcomes.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f₁` | first tone frequency | Hz | scalar |
| `f₂` | second tone frequency | Hz | scalar |
| `f_c` | midpoint of two tone frequencies | Hz | scalar |
| `Δf` | specified bandwidth or tone separation, as defined locally | Hz | scalar |
| `t` | elapsed time | s | coordinate |
| `π` | circle constant, about 3.141592653589793 | dimensionless | constant |

**Conditions and domain**

- f_c=(f₁+f₂)/2; Δf=f₂−f₁; equal phases/amplitudes in this identity.

**Derivation or proof guide**

1. Apply the sine-sum identity.
2. Keep carrier frequency and tone separation as distinct observables.

**Worked example**

Inputs: {"tones_Hz": [220, 228]}

1. Compute centre 224 Hz and separation 8 Hz.

Result: Signed envelope cos(8πt); magnitude envelope repeats at 8 Hz.; units: Hz and dimensionless amplitude factor

**Limits and counterchecks**

- Equal tones give an unmodulated tone of double amplitude.

**Common mistakes**

- The signed cosine factor has frequency |Δf|/2; its absolute envelope has repetition rate |Δf|.

Source records: `freq-numpy-fft`.

### Vacuum electromagnetic wavelength — `freq-vacuum`

Status: established-model.

$$
\lambda=c_0/f
$$

Frequency converts to wavelength through the propagation law of the declared channel. The exact vacuum speed applies to electromagnetic waves in vacuum. Acoustic frequency needs a sound speed, while a material dispersion relation can make phase and group wavelengths more complicated.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `λ` | wavelength in the declared medium | m | scalar |
| `c₀` | vacuum speed of light, exactly 299792458 | m s⁻¹ | constant |
| `f` | ordinary frequency in cycles per second | Hz | scalar |

**Conditions and domain**

- Vacuum electromagnetic plane wave; f>0.

**Derivation or proof guide**

1. Use one-period propagation distance.
2. Set λ=c₀T and invert T.

**Worked example**

Inputs: {"f_Hz": 1000000000}

1. Divide exact c₀ by 10⁹.

Result: 0.299792458; units: m

**Limits and counterchecks**

- At fixed speed, doubling frequency halves wavelength.

**Common mistakes**

- Do not use c₀/f for a sound wave in air or a body vibration.

Source records: `freq-si-brochure`.

### Quantum transition and photon energy — `freq-photon`

Status: established-model.

$$
\Delta E=hf=\hbar\omega
$$

A photon or an energy gap associated with a resonant quantum transition relates energy to temporal frequency through Planck’s constant. This does not identify the total energy of a classical acoustic wave from its frequency alone; occupation and amplitude also matter.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `E` | photon or transition energy difference | J | scalar |
| `h` | Planck constant, exactly 6.62607015e-34 | J s | constant |
| `f` | ordinary frequency in cycles per second | Hz | scalar |
| `ℏ` | h/(2π) | J s | constant |
| `ω` | angular frequency | rad s⁻¹ | scalar |

**Conditions and domain**

- Photon energy or specified quantum transition; not arbitrary classical total energy.

**Derivation or proof guide**

1. Combine Planck’s relation with ω=2πf and ℏ=h/(2π).
2. Check that J·s multiplied by s⁻¹ gives joules.

**Worked example**

Inputs: {"f_Hz": 500000000000000}

1. Multiply 6.62607015e−34 by 5e14.

Result: 3.313035075e−19; units: J

**Limits and counterchecks**

- Zero frequency gives zero photon energy in this relation, not a nontrivial static photon oscillator.

**Common mistakes**

- A classical oscillator has many energy levels/occupations; a high frequency alone is not a high total stored energy.

Source records: `freq-si-brochure`, `freq-thorium-ratio-2024`.

### Lorentzian field-coherence linewidth relation — `freq-coherence`

Status: conditional-result.

$$
\Delta f=1/(\pi\tau_c)
$$

For a stationary exponentially decaying first-order field correlation, the spectrum is Lorentzian and its full-width-at-half-maximum is reciprocal π times the field-correlation time. Other line shapes or intensity-correlation definitions give different relations.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Δf` | specified bandwidth or tone separation, as defined locally | Hz | scalar |
| `τ_c` | first-order field-correlation decay time for declared Lorentzian line | s | scalar |
| `π` | circle constant, about 3.141592653589793 | dimensionless | constant |

**Conditions and domain**

- First-order field correlation proportional to exp(−|t|/τ_c); Lorentzian power spectrum.

**Derivation or proof guide**

1. Fourier-transform the two-sided exponential correlation.
2. Solve where the resulting Lorentzian is half its zero-offset value.

**Worked example**

Inputs: {"coherence_time_s": 0.001}

1. Invert π·0.001.

Result: 318.3099; units: Hz

**Limits and counterchecks**

- Longer field coherence narrows the Lorentzian.

**Common mistakes**

- Do not substitute an intensity lifetime without checking the factor of two and correlation definition.

Source records: `freq-feynman-resonance`, `freq-numpy-fft`.

### Fractional frequency deviation — `freq-fractional`

Status: established-model.

$$
y(t)=[\nu(t)-\nu_0]/\nu_0
$$

Fractional frequency compares an oscillator to a specified nominal/reference frequency. It is dimensionless and makes clock comparisons across very different carrier frequencies meaningful, while leaving reference calibration and correlations explicit.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `y` | fractional frequency deviation | dimensionless | state |
| `ν` | measured oscillator frequency | Hz | scalar |
| `ν₀` | nominal reference frequency | Hz | scalar |

**Conditions and domain**

- ν₀>0; common time coordinate and declared reference.

**Derivation or proof guide**

1. Subtract nominal frequency from observed frequency.
2. Normalize by the declared nominal value.

**Worked example**

Inputs: {"nu0_Hz": 10000000, "offset_Hz": 0.001}

1. Divide 0.001 by 10⁷.

Result: 1e−10; units: dimensionless

**Limits and counterchecks**

- Zero frequency offset yields y=0.

**Common mistakes**

- An unstable or drifting reference contributes to the observed difference.

Source records: `freq-nist-stability`.

### Non-overlapping Allan variance estimator — `freq-allan`

Status: established-model.

$$
\sigma_y^2(\tau)=\frac{1}{2(M-1)}\sum_{i=1}^{M-1}(\bar y_{i+1}-\bar y_i)^2
$$

Allan variance measures changes between adjacent averages rather than deviation from one global mean. The averaging time and noise class are essential. A stability statistic is not by itself a full systematic-uncertainty or accuracy evaluation.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `σ_y(τ)` | Allan deviation at averaging time τ | dimensionless | scalar |
| `τ` | window centre or averaging time as declared locally | s | coordinate |
| `ȳ_i` | mean fractional frequency in interval i of duration τ | dimensionless | state |
| `M` | number of averaged-frequency observations | dimensionless | scalar |

**Conditions and domain**

- M≥2 adjacent non-overlapping interval averages of length τ; gaps/dead time and drift treatment stated.

**Derivation or proof guide**

1. Compute adjacent averaged-frequency differences.
2. Average their squares and divide by two.

**Worked example**

Inputs: {"averages": [0, 1e-06, 0]}

1. Differences are +1e−6 and −1e−6.
2. Squared sum divided by 4 is 5e−13.

Result: variance=5e−13; deviation≈7.071e−7; units: dimensionless

**Limits and counterchecks**

- A constant fractional offset has zero Allan variance.

**Common mistakes**

- That constant offset may still make the clock inaccurate; zero variance does not mean correct time.

Source records: `freq-nist-stability`.

### White-frequency averaging benchmark — `freq-white-frequency`

Status: approximation.

$$
\sigma_y(\tau)=\sigma_1\sqrt{1\,\mathrm{s}/\tau}
$$

For white frequency noise and an appropriate measurement process, Allan deviation improves as averaging time to the minus one-half power. Drift, flicker floors, dead time and correlated noise prevent extrapolating this law indefinitely.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `σ_y(τ)` | Allan deviation at averaging time τ | dimensionless | scalar |
| `σ₁` | white-frequency Allan deviation at τ=1 s | dimensionless | scalar |
| `τ` | window centre or averaging time as declared locally | s | coordinate |

**Conditions and domain**

- White frequency noise in the assessed averaging range; σ₁ refers to 1 s.

**Derivation or proof guide**

1. Average independent fluctuations over more samples.
2. Their variance falls inversely with averaging duration, so deviation falls as its square root.

**Worked example**

Inputs: {"sigma_at_1s": 1e-15, "tau_s": 100}

1. Divide 1e−15 by sqrt(100).

Result: 1e−16; units: dimensionless

**Limits and counterchecks**

- At τ=1 s recover σ₁.

**Common mistakes**

- A plotted slope alone does not prove the underlying noise is white at unmeasured times.

Source records: `freq-nist-stability`.

### Weak-field gravitational clock shift — `freq-redshift`

Status: approximation.

$$
\Delta\nu/\nu\simeq g\Delta h/c_0^2
$$

Two otherwise comparable clocks at different gravitational potentials accumulate different proper times. Near Earth in a small static height interval, the higher clock runs faster by approximately gΔh/c₀². This is a conditional relativistic comparison, not motion changing an object’s intrinsic material constant.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `ν` | measured oscillator frequency | Hz | scalar |
| `g` | local gravitational acceleration | m s⁻² | scalar |
| `Δh` | height difference under weak static-field approximation | m | scalar |
| `c₀` | vacuum speed of light, exactly 299792458 | m s⁻¹ | constant |

**Conditions and domain**

- Weak static field; small local vertical interval; potential difference≈gΔh; kinematic terms separately assessed.

**Derivation or proof guide**

1. Expand the proper-time ratio to first order in gravitational potential difference/c₀².
2. Approximate the local potential difference by gΔh.

**Worked example**

Inputs: {"g_m_s2": 9.81, "height_m": 0.01}

1. Divide 0.0981 by (299792458)².

Result: about 1.0915e−18; units: dimensionless

**Limits and counterchecks**

- Equal potential gives zero gravitational differential under these assumptions.

**Common mistakes**

- Height must be tied to a geopotential model for precision work; velocity effects are separate.

Source records: `freq-si-brochure`, `freq-thorium-ratio-2024`.

### Nuclear-scale optical frequency conversion — `freq-nuclear-energy`

Status: established-model.

$$
f=E/h
$$

The unusually low-energy thorium-229 transition lies in the vacuum-ultraviolet optical range even though the participating states are nuclear. The word nuclear therefore does not by itself specify a gamma-ray frequency, clock performance or a deployed time standard.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | ordinary frequency in cycles per second | Hz | scalar |
| `E` | photon or transition energy difference | J | scalar |
| `h` | Planck constant, exactly 6.62607015e-34 | J s | constant |

**Conditions and domain**

- An independently measured/assumed transition energy; illustrative value, not a claim of a new precision determination.

**Derivation or proof guide**

1. Convert electronvolts to joules using the exact elementary charge.
2. Divide transition energy by Planck’s constant.

**Worked example**

Inputs: {"illustrative_energy_eV": 8.4, "e_J_per_eV": 1.602176634e-19}

1. E=1.34582837256e−18 J.
2. Divide by 6.62607015e−34 J·s.

Result: about 2.0311e15; units: Hz

**Limits and counterchecks**

- Changing the assumed energy changes frequency proportionally.

**Common mistakes**

- 8.4 eV is a rounded illustration, not the quoted precision of a particular paper.

Source records: `freq-si-brochure`, `freq-thorium-ratio-2024`, `freq-nuclear-feedback-2026`.

### First-order uncertainty propagation with covariance — `freq-covariance`

Status: approximation.

$$
C_y\simeq JCJ^{\mathsf T}
$$

A differentiable map carries input covariance into output covariance through its Jacobian. Correlations can cancel or amplify uncertainty in ratios. This linearization must be checked when distributions, nonlinearity or denominator uncertainty are substantial.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `C_y` | propagated output covariance matrix | specified product of output units | tensor |
| `J` | Jacobian of derived quantities with respect to inputs | output unit/input unit | tensor |
| `C` | input covariance matrix | specified product of input units | tensor |

**Conditions and domain**

- Differentiable map near the estimate; small uncertainties; covariance and units declared.

**Derivation or proof guide**

1. Linearize the map as δy≈Jδx.
2. Take the covariance expectation while retaining cross terms.

**Worked example**

Inputs: {"quantity": "z=x₁−x₂", "each_variance": 1, "covariance": 0.9}

1. Var(z)=1+1−2·0.9.

Result: 0.2; units: input unit squared

**Limits and counterchecks**

- Perfect common-mode correlation cancels the difference uncertainty in this ideal case.

**Common mistakes**

- Independent-error quadrature is wrong when the two channels share a reference.

Source records: `freq-nist-stability`.

### Source–channel–receiver measurement model — `freq-measurement`

Status: conditional-result.

$$
Y(f)=H(f)X(f)+N(f)
$$

A measured spectrum combines the source, propagation/instrument transfer and additive noise. Multiple source/channel pairs can produce the same record. A peak or a learned embedding is therefore not a unique reconstruction of source physics without calibration and constraints.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Y(f)` | measured-channel Fourier transform | output unit s | state |
| `H(f)` | calibrated sensor/propagation transfer function | specified output/input unit | operator |
| `X(f)` | continuous Fourier transform of x(t) | m s | operator |
| `N(f)` | Fourier transform of additive measurement noise η(t); not sample-count N | output unit s | state |
| `f` | ordinary frequency in cycles per second | Hz | scalar |

**Conditions and domain**

- Frequency-domain linear channel within declared bandwidth; noise convention and units stated.

**Derivation or proof guide**

1. Model the instrument response as convolution plus additive noise.
2. Transform under the compatible Fourier convention.

**Worked example**

Inputs: {"pair_A": "H=2, X=3", "pair_B": "H=3, X=2", "noise": 0}

1. Both pairs give the same output component 6.

Result: Output alone cannot distinguish these source/channel amplitudes.; units: output unit s

**Limits and counterchecks**

- At H=0 source components are unobservable through this channel.

**Common mistakes**

- Noise is N(f), the transform of η(t), not the sample-count N used in the DFT.

Source records: `freq-scipy-csd`.

### Rectangular interrogation power linewidth — `freq-rectangular-width`

Status: conditional-result.

$$
P(\Delta f)/P(0)=\operatorname{sinc}^2(\pi\Delta f T),\quad\Delta f_{FWHM}\simeq0.885893/T
$$

A finite rectangular coherent interrogation produces a sinc-squared power/excitation profile. Its width comes from interaction duration and is not an intrinsic Lorentzian lifetime.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `P(Δf)/P(0)` | normalized power or weak-excitation response | dimensionless | scalar |
| `Δf` | detuning from line centre | Hz | coordinate |
| `T` | rectangular coherent interaction duration | s | scalar |
| `sinc(u)` | unnormalized sinc sin(u)/u, with continuous value1 at u=0 | dimensionless function | operator |
| `π` | circle constant | dimensionless | constant |
| `Δf_FWHM` | full width between the two half-power points | Hz | scalar |

**Conditions and domain**

- Constant-amplitude rectangular coherent time window. Power is squared Fourier amplitude; strong-drive Rabi/dephasing/loss effects may require the full excitation model.

**Derivation or proof guide**

1. Integrate a complex exponential over a centred interval of durationT to obtain T sin(πΔfT)/(πΔfT).
2. Normalize and square the amplitude; solve(sin u/u)^2=1/2 for u≈1.391557, then take the full two-sided detuning width2u/(πT).

**Worked example**

Inputs: {"interaction_length_m": 0.012, "transport_speed_m_s": 0.016}

1. T=L/v=.75s.
2. Compute0.885893/.75.

Result: about1.18119Hz, close to the reported1.2Hz source spectrum; not an independent experimental fit; units: Hz

**Limits and counterchecks**

- T→∞ narrows the ideal central lobe; a nonrectangular or incoherent interaction changes the profile.

**Common mistakes**

- sinc here is sin(u)/u, not the normalized software sinc sin(πu)/(πu).
- Do not insert this FWHM into the Lorentzian field-coherence formula1/(πτ_c).

Source records: `freq-optical-rabi-2026`, `freq-scipy-periodogram`.


## Research paper evidence cards


### freq-thorium-ratio-2024-review

**sourceId**: freq-thorium-ratio-2024

**status**: abstract-only

**question**: What does this source actually measure or demonstrate, and which inference remains unsupported?

**method**: Reports VUV-comb linkage of thorium nuclear and strontium electronic transitions, with a frequency-ratio measurement.

**result**: Reports VUV-comb linkage of thorium nuclear and strontium electronic transitions, with a frequency-ratio measurement.

**whatIsNew**: Source authors’ specific experimental advance as summarized in the inspected sections; independent novelty certification not performed.

**limitations**: Publisher page explicitly exposes subscription preview only; methods, full paper and experimental data were not read.

**replication**: No laboratory reproduction, raw-data reanalysis or independent uncertainty-budget reconstruction performed.

**nextQuestions**: Which systematic shifts and correlations limit the claimed observable?
What external replication or independently reproducible data would test this result?


### freq-nuclear-feedback-2026-review

**sourceId**: freq-nuclear-feedback-2026

**status**: selected-body-sections-reviewed

**question**: What does this source actually measure or demonstrate, and which inference remains unsupported?

**method**: Absorption error-signal locking with20s or30min integration; overlapping Allan comparison against a Yb+ reference and crystal-position scans.

**result**: Clock-performance body reports low10^−14 within a run but about5×10^−13 between-day reproducibility; position-dependent shifts reach1.7kHz.

**whatIsNew**: Source reports a working nuclear-transition feedback loop, not merely excitation; spatial reproducibility and host inhomogeneity remain measured limitations.

**limitations**: Clock performance section reports shifts up to1.7kHz between probed crystal regions; host strain is a proposed explanation. Improved future linewidth/power projections are not demonstrated clock accuracy. No independent systematic-budget reconstruction.

**replication**: No laboratory reproduction, raw-data reanalysis or independent uncertainty-budget reconstruction performed.

**nextQuestions**: Can reproducible optical paths and host-strain control remove the between-day shifts?
Which full systematic shifts limit an absolute frequency claim independently of Allan stability?


### freq-optical-rabi-2026-review

**sourceId**: freq-optical-rabi-2026

**status**: selected-body-sections-reviewed

**question**: What does this source actually measure or demonstrate, and which inference remains unsupported?

**method**: Moving-lattice Sr stream with a magnetic-field-defined12mm excitation region; compare spectrum with finite-time Fourier model, include light/dephasing and approximate BBR estimates.

**result**: Transit time0.75s gives rectangular-window power FWHM about0.886/0.75=1.1813Hz, consistent with reported1.2Hz. This is interrogation spectroscopy, not a full new-clock accuracy evaluation.

**whatIsNew**: Spatially defined continuous interrogation separates preparation/detection from interaction; the next feedback/stability step remains conditional.

**limitations**: A finite-time Rabi excitation line is not a Lorentzian intrinsic lifetime. Discussion treats dead-time-free closed-loop stabilization as future work; BBR estimate uses approximate emissivity/area weighting and later thermometry, not a complete simultaneous accuracy certification.

**replication**: No laboratory reproduction, raw-data reanalysis or independent uncertainty-budget reconstruction performed.

**nextQuestions**: What stability does a demonstrated closed loop achieve once transport delay and finite atomic response are included?
How do view-factor/temperature and stray-light uncertainty limit the transition-centre evaluation?


### freq-comb-ranging-2026-review

**sourceId**: freq-comb-ranging-2026

**status**: selected-text

**question**: What does this source actually measure or demonstrate, and which inference remains unsupported?

**method**: Combines coarse time-of-flight and fine comb interferometry for absolute ranging.

**result**: Combines coarse time-of-flight and fine comb interferometry for absolute ranging.

**whatIsNew**: Source authors’ specific experimental advance as summarized in the inspected sections; independent novelty certification not performed.

**limitations**: Reported apparatus-specific distance errors are not independently reanalysed, and air-index/reference uncertainties are not resolved by citing the comb equation.

**replication**: No laboratory reproduction, raw-data reanalysis or independent uncertainty-budget reconstruction performed.

**nextQuestions**: Which systematic shifts and correlations limit the claimed observable?
What external replication or independently reproducible data would test this result?


### freq-floquet-2026-review

**sourceId**: freq-floquet-2026

**status**: selected-text

**question**: What does this source actually measure or demonstrate, and which inference remains unsupported?

**method**: Reports chirality-selective second-harmonic response under optical Floquet engineering in monolayer MoS2.

**result**: Reports chirality-selective second-harmonic response under optical Floquet engineering in monolayer MoS2.

**whatIsNew**: Source authors’ specific experimental advance as summarized in the inspected sections; independent novelty certification not performed.

**limitations**: A specific driven-material experiment, not the proof source for the general Floquet theorem and not a universal frequency-effect claim.

**replication**: No laboratory reproduction, raw-data reanalysis or independent uncertainty-budget reconstruction performed.

**nextQuestions**: Which systematic shifts and correlations limit the claimed observable?
What external replication or independently reproducible data would test this result?


### freq-thorium-laser-2024-review

**sourceId**: freq-thorium-laser-2024

**status**: abstract-only

**question**: What does this source actually measure or demonstrate, and which inference remains unsupported?

**method**: Reports resonant laser excitation of Th229 in doped CaF2 and a Th232 control without the corresponding fluorescence signal.

**result**: Reports resonant laser excitation of Th229 in doped CaF2 and a Th232 control without the corresponding fluorescence signal.

**whatIsNew**: Source authors’ specific experimental advance as summarized in the inspected sections; independent novelty certification not performed.

**limitations**: The initially guessed arXiv2404.02939 was a different paper and is retained privately as an identity mismatch; no inference uses it. Experimental methods and full uncertainty not independently reviewed.

**replication**: No laboratory reproduction, raw-data reanalysis or independent uncertainty-budget reconstruction performed.

**nextQuestions**: Which systematic shifts and correlations limit the claimed observable?
What external replication or independently reproducible data would test this result?


## Nested coverage map

- **Frequency, spectra and time metrology** (`freq-root`; reviewed): Frequency is a property of a declared evolution and measurement channel. Follow phase, dynamics, sampling and reference calibration before interpreting a number.
  - **Time, phase and dimensions** (`freq-time`; mapped): Learning branch: Time, phase and dimensions. Distinguish model inputs, inferred quantities and physical observables.
    - **Cycles, phase and time** (`freq-phase-time`; reviewed): Cycles, phase and time requires explicit conventions and a measurement/model distinction.
      - **Period and phase** (`freq-phase-time-1`; mapped): Specialty focus: Period and phase. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **Instantaneous frequency** (`freq-phase-time-2`; mapped): Specialty focus: Instantaneous frequency. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **A phase-zero counterexample** (`freq-phase-time-2-control`; mapped): Boundary study: A phase-zero counterexample. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.
    - **Units, references and uncertainty** (`freq-dimensions-units`; reviewed): Units, references and uncertainty requires explicit conventions and a measurement/model distinction.
      - **SI second and hertz** (`freq-dimensions-units-1`; mapped): Specialty focus: SI second and hertz. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **Correlated uncertainty** (`freq-dimensions-units-2`; mapped): Specialty focus: Correlated uncertainty. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **A common-clock cancellation** (`freq-dimensions-units-2-control`; mapped): Boundary study: A common-clock cancellation. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.
  - **Oscillators and resonance** (`freq-oscillators`; mapped): Learning branch: Oscillators and resonance. Distinguish model inputs, inferred quantities and physical observables.
    - **Free and damped motion** (`freq-free-damped`; reviewed): Free and damped motion requires explicit conventions and a measurement/model distinction.
      - **Natural modes** (`freq-free-damped-1`; mapped): Specialty focus: Natural modes. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **Decay and quality factor** (`freq-free-damped-2`; mapped): Specialty focus: Decay and quality factor. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **Critical damping has no ring frequency** (`freq-free-damped-2-control`; mapped): Boundary study: Critical damping has no ring frequency. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.
    - **Driven and coupled response** (`freq-driven-coupled`; reviewed): Driven and coupled response requires explicit conventions and a measurement/model distinction.
      - **Forced-response peaks** (`freq-driven-coupled-1`; mapped): Specialty focus: Forced-response peaks. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **Loaded and coupled modes** (`freq-driven-coupled-2`; mapped): Specialty focus: Loaded and coupled modes. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **A sensor transfer peak differs from a mode** (`freq-driven-coupled-2-control`; mapped): Boundary study: A sensor transfer peak differs from a mode. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.
  - **Spectra and digital measurement** (`freq-transforms`; mapped): Learning branch: Spectra and digital measurement. Distinguish model inputs, inferred quantities and physical observables.
    - **Continuous and finite transforms** (`freq-continuous-discrete`; reviewed): Continuous and finite transforms requires explicit conventions and a measurement/model distinction.
      - **Fourier and Laplace domains** (`freq-continuous-discrete-1`; mapped): Specialty focus: Fourier and Laplace domains. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **DFT and exact inversion** (`freq-continuous-discrete-2`; mapped): Specialty focus: DFT and exact inversion. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **A region-of-convergence boundary** (`freq-continuous-discrete-2-control`; mapped): Boundary study: A region-of-convergence boundary. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.
    - **Acquisition and spectral estimation** (`freq-acquisition-estimation`; reviewed): Acquisition and spectral estimation requires explicit conventions and a measurement/model distinction.
      - **Sampling and aliasing** (`freq-acquisition-estimation-1`; mapped): Specialty focus: Sampling and aliasing. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **Windows and spectral density** (`freq-acquisition-estimation-2`; mapped): Specialty focus: Windows and spectral density. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **A Nyquist sine disappears** (`freq-acquisition-estimation-2-control`; mapped): Boundary study: A Nyquist sine disappears. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.
  - **Waves and channels** (`freq-waves`; mapped): Learning branch: Waves and channels. Distinguish model inputs, inferred quantities and physical observables.
    - **Propagation and dispersion** (`freq-propagation-dispersion`; reviewed): Propagation and dispersion requires explicit conventions and a measurement/model distinction.
      - **Wave equation and wavelength** (`freq-propagation-dispersion-1`; mapped): Specialty focus: Wave equation and wavelength. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **Phase and group velocity** (`freq-propagation-dispersion-2`; mapped): Specialty focus: Phase and group velocity. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **A dispersive packet separates speeds** (`freq-propagation-dispersion-2-control`; mapped): Boundary study: A dispersive packet separates speeds. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.
    - **Acoustic and electromagnetic channels** (`freq-acoustics-em`; reviewed): Acoustic and electromagnetic channels requires explicit conventions and a measurement/model distinction.
      - **String and cavity modes** (`freq-acoustics-em-1`; mapped): Specialty focus: String and cavity modes. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **Vacuum electromagnetic propagation** (`freq-acoustics-em-2`; mapped): Specialty focus: Vacuum electromagnetic propagation. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **Same Hz, different wavelengths** (`freq-acoustics-em-2-control`; mapped): Boundary study: Same Hz, different wavelengths. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.
  - **Time-dependent frequency structure** (`freq-time-frequency`; mapped): Learning branch: Time-dependent frequency structure. Distinguish model inputs, inferred quantities and physical observables.
    - **Localized spectral analysis** (`freq-localized`; reviewed): Localized spectral analysis requires explicit conventions and a measurement/model distinction.
      - **STFT window tradeoffs** (`freq-localized-1`; mapped): Specialty focus: STFT window tradeoffs. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **Wavelet scales and calibration** (`freq-localized-2`; mapped): Specialty focus: Wavelet scales and calibration. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **A chirp defeats a global peak** (`freq-localized-2-control`; mapped): Boundary study: A chirp defeats a global peak. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.
    - **Driven periodic systems and combs** (`freq-periodic-combs`; reviewed): Driven periodic systems and combs requires explicit conventions and a measurement/model distinction.
      - **Floquet generators** (`freq-periodic-combs-1`; mapped): Specialty focus: Floquet generators. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **Comb teeth and beats** (`freq-periodic-combs-2`; mapped): Specialty focus: Comb teeth and beats. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **A wrong comb mode index** (`freq-periodic-combs-2-control`; mapped): Boundary study: A wrong comb mode index. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.
  - **Quantum frequency and spectroscopy** (`freq-quantum`; mapped): Learning branch: Quantum frequency and spectroscopy. Distinguish model inputs, inferred quantities and physical observables.
    - **Photons and energy gaps** (`freq-photon-transition`; reviewed): Photons and energy gaps requires explicit conventions and a measurement/model distinction.
      - **Planck relation** (`freq-photon-transition-1`; mapped): Specialty focus: Planck relation. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **Transition rather than total energy** (`freq-photon-transition-2`; mapped): Specialty focus: Transition rather than total energy. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **Classical amplitude changes energy at fixed pitch** (`freq-photon-transition-2-control`; mapped): Boundary study: Classical amplitude changes energy at fixed pitch. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.
    - **Spectroscopic inference** (`freq-spectroscopy`; reviewed): Spectroscopic inference requires explicit conventions and a measurement/model distinction.
      - **Linewidth and coherence** (`freq-spectroscopy-1`; mapped): Specialty focus: Linewidth and coherence. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **Thorium-229 transition** (`freq-spectroscopy-2`; mapped): Specialty focus: Thorium-229 transition. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **A line shape changes coherence inference** (`freq-spectroscopy-2-control`; mapped): Boundary study: A line shape changes coherence inference. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.
  - **Clocks and time metrology** (`freq-metrology`; mapped): Learning branch: Clocks and time metrology. Distinguish model inputs, inferred quantities and physical observables.
    - **Clock transitions and relativity** (`freq-clock-reference`; reviewed): Clock transitions and relativity requires explicit conventions and a measurement/model distinction.
      - **Microwave and optical references** (`freq-clock-reference-1`; mapped): Specialty focus: Microwave and optical references. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **Geopotential and ratio comparison** (`freq-clock-reference-2`; mapped): Specialty focus: Geopotential and ratio comparison. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **Equal-potential clock comparison** (`freq-clock-reference-2-control`; mapped): Boundary study: Equal-potential clock comparison. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.
    - **Frequency stability and accuracy** (`freq-stability-inference`; reviewed): Frequency stability and accuracy requires explicit conventions and a measurement/model distinction.
      - **Allan statistics** (`freq-stability-inference-1`; mapped): Specialty focus: Allan statistics. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **Noise classes and dead time** (`freq-stability-inference-2`; mapped): Specialty focus: Noise classes and dead time. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **Constant bias with zero Allan deviation** (`freq-stability-inference-2-control`; mapped): Boundary study: Constant bias with zero Allan deviation. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.
  - **Identifiability and interpretation** (`freq-inference`; mapped): Learning branch: Identifiability and interpretation. Distinguish model inputs, inferred quantities and physical observables.
    - **Transfer functions and inverse problems** (`freq-transfer-id`; reviewed): Transfer functions and inverse problems requires explicit conventions and a measurement/model distinction.
      - **Source–receiver separation** (`freq-transfer-id-1`; mapped): Specialty focus: Source–receiver separation. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **Null spaces and phase loss** (`freq-transfer-id-2`; mapped): Specialty focus: Null spaces and phase loss. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **Two hidden models give one spectrum** (`freq-transfer-id-2-control`; mapped): Boundary study: Two hidden models give one spectrum. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.
    - **Nonstationarity and claims** (`freq-nonstationary-claims`; mapped): Nonstationarity and claims requires explicit conventions and a measurement/model distinction.
      - **Multiple evolving body spectra** (`freq-nonstationary-claims-1`; mapped): Specialty focus: Multiple evolving body spectra. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
      - **Domain-qualified predictions** (`freq-nonstationary-claims-2`; mapped): Specialty focus: Domain-qualified predictions. Check the exact mathematical object, units and hypotheses before interpreting a calculation.
        - **One person has many channel spectra** (`freq-nonstationary-claims-2-control`; mapped): Boundary study: One person has many channel spectra. Construct the alternative or null explicitly and ask which additional measurement would distinguish it.

## Glossary

**SI** — International System of Units; exact defining constants do not eliminate realization uncertainty.

**Hz** — Hertz: cycles per second; SI dimension s⁻¹, retaining the cycle convention.

**rad/s** — Radians per second; angular frequency, differing from Hz by 2π.

**DFT** — Discrete Fourier transform: finite invertible coordinate transform.

**FFT** — Fast Fourier transform: an algorithm for evaluating a DFT.

**PSD** — Power spectral density: signal squared per Hz, with an explicit estimator/reference.

**STFT** — Short-time Fourier transform using a declared sliding analysis window.

**CWT** — Continuous wavelet transform; scale-to-frequency depends on the chosen wavelet.

**LTI** — Linear time-invariant model; neither linearity nor invariance is automatic in living or driven systems.

**Q** — Quality factor; energy-loss or linewidth convention must be stated, including loading.

**FWHM** — Full width at half maximum; specify whether the curve is amplitude or power.

**VUV** — Vacuum ultraviolet electromagnetic radiation, distinct from acoustic ultrasound.

**CEO** — Carrier-envelope offset of a frequency comb; not the pulse repetition frequency.

**TOF** — Time of flight; an elapsed propagation-time measurement with channel and path assumptions.

**Rabi spectroscopy** — Quantum transition probing by coherent driving; a method, not automatic clock stabilization.

**Dick effect** — Aliasing of local-oscillator noise through intermittent clock interrogation.

**Allan deviation** — Square root of Allan variance at a stated averaging time; stability is not accuracy.

**i** — Imaginary unit satisfying i²=−1; never automatically electric current.

**star / asterisk** — Complex conjugation in the CWT; convolution uses the separately declared binary star.

**δ / Δ** — Change, offset, linewidth or uncertainty as explicitly defined locally; no single global meaning.

**mode** — A solution shape/eigenvalue of a specified dynamical boundary problem; not any visually similar pattern.

**carrier** — Fast oscillatory component distinguished from modulation and from a measured brain rhythm.

**loaded Q** — Q including energy escape into source, sensor and other coupled ports.

**accuracy** — Closeness of measurement to reference truth, assessed through a defensible uncertainty framework; distinct from stability.

**isomer** — A metastable nuclear excited state, not a chemical isomer in this context.

**HWHM** — Half-width at half-maximum: half the full width; specify whether the curve is amplitude, power or an excitation probability.

**BBR** — Blackbody-radiation shift; temperature-dependent perturbation of a clock transition, with an environmental/view-factor model.

## Open questions and missing evidence

### Which calibrated extra channel or intervention separates source dynamics from transfer and sensor response?

Status: open-within-declared-model. Independent source excitation or transfer calibration; uncertainty, bandwidth, noise and explicit alternative models.

### Which uncertainties and systematic shifts limit a solid-state nuclear clock beyond a successful transition lock?

Status: selected-research-frontier. Full frequency-ratio/uncertainty budgets, host-field shifts, reproducibility and independent reference comparisons.

### When is a local frequency or modal fit stable enough to compare across changing conditions?

Status: model-and-data-dependent. Window-length/hop sensitivity, drift controls, phase reliability and independent validation records.


## Source records and reading depth


### freq-si-brochure — BIPM SI Brochure, 9th edition

BIPM; 2019; 9th edition; retrieved current PDF revision not independently dated

https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf

**Source class**: official-data

**Status / reading depth**: selected-text; Actual selected passages/sections read; raw capture is not a claim that every page was reviewed.

**Sections inspected**: English section 2.2 defining constants
English second definition
Hz/radian and defining-constant tables

**Supported claim**: Defines the second through the unperturbed cesium transition, Hz as s−1, and exact h and c.

**Limitations**: Definitions are exact; practical realizations, transfer and relativistic corrections retain uncertainty.

**research-note**: Defines the second through the unperturbed cesium transition, Hz as s−1, and exact h and c.

Capture SHA-256: `1122cf38e25b23d780a30607c68f7350b2b6d1f9970a89947aaa87a45ecbb20a`; captured 2026-11-25T06:25:04.644261+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-nist-stability — NIST SP1065 Handbook of Frequency Stability Analysis

W. J. Riley / NIST; 2008; NIST SP1065

https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication1065.pdf

**Source class**: textbook

**Status / reading depth**: selected-text; Actual selected passages/sections read; raw capture is not a claim that every page was reviewed.

**Sections inspected**: Time-domain stability overview
Allan/overlapping/modified Allan sections and table
Noise-type and dead-time discussion

**Supported claim**: Explains frequency stability estimators, adjacent averages, different noise classes and estimator scope.

**Limitations**: Selected sections only; handbook predates current clock hardware and does not certify a new device.

**research-note**: Explains frequency stability estimators, adjacent averages, different noise classes and estimator scope.

Capture SHA-256: `ee6bb84554683d718638717651c75f7d487af9e04c168880760ae41a485eb52f`; captured 2026-11-25T06:25:04.258107+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-feynman-oscillator — Feynman Lectures I21: The harmonic oscillator

R. P. Feynman, R. B. Leighton, M. Sands; 1963; Online Volume I chapter21 captured

https://www.feynmanlectures.caltech.edu/I_21.html

**Source class**: textbook

**Status / reading depth**: selected-text; Actual selected passages/sections read; raw capture is not a claim that every page was reviewed.

**Sections inspected**: 21–2 harmonic oscillator equation and cosine solution

**Supported claim**: Derives linear mass–spring dynamics and distinguishes model coefficients and time units.

**Limitations**: Not a universal material-frequency formula; selected section, not the full volume.

**research-note**: Derives linear mass–spring dynamics and distinguishes model coefficients and time units.

Capture SHA-256: `ccc2a4951db15bb7c2fc8d74fd67f6b745f36d6cd864dfb502c3e7c9acb8deab`; captured 2026-11-25T06:24:59.364789+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-feynman-resonance — Feynman Lectures I23: Resonance

R. P. Feynman, R. B. Leighton, M. Sands; 1963; Online Volume I chapter23 captured

https://www.feynmanlectures.caltech.edu/I_23.html

**Source class**: textbook

**Status / reading depth**: selected-text; Actual selected passages/sections read; raw capture is not a claim that every page was reviewed.

**Sections inspected**: 23–2 forced oscillator with damping
Complex-response derivation context

**Supported claim**: Demonstrates finite damped response and the role of complex amplitude/phase.

**Limitations**: Notation conflict explicitly translated: chapter uses damping coefficient gamma=b/m; atlas gamma=b/(2m), so gamma_source=2 gamma_atlas.

**research-note**: Demonstrates finite damped response and the role of complex amplitude/phase.

Capture SHA-256: `2123ff1a20246f2c9bb4c7e1a33ba93027d205f9dc2a6026792664bbe050c80c`; captured 2026-11-25T06:24:59.217936+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-scipy-periodogram — SciPy periodogram documentation

SciPy developers; None; SciPy v1.18.0 live documentation captured

https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.periodogram.html

**Source class**: official-data

**Status / reading depth**: selected-text; Actual selected passages/sections read; raw capture is not a claim that every page was reviewed.

**Sections inspected**: Parameters
Notes: spectrum versus density and one-sided conventions

**Supported claim**: Specifies spectral-density versus squared-spectrum normalization and units.

**Limitations**: Documentation describes a software estimator, not proof of physical source identification.

**research-note**: Specifies spectral-density versus squared-spectrum normalization and units.

Capture SHA-256: `e0e1075b4855619bb48b3ae96161a55caf4a0d77c68f9a5e79361355afd691d7`; captured 2026-11-25T06:24:59.225083+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-scipy-welch — SciPy Welch documentation

SciPy developers; None; SciPy v1.18.0 live documentation captured

https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.welch.html

**Source class**: official-data

**Status / reading depth**: selected-text; Actual selected passages/sections read; raw capture is not a claim that every page was reviewed.

**Sections inspected**: Method summary
Parameters: segment/window/overlap
Notes

**Supported claim**: Welch averages modified periodograms from overlapping segments.

**Limitations**: Overlapping segments are not fully independent; uncertainty is not supplied merely by the number of plotted segments.

**research-note**: Welch averages modified periodograms from overlapping segments.

Capture SHA-256: `e051ac508a3765c4470f3c5e7bbdb79cec462db6968c3dd94a99df92aa824cfb`; captured 2026-11-25T06:24:59.160762+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-scipy-stft — SciPy ShortTimeFFT documentation

SciPy developers; None; SciPy v1.18.0 live documentation captured

https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.ShortTimeFFT.html

**Source class**: official-data

**Status / reading depth**: selected-text; Actual selected passages/sections read; raw capture is not a claim that every page was reviewed.

**Sections inspected**: ShortTimeFFT class description
Hop, window and frequency/time-index conventions

**Supported claim**: Defines a parametrized windowed transform and inverse with explicit hop and frequency grid.

**Limitations**: A representation and software contract; localization/resolution and invertibility depend on the window and sampling.

**research-note**: Defines a parametrized windowed transform and inverse with explicit hop and frequency grid.

Capture SHA-256: `e5b9167bac9db052d7d7568f152f5f8e0fcba3c3132668497eeba98b7ed22444`; captured 2026-11-25T06:24:59.300401+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-numpy-fft — NumPy discrete Fourier transform conventions

NumPy developers; None; Stable documentation retrieved 2026-11-25

https://numpy.org/doc/stable/reference/routines.fft.html

**Source class**: official-data

**Status / reading depth**: selected-text; Actual selected passages/sections read; raw capture is not a claim that every page was reviewed.

**Sections inspected**: DFT definition and inverse normalization
Standard ordering and Nyquist bins
Background and normalization

**Supported claim**: Pins finite-transform sign, normalization and signed frequency ordering.

**Limitations**: A finite transform cannot reconstruct an unsampled physical bandwidth without additional assumptions.

**research-note**: Pins finite-transform sign, normalization and signed frequency ordering.

Capture SHA-256: `929ecf598038678601dc28089255633661e9ae5c11934911eb87434a79a521fb`; captured 2026-11-25T06:24:59.093377+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-scipy-csd — SciPy cross-spectral density documentation

SciPy developers; None; SciPy v1.18.0 live documentation captured

https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.csd.html

**Source class**: official-data

**Status / reading depth**: selected-text; Actual selected passages/sections read; raw capture is not a claim that every page was reviewed.

**Sections inspected**: Parameters
Notes: conjugate-X times Y convention

**Supported claim**: States a cross-spectrum convention useful for transfer estimation.

**Limitations**: Cross-spectral correlations alone do not establish a causal pathway or an independently calibrated transfer function.

**research-note**: States a cross-spectrum convention useful for transfer estimation.

Capture SHA-256: `864263a253a74f309466a7de31f20cd805fc4c809fbd9d236cb9b30aae730fee`; captured 2026-11-25T06:24:59.352715+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-pywavelets-cwt — PyWavelets continuous wavelet transform documentation

PyWavelets developers; None; Latest documentation captured 2026-11-25

https://pywavelets.readthedocs.io/en/latest/ref/cwt.html

**Source class**: official-data

**Status / reading depth**: selected-text; Actual selected passages/sections read; raw capture is not a claim that every page was reviewed.

**Sections inspected**: CWT parameters
Scale-to-frequency conversion
Small-scale aliasing example

**Supported claim**: Explains wavelet-dependent scale/frequency conversion and warns that low sampled scales can alias.

**Limitations**: Continuous seconds-based and software sample-based scale conventions differ; output units and normalization must be translated.

**research-note**: Explains wavelet-dependent scale/frequency conversion and warns that low sampled scales can alias.

Capture SHA-256: `cec7247bb827c6a53ff619909bda8362cce95dcc1784a5aa96bd78e1be02f3ab`; captured 2026-11-25T06:24:59.523912+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-sympy-laplace — SymPy integral transforms documentation

SymPy developers; None; Latest documentation captured 2026-11-25

https://docs.sympy.org/latest/modules/integrals/integrals.html

**Source class**: official-data

**Status / reading depth**: selected-text; Actual selected passages/sections read; raw capture is not a claim that every page was reviewed.

**Sections inspected**: Integral transform conventions
Laplace transform and convergence-condition interface

**Supported claim**: Transforms include convergence information rather than only an algebraic expression.

**Limitations**: No symbolic software result was executed here; formulas and regions are derived separately.

**research-note**: Transforms include convergence information rather than only an algebraic expression.

Capture SHA-256: `677f463e032b302b8bced2d3ed69abbf6c559fa2df098fa5b9b52e4e40ccfa0d`; captured 2026-11-25T06:24:59.901236+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-thorium-ratio-2024 — Frequency ratio of the 229mTh nuclear isomeric transition and the 87Sr atomic clock

C. Zhang et al.; 2024; Nature published 2024-09-04; abstract/figure-caption page only

https://www.nature.com/articles/s41586-024-07839-6

**Source class**: primary-paper

**Status / reading depth**: abstract-only; Actual selected passages/sections read; raw capture is not a claim that every page was reviewed.

**Sections inspected**: Abstract
Visible figure captions
Access boundary

**Supported claim**: Reports VUV-comb linkage of thorium nuclear and strontium electronic transitions, with a frequency-ratio measurement.

**Limitations**: Publisher page explicitly exposes subscription preview only; methods, full paper and experimental data were not read.

**research-note**: Reports VUV-comb linkage of thorium nuclear and strontium electronic transitions, with a frequency-ratio measurement.

Capture SHA-256: `6d4311a7f18414557306ef49cda5148f3bdedd568bbc2d99b659061360728d72`; captured 2026-11-25T06:25:02.120168+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-nuclear-feedback-2026 — A thorium-229 optical nuclear clock with feedback loop

L Toscani De Col
T Riebner
I Morawetz
F Schneider
N Sempelmann
J Schlachet-Lépinay
F Schaden
M Bartokos
G A Kazakov
K Beeks
B Gerstenecker
M Pimon
S Lahs
A Hellerschmied
T Lercher
H Denker
J Premper
A Niessner
M Matus
M Čížek
O Číp
V Lal
G Zitzer
V Petrov
J Tiedau
M V Okhapkin
E Peik
T Schumm; 2026; Published 2026-10-07; full XML captured

https://pmc.ncbi.nlm.nih.gov/articles/PMC13686927/

**Source class**: primary-paper

**Status / reading depth**: selected-text; Abstract/initial sections plus the explicitly listed Round2 body sections actually read; no complete experimental reanalysis or independent replication.

**Sections inspected**: Abstract
Introductory clock-comparison discussion
Round2 body: Clock operation
Round2 body: Clock performance
Round2 body: Prospects for future solid-state 229Th nuclear clocks

**Supported claim**: Reports absorption-based nuclear-transition feedback; body distinguishes improved within-run stability from about5×10^−13 between-day reproducibility and crystal-position-dependent line centres.

**Limitations**: Clock performance section reports shifts up to1.7kHz between probed crystal regions; host strain is a proposed explanation. Improved future linewidth/power projections are not demonstrated clock accuracy. No independent systematic-budget reconstruction.

**research-note**: Reports stabilization of a cw laser to a solid-host thorium nuclear transition with a feedback loop and comparison to a Yb+ reference.

Capture SHA-256: `0cbb41d71784149f8c61fe12c0dbfde1afc297b779c5f767dc161728dd0c8216`; captured 2026-11-25T06:26:24.132776+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-optical-rabi-2026 — Spatially defined Rabi spectroscopy for uninterrupted optical clock interrogation

Koki Nishida
Ryoto Takeuchi
Shigenori Tsuji
Shoichi Okaba
Hidetoshi Katori; 2026; Published 2026-08-06; full XML captured

https://pmc.ncbi.nlm.nih.gov/articles/PMC13448705/

**Source class**: primary-paper

**Status / reading depth**: selected-text; Abstract/initial sections plus the explicitly listed Round2 body sections actually read; no complete experimental reanalysis or independent replication.

**Sections inspected**: Abstract
Conclusion
Opening methods context
Round2 body: Clock spectroscopy with Fourier-limited resolution
Round2 body: Discussion
Round2 body: BBR shift

**Supported claim**: Reports1.2Hz FWHM excitation spectrum with0.75s transit through a12mm region at16mm/s; body identifies a rectangular-interaction Fourier width and retains cooling-light and BBR-shift effects.

**Limitations**: A finite-time Rabi excitation line is not a Lorentzian intrinsic lifetime. Discussion treats dead-time-free closed-loop stabilization as future work; BBR estimate uses approximate emissivity/area weighting and later thermometry, not a complete simultaneous accuracy certification.

**research-note**: Reports spatially defined Rabi spectroscopy of continuously transported strontium and a 1.2Hz-wide spectrum.

Capture SHA-256: `efa8a7a3a89c14319ad3b39878903482f5a6afc8a751ab466e0998f91b4554b4`; captured 2026-11-25T06:26:24.199854+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-comb-ranging-2026 — A Ranging System Integrating Time‐of‐Flight Approach With Optical‐Frequency‐Comb Interferometry for Ultra‐Precise Long‐Distance Measurements

Cunliang Yang
Xiao Wang
Zihao Zhang
Junhao Li
Jingjing Wang
Jinman Ge
Lizhong Xiao
Jijun Feng; 2026; Published 2026-11-11; full XML captured

https://pmc.ncbi.nlm.nih.gov/articles/PMC13755749/

**Source class**: primary-paper

**Status / reading depth**: selected-text; Actual selected passages/sections read; raw capture is not a claim that every page was reviewed.

**Sections inspected**: Abstract
Conclusions

**Supported claim**: Combines coarse time-of-flight and fine comb interferometry for absolute ranging.

**Limitations**: Reported apparatus-specific distance errors are not independently reanalysed, and air-index/reference uncertainties are not resolved by citing the comb equation.

**research-note**: Combines coarse time-of-flight and fine comb interferometry for absolute ranging.

Capture SHA-256: `481871db49e098f34ad6ad27556fb1dc2634bf6783960fb64091d1a9daff4888`; captured 2026-11-25T06:26:22.133201+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-floquet-2026 — Chirality-selective second-harmonic response with Floquet engineering

Yi Zhang
Haijun Cao
Youqiang Huang
Luojun Du
Nianze Shang
Xueyin Bai
Xuetao Gan
Dong Mao
Peng Li
Jianlin Zhao
F. Javier García de Abajo
Sheng Meng
Zhipei Sun; 2026; Published 2026-10-30; full XML captured

https://pmc.ncbi.nlm.nih.gov/articles/PMC13721968/

**Source class**: primary-paper

**Status / reading depth**: selected-text; Actual selected passages/sections read; raw capture is not a claim that every page was reviewed.

**Sections inspected**: Abstract
Introduction

**Supported claim**: Reports chirality-selective second-harmonic response under optical Floquet engineering in monolayer MoS2.

**Limitations**: A specific driven-material experiment, not the proof source for the general Floquet theorem and not a universal frequency-effect claim.

**research-note**: Reports chirality-selective second-harmonic response under optical Floquet engineering in monolayer MoS2.

Capture SHA-256: `c7642df7cde2535472a3102b5767be0ceb8cc58e0b1e82f306789fec224d5a26`; captured 2026-11-25T06:26:24.992053+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-thorium-laser-2024 — Laser Excitation of the Th-229 Nucleus

J. Tiedau et al.; 2024; Crossref DOI record and deposited abstract; publisher full text not retrieved

https://doi.org/10.1103/PhysRevLett.132.182501

**Source class**: primary-paper

**Status / reading depth**: abstract-only; Deposited abstract and DOI/title/publication identity read; not full paper.

**Sections inspected**: Deposited abstract
DOI/title metadata

**Supported claim**: Reports resonant laser excitation of Th229 in doped CaF2 and a Th232 control without the corresponding fluorescence signal.

**Limitations**: The initially guessed arXiv2404.02939 was a different paper and is retained privately as an identity mismatch; no inference uses it. Experimental methods and full uncertainty not independently reviewed.

**research-note**: The abstract reports an isotope-control discrimination and resonant fluorescence; this is not a clock accuracy certification.

Capture SHA-256: `88ec55221a8cce36d656c22501a3822aaa39f5cc47c169e7e7a3f0e7b927ca6f`; captured 2026-11-25T06:26:25.443461+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### freq-codata-2022 — NIST 2022 CODATA recommended values: complete ASCII table

NIST / CODATA; 2022; 2022 adjustment; shared editorial capture inspected 2026-11-25

https://physics.nist.gov/cuu/Constants/Table/allascii.txt

**Source class**: official-data

**Status / reading depth**: selected-text; Actual shared raw-table rows read; an independent repeat HTTP request returned403 and is not claimed successful.

**Sections inspected**: h,c,e,k_B defining-value rows
alpha,mu_0,epsilon_0 measured-value/uncertainty rows

**Supported claim**: h,c,e,k_B are exact defining values; mu0 and epsilon0 retain measured uncertainties in the revised SI.

**Limitations**: Raw capture was retrieved by the moderator and reused with its exact source timestamp/hash. This review does not independently re-adjust the experimental constants.

**research-note**: The historical value mu0=4π×10^−7 N/A² is no longer exact; precision examples must retain CODATA uncertainty.

Capture SHA-256: `77fb90e66c40db3e6eb16630bc9c88e4c7c8beddbe5e71be406f2f26e3f67e67`; captured 2026-11-25T06:27:01.837771+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.
