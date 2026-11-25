# Gravity: from force laws to spacetime and open quantum questions

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
