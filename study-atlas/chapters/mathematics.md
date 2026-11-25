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
