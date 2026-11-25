# Mathematics: foundations, structures and frontiers

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
