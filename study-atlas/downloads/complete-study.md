# Fields, Frequency and Mathematics — Complete Study Atlas

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

# Electrostatics: how a field problem becomes a statement about matter

Electrostatics begins with an economical question: given charges, material response and boundaries, what electric field is present? The economy disappears if any of those inputs is left implicit. A voltage is a difference between references, a capacitance belongs to an electrical configuration, and a measured force belongs to a mechanical and electrical control ensemble. A graph of a crystal, a patterned electrode or a biological interface supplies none of those choices by itself. This chapter builds a route from elementary fields to selected research questions while keeping each observation map visible.

The cutoff is **25 November 2026**. The technical appendix contains 78 topics through five distinct levels and 42 formula records with local symbol dictionaries, units, assumptions, derivations, examples and failure cases. The taxonomy maps more territory than the source reading covers. Research-line nodes marked **mapped** are organizing questions, not assertions that every paper in that specialty was read. Six 2026 primary papers were retrieved as PMC HTML after their XML endpoints timed out; selected abstracts and opening introduction, results or conclusion passages were inspected. They form a deliberately small current sample, not a balanced history of 2024–2026 or an exhaustive account of current research.

The foundations include selected passages from David Tong's lecture notes, MIT's Gauss-law and capacitance chapters, a finite-element Poisson tutorial, the NIST CODATA value record and the uncertainty guide JCGM 100. Raw source files remain private. Public records give exact URLs, capture hashes, dates and actual reading depth. No experiment was performed for this chapter. Numerical examples are calculations under stated assumptions, not measurements or recommended high-voltage procedures.

## 1. Sources, fields and the information hidden by symmetry

Coulomb's law is a vector statement. The force on the first of two point charges points along the displacement from the second to the first, multiplied by the signed product of their charges. Writing only a positive inverse-square magnitude discards which object receives the force and whether like or unlike charges attract. For one-nanocoulomb charges separated by ten centimetres in vacuum, the magnitude is about 0.899 micronewton. The smallness of that example says nothing about practical measurement: stray charge, humidity, mechanical vibration and nearby grounded objects can all change the actual apparatus problem.

The point-charge idealization also has a domain. The inverse-square expression diverges at zero separation. That divergence is not a prediction of an infinite contact force between finite objects. A model of finite charged bodies must specify their charge distribution, polarization and mechanical separation. At atomic scales, a classical point-source calculation is not a substitute for quantum electronic structure. A continuum charge density similarly represents coarse-grained information; changing the coarse-graining without changing the constitutive interpretation can count the same polarization charge twice.

The field integral adds oriented contributions. Two equal positive charges have zero field at their midpoint, yet their potential there is not zero when infinity is the reference. This is a simple inverse-problem lesson: a null observation at one point does not establish absence of sources. A sensor that measures one projection of the field loses still more information. Multiple source configurations can give that same projection, especially when measurements are confined to a plane or to a finite set of positions.

Gauss's law specifies flux through a closed surface. It does not generally specify the field at each surface point. The familiar spherical, cylindrical and planar examples work because symmetry supplies that additional information. An external charge contributes zero net flux through a surface that excludes it, but usually contributes a nonzero field everywhere on that surface. A finite capacitor with edges cannot be solved simply by declaring a convenient Gaussian box and treating its field as uniform. Such shortcuts may estimate a dominant contribution, but their neglected fringing field remains part of the error model.

A multipole expansion organizes what a distant observer can resolve. Net charge gives a potential proportional to inverse distance; a dipole gives inverse distance squared; higher moments decay faster. The expansion is controlled by the ratio of source size to observation distance. It is not a license to retain a dipole at distances comparable to the source extent. When the total charge is nonzero, even the numerical dipole moment depends on the expansion origin, although the complete physical field does not. A graphical pattern that looks like a dipole is not evidence that an object carries that electric moment.

These elementary distinctions set a useful research discipline. State the actual source quantity, its units, the region in which it is resolved, the measured component and the conditions under which a reduced representation is accurate. If the reduction is justified by a symmetry, test the symmetry rather than merely repeating its formula. A grounded shield, a finite opening or a nearby dielectric can break it. The appendix's early formulas should therefore be read as conditional source-to-observable maps, not as labels attached to familiar shapes.

## 2. Potential, boundaries and uniqueness

For a conservative static field, the electric field is minus the gradient of potential. Moving a positive test charge along the field lowers its potential energy. This fixes the sign in the line integral for a voltage difference. An additive constant in potential leaves every field unchanged. A voltage reference is therefore part of the statement of a problem, not an incidental software setting. Numerical solvers that leave an all-Neumann problem without a gauge condition can exhibit a singular matrix even when the physical electric field is perfectly well defined.

A potential must satisfy a differential equation and boundary data together. In a uniform vacuum region, Poisson's equation connects potential curvature to charge density. In a local linear dielectric with spatially varying permittivity, the correct operator is the divergence of permittivity times the potential gradient. Pulling the permittivity outside that divergence is valid only where it is constant. At an interface, the missing derivative otherwise appears as an omitted surface contribution. An attractive-looking potential contour plot can consequently solve the wrong physical interface problem.

The boundary condition also names the controlled quantity. Dirichlet data fixes potential. Neumann data fixes a normal derivative or an explicitly defined flux. With the appendix's convention, the mathematical Neumann variable is permittivity times outward potential derivative; the outward electric displacement flux is its negative. Other conventions are equally usable, but mixing them reverses a surface charge or injected flux. A boundary that represents an isolated charged conductor is different from a grounded conductor, even when they have the same shape.

Uniqueness is an energy argument. Subtract two candidate potentials with the same source and boundary data, multiply the resulting homogeneous equation by their difference, and integrate by parts. Positive permittivity makes the integral of the squared gradient nonnegative. The admissible boundary terms vanish, leaving equal gradients. A fixed potential trace removes the remaining constant; an all-Neumann problem retains that constant unless the mean is prescribed. Solvability additionally requires charge and flux compatibility. Software can impose a gauge, but it cannot repair physically incompatible boundary data by silently discarding net charge.

Images and Green functions express these same constraints in a different representation. A mirror charge near a conducting plane is not another physical charge behind the plane. It is an auxiliary source whose field reproduces the appropriate boundary condition in the region being solved. For two dielectric half-spaces, the image strength depends on both permittivities. Equal materials eliminate the image; the ideal conducting limit reverses its sign. A finite plane, a curved interface or a nonlinear dielectric generally requires a different Green function or a numerical solution.

The important connection to inverse work is that forward uniqueness does not imply inverse uniqueness. Given all charges, material parameters and boundaries, a potential may be unique. Given a few potentials, the charges and material parameters need not be. Incomplete boundary measurements can trade a surface patch against a nearby source or a change in dielectric structure. A research claim that reconstructs charge from a field map must specify what was held known and demonstrate what alternative source distributions its observations cannot distinguish.

## 3. Energy, electrical control and force

For a reversible linear dielectric, stored field energy is one half the volume integral of electric field dotted with displacement. For a nonlinear constitutive relation, charging work is an integral along the constitutive path instead. In a hysteretic material, part of the work is dissipated and the state carries history. Assigning a single static permittivity to the entire loop hides that distinction. A remanent polarization also changes the useful energy reference, so zero applied field does not automatically mean a featureless zero-energy material state.

The simplest capacitor exposes a frequently consequential ensemble error. At fixed charge, the mechanical force is minus the derivative of charge-squared divided by twice capacitance. At fixed voltage, the correct force follows from coenergy or from an accounting that includes the voltage source. Differentiating field energy while pretending that the voltage is fixed and the source supplies no work gives the wrong sign. For parallel plates, increasing separation decreases capacitance, and the correctly computed force is attractive. The power supply is an energy port; the attraction is not an unexplained source of energy.

Multi-electrode systems need a capacitance matrix rather than a collection of independent scalar capacitors. Each conductor's charge depends on all electrode potentials relative to the chosen reference. Reciprocity makes the appropriate matrix symmetric in a linear reciprocal medium. The full isolated system has a gauge mode: adding the same voltage to every conductor changes no field. Grounding a reference removes that ambiguity. Off-diagonal Maxwell coefficients have a sign convention that differs from the positive component values usually drawn in a circuit. Confusing those conventions can turn an otherwise correct field calculation into an incorrect network model.

Maxwell stress gives another force representation. A solved electric field transmits stress across a surface. For an ideal conductor in a simple surrounding medium, the familiar normal pressure scales with permittivity times field squared. This is not a general formula for every force inside deformable matter. Electrostriction, mechanical constraint, anisotropy and nonlinear polarization can contribute to the full stress balance. Choosing a vacuum integration surface can simplify the bookkeeping, but the surface must enclose the physical object and all relevant fields consistently.

A permanent dipole provides a related warning about observables. A uniform field can exert torque on a misaligned dipole while producing no translational force. A gradient is required for translation in the fixed-dipole approximation. An induced dipole has a different charging energy because its moment changes as the field is applied; importing the permanent-dipole expression without that adjustment introduces a factor-of-two error. Force, orientation, stored energy and a detector's response are linked quantities, but they are not interchangeable measurements.

For metrology or a proposed device, the practical starting point is therefore a complete control ledger: which voltages or charges are held, where source work enters, what geometry changes, what material state is reversible and what mechanical forces are included. An anomalous force inferred from a residual is not identified until those ordinary ports and constraints are tested. The calculations here provide such checks under explicit models; they do not qualify an apparatus or certify a novel energy mechanism.

## 4. Polarization, anisotropy and ferroelectric landscapes

Polarization is dipole moment per volume. Its divergence produces bound volume charge, and its termination at a surface produces bound surface charge. A uniformly polarized finite slab can therefore have no bound charge in its interior while carrying opposite sheets on its faces. The distinction between free and bound charge is a macroscopic modeling choice tied to the constitutive description. When a dielectric is already represented by a permittivity, adding a second explicit polarization surface charge without re-deriving the model can count the same response twice.

The simplest constitutive law assumes polarization proportional to field. Anisotropic media replace the scalar permittivity by a tensor, and displacement need not be parallel to electric field. A stable reciprocal static model uses a symmetric positive-definite energy quadratic form. Frequency-dependent media with negative real permittivity belong to a dispersive response problem; their stored energy cannot be inferred by inserting that negative number into a nondispersive static energy density. The mathematical sign of one measured response component does not by itself diagnose the thermodynamic stability of a complete system.

Even the relation between molecular polarizability and bulk permittivity needs assumptions. The Clausius–Mossotti construction uses an isotropic local cavity field and weakly interacting polarizable units. Its dilute limit is useful, but its apparent singularity is not a universal prediction of a phase transition. Strong correlations, permanent dipoles, local structure and interfaces can invalidate the reduction. This is a recurring multiscale issue: a response measured on one length scale becomes a bulk coefficient only through an identifying map, not through dimensional similarity alone.

A Landau free-energy expansion offers a different, phenomenological description of a ferroelectric order parameter. Stationary polarization solves the derivative equation, but stability requires the appropriate curvature to be positive after the external electrical and mechanical constraints are included. A homogeneous solution at the middle of a double-well landscape may be unstable. Domain formation can lower the energy without eliminating local polar distortion. Gradient energy, strain, defects and dynamics then become necessary parts of the model rather than small optional decorations.

The selected 2026 cylindrical-capacitor paper by Park and colleagues makes this limitation concrete. The inspected abstract and introduction describe ferroelectric/dielectric stacks whose positive, very large or negative differential capacitance depends on thickness, curvature, interfacial charge compensation and domain stray-field energy. The authors combine device observations with analytical and phase-field modeling. Their account is more specific than an isolated homogeneous polynomial with a negative second derivative. It does not justify applying one negative capacitor value to an arbitrary circuit without checking leakage, trapped charge and whole-stack stability.

The selected ultrathin BaTiO3 work by Lee and colleagues reports a second useful distinction. In the inspected passages, local polar structural distortion persists while remanent polarization drops, and reverse-domain formation is identified as the principal mechanism in the studied heterostructures. Interface capacitance and defect-controlled relaxation play different roles. A reduced measured remanence is therefore not automatically evidence that microscopic ferroelectric order has vanished. These are material-specific experimental/model findings, not a universal account of every thin film.

For a quasistatic series construction, inverse differential capacitances add. A negative subsystem slope can be stabilized by a sufficiently positive total curvature under the chosen constraints. That statement is conditional and local; it is not a guarantee that a fabricated structure follows the proposed branch. Distinguishing transient switching, trapped-charge artifacts, multidomain redistribution and stable response requires independent observables, time scales and ensemble control. The chapter's worked series example checks the algebra and stability sign only; no device performance is borrowed from the papers as a result of this project.

## 5. Screening: from ideal entropy to correlated ionic matter

The Boltzmann ion distribution follows from electrochemical equilibrium. An ideal ion pays electrostatic energy proportional to its signed charge and gains mixing entropy by spreading through accessible volume. Equating its chemical potential to that of a reservoir gives an exponential density dependence on potential. Combining this distribution with Poisson's equation produces the nonlinear Poisson–Boltzmann equation. The solvent is usually treated as a local dielectric continuum, the ions as point particles and correlations between individual ions as absent beyond the mean field.

The Debye length is a linear-response scale within that model. Linearizing the ion distributions requires the dimensionless electrostatic energy to be small compared with thermal energy. Reservoir electroneutrality cancels the constant charge term, leaving a coefficient proportional to the sum of valence squared times species number density. Because valence is squared, a multivalent salt contributes differently from a monovalent salt at the same number concentration. Concentration units also matter: molarity is moles per litre, while the formula requires particles per cubic metre. Missing that conversion creates a large and entirely artificial screening-length error.

In water near room temperature, a one-millimolar symmetric monovalent electrolyte gives a dilute-model Debye length of roughly ten nanometres. The number is illustrative: solvent permittivity, activity and temperature need their own definitions. A measured exponential decay in a concentrated liquid need not be this Debye length. Calling every observed length “screening” does not identify whether it reflects charge correlations, confinement, hydration, a mechanical surface-force model or an instrument transfer function.

Nonlinear Poisson–Boltzmann theory extends beyond the small-potential approximation but retains its mean-field ingredients. For a planar symmetric electrolyte, integrating the equation once gives the Grahame charge–potential relation. The resulting diffuse-layer capacitance is a derivative of surface charge with respect to diffuse potential, not necessarily the capacitance between a real metal and its bulk electrolyte. A compact layer, chemical adsorption or an electronic contribution adds other voltage drops. Curved geometry changes the solution, and a charge-regulating surface supplies an equilibrium boundary condition rather than a fixed charge chosen independently of potential.

Point ions accumulate without a physical density ceiling near a sufficiently charged wall. A lattice-gas entropy can impose excluded-volume crowding and recover ordinary Boltzmann statistics in the dilute limit. That is a meaningful improvement with a declared microscopic volume parameter, but it still is not a complete model of ion hydration, dielectric decrement or oscillatory liquid structure. Conversely, adding a correlation correction to point-ion theory does not automatically repair packing. Models should be compared by which omitted mechanism is large in the actual parameter regime, not by an assumption that more terms necessarily mean more truth.

The Bjerrum length compares Coulomb energy with thermal energy. A planar strong-coupling parameter adds surface charge and ion valence under a particular wall convention. Its rapid valence dependence explains why monovalent intuition may fail for multivalent counterions. A single threshold is not universal across salt mixtures and geometries. Charge inversion or like-charge attraction in a correlated model is not a failure of electrostatic force laws; it is a failure of an overly simple independent-ion approximation to the many-body equilibrium state.

The inspected 2026 Kohn–Sham–Poisson–Boltzmann benchmark by Li and colleagues expands the problem on the metal side. It compares orbital-free kinetic-energy approximations against a more explicit electronic benchmark and examines electron density, potential and double-layer capacitance. Its introduction also identifies steric, polarization and nonlocal corrections on the solution side. This illustrates why a measured interfacial capacitance cannot be attributed uniquely to ionic screening without accounting for electronic spillover and the metal boundary description. The paper's selected model comparisons were read; its full solver and datasets were not independently reproduced here.

## 6. Interfaces, adsorption and electronic compressibility

A compact-layer plus diffuse-layer circuit is useful because it forces a voltage partition. The same incremental charge passes through ideal series elements, so the inverse slopes add. The smaller positive capacitance often limits the total. Yet an effective compact thickness inferred from capacitance is not automatically the location of a molecular plane. Specific adsorption, solvent orientation, variable permittivity and lateral heterogeneity can produce similar electrical responses. A fitted parameter becomes a structural claim only when another measurement identifies that structure.

Charge regulation adds chemical state variables to the boundary condition. For independent acidic surface sites, the deprotonated fraction depends on bulk acidity and local electrostatic potential. The local proton activity differs from its bulk value, and the sign of that Boltzmann factor matters. An error in the sign reverses the feedback between surface charge and potential. Real surfaces may have several site types, lateral interactions and nonideal activities. Fixed-charge and fixed-potential boundaries are then limiting approximations, not interchangeable descriptions of the same chemistry.

Low-dimensional electronic systems expose another voltage cost. Adding carriers changes their chemical potential when the available density of states is small. Quantum capacitance expresses this electronic compressibility contribution. Its area normalization and energy unit must be stated: a density of states tabulated per electronvolt is not numerically the same as one per joule. The total electrochemical capacitance can include geometric, electronic, ionic, trap and contact contributions. Their separation requires an observation model and controlled sweeps; a circuit fit does not identify them merely by assigning names to components.

The ideal zero-temperature graphene model provides a clear example. A linear Dirac dispersion gives a quantum capacitance proportional to the magnitude of chemical potential measured from neutrality. With an assumed Dirac velocity of one million metres per second and a chemical potential of one tenth of an electronvolt, the model gives about 0.0235 farad per square metre. This is not a prediction that a fabricated electrode has that measured total capacitance. Temperature, charge puddles, interactions, finite size, substrate disorder and contact geometry modify the ideal minimum and the relation between gate voltage and carrier density.

The inspected 2026 graphene doping study by Jiao and colleagues uses first-principles calculations to compare particular boron, nitrogen and aluminium configurations. It links predicted density-of-states changes to quantum-capacitance changes. Those are results for selected computed structures and conventions, not a measured supercapacitor performance curve. The source's optimistic language about device relevance is therefore kept distinct from what this chapter can establish. Our ideal graphene example remains a separate standard-model calculation rather than a replication of those doped-material simulations.

Negative electronic compressibility and negative ferroelectric differential response should also not be collapsed into one phenomenon because both can appear as a negative contribution to an inverse capacitance. They describe different state variables and mechanisms. In either case, whole-system stability and control conditions matter. A positive measured total capacitance can coexist with an enhancing contribution, but a decomposition is not unique unless the geometry, reference state and parasitic channels are independently constrained. That is a fruitful research question rather than a reason to label every enhancement as a new source of energy.

## 7. Fluctuations and the boundary of electrostatics

Thermal charge noise depends on the ensemble. For a stable classical voltage-controlled system, charge variance is proportional to temperature and differential capacitance. A strictly fixed total charge cannot fluctuate in that same way because the constraint removes the relevant degree of freedom. Substituting an unstable isolated negative branch into the variance formula would produce a negative variance, exposing an inconsistent use of assumptions rather than a novel noise state. Detector noise spectra require dynamics and bandwidth in addition to this equilibrium identity.

Fluctuation-induced forces require similar scope control. The zero-frequency electric sector of planar finite-temperature fluctuation theory can be understood through static electrostatic boundary modes. It is only one part of a full material-dependent interaction. Nonzero imaginary-frequency terms, electromagnetic polarization sectors, dispersion and retardation are not derived from a single static potential equation. The appendix gives an explicitly labeled electrostatic zero-mode expression so that its high-temperature or large-separation role is visible without pretending that all Casimir physics is classical electrostatics.

Boundary prescriptions are consequential. A finite-conductivity material, an ideal reflector, a dielectric with mobile ions and an electrode held at fixed potential do not necessarily have the same zero-frequency response. Screening changes static fields inside matter, and material models determine which modes contribute. Combining a zero-mode approximation with a full calculation that already includes that mode would double count it. Calling a fitted force “Casimir” does not resolve uncertainty about patch potentials, roughness, geometry, temperature or the measured displacement-to-force conversion.

Patch potentials are particularly important to this atlas because they connect microscopic surface variability to macroscopic inference. Different grains, adsorbates, trapped charges and surface preparation can produce spatially varying effective potentials. A Kelvin-probe measurement and a force experiment weight those variations through different geometries and transfer functions. A map obtained with one tip cannot simply be inserted as a pointwise exact boundary condition for another apparatus without modeling resolution, distance and calibration.

The selected 2026 graphene-membrane paper by Ribeiro and Terças is an instructive current boundary case. The inspected abstract and conclusion treat Casimir-mediated coupling between two mechanical membranes, with an external drive supplying the energy. Their model predicts mode hybridization and enhancement of a flexural response. The coupling is passive: the paper explicitly separates it from the external energy source. A larger displacement or narrower response peak is not evidence of source-free power. The chapter does not reproduce the authors' parameter study or derive the full force from quantum field theory.

This distinction also protects the larger research workspace from semantic shortcuts. A frequency peak, a force enhancement and an energy balance answer different questions. A static field can couple mechanical degrees of freedom, while the work comes from a driven source. An optical, electrical or mechanical detector sees a channel with finite bandwidth and uncertainty. Neither the existence of vacuum fluctuations nor an unusual material response supplies an automatic bridge to biological benefit, an occult field or a universal natural frequency of an image or monument.

## 8. Numerical methods: the problem is larger than the mesh

A finite-element calculation starts from a weak formulation, not just from drawing a mesh. The trial potential must satisfy the essential boundary trace, and the test functions vanish where that trace is fixed. Integration by parts exposes the Neumann contribution and its sign convention. Positive permittivity supplies the coercivity behind the usual energy argument. A pure-Neumann system needs compatibility and a gauge constraint. A linear solver that returns a vector has not thereby proved any of those premises.

Conforming finite elements minimize a particular source-loaded Poisson functional over a finite-dimensional space. The resulting stiffness matrix is symmetric under the stated reciprocal model. Refining the approximation can reduce discretization error, but it cannot validate a wrong dielectric coefficient, an omitted interface or an unjustified boundary placed too close to a source. Numerical tolerance, mesh error, domain truncation, material uncertainty and physical-model error are separate entries in an uncertainty budget. A small algebraic residual usually addresses only one of them.

Boundary elements shift the representation from the interior volume to interfaces, often efficiently for homogeneous regions. Their Green kernels are singular, and limiting the observation point onto a boundary introduces jump conventions. Accurate near-surface fields and forces require more care than visually smooth far-field potentials. Heterogeneous bulk media need appropriate regional equations or a different operator; replacing them everywhere by one free-space kernel solves a different problem. Mesh refinement cannot correct a missing integral-equation term.

Long-range particle calculations have their own boundary commitments. The Ewald error-function split is an exact identity, but a complete periodic energy includes real-space and reciprocal contributions, self corrections and a declared treatment of net charge and the zero mode. The splitting parameter is a numerical device: a converged physical result should not depend on it. A charged slab coupled to an ion reservoir is not the same ensemble as a neutral three-dimensional periodic crystal. Vacuum padding alone does not automatically turn one into the other.

The selected 2026 work by Levin and Bakhshandeh addresses precisely that distinction. The inspected abstract and conclusion describe a regularized periodic framework for non-neutral open slab configurations, comparisons with a two-dimensional lattice limit, and ionic profiles compared against nonlinear Poisson–Boltzmann benchmarks. It is a particular boundary and reservoir construction, not permission to ignore neutrality conventions in arbitrary simulations. The authors' broad efficiency and uniqueness claims were not independently benchmarked here. The source provides an important current example of why ensemble and boundary definitions belong beside computational results.

A useful solver-validation ladder therefore begins with an analytic limit, adds a geometry with an independent representation, tests numerical convergence and finally changes a physical assumption deliberately. Compare a planar capacitor against its small-gap approximation, a dielectric interface against an image solution, or a periodic cell against a known zero-mode convention. A second run of the same implementation is useful regression evidence, but it is not independent reasoning. The forward question is whether the code computes the specified model; the reverse question is whether the specified model contains enough premises to support the physical conclusion.

## 9. Inverse inference and metrology

An inverse map can have a kernel even when every displayed singular value is positive. A rectangular matrix with fewer measured combinations than unknowns can return a short list of positive singular values while leaving unobserved directions. The appendix's example measures only the sum of two unknowns; adding one to the first and subtracting one from the second changes neither datum. This simple algebra is the right starting point for interpreting charge reconstruction, electrostatic imaging or a model trained to map patterns to material parameters.

Regularization chooses among data-compatible possibilities using a penalty, prior or restricted model class. Its normal equations can be well conditioned while the underlying physical inverse remains nonunique. A visually plausible reconstructed charge map therefore does not establish that it is the unique source. Report the domain dimension, rank, constraints, null directions and sensitivity to the regularization choice. If a learned prior excludes alternatives, say so; the exclusion comes from the prior, not from newly measured information.

Potential and capacitance measurements are operational quantities. A capacitance bridge needs guarding, cable and fixture characterization, leakage assessment, frequency specification and a traceable reference. At finite frequency, a lossy object may require complex admittance rather than one real static capacitance. Fringing and stray coupling depend on geometry. The electrical quantity that reaches a bridge or lock-in amplifier is not automatically the ideal coefficient used in a textbook formula.

Kelvin probe force microscopy adds a useful example of an indirect null. Expanding a capacitive force under a DC bias plus sinusoidal modulation gives a first-harmonic term that vanishes when the applied bias matches an effective contact potential under the model. The force can still have DC and second-harmonic components at that null. A spatially varying surface, tip convolution, trapped charge or feedback delay changes the interpretation. The voltage polarity convention must be recorded before a contact potential is converted into a work-function difference.

Uncertainty propagation joins these issues quantitatively. Linearizing a measurement function produces sensitivity coefficients; their covariance-weighted combination gives a standard uncertainty under the local approximation. Correlated calibration errors can cancel in a ratio, while independent errors add differently. Omitting covariance is neither conservative nor harmless in general. Multiplying a standard uncertainty by two does not automatically yield a calibrated 95-percent interval, and a confidence interval overlapping zero is not an equivalence test with a prespecified meaningful margin.

For a new electrostatic claim, the decisive evidence is usually an observation that alternatives cannot reproduce: independently calibrated changes in geometry, material, boundary, distance, temperature or controlled source. Hold out some conditions from fitting. Preserve null outcomes and residual structure. A source-hashed dataset and a reproducible solver are valuable, but they cannot supply an unmeasured boundary condition. The atlas's graph represents documentary, mathematical and conditional relationships; an edge between a paper and a topic is not a causal force or a certificate of experimental validity.

## 10. What the map establishes and what remains open

This chapter's strongest claims are narrow and reusable. Coulomb superposition, conservative potentials and boundary conditions form a coherent static forward model. Linear dielectric energy and force formulas depend on their electrical ensemble. Nonlinear polarization, electrolyte entropy, electronic compressibility and fluctuation sectors require additional state variables and assumptions. Numerical convergence addresses the equations actually posed, and inverse reconstruction is limited by what the observation map can identify. Those statements survive moving between a classroom example and a current research paper because their hypotheses remain explicit.

The selected current literature broadens rather than erases these requirements. Cylindrical ferroelectric stacks make geometry and domains visible. Ultrathin BaTiO3 separates local order from remanent response. An electronic-interface benchmark exposes a hidden metal-side approximation. Doped-graphene calculations distinguish electronic structure from a finished electrode. A Casimir-coupled membrane model separates response enhancement from its external power source. An open-slab electrostatic algorithm makes reservoir and periodic-boundary conventions part of the method. Each paper addresses a specific problem; none supplies a universal answer for every interface, material or field configuration.

Several branches remain mapped rather than deeply reviewed: strong-coupling charge regulation across realistic mixed electrolytes, nonlocal dielectric response, rigorous adaptive error bounds for difficult interfaces, molecularly resolved compact layers, experimental separation of patch and fluctuation forces, and uncertainty-calibrated learned inverse models. Their nodes are invitations to expand a source ledger, not claims that this round completed those specialties. Current examples are concentrated in 2026 and should be supplemented with deliberately selected earlier work before making a historical or comparative survey claim.

The useful next step is not to add an unexplained universal coefficient. Choose an observable, state the competing mechanisms and locate the missing premise. A surface-force anomaly may require a patch measurement or a changed boundary ensemble. An enhanced capacitance may require separation of traps, ions and electronic compressibility. A screening discrepancy may require a finite-size or correlation model whose parameters are independently constrained. A plausible inverse image may require another measurement geometry that breaks its kernel.

All examples here are standard or conditional model calculations and source-qualified research notes. No claimed novelty, hardware performance, biological effect, free energy or unique pattern-to-frequency assignment follows from their inclusion. The selected corpus is designed to be inspectable: equations retain symbols and dimensions, sources retain reading depth, failures remain visible, and open questions retain the evidence needed to move forward. That is a concrete foundation for a later adversarial review, not the end of electrostatics.


## Round2: three counterexamples that constrain interpretation

The fixed-voltage capacitor can be checked without trusting a force formula. Its voltage-controlled potential is G=U−VQ=−CV²/2, and the source supplies signed work V*deltaQ. Separating plates at fixed voltage lowers the stored field energy while returning charge to the source; positive external mechanical work completes the balance. Differentiating the field energy alone would predict repulsion, the opposite sign. At the same instantaneous charge/voltage state, fixed-charge and fixed-voltage force calculations agree; their dependence on subsequent gap changes differs because the controls differ.

A pure-Neumann Poisson example exposes a different hidden premise. On the unit interval with epsilon=1 and rho=2 in consistent SI units, phi=x−x² has outward boundary derivatives g_left=g_right=−1. The source integral plus boundary-flux integral is zero. An exact rational finite-volume reconstruction has rank seven for eight cells and a constant gauge kernel. Changing one boundary derivative to zero makes the augmented rank eight: no exact solution exists. Pinning a numerical node cannot legitimately turn those incompatible data into the original physical problem.

The fluctuation prefactor also depends on which sector is counted. Retaining one static electric/TM zero-frequency mode gives kBT/(4pi) times the transverse integral. Substitution u=2ka yields an additional1/(4a²); integration gives−zeta(3), leaving−zeta(3)kBT/(16pi*a²). A separately included ideal TE zero mode would double that answer under its own material prescription. That doubled answer is not the stated single electrostatic sector. Independent quadrature at forty and eighty thousand intervals agrees with the single-sector coefficient and preserves the distinction from a complete retarded calculation.

Two current-paper readings were deepened rather than treating the first-round abstracts as complete methods audits. The cylindrical-capacitor paper's inspected curvature subsection and Fig2 caption predict opposite trends when the layer ordering is reversed. It therefore supplies a specific geometric counterexample to the slogan that greater curvature always enhances a negative-capacitance effect. The opening structural-methods subsection describes how the studied stack is characterized; full electrical extraction and supplementary material were not audited. No fabrication recipe or performance guarantee is imported into this atlas.

The interface benchmark's Results opening and full Conclusions distinguish Friedel oscillations in its Kohn–Sham calculation from their absence in the orbital-free model. Its capacitance differences depend on electronic spillover, functional choice, solution corrections and a laterally uniform1D geometry. A benchmark with a more explicit kinetic treatment is not exact molecular electrochemistry. Moving to curved or laterally heterogeneous surfaces would introduce additional hypotheses rather than inherit the planar validation unchanged.

Finally, historical and theoretical attribution have separate evidential roles. The1991 Nonnenmacher–O’Boyle–Wickramasinghe KPFM record was retrieved as bibliographic metadata and a deposited abstract. It establishes the paper's identity and author-reported imaging concept, not a checked reading of its original force-equation derivation. The appendix derives its harmonic null directly from an explicitly assumed capacitive-force law. Likewise the counterion coupling parameter is reconstructed from the declared Bjerrum and Gouy–Chapman lengths; the selected2026 interface/slab papers are context rather than its original derivation. A failed attempt to resolve a guessed early strong-coupling DOI remains a private failure, never a fabricated source.


## Complete formula and theorem register


### Coulomb force with an oriented separation — `es-f01`

Status: established-model.

$$
\mathbf F_{1\leftarrow2}=\frac{q_1q_2}{4\pi\epsilon_0}\frac{\mathbf r_1-\mathbf r_2}{|\mathbf r_1-\mathbf r_2|^3}
$$

The force on charge1 points from2 to1 for like signs.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `F` | force on charge1 | N | vector |
| `q_1` | first charge | C | scalar |
| `q_2` | second charge | C | scalar |
| `r_1` | first position | m | coordinate |
| `r_2` | second position | m | coordinate |
| `epsilon_0` | vacuum permittivity | F/m | constant |

**Conditions and domain**

- Stationary point charges in vacuum, distinct positions; microscopic linear superposition.

**Derivation or proof guide**

1. Spherical symmetry fixes a radial field.
2. Gauss flux fixes its coefficient; multiply the field of2 by q1.

**Worked example**

Inputs: q1=q2=1nC; separation0.1m

1. Compute k=1/(4πepsilon0).
2. Evaluate k*1e-18/0.01.

Result: Repulsive force8.988e-7; units: N

**Limits and counterchecks**

- Force vanishes when either charge is zero; doubles if one charge doubles.

**Common mistakes**

- The r→0 singularity is not a finite-size charge or contact-force model.

Source records: `es-mit-gauss`, `es-nist-epsilon`.

### Electric field as a linear source map — `es-f02`

Status: established-model.

$$
\mathbf E(\mathbf r)=\frac1{4\pi\epsilon_0}\int\rho(\mathbf r\prime)\frac{\mathbf r-\mathbf r\prime}{|\mathbf r-\mathbf r\prime|^3}\,d^3r\prime
$$

Integrate vector contributions, not field magnitudes.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `E` | electric field | V/m | vector |
| `rho` | volume charge density | C/m^3 | scalar |
| `r` | observation position | m | coordinate |
| `r_prime` | source position | m | coordinate |
| `epsilon_0` | vacuum permittivity | F/m | constant |

**Conditions and domain**

- Localized integrable source in unbounded vacuum; singular sources need distributions or a prescribed principal value.

**Derivation or proof guide**

1. Replace a charge by rho*dV.
2. Add oriented Coulomb contributions and pass to the continuum integral.

**Worked example**

Inputs: Two equal charges at±a; observe the midpoint

1. Pair each vector with its opposite.

Result: E=0 by symmetry despite a nonzero potential.; units: V/m

**Limits and counterchecks**

- Far from a localized distribution, its net charge gives the leading field.

**Common mistakes**

- Zero field at one point does not imply no charge or zero field energy.

Source records: `es-mit-gauss`.

### Gauss law and what flux measures — `es-f03`

Status: established-model.

$$
\oint_{\partial V}\mathbf E\cdot\mathbf n\,dA=Q_{\mathrm{enc}}/\epsilon_0
$$

Flux depends on enclosed total charge; solving for local field additionally needs symmetry.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `E` | electric field | V/m | vector |
| `n` | outward unit normal | dimensionless | vector |
| `dA` | surface area element | m^2 | scalar |
| `Q_enc` | enclosed total charge | C | scalar |
| `epsilon_0` | vacuum permittivity | F/m | constant |

**Conditions and domain**

- Closed oriented surface; microscopic vacuum form includes bound as well as free charge.

**Derivation or proof guide**

1. Integrate the inverse-square field over solid angle.
2. Use superposition or the divergence theorem to obtain divE=rho/epsilon0.

**Worked example**

Inputs: 1nC at centre of sphere radius0.2m

1. Use E constant and radial.
2. Set E*4πr²=Q/epsilon0.

Result: E≈224.7; units: V/m

**Limits and counterchecks**

- A charge outside contributes zero net flux, but generally nonzero local field.

**Common mistakes**

- Replacing E by a uniform magnitude on an arbitrary Gaussian surface is unjustified.

Source records: `es-mit-gauss`.

### Potential, gauge and path independence — `es-f04`

Status: established-model.

$$
\mathbf E=-\nabla\phi,\qquad \phi(B)-\phi(A)=-\int_A^B\mathbf E\cdot d\mathbf l
$$

A potential difference is work per unit positive test charge with the stated minus sign.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `E` | electric field | V/m | vector |
| `phi` | electric potential | V | scalar |
| `A,B` | path endpoints | m | coordinate |
| `dl` | oriented displacement | m | vector |

**Conditions and domain**

- Electrostatic curlE=0 on a simply connected domain, or a globally defined conservative field.

**Derivation or proof guide**

1. Apply Stokes theorem to zero curl.
2. Define phi relative to one reference; adding a constant leaves E unchanged.

**Worked example**

Inputs: Uniform E=100V/m along+x; B lies0.02m aboveA in x

1. Integrate E*dx.

Result: phiB−phiA=−2; units: V

**Limits and counterchecks**

- A closed-loop integral is zero in electrostatics.

**Common mistakes**

- Time-varying magnetic flux can make the electric field nonconservative; a scalar potential alone then fails.

Source records: `es-mit-gauss`.

### Heterogeneous-permittivity Poisson equation — `es-f05`

Status: established-model.

$$
-\nabla\cdot[\boldsymbol\epsilon(\mathbf r)\nabla\phi]=\rho_f
$$

Free charge, constitutive response and boundary data determine the potential together.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `epsilon` | symmetric positive permittivity tensor | F/m | tensor |
| `phi` | potential | V | scalar |
| `rho_f` | free volume charge density | C/m^3 | scalar |
| `r` | position | m | coordinate |

**Conditions and domain**

- Local linear dielectric; tensor bounded and coercive; suitable Dirichlet/Neumann data.

**Derivation or proof guide**

1. Combine D=epsilonE, E=−gradphi and divD=rho_f.
2. Do not move spatially varying epsilon outside the divergence.

**Worked example**

Inputs: 1D slab with constant epsilon and uniform rho; phi(0)=phi(L)=0

1. Integrate phi double derivative=−rho/epsilon.

Result: phi(x)=rho*x*(L−x)/(2epsilon).; units: V

**Limits and counterchecks**

- For constant scalar epsilon this becomes −epsilon*Laplacian(phi)=rho_f.

**Common mistakes**

- Using epsilon*Laplacian(phi) across a jump erases the interface condition.

Source records: `es-tong-matter`, `es-fenics`.

### Laplace uniqueness and the missing constant — `es-f06`

Status: theorem.

$$
\nabla^2\phi=0,\qquad \int_\Omega\epsilon|\nabla(\phi_1-\phi_2)|^2dV=0
$$

Two solutions with identical admissible data differ only by a gauge constant; Dirichlet data fixes it.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `phi_1,phi_2` | candidate potentials | V | scalar |
| `epsilon` | positive scalar permittivity | F/m | coupling |
| `Omega` | solution domain | m^3 | coordinate |
| `dV` | volume element | m^3 | scalar |
| `phi` | electrostatic potential in displayed Laplace equation | V | scalar |

**Conditions and domain**

- Connected bounded Lipschitz domain; real scalar epsilon uniformly positive. The displayed Laplace equation assumes spatially constant epsilon; heterogeneous epsilon uses the divergence-form operator of es-f05.
- Compare potentials with the same sources and admissible boundary traces. A Dirichlet set of positive measure fixes the gauge; all-Neumann data require compatibility and a specified additive constant/mean. Disconnected regions need these conditions componentwise.

**Derivation or proof guide**

1. Subtract the PDEs.
2. Multiply by the difference and integrate by parts; boundary terms vanish.
3. Positive epsilon forces equal gradients.

**Worked example**

Inputs: All-Neumann zero-flux interval

1. Both phi=0 and phi=7V solve the same gradient problem.

Result: Only the additive constant is undetermined.; units: V

**Limits and counterchecks**

- With two fixed endpoint voltages in1D, phi is their linear interpolation.

**Common mistakes**

- All-Neumann solvability also needs total-charge/flux compatibility, not just a numerical gauge.

Source records: `es-fenics`.

### Electrostatic interface conditions — `es-f07`

Status: established-model.

$$
\mathbf n\cdot(\mathbf D_2-\mathbf D_1)=\sigma_f,\qquad\mathbf n\times(\mathbf E_2-\mathbf E_1)=0
$$

The normal points from medium1 to2; a free surface sheet jumps normal D, not generically normal E.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `n` | normal from medium1 to2 | dimensionless | vector |
| `D_1,D_2` | electric displacement | C/m^2 | vector |
| `E_1,E_2` | electric fields | V/m | vector |
| `sigma_f` | free interfacial charge | C/m^2 | scalar |

**Conditions and domain**

- Ideal zero-thickness interface without a prescribed dipole-sheet potential jump; static fields.

**Derivation or proof guide**

1. Shrink a Gaussian pillbox to the interface.
2. Shrink a rectangular Faraday loop to obtain tangential continuity.

**Worked example**

Inputs: No free sheet; epsilon2=2epsilon1; field normal

1. Set epsilon1*E1n=epsilon2*E2n.

Result: E2n=E1n/2.; units: V/m

**Limits and counterchecks**

- Equal permittivities and zero sheet give continuous E.

**Common mistakes**

- A conducting surface may carry induced free charge; setting sigma_f=0 there is usually wrong.

Source records: `es-tong-matter`.

### Localized-source far-field expansion — `es-f08`

Status: approximation.

$$
\phi(\mathbf r)=\frac1{4\pi\epsilon_0}\left(\frac Qr+\frac{\mathbf p\cdot\widehat{\mathbf r}}{r^2}+O(r^{-3})\right),\quad\mathbf p=\int\mathbf r\prime\rho\,dV\prime
$$

Net charge and dipole moment organize the leading spatial decay.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `phi` | potential | V | scalar |
| `Q` | net charge | C | scalar |
| `r` | distance from expansion origin | m | coordinate |
| `p` | dipole moment | C*m | vector |
| `r_hat` | radial unit vector | dimensionless | vector |
| `epsilon_0` | vacuum permittivity | F/m | constant |
| `rho` | source density | C/m^3 | scalar |

**Conditions and domain**

- Source support lies within radius a and r>a; origin matters when Q is nonzero.

**Derivation or proof guide**

1. Expand1/|r−rprime| in rprime/r.
2. Integrate successive angular moments.

**Worked example**

Inputs: Charges±q separated by d; r≫d on the axis

1. Q cancels and p=q*d.

Result: phi≈q*d/(4πepsilon0*r²).; units: V

**Limits and counterchecks**

- For Q=0 the dipole may lead; if p also vanishes, higher moments control.

**Common mistakes**

- A visually symmetric image is not a measured charge distribution or a justified multipole truncation.

Source records: `es-tong-electrostatics`.

### Dipole energy and a nonuniform field force — `es-f09`

Status: established-model.

$$
U=-\mathbf p\cdot\mathbf E,\quad\boldsymbol\tau=\mathbf p\times\mathbf E,\quad\mathbf F=\nabla(\mathbf p\cdot\mathbf E)
$$

Orientation energy and translation force are different consequences of an imposed field.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `U` | interaction energy | J | scalar |
| `p` | fixed permanent dipole | C*m | vector |
| `E` | external field | V/m | vector |
| `tau` | torque | N*m | vector |
| `F` | force | N | vector |

**Conditions and domain**

- Small fixed dipole, field varies slowly across it; no induced-dipole factor or self-field included.

**Derivation or proof guide**

1. Sum forces and work on the two opposite charges.
2. Retain the first order in separation.

**Worked example**

Inputs: p parallel a uniform E

1. The cross product vanishes and the gradient is zero.

Result: U=−pE but F=0 and torque=0.; units: J,N,N*m

**Limits and counterchecks**

- A uniform field can rotate a misaligned dipole without translating it.

**Common mistakes**

- For a linearly induced dipole p=alphaE, its charging energy has a factor1/2.

Source records: `es-tong-electrostatics`.

### Capacitance and the parallel-plate approximation — `es-f10`

Status: established-model.

$$
C=Q/\Delta V\simeq\epsilon A/d
$$

Capacitance is a geometry/material/boundary response, not charge stored without a voltage reference.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `C` | capacitance | F | scalar |
| `Q` | electrode charge | C | scalar |
| `DeltaV` | electrode potential difference | V | scalar |
| `epsilon` | uniform permittivity | F/m | coupling |
| `A` | overlap area | m^2 | scalar |
| `d` | plate gap | m | coordinate |

**Conditions and domain**

- Linear dielectric; d much smaller than lateral electrode size; opposing charges and negligible fringing.

**Derivation or proof guide**

1. Gauss law gives E≈Q/(epsilonA).
2. Integrate DeltaV≈Ed and divide Q by voltage.

**Worked example**

Inputs: Air plates area0.01m², gap1mm

1. Use epsilon≈epsilon0.

Result: C≈88.54; units: pF

**Limits and counterchecks**

- C doubles with area and halves with gap in this limit.

**Common mistakes**

- Small or edge-dominated electrodes require a field solution; measured parasitics add capacitance.

Source records: `es-mit-capacitance`.

### Maxwell capacitance matrix — `es-f11`

Status: established-model.

$$
Q_i=\sum_j C_{ij}V_j,\qquad U=\tfrac12\mathbf V^T\mathbf C\mathbf V
$$

A multi-electrode system needs an explicitly grounded reference or a retained gauge mode.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Q_i` | charge on conductor i | C | scalar |
| `V_j` | potential relative to reference | V | scalar |
| `C_ij` | Maxwell capacitance coefficients | F | tensor |
| `U` | field energy | J | scalar |
| `V` | electrode voltage vector | V | vector |

**Conditions and domain**

- Linear reciprocal electrostatics with fixed conductor geometry; the full isolated matrix is gauge singular.

**Derivation or proof guide**

1. Linearity lets each electrode basis voltage define a response column.
2. Reciprocity gives symmetry; integrate charging work.

**Worked example**

Inputs: Two isolated conductors with mutual capacitance C

1. Use matrix C*[[1,−1],[−1,1]].

Result: Adding the same voltage to both leaves charges unchanged.; units: C,J

**Limits and counterchecks**

- After grounding one electrode the remaining matrix is positive on allowed voltages.

**Common mistakes**

- Circuit mutual capacitances and off-diagonal Maxwell coefficients differ in sign convention.

Source records: `es-mit-capacitance`.

### Stored field energy and nonlinear qualification — `es-f12`

Status: established-model.

$$
U=\tfrac12\int\mathbf E\cdot\mathbf D\,dV;\qquad w(\mathbf D)=\int_0^{\mathbf D}\mathbf E(\mathbf D\prime)\cdot d\mathbf D\prime
$$

The one-half expression requires a linear reversible constitutive relation; nonlinear work needs the constitutive path.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `U` | stored energy | J | scalar |
| `E` | electric field | V/m | vector |
| `D` | displacement | C/m^2 | vector |
| `w` | energy density | J/m^3 | scalar |
| `dV` | volume element | m^3 | scalar |

**Conditions and domain**

- Lossless reversible local medium; fixed mechanical state. First equality applies only to linear D(E).

**Derivation or proof guide**

1. Charge the system quasistatically: incremental work is E·dD.
2. Integrate along the reversible constitutive curve.

**Worked example**

Inputs: 1nF capacitor at3V

1. Use U=C*V²/2.

Result: Stored energy4.5; units: nJ

**Limits and counterchecks**

- At zero field a reference with zero remanent energy can be assigned U=0.

**Common mistakes**

- Ferroelectric hysteresis, losses and electrostriction cannot be hidden inside a constant epsilon.

Source records: `es-mit-capacitance`, `es-tong-matter`.

### Force at fixed voltage versus fixed charge — `es-f13`

Status: established-model.

$$
F_x|_V=\tfrac12V^2\partial_xC,\qquad F_x|_Q=-\partial_x[Q^2/(2C)],\qquad\mathcal G=U-VQ=-\tfrac12CV^2
$$

The voltage source changes the appropriate thermodynamic potential; differentiating field energy at fixed V alone gives the wrong sign.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `F_x` | force along chosen x | N | scalar |
| `V` | fixed voltage | V | state |
| `Q` | fixed charge | C | state |
| `C` | position-dependent capacitance | F | scalar |
| `x` | mechanical coordinate | m | coordinate |
| `G` | voltage-controlled electric thermodynamic potential including source work | J | scalar |
| `U` | stored field energy Q²/(2C)=CV²/2 at the specified state | J | scalar |
| `epsilon` | constant dielectric permittivity in the plate example | F/m | coupling |
| `A` | overlap area in the plate example | m^2 | scalar |

**Conditions and domain**

- Quasistatic linear capacitor; mechanical coordinate and controlled electrical ensemble explicitly fixed.

**Derivation or proof guide**

1. At fixed Q, force is minus the x derivative of U=Q²/(2C).
2. At fixed V, source work is deltaW_source=V*deltaQ. Legendre transform G=U−VQ=−CV²/2; F=−partialG/partialx at fixed V.
3. Differentiate the controlled potential, not field energy with the source omitted.

**Worked example**

Inputs: x is plate separation and C=epsilonA/x

1. Cprime=−epsilonA/x².

Result: Fixed-V force=−epsilonA*V²/(2x²), attractive.; units: N

**Limits and counterchecks**

- At V=0 with no trapped charge, this ideal force vanishes.

**Common mistakes**

- A power supply is an energy port; electrostatic attraction does not create energy.
- Changing the plate gap at fixed V returns or draws charge through the supply; electrical source work and external mechanical work must both appear in the energy balance.

Source records: `es-mit-capacitance`.

### Maxwell stress in a simple dielectric — `es-f14`

Status: established-model.

$$
T_{ij}=\epsilon(E_iE_j-\tfrac12E^2\delta_{ij}),\qquad\mathbf F=\oint\mathbf T\cdot\mathbf n\,dA
$$

Stress converts a solved field to a force under a declared material-mechanics model.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `T_ij` | electromagnetic stress components | Pa | tensor |
| `epsilon` | scalar permittivity | F/m | coupling |
| `E_i` | field components | V/m | vector |
| `delta_ij` | Kronecker tensor | dimensionless | tensor |
| `F` | enclosed force | N | vector |
| `n` | outward normal | dimensionless | vector |
| `dA` | surface element | m^2 | scalar |

**Conditions and domain**

- Static, homogeneous isotropic medium or vacuum integration surface; mechanical/electrostrictive terms must be handled consistently in matter.

**Derivation or proof guide**

1. Balance momentum across a surface.
2. The normal field produces pressure epsilonE²/2 on an ideal conductor.

**Worked example**

Inputs: Vacuum E=1e5V/m normal to a conductor

1. Evaluate epsilon0*E²/2.

Result: Pressure≈0.04427; units: Pa

**Limits and counterchecks**

- For zero field this field-only stress vanishes.

**Common mistakes**

- Applying the vacuum expression inside a deformable nonlinear dielectric can omit material stresses.

Source records: `es-tong-matter`.

### Polarization and electric displacement — `es-f15`

Status: established-model.

$$
\mathbf D=\epsilon_0\mathbf E+\mathbf P,\quad\mathbf P=\epsilon_0\chi_e\mathbf E
$$

D packages free-charge bookkeeping; P records dipole moment per volume.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `D` | electric displacement | C/m^2 | vector |
| `P` | polarization | C/m^2 | vector |
| `E` | electric field | V/m | vector |
| `epsilon_0` | vacuum permittivity | F/m | constant |
| `chi_e` | electric susceptibility | dimensionless | coupling |

**Conditions and domain**

- Second relation assumes local linear isotropic response without remanence; first is the standard macroscopic definition.

**Derivation or proof guide**

1. Coarse-grain microscopic dipoles.
2. Separate imposed/free charge from bound polarization charge.

**Worked example**

Inputs: chi_e=3 under E=100V/m

1. P=3epsilon0E; D=4epsilon0E.

Result: Relative permittivity4 in this model.; units: dimensionless

**Limits and counterchecks**

- Vacuum has P=0 and D=epsilon0E.

**Common mistakes**

- D is not universally the physical microscopic field and need not be continuous normally.

Source records: `es-tong-matter`.

### Bound volume and surface charge — `es-f16`

Status: established-model.

$$
\rho_b=-\nabla\cdot\mathbf P,\qquad\sigma_b=\mathbf P\cdot\mathbf n
$$

A polarized body may have no volume charge and still carry opposite bound surface sheets.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `rho_b` | bound volume charge density | C/m^3 | scalar |
| `P` | polarization | C/m^2 | vector |
| `sigma_b` | bound surface charge density | C/m^2 | scalar |
| `n` | outward normal from polarized body | dimensionless | vector |

**Conditions and domain**

- Macroscopic polarization with resolved boundary; discontinuities can be represented distributionally.

**Derivation or proof guide**

1. Integrate dipole charge over a small volume.
2. Apply the divergence theorem to transfer termination of P to the surface.

**Worked example**

Inputs: Uniform P=P0*z-hat in a slab

1. divP=0 in the interior; top/bottom normals reverse.

Result: Surface sheets+P0 and−P0; no bulk rho_b.; units: C/m^2

**Limits and counterchecks**

- A uniform polarization in an infinite periodic model has no physical outer surface.

**Common mistakes**

- Do not add sigma_b twice when using an epsilon-based interface formulation.

Source records: `es-tong-matter`.

### Anisotropic electrostatic energy — `es-f17`

Status: established-model.

$$
D_i=\epsilon_{ij}E_j,\qquad w=\tfrac12\mathbf E^T\boldsymbol\epsilon\mathbf E
$$

Anisotropy changes direction as well as magnitude; a stable reciprocal dielectric has positive quadratic energy.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `D_i` | displacement component | C/m^2 | vector |
| `epsilon_ij` | permittivity tensor | F/m | tensor |
| `E_j` | electric-field component | V/m | vector |
| `w` | energy density | J/m^3 | scalar |

**Conditions and domain**

- Real symmetric positive-definite tensor in a local quasistatic reciprocal model.

**Derivation or proof guide**

1. Differentiate the quadratic energy with respect to E.
2. Diagonalize the tensor along principal axes.

**Worked example**

Inputs: epsilon=epsilon0*diag(2,4,6), E=(E0,E0,0)

1. Multiply the tensor by E.

Result: D is not parallel to E; w=3epsilon0E0².; units: J/m^3

**Limits and counterchecks**

- Scalar epsilon is the isotropic special case.

**Common mistakes**

- A frequency-dependent negative real permittivity requires dispersive energy; this static positive-energy model is not applicable.

Source records: `es-tong-matter`.

### Clausius–Mossotti local-field model — `es-f18`

Status: approximation.

$$
\frac{\epsilon_r-1}{\epsilon_r+2}=\frac{n\alpha_m}{3\epsilon_0}
$$

A molecular polarizability becomes a bulk response only after a local-field hypothesis.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `epsilon_r` | relative permittivity | dimensionless | scalar |
| `n` | number density | 1/m^3 | scalar |
| `alpha_m` | molecular polarizability p/E | C*m^2/V | coupling |
| `epsilon_0` | vacuum permittivity | F/m | constant |

**Conditions and domain**

- Isotropic weakly interacting polarizable units with Lorentz spherical-cavity local field; no strong correlations or permanent-dipole complications.

**Derivation or proof guide**

1. Use E_local=E+P/(3epsilon0).
2. Substitute P=n*alpha_m*E_local and solve for susceptibility.

**Worked example**

Inputs: n*alpha_m/(3epsilon0)=0.1

1. Solve epsilon_r−1=.1(epsilon_r+2).

Result: epsilon_r=4/3.; units: dimensionless

**Limits and counterchecks**

- At dilute n, chi_e≈nalpha_m/epsilon0.

**Common mistakes**

- The apparent denominator singularity signals model breakdown, not a universal ferroelectric transition prediction.

Source records: `es-tong-matter`.

### Planar dielectric image charge — `es-f19`

Status: established-model.

$$
q\prime=q\frac{\epsilon_1-\epsilon_2}{\epsilon_1+\epsilon_2}
$$

An image is an auxiliary mathematical charge reproducing boundary data on one side.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `q` | real charge in medium1 | C | scalar |
| `q_prime` | auxiliary mirror charge | C | scalar |
| `epsilon_1,epsilon_2` | positive scalar permittivities | F/m | coupling |

**Conditions and domain**

- Infinite planar interface, linear isotropic homogeneous half-spaces, no prescribed free sheet; qprime is used for the medium1 potential.

**Derivation or proof guide**

1. Write real+image Green functions.
2. Match tangential E and normal D at the plane.

**Worked example**

Inputs: epsilon2=3epsilon1

1. Substitute in the reflection coefficient.

Result: qprime=−q/2.; units: C

**Limits and counterchecks**

- Equal media give no image; conductor limit epsilon2→infinity gives−q.

**Common mistakes**

- The image is not a second physical source; evaluating self-force must exclude the real charge singularity.

Source records: `es-tong-matter`.

### Landau differential stability — `es-f20`

Status: conditional-result.

$$
f(P)=aP^2/2+bP^4/4+cP^6/6-EP,\quad E=aP+bP^3+cP^5
$$

A homogeneous stationary branch is not necessarily a stable state.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | electric free-energy density | J/m^3 | scalar |
| `P` | scalar polarization along chosen axis | C/m^2 | state |
| `a` | quadratic coefficient | m/F | coupling |
| `b` | quartic coefficient | V*m^5/C^3 | coupling |
| `c` | sixth-order coefficient | V*m^9/C^5 | coupling |
| `E` | applied field conjugate to P | V/m | scalar |

**Conditions and domain**

- Phenomenological homogeneous mean-field expansion; stability requires second derivative positive with the controlled ensemble and any circuit/domain terms included.
- The stationary/curvature conditions are local. Global equilibrium requires comparing admissible minima and nonuniform/domain states; if treating the polynomial globally, its highest retained even-power coefficient must make it bounded below.

**Derivation or proof guide**

1. Set derivative of f with respect to P to zero.
2. Differentiate E(P): slope=a+3bP²+5cP⁴.

**Worked example**

Inputs: a>0,b=c=0

1. Solve E=aP and inspect curvature.

Result: P=E/a is a stable linear branch.; units: C/m^2

**Limits and counterchecks**

- If a<0,b>0 at E=0, P=0 is unstable and nonzero minima appear.

**Common mistakes**

- Domain walls, gradients, strain and switching kinetics are omitted; fitted coefficients are not universal constants.

Source records: `es-frontier-ferro`.

### Series stabilization and negative differential capacitance — `es-f21`

Status: conditional-result.

$$
C_{\mathrm{tot}}^{-1}=C_s^{-1}+C_f^{-1}>0
$$

A negative subsystem slope can coexist with a positive total curvature under constrained coupling.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `C_tot` | total differential capacitance | F | scalar |
| `C_s` | positive series capacitance | F | coupling |
| `C_f` | ferroelectric branch differential capacitance | F | coupling |

**Conditions and domain**

- Same incremental charge in a series quasistatic model; total free-energy curvature positive; leakage and domain alternatives must be checked.

**Derivation or proof guide**

1. Sum incremental voltages dV=dQ/Cs+dQ/Cf.
2. Positive dV/dQ is the local total-system stability requirement.

**Worked example**

Inputs: Cs=1nF,Cf=−2nF

1. Add inverse capacitances:1−.5 in1/nF.

Result: Ctot=2nF; if Cf=−.5nF the total curvature is negative.; units: nF

**Limits and counterchecks**

- Cf→infinity leaves Ctot=Cs.

**Common mistakes**

- A transient negative dQ/dV trace alone does not demonstrate stable equilibrium negative capacitance or energy creation.

Source records: `es-frontier-ferro`.

### Boltzmann ion distribution — `es-f22`

Status: established-model.

$$
n_i(\psi)=n_{i,b}\exp[-z_ie\psi/(k_BT)]
$$

Equilibrium ion density follows a balance of ideal mixing entropy and electrostatic energy.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `n_i` | local ion number density | 1/m^3 | scalar |
| `n_ib` | reservoir number density | 1/m^3 | state |
| `z_i` | signed ionic valence | dimensionless | scalar |
| `e` | positive elementary charge | C | constant |
| `psi` | potential relative to reservoir | V | scalar |
| `k_B` | Boltzmann constant | J/K | constant |
| `T` | absolute temperature | K | state |

**Conditions and domain**

- Dilute ideal ions at thermal equilibrium, uniform temperature, reservoir chemical potentials and point-ion mean field.

**Derivation or proof guide**

1. Set mu_i=kBT*ln(n_i)+z_i*e*psi+constant equal to its reservoir value.
2. Exponentiate.

**Worked example**

Inputs: Monovalent cation, psi=kBT/e

1. Exponent is−1.

Result: n_plus=n_b/e≈0.368n_b.; units: 1/m^3

**Limits and counterchecks**

- At psi=0 the reservoir concentration is recovered.

**Common mistakes**

- Divergent accumulation at a highly charged wall is a point-ion model failure.

Source records: `es-frontier-pb`.

### Nonlinear Poisson–Boltzmann equation — `es-f23`

Status: established-model.

$$
-\epsilon\nabla^2\psi=\rho_{\mathrm{fixed}}+\sum_i z_ie n_{i,b}e^{-z_ie\psi/(k_BT)}
$$

The electrostatic field and ion distribution must be solved self-consistently.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `epsilon` | uniform solvent permittivity | F/m | coupling |
| `psi` | reservoir-referenced potential | V | scalar |
| `rho_fixed` | fixed charge density | C/m^3 | scalar |
| `z_i` | signed ion valence | dimensionless | scalar |
| `e` | elementary charge | C | constant |
| `n_ib` | reservoir number density | 1/m^3 | state |
| `k_B` | Boltzmann constant | J/K | constant |
| `T` | temperature | K | state |

**Conditions and domain**

- Mean-field point ions, local continuum dielectric, equilibrium reservoir and specified wall conditions; reservoir electroneutrality is required.

**Derivation or proof guide**

1. Insert ideal Boltzmann densities into Poisson.
2. For symmetric1:1 salt the mobile charge is−2en_b*sinh(epsi/kBT).

**Worked example**

Inputs: Neutral homogeneous reservoir with no fixed charge

1. Choose psi=0 and equal cation/anion densities.

Result: Both sides vanish; psi=0 is a solution.; units: V

**Limits and counterchecks**

- Linearization gives Debye–Hückel only for small dimensionless potential.

**Common mistakes**

- Mean-field PB neglects ion correlations, finite size, hydration and image self-energy unless extended.

Source records: `es-frontier-pb`.

### Debye screening length — `es-f24`

Status: established-model.

$$
\kappa^2=\frac{e^2\sum_i z_i^2 n_{i,b}}{\epsilon k_BT},\qquad\lambda_D=\kappa^{-1}
$$

Screening length depends on ionic strength, dielectric response and temperature, not charge signs alone.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `kappa` | inverse screening length | 1/m | scalar |
| `lambda_D` | Debye length | m | scalar |
| `e` | elementary charge | C | constant |
| `z_i` | ion valence | dimensionless | scalar |
| `n_ib` | number density per species | 1/m^3 | state |
| `epsilon` | solvent permittivity | F/m | coupling |
| `k_B` | Boltzmann constant | J/K | constant |
| `T` | temperature | K | state |

**Conditions and domain**

- Linearized dilute PB in a uniform bulk electrolyte; concentrations converted to number density.

**Derivation or proof guide**

1. Expand exp(−zi*u) to first order.
2. The zeroth-order charge cancels by electroneutrality; remaining coefficient is kappa².

**Worked example**

Inputs: Water298K,epsilon_r≈78.4,1mM1:1 salt

1. Each species density=1mol/m³*NA.
2. Substitute both species.

Result: lambdaD≈9.6; units: nm

**Limits and counterchecks**

- Increasing concentration100-fold reduces lambdaD tenfold in this model.

**Common mistakes**

- Molarity is mol/L; inserting1mM as0.001mol/m³ gives a spurious factor sqrt1000.

Source records: `es-frontier-pb`.

### Screened point-charge Green function — `es-f25`

Status: approximation.

$$
\psi(r)=\frac{q}{4\pi\epsilon r}e^{-\kappa r}
$$

A Yukawa form is a linear-response Green function, not the exact nonlinear field near a highly charged ion.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `psi` | potential | V | scalar |
| `q` | small test charge | C | scalar |
| `epsilon` | solvent permittivity | F/m | coupling |
| `r` | distance from source | m | coordinate |
| `kappa` | inverse Debye length | 1/m | scalar |

**Conditions and domain**

- Unbounded homogeneous linearized electrolyte; small perturbation away from the source core.

**Derivation or proof guide**

1. Solve (−Laplacian+kappa²)psi=qdelta/epsilon.
2. Spherical decay and the Coulomb singular flux fix the coefficient.

**Worked example**

Inputs: Observe at r=lambdaD

1. The screening factor is exp(−1).

Result: Potential is0.368 of the corresponding unscreened value.; units: V

**Limits and counterchecks**

- kappa→0 restores the Coulomb potential.

**Common mistakes**

- A fitted decay length in concentrated solutions need not equal the dilute Debye length.

Source records: `es-frontier-pb`.

### Planar Grahame relation — `es-f26`

Status: established-model.

$$
\sigma=\sqrt{8\epsilon k_BTn_b}\sinh\!\left(\frac{e\psi_0}{2k_BT}\right)
$$

For a planar symmetric monovalent diffuse layer, surface charge and potential are nonlinearly related.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `sigma` | surface charge density | C/m^2 | scalar |
| `epsilon` | uniform solvent permittivity | F/m | coupling |
| `k_B` | Boltzmann constant | J/K | constant |
| `T` | temperature | K | state |
| `n_b` | bulk density of each salt species | 1/m^3 | state |
| `e` | elementary charge | C | constant |
| `psi_0` | surface potential relative to bulk | V | scalar |

**Conditions and domain**

- Single infinite planar surface,1:1 PB electrolyte, no Stern layer or correlations, vanishing bulk potential/field. Positive psi0 corresponds to positive sigma.

**Derivation or proof guide**

1. Multiply the1D PB equation by psi prime.
2. Integrate once using the bulk boundary condition, then use normal Gauss law.

**Worked example**

Inputs: Small psi0

1. sinh(epsi0/2kBT)≈epsi0/2kBT.

Result: sigma≈epsilon*kappa*psi0; diffuse capacitance per area≈epsilon*kappa.; units: C/m^2

**Limits and counterchecks**

- At psi0=0 the charge is zero.

**Common mistakes**

- Curvature, finite ion size and compact-layer voltage invalidate direct use as an electrode-total capacitance.

Source records: `es-frontier-pb`.

### A lattice-gas crowding correction — `es-f27`

Status: approximation.

$$
n_\pm=\frac{n_be^{\mp u}}{1+2vn_b(\cosh u-1)},\qquad u=e\psi/(k_BT)
$$

A finite site volume prevents point-ion density divergence within one explicit modified mean-field model.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `n_plus,n_minus` | local number densities | 1/m^3 | scalar |
| `n_b` | reservoir density per species | 1/m^3 | state |
| `v` | excluded site volume per ion | m^3 | coupling |
| `u` | dimensionless potential | dimensionless | state |
| `e` | elementary charge | C | constant |
| `psi` | potential | V | scalar |
| `k_B` | Boltzmann constant | J/K | constant |
| `T` | temperature | K | state |

**Conditions and domain**

- Equal-size symmetric ions with lattice-gas entropy, bulk volume fraction2vn_b<1; mean field still neglects electrostatic correlations.

**Derivation or proof guide**

1. Include the solvent-vacancy entropy in chemical potentials.
2. Solve their equilibrium ratios under site exclusion.

**Worked example**

Inputs: Large positive u

1. Counterions dominate numerator and denominator.

Result: n_minus approaches1/v instead of diverging.; units: 1/m^3

**Limits and counterchecks**

- v→0 recovers ideal Boltzmann densities.

**Common mistakes**

- A hard density cap is not a quantitative theory of hydration, asymmetric ions or oscillatory packing layers.

Source records: `es-frontier-pb`.

### Bjerrum length and planar coupling parameter — `es-f28`

Status: conditional-result.

$$
\ell_B=\frac{e^2}{4\pi\epsilon k_BT},\qquad\Xi=2\pi z^3\ell_B^2|\sigma|/e,\qquad\mu_{GC}=\frac{e}{2\pi z\ell_B|\sigma|},\quad\Xi=\frac{z^2\ell_B}{\mu_{GC}}
$$

Thermal energy versus Coulomb energy and interfacial charge density determine whether independent-ion intuition is credible.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `ell_B` | Bjerrum length | m | scalar |
| `e` | elementary charge | C | constant |
| `epsilon` | solvent permittivity | F/m | coupling |
| `k_B` | Boltzmann constant | J/K | constant |
| `T` | temperature | K | state |
| `Xi` | planar counterion coupling parameter | dimensionless | scalar |
| `z` | positive counterion valence | dimensionless | scalar |
| `sigma` | surface charge density magnitude | C/m^2 | scalar |
| `mu_GC` | Gouy–Chapman wall length under this valence/surface-charge convention | m | scalar |

**Conditions and domain**

- Xi convention is for a planar counterion-only charged wall; added salt, dielectric images and finite ion sizes require separate parameters.

**Derivation or proof guide**

1. Define ellB by setting the unit-charge Coulomb energy at that length equal to kBT.
2. For a planar wall define muGC=e/(2πz ellB |sigma|); combining z²ellB/muGC gives the displayed Xi.
3. This is a declared standard-model nondimensionalization, independently reconstructed here, not a theorem attributed to the modern interface/slab papers.

**Worked example**

Inputs: Water298K,ellB≈0.71nm; sigma/e=1nm^-2;z=1

1. Compute2π*.71².

Result: Xi≈3.2; z=3 gives≈86 under the same convention.; units: dimensionless

**Limits and counterchecks**

- Increasing valence changes Xi cubically in this wall model.

**Common mistakes**

- A single Xi threshold does not universally certify mean-field validity for every geometry and salt mixture.
- The planar coupling parameter is a declared standard-model definition; the cited current interface/slab papers provide context, not a verified original derivation of this parameter.
- Strong coupling between two mechanical modes in the Casimir paper is a different dimensionless comparison from this counterion Xi; matching terminology is not a shared physical mechanism.

Source records: `es-frontier-pb`, `es-frontier-ewald`.

### Compact and diffuse capacitances in series — `es-f29`

Status: established-model.

$$
c_{\mathrm{dl}}^{-1}=c_S^{-1}+c_D^{-1},\qquad c_S=\epsilon_S/d_S
$$

Voltage partition between compact and diffuse layers must be separated before interpreting a measured differential capacitance.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `c_dl` | total differential capacitance per area | F/m^2 | scalar |
| `c_S` | compact-layer differential capacitance per area | F/m^2 | coupling |
| `c_D` | diffuse-layer differential capacitance per area | F/m^2 | coupling |
| `epsilon_S` | compact effective permittivity | F/m | coupling |
| `d_S` | effective compact thickness | m | coordinate |

**Conditions and domain**

- Uniform planar interface with same incremental charge through both idealized layers; adsorption can introduce additional coupled state variables.

**Derivation or proof guide**

1. Write dV=dVS+dVD.
2. Divide by dSigma and identify the inverse slopes.

**Worked example**

Inputs: cS=.20F/m²,cD=.10F/m²

1. Add inverses5+10.

Result: cdl=.0667; units: F/m^2

**Limits and counterchecks**

- The smaller positive capacitance dominates.

**Common mistakes**

- A fitted Stern thickness is not necessarily a literal ion diameter or a directly measured molecular boundary.

Source records: `es-frontier-pb`.

### Acid-site charge regulation — `es-f30`

Status: conditional-result.

$$
\frac{\theta}{1-\theta}=10^{\mathrm{pH_b}-\mathrm{p}K_a}e^{e\psi_0/(k_BT)},\qquad\sigma=-eN_s\theta
$$

A surface boundary charge may be an equilibrium unknown rather than a fixed number.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `theta` | deprotonated site fraction | dimensionless | state |
| `pH_b` | bulk acidity convention | dimensionless | state |
| `pKa` | site equilibrium constant in pH notation | dimensionless | coupling |
| `e` | elementary charge | C | constant |
| `psi_0` | surface potential relative to bulk | V | scalar |
| `k_B` | Boltzmann constant | J/K | constant |
| `T` | temperature | K | state |
| `sigma` | surface charge density | C/m^2 | scalar |
| `N_s` | site density | 1/m^2 | scalar |

**Conditions and domain**

- Independent identical acid sites AH→A−+H+, ideal local proton activity and electrochemical equilibrium; no lateral cooperativity.

**Derivation or proof guide**

1. Mass action gives theta/(1−theta)=Ka/aH(surface).
2. Positive surface potential reduces local proton concentration by exp(−eψ/kBT).

**Worked example**

Inputs: pH_b=pKa and psi0=0

1. Site ratio is1.

Result: theta=1/2 and sigma=−eNs/2.; units: C/m^2

**Limits and counterchecks**

- Very low bulk pH protonates the sites under these assumptions.

**Common mistakes**

- pH is an activity convention, not simply number density; a sign error reverses the predicted feedback.

Source records: `es-frontier-ewald`.

### Quantum capacitance from compressibility — `es-f31`

Status: established-model.

$$
c_Q=e^2\frac{\partial n}{\partial\mu}=e^2\int g(E)\left[-\partial_E f(E-\mu)\right]dE
$$

Charging a low-density-of-states electron system changes its chemical potential as well as its electrostatic potential.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `c_Q` | quantum capacitance per area | F/m^2 | scalar |
| `e` | elementary charge | C | constant |
| `n` | carrier number per area | 1/m^2 | state |
| `mu` | chemical potential in joules | J | state |
| `g(E)` | density of states per area per joule | 1/(J*m^2) | scalar |
| `E` | electron energy | J | coordinate |
| `f` | Fermi occupation | dimensionless | state |

**Conditions and domain**

- Equilibrium electronic compressibility; integral form assumes an independently specified DOS and no additional self-consistent interaction correction.

**Derivation or proof guide**

1. An electrical voltage increment shifts electron electrochemical energy by e*dV.
2. Differentiate charge density e*n with respect to that increment.

**Worked example**

Inputs: Constant DOS g0

1. Integrating the normalized Fermi derivative gives1.

Result: cQ=e²g0, independent of temperature in a broad constant-DOS band.; units: F/m^2

**Limits and counterchecks**

- At zero temperature cQ probes DOS at the chemical potential.

**Common mistakes**

- A capacitance fitted from a circuit may also include ions, traps, geometry, kinetics and contacts.

Source records: `es-frontier-quantum`.

### Ideal graphene quantum capacitance — `es-f32`

Status: approximation.

$$
c_Q=\frac{2e^2|\mu|}{\pi\hbar^2v_F^2}
$$

The clean zero-temperature Dirac model predicts a chemical-potential-dependent electronic capacitance.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `c_Q` | quantum capacitance per area | F/m^2 | scalar |
| `e` | elementary charge | C | constant |
| `mu` | chemical potential measured from Dirac point | J | state |
| `hbar` | reduced Planck constant | J*s | constant |
| `v_F` | Dirac velocity | m/s | coupling |

**Conditions and domain**

- Ideal monolayer graphene with spin/valley degeneracy4, linear dispersion and T=0; disorder/interactions neglected.

**Derivation or proof guide**

1. Count2D Dirac states to obtain n=sgn(mu)*mu²/(πhbar²vF²).
2. Differentiate n with respect to mu and multiply by e².

**Worked example**

Inputs: mu=.1eV converted to joules;vF=1e6m/s

1. Substitute e,hbar and velocity.

Result: cQ≈0.0235F/m²≈2.35μF/cm².; units: F/m^2

**Limits and counterchecks**

- At ideal T=0 neutrality the formula tends to zero.

**Common mistakes**

- Finite temperature and charge puddles smooth the Dirac-point minimum; a real material need not have zero measured capacitance.

Source records: `es-frontier-quantum`.

### Geometric and electronic voltage partition — `es-f33`

Status: established-model.

$$
c_\mu^{-1}=c_g^{-1}+c_Q^{-1}
$$

Electrochemical charging distributes voltage between the electrostatic gap and electronic compressibility.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `c_mu` | measured electrochemical capacitance per area | F/m^2 | scalar |
| `c_g` | geometric capacitance per area | F/m^2 | coupling |
| `c_Q` | electronic quantum capacitance per area | F/m^2 | coupling |

**Conditions and domain**

- Same incremental areal charge, equilibrium linear response and no unmodeled trap or ionic branch; all areas consistently normalized.

**Derivation or proof guide**

1. Total electrochemical voltage is geometric voltage plus chemical-potential change/e.
2. Differentiate with respect to charge per area.

**Worked example**

Inputs: cg=.02F/m²,cQ=.02F/m²

1. Inverse slopes add.

Result: cmu=.01; units: F/m^2

**Limits and counterchecks**

- cQ≫cg recovers the geometric limit.

**Common mistakes**

- Negative compressibility can enhance capacitance, but stable total curvature and correct ensemble must still be verified.

Source records: `es-frontier-quantum`.

### Kelvin-probe first-harmonic null — `es-f34`

Status: established-model.

$$
F_\omega=C\prime(z)(V_{\mathrm{dc}}-V_{\mathrm{CPD}})V_{\mathrm{ac}}\cos\omega t
$$

A force harmonic null estimates a capacitance-weighted contact potential under an instrument model.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `F_omega` | first-harmonic force | N | scalar |
| `Cprime(z)` | capacitance gradient with separation z | F/m | scalar |
| `z` | tip separation coordinate | m | coordinate |
| `V_dc` | applied bias | V | state |
| `V_CPD` | contact-potential difference with declared polarity | V | scalar |
| `V_ac` | peak AC bias | V | state |
| `omega` | angular modulation frequency | rad/s | scalar |
| `t` | time | s | coordinate |

**Conditions and domain**

- Expand Fz=.5Cprime(z)[Vdc−VCPD+Vac*cos(omega*t)]²; quasistatic capacitive force, fixed tip geometry and uniform effective sample potential.
- Coordinate z increases tip–sample separation. With Fz=+Cprime(z)Vgap²/2, Cprime is normally negative for attraction; an opposite coordinate flips force signs but not the null.

**Derivation or proof guide**

1. The cross term in squared voltage supplies the omega harmonic.
2. Its null gives Vdc=VCPD when additional charge forces are absent.

**Worked example**

Inputs: Vdc=VCPD with finiteVac

1. Cross term vanishes.

Result: First harmonic is zero even though DC and2omega forces may remain.; units: N

**Limits and counterchecks**

- If Vac=0 there is no lock-in harmonic with which to locate the null.

**Common mistakes**

- Tip convolution, trapped charge, surface dipoles and feedback dynamics prevent an automatic absolute work-function interpretation.
- This first-harmonic identity is derived here from the capacitive-force model; a complete contemporary KPFM instrument review was not performed.
- The1991 paper was inspected only through metadata/deposited abstract; do not label this force identity as a checked transcription of that original article.

Source records: `es-mit-capacitance`, `es-gum`, `es-kpfm-original`.

### Thermal charge fluctuations at fixed voltage — `es-f35`

Status: conditional-result.

$$
\langle(\delta Q)^2\rangle=k_BT C_{\mathrm{diff}}
$$

Response and equilibrium noise are linked only within a specified stable ensemble.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `deltaQ` | charge fluctuation about its mean | C | state |
| `k_B` | Boltzmann constant | J/K | constant |
| `T` | temperature | K | state |
| `C_diff` | positive differential capacitance at fixed control conditions | F | scalar |

**Conditions and domain**

- Classical equilibrium, voltage-controlled conjugate ensemble, local convex free energy; low-frequency thermodynamic fluctuations not a full detector noise spectrum.

**Derivation or proof guide**

1. Differentiate the voltage-ensemble partition function.
2. The response derivative equals beta times charge variance.

**Worked example**

Inputs: Cdiff=1pF,T=300K

1. Variance=kBT*C.
2. Take its square root.

Result: Charge standard deviation≈6.44e-17C≈402 elementary charges.; units: C

**Limits and counterchecks**

- At strictly fixed total Q that constrained charge has zero ensemble variance.

**Common mistakes**

- A negative variance cannot be inferred by substituting an unstable isolated negative capacitance branch.

Source records: `es-frontier-casimir`.

### Electrostatic zero-frequency interaction sector — `es-f36`

Status: conditional-result.

$$
\frac{\mathcal F_0}{A}=\frac{k_BT}{4\pi}\int_0^\infty k\,dk\,\ln(1-r_1r_2e^{-2ka})
$$

This is one classical electrostatic sector of planar fluctuation theory, not the whole retarded quantum Casimir force.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `F_0` | zero-frequency electrostatic free energy | J | scalar |
| `A` | plate area | m^2 | scalar |
| `k_B` | Boltzmann constant | J/K | constant |
| `T` | temperature | K | state |
| `k` | transverse wave-number magnitude | 1/m | coordinate |
| `r_1,r_2` | static electric reflection coefficients | dimensionless | coupling |
| `a` | surface separation | m | coordinate |
| `u` | dimensionless substitution2ka used in the derivation | dimensionless | coordinate |
| `zeta(3)` | Riemann zeta value sum of reciprocal positive cubes | dimensionless | constant |

**Conditions and domain**

- Planar local media with static electric response, equilibrium and specified intervening medium; screening and boundary prescriptions can change the zero mode.

**Derivation or proof guide**

1. At zero Matsubara frequency, retain only the static electric/TM sector of the declared planar model. The half-weight zero term times the2D mode measure gives kBT/(4π) times integral k*dk.
2. Set u=2ka, so k*dk=u*du/(4a²). Expand log(1−exp(−u))=−sum exp(−n*u)/n.
3. Termwise integration gives integral u*log(1−exp(−u))du=−sum1/n³=−zeta(3); hence one ideal electric sector yields−zeta(3)kBT/(16πa²).

**Worked example**

Inputs: Ideal static electric reflectors r1*r2=1

1. Expand log(1−x) and integrate each exponential term.

Result: F0/A=−zeta(3)*kBT/(16πa²).; units: J/m^2

**Limits and counterchecks**

- If one electric reflection coefficient is zero this sector vanishes.

**Common mistakes**

- Adding this term to a full Lifshitz calculation that already includes n=0 double counts it; quantum/retarded sectors are not derived here.
- Adding an ideal TE zero mode doubles this term; that is a different magnetic/material boundary prescription, not the single electrostatic sector stated here.

Source records: `es-frontier-casimir`.

### Weak Poisson form with explicit flux sign — `es-f37`

Status: theorem.

$$
\int_\Omega\epsilon\nabla\phi\cdot\nabla v\,dV=\int_\Omega\rho_fv\,dV+\int_{\Gamma_N}gv\,dA,\quad g=\epsilon\partial_n\phi
$$

The Neumann variable g is minus the outward displacement flux because E=−gradphi.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `epsilon` | positive scalar or tensor permittivity | F/m | coupling |
| `phi` | potential | V | scalar |
| `v` | test function | dimensionless | state |
| `rho_f` | free charge density | C/m^3 | scalar |
| `g` | epsilon times outward potential derivative | C/m^2 | scalar |
| `Omega` | domain | m^3 | coordinate |
| `Gamma_N` | Neumann boundary | m^2 | coordinate |
| `Gamma_D` | Dirichlet portion where test functions vanish | m^2 | coordinate |

**Conditions and domain**

- Trial potential has specified Dirichlet trace; test functions vanish there; coercivity and integrable sources required.
- For the pure-Neumann problem on each connected component, integral rho_f dV + integral g dA=0. Fix the mean or a reference; incompatible data must be rejected rather than hidden by pinning one mesh node.

**Derivation or proof guide**

1. Multiply −div(epsilon*gradphi)=rho by v.
2. Integrate by parts and move the boundary derivative to the right.

**Worked example**

Inputs: Pure Neumann domain with v=1

1. Gradient term vanishes.

Result: Compatibility:integral(rho)dV+integral(g)dA=0.; units: C

**Limits and counterchecks**

- For homogeneous Dirichlet data the boundary integral disappears.

**Common mistakes**

- Assigning g=D·n reverses the physical sign unless the weak-form convention is changed.

Source records: `es-fenics`.

### Variational Poisson functional — `es-f38`

Status: theorem.

$$
J[\phi]=\tfrac12\int\epsilon|\nabla\phi|^2dV-\int\rho_f\phi\,dV-\int_{\Gamma_N}g\phi\,dA
$$

Stationarity yields the weak PDE under fixed admissible boundary traces.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `J` | Poisson variational functional | J | scalar |
| `phi` | trial potential | V | state |
| `epsilon` | positive permittivity | F/m | coupling |
| `rho_f` | given free charge density | C/m^3 | scalar |
| `g` | specified epsilon*normal potential derivative | C/m^2 | scalar |
| `dV` | volume element | m^3 | scalar |
| `dA` | boundary area element | m^2 | scalar |

**Conditions and domain**

- Linear coercive dielectric and fixed sources/boundary controls; gauge fixed for all-Neumann cases.

**Derivation or proof guide**

1. Vary phi by a test function.
2. Set first variation to zero; positivity gives the minimizing solution.

**Worked example**

Inputs: Finite-element approximation phi=sum(u_i*N_i)

1. Differentiate J with respect to each coefficient.

Result: The symmetric stiffness system K*u=f is obtained.; units: V

**Limits and counterchecks**

- Mesh refinement of a conforming space reduces the functional toward its exact minimum.

**Common mistakes**

- This source-loaded PDE functional is not automatically the complete thermodynamic energy of a voltage-controlled mechanical apparatus.

Source records: `es-fenics`.

### Green boundary representation — `es-f39`

Status: conditional-result.

$$
\phi(x)=\int_\Omega G\rho/\epsilon\,dV+\oint_{\partial\Omega}[G\partial_n\phi-\phi\partial_nG]dA,\quad G=1/(4\pi|x-y|)
$$

Boundary data can replace a volume discretization in homogeneous regions.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `phi` | potential | V | scalar |
| `G` | free-space negative-Laplacian Green kernel | 1/m | operator |
| `rho` | volume charge | C/m^3 | scalar |
| `epsilon` | uniform permittivity | F/m | coupling |
| `x,y` | observation and source points | m | coordinate |
| `n` | outward source-boundary normal | dimensionless | vector |
| `dV` | volume element | m^3 | scalar |
| `dA` | surface element | m^2 | scalar |

**Conditions and domain**

- x strictly inside a smooth bounded homogeneous region; boundary limits require jump terms; kernel solves−LaplacianG=delta.

**Derivation or proof guide**

1. Apply Green second identity to phi and G.
2. Use Poisson and the delta property of G with consistent signs.

**Worked example**

Inputs: Harmonic constant potential V0 inside a sphere

1. Volume term vanishes; the double-layer integral reproduces the constant.

Result: Interior phi=V0; evaluating directly on the boundary requires its jump convention.; units: V

**Limits and counterchecks**

- For a source-free region only boundary terms remain.

**Common mistakes**

- Dropping the boundary jump coefficient or using a homogeneous kernel across heterogeneous bulk epsilon gives a wrong integral equation.

Source records: `es-tong-electrostatics`.

### Ewald screening split — `es-f40`

Status: established-model.

$$
\frac1r=\frac{\operatorname{erfc}(\eta r)}r+\frac{\operatorname{erf}(\eta r)}r
$$

An exact algebraic split organizes a long-range periodic sum; it is not by itself the complete periodic energy.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `r` | pair separation | m | coordinate |
| `eta` | arbitrary inverse splitting length | 1/m | coupling |
| `erf,erfc` | error and complementary error functions | dimensionless | operator |

**Conditions and domain**

- Identity holds for r>0; full Ewald algorithms additionally require reciprocal terms, self correction, net-charge treatment and a zero-mode/boundary convention.

**Derivation or proof guide**

1. Insert erf+erfc=1.
2. Choose eta so both real and reciprocal representations converge efficiently.

**Worked example**

Inputs: eta*r=1

1. erf(1)≈.842701;erfc(1)≈.157299.

Result: The two terms add to1/r.; units: 1/m

**Limits and counterchecks**

- Exact total results must be independent of eta after convergence.

**Common mistakes**

- Slab and3D periodic boundaries are different problems; omitting the self term or neutralizing-background convention changes the result.

Source records: `es-frontier-ewald`.

### Tikhonov inverse and a kernel witness — `es-f41`

Status: conditional-result.

$$
(A^TWA+\lambda L^TL)x_\lambda=A^TWb
$$

A regularizer selects a stable estimate under a declared prior; it does not manufacture missing information.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `A` | nondimensional observation matrix | dimensionless | operator |
| `W` | noise weight matrix after whitening | dimensionless | tensor |
| `L` | regularization operator | dimensionless | operator |
| `lambda` | regularization strength in declared scaled coordinates | dimensionless | coupling |
| `x_lambda` | scaled unknown estimate | dimensionless | state |
| `b` | scaled data | dimensionless | vector |

**Conditions and domain**

- Finite linearized inverse model with consistent nondimensionalization; W positive; combined operator invertible on constrained unknowns.

**Derivation or proof guide**

1. Minimize weighted data residual squared plus lambda times penalty squared.
2. Set its derivative to zero to obtain normal equations.

**Worked example**

Inputs: A=[1,1],b=1,L=identity

1. A*(1,−1)=0 proves a one-dimensional kernel.
2. Minimum-norm solution chooses equal entries.

Result: x=(1/2,1/2) is a prior-selected representative, not unique recovery from data.; units: dimensionless

**Limits and counterchecks**

- As lambda→0 a unique well-conditioned full-rank inverse is recovered when it exists.

**Common mistakes**

- A small residual, positive returned singular values of a rectangular matrix, or a plausible image does not remove an unobserved kernel.

Source records: `es-fenics`.

### Covariance-aware uncertainty propagation — `es-f42`

Status: approximation.

$$
u_c^2(y)=J\Sigma J^T,\qquad J_i=\partial g/\partial x_i
$$

A derived result inherits covariance as well as individual input uncertainties.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `y` | scalar measurand g(x) | declared output SI unit | scalar |
| `x_i` | input quantities with separately stated units | declared input SI units | state |
| `J` | local sensitivity row | output-unit/input-unit | operator |
| `Sigma` | input covariance matrix | input-unit products | tensor |
| `u_c` | combined standard uncertainty | output SI unit | scalar |

**Conditions and domain**

- Differentiable local measurement model and small enough uncertainties for first-order propagation; coverage probabilities require additional distributional/effective-DOF assumptions.

**Derivation or proof guide**

1. Linearize delta y≈sum(Ji*delta xi).
2. Take its variance, retaining cross terms.

**Worked example**

Inputs: C=Q/V;Q,V have equal1% relative standard uncertainty

1. For independent errors, add squared sensitivities.
2. For perfectly common fractional calibration error the correlated terms cancel.

Result: Independent relative uC≈1.414%; common multiplicative error can cancel exactly in the ratio.; units: F or relative dimensionless

**Limits and counterchecks**

- A zero sensitivity suppresses the corresponding first-order contribution, not necessarily higher-order error.

**Common mistakes**

- Multiplying by k=2 is not automatically a valid95% interval, and a nonsignificant difference is not equivalence.

Source records: `es-gum`.


## Research paper evidence cards


### es-paper-ferro

**sourceId**: es-frontier-ferro

**status**: selected-sections-reviewed; not independently replicated

**question**: Cylindrical ferroelectric/dielectric stacks exhibit geometry-,domain- and charge-compensation-dependent capacitance states in the authors’ experiments and phase-field model.

**method**: Cylindrical FE/DE stacks with analytical stray-field and phase-field modeling; geometry/material characterization inspected, not full electrical methods or supplements.

**result**: Within the inspected curvature subsection, smaller cylinder radius enhances the modeled NC response for one layer ordering; the inverted FE/DE ordering reverses the curvature trend.

**whatIsNew**: The authors extend the particular geometry, interface model or comparison described above; this corpus does not certify first-ever novelty.

**limitations**: Specific HfZrO/Al2O3 stacks; this is not a universal homogeneous Landau branch or proof that all negative slopes are stable equilibrium. Twofold enhancement discussed for a specified model comparison is not a universal measured gain or a negative total-system energy.

**replication**: No author dataset or full solver was rerun. This chapter supplies independent elementary-model examples only.

**nextQuestions**: Which observable and boundary conditions discriminate this model from its stated alternatives?
Does the claimed behavior survive independently calibrated material parameters and a different numerical implementation?


### es-paper-pb

**sourceId**: es-frontier-pb

**status**: selected-sections-reviewed; not independently replicated

**question**: A constant-potential Kohn–Sham–Poisson–Boltzmann benchmark compares orbital-free kinetic-energy functionals and double-layer capacitance, finding model-dependent interface accuracy.

**method**: Self-consistent constant-potential Kohn–Sham–Poisson–Boltzmann calculations benchmark TFvW and Pauli–Gaussian orbital-free functionals in1D planar geometry.

**result**: The inspected Results/Conclusions show Friedel oscillations in KS densities absent from current DPFT, interface capacitance overestimation associated with spillover, and functional/solution-model-dependent calibration.

**whatIsNew**: The authors extend the particular geometry, interface model or comparison described above; this corpus does not certify first-ever novelty.

**limitations**: A particular electronic/solution model; finite-ion extensions and exchange-correlation choices do not exhaust molecular interface effects. TFvW improvement over Pauli–Gaussian for this interface differs from bulk performance; it is not a universal ranking of functionals or materials.

**replication**: No author dataset or full solver was rerun. This chapter supplies independent elementary-model examples only.

**nextQuestions**: Which observable and boundary conditions discriminate this model from its stated alternatives?
Does the claimed behavior survive independently calibrated material parameters and a different numerical implementation?


### es-paper-quantum

**sourceId**: es-frontier-quantum

**status**: selected-sections-reviewed; not independently replicated

**question**: First-principles calculations compare doping patterns and predicted graphene DOS/quantum capacitance.

**method**: Authors’ first-principles numerical comparison.

**result**: First-principles calculations compare doping patterns and predicted graphene DOS/quantum capacitance.

**whatIsNew**: The authors extend the particular geometry, interface model or comparison described above; this corpus does not certify first-ever novelty.

**limitations**: Computed selected structures, not measured total-device capacitance, stock electrodes or experimentally validated energy density.

**replication**: No author dataset or full solver was rerun. This chapter supplies independent elementary-model examples only.

**nextQuestions**: Which observable and boundary conditions discriminate this model from its stated alternatives?
Does the claimed behavior survive independently calibrated material parameters and a different numerical implementation?


### es-paper-casimir

**sourceId**: es-frontier-casimir

**status**: selected-sections-reviewed; not independently replicated

**question**: A theoretical graphene/gold-membrane model treats Casimir coupling as a passive transfer mechanism; all amplification energy comes from an external coherent mechanical drive.

**method**: Authors’ experimental/model or theoretical comparison as specified in the source reading note.

**result**: A theoretical graphene/gold-membrane model treats Casimir coupling as a passive transfer mechanism; all amplification energy comes from an external coherent mechanical drive.

**whatIsNew**: The authors extend the particular geometry, interface model or comparison described above; this corpus does not certify first-ever novelty.

**limitations**: Predicted coupled-mode behavior, not an energy source, an experimental replication or purely electrostatic derivation of the full retarded interaction.

**replication**: No author dataset or full solver was rerun. This chapter supplies independent elementary-model examples only.

**nextQuestions**: Which observable and boundary conditions discriminate this model from its stated alternatives?
Does the claimed behavior survive independently calibrated material parameters and a different numerical implementation?


### es-paper-screening

**sourceId**: es-frontier-screening

**status**: selected-sections-reviewed; not independently replicated

**question**: Experiments and phase-field analysis attribute ultrathin BaTiO3 remanence loss to reverse-domain formation and interface-controlled depolarization rather than disappearance of local polar distortion.

**method**: Authors’ experimental/model or theoretical comparison as specified in the source reading note.

**result**: Experiments and phase-field analysis attribute ultrathin BaTiO3 remanence loss to reverse-domain formation and interface-controlled depolarization rather than disappearance of local polar distortion.

**whatIsNew**: The authors extend the particular geometry, interface model or comparison described above; this corpus does not certify first-ever novelty.

**limitations**: Material/heterostructure-specific; does not establish a universal screening length or validate point-ion PB for these solids.

**replication**: No author dataset or full solver was rerun. This chapter supplies independent elementary-model examples only.

**nextQuestions**: Which observable and boundary conditions discriminate this model from its stated alternatives?
Does the claimed behavior survive independently calibrated material parameters and a different numerical implementation?


### es-paper-ewald

**sourceId**: es-frontier-ewald

**status**: selected-sections-reviewed; not independently replicated

**question**: The authors formulate a regularized periodic electrostatic framework for open, non-neutral slab systems and compare against PB and lattice benchmarks.

**method**: Authors’ experimental/model or theoretical comparison as specified in the source reading note.

**result**: The authors formulate a regularized periodic electrostatic framework for open, non-neutral slab systems and compare against PB and lattice benchmarks.

**whatIsNew**: The authors extend the particular geometry, interface model or comparison described above; this corpus does not certify first-ever novelty.

**limitations**: Boundary/reservoir conventions are essential; authors’ claims of uniqueness or broad efficiency are not independently certified here.

**replication**: No author dataset or full solver was rerun. This chapter supplies independent elementary-model examples only.

**nextQuestions**: Which observable and boundary conditions discriminate this model from its stated alternatives?
Does the claimed behavior survive independently calibrated material parameters and a different numerical implementation?


### es-paper-kpfm-origin

**sourceId**: es-kpfm-original

**status**: abstract-and-metadata-only

**question**: How was contact-potential imaging implemented with a scanning-force instrument in the early literature?

**method**: Deposited abstract describes simultaneous topography/contact-potential images on metal surfaces; full methods not read.

**result**: Authors report a basic contact-potential imaging concept and instrument resolution in their particular setup.

**whatIsNew**: Author-reported introduction of the method; this metadata-only inspection does not certify historical priority.

**limitations**: Abstract/metadata only; no full apparatus, calibration, uncertainty or transfer-function audit.

**replication**: Not replicated; no original performance number imported into the worked example.

**nextQuestions**: Read the original methods and modern calibrated transfer-function literature before claiming an instrument-specific CPD or work-function accuracy.


## Nested coverage map

- **Electrostatics** (`es-field`; reviewed): Fields of stationary charges and the response, inference and limits of static electrical models.
  - **Fields and boundary values** (`es-area-foundations`; reviewed): A distinct domain of electrostatic questions, constitutive assumptions and observables.
    - **Charge geometry** (`es-sub-charges`; reviewed): Connects governing equations to the stated geometry, material model and observation.
      - **Point charges and continuum limits** (`es-spec-coulomb`; reviewed): Point charges and continuum limits with explicit hypotheses and a distinction between model consequences and measurements.
        - **Finite-size charge regularization** (`es-line-coulomb`; mapped): Research line: finite-size charge regularization. Mapped scope; only separately cited papers have an actual reading record.
      - **Multipole organization** (`es-spec-multipoles`; reviewed): Multipole organization with explicit hypotheses and a distinction between model consequences and measurements.
        - **Controlled far-field truncation** (`es-line-multipoles`; mapped): Research line: controlled far-field truncation. Mapped scope; only separately cited papers have an actual reading record.
    - **Conductors and boundary data** (`es-sub-boundaries`; reviewed): Connects governing equations to the stated geometry, material model and observation.
      - **Green functions and uniqueness** (`es-spec-green`; reviewed): Green functions and uniqueness with explicit hypotheses and a distinction between model consequences and measurements.
        - **Mixed-boundary existence and gauge fixing** (`es-line-green`; mapped): Research line: mixed-boundary existence and gauge fixing. Mapped scope; only separately cited papers have an actual reading record.
      - **Images and dielectric interfaces** (`es-spec-images`; reviewed): Images and dielectric interfaces with explicit hypotheses and a distinction between model consequences and measurements.
        - **Layered and nonplanar interface response** (`es-line-images`; mapped): Research line: layered and nonplanar interface response. Mapped scope; only separately cited papers have an actual reading record.
  - **Polarization and nonlinear materials** (`es-area-materials`; reviewed): A distinct domain of electrostatic questions, constitutive assumptions and observables.
    - **Constitutive response** (`es-sub-constitutive`; reviewed): Connects governing equations to the stated geometry, material model and observation.
      - **Linear and anisotropic media** (`es-spec-linear`; reviewed): Linear and anisotropic media with explicit hypotheses and a distinction between model consequences and measurements.
        - **Tensor-permittivity homogenization** (`es-line-linear`; mapped): Research line: tensor-permittivity homogenization. Mapped scope; only separately cited papers have an actual reading record.
      - **Local-field response** (`es-spec-localfield`; reviewed): Local-field response with explicit hypotheses and a distinction between model consequences and measurements.
        - **Breakdown of dilute polarizability models** (`es-line-localfield`; mapped): Research line: breakdown of dilute polarizability models. Mapped scope; only separately cited papers have an actual reading record.
    - **Ferroelectric free-energy landscapes** (`es-sub-ferro`; reviewed): Connects governing equations to the stated geometry, material model and observation.
      - **Landau stability and domains** (`es-spec-landau`; reviewed): Landau stability and domains with explicit hypotheses and a distinction between model consequences and measurements.
        - **Domain formation versus homogeneous switching** (`es-line-landau`; mapped): Research line: domain formation versus homogeneous switching. Mapped scope; only separately cited papers have an actual reading record.
      - **Negative differential capacitance** (`es-spec-negative`; reviewed): Negative differential capacitance with explicit hypotheses and a distinction between model consequences and measurements.
        - **Distinguishing transient and stabilized response** (`es-line-negative`; mapped): Research line: distinguishing transient and stabilized response. Mapped scope; only separately cited papers have an actual reading record.
  - **Electrolytes and correlated charges** (`es-area-screening`; reviewed): A distinct domain of electrostatic questions, constitutive assumptions and observables.
    - **Dilute mean-field screening** (`es-sub-dilute`; reviewed): Connects governing equations to the stated geometry, material model and observation.
      - **Debye screening** (`es-spec-debye`; reviewed): Debye screening with explicit hypotheses and a distinction between model consequences and measurements.
        - **Finite-size and dielectric-decrement corrections** (`es-line-debye`; mapped): Research line: finite-size and dielectric-decrement corrections. Mapped scope; only separately cited papers have an actual reading record.
      - **Nonlinear Poisson–Boltzmann theory** (`es-spec-pb`; reviewed): Nonlinear Poisson–Boltzmann theory with explicit hypotheses and a distinction between model consequences and measurements.
        - **Charge regulation and curved interfaces** (`es-line-pb`; mapped): Research line: charge regulation and curved interfaces. Mapped scope; only separately cited papers have an actual reading record.
    - **Beyond independent ions** (`es-sub-correlations`; reviewed): Connects governing equations to the stated geometry, material model and observation.
      - **Crowding and finite ion size** (`es-spec-steric`; reviewed): Crowding and finite ion size with explicit hypotheses and a distinction between model consequences and measurements.
        - **Nonlocal packing and overscreening** (`es-line-steric`; mapped): Research line: nonlocal packing and overscreening. Mapped scope; only separately cited papers have an actual reading record.
      - **Strong electrostatic coupling** (`es-spec-strong`; reviewed): Strong electrostatic coupling with explicit hypotheses and a distinction between model consequences and measurements.
        - **Multivalent charge inversion and ion specificity** (`es-line-strong`; mapped): Research line: multivalent charge inversion and ion specificity. Mapped scope; only separately cited papers have an actual reading record.
  - **Interfaces and low-dimensional electrons** (`es-area-interfaces`; reviewed): A distinct domain of electrostatic questions, constitutive assumptions and observables.
    - **Electronic compressibility** (`es-sub-quantum`; reviewed): Connects governing equations to the stated geometry, material model and observation.
      - **Quantum capacitance and density of states** (`es-spec-dos`; reviewed): Quantum capacitance and density of states with explicit hypotheses and a distinction between model consequences and measurements.
        - **Disorder and interaction corrections in 2D systems** (`es-line-dos`; mapped): Research line: disorder and interaction corrections in 2d systems. Mapped scope; only separately cited papers have an actual reading record.
      - **Electrochemical capacitance** (`es-spec-series`; reviewed): Electrochemical capacitance with explicit hypotheses and a distinction between model consequences and measurements.
        - **Separating geometric and compressibility contributions** (`es-line-series`; mapped): Research line: separating geometric and compressibility contributions. Mapped scope; only separately cited papers have an actual reading record.
    - **Electrode and surface chemistry** (`es-sub-chemical`; reviewed): Connects governing equations to the stated geometry, material model and observation.
      - **Stern layers and adsorption** (`es-spec-stern`; reviewed): Stern layers and adsorption with explicit hypotheses and a distinction between model consequences and measurements.
        - **Ion-specific interfacial thermodynamics** (`es-line-stern`; mapped): Research line: ion-specific interfacial thermodynamics. Mapped scope; only separately cited papers have an actual reading record.
      - **Charge-regulating surfaces** (`es-spec-regulation`; reviewed): Charge-regulating surfaces with explicit hypotheses and a distinction between model consequences and measurements.
        - **Coupled protonation and electrostatic boundary data** (`es-line-regulation`; mapped): Research line: coupled protonation and electrostatic boundary data. Mapped scope; only separately cited papers have an actual reading record.
  - **Thermal and quantum fluctuation boundaries** (`es-area-fluctuations`; reviewed): A distinct domain of electrostatic questions, constitutive assumptions and observables.
    - **Classical charge fluctuations** (`es-sub-classical`; reviewed): Connects governing equations to the stated geometry, material model and observation.
      - **Voltage and charge ensembles** (`es-spec-ensemble`; reviewed): Voltage and charge ensembles with explicit hypotheses and a distinction between model consequences and measurements.
        - **Noise covariance in finite electrodes** (`es-line-ensemble`; mapped): Research line: noise covariance in finite electrodes. Mapped scope; only separately cited papers have an actual reading record.
      - **Electrostatic Matsubara sector** (`es-spec-zeromode`; reviewed): Electrostatic Matsubara sector with explicit hypotheses and a distinction between model consequences and measurements.
        - **Screening and boundary conditions at zero frequency** (`es-line-zeromode`; mapped): Research line: screening and boundary conditions at zero frequency. Mapped scope; only separately cited papers have an actual reading record.
    - **Dispersion and patch-force comparisons** (`es-sub-dispersion`; reviewed): Connects governing equations to the stated geometry, material model and observation.
      - **Retarded material-dependent forces** (`es-spec-lifshitz`; mapped): Retarded material-dependent forces with explicit hypotheses and a distinction between model consequences and measurements.
        - **Finite-temperature material-response controversies** (`es-line-lifshitz`; mapped): Research line: finite-temperature material-response controversies. Mapped scope; only separately cited papers have an actual reading record.
      - **Patch potentials and force backgrounds** (`es-spec-patches`; mapped): Patch potentials and force backgrounds with explicit hypotheses and a distinction between model consequences and measurements.
        - **Separating electrostatic patches from Casimir signals** (`es-line-patches`; mapped): Research line: separating electrostatic patches from casimir signals. Mapped scope; only separately cited papers have an actual reading record.
  - **Computational electrostatics** (`es-area-computation`; reviewed): A distinct domain of electrostatic questions, constitutive assumptions and observables.
    - **Boundary-value discretization** (`es-sub-pde`; reviewed): Connects governing equations to the stated geometry, material model and observation.
      - **Finite-element weak forms** (`es-spec-fem`; reviewed): Finite-element weak forms with explicit hypotheses and a distinction between model consequences and measurements.
        - **Interface-aware adaptive refinement** (`es-line-fem`; mapped): Research line: interface-aware adaptive refinement. Mapped scope; only separately cited papers have an actual reading record.
      - **Boundary elements and singular kernels** (`es-spec-bem`; reviewed): Boundary elements and singular kernels with explicit hypotheses and a distinction between model consequences and measurements.
        - **Accurate near-surface potential reconstruction** (`es-line-bem`; mapped): Research line: accurate near-surface potential reconstruction. Mapped scope; only separately cited papers have an actual reading record.
    - **Long-range particle methods** (`es-sub-longrange`; reviewed): Connects governing equations to the stated geometry, material model and observation.
      - **Ewald and reciprocal methods** (`es-spec-ewald`; reviewed): Ewald and reciprocal methods with explicit hypotheses and a distinction between model consequences and measurements.
        - **Slab corrections and zero-mode conventions** (`es-line-ewald`; mapped): Research line: slab corrections and zero-mode conventions. Mapped scope; only separately cited papers have an actual reading record.
      - **Fast multipoles and hierarchical solvers** (`es-spec-fast`; mapped): Fast multipoles and hierarchical solvers with explicit hypotheses and a distinction between model consequences and measurements.
        - **Certified accuracy for heterogeneous geometries** (`es-line-fast`; mapped): Research line: certified accuracy for heterogeneous geometries. Mapped scope; only separately cited papers have an actual reading record.
  - **Inverse problems and metrology** (`es-area-inference`; reviewed): A distinct domain of electrostatic questions, constitutive assumptions and observables.
    - **Recovering causes from field data** (`es-sub-inverse`; reviewed): Connects governing equations to the stated geometry, material model and observation.
      - **Charge-source nonuniqueness** (`es-spec-nullspace`; mapped): Charge-source nonuniqueness with explicit hypotheses and a distinction between model consequences and measurements.
        - **Observable nullspaces and experimental design** (`es-line-nullspace`; mapped): Research line: observable nullspaces and experimental design. Mapped scope; only separately cited papers have an actual reading record.
      - **Regularized reconstruction** (`es-spec-regularization`; reviewed): Regularized reconstruction with explicit hypotheses and a distinction between model consequences and measurements.
        - **Prior sensitivity and calibrated uncertainty** (`es-line-regularization`; mapped): Research line: prior sensitivity and calibrated uncertainty. Mapped scope; only separately cited papers have an actual reading record.
    - **Operational capacitance and potential** (`es-sub-measurement`; reviewed): Connects governing equations to the stated geometry, material model and observation.
      - **Capacitance bridges and guarding** (`es-spec-bridge`; reviewed): Capacitance bridges and guarding with explicit hypotheses and a distinction between model consequences and measurements.
        - **Fringing, leakage and traceable uncertainty** (`es-line-bridge`; mapped): Research line: fringing, leakage and traceable uncertainty. Mapped scope; only separately cited papers have an actual reading record.
      - **Kelvin probe force microscopy** (`es-spec-kpfm`; reviewed): Kelvin probe force microscopy with explicit hypotheses and a distinction between model consequences and measurements.
        - **Tip convolution and work-function interpretation** (`es-line-kpfm`; mapped): Research line: tip convolution and work-function interpretation. Mapped scope; only separately cited papers have an actual reading record.

## Glossary

**SI** — International System of Units; all numerical examples convert lengths, charge and energy consistently.

**PB** — Poisson–Boltzmann, an equilibrium mean-field equation for ideal mobile ions.

**DOS** — Density of electronic states per specified energy and area; units must distinguish joules from electronvolts.

**DFT** — Density-functional theory; here electronic or classical fluid free-energy modeling, not a guarantee of exact material behavior.

**KPFM** — Kelvin probe force microscopy; contact-potential inference through a calibrated force/electrostatic transfer model.

**FEM** — Finite-element method; a weak-form discretization with explicit boundary data.

**BEM** — Boundary-element method; integral equations on interfaces with singular-kernel/jump conventions.

**Ewald** — An exact long-range splitting plus boundary-dependent periodic summation machinery.

**CPD** — Contact-potential difference; polarity depends on tip/sample voltage convention.

**Matsubara** — Discrete imaginary-frequency representation of thermal field fluctuations; zero frequency is one sector.

**Free charge** — Charge treated as an independently specified mobile or electrode source in the macroscopic constitutive model.

**Bound charge** — Macroscopic charge associated with the divergence and termination of polarization.

**Negative capacitance** — A negative differential voltage/charge slope whose ensemble, dynamics and whole-system stability must be declared.

**Quantum capacitance** — The electronic compressibility contribution to charging, distinct from geometry and ion adsorption.

**Gauge** — An unobservable additive potential constant in electrostatics unless a reference is fixed.

**Equivalence** — A conclusion requiring a prespecified meaningful margin and statistical/uncertainty procedure, not merely failure to detect a difference.

## Open questions and missing evidence

### Can partial boundary data distinguish bulk charge, surface patches and dielectric heterogeneity?

Status: open research or inference question within stated models. Independent observables, controlled boundary/material changes, uncertainty and alternative-model comparison; a graph link or fit alone is insufficient.

### Which measurements distinguish equilibrium stabilized negative response from switching, traps, leakage and multidomain redistribution?

Status: open research or inference question within stated models. Independent observables, controlled boundary/material changes, uncertainty and alternative-model comparison; a graph link or fit alone is insufficient.

### Which combination of correlation, finite-size, solvent and boundary models explains a measured departure from dilute screening?

Status: open research or inference question within stated models. Independent observables, controlled boundary/material changes, uncertainty and alternative-model comparison; a graph link or fit alone is insufficient.

### Can an experiment separately identify electronic compressibility, traps, compact-layer response and contact effects?

Status: open research or inference question within stated models. Independent observables, controlled boundary/material changes, uncertainty and alternative-model comparison; a graph link or fit alone is insufficient.

### How can static patch-potential and thermal screening uncertainties be separated from the nonzero-frequency force model?

Status: open research or inference question within stated models. Independent observables, controlled boundary/material changes, uncertainty and alternative-model comparison; a graph link or fit alone is insufficient.

### What error budget separates discretization, periodic-boundary convention, parameter uncertainty and physical model error?

Status: open research or inference question within stated models. Independent observables, controlled boundary/material changes, uncertainty and alternative-model comparison; a graph link or fit alone is insufficient.


## Source records and reading depth


### es-tong-electrostatics — Electromagnetism: electrostatic fields, potential and boundary problems

David Tong; 2015; Captured2026-11-25; source edition stated in reading record

https://davidtong.org/pdfs/teaching/electromagnetism/electro1.pdf

**Source class**: textbook

**Status / reading depth**: selected-text-read; Selected extracted passages: Gauss/Coulomb, potential/energy, boundary uniqueness and conductors. Not every exercise or chapter read.

**Sections inspected**: Electrostatic potential
Electrostatic energy
Boundary conditions and uniqueness
Conductors

**Supported claim**: A conservative field plus constitutive law and boundary data defines a well-posed electrostatic problem.

**Limitations**: This foundation does not validate new materials, strong-coupling electrolyte models or a real apparatus.

**research-note**: A conservative field plus constitutive law and boundary data defines a well-posed electrostatic problem.

Capture SHA-256: `fee1fe4c5637501030c0e6d2a76ab86d7cd66abf85e327ecc587579cc52799e1`; captured 2026-11-25T06:28:44.059605+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### es-tong-matter — Electromagnetism in Matter

David Tong; 2015; Captured2026-11-25; source edition stated in reading record

https://davidtong.org/pdfs/teaching/electromagnetism/electro6.pdf

**Source class**: textbook

**Status / reading depth**: selected-text-read; Selected extracted passages on polarization, electric displacement, simple local-field response and dielectric boundary matching.

**Sections inspected**: 7.1 Electric fields in matter
Dielectric boundary conditions
Conductors revisited

**Supported claim**: Free/bound charge separation and constitutive assumptions determine how macroscopic fields are interpreted.

**Limitations**: Local linear models and ideal material boundaries are explicit approximations.

**research-note**: Free/bound charge separation and constitutive assumptions determine how macroscopic fields are interpreted.

Capture SHA-256: `bd0202e04d991c3bbba624956e32f39ee9cd707753b0938531064cef62d9ef09`; captured 2026-11-25T06:28:44.876053+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### es-mit-gauss — 8.02 TEAL Course Notes, Chapter4: Gauss’s Law

MIT Physics8.02 instructional team; None; Captured2026-11-25; source edition stated in reading record

https://web.mit.edu/8.02t/www/802TEAL3D/visualizations/coursenotes/modules/guide04.pdf

**Source class**: textbook

**Status / reading depth**: selected-text-read; Selected chapter sections on flux, planar/spherical examples and conductor boundaries.

**Sections inspected**: 4.1 Electric flux
4.2 Gauss law
4.3 Conductors

**Supported claim**: Flux determines enclosed charge; symmetry is an extra premise when obtaining a local field.

**Limitations**: Ideal geometries do not provide calibration of finite electrodes.

**research-note**: Flux determines enclosed charge; symmetry is an extra premise when obtaining a local field.

Capture SHA-256: `46399a38fc3afe0fb21dee2e1708094579b16dfcaa2260bd1e3794083302b0e4`; captured 2026-11-25T06:24:15.854106+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### es-mit-capacitance — 8.02 TEAL Course Notes, Chapter5: Capacitance and Dielectrics

MIT Physics8.02 instructional team; None; Captured2026-11-25; source edition stated in reading record

https://web.mit.edu/8.02t/www/802TEAL3D/visualizations/coursenotes/modules/guide05.pdf

**Source class**: textbook

**Status / reading depth**: selected-text-read; Selected parallel/cylindrical/spherical capacitance, energy and dielectric discussion.

**Sections inspected**: 5.2 Calculation of capacitance
5.4 Energy stored
Dielectrics

**Supported claim**: Capacitance follows from geometry and voltage difference; dielectric response and source work matter.

**Limitations**: The chapter is foundational, not a source for current negative-capacitance device performance.

**research-note**: Capacitance follows from geometry and voltage difference; dielectric response and source work matter.

Capture SHA-256: `90376155722c0c41bb81428de7363bd110802a1e4d08fb169669849a7559d9e1`; captured 2026-11-25T06:24:15.853620+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### es-nist-epsilon — 2022 CODATA recommended vacuum electric permittivity

NIST / CODATA; 2022; Captured2026-11-25; source edition stated in reading record

https://physics.nist.gov/cgi-bin/cuu/Value?ep0

**Source class**: official-data

**Status / reading depth**: selected-text-read; Entire small value/uncertainty record read.

**Sections inspected**: Numerical value
Standard and relative uncertainty
2022 CODATA source

**Supported claim**: epsilon0=8.8541878188(14)e-12F/m in the retrieved recommendation.

**Limitations**: epsilon0 is no longer an exact independently fixed SI constant; rounded examples are illustrative.

**research-note**: epsilon0=8.8541878188(14)e-12F/m in the retrieved recommendation.

Capture SHA-256: `f62a8e03ce393ef6130b6d2b7d3160158d9c1b79cf581ff13dbc92f290949f27`; captured 2026-11-25T06:24:15.854534+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### es-fenics — The FEniCSx tutorial: Fundamentals and the Poisson equation

Jørgen S. Dokken; None; Captured2026-11-25; source edition stated in reading record

https://jsdokken.com/dolfinx-tutorial/stable/chapter1/fundamentals.html

**Source class**: textbook

**Status / reading depth**: selected-text-read; Selected problem formulation, variational form and finite-element boundary implementation.

**Sections inspected**: Poisson problem
Variational formulation
Boundary conditions

**Supported claim**: Weak forms and boundary constraints can be implemented as a symmetric elliptic system under coercive assumptions.

**Limitations**: A converged discretization is not proof that a chosen material or physical boundary model is correct.

**research-note**: Weak forms and boundary constraints can be implemented as a symmetric elliptic system under coercive assumptions.

Capture SHA-256: `c5ab81df7f4630fa3e84c1d1ced153e0ff5e70ba1b990eb56b87109a023a339d`; captured 2026-11-25T06:26:26.141779+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### es-gum — JCGM100:2008 Guide to the expression of uncertainty in measurement

JCGM / BIPM; 2008; Captured2026-11-25; source edition stated in reading record

https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf

**Source class**: official-data

**Status / reading depth**: selected-text-read; Selected covariance and coverage discussion; no claim to have read the entire guide.

**Sections inspected**: 5.2 Correlated input quantities
6 Expanded uncertainty

**Supported claim**: Significant covariance cannot be omitted; coverage factors need assumptions.

**Limitations**: No uncertainty budget for an actual electrostatic measurement was experimentally assessed.

**research-note**: Significant covariance cannot be omitted; coverage factors need assumptions.

Capture SHA-256: `41bbf068fbc0d7986c98691b2d1af6680cb3044f6a1a89b3560933ed9ef9626c`; captured 2026-11-25T06:24:15.856251+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### es-frontier-ferro — The cylindrical devices with tunable positive, infinite, and negative capacitance for dynamic random access memory.

Park HW, Koo WT, Suh DI, Seo J, Sriboriboon P, Kim Y, Byun S, Kim Y, Kim JY, Ryu SW, Jeon H, Im KV, Lee G, Youn T, Lee S, Yi J, Cha SY, Hwang CS.; 2026; 2026-04-14 published article; PMC HTML capture

https://pmc.ncbi.nlm.nih.gov/articles/PMC13254098/

**Source class**: primary-paper

**Status / reading depth**: selected-text-read; Abstract/introduction plus complete inspected curvature-driven Results subsection, Fig2 caption and opening Methods structural-characterization subsection; supplements and complete electrical-extraction methods not read.

**Sections inspected**: Abstract
Introduction
Results:Curvature-driven enhancement of NC in cylindrical FE/DE stack
Fig2 caption
Methods:sample/structural-characterization opening subsection

**Supported claim**: Cylindrical ferroelectric/dielectric stacks exhibit geometry-,domain- and charge-compensation-dependent capacitance states in the authors’ experiments and phase-field model.

**Limitations**: Specific HfZrO/Al2O3 stacks; this is not a universal homogeneous Landau branch or proof that all negative slopes are stable equilibrium. The examined model predicts the opposite curvature trend when the FE/DE ordering is inverted; this geometry-specific counterexample prevents a universal curvature-enhances-NC claim.

**research-note**: Cylindrical ferroelectric/dielectric stacks exhibit geometry-,domain- and charge-compensation-dependent capacitance states in the authors’ experiments and phase-field model.

Capture SHA-256: `a916660c28e64d367f51384f4afbbeea531668f1bf3450775bd7edbd7bb353e9`; captured 2026-11-25T06:34:13.292218+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### es-frontier-pb — Benchmarking Orbital-Free Density-Potential Functional Theory of Electrified Metal-Solution Interfaces.

Li C, Wang X, Eikerling M, Huang J.; 2026; 2026-02-16 published article; PMC HTML capture

https://pmc.ncbi.nlm.nih.gov/articles/PMC12980745/

**Source class**: primary-paper

**Status / reading depth**: selected-text-read; Abstract/introduction, Results and Discussion:A Glance at the KS–PB Model/convergence discussion, and complete Conclusions text read; not every functional derivation or supporting calculation.

**Sections inspected**: Abstract
Introduction
Results:A Glance at the Kohn–Sham–Poisson–Boltzmann Model
Conclusions

**Supported claim**: A constant-potential Kohn–Sham–Poisson–Boltzmann benchmark compares orbital-free kinetic-energy functionals and double-layer capacitance, finding model-dependent interface accuracy.

**Limitations**: A particular electronic/solution model; finite-ion extensions and exchange-correlation choices do not exhaust molecular interface effects. The benchmark is a laterally uniform1D planar metal/solution model with chosen exchange-correlation and solution approximations; Kohn–Sham kinetic treatment does not make it an exact theory of a molecular interface.

**research-note**: A constant-potential Kohn–Sham–Poisson–Boltzmann benchmark compares orbital-free kinetic-energy functionals and double-layer capacitance, finding model-dependent interface accuracy.

Capture SHA-256: `62bc5af49eed66424354b17a7a4afc80d1160859324425592c252e7abc263c41`; captured 2026-11-25T06:34:13.306904+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### es-frontier-quantum — Unveiling the ternary synergistic mechanism of B-N-Al coordinated graphene for enhanced quantum capacitance &lt;i&gt;via&lt;/i&gt; first-principles calculations.

Jiao S, Shen H, Xiong C.; 2026; 2026-07-28 published article; PMC HTML capture

https://pmc.ncbi.nlm.nih.gov/articles/PMC13411162/

**Source class**: primary-paper

**Status / reading depth**: selected-text-read; Abstract and selected opening excerpts from Introduction/Results/Conclusions read; not full-paper verification or reproduction. XML timed out; accessible PMC HTML was read instead.

**Sections inspected**: Abstract
Introduction excerpts
Results/discussion or conclusions excerpts

**Supported claim**: First-principles calculations compare doping patterns and predicted graphene DOS/quantum capacitance.

**Limitations**: Computed selected structures, not measured total-device capacitance, stock electrodes or experimentally validated energy density.

**research-note**: First-principles calculations compare doping patterns and predicted graphene DOS/quantum capacitance.

Capture SHA-256: `7de275f62e1d79a3e7505d1430a6baeeca6a8bd5d8a4e1deb71cf3ba89cdddcc`; captured 2026-11-25T06:34:13.333474+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### es-frontier-casimir — Casimir-mediated amplification of flexural modes in suspended graphene.

Ribeiro S, Terças H.; 2026; 2026-08-18 published article; PMC HTML capture

https://pmc.ncbi.nlm.nih.gov/articles/PMC13484937/

**Source class**: primary-paper

**Status / reading depth**: selected-text-read; Abstract and selected opening excerpts from Introduction/Results/Conclusions read; not full-paper verification or reproduction. XML timed out; accessible PMC HTML was read instead.

**Sections inspected**: Abstract
Introduction excerpts
Results/discussion or conclusions excerpts

**Supported claim**: A theoretical graphene/gold-membrane model treats Casimir coupling as a passive transfer mechanism; all amplification energy comes from an external coherent mechanical drive.

**Limitations**: Predicted coupled-mode behavior, not an energy source, an experimental replication or purely electrostatic derivation of the full retarded interaction.

**research-note**: A theoretical graphene/gold-membrane model treats Casimir coupling as a passive transfer mechanism; all amplification energy comes from an external coherent mechanical drive.

Capture SHA-256: `e745031e8adbb0c3b7e3c0ccf3337bea00d1bfa3a3a8238f4b0368c086b03592`; captured 2026-11-25T06:34:13.301241+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### es-frontier-screening — Unraveling the Effects of Depolarization in Ultrathin Barium Titanate.

Lee T, Kumar P, Klewe C, Kavle P, Shafer P, Yao ZJ, Martin LW.; 2026; 2026-10-31 published article; PMC HTML capture

https://pmc.ncbi.nlm.nih.gov/articles/PMC13723724/

**Source class**: primary-paper

**Status / reading depth**: selected-text-read; Abstract and selected opening excerpts from Introduction/Results/Conclusions read; not full-paper verification or reproduction. XML timed out; accessible PMC HTML was read instead.

**Sections inspected**: Abstract
Introduction excerpts
Results/discussion or conclusions excerpts

**Supported claim**: Experiments and phase-field analysis attribute ultrathin BaTiO3 remanence loss to reverse-domain formation and interface-controlled depolarization rather than disappearance of local polar distortion.

**Limitations**: Material/heterostructure-specific; does not establish a universal screening length or validate point-ion PB for these solids.

**research-note**: Experiments and phase-field analysis attribute ultrathin BaTiO3 remanence loss to reverse-domain formation and interface-controlled depolarization rather than disappearance of local polar distortion.

Capture SHA-256: `3c1a51ad402459237fde46718f600e42e9b7cda0aee621ccdc4dfe7cbe7d0a04`; captured 2026-11-25T06:34:13.329112+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### es-frontier-ewald — Modified Ewald Summation Method for Slab Geometries: Application to Donnan Potentials, Confinement Electrostatics, and Titration Simulations.

Levin Y, Bakhshandeh A.; 2026; 2026-10-01 published article; PMC HTML capture

https://pmc.ncbi.nlm.nih.gov/articles/PMC13656781/

**Source class**: primary-paper

**Status / reading depth**: selected-text-read; Abstract and selected opening excerpts from Introduction/Results/Conclusions read; not full-paper verification or reproduction. XML timed out; accessible PMC HTML was read instead.

**Sections inspected**: Abstract
Introduction excerpts
Results/discussion or conclusions excerpts

**Supported claim**: The authors formulate a regularized periodic electrostatic framework for open, non-neutral slab systems and compare against PB and lattice benchmarks.

**Limitations**: Boundary/reservoir conventions are essential; authors’ claims of uniqueness or broad efficiency are not independently certified here.

**research-note**: The authors formulate a regularized periodic electrostatic framework for open, non-neutral slab systems and compare against PB and lattice benchmarks.

Capture SHA-256: `fd0136e957c720f1de963c947fc109e58898c4c8ea0ad667b95efc120773bdfb`; captured 2026-11-25T06:34:13.274315+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### es-openstax-capacitance — OpenStax capacitor/dielectric page attempt

Not verified in this retrieval; None; Attempt2026-11-25

https://openstax.org/books/university-physics-volume-2/pages/8-5-capacitor-with-a-dielectric

**Source class**: metadata

**Status / reading depth**: inaccessible-lead; No source text accepted; HTTP404 retained.

**Sections inspected**: 

**Supported claim**: No scientific result is inferred from this failed request.

**Limitations**: HTTP Error 404: Not Found

**research-note**: Retained failure, not evidence of absence.

Capture SHA-256: `None`; captured 2026-11-25T06:24:15.856808+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### es-scholarpedia-pb — Scholarpedia PB page attempt

Not verified in this retrieval; None; Attempt2026-11-25

http://www.scholarpedia.org/article/Poisson-Boltzmann_equation

**Source class**: metadata

**Status / reading depth**: inaccessible-lead; No source text accepted; HTTP404 retained.

**Sections inspected**: 

**Supported claim**: No scientific result is inferred from this failed request.

**Limitations**: HTTP Error 404: Not Found

**research-note**: Retained failure, not evidence of absence.

Capture SHA-256: `None`; captured 2026-11-25T06:24:15.857367+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### es-kpfm-original — Kelvin probe force microscopy

M. Nonnenmacher
M. P. O’Boyle
H. K. Wickramasinghe; 1991; Applied Physics Letters original article; Crossref metadata/deposited abstract captured2026-11-25

https://doi.org/10.1063/1.105227

**Source class**: primary-paper

**Status / reading depth**: abstract-and-metadata-only; Title, authors, publication date and deposited abstract read. Full article/methods and original force-equation text were not inspected.

**Sections inspected**: Crossref bibliographic record
Deposited abstract

**Supported claim**: The authors report contact-potential imaging with scanning-force microscopy and demonstrate its basic concept on metal surfaces.

**Limitations**: This identifies the early instrument paper and its abstract claim; its performance is not reproduced or used as a present-day accuracy guarantee. The first-harmonic formula here is independently derived from a specified capacitive-force model.

**research-note**: Original-paper identity and author-reported concept, not independent novelty or experimental verification.

Capture SHA-256: `81cdb5ca9c5fd9c8bc8db111d031c89405cd75112ecd8aa86476eaaa62a16900`; captured 2026-11-25T06:47:49.535129+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.


# Magnetism: from currents to quantum matter, with an accountable measurement

Magnetism is a family of related physical descriptions, not a single invisible substance or a universal frequency. A copper coil, an antiferromagnetic crystal, a superconducting ring and a nitrogen-vacancy sensor can all participate in magnetic experiments while requiring different state variables and different approximations. The practical task is to connect those descriptions without erasing the distinctions that make predictions testable. This selected atlas follows classical fields into materials and dynamics, then returns to the experimental question: what exactly did the instrument measure, and which alternative mechanisms remain compatible with it?

The field map deliberately contains both reviewed working cases and mapped research specialties. Reviewed means the selected mathematical derivation or source passages are inspected here. It does not mean an entire specialty, every paper or a physical device has been validated. The source corpus includes official constants, classical field-theory sections, an actual micromagnetic verification paper, and selected contemporary preprints. Abstract-only records stay abstract-only. A very recent November2026 preprint is an active research lead with an inspected abstract, not settled consensus merely because its date is recent.

## A common language without false equivalence

Start with B, measured in tesla, and H, measured in ampere per metre. The macroscopic relation B=mu0(H+M) introduces magnetization M, also in ampere per metre. It is not a promise that B and H are proportional in every material. Ferromagnetic history, anisotropy, domains, tensor response and dispersion can make a scalar permeability inadequate. In the revised SI, vacuum permeability is no longer the exact defining number4pi times10^-7. The selected NIST2022CODATA table records its measured value and uncertainty. Using4pi times10^-7 is an excellent approximation for the illustrative arithmetic here, but calling it exact would misstate the modern unit system.

Energy is the connection that prevents seductive but invalid leaps between subfields. A high resonant voltage is not an autonomous energy source. An induced current can oppose a changing flux while receiving energy from a source or mechanical drive. A laser can write a magnetic texture at zero applied static field while supplying considerable optical energy. A spin current can transfer angular momentum while its injector consumes electrical work. Every such statement needs a boundary, time interval, initial stored energy and declared external ports. The examples below are calculations within that language, not measurements of an extraordinary device.

## How to use the working cases

## Classical magnetic fields

Currents, flux continuity, potentials and boundary-value problems.


B describes magnetic induction; H separates free current from macroscopic magnetization. Neither can be replaced by the other without a constitutive statement. Line, surface and volume current idealizations have different supports and units. Magnetostatics assumes stationary sources with consistent return currents. The vector kernel weights each source element by orientation and distance; near-wire singularities reveal the idealization.


An infinitely long thin wire permits a closed-form azimuthal field; finite leads break that symmetry. Axial loop fields provide a controlled route from a finite circuit to the far-field dipole. An integral law is always valid in its domain but solves a field only when symmetry controls the integrand. Long-coil interior estimates omit fringe fields and winding resistance.


A curl representation enforces flux continuity; gauge choice does not change B. Dipole approximations require source-target separation large relative to source extent. Magnetization produces volume curl and surface cross-product currents; classifications depend on material coarse graining. Normal B continuity and tangential H jumps encode flux conservation and free surface current.


### Magnetic flux continuity

Divergence-free B has zero net outward flux through a closed surface. The stated model requires Classical Maxwell theory with no magnetic monopoles; include all faces of a closed surface.

Apply the divergence theorem to local flux continuity. Opposite face contributions cancel for a uniform field. For an illustrative case, Bz=0.01 T; cube side=0.1 m. Top flux=+0.0001 Wb; bottom=-0.0001 Wb; sides zero. The result is Net flux=0 (Wb). A nonzero open-surface flux is entirely compatible. Zero divergence does not imply zero curl or zero local field. The exact expression and symbol dictionary are indexed as `mag-f-gauss`; source context: [Vector potential and vector Poisson equation §8.1](https://web.mit.edu/6.013_book/www/chapter8/8.1.html).


### Biot–Savart law for a filament

Sum oriented steady-current elements using the inverse-distance vector kernel. The stated model requires Steady localized current with a physically completed return path; vacuum. Observation point is outside the ideal filament.

Solve the vector Poisson equation in Coulomb gauge with the free-space Green function. Take its curl to obtain the cross-product kernel. For an illustrative case, Circular loop I=1 A, R=0.1 m; evaluate centre. All axial contributions add; transverse contributions cancel. Integrate circumference to obtain mu0 I/(2R). The result is B=6.2831853 microtesla (T). The far field of a localized closed loop is dipolar, not an isolated-wire 1/r field. Do not omit return current when predicting a finite device field. The exact expression and symbol dictionary are indexed as `mag-f-biot`; source context: [Vector potential and vector Poisson equation §8.1](https://web.mit.edu/6.013_book/www/chapter8/8.1.html).


### Infinite straight wire

Cylindrical symmetry turns Ampere circulation into an azimuthal field. The stated model requires Infinite thin wire, vacuum, stationary current; r exceeds conductor radius.

Choose a coaxial circular contour. B is tangential and constant on the contour, so 2 pi r B=mu0 I. For an illustrative case, I=2 A; r=0.05 m. Substitute into mu0*2/(2*pi*0.05). The result is B=8.0 microtesla (T). As I tends to zero, B vanishes; the singular r→0 limit is outside the thin-wire domain. A finite wire cannot inherit this expression arbitrarily close to its ends. The exact expression and symbol dictionary are indexed as `mag-f-wire`; source context: [Vector potential and vector Poisson equation §8.1](https://web.mit.edu/6.013_book/www/chapter8/8.1.html).


### On-axis circular-loop field

The axial field of a thin circular loop interpolates between centre field and a dipole. The stated model requires Circular filament in vacuum; observation on its symmetry axis.

Project the Biot–Savart cross product onto the axis. The denominator is constant around the loop; integrate azimuth. For an illustrative case, I=1 A; R=0.1 m; z=0.1 m. Centre field=6.283 microtesla. Multiply by (1+1)^(-3/2). The result is Bz=2.22144 microtesla (T). At z=0 recover mu0 I/(2R); for |z|≫R recover z^-3. The expression is not the off-axis field of a finite solenoid. The exact expression and symbol dictionary are indexed as `mag-f-loop`; source context: [Vector potential and vector Poisson equation §8.1](https://web.mit.edu/6.013_book/www/chapter8/8.1.html).


### Magnetostatic free-current circulation

H circulation counts free current after magnetization is separated out. The stated model requires Stationary fields; displacement current negligible; contour and normal follow right-hand orientation.

Apply Stokes theorem to curl H=Jf. Integrate current density over the spanning surface. For an illustrative case, Ienc=3 A; circular contour radius=0.1 m with cylindrical symmetry. H is constant and tangential. Divide 3 A by 2*pi*0.1 m. The result is H=4.77465 A/m (A/m). Zero enclosed current gives zero circulation, not necessarily H=0 everywhere. Ampere law does not justify constant H on a nonsymmetric contour. The exact expression and symbol dictionary are indexed as `mag-f-ampere`; source context: [Vector potential and vector Poisson equation §8.1](https://web.mit.edu/6.013_book/www/chapter8/8.1.html).


### Long-solenoid interior estimate

Turns per unit length set the ideal long air-core coil field. The stated model requires Length much larger than radius, observation away from ends, air core, negligible winding thickness.

Choose an Ampere rectangle along the interior and remote exterior. Neglect exterior contribution and count n*l turns. For an illustrative case, n=1000/m; I=0.1 A. Compute mu0*100 A/m. The result is B≈0.125664 mT (T). At an ideal long coil end the on-axis field is about half the deep-interior value. Real coil heating, fringe fields and magnetic core saturation are separate calculations. The exact expression and symbol dictionary are indexed as `mag-f-solenoid`; source context: [Vector potential and vector Poisson equation §8.1](https://web.mit.edu/6.013_book/www/chapter8/8.1.html).


### Macroscopic B–H–M relation

Magnetization is magnetic moment per material volume; the relation defines H in SI. The stated model requires Macroscopic SI fields defined at compatible coarse-graining scale.

Separate microscopic current into free and magnetization contributions. Define H=B/mu0−M; no linear material law is assumed. For an illustrative case, Collinear H=100 A/m and M=900 A/m. Sum H+M=1000 A/m. The result is B=1.256637 mT (T). For M=0, vacuum B=mu0 H; at H=0 an ordered sample can have M≠0. B and H do not have the same SI units; B=mu H additionally assumes a constitutive law. The exact expression and symbol dictionary are indexed as `mag-f-bh`; source context: [Poynting theorem §11.2](https://web.mit.edu/6.013_book/www/chapter11/11.2.html).


### Volume magnetization current

Spatially varying magnetization has an equivalent bound volume current. The stated model requires Continuum magnetization differentiable inside the material; add interface surface currents separately.

Represent localized magnetic moments as small current loops. Interior loop contributions cancel except where magnetization varies. For an illustrative case, M=(0,0,a*x), a=1000 A/m^2. Curl gives Jb_y=−dMz/dx. The result is Jb=(0,−1000,0) A/m² (A/m^2). Uniform M has zero volume curl but generally nonzero surface current. Zero Jb in the bulk does not imply an unmagnetized body. The exact expression and symbol dictionary are indexed as `mag-f-bound-volume`; source context: [Poynting theorem §11.2](https://web.mit.edu/6.013_book/www/chapter11/11.2.html).


### Surface magnetization current

The boundary current closes magnetization loops at an interface. The stated model requires Use the magnetization jump if both sides are magnetic; orientation is outward from the chosen body.

Integrate volume curl through an infinitesimal interface layer. The normal derivative of the magnetization step produces a surface sheet. For an illustrative case, M=1000 zhat A/m; surface normal=xhat. zhat cross xhat = yhat. The result is Kb=1000 yhat A/m (A/m). A face normal parallel to M carries no equivalent surface current. The order M cross n matters; reversing it reverses circulation. The exact expression and symbol dictionary are indexed as `mag-f-bound-surface`; source context: [Poynting theorem §11.2](https://web.mit.edu/6.013_book/www/chapter11/11.2.html).


### Far-field magnetic dipole

A localized current distribution has a leading magnetic dipole term. The stated model requires r much larger than source extent; outside the source in vacuum.

Expand the localized vector potential at large distance. The closed-current monopole term vanishes; curl the leading moment term. For an illustrative case, m=0.1 A m²; axial r=0.1 m. On axis B=mu0*2m/(4*pi*r³). The result is B=20 microtesla (T). At the equator the field points opposite m with half the axial magnitude. The singular point-dipole field cannot describe the source interior. The exact expression and symbol dictionary are indexed as `mag-f-dipole`; source context: [Vector potential and vector Poisson equation §8.1](https://web.mit.edu/6.013_book/www/chapter8/8.1.html).


### Dipole torque and energy

A fixed permanent dipole tends to align with the applied field. The stated model requires Small fixed moment in a field uniform over the dipole; induced moments require material work accounting.

Sum Lorentz forces around a small loop. Integrate torque against angle to obtain U=−mB cos(theta). For an illustrative case, m=0.01 A m²; B=0.1 T; perpendicular orientation. Torque magnitude=mB; aligned energy=−mB. The result is Torque=0.001 N m; aligned U=−0.001 J (N m; J). Aligned torque is zero although energy is minimal, not zero by necessity. An induced moment may introduce a factor1/2 in energy after its formation is included. The exact expression and symbol dictionary are indexed as `mag-f-torque`; source context: [Poynting theorem §11.2](https://web.mit.edu/6.013_book/www/chapter11/11.2.html).


### Force on a fixed dipole

The gradient of dipole potential gives force when its moment is fixed. The stated model requires Small rigid moment, quasistatic external field, derivatives at fixed m.

Use F=−gradient U with U=−m dot B. Keep self field and induced-response work outside this simplified potential. For an illustrative case, mz=0.01 A m²; dBz/dz=2 T/m. Multiply mz by axial field gradient. The result is Fz=0.02 N (N). A uniform field can exert torque but gives no translational dipole force. A field magnitude alone is insufficient to determine lifting force. The exact expression and symbol dictionary are indexed as `mag-f-force`; source context: [Poynting theorem §11.2](https://web.mit.edu/6.013_book/www/chapter11/11.2.html).


## Induction and electromagnetic energy

Time-dependent fields, motional circuits, local energy transfer and passive device budgets.


Changing flux and moving material circuits contribute to the same oriented emf. The velocity in a circuit emf is the velocity of the material boundary, not a guessed wave velocity. A changing electric displacement repairs continuity and enables waves; quasistatics needs a scale argument. Poynting flux, storage and mechanical/Joule work identify where supplied energy goes.


Initial stored energy and all powered auxiliary ports belong in a finite-window budget. A loop measures cycle work only for declared field variables, sample volume and measurement conditions. Diffusion and conductive loss can shift response peaks without adding an energy source.


### Magnetic flux

Flux is the oriented surface integral, not B multiplied by any convenient area. The stated model requires A defined surface and normal; B and geometry may vary across it.

Sum infinitesimal normal field contributions. For a uniform field and flat area, obtain BA cos(theta). For an illustrative case, B=0.2 T; A=0.01 m²; field at60degrees to normal. cos60=0.5. The result is Phi=0.001 Wb (Wb). A surface parallel to field has zero flux despite nonzero B. Angle is measured from the normal, not from the surface plane. The exact expression and symbol dictionary are indexed as `mag-f-flux`; source context: [MQS electric fields and perfect conductors §10.1](https://web.mit.edu/6.013_book/www/chapter10/10.1.html).


### Oriented moving-loop Faraday law

Electric and motional contributions give the emf around the actual moving material loop. The stated model requires A well-defined material circuit and right-hand orientation; ideal thin circuit approximation.

Combine local curl E=−partial B/partial t with the moving-surface transport theorem. The boundary motion term is v cross B, not an extra energy source. For an illustrative case, Stationary loop, flux rises by0.003 Wb over0.1 s. dPhi/dt=0.03 Wb/s; apply minus sign. The result is emf=−0.03 V for the chosen positive circulation (V). Steady B can induce emf if the loop area/orientation changes. Reversing the chosen normal reverses both flux and emf sign consistently. The exact expression and symbol dictionary are indexed as `mag-f-faraday`; source context: [MQS electric fields and perfect conductors §10.1](https://web.mit.edu/6.013_book/www/chapter10/10.1.html).


### Ampère–Maxwell law

Free current and displacement-current density both source the curl of H. The stated model requires Macroscopic Maxwell equations with polarization placed in D.

Add displacement current to preserve free-charge continuity. Taking divergence gives divergence Jf+partial rho_f/partial t=0 using divergence D=rho_f. For an illustrative case, Charging capacitor: dD/dt=2 A/m² over0.01 m². Integrate displacement current density over gap area. The result is Displacement current=0.02 A (A). The term may be negligible in a specific MQS limit, not identically absent. Displacement current is not a flow of free charges across an ideal vacuum capacitor gap. The exact expression and symbol dictionary are indexed as `mag-f-maxwell`; source context: [Poynting theorem §11.2](https://web.mit.edu/6.013_book/www/chapter11/11.2.html).


### Vacuum Poynting theorem

Field storage plus outward electromagnetic flux equals negative work rate on matter. The stated model requires Vacuum fields with material currents treated explicitly; material storage needs a consistent constitutive energy model.

Dot Ampère–Maxwell with E and Faraday with H. Subtract using divergence(E cross H)=H dot curl E−E dot curl H. For an illustrative case, Control volume: inward flux3 W; stored-energy rise1 W. Outward integrated S=−3 W; dU/dt=1 W. Work on matter=3−1. The result is Matter receives2 W (W). A steady state can have nonzero energy flux while storage is constant. Field enhancement is not net output; include every boundary port and initial storage. The exact expression and symbol dictionary are indexed as `mag-f-poynting`; source context: [Poynting theorem §11.2](https://web.mit.edu/6.013_book/www/chapter11/11.2.html).


### Vacuum field-energy density

Quadratic vacuum storage follows from reversible field work. The stated model requires Vacuum or a specified linear nondispersive analogue; not a general hysteretic-material formula.

Integrate E dD and H dB along a reversible constitutive path. In vacuum D=epsilon0 E and H=B/mu0. For an illustrative case, E=0; B=0.01 T in volume0.001 m³. Magnetic density=B²/(2mu0)=39.7887 J/m³. The result is Stored magnetic energy=0.0397887 J (J). Storage vanishes quadratically as B→0. Using B²/(2mu) in a nonlinear hysteretic core can give incorrect material energy accounting. The exact expression and symbol dictionary are indexed as `mag-f-density`; source context: [Poynting theorem §11.2](https://web.mit.edu/6.013_book/www/chapter11/11.2.html).


### Passive inductor and winding budget

Source power splits into changing magnetic storage and nonnegative winding dissipation. The stated model requires L positive and constant, R≥0, no additional coupled or powered ports.

Multiply voltage equation by current. Use L i di/dt=d(Li²/2)/dt. For an illustrative case, L=0.1 H; i rises0→2 A; R=0 for illustrative storage. Ufinal=0.5*0.1*4. The result is Input work=0.2 J; no continuous output from a fixed stored state (J). With source off, a resistor can drain initial energy but cannot replenish it. A changing L introduces mechanical/coupling work; do not omit it. The exact expression and symbol dictionary are indexed as `mag-f-inductor`; source context: [Poynting theorem §11.2](https://web.mit.edu/6.013_book/www/chapter11/11.2.html).


### Cycle work in magnetic material

An oriented quasistatic B–H loop gives magnetic work per sample volume for a completed cycle. The stated model requires Closed periodic cycle, consistent internal field and sample volume; separate nonmagnetic apparatus losses.

Integrate local magnetic work H dot dB. Reversible storage returns to its initial value after a cycle, leaving net dissipative work. For an illustrative case, Rectangular scalar loop: coercive Hc=100 A/m; remanent Br=0.5 T. Oriented area magnitude=4 Hc Br. The result is Dissipated work=200 J/m³ per cycle under this loop idealization (J/m^3). A reversible single-valued path traversed forward and back encloses zero area. A counterclockwise plotted loop may change algebraic sign; passivity uses work supplied to matter. The exact expression and symbol dictionary are indexed as `mag-f-hysteresis`; source context: [Poynting theorem §11.2](https://web.mit.edu/6.013_book/www/chapter11/11.2.html).


## Magnetic order and material response

Response functions and microscopic interactions connect atomic moments to domains and phases.


A scalar constant susceptibility is a restricted linear, reversible approximation. Applied and internal fields differ; ellipsoids supply a special uniform-field solution. Independent moments give a high-temperature weak-field Curie law, not a universal low-temperature law. An effective spin Hamiltonian represents electronic exchange after model reduction.


An order parameter and symmetry specify a phase more precisely than the presence of a magnetic signal. Parallel order can form domains that hide a large local moment behind small net magnetization. Exchange, anisotropy and magnetostatics compete to set walls and domain patterns. A one-dimensional wall width follows from a specific functional and boundary states.


Opposing sublattice moments require a Néel order parameter, not just net M. Unequal sublattices can compensate net magnetization or angular momentum at different temperatures. Not all preferred pairwise alignments can be simultaneously realized on a frustrated lattice. Absence of conventional order alone is insufficient; competing states and disorder must be tested.


Some compensated collinear orders allow momentum-dependent nonrelativistic spin splitting. Bulk magnetic order, thin-film structure, spin/orbital conversion and interfacial effects are separate claims. Apparent transitions in finite systems require size, dimensionality and dynamical-time analysis.


### Ellipsoidal internal-field correction

A uniform ellipsoid gives a closed correction for reversible scalar susceptibility. The stated model requires Uniform ellipsoid, principal-axis drive, linear reversible medium; SI factors sum to1.

Combine demagnetizing field −NM with M=chi Hint. Solve the one-variable linear equation for M. For an illustrative case, Sphere N=1/3; chi=3; Happ=100 A/m. Denominator=1+1=2. The result is M=150 A/m and Hint=50 A/m (A/m). For chi→0, M≈chi Happ; large chi is shape-limited. CGS demagnetizing factors can sum to4pi; do not mix conventions. The exact expression and symbol dictionary are indexed as `mag-f-demag`; source context: [Poynting theorem §11.2](https://web.mit.edu/6.013_book/www/chapter11/11.2.html).


### Weak-field Curie susceptibility

Independent isotropically orientable moments respond linearly when thermal energy dominates alignment. The stated model requires Noninteracting moments in weak field mu B≪kB T; classical orientation or appropriate quantum effective moment.

Boltzmann-average the moment projection and expand to first order. The isotropic angular average of cos²(theta) is1/3. For an illustrative case, n=1e28/m³; mu=9.274e-24 A m²; T=300 K. Use kB=1.380649e-23 J/K. The result is chi≈8.70e-5 (dimensionless). The expression cannot be extrapolated to T=0 or saturation. It is not a ferromagnetic hysteresis law and does not include exchange correlations. The exact expression and symbol dictionary are indexed as `mag-f-curie`; source context: [The design and verification of Mumax3](https://arxiv.org/html/1406.7635).


### Curie–Weiss phenomenology

A molecular-field correction shifts the Curie-law denominator. The stated model requires Paramagnetic regime sufficiently far from transitions; fitted C and theta are model-dependent.

Assume an effective field H+lambda M and insert the Curie response. Solve for M/H and absorb molecular-field coefficient into theta. For an illustrative case, C=0.1 K; T=300 K; theta=50 K. Compute0.1/(300−50). The result is chi=0.0004 (dimensionless). theta=0 recovers Curie behavior; the denominator divergence is not a literal finite-sample infinity. Negative theta suggests dominant AFM correlations, not proof of a spin liquid or an ordering temperature. The exact expression and symbol dictionary are indexed as `mag-f-cw`; source context: [2𝑘_𝐹 instability and chiral spin density wave at the 1/9 magnetization plateau in the kagome antiferromagnets](https://arxiv.org/html/2512.11670).


### Heisenberg exchange convention

With this plus-sign convention, positive J favors antiparallel spin correlations. The stated model requires Specify lattice, spin magnitude, boundary and omitted anisotropy/dipolar terms.

Reduce an electronic low-energy problem to spin degrees of freedom under declared assumptions. For two spin1/2 particles, S1 dot S2 has eigenvalues−3/4 and+1/4. For an illustrative case, One bond J=1 meV. Singlet energy=−0.75 meV; triplet=+0.25 meV. The result is Singlet–triplet gap=1 meV=1.602176634e-22 J (J). For J<0 the triplet is lower in this convention. Some authors write−J S dot S and reverse the meaning of positive J. The exact expression and symbol dictionary are indexed as `mag-f-heisenberg`; source context: [2𝑘_𝐹 instability and chiral spin density wave at the 1/9 magnetization plateau in the kagome antiferromagnets](https://arxiv.org/html/2512.11670).


### Classical triangular AFM counterexample

Three unit spins cannot make all three AFM bonds antiparallel. The stated model requires Classical isotropic spins on a single triangular plaquette, zero field.

Write E=J(|s1+s2+s3|²−3)/2. The lower bound occurs when the three vectors sum to zero. For an illustrative case, J=1 energy unit; coplanar angles0,120,240degrees. Each pair dot product=−1/2. The result is Emin=−1.5 J rather than the impossible−3 J (J). The 120degree classical ground state is ordered; frustration alone is not a quantum-spin-liquid proof. Do not transfer a three-site classical minimum to an infinite quantum lattice without analysis. The exact expression and symbol dictionary are indexed as `mag-f-triangle`; source context: [2𝑘_𝐹 instability and chiral spin density wave at the 1/9 magnetization plateau in the kagome antiferromagnets](https://arxiv.org/html/2512.11670).


### Ideal one-dimensional domain wall

Exchange and positive uniaxial anisotropy set a wall parameter and surface energy. The stated model requires One-dimensional180degree wall, no DMI or nonlocal demagnetizing correction; fixed opposite domains.

Minimize integral[A(theta prime)²+K sin²theta] dx. First integral gives A(theta prime)²=K sin²theta; integrate the wall energy. For an illustrative case, A=1e-11 J/m; K=1e5 J/m³. Delta=sqrt(1e-16)=1e-8 m. sigma=4sqrt(1e-6). The result is Delta=10 nm; sigma=0.004 J/m² (m; J/m^2). K→0 broadens the wall and invalidates isolated localized-wall assumptions in a finite sample. Some papers call pi*Delta the wall width; define the convention before comparison. The exact expression and symbol dictionary are indexed as `mag-f-wall`; source context: [The design and verification of Mumax3](https://arxiv.org/html/1406.7635).


## Low-dimensional and moiré magnets

Dimensionality, anisotropy, stacking and correlations control order and textures.


Continuous spin symmetry and short-range interactions restrict finite-temperature order; anisotropy changes the premises. Weak interlayer bonding permits assembly but does not make exchange or disorder negligible. Twist changes local registry and therefore exchange, anisotropy and relaxation. Spatially separated local phases and transition scales need resolved measurement rather than one averaged moment.


A gate can alter carriers, electric field and strain; these mechanisms must be discriminated. Valley labels are electronic momentum-space degrees of freedom, not real-space locations. Field-enhanced superconductivity and valley imbalance constrain mechanisms without proving one unique pairing theory.


## Spin transport and magnetic dynamics

Angular momentum transfer, resonances, textures and wave-based information processing.


The sign convention for gyromagnetic ratio and choice of B or H must be explicit. A resonance depends on effective-field curvature, damping, geometry and drive/readout channels. Spin waves carry energy and angular momentum; excitation, propagation and detection losses remain. A quadratic wavevector term is a limiting continuum result, not every film mode dispersion.


Spin, orbital and charge currents have distinct units and conversion mechanisms. A conversion angle is defined only after specifying current normalization and geometry. Coherent torque, heating and field-induced switching require separate controls. DMI, exchange, anisotropy and dipolar energy stabilize or destabilize different textures.


A continuum integer invariant requires smoothness and a compactified or fixed boundary. Laser pulses are an external energy input; field-free is not energy-free. Two-sublattice exchange gives dynamics not captured by a single ferromagnetic macrospin.


### Gilbert dynamics with positive gamma convention

A unit magnetization precesses and damps with a declared positive gyromagnetic magnitude. The stated model requires Fixed saturation magnitude; differentiable effective energy; torque sources and temperature terms must be added explicitly.

Solve Gilbert implicit equation dm/dt=−gamma m cross B+alpha m cross dm/dt. Use m dot dm/dt=0 to invert its tangent-plane operator. For an illustrative case, alpha=0; Bz=0.1 T; gamma=1.760e11 rad/(T s). Angular rate=gamma B=1.760e10 rad/s; divide by2pi. The result is Precession frequency≈2.801 GHz (Hz). With alpha=0 and static energy, precession conserves energy; alpha>0 removes energy for the consistent convention. The selected MuMax paper prints a plus-prefactor gamma_LL form; this entry chooses positive gamma and an explicit minus sign. Check the source convention and actual precession direction before converting symbols. The exact expression and symbol dictionary are indexed as `mag-f-llg`; source context: [The design and verification of Mumax3](https://arxiv.org/html/1406.7635).


### Thin-film macrospin resonance

Two restoring-field curvatures set the in-plane uniform-mode frequency. The stated model requires Uniform saturated film, small-angle motion, negligible damping shift; geometry/anisotropy convention specified.

Linearize torque around the in-plane equilibrium. Combine two coupled transverse equations to obtain the product of restoring fields. For an illustrative case, gamma/(2pi)=28 GHz/T; BH=0.1 T; mu0 Meff=1 T. sqrt(0.1*1.1)=0.33166 T. The result is f≈9.287 GHz (Hz). Setting Meff=0 reduces the expression to the simple Larmor frequency. Do not insert H in A/m into a formula whose field arguments are tesla. The exact expression and symbol dictionary are indexed as `mag-f-kittel`; source context: [The design and verification of Mumax3](https://arxiv.org/html/1406.7635).


### Exchange-dominated spin-wave limit

A uniformly magnetized exchange continuum has quadratic wavevector dispersion in this limit. The stated model requires Small-amplitude mode, uniform equilibrium, neglect dipolar dispersion/anisotropy or absorb appropriate constants in B0.

Insert a transverse plane wave into the exchange field. Linearize undamped LLG to get precession with the shifted restoring field. For an illustrative case, A=1e-11 J/m; Ms=8e5 A/m; k=1e7/m; gamma/(2pi)=28 GHz/T. Exchange induction=0.0025 T. The result is Exchange frequency shift=70 MHz (Hz). As k→0 the exchange shift vanishes, but other gap terms may remain. A measured film mode can be dipolar, exchange-dominated or mixed; this is not the entire magnon spectrum. The exact expression and symbol dictionary are indexed as `mag-f-magnon`; source context: [The design and verification of Mumax3](https://arxiv.org/html/1406.7635).


### Skyrmion degree

An oriented smooth two-dimensional spin texture maps the compactified plane to the unit sphere. The stated model requires Fixed common boundary direction or compact domain; no singular point where |m| vanishes.

Integrate oriented area swept on the unit sphere and normalize by4pi. For an axisymmetric texture reduce the integral to azimuthal winding and polar endpoint values. For an illustrative case, Azimuthal winding n=1; core theta=pi; boundary theta=0. Q=(n/2)[cos(theta_core)−cos(theta_boundary)] in this coordinate convention. The result is Q=−1; reversing orientation conventions can reverse its sign (dimensionless). A uniform state has Q=0; a boundary-unfixed partial texture need not give an integer. Topological charge alone does not guarantee infinite lifetime or free energy; boundaries and singular events permit changes. The exact expression and symbol dictionary are indexed as `mag-f-topology`; source context: [Zero-field deterministic all-optical writing and annihilation of nanometer-scale skyrmion bubbles](https://arxiv.org/html/2512.19266).


### Spin Hall normalization

A declared scalar spin Hall angle relates selected spin-angular-momentum flux to charge current density. The stated model requires A specified material, transport geometry and spin polarization convention; tensor character suppressed only for one chosen component.

Express spin flux as angular momentum per transported carrier. Define thetaSH by the ratio of normalized transverse spin flux to charge flux. For an illustrative case, thetaSH=0.1; jc=1e10 A/m². hbar/(2e)=3.29106e-16 J s/C. The result is js=3.29106e-7 J/m² in the angular-momentum-flux convention (J/m^2). Changing spin-flux convention to charge-equivalent A/m² removes the hbar/(2e) prefactor. A spin current is not an extra source of energy; injector electrical power and interface losses remain. The exact expression and symbol dictionary are indexed as `mag-f-spin-hall`; source context: [[2611.09098] Disentangling Spin and Orbital Contributions in the Search for Altermagnetic Terahertz Conversion in RuO2](https://arxiv.org/abs/2611.09098).


### Damping-like spin–orbit torque

A transverse angular-momentum input can reorient an ordered moment. The stated model requires A selected torque term in an explicitly powered model; two-sublattice AFMs require the corresponding sublattice torques.

Resolve the injected spin into the tangent plane perpendicular to m. Use m cross(s cross m)=s−(m dot s)m. For an illustrative case, m=xhat; s=zhat; gamma=1.76e11; BDL=0.001 T. The tangent direction is zhat; instantaneous rate scale is gamma BDL. The result is dm/dt=1.76e8 zhat per second for this isolated term (1/s). Collinear s and m give zero torque for this term. Switching depends on competing fields, pulse shape and heating; a torque expression is not a complete switching prediction. The exact expression and symbol dictionary are indexed as `mag-f-sot`; source context: [[2512.23397] Terahertz switching of antiferromagnetic order by Néel spin-orbit torques](https://arxiv.org/abs/2512.23397).


## Superconducting magnetic response

Equilibrium flux exclusion, screening currents, vortices and critical scales.


Equilibrium flux expulsion differs from frozen flux in an ideal perfect conductor. A local homogeneous superfluid model gives exponential screening only in a stated geometry. Phase single-valuedness constrains a fluxoid; magnetic flux alone needs additional limits. Vortex cores, penetration depth and sample geometry distinguish lower and upper critical fields.


A coarse-grained order parameter has a controlled near-transition regime, not unrestricted microscopic authority. Stray fields, screening, proximity and dissipation couple distinct subsystems.


### London penetration in a half-space

Local superfluid screening produces exponential equilibrium penetration in the simple half-space. The stated model requires Static homogeneous London regime, planar surface, weak fields without vortices or strong nonlocality; bulk boundary B→0.

Combine curl js=−B/(mu0 lambdaL²) with stationary Ampere law and divergence B=0. Select the decaying solution of the one-dimensional second-order equation. For an illustrative case, B(0)=1 mT; lambdaL=100 nm; z=200 nm. The exponent is−2. The result is B=0.135335 mT (T). The growing exponential is excluded by the bulk boundary condition. An ideal perfect conductor preserves initial flux; equilibrium Meissner expulsion needs more than infinite DC conductivity. The exact expression and symbol dictionary are indexed as `mag-f-london`; source context: [MQS electric fields and perfect conductors §10.1](https://web.mit.edu/6.013_book/www/chapter10/10.1.html).


### Superconducting flux quantum and fluxoid

Single-valued pair phase quantizes a fluxoid, with magnetic flux alone recovered when the current term is negligible. The stated model requires Closed contour in a coherent superconducting region; conventional2e pairing assumed; finite kinetic-current correction retained.

Integrate the gauge-invariant phase-gradient relation around a closed loop. Phase change is2pi n; retain both vector-potential and supercurrent terms. For an illustrative case, h=6.62607015e-34 J s; e=1.602176634e-19 C; n=1; negligible current correction. Divide h by2e. The result is Phi0=2.067833848e-15 Wb (Wb). In thin/high-kinetic-inductance loops, flux need not equal nPhi0 even though fluxoid does. Flux quantization is not a universal quantization of arbitrary classical coil flux. The exact expression and symbol dictionary are indexed as `mag-f-fluxquantum`; source context: [CODATA2022 vacuum magnetic permeability](https://physics.nist.gov/cgi-bin/cuu/Value?mu0).


### Ginzburg–Landau scale ratio

Penetration and coherence scales organize superconducting interfaces and the orbital upper critical field. The stated model requires Conventional isotropic GL description near its controlled transition regime; orbital limit, neglect paramagnetic/multiband modifications.

Nondimensionalize the GL equations by lambda and xi. Linearized order-parameter onset in a uniform field gives the orbital length condition. For an illustrative case, lambda=100 nm; xi=10 nm; Phi0=2.067833848e-15 Wb. kappa=10; Bc2=Phi0/(2pi*1e-16 m²). The result is kappa=10; Bc2≈3.29 T in this orbital approximation (dimensionless; T). The GL interface crossover is kappa=1/sqrt2 under the standard isotropic premises. A material measured far from Tc may require a microscopic theory; this is not its universal critical field. The exact expression and symbol dictionary are indexed as `mag-f-gl`; source context: [[2611.31861] Superconductivity with valley-imbalanced Fermi surfaces in thick rhombohedral graphene](https://arxiv.org/abs/2611.31861).


## Magnetoelectric and hybrid systems

Cross responses need conjugate variables, symmetry and an external energy supply.


A derivative with respect to H differs by permeability factors from one with respect to B. Symmetry and chosen thermodynamic potential determine allowed reciprocal cross responses. A bilayer layer-pseudospin response is not automatically the bulk SI magnetoelectric coefficient. Changing strain can modify anisotropy; external electrical/mechanical work remains in the budget.


Avoided crossing alone does not establish a useful autonomous energy source or quantum advantage.


### SI magnetoelectric cross derivative

A reciprocal static cross response follows from one explicitly chosen thermodynamic potential. The stated model requires Equilibrium reversible small-field expansion at fixed declared thermodynamic variables; allowed tensor components depend on symmetry.

Use dg=−P dot dE−mu0 M dot dH for the selected material contribution. Differentiate the bilinear cross term and equate mixed derivatives. For an illustrative case, alpha_zz=1e-12 s/m; Hz=1e5 A/m; Ez=0. Pz=alpha Hz. The result is Pz=1e-7 C/m² (C/m^2). A coefficient defined using B or electric displacement instead of H/E has different factors and potentially units. The layer-pseudospin polarizability in the selected bilayer paper is not silently identified with this bulk SI coefficient. The exact expression and symbol dictionary are indexed as `mag-f-me`; source context: [Layer dipole magnetoelectric polarizability of antiferromagnetic bilayers](https://arxiv.org/html/2512.05875).


## Magnetometry and inverse inference

Measurements require channel models, geometry, calibration and identifiable source parameters.


A magnetometer produces a calibrated channel with finite bandwidth, orientation and noise. Zeeman shifts depend on the projection along a known crystallographic axis and the applicable spin Hamiltonian. Hall voltage and pickup-coil emf measure different functions of the same field history. Calibration, correlation, geometry and drift can dominate counting noise.


External fields need not uniquely determine a vector magnetization distribution. High-spatial-frequency components decay rapidly above the sample and amplify noise on inversion. A single field component generally cannot identify every source component without extra assumptions. A fitted field can coexist with multiple magnetization explanations; priors and held-out data must be reported.


### NV axial Zeeman splitting

A simple axial NV-center model converts a calibrated spin transition shift into a field projection. The stated model requires Weak suitably aligned field, negligible transverse mixing/strain or independently calibrated corrections; approximate spin1 Hamiltonian.

Diagonalize D Sz²+gammae Bparallel Sz/(2pi) in frequency units. Transition shifts are opposite for the m_s=±1 branches. For an illustrative case, gammae/(2pi)=28 GHz/T; Bparallel=100 microtesla. Shift magnitude=28e9*1e-4 Hz. The result is Each branch shifts2.8 MHz; branch separation changes5.6 MHz (Hz). Temperature drift in D shifts both branches and can mimic single-line field changes. One NV axis measures a projection, not an unconstrained three-component vector field. The exact expression and symbol dictionary are indexed as `mag-f-nv`; source context: [Universal Reconstruction of Complex Magnetic Profiles with Minimum Prior Assumptions](https://arxiv.org/html/2411.18882).


### Stray-field Fourier height filtering

In a source-free half-space, lateral high-spatial-frequency magnetic structure decays with height. The stated model requires Planar Fourier analysis in a homogeneous source-free half-space; choose the solution decaying at infinity.

A scalar magnetic potential satisfies Laplace equation above sources. Fourier transform laterally to obtain partial_z² potential=|k|² potential. For an illustrative case, Wavelength=100 nm; sensor height=50 nm. |k|z=2pi*50/100=pi. The result is Amplitude attenuation=e^−pi≈0.04321; inverse amplification≈23.14 (dimensionless amplitude ratio). At k=0 the exponential is1, but boundary/source constraints can make particular uniform channels unobservable. Exact back-propagation multiplies noise exponentially; regularization adds assumptions, not missing data. The exact expression and symbol dictionary are indexed as `mag-f-height`; source context: [Universal Reconstruction of Complex Magnetic Profiles with Minimum Prior Assumptions](https://arxiv.org/html/2411.18882).


### Correlated first-order uncertainty propagation

A local sensitivity Jacobian propagates a declared input covariance into output variance. The stated model requires Small enough uncertainties for linearization; covariance and model must be justified independently.

Taylor-expand output around nominal inputs. Take variance of the linearized combination, retaining cross terms. For an illustrative case, y=x1−x2; each standard uncertainty=1 microtesla; correlationrho=0.9. Variance=(1+1−2*0.9) microtesla²=0.2. The result is uy≈0.447214 microtesla (T). Perfect common-mode correlation cancels in a difference only for matched sensitivities. Ignoring covariance can overstate or understate uncertainty; no automatic95percent confidence follows from an arbitrary bound. The exact expression and symbol dictionary are indexed as `mag-f-uncertainty`; source context: [JCGM100:2008 Guide to expression of uncertainty in measurement](https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf).


## Computational magnetism

Discretization, energy functionals, verification, uncertainty and reproducibility.


A continuous unit-vector model excludes atomic-scale degrees of freedom by construction. Agreement at one grid spacing is not convergence; resolve relevant exchange and wall scales. Gradient penalties approximate slowly varying exchange and need compatible boundary conditions. Easy axes and energy offsets must be stated with the coefficient convention.


Bulk and interfacial DMI have different invariant forms and boundary twists. Analytic/standard-problem agreement verifies implementation within a model, not actual material parameters. Selected source sections expose finite-difference approximations and even benchmark disagreement. Exchange-correlation approximations and Hubbard U can change predicted magnetic ground states.


Record code/version, mesh, convergence, material parameters, boundary conditions and numerical budgets.


### Continuum exchange energy and effective field

A smooth magnetization texture costs gradient energy and creates a restoring exchange field. The stated model requires Constant A and Ms; slowly varying texture; appropriate fixed or natural boundaries.

Vary the gradient functional and integrate by parts. Use Beff=−(1/Ms) deltaE/deltam as a volume functional derivative. For an illustrative case, A=1e-11 J/m; sinusoidal wave k=1e7/m; Ms=8e5 A/m. The exchange-field scale is2Ak²/Ms. The result is Field scale=0.0025 T (T). Uniform m has zero exchange energy in this reference. A mesh that cannot resolve rotation between cells misrepresents this continuum model. The exact expression and symbol dictionary are indexed as `mag-f-exchange`; source context: [The design and verification of Mumax3](https://arxiv.org/html/1406.7635).


### Uniaxial anisotropy convention

Positive K in this convention favors alignment along either easy-axis direction. The stated model requires One uniaxial contribution with a chosen zero of energy; other anisotropies may coexist.

Expand a time-reversal-even scalar energy in the axis projection. Subtract a constant so aligned states have zero energy. For an illustrative case, K=1e5 J/m³; m at45degrees to u. Projection squared=1/2. The result is wK=5e4 J/m³ (J/m^3). Parallel and antiparallel easy-axis states are degenerate under this term alone. A negative coefficient changes the easy directions; do not infer them from the symbol K alone. The exact expression and symbol dictionary are indexed as `mag-f-anisotropy`; source context: [The design and verification of Mumax3](https://arxiv.org/html/1406.7635).


### Interfacial DMI energy convention

An inversion-asymmetric interfacial invariant favors one texture chirality. The stated model requires Thin-film interfacial symmetry; derivatives x,y only; boundary terms and normal orientation matter.

Construct a scalar linear in gradients allowed by interfacial symmetry. A functional variation generates a chiral field plus nontrivial boundary conditions. For an illustrative case, One-dimensional cycloid m=(sin(qx),0,cos(qx)); q=1e7/m; D=1e-3 J/m². Substitution gives wD=Dq for this convention. The result is wD=1e4 J/m³; reversing q reverses the sign (J/m^3). D=0 restores degeneracy of opposite chiralities for this term. Bulk D m dot curl m is a different invariant; surface D_s in J/m must be divided by thickness to compare this effective D. The exact expression and symbol dictionary are indexed as `mag-f-dmi`; source context: [The design and verification of Mumax3](https://arxiv.org/html/1406.7635).


### Magnetostatic exchange length

Exchange and magnetostatic energy density scales define a useful resolution length. The stated model requires Continuum ferromagnet; a characteristic scale, not a universal sufficient mesh certificate.

Balance gradient density A/ell² against mu0 Ms²/2. Solve for ell. For an illustrative case, A=1.3e-11 J/m; Ms=8e5 A/m. Evaluate sqrt(2*1.3e-11/(mu0*(8e5)^2)). The result is lex≈5.69 nm (m). Increasing A broadens the scale; increasing Ms reduces it. DMI, anisotropy, interfaces and convergence may require smaller cells than this estimate. The exact expression and symbol dictionary are indexed as `mag-f-lex`; source context: [The design and verification of Mumax3](https://arxiv.org/html/1406.7635).


## Contemporary evidence: compare the mechanisms, not just the headlines

The following records have different evidential roles. A computational ground-state calculation, a scanning magnetic image, an optical switching experiment and an abstract-only proposal cannot be pooled as equivalent confirmations. The source status is part of the result. The contrast between MnTe, RuO2 and a symmetry classification is especially important: one material-specific observation does not establish magnetic order or a particular conversion mechanism in every proposed altermagnet.

A zero-net-moment state also need not be nonmagnetic in the sense of having no order parameter. Conversely, a transverse transport anisotropy alone need not establish the proposed order. Electronic-structure functionals, lattice strain, doping, surface preparation and interface chemistry can change the claim under test. The contemporary sources are therefore presented as comparisons with explicit missing evidence rather than an invented consensus or a percentage of magnetism solved.


### A meta-GGA perpective on the altermagnetism of RuO2

Readingstatus: **selected-text-review**. Selected abstract/conclusion plusMethods andground-state paragraphsII–III.2 read. A higher-rung r2SCAN-L calculation retains a nonmagnetic ideal bulk state while predicting strain/doping thresholds. The source specifieselk/FP-LAPW,9×9×13k sampling,Liechtenstein+U withfully localized double counting andfixedJ=0.5eV. SelectedLSDA/PBE/r2SCAN-L calculations retain a nonmagnetic bulk reference;distortion/doping conclusions remain conditional. FP-LAPW/functional and Hubbard-U-dependent results;finite Brillouin-zone sampling andfixed-spin-moment/local-sphere definition. No independentDFT rerun oruniversal experimental absence theorem. [Versioned source](https://arxiv.org/html/2512.04995).


### [2406.12250] Observation of stacking engineered magnetic phase transitions within moiré supercells of twisted van der Waals magnets

Reading status: **abstract-only-review**, arXiv:2406.12250v1. abstract-only; full abstract and version record. Scanning single-spin magnetometry reports local FM/AFM regions with separate transition scales in twisted CrI3. Author-reported experiment/model inspected through the abstract only. Abstract-only; raw noise spectra, structural reconstruction and model identification were not reanalysed. Not independently replicated or computationally reproduced in this atlas pass. The next discriminating question is: Which independent measurement/model comparison could distinguish the principal competing explanation? [Source and version](https://arxiv.org/abs/2406.12250).


### Universal Reconstruction of Complex Magnetic Profiles with Minimum Prior Assumptions

Reading status: **selected-text-review**, arXiv:2411.18882v2. Selected Discussion opening paragraph and identity. A GPU-assisted physics-informed reconstruction framework fits spatial magnetization to measured field maps. Selected source sections describe the reported computational/experimental method; no independent rerun. Optimization and a physically constrained loss do not prove uniqueness of an unconstrained inverse problem. Not independently replicated or computationally reproduced in this atlas pass. The next discriminating question is: Which independent measurement/model comparison could distinguish the principal competing explanation? [Source and version](https://arxiv.org/html/2411.18882).


### [2512.23397] Terahertz switching of antiferromagnetic order by Néel spin-orbit torques

Reading status: **abstract-only-review**, arXiv:2512.23397v1. abstract-only; full abstract and submission identity. The authors report current-direction-controlled ultrafast Néel-vector rotation in Mn2Au with optical readout. Author-reported experiment/model inspected through the abstract only. Abstract-only; pulse energy, thermal controls, device yield and raw trajectories were not independently checked. Not independently replicated or computationally reproduced in this atlas pass. The next discriminating question is: Which independent measurement/model comparison could distinguish the principal competing explanation? [Source and version](https://arxiv.org/abs/2512.23397).


### Zero-field deterministic all-optical writing and annihilation of nanometer-scale skyrmion bubbles

Reading status: **selected-text-review**, arXiv:2512.19266v1. Opening summary; supplementary dataset paragraph; version. The source reports single-pulse field-free writing/annihilation of skyrmion bubbles in engineered Co/Gd stacks. Selected source sections describe the reported computational/experimental method; no independent rerun. Selected opening summary and supplementary dataset description; not full imaging/topology or lifetime validation. Not independently replicated or computationally reproduced in this atlas pass. The next discriminating question is: Which independent measurement/model comparison could distinguish the principal competing explanation? [Source and version](https://arxiv.org/html/2512.19266).


### 2𝑘_𝐹 instability and chiral spin density wave at the 1/9 magnetization plateau in the kagome antiferromagnets

Reading status: **selected-text-review**, arXiv:2512.11670v1. Selected conclusions and model-method overview in contents. Neural quantum-state optimization and flux insertion favor a chiral spin-density wave over previously proposed plateau states. Selected source sections describe the reported computational/experimental method; no independent rerun. Model/ansatz/finite-size-dependent theory; not a material proof and not an independent rerun. Not independently replicated or computationally reproduced in this atlas pass. The next discriminating question is: Which independent measurement/model comparison could distinguish the principal competing explanation? [Source and version](https://arxiv.org/html/2512.11670).


### Layer dipole magnetoelectric polarizability of antiferromagnetic bilayers

Reading status: **selected-text-review**, arXiv:2512.05875v1. Selected abstract/introduction and conclusion. A theoretical layer-dipole response is introduced for PT-symmetric antiferromagnetic bilayers. Selected source sections describe the reported computational/experimental method; no independent rerun. Its displacement-field/layer-pseudospin convention differs from bulk SI alpha_ij; selected theory only. Not independently replicated or computationally reproduced in this atlas pass. The next discriminating question is: Which independent measurement/model comparison could distinguish the principal competing explanation? [Source and version](https://arxiv.org/html/2512.05875).


### [2611.09098] Disentangling Spin and Orbital Contributions in the Search for Altermagnetic Terahertz Conversion in RuO2

Readingstatus: **selected-text-review**. Version1 PDF:abstract;introduction channel ambiguity;experimental principle/wedge sample and injector paragraphs;Discussion/Conclusion interface-control paragraphs read. Polarity/thickness and Cu-spacer controls distinguish spin/orbital conversion interpretations in the studied RuO2 heterostructures. The source describes RuO2(101)wedge films,3nmFe/Ni/Py injectors and polarity/thickness discrimination. Cu insertion changes the measured anisotropy, supporting interface-conditioned interpretations rather than a unique bulk-order inference. No independent raw THz trace, calibration, supplement or transport-model fit reanalysis. The result concerns a specified specimen/channel and does not prove universal absence of magnetic order in all RuO2. [Versioned source](https://arxiv.org/pdf/2611.09098v1).


### [2611.31861] Superconductivity with valley-imbalanced Fermi surfaces in thick rhombohedral graphene

Reading status: **abstract-only-review**, arXiv:2611.31861v1. abstract-only; full abstract and24Nov2026 submission record. In-plane-field-enhanced superconductivity and unequal Fermi pockets are reported in17-layer rhombohedral graphene. Author-reported experiment/model inspected through the abstract only. Abstract-only very recent preprint; magnon-assisted equal-spin pairing is a motivated scenario, not uniquely established. Not independently replicated or computationally reproduced in this atlas pass. The next discriminating question is: Which independent measurement/model comparison could distinguish the principal competing explanation? [Source and version](https://arxiv.org/abs/2611.31861).


## Independent inverse and convention checks selected in round2

A concrete inverse problem is more informative than saying that inverse problems are difficult. Put two ideal point dipoles at known coordinates x=−1m and x=+1m, both oriented along z. Their two moments are the only unknowns; source positions, orientations and sensor location are held fixed. A Bz sensor at x=0,z=2m weights both moments by the same vacuum dipole coefficient c=1.2521980672×10^−8T/(A m²). The forward operator is therefore the1×2matrix(c,c). Its rank is1, its nullity is1, and(1,−1)is an explicit kernel direction. Every moment pair(2+t,1−t)produces the same reading as(2,1).

This operator has one strictly positive returned singular value, sqrt(2)|c|. Reporting that value alone would not prove injectivity: there are two unknown coordinates and only one measured combination. Adding centred sensors at heights2,3and4m supplies more data but does not break the source-exchange symmetry. Each new row still has equal columns, so the3×2matrix remains rank1. Thus even a multi-height map may retain a particular ambiguity. The operator's domain and geometry, rather than the number of plotted data points, determine the inference.

For this restricted toy, move the second sensor to x=0.5m,z=2m. The two couplings become unequal and the2×2determinant is1.8688737689×10^−16[T/(A m²)]². An independently executed two-equation inversion recovers the assumed moments(2,1)with floating error below10^−12. That proves uniqueness only within this fixed two-moment model, and it is not a material measurement. A continuum magnetization, unknown positions or unknown moment axes enlarge the domain and require another analysis. Nonzero determinant also does not establish acceptable conditioning under sensor noise and geometric uncertainty. The complete example, including its zero-coupling exception at h=a/sqrt(2), is indexed as `mag-f-inverse-witness`.

The source foundation also became more direct. David Tong's statistical-physics section5now supplies selected mean-field, fluctuation-validity and Landau discussions. The source itself uses normalized Ising couplings; its symbol B is not automatically the SI induction in tesla. Our isotropic classical Curie factor1/3comes instead from the orientation partition function4pi*sinh(x)/x, with x=mu B/(kB T). The independently evaluated Langevin expression coth(x)−1/x approaches x/3. This distinction prevents importing a two-state Ising angular factor into a continuously orientable-moment example.

MIT's selected2003London-equation slides directly distinguish a flux-conserving perfect conductor from a flux-expelling superconductor. The separate supercurrent/fluxoid lecture retains the current contribution and the contour topology rather than asserting that arbitrary magnetic flux is quantized. Some equations in these lecture PDFs are images; only the selected prose and explicitly inspected contents are claimed as read, and our formulas remain explanatory reconstructions. A complete original GLupper-critical-field derivation has not been source-audited here. The GLentry now identifies Landau and phase/flux ingredients rather than presenting the recent graphene preprint as foundational proof of its orbital formula.

Eight independent SIbase-dimension controls checked B=mu0H, exchange effective field, interfacial DMIenergy density, LLGtime rate, angular-momentum-flux normalization and both magnetoelectric cross derivatives. A finite-difference cycloid test gives the declared interfacial DMI density Dq, with chirality reversal changing its sign. The spin Hall example now names the charge, flow and spin-polarization axes, and distinguishes angular-momentum flux from charge-equivalent current. Its conversion ratio is not an event probability. For magnetoelectrics, converting a response to displacement D into the bulk E,Hcoefficient requires a constitutive relation and a volumetric normalization; an unprovided effective thickness cannot be invented for a bilayer moment.

The priority2026RuO2record was deepened only after downloading its actual version1PDF. Selected passages describe the wedge geometry, Fe/Ni/permalloy injectors, polarity/thickness discrimination and Cu-spacer controls. The conclusion concerns the conversion channel in those heterostructures, not a universal absence theorem for every RuO2specimen. The2025functional study now also records its selected FP-LAPWmethod,k-point mesh,Hubbard-U/double-counting choices and local-moment definition. Neither source eliminates the need for independent specimen-specific order measurements. No full raw-data reanalysis, DFTexecution or experimental replication was performed.


## Complete formula and theorem register


### Magnetic flux continuity — `mag-f-gauss`

Status: established-model.

$$
\nabla\cdot\mathbf B=0,\quad\oint_{\partial V}\mathbf B\cdot d\mathbf a=0
$$

Divergence-free B has zero net outward flux through a closed surface.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `B` | magnetic flux density | T | vector |
| `V` | enclosed region | m^3 | coordinate |
| `da` | oriented outward area element | m^2 | vector |
| `nabla` | spatial derivative | 1/m | operator |

**Conditions and domain**

- Classical Maxwell theory with no magnetic monopoles; include all faces of a closed surface.

**Derivation or proof guide**

1. Apply the divergence theorem to local flux continuity.
2. Opposite face contributions cancel for a uniform field.

**Worked example**

Inputs: Bz=0.01 T; cube side=0.1 m

1. Top flux=+0.0001 Wb; bottom=-0.0001 Wb; sides zero.

Result: Net flux=0; units: Wb

**Limits and counterchecks**

- A nonzero open-surface flux is entirely compatible.

**Common mistakes**

- Zero divergence does not imply zero curl or zero local field.

Source records: `mag-src-mit-vector`.

### Biot–Savart law for a filament — `mag-f-biot`

Status: established-model.

$$
\mathbf B(\mathbf r)=\frac{\mu_0 I}{4\pi}\int \frac{d\boldsymbol\ell\times(\mathbf r-\mathbf r^\prime)}{|\mathbf r-\mathbf r^\prime|^3}
$$

Sum oriented steady-current elements using the inverse-distance vector kernel.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `mu0` | vacuum magnetic permeability, measured CODATA constant | H/m | constant |
| `I` | steady line current | A | scalar |
| `r` | observation point | m | coordinate |
| `rprime` | source point | m | coordinate |
| `dl` | oriented line element in current direction | m | vector |
| `B` | resulting flux density | T | vector |

**Conditions and domain**

- Steady localized current with a physically completed return path; vacuum.
- Observation point is outside the ideal filament.

**Derivation or proof guide**

1. Solve the vector Poisson equation in Coulomb gauge with the free-space Green function.
2. Take its curl to obtain the cross-product kernel.

**Worked example**

Inputs: Circular loop I=1 A, R=0.1 m; evaluate centre

1. All axial contributions add; transverse contributions cancel.
2. Integrate circumference to obtain mu0 I/(2R).

Result: B=6.2831853 microtesla; units: T

**Limits and counterchecks**

- The far field of a localized closed loop is dipolar, not an isolated-wire 1/r field.

**Common mistakes**

- Do not omit return current when predicting a finite device field.

Source records: `mag-src-mit-vector`.

### Infinite straight wire — `mag-f-wire`

Status: established-model.

$$
B_\phi=\frac{\mu_0 I}{2\pi r}
$$

Cylindrical symmetry turns Ampere circulation into an azimuthal field.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `mu0` | vacuum magnetic permeability, measured CODATA constant | H/m | constant |
| `I` | wire current | A | scalar |
| `r` | distance from wire axis | m | coordinate |
| `Bphi` | azimuthal flux density, right-hand sense | T | scalar |

**Conditions and domain**

- Infinite thin wire, vacuum, stationary current; r exceeds conductor radius.

**Derivation or proof guide**

1. Choose a coaxial circular contour.
2. B is tangential and constant on the contour, so 2 pi r B=mu0 I.

**Worked example**

Inputs: I=2 A; r=0.05 m

1. Substitute into mu0*2/(2*pi*0.05).

Result: B=8.0 microtesla; units: T

**Limits and counterchecks**

- As I tends to zero, B vanishes; the singular r→0 limit is outside the thin-wire domain.

**Common mistakes**

- A finite wire cannot inherit this expression arbitrarily close to its ends.

Source records: `mag-src-mit-vector`.

### On-axis circular-loop field — `mag-f-loop`

Status: established-model.

$$
B_z(z)=\frac{\mu_0 I R^2}{2(R^2+z^2)^{3/2}}
$$

The axial field of a thin circular loop interpolates between centre field and a dipole.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `mu0` | vacuum magnetic permeability, measured CODATA constant | H/m | constant |
| `I` | oriented loop current | A | scalar |
| `R` | loop radius | m | scalar |
| `z` | distance along oriented loop axis | m | coordinate |
| `Bz` | axial flux density | T | scalar |

**Conditions and domain**

- Circular filament in vacuum; observation on its symmetry axis.

**Derivation or proof guide**

1. Project the Biot–Savart cross product onto the axis.
2. The denominator is constant around the loop; integrate azimuth.

**Worked example**

Inputs: I=1 A; R=0.1 m; z=0.1 m

1. Centre field=6.283 microtesla.
2. Multiply by (1+1)^(-3/2).

Result: Bz=2.22144 microtesla; units: T

**Limits and counterchecks**

- At z=0 recover mu0 I/(2R); for |z|≫R recover z^-3.

**Common mistakes**

- The expression is not the off-axis field of a finite solenoid.

Source records: `mag-src-mit-vector`.

### Magnetostatic free-current circulation — `mag-f-ampere`

Status: established-model.

$$
\nabla\times\mathbf H=\mathbf J_f,\quad\oint_C\mathbf H\cdot d\boldsymbol\ell=I_{f,enc}
$$

H circulation counts free current after magnetization is separated out.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `H` | magnetic field intensity | A/m | vector |
| `Jf` | free-current density | A/m^2 | vector |
| `C` | oriented closed contour | m | coordinate |
| `dl` | oriented line increment | m | vector |
| `Ifenc` | free current through compatible surface | A | scalar |

**Conditions and domain**

- Stationary fields; displacement current negligible; contour and normal follow right-hand orientation.

**Derivation or proof guide**

1. Apply Stokes theorem to curl H=Jf.
2. Integrate current density over the spanning surface.

**Worked example**

Inputs: Ienc=3 A; circular contour radius=0.1 m with cylindrical symmetry

1. H is constant and tangential.
2. Divide 3 A by 2*pi*0.1 m.

Result: H=4.77465 A/m; units: A/m

**Limits and counterchecks**

- Zero enclosed current gives zero circulation, not necessarily H=0 everywhere.

**Common mistakes**

- Ampere law does not justify constant H on a nonsymmetric contour.

Source records: `mag-src-mit-vector`.

### Long-solenoid interior estimate — `mag-f-solenoid`

Status: approximation.

$$
B\simeq\mu_0 n I
$$

Turns per unit length set the ideal long air-core coil field.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `mu0` | vacuum magnetic permeability, measured CODATA constant | H/m | constant |
| `n` | turn density | 1/m | scalar |
| `I` | coil current | A | scalar |
| `B` | interior axial field | T | scalar |

**Conditions and domain**

- Length much larger than radius, observation away from ends, air core, negligible winding thickness.

**Derivation or proof guide**

1. Choose an Ampere rectangle along the interior and remote exterior.
2. Neglect exterior contribution and count n*l turns.

**Worked example**

Inputs: n=1000/m; I=0.1 A

1. Compute mu0*100 A/m.

Result: B≈0.125664 mT; units: T

**Limits and counterchecks**

- At an ideal long coil end the on-axis field is about half the deep-interior value.

**Common mistakes**

- Real coil heating, fringe fields and magnetic core saturation are separate calculations.

Source records: `mag-src-mit-vector`.

### Macroscopic B–H–M relation — `mag-f-bh`

Status: established-model.

$$
\mathbf B=\mu_0(\mathbf H+\mathbf M)
$$

Magnetization is magnetic moment per material volume; the relation defines H in SI.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `mu0` | vacuum magnetic permeability, measured CODATA constant | H/m | constant |
| `B` | magnetic induction | T | vector |
| `H` | field intensity | A/m | vector |
| `M` | magnetization | A/m | vector |

**Conditions and domain**

- Macroscopic SI fields defined at compatible coarse-graining scale.

**Derivation or proof guide**

1. Separate microscopic current into free and magnetization contributions.
2. Define H=B/mu0−M; no linear material law is assumed.

**Worked example**

Inputs: Collinear H=100 A/m and M=900 A/m

1. Sum H+M=1000 A/m.

Result: B=1.256637 mT; units: T

**Limits and counterchecks**

- For M=0, vacuum B=mu0 H; at H=0 an ordered sample can have M≠0.

**Common mistakes**

- B and H do not have the same SI units; B=mu H additionally assumes a constitutive law.

Source records: `mag-src-mit-energy`.

### Volume magnetization current — `mag-f-bound-volume`

Status: established-model.

$$
\mathbf J_b=\nabla\times\mathbf M
$$

Spatially varying magnetization has an equivalent bound volume current.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Jb` | bound volume current density | A/m^2 | vector |
| `M` | magnetization | A/m | vector |
| `nabla` | spatial derivative | 1/m | operator |

**Conditions and domain**

- Continuum magnetization differentiable inside the material; add interface surface currents separately.

**Derivation or proof guide**

1. Represent localized magnetic moments as small current loops.
2. Interior loop contributions cancel except where magnetization varies.

**Worked example**

Inputs: M=(0,0,a*x), a=1000 A/m^2

1. Curl gives Jb_y=−dMz/dx.

Result: Jb=(0,−1000,0) A/m²; units: A/m^2

**Limits and counterchecks**

- Uniform M has zero volume curl but generally nonzero surface current.

**Common mistakes**

- Zero Jb in the bulk does not imply an unmagnetized body.

Source records: `mag-src-mit-energy`.

### Surface magnetization current — `mag-f-bound-surface`

Status: established-model.

$$
\mathbf K_b=\mathbf M\times\hat{\mathbf n}
$$

The boundary current closes magnetization loops at an interface.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Kb` | bound surface current density | A/m | vector |
| `M` | magnetization inside relative to outside | A/m | vector |
| `n` | outward unit surface normal | dimensionless | vector |

**Conditions and domain**

- Use the magnetization jump if both sides are magnetic; orientation is outward from the chosen body.

**Derivation or proof guide**

1. Integrate volume curl through an infinitesimal interface layer.
2. The normal derivative of the magnetization step produces a surface sheet.

**Worked example**

Inputs: M=1000 zhat A/m; surface normal=xhat

1. zhat cross xhat = yhat.

Result: Kb=1000 yhat A/m; units: A/m

**Limits and counterchecks**

- A face normal parallel to M carries no equivalent surface current.

**Common mistakes**

- The order M cross n matters; reversing it reverses circulation.

Source records: `mag-src-mit-energy`.

### Far-field magnetic dipole — `mag-f-dipole`

Status: approximation.

$$
\mathbf B=\frac{\mu_0}{4\pi r^3}[3(\mathbf m\cdot\hat{\mathbf r})\hat{\mathbf r}-\mathbf m]
$$

A localized current distribution has a leading magnetic dipole term.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `mu0` | vacuum magnetic permeability, measured CODATA constant | H/m | constant |
| `m` | magnetic dipole moment | A m^2 | vector |
| `r` | distance from source centre | m | scalar |
| `rhat` | unit displacement | dimensionless | vector |
| `B` | dipole field | T | vector |

**Conditions and domain**

- r much larger than source extent; outside the source in vacuum.

**Derivation or proof guide**

1. Expand the localized vector potential at large distance.
2. The closed-current monopole term vanishes; curl the leading moment term.

**Worked example**

Inputs: m=0.1 A m²; axial r=0.1 m

1. On axis B=mu0*2m/(4*pi*r³).

Result: B=20 microtesla; units: T

**Limits and counterchecks**

- At the equator the field points opposite m with half the axial magnitude.

**Common mistakes**

- The singular point-dipole field cannot describe the source interior.

Source records: `mag-src-mit-vector`.

### Dipole torque and energy — `mag-f-torque`

Status: established-model.

$$
\boldsymbol\tau=\mathbf m\times\mathbf B,\quad U=-\mathbf m\cdot\mathbf B
$$

A fixed permanent dipole tends to align with the applied field.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `tau` | mechanical torque | N m | vector |
| `m` | fixed dipole moment | A m^2 | vector |
| `B` | external field excluding self field | T | vector |
| `U` | orientation-dependent potential energy | J | scalar |

**Conditions and domain**

- Small fixed moment in a field uniform over the dipole; induced moments require material work accounting.

**Derivation or proof guide**

1. Sum Lorentz forces around a small loop.
2. Integrate torque against angle to obtain U=−mB cos(theta).

**Worked example**

Inputs: m=0.01 A m²; B=0.1 T; perpendicular orientation

1. Torque magnitude=mB; aligned energy=−mB.

Result: Torque=0.001 N m; aligned U=−0.001 J; units: N m; J

**Limits and counterchecks**

- Aligned torque is zero although energy is minimal, not zero by necessity.

**Common mistakes**

- An induced moment may introduce a factor1/2 in energy after its formation is included.

Source records: `mag-src-mit-energy`.

### Force on a fixed dipole — `mag-f-force`

Status: established-model.

$$
\mathbf F=\nabla(\mathbf m\cdot\mathbf B)
$$

The gradient of dipole potential gives force when its moment is fixed.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `F` | force on dipole | N | vector |
| `m` | fixed moment | A m^2 | vector |
| `B` | external induction | T | vector |
| `nabla` | position gradient | 1/m | operator |

**Conditions and domain**

- Small rigid moment, quasistatic external field, derivatives at fixed m.

**Derivation or proof guide**

1. Use F=−gradient U with U=−m dot B.
2. Keep self field and induced-response work outside this simplified potential.

**Worked example**

Inputs: mz=0.01 A m²; dBz/dz=2 T/m

1. Multiply mz by axial field gradient.

Result: Fz=0.02 N; units: N

**Limits and counterchecks**

- A uniform field can exert torque but gives no translational dipole force.

**Common mistakes**

- A field magnitude alone is insufficient to determine lifting force.

Source records: `mag-src-mit-energy`.

### Magnetic flux — `mag-f-flux`

Status: established-model.

$$
\Phi_B=\int_S\mathbf B\cdot d\mathbf a
$$

Flux is the oriented surface integral, not B multiplied by any convenient area.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `PhiB` | magnetic flux through chosen oriented surface | Wb | scalar |
| `B` | induction | T | vector |
| `da` | oriented area element | m^2 | vector |

**Conditions and domain**

- A defined surface and normal; B and geometry may vary across it.

**Derivation or proof guide**

1. Sum infinitesimal normal field contributions.
2. For a uniform field and flat area, obtain BA cos(theta).

**Worked example**

Inputs: B=0.2 T; A=0.01 m²; field at60degrees to normal

1. cos60=0.5.

Result: Phi=0.001 Wb; units: Wb

**Limits and counterchecks**

- A surface parallel to field has zero flux despite nonzero B.

**Common mistakes**

- Angle is measured from the normal, not from the surface plane.

Source records: `mag-src-mit-induction`.

### Oriented moving-loop Faraday law — `mag-f-faraday`

Status: established-model.

$$
\mathcal E=\oint_{C(t)}(\mathbf E+\mathbf v\times\mathbf B)\cdot d\boldsymbol\ell=-\frac{d\Phi_B}{dt}
$$

Electric and motional contributions give the emf around the actual moving material loop.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `emf` | oriented electromotive force | V | scalar |
| `E` | electric field | V/m | vector |
| `v` | material-loop velocity | m/s | vector |
| `B` | induction | T | vector |
| `dl` | oriented circuit element | m | vector |
| `PhiB` | flux through compatible moving surface | Wb | scalar |
| `t` | time | s | coordinate |

**Conditions and domain**

- A well-defined material circuit and right-hand orientation; ideal thin circuit approximation.

**Derivation or proof guide**

1. Combine local curl E=−partial B/partial t with the moving-surface transport theorem.
2. The boundary motion term is v cross B, not an extra energy source.

**Worked example**

Inputs: Stationary loop, flux rises by0.003 Wb over0.1 s

1. dPhi/dt=0.03 Wb/s; apply minus sign.

Result: emf=−0.03 V for the chosen positive circulation; units: V

**Limits and counterchecks**

- Steady B can induce emf if the loop area/orientation changes.

**Common mistakes**

- Reversing the chosen normal reverses both flux and emf sign consistently.

Source records: `mag-src-mit-induction`.

### Ampère–Maxwell law — `mag-f-maxwell`

Status: established-model.

$$
\nabla\times\mathbf H=\mathbf J_f+\frac{\partial\mathbf D}{\partial t}
$$

Free current and displacement-current density both source the curl of H.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `H` | field intensity | A/m | vector |
| `Jf` | free-current density | A/m^2 | vector |
| `D` | electric displacement | C/m^2 | vector |
| `t` | time | s | coordinate |
| `nabla` | spatial derivative | 1/m | operator |

**Conditions and domain**

- Macroscopic Maxwell equations with polarization placed in D.

**Derivation or proof guide**

1. Add displacement current to preserve free-charge continuity.
2. Taking divergence gives divergence Jf+partial rho_f/partial t=0 using divergence D=rho_f.

**Worked example**

Inputs: Charging capacitor: dD/dt=2 A/m² over0.01 m²

1. Integrate displacement current density over gap area.

Result: Displacement current=0.02 A; units: A

**Limits and counterchecks**

- The term may be negligible in a specific MQS limit, not identically absent.

**Common mistakes**

- Displacement current is not a flow of free charges across an ideal vacuum capacitor gap.

Source records: `mag-src-mit-energy`.

### Vacuum Poynting theorem — `mag-f-poynting`

Status: established-model.

$$
\partial_t u+\nabla\cdot\mathbf S=-\mathbf J\cdot\mathbf E,\quad\mathbf S=\mathbf E\times\mathbf H
$$

Field storage plus outward electromagnetic flux equals negative work rate on matter.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `u` | vacuum electromagnetic energy density | J/m^3 | scalar |
| `S` | Poynting energy flux | W/m^2 | vector |
| `J` | material current density | A/m^2 | vector |
| `E` | electric field | V/m | vector |
| `H` | magnetic field intensity | A/m | vector |
| `t` | time | s | coordinate |
| `nabla` | spatial derivative | 1/m | operator |

**Conditions and domain**

- Vacuum fields with material currents treated explicitly; material storage needs a consistent constitutive energy model.

**Derivation or proof guide**

1. Dot Ampère–Maxwell with E and Faraday with H.
2. Subtract using divergence(E cross H)=H dot curl E−E dot curl H.

**Worked example**

Inputs: Control volume: inward flux3 W; stored-energy rise1 W

1. Outward integrated S=−3 W; dU/dt=1 W.
2. Work on matter=3−1.

Result: Matter receives2 W; units: W

**Limits and counterchecks**

- A steady state can have nonzero energy flux while storage is constant.

**Common mistakes**

- Field enhancement is not net output; include every boundary port and initial storage.

Source records: `mag-src-mit-energy`.

### Vacuum field-energy density — `mag-f-density`

Status: established-model.

$$
u=\frac{\epsilon_0 E^2}{2}+\frac{B^2}{2\mu_0}
$$

Quadratic vacuum storage follows from reversible field work.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `mu0` | vacuum magnetic permeability, measured CODATA constant | H/m | constant |
| `epsilon0` | vacuum electric permittivity | F/m | constant |
| `E` | electric field magnitude | V/m | scalar |
| `B` | magnetic induction magnitude | T | scalar |
| `u` | field energy per volume | J/m^3 | scalar |

**Conditions and domain**

- Vacuum or a specified linear nondispersive analogue; not a general hysteretic-material formula.

**Derivation or proof guide**

1. Integrate E dD and H dB along a reversible constitutive path.
2. In vacuum D=epsilon0 E and H=B/mu0.

**Worked example**

Inputs: E=0; B=0.01 T in volume0.001 m³

1. Magnetic density=B²/(2mu0)=39.7887 J/m³.

Result: Stored magnetic energy=0.0397887 J; units: J

**Limits and counterchecks**

- Storage vanishes quadratically as B→0.

**Common mistakes**

- Using B²/(2mu) in a nonlinear hysteretic core can give incorrect material energy accounting.

Source records: `mag-src-mit-energy`.

### Passive inductor and winding budget — `mag-f-inductor`

Status: established-model.

$$
v=L\dot i+Ri,\quad vi=\frac{d}{dt}\frac{Li^2}{2}+Ri^2
$$

Source power splits into changing magnetic storage and nonnegative winding dissipation.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `v` | passive-sign terminal voltage | V | scalar |
| `i` | current entering positive terminal | A | scalar |
| `L` | constant inductance | H | coupling |
| `R` | nonnegative winding resistance | ohm | scalar |
| `t` | time | s | coordinate |

**Conditions and domain**

- L positive and constant, R≥0, no additional coupled or powered ports.

**Derivation or proof guide**

1. Multiply voltage equation by current.
2. Use L i di/dt=d(Li²/2)/dt.

**Worked example**

Inputs: L=0.1 H; i rises0→2 A; R=0 for illustrative storage

1. Ufinal=0.5*0.1*4.

Result: Input work=0.2 J; no continuous output from a fixed stored state; units: J

**Limits and counterchecks**

- With source off, a resistor can drain initial energy but cannot replenish it.

**Common mistakes**

- A changing L introduces mechanical/coupling work; do not omit it.

Source records: `mag-src-mit-energy`.

### Cycle work in magnetic material — `mag-f-hysteresis`

Status: approximation.

$$
w_{cycle}=\oint\mathbf H\cdot d\mathbf B
$$

An oriented quasistatic B–H loop gives magnetic work per sample volume for a completed cycle.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `wcycle` | net supplied work per cycle per volume | J/m^3 | scalar |
| `H` | internal field intensity | A/m | vector |
| `B` | induction | T | vector |

**Conditions and domain**

- Closed periodic cycle, consistent internal field and sample volume; separate nonmagnetic apparatus losses.

**Derivation or proof guide**

1. Integrate local magnetic work H dot dB.
2. Reversible storage returns to its initial value after a cycle, leaving net dissipative work.

**Worked example**

Inputs: Rectangular scalar loop: coercive Hc=100 A/m; remanent Br=0.5 T

1. Oriented area magnitude=4 Hc Br.

Result: Dissipated work=200 J/m³ per cycle under this loop idealization; units: J/m^3

**Limits and counterchecks**

- A reversible single-valued path traversed forward and back encloses zero area.

**Common mistakes**

- A counterclockwise plotted loop may change algebraic sign; passivity uses work supplied to matter.

Source records: `mag-src-mit-energy`.

### Ellipsoidal internal-field correction — `mag-f-demag`

Status: approximation.

$$
H_{int}=H_{app}-NM,\quad M=\frac{\chi H_{app}}{1+N\chi}
$$

A uniform ellipsoid gives a closed correction for reversible scalar susceptibility.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Hint` | internal field along principal axis | A/m | scalar |
| `Happ` | applied field | A/m | scalar |
| `N` | SI demagnetizing factor | dimensionless | scalar |
| `M` | magnetization | A/m | scalar |
| `chi` | intrinsic scalar susceptibility | dimensionless | coupling |

**Conditions and domain**

- Uniform ellipsoid, principal-axis drive, linear reversible medium; SI factors sum to1.

**Derivation or proof guide**

1. Combine demagnetizing field −NM with M=chi Hint.
2. Solve the one-variable linear equation for M.

**Worked example**

Inputs: Sphere N=1/3; chi=3; Happ=100 A/m

1. Denominator=1+1=2.

Result: M=150 A/m and Hint=50 A/m; units: A/m

**Limits and counterchecks**

- For chi→0, M≈chi Happ; large chi is shape-limited.

**Common mistakes**

- CGS demagnetizing factors can sum to4pi; do not mix conventions.

Source records: `mag-src-mit-energy`.

### Weak-field Curie susceptibility — `mag-f-curie`

Status: approximation.

$$
\chi=\frac{\mu_0 n\mu^2}{3k_B T}
$$

Independent isotropically orientable moments respond linearly when thermal energy dominates alignment.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `mu0` | vacuum magnetic permeability, measured CODATA constant | H/m | constant |
| `n` | number density of moments | 1/m^3 | scalar |
| `mu` | moment magnitude | A m^2 | scalar |
| `kB` | Boltzmann constant | J/K | constant |
| `T` | absolute temperature | K | scalar |
| `chi` | small-field volume susceptibility | dimensionless | scalar |

**Conditions and domain**

- Noninteracting moments in weak field mu B≪kB T; classical orientation or appropriate quantum effective moment.

**Derivation or proof guide**

1. For classical isotropic independent moments use x=mu B/(kB T) and Z_orientation=4pi sinh(x)/x. Its mean axial moment is mu[coth(x)−1/x].
2. Expand coth(x)−1/x=x/3+O(x³), multiply by number density, and use B≈mu0 H in this weak-response limit. This is an explanatory derivation, distinct from the source’s two-state Ising normalization.

**Worked example**

Inputs: n=1e28/m³; mu=9.274e-24 A m²; T=300 K

1. Use kB=1.380649e-23 J/K.

Result: chi≈8.70e-5; units: dimensionless

**Limits and counterchecks**

- The expression cannot be extrapolated to T=0 or saturation.

**Common mistakes**

- It is not a ferromagnetic hysteresis law and does not include exchange correlations.
- An Ising two-state moment has a different weak-field angular factor; do not import its normalized B coupling as SI tesla.

Source records: `mag-src-tong-phase`.

### Curie–Weiss phenomenology — `mag-f-cw`

Status: approximation.

$$
\chi=\frac{C}{T-\theta}
$$

A molecular-field correction shifts the Curie-law denominator.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `chi` | uniform susceptibility | dimensionless | scalar |
| `C` | Curie constant | K | coupling |
| `T` | temperature | K | scalar |
| `theta` | Weiss intercept | K | scalar |

**Conditions and domain**

- Paramagnetic regime sufficiently far from transitions; fitted C and theta are model-dependent.

**Derivation or proof guide**

1. Assume an effective field H+lambda M and insert the Curie response.
2. Solve for M/H and absorb molecular-field coefficient into theta.

**Worked example**

Inputs: C=0.1 K; T=300 K; theta=50 K

1. Compute0.1/(300−50).

Result: chi=0.0004; units: dimensionless

**Limits and counterchecks**

- theta=0 recovers Curie behavior; the denominator divergence is not a literal finite-sample infinity.

**Common mistakes**

- Negative theta suggests dominant AFM correlations, not proof of a spin liquid or an ordering temperature.

Source records: `mag-src-tong-phase`.

### Heisenberg exchange convention — `mag-f-heisenberg`

Status: established-model.

$$
\mathcal H=J\sum_{\langle ij\rangle}\mathbf S_i\cdot\mathbf S_j
$$

With this plus-sign convention, positive J favors antiparallel spin correlations.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `H` | model Hamiltonian | J | operator |
| `J` | nearest-neighbor exchange energy, positive AFM | J | coupling |
| `Si` | dimensionless spin operator at site i | dimensionless | operator |
| `Sj` | spin at neighboring site j | dimensionless | operator |
| `ij` | once-counted nearest-neighbor bond | dimensionless | coordinate |

**Conditions and domain**

- Specify lattice, spin magnitude, boundary and omitted anisotropy/dipolar terms.

**Derivation or proof guide**

1. Reduce an electronic low-energy problem to spin degrees of freedom under declared assumptions.
2. For two spin1/2 particles, S1 dot S2 has eigenvalues−3/4 and+1/4.

**Worked example**

Inputs: One bond J=1 meV

1. Singlet energy=−0.75 meV; triplet=+0.25 meV.

Result: Singlet–triplet gap=1 meV=1.602176634e-22 J; units: J

**Limits and counterchecks**

- For J<0 the triplet is lower in this convention.

**Common mistakes**

- Some authors write−J S dot S and reverse the meaning of positive J.

Source records: `mag-src-qsl`, `mag-src-tong-phase`.

### Classical triangular AFM counterexample — `mag-f-triangle`

Status: conditional-result.

$$
E=J(\mathbf s_1\cdot\mathbf s_2+\mathbf s_2\cdot\mathbf s_3+\mathbf s_3\cdot\mathbf s_1)
$$

Three unit spins cannot make all three AFM bonds antiparallel.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `E` | three-bond energy | J | scalar |
| `J` | positive classical AFM coupling | J | coupling |
| `si` | classical unit spin vector | dimensionless | vector |

**Conditions and domain**

- Classical isotropic spins on a single triangular plaquette, zero field.

**Derivation or proof guide**

1. Write E=J(|s1+s2+s3|²−3)/2.
2. The lower bound occurs when the three vectors sum to zero.

**Worked example**

Inputs: J=1 energy unit; coplanar angles0,120,240degrees

1. Each pair dot product=−1/2.

Result: Emin=−1.5 J rather than the impossible−3 J; units: J

**Limits and counterchecks**

- The 120degree classical ground state is ordered; frustration alone is not a quantum-spin-liquid proof.

**Common mistakes**

- Do not transfer a three-site classical minimum to an infinite quantum lattice without analysis.

Source records: `mag-src-qsl`.

### Gilbert dynamics with positive gamma convention — `mag-f-llg`

Status: established-model.

$$
\dot{\mathbf m}=-\frac{\gamma}{1+\alpha^2}[\mathbf m\times\mathbf B_{eff}+\alpha\mathbf m\times(\mathbf m\times\mathbf B_{eff})]
$$

A unit magnetization precesses and damps with a declared positive gyromagnetic magnitude.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `m` | unit magnetization vector | dimensionless | state |
| `gamma` | positive gyromagnetic magnitude | rad/(T s) | constant |
| `alpha` | nonnegative Gilbert damping | dimensionless | coupling |
| `Beff` | effective induction including selected energy terms | T | vector |
| `t` | time | s | coordinate |

**Conditions and domain**

- Fixed saturation magnitude; differentiable effective energy; torque sources and temperature terms must be added explicitly.

**Derivation or proof guide**

1. Solve Gilbert implicit equation dm/dt=−gamma m cross B+alpha m cross dm/dt.
2. Use m dot dm/dt=0 to invert its tangent-plane operator.

**Worked example**

Inputs: alpha=0; Bz=0.1 T; gamma=1.760e11 rad/(T s)

1. Angular rate=gamma B=1.760e10 rad/s; divide by2pi.

Result: Precession frequency≈2.801 GHz; units: Hz

**Limits and counterchecks**

- With alpha=0 and static energy, precession conserves energy; alpha>0 removes energy for the consistent convention.

**Common mistakes**

- The selected MuMax paper prints a plus-prefactor gamma_LL form; this entry chooses positive gamma and an explicit minus sign. Check the source convention and actual precession direction before converting symbols.

Source records: `mag-src-mumax`.

### Continuum exchange energy and effective field — `mag-f-exchange`

Status: established-model.

$$
E_{ex}=\int A|\nabla\mathbf m|^2dV,\quad\mathbf B_{ex}=\frac{2A}{M_s}\nabla^2\mathbf m
$$

A smooth magnetization texture costs gradient energy and creates a restoring exchange field.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Eex` | exchange energy | J | scalar |
| `A` | exchange stiffness, not current | J/m | coupling |
| `m` | unit magnetization | dimensionless | state |
| `V` | magnetic region | m^3 | coordinate |
| `Ms` | saturation magnetization | A/m | scalar |
| `Bex` | effective exchange induction | T | vector |
| `nabla` | spatial derivative | 1/m | operator |

**Conditions and domain**

- Constant A and Ms; slowly varying texture; appropriate fixed or natural boundaries.

**Derivation or proof guide**

1. Vary the gradient functional and integrate by parts.
2. Use Beff=−(1/Ms) deltaE/deltam as a volume functional derivative.

**Worked example**

Inputs: A=1e-11 J/m; sinusoidal wave k=1e7/m; Ms=8e5 A/m

1. The exchange-field scale is2Ak²/Ms.

Result: Field scale=0.0025 T; units: T

**Limits and counterchecks**

- Uniform m has zero exchange energy in this reference.

**Common mistakes**

- A mesh that cannot resolve rotation between cells misrepresents this continuum model.

Source records: `mag-src-mumax`.

### Uniaxial anisotropy convention — `mag-f-anisotropy`

Status: established-model.

$$
w_K=K[1-(\mathbf m\cdot\hat{\mathbf u})^2]
$$

Positive K in this convention favors alignment along either easy-axis direction.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `wK` | anisotropy energy density | J/m^3 | scalar |
| `K` | uniaxial anisotropy coefficient | J/m^3 | coupling |
| `m` | unit magnetization | dimensionless | state |
| `u` | unit easy axis | dimensionless | vector |

**Conditions and domain**

- One uniaxial contribution with a chosen zero of energy; other anisotropies may coexist.

**Derivation or proof guide**

1. Expand a time-reversal-even scalar energy in the axis projection.
2. Subtract a constant so aligned states have zero energy.

**Worked example**

Inputs: K=1e5 J/m³; m at45degrees to u

1. Projection squared=1/2.

Result: wK=5e4 J/m³; units: J/m^3

**Limits and counterchecks**

- Parallel and antiparallel easy-axis states are degenerate under this term alone.

**Common mistakes**

- A negative coefficient changes the easy directions; do not infer them from the symbol K alone.

Source records: `mag-src-mumax`.

### Interfacial DMI energy convention — `mag-f-dmi`

Status: established-model.

$$
w_D=D[m_z\nabla\cdot\mathbf m-(\mathbf m\cdot\nabla)m_z]
$$

An inversion-asymmetric interfacial invariant favors one texture chirality.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `wD` | DMI energy per volume in effective thin-film convention | J/m^3 | scalar |
| `D` | effective interfacial DMI coefficient | J/m^2 | coupling |
| `m` | unit magnetization | dimensionless | state |
| `nabla` | in-plane gradient only | 1/m | operator |
| `mz` | out-of-plane component | dimensionless | scalar |

**Conditions and domain**

- Thin-film interfacial symmetry; derivatives x,y only; boundary terms and normal orientation matter.

**Derivation or proof guide**

1. Construct a scalar linear in gradients allowed by interfacial symmetry.
2. A functional variation generates a chiral field plus nontrivial boundary conditions.

**Worked example**

Inputs: One-dimensional cycloid m=(sin(qx),0,cos(qx)); q=1e7/m; D=1e-3 J/m²

1. Substitution gives wD=Dq for this convention.

Result: wD=1e4 J/m³; reversing q reverses the sign; units: J/m^3

**Limits and counterchecks**

- D=0 restores degeneracy of opposite chiralities for this term.

**Common mistakes**

- Bulk D m dot curl m is a different invariant; surface D_s in J/m must be divided by thickness to compare this effective D.

Source records: `mag-src-mumax`.

### Magnetostatic exchange length — `mag-f-lex`

Status: approximation.

$$
\ell_{ex}=\sqrt{\frac{2A}{\mu_0 M_s^2}}
$$

Exchange and magnetostatic energy density scales define a useful resolution length.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `mu0` | vacuum magnetic permeability, measured CODATA constant | H/m | constant |
| `A` | exchange stiffness | J/m | coupling |
| `Ms` | saturation magnetization | A/m | scalar |
| `lex` | exchange length | m | scalar |

**Conditions and domain**

- Continuum ferromagnet; a characteristic scale, not a universal sufficient mesh certificate.

**Derivation or proof guide**

1. Balance gradient density A/ell² against mu0 Ms²/2.
2. Solve for ell.

**Worked example**

Inputs: A=1.3e-11 J/m; Ms=8e5 A/m

1. Evaluate sqrt(2*1.3e-11/(mu0*(8e5)^2)).

Result: lex≈5.69 nm; units: m

**Limits and counterchecks**

- Increasing A broadens the scale; increasing Ms reduces it.

**Common mistakes**

- DMI, anisotropy, interfaces and convergence may require smaller cells than this estimate.

Source records: `mag-src-mumax`.

### Ideal one-dimensional domain wall — `mag-f-wall`

Status: approximation.

$$
\Delta=\sqrt{A/K},\quad\sigma=4\sqrt{AK}
$$

Exchange and positive uniaxial anisotropy set a wall parameter and surface energy.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Delta` | wall profile parameter, not necessarily reported full width | m | scalar |
| `A` | exchange stiffness | J/m | coupling |
| `K` | positive effective anisotropy | J/m^3 | coupling |
| `sigma` | wall energy per wall area | J/m^2 | scalar |

**Conditions and domain**

- One-dimensional180degree wall, no DMI or nonlocal demagnetizing correction; fixed opposite domains.

**Derivation or proof guide**

1. Minimize integral[A(theta prime)²+K sin²theta] dx.
2. First integral gives A(theta prime)²=K sin²theta; integrate the wall energy.

**Worked example**

Inputs: A=1e-11 J/m; K=1e5 J/m³

1. Delta=sqrt(1e-16)=1e-8 m.
2. sigma=4sqrt(1e-6).

Result: Delta=10 nm; sigma=0.004 J/m²; units: m; J/m^2

**Limits and counterchecks**

- K→0 broadens the wall and invalidates isolated localized-wall assumptions in a finite sample.

**Common mistakes**

- Some papers call pi*Delta the wall width; define the convention before comparison.

Source records: `mag-src-mumax`.

### Thin-film macrospin resonance — `mag-f-kittel`

Status: approximation.

$$
f=\frac{\gamma}{2\pi}\sqrt{B_H(B_H+\mu_0 M_{eff})}
$$

Two restoring-field curvatures set the in-plane uniform-mode frequency.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `mu0` | vacuum magnetic permeability, measured CODATA constant | H/m | constant |
| `f` | resonance frequency | Hz | scalar |
| `gamma` | positive gyromagnetic magnitude | rad/(T s) | constant |
| `BH` | applied induction-equivalent mu0 H in plane | T | scalar |
| `Meff` | effective magnetization including declared perpendicular anisotropy | A/m | scalar |

**Conditions and domain**

- Uniform saturated film, small-angle motion, negligible damping shift; geometry/anisotropy convention specified.

**Derivation or proof guide**

1. Linearize torque around the in-plane equilibrium.
2. Combine two coupled transverse equations to obtain the product of restoring fields.

**Worked example**

Inputs: gamma/(2pi)=28 GHz/T; BH=0.1 T; mu0 Meff=1 T

1. sqrt(0.1*1.1)=0.33166 T.

Result: f≈9.287 GHz; units: Hz

**Limits and counterchecks**

- Setting Meff=0 reduces the expression to the simple Larmor frequency.

**Common mistakes**

- Do not insert H in A/m into a formula whose field arguments are tesla.

Source records: `mag-src-mumax`.

### Exchange-dominated spin-wave limit — `mag-f-magnon`

Status: approximation.

$$
\omega(k)=\gamma[B_0+2Ak^2/M_s]
$$

A uniformly magnetized exchange continuum has quadratic wavevector dispersion in this limit.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `omega` | angular frequency | rad/s | scalar |
| `gamma` | positive gyromagnetic magnitude | rad/(T s) | constant |
| `B0` | uniform effective bias induction | T | scalar |
| `A` | exchange stiffness | J/m | coupling |
| `k` | wavevector magnitude | 1/m | coordinate |
| `Ms` | saturation magnetization | A/m | scalar |

**Conditions and domain**

- Small-amplitude mode, uniform equilibrium, neglect dipolar dispersion/anisotropy or absorb appropriate constants in B0.

**Derivation or proof guide**

1. Insert a transverse plane wave into the exchange field.
2. Linearize undamped LLG to get precession with the shifted restoring field.

**Worked example**

Inputs: A=1e-11 J/m; Ms=8e5 A/m; k=1e7/m; gamma/(2pi)=28 GHz/T

1. Exchange induction=0.0025 T.

Result: Exchange frequency shift=70 MHz; units: Hz

**Limits and counterchecks**

- As k→0 the exchange shift vanishes, but other gap terms may remain.

**Common mistakes**

- A measured film mode can be dipolar, exchange-dominated or mixed; this is not the entire magnon spectrum.

Source records: `mag-src-mumax`.

### Skyrmion degree — `mag-f-topology`

Status: conditional-result.

$$
Q=\frac{1}{4\pi}\int\mathbf m\cdot(\partial_x\mathbf m\times\partial_y\mathbf m)\,dxdy
$$

An oriented smooth two-dimensional spin texture maps the compactified plane to the unit sphere.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Q` | topological degree | dimensionless | scalar |
| `m` | smooth unit magnetization | dimensionless | state |
| `x` | in-plane coordinate | m | coordinate |
| `y` | second in-plane coordinate | m | coordinate |

**Conditions and domain**

- Fixed common boundary direction or compact domain; no singular point where |m| vanishes.

**Derivation or proof guide**

1. Integrate oriented area swept on the unit sphere and normalize by4pi.
2. For an axisymmetric texture reduce the integral to azimuthal winding and polar endpoint values.

**Worked example**

Inputs: Azimuthal winding n=1; core theta=pi; boundary theta=0

1. Q=(n/2)[cos(theta_core)−cos(theta_boundary)] in this coordinate convention.

Result: Q=−1; reversing orientation conventions can reverse its sign; units: dimensionless

**Limits and counterchecks**

- A uniform state has Q=0; a boundary-unfixed partial texture need not give an integer.

**Common mistakes**

- Topological charge alone does not guarantee infinite lifetime or free energy; boundaries and singular events permit changes.

Source records: `mag-src-skyrmion`.

### Spin Hall normalization — `mag-f-spin-hall`

Status: conditional-result.

$$
j_s^{(ang)}=\frac{\hbar}{2e}\theta_{SH}j_c
$$

A declared scalar spin Hall angle relates selected spin-angular-momentum flux to charge current density.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `js` | selected spin-angular-momentum flux component | J/m^2 | tensor |
| `jc` | charge-current density component | A/m^2 | scalar |
| `hbar` | reduced Planck constant | J s | constant |
| `e` | positive elementary charge | C | constant |
| `thetaSH` | signed conversion angle for stated axes | dimensionless | coupling |

**Conditions and domain**

- A specified material, transport geometry and spin polarization convention; tensor character suppressed only for one chosen component.
- For this scalar example define charge along+x, flux along+z and polarization along+y; the signed thetaSH is defined for exactly that ordered axis choice.

**Derivation or proof guide**

1. Express spin flux as angular momentum per transported carrier.
2. Define thetaSH by the ratio of normalized transverse spin flux to charge flux.

**Worked example**

Inputs: thetaSH=0.1; jc=1e10 A/m²

1. hbar/(2e)=3.29106e-16 J s/C.

Result: js=3.29106e-7 J/m² in the angular-momentum-flux convention; units: J/m^2

**Limits and counterchecks**

- Changing spin-flux convention to charge-equivalent A/m² removes the hbar/(2e) prefactor.

**Common mistakes**

- A spin current is not an extra source of energy; injector electrical power and interface losses remain.
- A spin Hall angle is a normalization-dependent conversion ratio, not an event probability; its magnitude is not universally bounded by1.

Source records: `mag-src-ruo2-2026`.

### Damping-like spin–orbit torque — `mag-f-sot`

Status: conditional-result.

$$
\dot{\mathbf m}_{DL}=\gamma B_{DL}\,\mathbf m\times(\mathbf s\times\mathbf m)
$$

A transverse angular-momentum input can reorient an ordered moment.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `m` | unit magnetization | dimensionless | state |
| `s` | unit injected spin-polarization axis | dimensionless | vector |
| `gamma` | positive gyromagnetic magnitude | rad/(T s) | constant |
| `BDL` | signed effective damping-like torque induction | T | coupling |
| `t` | time | s | coordinate |

**Conditions and domain**

- A selected torque term in an explicitly powered model; two-sublattice AFMs require the corresponding sublattice torques.

**Derivation or proof guide**

1. Resolve the injected spin into the tangent plane perpendicular to m.
2. Use m cross(s cross m)=s−(m dot s)m.

**Worked example**

Inputs: m=xhat; s=zhat; gamma=1.76e11; BDL=0.001 T

1. The tangent direction is zhat; instantaneous rate scale is gamma BDL.

Result: dm/dt=1.76e8 zhat per second for this isolated term; units: 1/s

**Limits and counterchecks**

- Collinear s and m give zero torque for this term.

**Common mistakes**

- Switching depends on competing fields, pulse shape and heating; a torque expression is not a complete switching prediction.

Source records: `mag-src-sot`.

### London penetration in a half-space — `mag-f-london`

Status: established-model.

$$
\nabla^2\mathbf B=\mathbf B/\lambda_L^2,\quad B(z)=B(0)e^{-z/\lambda_L}
$$

Local superfluid screening produces exponential equilibrium penetration in the simple half-space.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `B` | magnetic induction | T | vector |
| `z` | depth into superconducting half-space | m | coordinate |
| `lambdaL` | London penetration depth | m | scalar |
| `nabla` | spatial derivative | 1/m | operator |

**Conditions and domain**

- Static homogeneous London regime, planar surface, weak fields without vortices or strong nonlocality; bulk boundary B→0.

**Derivation or proof guide**

1. Combine curl js=−B/(mu0 lambdaL²) with stationary Ampere law and divergence B=0.
2. Select the decaying solution of the one-dimensional second-order equation.

**Worked example**

Inputs: B(0)=1 mT; lambdaL=100 nm; z=200 nm

1. The exponent is−2.

Result: B=0.135335 mT; units: T

**Limits and counterchecks**

- The growing exponential is excluded by the bulk boundary condition.

**Common mistakes**

- An ideal perfect conductor preserves initial flux; equilibrium Meissner expulsion needs more than infinite DC conductivity.

Source records: `mag-src-mit-london`.

### Superconducting flux quantum and fluxoid — `mag-f-fluxquantum`

Status: conditional-result.

$$
\Phi_0=\frac{h}{2e},\quad\Phi_B+\mu_0\lambda_L^2\oint\mathbf j_s\cdot d\boldsymbol\ell=n\Phi_0
$$

Single-valued pair phase quantizes a fluxoid, with magnetic flux alone recovered when the current term is negligible.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `mu0` | vacuum magnetic permeability, measured CODATA constant | H/m | constant |
| `Phi0` | pair flux quantum | Wb | constant |
| `h` | Planck constant | J s | constant |
| `e` | positive elementary charge | C | constant |
| `PhiB` | magnetic flux through contour | Wb | scalar |
| `lambdaL` | London penetration depth | m | scalar |
| `js` | supercurrent density | A/m^2 | vector |
| `dl` | oriented superconducting path element | m | vector |
| `n` | integer phase winding | dimensionless | scalar |

**Conditions and domain**

- Closed contour in a coherent superconducting region; conventional2e pairing assumed; finite kinetic-current correction retained.

**Derivation or proof guide**

1. Integrate the gauge-invariant phase-gradient relation around a closed loop.
2. Phase change is2pi n; retain both vector-potential and supercurrent terms.

**Worked example**

Inputs: h=6.62607015e-34 J s; e=1.602176634e-19 C; n=1; negligible current correction

1. Divide h by2e.

Result: Phi0=2.067833848e-15 Wb; units: Wb

**Limits and counterchecks**

- In thin/high-kinetic-inductance loops, flux need not equal nPhi0 even though fluxoid does.

**Common mistakes**

- Flux quantization is not a universal quantization of arbitrary classical coil flux.

Source records: `mag-src-mit-fluxoid`, `mag-src-nist`.

### Ginzburg–Landau scale ratio — `mag-f-gl`

Status: approximation.

$$
\kappa=\lambda/\xi,\quad B_{c2}\simeq\frac{\Phi_0}{2\pi\xi^2}
$$

Penetration and coherence scales organize superconducting interfaces and the orbital upper critical field.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `kappa` | GL parameter | dimensionless | scalar |
| `lambda` | penetration depth in the model | m | scalar |
| `xi` | GL coherence length | m | scalar |
| `Bc2` | orbital upper critical induction | T | scalar |
| `Phi0` | pair flux quantum | Wb | constant |

**Conditions and domain**

- Conventional isotropic GL description near its controlled transition regime; orbital limit, neglect paramagnetic/multiband modifications.

**Derivation or proof guide**

1. Nondimensionalize the GL equations by lambda and xi.
2. Linearized order-parameter onset in a uniform field gives the orbital length condition.

**Worked example**

Inputs: lambda=100 nm; xi=10 nm; Phi0=2.067833848e-15 Wb

1. kappa=10; Bc2=Phi0/(2pi*1e-16 m²).

Result: kappa=10; Bc2≈3.29 T in this orbital approximation; units: dimensionless; T

**Limits and counterchecks**

- The GL interface crossover is kappa=1/sqrt2 under the standard isotropic premises.

**Common mistakes**

- A material measured far from Tc may require a microscopic theory; this is not its universal critical field.
- These sources support the Landau/phase and flux-quantum ingredients. A direct original GL/Hc2 source was not reviewed; the stated orbital formula is the explanatory linear-GL reconstruction, not a result inferred from the graphene preprint.

Source records: `mag-src-tong-phase`, `mag-src-mit-fluxoid`.

### SI magnetoelectric cross derivative — `mag-f-me`

Status: conditional-result.

$$
g_{ME}=-\alpha_{ij}E_iH_j,\quad P_i=\alpha_{ij}H_j,\quad\mu_0 M_j=\alpha_{ij}E_i
$$

A reciprocal static cross response follows from one explicitly chosen thermodynamic potential.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `mu0` | vacuum magnetic permeability, measured CODATA constant | H/m | constant |
| `gME` | magnetoelectric free-energy density term | J/m^3 | scalar |
| `alphaij` | linear SI magnetoelectric tensor in this E,H convention | s/m | tensor |
| `Ei` | electric field component | V/m | scalar |
| `Hj` | magnetic field-intensity component | A/m | scalar |
| `Pi` | electric polarization component | C/m^2 | scalar |
| `Mj` | magnetization component | A/m | scalar |
| `i,j` | Cartesian indices summed when repeated | dimensionless | coordinate |

**Conditions and domain**

- Equilibrium reversible small-field expansion at fixed declared thermodynamic variables; allowed tensor components depend on symmetry.

**Derivation or proof guide**

1. Use dg=−P dot dE−mu0 M dot dH for the selected material contribution.
2. Differentiate the bilinear cross term and equate mixed derivatives.

**Worked example**

Inputs: alpha_zz=1e-12 s/m; Hz=1e5 A/m; Ez=0

1. Pz=alpha Hz.

Result: Pz=1e-7 C/m²; units: C/m^2

**Limits and counterchecks**

- A coefficient defined using B or electric displacement instead of H/E has different factors and potentially units.

**Common mistakes**

- The layer-pseudospin polarizability in the selected bilayer paper is not silently identified with this bulk SI coefficient.
- Only for volumetric M and a fixed uniform constitutive D=epsilon E can alpha_(E,H)=mu0*epsilon*(partial M/partial D). A two-dimensional layer moment may additionally require a thickness normalization; none is silently supplied.

Source records: `mag-src-magnetoelectric`.

### NV axial Zeeman splitting — `mag-f-nv`

Status: approximation.

$$
\nu_\pm\simeq D\pm\frac{\gamma_e}{2\pi}B_\parallel
$$

A simple axial NV-center model converts a calibrated spin transition shift into a field projection.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `nuplus, numinus` | spin transition frequencies | Hz | scalar |
| `D` | zero-field splitting parameter, temperature dependent | Hz | coupling |
| `gammae` | positive electron gyromagnetic magnitude | rad/(T s) | constant |
| `Bparallel` | field projection along the known NV axis | T | scalar |

**Conditions and domain**

- Weak suitably aligned field, negligible transverse mixing/strain or independently calibrated corrections; approximate spin1 Hamiltonian.

**Derivation or proof guide**

1. Diagonalize D Sz²+gammae Bparallel Sz/(2pi) in frequency units.
2. Transition shifts are opposite for the m_s=±1 branches.

**Worked example**

Inputs: gammae/(2pi)=28 GHz/T; Bparallel=100 microtesla

1. Shift magnitude=28e9*1e-4 Hz.

Result: Each branch shifts2.8 MHz; branch separation changes5.6 MHz; units: Hz

**Limits and counterchecks**

- Temperature drift in D shifts both branches and can mimic single-line field changes.

**Common mistakes**

- One NV axis measures a projection, not an unconstrained three-component vector field.

Source records: `mag-src-inverse-nv`.

### Stray-field Fourier height filtering — `mag-f-height`

Status: conditional-result.

$$
\widetilde B(\mathbf k,z)=\widetilde B(\mathbf k,0)e^{-|\mathbf k|z}
$$

In a source-free half-space, lateral high-spatial-frequency magnetic structure decays with height.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Btilde` | lateral Fourier field amplitude under a fixed transform convention | T m^2 | state |
| `k` | lateral angular wavevector | 1/m | vector |
| `z` | height above planar source region | m | coordinate |

**Conditions and domain**

- Planar Fourier analysis in a homogeneous source-free half-space; choose the solution decaying at infinity.

**Derivation or proof guide**

1. A scalar magnetic potential satisfies Laplace equation above sources.
2. Fourier transform laterally to obtain partial_z² potential=|k|² potential.

**Worked example**

Inputs: Wavelength=100 nm; sensor height=50 nm

1. |k|z=2pi*50/100=pi.

Result: Amplitude attenuation=e^−pi≈0.04321; inverse amplification≈23.14; units: dimensionless amplitude ratio

**Limits and counterchecks**

- At k=0 the exponential is1, but boundary/source constraints can make particular uniform channels unobservable.

**Common mistakes**

- Exact back-propagation multiplies noise exponentially; regularization adds assumptions, not missing data.

Source records: `mag-src-inverse-nv`.

### Correlated first-order uncertainty propagation — `mag-f-uncertainty`

Status: approximation.

$$
u_y^2\simeq\sum_{ij}\frac{\partial f}{\partial x_i}\frac{\partial f}{\partial x_j}\operatorname{Cov}(x_i,x_j)
$$

A local sensitivity Jacobian propagates a declared input covariance into output variance.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `uy` | standard uncertainty of y | same as y | scalar |
| `f` | differentiable measurement function | declared output unit | operator |
| `xi` | input quantities | declared per input | scalar |
| `Cov` | input covariance, product of input units | unit(xi) unit(xj) | tensor |
| `i,j` | input indices | dimensionless | coordinate |

**Conditions and domain**

- Small enough uncertainties for linearization; covariance and model must be justified independently.

**Derivation or proof guide**

1. Taylor-expand output around nominal inputs.
2. Take variance of the linearized combination, retaining cross terms.

**Worked example**

Inputs: y=x1−x2; each standard uncertainty=1 microtesla; correlationrho=0.9

1. Variance=(1+1−2*0.9) microtesla²=0.2.

Result: uy≈0.447214 microtesla; units: T

**Limits and counterchecks**

- Perfect common-mode correlation cancels in a difference only for matched sensitivities.

**Common mistakes**

- Ignoring covariance can overstate or understate uncertainty; no automatic95percent confidence follows from an arbitrary bound.

Source records: `mag-src-gum`.

### Two-dipole observation matrix and an explicit kernel — `mag-f-inverse-witness`

Status: conditional-result.

$$
\mathbf y=K\mathbf m,\quad K=(c\;c),\quad\ker K=\operatorname{span}\{(1,-1)^T\}
$$

A centred Bz measurement cannot distinguish two equally oriented dipoles at mirror-symmetric known positions.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `y` | observed axial flux-density samples | T | vector |
| `K` | known dipole forward matrix for specified sensor/source geometry | T/(A m^2) | operator |
| `m` | two unknownz-directed dipole moments | A m^2 | state |
| `c` | common knownBz coupling coefficient at a symmetry-axis observation | T/(A m^2) | coupling |

**Conditions and domain**

- Two ideal point dipoles atx=±a,y=z=0 withfixedz orientation;point-dipole far-field premise;known a andsensorheight h.
- OneBz channel atx=y=0;the twounknowns are moments,notunknown positions/orientations.

**Derivation or proof guide**

1. The vacuum dipole kernel gives c=(mu0/4pi)(2h²−a²)/(a²+h²)^(5/2), wherea,h arelengths inmetres andmu0 isvacuum permeability.
2. Forc≠0 the1×2operator hasrank1andnullity1:K(1,−1)^T=0 although its onlyreturned singular value issqrt(2)|c|>0.

**Worked example**

Inputs: a=1m,h=2m;moments(2,1)A m²

1. c=1.2521980672e−8 T/(A m²);centredreadingdepends onlyonm1+m2.
2. AddBz atx=0.5m,z=2m:then the2×2matrixdeterminant is1.8688737689e−16[T/(A m²)]²andthe two-moment toy becomesinvertible.

Result: A singlemeasurement admits(2+t,1−t)for everyt;the off-axis secondmeasurementrecovers(2,1)withfloating errorbelow1e−12 inthis executedexample.; units: T;A m^2

**Limits and counterchecks**

- Repeatingcentredmeasurements atthreeheights2,3,4mstillhasrank1andnullity1becauseeachrow retains identicalcolumns.
- Choosingh=a/sqrt2makesc=0andthe singleobservationrank0;anunmentionedzero-coupling casewouldinvalidatethe rank1claim.

**Common mistakes**

- Full-rank forthe restrictedtwo-moment toydoesnotprove uniquenessofanarbitrarycontinuum vector magnetization.
- Invertibility isnot goodnoiseconditioning;report sensitivity,geometryuncertaintyandnoiseafterchoosing measurementunits/scales.

Source records: `mag-src-mit-vector`, `mag-src-inverse-nv`.


## Research paper evidence cards


### mag-paper-ruo2-null

**sourceId**: mag-src-ruo2-null

**status**: selected-text-review

**question**: A higher-rung r2SCAN-L calculation retains a nonmagnetic ideal bulk state while predicting strain/doping thresholds.

**method**: Selected sourceMethods:elk FP-LAPW;9×9×13k sampling;Liechtenstein+U/FLL;fixedJ=0.5eV;fixed-spin-moment comparison acrossfunctionals.

**result**: A higher-rung r2SCAN-L calculation retains a nonmagnetic ideal bulk state while predicting strain/doping thresholds.

**whatIsNew**: Source authors’ contribution: A higher-rung r2SCAN-L calculation retains a nonmagnetic ideal bulk state while predicting strain/doping thresholds.

**limitations**: FP-LAPW/functional and Hubbard-U-dependent results;finite Brillouin-zone sampling andfixed-spin-moment/local-sphere definition. No independentDFT rerun oruniversal experimental absence theorem.

**replication**: Not independently replicated or computationally reproduced in this atlas pass.

**nextQuestions**: Which independent measurement/model comparison could distinguish the principal competing explanation?
Are the specimen geometry, disorder, uncertainty and code/data sufficient for reproduction?


### mag-paper-moire

**sourceId**: mag-src-moire

**status**: abstract-only-review

**question**: Scanning single-spin magnetometry reports local FM/AFM regions with separate transition scales in twisted CrI3.

**method**: Author-reported experiment/model inspected through the abstract only.

**result**: Scanning single-spin magnetometry reports local FM/AFM regions with separate transition scales in twisted CrI3.

**whatIsNew**: Source authors’ contribution: Scanning single-spin magnetometry reports local FM/AFM regions with separate transition scales in twisted CrI3.

**limitations**: Abstract-only; raw noise spectra, structural reconstruction and model identification were not reanalysed.

**replication**: Not independently replicated or computationally reproduced in this atlas pass.

**nextQuestions**: Which independent measurement/model comparison could distinguish the principal competing explanation?
Are the specimen geometry, disorder, uncertainty and code/data sufficient for reproduction?


### mag-paper-inverse-nv

**sourceId**: mag-src-inverse-nv

**status**: selected-text-review

**question**: A GPU-assisted physics-informed reconstruction framework fits spatial magnetization to measured field maps.

**method**: Selected source sections describe the reported computational/experimental method; no independent rerun.

**result**: A GPU-assisted physics-informed reconstruction framework fits spatial magnetization to measured field maps.

**whatIsNew**: Source authors’ contribution: A GPU-assisted physics-informed reconstruction framework fits spatial magnetization to measured field maps.

**limitations**: Optimization and a physically constrained loss do not prove uniqueness of an unconstrained inverse problem.

**replication**: Not independently replicated or computationally reproduced in this atlas pass.

**nextQuestions**: Which independent measurement/model comparison could distinguish the principal competing explanation?
Are the specimen geometry, disorder, uncertainty and code/data sufficient for reproduction?


### mag-paper-sot

**sourceId**: mag-src-sot

**status**: abstract-only-review

**question**: The authors report current-direction-controlled ultrafast Néel-vector rotation in Mn2Au with optical readout.

**method**: Author-reported experiment/model inspected through the abstract only.

**result**: The authors report current-direction-controlled ultrafast Néel-vector rotation in Mn2Au with optical readout.

**whatIsNew**: Source authors’ contribution: The authors report current-direction-controlled ultrafast Néel-vector rotation in Mn2Au with optical readout.

**limitations**: Abstract-only; pulse energy, thermal controls, device yield and raw trajectories were not independently checked.

**replication**: Not independently replicated or computationally reproduced in this atlas pass.

**nextQuestions**: Which independent measurement/model comparison could distinguish the principal competing explanation?
Are the specimen geometry, disorder, uncertainty and code/data sufficient for reproduction?


### mag-paper-skyrmion

**sourceId**: mag-src-skyrmion

**status**: selected-text-review

**question**: The source reports single-pulse field-free writing/annihilation of skyrmion bubbles in engineered Co/Gd stacks.

**method**: Selected source sections describe the reported computational/experimental method; no independent rerun.

**result**: The source reports single-pulse field-free writing/annihilation of skyrmion bubbles in engineered Co/Gd stacks.

**whatIsNew**: Source authors’ contribution: The source reports single-pulse field-free writing/annihilation of skyrmion bubbles in engineered Co/Gd stacks.

**limitations**: Selected opening summary and supplementary dataset description; not full imaging/topology or lifetime validation.

**replication**: Not independently replicated or computationally reproduced in this atlas pass.

**nextQuestions**: Which independent measurement/model comparison could distinguish the principal competing explanation?
Are the specimen geometry, disorder, uncertainty and code/data sufficient for reproduction?


### mag-paper-qsl

**sourceId**: mag-src-qsl

**status**: selected-text-review

**question**: Neural quantum-state optimization and flux insertion favor a chiral spin-density wave over previously proposed plateau states.

**method**: Selected source sections describe the reported computational/experimental method; no independent rerun.

**result**: Neural quantum-state optimization and flux insertion favor a chiral spin-density wave over previously proposed plateau states.

**whatIsNew**: Source authors’ contribution: Neural quantum-state optimization and flux insertion favor a chiral spin-density wave over previously proposed plateau states.

**limitations**: Model/ansatz/finite-size-dependent theory; not a material proof and not an independent rerun.

**replication**: Not independently replicated or computationally reproduced in this atlas pass.

**nextQuestions**: Which independent measurement/model comparison could distinguish the principal competing explanation?
Are the specimen geometry, disorder, uncertainty and code/data sufficient for reproduction?


### mag-paper-magnetoelectric

**sourceId**: mag-src-magnetoelectric

**status**: selected-text-review

**question**: A theoretical layer-dipole response is introduced for PT-symmetric antiferromagnetic bilayers.

**method**: Selected source sections describe the reported computational/experimental method; no independent rerun.

**result**: A theoretical layer-dipole response is introduced for PT-symmetric antiferromagnetic bilayers.

**whatIsNew**: Source authors’ contribution: A theoretical layer-dipole response is introduced for PT-symmetric antiferromagnetic bilayers.

**limitations**: Its displacement-field/layer-pseudospin convention differs from bulk SI alpha_ij; selected theory only.

**replication**: Not independently replicated or computationally reproduced in this atlas pass.

**nextQuestions**: Which independent measurement/model comparison could distinguish the principal competing explanation?
Are the specimen geometry, disorder, uncertainty and code/data sufficient for reproduction?


### mag-paper-ruo2-2026

**sourceId**: mag-src-ruo2-2026

**status**: selected-text-review

**question**: THz conversion measurements are interpreted using separate spin and orbital injection, with no inverse altermagnetic spin-splitting evidence under controlled spin injection.

**method**: Selected PDF passages:THz emission polarity/thickness signatures withFe/Ni/Py injectors;RuO2(101)wedge films andCu-spacer angular controls.

**result**: Polarity/thickness and Cu-spacer controls distinguish spin/orbital conversion interpretations in the studied RuO2 heterostructures.

**whatIsNew**: Source authors separate spin/orbital injection signatures and use interface-spacer control to challenge a unique inverse-altermagnetic interpretation. Not a novelty certification.

**limitations**: No independent raw THz trace, calibration, supplement or transport-model fit reanalysis. The result concerns a specified specimen/channel and does not prove universal absence of magnetic order in all RuO2.

**replication**: Not independently replicated or computationally reproduced in this atlas pass.

**nextQuestions**: Which independent measurement/model comparison could distinguish the principal competing explanation?
Are the specimen geometry, disorder, uncertainty and code/data sufficient for reproduction?


### mag-paper-moire-2026

**sourceId**: mag-src-moire-2026

**status**: abstract-only-review

**question**: In-plane-field-enhanced superconductivity and unequal Fermi pockets are reported in17-layer rhombohedral graphene.

**method**: Author-reported experiment/model inspected through the abstract only.

**result**: In-plane-field-enhanced superconductivity and unequal Fermi pockets are reported in17-layer rhombohedral graphene.

**whatIsNew**: Source authors’ contribution: In-plane-field-enhanced superconductivity and unequal Fermi pockets are reported in17-layer rhombohedral graphene.

**limitations**: Abstract-only very recent preprint; magnon-assisted equal-spin pairing is a motivated scenario, not uniquely established.

**replication**: Not independently replicated or computationally reproduced in this atlas pass.

**nextQuestions**: Which independent measurement/model comparison could distinguish the principal competing explanation?
Are the specimen geometry, disorder, uncertainty and code/data sufficient for reproduction?


## Nested coverage map

- **Magnetism: fields, matter and controlled inference** (`mag-root`; reviewed): A multiscale map from current-generated fields to quantum materials, spin transport and calibrated measurement. Physical mechanisms and evidence status remain separate.
  - **Classical magnetic fields** (`mag-classical`; mapped): Currents, flux continuity, potentials and boundary-value problems.
  - **Induction and electromagnetic energy** (`mag-dynamics`; mapped): Time-dependent fields, motional circuits, local energy transfer and passive device budgets.
  - **Magnetic order and material response** (`mag-materials`; mapped): Response functions and microscopic interactions connect atomic moments to domains and phases.
  - **Low-dimensional and moiré magnets** (`mag-lowdim`; mapped): Dimensionality, anisotropy, stacking and correlations control order and textures.
  - **Spin transport and magnetic dynamics** (`mag-spintronics`; mapped): Angular momentum transfer, resonances, textures and wave-based information processing.
  - **Superconducting magnetic response** (`mag-superconduct`; mapped): Equilibrium flux exclusion, screening currents, vortices and critical scales.
  - **Magnetoelectric and hybrid systems** (`mag-coupled`; mapped): Cross responses need conjugate variables, symmetry and an external energy supply.
  - **Magnetometry and inverse inference** (`mag-metrology`; mapped): Measurements require channel models, geometry, calibration and identifiable source parameters.
  - **Computational magnetism** (`mag-computation`; mapped): Discretization, energy functionals, verification, uncertainty and reproducibility.
    - **Flux density and field intensity** (`mag-fields`; reviewed): B describes magnetic induction; H separates free current from macroscopic magnetization. Neither can be replaced by the other without a constitutive statement.
      - **Current distributions** (`mag-sources`; mapped): Line, surface and volume current idealizations have different supports and units.
        - **Steady current kernels** (`mag-steady`; mapped): Magnetostatics assumes stationary sources with consistent return currents.
          - **Biot–Savart reconstruction** (`mag-biot`; reviewed): The vector kernel weights each source element by orientation and distance; near-wire singularities reveal the idealization.
            - **Straight-wire symmetry** (`mag-wire`; reviewed): An infinitely long thin wire permits a closed-form azimuthal field; finite leads break that symmetry.
            - **Current-loop geometry** (`mag-loop`; reviewed): Axial loop fields provide a controlled route from a finite circuit to the far-field dipole.
          - **Ampèrian integral methods** (`mag-ampere`; reviewed): An integral law is always valid in its domain but solves a field only when symmetry controls the integrand.
            - **Solenoids and return flux** (`mag-solenoid`; reviewed): Long-coil interior estimates omit fringe fields and winding resistance.
      - **Vector potential and gauge** (`mag-potential`; mapped): A curl representation enforces flux continuity; gauge choice does not change B.
    - **Magnetic dipoles and force** (`mag-dipoles`; reviewed): Dipole approximations require source-target separation large relative to source extent.
      - **Bound versus free current** (`mag-bound`; reviewed): Magnetization produces volume curl and surface cross-product currents; classifications depend on material coarse graining.
      - **Interface boundary conditions** (`mag-boundary`; mapped): Normal B continuity and tangential H jumps encode flux conservation and free surface current.
    - **Faraday induction** (`mag-faraday`; reviewed): Changing flux and moving material circuits contribute to the same oriented emf.
      - **Motional electromagnetic circuits** (`mag-moving`; reviewed): The velocity in a circuit emf is the velocity of the material boundary, not a guessed wave velocity.
    - **Displacement current** (`mag-maxwell`; reviewed): A changing electric displacement repairs continuity and enables waves; quasistatics needs a scale argument.
    - **Local energy accounting** (`mag-energy`; reviewed): Poynting flux, storage and mechanical/Joule work identify where supplied energy goes.
      - **Passive ports and finite time** (`mag-passivity`; reviewed): Initial stored energy and all powered auxiliary ports belong in a finite-window budget.
      - **Hysteretic losses** (`mag-hysteresis`; reviewed): A loop measures cycle work only for declared field variables, sample volume and measurement conditions.
    - **Eddy currents and skin effect** (`mag-skin`; mapped): Diffusion and conductive loss can shift response peaks without adding an energy source.
    - **Macroscopic susceptibility** (`mag-response`; mapped): A scalar constant susceptibility is a restricted linear, reversible approximation.
      - **Demagnetizing fields** (`mag-demag`; reviewed): Applied and internal fields differ; ellipsoids supply a special uniform-field solution.
      - **Thermal paramagnetism** (`mag-paramag`; reviewed): Independent moments give a high-temperature weak-field Curie law, not a universal low-temperature law.
    - **Microscopic exchange** (`mag-exchange`; reviewed): An effective spin Hamiltonian represents electronic exchange after model reduction.
      - **Ordered phases** (`mag-ordered`; mapped): An order parameter and symmetry specify a phase more precisely than the presence of a magnetic signal.
        - **Ferromagnetism** (`mag-ferro`; mapped): Parallel order can form domains that hide a large local moment behind small net magnetization.
          - **Domains and walls** (`mag-domains`; mapped): Exchange, anisotropy and magnetostatics compete to set walls and domain patterns.
            - **Continuum wall profiles** (`mag-wallwidth`; reviewed): A one-dimensional wall width follows from a specific functional and boundary states.
        - **Antiferromagnetism** (`mag-afm`; mapped): Opposing sublattice moments require a Néel order parameter, not just net M.
        - **Ferrimagnetism and compensation** (`mag-ferri`; mapped): Unequal sublattices can compensate net magnetization or angular momentum at different temperatures.
      - **Frustrated interactions** (`mag-frustration`; reviewed): Not all preferred pairwise alignments can be simultaneously realized on a frustrated lattice.
        - **Quantum spin liquids** (`mag-qsl`; mapped): Absence of conventional order alone is insufficient; competing states and disorder must be tested.
        - **Altermagnetic symmetry** (`mag-altermagnets`; mapped): Some compensated collinear orders allow momentum-dependent nonrelativistic spin splitting.
          - **Material-specific RuO2 controversy** (`mag-ruo2`; mapped): Bulk magnetic order, thin-film structure, spin/orbital conversion and interfacial effects are separate claims.
        - **Criticality and finite-size scaling** (`mag-critical`; reviewed): Apparent transitions in finite systems require size, dimensionality and dynamical-time analysis.
    - **Two-dimensional order** (`mag-2d`; mapped): Continuous spin symmetry and short-range interactions restrict finite-temperature order; anisotropy changes the premises.
      - **van der Waals layers** (`mag-vdw`; mapped): Weak interlayer bonding permits assembly but does not make exchange or disorder negligible.
        - **Twist and stacking** (`mag-twist`; mapped): Twist changes local registry and therefore exchange, anisotropy and relaxation.
          - **Moiré supercell phase coexistence** (`mag-moirecells`; mapped): Spatially separated local phases and transition scales need resolved measurement rather than one averaged moment.
        - **Electrostatic tuning of magnets** (`mag-gating`; mapped): A gate can alter carriers, electric field and strain; these mechanisms must be discriminated.
    - **Spin–valley correlations** (`mag-valley`; mapped): Valley labels are electronic momentum-space degrees of freedom, not real-space locations.
      - **Magnetic parent states and pairing** (`mag-graphene`; mapped): Field-enhanced superconductivity and valley imbalance constrain mechanisms without proving one unique pairing theory.
    - **Magnetization dynamics** (`mag-llg`; reviewed): The sign convention for gyromagnetic ratio and choice of B or H must be explicit.
      - **Ferromagnetic resonance** (`mag-resonance`; reviewed): A resonance depends on effective-field curvature, damping, geometry and drive/readout channels.
        - **Magnonics** (`mag-magnonics`; mapped): Spin waves carry energy and angular momentum; excitation, propagation and detection losses remain.
          - **Exchange-dominated dispersion** (`mag-spinwave`; reviewed): A quadratic wavevector term is a limiting continuum result, not every film mode dispersion.
    - **Spin and orbital transport** (`mag-transport`; mapped): Spin, orbital and charge currents have distinct units and conversion mechanisms.
      - **Spin Hall conversion** (`mag-spinHall`; reviewed): A conversion angle is defined only after specifying current normalization and geometry.
        - **Spin–orbit torque switching** (`mag-sot`; reviewed): Coherent torque, heating and field-induced switching require separate controls.
    - **Chiral textures** (`mag-textures`; mapped): DMI, exchange, anisotropy and dipolar energy stabilize or destabilize different textures.
      - **Skyrmions and topological charge** (`mag-skyrmions`; reviewed): A continuum integer invariant requires smoothness and a compactified or fixed boundary.
        - **Optical writing of magnetic textures** (`mag-opticalwriting`; mapped): Laser pulses are an external energy input; field-free is not energy-free.
      - **Ultrafast Néel dynamics** (`mag-antiferrodynamics`; mapped): Two-sublattice exchange gives dynamics not captured by a single ferromagnetic macrospin.
    - **Meissner equilibrium response** (`mag-meissner`; mapped): Equilibrium flux expulsion differs from frozen flux in an ideal perfect conductor.
      - **London screening** (`mag-london`; reviewed): A local homogeneous superfluid model gives exponential screening only in a stated geometry.
      - **Fluxoid and phase winding** (`mag-fluxoid`; reviewed): Phase single-valuedness constrains a fluxoid; magnetic flux alone needs additional limits.
    - **Type-II vortices** (`mag-vortices`; mapped): Vortex cores, penetration depth and sample geometry distinguish lower and upper critical fields.
      - **Ginzburg–Landau description** (`mag-gl`; reviewed): A coarse-grained order parameter has a controlled near-transition regime, not unrestricted microscopic authority.
    - **Magnet–superconductor hybrids** (`mag-mixed`; mapped): Stray fields, screening, proximity and dissipation couple distinct subsystems.
    - **Cross-response thermodynamics** (`mag-thermodynamics`; mapped): A derivative with respect to H differs by permeability factors from one with respect to B.
      - **Linear magnetoelectric tensor** (`mag-magnetoelectric`; reviewed): Symmetry and chosen thermodynamic potential determine allowed reciprocal cross responses.
        - **Layer-resolved orbital response** (`mag-bilayer`; mapped): A bilayer layer-pseudospin response is not automatically the bulk SI magnetoelectric coefficient.
    - **Magnetoelastic transduction** (`mag-magnetostriction`; mapped): Changing strain can modify anisotropy; external electrical/mechanical work remains in the budget.
    - **Cavity and resonator hybrids** (`mag-hybrid`; mapped): Avoided crossing alone does not establish a useful autonomous energy source or quantum advantage.
    - **Sensor transfer functions** (`mag-sensors`; mapped): A magnetometer produces a calibrated channel with finite bandwidth, orientation and noise.
      - **NV-center magnetometry** (`mag-nv`; reviewed): Zeeman shifts depend on the projection along a known crystallographic axis and the applicable spin Hamiltonian.
      - **Hall and inductive probes** (`mag-hall`; mapped): Hall voltage and pickup-coil emf measure different functions of the same field history.
      - **Measurement uncertainty** (`mag-uncertainty`; reviewed): Calibration, correlation, geometry and drift can dominate counting noise.
    - **Inverse magnetization** (`mag-inverse`; mapped): External fields need not uniquely determine a vector magnetization distribution.
      - **Height continuation and bandwidth** (`mag-continuation`; reviewed): High-spatial-frequency components decay rapidly above the sample and amplify noise on inversion.
      - **Magnetic inverse null spaces** (`mag-nullspace`; mapped): A single field component generally cannot identify every source component without extra assumptions.
      - **Physics-informed reconstruction** (`mag-reconstruction`; mapped): A fitted field can coexist with multiple magnetization explanations; priors and held-out data must be reported.
    - **Micromagnetic energy functionals** (`mag-micromagnetics`; mapped): A continuous unit-vector model excludes atomic-scale degrees of freedom by construction.
      - **Mesh and timestep convergence** (`mag-discretization`; reviewed): Agreement at one grid spacing is not convergence; resolve relevant exchange and wall scales.
      - **Exchange functional** (`mag-exchangeenergy`; reviewed): Gradient penalties approximate slowly varying exchange and need compatible boundary conditions.
      - **Anisotropy functional** (`mag-anisotropy`; reviewed): Easy axes and energy offsets must be stated with the coefficient convention.
      - **DMI conventions and boundaries** (`mag-dmi`; reviewed): Bulk and interfacial DMI have different invariant forms and boundary twists.
    - **Code verification versus validation** (`mag-validation`; mapped): Analytic/standard-problem agreement verifies implementation within a model, not actual material parameters.
      - **MuMax3 verification corpus** (`mag-mumax`; mapped): Selected source sections expose finite-difference approximations and even benchmark disagreement.
    - **Electronic-structure model choices** (`mag-dft`; mapped): Exchange-correlation approximations and Hubbard U can change predicted magnetic ground states.
    - **Reproducibility and uncertainty** (`mag-reproducibility`; mapped): Record code/version, mesh, convergence, material parameters, boundary conditions and numerical budgets.

## Glossary

**B versus H** — B is magnetic induction in tesla; H is field intensity in ampere per metre. B=mu0(H+M) does not by itself assume a linear material.

**SI** — International System of Units. The revised SI fixes h and e, while mu0 is experimentally inferred.

**FM / AFM / ferrimagnet** — Ferromagnetic / antiferromagnetic / unequal opposing sublattice order; net moment alone does not specify a magnetic phase.

**Néel vector** — An antiferromagnetic sublattice-difference order parameter; its normalization must be declared.

**MQS** — Magnetoquasistatic approximation: retain induction while neglecting displacement current only under an appropriate scale analysis.

**DMI** — Dzyaloshinskii–Moriya interaction, an antisymmetric exchange contribution allowed by appropriate inversion-symmetry breaking.

**LLG** — Landau–Lifshitz–Gilbert dynamics. Signed gyromagnetic conventions and B-versus-H choices must remain consistent.

**SOT / STT** — Spin–orbit torque / spin-transfer torque. Both require an angular-momentum source and a complete electrical/thermal budget.

**DFT / GGA / meta-GGA / U** — Density functional theory and increasingly structured exchange-correlation approximations; Hubbard U is an additional model parameter, not an automatic measured constant.

**NV** — Nitrogen-vacancy center in diamond; an orientation-dependent spin sensor with its own Hamiltonian, calibration and bandwidth.

**QSL** — Quantum spin liquid: a proposed quantum phase requiring positive diagnostic evidence, not simply lack of observed order.

**Moiré** — A long-period interference/registry pattern from lattice mismatch or twist; magnetic exchange depends on the actual relaxed structure.

**PT** — Combined spatial inversion and time-reversal symmetry; neither a generic claim of magnetic absence nor a universal spin-degeneracy rule without the full symmetry setting.

**Magnon** — A spin-wave excitation. A mode frequency, a driven resonance peak and a sensor spectral peak are different quantities.

**GL** — Ginzburg–Landau coarse-grained order-parameter theory, especially controlled near a transition under its assumptions.

**Passivity** — A system cannot deliver more energy than supplied plus initially stored energy over its stated ports and time window.

**Verification versus validation** — Verification checks implementation against a mathematical model; validation tests whether that model predicts the measured physical system.

**Read-depth status** — Abstract-only, selected text and metadata identify different evidence levels; a source hash proves identity, not truth.

**Uncertainty versus tolerance** — A statistical standard uncertainty, a deterministic numerical error bound and an assumed manufacturing tolerance are distinct.

**Spin versus orbital angular momentum** — Different contributions to angular-momentum transport can produce similar electrical/THz signals; a channel model is required.

**Fluxoid** — Magnetic flux plus a supercurrent term; it is not always identical to magnetic flux through a loop.

## Open questions and missing evidence

### When can a magnetic field map uniquely identify a vector magnetization?

Status: unresolved-in-selected-corpus. Provide an injective forward map under explicit support, boundary and prior constraints; report rank/null-space witnesses and held-out multi-height/multi-axis data.

### Which RuO2 specimens actually support a magnetic ordered state and which conversion channel is measured?

Status: unresolved-in-selected-corpus. Independent order-sensitive measurements on the same structurally characterized specimen; separate spin/orbital injection and interface response.

### Which kagome plateau ansatz survives thermodynamic and independent-method comparison?

Status: unresolved-in-selected-corpus. Matched Hamiltonian/boundaries, larger-size convergence, unbiased observable comparisons and independent algorithms.

### How robust is phase coexistence to twist relaxation, defects and sensor transfer functions?

Status: unresolved-in-selected-corpus. Correlated structural and vector-magnetic imaging with independently calibrated temperature and height.

### Does the recent graphene observation uniquely identify a magnetic pairing mechanism?

Status: unresolved-in-selected-corpus. Independent phase-sensitive and spin/valley-resolved constraints plus competing-phonon/electrostatic models.

### What is the complete switching energy and error rate of an ultrafast torque device?

Status: unresolved-in-selected-corpus. Calibrated delivered pulse work, heat, retention, write/read error distributions and auxiliary electronics accounting.

### What departures from local London screening distinguish geometry from unconventional physics?

Status: unresolved-in-selected-corpus. Known sample geometry, vortex history, penetration/coherence lengths and independent field calibration.


## Source records and reading depth


### mag-src-nist — CODATA2022 vacuum magnetic permeability

NIST / CODATA; 2022; 2022 recommended values, retrieved2026-11-25

https://physics.nist.gov/cgi-bin/cuu/Value?mu0

**Source class**: official-data

**Status / reading depth**: selected-text; Numerical value and standard/relative uncertainty read

**Sections inspected**: Value table; uncertainty and CODATA attribution

**Supported claim**: mu0 is a measured constant in the revised SI, not an exact4pi*1e-7 definition.

**Limitations**: A constants page does not validate any material or instrument.

**research-note**: The tabulated value is1.25663706127(20)e-6 N/A².

Capture SHA-256: `acf5245a18c0c09283ad9e5cb493554e003564bcc78ae0b1e098139e68d1898b`; captured 2026-11-25T06:23:59.335613+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-mit-vector — Vector potential and vector Poisson equation §8.1

Hermann A. Haus and James R. Melcher; 1989; Online textbook chapter captured2026-11-25

https://web.mit.edu/6.013_book/www/chapter8/8.1.html

**Source class**: textbook

**Status / reading depth**: selected-text; Selected complete prose of the indicated section; some source equations are image-rendered, not independently OCR-transcribed

**Sections inspected**: Opening derivation and boundary/constitutive discussion

**Supported claim**: Classical field representations, induction and energy accounting are conditional on the stated electromagnetic approximation.

**Limitations**: Our explicit equations are explanatory reconstructions; source image equations and the full book were not exhaustively audited.

**research-note**: The selected section separates mathematical field equations from additional constitutive or boundary information.

Capture SHA-256: `c3f1c669438bdb7060b8b4345ae5fef826edfd6737473202366b4ef313910900`; captured 2026-11-25T06:23:59.890863+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-mit-induction — MQS electric fields and perfect conductors §10.1

Hermann A. Haus and James R. Melcher; 1989; Online textbook chapter captured2026-11-25

https://web.mit.edu/6.013_book/www/chapter10/10.1.html

**Source class**: textbook

**Status / reading depth**: selected-text; Selected complete prose of the indicated section; some source equations are image-rendered, not independently OCR-transcribed

**Sections inspected**: Opening derivation and boundary/constitutive discussion

**Supported claim**: Classical field representations, induction and energy accounting are conditional on the stated electromagnetic approximation.

**Limitations**: Our explicit equations are explanatory reconstructions; source image equations and the full book were not exhaustively audited.

**research-note**: The selected section separates mathematical field equations from additional constitutive or boundary information.

Capture SHA-256: `11afd3feb1d28f9e1a2c5ebbf0b3244b80489c31e314ab3a498e888ff835a81c`; captured 2026-11-25T06:23:59.505349+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-mit-energy — Poynting theorem §11.2

Hermann A. Haus and James R. Melcher; 1989; Online textbook chapter captured2026-11-25

https://web.mit.edu/6.013_book/www/chapter11/11.2.html

**Source class**: textbook

**Status / reading depth**: selected-text; Selected complete prose of the indicated section; some source equations are image-rendered, not independently OCR-transcribed

**Sections inspected**: Opening derivation and boundary/constitutive discussion

**Supported claim**: Classical field representations, induction and energy accounting are conditional on the stated electromagnetic approximation.

**Limitations**: Our explicit equations are explanatory reconstructions; source image equations and the full book were not exhaustively audited.

**research-note**: The selected section separates mathematical field equations from additional constitutive or boundary information.

Capture SHA-256: `c092e1c44d34ef6925e0057b2ddf401b01ecb48d765d8deed45efb3825f5b9ff`; captured 2026-11-25T06:23:59.552264+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-mumax — The design and verification of Mumax3

Arne Vansteenkiste; Jonathan Leliaert; Mykola Dvornik; Felipe Garcia-Sanchez; Bartel Van Waeyenberge; 2014; arXiv:1406.7635v3

https://arxiv.org/html/1406.7635

**Source class**: primary-paper

**Status / reading depth**: selected-text; Abstract, introduction, III.1/III.3/III.4 and selected standard-problem passages read

**Sections inspected**: Abstract; I; III.1; III.3; III.4; V.1–V.2 selected paragraphs

**Supported claim**: Finite-difference micromagnetics can be verified against analytic and standard-problem cases.

**Limitations**: No software was executed here; source notes disagreement among submitted solutions for standard problem1. Signed gamma_LL convention must be translated.

**research-note**: The paper exposes discretization, DMI boundary conditions and benchmark limits rather than declaring every simulation physically validated.

Capture SHA-256: `2c6b156b838c260a8199ac2cf7c93eb7a15f9263d22b211e506d9ce38b418c0d`; captured 2026-11-25T06:23:59.212646+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-alt-theory — Beyond conventional ferromagnetism and antiferromagnetism: a phase with nonrelativistic spin and crystal rotation symmetry

Libor Šmejkal and coauthors; 2022; arXiv:2105.05820v2; related PRX12,031042

https://arxiv.org/abs/2105.05820

**Source class**: primary-paper

**Status / reading depth**: abstract-only; abstract-only; arXiv identity/version and related DOI read

**Sections inspected**: Abstract; submission history; related DOI

**Supported claim**: Spin-group classification permits compensated collinear order with alternating spin-momentum splitting.

**Limitations**: Abstract-only in this pass; a classification is not proof that every proposed candidate orders magnetically.

**research-note**: The symmetry proposal separates nonrelativistic spin splitting from ordinary net-moment ferromagnetism.

Capture SHA-256: `cec9557e2ccb928fb6ba017ff07bf3f07cf1dfc7d62660439a5b692d0f0c8342`; captured 2026-11-25T06:23:58.921852+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-mnte — Altermagnetic lifting of Kramers spin degeneracy

J. Krempaský; L. Šmejkal; S. W. D’Souza and coauthors; 2023; arXiv:2308.10681v1; later journal publication not independently recaptured

https://arxiv.org/html/2308.10681

**Source class**: preprint

**Status / reading depth**: selected-text; Selected opening experimental claim and introductory symmetry discussion read

**Sections inspected**: Opening research summary; introductory mechanism comparison

**Supported claim**: Photoemission and calculations are reported for compensated centrosymmetric MnTe.

**Limitations**: Selected preprint passages, not a full raw-data/ARPES reanalysis; not transferable automatically to RuO2.

**research-note**: The source reports two unconventional spin-degeneracy-lifting mechanisms in MnTe.

Capture SHA-256: `83f20c35333a7e21750a4e56659bd8df4fa52fd6c407073859b31edef11535d7`; captured 2026-11-25T06:23:59.169033+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-ruo2-null — A meta-GGA perpective on the altermagnetism of RuO2

Markus Meinert; 2025; arXiv:2512.04995v1

https://arxiv.org/html/2512.04995

**Source class**: preprint

**Status / reading depth**: selected-text; Selected abstract/conclusion plusMethods andground-state paragraphsII–III.2 read.

**Sections inspected**: Abstract;II Methods;III.2 ground-state paragraph;IV Conclusion

**Supported claim**: A higher-rung r2SCAN-L calculation retains a nonmagnetic ideal bulk state while predicting strain/doping thresholds.

**Limitations**: FP-LAPW/functional and Hubbard-U-dependent results;finite Brillouin-zone sampling andfixed-spin-moment/local-sphere definition. No independentDFT rerun oruniversal experimental absence theorem.

**research-note**: The source specifieselk/FP-LAPW,9×9×13k sampling,Liechtenstein+U withfully localized double counting andfixedJ=0.5eV. SelectedLSDA/PBE/r2SCAN-L calculations retain a nonmagnetic bulk reference;distortion/doping conclusions remain conditional.

Capture SHA-256: `bb4854a63765cdda264009e1e36b8d840efa9b40122b1677e25d90c538cdea3a`; captured 2026-11-25T06:26:11.183645+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-moire — [2406.12250] Observation of stacking engineered magnetic phase transitions within moiré supercells of twisted van der Waals magnets

Li, Senlei
Sun, Zeliang
McLaughlin, Nathan J.
Sharmin, Afsana
Agarwal, Nishkarsh
Huang, Mengqi
Sung, Suk Hyun
Lu, Hanyi
Yan, Shaohua
Lei, Hechang
Hovden, Robert
Wang, Hailong
Chen, Hua
Zhao, Liuyan
Du, Chunhui Rita; 2024; arXiv:2406.12250v1

https://arxiv.org/abs/2406.12250

**Source class**: preprint

**Status / reading depth**: abstract-only; abstract-only; full abstract and version record

**Sections inspected**: abstract-only; full abstract and version record

**Supported claim**: Scanning single-spin magnetometry reports local FM/AFM regions with separate transition scales in twisted CrI3.

**Limitations**: Abstract-only; raw noise spectra, structural reconstruction and model identification were not reanalysed.

**research-note**: Scanning single-spin magnetometry reports local FM/AFM regions with separate transition scales in twisted CrI3.

Capture SHA-256: `980de5bbc31eae51f1af558550bbc481268c35bb9e50628df486aa660c04a261`; captured 2026-11-25T06:26:11.281156+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-inverse-nv — Universal Reconstruction of Complex Magnetic Profiles with Minimum Prior Assumptions

Changyu Yao; Yue Yu; Yinyao Shi and coauthors; 2024; arXiv:2411.18882v2

https://arxiv.org/html/2411.18882

**Source class**: preprint

**Status / reading depth**: selected-text; Selected Discussion opening paragraph and identity

**Sections inspected**: Selected Discussion opening paragraph and identity

**Supported claim**: A GPU-assisted physics-informed reconstruction framework fits spatial magnetization to measured field maps.

**Limitations**: Optimization and a physically constrained loss do not prove uniqueness of an unconstrained inverse problem.

**research-note**: A GPU-assisted physics-informed reconstruction framework fits spatial magnetization to measured field maps.

Capture SHA-256: `90cfa855ce6679a0d5d58bfe4e2f5245318a374da83c3a73e4b3f8cfd3bbdcc4`; captured 2026-11-25T06:26:11.240215+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-sot — [2512.23397] Terahertz switching of antiferromagnetic order by Néel spin-orbit torques

Behovits, Yannic
Chekhov, Alexander L.
Ruge, Amon
Rouzegar, Reza
Serrano, Bruno Rosinus
Fellows, Alexander P.
John, Ben
Thämer, Martin
Reimers, Sonka
Renner, Fynn
Dannegger, Tobias
Nowak, Ulrich
Seifert, Tom S.
Kläui, Mathias
Jourdan, Martin
Kampfrath, Tobias; 2025; arXiv:2512.23397v1

https://arxiv.org/abs/2512.23397

**Source class**: preprint

**Status / reading depth**: abstract-only; abstract-only; full abstract and submission identity

**Sections inspected**: abstract-only; full abstract and submission identity

**Supported claim**: The authors report current-direction-controlled ultrafast Néel-vector rotation in Mn2Au with optical readout.

**Limitations**: Abstract-only; pulse energy, thermal controls, device yield and raw trajectories were not independently checked.

**research-note**: The authors report current-direction-controlled ultrafast Néel-vector rotation in Mn2Au with optical readout.

Capture SHA-256: `aa92ffb3dc21c3220b44d15d616125074d5ea7bd247d7c50553fd3a9b3de32ec`; captured 2026-11-25T06:26:11.321509+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-skyrmion — Zero-field deterministic all-optical writing and annihilation of nanometer-scale skyrmion bubbles

M. G. van der Schans; W. P. M. de Kleijne; M. A. Brozius; B. Koopmans; 2025; arXiv:2512.19266v1

https://arxiv.org/html/2512.19266

**Source class**: preprint

**Status / reading depth**: selected-text; Opening summary; supplementary dataset paragraph; version

**Sections inspected**: Opening summary; supplementary dataset paragraph; version

**Supported claim**: The source reports single-pulse field-free writing/annihilation of skyrmion bubbles in engineered Co/Gd stacks.

**Limitations**: Selected opening summary and supplementary dataset description; not full imaging/topology or lifetime validation.

**research-note**: The source reports single-pulse field-free writing/annihilation of skyrmion bubbles in engineered Co/Gd stacks.

Capture SHA-256: `c1a79968af8cb2ffca33dfbd3f6976022ba546d2026c729b94bb8e8316fa1ced`; captured 2026-11-25T06:26:11.189415+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-qsl — 2𝑘_𝐹 instability and chiral spin density wave at the 1/9 magnetization plateau in the kagome antiferromagnets

Tanja Đurić; Pinaki Sengupta; 2025; arXiv:2512.11670v1

https://arxiv.org/html/2512.11670

**Source class**: preprint

**Status / reading depth**: selected-text; Selected conclusions and model-method overview in contents

**Sections inspected**: Selected conclusions and model-method overview in contents

**Supported claim**: Neural quantum-state optimization and flux insertion favor a chiral spin-density wave over previously proposed plateau states.

**Limitations**: Model/ansatz/finite-size-dependent theory; not a material proof and not an independent rerun.

**research-note**: Neural quantum-state optimization and flux insertion favor a chiral spin-density wave over previously proposed plateau states.

Capture SHA-256: `b3e95074947a7a045d3b69156ccf003f00103afb486b4822dfdcdf2c10c81d28`; captured 2026-11-25T06:26:11.255984+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-magnetoelectric — Layer dipole magnetoelectric polarizability of antiferromagnetic bilayers

H. Radhakrishnan; C. Ortix; J. W. F. Venderbos; 2025; arXiv:2512.05875v1

https://arxiv.org/html/2512.05875

**Source class**: preprint

**Status / reading depth**: selected-text; Selected abstract/introduction and conclusion

**Sections inspected**: Selected abstract/introduction and conclusion

**Supported claim**: A theoretical layer-dipole response is introduced for PT-symmetric antiferromagnetic bilayers.

**Limitations**: Its displacement-field/layer-pseudospin convention differs from bulk SI alpha_ij; selected theory only.

**research-note**: A theoretical layer-dipole response is introduced for PT-symmetric antiferromagnetic bilayers.

Capture SHA-256: `16e8d0a673d950f249711b24fad286cad6be52c0866ee4871e68f87f7690e365`; captured 2026-11-25T06:26:12.037377+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-ruo2-2026 — [2611.09098] Disentangling Spin and Orbital Contributions in the Search for Altermagnetic Terahertz Conversion in RuO2

Liu, Jiahao
Mo, Yuxiao
Guan, Tongyang
Fang, Wenhui
Cui, Yongwei
Qin, Wentao
Yuan, Zhe
Zhang, Lishu
Tao, Zhensheng
Wu, Yizheng; 2026; arXiv:2611.09098v1

https://arxiv.org/pdf/2611.09098v1

**Source class**: preprint

**Status / reading depth**: selected-text; Version1 PDF:abstract;introduction channel ambiguity;experimental principle/wedge sample and injector paragraphs;Discussion/Conclusion interface-control paragraphs read.

**Sections inspected**: Introduction:ASSE/IASSE versus ISHE/OHE;experimental-principle and sample paragraphs near Fig.1;Discussion/Conclusion includingCu-spacer trend

**Supported claim**: Polarity/thickness and Cu-spacer controls distinguish spin/orbital conversion interpretations in the studied RuO2 heterostructures.

**Limitations**: No independent raw THz trace, calibration, supplement or transport-model fit reanalysis. The result concerns a specified specimen/channel and does not prove universal absence of magnetic order in all RuO2.

**research-note**: The source describes RuO2(101)wedge films,3nmFe/Ni/Py injectors and polarity/thickness discrimination. Cu insertion changes the measured anisotropy, supporting interface-conditioned interpretations rather than a unique bulk-order inference.

Capture SHA-256: `0e4faaee8ff19d1bfec961d42e81107906d137954fbd9842be415c5a1b689355`; captured 2026-11-25T06:47:08.932342+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-moire-2026 — [2611.31861] Superconductivity with valley-imbalanced Fermi surfaces in thick rhombohedral graphene

Liu, Le
Zhao, Jian
Xu, Cheng
Watanabe, Kenji
Taniguchi, Takashi
Zhang, Yang
Gao, Weibo; 2026; arXiv:2611.31861v1

https://arxiv.org/abs/2611.31861

**Source class**: preprint

**Status / reading depth**: abstract-only; abstract-only; full abstract and24Nov2026 submission record

**Sections inspected**: abstract-only; full abstract and24Nov2026 submission record

**Supported claim**: In-plane-field-enhanced superconductivity and unequal Fermi pockets are reported in17-layer rhombohedral graphene.

**Limitations**: Abstract-only very recent preprint; magnon-assisted equal-spin pairing is a motivated scenario, not uniquely established.

**research-note**: In-plane-field-enhanced superconductivity and unequal Fermi pockets are reported in17-layer rhombohedral graphene.

Capture SHA-256: `8fb082241c9bdba924217889d57e08240e9974f54f2841d7d3fbbf20d9d3a84b`; captured 2026-11-25T06:26:11.360671+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-gum — JCGM100:2008 Guide to expression of uncertainty in measurement

Joint Committee for Guides in Metrology; 2008; JCGM100:2008 corrected edition

https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf

**Source class**: official-data

**Status / reading depth**: selected-text; Selected covariance/combined-uncertainty section5.2 and coverage-factor caveat read

**Sections inspected**: 5.2 correlated inputs; distinction between standard and expanded uncertainty

**Supported claim**: Correlations and sensitivities belong in combined uncertainty.

**Limitations**: A propagation approximation is not an automatic probability statement for arbitrary deterministic bounds.

**research-note**: The formula dictionary uses a local Jacobian and an explicitly stated covariance model.

Capture SHA-256: `41bbf068fbc0d7986c98691b2d1af6680cb3044f6a1a89b3560933ed9ef9626c`; captured 2026-11-25T06:35:53.027839+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-tong-phase — Statistical Physics §5: phase transitions

David Tong; None; Online notes captured2026-11-25

https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S5.html

**Source class**: textbook

**Status / reading depth**: selected-text; Selected named sections/slides read; not the full course or every embedded equation image.

**Sections inspected**: 5.2.1 mean-field derivation;5.2.3 validity;5.4 Landau free energy

**Supported claim**: Mean-field theory neglects connected neighboring fluctuations and can give false low-dimensional ordering or incorrect exponents.

**Limitations**: Ising spin variables/field couplings are normalized model quantities, not automatically SI magnetization and tesla. The source does not establish every frustrated-material phase.

**research-note**: The notes explicitly show where mean field is approximate, distinguish finite partition sums from thermodynamic nonanalyticity, and derive a self-consistent tanh response.

Capture SHA-256: `e6735727eee6f0eaec54e25cef2c10ad078edbc5a30808d20bde83f07f40db9f`; captured 2026-11-25T06:44:09.619934+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-mit-london — Applied Superconductivity Lecture4: London equations

Terry P. Orlando / MIT; 2003; 6.763 Fall2003,15September2003

https://web.mit.edu/6.763/www/FT03/Lectures/Lecture4.pdf

**Source class**: textbook

**Status / reading depth**: selected-text; Selected named sections/slides read; not the full course or every embedded equation image.

**Sections inspected**: Slides on first London equation,penetration depth,perfect-conductor flux conservation;second London equation slide21

**Supported claim**: Perfect conductivity alone conserves original flux, while equilibrium superconductivity requires the additional flux-expelling constitutive premise.

**Limitations**: Selected slide prose and equations as extractable text; several displayed equations are image-rendered and are not claimed as independent OCR transcriptions. Not a microscopic BCS derivation.

**research-note**: The lecture distinguishes flux-conserving perfect-conductor response from superconducting flux expulsion and introduces the London penetration scale.

Capture SHA-256: `f50e28ee3e8e44c08386148b8a100bae2beccd25cd303615a9f03f751f85ffe4`; captured 2026-11-25T06:44:50.941709+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### mag-src-mit-fluxoid — Applied Superconductivity Lecture10: supercurrent and fluxoid quantization

Terry P. Orlando / MIT; 2003; 6.763 Fall2003,7October2003

https://web.mit.edu/6.763/www/FT03/Lectures/Lecture10.pdf

**Source class**: textbook

**Status / reading depth**: selected-text; Selected named sections/slides read; not the full course or every embedded equation image.

**Sections inspected**: Macroscopic wavefunction/supercurrent outline;London slide5;fluxoid slide8;simply/multiply connected regions;vortex overview

**Supported claim**: Single-valued phase constrains a fluxoid with a current term; magnetic flux alone is a further bulk-limit statement.

**Limitations**: Selected slides only; no complete original Ginzburg–Landau upper-critical-field derivation or microscopic proof was reviewed.

**research-note**: The notes retain current and flux contributions and distinguish contour topology, coherent normal regions and vortex-related quantization.

Capture SHA-256: `d61ebd2a8cd7d5c2c062c6eeb1127c8c8f1562aff93729ed49f6e393e4709b48`; captured 2026-11-25T06:45:25.250093+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.


# Gravity: learning the field without losing the measurement

Gravity is unusually easy to recognize and unusually difficult to isolate. A dropped object accelerates, a planet repeats an orbit, a clock changes rate relative to another clock, an interferometer records a transient, and a galaxy survey measures a clustering pattern. These observations do not constitute one universal “gravitational frequency.” They are different channels with different instruments, scales, models and nuisance parameters. The purpose of this chapter is to connect them through explicit assumptions rather than through a shared word or an attractive diagram.

This is a selected learning atlas with a 25 November 2026 cutoff. Its topic tree deliberately distinguishes topics that have defined formulas and inspected sources from topics that are mapped for later investigation. There are foundational equations, useful approximations, observational claims, conditional theoretical predictions and unread leads. Those categories are not grades of personal enthusiasm. They tell a reader what operation has actually been performed and what would still be required to support a stronger conclusion. No laboratory or observational experiment was conducted for this chapter, and no likelihood was independently fitted to survey data.

The companion formula dictionary supplies every variable, type, unit, hypothesis and worked example. Its calculation examples are illustrative, not measurements. The source ledger records exact captures and reading depth. A downloaded PDF is not described as wholly read. A published date is not evidence that a claim has been experimentally established. In particular, the selected 2026 gravity-entanglement records were discovered bibliographically, but article access did not yield readable papers. Their existence is mapped; their conclusions are not admitted here. Likewise, an initially guessed EHT arXiv identifier turned out to describe viscoelasticity. It was rejected rather than quietly relabeled as an astronomy source.

## Begin with an observation, then name the model

A useful investigation starts by specifying the observable. For orbital motion it could be a sequence of angular positions and arrival times. For a free-fall experiment it could be a difference of electrostatic control accelerations for two compositions. For gravitational waves it could be calibrated strain time series in several detectors. For a pulsar array it could be correlated timing residuals after deterministic timing fits. For cosmology it could be a tracer clustering statistic, selection function and covariance matrix. An equation predicting a different observable does not become a test merely because its graph resembles the data.

The forward direction begins with a mass model, a force law or metric, initial conditions and a measurement map; it predicts observations. The reverse direction asks whether the observations identify those inputs. They often do not. A circular speed determines a combination of mass and radius. A waveform amplitude combines distance and orientation. A distance-redshift curve can be reproduced by different expansion histories within available errors. A black-hole image combines lensing, plasma emission and interferometric reconstruction. A successful forward model is therefore one surviving explanation under stated comparisons, not automatically the unique recovered cause.

Historical inspiration is useful when it improves that discipline. Newtonian analysis separates an effect into candidate causes and synthesis predicts consequences from them. Modern differential geometry and statistical inference extend the available tools, but they do not license attributing present calculations to Newton or claiming his participation. The six specialists in this research round are contemporary software agents sharing model lineage. Independent task ownership is a useful check; it is neither human peer review nor independent empirical replication.

A gravitational experiment must also separate acceleration from gradients. A sufficiently small laboratory in free fall can remove a uniform acceleration from its local description. It cannot generally remove tidal relative acceleration throughout a finite region. The difference is operational: two neighboring freely falling bodies can separate even while both are locally weightless. The Newtonian tidal tensor and the relativistic curvature tensor are related descriptions in an appropriate weak-field limit, but their components and coordinate conventions must not be mixed casually.

## Conventions that prevent false disagreement

This chapter uses metric signature (-,+,+,+). In Cartesian-style length coordinates, x0=ct, metric components are dimensionless and a timelike interval obeys ds²=-c²dτ². A connection coefficient then has inverse-length units and curvature has inverse-length-squared units. Those statements concern the chosen component convention. In Schwarzschild spherical coordinates the angular coordinates are dimensionless radians, so gθθ=r² has square-length units. A tensor is geometric; a particular component's units can depend on the chart. A formula dictionary that labels every metric component dimensionless in every chart would be wrong.

The Riemann sign is fixed explicitly in the companion curvature card, and the Ricci contraction is Rσν=Rρσρν. An alternative textbook sign can be legitimate if all dependent equations change consistently. Copying a curvature definition from one source and an Einstein equation from another without checking their signs is not a new physical discrepancy. Similarly, the symbol G can mean Newton's measured constant or the Einstein tensor when it carries two indices. A physical reader must use the context rather than treating matching letters as matching quantities.

Mass density rho is measured in kilograms per cubic metre. Energy density epsilon is measured in joules per cubic metre, and pressure has the same units as energy density. The Friedmann equations here use epsilon and therefore contain the appropriate factors of c². The familiar mass-density version is different notation, not a competing cosmology. The scale factor is normalized to a0=1 and is dimensionless; the spatial-curvature coefficient k consequently carries inverse-square-metre units. Another convention sets k to +1,0,-1 and gives the scale factor a length. Both can work. Mixing their units cannot.

The value of c is exactly defined in SI. Newton's G is not. The retrieved NIST/CODATA entry reports G=6.67430(15)×10^-11 m³ kg^-1 s^-2 and a relative standard uncertainty of 2.2×10^-5 for the 2022 adjustment. A numerical exercise can use a rounded nominal G, but it should not claim more experimental precision than the input permits. The same distinction applies to masses, distances, clocks and calibration factors. Arithmetic precision from a computer is not an uncertainty budget for nature.

## Reading the observational frontier

The retrieved DESI DR2 primary paper reports measurements from more than fourteen million galaxies and quasars in three years of operation. Its abstract, model/data sections and conclusion now inspected from the complete v3 PDF describe a preference for time-evolving dark-energy parameterizations when BAO measurements are combined with CMB and supernova information. In the captured version, the quoted preference changes with the supernova compilation; the abstract gives a range of 2.8–4.2 sigma for combinations including supernovae. Those are source-reported, model-conditional comparison statements. They are not a probability that Lambda is false and not a direct detection of a dynamical field.

The supporting dark-energy paper applies parametric and nonparametric methods to related data. Agreement across such reconstructions can test sensitivity to parameterization, but it does not create independent observations. Shared input supernova calibration or a shared selection error can survive multiple analyses. A thoughtful next step compares the likelihood construction, covariance, sound-horizon calibration, redshift coverage, nuisance priors and alternative model classes. Background expansion and structure growth should be confronted together before attributing a residual to modified gravity or a particular microscopic dark-energy mechanism.

The NANOGrav fifteen-year abstract supports a different kind of inference: a stochastic process with angular correlations following the Hellings–Downs pattern. The catalogue contains sixty-seven pulsars, and the paper distinguishes evidence against independent noises from evidence against a spatially uncorrelated common process. The reported model comparisons depend on spectral assumptions. Its signal is consistent with a population of supermassive black-hole binaries, but that consistency does not uniquely identify the source population. A possible early-universe contribution would require its own competing spectrum, correlation and population analysis.

The older GWTC-3 tests abstract is retained as a selected baseline, not the latest catalogue. The retrieved GWOSC index already contains GWTC-4.0,4.1 and5.0 labels. A complete2026 GWTC-5.0 tests preprint was then downloaded and selected event-selection, omitted-test, waveform and conclusion passages read. It reports seven selected tests and no significant beyond-GR evidence under its assumptions, while discussing finite-catalogue ringdown behavior and tests omitted for known bias or scope. The selected2025 GW250114 body gives a particularly useful warning: a full-signal440mode frequency constraint cannot by itself establish mode presence when the template enforces continuity and nonzero amplitude. These are source-reported inferences, not local strain-data replication or a guarantee of exhaustive current coverage.

The EHT branch is intentionally less complete. The correct 2025 persistent-shadow paper was identified through publisher-deposited bibliographic metadata, but its publisher PDF returned forbidden access. The public topic therefore states that the paper is mapped, not read. The established conceptual distinction is still worth teaching: an interferometer samples visibilities; reconstruction and forward modeling connect those to an emission image. A bright ring, photon region, event horizon and an assumed plasma model are different objects. This chapter imports no new EHT numerical result from an unread paper.

## Quantum gravity: precision about what is open

There is no single proposition called “quantum gravity solved.” Low-energy effective gravity, semiclassical field theory, a controlled holographic duality, a proposed laboratory witness and a nonperturbative representation can establish different statements. A useful research map asks which observable, state, background, regulator, energy scale and limiting procedure each statement concerns. It also asks which familiar theory must be recovered when the new ingredients are removed. A fashionable name cannot replace those obligations.

The retrieved Donoghue abstract explains why a low-energy effective field theory can separate known long-distance quantum effects from unknown high-energy contributions. Such an expansion can be predictive within its scale hierarchy even if it is not a fundamental ultraviolet completion. This is an example of a controlled partial result, not a contradiction: a theory can accurately organize low-energy corrections while leaving the Planck-scale dynamics undetermined. A Planck length built from constants is a dimensional scale. It is not an observation of discrete space.

The selected Bose and collaborators abstract proposes using interaction-induced phases and spin correlations to witness entanglement between separated masses. This is a proposal. The inference from observed entanglement to properties of a mediator depends on the specified locality, mediation, state-preparation and interaction assumptions. Electromagnetic forces, Casimir effects, residual gas, vibrations, magnetic coupling, stray fields, readout correlations and postselection need explicit controls. Bibliographic 2026 leads discuss related or alternative mediation questions, but inaccessible text was not used to announce a resolution of that debate.

Maldacena's inspected abstract describes specific large-N and near-horizon regimes and explicitly frames a broader correspondence as a conjecture. It does not say that a generic laboratory system or our accelerating universe is experimentally known to be a particular AdS/CFT model. The loop-representation abstract addresses geometric operator spectra under its construction. Kinematical area or volume eigenvalues do not by themselves deliver the physical Hilbert space, full dynamics, realistic matter sector, classical limit or an observed discreteness signal. The open-obligation branch keeps those requirements separate.

Semiclassical Hawking temperature is another conditional result with a clear scale and state problem. The formula can be worked out for a Schwarzschild background, and its inverse-mass scaling is useful. This atlas has not observed Hawking radiation from an astrophysical black hole. Analog experiments, when discussed elsewhere, also require a map between the analogue system and the gravitational claim. Calling a cold black-hole temperature prediction a measured healing or resonant frequency would discard the channel, mechanism and evidence requirements all at once.

## Guided calculation paths

The following worked stops are explanatory routes through the dictionary. Each starts with a restricted question, follows a derivation, and ends by exposing a failure mode. They deliberately retain SI units and distinguish analytic limits from acquired data. A reader can follow the Newtonian route first, then geometry, observations and the quantum boundary. Detailed variable tables and source reading records remain in the machine-readable companion rather than being hidden behind unexplained symbols.

### Worked stop 1: Newtonian two-body attraction

The separation vector points from source M to test mass m; the minus sign makes attraction. Status: **established-model**. Start with the following conditions: Point masses or exterior spherical source Nonrelativistic isolated interaction.

The reasoning is Rotational symmetry fixes a radial force. Potential U=-GMm/r gives F=-grad U. For the illustrative input {"M_kg": 1, "m_kg": 1, "r_m": 1}, proceed as follows: Insert measured G=6.67430e-11 SI. The force points toward the source. The result is **6.67430e-11 N inward**, with reported units N.

A useful limit is: M=0 gives zero force The damaging countercheck is equally important: At r=0 the point model is singular; an extended density must replace it. See formula record `grav-f-force` for the full symbol dictionary and exact source scope.

### Worked stop 2: Acceleration field

Test-body acceleration is force divided by inertial mass under equality of inertial and passive gravitational mass. Status: **established-model**. Start with the following conditions: Test mass does not appreciably perturb source Universal coupling assumed.

The reasoning is Divide Newton force by m. The test mass cancels algebraically. For the illustrative input {"M_kg": 5.9722e+24, "r_m": 6371000.0}, proceed as follows: Compute GM/r^2. Ignore rotation, oblateness and altitude. The result is **Approximately9.82 m/s² inward**, with reported units m s^-2.

A useful limit is: Far from source magnitude tends to zero The damaging countercheck is equally important: Mass cancellation in the model is not an experimental proof of universal free fall. See formula record `grav-f-field` for the full symbol dictionary and exact source scope.

### Worked stop 3: Potential and conservative acceleration

Potential is energy per unit test mass, fixed here to zero at infinity. Status: **established-model**. Start with the following conditions: Static isolated spherical source Zero potential at infinity.

The reasoning is Integrate -GM/r² radially with boundary Phi(infinity)=0. Differentiate to recover acceleration. For the illustrative input {"GM_SI": 398600441800000.0, "r_m": 7000000.0}, proceed as follows: Evaluate -GM/r. Its gradient, not its arbitrary additive constant, affects acceleration. The result is **-5.69429e7 m²/s²**, with reported units m² s^-2.

A useful limit is: Adding a constant leaves g unchanged The damaging countercheck is equally important: Do not identify a coordinate potential value with a directly measured absolute energy. See formula record `grav-f-potential` for the full symbol dictionary and exact source scope.

### Worked stop 4: Poisson equation

Mass density sources a Newtonian potential through a boundary-value problem. Status: **established-model**. Start with the following conditions: Newtonian static or instantaneous approximation Boundary conditions specified.

The reasoning is Use Gauss divergence theorem with flux integral of g=-4piG enclosed mass. Set g=-grad Phi. For the illustrative input {"rho_kg_m3": 1000}, proceed as follows: Compute4piG rho. Both sides have dimension s^-2. The result is **8.38717e-7 s^-2**, with reported units s^-2.

A useful limit is: Vacuum has LaplacianPhi=0, not necessarily zero field The damaging countercheck is equally important: A harmonic potential can be nonzero; source equation without boundaries is not unique. See formula record `grav-f-poisson` for the full symbol dictionary and exact source scope.

### Worked stop 5: Escape speed

Zero energy at infinity determines the ideal minimum launch speed. Status: **established-model**. Start with the following conditions: No atmosphere or other bodies Newtonian point/exterior spherical source.

The reasoning is Set specific energy v²/2-GM/r to zero. Solve positive speed. For the illustrative input {"GM_SI": 398600441800000.0, "r_m": 6371000.0}, proceed as follows: Compute sqrt(2GM/r). Exclude Earth rotation. The result is **Approximately11.186 km/s**, with reported units m s^-1.

A useful limit is: As r increases escape speed decreases The damaging countercheck is equally important: A local escape estimate neglects later thrust, drag and other gravitating bodies. See formula record `grav-f-escape` for the full symbol dictionary and exact source scope.

### Worked stop 6: Circular orbital speed

Centripetal acceleration equals gravitational acceleration for an ideal circular orbit. Status: **established-model**. Start with the following conditions: Test-body circular orbit Newtonian weak field.

The reasoning is Set v²/r=GM/r². Take positive magnitude. For the illustrative input {"GM_SI": 398600441800000.0, "r_m": 7000000.0}, proceed as follows: Compute sqrt(GM/r). Compare escape speed at the same radius. The result is **7546.05 m/s**, with reported units m s^-1.

A useful limit is: v_esc=sqrt2 v_c The damaging countercheck is equally important: Using altitude as radius instead of centre distance produces a large error. See formula record `grav-f-circular` for the full symbol dictionary and exact source scope.

### Worked stop 7: Kepler period

The relative two-body ellipse has a period determined by semimajor axis and total mass. Status: **established-model**. Start with the following conditions: Isolated bound Newtonian two-body system Ellipse with0<=e<1.

The reasoning is Use angular-momentum conservation and ellipse area. Insert the inverse-square orbit relation. For the illustrative input {"a_m": 149597870700.0, "GMtotal_SI": 1.3271244e+20}, proceed as follows: Compute2pi sqrt(a³/GMtotal). Round illustrative inputs. The result is **Approximately365.26 days**, with reported units s.

A useful limit is: Circular limit preserves same period at radiusa The damaging countercheck is equally important: A planet perturbation or relativistic precession violates an exactly closed Kepler ellipse. See formula record `grav-f-kepler` for the full symbol dictionary and exact source scope.

### Worked stop 8: Vis-viva relation

Instantaneous speed follows orbital energy; a is signed for hyperbolic convention. Status: **established-model**. Start with the following conditions: Newtonian two-body potential a>0 for ellipse and a<0 for hyperbola.

The reasoning is Specific energy is-G(M+m)/(2a). Equate to v²/2-G(M+m)/r. For the illustrative input {"GM_SI": 1, "r_m": 1, "a_m": 1}, proceed as follows: Substitute into2/r-1/a. This is a scaled mathematical example. The result is **v=1 m/s**, with reported units m s^-1.

A useful limit is: a→infinity recovers parabolic escape The damaging countercheck is equally important: Not every numerical r,a pair is consistent with a physical orbit and angular momentum. See formula record `grav-f-visviva` for the full symbol dictionary and exact source scope.

### Worked stop 9: Specific mechanical energy

Energy per unit test mass separates bound, parabolic and unbound Newtonian motion. Status: **established-model**. Start with the following conditions: Static point potential Negligible dissipation.

The reasoning is Divide kinetic plus potential energy by test mass. Use potential zero at infinity. For the illustrative input {"GM_SI": 1, "r_m": 1, "v_m_s": 1}, proceed as follows: Compute1/2-1. Negative energy permits bound motion. The result is **-0.5 J/kg**, with reported units J kg^-1.

A useful limit is: epsilon=0 marks parabolic energy The damaging countercheck is equally important: Negative energy does not specify a unique ellipse without angular momentum. See formula record `grav-f-specificenergy` for the full symbol dictionary and exact source scope.

### Worked stop 10: Specific angular momentum

A central force conserves the orbital plane and areal velocity. Status: **established-model**. Start with the following conditions: Central force No external torque.

The reasoning is Differentiate r×v. Both v×v and r×radial acceleration vanish. For the illustrative input {"r_m": [1, 0, 0], "v_m_s": [0, 2, 0]}, proceed as follows: Take the cross product. The z component is positive. The result is **h=(0,0,2) m²/s**, with reported units m² s^-1.

A useful limit is: Pure radial motion has h=0 The damaging countercheck is equally important: A nongravitational torque breaks conservation even if gravity remains central. See formula record `grav-f-angular` for the full symbol dictionary and exact source scope.

### Worked stop 11: Point-mass tidal tensor

Nearby free bodies separate radially and compress transversely in this Newtonian vacuum field. Status: **established-model**. Start with the following conditions: Separation much smaller than r Einstein sum over repeated j.

The reasoning is Linearize g at displaced position. Differentiate g=-GM r/r³; radial eigenvalue is2GM/r³. For the illustrative input {"GM_over_r3_s2": 1, "xi_radial_m": 0.01}, proceed as follows: Apply the radial eigenvalue2. The transverse eigenvalues are-1. The result is **Radial deltaa=0.02 m/s²**, with reported units m s^-2.

A useful limit is: Trace vanishes outside source The damaging countercheck is equally important: A uniform local acceleration can be transformed away; a tidal tensor generally cannot. See formula record `grav-f-tidal` for the full symbol dictionary and exact source scope.

### Worked stop 12: Spherical hydrostatic balance

In a stationary Newtonian fluid, pressure decreases outward to oppose gravity. Status: **established-model**. Start with the following conditions: Spherical static fluid Newtonian pressure small relative to rest energy density.

The reasoning is Balance pressure force on a thin shell with gravitational force. Take shell thickness to zero. For the illustrative input {"g_m_s2": 10, "rho_kg_m3": 1000}, proceed as follows: Use local g=GM(r)/r². Multiply-rho g. The result is **dp/dr=-10000 Pa/m**, with reported units Pa m^-1.

A useful limit is: Zero density yields zero pressure gradient The damaging countercheck is equally important: Compact stars require relativistic TOV and an equation of state, not this equation. See formula record `grav-f-hydro` for the full symbol dictionary and exact source scope.

### Worked stop 13: Schwarzschild length

A mass defines the Schwarzschild horizon radius only for the stated nonrotating vacuum solution. Status: **established-model**. Start with the following conditions: Nonrotating uncharged Schwarzschild spacetime Do not infer a horizon from density alone.

The reasoning is Solve1-2GM/(rc²)=0 in Schwarzschild metric. This identifies a coordinate-horizon surface in the solution. For the illustrative input {"M_kg": 1.98847e+30}, proceed as follows: Insert solar mass and SI constants. Round numerical inputs. The result is **Approximately2953.34 m**, with reported units m.

A useful limit is: r_s scales linearly with M The damaging countercheck is equally important: An ordinary star with radius much larger than r_s is not a black hole. See formula record `grav-f-radius` for the full symbol dictionary and exact source scope.

### Worked stop 14: Spacetime interval

A metric contracts coordinate displacements into an invariant interval. Status: **established-model**. Start with the following conditions: Signature(-,+,+,+) x0=ct; all four Cartesian coordinates measured in metres.

The reasoning is Apply the bilinear metric to a tangent displacement twice. Under a coordinate change the component factors transform oppositely. For the illustrative input {"c_dt_m": 5, "dx_m": 3, "dy_m": 0, "dz_m": 0}, proceed as follows: Use Minkowski diag(-1,1,1,1). Compute-25+9. The result is **ds²=-16 m², timelike**, with reported units m².

A useful limit is: Null displacement has ds²=0 The damaging countercheck is equally important: In spherical coordinates angular components have different coordinate units; metric entries are not all dimensionless there. See formula record `grav-f-interval` for the full symbol dictionary and exact source scope.

### Worked stop 15: Timelike proper time

An ideal comoving clock measures proper time along a timelike worldline. Status: **established-model**. Start with the following conditions: Timelike path Metric signature(-,+,+,+).

The reasoning is Normalize the tangent four-velocity. Rearrange ds²=-c²dτ². For the illustrative input {"ds2_m2": -9}, proceed as follows: Take sqrt9 metres. Divide by c. The result is **dτ≈1.00069e-8 s**, with reported units s.

A useful limit is: A null path has zero proper time but no rest-frame photon clock The damaging countercheck is equally important: Spacelike intervals do not define real elapsed proper time by this formula. See formula record `grav-f-propertime` for the full symbol dictionary and exact source scope.

### Worked stop 16: Levi-Civita connection

Metric compatibility and zero torsion uniquely fix this connection. Status: **established-model**. Start with the following conditions: Smooth nondegenerate metric Torsion-free metric connection.

The reasoning is Write covariant derivative of g equal to zero. Permute three index equations and solve for Gamma. For the illustrative input {"metric": "Constant Cartesian Minkowski"}, proceed as follows: Every metric derivative vanishes. Insert into connection formula. The result is **All Gamma components vanish**, with reported units m^-1.

A useful limit is: Curvilinear flat coordinates can have nonzero Gamma The damaging countercheck is equally important: Gamma is not a tensor; nonzero coefficients alone do not establish curvature. See formula record `grav-f-connection` for the full symbol dictionary and exact source scope.

### Worked stop 17: Affine geodesic equation

A freely falling test body has zero covariant four-acceleration. Status: **established-model**. Start with the following conditions: Timelike test body No nongravitational force Proper time is affine.

The reasoning is Extremize proper-time action or parallel transport tangent. Expand covariant derivative along the curve. For the illustrative input {"Gamma": "0 in Cartesian Minkowski"}, proceed as follows: Connection term vanishes. Integrate d²x/dτ²=0. The result is **x^mu=A^mu τ+B^mu**, with reported units m.

A useful limit is: A coordinate acceleration need not vanish in curved coordinates The damaging countercheck is equally important: Accelerated rockets and extended spinning bodies need additional force or multipole equations. See formula record `grav-f-geodesic` for the full symbol dictionary and exact source scope.

### Worked stop 18: Curvature sign convention

Curvature measures failure of covariant derivatives to commute under the declared sign. Status: **established-model**. Start with the following conditions: Smooth torsion-free connection This sign convention fixes Ricci and Einstein signs.

The reasoning is Apply[∇mu,∇nu] to a vector. Collect derivative and quadratic connection terms. For the illustrative input {"Gamma": "0 everywhere in Cartesian Minkowski"}, proceed as follows: All derivatives and products are zero. A coordinate change cannot change vanishing curvature. The result is **R=0**, with reported units m^-2.

A useful limit is: Vanishing Gamma at one point does not force derivatives to vanish The damaging countercheck is equally important: Opposite Riemann conventions require coordinated sign changes; do not mix textbooks silently. See formula record `grav-f-riemann` for the full symbol dictionary and exact source scope.

### Worked stop 19: Ricci and scalar curvature

Contractions summarize only part of the curvature tensor. Status: **established-model**. Start with the following conditions: Same curvature sign as grav-f-riemann Nondegenerate metric.

The reasoning is Trace first and third Riemann slots. Contract Ricci with inverse metric. For the illustrative input {"spacetime": "Schwarzschild vacuum outside source"}, proceed as follows: Vacuum Einstein equation without Lambda gives Ricci zero. Weyl curvature remains nonzero. The result is **Ricci=0 and scalarR=0; full curvature need not vanish**, with reported units m^-2.

A useful limit is: Minkowski has full curvature zero The damaging countercheck is equally important: Ricci-flat does not mean gravity-free; black-hole tidal curvature is a counterexample. See formula record `grav-f-ricci` for the full symbol dictionary and exact source scope.

### Worked stop 20: Einstein field equation

Local stress energy and spacetime curvature are related by a nonlinear metric equation. Status: **established-model**. Start with the following conditions: Signature(-,+,+,+) and declared curvature sign Classical metric and specified matter Gauge and initial/boundary data required.

The reasoning is Vary Einstein-Hilbert plus matter action. Discard/compensate boundary variations with a consistent boundary prescription. For the illustrative input {"Lambda": 0, "matter": "Vacuum Minkowski"}, proceed as follows: T=0 and full curvature0. Both sides vanish. The result is **0=0**, with reported units m^-2 on both sides.

A useful limit is: Newtonian weak-field limit recovers Poisson with appropriate matter The damaging countercheck is equally important: Ten component equations include constraint/gauge structure; arbitrary metric components are not ten independent physical waves. See formula record `grav-f-einstein` for the full symbol dictionary and exact source scope.

### Worked stop 21: Perfect-fluid stress energy

Energy density and isotropic pressure are defined in the fluid rest frame. Status: **established-model**. Start with the following conditions: Local equilibrium and isotropic stress u·u=-c² No heat flux or viscosity.

The reasoning is Rest-frame diagonal tensor is diag(epsilon,p,p,p). Write the unique isotropic covariant combination of u and g. For the illustrative input {"p": 0, "u": "(c,0,0,0)"}, proceed as follows: T00=epsilon c²/c². Spatial diagonal entries vanish. The result is **Dust rest frame: T00=epsilon**, with reported units J m^-3.

A useful limit is: Radiation has p=epsilon/3, not zero The damaging countercheck is equally important: Anisotropic collisionless matter or magnetic stresses are not perfect fluids. See formula record `grav-f-fluid` for the full symbol dictionary and exact source scope.

### Worked stop 22: Weak static potential in g00

The Newtonian potential appears in the weak static metric under a suitable gauge. Status: **approximation**. Start with the following conditions: |Phi|/c² much less than1 Static weak field and x0=ct.

The reasoning is Expand the geodesic time-time connection. Match slow-particle acceleration to-gradPhi. For the illustrative input {"Phi_over_c2": -1e-06}, proceed as follows: Insert into-(1+2Phi/c²). Keep first order only. The result is **g00≈-0.999998**, with reported units dimensionless.

A useful limit is: Phi→0 gives flat time coefficient-1 The damaging countercheck is equally important: This one component is not a complete metric for lensing or gravitational waves. See formula record `grav-f-weakmetric` for the full symbol dictionary and exact source scope.

### Worked stop 23: Newtonian limit of Einstein equation

Slow matter and weak static curvature recover the Newtonian source law. Status: **approximation**. Start with the following conditions: Slow pressureless matter Weak nearly stationary field Compatible metric/curvature conventions.

The reasoning is Use weakmetric and trace-reversed Einstein equation. Retain leading mass-density term. For the illustrative input {"rho": 0, "boundary": "Nonzero external central mass potential"}, proceed as follows: Local source density is zero. The harmonic exterior potential remains nonzero. The result is **LaplacianPhi=0 outside source**, with reported units s^-2.

A useful limit is: Strong fields require full Einstein dynamics The damaging countercheck is equally important: Dropping pressure is invalid for relativistic stars and early-universe radiation. See formula record `grav-f-newtonlimit` for the full symbol dictionary and exact source scope.

### Worked stop 24: Static emitted/received photon-frequency ratio

For static observers and stationary propagation, a photon climbs out with lower received frequency. Status: **established-model**. Start with the following conditions: Static metric Observers follow time-translation Killing flow No additional Doppler shift.

The reasoning is Conserve photon Killing energy. Convert coordinate energy to local proper-time frequency. For the illustrative input {"g00A": -0.999998, "g00B": -1}, proceed as follows: Compute sqrt(0.999998). Expand to first order. The result is **nuB/nuA≈0.999999**, with reported units dimensionless ratio.

A useful limit is: Identical potentials give unit ratio The damaging countercheck is equally important: Swapping emitter and receiver reverses the ratio; moving clocks require velocity terms. See formula record `grav-f-redshift` for the full symbol dictionary and exact source scope.

### Worked stop 25: Schwarzschild line element

Static spherical vacuum has a horizon-coordinate singularity at r_s. Status: **established-model**. Start with the following conditions: Nonrotating uncharged vacuum exterior r>r_s for static observers.

The reasoning is Solve spherical vacuum field equations with asymptotic flatness. Use areal radius so spheres have area4pi r². For the illustrative input {"r": "10 r_s", "dr": 0, "dtheta": 0, "dphi": 0}, proceed as follows: gtt factor is0.9. A static clock has dτ/dt=sqrt0.9. The result is **dτ/dt≈0.948683**, with reported units dimensionless ratio.

A useful limit is: r≫r_s approaches flat spherical metric The damaging countercheck is equally important: r=r_s is not a material surface; regular coordinates cross it. Kerr requires spin terms. See formula record `grav-f-schwarzschild` for the full symbol dictionary and exact source scope.

### Worked stop 26: Schwarzschild innermost stable circular orbit

Marginal radial stability fixes the ISCO for test-particle timelike circular geodesics. Status: **established-model**. Start with the following conditions: Nonspinning black hole Negligible particle self-force Timelike geodesic.

The reasoning is Set first derivative of radial effective potential to zero. Set its second derivative to zero for marginal stability. For the illustrative input {"M_kg": 1.98847e+30}, proceed as follows: Use r_s≈2953m. Multiply by3. The result is **Approximately8860m**, with reported units m.

A useful limit is: Kerr spin changes ISCO strongly The damaging countercheck is equally important: The photon orbit at3GM/c² is different from the timelike ISCO. See formula record `grav-f-isco` for the full symbol dictionary and exact source scope.

### Worked stop 27: Leading periapsis advance

Weak-field relativistic correction rotates an ideal elliptical orbit per revolution. Status: **approximation**. Start with the following conditions: Weak field Slow bound test orbit 0<=e<1; perturbative expansion.

The reasoning is Perturb the Schwarzschild orbit equation by3GMu²/c². Extract secular phase shift of radial oscillation. For the illustrative input {"GM_over_ac2": 1e-08, "e": 0}, proceed as follows: Insert6pi×1e-8. Circular limit refers to nearby slightly eccentric epicycles. The result is **1.88496e-7 rad/orbit**, with reported units rad per orbit.

A useful limit is: G M/(a c²)→0 gives Newton closure The damaging countercheck is equally important: As e→1 at fixeda, pericentre may leave the weak-field regime. See formula record `grav-f-precession` for the full symbol dictionary and exact source scope.

### Worked stop 28: Weak Schwarzschild light deflection

Both time and spatial metric curvature contribute to the leading asymptotic bending. Status: **approximation**. Start with the following conditions: Weak deflection b≫r_s Source and observer far from isolated lens.

The reasoning is Integrate the perturbed null geodesic. Retain first order inGM/(bc²). For the illustrative input {"GM_over_bc2": 1e-06}, proceed as follows: Multiply by4. The result is small-angle radians. The result is **4e-6rad**, with reported units rad.

A useful limit is: b→infinity gives zero deflection The damaging countercheck is equally important: Near the photon region multiple looping images require strong-field ray tracing. See formula record `grav-f-deflection` for the full symbol dictionary and exact source scope.

### Worked stop 29: Leading Shapiro delay

A nearly conjunction ray accumulates an additional propagation delay relative to flat geometry. Status: **approximation**. Start with the following conditions: Weak static spherical field rA,rB≫b One-way convention.

The reasoning is Integrate leading null coordinate travel time along nearly straight ray. Separate the geometry-dependent flat travel time. For the illustrative input {"2GM_over_c3_s": 1e-05, "4rArB_over_b2": 100}, proceed as follows: Use ln100≈4.60517. Multiply by1e-5s. The result is **4.60517e-5s**, with reported units s.

A useful limit is: Delay vanishes with M The damaging countercheck is equally important: A radar round trip normally doubles a symmetric one-way result; coordinates and reference path must be specified. See formula record `grav-f-shapiro` for the full symbol dictionary and exact source scope.

### Worked stop 30: First Friedmann equation

Expansion, density, spatial curvature and Lambda obey a homogeneous-background constraint. Status: **established-model**. Start with the following conditions: FLRW homogeneity/isotropy k has unitsm^-2 in this normalizeda convention ClassicalGR.

The reasoning is Insert FLRW metric into00 Einstein component. Use comoving perfect-fluid stress energy. For the illustrative input {"k": 0, "Lambda": 0, "H_s-1": 2.2683e-18}, proceed as follows: Solve epsilon=3H²c²/(8piG). This illustrativeH is70km/s/Mpc. The result is **epsilon≈8.27e-10J/m³**, with reported units s^-2 for equation; J/m³ for example.

A useful limit is: Vacuum with positiveLambda gives constantH The damaging countercheck is equally important: Using k=±1 while keeping a dimensionless requires a separate curvature scale; conventions must not be mixed. See formula record `grav-f-friedmann` for the full symbol dictionary and exact source scope.

### Worked stop 31: FLRW acceleration equation

Pressure contributes to gravitational deceleration as well as energy density. Status: **established-model**. Start with the following conditions: FLRW perfect-fluid background Cosmic proper time for comoving observers.

The reasoning is Combine spatial and temporal Einstein components. Use isotropy to replace stresses byp. For the illustrative input {"Lambda": 0, "p_over_epsilon": -1}, proceed as follows: epsilon+3p=-2epsilon. The fluid contribution has positive acceleration. The result is **ddota/a=8piG epsilon/(3c²)>0**, with reported units s^-2.

A useful limit is: Pressureless positive density decelerates withoutLambda The damaging countercheck is equally important: Acceleration alone does not identify a unique particle or modified-gravity mechanism. See formula record `grav-f-acceleration` for the full symbol dictionary and exact source scope.

### Worked stop 32: Cosmological continuity

An isolated homogeneous fluid loses or gains energy density through expansion work. Status: **established-model**. Start with the following conditions: Separately conserved fluid No inter-sector energy transfer.

The reasoning is Use covariant stress-energy conservation. Equivalently apply d(epsilon a³)=-p d(a³). For the illustrative input {"p": 0, "a_final_over_initial": 2}, proceed as follows: Integrate dust scalingepsilon∝a^-3. Doublinga increases volume eightfold. The result is **Final density=initial/8**, with reported units J m^-3.

A useful limit is: p=-epsilon yields constant density The damaging countercheck is equally important: Interacting dark sectors require a source term and cannot use separate conservation unchanged. See formula record `grav-f-continuity` for the full symbol dictionary and exact source scope.

### Worked stop 33: Constant equation-of-state scaling

A constantw closes the homogeneous continuity equation. Status: **established-model**. Start with the following conditions: Constantw Separately conserved component a>0.

The reasoning is Divide continuity byH epsilon. Integrate dln epsilon=-3(1+w)dln a. For the illustrative input {"w": 0.3333333333333333, "a": 2, "epsilon0": 1}, proceed as follows: Exponent is-4. Compute2^-4. The result is **epsilon=1/16J/m³**, with reported units J m^-3.

A useful limit is: Dustw0 givesa^-3; vacuumw-1 givesconstant The damaging countercheck is equally important: A fitted time-varyingw cannot be replaced by one constant across all epochs. See formula record `grav-f-scaling` for the full symbol dictionary and exact source scope.

### Worked stop 34: Critical energy density

Critical energy density corresponds to flatness when all contributions are accounted consistently. Status: **established-model**. Start with the following conditions: FLRW background Do not double-countLambda as both fluid and explicit term.

The reasoning is Set curvature contribution to zero in Friedmann. Solve for total effective energy density. For the illustrative input {"H_km_s_Mpc": 70}, proceed as follows: ConvertH to2.2683e-18s^-1. Insert constants. The result is **epsilon_c≈8.27e-10J/m³; rho_c≈9.20e-27kg/m³**, with reported units J m^-3.

A useful limit is: H→0 gives zero critical density The damaging countercheck is equally important: Energy density epsilon_c differs byc² from mass density rho_c. See formula record `grav-f-critical` for the full symbol dictionary and exact source scope.

### Worked stop 35: Flat FLRW luminosity distance

Flux dilution includes both geometric distance and photon redshift/time dilation. Status: **established-model**. Start with the following conditions: Spatially flat FLRW Transparent metric photon propagation Standard luminosity-distance definition.

The reasoning is Integrate radial null trajectory for comoving distance. Multiply by1+z for received flux. For the illustrative input {"z": 0.01, "H0_s-1": 2.2683e-18}, proceed as follows: At lowz useH≈H0. LeadingD_L≈cz/H0. The result is **Approximately42.8Mpc at leading order**, with reported units m.

A useful limit is: z≪1 gives Hubble law The damaging countercheck is equally important: Curvature requires a transverse-distance function; luminosity and angular-diameter distance are not interchangeable. See formula record `grav-f-distance` for the full symbol dictionary and exact source scope.

### Worked stop 36: CPL equation of state

Two parameters summarize a chosen time-varying dark-energy history. Status: **approximation**. Start with the following conditions: Phenomenological parameterization Specified redshift range and priors.

The reasoning is Taylor-like parameterization in1-a defines the model. It is not derived from a unique microscopic action. For the illustrative input {"w0": -0.8, "wa": -0.6, "a": 0.5}, proceed as follows: Compute-0.8-0.6×0.5. Crossingw=-1 is model-dependent. The result is **w=-1.1**, with reported units dimensionless.

A useful limit is: w0=-1,wa=0 recoversLambda equation of state The damaging countercheck is equally important: A preference for this model is not direct detection of a new dark-energy particle. See formula record `grav-f-cpl` for the full symbol dictionary and exact source scope.

### Worked stop 37: Far-zone quadrupole strain

Slow-source far-zone radiation is determined by a transverse trace-free mass-quadrupole projection. Status: **approximation**. Start with the following conditions: Weak far-zone radiation Slow source Distance much greater than source size/wavelength scale as appropriate.

The reasoning is Solve linearized retarded metric equation. Use mass/momentum conservation to express leading radiation in quadrupole terms. For the illustrative input {"QTT_second_kg_m2_s2": 1e+40, "D_m": 1e+20}, proceed as follows: Evaluate2G Qddot/(c⁴D). Projection and orientation are assumed in suppliedQTT. The result is **Approximately1.65e-24 strain**, with reported units dimensionless.

A useful limit is: Static quadrupole has zero second derivative and no radiation The damaging countercheck is equally important: Near-zone fields and relativistic merger require stronger methods. See formula record `grav-f-quadrupole` for the full symbol dictionary and exact source scope.

### Worked stop 38: Binary chirp mass

A mass combination controls leading inspiral phase evolution. Status: **established-model**. Start with the following conditions: Positive masses Leading quasi-circular inspiral.

The reasoning is Combine reduced mass and total mass in quadrupole energy balance. Rewrite aseta^(3/5) totalmass. For the illustrative input {"m1_solar": 1, "m2_solar": 1}, proceed as follows: For equal massesMchirp=2^-1/5m. Evaluate numerical factor. The result is **0.870551 solar masses**, with reported units kg.

A useful limit is: Extreme mass ratio hasMchirp much below total mass The damaging countercheck is equally important: Detector-frame mass is redshifted by1+z; waveform masses alone do not fix source redshift. See formula record `grav-f-chirpmass` for the full symbol dictionary and exact source scope.

### Worked stop 39: Leading chirp-rate law

Gravitational-wave frequency rises as a quasi-circular binary loses orbital energy. Status: **approximation**. Start with the following conditions: Leading quadrupole order Quasi-circular adiabatic inspiral Not merger.

The reasoning is Differentiate Newtonian orbital energy with frequency. Equate its loss to quadrupole radiated power. For the illustrative input {"Mchirp_kg": 1.98847e+30, "f_Hz": 100}, proceed as follows: InsertSI constants andf. Use detector-frame mass with observedtime. The result is **Approximately12.49Hz/s**, with reported units Hz s^-1.

A useful limit is: Smallf strongly suppresses chirp The damaging countercheck is equally important: Spins, eccentricity and post-Newtonian effects alter the waveform; do not extrapolate through merger. See formula record `grav-f-chirp` for the full symbol dictionary and exact source scope.

### Worked stop 40: Leading circular-binary amplitude scale

An amplitude scale depends on distance and mass as well as frequency. Status: **approximation**. Start with the following conditions: Leading circular inspiral Polarization/inclination factors applied separately Cosmological redshift convention consistent.

The reasoning is Insert circular orbit quadrupole into far-zone formula. Use Kepler relation to remove orbital separation. For the illustrative input {"Mchirp_kg": 1.98847e+30, "f_Hz": 100, "D_Mpc": 100}, proceed as follows: Convert100Mpc to metres. Evaluate leading scale only. The result is **Approximately2.6e-23**, with reported units dimensionless.

A useful limit is: Doubling distance halves amplitude The damaging countercheck is equally important: Inclination-distance degeneracy prevents unique distance from one scalar amplitude. See formula record `grav-f-amplitude` for the full symbol dictionary and exact source scope.

### Worked stop 41: Damped ringdown component

A selected quasinormal contribution has a decay time and oscillation frequency. Status: **approximation**. Start with the following conditions: Linear black-hole perturbation after a justified start One selected mode No growing instability assumed.

The reasoning is Use complexfrequencyomega=2pi fR-i/tau withexp(-iomega t). Take a real component with adjusted phase. For the illustrative input {"A": 1, "t_over_tau": 1, "phase": "at cosine maximum"}, proceed as follows: The envelope is exp(-1). Mode interference is omitted. The result is **Envelope≈0.367879**, with reported units dimensionless.

A useful limit is: tau→infinity removes damping The damaging countercheck is equally important: A short fitted damped sinusoid alone does not establish a Kerr spectrum or unique mode identification. See formula record `grav-f-ringdown` for the full symbol dictionary and exact source scope.

### Worked stop 42: Hellings–Downs angular curve

The ideal isotropic tensor-background correlation has a distinctive angular shape. Status: **established-model**. Start with the following conditions: GR transverse tensor polarizations Isotropic unpolarized stochastic background Standard pulsar-term averaging and normalization.

The reasoning is Average products of pulsar antenna responses over sky directions. Retain autocorrelation normalization separately. For the illustrative input {"theta_rad": 3.141592653589793, "a_equals_b": false}, proceed as follows: Thenx=1 andln1=0. Compute-1/4+1/2. The result is **zeta=1/4**, with reported units dimensionless.

A useful limit is: For distinct co-aligned pulsars xlnx→0 andzeta→1/2 The damaging countercheck is equally important: Spatially common red noise without the correlation pattern is not equivalent evidence for this model. See formula record `grav-f-hd` for the full symbol dictionary and exact source scope.

### Worked stop 43: Semiclassical Einstein equation

A classical metric is sourced by a renormalized quantum stress expectation in a chosen state. Status: **approximation**. Start with the following conditions: Specified quantum state and renormalization prescription Controlled stress fluctuations Not asserted fundamental at all scales.

The reasoning is Vary a suitable renormalized effective action or use mean-field approximation. Include necessary gravitational counterterms when required. For the illustrative input {"state": "Renormalized Minkowski vacuum", "Lambda": 0}, proceed as follows: Set the reference vacuum stress to zero consistently. Flat metric is then a conditional solution. The result is **0=0 under stated renormalization conditions**, with reported units m^-2.

A useful limit is: Large stress fluctuations can invalidate a mean-source approximation The damaging countercheck is equally important: It is not a complete theory of quantum metric fluctuations. See formula record `grav-f-semiclassical` for the full symbol dictionary and exact source scope.

### Worked stop 44: Planck length

A dimensional length combines quantum action, gravity and relativity. Status: **established-model**. Start with the following conditions: SI constants Dimensional scale, not a derived universal minimum distance.

The reasoning is Require a length monomial inħ,G,c. Solve dimensions for exponents1/2,1/2,-3/2. For the illustrative input {"G_SI": 6.6743e-11}, proceed as follows: Useħ=1.054571817e-34J s andc=299792458m/s. Evaluate square root. The result is **Approximately1.61626e-35m**, with reported units m.

A useful limit is: G→0 makes this gravity-dependent scale vanish The damaging countercheck is equally important: Dimensional analysis does not establish measured area discreteness or a UV completion. See formula record `grav-f-planck` for the full symbol dictionary and exact source scope.

### Worked stop 45: Schwarzschild Hawking temperature

A nonrotating black hole has a semiclassical temperature defined relative to asymptotic time. Status: **conditional-result**. Start with the following conditions: Quantum fields on a semiclassical Schwarzschild background Large enough mass for small curvature at horizon Asymptotic normalization.

The reasoning is Relate horizon surfacegravity to thermal periodicity or Bogoliubov particle creation. Useκ=c⁴/(4GM) andkBT=ħκ/(2pi c). For the illustrative input {"M_kg": 1.98847e+30}, proceed as follows: Insert solar mass. The predicted temperature is extremely low. The result is **Approximately6.17e-8K**, with reported units K.

A useful limit is: LargerM gives lowerTH The damaging countercheck is equally important: This is not a direct detection of Hawking radiation from an astrophysical black hole. See formula record `grav-f-hawking` for the full symbol dictionary and exact source scope.

## How to turn the map into a research plan

Do not begin by increasing the number of graph connections. Choose one observational channel and one disagreement that would matter. A suitable small project might reproduce a circular-orbit and escape-speed calculation, compare two weak-field metric conventions, rebuild a single catalogued waveform example with documented calibration, or inspect the effect of a supernova compilation in an openly released likelihood. Each has a different data-access and mathematical burden. A graph edge called “supported by” means that a source supplies context or an inspected result; it is not a causal interaction and does not certify every assumption.

Freeze the units, coordinates, reference frames and model class before fitting. Preserve the raw measurements, software versions, masks, exclusions and unsuccessful checks. Specify which parameters are measured, inferred, fixed by convention or deliberately varied as model deformations. A null residual can reflect low sensitivity or a flexible fit; a nonzero residual can reflect calibration or an omitted ordinary effect. A discriminating control must be capable of making the favored explanation fail. Changing an axis label or obtaining more digits is not such a control.

For a mathematical extension, distinguish an exact theorem within a model from a numerical certificate and a conjecture about a limit. A grid of successful examples cannot prove every state or continuum scale behaves the same way. For a physical extension, identify the apparatus resource, energy source, environmental boundary and independent uncertainty channels. For an astronomical extension, preserve selection, source-population and noise assumptions. The next useful result is often a narrower claim with a demonstrated counterexample to an overbroad interpretation.

This chapter therefore closes with explicit gaps rather than a percentage of gravity understood. The EHT paper needs a genuine full-text review. The 2026 entanglement papers need accessible primary text and a side-by-side assumption audit. DESI and gravitational-wave claims need independently executed likelihood or signal work before a replication can be claimed. Quantum-gravity approaches need matched observables, physical-state constructions and recoverable low-energy predictions. The package is complete for this selected corpus only; the empirical and theoretical questions remain open where the evidence says they are open.

## Round2 source and calculus correction

The initial8MB DESIDR2 PDF attempt was incomplete. Round2 retrieved the complete12,175,089-byte v3 PDF and inspected the actual model, dataset, covariance and conclusion sections. BAOalone is described as well fitted by flatLambdaCDM. The stronger evolving-w preference arises from particular combinations withCMB and supernovae. Reusing overlapping tracers or treatingDR1 andDR2 as independent would misstate the evidence. The source expressly says equation of state is indirectly inferred, not directly observable.

In the geometry/calculus bridge, smoothness and topology play different roles. A flat polar plane has nonzero connection coefficients but zero Riemann curvature; a component is not an invariant. A merely integrable source does not automatically give a classicalC2potential at singular support. For a point mass, Poisson’s equation is distributional at the origin and harmonic only away from it. Uniform convergence of functions does not allow derivative exchange: sin(nx)/n converges uniformly to zero, while derivativescos(nx) need not converge. These limits are independently checked as model counterexamples, not attributed to an unreadsourceproof.

For clock comparisons, the displayed ratio concerns emitted and received photons measured by static observers with metric clockcoupling. A higherclock’s fastercoordinate tickrate and a climbingphoton’s redshift are reciprocal descriptions, not a sign contradiction. Alternative clockmatter couplings would require separate observable models. Neither the clockratio nor a gravitationalwave frequency identifies an intrinsic frequency of an arbitrary object.


## Complete formula and theorem register


### Newtonian two-body attraction — `grav-f-force`

Status: established-model.

$$
\mathbf F_{1\leftarrow2}=-GMm\,\mathbf r/r^3
$$

The separation vector points from source M to test mass m; the minus sign makes attraction.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `M` | Source mass | kg | scalar |
| `m` | Test mass | kg | scalar |
| `r` | Source-to-test separation vector; scalar r in denominator is its positive Euclidean norm | m | vector |
| `F` | Force on test mass | N | vector |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `U` | Newtonian interaction potential energy introduced in derivation | J | scalar |

**Conditions and domain**

- Point masses or exterior spherical source
- Nonrelativistic isolated interaction

**Derivation or proof guide**

1. Rotational symmetry fixes a radial force.
2. Potential U=-GMm/r gives F=-grad U.

**Worked example**

Inputs: {"M_kg": 1, "m_kg": 1, "r_m": 1}

1. Insert measured G=6.67430e-11 SI.
2. The force points toward the source.

Result: 6.67430e-11 N inward; units: N

**Limits and counterchecks**

- M=0 gives zero force

**Common mistakes**

- At r=0 the point model is singular; an extended density must replace it.

Source records: `grav-src-carroll`.

### Acceleration field — `grav-f-field`

Status: established-model.

$$
\mathbf g=-GM\mathbf r/r^3
$$

Test-body acceleration is force divided by inertial mass under equality of inertial and passive gravitational mass.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `g` | Gravitational acceleration | m s^-2 | vector |
| `M` | Source mass | kg | scalar |
| `r` | Separation vector; scalar r in denominator is its positive Euclidean norm | m | vector |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |

**Conditions and domain**

- Test mass does not appreciably perturb source
- Universal coupling assumed

**Derivation or proof guide**

1. Divide Newton force by m.
2. The test mass cancels algebraically.

**Worked example**

Inputs: {"M_kg": 5.9722e+24, "r_m": 6371000.0}

1. Compute GM/r^2.
2. Ignore rotation, oblateness and altitude.

Result: Approximately9.82 m/s² inward; units: m s^-2

**Limits and counterchecks**

- Far from source magnitude tends to zero

**Common mistakes**

- Mass cancellation in the model is not an experimental proof of universal free fall.

Source records: `grav-src-carroll`.

### Potential and conservative acceleration — `grav-f-potential`

Status: established-model.

$$
\Phi=-GM/r,\quad\mathbf g=-\nabla\Phi
$$

Potential is energy per unit test mass, fixed here to zero at infinity.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Phi` | Gravitational potential | m^2 s^-2 | scalar |
| `r` | Radial distance | m | scalar |
| `M` | Source mass | kg | scalar |
| `g` | Acceleration | m s^-2 | vector |
| `nabla` | Spatial gradient | m^-1 | operator |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |

**Conditions and domain**

- Static isolated spherical source
- Zero potential at infinity

**Derivation or proof guide**

1. Integrate -GM/r² radially with boundary Phi(infinity)=0.
2. Differentiate to recover acceleration.

**Worked example**

Inputs: {"GM_SI": 398600441800000.0, "r_m": 7000000.0}

1. Evaluate -GM/r.
2. Its gradient, not its arbitrary additive constant, affects acceleration.

Result: -5.69429e7 m²/s²; units: m² s^-2

**Limits and counterchecks**

- Adding a constant leaves g unchanged

**Common mistakes**

- Do not identify a coordinate potential value with a directly measured absolute energy.

Source records: `grav-src-carroll`.

### Poisson equation — `grav-f-poisson`

Status: established-model.

$$
\nabla^2\Phi=4\pi G\rho
$$

Mass density sources a Newtonian potential through a boundary-value problem.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Phi` | Potential | m^2 s^-2 | scalar |
| `rho` | Mass density | kg m^-3 | scalar |
| `nabla^2` | Spatial Laplacian | m^-2 | operator |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `pi` | Circle constant | dimensionless | constant |

**Conditions and domain**

- Newtonian static or instantaneous approximation
- Boundary conditions specified
- Classical pointwise equation requires sufficient potential/source regularity; point masses and surface layers require a distributional interpretation at the singularsupport.

**Derivation or proof guide**

1. Use Gauss divergence theorem with flux integral of g=-4piG enclosed mass.
2. Set g=-grad Phi.

**Worked example**

Inputs: {"rho_kg_m3": 1000}

1. Compute4piG rho.
2. Both sides have dimension s^-2.

Result: 8.38717e-7 s^-2; units: s^-2

**Limits and counterchecks**

- Vacuum has LaplacianPhi=0, not necessarily zero field

**Common mistakes**

- A harmonic potential can be nonzero; source equation without boundaries is not unique.
- For Phi=-GM/r, the Laplacian vanishes only off r=0; distributionally it equals4piGM delta3 at the origin. No automaticglobalC2regularity follows from writing the equation.

Source records: `grav-src-carroll`.

### Escape speed — `grav-f-escape`

Status: established-model.

$$
v_{esc}=\sqrt{2GM/r}
$$

Zero energy at infinity determines the ideal minimum launch speed.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `v_esc` | Escape speed | m s^-1 | scalar |
| `M` | Source mass | kg | scalar |
| `r` | Initial radius | m | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |

**Conditions and domain**

- No atmosphere or other bodies
- Newtonian point/exterior spherical source

**Derivation or proof guide**

1. Set specific energy v²/2-GM/r to zero.
2. Solve positive speed.

**Worked example**

Inputs: {"GM_SI": 398600441800000.0, "r_m": 6371000.0}

1. Compute sqrt(2GM/r).
2. Exclude Earth rotation.

Result: Approximately11.186 km/s; units: m s^-1

**Limits and counterchecks**

- As r increases escape speed decreases

**Common mistakes**

- A local escape estimate neglects later thrust, drag and other gravitating bodies.

Source records: `grav-src-carroll`.

### Circular orbital speed — `grav-f-circular`

Status: established-model.

$$
v_c=\sqrt{GM/r}
$$

Centripetal acceleration equals gravitational acceleration for an ideal circular orbit.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `v_c` | Circular speed | m s^-1 | scalar |
| `M` | Source mass | kg | scalar |
| `r` | Orbital radius | m | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |

**Conditions and domain**

- Test-body circular orbit
- Newtonian weak field

**Derivation or proof guide**

1. Set v²/r=GM/r².
2. Take positive magnitude.

**Worked example**

Inputs: {"GM_SI": 398600441800000.0, "r_m": 7000000.0}

1. Compute sqrt(GM/r).
2. Compare escape speed at the same radius.

Result: 7546.05 m/s; units: m s^-1

**Limits and counterchecks**

- v_esc=sqrt2 v_c

**Common mistakes**

- Using altitude as radius instead of centre distance produces a large error.

Source records: `grav-src-carroll`.

### Kepler period — `grav-f-kepler`

Status: established-model.

$$
T^2=4\pi^2a^3/[G(M+m)]
$$

The relative two-body ellipse has a period determined by semimajor axis and total mass.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `T` | Period | s | scalar |
| `a` | Relative semimajor axis | m | scalar |
| `M,m` | Two masses | kg | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `pi` | Circle constant | dimensionless | constant |

**Conditions and domain**

- Isolated bound Newtonian two-body system
- Ellipse with0<=e<1

**Derivation or proof guide**

1. Use angular-momentum conservation and ellipse area.
2. Insert the inverse-square orbit relation.

**Worked example**

Inputs: {"a_m": 149597870700.0, "GMtotal_SI": 1.3271244e+20}

1. Compute2pi sqrt(a³/GMtotal).
2. Round illustrative inputs.

Result: Approximately365.26 days; units: s

**Limits and counterchecks**

- Circular limit preserves same period at radiusa

**Common mistakes**

- A planet perturbation or relativistic precession violates an exactly closed Kepler ellipse.

Source records: `grav-src-carroll`.

### Vis-viva relation — `grav-f-visviva`

Status: established-model.

$$
v^2=G(M+m)(2/r-1/a)
$$

Instantaneous speed follows orbital energy; a is signed for hyperbolic convention.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `v` | Relative speed | m s^-1 | scalar |
| `M,m` | Masses | kg | scalar |
| `r` | Separation | m | scalar |
| `a` | Semimajor axis | m | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |

**Conditions and domain**

- Newtonian two-body potential
- a>0 for ellipse and a<0 for hyperbola

**Derivation or proof guide**

1. Specific energy is-G(M+m)/(2a).
2. Equate to v²/2-G(M+m)/r.

**Worked example**

Inputs: {"GM_SI": 1, "r_m": 1, "a_m": 1}

1. Substitute into2/r-1/a.
2. This is a scaled mathematical example.

Result: v=1 m/s; units: m s^-1

**Limits and counterchecks**

- a→infinity recovers parabolic escape

**Common mistakes**

- Not every numerical r,a pair is consistent with a physical orbit and angular momentum.

Source records: `grav-src-carroll`.

### Specific mechanical energy — `grav-f-specificenergy`

Status: established-model.

$$
\epsilon=v^2/2-GM/r
$$

Energy per unit test mass separates bound, parabolic and unbound Newtonian motion.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `epsilon` | Specific energy | J kg^-1 | scalar |
| `v` | Speed | m s^-1 | scalar |
| `M` | Source mass | kg | scalar |
| `r` | Radius | m | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |

**Conditions and domain**

- Static point potential
- Negligible dissipation

**Derivation or proof guide**

1. Divide kinetic plus potential energy by test mass.
2. Use potential zero at infinity.

**Worked example**

Inputs: {"GM_SI": 1, "r_m": 1, "v_m_s": 1}

1. Compute1/2-1.
2. Negative energy permits bound motion.

Result: -0.5 J/kg; units: J kg^-1

**Limits and counterchecks**

- epsilon=0 marks parabolic energy

**Common mistakes**

- Negative energy does not specify a unique ellipse without angular momentum.

Source records: `grav-src-carroll`.

### Specific angular momentum — `grav-f-angular`

Status: established-model.

$$
\mathbf h=\mathbf r\times\mathbf v
$$

A central force conserves the orbital plane and areal velocity.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `h` | Specific angular momentum | m^2 s^-1 | vector |
| `r` | Relative displacement | m | vector |
| `v` | Relative velocity | m s^-1 | vector |

**Conditions and domain**

- Central force
- No external torque

**Derivation or proof guide**

1. Differentiate r×v.
2. Both v×v and r×radial acceleration vanish.

**Worked example**

Inputs: {"r_m": [1, 0, 0], "v_m_s": [0, 2, 0]}

1. Take the cross product.
2. The z component is positive.

Result: h=(0,0,2) m²/s; units: m² s^-1

**Limits and counterchecks**

- Pure radial motion has h=0

**Common mistakes**

- A nongravitational torque breaks conservation even if gravity remains central.

Source records: `grav-src-carroll`.

### Point-mass tidal tensor — `grav-f-tidal`

Status: established-model.

$$
\delta a_i={\frac{GM}{r^3}}(3n_i n_j-\delta_{ij})\xi_j
$$

Nearby free bodies separate radially and compress transversely in this Newtonian vacuum field.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `delta a_i` | Relative acceleration | m s^-2 | vector |
| `r` | Reference radius | m | scalar |
| `M` | Source mass | kg | scalar |
| `n_i` | Radial unit vector components | dimensionless | vector |
| `delta_ij` | Kronecker identity | dimensionless | tensor |
| `xi_j` | Small separation components | m | vector |
| `i,j` | Cartesian component indices1..3 | dimensionless | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |

**Conditions and domain**

- Separation much smaller than r
- Einstein sum over repeated j

**Derivation or proof guide**

1. Linearize g at displaced position.
2. Differentiate g=-GM r/r³; radial eigenvalue is2GM/r³.

**Worked example**

Inputs: {"GM_over_r3_s2": 1, "xi_radial_m": 0.01}

1. Apply the radial eigenvalue2.
2. The transverse eigenvalues are-1.

Result: Radial deltaa=0.02 m/s²; units: m s^-2

**Limits and counterchecks**

- Trace vanishes outside source

**Common mistakes**

- A uniform local acceleration can be transformed away; a tidal tensor generally cannot.

Source records: `grav-src-carroll`.

### Spherical hydrostatic balance — `grav-f-hydro`

Status: established-model.

$$
{\frac{dp}{dr}}=-{\frac{GM(r)\rho(r)}{r^2}}
$$

In a stationary Newtonian fluid, pressure decreases outward to oppose gravity.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `p` | Pressure | Pa | scalar |
| `r` | Radius | m | scalar |
| `M(r)` | Enclosed mass | kg | scalar |
| `rho` | Mass density | kg m^-3 | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |

**Conditions and domain**

- Spherical static fluid
- Newtonian pressure small relative to rest energy density

**Derivation or proof guide**

1. Balance pressure force on a thin shell with gravitational force.
2. Take shell thickness to zero.

**Worked example**

Inputs: {"g_m_s2": 10, "rho_kg_m3": 1000}

1. Use local g=GM(r)/r².
2. Multiply-rho g.

Result: dp/dr=-10000 Pa/m; units: Pa m^-1

**Limits and counterchecks**

- Zero density yields zero pressure gradient

**Common mistakes**

- Compact stars require relativistic TOV and an equation of state, not this equation.

Source records: `grav-src-carroll`.

### Schwarzschild length — `grav-f-radius`

Status: established-model.

$$
r_s=2GM/c^2
$$

A mass defines the Schwarzschild horizon radius only for the stated nonrotating vacuum solution.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `r_s` | Schwarzschild radius | m | scalar |
| `M` | Mass parameter | kg | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `c` | Vacuum light speed | m s^-1 | constant |

**Conditions and domain**

- Nonrotating uncharged Schwarzschild spacetime
- Do not infer a horizon from density alone

**Derivation or proof guide**

1. Solve1-2GM/(rc²)=0 in Schwarzschild metric.
2. This identifies a coordinate-horizon surface in the solution.

**Worked example**

Inputs: {"M_kg": 1.98847e+30}

1. Insert solar mass and SI constants.
2. Round numerical inputs.

Result: Approximately2953.34 m; units: m

**Limits and counterchecks**

- r_s scales linearly with M

**Common mistakes**

- An ordinary star with radius much larger than r_s is not a black hole.

Source records: `grav-src-carroll`.

### Spacetime interval — `grav-f-interval`

Status: established-model.

$$
ds^2=g_{\mu\nu}dx^\mu dx^\nu
$$

A metric contracts coordinate displacements into an invariant interval.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `ds²` | Squared interval | m^2 | scalar |
| `g_munu` | Metric components; units depend on chart | chart-dependent | tensor |
| `dx^mu` | Coordinate displacement | chart-dependent | vector |
| `mu,nu` | Spacetime indices0..3; repeated summed | dimensionless | scalar |

**Conditions and domain**

- Signature(-,+,+,+)
- x0=ct; all four Cartesian coordinates measured in metres

**Derivation or proof guide**

1. Apply the bilinear metric to a tangent displacement twice.
2. Under a coordinate change the component factors transform oppositely.

**Worked example**

Inputs: {"c_dt_m": 5, "dx_m": 3, "dy_m": 0, "dz_m": 0}

1. Use Minkowski diag(-1,1,1,1).
2. Compute-25+9.

Result: ds²=-16 m², timelike; units: m²

**Limits and counterchecks**

- Null displacement has ds²=0

**Common mistakes**

- In spherical coordinates angular components have different coordinate units; metric entries are not all dimensionless there.

Source records: `grav-src-carroll`.

### Timelike proper time — `grav-f-propertime`

Status: established-model.

$$
d\tau=\sqrt{-ds^2}/c
$$

An ideal comoving clock measures proper time along a timelike worldline.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `tau` | Proper time | s | scalar |
| `ds²` | Squared interval | m² | scalar |
| `c` | Vacuum light speed | m s^-1 | constant |

**Conditions and domain**

- Timelike path
- Metric signature(-,+,+,+)

**Derivation or proof guide**

1. Normalize the tangent four-velocity.
2. Rearrange ds²=-c²dτ².

**Worked example**

Inputs: {"ds2_m2": -9}

1. Take sqrt9 metres.
2. Divide by c.

Result: dτ≈1.00069e-8 s; units: s

**Limits and counterchecks**

- A null path has zero proper time but no rest-frame photon clock

**Common mistakes**

- Spacelike intervals do not define real elapsed proper time by this formula.

Source records: `grav-src-carroll`.

### Levi-Civita connection — `grav-f-connection`

Status: established-model.

$$
\Gamma^\rho_{\mu\nu}={\frac{1}{2}}g^{\rho\sigma}(\partial_\mu g_{\sigma\nu}+\partial_\nu g_{\sigma\mu}-\partial_\sigma g_{\mu\nu})
$$

Metric compatibility and zero torsion uniquely fix this connection.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Gamma` | Connection coefficients | m^-1 in length coordinates | coordinate |
| `g^rhosigma` | Inverse metric | dimensionless in length chart | tensor |
| `g_munu` | Metric | dimensionless in length chart | tensor |
| `partial` | Coordinate derivative | m^-1 | operator |
| `rho,mu,nu,sigma` | Indices0..3; repeated sigma summed | dimensionless | scalar |

**Conditions and domain**

- Smooth nondegenerate metric
- Torsion-free metric connection

**Derivation or proof guide**

1. Write covariant derivative of g equal to zero.
2. Permute three index equations and solve for Gamma.

**Worked example**

Inputs: {"metric": "Constant Cartesian Minkowski"}

1. Every metric derivative vanishes.
2. Insert into connection formula.

Result: All Gamma components vanish; units: m^-1

**Limits and counterchecks**

- Curvilinear flat coordinates can have nonzero Gamma

**Common mistakes**

- Gamma is not a tensor; nonzero coefficients alone do not establish curvature.

Source records: `grav-src-carroll`.

### Affine geodesic equation — `grav-f-geodesic`

Status: established-model.

$$
{\frac{d^2x^\mu}{d\tau^2}}+\Gamma^\mu_{\alpha\beta}{\frac{dx^\alpha}{d\tau}}{\frac{dx^\beta}{d\tau}}=0
$$

A freely falling test body has zero covariant four-acceleration.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `x^mu` | Worldline coordinates | m in length chart | coordinate |
| `tau` | Timelike proper time | s | scalar |
| `Gamma` | Connection coefficients | m^-1 | coordinate |
| `mu,alpha,beta` | Indices0..3; repeated indices summed | dimensionless | scalar |
| `A^mu` | Constant tangent in flat-worldline example | m s^-1 | vector |
| `B^mu` | Constant initial position in flat-worldline example | m | vector |

**Conditions and domain**

- Timelike test body
- No nongravitational force
- Proper time is affine

**Derivation or proof guide**

1. Extremize proper-time action or parallel transport tangent.
2. Expand covariant derivative along the curve.

**Worked example**

Inputs: {"Gamma": "0 in Cartesian Minkowski"}

1. Connection term vanishes.
2. Integrate d²x/dτ²=0.

Result: x^mu=A^mu τ+B^mu; units: m

**Limits and counterchecks**

- A coordinate acceleration need not vanish in curved coordinates

**Common mistakes**

- Accelerated rockets and extended spinning bodies need additional force or multipole equations.

Source records: `grav-src-carroll`.

### Curvature sign convention — `grav-f-riemann`

Status: established-model.

$$
R^\rho{}_{\sigma\mu\nu}=\partial_\mu\Gamma^\rho_{\nu\sigma}-\partial_\nu\Gamma^\rho_{\mu\sigma}+\Gamma^\rho_{\mu\lambda}\Gamma^\lambda_{\nu\sigma}-\Gamma^\rho_{\nu\lambda}\Gamma^\lambda_{\mu\sigma}
$$

Curvature measures failure of covariant derivatives to commute under the declared sign.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `R` | Riemann components | m^-2 in length chart | tensor |
| `Gamma` | Connection | m^-1 | coordinate |
| `partial` | Coordinate derivative | m^-1 | operator |
| `rho,sigma,mu,nu,lambda` | Indices0..3; lambda summed | dimensionless | scalar |

**Conditions and domain**

- Smooth torsion-free connection
- This sign convention fixes Ricci and Einstein signs

**Derivation or proof guide**

1. Apply[∇mu,∇nu] to a vector.
2. Collect derivative and quadratic connection terms.

**Worked example**

Inputs: {"Gamma": "0 everywhere in Cartesian Minkowski"}

1. All derivatives and products are zero.
2. A coordinate change cannot change vanishing curvature.

Result: R=0; units: m^-2

**Limits and counterchecks**

- Vanishing Gamma at one point does not force derivatives to vanish

**Common mistakes**

- Opposite Riemann conventions require coordinated sign changes; do not mix textbooks silently.

Source records: `grav-src-carroll`.

### Ricci and scalar curvature — `grav-f-ricci`

Status: established-model.

$$
R_{\sigma\nu}=R^\rho{}_{\sigma\rho\nu},\quad R=g^{\sigma\nu}R_{\sigma\nu}
$$

Contractions summarize only part of the curvature tensor.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `R_sigmanu` | Ricci tensor | m^-2 in length chart | tensor |
| `R^rho_sigmamunu` | Riemann tensor | m^-2 | tensor |
| `R` | Scalar curvature | m^-2 | scalar |
| `g^sigmanu` | Inverse metric | dimensionless in length chart | tensor |
| `rho,sigma,nu` | Indices0..3; repeated summed | dimensionless | scalar |

**Conditions and domain**

- Same curvature sign as grav-f-riemann
- Nondegenerate metric

**Derivation or proof guide**

1. Trace first and third Riemann slots.
2. Contract Ricci with inverse metric.

**Worked example**

Inputs: {"spacetime": "Schwarzschild vacuum outside source"}

1. Vacuum Einstein equation without Lambda gives Ricci zero.
2. Weyl curvature remains nonzero.

Result: Ricci=0 and scalarR=0; full curvature need not vanish; units: m^-2

**Limits and counterchecks**

- Minkowski has full curvature zero

**Common mistakes**

- Ricci-flat does not mean gravity-free; black-hole tidal curvature is a counterexample.

Source records: `grav-src-carroll`.

### Einstein field equation — `grav-f-einstein`

Status: established-model.

$$
R_{\mu\nu}-{\frac{1}{2}}Rg_{\mu\nu}+\Lambda g_{\mu\nu}={\frac{8\pi G}{c^4}}T_{\mu\nu}
$$

Local stress energy and spacetime curvature are related by a nonlinear metric equation.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `R_munu` | Ricci tensor | m^-2 in length chart | tensor |
| `R` | Scalar curvature | m^-2 | scalar |
| `g_munu` | Metric | dimensionless in length chart | tensor |
| `Lambda` | Cosmological constant | m^-2 | scalar |
| `T_munu` | Stress-energy components in orthonormal SI frame | J m^-3 | tensor |
| `mu,nu` | Indices0..3 | dimensionless | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `c` | Vacuum light speed | m s^-1 | constant |
| `pi` | Circle constant | dimensionless | constant |

**Conditions and domain**

- Signature(-,+,+,+) and declared curvature sign
- Classical metric and specified matter
- Gauge and initial/boundary data required

**Derivation or proof guide**

1. Vary Einstein-Hilbert plus matter action.
2. Discard/compensate boundary variations with a consistent boundary prescription.

**Worked example**

Inputs: {"Lambda": 0, "matter": "Vacuum Minkowski"}

1. T=0 and full curvature0.
2. Both sides vanish.

Result: 0=0; units: m^-2 on both sides

**Limits and counterchecks**

- Newtonian weak-field limit recovers Poisson with appropriate matter

**Common mistakes**

- Ten component equations include constraint/gauge structure; arbitrary metric components are not ten independent physical waves.

Source records: `grav-src-carroll`.

### Perfect-fluid stress energy — `grav-f-fluid`

Status: established-model.

$$
T^{\mu\nu}=(\varepsilon+p)u^\mu u^\nu/c^2+p g^{\mu\nu}
$$

Energy density and isotropic pressure are defined in the fluid rest frame.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `T^munu` | Stress energy | J m^-3 in orthonormal frame | tensor |
| `epsilon` | Rest-frame total energy density | J m^-3 | scalar |
| `p` | Isotropic pressure | Pa | scalar |
| `u^mu` | Four velocity | m s^-1 | vector |
| `g^munu` | Inverse metric | dimensionless in orthonormal frame | tensor |
| `mu,nu` | Indices0..3 | dimensionless | scalar |
| `c` | Vacuum light speed | m s^-1 | constant |

**Conditions and domain**

- Local equilibrium and isotropic stress
- u·u=-c²
- No heat flux or viscosity

**Derivation or proof guide**

1. Rest-frame diagonal tensor is diag(epsilon,p,p,p).
2. Write the unique isotropic covariant combination of u and g.

**Worked example**

Inputs: {"p": 0, "u": "(c,0,0,0)"}

1. T00=epsilon c²/c².
2. Spatial diagonal entries vanish.

Result: Dust rest frame: T00=epsilon; units: J m^-3

**Limits and counterchecks**

- Radiation has p=epsilon/3, not zero

**Common mistakes**

- Anisotropic collisionless matter or magnetic stresses are not perfect fluids.

Source records: `grav-src-carroll`.

### Weak static potential in g00 — `grav-f-weakmetric`

Status: approximation.

$$
g_{00}\simeq-(1+2\Phi/c^2)
$$

The Newtonian potential appears in the weak static metric under a suitable gauge.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `g00` | Time-time metric component | dimensionless | scalar |
| `Phi` | Newtonian potential | m² s^-2 | scalar |
| `c` | Vacuum light speed | m s^-1 | constant |

**Conditions and domain**

- |Phi|/c² much less than1
- Static weak field and x0=ct

**Derivation or proof guide**

1. Expand the geodesic time-time connection.
2. Match slow-particle acceleration to-gradPhi.

**Worked example**

Inputs: {"Phi_over_c2": -1e-06}

1. Insert into-(1+2Phi/c²).
2. Keep first order only.

Result: g00≈-0.999998; units: dimensionless

**Limits and counterchecks**

- Phi→0 gives flat time coefficient-1

**Common mistakes**

- This one component is not a complete metric for lensing or gravitational waves.

Source records: `grav-src-carroll`.

### Newtonian limit of Einstein equation — `grav-f-newtonlimit`

Status: approximation.

$$
\nabla^2\Phi=4\pi G\rho,\quad T_{00}\simeq\rho c^2
$$

Slow matter and weak static curvature recover the Newtonian source law.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Phi` | Potential | m² s^-2 | scalar |
| `rho` | Rest-mass density | kg m^-3 | scalar |
| `T00` | Energy density | J m^-3 | scalar |
| `nabla²` | Spatial Laplacian | m^-2 | operator |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `c` | Vacuum light speed | m s^-1 | constant |
| `pi` | Circle constant | dimensionless | constant |

**Conditions and domain**

- Slow pressureless matter
- Weak nearly stationary field
- Compatible metric/curvature conventions

**Derivation or proof guide**

1. Use weakmetric and trace-reversed Einstein equation.
2. Retain leading mass-density term.

**Worked example**

Inputs: {"rho": 0, "boundary": "Nonzero external central mass potential"}

1. Local source density is zero.
2. The harmonic exterior potential remains nonzero.

Result: LaplacianPhi=0 outside source; units: s^-2

**Limits and counterchecks**

- Strong fields require full Einstein dynamics

**Common mistakes**

- Dropping pressure is invalid for relativistic stars and early-universe radiation.

Source records: `grav-src-carroll`.

### Static emitted/received photon-frequency ratio — `grav-f-redshift`

Status: established-model.

$$
{\frac{\nu_B}{\nu_A}}=\sqrt{{\frac{-g_{00}(A)}{-g_{00}(B)}}}
$$

The locally measured photon frequency changes between static emitterA and receiverB. This is distinct from comparing identicallocal atomic-transition standards or their coordinate tickrates.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `nuA,nuB` | Locally emitted/received frequencies | Hz | scalar |
| `g00(A),g00(B)` | Static time metric values | dimensionless | scalar |

**Conditions and domain**

- Static metric
- Observers follow time-translation Killing flow
- No additional Doppler shift
- Matter/clockcoupling is metric and the same localtransitionstandard is used; nonmetric coupling or varyingconstants need separate modeling.
- g00(A)<0 andg00(B)<0: both observers follow a timelike staticKillingflow, not a horizon or ergoregion where that staticclock construction fails.

**Derivation or proof guide**

1. Conserve photon Killing energy.
2. Convert coordinate energy to local proper-time frequency.

**Worked example**

Inputs: {"g00A": -0.999998, "g00B": -1}

1. Compute sqrt(0.999998).
2. Expand to first order.

Result: nuB/nuA≈0.999999; units: dimensionless ratio

**Limits and counterchecks**

- Identical potentials give unit ratio

**Common mistakes**

- Swapping emitter and receiver reverses the ratio; moving clocks require velocity terms.
- Higher static clocks accumulate moreproper time per unit staticcoordinate time, while a photon climbing outward is received redshifted. These reciprocalcomparisons must not be described with one unsignedclockshift.

Source records: `grav-src-carroll`.

### Schwarzschild line element — `grav-f-schwarzschild`

Status: established-model.

$$
ds^2=-(1-r_s/r)c^2dt^2+(1-r_s/r)^{-1}dr^2+r^2(d\theta^2+\sin^2\theta\,d\phi^2)
$$

Static spherical vacuum has a horizon-coordinate singularity at r_s.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `ds²` | Interval | m² | scalar |
| `r_s` | 2GM/c² length | m | scalar |
| `r` | Areal radius | m | scalar |
| `t` | Static coordinate time | s | scalar |
| `theta,phi` | Polar and azimuthal angles | rad | scalar |
| `c` | Vacuum light speed | m s^-1 | constant |

**Conditions and domain**

- Nonrotating uncharged vacuum exterior
- r>r_s for static observers

**Derivation or proof guide**

1. Solve spherical vacuum field equations with asymptotic flatness.
2. Use areal radius so spheres have area4pi r².

**Worked example**

Inputs: {"r": "10 r_s", "dr": 0, "dtheta": 0, "dphi": 0}

1. gtt factor is0.9.
2. A static clock has dτ/dt=sqrt0.9.

Result: dτ/dt≈0.948683; units: dimensionless ratio

**Limits and counterchecks**

- r≫r_s approaches flat spherical metric

**Common mistakes**

- r=r_s is not a material surface; regular coordinates cross it. Kerr requires spin terms.

Source records: `grav-src-carroll`.

### Schwarzschild innermost stable circular orbit — `grav-f-isco`

Status: established-model.

$$
r_{ISCO}=6GM/c^2=3r_s
$$

Marginal radial stability fixes the ISCO for test-particle timelike circular geodesics.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `r_ISCO` | Areal ISCO radius | m | scalar |
| `M` | Central mass | kg | scalar |
| `r_s` | Schwarzschild radius | m | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `c` | Vacuum light speed | m s^-1 | constant |

**Conditions and domain**

- Nonspinning black hole
- Negligible particle self-force
- Timelike geodesic

**Derivation or proof guide**

1. Set first derivative of radial effective potential to zero.
2. Set its second derivative to zero for marginal stability.

**Worked example**

Inputs: {"M_kg": 1.98847e+30}

1. Use r_s≈2953m.
2. Multiply by3.

Result: Approximately8860m; units: m

**Limits and counterchecks**

- Kerr spin changes ISCO strongly

**Common mistakes**

- The photon orbit at3GM/c² is different from the timelike ISCO.

Source records: `grav-src-carroll`.

### Leading periapsis advance — `grav-f-precession`

Status: approximation.

$$
\Delta\varpi={\frac{6\pi GM}{a(1-e^2)c^2}}
$$

Weak-field relativistic correction rotates an ideal elliptical orbit per revolution.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Delta varpi` | Per-orbit advance | rad | scalar |
| `M` | Central mass | kg | scalar |
| `a` | Semimajor axis | m | scalar |
| `e` | Eccentricity | dimensionless | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `c` | Vacuum light speed | m s^-1 | constant |
| `pi` | Circle constant | dimensionless | constant |

**Conditions and domain**

- Weak field
- Slow bound test orbit
- 0<=e<1; perturbative expansion

**Derivation or proof guide**

1. Perturb the Schwarzschild orbit equation by3GMu²/c².
2. Extract secular phase shift of radial oscillation.

**Worked example**

Inputs: {"GM_over_ac2": 1e-08, "e": 0}

1. Insert6pi×1e-8.
2. Circular limit refers to nearby slightly eccentric epicycles.

Result: 1.88496e-7 rad/orbit; units: rad per orbit

**Limits and counterchecks**

- G M/(a c²)→0 gives Newton closure

**Common mistakes**

- As e→1 at fixeda, pericentre may leave the weak-field regime.

Source records: `grav-src-carroll`.

### Weak Schwarzschild light deflection — `grav-f-deflection`

Status: approximation.

$$
\alpha={\frac{4GM}{bc^2}}
$$

Both time and spatial metric curvature contribute to the leading asymptotic bending.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `alpha` | Bending angle | rad | scalar |
| `M` | Lens mass | kg | scalar |
| `b` | Asymptotic impact parameter | m | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `c` | Vacuum light speed | m s^-1 | constant |

**Conditions and domain**

- Weak deflection b≫r_s
- Source and observer far from isolated lens

**Derivation or proof guide**

1. Integrate the perturbed null geodesic.
2. Retain first order inGM/(bc²).

**Worked example**

Inputs: {"GM_over_bc2": 1e-06}

1. Multiply by4.
2. The result is small-angle radians.

Result: 4e-6rad; units: rad

**Limits and counterchecks**

- b→infinity gives zero deflection

**Common mistakes**

- Near the photon region multiple looping images require strong-field ray tracing.

Source records: `grav-src-carroll`.

### Leading Shapiro delay — `grav-f-shapiro`

Status: approximation.

$$
\Delta t\simeq{\frac{2GM}{c^3}}\ln(4r_A r_B/b^2)
$$

A nearly conjunction ray accumulates an additional propagation delay relative to flat geometry.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Delta t` | One-way additional delay | s | scalar |
| `M` | Central mass | kg | scalar |
| `rA,rB` | Endpoint distances to lens | m | scalar |
| `b` | Impact parameter | m | scalar |
| `ln` | Natural logarithm | dimensionless | operator |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `c` | Vacuum light speed | m s^-1 | constant |

**Conditions and domain**

- Weak static spherical field
- rA,rB≫b
- One-way convention

**Derivation or proof guide**

1. Integrate leading null coordinate travel time along nearly straight ray.
2. Separate the geometry-dependent flat travel time.

**Worked example**

Inputs: {"2GM_over_c3_s": 1e-05, "4rArB_over_b2": 100}

1. Use ln100≈4.60517.
2. Multiply by1e-5s.

Result: 4.60517e-5s; units: s

**Limits and counterchecks**

- Delay vanishes with M

**Common mistakes**

- A radar round trip normally doubles a symmetric one-way result; coordinates and reference path must be specified.

Source records: `grav-src-carroll`.

### First Friedmann equation — `grav-f-friedmann`

Status: established-model.

$$
H^2={\frac{8\pi G\varepsilon}{3c^2}}-{\frac{kc^2}{a^2}}+{\frac{\Lambda c^2}{3}}
$$

Expansion, density, spatial curvature and Lambda obey a homogeneous-background constraint.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `H` | a dot/a Hubble rate | s^-1 | scalar |
| `a` | Scale factor normalizeda0=1 | dimensionless | scalar |
| `epsilon` | Energy density excluding explicitLambda | J m^-3 | scalar |
| `k` | Constant spatial-curvature coefficient | m^-2 | scalar |
| `Lambda` | Cosmological constant | m^-2 | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `c` | Vacuum light speed | m s^-1 | constant |
| `pi` | Circle constant | dimensionless | constant |

**Conditions and domain**

- FLRW homogeneity/isotropy
- k has unitsm^-2 in this normalizeda convention
- ClassicalGR

**Derivation or proof guide**

1. Insert FLRW metric into00 Einstein component.
2. Use comoving perfect-fluid stress energy.

**Worked example**

Inputs: {"k": 0, "Lambda": 0, "H_s-1": 2.2683e-18}

1. Solve epsilon=3H²c²/(8piG).
2. This illustrativeH is70km/s/Mpc.

Result: epsilon≈8.27e-10J/m³; units: s^-2 for equation; J/m³ for example

**Limits and counterchecks**

- Vacuum with positiveLambda gives constantH

**Common mistakes**

- Using k=±1 while keeping a dimensionless requires a separate curvature scale; conventions must not be mixed.

Source records: `grav-src-carroll`.

### FLRW acceleration equation — `grav-f-acceleration`

Status: established-model.

$$
{\frac{\ddot a}{a}}=-{\frac{4\pi G}{3c^2}}(\varepsilon+3p)+{\frac{\Lambda c^2}{3}}
$$

Pressure contributes to gravitational deceleration as well as energy density.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `a` | Scale factor | dimensionless | scalar |
| `ddot a` | Second cosmic-time derivative | s^-2 | scalar |
| `epsilon` | Fluid energy density excludingLambda | J m^-3 | scalar |
| `p` | Pressure | Pa | scalar |
| `Lambda` | Explicit cosmological constant | m^-2 | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `c` | Vacuum light speed | m s^-1 | constant |
| `pi` | Circle constant | dimensionless | constant |

**Conditions and domain**

- FLRW perfect-fluid background
- Cosmic proper time for comoving observers

**Derivation or proof guide**

1. Combine spatial and temporal Einstein components.
2. Use isotropy to replace stresses byp.

**Worked example**

Inputs: {"Lambda": 0, "p_over_epsilon": -1}

1. epsilon+3p=-2epsilon.
2. The fluid contribution has positive acceleration.

Result: ddota/a=8piG epsilon/(3c²)>0; units: s^-2

**Limits and counterchecks**

- Pressureless positive density decelerates withoutLambda

**Common mistakes**

- Acceleration alone does not identify a unique particle or modified-gravity mechanism.

Source records: `grav-src-carroll`.

### Cosmological continuity — `grav-f-continuity`

Status: established-model.

$$
\dot\varepsilon+3H(\varepsilon+p)=0
$$

An isolated homogeneous fluid loses or gains energy density through expansion work.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `epsilon` | Energy density | J m^-3 | scalar |
| `p` | Pressure | Pa | scalar |
| `H` | Hubble rate | s^-1 | scalar |
| `dot` | Derivative in cosmic time | s^-1 | operator |

**Conditions and domain**

- Separately conserved fluid
- No inter-sector energy transfer

**Derivation or proof guide**

1. Use covariant stress-energy conservation.
2. Equivalently apply d(epsilon a³)=-p d(a³).

**Worked example**

Inputs: {"p": 0, "a_final_over_initial": 2}

1. Integrate dust scalingepsilon∝a^-3.
2. Doublinga increases volume eightfold.

Result: Final density=initial/8; units: J m^-3

**Limits and counterchecks**

- p=-epsilon yields constant density

**Common mistakes**

- Interacting dark sectors require a source term and cannot use separate conservation unchanged.

Source records: `grav-src-carroll`.

### Constant equation-of-state scaling — `grav-f-scaling`

Status: established-model.

$$
p=w\varepsilon,\quad\varepsilon(a)=\varepsilon_0 a^{-3(1+w)}
$$

A constantw closes the homogeneous continuity equation.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `p` | Pressure | Pa | scalar |
| `w` | Constant equation-of-state ratio | dimensionless | scalar |
| `epsilon` | Energy density | J m^-3 | scalar |
| `epsilon0` | Density ata=1 | J m^-3 | scalar |
| `a` | Normalized scale factor | dimensionless | scalar |

**Conditions and domain**

- Constantw
- Separately conserved component
- a>0

**Derivation or proof guide**

1. Divide continuity byH epsilon.
2. Integrate dln epsilon=-3(1+w)dln a.

**Worked example**

Inputs: {"w": 0.3333333333333333, "a": 2, "epsilon0": 1}

1. Exponent is-4.
2. Compute2^-4.

Result: epsilon=1/16J/m³; units: J m^-3

**Limits and counterchecks**

- Dustw0 givesa^-3; vacuumw-1 givesconstant

**Common mistakes**

- A fitted time-varyingw cannot be replaced by one constant across all epochs.

Source records: `grav-src-carroll`.

### Critical energy density — `grav-f-critical`

Status: established-model.

$$
\varepsilon_c={\frac{3H^2c^2}{8\pi G}}
$$

Critical energy density corresponds to flatness when all contributions are accounted consistently.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `epsilon_c` | Critical energy density | J m^-3 | scalar |
| `H` | Hubble rate | s^-1 | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `c` | Vacuum light speed | m s^-1 | constant |
| `pi` | Circle constant | dimensionless | constant |
| `rho_c` | Critical mass-equivalent density epsilon_c/c² | kg m^-3 | scalar |

**Conditions and domain**

- FLRW background
- Do not double-countLambda as both fluid and explicit term

**Derivation or proof guide**

1. Set curvature contribution to zero in Friedmann.
2. Solve for total effective energy density.

**Worked example**

Inputs: {"H_km_s_Mpc": 70}

1. ConvertH to2.2683e-18s^-1.
2. Insert constants.

Result: epsilon_c≈8.27e-10J/m³; rho_c≈9.20e-27kg/m³; units: J m^-3

**Limits and counterchecks**

- H→0 gives zero critical density

**Common mistakes**

- Energy density epsilon_c differs byc² from mass density rho_c.

Source records: `grav-src-carroll`.

### Flat FLRW luminosity distance — `grav-f-distance`

Status: established-model.

$$
D_L(z)=(1+z)c\int_0^z{\frac{dz^\prime}{H(z^\prime)}}
$$

Flux dilution includes both geometric distance and photon redshift/time dilation.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `D_L` | Luminosity distance | m | scalar |
| `z,zprime` | Cosmological redshift and integration variable | dimensionless | scalar |
| `H` | Expansion history | s^-1 | scalar |
| `c` | Vacuum light speed | m s^-1 | constant |

**Conditions and domain**

- Spatially flat FLRW
- Transparent metric photon propagation
- Standard luminosity-distance definition

**Derivation or proof guide**

1. Integrate radial null trajectory for comoving distance.
2. Multiply by1+z for received flux.

**Worked example**

Inputs: {"z": 0.01, "H0_s-1": 2.2683e-18}

1. At lowz useH≈H0.
2. LeadingD_L≈cz/H0.

Result: Approximately42.8Mpc at leading order; units: m

**Limits and counterchecks**

- z≪1 gives Hubble law

**Common mistakes**

- Curvature requires a transverse-distance function; luminosity and angular-diameter distance are not interchangeable.

Source records: `grav-src-carroll`.

### CPL equation of state — `grav-f-cpl`

Status: approximation.

$$
w(a)=w_0+w_a(1-a)
$$

Two parameters summarize a chosen time-varying dark-energy history.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `w` | p/epsilon effective ratio | dimensionless | scalar |
| `a` | Normalized scale factor | dimensionless | scalar |
| `w0` | Present value | dimensionless | scalar |
| `wa` | Evolution parameter | dimensionless | scalar |
| `epsilon,epsilon0` | Dark-energy density and its presentvalue introduced in the continuityderivation | J m^-3 | scalar |

**Conditions and domain**

- Phenomenological parameterization
- Specified redshift range and priors

**Derivation or proof guide**

1. The parameterization defines w(a)=w0+wa(1-a); it is not a uniquelyderivedmicroscopic field.
2. Insert into separatelyconserved fluid equation dln(epsilon)/dln(a)=-3[1+w(a)].
3. Integration froma=1 gives epsilon/epsilon0=a^[-3(1+w0+wa)] exp[-3wa(1-a)], matching the densityratio inDESIDR2Eq10 after consistent mass/energy conversion.

**Worked example**

Inputs: {"w0": -0.8, "wa": -0.6, "a": 0.5}

1. Compute-0.8-0.6×0.5.
2. Crossingw=-1 is model-dependent.

Result: w=-1.1; units: dimensionless

**Limits and counterchecks**

- w0=-1,wa=0 recoversLambda equation of state

**Common mistakes**

- A preference for this model is not direct detection of a new dark-energy particle.
- The analyticdensityratio does not validate the chosenw(a), establish stability, or identify the physicalcause of a distance-fit preference.

Source records: `grav-src-desi-dr2`, `grav-src-desi-dark`.

### Far-zone quadrupole strain — `grav-f-quadrupole`

Status: approximation.

$$
h_{ij}^{TT}={\frac{2G}{c^4D}}\ddot Q_{ij}^{TT}(t-D/c)
$$

Slow-source far-zone radiation is determined by a transverse trace-free mass-quadrupole projection.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `hTT` | Strain components | dimensionless | tensor |
| `QTT` | TT mass quadrupole | kg m² | tensor |
| `D` | Distance | m | scalar |
| `t` | Observer coordinate time | s | scalar |
| `i,j` | Spatial indices1..3 | dimensionless | scalar |
| `dotdot` | Second time derivative | s^-2 | operator |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `c` | Vacuum light speed | m s^-1 | constant |

**Conditions and domain**

- Weak far-zone radiation
- Slow source
- Distance much greater than source size/wavelength scale as appropriate

**Derivation or proof guide**

1. Solve linearized retarded metric equation.
2. Use mass/momentum conservation to express leading radiation in quadrupole terms.

**Worked example**

Inputs: {"QTT_second_kg_m2_s2": 1e+40, "D_m": 1e+20}

1. Evaluate2G Qddot/(c⁴D).
2. Projection and orientation are assumed in suppliedQTT.

Result: Approximately1.65e-24 strain; units: dimensionless

**Limits and counterchecks**

- Static quadrupole has zero second derivative and no radiation

**Common mistakes**

- Near-zone fields and relativistic merger require stronger methods.

Source records: `grav-src-carroll`.

### Binary chirp mass — `grav-f-chirpmass`

Status: established-model.

$$
\mathcal M={\frac{(m_1m_2)^{3/5}}{(m_1+m_2)^{1/5}}}
$$

A mass combination controls leading inspiral phase evolution.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Mchirp` | Source-frame chirp mass | kg | scalar |
| `m1,m2` | Component source-frame masses | kg | scalar |

**Conditions and domain**

- Positive masses
- Leading quasi-circular inspiral

**Derivation or proof guide**

1. Combine reduced mass and total mass in quadrupole energy balance.
2. Rewrite aseta^(3/5) totalmass.

**Worked example**

Inputs: {"m1_solar": 1, "m2_solar": 1}

1. For equal massesMchirp=2^-1/5m.
2. Evaluate numerical factor.

Result: 0.870551 solar masses; units: kg

**Limits and counterchecks**

- Extreme mass ratio hasMchirp much below total mass

**Common mistakes**

- Detector-frame mass is redshifted by1+z; waveform masses alone do not fix source redshift.

Source records: `grav-src-carroll`.

### Leading chirp-rate law — `grav-f-chirp`

Status: approximation.

$$
\dot f={\frac{96}{5}}\pi^{8/3}\left({\frac{G\mathcal M}{c^3}}\right)^{5/3}f^{11/3}
$$

Gravitational-wave frequency rises as a quasi-circular binary loses orbital energy.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `fdot` | GW frequency derivative | Hz s^-1 | scalar |
| `f` | GW frequency twice orbital frequency | Hz | scalar |
| `Mchirp` | Detector-frame chirp mass for observedf | kg | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `c` | Vacuum light speed | m s^-1 | constant |
| `pi` | Circle constant | dimensionless | constant |

**Conditions and domain**

- Leading quadrupole order
- Quasi-circular adiabatic inspiral
- Not merger

**Derivation or proof guide**

1. Differentiate Newtonian orbital energy with frequency.
2. Equate its loss to quadrupole radiated power.

**Worked example**

Inputs: {"Mchirp_kg": 1.98847e+30, "f_Hz": 100}

1. InsertSI constants andf.
2. Use detector-frame mass with observedtime.

Result: Approximately12.49Hz/s; units: Hz s^-1

**Limits and counterchecks**

- Smallf strongly suppresses chirp

**Common mistakes**

- Spins, eccentricity and post-Newtonian effects alter the waveform; do not extrapolate through merger.

Source records: `grav-src-carroll`.

### Leading circular-binary amplitude scale — `grav-f-amplitude`

Status: approximation.

$$
h_0={\frac{4(G\mathcal M)^{5/3}(\pi f)^{2/3}}{c^4D}}
$$

An amplitude scale depends on distance and mass as well as frequency.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `h0` | Orientation-unprojected leading strain scale | dimensionless | scalar |
| `Mchirp` | Chirp mass consistent with frequency frame | kg | scalar |
| `f` | GW frequency | Hz | scalar |
| `D` | Appropriate luminosity distance | m | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `c` | Vacuum light speed | m s^-1 | constant |
| `pi` | Circle constant | dimensionless | constant |

**Conditions and domain**

- Leading circular inspiral
- Polarization/inclination factors applied separately
- Cosmological redshift convention consistent

**Derivation or proof guide**

1. Insert circular orbit quadrupole into far-zone formula.
2. Use Kepler relation to remove orbital separation.

**Worked example**

Inputs: {"Mchirp_kg": 1.98847e+30, "f_Hz": 100, "D_Mpc": 100}

1. Convert100Mpc to metres.
2. Evaluate leading scale only.

Result: Approximately2.6e-23; units: dimensionless

**Limits and counterchecks**

- Doubling distance halves amplitude

**Common mistakes**

- Inclination-distance degeneracy prevents unique distance from one scalar amplitude.

Source records: `grav-src-carroll`.

### Damped ringdown component — `grav-f-ringdown`

Status: approximation.

$$
h(t)=A e^{-t/\tau}\cos(2\pi f_Rt+\varphi)
$$

A selected quasinormal contribution has a decay time and oscillation frequency.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `h` | Strain contribution | dimensionless | scalar |
| `A` | Initial amplitude | dimensionless | scalar |
| `t` | Time since chosen start | s | scalar |
| `tau` | Positive damping time | s | scalar |
| `fR` | Real oscillation frequency | Hz | scalar |
| `varphi` | Phase | rad | scalar |
| `pi` | Circle constant | dimensionless | constant |
| `omega` | Complex angular frequency in exp(-i omega t) convention | rad s^-1 | scalar |
| `i` | Imaginary unit, i²=-1 | dimensionless | constant |

**Conditions and domain**

- Linear black-hole perturbation after a justified start
- One selected mode
- No growing instability assumed

**Derivation or proof guide**

1. Use complexfrequencyomega=2pi fR-i/tau withexp(-iomega t).
2. Take a real component with adjusted phase.

**Worked example**

Inputs: {"A": 1, "t_over_tau": 1, "phase": "at cosine maximum"}

1. The envelope is exp(-1).
2. Mode interference is omitted.

Result: Envelope≈0.367879; units: dimensionless

**Limits and counterchecks**

- tau→infinity removes damping

**Common mistakes**

- A short fitted damped sinusoid alone does not establish a Kerr spectrum or unique mode identification.

Source records: `grav-src-carroll`.

### Hellings–Downs angular curve — `grav-f-hd`

Status: established-model.

$$
\zeta_{ab}={\frac{3}{2}}x\ln x-{\frac{x}{4}}+{\frac{1}{2}}+{\frac{1}{2}}\delta_{ab},\quad x={\frac{1-\cos\theta_{ab}}{2}}
$$

The ideal isotropic tensor-background correlation has a distinctive angular shape.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `zeta` | Normalized timing correlation | dimensionless | scalar |
| `theta_ab` | Pulsar angular separation | rad | scalar |
| `x` | Angular helper | dimensionless | scalar |
| `delta_ab` | 1 for samepulsar else0 | dimensionless | scalar |
| `a,b` | Pulsar labels | dimensionless | scalar |

**Conditions and domain**

- GR transverse tensor polarizations
- Isotropic unpolarized stochastic background
- Standard pulsar-term averaging and normalization

**Derivation or proof guide**

1. Average products of pulsar antenna responses over sky directions.
2. Retain autocorrelation normalization separately.

**Worked example**

Inputs: {"theta_rad": 3.141592653589793, "a_equals_b": false}

1. Thenx=1 andln1=0.
2. Compute-1/4+1/2.

Result: zeta=1/4; units: dimensionless

**Limits and counterchecks**

- For distinct co-aligned pulsars xlnx→0 andzeta→1/2

**Common mistakes**

- Spatially common red noise without the correlation pattern is not equivalent evidence for this model.

Source records: `grav-src-pta`.

### Semiclassical Einstein equation — `grav-f-semiclassical`

Status: approximation.

$$
G_{\mu\nu}+\Lambda g_{\mu\nu}={\frac{8\pi G}{c^4}}\langle\hat T_{\mu\nu}\rangle_{ren}
$$

A classical metric is sourced by a renormalized quantum stress expectation in a chosen state.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `G_munu` | Einstein tensor | m^-2 | tensor |
| `Lambda` | Cosmological constant | m^-2 | scalar |
| `g_munu` | Metric | dimensionless in length chart | tensor |
| `T_hat` | Quantum stress operator | J m^-3 | operator |
| `expectation` | State-dependent renormalized mean | J m^-3 | scalar |
| `mu,nu` | Spacetime indices | dimensionless | scalar |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `c` | Vacuum light speed | m s^-1 | constant |
| `pi` | Circle constant | dimensionless | constant |

**Conditions and domain**

- Specified quantum state and renormalization prescription
- Controlled stress fluctuations
- Not asserted fundamental at all scales

**Derivation or proof guide**

1. Vary a suitable renormalized effective action or use mean-field approximation.
2. Include necessary gravitational counterterms when required.

**Worked example**

Inputs: {"state": "Renormalized Minkowski vacuum", "Lambda": 0}

1. Set the reference vacuum stress to zero consistently.
2. Flat metric is then a conditional solution.

Result: 0=0 under stated renormalization conditions; units: m^-2

**Limits and counterchecks**

- Large stress fluctuations can invalidate a mean-source approximation

**Common mistakes**

- It is not a complete theory of quantum metric fluctuations.

Source records: `grav-src-eft`.

### Planck length — `grav-f-planck`

Status: established-model.

$$
\ell_P=\sqrt{\hbar G/c^3}
$$

A dimensional length combines quantum action, gravity and relativity.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `ellP` | Planck length | m | scalar |
| `hbar` | Reduced Planck constant | J s | constant |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `c` | Vacuum light speed | m s^-1 | constant |

**Conditions and domain**

- SI constants
- Dimensional scale, not a derived universal minimum distance

**Derivation or proof guide**

1. Require a length monomial inħ,G,c.
2. Solve dimensions for exponents1/2,1/2,-3/2.

**Worked example**

Inputs: {"G_SI": 6.6743e-11}

1. Useħ=1.054571817e-34J s andc=299792458m/s.
2. Evaluate square root.

Result: Approximately1.61626e-35m; units: m

**Limits and counterchecks**

- G→0 makes this gravity-dependent scale vanish

**Common mistakes**

- Dimensional analysis does not establish measured area discreteness or a UV completion.

Source records: `grav-src-eft`, `grav-src-codata`.

### Schwarzschild Hawking temperature — `grav-f-hawking`

Status: conditional-result.

$$
T_H={\frac{\hbar c^3}{8\pi G M k_B}}
$$

A nonrotating black hole has a semiclassical temperature defined relative to asymptotic time.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `TH` | Hawking temperature | K | scalar |
| `M` | Black-hole mass | kg | scalar |
| `hbar` | Reduced Planck constant | J s | constant |
| `c` | Vacuum light speed | m s^-1 | constant |
| `pi` | Circle constant | dimensionless | constant |
| `G` | Newtonian gravitational constant | m^3 kg^-1 s^-2 | constant |
| `k_B` | Boltzmann constant | J K^-1 | constant |
| `kappa` | Surface gravity with asymptotic time normalization | m s^-2 | scalar |

**Conditions and domain**

- Quantum fields on a semiclassical Schwarzschild background
- Large enough mass for small curvature at horizon
- Asymptotic normalization

**Derivation or proof guide**

1. Relate horizon surfacegravity to thermal periodicity or Bogoliubov particle creation.
2. Useκ=c⁴/(4GM) andkBT=ħκ/(2pi c).

**Worked example**

Inputs: {"M_kg": 1.98847e+30}

1. Insert solar mass.
2. The predicted temperature is extremely low.

Result: Approximately6.17e-8K; units: K

**Limits and counterchecks**

- LargerM gives lowerTH

**Common mistakes**

- This is not a direct detection of Hawking radiation from an astrophysical black hole.

Source records: `grav-src-hawking`.


## Research paper evidence cards


### grav-paper-desi-dr2

**sourceId**: grav-src-desi-dr2

**status**: selected-text; no independentreplicationhere

**question**: Do DR2distance measurements prefer a constant dark-energy equation of state?

**method**: BAOdistances combined withCMB and alternativeSNcompilations.

**result**: BAOalone is well described by flatLambdaCDM in the source. Combining DESIBAO withCMB and supernova compilations changes the evolving-w model preference; Pantheon+/Union3/DESY5 combinations report2.8/3.8/4.2sigma in the inspectedversion.

**whatIsNew**: Three-yearDESIdistance information sharpens model comparisons.

**limitations**: Source-reported/model-conditional inference, not replicatedlikelihoods or direct identification of a dark-energyfield. DR1is contained inDR2, correlatedtracers are not independent datasets, and equation-of-state history is indirectlyinferred. Original8MBattempt was truncated; thisR2capture replaces it as selected-text evidence.

**replication**: No source data likelihood or apparatus independently reanalysed in this atlas.

**nextQuestions**: Which statedsystematic,domainorstateassumption is the strongest limitation?
What additionalindependentdataorcalculation could discriminate the interpretation?


### grav-paper-desi-dark

**sourceId**: grav-src-desi-dark

**status**: selected-text; no independentreplicationhere

**question**: How stable are inferred dark-energy trends to parameterization?

**method**: Parametric plus nonparametric reconstructions and model-class comparisons.

**result**: Parametric and nonparametric extensions explore robustness of inferred evolving-dark-energy trends.

**whatIsNew**: Extended methods probe the same data rather than providing independent observations.

**limitations**: An abstract/selected passage reading is not a reanalysis of likelihoods or a validation of all systematic choices.

**replication**: No source data likelihood or apparatus independently reanalysed in this atlas.

**nextQuestions**: Which statedsystematic,domainorstateassumption is the strongest limitation?
What additionalindependentdataorcalculation could discriminate the interpretation?


### grav-paper-desi-dr1

**sourceId**: grav-src-desi-dr1

**status**: abstract-only; no independentreplicationhere

**question**: What did first-yearBAOconstrain?

**method**: Galaxy/quasar/forest clustering and combined cosmological likelihoods.

**result**: The first-yearDESI BAO analysis constrains distance ratios. Author-reported evolving-dark-energy preferences vary with the CMB and supernova combination.

**whatIsNew**: A source-reported first-yearbaseline for laterDR2comparison.

**limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**replication**: No source data likelihood or apparatus independently reanalysed in this atlas.

**nextQuestions**: Which statedsystematic,domainorstateassumption is the strongest limitation?
What additionalindependentdataorcalculation could discriminate the interpretation?


### grav-paper-pta

**sourceId**: grav-src-pta

**status**: abstract-only; no independentreplicationhere

**question**: Are pulsar residual correlations consistent with a tensor background?

**method**: Correlated-red-noise Bayesian and frequentist comparisons.

**result**: The15-yearNANOGrav abstract reports angular timing correlations consistent with a Hellings–Downs tensor background. Spectral/model choices affect reported evidence and do not uniquely identify origin.

**whatIsNew**: Angular correlation evidence beyond an uncorrelatedcommonprocess.

**limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**replication**: No source data likelihood or apparatus independently reanalysed in this atlas.

**nextQuestions**: Which statedsystematic,domainorstateassumption is the strongest limitation?
What additionalindependentdataorcalculation could discriminate the interpretation?


### grav-paper-gwtc-tests

**sourceId**: grav-src-gwtc-tests

**status**: abstract-only; no independentreplicationhere

**question**: Are compact-binary waveforms consistent with selectedGRtests?

**method**: Residual,inspiral,polarization,dispersion and remnant consistency tests.

**result**: The selectedGWTC-3 abstract reports consistency withGR in residual,dispersion,polarization and remnant tests under its event/waveform assumptions.

**whatIsNew**: A selectedcatalogue test suite; not universal proof ofGR.

**limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**replication**: No source data likelihood or apparatus independently reanalysed in this atlas.

**nextQuestions**: Which statedsystematic,domainorstateassumption is the strongest limitation?
What additionalindependentdataorcalculation could discriminate the interpretation?


### grav-paper-microscope

**sourceId**: grav-src-microscope

**status**: abstract-only; no independentreplicationhere

**question**: Does composition change free-fall acceleration?

**method**: Differential electrostatic accelerometers and systematic-error characterization.

**result**: The mission compares titanium/platinum free fall and reports no composition-dependent violation within statistical and systematic uncertainties at its tested sensitivity.

**whatIsNew**: Titanium/platinum differential constraint at mission sensitivity.

**limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**replication**: No source data likelihood or apparatus independently reanalysed in this atlas.

**nextQuestions**: Which statedsystematic,domainorstateassumption is the strongest limitation?
What additionalindependentdataorcalculation could discriminate the interpretation?


### grav-paper-q-entangle

**sourceId**: grav-src-q-entangle

**status**: abstract-only; no independentreplicationhere

**question**: Can a gravitational interaction create a measurable entanglement witness?

**method**: Proposed separatedmassinterferometers andspinreadout.

**result**: The authors propose entangling separated masses through a gravitational interaction and witnessing spin correlations under stated mediation assumptions. This is not a performedexperiment.

**whatIsNew**: A conditionalexperimentalproposal, not a performed gravity-entanglement experiment.

**limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**replication**: No source data likelihood or apparatus independently reanalysed in this atlas.

**nextQuestions**: Which statedsystematic,domainorstateassumption is the strongest limitation?
What additionalindependentdataorcalculation could discriminate the interpretation?


### grav-paper-eft

**sourceId**: grav-src-eft

**status**: abstract-only; no independentreplicationhere

**question**: Can low-energy quantumgravity be predictive withoutUVcompletion?

**method**: Effective-field-theory separation of long-distance terms and matched localcoefficients.

**result**: The author develops low-energy effectivegravity, separating calculable long-distance quantum contributions from unknown high-energy effects.

**whatIsNew**: A controlledlowenergyframework under its assumptions.

**limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**replication**: No source data likelihood or apparatus independently reanalysed in this atlas.

**nextQuestions**: Which statedsystematic,domainorstateassumption is the strongest limitation?
What additionalindependentdataorcalculation could discriminate the interpretation?


### grav-paper-ads

**sourceId**: grav-src-ads

**status**: abstract-only; no independentreplicationhere

**question**: Which large-Nfieldtheories encode selectedAdSgravityregimes?

**method**: Branedecoupling andnearhorizonlargeNarguments.

**result**: The abstract identifies controlled large-N/near-horizon relationships and conjectures broaderAdS/string–field-theory dualities under specified conditions.

**whatIsNew**: An influentialdualityproposal under specificsymmetry/boundaryconditions.

**limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**replication**: No source data likelihood or apparatus independently reanalysed in this atlas.

**nextQuestions**: Which statedsystematic,domainorstateassumption is the strongest limitation?
What additionalindependentdataorcalculation could discriminate the interpretation?


### grav-paper-lqg

**sourceId**: grav-src-lqg

**status**: abstract-only; no independentreplicationhere

**question**: What spectra arise for geometricoperators in a looprepresentation?

**method**: Regularizedarea/volumeoperators andspinnetworkstates.

**result**: The authors construct geometricoperators in a looprepresentation and describe discrete spectra. This does not establish measuredspacetime discreteness or complete physicaldynamics.

**whatIsNew**: Representation-levelspectralresults, not demonstratedcosmologicaldynamics.

**limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**replication**: No source data likelihood or apparatus independently reanalysed in this atlas.

**nextQuestions**: Which statedsystematic,domainorstateassumption is the strongest limitation?
What additionalindependentdataorcalculation could discriminate the interpretation?


### grav-paper-gwtc5

**sourceId**: grav-src-gwtc5

**status**: selected-text;source-reportedpreprintresult

**question**: Whichselectedstrong-field tests andmodeinferences survive statedmodel/systematic assumptions?

**method**: Author waveform/noise/calibration andeventselection analysis; selectedmethods andlimits inspected.

**result**: The2026preprint reports seven selectedGRtests using a cumulative168events under itsselection. It reports no significantbeyond-GR evidence in those tests, while explicitlydiscussing finitecatalogue effects and ringdownsystematics.

**whatIsNew**: Sourceauthors add a newerselectedcatalogue orhigh-SNRsingle-event test. Thisatlas does not certify scientificnovelty.

**limitations**: A selectedpreprint, not an exhaustiveNov2026survey or proof ofGR. Some tests are omitted becauseof knownbiases,weakconstraints orscope. Combinedringdown results include edge-of-credible-region behavior andfinite-sample uncertainty; an overtone can be contaminated by unmodeledcontent.

**replication**: Noindependent strainlikelihood or detector-data replication performed.

**nextQuestions**: How do baselinewaveforms,eventselection,starttime andnoise models change theconstraint?
Which modepresence claim is identifiable independently of enforcedmodelstructure?


### grav-paper-gw250114

**sourceId**: grav-src-gw250114

**status**: selected-text;source-reportedpreprintresult

**question**: Whichselectedstrong-field tests andmodeinferences survive statedmodel/systematic assumptions?

**method**: Author waveform/noise/calibration andeventselection analysis; selectedmethods andlimits inspected.

**result**: The selected2025preprint reports tests ofGW250114 using ringdown andfull-signal models. It explicitly says its440frequencyconstraint cannot byitself establish that the440mode is present because themodel enforces waveformcontinuity/nonzeroamplitudes.

**whatIsNew**: Sourceauthors add a newerselectedcatalogue orhigh-SNRsingle-event test. Thisatlas does not certify scientificnovelty.

**limitations**: Source-era single-eventclaims,not a continuouslylatestloudestevent assertion. Modepresence,deviationparameters,starttime andwaveformassumptions are distinct. Noindependent detector-data analysis,noise/calibration audit ormode-detection replication here.

**replication**: Noindependent strainlikelihood or detector-data replication performed.

**nextQuestions**: How do baselinewaveforms,eventselection,starttime andnoise models change theconstraint?
Which modepresence claim is identifiable independently of enforcedmodelstructure?


## Nested coverage map

- **Gravity: fields, spacetime and inference** (`grav-root`; reviewed): A map of classical models, observational channels and unresolved quantum extensions.
  - **Newtonian mechanics** (`grav-newton`; mapped): Slow motion and weak fields with explicit source and boundary conditions.
  - **General relativity** (`grav-relativity`; mapped): Geometry and stress energy replace a universal instantaneous force law.
  - **Precision tests and inference** (`grav-tests`; mapped): Compare observables and systematic errors rather than asserting universal confirmation.
  - **Gravitational radiation** (`grav-waves`; mapped): Time-varying quadrupoles, compact binaries and pulsar timing sample different bands.
  - **Cosmology and dark energy** (`grav-cosmology`; mapped): Homogeneous background models meet distance and clustering observations.
  - **Quantum gravity and open constructions** (`grav-quantum`; mapped): Low-energy predictions coexist with unresolved high-energy and measurement questions.
    - **Forces and fields** (`grav-forces`; reviewed): Inverse-square attraction requires a specified separation vector.
      - **Potential theory** (`grav-field`; mapped): A scalar potential defines conservative acceleration.
        - **Boundary-value gravitation** (`grav-potential`; reviewed): Poisson equations require boundary conditions and a source density.
        - **Tidal gradients** (`grav-tidal`; reviewed): Relative acceleration distinguishes a field gradient from a uniform acceleration.
    - **Orbits and conserved quantities** (`grav-orbits`; reviewed): Two-body reduction precedes orbital formulas.
      - **Orbital energy** (`grav-energy`; reviewed): Bound and unbound trajectories have different specific-energy signs.
        - **Keplerian elements** (`grav-kepler`; reviewed): Semimajor axis and eccentricity encode an ideal isolated ellipse.
        - **Escape and circular limits** (`grav-escape`; reviewed): Escape speed exceeds circular speed by sqrt2 in a point-mass potential.
    - **Extended matter** (`grav-extended`; mapped): Spherical symmetry and pressure support have limits.
      - **Hydrostatic equilibrium** (`grav-hydro`; reviewed): Pressure gradients balance gravity for a stationary fluid.
        - **Spherical shells** (`grav-shells`; mapped): Newton shell cancellation fails without spherical symmetry.
    - **Differential geometry** (`grav-geometry`; mapped): Coordinate components are representations of geometric objects.
      - **Manifolds and coordinates** (`grav-charts`; mapped): Overlapping smooth charts avoid treating coordinates as observables.
        - **Metric signature and intervals** (`grav-metric`; reviewed): Use signature(-,+,+,+), x0=ct and timelike proper time.
      - **Connection and transport** (`grav-connection`; reviewed): Christoffel symbols depend on coordinates.
        - **Geodesic motion** (`grav-geodesic`; reviewed): Free test bodies extremize proper time under metric coupling.
      - **Curvature** (`grav-curvature`; mapped): Curvature need not vanish when connection coefficients vanish at a point.
        - **Riemann and Ricci contractions** (`grav-riemann`; reviewed): An explicit curvature-sign convention fixes field-equation signs.
    - **Einstein dynamics** (`grav-dynamics`; mapped): Conservation, gauge choice and stress energy constrain spacetime evolution.
      - **Stress-energy tensors** (`grav-matter`; reviewed): Energy density and pressure are both gravitational sources.
        - **Einstein field equations** (`grav-einstein`; reviewed): The nonlinear PDE requires initial/boundary data and gauge handling.
    - **Exact and approximate solutions** (`grav-solutions`; mapped): A solution is conditional on symmetry and matter assumptions.
      - **Spherical vacuum** (`grav-spherical`; mapped): Birkhoff-type conclusions require vacuum and spherical symmetry.
        - **Schwarzschild spacetime** (`grav-schwarzschild`; reviewed): Static exterior of an ideal nonrotating spherical mass.
        - **Rotating black holes** (`grav-kerr`; mapped): Kerr multipoles and spin need different formulas from Schwarzschild.
      - **Weak-field approximation** (`grav-weak`; reviewed): Perturbations are small relative to a chosen background.
        - **Post-Newtonian expansion** (`grav-postnewton`; reviewed): An expansion in slow motion and weak potential is not a strong-field exact solution.
    - **Equivalence principles** (`grav-equivalence`; mapped): Different formulations have different measurable content.
      - **Composition-dependent free fall** (`grav-wep`; mapped): Compare test masses while controlling nongravitational forces.
        - **Space accelerometry** (`grav-microscope`; mapped): MICROSCOPE constrains a titanium/platinum differential observable.
    - **Clock comparisons** (`grav-clock`; mapped): Specify source and receiver worldlines and frequency-transfer path.
      - **Gravitational redshift** (`grav-redshift`; reviewed): Static-coordinate clock ratios differ from a freely falling local experiment.
    - **Parameterized post-Newtonian tests** (`grav-ppn`; mapped): Parameters compare a family of weak-field metric theories.
      - **Deflection and time delay** (`grav-lensing`; reviewed): Null-ray observables depend on impact parameter and geometry.
    - **Horizon-scale imaging** (`grav-eht`; mapped): Interferometric brightness reconstructions test emission-plus-spacetime models.
      - **Photon region versus emission ring** (`grav-shadow`; mapped): A bright ring is not a direct photograph of an event-horizon surface.
    - **Measurement and identifiability** (`grav-uncertainty`; mapped): Likelihood, calibration and source-population assumptions qualify constraints.
      - **Gravitational constant metrology** (`grav-constants`; mapped): G has measured uncertainty unlike exactly defined c.
    - **Wave generation** (`grav-generation`; mapped): Linearized far-zone radiation is an approximation.
      - **Quadrupole radiation** (`grav-multipoles`; reviewed): Conserved mass and momentum remove leading monopole and dipole radiation in GR.
        - **Adiabatic binary inspiral** (`grav-inspiral`; reviewed): Leading chirps assume slow quasi-circular evolution.
    - **Merger and ringdown** (`grav-mergers`; reviewed): Numerical relativity and black-hole perturbation theory cover different stages.
      - **Quasinormal modes** (`grav-qnm`; reviewed): Damped mode frequencies depend on remnant properties and boundary conditions.
    - **Event catalogues and selection** (`grav-catalogues`; reviewed): Detection probability and waveform models affect population inference.
      - **Open strain data** (`grav-gwosc`; mapped): Public strain and event products need detector-quality and calibration context.
    - **Pulsar timing arrays** (`grav-pta`; mapped): Nanohertz correlations differ from audio-band interferometer strain.
      - **Hellings–Downs correlation** (`grav-hd`; reviewed): Angular correlations support a tensor-background model without uniquely fixing its origin.
    - **Homogeneous expansion** (`grav-background`; mapped): FLRW is a large-scale approximation, not exact local homogeneity.
      - **FLRW geometry** (`grav-flrw`; reviewed): Comoving worldlines and scale factor define cosmological redshift.
        - **Friedmann evolution** (`grav-friedmann`; reviewed): Expansion rate depends on energy density, spatial curvature and Lambda.
      - **Cosmological distances** (`grav-distances`; reviewed): Luminosity, angular and comoving distances are different quantities.
        - **Baryon acoustic oscillations** (`grav-bao`; mapped): A statistical clustering ruler constrains distances relative to a sound horizon.
          - **DESI DR1/DR2 inference** (`grav-desi`; mapped): Survey results depend on tracer selection, covariance and combined datasets.
    - **Dark energy models** (`grav-dark`; mapped): Effective equation of state is a model parameterization.
      - **Time-varying equation of state** (`grav-cpl`; reviewed): w0–wa models are phenomenological approximations, not a discovered field.
      - **Data combinations and tensions** (`grav-tensions`; mapped): Nominal significance changes with supernova compilation and model assumptions.
    - **Early-universe initial conditions** (`grav-early`; mapped): Inflation, perturbations and primordial alternatives require additional assumptions.
    - **Structure growth** (`grav-growth`; mapped): Background distances alone do not fix modified gravity or clustering dynamics.
    - **Low-energy effective gravity** (`grav-eft`; mapped): An EFT can predict controlled low-energy terms without solving UV completion.
      - **Power counting and Planck scales** (`grav-powercount`; mapped): Small dimensionless ratios identify an expansion, not experimental accessibility.
        - **Planck length and mass** (`grav-planck`; reviewed): Dimensional scales do not by themselves prove discrete spacetime.
    - **Semiclassical gravity** (`grav-semiclassical`; reviewed): A classical metric coupled to quantum stress expectation is not full quantum gravity.
      - **Black-hole thermodynamics** (`grav-hawking`; reviewed): Hawking temperature is a semiclassical prediction, not a detected astrophysical flux here.
    - **Gravity-related entanglement** (`grav-entangle`; mapped): Proposals need a declared mediator model and nongravitational controls.
      - **Witness assumptions and alternatives** (`grav-witness`; mapped): An entanglement witness is not automatically a model-independent quantum-gravity certificate.
    - **String theory and holography** (`grav-strings`; mapped): Controlled dualities have specified spacetime and large-N regimes.
      - **AdS/CFT regimes** (`grav-ads`; mapped): A selected conjectured correspondence is not a measured cosmological model.
    - **Loop quantum gravity** (`grav-loops`; mapped): Kinematical spectra and physical-dynamics recovery are distinct obligations.
      - **Area/volume spectra** (`grav-area`; mapped): Representation-level results do not alone establish observed Planck discreteness.
    - **Continuum and empirical obligations** (`grav-obligations`; mapped): Recover GR, matter, observables and testable departures in a specified regime.

## Glossary

**GR** — General relativity, a classical metric theory with stated matter coupling.

**PPN** — Parameterized post-Newtonian framework for weak-field metric comparisons.

**FLRW** — Friedmann–Lemaître–Robertson–Walker homogeneous/isotropic background.

**BAO** — Baryon acoustic oscillations, a statistical clustering-distance ruler.

**CMB** — Cosmic microwave background; likelihood constraints depend on a cosmological model.

**DESI** — Dark Energy Spectroscopic Instrument survey. DR1 andDR2refer to distinct observation/release analyses.

**PTA** — Pulsar timing array, a network of astronomical clocks probing low-frequency correlations.

**EHT** — Event Horizon Telescope very-long-baseline interferometric imaging collaboration.

**GWOSC** — Gravitational Wave Open Science Center; data are not automatically cleaned measurements of everymodelparameter.

**TT** — Transverse-traceless projection defined relative to a propagation direction/background.

**QNM** — Quasinormalmode with specified outgoing/ingoingboundaryconditions andcomplexfrequency.

**ISCO** — Innermost stable circular orbit under a specified spacetime andtest-particlemodel.

**EFT** — Effective field theory, a scale-separated expansion with matchedcoefficients andcontrolleddomain.

**AdS/CFT** — Anti-de Sitter/conformal-field-theory correspondence in specified regimes, not a generic measureduniverseidentity.

**LQG** — Loop quantum gravity; kinematics,physicalconstraints andsemiclassicallimits require separateevidence.

**WEP** — Weak equivalenceprinciple concerning universaltest-bodyfreefall.

**SOTA** — State of the art; this atlas provides a dated selectedcorpus, not an exhaustive latestsurvey.

**Sigma** — A model-dependent tail or Gaussian-equivalent shorthand; not probability a theory istrue.

**x0=ct** — Timecoordinate expressed as a length; cosmicproper time is still measured inseconds.

**Mass versusenergy density** — rho haskg/m³ while epsilon hasJ/m³. They differ byc² only in the appropriate rest-energy relation.

**Curvatureconvention** — R^rho_sigmamunu=partial_muGamma^rho_nusigma-partial_nuGamma^rho_musigma+Gamma^rho_mulambdaGamma^lambda_nusigma-Gamma^rho_nulambdaGamma^lambda_musigma; Ricci=R^rho_sigmarhonu.

**Geometricunits** — SettingG=c=1 changes unit representation; it does not erase dimensions or identify mass anddistance without conversion.

## Open questions and missing evidence

### Is dark energy dynamical rather than a cosmological constant?

Status: unresolved. Independentdistance/growth datasets,selection/covariance checks andmodelcomparison robust toSNcalibration andpriors.

### What sources dominate the nanohertz background?

Status: unresolved. Longerbaselines,moreskycoverage,populationmodelcomparison andpossibleindividualsources.

### Does a laboratorygravity-relatedentanglement witness uniquely identify a quantum mediator?

Status: unresolved. Explicitlocality/interactionassumptions,control ofEM/Casimirforces andfullreadcomparison of2026alternative theories.

### How does a UVcompletequantumgravity recover measuredGRandmatter?

Status: unresolved. Controlledcontinuum/dynamical observables,unitarity andmatching plus discriminatingempirical predictions.

### What do EHTdata add beyond an assumed emissionmodel?

Status: unresolved. Read correct2025primarypaper,comparecalibratedvisibilities andalternativeemission/geometriclikelihoods.

### Which higher-orderwaveform andselectioneffects controlcataloguetests?

Status: unresolved. Independentwaveforms,calibration/selectionmodels andheldout events.


## Source records and reading depth


### grav-src-carroll — Lecture Notes on General Relativity

Carroll, Sean M.; 1997; 1997/12/03; 1997/12/03

https://arxiv.org/abs/gr-qc/9712019

**Source class**: textbook

**Status / reading depth**: selected-text; Selected text: lecture introduction and metric/connection/curvature/Einstein/Schwarzschild/cosmology formula passages

**Sections inspected**: Selected text: lecture introduction and metric/connection/curvature/Einstein/Schwarzschild/cosmology formula passages

**Supported claim**: Geometry, waves and cosmology are presented in one declared GR framework.

**Limitations**: Pedagogical notes, not an experimental dataset; not every page read.

**research-note**: Geometry, waves and cosmology are presented in one declared GR framework.

Capture SHA-256: `d4cbfeed3a18370cb7e1a256da6fa7de722982ad7f6a146b4fc0fe14a6bebf6c`; captured 2026-11-25T06:25:59.363598+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-desi-dr2 — DESI DR2 Results II: Measurements of Baryon Acoustic Oscillations and Cosmological Constraints

DESI Collaboration
Abdul-Karim, M.
Aguilar, J.
Ahlen, S.
Alam, S.
Allen, L.; 2025; arXiv2503.14738v3,9October2025; complete12,175,089-bytePDF captured2026-11-25

https://arxiv.org/abs/2503.14738v3

**Source class**: primary-paper

**Status / reading depth**: selected-text; Complete PDF downloaded and text extracted; selected model/equation, §II data, BAO/covariance/TableIII–IV context, model-comparison/TableVI passage and §IX conclusions read. Remainingappendices and likelihood/data not independently reanalysed.

**Sections inspected**: Model definitions and Eq10 dark-energy density evolution
§II DESIData; tracer/selection/pipeline context
BAOmeasurements and TableIII–IV covariance/composite-tracer cautions
Evolvingdarkenergy model-comparison/TableVI and SNcompilation dependence
§IX Conclusions

**Supported claim**: BAOalone is well described by flatLambdaCDM in the source. Combining DESIBAO withCMB and supernova compilations changes the evolving-w model preference; Pantheon+/Union3/DESY5 combinations report2.8/3.8/4.2sigma in the inspectedversion.

**Limitations**: Source-reported/model-conditional inference, not replicatedlikelihoods or direct identification of a dark-energyfield. DR1is contained inDR2, correlatedtracers are not independent datasets, and equation-of-state history is indirectlyinferred. Original8MBattempt was truncated; thisR2capture replaces it as selected-text evidence.

**research-note**: Selected primary-text review; modelparameterization, combineddatasetchoice, blindedpipeline validation and uncertainty treatment qualify the reported preference.

Capture SHA-256: `1e82f26e4cc3901b16168cd147f252bfa804f9c3caad3f4f7e3532640d237841`; captured 2026-11-25T06:44:07.345615+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-desi-dark — Extended Dark Energy analysis using DESI DR2 BAO measurements

Lodha, K.
Calderon, R.
Matthewson, W. L.
Shafieloo, A.
Ishak, M.
Pan, J.; 2025; 2025/03/18; 2025/04/03

https://arxiv.org/abs/2503.14743

**Source class**: preprint

**Status / reading depth**: selected-text; Abstract and selected PDF introduction/conclusions/model-comparison passages

**Sections inspected**: Abstract and selected PDF introduction/conclusions/model-comparison passages

**Supported claim**: Parametric and nonparametric extensions explore robustness of inferred evolving-dark-energy trends.

**Limitations**: An abstract/selected passage reading is not a reanalysis of likelihoods or a validation of all systematic choices.

**research-note**: Parametric and nonparametric extensions explore robustness of inferred evolving-dark-energy trends.

Capture SHA-256: `0de007414e3464ca00c81950a1db42c6be4a15dcac9bbabc559a7656e094274d`; captured 2026-11-25T06:25:59.364830+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-desi-dr1 — DESI 2024 VI: Cosmological Constraints from the Measurements of Baryon Acoustic Oscillations

DESI Collaboration
Adame, A. G.
Aguilar, J.
Ahlen, S.
Alam, S.
Alexander, D. M.; 2024; 2024/04/03; 2024/11/04

https://arxiv.org/abs/2404.03002

**Source class**: primary-paper

**Status / reading depth**: abstract-only; Abstract and bibliographic/version metadata only

**Sections inspected**: Abstract and bibliographic/version metadata only

**Supported claim**: The first-yearDESI BAO analysis constrains distance ratios. Author-reported evolving-dark-energy preferences vary with the CMB and supernova combination.

**Limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**research-note**: The first-yearDESI BAO analysis constrains distance ratios. Author-reported evolving-dark-energy preferences vary with the CMB and supernova combination.

Capture SHA-256: `a6eaf578b420ad4571eb5dad1de39e08c395f8b1627eb74604cb9318470b734c`; captured 2026-11-25T06:23:57.479962+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-pta — The NANOGrav 15-year Data Set: Evidence for a Gravitational-Wave Background

Agazie, Gabriella
Anumarlapudi, Akash
Archibald, Anne M.
Arzoumanian, Zaven
Baker, Paul T.
Becsy, Bence; 2023; 2023/06/28; 2023/06/28

https://arxiv.org/abs/2306.16213

**Source class**: primary-paper

**Status / reading depth**: abstract-only; Abstract and bibliographic/version metadata only

**Sections inspected**: Abstract and bibliographic/version metadata only

**Supported claim**: The15-yearNANOGrav abstract reports angular timing correlations consistent with a Hellings–Downs tensor background. Spectral/model choices affect reported evidence and do not uniquely identify origin.

**Limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**research-note**: The15-yearNANOGrav abstract reports angular timing correlations consistent with a Hellings–Downs tensor background. Spectral/model choices affect reported evidence and do not uniquely identify origin.

Capture SHA-256: `4173ca8d574b2b4dd10d2eee9847c39f69d6616bc7d47119dee13c833da8ae20`; captured 2026-11-25T06:23:57.480581+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-gwtc-tests — Tests of General Relativity with GWTC-3

The LIGO Scientific Collaboration
the Virgo Collaboration
the KAGRA Collaboration
Abbott, R.
Abe, H.
Acernese, F.; 2021; 2021/12/13; 2025/11/17

https://arxiv.org/abs/2112.06861

**Source class**: primary-paper

**Status / reading depth**: abstract-only; Abstract and bibliographic/version metadata only

**Sections inspected**: Abstract and bibliographic/version metadata only

**Supported claim**: The selectedGWTC-3 abstract reports consistency withGR in residual,dispersion,polarization and remnant tests under its event/waveform assumptions.

**Limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**research-note**: The selectedGWTC-3 abstract reports consistency withGR in residual,dispersion,polarization and remnant tests under its event/waveform assumptions.

Capture SHA-256: `cf13e4d66799f3e31552e408727b5b71a3f96740f5056b75866ae276f8a87219`; captured 2026-11-25T06:23:57.480920+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-microscope — MICROSCOPE mission: final results of the test of the Equivalence Principle

Touboul, Pierre
Métris, Gilles
Rodrigues, Manuel
Bergé, Joel
Robert, Alain
Baghi, Quentin; 2022; 2022/09/30; 2022/09/30

https://arxiv.org/abs/2209.15487

**Source class**: primary-paper

**Status / reading depth**: abstract-only; Abstract and bibliographic/version metadata only

**Sections inspected**: Abstract and bibliographic/version metadata only

**Supported claim**: The mission compares titanium/platinum free fall and reports no composition-dependent violation within statistical and systematic uncertainties at its tested sensitivity.

**Limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**research-note**: The mission compares titanium/platinum free fall and reports no composition-dependent violation within statistical and systematic uncertainties at its tested sensitivity.

Capture SHA-256: `4a60abd700a2d34693506405f538d47bba74c0ec5ed9c8425d788ac87baf8e35`; captured 2026-11-25T06:23:57.481791+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-q-entangle — A Spin Entanglement Witness for Quantum Gravity

Bose, Sougato
Mazumdar, Anupam
Morley, Gavin W.
Ulbricht, Hendrik
Toroš, Marko
Paternostro, Mauro; 2017; 2017/07/19; 2017/07/19

https://arxiv.org/abs/1707.06050

**Source class**: primary-paper

**Status / reading depth**: abstract-only; Abstract and bibliographic/version metadata only

**Sections inspected**: Abstract and bibliographic/version metadata only

**Supported claim**: The authors propose entangling separated masses through a gravitational interaction and witnessing spin correlations under stated mediation assumptions. This is not a performedexperiment.

**Limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**research-note**: The authors propose entangling separated masses through a gravitational interaction and witnessing spin correlations under stated mediation assumptions. This is not a performedexperiment.

Capture SHA-256: `41700e19f81d32221c6f6d3562d6eec387b49aa3c9248e91f93e1f15a13554fe`; captured 2026-11-25T06:23:57.750731+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-eft — General relativity as an effective field theory: The leading quantum corrections

Donoghue, John F.; 1994; 1994/05/25; 1994/05/25

https://arxiv.org/abs/gr-qc/9405057

**Source class**: primary-paper

**Status / reading depth**: abstract-only; Abstract and bibliographic/version metadata only

**Sections inspected**: Abstract and bibliographic/version metadata only

**Supported claim**: The author develops low-energy effectivegravity, separating calculable long-distance quantum contributions from unknown high-energy effects.

**Limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**research-note**: The author develops low-energy effectivegravity, separating calculable long-distance quantum contributions from unknown high-energy effects.

Capture SHA-256: `f1afa9a22d8a8eec01dfaca5b8628e4310845fd42b7f5c8b12e39b2b35ea232b`; captured 2026-11-25T06:23:57.760746+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-ads — The Large N Limit of Superconformal Field Theories and Supergravity

Maldacena, Juan M.; 1997; 1997/11/27; 1998/01/22

https://arxiv.org/abs/hep-th/9711200

**Source class**: primary-paper

**Status / reading depth**: abstract-only; Abstract and bibliographic/version metadata only

**Sections inspected**: Abstract and bibliographic/version metadata only

**Supported claim**: The abstract identifies controlled large-N/near-horizon relationships and conjectures broaderAdS/string–field-theory dualities under specified conditions.

**Limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**research-note**: The abstract identifies controlled large-N/near-horizon relationships and conjectures broaderAdS/string–field-theory dualities under specified conditions.

Capture SHA-256: `3758aa063f3b3f0d1240b3989a3827d971ad2000fa243989eab5d0a2641647e5`; captured 2026-11-25T06:23:57.771381+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-lqg — Discreteness of area and volume in quantum gravity

Rovelli, Carlo
Smolin, Lee; 1994; 1994/11/02; 1994/11/02

https://arxiv.org/abs/gr-qc/9411005

**Source class**: primary-paper

**Status / reading depth**: abstract-only; Abstract and bibliographic/version metadata only

**Sections inspected**: Abstract and bibliographic/version metadata only

**Supported claim**: The authors construct geometricoperators in a looprepresentation and describe discrete spectra. This does not establish measuredspacetime discreteness or complete physicaldynamics.

**Limitations**: Abstract-only reading; author-reported result not independently reproduced; full methods/data not reviewed.

**research-note**: The authors construct geometricoperators in a looprepresentation and describe discrete spectra. This does not establish measuredspacetime discreteness or complete physicaldynamics.

Capture SHA-256: `855ffa238e9973188107ef0e67ca1cfd6872e0db5dbbfae35a805e6c5ab23280`; captured 2026-11-25T06:23:57.823197+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-gwosc — GWOSC all-events catalogue index, captured2026-11-25

LIGO/Virgo/KAGRA / GWOSC; None; Dated APIcapture; catalogue labels are metadata, not a guarantee of continuouslylatestrelease

https://gwosc.org/eventapi/json/allevents/

**Source class**: official-data

**Status / reading depth**: metadata-only; OfficialAPI top-level events structure and catalogue labels inspected; no strainwaveforms reanalysed. EarlierGWTC3selection-page reading preserved inR1freeze.

**Sections inspected**: events catalog.shortName metadata labels
Selected event record metadata structure

**Supported claim**: The retrievedofficialindex contains GWTC-4.0,GWTC-4.1 andGWTC-5.0 labels alongside oldercatalogues. This atlas therefore treats its olderGWTC3test paper as a historicalselectedbaseline, not the latestcatalogue.

**Limitations**: An event-index capture is not a fullcataloguepaper review, detectorcalibration audit or independentlycleanedstrain dataset. Do not infer unreadeventproperties or comprehensivecurrentliterature from labels.

**research-note**: Official data-index metadata anchors cataloguechronology and source-access context; analysis claims rely on separatelyreadprimarypapers.

Capture SHA-256: `731f167b5545db5b3b4345994fde52730e260bb1112a739051be7f884fca7969`; captured 2026-11-25T06:44:07.346707+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-codata — 2022CODATA Newtonian constant of gravitation

NIST/CODATA; 2022; Captured2026-11-25; source-specific edition noted

https://physics.nist.gov/cgi-bin/cuu/Value?bg

**Source class**: official-data

**Status / reading depth**: selected-text; NumericalG,standarduncertainty,units and2022CODATA attribution

**Sections inspected**: NumericalG,standarduncertainty,units and2022CODATA attribution

**Supported claim**: G=6.67430(15)e-11m³kg^-1s^-2 is measured with relative standard uncertainty2.2e-5.

**Limitations**: Not an exact defined constant; a quoted standard uncertainty is not a universal confidence interval.

**research-note**: G=6.67430(15)e-11m³kg^-1s^-2 is measured with relative standard uncertainty2.2e-5.

Capture SHA-256: `c8ce82543b405f67d2afb2fb4782abd487cd474d50942c85b9f03b408b113510`; captured 2026-11-25T06:23:57.883702+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-pdg — Experimental Tests of Gravitational Theory, PDG2025

T.Damour / ParticleDataGroup; 2025; Captured2026-11-25; source-specific edition noted

https://pdg.lbl.gov/2025/reviews/rpp2025-rev-gravity-tests.pdf

**Source class**: independent-review

**Status / reading depth**: selected-text; Official2025PDF §§21.1 and selected precision-test overview passages

**Sections inspected**: Official2025PDF §§21.1 and selected precision-test overview passages

**Supported claim**: Metric signature, Einstein coupling and test classes are explicitly stated.

**Limitations**: Review of selected tests, not an original measurement or complete2026 update.

**research-note**: Metric signature, Einstein coupling and test classes are explicitly stated.

Capture SHA-256: `53fa34005e1d08f9de93a4b5fbec0b8b619a5ebf12db1e7277558f3ae29573aa`; captured 2026-11-25T06:23:57.898754+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-hawking — Particle creation by black holes

S.W.Hawking; 1975; Captured2026-11-25; source-specific edition noted

https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-43/issue-3/Particle-creation-by-black-holes/cmp/1103899181.full

**Source class**: primary-paper

**Status / reading depth**: abstract-only; Retrieved primary article page metadata/abstract only

**Sections inspected**: Retrieved primary article page metadata/abstract only

**Supported claim**: Semiclassical black-hole particle creation is the historical source of the temperature prediction.

**Limitations**: No full-paper derivation or astrophysical emission measurement reviewed here.

**research-note**: Semiclassical black-hole particle creation is the historical source of the temperature prediction.

Capture SHA-256: `632709a2bb0908122654aa1640e0280c50a5da6e49f83459cff6d0c7d4e50492`; captured 2026-11-25T06:25:59.365277+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-2026-1 — Gravity-mediated entanglement via infinite-dimensional systems

Stefan L Ludescher
Leon D Loveridge
Thomas D Galley
Markus P Müller; 2026; Crossref publisher-deposited date[2026, 5, 27]

https://doi.org/10.1088/1751-8121/ae65e7

**Source class**: metadata

**Status / reading depth**: metadata-only; Exact-title/DOI/date discovery metadata only; publisher full article not accessible

**Sections inspected**: Bibliographic metadata only

**Supported claim**: A2026theory record exists concerning gravity-related entanglement; no result from unread text admitted.

**Limitations**: IOP200response was an error page; guessedAPSjournal route404. Metadata is not article reading or experimental evidence.

**research-note**: Unreviewed2026lead retained to expose the cutoff/search gap, not to certify novelty.

Capture SHA-256: `3b69da6fb7b8df362255686f927aff4edacb6d6a39c2ec293e08a92b49f696eb`; captured 2026-11-25T06:33:43.798846+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-2026-2 — Matter-mediated entanglement by classical gravity under realistic matter dynamics

Ziqian Tang
Chen Yang
Hanyu Xue
Haochen Yu
Zizhao Han
Zikuan Kan
Yulong Liu; 2026; Crossref publisher-deposited date[2026, 11, 20]

https://doi.org/10.1103/bg9v-ln16

**Source class**: metadata

**Status / reading depth**: metadata-only; Exact-title/DOI/date discovery metadata only; publisher full article not accessible

**Sections inspected**: Bibliographic metadata only

**Supported claim**: A2026theory record exists concerning gravity-related entanglement; no result from unread text admitted.

**Limitations**: IOP200response was an error page; guessedAPSjournal route404. Metadata is not article reading or experimental evidence.

**research-note**: Unreviewed2026lead retained to expose the cutoff/search gap, not to certify novelty.

Capture SHA-256: `3b69da6fb7b8df362255686f927aff4edacb6d6a39c2ec293e08a92b49f696eb`; captured 2026-11-25T06:33:43.798846+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-eht-record — The persistent shadow of the supermassive black hole of M87

Event Horizon Telescope Collaboration; complete attribution in linked source; 2025; Crossref date2025-01

https://doi.org/10.1051/0004-6361/202451296

**Source class**: metadata

**Status / reading depth**: metadata-only; Title,DOI,publicationdate and publisherPDFlink metadata; PDFaccess403

**Sections inspected**: Bibliographic metadata only

**Supported claim**: A2025M87persistent-shadow paper is indexed; this chapter does not claim its full analysis was read.

**Limitations**: Initial guessedarXiv2401.12709 was unrelatedviscoelasticity and rejected. EHTbrightness imaging requires emission/calibration priors; no new EHTnumeric result imported.

**research-note**: Source identity is mapped; detailed paper review remains an explicit gap.

Capture SHA-256: `b4ef205266539d9c9298c6313f2daa984163cd78b4b19dda549fe1f9bac879ba`; captured 2026-11-25T06:33:43.798846+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-gwtc5 — GWTC-5.0: Tests of General Relativity

The LIGO Scientific Collaboration
the Virgo Collaboration
the KAGRA Collaboration
Abac, A. G.; 2026; arXiv2607.19293v1;firstposted2026/07/21

https://arxiv.org/abs/2607.19293v1

**Source class**: preprint

**Status / reading depth**: selected-text; Complete PDF downloaded/extracted; title/abstract, eventselection and omitted-test/systematic passages, selected waveform/QNM Eq19–20 passage, and §8 conclusions read. Data,fulltables andcode not independentlyreanalysed.

**Sections inspected**: Title/abstract anddatedv1header
Selection:two-detector andFAR threshold;new/cumulative eventcounts
Explicit omittedtests and knownbias/scope limitations
Selected QNM/complexfrequency and waveformmatching passage Eq19–20
§8 Conclusions

**Supported claim**: The2026preprint reports seven selectedGRtests using a cumulative168events under itsselection. It reports no significantbeyond-GR evidence in those tests, while explicitlydiscussing finitecatalogue effects and ringdownsystematics.

**Limitations**: A selectedpreprint, not an exhaustiveNov2026survey or proof ofGR. Some tests are omitted becauseof knownbiases,weakconstraints orscope. Combinedringdown results include edge-of-credible-region behavior andfinite-sample uncertainty; an overtone can be contaminated by unmodeledcontent.

**research-note**: The source improves chronologicalcoverage beyondGWTC3 while making testselection,calibration,baselinewaveforms andomittedtests visible.

Capture SHA-256: `4ab5df879daa2f4acd2d9fac32e64f5daf78d8fddd73ba5d76ecc5a2047ab101`; captured 2026-11-25T06:45:55.434193+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### grav-src-gw250114 — Black Hole Spectroscopy and Tests of General Relativity with GW250114

The LIGO Scientific Collaboration
the Virgo Collaboration
the KAGRA Collaboration; 2025; arXiv2509.08099v1;firstposted2025/09/09

https://arxiv.org/abs/2509.08099v1

**Source class**: preprint

**Status / reading depth**: selected-text; Complete PDF downloaded/extracted; title/abstract, eventmodel assumptions, BHspectroscopy method, full-signal/pSEOBNR Fig4 passage and440mode-presence caveat read. Supplementaryanalyses andrawdata not reanalysed.

**Sections inspected**: Title/abstract andv1date
GW250114 eventmodel andremnant spectroscopy definitions
QNM model,starttime anddamping context
Full-signal pSEOBNR/Fig4 constraints and explicit440presence caveat

**Supported claim**: The selected2025preprint reports tests ofGW250114 using ringdown andfull-signal models. It explicitly says its440frequencyconstraint cannot byitself establish that the440mode is present because themodel enforces waveformcontinuity/nonzeroamplitudes.

**Limitations**: Source-era single-eventclaims,not a continuouslylatestloudestevent assertion. Modepresence,deviationparameters,starttime andwaveformassumptions are distinct. Noindependent detector-data analysis,noise/calibration audit ormode-detection replication here.

**research-note**: A concrete counterexample to equating a fittedspectralfrequencybound with a free-standing detection of thatmode; physical interpretation depends on thelikelihood/model.

Capture SHA-256: `8514216587c4a21797b6ebe69643712395daf280a3646542cbe8b8824892f809`; captured 2026-11-25T06:45:55.435050+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.


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


# Mathematics: foundations, structures and frontiers

Mathematics becomes useful across a research collection when a reader can reconstruct what each statement actually says. A formula is not just a string to recognize. It specifies objects, operations, quantifiers, assumptions and a conclusion. The same displayed symbols can describe different problems when the scalar field, topology, operator domain or boundary condition changes. This chapter follows three independently browsable roots: algebra, geometry, and calculus/analysis. Their connections are prerequisites and specified structural maps. A graph edge is not a proof that two physical systems are equivalent.

The corpus is selected and dated to 25 November 2026. It maps a substantial set of subjects, develops representative statements and reviews four recent primary-paper claims at an explicitly limited reading depth. It is not all mathematics, a complete undergraduate curriculum, a review of every proof in every cited book, or a novelty certificate. The machine-readable appendix records hypotheses, symbols, worked examples, failure cases and provenance. When a topic is mapped but its specialist literature has not been read deeply, that distinction remains visible. A useful map should help a reader find the next missing premise rather than disguise it.

## How to read the three roots

Algebra begins with arithmetic because cancellation already contains a major lesson about assumptions. Dividing by a nonzero integer is allowed in the rationals; dividing by a nonzero residue class need not be allowed in a modular ring. Linear algebra then introduces kernels, images, orthogonality and singular values. Abstract algebra asks which operations survive under a map or quotient. Commutative and homological algebra extend the language from numbers to ideals, modules and complexes. Category theory compares the maps and universal properties that organize these constructions. Representation theory gives abstract symmetry a concrete linear action, while number theory and arithmetic geometry raise questions that cannot be answered by manipulating a few numerical examples.

Geometry begins by declaring what structure is available. A set of points is not automatically a metric space. A topological space knows continuity, but does not by itself supply lengths or angles. A smooth manifold adds differentiable charts. A Riemannian metric supplies inner products in tangent spaces and defines lengths, geodesics and curvature. A symplectic form supplies a different kind of structure, appropriate to Hamiltonian evolution. Algebraic geometry encodes polynomial equations through ideals and local rings, while topology studies invariants that survive continuous deformation. A photograph alone does not specify any of these entire structures.

Calculus begins with limits and the order of quantifiers. Pointwise information can fail to be uniform; small function values can coexist with large derivatives. Integration depends on an integration theory and measure. Functional analysis moves these questions to spaces of functions and operators. Differential equations require a solution concept and data. Probability adds a measure on possible outcomes, and stochastic calculus adds quadratic variation. Numerical analysis asks what an algorithm computes on finite precision, how sensitive the problem is, and whether a limit has actually been controlled.

The five-level taxonomy is a navigation aid rather than a claim that mathematical knowledge grows in one straight line. Root, branch, subject, advanced structure and frontier are distinct levels in the selected tree. A reader can enter linear algebra directly, but the prerequisite graph explains why singular values matter for inverse problems or why a local inverse theorem needs an invertible derivative. A topology node can support a geometric discussion without determining the metric. A category-theoretic equivalence needs an actual functor and inverse data; sharing a diagram shape does not establish it.

## Proof, example and counterexample have different jobs

A proof establishes a quantified statement under its hypotheses. A worked example checks how the definitions operate in one concrete setting and often reveals where a numerical implementation could go wrong. A counterexample shows that a dropped assumption or overextended conclusion is false. These roles are complementary. Ten thousand successful matrix examples do not establish a universal spectral theorem. Conversely, one defective nonnormal matrix decisively refutes the assertion that every matrix has an orthonormal eigenbasis.

The proof sketches below are teaching reconstructions. They state the main mechanism rather than pretending to reproduce every cited source proof. Some advanced results require lemmas that a full course would develop over several chapters. Their scope is made explicit rather than hidden by a familiar theorem name. Source reading records distinguish front matter, section navigation, selected statements and inspected argument passages. A source citation supplies context at the recorded depth; it does not certify an entire textbook, every application in physics, or an original result by this atlas.

Consider rank–nullity together with an affine solution fiber. If Ax=b has one solution, then adding any vector in kerA leaves the observation unchanged. This is an exact mathematical ambiguity, not an instrument defect. Extra precision in b does not identify an invisible kernel component. Regularization chooses among candidates using additional assumptions; it does not make those assumptions empirical facts. Singular values add a second issue: a direction may be visible but extremely sensitive to data noise. Identifiability and conditioning therefore need separate entries in a scientific notebook.

The same discipline applies to scales. A normalized spatial pattern does not fix a physical length, propagation speed, density or support condition. In a standing-wave model, changing length and wave speed together can preserve an observed frequency. Many different parameter pairs then lie on one observable fiber. A physical experiment can add independent constraints, but it must actually measure them. Neither symbolic similarity nor the age of a geometric motif supplies the missing measurements. The physics chapters can use this mathematics only after naming their state space, observables and scale map.

## Local, global, finite and infinite statements

The inverse function theorem is local. It does not turn every locally invertible map into a global bijection. A geodesic equation describes stationary curves in a chart, but not every geodesic segment is globally shortest. A closed differential form may be locally exact while a global integral around a loop remains nonzero. These distinctions are not exceptions that can be discarded to simplify a narrative; they are what the theorem means.

Infinite-dimensional analysis adds another boundary. A finite self-adjoint matrix has an orthonormal eigenbasis. A compact self-adjoint operator has a closely related discrete description, but the identity on an infinite-dimensional Hilbert space is not compact. General self-adjoint operators require spectral measures, and unbounded differential operators require domains. Boundary conditions can change the operator and its spectrum. A few computed eigenvalues do not certify the entire spectrum, a spectral gap, or the convergence of a discretization to a physical continuum.

Convergence also has several meanings. Pointwise, uniform, weak, strong and operator-norm convergence answer different questions. Dominated convergence gives one valid route for exchanging a limit with an integral; it does not license every visually plausible exchange. A narrow spike can disappear at almost every fixed point while retaining constant area. A function sequence can converge uniformly while its derivatives oscillate forever. A careful derivation identifies the topology and provides the estimate that connects it to the observable being reported.

## From mathematics to a physical calculation

The records use nondimensional abstract conventions. This is intentional: a vector space or category does not intrinsically carry metres, seconds or joules. Reintroducing physical units requires an explicit interpretation of coordinates, coefficients, state variables and observables. A heat equation might use a diffusivity measured in square metres per second, but the mathematical semigroup statement below uses a declared normalized torus. An Itô process may model a calibrated quantity, but a Brownian coordinate is not automatically a physical voltage.

A sound derivation therefore has two parts. First prove or apply the mathematical statement in its exact domain. Then justify the model dictionary that connects mathematical quantities with measured channels. A conserved norm in a signal transform is not automatically a complete energy budget for a loudspeaker. A Poisson bracket is not a unique prescription for quantum apparatus. A differential-geometric curvature formula is not evidence that an ornamental spiral creates gravity. These transfers need independent physical premises, uncertainties and controls.

The next records provide a compact path through the selected foundations. Read the assumptions before the equation, calculate the example, then try the failure case. Where an example is finite algebra, its numbers are illustrative values rather than measured data. Where a result is conditional on completeness, compactness, finite variance or a chosen field, retain that condition when using the formula elsewhere.

## Representative theorem and calculation notebook

### 1. Division of rational fractions

`\frac{a/b}{c/d}=\frac{ad}{bc}`

a,b,c,d means integers specifying rational numbers. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** b,c,d are nonzero.

**Why the statement works.** Multiply by the reciprocal d/c and use associative multiplication.

**Worked example.** a=2,b=3,c=4,d=5. (2/3)/(4/5)=2*5/(3*4). Result: 5/6.

**Failure case or boundary.** c=0 makes the original division undefined; cancellation never licenses division by zero.

### 2. Euclidean algorithm

`\gcd(a,b)=\gcd(b,a-qb)`

a,b means integers with b nonzero; q means integer quotient. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Use integer division a=qb+r with 0≤r<|b|.

**Why the statement works.** Common divisors divide each integer combination. Each remainder decreases until zero.

**Worked example.** a=84,b=30. 84=2*30+24; 30=24+6 and 24=4*6. Result: gcd(84,30)=6.

**Failure case or boundary.** Over arbitrary rings a division algorithm need not exist.

### 3. Bézout identity over integers

`\gcd(a,b)=ua+vb`

a,b means integers not both zero; u,v means integer coefficients. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** The gcd is chosen positive.

**Why the statement works.** Back substitute the Euclidean remainders or take the least positive ideal element.

**Worked example.** a=84,b=30. 6=30-(84-2*30). Result: 6=(-1)*84+3*30.

**Failure case or boundary.** A gcd in a general integral domain need not be an integer-style linear combination.

### 4. Criterion for a modular inverse

`a^{-1}\pmod n\text{ exists}\iff\gcd(a,n)=1`

a means integer residue representative; n means integer modulus greater than one. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Equality is in the quotient ring Z/nZ.

**Why the statement works.** Bézout supplies au+nv=1. Conversely an inverse makes every common divisor divide1.

**Worked example.** a=3,n=7. 3*5=15=1+2*7. Result: Inverse of3 modulo7 is5.

**Failure case or boundary.** 2 is nonzero modulo6 but has no inverse.

### 5. Finite geometric sum

`\sum_{k=0}^{n-1}r^k=\frac{1-r^n}{1-r}`

n means positive integer; r means real or complex scalar. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** For the displayed quotient r≠1; at r=1 the sum is n.

**Why the statement works.** Multiply the finite sum by1-r and cancel adjacent terms.

**Worked example.** r=2,n=4. 1+2+4+8=(1-16)/(1-2). Result: 15.

**Failure case or boundary.** An infinite sum requires |r|<1; a finite identity does not justify an infinite limit.

### 6. Polynomial factor theorem

`p(a)=0\iff p(x)=(x-a)q(x)`

p,q means polynomials over a field; a means field element. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Evaluation and division take place over the same field.

**Why the statement works.** Divide p by x-a; the constant remainder is p(a).

**Worked example.** p=x²-1,a=1. x²-1=(x-1)(x+1). Result: q=x+1.

**Failure case or boundary.** A polynomial function on a finite field may vanish everywhere without being the zero formal polynomial.

### 7. Rank–nullity

`\dim V=\dim\ker T+\dim\operatorname{im}T`

V means finite-dimensional vector space; T means linear map V→W. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** V and W have a common scalar field; finite dimension is essential for integer subtraction.

**Why the statement works.** Extend a kernel basis to a basis of V. Images of the added vectors form an image basis.

**Worked example.** T:R³→R², T(x,y,z)=(x+y,z). Kernel is span(1,-1,0); image is R². Result: 3=1+2.

**Failure case or boundary.** A nonlinear map has no rank-nullity theorem in this form.

### 8. Affine solution fiber

`\{x:Ax=b\}=x_0+\ker A`

A means matrix; b means target vector; x0 means one solution. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** A solution x0 must exist before the affine fiber formula is used.

**Why the statement works.** Subtract Ax=Ax0 and use linearity.

**Worked example.** A=[1 1],b=3. x0=(3,0); add t(1,-1). Result: All solutions are(3+t,-t).

**Failure case or boundary.** If b is outside the range, there is no affine solution fiber.

### 9. Multiplicativity of determinant

`\det(AB)=\det A\det B`

A,B means square matrices of the same size. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Entries lie in a commutative field or ring.

**Why the statement works.** Use the alternating multilinear characterization on the columns of the product.

**Worked example.** A=diag(2,3),B=diag(5,7). detA=6,detB=35; AB=diag(10,21). Result: detAB=210.

**Failure case or boundary.** A determinant is not the sum of eigenvalues; that is the trace.

### 10. Finite-dimensional spectral theorem

`A=U\Lambda U^*,\quad U^*U=I`

A means complex normal matrix; U means unitary matrix; Λ means diagonal matrix. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** A*A=AA*; for self-adjoint A, eigenvalues are real.

**Why the statement works.** Schur triangularization plus normality eliminates off-diagonal entries.

**Worked example.** A=[[2,1],[1,2]]. Normalized eigenvectors(1,1)/√2 and(1,-1)/√2 have eigenvalues3 and1. Result: An orthonormal eigenbasis exists.

**Failure case or boundary.** The Jordan block[[1,1],[0,1]] is not normal and has no eigenbasis.

### 11. Singular-value decomposition

`A=U\Sigma V^*`

A means m×n real or complex matrix; U,V means unitary matrices; Σ means nonnegative diagonal rectangular matrix. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Finite dimensions and Euclidean/Hermitian inner products are fixed.

**Why the statement works.** Diagonalize A*A. Normalize nonzero images to obtain left singular vectors and complete bases.

**Worked example.** A=diag(3,0). A*A=diag(9,0). Result: Singular values are3 and0.

**Failure case or boundary.** Singular values are nonnegative and are not generally the complex eigenvalues.

### 12. Normal equations and projection

`A^*Ax=A^*b`

A means matrix; b means target vector; x means least-squares minimizer. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Euclidean norm; uniqueness follows if A has full column rank.

**Why the statement works.** Differentiate the squared residual or impose residual orthogonality to ranA.

**Worked example.** A=(1,1)^T,b=(1,3)^T. 2x=4. Result: Unique minimizer x=2, residual(-1,1).

**Failure case or boundary.** Forming A*A can square the condition number; QR/SVD is often numerically preferable.

### 13. Minimum-norm pseudoinverse solution

`x=A^+b`

A+ means Moore–Penrose pseudoinverse; b means target vector. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** The claim concerns the minimum-norm member among least-squares solutions.

**Why the statement works.** Invert nonzero singular values and set null singular coordinates to zero.

**Worked example.** A=[1 1],b=2. The solution fiber is(1+t,1-t); squared norm=2+2t². Result: Minimum norm at x=(1,1).

**Failure case or boundary.** Small singular values amplify noise; a pseudoinverse is not a regularization guarantee.

### 14. Cayley–Hamilton theorem

`p_A(A)=0`

A means n×n matrix; pA means characteristic polynomial det(tI-A). All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Finite square matrix over a commutative field.

**Why the statement works.** Use polynomial adjugate identity and compare coefficients before substituting A.

**Worked example.** A=diag(2,3), p=t²-5t+6. Each diagonal entry satisfies p(2)=p(3)=0. Result: A²-5A+6I=0.

**Failure case or boundary.** Substituting a matrix into an identity with noncommuting coefficients needs care.

### 15. Lagrange theorem

`|G|=|H|[G:H]`

G means finite group; H means subgroup; [G means H]:number of left cosets. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** H is a subgroup, not an arbitrary subset.

**Why the statement works.** Cosets partition G and multiplication gives bijections H→gH.

**Worked example.** G=S3,H={e,(12)}. There are3 cosets each of size2. Result: 6=2*3.

**Failure case or boundary.** A divisor of group order need not occur as subgroup order in every finite group.

### 16. First isomorphism theorem

`G/\ker\varphi\cong\operatorname{im}\varphi`

φ means group homomorphism; kerφ means normal kernel. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** The map preserves the group operation.

**Why the statement works.** Send the coset g kerφ to φ(g); verify well-definedness and bijection.

**Worked example.** φ:Z→Z/6Z, reduction modulo6. Kernel is6Z and the image is all residues. Result: Z/6Z is the quotient by6Z.

**Failure case or boundary.** A quotient by a nonnormal subgroup is not a group quotient.

### 17. Orbit–stabilizer theorem

`|Gx|=|G|/|G_x|`

G means finite acting group; x means point; Gx means orbit; Gx-subscript means stabilizer. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** A genuine group action is specified.

**Why the statement works.** Cosets of the stabilizer correspond bijectively to orbit points.

**Worked example.** S3 acts on{1,2,3}, x=1. Stabilizer has2 elements. Result: Orbit has3 points.

**Failure case or boundary.** Orbit size depends on the action; the same abstract group has different orbits.

### 18. Quotient ring well-definedness

`(a+I)(b+I)=ab+I`

R means ring; I means two-sided ideal; a,b means ring elements. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** For noncommutative rings, a two-sided ideal is required.

**Why the statement works.** Changing representatives adds terms ai+jb+ij that remain in I.

**Worked example.** R=Z,I=5Z. (3+I)(4+I)=12+I. Result: Product is the residue2.

**Failure case or boundary.** An additive subgroup need not be an ideal and may not support quotient multiplication.

### 19. Chinese remainder theorem

`R/(I\cap J)\cong R/I\times R/J`

R means commutative ring with identity; I,J means ideals. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** I+J=R.

**Why the statement works.** Map a to its residue pair. Kernel is I∩J and comaximality gives surjectivity.

**Worked example.** R=Z,I=3Z,J=5Z. x=8 has residues(2,3). Result: Z/15Z≅Z/3Z×Z/5Z.

**Failure case or boundary.** Moduli4 and6 are not coprime, so arbitrary residue pairs need not lift.

### 20. Hilbert basis theorem

`R\text{ Noetherian}\Rightarrow R[x]\text{ Noetherian}`

R means commutative ring; x means formal variable. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Noetherian means every ideal is finitely generated.

**Why the statement works.** Control the ideals of leading coefficients and inductively reduce polynomial degrees.

**Worked example.** R=k a field. Every ideal of k[x] is principal by Euclidean division. Result: k[x] is Noetherian.

**Failure case or boundary.** The countably generated polynomial ring k[x1,x2,...] is not Noetherian.

### 21. Finite Galois correspondence

`K\subseteq E\subseteq L\longleftrightarrow\operatorname{Gal}(L/E)`

L/K means finite Galois extension; E means intermediate field. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** The extension must be normal and separable.

**Why the statement works.** Fixed fields and stabilizing subgroups are inverse inclusion-reversing constructions.

**Worked example.** L=Q(√2),K=Q. Automorphisms send √2 to±√2. Result: Two subgroups correspond to Q and Q(√2).

**Failure case or boundary.** A purely inseparable extension can have a trivial automorphism group despite being nontrivial.

### 22. Fermat small theorem

`a^{p-1}\equiv1\pmod p`

p means prime; a means integer not divisible by p. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Work in the multiplicative group of nonzero residues modulo p.

**Why the statement works.** Lagrange theorem gives element order dividing p-1.

**Worked example.** p=7,a=2. 2^6=64=1+9*7. Result: Residue1.

**Failure case or boundary.** A composite modulus may have nonzero nonunits; this is not a general primality certificate.

### 23. Maschke complete reducibility

`V=W\oplus W^\prime`

G means finite group; V means finite-dimensional representation over k; W means invariant subspace. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** char(k) does not divide |G|.

**Why the statement works.** Average any projection onto W over G to obtain an equivariant projection.

**Worked example.** G=C2 over R acts by diag(1,-1). The two coordinate axes are invariant. Result: Direct sum of trivial and sign representations.

**Failure case or boundary.** In characteristic2 the representation of C2 can have a nontrivial Jordan block.

### 24. Schur lemma over an algebraically closed field

`\operatorname{End}_G(V)=kI`

V means nonzero finite-dimensional irreducible representation; k means algebraically closed field. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Endomorphisms commute with the group action.

**Why the statement works.** Kernel and image are invariant. Subtract an eigenvalue and use irreducibility to force a scalar.

**Worked example.** An irreducible complex1D representation. Every linear map is multiplication by a complex scalar. Result: Commutant consists of scalars.

**Failure case or boundary.** Over R irreducible commutants may be isomorphic to C or H, not only real scalars.

### 25. Universal property of tensor product

`\operatorname{Hom}(V\otimes W,U)\cong\operatorname{Bil}(V,W;U)`

V,W,U means vector spaces over one field; Bil means bilinear maps. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** The isomorphism is natural in all spaces.

**Why the statement works.** Quotient the free vector space on pairs by the bilinearity relations.

**Worked example.** V=W=R²,U=R, b(v,w)=v·w. Set L(ei⊗ej)=δij and extend linearly. Result: One linear map represents the bilinear dot product.

**Failure case or boundary.** v⊗w is not a pair with componentwise nonlinear operations.

### 26. Homology of a chain complex

`H_n(C)=\ker\partial_n/\operatorname{im}\partial_{n+1}`

C means chain complex; ∂n means boundary maps. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** ∂n∂n+1=0 ensures boundaries are cycles.

**Why the statement works.** Form the quotient of cycles by the subspace or subgroup of boundaries.

**Worked example.** Cellular chains of a circle over Q. One0-cell, one1-cell, both boundary maps zero. Result: H0≅Q,H1≅Q.

**Failure case or boundary.** Without boundary-squared-zero, the displayed quotient may not be defined.

### 27. Yoneda lemma

`\operatorname{Nat}(\operatorname{Hom}(A,-),F)\cong F(A)`

C means locally small category; A means object; F means C→Set covariant functor. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Functor variance must match the representable shown.

**Why the statement works.** Evaluate a natural transformation at idA. Recover its component on f:A→X as F(f) applied to the chosen element.

**Worked example.** C=Set,F=Hom(B,-). A natural transformation is composition with a map B→A. Result: Natural transformations correspond to Hom(B,A).

**Failure case or boundary.** Reversing variance without reversing arrows changes the statement.

### 28. Euler characteristic of a finite cell complex

`\chi(X)=\sum_k(-1)^k c_k=\sum_k(-1)^k b_k`

ck means number of k-cells; bk means dimension of kth rational homology. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Finite CW complex; homology over a field for Betti numbers.

**Why the statement works.** Rank-nullity makes boundary dimensions cancel in the alternating sum.

**Worked example.** A sphere with one0-cell and one2-cell. χ=1+1. Result: χ(S²)=2.

**Failure case or boundary.** For a torus χ=0; genus cannot be ignored when using planar counting.

### 29. Pythagorean theorem

`c^2=a^2+b^2`

a,b means perpendicular Euclidean side lengths; c means hypotenuse length. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Right angle in a Euclidean inner-product plane.

**Why the statement works.** Expand the squared norm of two orthogonal vectors.

**Worked example.** a=3,b=4. c²=9+16. Result: c=5.

**Failure case or boundary.** On a curved surface geodesic triangles do not generally satisfy this Euclidean formula.

### 30. Law of cosines

`c^2=a^2+b^2-2ab\cos\theta`

a,b means positive Euclidean lengths; θ means included angle in radians; c means opposite side. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** The angle and lengths refer to the same Euclidean triangle.

**Why the statement works.** Write c-vector=u-v and expand its inner product.

**Worked example.** a=b=1,θ=π/3. c²=2-2*(1/2). Result: c=1.

**Failure case or boundary.** A diagram drawn in perspective does not supply the actual metric angle.

### 31. Cauchy–Schwarz inequality

`|\langle x,y\rangle|\leq\|x\|\|y\|`

x,y means inner-product vectors. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Positive-definite real or complex inner product; choose one conjugate-linearity convention.

**Why the statement works.** Minimize ||x-ty||² over scalar t, or handle y=0 separately.

**Worked example.** x=(1,1),y=(1,-1). Inner product0 while both norms are√2. Result: 0≤2.

**Failure case or boundary.** An indefinite Lorentzian bilinear form is not an inner product and needs different inequalities.

### 32. Triangle inequality from an inner product

`\|x+y\|\leq\|x\|+\|y\|`

x,y means inner-product vectors. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Norm is induced by a positive-definite inner product.

**Why the statement works.** Expand the norm square and bound the real cross term by Cauchy–Schwarz.

**Worked example.** x=(3,0),y=(0,4). ||x+y||=5≤3+4. Result: 5≤7.

**Failure case or boundary.** Equality requires compatible directions; perpendicular vectors usually give strict inequality.

### 33. Generalized Stokes theorem

`\int_Md\omega=\int_{\partial M}\omega`

M means oriented smooth compact n-manifold with boundary; ω means smooth(n-1)-form; d means exterior derivative increasing form degree by one; ∂M means boundary with induced outward-normal-first orientation. Units follow the abstract nondimensional convention.

**Assumptions.** Boundary has induced outward-normal-first orientation; compact support may replace compactness.

**Why the statement works.** Use a partition of unity and reduce in charts to the one-variable fundamental theorem.

**Worked example.** M=[0,1],ω=f(x)=x² as a0-form. ∫0¹2x dx=f(1)-f(0). Result: 1.

**Failure case or boundary.** Omitting boundary terms or changing boundary orientation changes the answer. The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.

**Source audit.** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

### 34. Local inverse function theorem

`D(f^{-1})(f(a))=[Df(a)]^{-1}`

f means C1 map between open subsets of Rn; a means base point. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** detDf(a)≠0; conclusion is local.

**Why the statement works.** Linearize f near a and solve the correction by a contraction argument.

**Worked example.** f(x)=x+x³ near0. f′(0)=1. Result: A differentiable local inverse exists with derivative1 at0.

**Failure case or boundary.** f(x)=x² has derivative0 at0 and is not locally invertible across0.

### 35. Implicit differentiation theorem

`Dg=-[D_yF]^{-1}D_xF`

F means C1 map(x,y)→Rm; g means local solution y=g(x). All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** F(a,b)=0 and DyF(a,b) is invertible.

**Why the statement works.** Apply the inverse function theorem to(x,y)↦(x,F(x,y)), then differentiate the constraint.

**Worked example.** F(x,y)=x²+y²-1 near(0,1). DyF=2y≠0; g′=-x/y. Result: g′(0)=0.

**Failure case or boundary.** At(1,0) this graph in y over x is singular even though the circle is smooth.

### 36. Geodesic equation

`\ddot x^k+\Gamma^k_{ij}\dot x^i\dot x^j=0`

xk means local coordinates along an affinely parameterized curve; Γ means Levi-Civita connection coefficients; g means smooth positive-definite Riemannian metric; τ means affine curve parameter; i,j,k means coordinate indices; repeated i,j are summed. Units follow the abstract nondimensional convention.

**Assumptions.** Smooth Riemannian metric and a specified chart; affine parameter.

**Why the statement works.** Stationarize the energy functional, or require covariant acceleration zero.

**Worked example.** Euclidean Cartesian coordinates with Γ=0. x¨=0. Result: Geodesics are straight lines at constant speed.

**Failure case or boundary.** In polar coordinates Γ is nonzero even for flat space; coefficients are not curvature.

**Source audit.** TongEq3.29 and MITtheorem38.1/corollary38.2 inspected; the atlas states the Riemannian version.

### 37. Gauss–Bonnet for closed surfaces

`\int_MK\,dA=2\pi\chi(M)`

M means closed oriented embedded surface; g means induced positive-definite Riemannian metric; K means Gaussian curvature; dA means metric area element; χ(M) means Euler characteristic, an integer topological invariant; π means circle constant. Units follow the abstract nondimensional convention.

**Assumptions.** Source-paired version: M is a compact oriented smooth surface embedded in R3, without boundary, carrying the induced Riemannian metric g. K is its Gaussian curvature and dA the metric area element; the abstract intrinsic extension is not separately source-audited here.

**Why the statement works.** Triangulate by small geodesic pieces and sum local angle excesses; interior edge terms cancel.

**Worked example.** Unit round sphere: K=1,area=4π. χ(S²)=2. Result: 4π=2π*2.

**Failure case or boundary.** A disk needs a boundary geodesic-curvature term.

**Source audit.** Exact boundary theorem and general-domain formula inspected; closed embedded-surface corollary follows by empty boundary.

### 38. Hamiltonian vector field

`\iota_{X_H}\omega=dH,\quad\dot q=\partial_pH,\ \dot p=-\partial_qH`

ω means nondegenerate closed2-form; H means smooth Hamiltonian; q,p means canonical coordinates; ι_X means interior contraction with vector field X; d means exterior derivative. Units follow the abstract nondimensional convention.

**Assumptions.** Convention ω=Σdq∧dp and contraction in the first vector slot. Global flow additionally requires completeness, for example compact M; only the local vector-field equation is asserted without that condition.

**Why the statement works.** Nondegeneracy uniquely solves the contraction equation. In coordinates compare coefficients of dq and dp.

**Worked example.** H=(p²+q²)/2. qdot=p,pdot=-q. Result: H is constant along the flow.

**Failure case or boundary.** An arbitrary nonclosed2-form need not define a symplectic structure.

**Source audit.** Exact definition18.1 and preceding construction/flow argument inspected.

### 39. de Rham theorem

`H^k_{dR}(M)\cong H^k(M;\mathbb R)`

M means smooth manifold; HdreRham means closed forms modulo exact forms. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Use ordinary smooth de Rham theory on a paracompact smooth manifold.

**Why the statement works.** Integrate forms over smooth singular simplices; Stokes makes a cochain map; local Poincaré lemma plus gluing gives the isomorphism.

**Worked example.** M=S¹. The angular form has nonzero integral around the circle. Result: H1dR(S¹)≅R.

**Failure case or boundary.** Closed does not imply globally exact on a noncontractible manifold.

### 40. Jacobian tangent space

`T_pV=\ker Df(p)`

V means affine algebraic set cut out by ideal generators f; p means point. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Use generators of the defining ideal over the base field; this is the Zariski tangent space.

**Why the statement works.** A first-order infinitesimal displacement p+εv satisfies f(p)+εDf(p)v=0 modulo ε².

**Worked example.** V:y²-x³=0 at(0,0). Both partial derivatives vanish. Result: Tangent space dimension2 although curve dimension1.

**Failure case or boundary.** Tangent dimension can jump at singular points; do not infer smooth dimension from every Jacobian kernel.

### 41. Epsilon–delta limit

`\forall\epsilon>0\ \exists\delta>0:\ 0<|x-a|<\delta\Rightarrow|f(x)-L|<\epsilon`

f means real function; a means limit point; L means proposed limit. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Quantifiers range over points in the domain approaching a.

**Why the statement works.** To prove a limit, construct δ for each ε and verify the implication.

**Worked example.** f(x)=2x,a=3,L=6. Choose δ=ε/2. Result: limx→3 2x=6.

**Failure case or boundary.** Choosing δ depending on x after observing x reverses the quantifier order.

### 42. Chain rule

`D(g\circ f)(a)=Dg(f(a))Df(a)`

f,g means differentiable maps on compatible open Euclidean domains. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Differentiability holds at a and f(a), respectively.

**Why the statement works.** Insert each first-order expansion and bound the composed remainder by o(||h||).

**Worked example.** f(x)=x²,g(u)=sin u. (sin x²)′=cos(x²)*2x. Result: Derivative2x cos(x²).

**Failure case or boundary.** Existence of partial derivatives alone does not ensure total differentiability.

### 43. Taylor theorem with remainder

`f(x)=\sum_{k=0}^n\frac{f^{(k)}(a)}{k!}(x-a)^k+R_{n+1}`

f means Cn+1 real function; a means expansion point. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** On the segment from a to x, |f(n+1)|≤M gives |R|≤M|x-a|^(n+1)/(n+1)!.

**Why the statement works.** Repeated fundamental-theorem integration gives an integral remainder and its bound.

**Worked example.** f=exp,a=0,n=2,x=0.1. Approximation1+0.1+0.005=1.105; M=e^0.1. Result: Error at most e^0.1*0.001/6.

**Failure case or boundary.** A smooth function need not equal its infinite Taylor series.

### 44. Fundamental theorem of calculus

`\frac{d}{dx}\int_a^xf(t)dt=f(x)`

f means continuous function on[a,b]; x means interior point. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Continuity at x is sufficient for the pointwise derivative conclusion.

**Why the statement works.** Bound the average integral difference by the local oscillation of f.

**Worked example.** f(t)=t²,a=0. Integral=x³/3. Result: Derivative=x².

**Failure case or boundary.** For merely integrable f the pointwise derivative need not exist everywhere.

### 45. Differentiating a sequence of functions

`f_n\to f,\quad f_n^\prime\to g\text{ uniformly}\Rightarrow f^\prime=g`

fn means C1 functions on compact interval; g means uniform derivative limit. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Assume fn(x0) converges at one point; derivative convergence is uniform.

**Why the statement works.** Integrate fn′ from x0 and pass through uniform convergence.

**Worked example.** fn(x)=x/n on[0,1]. fn′=1/n→0 uniformly. Result: Limit f=0 and f′=0.

**Failure case or boundary.** Uniform convergence of functions alone does not control derivatives: sin(nx)/n→0 but derivatives cos(nx) do not converge.

### 46. Dominated convergence theorem

`\int f_n\,d\mu\to\int f\,d\mu`

μ means measure; fn means measurable scalar functions; g means integrable dominating function. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** fn→f almost everywhere and |fn|≤g almost everywhere for every n.

**Why the statement works.** Apply Fatou to g±fn, or use integrable tail control and convergence in measure on finite pieces.

**Worked example.** fn(x)=x^n on[0,1] with Lebesgue measure. Dominated by1; integral=1/(n+1). Result: Integrals tend to0.

**Failure case or boundary.** fn=n*1(0,1/n) tends to0 a.e. but has integral1; no fixed integrable domination.

### 47. Tonelli and Fubini

`\int_{X\times Y}f=\int_X\!\int_Yf=\int_Y\!\int_Xf`

X,Y means σ-finite measure spaces; f means measurable function. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Nonnegative f permits Tonelli with infinity; signed/complex f needs absolute integrability for Fubini.

**Why the statement works.** Approximate nonnegative functions by simple functions; split absolutely integrable f into controlled parts.

**Worked example.** f(x,y)=xy on[0,1]². Each iterated integral=(1/2)*(1/2). Result: 1/4.

**Failure case or boundary.** Conditionally convergent improper double integrals can depend on order.

### 48. Radon–Nikodym theorem

`\nu(A)=\int_Ah\,d\mu`

μ,ν means σ-finite positive measures on one measurable space; h means density. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** ν is absolutely continuous with respect to μ.

**Why the statement works.** Construct the density via maximal dominated integral or a Hilbert-space reduction; uniqueness is almost everywhere.

**Worked example.** ν(A)=∫A2x dx on[0,1]. h(x)=2x. Result: ν([0,1])=1.

**Failure case or boundary.** A point mass is not absolutely continuous with respect to Lebesgue measure.

### 49. Riesz representation in a Hilbert space

`\ell(x)=\langle x,y\rangle`

H means Hilbert space; ℓ means bounded linear functional; y means representing vector. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Inner product is taken linear in its first argument; completeness is required.

**Why the statement works.** Use the orthogonal complement of kerℓ, normalize its generator and handle ℓ=0.

**Worked example.** H=R²,ℓ(x1,x2)=2x1-3x2. Choose y=(2,-3). Result: Unique representation by y.

**Failure case or boundary.** Unbounded linear functionals are outside the theorem.

### 50. Contraction mapping theorem

`d(x_n,x_*)\leq\frac{q^n}{1-q}d(x_1,x_0)`

X means nonempty complete metric space; T means X→X; q means contraction factor. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** d(Tx,Ty)≤q d(x,y) with0≤q<1.

**Why the statement works.** Iterate T; geometric tail bounds make a Cauchy sequence; continuity gives a fixed point and contraction gives uniqueness.

**Worked example.** T(x)=(x+2)/2 on R. Fixed-point equation x=(x+2)/2. Result: Unique fixed point2.

**Failure case or boundary.** T(x)=x+1 is nonexpansive with q=1 but has no fixed point on R.

### 51. Compact self-adjoint spectral theorem

`Tx=\sum_j\lambda_j\langle x,e_j\rangle e_j`

T means compact self-adjoint operator on Hilbert space; ej means orthonormal eigenvectors for nonzero eigenvalues. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** The remaining orthogonal subspace is kerT; nonzero eigenvalues can accumulate only at0.

**Why the statement works.** Maximize the quadratic form on unit vectors, extract eigenvectors using compactness, then iterate on orthogonal complements.

**Worked example.** T on l² defined by(Tx)n=xn/n. Standard basis vectors have eigenvalues1/n. Result: Finite-rank truncations converge in operator norm.

**Failure case or boundary.** The identity on infinite-dimensional l² is self-adjoint but not compact.

### 52. Weak derivative and the delta distribution

`\langle Df,\varphi\rangle=-\langle f,\varphi^\prime\rangle`

φ means smooth compactly supported test function; f means locally integrable function. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Distributions act continuously on test functions; boundary terms vanish by compact support.

**Why the statement works.** Define the derivative by integration by parts and extend beyond ordinary derivatives.

**Worked example.** Heaviside H=0 for x<0,1 for x>0. -∫0∞φ′(x)dx=φ(0). Result: DH=δ0.

**Failure case or boundary.** δ0 is not an ordinary function with a finite point value.

### 53. Plancherel identity

`\|\widehat f\|_2=\|f\|_2`

f means L2 function on Rn; Fourier transform means unitarily normalized. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Use fhat(ξ)=(2π)^(-n/2)∫exp(-ix·ξ)f(x)dx initially on Schwartz functions.

**Why the statement works.** Parseval holds for rapidly decaying smooth functions; density uniquely extends the transform to L2.

**Worked example.** Normalized Gaussian in one dimension. Its unitary Fourier transform is another Gaussian with the same L2 norm. Result: L2 energy is preserved.

**Failure case or boundary.** A different Fourier normalization changes constants; an FFT bin is not automatically a physical spectral density.

### 54. Picard–Lindelöf local theorem

`\dot x=f(t,x),\quad x(t_0)=x_0`

f means continuous time-dependent vector field; x means trajectory. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** f is locally Lipschitz in x uniformly on a suitable time neighborhood.

**Why the statement works.** The integral equation is a contraction on a small closed trajectory ball.

**Worked example.** xdot=x,x(0)=1. Integrate or separate variables. Result: Unique local and global solution e^t.

**Failure case or boundary.** xdot=√|x| at x0=0 has delayed nonunique solutions; continuity alone is insufficient.

### 55. Periodic heat semigroup

`u_k(t)=e^{-\kappa |k|^2t}u_k(0)`

uk means Fourier coefficient on2π-periodic torus; κ means positive nondimensional diffusivity. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Initial data in L2; use periodic Laplacian with specified realization.

**Why the statement works.** Fourier expansion diagonalizes the Laplacian; solve each scalar ODE.

**Worked example.** u(x,0)=sin x,κ=1. Only modes±1 survive with decay e^-t. Result: u=e^-t sin x.

**Failure case or boundary.** Backward heat evolution amplifies high frequencies and is not a stable inverse on L2.

### 56. Lax–Milgram weak existence

`a(u,v)=\ell(v)\quad\forall v\in H`

H means real Hilbert space; a means bounded coercive bilinear form; ℓ means bounded linear functional. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** a(v,v)≥α||v||² with α>0; boundedness holds uniformly.

**Why the statement works.** Represent the form by a bounded operator; coercivity gives a bounded inverse using Hilbert-space arguments.

**Worked example.** H=R²,a(u,v)=u·v,ℓ(v)=(1,2)·v. Choose u=(1,2). Result: Unique solution u=(1,2).

**Failure case or boundary.** A positive semidefinite form with a kernel can lose uniqueness.

### 57. Itô formula for a scalar diffusion

`df(X_t)=f^\prime(X_t)b_tdt+f^\prime(X_t)\sigma_tdW_t+\tfrac12f^{\prime\prime}(X_t)\sigma_t^2dt`

W means standard Brownian motion; X means Itô process; f means C2 scalar function; b,σ means adapted coefficients. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Local integrability conditions define the stochastic integrals; localization handles unbounded coefficients.

**Why the statement works.** Taylor-expand increments; Brownian quadratic variation yields(dW)²=dt in the rigorous partition limit.

**Worked example.** X=W,f(x)=x². df=2W dW+dt. Result: W_t²=2∫0^tW_s dW_s+t.

**Failure case or boundary.** Ordinary chain rule misses the drift correction;(dW)²=dt is mnemonic, not algebra of infinitesimal numbers.

### 58. IID central limit theorem

`\frac{\sum_{i=1}^n(X_i-\mu)}{\sigma\sqrt n}\Rightarrow N(0,1)`

Xi means independent identically distributed real variables; μ means finite mean; σ² means finite positive variance. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Finite variance0<σ²<∞; weak convergence concerns distributions, not every sample path.

**Why the statement works.** Expand the characteristic function near0 and raise it to the nth power.

**Worked example.** Xi take±1 with equal probability. μ=0,σ=1; normalized sum has variance1. Result: Its distribution approaches standard normal.

**Failure case or boundary.** Cauchy variables have no finite variance and do not satisfy this normalized theorem.

### 59. Linear-system perturbation bound

`\frac{\|\delta x\|}{\|x\|}\leq\kappa(A)\frac{\|\delta b\|}{\|b\|}`

A means invertible matrix; x means A^-1b; κ(A) means ||A||||A^-1|| in a subordinate norm. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Perturb only b, with b≠0; δx=A^-1δb.

**Why the statement works.** Bound ||δx|| by ||A^-1||||δb|| and use ||b||≤||A||||x||.

**Worked example.** A=diag(1,10^-6). In the Euclidean norm κ=10^6. Result: Small data errors can amplify by up to one million in worst directions.

**Failure case or boundary.** Algorithmic backward stability does not make an ill-conditioned problem well-conditioned.

### 60. Local quadratic Newton convergence

`x_{n+1}=x_n-\frac{f(x_n)}{f^\prime(x_n)}`

f means C2 scalar function; x* means simple root. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** f(x*)=0,f′(x*)≠0; initial iterate sufficiently close and derivative bounded away from0 locally.

**Why the statement works.** Taylor expansion at the root bounds the next error by a constant times the current error squared.

**Worked example.** f=x²-2,x0=1.5. x1=(1.5+2/1.5)/2=1.4166667. Result: Iterates approach√2 quadratically.

**Failure case or boundary.** At a multiple root, plain Newton is generally only linearly convergent.

### 61. A proof judgment is relative to an environment

`\Gamma\vdash t:P`

Γ means declared axioms,definitions and typing context; t means proof term; P means formal proposition. All quantities here use the stated abstract, nondimensional mathematical convention.

**Assumptions.** Kernel checks the exact formal statement using its trusted rules; connection to an informal claim is an additional obligation.

**Why the statement works.** For reflexive equality the constructor rfl certifies a term equal to itself after permitted reduction.

**Worked example.** Lean-style statement:∀n:Nat,n+0=n. Unfold the recursion equation for addition at zero; use reflexivity. Result: An illustrative proof schema, not a Lean run executed for this atlas.

**Failure case or boundary.** A kernel can correctly check a mistranslated statement or a theorem depending on an unwanted axiom.

## Reading the current research frontier

The following papers are not new atlas theorems. They are primary-source contributions whose selected statements were inspected. Their versions and captured bytes matter: a result may be revised, a title can be broader than a particular theorem, and an abstract's description cannot replace a full proof audit. No journal acceptance, independent verification or formalization is inferred merely from an arXiv identifier. The cutoff defines a selected snapshot rather than a claim to include every paper published through that date.

### Three-dimensional Kakeya

A Kakeya set contains a unit line segment in every direction. The Wang–Zahl source addresses quantitative unions of thin tubes in three dimensions and claims, as a consequence, full Hausdorff and Minkowski dimension for every Kakeya set in R3. The source explicitly leaves the R3 Kakeya maximal-function conjecture with exponent K=3 unresolved; its weaker bound suffices for dimension. Dimension and volume are different statements. Full dimension does not itself imply positive Lebesgue measure, and a three-dimensional theorem does not solve every higher-dimensional version. The relevant mathematical path runs through measure, scale, geometric incidence and multiscale estimates. The atlas reads selected introductory statements, not all127 pages of the proof. A faithful follow-up would reconstruct the tube hypotheses, scale dependencies and passage from volume estimates to the claimed dimension conclusion before announcing a broader result.

### Geometric Langlands

The inspected Gaitsgory–Raskin PartI constructs the geometric Langlands functor in one direction in characteristic-zero deRham and Betti settings and proves equivalences among specified formulations. The larger program involves a series of papers and a substantial categorical framework. Calling PartI a proof of every arithmetic Langlands conjecture would change the statement. Algebraic curves, sheaves, local systems, dual groups and categories have to be fixed before the word equivalence becomes meaningful. The prerequisite graph is useful precisely because an introductory account of a sheaf cannot replace those hypotheses. The source's contribution is a construction and comparison in its setting; this chapter neither reproduces the full series nor certifies every later extension.

### Moving sofa

The standard problem concerns the largest area of a planar body that can move through a right-angle corridor of unit width. Baek's source claims optimality of Gerver's construction, whose area is approximately2.2195 and whose boundary has18 curve sections. That is stronger than reporting a numerically improved candidate. It requires a global upper bound for all admissible motions as well as a feasible construction. Checking a finite animation frame by frame cannot certify continuous collision-free motion, and matching a decimal area does not reproduce the upper-bound proof. This atlas records the author's claimed statement and selected introductory material. It does not make an unverified assertion about journal acceptance, completed formal verification, or variants with a different corridor or motion constraint.

### Hilbert's sixth problem and kinetic limits

Deng, Hani and Ma study a particular rigorous program from elastic hard-sphere dynamics through Boltzmann kinetic theory to fluid equations. Their source names compressible Euler and incompressible Navier–Stokes–Fourier equations and a framework on two- and three-dimensional tori. The wording does not remove the need to inspect initial-data classes, time scales, collision scaling, regularity and limiting topology. Hilbert's sixth problem is broader than this program, and a derivation of a fluid equation is not a proof of global regularity for every solution of that equation. The graph therefore connects this review to PDE and kinetic limits, not to a node declaring all mechanics solved. A future review should audit estimates and limits rather than infer universality from the historical problem number.

## Computation and formal verification

A numerical calculation has at least three potential sources of error: sensitivity of the underlying mathematical problem, the approximation introduced by a discretization, and arithmetic/algorithmic error. A backward-stable algorithm can return an accurate solution of a nearby problem while the original problem remains ill-conditioned. A small residual can coexist with a large state error near a small singular value. Mesh refinement is informative only when the discretizations target the same continuum problem and the relevant stability and convergence estimates are supplied.

A proof assistant addresses a different task. It checks that a proof term has a proposition as its type under a declared environment. This can greatly improve the reliability of long arguments, but does not automatically guarantee that the proposition matches a news headline, that every imported axiom is acceptable for the intended foundation, or that a theorem about a finite model applies to a physical continuum. The Lean-style reflexivity example in the notebook is an explanatory schema, not an executed Lean certificate. The AI-assisted mathematics chapter separately audits claims about model contributions; no authorship or independent mathematical discovery is inferred here from an association with an AI system.

For a genuine machine-checked research claim, preserve the exact theorem statement, source commit, library version, trusted axioms, kernel/toolchain and actual check record. For an AI-generated argument, also preserve what the human collaborators supplied, what pre-existing result was used, and whether independent reviewers checked the mathematical content. Benchmark success, a competition solution, an author-checked preprint, and a kernel-checked theorem are distinct outcomes. Counts of exercises, graph nodes or equations measure this package's coverage; they do not measure a percentage of mathematics solved.

## What the graph can and cannot establish

Containment edges organize subjects. Prerequisite edges propose a learning order. Derivation edges point to explicitly named mathematical dependencies. Source edges document selected reading at its recorded depth. None of these automatically means a physical force, a causal connection, a complete proof or an equivalence of all models. The most useful graph operation is often to expose a missing link: an unmeasured parameter, an unspecified domain, an unread proof, or a new setting in which an old theorem no longer applies.

A practical next study starts from one precise question. To reconstruct a field from observations, identify its forward map and null space. To compare spectra, freeze the operator, boundary realization, norm and physical scale. To interpret a recent theorem, read the original hypotheses before importing its conclusion. To evaluate a symbolic or historical analogy, write an explicit modern dictionary and a discriminating prediction. Without that final bridge, retain the analogy as interpretation. This protects both mathematical clarity and the freedom to explore ideas without prematurely advertising them as established physics.

## Source and coverage register

The following records are selected sources actually captured. Raw captures remain private; public hashes and reading depths support reproducibility without republishing whole books. Failed requests and corrected discovery paths are retained in the private retrieval ledger. Their failure supplies no evidence that a theorem or paper is false.

- **Basic Analysis I** (Version6.3,15May2026). Reading: Selected passages only: front matter and contents; uniform-continuity discussion; contraction-mapping theorem7.6.2 and beginning of proof. No whole-book or full-proof verification claimed. Scope: Only selected passages were inspected; displayed atlas proofs are independent reconstructions, not quotations. Source: https://www.jirka.org/ra/realanal.pdf

- **Linear Algebra Done Right, fourth edition** (Online PDF revised4November2026; copyright2024). Reading: Selected passages only: front matter; linear-map and spectral/singular-value section locators; selected spectral discussion. No whole-book or full-proof verification claimed. Scope: This is finite-dimensional linear algebra; infinite-dimensional operator domains require additional theory. Source: https://linear.axler.net/LADR4e.pdf

- **Algebraic Geometry course notes** (Captured author-hosted PDF; exact bytes pinned). Reading: Selected passages only: front matter; Nullstellensatz and tangent-space locators; selected affine-variety discussion. No whole-book or full-proof verification claimed. Scope: Not a reading of all scheme theory or geometric Langlands; theorem reconstructions are scoped individually. Source: https://www.jmilne.org/math/CourseNotes/AG.pdf

- **Group Theory course notes** (Captured author-hosted PDF; exact bytes pinned). Reading: Selected passages only: front matter; Lagrange/coset and representation locators; selected subgroup and representation passages. No whole-book or full-proof verification claimed. Scope: Related references do not constitute checked passages for every ring/field theorem; those proofs are explicitly atlas reconstructions. Source: https://www.jmilne.org/math/CourseNotes/GT.pdf

- **Algebraic Topology** (Author-hosted electronic text). Reading: Selected passages only: chapter0 Euler-characteristic example; chapter2 homology section overview; selected chain and homotopy passages. No whole-book or full-proof verification claimed. Scope: Riemannian metric formulas are not consequences of topology alone; not a complete reading of the book. Source: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf

- **Basic Category Theory** (arXiv1612.09375). Reading: Selected passages only: front matter; adjoint and representable sections; selected Yoneda statement/context. No whole-book or full-proof verification claimed. Scope: Higher categories and derived algebraic geometry are mapped leads rather than fully developed here. Source: https://arxiv.org/pdf/1612.09375

- **Theorem Proving in Lean4: Propositions and Proofs** (Online manual captured25November2026). Reading: Selected passages only: propositions and proofs section; proof terms and propositions-as-types passages. No whole-book or full-proof verification claimed. Scope: No Lean process was executed for this atlas; illustrative schemas are not machine-checked certificates. Source: https://lean-lang.org/theorem_proving_in_lean4/Propositions-and-Proofs/

- **NIST DLMF §3.2 Linear Algebra** (Online reference captured25November2026). Reading: Selected passages only: §3.2 linear-system and conditioning entries. No whole-book or full-proof verification claimed. Scope: A conditioning result is not evidence of a physically correct model or globally convergent solver. Source: https://dlmf.nist.gov/3.2

- **The Stacks Project: chapter index** (Online chapter index captured25November2026). Reading: Selected passages only: chapter index only. No whole-book or full-proof verification claimed. Scope: Index-only coverage; it is not theorem-passage evidence. Source: https://stacks.math.columbia.edu/browse

- **An Introduction to Stochastic PDEs** (Author-hosted lecture notes; exact bytes pinned). Reading: Selected passages only: front matter; selected stochastic-integration and Hilbert-space passages. No whole-book or full-proof verification claimed. Scope: Not a full review of stochastic-PDE existence theory or every probability theorem in the atlas. Source: https://www.hairer.org/notes/SPDEs.pdf

- **An Introduction to Measure Theory** (Author-linked GSM126 preliminary text,2012file snapshot). Reading: Selected passages only: front matter; selected convergence and product-integration passages. No whole-book or full-proof verification claimed. Scope: Only selected passages; the failed guessed older PDF URL is preserved as a failed retrieval, not read evidence. Source: https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf

- **Volume estimates for unions of convex sets, and the Kakeya set conjecture in three dimensions** (arXiv2502.17655v1,24February2025). Reading: Selected passages only: abstract; introduction and main-theorem statements. No whole-book or full-proof verification claimed. Scope: Not an independent127-page proof audit. The source explicitly does not solve the R3 Kakeya maximal-function conjecture with K=3; higher-dimensional dimension problems are also separate. Source: https://arxiv.org/pdf/2502.17655

- **Proof of the geometric Langlands conjecture I: construction of the functor** (arXiv2405.03599v3,30September2025). Reading: Selected passages only: abstract; introduction: characteristic-zero setting and construction scope. No whole-book or full-proof verification claimed. Scope: PartI is not by itself the complete multi-paper proof, arithmetic Langlands or every coefficient/characteristic setting. Source: https://arxiv.org/pdf/2405.03599v3

- **Optimality of Gerver's Sofa** (arXiv2411.19826v1,29November2024). Reading: Selected passages only: abstract; introduction and main optimality statement. No whole-book or full-proof verification claimed. Scope: No independent119-page proof audit, formal certification or verified journal-acceptance claim. Source: https://arxiv.org/pdf/2411.19826

- **Hilbert's sixth problem: derivation of fluid equations via Boltzmann's kinetic theory** (arXiv2503.01800v1,3March2025). Reading: Selected passages only: abstract; introduction and stated hard-sphere/kinetic limit framework. No whole-book or full-proof verification claimed. Scope: Not all of Hilbert6, arbitrary molecular potentials, global3D Navier–Stokes regularity or an arbitrary hydrodynamic regime. Source: https://arxiv.org/pdf/2503.01800


## Remaining questions

**What changes in Kakeya dimension problems above R3?** A higher-dimensional theorem with exact hypotheses; the R3 source is insufficient.

**Which parts of arithmetic/positive-characteristic Langlands are covered by which theorems?** Separate statements, coefficient settings, functors and independent proof review.

**Can the full sofa upper-bound argument be independently reconstructed or formalized?** Complete proof audit including motion feasibility and all global inequalities.

**How far do the hard-sphere fluid-limit results extend in time, data and interactions?** Uniform estimates for each changed scaling, initial class and interaction potential.

**What about global regularity of3D incompressible Navier–Stokes?** A theorem in the actual global finite-energy setting; a kinetic derivation does not supply it.

**How is an informal mathematical claim connected to the exact formal theorem?** Statement translation, trusted axiom inventory, kernel record and independent semantic review.

## Round2 source-pairing and hypothesis audit

The earlier chapter deliberately distinguished atlas proof sketches from a complete audit of every cited proof. The machine-readable records now make that distinction explicit for each formula through `sourceAudit`, and the displayed pitfalls repeat it for records without an exact checked source pairing. Six records have selected exact source statements or declared direct corollaries checked; fifty-five remain teaching reconstructions with contextual references. This count measures the present audit, not the mathematical truth of the classical theorems. Their status as established mathematics must not be confused with a claim that this team independently checked every source proof.

The Gauss–Bonnet record now fixes a Riemannian metric, defines its metric area element and Euler characteristic, and source-pairs the closed embedded-surface version. MIT18.950Chapter4 gives the boundary formula in Lecture41; taking an empty boundary yields the displayed closed-surface relation. A Euclidean unit disk has zero Gaussian curvature but Euler characteristic1, so omitting its boundary curvature term would falsely predict0=2π. The broader intrinsic theorem for abstract Riemannian surfaces is not separately audited here. Stokes' exterior derivative and induced boundary orientation are now explicit variables; its exact theorem/proof source pairing remains labeled unaudited instead of being attributed to a topology section that was not read for this theorem.

The geodesic record now cites Tong's connection equation and MIT's variational theorem, with the affine parameter and metric explicit. A long great-circle arc is a geodesic without being the shortest route between its endpoints. Lorentzian proper-time stationarity requires a different interpretation: an inertial timelike worldline between fixed endpoints can have greater elapsed proper time than an accelerated detour. Neither observation supports a universal statement that every geodesic is a global minimum. The symplectic record now pairs Cannas da Silva's exact convention i_Xω=dH and distinguishes local vector-field existence from a globally complete flow.

Functional-analysis records retain their exact completeness, boundedness, compactness and domain assumptions. The Riesz, compact spectral, Lax–Milgram and related records are expressly teaching reconstructions where only background passages were inspected. In particular, invoking a finite-dimensional source does not by itself audit an infinite-dimensional theorem. The identity on l² illustrates why this matters: its images of standard basis vectors remain separated by√2, so no norm-convergent subsequence exists and the operator is not compact. Sampled matrix diagonals cannot remove that obstruction.

Recent-paper scope was also sharpened. The moving-sofa admissible object is a nonempty connected closed planar set moving continuously by orientation-preserving rigid motions in the stated unit L corridor. The Langlands setup is characteristic-zero global/unramified, for a smooth complete curve and connected reductive group; PartI is one of five papers. The hard-sphere theorem assumes an existing Boltzmann solution with velocity-weighted bounds, a controlled initial gradient and a quantitative relation among collision/time parameters and epsilon. Its fluid-limit results require the stated smooth limiting solutions and well-prepared data. These conditions prevent a headline from becoming a claim about all fluids, all Langlands conjectures or every possible corridor motion.

The independent AI-mathematics comparison in this round found that the four selected case records correctly distinguish fresh announcements, withdrawn arguments, thresholded referee scores and machine-verification artifacts. A strongly polynomial linear-programming claim needs a precise arithmetic cost/encoding model; polynomial dependence on coefficient bit length is not that property. An upper bound on a matrix exponent is weaker than an exact exponent. Three named Hodge-related withdrawals do not invalidate every Hodge paper. A benchmark score threshold allowing minor gaps is different from a flawless proof or an executed trusted-kernel check. The AI chapter owns those claim records; this chapter supplies the mathematical distinctions, not a new proof of the announced results.


## Complete formula and theorem register


### Division of rational fractions — `math-f-fractions`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\frac{a/b}{c/d}=\frac{ad}{bc}
$$

Division of rational fractions under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `a,b,c,d` | integers specifying rational numbers | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- b,c,d are nonzero.

**Derivation or proof guide**

1. Multiply by the reciprocal d/c and use associative multiplication.

**Worked example**

Inputs: a=2,b=3,c=4,d=5

1. (2/3)/(4/5)=2*5/(3*4)

Result: 5/6; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- c=0 makes the original division undefined; cancellation never licenses division by zero.

**Common mistakes**

- c=0 makes the original division undefined; cancellation never licenses division by zero.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-lebl`.

### Euclidean algorithm — `math-f-euclid`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\gcd(a,b)=\gcd(b,a-qb)
$$

Euclidean algorithm under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `a,b` | integers with b nonzero | dimensionless (abstract mathematical convention) | mathematical object |
| `q` | integer quotient | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Use integer division a=qb+r with 0≤r<|b|.

**Derivation or proof guide**

1. Common divisors divide each integer combination.
2. Each remainder decreases until zero.

**Worked example**

Inputs: a=84,b=30

1. 84=2*30+24
2. 30=24+6 and 24=4*6

Result: gcd(84,30)=6; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Over arbitrary rings a division algorithm need not exist.

**Common mistakes**

- Over arbitrary rings a division algorithm need not exist.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-milne-gt`.

### Bézout identity over integers — `math-f-bezout`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\gcd(a,b)=ua+vb
$$

Bézout identity over integers under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `a,b` | integers not both zero | dimensionless (abstract mathematical convention) | mathematical object |
| `u,v` | integer coefficients | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- The gcd is chosen positive.

**Derivation or proof guide**

1. Back substitute the Euclidean remainders or take the least positive ideal element.

**Worked example**

Inputs: a=84,b=30

1. 6=30-(84-2*30)

Result: 6=(-1)*84+3*30; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- A gcd in a general integral domain need not be an integer-style linear combination.

**Common mistakes**

- A gcd in a general integral domain need not be an integer-style linear combination.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-milne-gt`.

### Criterion for a modular inverse — `math-f-modular-inverse`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
a^{-1}\pmod n\text{ exists}\iff\gcd(a,n)=1
$$

Criterion for a modular inverse under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `a` | integer residue representative | dimensionless (abstract mathematical convention) | mathematical object |
| `n` | integer modulus greater than one | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Equality is in the quotient ring Z/nZ.

**Derivation or proof guide**

1. Bézout supplies au+nv=1.
2. Conversely an inverse makes every common divisor divide1.

**Worked example**

Inputs: a=3,n=7

1. 3*5=15=1+2*7

Result: Inverse of3 modulo7 is5; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- 2 is nonzero modulo6 but has no inverse.

**Common mistakes**

- 2 is nonzero modulo6 but has no inverse.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-milne-gt`.

### Finite geometric sum — `math-f-geometric-sum`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\sum_{k=0}^{n-1}r^k=\frac{1-r^n}{1-r}
$$

Finite geometric sum under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `n` | positive integer | dimensionless (abstract mathematical convention) | mathematical object |
| `r` | real or complex scalar | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- For the displayed quotient r≠1; at r=1 the sum is n.

**Derivation or proof guide**

1. Multiply the finite sum by1-r and cancel adjacent terms.

**Worked example**

Inputs: r=2,n=4

1. 1+2+4+8=(1-16)/(1-2)

Result: 15; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- An infinite sum requires |r|<1; a finite identity does not justify an infinite limit.

**Common mistakes**

- An infinite sum requires |r|<1; a finite identity does not justify an infinite limit.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-lebl`.

### Polynomial factor theorem — `math-f-factor`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
p(a)=0\iff p(x)=(x-a)q(x)
$$

Polynomial factor theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `p,q` | polynomials over a field | dimensionless (abstract mathematical convention) | mathematical object |
| `a` | field element | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Evaluation and division take place over the same field.

**Derivation or proof guide**

1. Divide p by x-a; the constant remainder is p(a).

**Worked example**

Inputs: p=x²-1,a=1

1. x²-1=(x-1)(x+1)

Result: q=x+1; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- A polynomial function on a finite field may vanish everywhere without being the zero formal polynomial.

**Common mistakes**

- A polynomial function on a finite field may vanish everywhere without being the zero formal polynomial.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-milne-gt`.

### Rank–nullity — `math-f-rank-nullity`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\dim V=\dim\ker T+\dim\operatorname{im}T
$$

Rank–nullity under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `V` | finite-dimensional vector space | dimensionless (abstract mathematical convention) | mathematical object |
| `T` | linear map V→W | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- V and W have a common scalar field; finite dimension is essential for integer subtraction.

**Derivation or proof guide**

1. Extend a kernel basis to a basis of V.
2. Images of the added vectors form an image basis.

**Worked example**

Inputs: T:R³→R², T(x,y,z)=(x+y,z)

1. Kernel is span(1,-1,0); image is R²

Result: 3=1+2; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- A nonlinear map has no rank-nullity theorem in this form.

**Common mistakes**

- A nonlinear map has no rank-nullity theorem in this form.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-axler`.

### Affine solution fiber — `math-f-solvability`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\{x:Ax=b\}=x_0+\ker A
$$

Affine solution fiber under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `A` | matrix | dimensionless (abstract mathematical convention) | mathematical object |
| `b` | target vector | dimensionless (abstract mathematical convention) | mathematical object |
| `x0` | one solution | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- A solution x0 must exist before the affine fiber formula is used.

**Derivation or proof guide**

1. Subtract Ax=Ax0 and use linearity.

**Worked example**

Inputs: A=[1 1],b=3

1. x0=(3,0); add t(1,-1)

Result: All solutions are(3+t,-t); units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- If b is outside the range, there is no affine solution fiber.

**Common mistakes**

- If b is outside the range, there is no affine solution fiber.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-axler`.

### Multiplicativity of determinant — `math-f-determinant`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\det(AB)=\det A\det B
$$

Multiplicativity of determinant under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `A,B` | square matrices of the same size | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Entries lie in a commutative field or ring.

**Derivation or proof guide**

1. Use the alternating multilinear characterization on the columns of the product.

**Worked example**

Inputs: A=diag(2,3),B=diag(5,7)

1. detA=6,detB=35; AB=diag(10,21)

Result: detAB=210; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- A determinant is not the sum of eigenvalues; that is the trace.

**Common mistakes**

- A determinant is not the sum of eigenvalues; that is the trace.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-axler`.

### Finite-dimensional spectral theorem — `math-f-spectral-matrix`

Status: theorem.

**Source pairing audit:** Exact selected theorem statement and surrounding argument inspected; not all source proofs audited.

$$
A=U\Lambda U^*,\quad U^*U=I
$$

Finite-dimensional spectral theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `A` | complex normal matrix | dimensionless (abstract mathematical convention) | mathematical object |
| `U` | unitary matrix | dimensionless (abstract mathematical convention) | mathematical object |
| `Λ` | diagonal matrix | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- A*A=AA*; for self-adjoint A, eigenvalues are real.

**Derivation or proof guide**

1. Schur triangularization plus normality eliminates off-diagonal entries.

**Worked example**

Inputs: A=[[2,1],[1,2]]

1. Normalized eigenvectors(1,1)/√2 and(1,-1)/√2 have eigenvalues3 and1

Result: An orthonormal eigenbasis exists; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- The Jordan block[[1,1],[0,1]] is not normal and has no eigenbasis.

**Common mistakes**

- The Jordan block[[1,1],[0,1]] is not normal and has no eigenbasis.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.

Source records: `math-axler`.

### Singular-value decomposition — `math-f-svd`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
A=U\Sigma V^*
$$

Singular-value decomposition under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `A` | m×n real or complex matrix | dimensionless (abstract mathematical convention) | mathematical object |
| `U,V` | unitary matrices | dimensionless (abstract mathematical convention) | mathematical object |
| `Σ` | nonnegative diagonal rectangular matrix | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Finite dimensions and Euclidean/Hermitian inner products are fixed.

**Derivation or proof guide**

1. Diagonalize A*A.
2. Normalize nonzero images to obtain left singular vectors and complete bases.

**Worked example**

Inputs: A=diag(3,0)

1. A*A=diag(9,0)

Result: Singular values are3 and0; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Singular values are nonnegative and are not generally the complex eigenvalues.

**Common mistakes**

- Singular values are nonnegative and are not generally the complex eigenvalues.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-axler`.

### Normal equations and projection — `math-f-least-squares`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
A^*Ax=A^*b
$$

Normal equations and projection under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `A` | matrix | dimensionless (abstract mathematical convention) | mathematical object |
| `b` | target vector | dimensionless (abstract mathematical convention) | mathematical object |
| `x` | least-squares minimizer | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Euclidean norm; uniqueness follows if A has full column rank.

**Derivation or proof guide**

1. Differentiate the squared residual or impose residual orthogonality to ranA.

**Worked example**

Inputs: A=(1,1)^T,b=(1,3)^T

1. 2x=4

Result: Unique minimizer x=2, residual(-1,1); units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Forming A*A can square the condition number; QR/SVD is often numerically preferable.

**Common mistakes**

- Forming A*A can square the condition number; QR/SVD is often numerically preferable.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-axler`.

### Minimum-norm pseudoinverse solution — `math-f-pseudoinverse`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
x=A^+b
$$

Minimum-norm pseudoinverse solution under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `A+` | Moore–Penrose pseudoinverse | dimensionless (abstract mathematical convention) | mathematical object |
| `b` | target vector | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- The claim concerns the minimum-norm member among least-squares solutions.

**Derivation or proof guide**

1. Invert nonzero singular values and set null singular coordinates to zero.

**Worked example**

Inputs: A=[1 1],b=2

1. The solution fiber is(1+t,1-t); squared norm=2+2t²

Result: Minimum norm at x=(1,1); units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Small singular values amplify noise; a pseudoinverse is not a regularization guarantee.

**Common mistakes**

- Small singular values amplify noise; a pseudoinverse is not a regularization guarantee.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-axler`.

### Cayley–Hamilton theorem — `math-f-cayley-hamilton`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
p_A(A)=0
$$

Cayley–Hamilton theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `A` | n×n matrix | dimensionless (abstract mathematical convention) | mathematical object |
| `pA` | characteristic polynomial det(tI-A) | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Finite square matrix over a commutative field.

**Derivation or proof guide**

1. Use polynomial adjugate identity and compare coefficients before substituting A.

**Worked example**

Inputs: A=diag(2,3), p=t²-5t+6

1. Each diagonal entry satisfies p(2)=p(3)=0

Result: A²-5A+6I=0; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Substituting a matrix into an identity with noncommuting coefficients needs care.

**Common mistakes**

- Substituting a matrix into an identity with noncommuting coefficients needs care.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-axler`.

### Lagrange theorem — `math-f-lagrange`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
|G|=|H|[G:H]
$$

Lagrange theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `G` | finite group | dimensionless (abstract mathematical convention) | mathematical object |
| `H` | subgroup | dimensionless (abstract mathematical convention) | mathematical object |
| `[G` | H]:number of left cosets | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- H is a subgroup, not an arbitrary subset.

**Derivation or proof guide**

1. Cosets partition G and multiplication gives bijections H→gH.

**Worked example**

Inputs: G=S3,H={e,(12)}

1. There are3 cosets each of size2

Result: 6=2*3; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- A divisor of group order need not occur as subgroup order in every finite group.

**Common mistakes**

- A divisor of group order need not occur as subgroup order in every finite group.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-milne-gt`.

### First isomorphism theorem — `math-f-isomorphism`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
G/\ker\varphi\cong\operatorname{im}\varphi
$$

First isomorphism theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `φ` | group homomorphism | dimensionless (abstract mathematical convention) | mathematical object |
| `kerφ` | normal kernel | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- The map preserves the group operation.

**Derivation or proof guide**

1. Send the coset g kerφ to φ(g); verify well-definedness and bijection.

**Worked example**

Inputs: φ:Z→Z/6Z, reduction modulo6

1. Kernel is6Z and the image is all residues

Result: Z/6Z is the quotient by6Z; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- A quotient by a nonnormal subgroup is not a group quotient.

**Common mistakes**

- A quotient by a nonnormal subgroup is not a group quotient.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-milne-gt`.

### Orbit–stabilizer theorem — `math-f-orbit-stabilizer`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
|Gx|=|G|/|G_x|
$$

Orbit–stabilizer theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `G` | finite acting group | dimensionless (abstract mathematical convention) | mathematical object |
| `x` | point | dimensionless (abstract mathematical convention) | mathematical object |
| `Gx` | orbit | dimensionless (abstract mathematical convention) | mathematical object |
| `Gx-subscript` | stabilizer | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- A genuine group action is specified.

**Derivation or proof guide**

1. Cosets of the stabilizer correspond bijectively to orbit points.

**Worked example**

Inputs: S3 acts on{1,2,3}, x=1

1. Stabilizer has2 elements

Result: Orbit has3 points; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Orbit size depends on the action; the same abstract group has different orbits.

**Common mistakes**

- Orbit size depends on the action; the same abstract group has different orbits.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-milne-gt`.

### Quotient ring well-definedness — `math-f-quotient-ring`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
(a+I)(b+I)=ab+I
$$

Quotient ring well-definedness under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `R` | ring | dimensionless (abstract mathematical convention) | mathematical object |
| `I` | two-sided ideal | dimensionless (abstract mathematical convention) | mathematical object |
| `a,b` | ring elements | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- For noncommutative rings, a two-sided ideal is required.

**Derivation or proof guide**

1. Changing representatives adds terms ai+jb+ij that remain in I.

**Worked example**

Inputs: R=Z,I=5Z

1. (3+I)(4+I)=12+I

Result: Product is the residue2; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- An additive subgroup need not be an ideal and may not support quotient multiplication.

**Common mistakes**

- An additive subgroup need not be an ideal and may not support quotient multiplication.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-milne-gt`.

### Chinese remainder theorem — `math-f-crt`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
R/(I\cap J)\cong R/I\times R/J
$$

Chinese remainder theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `R` | commutative ring with identity | dimensionless (abstract mathematical convention) | mathematical object |
| `I,J` | ideals | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- I+J=R.

**Derivation or proof guide**

1. Map a to its residue pair.
2. Kernel is I∩J and comaximality gives surjectivity.

**Worked example**

Inputs: R=Z,I=3Z,J=5Z

1. x=8 has residues(2,3)

Result: Z/15Z≅Z/3Z×Z/5Z; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Moduli4 and6 are not coprime, so arbitrary residue pairs need not lift.

**Common mistakes**

- Moduli4 and6 are not coprime, so arbitrary residue pairs need not lift.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-milne-gt`.

### Hilbert basis theorem — `math-f-hilbert-basis`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
R\text{ Noetherian}\Rightarrow R[x]\text{ Noetherian}
$$

Hilbert basis theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `R` | commutative ring | dimensionless (abstract mathematical convention) | mathematical object |
| `x` | formal variable | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Noetherian means every ideal is finitely generated.

**Derivation or proof guide**

1. Control the ideals of leading coefficients and inductively reduce polynomial degrees.

**Worked example**

Inputs: R=k a field

1. Every ideal of k[x] is principal by Euclidean division

Result: k[x] is Noetherian; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- The countably generated polynomial ring k[x1,x2,...] is not Noetherian.

**Common mistakes**

- The countably generated polynomial ring k[x1,x2,...] is not Noetherian.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-milne-ag`.

### Finite Galois correspondence — `math-f-galois`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
K\subseteq E\subseteq L\longleftrightarrow\operatorname{Gal}(L/E)
$$

Finite Galois correspondence under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `L/K` | finite Galois extension | dimensionless (abstract mathematical convention) | mathematical object |
| `E` | intermediate field | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- The extension must be normal and separable.

**Derivation or proof guide**

1. Fixed fields and stabilizing subgroups are inverse inclusion-reversing constructions.

**Worked example**

Inputs: L=Q(√2),K=Q

1. Automorphisms send √2 to±√2

Result: Two subgroups correspond to Q and Q(√2); units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- A purely inseparable extension can have a trivial automorphism group despite being nontrivial.

**Common mistakes**

- A purely inseparable extension can have a trivial automorphism group despite being nontrivial.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-milne-gt`.

### Fermat small theorem — `math-f-fermat`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
a^{p-1}\equiv1\pmod p
$$

Fermat small theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `p` | prime | dimensionless (abstract mathematical convention) | mathematical object |
| `a` | integer not divisible by p | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Work in the multiplicative group of nonzero residues modulo p.

**Derivation or proof guide**

1. Lagrange theorem gives element order dividing p-1.

**Worked example**

Inputs: p=7,a=2

1. 2^6=64=1+9*7

Result: Residue1; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- A composite modulus may have nonzero nonunits; this is not a general primality certificate.

**Common mistakes**

- A composite modulus may have nonzero nonunits; this is not a general primality certificate.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-milne-gt`.

### Maschke complete reducibility — `math-f-maschke`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
V=W\oplus W^\prime
$$

Maschke complete reducibility under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `G` | finite group | dimensionless (abstract mathematical convention) | mathematical object |
| `V` | finite-dimensional representation over k | dimensionless (abstract mathematical convention) | mathematical object |
| `W` | invariant subspace | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- char(k) does not divide |G|.

**Derivation or proof guide**

1. Average any projection onto W over G to obtain an equivariant projection.

**Worked example**

Inputs: G=C2 over R acts by diag(1,-1)

1. The two coordinate axes are invariant

Result: Direct sum of trivial and sign representations; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- In characteristic2 the representation of C2 can have a nontrivial Jordan block.

**Common mistakes**

- In characteristic2 the representation of C2 can have a nontrivial Jordan block.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-milne-gt`.

### Schur lemma over an algebraically closed field — `math-f-schur`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\operatorname{End}_G(V)=kI
$$

Schur lemma over an algebraically closed field under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `V` | nonzero finite-dimensional irreducible representation | dimensionless (abstract mathematical convention) | mathematical object |
| `k` | algebraically closed field | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Endomorphisms commute with the group action.

**Derivation or proof guide**

1. Kernel and image are invariant.
2. Subtract an eigenvalue and use irreducibility to force a scalar.

**Worked example**

Inputs: An irreducible complex1D representation

1. Every linear map is multiplication by a complex scalar

Result: Commutant consists of scalars; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Over R irreducible commutants may be isomorphic to C or H, not only real scalars.

**Common mistakes**

- Over R irreducible commutants may be isomorphic to C or H, not only real scalars.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-milne-gt`.

### Universal property of tensor product — `math-f-tensor`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\operatorname{Hom}(V\otimes W,U)\cong\operatorname{Bil}(V,W;U)
$$

Universal property of tensor product under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `V,W,U` | vector spaces over one field | dimensionless (abstract mathematical convention) | mathematical object |
| `Bil` | bilinear maps | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- The isomorphism is natural in all spaces.

**Derivation or proof guide**

1. Quotient the free vector space on pairs by the bilinearity relations.

**Worked example**

Inputs: V=W=R²,U=R, b(v,w)=v·w

1. Set L(ei⊗ej)=δij and extend linearly

Result: One linear map represents the bilinear dot product; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- v⊗w is not a pair with componentwise nonlinear operations.

**Common mistakes**

- v⊗w is not a pair with componentwise nonlinear operations.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-leinster`.

### Homology of a chain complex — `math-f-homology`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
H_n(C)=\ker\partial_n/\operatorname{im}\partial_{n+1}
$$

Homology of a chain complex under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `C` | chain complex | dimensionless (abstract mathematical convention) | mathematical object |
| `∂n` | boundary maps | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- ∂n∂n+1=0 ensures boundaries are cycles.

**Derivation or proof guide**

1. Form the quotient of cycles by the subspace or subgroup of boundaries.

**Worked example**

Inputs: Cellular chains of a circle over Q

1. One0-cell, one1-cell, both boundary maps zero

Result: H0≅Q,H1≅Q; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Without boundary-squared-zero, the displayed quotient may not be defined.

**Common mistakes**

- Without boundary-squared-zero, the displayed quotient may not be defined.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-hatcher`.

### Yoneda lemma — `math-f-yoneda`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\operatorname{Nat}(\operatorname{Hom}(A,-),F)\cong F(A)
$$

Yoneda lemma under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `C` | locally small category | dimensionless (abstract mathematical convention) | mathematical object |
| `A` | object | dimensionless (abstract mathematical convention) | mathematical object |
| `F` | C→Set covariant functor | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Functor variance must match the representable shown.

**Derivation or proof guide**

1. Evaluate a natural transformation at idA.
2. Recover its component on f:A→X as F(f) applied to the chosen element.

**Worked example**

Inputs: C=Set,F=Hom(B,-)

1. A natural transformation is composition with a map B→A

Result: Natural transformations correspond to Hom(B,A); units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Reversing variance without reversing arrows changes the statement.

**Common mistakes**

- Reversing variance without reversing arrows changes the statement.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-leinster`.

### Euler characteristic of a finite cell complex — `math-f-euler`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\chi(X)=\sum_k(-1)^k c_k=\sum_k(-1)^k b_k
$$

Euler characteristic of a finite cell complex under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `ck` | number of k-cells | dimensionless (abstract mathematical convention) | mathematical object |
| `bk` | dimension of kth rational homology | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Finite CW complex; homology over a field for Betti numbers.

**Derivation or proof guide**

1. Rank-nullity makes boundary dimensions cancel in the alternating sum.

**Worked example**

Inputs: A sphere with one0-cell and one2-cell

1. χ=1+1

Result: χ(S²)=2; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- For a torus χ=0; genus cannot be ignored when using planar counting.

**Common mistakes**

- For a torus χ=0; genus cannot be ignored when using planar counting.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-hatcher`.

### Pythagorean theorem — `math-f-pythagoras`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
c^2=a^2+b^2
$$

Pythagorean theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `a,b` | perpendicular Euclidean side lengths | dimensionless (abstract mathematical convention) | mathematical object |
| `c` | hypotenuse length | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Right angle in a Euclidean inner-product plane.

**Derivation or proof guide**

1. Expand the squared norm of two orthogonal vectors.

**Worked example**

Inputs: a=3,b=4

1. c²=9+16

Result: c=5; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- On a curved surface geodesic triangles do not generally satisfy this Euclidean formula.

**Common mistakes**

- On a curved surface geodesic triangles do not generally satisfy this Euclidean formula.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-axler`.

### Law of cosines — `math-f-cosines`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
c^2=a^2+b^2-2ab\cos\theta
$$

Law of cosines under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `a,b` | positive Euclidean lengths | dimensionless (abstract mathematical convention) | mathematical object |
| `θ` | included angle in radians | dimensionless (abstract mathematical convention) | mathematical object |
| `c` | opposite side | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- The angle and lengths refer to the same Euclidean triangle.

**Derivation or proof guide**

1. Write c-vector=u-v and expand its inner product.

**Worked example**

Inputs: a=b=1,θ=π/3

1. c²=2-2*(1/2)

Result: c=1; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- A diagram drawn in perspective does not supply the actual metric angle.

**Common mistakes**

- A diagram drawn in perspective does not supply the actual metric angle.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-axler`.

### Cauchy–Schwarz inequality — `math-f-cauchy`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
|\langle x,y\rangle|\leq\|x\|\|y\|
$$

Cauchy–Schwarz inequality under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `x,y` | inner-product vectors | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Positive-definite real or complex inner product; choose one conjugate-linearity convention.

**Derivation or proof guide**

1. Minimize ||x-ty||² over scalar t, or handle y=0 separately.

**Worked example**

Inputs: x=(1,1),y=(1,-1)

1. Inner product0 while both norms are√2

Result: 0≤2; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- An indefinite Lorentzian bilinear form is not an inner product and needs different inequalities.

**Common mistakes**

- An indefinite Lorentzian bilinear form is not an inner product and needs different inequalities.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-axler`.

### Triangle inequality from an inner product — `math-f-minkowski`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\|x+y\|\leq\|x\|+\|y\|
$$

Triangle inequality from an inner product under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `x,y` | inner-product vectors | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Norm is induced by a positive-definite inner product.

**Derivation or proof guide**

1. Expand the norm square and bound the real cross term by Cauchy–Schwarz.

**Worked example**

Inputs: x=(3,0),y=(0,4)

1. ||x+y||=5≤3+4

Result: 5≤7; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Equality requires compatible directions; perpendicular vectors usually give strict inequality.

**Common mistakes**

- Equality requires compatible directions; perpendicular vectors usually give strict inequality.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-axler`.

### Generalized Stokes theorem — `math-f-stokes`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\int_Md\omega=\int_{\partial M}\omega
$$

Generalized Stokes theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `M` | oriented smooth compact n-manifold with boundary | dimensionless (abstract mathematical convention) | mathematical object |
| `ω` | smooth(n-1)-form | dimensionless (abstract mathematical convention) | mathematical object |
| `d` | exterior derivative increasing form degree by one | dimensionless (abstract mathematical convention) | operator |
| `∂M` | boundary with induced outward-normal-first orientation | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Boundary has induced outward-normal-first orientation; compact support may replace compactness.

**Derivation or proof guide**

1. Use a partition of unity and reduce in charts to the one-variable fundamental theorem.

**Worked example**

Inputs: M=[0,1],ω=f(x)=x² as a0-form

1. ∫0¹2x dx=f(1)-f(0)

Result: 1; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Omitting boundary terms or changing boundary orientation changes the answer.

**Common mistakes**

- Omitting boundary terms or changing boundary orientation changes the answer.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-hatcher`.

### Local inverse function theorem — `math-f-inverse`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
D(f^{-1})(f(a))=[Df(a)]^{-1}
$$

Local inverse function theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | C1 map between open subsets of Rn | dimensionless (abstract mathematical convention) | mathematical object |
| `a` | base point | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- detDf(a)≠0; conclusion is local.

**Derivation or proof guide**

1. Linearize f near a and solve the correction by a contraction argument.

**Worked example**

Inputs: f(x)=x+x³ near0

1. f′(0)=1

Result: A differentiable local inverse exists with derivative1 at0; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- f(x)=x² has derivative0 at0 and is not locally invertible across0.

**Common mistakes**

- f(x)=x² has derivative0 at0 and is not locally invertible across0.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-lebl`.

### Implicit differentiation theorem — `math-f-implicit`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
Dg=-[D_yF]^{-1}D_xF
$$

Implicit differentiation theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `F` | C1 map(x,y)→Rm | dimensionless (abstract mathematical convention) | mathematical object |
| `g` | local solution y=g(x) | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- F(a,b)=0 and DyF(a,b) is invertible.

**Derivation or proof guide**

1. Apply the inverse function theorem to(x,y)↦(x,F(x,y)), then differentiate the constraint.

**Worked example**

Inputs: F(x,y)=x²+y²-1 near(0,1)

1. DyF=2y≠0; g′=-x/y

Result: g′(0)=0; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- At(1,0) this graph in y over x is singular even though the circle is smooth.

**Common mistakes**

- At(1,0) this graph in y over x is singular even though the circle is smooth.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-lebl`.

### Geodesic equation — `math-f-geodesic`

Status: theorem.

**Source pairing audit:** TongEq3.29 and MITtheorem38.1/corollary38.2 inspected; the atlas states the Riemannian version.

$$
\ddot x^k+\Gamma^k_{ij}\dot x^i\dot x^j=0
$$

Geodesic equation under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `xk` | local coordinates along an affinely parameterized curve | dimensionless (abstract mathematical convention) | mathematical object |
| `Γ` | Levi-Civita connection coefficients | dimensionless (abstract mathematical convention) | mathematical object |
| `g` | smooth positive-definite Riemannian metric | dimensionless (abstract mathematical convention) | tensor |
| `τ` | affine curve parameter | dimensionless (abstract mathematical convention) | coordinate |
| `i,j,k` | coordinate indices; repeated i,j are summed | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Smooth Riemannian metric and a specified chart; affine parameter.

**Derivation or proof guide**

1. Stationarize the energy functional, or require covariant acceleration zero.

**Worked example**

Inputs: Euclidean Cartesian coordinates with Γ=0

1. x¨=0

Result: Geodesics are straight lines at constant speed; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- In polar coordinates Γ is nonzero even for flat space; coefficients are not curvature.

**Common mistakes**

- In polar coordinates Γ is nonzero even for flat space; coefficients are not curvature.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- The connection equation extends to Lorentzian metrics, but a timelike proper-time stationary path is not a Riemannian global minimum; global extremality is not asserted.

Source records: `math-tong-gr`, `math-mit-surfaces`.

### Gauss–Bonnet for closed surfaces — `math-f-gauss-bonnet`

Status: theorem.

**Source pairing audit:** Exact boundary theorem and general-domain formula inspected; closed embedded-surface corollary follows by empty boundary.

$$
\int_MK\,dA=2\pi\chi(M)
$$

Gauss–Bonnet for closed surfaces under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `M` | closed oriented embedded surface | dimensionless (abstract mathematical convention) | mathematical object |
| `g` | induced positive-definite Riemannian metric | dimensionless (abstract mathematical convention) | tensor |
| `K` | Gaussian curvature | dimensionless (abstract mathematical convention) | scalar |
| `dA` | metric area element | dimensionless (abstract mathematical convention) | mathematical object |
| `χ(M)` | Euler characteristic, an integer topological invariant | dimensionless (abstract mathematical convention) | mathematical object |
| `π` | circle constant | dimensionless (abstract mathematical convention) | constant |

**Conditions and domain**

- Source-paired version: M is a compact oriented smooth surface embedded in R3, without boundary, carrying the induced Riemannian metric g.
- K is its Gaussian curvature and dA the metric area element; the abstract intrinsic extension is not separately source-audited here.

**Derivation or proof guide**

1. Triangulate by small geodesic pieces and sum local angle excesses; interior edge terms cancel.

**Worked example**

Inputs: Unit round sphere: K=1,area=4π

1. χ(S²)=2

Result: 4π=2π*2; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- A disk needs a boundary geodesic-curvature term.

**Common mistakes**

- A disk needs a boundary geodesic-curvature term.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.

Source records: `math-mit-surfaces`.

### Hamiltonian vector field — `math-f-hamilton`

Status: theorem.

**Source pairing audit:** Exact definition18.1 and preceding construction/flow argument inspected.

$$
\iota_{X_H}\omega=dH,\quad\dot q=\partial_pH,\ \dot p=-\partial_qH
$$

Hamiltonian vector field under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `ω` | nondegenerate closed2-form | dimensionless (abstract mathematical convention) | mathematical object |
| `H` | smooth Hamiltonian | dimensionless (abstract mathematical convention) | mathematical object |
| `q,p` | canonical coordinates | dimensionless (abstract mathematical convention) | mathematical object |
| `ι_X` | interior contraction with vector field X | dimensionless (abstract mathematical convention) | operator |
| `d` | exterior derivative | dimensionless (abstract mathematical convention) | operator |

**Conditions and domain**

- Convention ω=Σdq∧dp and contraction in the first vector slot.
- Global flow additionally requires completeness, for example compact M; only the local vector-field equation is asserted without that condition.

**Derivation or proof guide**

1. Nondegeneracy uniquely solves the contraction equation.
2. In coordinates compare coefficients of dq and dp.

**Worked example**

Inputs: H=(p²+q²)/2

1. qdot=p,pdot=-q

Result: H is constant along the flow; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- An arbitrary nonclosed2-form need not define a symplectic structure.

**Common mistakes**

- An arbitrary nonclosed2-form need not define a symplectic structure.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.

Source records: `math-cannas-symplectic`.

### de Rham theorem — `math-f-de-rham`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
H^k_{dR}(M)\cong H^k(M;\mathbb R)
$$

de Rham theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `M` | smooth manifold | dimensionless (abstract mathematical convention) | mathematical object |
| `HdreRham` | closed forms modulo exact forms | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Use ordinary smooth de Rham theory on a paracompact smooth manifold.

**Derivation or proof guide**

1. Integrate forms over smooth singular simplices; Stokes makes a cochain map; local Poincaré lemma plus gluing gives the isomorphism.

**Worked example**

Inputs: M=S¹

1. The angular form has nonzero integral around the circle

Result: H1dR(S¹)≅R; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Closed does not imply globally exact on a noncontractible manifold.

**Common mistakes**

- Closed does not imply globally exact on a noncontractible manifold.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-hatcher`.

### Jacobian tangent space — `math-f-tangent-variety`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
T_pV=\ker Df(p)
$$

Jacobian tangent space under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `V` | affine algebraic set cut out by ideal generators f | dimensionless (abstract mathematical convention) | mathematical object |
| `p` | point | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Use generators of the defining ideal over the base field; this is the Zariski tangent space.

**Derivation or proof guide**

1. A first-order infinitesimal displacement p+εv satisfies f(p)+εDf(p)v=0 modulo ε².

**Worked example**

Inputs: V:y²-x³=0 at(0,0)

1. Both partial derivatives vanish

Result: Tangent space dimension2 although curve dimension1; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Tangent dimension can jump at singular points; do not infer smooth dimension from every Jacobian kernel.

**Common mistakes**

- Tangent dimension can jump at singular points; do not infer smooth dimension from every Jacobian kernel.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-milne-ag`.

### Epsilon–delta limit — `math-f-epsilon-limit`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\forall\epsilon>0\ \exists\delta>0:\ 0<|x-a|<\delta\Rightarrow|f(x)-L|<\epsilon
$$

Epsilon–delta limit under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | real function | dimensionless (abstract mathematical convention) | mathematical object |
| `a` | limit point | dimensionless (abstract mathematical convention) | mathematical object |
| `L` | proposed limit | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Quantifiers range over points in the domain approaching a.

**Derivation or proof guide**

1. To prove a limit, construct δ for each ε and verify the implication.

**Worked example**

Inputs: f(x)=2x,a=3,L=6

1. Choose δ=ε/2

Result: limx→3 2x=6; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Choosing δ depending on x after observing x reverses the quantifier order.

**Common mistakes**

- Choosing δ depending on x after observing x reverses the quantifier order.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-lebl`.

### Chain rule — `math-f-chain`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
D(g\circ f)(a)=Dg(f(a))Df(a)
$$

Chain rule under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f,g` | differentiable maps on compatible open Euclidean domains | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Differentiability holds at a and f(a), respectively.

**Derivation or proof guide**

1. Insert each first-order expansion and bound the composed remainder by o(||h||).

**Worked example**

Inputs: f(x)=x²,g(u)=sin u

1. (sin x²)′=cos(x²)*2x

Result: Derivative2x cos(x²); units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Existence of partial derivatives alone does not ensure total differentiability.

**Common mistakes**

- Existence of partial derivatives alone does not ensure total differentiability.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-lebl`.

### Taylor theorem with remainder — `math-f-taylor`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
f(x)=\sum_{k=0}^n\frac{f^{(k)}(a)}{k!}(x-a)^k+R_{n+1}
$$

Taylor theorem with remainder under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | Cn+1 real function | dimensionless (abstract mathematical convention) | mathematical object |
| `a` | expansion point | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- On the segment from a to x, |f(n+1)|≤M gives |R|≤M|x-a|^(n+1)/(n+1)!.

**Derivation or proof guide**

1. Repeated fundamental-theorem integration gives an integral remainder and its bound.

**Worked example**

Inputs: f=exp,a=0,n=2,x=0.1

1. Approximation1+0.1+0.005=1.105; M=e^0.1

Result: Error at most e^0.1*0.001/6; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- A smooth function need not equal its infinite Taylor series.

**Common mistakes**

- A smooth function need not equal its infinite Taylor series.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-lebl`.

### Fundamental theorem of calculus — `math-f-ftc`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\frac{d}{dx}\int_a^xf(t)dt=f(x)
$$

Fundamental theorem of calculus under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | continuous function on[a,b] | dimensionless (abstract mathematical convention) | mathematical object |
| `x` | interior point | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Continuity at x is sufficient for the pointwise derivative conclusion.

**Derivation or proof guide**

1. Bound the average integral difference by the local oscillation of f.

**Worked example**

Inputs: f(t)=t²,a=0

1. Integral=x³/3

Result: Derivative=x²; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- For merely integrable f the pointwise derivative need not exist everywhere.

**Common mistakes**

- For merely integrable f the pointwise derivative need not exist everywhere.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-lebl`.

### Differentiating a sequence of functions — `math-f-uniform-derivative`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
f_n\to f,\quad f_n^\prime\to g\text{ uniformly}\Rightarrow f^\prime=g
$$

Differentiating a sequence of functions under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `fn` | C1 functions on compact interval | dimensionless (abstract mathematical convention) | mathematical object |
| `g` | uniform derivative limit | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Assume fn(x0) converges at one point; derivative convergence is uniform.

**Derivation or proof guide**

1. Integrate fn′ from x0 and pass through uniform convergence.

**Worked example**

Inputs: fn(x)=x/n on[0,1]

1. fn′=1/n→0 uniformly

Result: Limit f=0 and f′=0; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Uniform convergence of functions alone does not control derivatives: sin(nx)/n→0 but derivatives cos(nx) do not converge.

**Common mistakes**

- Uniform convergence of functions alone does not control derivatives: sin(nx)/n→0 but derivatives cos(nx) do not converge.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-lebl`.

### Dominated convergence theorem — `math-f-dct`

Status: theorem.

**Source pairing audit:** Exact selected theorem statement and surrounding argument inspected; not all source proofs audited.

$$
\int f_n\,d\mu\to\int f\,d\mu
$$

Dominated convergence theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `μ` | measure | dimensionless (abstract mathematical convention) | mathematical object |
| `fn` | measurable scalar functions | dimensionless (abstract mathematical convention) | mathematical object |
| `g` | integrable dominating function | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- fn→f almost everywhere and |fn|≤g almost everywhere for every n.

**Derivation or proof guide**

1. Apply Fatou to g±fn, or use integrable tail control and convergence in measure on finite pieces.

**Worked example**

Inputs: fn(x)=x^n on[0,1] with Lebesgue measure

1. Dominated by1; integral=1/(n+1)

Result: Integrals tend to0; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- fn=n*1(0,1/n) tends to0 a.e. but has integral1; no fixed integrable domination.

**Common mistakes**

- fn=n*1(0,1/n) tends to0 a.e. but has integral1; no fixed integrable domination.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.

Source records: `math-tao`.

### Tonelli and Fubini — `math-f-fubini`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\int_{X\times Y}f=\int_X\!\int_Yf=\int_Y\!\int_Xf
$$

Tonelli and Fubini under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `X,Y` | σ-finite measure spaces | dimensionless (abstract mathematical convention) | mathematical object |
| `f` | measurable function | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Nonnegative f permits Tonelli with infinity; signed/complex f needs absolute integrability for Fubini.

**Derivation or proof guide**

1. Approximate nonnegative functions by simple functions; split absolutely integrable f into controlled parts.

**Worked example**

Inputs: f(x,y)=xy on[0,1]²

1. Each iterated integral=(1/2)*(1/2)

Result: 1/4; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Conditionally convergent improper double integrals can depend on order.

**Common mistakes**

- Conditionally convergent improper double integrals can depend on order.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-tao`.

### Radon–Nikodym theorem — `math-f-radon`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\nu(A)=\int_Ah\,d\mu
$$

Radon–Nikodym theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `μ,ν` | σ-finite positive measures on one measurable space | dimensionless (abstract mathematical convention) | mathematical object |
| `h` | density | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- ν is absolutely continuous with respect to μ.

**Derivation or proof guide**

1. Construct the density via maximal dominated integral or a Hilbert-space reduction; uniqueness is almost everywhere.

**Worked example**

Inputs: ν(A)=∫A2x dx on[0,1]

1. h(x)=2x

Result: ν([0,1])=1; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- A point mass is not absolutely continuous with respect to Lebesgue measure.

**Common mistakes**

- A point mass is not absolutely continuous with respect to Lebesgue measure.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-tao`.

### Riesz representation in a Hilbert space — `math-f-riesz`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\ell(x)=\langle x,y\rangle
$$

Riesz representation in a Hilbert space under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `H` | Hilbert space | dimensionless (abstract mathematical convention) | mathematical object |
| `ℓ` | bounded linear functional | dimensionless (abstract mathematical convention) | mathematical object |
| `y` | representing vector | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Inner product is taken linear in its first argument; completeness is required.

**Derivation or proof guide**

1. Use the orthogonal complement of kerℓ, normalize its generator and handle ℓ=0.

**Worked example**

Inputs: H=R²,ℓ(x1,x2)=2x1-3x2

1. Choose y=(2,-3)

Result: Unique representation by y; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Unbounded linear functionals are outside the theorem.

**Common mistakes**

- Unbounded linear functionals are outside the theorem.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-axler`.

### Contraction mapping theorem — `math-f-banach`

Status: theorem.

**Source pairing audit:** Exact selected theorem statement and surrounding argument inspected; not all source proofs audited.

$$
d(x_n,x_*)\leq\frac{q^n}{1-q}d(x_1,x_0)
$$

Contraction mapping theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `X` | nonempty complete metric space | dimensionless (abstract mathematical convention) | mathematical object |
| `T` | X→X | dimensionless (abstract mathematical convention) | mathematical object |
| `q` | contraction factor | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- d(Tx,Ty)≤q d(x,y) with0≤q<1.

**Derivation or proof guide**

1. Iterate T; geometric tail bounds make a Cauchy sequence; continuity gives a fixed point and contraction gives uniqueness.

**Worked example**

Inputs: T(x)=(x+2)/2 on R

1. Fixed-point equation x=(x+2)/2

Result: Unique fixed point2; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- T(x)=x+1 is nonexpansive with q=1 but has no fixed point on R.

**Common mistakes**

- T(x)=x+1 is nonexpansive with q=1 but has no fixed point on R.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.

Source records: `math-lebl`.

### Compact self-adjoint spectral theorem — `math-f-compact-spectral`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
Tx=\sum_j\lambda_j\langle x,e_j\rangle e_j
$$

Compact self-adjoint spectral theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `T` | compact self-adjoint operator on Hilbert space | dimensionless (abstract mathematical convention) | mathematical object |
| `ej` | orthonormal eigenvectors for nonzero eigenvalues | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- The remaining orthogonal subspace is kerT; nonzero eigenvalues can accumulate only at0.

**Derivation or proof guide**

1. Maximize the quadratic form on unit vectors, extract eigenvectors using compactness, then iterate on orthogonal complements.

**Worked example**

Inputs: T on l² defined by(Tx)n=xn/n

1. Standard basis vectors have eigenvalues1/n

Result: Finite-rank truncations converge in operator norm; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- The identity on infinite-dimensional l² is self-adjoint but not compact.

**Common mistakes**

- The identity on infinite-dimensional l² is self-adjoint but not compact.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-hairer`.

### Weak derivative and the delta distribution — `math-f-distribution`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\langle Df,\varphi\rangle=-\langle f,\varphi^\prime\rangle
$$

Weak derivative and the delta distribution under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `φ` | smooth compactly supported test function | dimensionless (abstract mathematical convention) | mathematical object |
| `f` | locally integrable function | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Distributions act continuously on test functions; boundary terms vanish by compact support.

**Derivation or proof guide**

1. Define the derivative by integration by parts and extend beyond ordinary derivatives.

**Worked example**

Inputs: Heaviside H=0 for x<0,1 for x>0

1. -∫0∞φ′(x)dx=φ(0)

Result: DH=δ0; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- δ0 is not an ordinary function with a finite point value.

**Common mistakes**

- δ0 is not an ordinary function with a finite point value.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-hairer`.

### Plancherel identity — `math-f-plancherel`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\|\widehat f\|_2=\|f\|_2
$$

Plancherel identity under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | L2 function on Rn | dimensionless (abstract mathematical convention) | mathematical object |
| `Fourier transform` | unitarily normalized | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Use fhat(ξ)=(2π)^(-n/2)∫exp(-ix·ξ)f(x)dx initially on Schwartz functions.

**Derivation or proof guide**

1. Parseval holds for rapidly decaying smooth functions; density uniquely extends the transform to L2.

**Worked example**

Inputs: Normalized Gaussian in one dimension

1. Its unitary Fourier transform is another Gaussian with the same L2 norm

Result: L2 energy is preserved; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- A different Fourier normalization changes constants; an FFT bin is not automatically a physical spectral density.

**Common mistakes**

- A different Fourier normalization changes constants; an FFT bin is not automatically a physical spectral density.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-hairer`.

### Picard–Lindelöf local theorem — `math-f-picard`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\dot x=f(t,x),\quad x(t_0)=x_0
$$

Picard–Lindelöf local theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | continuous time-dependent vector field | dimensionless (abstract mathematical convention) | mathematical object |
| `x` | trajectory | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- f is locally Lipschitz in x uniformly on a suitable time neighborhood.

**Derivation or proof guide**

1. The integral equation is a contraction on a small closed trajectory ball.

**Worked example**

Inputs: xdot=x,x(0)=1

1. Integrate or separate variables

Result: Unique local and global solution e^t; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- xdot=√|x| at x0=0 has delayed nonunique solutions; continuity alone is insufficient.

**Common mistakes**

- xdot=√|x| at x0=0 has delayed nonunique solutions; continuity alone is insufficient.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-lebl`.

### Periodic heat semigroup — `math-f-heat`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
u_k(t)=e^{-\kappa |k|^2t}u_k(0)
$$

Periodic heat semigroup under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `uk` | Fourier coefficient on2π-periodic torus | dimensionless (abstract mathematical convention) | mathematical object |
| `κ` | positive nondimensional diffusivity | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Initial data in L2; use periodic Laplacian with specified realization.

**Derivation or proof guide**

1. Fourier expansion diagonalizes the Laplacian; solve each scalar ODE.

**Worked example**

Inputs: u(x,0)=sin x,κ=1

1. Only modes±1 survive with decay e^-t

Result: u=e^-t sin x; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Backward heat evolution amplifies high frequencies and is not a stable inverse on L2.

**Common mistakes**

- Backward heat evolution amplifies high frequencies and is not a stable inverse on L2.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-hairer`.

### Lax–Milgram weak existence — `math-f-lax-milgram`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
a(u,v)=\ell(v)\quad\forall v\in H
$$

Lax–Milgram weak existence under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `H` | real Hilbert space | dimensionless (abstract mathematical convention) | mathematical object |
| `a` | bounded coercive bilinear form | dimensionless (abstract mathematical convention) | mathematical object |
| `ℓ` | bounded linear functional | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- a(v,v)≥α||v||² with α>0; boundedness holds uniformly.

**Derivation or proof guide**

1. Represent the form by a bounded operator; coercivity gives a bounded inverse using Hilbert-space arguments.

**Worked example**

Inputs: H=R²,a(u,v)=u·v,ℓ(v)=(1,2)·v

1. Choose u=(1,2)

Result: Unique solution u=(1,2); units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- A positive semidefinite form with a kernel can lose uniqueness.

**Common mistakes**

- A positive semidefinite form with a kernel can lose uniqueness.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-hairer`.

### Itô formula for a scalar diffusion — `math-f-ito`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
df(X_t)=f^\prime(X_t)b_tdt+f^\prime(X_t)\sigma_tdW_t+\tfrac12f^{\prime\prime}(X_t)\sigma_t^2dt
$$

Itô formula for a scalar diffusion under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `W` | standard Brownian motion | dimensionless (abstract mathematical convention) | mathematical object |
| `X` | Itô process | dimensionless (abstract mathematical convention) | mathematical object |
| `f` | C2 scalar function | dimensionless (abstract mathematical convention) | mathematical object |
| `b,σ` | adapted coefficients | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Local integrability conditions define the stochastic integrals; localization handles unbounded coefficients.

**Derivation or proof guide**

1. Taylor-expand increments; Brownian quadratic variation yields(dW)²=dt in the rigorous partition limit.

**Worked example**

Inputs: X=W,f(x)=x²

1. df=2W dW+dt

Result: W_t²=2∫0^tW_s dW_s+t; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Ordinary chain rule misses the drift correction;(dW)²=dt is mnemonic, not algebra of infinitesimal numbers.

**Common mistakes**

- Ordinary chain rule misses the drift correction;(dW)²=dt is mnemonic, not algebra of infinitesimal numbers.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-hairer`.

### IID central limit theorem — `math-f-clt`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\frac{\sum_{i=1}^n(X_i-\mu)}{\sigma\sqrt n}\Rightarrow N(0,1)
$$

IID central limit theorem under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Xi` | independent identically distributed real variables | dimensionless (abstract mathematical convention) | mathematical object |
| `μ` | finite mean | dimensionless (abstract mathematical convention) | mathematical object |
| `σ²` | finite positive variance | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Finite variance0<σ²<∞; weak convergence concerns distributions, not every sample path.

**Derivation or proof guide**

1. Expand the characteristic function near0 and raise it to the nth power.

**Worked example**

Inputs: Xi take±1 with equal probability

1. μ=0,σ=1; normalized sum has variance1

Result: Its distribution approaches standard normal; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Cauchy variables have no finite variance and do not satisfy this normalized theorem.

**Common mistakes**

- Cauchy variables have no finite variance and do not satisfy this normalized theorem.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-hairer`.

### Linear-system perturbation bound — `math-f-condition`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\frac{\|\delta x\|}{\|x\|}\leq\kappa(A)\frac{\|\delta b\|}{\|b\|}
$$

Linear-system perturbation bound under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `A` | invertible matrix | dimensionless (abstract mathematical convention) | mathematical object |
| `x` | A^-1b | dimensionless (abstract mathematical convention) | mathematical object |
| `κ(A)` | \|\|A\|\|\|\|A^-1\|\| in a subordinate norm | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Perturb only b, with b≠0; δx=A^-1δb.

**Derivation or proof guide**

1. Bound ||δx|| by ||A^-1||||δb|| and use ||b||≤||A||||x||.

**Worked example**

Inputs: A=diag(1,10^-6)

1. In the Euclidean norm κ=10^6

Result: Small data errors can amplify by up to one million in worst directions; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- Algorithmic backward stability does not make an ill-conditioned problem well-conditioned.

**Common mistakes**

- Algorithmic backward stability does not make an ill-conditioned problem well-conditioned.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-dlmf-linear`.

### Local quadratic Newton convergence — `math-f-newton`

Status: theorem.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
x_{n+1}=x_n-\frac{f(x_n)}{f^\prime(x_n)}
$$

Local quadratic Newton convergence under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `f` | C2 scalar function | dimensionless (abstract mathematical convention) | mathematical object |
| `x*` | simple root | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- f(x*)=0,f′(x*)≠0; initial iterate sufficiently close and derivative bounded away from0 locally.

**Derivation or proof guide**

1. Taylor expansion at the root bounds the next error by a constant times the current error squared.

**Worked example**

Inputs: f=x²-2,x0=1.5

1. x1=(1.5+2/1.5)/2=1.4166667

Result: Iterates approach√2 quadratically; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- At a multiple root, plain Newton is generally only linearly convergent.

**Common mistakes**

- At a multiple root, plain Newton is generally only linearly convergent.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-dlmf-linear`.

### A proof judgment is relative to an environment — `math-f-kernel`

Status: conditional-result.

**Source pairing audit:** Non-source-audited teaching reconstruction: cited references supply related context, but an exact theorem-to-source passage was not independently checked.

$$
\Gamma\vdash t:P
$$

A proof judgment is relative to an environment under the stated hypotheses.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Γ` | declared axioms,definitions and typing context | dimensionless (abstract mathematical convention) | mathematical object |
| `t` | proof term | dimensionless (abstract mathematical convention) | mathematical object |
| `P` | formal proposition | dimensionless (abstract mathematical convention) | mathematical object |

**Conditions and domain**

- Kernel checks the exact formal statement using its trusted rules; connection to an informal claim is an additional obligation.

**Derivation or proof guide**

1. For reflexive equality the constructor rfl certifies a term equal to itself after permitted reduction.

**Worked example**

Inputs: Lean-style statement:∀n:Nat,n+0=n

1. Unfold the recursion equation for addition at zero; use reflexivity

Result: An illustrative proof schema, not a Lean run executed for this atlas; units: dimensionless; no physical scale or empirical data assigned

**Limits and counterchecks**

- A kernel can correctly check a mistranslated statement or a theorem depending on an unwanted axiom.

**Common mistakes**

- A kernel can correctly check a mistranslated statement or a theorem depending on an unwanted axiom.
- The proof and example apply to the stated structures and domain; a physical application needs an independently specified measurement map and units.
- Source audit limit: this is a teaching reconstruction; related references are not a separately verified exact theorem/proof pairing.

Source records: `math-lean`.


## Research paper evidence cards


### math-paper-kakeya

**sourceId**: math-kakeya

**status**: selected preprint statements read; full proof not independently verified

**question**: Must a set containing a unit segment in every direction in R3 have full dimension?

**method**: Multiscale volume estimates for direction-rich tube families constrained inside convex sets.

**result**: The source main theorem claims Hausdorff/Minkowski dimension3.

**whatIsNew**: A source-attributed resolution of the three-dimensional dimension problem; positive volume and all higher dimensions are separate statements.

**limitations**: Not an independent127-page proof audit. The source explicitly does not solve the R3 Kakeya maximal-function conjecture with K=3; higher-dimensional dimension problems are also separate.

**replication**: No full proof reconstruction or formal verification performed by this atlas; selected theorem scope was compared with foundational definitions.

**nextQuestions**: Inspect subsequent revisions and independent assessments after this dated corpus.
Reconstruct the full theorem assumptions before transferring the result to a different setting.


### math-paper-langlands

**sourceId**: math-langlands

**status**: selected preprint statements read; full proof not independently verified

**question**: How can automorphic and spectral categories be connected in characteristic zero?

**method**: Categorical construction and comparison of deRham/Betti and tempered/restricted formulations.

**result**: PartI constructs one direction of the functor and proves specified equivalences.

**whatIsNew**: The inspected contribution is a functor construction and framework comparison, not an atlas proof of every Langlands conjecture.

**limitations**: PartI is not by itself the complete multi-paper proof, arithmetic Langlands or every coefficient/characteristic setting. The inspected characteristic-zero global/unramified setup fixes a smooth complete curve X and connected reductive G; PartI is one of five papers.

**replication**: No full proof reconstruction or formal verification performed by this atlas; selected theorem scope was compared with foundational definitions.

**nextQuestions**: Inspect subsequent revisions and independent assessments after this dated corpus.
Reconstruct the full theorem assumptions before transferring the result to a different setting.


### math-paper-sofa

**sourceId**: math-sofa

**status**: selected preprint statements read; full proof not independently verified

**question**: Which planar body can pass around a right-angle unit corridor with largest area?

**method**: Geometric/variational upper-bound argument for feasible moving shapes.

**result**: The author claims optimality of Gerver area2.2195… .

**whatIsNew**: A claimed exact global optimum rather than a larger numerical candidate; full certification is not performed here.

**limitations**: No independent119-page proof audit, formal certification or verified journal-acceptance claim. Definition1.1.2 uses a nonempty connected closed planar set with continuous orientation-preserving SE(2) motion through the specified unit-width L corridor.

**replication**: No full proof reconstruction or formal verification performed by this atlas; selected theorem scope was compared with foundational definitions.

**nextQuestions**: Inspect subsequent revisions and independent assessments after this dated corpus.
Reconstruct the full theorem assumptions before transferring the result to a different setting.


### math-paper-hilbert6

**sourceId**: math-hilbert6

**status**: selected preprint statements read; full proof not independently verified

**question**: Can specified fluid equations be obtained from deterministic elastic hard-sphere systems?

**method**: Controlled kinetic limits on2D/3D tori, then fluid scalings under source regularity/limit assumptions.

**result**: Source claims compressible Euler and incompressible Navier–Stokes–Fourier derivations in the declared program.

**whatIsNew**: Extends a mathematical kinetic-to-fluid derivation program; this does not prove arbitrary3D fluid regularity.

**limitations**: Not all of Hilbert6, arbitrary molecular potentials, global3D Navier–Stokes regularity or an arbitrary hydrodynamic regime. Theorem1 assumes an existing Boltzmann solution, velocity-weighted L∞ and initial-gradient bounds, and max(1,α)max(1,A)max(1,t_fin) ≪ sqrt(log|log ε|); fluid statements impose smooth limiting solutions and well-prepared data.

**replication**: No full proof reconstruction or formal verification performed by this atlas; selected theorem scope was compared with foundational definitions.

**nextQuestions**: Inspect subsequent revisions and independent assessments after this dated corpus.
Reconstruct the full theorem assumptions before transferring the result to a different setting.


## Nested coverage map

- **Algebra** (`math-algebra`; mapped): Numbers, operations, symmetry and compositional structure.
- **Geometry and topology** (`math-geometry`; mapped): Shapes, spaces, metrics, invariants and deformation.
- **Calculus and analysis** (`math-calculus`; mapped): Limits, variation, integration, evolution and approximation.
  - **Arithmetic and elementary number theory** (`math-arithmetic`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Linear algebra** (`math-linear`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Abstract algebra** (`math-abstract`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Commutative algebra** (`math-commutative`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Homological algebra** (`math-homological`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Category theory** (`math-categories`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Representation theory** (`math-representations`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Advanced number theory** (`math-number-theory`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Euclidean geometry** (`math-euclidean`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Differential geometry** (`math-differential`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Riemannian geometry** (`math-riemannian`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Symplectic geometry** (`math-symplectic`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Algebraic geometry** (`math-algebraic-geometry`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Topology** (`math-topology`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Geometric analysis** (`math-geometric-analysis`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Limits and continuity** (`math-limits`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Differentiation** (`math-differentiation`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Integration and measure** (`math-integration`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Functional analysis** (`math-functional`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **ODE and PDE** (`math-evolution`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Probability and stochastic analysis** (`math-probability`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Numerical analysis** (`math-numerical`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
  - **Proof, logic and formal verification** (`math-logic`; mapped): A navigable branch whose later records specify exact structures, hypotheses and failure cases.
    - **Rational arithmetic** (`math-rationals`; reviewed): Represent ratios with nonzero denominators; equality is not tied to one fraction spelling.
    - **Divisibility and Euclidean algorithm** (`math-integers`; reviewed): Use division with remainder to compute gcd and reconstruct integer linear combinations.
    - **Congruences and modular inverses** (`math-congruences`; reviewed): Work in residue classes; invertibility depends on coprimality, not merely nonzero spelling.
    - **Induction and finite sums** (`math-induction`; reviewed): Prove a base case and a successor implication with the same quantified statement.
    - **Polynomials and factorization** (`math-polynomials`; reviewed): Distinguish formal polynomials, evaluation functions and the underlying coefficient ring.
    - **Vector spaces and bases** (`math-vector-spaces`; mapped): Fix a scalar field before discussing linear independence, bases or dimension.
    - **Linear maps and rank** (`math-linear-maps`; reviewed): Kernel and image describe both solvability and nonunique inverse reconstruction.
    - **Determinants and orientation** (`math-determinants`; reviewed): A determinant detects invertibility and oriented volume in a fixed finite dimension.
    - **Eigenvalues and invariant subspaces** (`math-eigenvalues`; reviewed): Eigenvectors need not span, and numerical eigenvalue behavior depends on normality.
    - **Inner products and orthogonality** (`math-inner-products`; reviewed): An inner product supplies geometry beyond the bare vector-space axioms.
    - **Singular values and inverse problems** (`math-svd`; reviewed): Separate right/left singular directions and quantify sensitivity to small singular values.
    - **Projection and least squares** (`math-least-squares`; reviewed): A residual orthogonal to the range solves a specified Euclidean approximation problem.
    - **Groups and homomorphisms** (`math-groups`; reviewed): Composition, identity and inverse organize symmetry without assuming commutativity.
    - **Group actions and orbits** (`math-group-actions`; reviewed): An action converts algebraic symmetry into motion on a set; stabilizers encode redundancy.
    - **Rings, ideals and quotients** (`math-rings`; reviewed): Ideals are precisely the congruences compatible with ring operations.
    - **Noetherian rings and finite generation** (`math-noetherian`; reviewed): Ascending chain control is an algebraic finiteness condition, not a numerical bound.
    - **Localization and local rings** (`math-localization`; mapped): Invert a specified multiplicative set while tracking what elements become indistinguishable.
    - **Fields and Galois theory** (`math-fields`; reviewed): Normality and separability are necessary parts of the finite Galois correspondence.
    - **Chain complexes and homology** (`math-chain-complexes`; reviewed): Boundary squared zero makes boundaries cycles; quotienting measures remaining classes.
    - **Exact sequences and derived functors** (`math-exact-sequences`; mapped): Exactness compares image with kernel, while derived functors measure failure of exactness.
    - **Tensor products and multilinearity** (`math-tensor`; reviewed): A tensor product represents bilinear maps; it is not a choice-free identification with a dual.
    - **Functors and natural transformations** (`math-functors`; mapped): Preserve identities and composition, then compare structure-preserving maps naturally.
    - **Representability and Yoneda** (`math-yoneda`; reviewed): Recover an object through all maps into it within a stated locally small category.
    - **Adjunctions, limits and colimits** (`math-adjunctions`; mapped): Universal properties characterize constructions up to appropriate canonical isomorphism.
    - **Finite-group representations** (`math-finite-representations`; reviewed): Specify the coefficient field and its characteristic before decomposing invariant subspaces.
    - **Lie groups, Lie algebras and representations** (`math-lie-representations`; mapped): Differentiate continuous symmetry with explicit global integrability qualifications.
    - **Prime distribution and zeta functions** (`math-primes`; mapped): Distinguish elementary divisibility, analytic continuation and unresolved zero-location claims.
    - **Arithmetic geometry and automorphic ideas** (`math-arithmetic-geometry`; mapped): Relate arithmetic and geometric objects through specified correspondences, not name resemblance.
    - **Distance and rigid geometry** (`math-metric`; reviewed): Distances require a metric; diagrams do not certify an angle or length.
    - **Trigonometry and coordinate geometry** (`math-trigonometry`; reviewed): Coordinate formulas depend on a chosen Cartesian or metric structure.
    - **Smooth manifolds and charts** (`math-manifolds`; mapped): Local Euclidean charts are glued by smooth transition maps; one chart need not cover a space.
    - **Tangent vectors and differential forms** (`math-tangent`; mapped): Tangent vectors differentiate functions; forms integrate on oriented chains.
    - **Orientation and generalized Stokes theorem** (`math-stokes`; reviewed): Boundary orientation, support and regularity are part of the integral identity.
    - **Connections and covariant differentiation** (`math-connections`; reviewed): Compare tangent vectors using a connection; coordinate symbols alone are not tensor components.
    - **Curvature and geodesics** (`math-curvature`; reviewed): Intrinsic curvature and shortest-path behavior require a metric and local/global distinctions.
    - **Symplectic forms and Hamiltonian flows** (`math-symplectic-forms`; reviewed): A closed nondegenerate two-form defines a Hamiltonian vector field with a sign convention.
    - **Poisson brackets and quantization problems** (`math-poisson`; mapped): A classical Poisson algebra does not by itself determine a unique quantum theory.
    - **Varieties, ideals and coordinate rings** (`math-varieties`; reviewed): An affine algebraic set and its equations depend on the base field and reducedness.
    - **Schemes and local-to-global gluing** (`math-schemes`; mapped): Local prime spectra retain nilpotent and arithmetic structure absent from point sets.
    - **Sheaves, cohomology and descent** (`math-sheaves`; mapped): Local sections glue under precise compatibility conditions; stalk information needs a sheaf.
    - **Homotopy and fundamental groups** (`math-homotopy`; mapped): Continuous deformation is weaker than homeomorphism and different from metric closeness.
    - **Homology and Euler characteristic** (`math-homology`; reviewed): Topological cycles and boundary quotients yield algebraic invariants with declared coefficients.
    - **Cohomology and characteristic classes** (`math-cohomology`; reviewed): Dual and multiplicative invariants encode global obstruction data beyond pointwise coordinates.
    - **Fourier and harmonic analysis** (`math-harmonic-analysis`; reviewed): Study scale, frequency and geometry with a declared transform convention and function space.
    - **Geometric measure theory** (`math-geometric-measure`; mapped): Measure and dimension control irregular sets that need not be smooth surfaces.
    - **Sequences, completeness and compactness** (`math-sequences`; reviewed): Completeness supports convergence, while compactness requires the right topology.
    - **Continuity and uniform control** (`math-continuity`; reviewed): Quantifier order distinguishes pointwise from uniform dependence on inputs.
    - **Derivatives, chain rule and Taylor expansion** (`math-derivatives`; reviewed): A derivative is a local linear approximation with a remainder, not a finite-step equality.
    - **Multivariable and implicit functions** (`math-multivariable`; reviewed): Invertibility of the relevant derivative is a local hypothesis, not an optional technicality.
    - **Riemann integration and fundamental theorem** (`math-riemann`; reviewed): Partitions and antiderivatives link two operations under explicit regularity.
    - **Sigma algebras, measures and Lebesgue integration** (`math-measure`; reviewed): Measurability and null sets determine what almost-everywhere assertions mean.
    - **Convergence theorems and product integration** (`math-convergence`; reviewed): Domination, nonnegativity and absolute integrability control exchanges of limits and integrals.
    - **Banach spaces and contractions** (`math-banach`; reviewed): A complete normed space supports fixed-point and bounded-operator methods.
    - **Hilbert spaces and weak convergence** (`math-hilbert`; reviewed): Inner products represent bounded linear functionals, but weak and norm convergence differ.
    - **Operator domains and spectral theory** (`math-operators`; mapped): Unbounded operators require a dense domain and compatible boundary conditions.
    - **Distributions and weak derivatives** (`math-distributions`; reviewed): Derivatives act on test functions, allowing point sources without pretending they are ordinary functions.
    - **ODE existence, uniqueness and phase space** (`math-ode`; reviewed): Local Lipschitz control gives uniqueness; finite-time blow-up remains possible.
    - **PDE, weak solutions and boundary data** (`math-pde`; mapped): An equation, solution concept, initial data and boundary conditions form one mathematical problem.
    - **Heat equations and semigroups** (`math-heat`; reviewed): Diffusive smoothing depends on the generator and boundary realization.
    - **Variational methods and elliptic equations** (`math-variational`; reviewed): Coercivity and boundedness produce weak solutions in the declared energy space.
    - **Random variables and distributions** (`math-random`; mapped): A probability model is a measure space, not merely a histogram or subjective certainty.
    - **Limit laws and statistical convergence** (`math-limit-laws`; reviewed): Limit distributions need assumptions on dependence, tails and normalization.
    - **Martingales, Brownian motion and stochastic integration** (`math-stochastic`; reviewed): Quadratic variation makes stochastic calculus different from ordinary calculus.
    - **Conditioning, estimation and Bayesian inference** (`math-conditioning`; mapped): A posterior depends on prior, likelihood and identifiable observations.
    - **Floating point, conditioning and stability** (`math-floating-point`; reviewed): Separate problem sensitivity from the errors introduced by an algorithm.
    - **Nonlinear solvers and convergence certificates** (`math-nonlinear-solvers`; reviewed): A small residual alone does not certify proximity without conditioning and existence control.
    - **Approximation, discretization and convergence** (`math-approximation`; mapped): Refinement, consistency and stability must target the same limiting problem.
    - **Logic, sets and type theory** (`math-logic-foundations`; mapped): Quantifiers, universes and axioms are part of a formal mathematical statement.
    - **Proof assistants and trusted kernels** (`math-proof-assistants`; reviewed): A checked proof term is relative to a declared environment, axioms and kernel.
      - **Derived and higher categories** (`math-derived-categories`; mapped): Organize complexes up to quasi-isomorphism; higher coherence is additional structure.
      - **Derived algebraic geometry** (`math-derived-stacks`; mapped): Derived intersections encode higher Tor information rather than discarding multiplicity.
      - **Automorphic sheaves and dual groups** (`math-automorphic`; mapped): Specify geometric versus arithmetic Langlands and the relevant coefficient framework.
      - **Tube incidence and multiscale geometry** (`math-kakeya-methods`; mapped): Translate direction-rich sets into quantitative tube-volume estimates.
      - **Rigid-motion shape optimization** (`math-shape-optimization`; mapped): Optimize feasible areas under an entire motion, not one sampled pose.
      - **Kinetic and hydrodynamic scaling limits** (`math-kinetic-limits`; mapped): Track particle number, radius, Knudsen number, time and regularity separately.
      - **Self-adjoint spectral decomposition** (`math-spectral-theorem`; reviewed): Distinguish finite matrices, compact operators and general unbounded spectral measures.
      - **Formal libraries and theorem dependencies** (`math-formal-libraries`; mapped): A theorem name is supported by its full imported proof and axiom dependency graph.
        - **Geometric Langlands frontier** (`math-geometric-langlands`; reviewed): Selected 2024–2025 series construction/equivalence result, not all arithmetic Langlands.
        - **Kakeya sets in three dimensions** (`math-kakeya-r3`; reviewed): Selected Wang–Zahl claim of full Hausdorff/Minkowski dimension3; higher dimensions remain distinct.
        - **Moving-sofa optimality frontier** (`math-moving-sofa`; reviewed): Selected Baek preprint claims Gerver optimality in a unit-width right-angle corridor.
        - **Boltzmann-to-fluid derivation frontier** (`math-hilbert-sixth`; reviewed): Selected hard-sphere/kinetic fluid program result, not every part of Hilbert6.
        - **Machine-checked research frontier** (`math-verified-research`; mapped): Statement correctness and trusted assumptions remain necessary after kernel acceptance.

## Glossary

**field** — A commutative ring in which every nonzero element is invertible.

**ring** — An additive abelian group with distributive multiplication; identity and commutativity are stated when needed.

**kernel** — Elements mapped to zero/identity; a source of nonunique inverse reconstruction.

**normal** — For matrices: commuting with the adjoint. For subgroups: invariant under conjugation. These meanings are distinct.

**a.e.** — Almost everywhere: outside a set of measure zero for the named measure.

**IID** — Independent and identically distributed.

**ODE** — Ordinary differential equation, with one evolution parameter.

**PDE** — Partial differential equation, with derivatives in multiple independent coordinates.

**SVD** — Singular-value decomposition with nonnegative singular values.

**FFT** — Fast Fourier transform, an algorithm for a discrete transform with specified normalization and sampling.

**CW complex** — A topological space built by attaching cells; the letters historically denote closure-finite and weak topology.

**L2** — Square-integrable functions modulo equality almost everywhere, with the chosen measure.

**C1/C2** — Continuously differentiable once/twice.

**Hilbert space** — A complete inner-product vector space.

**Banach space** — A complete normed vector space.

**coercive** — A quadratic/bilinear form bounded below by a positive constant times the norm squared.

**functor** — A map of categories preserving identities and composition.

**natural transformation** — A compatible family of maps between functors.

**sheaf** — Local data with unique compatible gluing.

**scheme** — A locally ringed space locally isomorphic to a prime spectrum; not merely a plot of polynomial zeros.

**Hausdorff dimension** — A scale-dependent measure-theoretic dimension defined through covers.

**Minkowski dimension** — A covering-number scaling dimension; upper/lower versions may differ.

**Kakeya set** — A subset of Euclidean space containing a unit line segment in every direction.

**Galois** — A field extension that is normal and separable in the finite correspondence used here.

**characteristic** — The least positive number of copies of1 summing to0, or0 if none.

**Itô integral** — A stochastic integral against Brownian motion defined by adapted approximation and an L2 isometry, then localization.

**quadratic variation** — Limit of squared increments; Brownian motion has quadratic variation t.

**weak convergence** — A topology-dependent convergence notion; it must not be silently substituted for norm or pointwise convergence.

**quasi-isomorphism** — A chain map inducing isomorphisms on homology.

**deRham** — The differential-form formulation of cohomology or, separately, a characteristic-zero connection setting; context fixes the meaning.

**Betti** — Topological/sheaf-theoretic terminology, not a synonym for a metric measurement.

**Boltzmann–Grad scaling** — A dilute hard-particle limit with particle count and radius linked to retain collision frequency; not a generic thermodynamic limit.

**Knudsen number** — Ratio of mean free path to a macroscopic length in a kinetic model.

**trusted kernel** — The small rule-checking component of a proof assistant; mathematical interpretation and trusted axioms remain separate obligations.

**DOI** — Digital Object Identifier; provenance identifier, not proof of correctness.

**arXiv** — A preprint repository; versions and review status must be tracked separately.

**nondimensional** — A mathematical normalization with no physical units until an explicit scale map is supplied.

## Open questions and missing evidence

### What changes in Kakeya dimension problems above R3?

Status: open scope boundary or unverified extension in this selected corpus. A higher-dimensional theorem with exact hypotheses; the R3 source is insufficient.

### Which parts of arithmetic/positive-characteristic Langlands are covered by which theorems?

Status: open scope boundary or unverified extension in this selected corpus. Separate statements, coefficient settings, functors and independent proof review.

### Can the full sofa upper-bound argument be independently reconstructed or formalized?

Status: open scope boundary or unverified extension in this selected corpus. Complete proof audit including motion feasibility and all global inequalities.

### How far do the hard-sphere fluid-limit results extend in time, data and interactions?

Status: open scope boundary or unverified extension in this selected corpus. Uniform estimates for each changed scaling, initial class and interaction potential.

### What about global regularity of3D incompressible Navier–Stokes?

Status: open scope boundary or unverified extension in this selected corpus. A theorem in the actual global finite-energy setting; a kinetic derivation does not supply it.

### How is an informal mathematical claim connected to the exact formal theorem?

Status: open scope boundary or unverified extension in this selected corpus. Statement translation, trusted axiom inventory, kernel record and independent semantic review.


## Source records and reading depth


### math-lebl — Basic Analysis I

Jiří Lebl; 2026; Version6.3,15May2026

https://www.jirka.org/ra/realanal.pdf

**Source class**: textbook

**Status / reading depth**: selected-text; Selected passages only: front matter and contents; uniform-continuity discussion; contraction-mapping theorem7.6.2 and beginning of proof. No whole-book or full-proof verification claimed.

**Sections inspected**: front matter and contents
uniform-continuity discussion
contraction-mapping theorem7.6.2 and beginning of proof

**Supported claim**: Precise quantifiers, convergence hypotheses and complete-space fixed-point argument.

**Limitations**: Only selected passages were inspected; displayed atlas proofs are independent reconstructions, not quotations.

**research-note**: Atlas paraphrase and independent teaching reconstruction; this source is not an endorsement or a certification of every linked application.

Capture SHA-256: `9c204ae1f1ee1641fa604a6456c0d13db4390db44633ee2df9c9d97b5486b7a6`; captured 2026-11-25T06:24:42.279956+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-axler — Linear Algebra Done Right, fourth edition

Sheldon Axler; 2024; Online PDF revised4November2026; copyright2024

https://linear.axler.net/LADR4e.pdf

**Source class**: textbook

**Status / reading depth**: selected-text; Selected passages only: front matter; linear-map and spectral/singular-value section locators; selected spectral discussion. No whole-book or full-proof verification claimed.; R2 exact statements7.29/7.31 inspected.

**Sections inspected**: front matter
linear-map and spectral/singular-value section locators
selected spectral discussion
Exact real/complex spectral statements7.29/7.31 and beginning of proof

**Supported claim**: Finite-dimensional vector-space/operator framework and restrictions on diagonalization.

**Limitations**: This is finite-dimensional linear algebra; infinite-dimensional operator domains require additional theory.

**research-note**: Atlas paraphrase and independent teaching reconstruction; this source is not an endorsement or a certification of every linked application.

Capture SHA-256: `e0229e3028fd91e6d48d3e6141a641d9f1154b89fde2a39aecc5769babec8372`; captured 2026-11-25T06:24:41.589421+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-milne-ag — Algebraic Geometry course notes

J.S.Milne; None; Captured author-hosted PDF; exact bytes pinned

https://www.jmilne.org/math/CourseNotes/AG.pdf

**Source class**: textbook

**Status / reading depth**: selected-text; Selected passages only: front matter; Nullstellensatz and tangent-space locators; selected affine-variety discussion. No whole-book or full-proof verification claimed.

**Sections inspected**: front matter
Nullstellensatz and tangent-space locators
selected affine-variety discussion

**Supported claim**: Coordinate rings, algebraic sets and local algebra support the geometry branch.

**Limitations**: Not a reading of all scheme theory or geometric Langlands; theorem reconstructions are scoped individually.

**research-note**: Atlas paraphrase and independent teaching reconstruction; this source is not an endorsement or a certification of every linked application.

Capture SHA-256: `8222dff2574a5afcff339a19dfd6f5b4354d1438b1fda9efb458a97258573b3d`; captured 2026-11-25T06:24:41.448806+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-milne-gt — Group Theory course notes

J.S.Milne; None; Captured author-hosted PDF; exact bytes pinned

https://www.jmilne.org/math/CourseNotes/GT.pdf

**Source class**: textbook

**Status / reading depth**: selected-text; Selected passages only: front matter; Lagrange/coset and representation locators; selected subgroup and representation passages. No whole-book or full-proof verification claimed.

**Sections inspected**: front matter
Lagrange/coset and representation locators
selected subgroup and representation passages

**Supported claim**: Group axioms, quotients and finite-group representation hypotheses.

**Limitations**: Related references do not constitute checked passages for every ring/field theorem; those proofs are explicitly atlas reconstructions.

**research-note**: Atlas paraphrase and independent teaching reconstruction; this source is not an endorsement or a certification of every linked application.

Capture SHA-256: `826a86c9faebaa3a8f398655da515a0ee8cd922a05787fdc3a1f21a16db73633`; captured 2026-11-25T06:24:41.614399+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-hatcher — Algebraic Topology

Allen Hatcher; 2002; Author-hosted electronic text

https://pi.math.cornell.edu/~hatcher/AT/AT.pdf

**Source class**: textbook

**Status / reading depth**: selected-text; Selected passages only: chapter0 Euler-characteristic example; chapter2 homology section overview; selected chain and homotopy passages. No whole-book or full-proof verification claimed.

**Sections inspected**: chapter0 Euler-characteristic example
chapter2 homology section overview
selected chain and homotopy passages

**Supported claim**: Cell counts, chain complexes and homotopy invariants distinguish geometry from topology.

**Limitations**: Riemannian metric formulas are not consequences of topology alone; not a complete reading of the book.

**research-note**: Atlas paraphrase and independent teaching reconstruction; this source is not an endorsement or a certification of every linked application.

Capture SHA-256: `bebb3032bf9021b956da3bd070eb6c67dc662cf849be9cdf6679f677560e5618`; captured 2026-11-25T06:24:41.648442+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-leinster — Basic Category Theory

Tom Leinster; 2016; arXiv1612.09375

https://arxiv.org/pdf/1612.09375

**Source class**: textbook

**Status / reading depth**: selected-text; Selected passages only: front matter; adjoint and representable sections; selected Yoneda statement/context. No whole-book or full-proof verification claimed.

**Sections inspected**: front matter
adjoint and representable sections
selected Yoneda statement/context

**Supported claim**: Universal properties and naturality clarify variance and structural identification.

**Limitations**: Higher categories and derived algebraic geometry are mapped leads rather than fully developed here.

**research-note**: Atlas paraphrase and independent teaching reconstruction; this source is not an endorsement or a certification of every linked application.

Capture SHA-256: `d9f933c65a4b5e156a0287a144fae3970466d3f4f040151ee19830aa5d139e52`; captured 2026-11-25T06:24:41.861886+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-lean — Theorem Proving in Lean4: Propositions and Proofs

Lean community; None; Online manual captured25November2026

https://lean-lang.org/theorem_proving_in_lean4/Propositions-and-Proofs/

**Source class**: official-data

**Status / reading depth**: selected-text; Selected passages only: propositions and proofs section; proof terms and propositions-as-types passages. No whole-book or full-proof verification claimed.

**Sections inspected**: propositions and proofs section
proof terms and propositions-as-types passages

**Supported claim**: Formal judgments concern exact types, proof terms and declared assumptions.

**Limitations**: No Lean process was executed for this atlas; illustrative schemas are not machine-checked certificates.

**research-note**: Atlas paraphrase and independent teaching reconstruction; this source is not an endorsement or a certification of every linked application.

Capture SHA-256: `ed4288196d321be295f4d1425fe727b96be0f24a704a2c5ed036330f34310b18`; captured 2026-11-25T06:24:41.435002+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-dlmf-linear — NIST DLMF §3.2 Linear Algebra

NIST DLMF editors; None; Online reference captured25November2026

https://dlmf.nist.gov/3.2

**Source class**: official-data

**Status / reading depth**: selected-text; Selected passages only: §3.2 linear-system and conditioning entries. No whole-book or full-proof verification claimed.

**Sections inspected**: §3.2 linear-system and conditioning entries

**Supported claim**: Conditioning and numerical linear algebra require a norm and a problem statement.

**Limitations**: A conditioning result is not evidence of a physically correct model or globally convergent solver.

**research-note**: Atlas paraphrase and independent teaching reconstruction; this source is not an endorsement or a certification of every linked application.

Capture SHA-256: `27c6e7a769a19c3656e08de87841df903498783f03e27e0e0391ed35e0f7a6de`; captured 2026-11-25T06:24:41.953793+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-stacks — The Stacks Project: chapter index

The Stacks Project authors; None; Online chapter index captured25November2026

https://stacks.math.columbia.edu/browse

**Source class**: metadata

**Status / reading depth**: selected-text; Selected passages only: chapter index only. No whole-book or full-proof verification claimed.

**Sections inspected**: chapter index only

**Supported claim**: Provides verified navigation to commutative, homological and algebraic-geometric subjects.

**Limitations**: Index-only coverage; it is not theorem-passage evidence.

**research-note**: Atlas paraphrase and independent teaching reconstruction; this source is not an endorsement or a certification of every linked application.

Capture SHA-256: `03e71d25af13cadaa9881d46919df58fc85eeb68915ded90a64e9e844b0f8957`; captured 2026-11-25T06:24:42.236057+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-hairer — An Introduction to Stochastic PDEs

Martin Hairer; None; Author-hosted lecture notes; exact bytes pinned

https://www.hairer.org/notes/SPDEs.pdf

**Source class**: textbook

**Status / reading depth**: selected-text; Selected passages only: front matter; selected stochastic-integration and Hilbert-space passages. No whole-book or full-proof verification claimed.

**Sections inspected**: front matter
selected stochastic-integration and Hilbert-space passages

**Supported claim**: A function-space and stochastic-calculus setting separates random evolution from deterministic ODEs.

**Limitations**: Not a full review of stochastic-PDE existence theory or every probability theorem in the atlas.

**research-note**: Atlas paraphrase and independent teaching reconstruction; this source is not an endorsement or a certification of every linked application.

Capture SHA-256: `dbbced2269f8aebaca2381d467c8316aa4f0917d8abdbe5cea229262983809e6`; captured 2026-11-25T06:26:53.882121+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-tao — An Introduction to Measure Theory

Terence Tao; 2011; Author-linked GSM126 preliminary text,2012file snapshot

https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf

**Source class**: textbook

**Status / reading depth**: selected-text; Selected passages only: front matter; selected convergence and product-integration passages. No whole-book or full-proof verification claimed.; R2 exact theorem1.4.49 inspected.

**Sections inspected**: front matter
selected convergence and product-integration passages
Theorem1.4.49 dominated convergence,statement and beginning of proof

**Supported claim**: Measurability, almost-everywhere statements and integration hypotheses.

**Limitations**: Only selected passages; the failed guessed older PDF URL is preserved as a failed retrieval, not read evidence.

**research-note**: Atlas paraphrase and independent teaching reconstruction; this source is not an endorsement or a certification of every linked application.

Capture SHA-256: `64498329b65eea0145b3dec77ace89bc9f34df82ed4f35dd7c467125c2a3dfec`; captured 2026-11-25T06:33:25.407269+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-kakeya — Volume estimates for unions of convex sets, and the Kakeya set conjecture in three dimensions

Hong Wang
Joshua Zahl; 2025; arXiv2502.17655v1,24February2025

https://arxiv.org/pdf/2502.17655

**Source class**: preprint

**Status / reading depth**: selected-text; Selected passages only: abstract; introduction and main-theorem statements. No whole-book or full-proof verification claimed.

**Sections inspected**: abstract
introduction and main-theorem statements

**Supported claim**: Authors claim tube-volume bounds implying Hausdorff and Minkowski dimension3 for every Kakeya set in R3.

**Limitations**: Not an independent127-page proof audit. The source explicitly does not solve the R3 Kakeya maximal-function conjecture with K=3; higher-dimensional dimension problems are also separate.

**research-note**: Atlas paraphrase and independent teaching reconstruction; this source is not an endorsement or a certification of every linked application.

Capture SHA-256: `631e8b2118e3d03ded2d5fe79f9acdf74353877d143e9887a3c31278cd13ed01`; captured 2026-11-25T06:26:53.324100+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-langlands — Proof of the geometric Langlands conjecture I: construction of the functor

Dennis Gaitsgory
Sam Raskin; 2024; arXiv2405.03599v3,30September2025

https://arxiv.org/pdf/2405.03599v3

**Source class**: preprint

**Status / reading depth**: selected-text; Selected passages only: abstract; introduction: characteristic-zero setting and construction scope. No whole-book or full-proof verification claimed.

**Sections inspected**: abstract
introduction: characteristic-zero setting and construction scope

**Supported claim**: Constructs automorphic-to-spectral functor and proves equivalences among forms in deRham/Betti characteristic-zero settings.

**Limitations**: PartI is not by itself the complete multi-paper proof, arithmetic Langlands or every coefficient/characteristic setting.

**research-note**: Atlas paraphrase and independent teaching reconstruction; this source is not an endorsement or a certification of every linked application.

Capture SHA-256: `a9a1bc11ad0b2749e7cb33d4e2faa2a86b8b511ebd36fd4f005e9e758834e7a0`; captured 2026-11-25T06:26:53.066666+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-sofa — Optimality of Gerver's Sofa

Jineon Baek; 2024; arXiv2411.19826v1,29November2024

https://arxiv.org/pdf/2411.19826

**Source class**: preprint

**Status / reading depth**: selected-text; Selected passages only: abstract; introduction and main optimality statement. No whole-book or full-proof verification claimed.

**Sections inspected**: abstract
introduction and main optimality statement

**Supported claim**: Author claims Gerver18-curve construction maximizes area at approximately2.2195 in the standard moving-sofa setting.

**Limitations**: No independent119-page proof audit, formal certification or verified journal-acceptance claim.

**research-note**: Atlas paraphrase and independent teaching reconstruction; this source is not an endorsement or a certification of every linked application.

Capture SHA-256: `c65e6683f8cfdda6e763055139fa90d167acbbc50ef1faf29a0e06573c801b27`; captured 2026-11-25T06:26:53.130761+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-hilbert6 — Hilbert's sixth problem: derivation of fluid equations via Boltzmann's kinetic theory

Yu Deng
Zaher Hani
Xiao Ma; 2025; arXiv2503.01800v1,3March2025

https://arxiv.org/pdf/2503.01800

**Source class**: preprint

**Status / reading depth**: selected-text; Selected passages only: abstract; introduction and stated hard-sphere/kinetic limit framework. No whole-book or full-proof verification claimed.

**Sections inspected**: abstract
introduction and stated hard-sphere/kinetic limit framework

**Supported claim**: Authors derive specified fluid limits from elastic hard-sphere systems through Boltzmann theory under their assumptions.

**Limitations**: Not all of Hilbert6, arbitrary molecular potentials, global3D Navier–Stokes regularity or an arbitrary hydrodynamic regime.

**research-note**: Atlas paraphrase and independent teaching reconstruction; this source is not an endorsement or a certification of every linked application.

Capture SHA-256: `43eb2ba85d1c5494cff2f65fef56cff176e59a2d2f68e11a34deb2f7cea0d74f`; captured 2026-11-25T06:26:53.073024+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-cannas-symplectic — Lectures on Symplectic Geometry

Ana Cannas da Silva; 2006; Revised January2006 author-hosted SpringerLNM1764 notes

https://people.math.ethz.ch/~acannas/Papers/lsg.pdf

**Source class**: textbook

**Status / reading depth**: selected-text; Selected exact statements and surrounding argument, not complete book: Lecture18.1,pp105–106: definition18.1 and flow preservation argument

**Sections inspected**: Lecture18.1,pp105–106: definition18.1 and flow preservation argument

**Supported claim**: A smooth Hamiltonian and nondegenerate symplectic form define i_Xω=dH; completeness/compactness supplies global flow.

**Limitations**: Not an exact source audit of generalized Stokes or deRham/singular-cohomology comparison; they are used/assumed elsewhere in the book.

**research-note**: Selected primary mathematical text was compared with the atlas statement; independent reconstruction remains separately qualified.

Capture SHA-256: `0b1c3a1f303b2fac4388d3b66019b42fc34196570225776c2448f797439e458b`; captured 2026-11-25T06:45:00.821557+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-mit-surfaces — 18.950 Differential Geometry: Chapter4

Paul Seidel / MIT OpenCourseWare; 2008; Fall2008 course notes,Chapter4

https://ocw.mit.edu/courses/18-950-differential-geometry-fall-2008/624f231226f7c15ddce6ba6dfad2db64_ch4_revised.pdf

**Source class**: textbook

**Status / reading depth**: selected-text; Selected exact statements and surrounding argument, not complete book: Lecture38 theorem38.1/corollary38.2; Lecture41 theorem41.3 and general-domain Gauss–Bonnet formula

**Sections inspected**: Lecture38 theorem38.1/corollary38.2
Lecture41 theorem41.3 and general-domain Gauss–Bonnet formula

**Supported claim**: Energy stationarity characterizes geodesics without implying global minimality; the boundary Gauss–Bonnet formula includes the induced area and boundary curvature.

**Limitations**: Source statement is for surfaces in Euclidean space with induced metric; the atlas pairs its closed embedded-surface corollary, not an independently checked abstract-manifold proof.

**research-note**: Selected primary mathematical text was compared with the atlas statement; independent reconstruction remains separately qualified.

Capture SHA-256: `f7af9abd1fcacf69972c21dfedd6201b63696929da64f9c17f4579c061c2b8a9`; captured 2026-11-25T06:47:26.497477+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### math-tong-gr — General Relativity lecture notes

David Tong; None; Author-hosted PDF captured25November2026

https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf

**Source class**: textbook

**Status / reading depth**: selected-text; Selected exact statements and surrounding argument, not complete book: section3 geodesics,Eq3.29; section1 relativistic particle/proper-time discussion

**Sections inspected**: section3 geodesics,Eq3.29
section1 relativistic particle/proper-time discussion

**Supported claim**: The connection equation is coordinate covariant; Lorentzian proper-time stationarity is different from a Riemannian distance minimum.

**Limitations**: Selected statements only; not a review of global causal geometry or a proof that every geodesic globally optimizes a physical quantity.

**research-note**: Selected primary mathematical text was compared with the atlas statement; independent reconstruction remains separately qualified.

Capture SHA-256: `3ba65dc61f22a69c7d5fdf3e8e1f641efbfa6cf49a44b3dcb0fd5367ba9fcf1c`; captured 2026-11-25T06:45:00.695755+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.


# AI-assisted mathematics: what was solved, by whom, and how do we know?

**Selected evidence through 25 November 2026.** This chapter audits mathematical claims rather than declaring a winner between companies. It distinguishes a documented claim from an accepted theorem, a checked answer from a proof, and a proof artifact from a successful trusted-kernel execution. The accompanying dataset contains twenty case records, forty-five topic nodes, four explicit mathematical/scoring entries, twenty-five sources and five selected paper reviews. The raw source captures are private; public citations, reading records and SHA-256 byte identities make the evidence trail inspectable.

The most useful finding is that “AI solved a mathematics problem” describes several different events. A model can solve a competition exercise whose answer is known, reproduce an unpublished human proof in a controlled benchmark, suggest the decisive idea to a researcher, generate a new argument subsequently checked by its authors, or release a manuscript whose correctness remains disputed. Those events can all matter. They should not share one unqualified status. A benchmark percentage is also not the fraction of mathematics that a model understands.

This is a substantial selected corpus, not a census of every mathematical result between 2024 and the cutoff. In particular, it does not independently certify the many major results asserted in OpenAI’s August and October 2026 releases. The available originals and verification instructions support a detailed claim audit, but a complete proof review would require far more work, and in several places the scholarly community itself records unfinished review. Very recent November 24 claims are included as pending announcements, with that limitation visible in each record.

## 1. A practical ladder of evidence

Begin by freezing the exact statement. “A convergence problem” could ask whether objective values approach the optimum, whether iterates approach the set of minimizers, whether the iterates approach one particular minimizer, or whether numerical computations are stable under perturbation. Those are different propositions. Likewise, “monotone learning” depends on a particular estimator, probability distribution, loss direction and expectation. A positive result for a correctly specified Gaussian family is not a guarantee that all training benefits from more data.

Next establish the earlier status. Was the problem open to the mathematical community, solved but unpublished by its benchmark contributor, an exercise in a book, or a rediscovery of prior literature? A company’s announcement is useful evidence of what the company claims, but it does not settle that historical question. A new proof of an old theorem and a new theorem are different contributions. First Proof’s third batch is unusually explicit: its ten research-origin questions already had human solutions, no longer than twelve pages, which were withheld during evaluation. Solving them tests research reasoning without automatically adding ten new theorems to the world. [ai-src-first-third; ai-src-third-pdf]

Then separate contribution from validation. Did humans formulate the target, provide the key lemma, select the best of many attempts, repair an incorrect step, ask the model to expand a proof, or only check and transcribe an otherwise model-origin argument? Those roles need not diminish a result. They determine what the result says about autonomous capability and what credit is due. The original papers often provide a more precise account than a headline. The Nesterov paper describes heavy assistance and a researcher-led discovery process; the learning-curve paper explicitly claims the models supplied proof strategies without human scaffolding. Both statements belong in the ledger, with their source and evidential limits.

Verification is another axis. Here the useful categories are: an unreviewed output; a provider’s confidence assessment; an author-checked manuscript; an expert-reviewed submission; a published formalization source; and an independently executed proof certificate under a stated kernel and assumptions. These are not automatically a strict ranking of usefulness. A human referee may identify that a machine-checked statement is not the intended theorem; a kernel may detect a subtle logical error missed by a referee. Strong acceptance uses complementary checks.

Finally record revisions. A withdrawn attempt must not keep circulating as a solved problem just because its original announcement remains discoverable. Conversely, one error in a large release does not invalidate every other paper in it. The appropriate unit is the claim and its dependency graph, with an exact version. A successful trusted-kernel run would establish a proposition relative to its assumptions; merely publishing a Lean source file does not establish that such a run occurred or that its proposition matches a historical problem. This chapter records OpenAI’s explicit correction to First Proof Problem 2 and its October 7 withdrawal notice for three related manuscripts. It does not generalize those notices into an unsupported judgment about all model-generated mathematics. [ai-src-oa-firstproof; ai-src-math-history]

## 2. How the corpus was discovered and read

The review used actual HTTP retrieval of official OpenAI, Anthropic and DeepMind sitemaps; original linked PDFs; the First Proof project and report; arXiv records; public GitHub source files; Epoch AI’s benchmark descriptions; and an independent scholarly guest essay hosted on Terence Tao’s blog. Each successful included source has the exact captured-byte hash and retrieval time. PDFs were converted to text for selected-section inspection. Downloading a long paper is not represented as reading its entire proof.

The main original mathematical readings were Jang and Ryu’s Nesterov manuscript, version 2 dated 19 January 2026; Sellke and Yin’s learning-curve manuscript; the first-batch First Proof statements and commentary; selected sections of OpenAI’s submissions; selected abstract/statement portions of the ten-advances manuscript, updated 6 August 2026; and the 46-page independent First Proof third-batch report, version 1 dated 14 October 2026. Reading depths are narrower than those paper titles suggest. They are listed in the data rather than hidden behind a generic “reviewed” label.

Two limitations matter immediately. The direct Erdős problem 183 database page returned HTTP 403. Its current independent status therefore remains an inaccessible lead, even though OpenAI’s manuscript and an actual Lean file explicitly identify the problem. Second, a moving repository is not an immutable publication. The captured README and history give a reproducible snapshot, but their counters need not be synchronized: a README can report 375 families while the next day’s history describes newly added families numbered 379 and 380. That is a reason to retain both versions and dates, not to manufacture a single consistent count.

The chapter uses paraphrases, not invented quotations. Independent evidence is described precisely: a company-linked manuscript is a primary mathematical source, but not an independent replication of the same collaboration; an organizer’s statement validates what its benchmark asks, but does not necessarily validate a later submission by a different internal model; and a scholarly committee’s general concerns are not a verdict on an individual proof.

## 3. Competition performance and answer benchmarks

The 2024 AlphaProof/AlphaGeometry2 announcement is a useful baseline. DeepMind reported four of the six IMO problems solved, corresponding to 28 of 42 points and a silver-medal-level result. It used formal-search and a dedicated geometry system. Humans translated statements into formal language, and some searches took substantially longer than the time allotted to contestants. The comparison is technologically important, but it is not a claim that the system participated under identical contest conditions or proved a new theorem. This atlas inspected the announcement’s methods and result description, not every certificate. [ai-src-alpha-proof]

OpenAI’s February 2026 article retrospectively reports its 2025 gold-medal-level IMO result as 35/42. That statement is retained as contextual company reporting, not promoted into an independently checked case. The original marking packet was not obtained in this bounded review. This demonstrates a general rule: where a source only mentions an earlier result, the record should not pretend that the earlier experiment’s full protocol has been inspected.

FrontierMath has a different design. The original abstract describes expert-written unpublished questions, with automatically checkable answers, intended to make contamination harder. The current Epoch overview distinguishes tiered tasks, an Open Problems track with computationally verifiable answers, and a formal Erdős track. These distinctions matter because a score on Tiers 1–3 does not establish performance on Tier 4 or on a complete-proof task. An original abstract’s old state-of-the-art percentage also cannot be imported as the current November 2026 result. [ai-src-arxiv-frontier; ai-src-epoch-frontier]

The GPT-5.2 article reports 40.3% on FrontierMath Tiers 1–3 with a Python tool and maximum reasoning effort. That is a provider-reported evaluation under a named setup. It is not a count of new theorems. Python may legitimately help with symbolic, numerical or combinatorial work, but the tool budget must accompany the score. Without the exact question set, checking protocol, sampling policy and independent rerun, the number should remain an attributed result, not a universal measure of mathematical ability. [ai-src-oa-52]

AIME, although not assigned a score in this selected ledger, illustrates the same distinction. The American Invitational Mathematics Examination supplies short-answer competition questions. Reusing it to evaluate a model is a benchmark exercise. Even a perfect score does not show that the system has resolved an open conjecture or written a referee-ready research paper. No AIME score was added here simply to increase the number of successes.

## 4. A human–AI research collaboration with an exact target

The Nesterov case is stronger evidence of research contribution than a short-answer score, but it is not accurately described as a model independently producing a finished proof. The original question concerns a convex, differentiable, L-smooth function on a finite-dimensional real space, with a minimizer that exists, and the particular accelerated-gradient schedules in the paper. The familiar accelerated objective-value estimate does not by itself establish that the iterates settle at one minimizer. [ai-src-ryu-paper]

The paper studies both critical-damping continuous dynamics and discrete Nesterov acceleration. Its continuous equation is a second-order differential equation with a damping coefficient proportional to 1/t. The selected proof begins with a nonnegative energy combining objective error and a squared position/velocity term. Convexity makes its derivative nonpositive. That is an important ingredient, but bounded energy alone is not a complete point-convergence argument; the later cluster-point reasoning and discrete transfer must also be checked. This review inspected the initial energy lemma and theorem statement, not every subsequent line.

The provider interview contains a particularly useful attribution detail. GPT-5 supplied creative attempts, many flawed. A turning-point suggestion was incorrect as written. Ryu recognized its structural promise, developed it rigorously, and used further targeted prompting. The final manuscript is by Uijeong Jang and Ernest Ryu. That sequence supports “AI-assisted proof discovery with substantial human mathematical judgment.” It does not support deleting the human work from the account. [ai-src-oa-discovery]

Priority is also not a one-date story. Version 2 explicitly discusses another group’s concurrent discrete-time proof: the later group saw an October 21 post about continuous-time progress, then contacted the authors on October 24 with a manuscript, independently of the October 24 discrete-time post. That work reportedly also treats a Hilbert-space setting and FISTA. The concurrent manuscript itself remains unread here. The correct record preserves this qualification rather than announcing a unique first discovery based solely on a company case study.

This case also warns against loose physical analogies. A mathematical “momentum” term in optimization is not a new force; point convergence is not the same as numerical stability of a practical implementation; and a finite-dimensional convex theorem does not prove that arbitrary deep-network training converges. The connection to the atlas’s other domains is methodological: precise hypotheses determine what the conclusion can mean.

## 5. A model-origin proof with human checking: Gaussian learning curves

Sellke and Yin provide an unusually explicit assistance statement. They say variants of GPT-5.2 Pro derived the results without human proof strategies or intermediate arguments, while humans prompted extensions, verified and transcribed. The provider separately reports external subject-expert checking. Those are stronger contribution claims than generic “used ChatGPT” acknowledgments, but they are still author/provider testimony unless accompanied by an independent reproducible review. [ai-src-mle-paper; ai-src-oa-52]

The exact first theorem concerns IID centered Gaussian observations with a positive-definite covariance matrix in dimension d. The maximum-likelihood covariance uses divisor n. Expected **forward** Kullback–Leibler divergence is independent of the true covariance and strictly decreases once n>d+1. At or below that threshold, the expectation is infinite. With unknown mean as well, the finiteness threshold shifts. These caveats prevent the slogan “more data always improves a model” from swallowing the actual theorem.

The one-dimensional case supplies a transparent calculation. If the true variance is v*, then n times the fitted variance divided by v* has a chi-square distribution with n degrees of freedom. The forward divergence between true and fitted centered Gaussians is one half of a logarithmic variance ratio plus its reciprocal ratio minus one. Taking expectations uses the digamma function and an inverse chi-square moment. The result is finite only for n>2. The accompanying formula record derives the expression and independently recomputes E4≈0.3648185773 and E6≈0.1620860232, in dimensionless nats.

That two-point check is a null/example test, not a substitute for the all-n monotonicity proof. It is still useful: reversing the KL direction or overlooking the inverse-moment threshold would change the answer. Numerical simulation at n=2 could look finite in a particular run even though the expectation is infinite. A finite set of ordinary observations cannot certify the tail behavior of the expectation.

The contribution statement also records an illuminating rediscovery boundary. The model’s reverse-KL/general-exponential-family extension was later connected to a closely related textbook exercise. The paper does not conceal that connection. A useful research assistant can rediscover a result and help organize it, but novelty should be adjusted once prior art is located. That is a success of citation repair, not a reason to preserve an inflated new-theorem claim.

## 6. First Proof: corrections and controlled comparison

The first-batch OpenAI submission is expressly titled “First Proof?” and contains ten attempts. The company says humans sometimes suggested retrying strategies, requested clarification after expert feedback, facilitated model-to-model checking, and selected the best of several attempts. These interventions are part of the experimental treatment. They make the sprint different from a single clean unattended model call. [ai-src-first-submissions; ai-src-oa-firstproof]

The February 20 announcement says attempts 4, 5, 6, 9 and 10 have a high chance of being correct. It also explicitly changes the assessment of Problem 2 from likely correct to incorrect after organizer commentary and community analysis. The atlas records both the promising attempts and the correction. It does not claim that a positive baseline comment about GPT-5.2 automatically validates a later internal-model attempt, or vice versa. The model identity, submission version and review target must match.

Third-batch First Proof offers a stronger comparative protocol. Five systems were evaluated in early October, with no human intervention during their runs, on ten researcher-origin questions with hidden human solutions. Thirty expert referees considered correctness, exposition and attribution separately. A system can obtain a mathematically correct result while giving a poor explanation or inadequate credit. This is why a single “solved” label loses essential information. [ai-src-first-third; ai-src-third-pdf]

Under the report’s threshold of mean correctness at least 0.5, GPT-6 Astra counts seven of ten, Anthropic’s Siege workflow on Claude Opus 5.5 counts three, ProofCouncil counts nine, MerLean four and Humanize zero. The count does not mean every counted solution received unanimous complete approval. In particular, Siege’s three consist of two mean-1 correctness results and one mean-0.5 result with minor gaps. Under the stricter alternative of requiring a mean correctness grade of exactly 1, Siege has two of ten; that is an additional transparent comparison, not the organizer’s published count. The same Table2 gives Astra five of ten at mean grade exactly1, versus its published seven of ten at the0.5 threshold. These are different scoring conventions, neither an executed formal proof check. [ai-src-third-pdf] Five other Siege questions had no submission. Abstention is scored as zero, which is deliberately different from an assertive wrong proof.

The hyperfield example is an especially informative Claude case. The benchmark asks whether an ordinary-looking cubic identity implication survives multivalued addition. The system produces a counterexample using an infinite cyclic projective plane. All three referees find the mathematics correct, but they criticize attribution to prior constructions by Connes–Consani and Hall. This supports a concrete problem-solving result while limiting any claim of first invention. A correct derivation and a properly credited paper are not identical deliverables.

The conductivity-estimation example is more qualified. The formal statement asks a Darcy inverse-problem minimax rate for a conductivity in a small smooth neighborhood of a constant, from Gaussian-white-noise observations of a PDE solution. The selected report describes a sound estimator/lower-bound strategy with minor gaps, dense notation and missing attributions, producing the mean correctness score 0.5. The printed contextual discussion also refers to a one-dimensional motivation even though the formal question specifies d≥2. This atlas preserves that mismatch as a clarification need and does not silently merge the two problems or invent an exponent absent from the inspected review passage.

Costs and harnesses also differ. The report lists provider bills, token usage and orchestration differences. A multi-agent system spending much more compute is not directly comparable to a cheap single prompt as a pure statement about one underlying network. The correct inference is conditional performance under the recorded system and budget, not a timeless ordering of providers.

## 7. The large 2026 releases: artifacts, hypotheses and withdrawal history

OpenAI’s August announcement asserts ten major advances, and its linked manuscript gives more precise statements. The selected ledger includes multicolor triangle Ramsey growth, a convex lattice-volume bound, arithmetic permanent lower bounds and a non-sofic group construction. The mathematical significance of these targets is a reason to scrutinize them, not a reason to treat a company release as confirmation. Most of their long proofs were not read here. [ai-src-oa-ten; ai-src-ten-paper]

The Ramsey example has unusually concrete artifact evidence. The retrieved Lean source contains declarations for logarithmic asymptotics, divergence of the kth root and an Erdős183 label. The README maps result families to modules and specifies Lean 4.32, mathlib and Lake commands. Additional instructions describe Comparator checks using other tools. These are real inspectable artifacts, not merely a claim that “a proof exists somewhere.” They are also not an execution receipt from this atlas. [ai-src-ten-certificate; ai-src-ten-readme; ai-src-ten-comparator]

A convincing formal audit needs more than a source file ending in a theorem declaration. It needs a pinned toolchain and dependencies, a clean build, an account of allowed axioms and placeholders, and a check that the formal statement expresses the intended mathematical question. A theorem can be formally correct but irrelevant because an assumption was strengthened, a definition changed, or an exceptional case removed. Imported axioms and theorem dependencies belong in the trust boundary. The reader should not confuse the small trusted kernel with the much larger environment that selects and translates a problem.

The October collection is even more difficult to summarize honestly. The captured README reports 730 manuscripts in 375 families, about 42% top-line formalizations, and explicitly says that some unformalized results could have issues. It describes the manuscripts as raw research data rather than polished academic papers. Those counts are attributed snapshots. They are not 730 independently verified discoveries, and a family can contain companion arguments or alternative proofs. [ai-src-openai-math]

The history records three withdrawals on October 7 after a sign error invalidated a construction and dependent manuscripts. It separately records revisions, later formalization changes and new results. This is precisely why the graph distinguishes “disputes,” “supported by,” and “unresolved.” A proof-support edge should mean that a source documents a claim or status; it must not visually turn every connected assertion into an established theorem. [ai-src-math-history]

The separate ai-corpus-index.json preserves all 730 manuscript PDF links from the captured official catalogue, pinned to repository commit 3344da59991ed94f9ba711217b29c1d760badfa6. Every row is unread-indexed, including any paper whose title resembles one of the selected cases: matching a title does not demonstrate identical proof content. All 730 paths were found in a non-truncated preprints subtree. The parser recognized 373 family headings while the catalogue header declares 375. This is a parsing observation, not proof that the header is erroneous; two families may be unparsed, differently formatted or outside the selected view. Metadata breadth must not be confused with proof-review depth.

Independent scholarly response is also bounded. The MathHelm committee’s November guest post, hosted by Terence Tao, says most of the released papers had not been human-verified and invites specific comments on correctness, readability, originality and connections. It does not declare them all wrong, and it does not certify them all right. The guest authorship is recorded explicitly rather than attributing every sentence to the host. Human understanding and literature placement remain separate scholarly work. [ai-src-tao-review]

## 8. The cutoff boundary and a reproducible next step

The November 24 history introduces strongly polynomial linear programming and an exact matrix-multiplication exponent of nine fourths, among other results. These are extraordinarily strong claims. At a November 25 cutoff they are also extraordinarily fresh. A strongly polynomial linear-programming algorithm would require a polynomial bound on arithmetic operations in the problem dimensions independent of coefficient bit magnitudes, with controlled representation requirements; an ordinary polynomial bit-complexity algorithm is a different claim. An exact matrix-multiplication exponent of nine fourths requires both sides of an asymptotic equality, not merely one multiplication algorithm. Only the history announcements were inspected for those entries, not the original papers. They therefore remain pending leads in the claim ledger, not additions to an established-theorem list.

A disciplined continuation would pin each manuscript revision, read its complete statement and proof, locate original prior-art problem statements, and obtain claim-specific independent review. For formal artifacts, it would run the documented checks in a clean environment and preserve command output, theorem fingerprints and axiom dependencies. This chapter intentionally does not execute downloaded proof code merely to turn an available repository into a reassuring badge.

The representative calculations here are smaller and fully bounded: a scalar Gaussian-risk evaluation, exact threshold counting for Siege’s reported grades, the two-by-two permanent, and a two-vertex Laplacian example. Each can expose a category error without pretending to validate the surrounding frontier result. The Laplacian example shows why positive-semidefinite order is a universal quadratic-form condition, not entrywise comparison. The permanent example separates an elementary definition from a deep complexity lower bound.

The practical conclusion is a workflow rather than a league table. Record the question; freeze its version; separate the earlier status, human contribution and AI contribution; classify the checking method; preserve corrections; and state what remains unread. The result is a project tracker in which the tracked object is evidence about a mathematical claim. It can grow without silently promoting fresh announcements, benchmark scores or machine-source files into accepted mathematical knowledge.

## 9. Twenty-case audit ledger

These rows preserve provider attribution, prior status and the checking method. The existence of a primary source is not an independent endorsement of its result.

### 1. Nag

**Provider/model:** OpenAI-assisted academic research / GPT-5/ChatGPT

**Exact target or evaluation protocol:** For convex L-smooth f:R^n→R with an attained minimum, establish point convergence x_k,y_k→x∞∈argmin f for the paper’s classical NAG parameter schedules; also critical-damping continuous-time convergence.

**Claimed date:** 2025-10-24

**Earlier status:** Authors describe a longstanding point-convergence question, distinct from already-known objective-value O(k^-2) convergence.

**AI and human contribution:** Ryu reports repeated prompting, rejection of faulty suggestions and a structurally useful but incorrect-as-written proposal; Jang/Ryu developed and wrote the proof.

**Verification status:** Author-checked preprint, arXivv2 January19 2026; full proof not independently verified here.

**Independent evidence actually obtained:** Paper Section1.3 reports a concurrent discrete-time proof prompted by the October21 public post, with additional Hilbert/FISTA results. No separate concurrent paper was read.

**Limits:** Do not turn human-directed collaboration into autonomous solving, or mathematical point convergence into universal algorithm stability.

Sources: ai-src-oa-discovery, ai-src-ryu-paper.

### 2. Mle

**Provider/model:** OpenAI-assisted academic research / GPT-5.2 Pro variants

**Exact target or evaluation protocol:** For IID N(0,Σ*) samples in dimensiond, Σ*>0, prove expected forward KL risk of covariance MLE strictly decreases for n>d+1, and is infinite for n≤d+1; paper extends to unknown mean and other families.

**Claimed date:** 2025-12-11

**Earlier status:** Paper traces the correctly specified Gaussian question to2019/2022 learning-curve work; reverse-KL extension partly reconnects to a known textbook exercise.

**AI and human contribution:** Authors say model supplied proof strategies without human intermediate scaffolding; humans prompted extensions, checked and transcribed; model later located relevant prior art.

**Verification status:** Human-author verification and provider-reported external review; no journal verdict or machine proof run established.

**Independent evidence actually obtained:** Original Sellke/Yin manuscript inspected for exact theorem and assistance statement, but it is the same collaboration rather than an independent replication.

**Limits:** More data is not universally beneficial under misspecification; forward/reverse KL and finite-risk thresholds differ.

Sources: ai-src-oa-52, ai-src-mle-paper.

### 3. Fp2

**Provider/model:** OpenAI / Unreleased internal reasoning model

**Exact target or evaluation protocol:** Let F be a non-archimedean local field with ring of integers o; let N_r be the upper-triangular unipotent subgroup of GL_r(F). Fix a nontrivial additive character ψ of conductor o and a generic irreducible admissible representation Π of GL_(n+1)(F) in W(Π,ψ^(-1)). Must there exist one W in that Whittaker model such that, for every generic irreducible admissible π of GL_n(F) in W(π,ψ), with conductor idealq, generatorQ of q^(-1), and u_Q=I_(n+1)+Q E_(n,n+1), some V∈W(π,ψ) makes ∫_(N_n\GL_n(F)) W(diag(g,1)u_Q)V(g)|det g|^(s−1/2)dg finite and nonzero for every s∈C?

**Claimed date:** 2026-02-20

**Earlier status:** A hidden-solution research benchmark question, not evidence that all relevant theory was globally unsolved.

**AI and human contribution:** Internal model generated/typeset attempt; humans selected attempts and requested clarification based on feedback.

**Verification status:** Provider explicitly corrected its initial likely-correct assessment to incorrect.

**Independent evidence actually obtained:** OpenAI cites organizer commentary and community analysis; selected organizer text inspected, not an independent re-derivation of this attempt.

**Limits:** The order of quantifiers matters: one W is selected before varying π; V may depend on π. The representation-theoretic setup is reproduced from organizer Problem2. This record audits an explicitly corrected attempt, not a solved theorem.

Sources: ai-src-oa-firstproof, ai-src-first-submissions, ai-src-first-comments.

### 4. Fp4

**Provider/model:** OpenAI / Unreleased internal model

**Exact target or evaluation protocol:** For monic real-rooted degree-n polynomials p,q with the organizer’s finite free additive convolution, is 1/Φ_n(p⊞_n q)≥1/Φ_n(p)+1/Φ_n(q), with Φ_n(p)=Σ_{i≤n}Σ_{j≠i}(1/(λ_i−λ_j))² and Φ=∞ at repeated roots?

**Claimed date:** 2026-02-20

**Earlier status:** Research-level hidden-solution challenge; prior human solutions existed.

**AI and human contribution:** Model-generated proof attempt, human best-of selection and clarification.

**Verification status:** Company reports high chance of correctness, not a machine-checked theorem verdict.

**Independent evidence actually obtained:** Organizer provides exact statement; its early GPT-5.2 baseline comments do not grade this later internal-model attempt.

**Limits:** Polynomial normalization and repeated-root conventions matter; complete proof not independently audited. The Φ definition is transcribed as the source’s double sum of squared reciprocals.

Sources: ai-src-oa-firstproof, ai-src-first-submissions, ai-src-first-comments.

### 5. Fp6

**Provider/model:** OpenAI / Unreleased internal model

**Exact target or evaluation protocol:** Does a universal c>0 exist such that every finite graph and 0<ε<1 admit S⊂V with |S|≥cε|V| and L_S≼εL, where L_S retains only edges insideS?

**Claimed date:** 2026-02-20

**Earlier status:** Hidden human-solved spectral graph question in First Proof.

**AI and human contribution:** Generated proof with limited human supervision and expert-feedback clarification.

**Verification status:** Provider provisional high-confidence result.

**Independent evidence actually obtained:** Organizer statement inspected; no independent verification of this exact internal attempt obtained.

**Limits:** A sampled graph experiment cannot prove the universal existence claim; PSD means positive-semidefinite order.

Sources: ai-src-oa-firstproof, ai-src-first-submissions, ai-src-first-comments.

### 6. Fp9

**Provider/model:** OpenAI / Unreleased internal model

**Exact target or evaluation protocol:** For n≥5 and Zariski-generic A^(α)∈R^(3×4), find n-independent-degree polynomial relations recognizing exactly the coordinatewise tensor scalings λ_αβγδ=u_αv_βw_γx_δ of determinant tensors, with the organizer’s nonzero-pattern restriction.

**Claimed date:** 2026-02-20

**Earlier status:** Hidden-solution algebraic research challenge.

**AI and human contribution:** Generated candidate argument; humans selected and formatted outputs.

**Verification status:** Provider high-chance assessment; proof not independently checked here.

**Independent evidence actually obtained:** Exact organizer problem and internal submitted section9 retrieved.

**Limits:** Genericity, exceptional index pattern and if-and-only-if direction must survive formalization; omitted zero cases can change the question.

Sources: ai-src-oa-firstproof, ai-src-first-submissions, ai-src-first-comments.

### 7. Fp10

**Provider/model:** OpenAI / Unreleased internal model

**Exact target or evaluation protocol:** Explain a matrix-free preconditioned conjugate-gradient method for the stated nr×nr kernelized CP-ALS normal system with missing tensor entries, selection matrixS, Kronecker products and RKHS kernelK.

**Claimed date:** 2026-02-20

**Earlier status:** Research-method benchmark with existing human solution.

**AI and human contribution:** Model-generated linear-algebra derivation and proof attempt, selected under human supervision.

**Verification status:** Provider high chance of correctness; implementation/runtime advantage not independently reproduced.

**Independent evidence actually obtained:** Organizer system equation and requested preconditioner/matvec explanation inspected.

**Limits:** Positive-semidefinite versus definite operators, regularization and solver convergence hypotheses cannot be inferred from an equation label.

Sources: ai-src-oa-firstproof, ai-src-first-submissions, ai-src-first-comments.

### 8. Ramsey

**Provider/model:** OpenAI / Internal Astra

**Exact target or evaluation protocol:** For k-colour triangle Ramsey numberR_k(3), claim logR_k(3)=Θ(k logk), hence R_k(3)^(1/k)→∞; reported as resolving Erdős183.

**Claimed date:** 2026-08-01

**Earlier status:** Longstanding superexponential-growth question according to announcement/manuscript; direct current database access blocked.

**AI and human contribution:** Provider says model generated argument; humans/model prepared manuscript and Lean certificate.

**Verification status:** Provider-reported formalization; manuscript and selected actual Lean declarations inspected. No Lean kernel, dependency-axiom audit or Comparator execution was performed; proof correctness is not independently certified.

**Independent evidence actually obtained:** No claim-specific independent correctness verdict located; code existence and MathHelm’s broad response are different evidence types.

**Limits:** Do not label accepted solely from provider formalization claim; exact theorem/imports/axioms need pinned build and comparison.

Sources: ai-src-oa-ten, ai-src-ten-paper, ai-src-ten-readme, ai-src-ten-certificate, ai-src-erdos183.

### 9. Ehrhart

**Provider/model:** OpenAI / Internal Astra

**Exact target or evaluation protocol:** Claim vol(K)≤(n+1)^n/n! for convex bodies K⊂R^n whose centroid is the unique interior lattice point, in the stated lattice-volume convention.

**Claimed date:** 2026-08-01

**Earlier status:** Ehrhart volume conjecture according to authors.

**AI and human contribution:** Generated proof, human-assisted manuscript preparation, claimed Lean formalization.

**Verification status:** Announcement and manuscript abstract read; proof module/build not audited.

**Independent evidence actually obtained:** No independent claim-specific proof review captured.

**Limits:** Convex-body hypotheses and lattice normalization are essential; graph node is a documented claim, not certified resolution.

Sources: ai-src-oa-ten, ai-src-ten-paper, ai-src-ten-readme.

### 10. Permanent

**Provider/model:** OpenAI / Internal Astra

**Exact target or evaluation protocol:** Claim division-free arithmetic circuit lower boundΩ(n²loglogn) and arithmetic-formula leaf lower boundΩ(n⁴/logn) for the n×n permanent under the manuscript’s algebraic model.

**Claimed date:** 2026-08-01

**Earlier status:** Claims improvement of arithmetic lower bounds; not itself a P≠NP theorem.

**AI and human contribution:** Provider attributes argument to model and preparation/formalization to model plus humans.

**Verification status:** Selected abstract/overview only; no proof or certificate execution.

**Independent evidence actually obtained:** No independent verdict located for this exact lower bound.

**Limits:** Arithmetic circuits, formulas, field and allowed operations differ from Boolean computational complexity.

Sources: ai-src-oa-ten, ai-src-ten-paper, ai-src-ten-readme.

### 11. Nonsofic

**Provider/model:** OpenAI / Internal Astra

**Exact target or evaluation protocol:** Claim an explicit countable group which is not sofic, disproving that every countable group admits the required finite permutation approximations.

**Claimed date:** 2026-08-01

**Earlier status:** Major group-theoretic question as identified by authors.

**AI and human contribution:** Model-generated construction; manuscript/certificate prepared with human involvement.

**Verification status:** Selected primary claim inspected; no complete construction or proof audit.

**Independent evidence actually obtained:** Independent correctness remains unresolved in this selected corpus.

**Limits:** Existence of a Lean filename is not evidence the mathematical statement matches the historical question.

Sources: ai-src-oa-ten, ai-src-ten-paper, ai-src-ten-readme.

### 12. Withdrawal

**Provider/model:** OpenAI / Unnamed internal model

**Exact target or evaluation protocol:** Three manuscripts on split abelian eightfold Weil classes, Kuga–Satake correspondences for K3 surfaces, and rational Hodge for products of K3 surfaces were withdrawn after a sign-error-dependent construction failed.

**Claimed date:** 2026-10-07

**Earlier status:** October6 release had presented results; history now withdraws these specific manuscripts.

**AI and human contribution:** Model-origin outputs entered a large collection; authors maintain corrections/dependency notices.

**Verification status:** Withdrawn by issuer on October7: these three specific manuscripts are not accepted proofs; withdrawal does not apply automatically to other Hodge-related claims.

**Independent evidence actually obtained:** Direct revision-history notice captured; root mathematical error not independently reconstructed.

**Limits:** Do not extend these withdrawals to all Hodge-related papers; later CM-abelian-variety formalization is a different claim.

Sources: ai-src-math-history, ai-src-openai-math.

### 13. Recent Lp

**Provider/model:** OpenAI / Unnamed internal model

**Exact target or evaluation protocol:** November24 history claims a deterministic strongly polynomial algorithm for general linear programming, answering Smale’s ninth problem.

**Claimed date:** 2026-11-24

**Earlier status:** Major open complexity question according to issuer.

**AI and human contribution:** A newly released model-generated manuscript family; no detailed contribution audit yet.

**Verification status:** Unverified source claim: newly announced; original manuscript unread, independent correctness/novelty checks pending.

**Independent evidence actually obtained:** Only history announcement retrieved, not original proof or independent review.

**Limits:** Lead-level claim deliberately excluded from verified-theorem count; one-day freshness increases review uncertainty.

Sources: ai-src-math-history.

### 14. Recent Mm

**Provider/model:** OpenAI / Unnamed internal model

**Exact target or evaluation protocol:** November24 history lists “The matrix multiplication exponent is nine fourths,” i.e. claims ω=9/4 in the intended arithmetic asymptotic convention.

**Claimed date:** 2026-11-24

**Earlier status:** Claims an exact exponent, a stronger statement than an upper bound; original theorem hypotheses not read.

**AI and human contribution:** Issuer lists new model-origin tensor-geometry manuscripts.

**Verification status:** Unverified source claim: newly announced; original manuscript unread, independent correctness/novelty checks pending.

**Independent evidence actually obtained:** No original manuscript or independent result captured.

**Limits:** Exact equality in a history title must not be silently weakened to a proven algorithmic bound or promoted to established fact.

Sources: ai-src-math-history.

### 15. Claude Batch

**Provider/model:** Anthropic / Siege harness on Claude Opus5.5

**Exact target or evaluation protocol:** First Proof Batch3: solve ten researcher-origin questions with hidden pre-existing human solutions under the specified one-shot/no-human-input evaluation.

**Claimed date:** 2026-10-14

**Earlier status:** Unpublished human solutions existed; this is research-proof evaluation, not ten newly open theorem resolutions.

**AI and human contribution:** Anthropic provided a workflow; its performance reflects harness, model, budget and abstention policy.

**Verification status:** Independent expert grading: published threshold count3/10 at mean correctness≥0.5; two submissions have mean1 and one has mean0.5 with minor gaps. No submissions for3,4,8,9,10. This is not three strict/unanimous proof acceptances.

**Independent evidence actually obtained:** First Proof46-page report, Tables2–5 and detailed reviews inspected.

**Limits:** Some accepted-threshold submissions have gaps; exposition/attribution separate; no kernel proofs or representative distribution guarantee.

Sources: ai-src-first-third, ai-src-third-pdf, ai-src-third-press.

### 16. Claude Hyperfield

**Provider/model:** Anthropic / Siege/Claude Opus5.5

**Exact target or evaluation protocol:** For a hyperfieldH and 0∈x⊞y⊞z, must 0 belong to x³⊞y³⊞z³⊞(−xyz)⊞(−xyz)⊞(−xyz)? Batch3P5 asks this universal implication; submitted answer provides a counterexample.

**Claimed date:** 2026-10-14

**Earlier status:** Human had already solved benchmark problem; reviewers note alternative construction combines prior Connes–Consani and Hall work.

**AI and human contribution:** System reconstructed a counterexample using an infinite cyclic projective-plane hyperfield.

**Verification status:** All three referees find mathematics correct; attribution judged deficient, mean attribution0; exposition−.33.

**Independent evidence actually obtained:** ReportSections3.5/5.5 inspected, including criticism that reproduced prior constructions need explicit citations.

**Limits:** A correct counterexample can still be a rediscovery with weak attribution; this does not establish independent first discovery by Claude.

Sources: ai-src-third-pdf.

### 17. Claude Darcy

**Provider/model:** Anthropic / Siege/Claude Opus5.5

**Exact target or evaluation protocol:** Batch3P2: for div(f∇u)=1 on unit ballD⊂R^d,d≥2, zero boundary data, Yn=u_f+n^(-1/2)W and f in a small C^α-neighbourhood of1, determine minimax L² conductivity-estimation rate up to logarithms.

**Claimed date:** 2026-10-14

**Earlier status:** Hidden human-solved research question; printed context includes an inconsistent d=1 discussion, which must not overwrite the formal d≥2 statement.

**AI and human contribution:** Plug-in kernel estimation and Assouad-type lower bound, without human intervention in the recorded run.

**Verification status:** Referees grade correctness.50: sound strategy with minor proof gaps; not an unconditional fully audited theorem.

**Independent evidence actually obtained:** ReportSections3.2/5.2 andTable2 read; reviewers flag missing attribution and multivariate notation corrections.

**Limits:** Exact rate formula not transcribed here because the reviewed passage does not provide it; problem statement and qualified review are recorded, not a fabricated exponent.

Sources: ai-src-third-pdf.

### 18. Astra Batch

**Provider/model:** OpenAI / GPT-6 Astra

**Exact target or evaluation protocol:** First Proof Batch3 ten hidden-human-solution problems under a one-shot24-hour, no-human-input protocol.

**Claimed date:** 2026-10-14

**Earlier status:** Already human-solved unpublished benchmark problems.

**AI and human contribution:** Public base-model prompting rather than a separate human-provided proof outline; system and budget are documented.

**Verification status:** Independent First Proof Table2 reports7/10 at mean correctness≥0.5. The stricter alternative of requiring mean grade exactly1 counts5/10. The published7 therefore includes partial/qualified judgments; neither count certifies machine-verified new theorems.

**Independent evidence actually obtained:** ReportTable2 and detailed reviews include qualified computational checks; attribution adequate for only4/10.

**Limits:** Seven includes threshold/qualified judgments; do not compare directly to benchmark percentages with different scoring, sampling or compute.

Sources: ai-src-first-third, ai-src-third-pdf, ai-src-third-press.

### 19. Frontier52

**Provider/model:** OpenAI / GPT-5.2 Thinking

**Exact target or evaluation protocol:** Answer FrontierMath Tiers1–3 expert-designed problems under provider maximum-effort reasoning with a Python tool.

**Claimed date:** 2025-12-11

**Earlier status:** Benchmark authored with known checkable answers; new/unpublished questions do not necessarily ask globally open theorems.

**AI and human contribution:** Model plus tool computation under a declared evaluation setup.

**Verification status:** Provider reports40.3%; no independent rerun captured.

**Independent evidence actually obtained:** Original benchmark abstract/current Epoch track distinctions inspected, but they do not independently reproduce this model score.

**Limits:** A score is not a list of new theorems; track, tools, version and denominator must accompany it.

Sources: ai-src-oa-52, ai-src-arxiv-frontier, ai-src-epoch-frontier.

### 20. Imo24

**Provider/model:** Google DeepMind comparison / AlphaProof and AlphaGeometry2

**Exact target or evaluation protocol:** Solve the six IMO2024 competition problems, with Lean-based formal reasoning on translated statements and a dedicated geometry system.

**Claimed date:** 2024-07-25

**Earlier status:** Competition problems with official solutions/marking, not an open-problem research theorem collection.

**AI and human contribution:** Formal-search and geometry systems; humans translated statements, and some computation took much longer than contestant time.

**Verification status:** Provider reports4/6 and28/42 silver-medal-level; formal system claims are source-reported, not rerun here.

**Independent evidence actually obtained:** Official technical announcement inspected, not all proof certificates or original problem texts.

**Limits:** Do not conflate medal-level scoring with actual contest participation or equal time/translation conditions.

Sources: ai-src-alpha-proof.

## 10. Reading and citation register

- **ai-src-oa-discovery** — How GPT-5 helped mathematician Ernest Ryu solve a 40-year-old open problem. https://openai.com/index/gpt-5-mathematical-discovery/ Version: Captured current page; exact byte identity retained. Read: Dated November 24 2025 article; problem, turning point, attribution and verification. Limit: Provider case study; research status and exact theorem must be checked in the paper.
- **ai-src-ryu-paper** — Point convergence of Nesterov’s accelerated gradient method: an AI-assisted proof. https://arxiv.org/pdf/2510.23513 Version: arXiv:2510.23513v2, 19 January 2026. Read: Abstract; introduction 1.1–1.4; continuous-time Lemma 2.1 and Theorem 2.2; point-convergence statement. Limit: Selected proof steps read, not the complete discrete proof; no independent formal certificate run.
- **ai-src-oa-52** — Advancing science and math with GPT-5.2. https://openai.com/index/gpt-5-2-for-science-and-math/ Version: Captured current page; exact byte identity retained. Read: December 11 2025 benchmark protocol and learning-curve case study. Limit: Company evaluation and contribution narrative; not an independent theorem verdict.
- **ai-src-mle-paper** — On Learning-Curve Monotonicity for Maximum Likelihood Estimators. https://cdn.openai.com/pdf/a3f3f76c-98bd-47a5-888f-c52c932a8942/colt-monotonicity-problem.pdf Version: Unversioned provider-hosted manuscript linked December11 2025. Read: Abstract; introduction; Statement on AI Assistance; Theorems1.1–1.2; scalar specialization of Section3. Limit: No journal acceptance or Lean execution established; attribution is author testimony. PDF is unversioned, date anchored to official release.
- **ai-src-oa-firstproof** — Our First Proof submissions. https://openai.com/index/first-proof-submissions/ Version: Captured current page; exact byte identity retained. Read: February20 2026 article in full. Limit: A company’s provisional correctness estimate, not official grading of each internal-model proof.
- **ai-src-first-submissions** — First Proof?. https://cdn.openai.com/pdf/26177a73-3b75-4828-8c91-e8f1cf27aaa0/oai_first_proof.pdf Version: February20 2026 PDF. Read: February20 title/abstract; contents; problem statements1,2,4,6,9,10; prompting appendix headings. Limit: Attempt does not mean proof; no full proof audit, no kernel run, some claims incorrect.
- **ai-src-first-comments** — First Proof: solutions and comments. https://1stproof.org/documents/FirstProofSolutionsComments.pdf Version: Organizer-hosted current PDF. Read: Problem statements2,4,5,6,9,10; Sections4.1–4.6 and4.10 assessment context. Limit: Do not transfer a baseline verdict to a different model’s submission.
- **ai-src-firstproof** — First Proof Project mission and chronology. https://www.1stproof.org/ Version: Captured current page; exact byte identity retained. Read: Mission; three batch chronology; ethics/funding statement. Limit: Organizational independence is contextual evidence, not a proof of every submitted theorem.
- **ai-src-first-third** — Third Batch benchmark protocol. https://1stproof.org/third-batch.html Version: Captured current page; exact byte identity retained. Read: Benchmark design; tested systems; links to reports/code/logs. Limit: Research-level benchmark does not mean ten globally open problems.
- **ai-src-third-pdf** — First Proof Third Batch. https://hexagonmath.org/pdf/2610.00244v1 Version: Hexagon2610.00244v1; October14 2026;46pages. Read: Abstract; Section1; Sections3.2/3.5 problem statements; Section4 system descriptions; Tables2–5; Sections5.1/5.2/5.5/5.7–5.9. Limit: Only selected report sections read. Human expert grading is not machine kernel verification or a population-wide capability estimate.
- **ai-src-third-press** — Frontier AI Systems Solve up to9/10 Problems in First Proof Benchmark. https://1stproof.org/third-batch-press-release.html Version: Captured current page; exact byte identity retained. Read: October14 2026 key findings and methods. Limit: Use report tables for provider-specific scores, not headline alone.
- **ai-src-oa-ten** — Ten advances in mathematics and theoretical computer science. https://openai.com/index/ten-advances-in-mathematics/ Version: Captured current page; exact byte identity retained. Read: August1 2026 announcement and result list. Limit: Announcement is not independent confirmation of novelty, correctness or statement fidelity.
- **ai-src-ten-paper** — Ten Advances in Mathematics and Theoretical Computer Science. https://cdn.openai.com/pdf/ten-proofs-oai.pdf Version: Updated August6 2026; original version separately linked. Read: Abstract; contents/version note; headline results5,7,8,9; chapter9 theorem scope. Limit: Most of the long manuscript’s proofs were not read; results remain attributed claims in this atlas.
- **ai-src-ten-readme** — Ten-proofs Lean4 artifact README. https://raw.githubusercontent.com/openai/ten-proofs/main/README.md Version: Captured current page; exact byte identity retained. Read: Result-to-module mapping; build instructions; independent-check instructions. Limit: Repository existence/build instructions are not an executed verification receipt.
- **ai-src-ten-certificate** — MulticolorTriangleRamsey.lean. https://raw.githubusercontent.com/openai/ten-proofs/main/MulticolorTriangleRamsey.lean Version: Retrieved main-branch bytes, content hash pinned. Read: Final theorem triangleRamseyNumber_log_isTheta; divergentRamseyRoot; erdos_183; explicit lower-bound declaration. Limit: Only selected source declarations inspected; imports, axioms, trusted kernel and comparator were not executed.
- **ai-src-ten-comparator** — Comparator challenge checking instructions. https://raw.githubusercontent.com/openai/ten-proofs/main/ComparatorChallenges/README.md Version: Captured current page; exact byte identity retained. Read: Entire short README. Limit: Instructions do not establish that this atlas performed those checks.
- **ai-src-oa-progress** — Sharing AI progress in mathematics. https://openai.com/index/sharing-ai-progress-in-mathematics/ Version: Captured current page; exact byte identity retained. Read: October6 release and October15 update. Limit: Funding, advisory consultation and quantity do not independently validate proofs.
- **ai-src-openai-math** — OpenAI mathematics manuscript collection README. https://raw.githubusercontent.com/openai/math/main/README.md Version: Captured current page; exact byte identity retained. Read: Entire current README; counts; verification caveats; provenance and citations. Limit: Moving repository snapshot; counts are not counts of verified new theorems and may lag history entries.
- **ai-src-math-history** — OpenAI math collection revision history. https://raw.githubusercontent.com/openai/math/main/history.md Version: Current history retrieved November25 2026. Read: October7 withdrawals/fixes; October26 additions; November23–24 additions. Limit: Author-maintained history is not an independent proof review; November claims were not inspected at manuscript level.
- **ai-src-tao-review** — Introducing MathHelm: A Place to discuss AI-generated papers. https://terrytao.wordpress.com/2026/11/13/introducing-mathhelm-a-place-to-discuss-ai-generated-papers/ Version: Captured current page; exact byte identity retained. Read: November13 2026 guest essay before comments/sidebar. Limit: Broad scholarly response, not a verdict on each paper; guest authorship must not be attributed solely to Tao.
- **ai-src-arxiv-frontier** — FrontierMath: A Benchmark for Evaluating Advanced Mathematical Reasoning in AI. https://arxiv.org/abs/2411.04872 Version: arXiv2411.04872v7; December23 2025. Read: Abstract; submission/version history. Limit: Abstract/version metadata only; no problem-set audit or independent rerun.
- **ai-src-epoch-frontier** — FrontierMath benchmark program. https://epoch.ai/frontiermath Version: Captured current page; exact byte identity retained. Read: Definitions of Tiers1–4, Open Problems, and FrontierMath Erdős. Limit: Current overview without dated results table; no exhaustive problem evaluation.
- **ai-src-alpha-proof** — AI solves IMO problems at silver-medal level. https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/ Version: Captured current page; exact byte identity retained. Read: July25 2024 problem results, human translation and time conditions. Limit: Provider report; not a new research theorem, and not the same time conditions as contestants.
- **ai-src-anthropic-science** — Claude-shaped science. https://www.anthropic.com/research/claude-shaped-science Version: Captured current page; exact byte identity retained. Read: BootLoops workflow and guest-author account of research assistance. Limit: Not entered as a verified new mathematical theorem; source role differs from Anthropic’s independent First Proof participation.
- **ai-src-erdos183** — Erdős problem183 direct database page. https://www.erdosproblems.com/183 Version: Direct retrieval unsuccessful. Read: Not read: HTTP403. Limit: HTTP403; cannot independently certify current problem status from this page.


## Complete formula and theorem register


### Scalar Gaussian forward-KL risk — `ai-formula-kl`

Status: theorem.

$$
E_n=\frac12[\psi(n/2)-\log(n/2)+n/(n-2)-1],\ n>2
$$

The expected predictive log-loss penalty for estimating an unknown Gaussian variance has a finite closed form only above its inverse-moment threshold.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `n` | IID sample count | dimensionless | integer |
| `ψ` | digamma, derivative of log Gamma | dimensionless | function |
| `E_n` | expected forward Kullback–Leibler divergence in nats | dimensionless | scalar |

**Conditions and domain**

- True observations IID N(0,v*),v*>0; mean known.
- MLE uses divisor n; forward direction true distribution to fitted distribution; n>2.

**Derivation or proof guide**

1. Write X=n vhat/v* as chi-square(n).
2. Use KL=.5[log(vhat/v*)+v*/vhat−1].
3. E logX=ψ(n/2)+log2 and E(1/X)=1/(n−2).

**Worked example**

Inputs: {"n": [4, 6]}

1. At4, ψ(2)=1−EulerGamma.
2. At6, ψ(3)=1.5−EulerGamma.

Result: E4≈0.3648185773; E6≈0.1620860232.; units: dimensionless mathematical convention

**Limits and counterchecks**

- n≤2 gives infinite forward risk.
- E_n→0 as n→∞ under correct specification.

**Common mistakes**

- Reverse KL is a different expectation.
- A two-point calculation illustrates but does not prove all-n monotonicity.

Source records: `ai-src-mle-paper`.

### Finite benchmark scoring convention — `ai-formula-score`

Status: established-model.

$$
N_{\mathrm{correct}}=\sum_{j=1}^{10}{\mathbf{1}}(\bar C_j\ge0.5)
$$

The reported count applies a threshold to averaged referee scores, not a trusted-kernel decision.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `Cbar_j` | mean correctness grade for submissionj | dimensionless | scalar |
| `j` | problem index | dimensionless | index |
| `1` | indicator of a condition | dimensionless | function |

**Conditions and domain**

- Use First ProofBatch3 rubric and ten tasks.
- Missing submissions countzero; threshold.5.

**Derivation or proof guide**

1. Read each mean grade inTable2.
2. Apply≥.5 and sum indicators.

**Worked example**

Inputs: {"Siege": [1, 0.5, 0, 0, 1, 0, 0, 0, 0, 0]}

1. Three values meet threshold.
2. Two are1 and one is.5.

Result: 3/10 under the published threshold.; units: dimensionless mathematical convention

**Limits and counterchecks**

- All abstentions producezero.
- A score.5 is counted despite incomplete confidence.

**Common mistakes**

- Do not read3/10 as three fully machine-certified proofs.
- These tasks are not a random sample of all mathematics.
- Under the stricter mean-grade-equals1 convention, Siege has2/10; that alternate count is not the report’s published total.

Source records: `ai-src-third-pdf`.

### Permanent definition — `ai-formula-permanent`

Status: theorem.

$$
\operatorname{perm}(A)=\sum_{\sigma\in S_n}\prod_{i=1}^n a_{i,\sigma(i)}
$$

Sum one product per permutation, without determinant signs.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `A` | square matrix over a commutative field | algebraic convention | matrix |
| `S_n` | permutations of n indices | dimensionless | set |
| `a_ij` | matrix entry | algebraic convention | scalar |

**Conditions and domain**

- Square n×n matrix; a commutative coefficient field.

**Derivation or proof guide**

1. Each permutation chooses one entry from every row and column.
2. All chosen products are added with coefficient+1.

**Worked example**

Inputs: {"A": [[1, 2], [3, 4]]}

1. Identity permutation contributes4.
2. Swap contributes6.

Result: perm(A)=10, whereas det(A)=−2.; units: dimensionless mathematical convention

**Limits and counterchecks**

- For1×1, permanent equals its entry.
- Diagonal matrices give the product of diagonal entries.

**Common mistakes**

- Definition does not establish any claimed circuit lower bound.
- Arithmetic model and coefficient field matter for complexity.

Source records: `ai-src-ten-paper`.

### ε-light set definition — `ai-formula-light`

Status: theorem.

$$
L_S\preceq\varepsilon L\iff z^\top(\varepsilon L-L_S)z\ge0\ \forall z
$$

Every quadratic energy of induced edges is bounded by ε times the original graph energy.

| Symbol | Meaning | Unit / convention | Object type |
|---|---|---|---|
| `L` | graph Laplacian | dimensionless | matrix |
| `L_S` | Laplacian retaining only edges withinS | dimensionless | matrix |
| `ε` | comparison parameter in(0,1) | dimensionless | scalar |
| `z` | real vertex potential vector | dimensionless | vector |

**Conditions and domain**

- Finite undirected graph and compatible nonnegative edge weights.
- PSD order refers to all real vectors, not entrywise inequalities.

**Derivation or proof guide**

1. Laplacian energy is sum over edges of w_uv(z_u−z_v)².
2. Subtract induced-edge energy from ε times total.

**Worked example**

Inputs: {"graph": "one edge between2vertices", "ε": 0.5, "S": "one vertex"}

1. Induced graph has no edges, soL_S=0.
2. εL is PSD.

Result: SingletonS is ε-light; both vertices are not forε<1.; units: dimensionless mathematical convention

**Limits and counterchecks**

- EmptyS always passes.
- Atε=1, allV passes.

**Common mistakes**

- Checking one test vector is insufficient.
- This example does not prove the universal large-subset theorem.

Source records: `ai-src-first-comments`.


## Research paper evidence cards


### ai-paper-ryu

**sourceId**: ai-src-ryu-paper

**status**: selected-text-reviewed

**question**: Does critical classical acceleration converge to a point?

**method**: Energy/cluster-point analysis, then discrete adaptation.

**result**: Authors claim point convergence in finite dimensions.

**whatIsNew**: Claims the previously unresolved critical schedules; contribution/priority qualified by Section1.3.

**limitations**: Only selected initial proof steps and statements read; no independent complete proof.

**replication**: No original proof-system or benchmark rerun. Scalar identities and threshold counting are separately recomputed.

**nextQuestions**: Pin source revisions and obtain claim-specific independent review.
Check exact theorem statement, assumptions and artifact dependencies before stronger acceptance.


### ai-paper-mle

**sourceId**: ai-src-mle-paper

**status**: selected-text-reviewed

**question**: When is a correctly specified MLE learning curve monotone?

**method**: Gaussian/Wishart and Gamma identities, complete monotonicity.

**result**: Exact finite-risk thresholds and monotonicity theorems, attributed to GPT5.2-assisted authors.

**whatIsNew**: Authors establish settings not previously covered; reverse-KL family links to old textbook insight.

**limitations**: Selected mathematical statements/assistance narrative; no formal build or peer-review certification.

**replication**: No original proof-system or benchmark rerun. Scalar identities and threshold counting are separately recomputed.

**nextQuestions**: Pin source revisions and obtain claim-specific independent review.
Check exact theorem statement, assumptions and artifact dependencies before stronger acceptance.


### ai-paper-batch3

**sourceId**: ai-src-third-pdf

**status**: selected-text-reviewed

**question**: How do complete AI research proofs survive blind review?

**method**: Ten hidden human solutions, five systems,30referees, separate axes.

**result**: Threshold scores7,3,9,4,0; qualified details matter.

**whatIsNew**: A controlled comparison of public models/harnesses and scholarly quality.

**limitations**: Small selected taskset, unequalcompute, reviewer uncertainty and human-known solutions.

**replication**: No original proof-system or benchmark rerun. Scalar identities and threshold counting are separately recomputed.

**nextQuestions**: Pin source revisions and obtain claim-specific independent review.
Check exact theorem statement, assumptions and artifact dependencies before stronger acceptance.


### ai-paper-ten

**sourceId**: ai-src-ten-paper

**status**: selected-text-reviewed

**question**: What claims accompany the ten-result release?

**method**: Long provider manuscript and linked Lean source artifacts.

**result**: Abstract and selected statements describe major advances.

**whatIsNew**: Novelty is asserted by source; not independently certified by this atlas.

**limitations**: Most proofs unread, one selected Lean file inspected, no build.

**replication**: No original proof-system or benchmark rerun. Scalar identities and threshold counting are separately recomputed.

**nextQuestions**: Pin source revisions and obtain claim-specific independent review.
Check exact theorem statement, assumptions and artifact dependencies before stronger acceptance.


### ai-paper-frontier

**sourceId**: ai-src-arxiv-frontier

**status**: abstract-only

**question**: How can advanced mathematical answers be benchmarked?

**method**: Expert-crafted unpublished problems and automatic checking.

**result**: Abstract proposes a challenging contamination-conscious testbed.

**whatIsNew**: Benchmark construction, not an automatic discovery of new theorems.

**limitations**: Abstract/version metadata only; source abstract percentages reflect its reporting context, not current SOTA.

**replication**: No original proof-system or benchmark rerun. Scalar identities and threshold counting are separately recomputed.

**nextQuestions**: Pin source revisions and obtain claim-specific independent review.
Check exact theorem statement, assumptions and artifact dependencies before stronger acceptance.


## AI-assisted mathematics claim ledger


### ai-claim-nag

**provider**: OpenAI-assisted academic research

**model**: GPT-5/ChatGPT

**problemStatement**: For convex L-smooth f:R^n→R with an attained minimum, establish point convergence x_k,y_k→x∞∈argmin f for the paper’s classical NAG parameter schedules; also critical-damping continuous-time convergence.

**claimedDate**: 2025-10-24

**priorStatus**: Authors describe a longstanding point-convergence question, distinct from already-known objective-value O(k^-2) convergence.

**AIContribution**: Ryu reports repeated prompting, rejection of faulty suggestions and a structurally useful but incorrect-as-written proposal; Jang/Ryu developed and wrote the proof.

**verificationStatus**: Author-checked preprint, arXivv2 January19 2026; full proof not independently verified here.

**independentEvidence**: Paper Section1.3 reports a concurrent discrete-time proof prompted by the October21 public post, with additional Hilbert/FISTA results. No separate concurrent paper was read.

**sourceIds**: ai-src-oa-discovery
ai-src-ryu-paper

**limitations**: Do not turn human-directed collaboration into autonomous solving, or mathematical point convergence into universal algorithm stability.


### ai-claim-mle

**provider**: OpenAI-assisted academic research

**model**: GPT-5.2 Pro variants

**problemStatement**: For IID N(0,Σ*) samples in dimensiond, Σ*>0, prove expected forward KL risk of covariance MLE strictly decreases for n>d+1, and is infinite for n≤d+1; paper extends to unknown mean and other families.

**claimedDate**: 2025-12-11

**priorStatus**: Paper traces the correctly specified Gaussian question to2019/2022 learning-curve work; reverse-KL extension partly reconnects to a known textbook exercise.

**AIContribution**: Authors say model supplied proof strategies without human intermediate scaffolding; humans prompted extensions, checked and transcribed; model later located relevant prior art.

**verificationStatus**: Human-author verification and provider-reported external review; no journal verdict or machine proof run established.

**independentEvidence**: Original Sellke/Yin manuscript inspected for exact theorem and assistance statement, but it is the same collaboration rather than an independent replication.

**sourceIds**: ai-src-oa-52
ai-src-mle-paper

**limitations**: More data is not universally beneficial under misspecification; forward/reverse KL and finite-risk thresholds differ.


### ai-claim-fp2

**provider**: OpenAI

**model**: Unreleased internal reasoning model

**problemStatement**: Let F be a non-archimedean local field with ring of integers o; let N_r be the upper-triangular unipotent subgroup of GL_r(F). Fix a nontrivial additive character ψ of conductor o and a generic irreducible admissible representation Π of GL_(n+1)(F) in W(Π,ψ^(-1)). Must there exist one W in that Whittaker model such that, for every generic irreducible admissible π of GL_n(F) in W(π,ψ), with conductor idealq, generatorQ of q^(-1), and u_Q=I_(n+1)+Q E_(n,n+1), some V∈W(π,ψ) makes ∫_(N_n\GL_n(F)) W(diag(g,1)u_Q)V(g)|det g|^(s−1/2)dg finite and nonzero for every s∈C?

**claimedDate**: 2026-02-20

**priorStatus**: A hidden-solution research benchmark question, not evidence that all relevant theory was globally unsolved.

**AIContribution**: Internal model generated/typeset attempt; humans selected attempts and requested clarification based on feedback.

**verificationStatus**: Provider explicitly corrected its initial likely-correct assessment to incorrect.

**independentEvidence**: OpenAI cites organizer commentary and community analysis; selected organizer text inspected, not an independent re-derivation of this attempt.

**sourceIds**: ai-src-oa-firstproof
ai-src-first-submissions
ai-src-first-comments

**limitations**: The order of quantifiers matters: one W is selected before varying π; V may depend on π. The representation-theoretic setup is reproduced from organizer Problem2. This record audits an explicitly corrected attempt, not a solved theorem.


### ai-claim-fp4

**provider**: OpenAI

**model**: Unreleased internal model

**problemStatement**: For monic real-rooted degree-n polynomials p,q with the organizer’s finite free additive convolution, is 1/Φ_n(p⊞_n q)≥1/Φ_n(p)+1/Φ_n(q), with Φ_n(p)=Σ_{i≤n}Σ_{j≠i}(1/(λ_i−λ_j))² and Φ=∞ at repeated roots?

**claimedDate**: 2026-02-20

**priorStatus**: Research-level hidden-solution challenge; prior human solutions existed.

**AIContribution**: Model-generated proof attempt, human best-of selection and clarification.

**verificationStatus**: Company reports high chance of correctness, not a machine-checked theorem verdict.

**independentEvidence**: Organizer provides exact statement; its early GPT-5.2 baseline comments do not grade this later internal-model attempt.

**sourceIds**: ai-src-oa-firstproof
ai-src-first-submissions
ai-src-first-comments

**limitations**: Polynomial normalization and repeated-root conventions matter; complete proof not independently audited. The Φ definition is transcribed as the source’s double sum of squared reciprocals.


### ai-claim-fp6

**provider**: OpenAI

**model**: Unreleased internal model

**problemStatement**: Does a universal c>0 exist such that every finite graph and 0<ε<1 admit S⊂V with |S|≥cε|V| and L_S≼εL, where L_S retains only edges insideS?

**claimedDate**: 2026-02-20

**priorStatus**: Hidden human-solved spectral graph question in First Proof.

**AIContribution**: Generated proof with limited human supervision and expert-feedback clarification.

**verificationStatus**: Provider provisional high-confidence result.

**independentEvidence**: Organizer statement inspected; no independent verification of this exact internal attempt obtained.

**sourceIds**: ai-src-oa-firstproof
ai-src-first-submissions
ai-src-first-comments

**limitations**: A sampled graph experiment cannot prove the universal existence claim; PSD means positive-semidefinite order.


### ai-claim-fp9

**provider**: OpenAI

**model**: Unreleased internal model

**problemStatement**: For n≥5 and Zariski-generic A^(α)∈R^(3×4), find n-independent-degree polynomial relations recognizing exactly the coordinatewise tensor scalings λ_αβγδ=u_αv_βw_γx_δ of determinant tensors, with the organizer’s nonzero-pattern restriction.

**claimedDate**: 2026-02-20

**priorStatus**: Hidden-solution algebraic research challenge.

**AIContribution**: Generated candidate argument; humans selected and formatted outputs.

**verificationStatus**: Provider high-chance assessment; proof not independently checked here.

**independentEvidence**: Exact organizer problem and internal submitted section9 retrieved.

**sourceIds**: ai-src-oa-firstproof
ai-src-first-submissions
ai-src-first-comments

**limitations**: Genericity, exceptional index pattern and if-and-only-if direction must survive formalization; omitted zero cases can change the question.


### ai-claim-fp10

**provider**: OpenAI

**model**: Unreleased internal model

**problemStatement**: Explain a matrix-free preconditioned conjugate-gradient method for the stated nr×nr kernelized CP-ALS normal system with missing tensor entries, selection matrixS, Kronecker products and RKHS kernelK.

**claimedDate**: 2026-02-20

**priorStatus**: Research-method benchmark with existing human solution.

**AIContribution**: Model-generated linear-algebra derivation and proof attempt, selected under human supervision.

**verificationStatus**: Provider high chance of correctness; implementation/runtime advantage not independently reproduced.

**independentEvidence**: Organizer system equation and requested preconditioner/matvec explanation inspected.

**sourceIds**: ai-src-oa-firstproof
ai-src-first-submissions
ai-src-first-comments

**limitations**: Positive-semidefinite versus definite operators, regularization and solver convergence hypotheses cannot be inferred from an equation label.


### ai-claim-ramsey

**provider**: OpenAI

**model**: Internal Astra

**problemStatement**: For k-colour triangle Ramsey numberR_k(3), claim logR_k(3)=Θ(k logk), hence R_k(3)^(1/k)→∞; reported as resolving Erdős183.

**claimedDate**: 2026-08-01

**priorStatus**: Longstanding superexponential-growth question according to announcement/manuscript; direct current database access blocked.

**AIContribution**: Provider says model generated argument; humans/model prepared manuscript and Lean certificate.

**verificationStatus**: Provider-reported formalization; manuscript and selected actual Lean declarations inspected. No Lean kernel, dependency-axiom audit or Comparator execution was performed; proof correctness is not independently certified.

**independentEvidence**: No claim-specific independent correctness verdict located; code existence and MathHelm’s broad response are different evidence types.

**sourceIds**: ai-src-oa-ten
ai-src-ten-paper
ai-src-ten-readme
ai-src-ten-certificate
ai-src-erdos183

**limitations**: Do not label accepted solely from provider formalization claim; exact theorem/imports/axioms need pinned build and comparison.


### ai-claim-ehrhart

**provider**: OpenAI

**model**: Internal Astra

**problemStatement**: Claim vol(K)≤(n+1)^n/n! for convex bodies K⊂R^n whose centroid is the unique interior lattice point, in the stated lattice-volume convention.

**claimedDate**: 2026-08-01

**priorStatus**: Ehrhart volume conjecture according to authors.

**AIContribution**: Generated proof, human-assisted manuscript preparation, claimed Lean formalization.

**verificationStatus**: Announcement and manuscript abstract read; proof module/build not audited.

**independentEvidence**: No independent claim-specific proof review captured.

**sourceIds**: ai-src-oa-ten
ai-src-ten-paper
ai-src-ten-readme

**limitations**: Convex-body hypotheses and lattice normalization are essential; graph node is a documented claim, not certified resolution.


### ai-claim-permanent

**provider**: OpenAI

**model**: Internal Astra

**problemStatement**: Claim division-free arithmetic circuit lower boundΩ(n²loglogn) and arithmetic-formula leaf lower boundΩ(n⁴/logn) for the n×n permanent under the manuscript’s algebraic model.

**claimedDate**: 2026-08-01

**priorStatus**: Claims improvement of arithmetic lower bounds; not itself a P≠NP theorem.

**AIContribution**: Provider attributes argument to model and preparation/formalization to model plus humans.

**verificationStatus**: Selected abstract/overview only; no proof or certificate execution.

**independentEvidence**: No independent verdict located for this exact lower bound.

**sourceIds**: ai-src-oa-ten
ai-src-ten-paper
ai-src-ten-readme

**limitations**: Arithmetic circuits, formulas, field and allowed operations differ from Boolean computational complexity.


### ai-claim-nonsofic

**provider**: OpenAI

**model**: Internal Astra

**problemStatement**: Claim an explicit countable group which is not sofic, disproving that every countable group admits the required finite permutation approximations.

**claimedDate**: 2026-08-01

**priorStatus**: Major group-theoretic question as identified by authors.

**AIContribution**: Model-generated construction; manuscript/certificate prepared with human involvement.

**verificationStatus**: Selected primary claim inspected; no complete construction or proof audit.

**independentEvidence**: Independent correctness remains unresolved in this selected corpus.

**sourceIds**: ai-src-oa-ten
ai-src-ten-paper
ai-src-ten-readme

**limitations**: Existence of a Lean filename is not evidence the mathematical statement matches the historical question.


### ai-claim-withdrawal

**provider**: OpenAI

**model**: Unnamed internal model

**problemStatement**: Three manuscripts on split abelian eightfold Weil classes, Kuga–Satake correspondences for K3 surfaces, and rational Hodge for products of K3 surfaces were withdrawn after a sign-error-dependent construction failed.

**claimedDate**: 2026-10-07

**priorStatus**: October6 release had presented results; history now withdraws these specific manuscripts.

**AIContribution**: Model-origin outputs entered a large collection; authors maintain corrections/dependency notices.

**verificationStatus**: Withdrawn by issuer on October7: these three specific manuscripts are not accepted proofs; withdrawal does not apply automatically to other Hodge-related claims.

**independentEvidence**: Direct revision-history notice captured; root mathematical error not independently reconstructed.

**sourceIds**: ai-src-math-history
ai-src-openai-math

**limitations**: Do not extend these withdrawals to all Hodge-related papers; later CM-abelian-variety formalization is a different claim.


### ai-claim-recent-lp

**provider**: OpenAI

**model**: Unnamed internal model

**problemStatement**: November24 history claims a deterministic strongly polynomial algorithm for general linear programming, answering Smale’s ninth problem.

**claimedDate**: 2026-11-24

**priorStatus**: Major open complexity question according to issuer.

**AIContribution**: A newly released model-generated manuscript family; no detailed contribution audit yet.

**verificationStatus**: Unverified source claim: newly announced; original manuscript unread, independent correctness/novelty checks pending.

**independentEvidence**: Only history announcement retrieved, not original proof or independent review.

**sourceIds**: ai-src-math-history

**limitations**: Lead-level claim deliberately excluded from verified-theorem count; one-day freshness increases review uncertainty.


### ai-claim-recent-mm

**provider**: OpenAI

**model**: Unnamed internal model

**problemStatement**: November24 history lists “The matrix multiplication exponent is nine fourths,” i.e. claims ω=9/4 in the intended arithmetic asymptotic convention.

**claimedDate**: 2026-11-24

**priorStatus**: Claims an exact exponent, a stronger statement than an upper bound; original theorem hypotheses not read.

**AIContribution**: Issuer lists new model-origin tensor-geometry manuscripts.

**verificationStatus**: Unverified source claim: newly announced; original manuscript unread, independent correctness/novelty checks pending.

**independentEvidence**: No original manuscript or independent result captured.

**sourceIds**: ai-src-math-history

**limitations**: Exact equality in a history title must not be silently weakened to a proven algorithmic bound or promoted to established fact.


### ai-claim-claude-batch

**provider**: Anthropic

**model**: Siege harness on Claude Opus5.5

**problemStatement**: First Proof Batch3: solve ten researcher-origin questions with hidden pre-existing human solutions under the specified one-shot/no-human-input evaluation.

**claimedDate**: 2026-10-14

**priorStatus**: Unpublished human solutions existed; this is research-proof evaluation, not ten newly open theorem resolutions.

**AIContribution**: Anthropic provided a workflow; its performance reflects harness, model, budget and abstention policy.

**verificationStatus**: Independent expert grading: published threshold count3/10 at mean correctness≥0.5; two submissions have mean1 and one has mean0.5 with minor gaps. No submissions for3,4,8,9,10. This is not three strict/unanimous proof acceptances.

**independentEvidence**: First Proof46-page report, Tables2–5 and detailed reviews inspected.

**sourceIds**: ai-src-first-third
ai-src-third-pdf
ai-src-third-press

**limitations**: Some accepted-threshold submissions have gaps; exposition/attribution separate; no kernel proofs or representative distribution guarantee.


### ai-claim-claude-hyperfield

**provider**: Anthropic

**model**: Siege/Claude Opus5.5

**problemStatement**: For a hyperfieldH and 0∈x⊞y⊞z, must 0 belong to x³⊞y³⊞z³⊞(−xyz)⊞(−xyz)⊞(−xyz)? Batch3P5 asks this universal implication; submitted answer provides a counterexample.

**claimedDate**: 2026-10-14

**priorStatus**: Human had already solved benchmark problem; reviewers note alternative construction combines prior Connes–Consani and Hall work.

**AIContribution**: System reconstructed a counterexample using an infinite cyclic projective-plane hyperfield.

**verificationStatus**: All three referees find mathematics correct; attribution judged deficient, mean attribution0; exposition−.33.

**independentEvidence**: ReportSections3.5/5.5 inspected, including criticism that reproduced prior constructions need explicit citations.

**sourceIds**: ai-src-third-pdf

**limitations**: A correct counterexample can still be a rediscovery with weak attribution; this does not establish independent first discovery by Claude.


### ai-claim-claude-darcy

**provider**: Anthropic

**model**: Siege/Claude Opus5.5

**problemStatement**: Batch3P2: for div(f∇u)=1 on unit ballD⊂R^d,d≥2, zero boundary data, Yn=u_f+n^(-1/2)W and f in a small C^α-neighbourhood of1, determine minimax L² conductivity-estimation rate up to logarithms.

**claimedDate**: 2026-10-14

**priorStatus**: Hidden human-solved research question; printed context includes an inconsistent d=1 discussion, which must not overwrite the formal d≥2 statement.

**AIContribution**: Plug-in kernel estimation and Assouad-type lower bound, without human intervention in the recorded run.

**verificationStatus**: Referees grade correctness.50: sound strategy with minor proof gaps; not an unconditional fully audited theorem.

**independentEvidence**: ReportSections3.2/5.2 andTable2 read; reviewers flag missing attribution and multivariate notation corrections.

**sourceIds**: ai-src-third-pdf

**limitations**: Exact rate formula not transcribed here because the reviewed passage does not provide it; problem statement and qualified review are recorded, not a fabricated exponent.


### ai-claim-astra-batch

**provider**: OpenAI

**model**: GPT-6 Astra

**problemStatement**: First Proof Batch3 ten hidden-human-solution problems under a one-shot24-hour, no-human-input protocol.

**claimedDate**: 2026-10-14

**priorStatus**: Already human-solved unpublished benchmark problems.

**AIContribution**: Public base-model prompting rather than a separate human-provided proof outline; system and budget are documented.

**verificationStatus**: Independent First Proof Table2 reports7/10 at mean correctness≥0.5. The stricter alternative of requiring mean grade exactly1 counts5/10. The published7 therefore includes partial/qualified judgments; neither count certifies machine-verified new theorems.

**independentEvidence**: ReportTable2 and detailed reviews include qualified computational checks; attribution adequate for only4/10.

**sourceIds**: ai-src-first-third
ai-src-third-pdf
ai-src-third-press

**limitations**: Seven includes threshold/qualified judgments; do not compare directly to benchmark percentages with different scoring, sampling or compute.


### ai-claim-frontier52

**provider**: OpenAI

**model**: GPT-5.2 Thinking

**problemStatement**: Answer FrontierMath Tiers1–3 expert-designed problems under provider maximum-effort reasoning with a Python tool.

**claimedDate**: 2025-12-11

**priorStatus**: Benchmark authored with known checkable answers; new/unpublished questions do not necessarily ask globally open theorems.

**AIContribution**: Model plus tool computation under a declared evaluation setup.

**verificationStatus**: Provider reports40.3%; no independent rerun captured.

**independentEvidence**: Original benchmark abstract/current Epoch track distinctions inspected, but they do not independently reproduce this model score.

**sourceIds**: ai-src-oa-52
ai-src-arxiv-frontier
ai-src-epoch-frontier

**limitations**: A score is not a list of new theorems; track, tools, version and denominator must accompany it.


### ai-claim-imo24

**provider**: Google DeepMind comparison

**model**: AlphaProof and AlphaGeometry2

**problemStatement**: Solve the six IMO2024 competition problems, with Lean-based formal reasoning on translated statements and a dedicated geometry system.

**claimedDate**: 2024-07-25

**priorStatus**: Competition problems with official solutions/marking, not an open-problem research theorem collection.

**AIContribution**: Formal-search and geometry systems; humans translated statements, and some computation took much longer than contestant time.

**verificationStatus**: Provider reports4/6 and28/42 silver-medal-level; formal system claims are source-reported, not rerun here.

**independentEvidence**: Official technical announcement inspected, not all proof certificates or original problem texts.

**sourceIds**: ai-src-alpha-proof

**limitations**: Do not conflate medal-level scoring with actual contest participation or equal time/translation conditions.


## Nested coverage map

- **AI-assisted mathematics: claims, contributions and verification** (`ai-root`; mapped): AI-assisted mathematics: claims, contributions and verification is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
  - **Evaluating mathematical capability** (`ai-evaluation`; mapped): Evaluating mathematical capability is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
  - **Human–AI research collaboration** (`ai-collaboration`; mapped): Human–AI research collaboration is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
  - **Formal proof and trusted computing** (`ai-formal`; mapped): Formal proof and trusted computing is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
  - **Open-problem research claims** (`ai-research`; mapped): Open-problem research claims is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
  - **Corrections, priority and publication** (`ai-correction`; mapped): Corrections, priority and publication is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
  - **Independent review and research institutions** (`ai-review`; mapped): Independent review and research institutions is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
    - **Competition and answer benchmarks** (`ai-benchmarks`; mapped): Competition and answer benchmarks is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
    - **Research-proof benchmarks** (`ai-research-bench`; mapped): Research-proof benchmarks is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
      - **Olympiad problem solving** (`ai-olympiad`; mapped): Olympiad problem solving is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
        - **IMO2024 formal/geometry systems** (`ai-imo2024`; mapped): IMO2024 formal/geometry systems is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
        - **IMO2025 general reasoning claim** (`ai-imo2025`; mapped): IMO2025 general reasoning claim is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
      - **FrontierMath answer verification** (`ai-frontier`; mapped): FrontierMath answer verification is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
        - **Tier/track/sample distinctions** (`ai-frontier-tier`; mapped): Tier/track/sample distinctions is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
      - **First Proof controlled research tasks** (`ai-firstproof`; reviewed): First Proof controlled research tasks is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
        - **Batch3 blind expert assessment** (`ai-batch3`; reviewed): Batch3 blind expert assessment is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
          - **Claude Siege provider-specific record** (`ai-claude`; reviewed): Claude Siege provider-specific record is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
          - **Astra provider-specific record** (`ai-openai-batch`; reviewed): Astra provider-specific record is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
    - **Optimization collaborations** (`ai-optimization`; mapped): Optimization collaborations is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
      - **Nesterov point convergence** (`ai-nag`; mapped): Nesterov point convergence is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
        - **Finite-dimensional hypotheses and priority** (`ai-nag-hyp`; mapped): Finite-dimensional hypotheses and priority is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
    - **Statistical learning collaborations** (`ai-statistics`; reviewed): Statistical learning collaborations is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
      - **Gaussian MLE learning-curve risk** (`ai-mle`; reviewed): Gaussian MLE learning-curve risk is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
        - **Forward KL finiteness and monotonicity** (`ai-mle-bound`; reviewed): Forward KL finiteness and monotonicity is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
    - **Proof-assistant source artifacts** (`ai-proof-assistant`; mapped): Proof-assistant source artifacts is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
      - **Lean4 trusted-kernel boundary** (`ai-lean`; mapped): Lean4 trusted-kernel boundary is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
        - **Statement comparison and external checking** (`ai-comparator`; mapped): Statement comparison and external checking is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
          - **Axioms/imports and statement fidelity** (`ai-axioms`; mapped): Axioms/imports and statement fidelity is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
    - **Combinatorial open-problem claims** (`ai-combinatorics`; mapped): Combinatorial open-problem claims is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
      - **Multicolor triangle Ramsey growth** (`ai-ramsey`; mapped): Multicolor triangle Ramsey growth is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
        - **Erdős183 statement provenance** (`ai-erdos`; mapped): Erdős183 statement provenance is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
    - **Algebra and complexity claims** (`ai-algebra`; mapped): Algebra and complexity claims is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
      - **Non-sofic group construction claim** (`ai-nonsofic`; mapped): Non-sofic group construction claim is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
      - **Arithmetic permanent lower-bound claim** (`ai-permanent`; mapped): Arithmetic permanent lower-bound claim is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
    - **Convex lattice volume claim** (`ai-volume`; mapped): Convex lattice volume claim is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
      - **Ehrhart volume bound** (`ai-ehrhart`; mapped): Ehrhart volume bound is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
    - **Large-scale manuscript releases** (`ai-release`; mapped): Large-scale manuscript releases is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
      - **Versioned repairs and withdrawals** (`ai-versions`; mapped): Versioned repairs and withdrawals is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
        - **Withdrawn Weil/K3-dependent claims** (`ai-hodge`; mapped): Withdrawn Weil/K3-dependent claims is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
    - **Prior art and concurrent proofs** (`ai-priority`; mapped): Prior art and concurrent proofs is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
      - **New argument versus rediscovery** (`ai-rediscovery`; mapped): New argument versus rediscovery is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
      - **November24 unreviewed additions** (`ai-recent`; mapped): November24 unreviewed additions is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
    - **Independent review practices** (`ai-institutions`; mapped): Independent review practices is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
      - **MathHelm claim-specific discussion** (`ai-mathhelm`; mapped): MathHelm claim-specific discussion is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.
      - **Correctness/exposition/attribution separation** (`ai-referee`; reviewed): Correctness/exposition/attribution separation is mapped as a distinct question or evidence channel; coverage is limited to the linked selected records.

## Glossary

**LLM** — Large language model: a text-generating model, not itself a proof certificate.

**NAG** — Nesterov accelerated gradient; algorithm schedules and problem hypotheses must be specified.

**MLE** — Maximum likelihood estimator; parameter maximizing the observed-data likelihood.

**KL** — Kullback–Leibler divergence; directional expected log likelihood ratio, not a symmetric distance.

**IID** — Independent and identically distributed observations.

**Lean** — A proof assistant with a small trusted kernel; source code is not a successful checking receipt.

**Lake** — Lean project/build manager, with dependency/toolchain configuration.

**Comparator** — Artifact described in linked instructions for additional theorem/statement checking; not executed here.

**Axiom** — An assumed statement; consistency and intended interpretation limit the scope of a checked proof.

**sorry** — Lean placeholder that can admit a proposition; absence must be checked in the relevant dependency closure.

**Harness** — Software orchestrating model calls, tools and stopping; not interchangeable with the underlying model.

**IMO** — International Mathematical Olympiad; contest problems and medal-level scores do not imply new theorems.

**AIME** — American Invitational Mathematics Examination; a short-answer benchmark when reused in model evaluation, not a new-theorem collection.

**FrontierMath** — Program with separately specified tiered answer tasks, open-problem tasks and formal Erdős tasks.

**PSD** — Positive semidefinite; a symmetric matrix has nonnegative quadratic form for every real vector.

**CP-ALS** — CANDECOMP/PARAFAC tensor decomposition by alternating least squares.

**PCG** — Preconditioned conjugate gradient, an iterative linear solver requiring suitable definiteness hypotheses.

**RKHS** — Reproducing kernel Hilbert space; a function space whose evaluation is represented by a kernel.

**Zariski-generic** — Away from specified algebraic exceptional sets; not simply a random numerical example.

**Sofic** — Admitting finite permutation approximations in the specified asymptotic sense.

**Hyperfield** — Field-like algebra with multivalued addition; ordinary polynomial identities need not transfer as naive implications.

**Ramsey number** — Smallest complete-graph size forcing a monochromatic structure under every allowed edge coloring.

**Arithmetic circuit** — An algebraic computation graph; different from a Boolean circuit or a formula with no shared subcomputations.

**Strongly polynomial** — An algorithmic complexity notion controlling arithmetic-operation count independently of input coefficient bit magnitudes, with additional size requirements.

**ω** — Matrix multiplication exponent, an infimum of feasible arithmetic asymptotic exponents; equality needs both upper and lower reasoning.

**Preprint** — Public manuscript without an implied completed journal review.

**Independent evidence** — A review or experiment with a distinct evidential role; company hosting, expert fame or institutional funding alone does not certify a result.

**Read depth** — Precisely which sections were inspected; download size does not measure review completeness.

**GL_r(F)** — Group of invertible r×r matrices over fieldF; N_r is its upper-triangular unipotent subgroup, with diagonal entries1.

**Whittaker model** — A realization of a generic representation by functions with specified character equivariance under a unipotent subgroup; its character and representation hypotheses are part of First ProofProblem2.

**Non-archimedean local field** — A locally compact field with a non-archimedean valuation; its ring of integers and conductor ideals enter the local Rankin–Selberg question.

## Open questions and missing evidence

### Do the selected Lean certificates check the intended historical statements?

Status: open-audit. Pinned toolchain/import closure, no-placeholder check, printed axiom dependencies, clean kernel/comparator execution.

### Are November24 LP and matrix-exponent claims correct and novel?

Status: unreviewed-lead. Original papers, exact statements, independent domain experts, artifact builds and prior-art comparison.

### What is the independent current status of Erdős183?

Status: blocked-direct-source. Reachable database snapshot or maintainer confirmation; current direct page returned403.

### How should AI help and concurrent proofs be credited in NAG?

Status: active-scholarly-question. Read concurrent paper13 and full revision chronology, not just provider interview.

### How do qualified reviewer judgments and the dimension-context mismatch affect the exact Darcy claim?

Status: requires-clarification. Organizer errata plus complete proof and report scope, including rate formula and missing steps.

### Which specific October collection claims have independent favorable or unfavorable reviews?

Status: ongoing. Claim-level MathHelm commentary with author identity and exact manuscript version.


## Source records and reading depth


### ai-src-oa-discovery — How GPT-5 helped mathematician Ernest Ryu solve a 40-year-old open problem

OpenAI; 2025; Captured current page; exact byte identity retained

https://openai.com/index/gpt-5-mathematical-discovery/

**Source class**: official-announcement

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: Dated November 24 2025 article; problem, turning point, attribution and verification

**Supported claim**: Human-directed GPT-5 exploration helped Ryu develop a point-convergence proof; the article explicitly says a decisive model suggestion was incorrect as written.

**Limitations**: Provider case study; research status and exact theorem must be checked in the paper.

**research-note**: Human-directed GPT-5 exploration helped Ryu develop a point-convergence proof; the article explicitly says a decisive model suggestion was incorrect as written.

Capture SHA-256: `c65baf5c840aec47854d796b16bd3568aeaa9d9317bb03a6c2aa61e851d4c22f`; captured 2026-11-25T06:25:36.626223+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-ryu-paper — Point convergence of Nesterov’s accelerated gradient method: an AI-assisted proof

Uijeong Jang
Ernest K. Ryu; 2026; arXiv:2510.23513v2, 19 January 2026

https://arxiv.org/pdf/2510.23513

**Source class**: preprint

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: Abstract; introduction 1.1–1.4; continuous-time Lemma 2.1 and Theorem 2.2; point-convergence statement

**Supported claim**: Claims point convergence of classical accelerated gradient; identifies AI assistance and concurrent research.

**Limitations**: Selected proof steps read, not the complete discrete proof; no independent formal certificate run.

**research-note**: Claims point convergence of classical accelerated gradient; identifies AI assistance and concurrent research.

Capture SHA-256: `31dafeda57a8b0f933fbadefe20d32543ca36ea176292dfaf240d179f3b273f0`; captured 2026-11-25T06:26:09.650027+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-oa-52 — Advancing science and math with GPT-5.2

OpenAI; 2025; Captured current page; exact byte identity retained

https://openai.com/index/gpt-5-2-for-science-and-math/

**Source class**: official-announcement

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: December 11 2025 benchmark protocol and learning-curve case study

**Supported claim**: Reports 40.3% FrontierMath Tiers1–3 with Python and maximum effort, separately from a learning-curve result.

**Limitations**: Company evaluation and contribution narrative; not an independent theorem verdict.

**research-note**: Reports 40.3% FrontierMath Tiers1–3 with Python and maximum effort, separately from a learning-curve result.

Capture SHA-256: `b19cdc68a3c60e8b4456b93a988875ad60ce15522bcf92a67d0846ead1d42175`; captured 2026-11-25T06:25:36.619321+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-mle-paper — On Learning-Curve Monotonicity for Maximum Likelihood Estimators

Mark Sellke
Steven Yin; 2025; Unversioned provider-hosted manuscript linked December11 2025

https://cdn.openai.com/pdf/a3f3f76c-98bd-47a5-888f-c52c932a8942/colt-monotonicity-problem.pdf

**Source class**: preprint

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: Abstract; introduction; Statement on AI Assistance; Theorems1.1–1.2; scalar specialization of Section3

**Supported claim**: Forward KL risk decreases for well-specified Gaussian covariance MLE above its exact sample-size threshold; GPT-5.2 variants generated proofs subsequently checked/transcribed by humans.

**Limitations**: No journal acceptance or Lean execution established; attribution is author testimony. PDF is unversioned, date anchored to official release.

**research-note**: Forward KL risk decreases for well-specified Gaussian covariance MLE above its exact sample-size threshold; GPT-5.2 variants generated proofs subsequently checked/transcribed by humans.

Capture SHA-256: `72dd996ecbb872343ac18f94da98a1cb63405daff6c4595112826343864e124d`; captured 2026-11-25T06:26:10.164969+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-oa-firstproof — Our First Proof submissions

OpenAI; 2026; Captured current page; exact byte identity retained

https://openai.com/index/first-proof-submissions/

**Source class**: official-announcement

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: February20 2026 article in full

**Supported claim**: Claims high confidence for attempts4,5,6,9,10; explicitly retracts confidence in attempt2; documents human selection and feedback.

**Limitations**: A company’s provisional correctness estimate, not official grading of each internal-model proof.

**research-note**: Claims high confidence for attempts4,5,6,9,10; explicitly retracts confidence in attempt2; documents human selection and feedback.

Capture SHA-256: `02304d4bf20e6ce30d97691563f085bd6ed6537d40f67102b8aa522fd8b6779d`; captured 2026-11-25T06:25:36.611887+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-first-submissions — First Proof?

OpenAI; 2026; February20 2026 PDF

https://cdn.openai.com/pdf/26177a73-3b75-4828-8c91-e8f1cf27aaa0/oai_first_proof.pdf

**Source class**: preprint

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: February20 title/abstract; contents; problem statements1,2,4,6,9,10; prompting appendix headings

**Supported claim**: Ten internal-model proof attempts with limited human supervision and best-of selection.

**Limitations**: Attempt does not mean proof; no full proof audit, no kernel run, some claims incorrect.

**research-note**: Ten internal-model proof attempts with limited human supervision and best-of selection.

Capture SHA-256: `27e97e4f61610cb31120c68bc8845b7a7b65bb2bfd044ffc4bb6f3b4d17f8102`; captured 2026-11-25T06:26:10.466497+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-first-comments — First Proof: solutions and comments

First Proof problem authors; 2026; Organizer-hosted current PDF

https://1stproof.org/documents/FirstProofSolutionsComments.pdf

**Source class**: problem-record

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: Problem statements2,4,5,6,9,10; Sections4.1–4.6 and4.10 assessment context

**Supported claim**: Supplies exact research problems and expert comments; the early baseline tests used GPT-5.2 Pro and are distinct from OpenAI’s later internal-model attempts.

**Limitations**: Do not transfer a baseline verdict to a different model’s submission.

**research-note**: Supplies exact research problems and expert comments; the early baseline tests used GPT-5.2 Pro and are distinct from OpenAI’s later internal-model attempts.

Capture SHA-256: `a46d478359e4038f7f83e83f8e2de423a6d713f3bc8c93859eab6540e0934631`; captured 2026-11-25T06:26:10.066292+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-firstproof — First Proof Project mission and chronology

First Proof Foundation; 2026; Captured current page; exact byte identity retained

https://www.1stproof.org/

**Source class**: official-data

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: Mission; three batch chronology; ethics/funding statement

**Supported claim**: Independent expert-engagement framework, with stated industry donations and governance restrictions.

**Limitations**: Organizational independence is contextual evidence, not a proof of every submitted theorem.

**research-note**: Independent expert-engagement framework, with stated industry donations and governance restrictions.

Capture SHA-256: `144ba7fb2e6b54d718c979e3c9037fa7deee2c26a05f9fd39b6425c140ac290d`; captured 2026-11-25T06:25:04.736718+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-first-third — Third Batch benchmark protocol

First Proof Foundation; 2026; Captured current page; exact byte identity retained

https://1stproof.org/third-batch.html

**Source class**: official-data

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: Benchmark design; tested systems; links to reports/code/logs

**Supported claim**: Ten already-human-solved unpublished problems, one shot per system, public-model harnesses and double-blind grading.

**Limitations**: Research-level benchmark does not mean ten globally open problems.

**research-note**: Ten already-human-solved unpublished problems, one shot per system, public-model harnesses and double-blind grading.

Capture SHA-256: `5814d3bd60577ca862239e4538d6934a65733d1b7dd35b2e63e195e149c3ca89`; captured 2026-11-25T06:26:09.965835+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-third-pdf — First Proof Third Batch

Mohammed Abouzaid
Nikhil Srivastava
Rachel Ward
Lauren Williams; 2026; Hexagon2610.00244v1; October14 2026;46pages

https://hexagonmath.org/pdf/2610.00244v1

**Source class**: primary-paper

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: Abstract; Section1; Sections3.2/3.5 problem statements; Section4 system descriptions; Tables2–5; Sections5.1/5.2/5.5/5.7–5.9

**Supported claim**: At correctness threshold0.5: Astra7/10, Siege3/10, ProofCouncil9/10; exposition/attribution separately graded; several detailed reviews remain qualified.

**Limitations**: Only selected report sections read. Human expert grading is not machine kernel verification or a population-wide capability estimate.

**research-note**: At correctness threshold0.5: Astra7/10, Siege3/10, ProofCouncil9/10; exposition/attribution separately graded; several detailed reviews remain qualified.

Capture SHA-256: `541f026537556d584d34a9d3cabbe6e1e649af7151d89b244c11ee8e7da9be33`; captured 2026-11-25T06:27:29.125414+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-third-press — Frontier AI Systems Solve up to9/10 Problems in First Proof Benchmark

First Proof Foundation; 2026; Captured current page; exact byte identity retained

https://1stproof.org/third-batch-press-release.html

**Source class**: official-announcement

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: October14 2026 key findings and methods

**Supported claim**: Summarizes controlled batch and stresses exposition/attribution gaps and compute dependence.

**Limitations**: Use report tables for provider-specific scores, not headline alone.

**research-note**: Summarizes controlled batch and stresses exposition/attribution gaps and compute dependence.

Capture SHA-256: `dc59e8483e90a92b600c3e0956434b555b2c36575c5d9b61caecec1ea25b1033`; captured 2026-11-25T06:26:44.427969+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-oa-ten — Ten advances in mathematics and theoretical computer science

OpenAI; 2026; Captured current page; exact byte identity retained

https://openai.com/index/ten-advances-in-mathematics/

**Source class**: official-announcement

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: August1 2026 announcement and result list

**Supported claim**: Claims ten research advances by internal Astra, with human manuscript preparation and Lean artifacts.

**Limitations**: Announcement is not independent confirmation of novelty, correctness or statement fidelity.

**research-note**: Claims ten research advances by internal Astra, with human manuscript preparation and Lean artifacts.

Capture SHA-256: `1c0c65cba23f81286517029ddace5267d69e7d7bf03bc02fcaec8805b2f44e0b`; captured 2026-11-25T06:25:36.836329+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-ten-paper — Ten Advances in Mathematics and Theoretical Computer Science

OpenAI; 2026; Updated August6 2026; original version separately linked

https://cdn.openai.com/pdf/ten-proofs-oai.pdf

**Source class**: preprint

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: Abstract; contents/version note; headline results5,7,8,9; chapter9 theorem scope

**Supported claim**: States permanent lower bounds, lattice hardness, sharp Ehrhart volume bound and multicolor Ramsey growth among ten claims.

**Limitations**: Most of the long manuscript’s proofs were not read; results remain attributed claims in this atlas.

**research-note**: States permanent lower bounds, lattice hardness, sharp Ehrhart volume bound and multicolor Ramsey growth among ten claims.

Capture SHA-256: `ebc561ab5c53dbd240e17a8fdb6fffeb648591eca85dbfc7466f563638f8c566`; captured 2026-11-25T06:26:10.349924+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-ten-readme — Ten-proofs Lean4 artifact README

OpenAI; 2026; Captured current page; exact byte identity retained

https://raw.githubusercontent.com/openai/ten-proofs/main/README.md

**Source class**: official-data

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: Result-to-module mapping; build instructions; independent-check instructions

**Supported claim**: Provides source filenames and Lean4.32/mathlib/Lake build commands for ten claimed formalizations.

**Limitations**: Repository existence/build instructions are not an executed verification receipt.

**research-note**: Provides source filenames and Lean4.32/mathlib/Lake build commands for ten claimed formalizations.

Capture SHA-256: `fb1a59b06c3b855f10ef62e70c1dcf873b6f9a7641e752f5b25d917d5263f7e5`; captured 2026-11-25T06:26:44.353293+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-ten-certificate — MulticolorTriangleRamsey.lean

OpenAI; 2026; Retrieved main-branch bytes, content hash pinned

https://raw.githubusercontent.com/openai/ten-proofs/main/MulticolorTriangleRamsey.lean

**Source class**: official-data

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: Final theorem triangleRamseyNumber_log_isTheta; divergentRamseyRoot; erdos_183; explicit lower-bound declaration

**Supported claim**: Actual Lean text declares logarithmic Ramsey asymptotics and divergence of the kth root.

**Limitations**: Only selected source declarations inspected; imports, axioms, trusted kernel and comparator were not executed.

**research-note**: Actual Lean text declares logarithmic Ramsey asymptotics and divergence of the kth root.

Capture SHA-256: `a87bd60efe16dab00ba07ea4069f22b8dbc991b3f3ba34ae5088b1f8b1987cd3`; captured 2026-11-25T06:26:44.582445+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-ten-comparator — Comparator challenge checking instructions

OpenAI; 2026; Captured current page; exact byte identity retained

https://raw.githubusercontent.com/openai/ten-proofs/main/ComparatorChallenges/README.md

**Source class**: official-data

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: Entire short README

**Supported claim**: Requests landrun, lean4export, nanoda_bin and comparator challenge execution for independent checking.

**Limitations**: Instructions do not establish that this atlas performed those checks.

**research-note**: Requests landrun, lean4export, nanoda_bin and comparator challenge execution for independent checking.

Capture SHA-256: `dcf5e36bf69cb5f4dbf1db9c0c9770e437d791b88e426cb46a3177ef5a224584`; captured 2026-11-25T06:27:29.004833+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-oa-progress — Sharing AI progress in mathematics

OpenAI; 2026; Captured current page; exact byte identity retained

https://openai.com/index/sharing-ai-progress-in-mathematics/

**Source class**: official-announcement

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: October6 release and October15 update

**Supported claim**: Describes a large research release and subsequent Simons funding; notes more formalizations to follow.

**Limitations**: Funding, advisory consultation and quantity do not independently validate proofs.

**research-note**: Describes a large research release and subsequent Simons funding; notes more formalizations to follow.

Capture SHA-256: `a3eb97defc6af960f623b33de9cad9930b855d0008765a8db0b4d0345e624f7e`; captured 2026-11-25T06:25:36.647028+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-openai-math — OpenAI mathematics manuscript collection README

OpenAI; 2026; Captured current page; exact byte identity retained

https://raw.githubusercontent.com/openai/math/main/README.md

**Source class**: official-data

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: Entire current README; counts; verification caveats; provenance and citations

**Supported claim**: Current README says730manuscripts/375families, about42% top-line formalized, and warns unformalized results may have issues.

**Limitations**: Moving repository snapshot; counts are not counts of verified new theorems and may lag history entries.

**research-note**: Current README says730manuscripts/375families, about42% top-line formalized, and warns unformalized results may have issues.

Capture SHA-256: `d87b51bfa10f1c42fe35746934a44b84e0608e556c9ca5ffeb0163914ac8761c`; captured 2026-11-25T06:26:09.957012+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-math-history — OpenAI math collection revision history

OpenAI; 2026; Current history retrieved November25 2026

https://raw.githubusercontent.com/openai/math/main/history.md

**Source class**: official-data

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: October7 withdrawals/fixes; October26 additions; November23–24 additions

**Supported claim**: Records three withdrawals after a sign error and very recent complexity/optimization claims, including strongly polynomial LP and matrix multiplication exponent9/4.

**Limitations**: Author-maintained history is not an independent proof review; November claims were not inspected at manuscript level.

**research-note**: Records three withdrawals after a sign error and very recent complexity/optimization claims, including strongly polynomial LP and matrix multiplication exponent9/4.

Capture SHA-256: `badbb8f33483c3ff2b41a062e9cf328d3214a8b38b3af7a3ce8fabce9166155d`; captured 2026-11-25T06:26:44.391761+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-tao-review — Introducing MathHelm: A Place to discuss AI-generated papers

MathHelm scientific committee, guest post hosted by Terence Tao; 2026; Captured current page; exact byte identity retained

https://terrytao.wordpress.com/2026/11/13/introducing-mathhelm-a-place-to-discuss-ai-generated-papers/

**Source class**: independent-review

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: November13 2026 guest essay before comments/sidebar

**Supported claim**: Reports most of the October collection had not been verified by humans, encourages claim-specific discussion and rejects an obligation to review everything.

**Limitations**: Broad scholarly response, not a verdict on each paper; guest authorship must not be attributed solely to Tao.

**research-note**: Reports most of the October collection had not been verified by humans, encourages claim-specific discussion and rejects an obligation to review everything.

Capture SHA-256: `e9d69d9bc59a8c7b9a612140f334cb10329c15735c3ecf5e7e05b3fbf2abf451`; captured 2026-11-25T06:27:29.229279+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-arxiv-frontier — FrontierMath: A Benchmark for Evaluating Advanced Mathematical Reasoning in AI

Elliot Glazer and23coauthors; 2024; arXiv2411.04872v7; December23 2025

https://arxiv.org/abs/2411.04872

**Source class**: preprint

**Status / reading depth**: abstract-only; Abstract and version metadata only; full manuscript not read.

**Sections inspected**: Abstract; submission/version history

**Supported claim**: Unpublished expert-designed problems and automated answer checking; benchmark performance differs from theorem proof.

**Limitations**: Abstract/version metadata only; no problem-set audit or independent rerun.

**research-note**: Unpublished expert-designed problems and automated answer checking; benchmark performance differs from theorem proof.

Capture SHA-256: `06616bad07fbc760690cd822023b51ca92a5a10e0790ab33038a3061d156b8b3`; captured 2026-11-25T06:25:04.280621+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-epoch-frontier — FrontierMath benchmark program

Epoch AI; 2026; Captured current page; exact byte identity retained

https://epoch.ai/frontiermath

**Source class**: official-data

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: Definitions of Tiers1–4, Open Problems, and FrontierMath Erdős

**Supported claim**: These are distinct benchmark tracks with distinct proof/checking requirements.

**Limitations**: Current overview without dated results table; no exhaustive problem evaluation.

**research-note**: These are distinct benchmark tracks with distinct proof/checking requirements.

Capture SHA-256: `153f3f440593c4de557c0a7141c1c1035cc0e3a3c9435246f29003f5bf76774d`; captured 2026-11-25T06:25:04.393266+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-alpha-proof — AI solves IMO problems at silver-medal level

Google DeepMind; 2024; Captured current page; exact byte identity retained

https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/

**Source class**: official-announcement

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: July25 2024 problem results, human translation and time conditions

**Supported claim**: AlphaProof/AlphaGeometry2 reportedly solved4/6 IMO2024 problems,28/42, with formal and geometry systems.

**Limitations**: Provider report; not a new research theorem, and not the same time conditions as contestants.

**research-note**: AlphaProof/AlphaGeometry2 reportedly solved4/6 IMO2024 problems,28/42, with formal and geometry systems.

Capture SHA-256: `1fa4ff34d982b6ba10dec8a86df99567c7982b77a57dcbc7c47c6a497b276919`; captured 2026-11-25T06:25:05.277320+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-anthropic-science — Claude-shaped science

Matthew Schwartz, guest author; Anthropic host; 2026; Captured current page; exact byte identity retained

https://www.anthropic.com/research/claude-shaped-science

**Source class**: official-announcement

**Status / reading depth**: selected-text; Selected sections read; no comprehensive proof audit.

**Sections inspected**: BootLoops workflow and guest-author account of research assistance

**Supported claim**: Describes scientist-guided tools, expert consultation and cross-domain exploration rather than a clean theorem benchmark.

**Limitations**: Not entered as a verified new mathematical theorem; source role differs from Anthropic’s independent First Proof participation.

**research-note**: Describes scientist-guided tools, expert consultation and cross-domain exploration rather than a clean theorem benchmark.

Capture SHA-256: `01c68aba6aaf550ce1b1bdff1cdb61ca6da667d4df0d0642afac007794f96c8b`; captured 2026-11-25T06:25:36.861156+00:00. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.

### ai-src-erdos183 — Erdős problem183 direct database page

Erdős Problems maintainers; None; Direct retrieval unsuccessful

https://www.erdosproblems.com/183

**Source class**: problem-record

**Status / reading depth**: inaccessible-lead; Not read: HTTP403

**Sections inspected**: 

**Supported claim**: Direct current database verification remains a lead.

**Limitations**: HTTP403; cannot independently certify current problem status from this page.

**research-note**: Kept as a blocked provenance lead; OpenAI attribution is separately recorded.

Capture SHA-256: `None`; captured None. Raw full text remains a private research capture; this package supplies bounded notes and original-source links.
