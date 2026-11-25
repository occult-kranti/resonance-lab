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
