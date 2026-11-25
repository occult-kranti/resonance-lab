# Magnetism: fields, quantum matter and controlled inference

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
