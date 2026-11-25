# Electrostatics: fields, matter, interfaces and inference

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
