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
