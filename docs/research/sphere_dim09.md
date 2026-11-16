# Dimension 09 — Preregistration, Blinding, and Open-Science Practice for Physical Experiments

**Context:** LOC-1 plans to preregister its analysis (OSF), randomize/blind position assignments, and publish null results. This report collects: OSF preregistration norms as applicable to physics/metrology; the Registered Reports (RR) format; worked examples of blinded analysis in physics (LIGO blind injections, KATRIN, Muon g-2, PADME, particle-physics canonical methods); randomization-schedule custody practice; statistical-power / smallest-effect-size-of-interest (SESOI) reasoning; and published critiques of preregistration (PARKing, HARKing, amendment abuse). It closes with concrete recommendations for LOC-1's registered protocol structure.

**Method note:** 18 distinct web-search queries were executed across 9 search calls (≥15 required), plus retrieval of full-text chunks. Sources were selected for authority (primary collaboration documents, BIPM normative documents, peer-reviewed methods literature) and verbatim quotability.

---

## A. OSF preregistration norms (as portable to physics/metrology)

### A1. Preregistration's core function: separate prediction from postdiction

- **Claim:** Preregistration means fixing research questions and the analysis plan before observing outcomes; it exists to keep hypothesis generation distinct from hypothesis testing.
- **Source:** Nosek, Ebersole, DeHaven & Mellor, "The Preregistration Revolution," *PNAS* 115(11):2600–2606.
- **URL:** https://www.pnas.org/doi/10.1073/pnas.1708274114 (open preprint: https://ideas.repec.org/p/osf/osfxxx/2dxu5.html)
- **Date:** 2018-03-13
- **Excerpt (verbatim, abstract):** "An effective solution is to define the research questions and analysis plan prior to observing the research outcomes--a process called preregistration. A variety of practical strategies are available to make the best possible use of preregistration in circumstances that fall short of the ideal application, such as when the data are pre-existing. Services are now available for preregistration across all disciplines facilitating a rapid increase in the practice."
- **Context:** The canonical normative reference; explicitly says the practice applies "across all disciplines," which licenses its use for a physics/metrology experiment like LOC-1 even though uptake originated in psychology.
- **Confidence:** High.

### A2. OSF template menu and the correct template for an RR workflow

- **Claim:** OSF provides ~11 registration templates; the general-purpose "OSF Preregistration" template covers study information, design plan, sampling plan, variables, and analysis plan, and a dedicated "Registered Report Protocol Preregistration" template exists for protocols that already hold in-principle acceptance (IPA) from an RR venue.
- **Source:** OSF Help Guide, "Welcome to Registrations & Preregistrations!"
- **URL:** https://help.osf.io/article/330-welcome-to-registrations
- **Date:** 2022-01-26 (accessed for this report)
- **Excerpt (verbatim, template table):** "**OSF Preregistration** | Standard, comprehensive, and general purpose preregistration form. Most commonly used. … **Registered Report Protocol Preregistration** | Register your protocol AFTER having been given 'in-principle acceptance' from a Registered Report journal".
- **Context:** For LOC-1 the practical sequence is: draft with the full OSF Preregistration structure; if pursuing RR review (e.g., via PCI RR), re-register the accepted protocol with the RR Protocol Preregistration template after IPA.
- **Confidence:** High.

### A3. Timing and freezing norms; embargo option

- **Claim:** Best practice is to finalize registration immediately before data collection; OSF registrations are timestamped, immutable snapshots, with DOI, embargoable up to four years (useful to keep hypotheses private while a blinded physical experiment runs).
- **Source:** Center for Open Science blog, "Choosing the Right Preregistration Template: A Guide for Researchers"; corroborated by OSF workflow description at timebinder.io.
- **URL:** https://www.cos.io/blog/choosing-preregistration-template-guide-for-researchers ; https://timebinder.io/blog/preregistration-vs-timestamp/
- **Date:** 2025-04-24 (COS)
- **Excerpt (verbatim, COS):** "Preregister as close to the start of data collection as feasible. While you can draft your plans in OSF early and refine them over time, finalizing your registration just before beginning data collection allows maximum flexibility during planning while still establishing your protocol before seeing any data."
- **Excerpt (verbatim, TimeBinder summary of OSF rules):** "a submitted registration is frozen: you can't edit it or its files, though you can add a documented update or withdraw it, which leaves basic details behind; you can make it public straight away or embargo it for up to four years; public registrations get a DOI".
- **Context:** Embargo is directly relevant to LOC-1 if the position-assignment hypothesis must stay hidden from operators while apparatus is live.
- **Confidence:** High for OSF mechanics (primary platform docs); Medium for TimeBinder (secondary blog, but consistent with OSF docs).

### A4. Level-of-detail norms: decision trees and deviation reporting are legitimate

- **Claim:** Preregistrations may pre-specify *criteria* (decision trees) for not-yet-decidable choices; deviations are expected and must be transparently reported — deviation reporting is what keeps the registration valuable.
- **Source:** Cook et al.-style guidance summarized in "A How-To Guide for Open-Science Practices in Special Education Research," *PMC*; and Giehl et al., *The Lancet Digital Health* (2024) preregistration recommendations.
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC9426775/ ; https://www.thelancet.com/pdfs/journals/landig/PIIS2589-7500(24)00069-4.pdf
- **Date:** 2022 (PMC guide); 2024 (Lancet Digital Health)
- **Excerpt (verbatim, PMC):** "If researchers do not know one or more aspects of a study in advance, they can preregister the criteria by which they will make such determinations. For example, a decision tree for determining which statistical analysis will be used depending on whether assumptions are met can be preregistered."
- **Excerpt (verbatim, Lancet Digital Health):** "Even in the most planned and anticipated research, deviations from initial methods and analysis plans are common. Deviations do not necessarily rule out testing predictions effectively but should be reported (otherwise, p[r]eregistration of the study is worthless)."
- **Context:** For a physical experiment, contingent branches (e.g., "if drift exceeds X, switch to estimator B") can be preregistered as explicit decision rules rather than vague hedges.
- **Confidence:** High.

---

## B. Registered Reports format

### B1. Two-stage structure with in-principle acceptance

- **Claim:** A Registered Report is peer-reviewed on the protocol (Stage 1: introduction + methods + analysis plan + any pilot data) before data collection; sound protocols receive in-principle acceptance (IPA), i.e., a publication commitment independent of results; Stage 2 review checks protocol compliance and conclusion accuracy — guaranteeing publication of null results.
- **Source:** "The use of the Registered Reports format for publication of randomized clinical trials: a cross-sectional study," *medRxiv* (peer-reviewed version in *BMJ Open*).
- **URL:** https://www.medrxiv.org/content/10.1101/2022.08.02.22278318v2.full-text
- **Date:** 2022-12-21
- **Excerpt (verbatim):** "In a Registered Report, the study protocol - including theory, hypotheses, detailed methods, and analysis plan - is submitted directly to a journal, and peer-review of this material - i.e. stage 1 peer review - occurs before the research is underway. … Following the stage 1 peer review, high quality protocols exploring relevant research questions receive an in-principle acceptance for publication in the journal, conditional on the successful completion of the study in accordance with the protocol. Provisional acceptance is therefore given without knowledge of the research results, or whether or not the study hypothesis is verified. … Once the research is completed, stage 2 peer review checks compliance with the protocol and the accuracy of conclusions in view of the evidence."
- **Context:** This is the mechanism that structurally guarantees LOC-1's commitment to publish null results.
- **Confidence:** High.

### B2. Stage 1 review criteria explicitly include power analysis and outcome-neutral tests

- **Claim:** Reviewers at Stage 1 assess importance of the question, plausibility of hypotheses, soundness/feasibility of the analysis pipeline *including statistical power analysis*, replicability of detail, and — critically for a null-result-capable physics experiment — whether authors "pre-specified sufficient outcome-neutral tests … including positive controls and quality checks."
- **Source:** Taylor & Francis Author Services, "Registered Reports" (reproducing Center for Open Science criteria, CC BY-ND).
- **URL:** https://authorservices.taylorandfrancis.com/publishing-your-research/peer-review/registered-reports/
- **Date:** page accessed; COS criteria stable since ~2013 (page shows 2026 crawl date)
- **Excerpt (verbatim):** "In considering papers at stage 1, reviewers will be asked to assess: 1. The importance of the research question(s). 2. The logic, rationale, and plausibility of the proposed hypotheses. 3. The soundness and feasibility of the methodology and analysis pipeline (including statistical power analysis where appropriate). 4. Whether the clarity and degree of methodological detail is sufficient to exactly replicate the proposed experimental procedures and analysis pipeline. 5. Whether the authors have pre-specified sufficient outcome-neutral tests for ensuring that the results obtained are able to test the stated hypotheses, including positive controls and quality checks."
- **Context:** Directly translatable to LOC-1: the protocol must contain calibration/positive-control injections (cf. LIGO hardware injections, §C2) and quality checks that work whether or not the effect exists.
- **Confidence:** High.

### B3. A discipline-agnostic RR route exists for physics: PCI Registered Reports

- **Claim:** PCI Registered Reports (PCI RR, launched 2021) reviews and recommends RRs "across STEM, medicine, the social sciences and humanities" free of charge; an IPA from PCI RR is honored by a network of "PCI RR-friendly" journals (incl. Royal Society Open Science, PeerJ family incl. Physical/Materials Chemistry titles) that commit to accepting recommended Stage 2 papers without further peer review. PCI RR assigns a formal "level of bias control," up to Level 6 ("No part of the data or evidence that will be used to answer the research question yet exists and no part will be generated until after IPA").
- **Source:** FORRT glossary entry "PCI Registered Reports"; PCI RR platform listings; PeerJ announcement.
- **URL:** https://forrt.org/glossary/english/pci_registered_reports/ ; https://rr.peercommunityin.org/ ; https://peerj.com/blog/post/115284884044/peerj-journals-support-peer-community-in-registered-reports/
- **Date:** 2021-04-19 (PeerJ); FORRT page updated 2026-08-05
- **Excerpt (verbatim, FORRT):** "An initiative launched in 2021 dedicated to receiving, reviewing, and recommending Registered Reports (RRs) across the full spectrum of Science, technology, engineering, and mathematics (STEM), medicine, social sciences and humanities. … A network of PCI RR-friendly journals endorse the PCI RR review criteria and commit to accepting, without further peer review, RRs that receive a positive final recommendation from PCI RR."
- **Excerpt (verbatim, PCI RR listing):** "**Level of bias control achieved:** Level 6. _No part of the data or evidence that will be used to answer the research question yet exists and no part will be generated until after IPA._"
- **Context:** Core physics journals (PRL, Nature Physics, Metrologia) do not operate standing RR tracks; PCI RR → a PCI-RR-friendly journal is the realistic RR route for LOC-1. This is an observed gap (negative result), not an oversight in the search.
- **Confidence:** High for PCI RR scope; Medium-High for the negative claim about core physics journals (based on COS participating-journals framing and journal author-guideline pages reviewed; no physics flagship was found offering RRs).

### B4. RR definition vs. plain preregistration

- **Claim:** Plain OSF preregistration is unilateral timestamping with no external evaluation; a Registered Report moves peer review before data collection and attaches a binding editorial commitment.
- **Source:** CASRAI guide, "Registered Reports: Stage 1 & Stage 2 Explained."
- **URL:** https://casrai.org/guides/registered-reports-publishing-format
- **Date:** 2026-08-24
- **Excerpt (verbatim):** "Where ordinary preregistration is something a researcher does unilaterally — time-stamping a plan before starting a study, with no outside evaluation and no promise attached — a Registered Report moves peer review itself earlier, before data are collected or outcomes are known, and attaches a binding editorial commitment to the outcome of that review."
- **Context:** LOC-1 should treat OSF preregistration as the floor and RR/PCI-RR review as the credibility ceiling.
- **Confidence:** High (consistent with COS definitions).

---

## C. Blinded analysis in physics — worked examples

### C1. Canonical taxonomy of blinding methods (Klein & Roodman)

- **Claim:** Particle physics codified four blinding families: hidden signal box; hidden answer (hidden offset/asymmetry); adding/removing events; data prescaling (holdout fractions). The hidden signal box is recommended whenever signal characteristics are known and background is independently estimable.
- **Source:** Klein, J. R. & Roodman, A., "Blind Analysis in Nuclear and Particle Physics," *Annual Review of Nuclear and Particle Science* 55:141–163 (2005).
- **URL:** https://www.pp.rhul.ac.uk/~cowan/stat/annurev.nucl.55.090704.pdf (also https://inspirehep.net/files/123bf8d8ec8f80e60be89076c65dbdbd)
- **Date:** 2005
- **Excerpt (verbatim):** "Perhaps the most straightforward blind analysis method is the hidden signal box. In this technique, a subset of the data, containing the potential signal, is kept hidden until all aspects of the analysis are complete. … Only after the data selection requirements, the signal efficiency, and the estimated background are determined is the hidden signal box opened. The hidden signal box method is now a standard technique for searches of rare decays from known particles, and it has been used by many particle physics experiments."
- **Excerpt (verbatim, on hidden offsets and KTeV):** "Both the hidden offset C and the sign choice were made by a pseudo-random number generator, with a seed chosen by the experimenters. … In practice, KTeV had to remove the sign choice at an earlier stage to permit a full evaluation of systematic errors. Nevertheless, the first KTeV ε′/ε result was unblinded only one week before the result was made public."
- **Excerpt (verbatim, on holdouts):** "The Sudbury Neutrino Observatory, in its first publication, used a prescale technique as a test of gross statistical bias—30% of the data was kept in reserve and the analysis developed on the other 70% applied to the hidden sample. … The LIGO gravity wave experiment used a 10% sample for analysis optimizations in their search for gravity wave bursts. This subsample was then discarded in the final results."
- **Context:** This is the reference taxonomy LOC-1's protocol should cite and instantiate; the KTeV episode also documents a real failure mode (partial unblinding needed for systematics evaluation) and its mitigation (documented, staged unblinding).
- **Confidence:** High.

### C2. LIGO: blind injections (custody via a sealed "Blind Injection Envelope") and the pivot to open hardware injections

- **Claim:** LIGO/Virgo's 2009–2010 blind-injection test assigned custody of the injection truth to a tiny subgroup, with the secret physically held in a "Blind Injection Envelope" opened only after searches were complete; the exercise stress-tested the full detection pipeline and caught a candidate (the "Big Dog" event) that passed all checks but was later revealed as an injection. Notably, the collaboration later discontinued blind injections in favor of open, continuously monitored hardware injections.
- **Source:** LIGO Scientific Collaboration page "Blind injection"; Biwer et al., "Validating gravitational-wave detections: The Advanced LIGO hardware injection system," *Phys. Rev. D* 95, 062002; Blackburn thesis (LIGO DCC P1000093).
- **URL:** https://ligo.org/blind-injection/ ; https://link.aps.org/accepted/10.1103/PhysRevD.95.062002 ; https://dcc.ligo.org/public/0014/P1000093/001/lindy_blackburn_thesis.pdf
- **Date:** LSC page undated (exercise 2009–2010); PRD paper published 2017 (accepted manuscript); thesis 2010.
- **Excerpt (verbatim, LSC):** "The data analysts agreed in advance to a 'blind' test: a few carefully-selected members of the collaborations would secretly inject some (zero, one, or maybe more) signals into the data without telling anyone. The secret goes into a 'Blind Injection Envelope', to be opened when the searches are complete. Such a 'mock data challenge' has the potential to stress-test the full procedure and uncover problems that could not be found in other ways."
- **Excerpt (verbatim, PRD 95, 062002):** "Another use for hardware injection in Initial LIGO were 'blind injections' which were hardware injections known only to a small team. Blind injections simulate the detection and characterization of a real astrophysical signal. No blind injections were carried out during Advanced LIGO's first observing run. There are no plans to perform blind injections in future observing runs."
- **Excerpt (verbatim, Blackburn thesis on the S5/VSR1 outlier):** "In final form, the detection checklist for S5/VSR1 (Appendix D) consisted of an 80-point list of tests … Afterward it was revealed that the source of the event was a blind hardware injection designed to test the end-to-end analysis pipeline."
- **Context:** Two lessons for LOC-1: (i) small-custodian sealed-envelope custody of hidden ground truth works and is auditable; (ii) for ongoing operations, LIGO judged *open* injections plus blinding of the answer (not the signal) more practical — hybrid designs (open calibrations + blinded estimator inputs) are legitimate.
- **Confidence:** High.

### C3. Muon g-2 (Fermilab): two-level hardware+software blinding with external custodians and sealed envelopes

- **Claim:** The Fermilab Muon g-2 experiment blinded its master clock by ±25 ppm using an offset "chosen by a separate independent team" (two Fermilab staff outside the collaboration), with the secret frequencies written in two sealed envelopes stored in different locations, plus per-analyzer software offsets; unblinding occurred only after a unanimous collaboration vote, once the analysis was "complete and frozen."
- **Source:** Muon g-2 design/overview paper (arXiv:1905.00497v2); final-results paper (arXiv, June 2025); collaboration conference slides (Sorbara, LNF 2021).
- **URL:** https://arxiv.org/html/1905.00497v2 ; https://muon-g-2.fnal.gov/result2025.pdf ; https://agenda.infn.it/event/27294/contributions/140654/attachments/83992/110980/MS_210421_gm2atLNF.pdf
- **Date:** 2019-05-03 (design paper); 2025-06-02 (final result); 2021-04-21 (LNF slides)
- **Excerpt (verbatim, design paper):** "The Muon g−2 experiment is both hardware and software blinded. The 40 MHz clock that drives the calorimeter digitizers, straw tracker and NMR digitisers has had an offset in the range ±25 ppm applied to externally blind the time of the measured ωa. Software blinding occurs at the analysis stage for both the ωa and ωp frequencies. … where ΔR is a frequency offset that is unique to each analyser. In late stages of the analysis, before a final unblinding, relative unblinding exercises of these individual offsets to a common offset are performed for all analyses and datasets, allowing for internal comparison and consistency checks without the risk of conscious or unconscious bias."
- **Excerpt (verbatim, final results paper):** "Removal of the hardware blinding occurred after all aspects of the aμ determination were complete and frozen."
- **Excerpt (verbatim, LNF slides):** "After validation of all the analyses the whole collaboration met on the 25th of February 2021: Two envelopes with secret frequency were opened (one in Seattle (University of Washington, other in Fermilab). Unblinded result was computed."
- **Context:** The strongest template for LOC-1's custody question: secret held by people *outside* the analysis team; redundancy (two envelopes, two sites); a formal governance act (unanimous vote) gating unblinding; intermediate "relative unblinding" permitting cross-checks without revealing the answer.
- **Confidence:** High.

### C4. KATRIN: model blinding by a single designated custodian; MC-twin gating before touching data

- **Claim:** KATRIN blinds the spectral *model* (secret Gaussian broadening of the molecular final-state distribution, generated by one designated collaborator, re-drawn each campaign) and requires the full analysis chain to be finalized on Monte-Carlo "twins" of each scan — recovering the known true value — before blinded fits to real data and, finally, unblinding.
- **Source:** Aker et al., "Analysis methods for the first KATRIN neutrino-mass measurement" (arXiv:2101.05253); Lokhov & Tkachov-era review, arXiv:2203.08059 (*Annu. Rev. Nucl. Part. Sci.* 2022, 72:259–282); TUM dissertation (mediatum 1659153).
- **URL:** https://arxiv.org/abs/2101.05253 ; https://arxiv.org/pdf/2203.08059 ; https://mediatum.ub.tum.de/doc/1659153/document.pdf
- **Date:** 2021-01-13 (analysis paper); 2022 (review)
- **Excerpt (verbatim, review):** "The KATRIN analysis is model-blinded: a designated collaborator generates an arbitrary, secret Gaussian broadening of the electronic ground state of the daughter molecule in T2 β decay, which alters the spectral model in a manner correlated much more strongly to the squared neutrino mass than to the other fit parameters. … The analysis procedures are first developed and tested on Monte-Carlo data generated using slow-control data recorded during the measurement. Then, the model-blinded fits are performed on the actual data. The broadening is revealed, and the analysis performed with the correct model, only after all input parameters and systematic uncertainties have been finalized."
- **Excerpt (verbatim, TUM thesis):** "The complete analysis chain must then be finalized on the Monte Carlo twins. This allows for two types of sanity check: 1. The analysis must recover the true value of 0.0 eV², showing that it is unbiased. 2. The overall mν² uncertainty, as well as a breakdown showing the impact of the individual components, is estimated by multiple independent analysis teams on their MC copies. To be allowed to continue in the unblinding process, each team must implement all relevant effects and come to consistent results."
- **Context:** KATRIN demonstrates that a *null/upper-limit result* (mν < 1.1 eV at 90% CL from the first blinded campaign) is a fully publishable outcome of a blinded pipeline — a direct precedent for LOC-1's publish-null-results commitment. Note also the documented limitation: model blinding "rely[ies] on the analyst's responsibility" since raw data remain accessible for systematics checks.
- **Confidence:** High.

### C5. PADME X17: blinded search with sideband validation, formal unblinding protocol

- **Claim:** Recent new-physics searches continue to use masking of the signal region with unblinding gated on background-model validation in sidebands.
- **Source:** "Blind unblinding procedure for the PADME X17 data sample," arXiv:2503.05650.
- **URL:** https://arxiv.org/html/2503.05650v1
- **Date:** 2025-03-07
- **Excerpt (verbatim):** "Blind analysis procedures are crucial in searches for new physics signals in many fields of particle physics, particularly in dark matter searches and in studies of ultra-rare processes. Typically, part of the data is masked or made 'blind' to the researchers. Only after the consistency of the acquired data samples is validated against the expected background estimates, the masked data can be analyzed in full. This procedure is called 'unblinding'. The consistency check is often achieved by using data sidebands, regions that are close to the signal region but where the absence of any new physics signal can be safely assumed."
- **Context:** Shows the practice is current (2025), and gives LOC-1 the sideband-validation gating criterion for unblinding.
- **Confidence:** High.

### C6. Cosmology's borrowed toolkit (relevant to metrology-style measurements)

- **Claim:** Cosmologists imported particle-physics blinding: random offsets added to data and removed only after all manipulations; split-sample holdouts; and — most relevant to precision measurement — letting analysts see full data "but with arbitrary units," rescaling only at the end.
- **Source:** "Blind analysis in cosmology" discussion, arXiv:0909.2649 (citing Lyons 2008; MiniBooNE).
- **URL:** https://arxiv.org/pdf/0909.2649
- **Date:** 2009
- **Excerpt (verbatim):** "a random number can be added to the data, and subtracted only after all corrections and other data manipulations have been performed; or just a fraction of the data is employed to define the statistical procedure, while the remainder of the data are only revealed in a subsequent phase. After that point no further adjustments of the methodology are allowed. … Another method is sometimes adopted by precision measurements where the analysis team is allowed to see the full data sets, but with arbitrary units. The resulting parameter constraints are rescaled to the actual units only at the very end of the analysis."
- **Context:** The "arbitrary units" trick maps directly onto LOC-1's design if position-assignment-dependent quantities can be presented in blinded units during analysis development.
- **Confidence:** High for the excerpt; Medium that arbitrary-unit blinding is common (presented as "sometimes adopted").

### C7. Metrology normative practice: protocol fixed *before* comparison; withdrawal barred (BIPM CIPM MRA)

- **Claim:** International metrology already operates a de facto registered-protocol regime: each key comparison has a detailed technical protocol (including the method for computing the key comparison reference value) agreed before measurements; comparisons are registered in the BIPM KCDB with public progress reporting; withdrawal from a key comparison is generally not allowed.
- **Source:** BIPM, "Measurement comparisons in the CIPM MRA," document CIPM MRA-G-11 v1.1 (supersedes MRA-D-05).
- **URL:** https://www.bipm.org/documents/20126/43742162/CIPM-MRA-G-11.pdf/9fe6fb9a-500c-9995-2911-342f8126226c (earlier D-05: https://www.nim.ac.cn/sites/default/files/inline-files/01-CIPM-MRA-D-05.pdf)
- **Date:** 2021-01-18 (G-11 v1.1); D-05 March 2016
- **Excerpt (verbatim, G-11):** "The method used to determine the key comparison reference value is part of the protocol of the comparison and is agreed by the Consultative Committee or by the appropriate working group to which the Consultative Committee has delegated this task." … "Participation in 'pilot studies' running in conjunction with comparisons shall be agreed before the comparison measurements start." … (Table 1, Approval of reports) "Withdrawal is generally not allowed."
- **Context:** LOC-1 can cite the CIPM MRA as field-native precedent for: pre-agreed evaluation method, registry with timestamps (KCDB), pilot-phase data excluded from the confirmatory value, and a no-withdrawal norm that functions like an outcome-independent publication commitment.
- **Confidence:** High.

---

## D. Randomization-schedule custody practices

### D1. The operative principle: generation and concealment are separate; the allocator must not know upcoming assignments

- **Claim:** Credible randomization requires (i) an unpredictable sequence and (ii) concealment of that sequence until assignment; the person performing enrollment/allocation must be unable to know the next assignment.
- **Source:** SPIRIT 2013 / CONSORT explanatory guidance, Item 22 "Allocation concealment mechanism" (consort-spirit.org).
- **URL:** https://www.consort-spirit.org/spiriteande21a/item-22-allocation-concealment-mechanism
- **Date:** SPIRIT 2013 guidance (page accessed for this report)
- **Excerpt (verbatim):** "Successful randomisation in practice depends on two interrelated aspects: adequate generation of an unpredictable allocation sequence and concealment of that sequence until assignment occurs. A key issue is whether the schedule is known or predictable by the people involved in allocating participants to the comparison groups. The treatment allocation system should thus be set up so that the person enroling participants does not know in advance which group assignment the next person will receive, a process termed allocation concealment. Proper allocation concealment shields knowledge of forthcoming assignments, whereas proper random sequences prevent correct anticipation of future assignments based on knowledge of past assignments."
- **Context:** Directly portable: whoever executes LOC-1's position assignments at the apparatus must be unable to predict the schedule.
- **Confidence:** High.

### D2. Custody implementations: independent statistician + independent custodian; SNOSE envelopes; secure server + telephone custodian

- **Claim:** Standard custody patterns: sequence generated by an independent statistician, held by a custodian with no other trial role, released sequentially (sequentially numbered, opaque, sealed envelopes — SNOSE — with tamper-evident labels), or held on a secure server inaccessible to recruiters with telephone release.
- **Source:** Representative RCT methods sections (Springer Trials 2026; Dove Press JPR protocol 2026; Cochrane risk-of-bias quote archive).
- **URL:** https://link.springer.com/article/10.1186/s13741-026-00673-6 ; https://www.dovepress.com/acupotomy-for-cervical-spondylosis-related-neck-pain-a-study-protocol--peer-reviewed-fulltext-article-JPR ; https://www.cochranelibrary.com/es/cdsr/doi/10.1002/14651858.CD013631.pub2/references/id
- **Date:** 2026-04-15 (Springer); 2026-09-11 (Dove); Cochrane review 2023-10-23
- **Excerpt (verbatim, Springer):** "the randomization sequence generated by the software was printed by a quality control investigator and placed into sequentially numbered, opaque, sealed envelopes, which were kept by an independent randomization custodian. After a patient was enrolled, the investigator contacted the custodian by telephone, who then opened the next envelope in sequence and disclosed the group assignment."
- **Excerpt (verbatim, Dove Press):** "Allocation concealment will be maintained using sequentially numbered, opaque, sealed envelopes (SNOSE) with tamper-evident labels. These envelopes will be prepared and securely stored by personnel who are not involved in participant recruitment, eligibility assessment, or intervention delivery."
- **Excerpt (verbatim, Cochrane archive quoting a trial):** "A computer–generated blocked randomization list with blocks of size 2 was produced by an external statistical consultant and maintained on a secure server not accessible to those recruiting for the trial. Random allocation was performed by telephoning the list custodian, who reported the next numbered supplement kit in the list."
- **Context:** For LOC-1 the digital analog is: schedule generated with a recorded seed by a custodian outside the analysis team; committed to OSF (hashed/embargoed) *before* the run; revealed to operators only at assignment time; full schedule disclosed at unblinding. The physics-native equivalents are the LIGO Blind Injection Envelope and the g-2 twin sealed envelopes (§C2–C3).
- **Confidence:** High.

### D3. Blinding layers can persist through analysis (assessor/statistician blinding with coded labels)

- **Claim:** When full blinding is infeasible, trials keep outcome assessors and statisticians blind with non-descriptive group codes until analysis completion and database lock; emergency unblinding is proceduralized and logged.
- **Source:** International Journal of Surgery Protocols (LWW), triple-masking protocol.
- **URL:** https://journals.lww.com/10.1097/SP9.0000000000000056
- **Date:** 2025-10-07
- **Excerpt (verbatim):** "Pre-registered analysis scripts (SAS v9.4) executed on pseudonymized datasets; Group labels encoded as non-descriptive identifiers (A/B/C/D) during analysis phase; Interim analyses conducted through blinded data review committees … The original allocation sequence remains accessible solely to the trial pharmacist and one independent data custodian, both physically separated from clinical teams. Full unmasking occurs post-database lock following completion of 30-day follow-up for all participants."
- **Context:** Maps to LOC-1: analyze with position labels coded (A/B), freeze the analysis ("database lock"), then unblind.
- **Confidence:** High.

---

## E. Statistical power / smallest-effect-of-interest reasoning

### E1. SESOI concept and justification hierarchy

- **Claim:** A smallest effect size of interest (SESOI) is the smallest effect considered practically/theoretically meaningful; benchmark-based justifications (e.g., "medium effect") are the weakest defensible choice; stronger justifications derive from theory, instrumentation limits, or the "small telescopes" rule (SESOI = effect the original study had only 33% power to detect).
- **Source:** Lakens, "Justifying the Smallest Effect Size of Interest" (Equivalence Testing tutorial repo); Lakens, *Improving Your Statistical Inferences*, ch. 8 (Sample Size Justification).
- **URL:** https://github.com/Lakens/Equivalence-Testing-for-Psychological-Science/blob/master/sectionJustifying_th.md ; https://lakens.github.io/statistical_inferences/08-samplesizejustification.html
- **Date:** 2017-10-19 (GitHub chapter); book chapter continuously updated (2022)
- **Excerpt (verbatim):** "Relying on a benchmark is the weakest possible justification of a SESOI, and should be avoided. … Simonsohn (2015) recently proposed to set the SESOI to 33% of the effect size an earlier study could detect based on the sample size."
- **Excerpt (verbatim, Lakens ch. 8):** "The minimal statistically detectable effect is the smallest effect size that, if observed, would yield a statistically significant p-value. … Whether such effect sizes are interesting, and can realistically be expected, should be carefully considered and justified."
- **Context:** For LOC-1 the physics-native analog of SESOI is the *minimum detectable displacement/effect given noise floor and integration time* — i.e., the sensitivity budget. The protocol should state it explicitly, with a justification tied to instrument uncertainty, not convention.
- **Confidence:** High.

### E2. RR venues enforce prospective power; sensitivity analyses acceptable when priors are unreliable

- **Claim:** RR Stage 1 review asks for prospective power analysis (PCI RR commonly requires 90–95%); where prior effect estimates are unreliable or inflated, a *sensitivity* power analysis (report the minimum effect detectable at fixed N, α, power) is an accepted substitute — and observed effect sizes from small pilots should not anchor power (inflation risk).
- **Source:** eLife peer-review record documenting current methodological recommendations (Anderson, Kelley & Maxwell 2017; Albers & Lakens 2018; Lakens 2022); PCI RR review exchange.
- **URL:** https://elifesciences.org/reviewed-preprints/90013/reviews ; https://rr.peercommunityin.org/articles/rec?id=378
- **Date:** 2026-01-08 (eLife reviews page); 2023-09-25 (PCI RR record)
- **Excerpt (verbatim, eLife review response):** "we did not base our analyses on previously reported effect sizes, as these can carry considerable uncertainty, particularly for novel effects where robust estimates are lacking. Instead, we used sensitivity analyses … Sensitivity analyses allow us to report effect sizes that our design was adequately powered (90%) to detect, given the actual sample size, desired power level, and the statistical test used in each experiment … we also report the smallest effect size of interest (SESOI) that these tests could reliably detect."
- **Context:** Gives LOC-1 a defensible template when the literature offers no trustworthy effect size: fix measurement time/N from resource constraints, then preregister the sensitivity curve (power vs. effect size) and the SESOI it implies.
- **Confidence:** High.

### E3. Equivalence testing makes null results informative

- **Claim:** Equivalence testing (two one-sided tests) lets researchers statistically *reject* effects larger than the SESOI, converting a null result into evidence of practical absence — the inferential machinery that makes "publish null results" substantive rather than a non-finding.
- **Source:** Lakens, Scheel & Isager 2018 tutorial tradition as used in practice; reflection article in *Journal of Trial and Error*.
- **URL:** https://online.ucpress.edu/collabra/article/9/1/73641/195906/ ; https://journal.trialanderror.org/pub/attentional-bias
- **Date:** 2023-01-03 (Collabra); 2025-11-02 (JOTE)
- **Excerpt (verbatim, JOTE):** "Equivalence testing enables researchers to statistically reject the presence of effects smaller than a predefined smallest effect size of interest, allowing them to demonstrate that the difference between two groups is not practically meaningful, rather than merely showing that one group is not significantly different from the other. However, while equivalence testing provides a stronger inference than simply failing to reject the null hypothesis, its effectiveness depends critically on establishing a well-justified smallest effect size of interest (SESOI)."
- **Context:** LOC-1 should pair its null-result commitment with pre-specified equivalence bounds (or, in the physics idiom, an upper-limit construction such as Feldman–Cousins / Lokhov–Tkachov as used by KATRIN, §C4).
- **Confidence:** High.

---

## F. Published critiques: how preregistration goes wrong

### F1. PARKing — preregistration after results are known (undetectable, so design against it)

- **Claim:** Yamada (2018) catalogs how pre-registration can be "cracked": selective reporting, infinite re-experimentation, over-issuing of registrations, and PARKing (pre-registering after the results are known); PARKing is currently undetectable by journals, and even data timestamps can be forged.
- **Source:** Yamada, Y., "How to Crack Pre-registration: Toward Transparent and Open Science," *Frontiers in Psychology* 9:1831.
- **URL:** https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2018.01831/full
- **Date:** 2018-09-26
- **Excerpt (verbatim):** "Another method is an approach that I call pre-registering after the results are known (PARKing). Researchers engaging in this practice complete an experiment (possibly with infinite re-experimentation) before pre-registering and write an introduction that conforms to their previously obtained results. … Furthermore, even if all unprocessed data are shared in a repository, the time stamps of uploaded data files can easily be forged or tampered with in various ways, such as by changing the system date for the operating system that is handling the data file. Therefore, there is currently no method for journals or reviewers to detect PARKing."
- **Context:** Because self-attestation cannot defeat PARKing, LOC-1 should rely on *external* anchoring: OSF embargoed registration with DOI before data exist, third-party custody of the randomization schedule, and (ideally) RR Stage 1 review — which is precisely what PCI RR "Level 6" bias control certifies (§B3).
- **Confidence:** High.

### F2. Sham proposals under review — PARKing works against reviewed preregistration too

- **Claim:** Even journal-reviewed preregistration can be undermined by investigators who have already completed the study and describe known outcomes as predictions.
- **Source:** "Neuroscience Needs to Test Both Statistical and Scientific Hypotheses," *Journal of Neuroscience* 42(45):8432.
- **URL:** https://www.jneurosci.org/content/42/45/8432
- **Date:** 2022-11-09
- **Excerpt (verbatim):** "In PARKing, investigators 'propose' to do a well-planned and tightly-controlled study that they have in fact already done. Knowing how their experiments turned out, they can describe their methods, 'expected results,' analytic procedures, etc., for preregistration review. Once their sham proposal has been accepted, the investigators report their previously gathered data with publication guaranteed."
- **Context:** Reinforces that RR review is necessary but not sufficient; custody and timestamp evidence must be *structural*, not testimonial.
- **Confidence:** High.

### F3. Preregistration without a sufficiently detailed analysis plan does not reduce p-hacking (empirical)

- **Claim:** Across 15,992 test statistics from economics RCTs, preregistration alone showed no reduction in p-hacking/publication bias; only preregistrations accompanied by a complete pre-analysis plan (PAP) did. Registrations were often too vague to constrain post-data decisions.
- **Source:** Brodeur, Cook, Hartley & Heyes, "Do Pre-Registration and Pre-Analysis Plans Reduce p-Hacking and Publication Bias? Evidence from 15,992 Test Statistics and Suggestions for Improvement," *Journal of Political Economy: Microeconomics* 2(3):527–561.
- **URL:** https://research.birmingham.ac.uk/en/publications/do-pre-registration-and-pre-analysis-plans-reduce-p-hacking-and-p-2/ (working paper: https://www.rwi-essen.de/fileadmin/user_upload/RWI/Publikationen/I4R_Discussion_Paper_Series/101_I4R_Brodeur_Cook_Heyes_Hartley.pdf)
- **Date:** 2024-03-15 (journal version); I4R DP 2024-01-12
- **Excerpt (verbatim):** "(a) Pre-registration frequently does not involve a pre-analysis plan (PAP), or sufficient detail to constrain meaningfully the actions and decisions of researchers after data is collected. Consistent with this, we find no evidence that pre-registration in itself reduces p-hacking and publication bias. (b) When pre-registration is accompanied by a PAP we find evidence consistent with both reduced p-hacking and publication bias."
- **Context:** The single most decision-relevant empirical finding for LOC-1: the registered protocol must contain an executable-level analysis plan (models, estimators, exclusion rules, inference criteria), not just hypotheses.
- **Confidence:** High.

### F4. Preregistration is not a panacea; theory–model mapping still governs diagnosticity

- **Claim:** Szollosi et al. (2020) argue preregistration does not fix poor diagnosticity of tests when statistical models map weakly onto theory, and does not by itself improve the quality of theories, methods, or analyses.
- **Source:** Szollosi, Kellen, Navarro, Shiffrin, van Rooij, Van Zandt & Donkin, "Is Preregistration Worthwhile?" *Trends in Cognitive Sciences* 24(2):94–95 (as characterized in the reform literature).
- **URL:** https://pubmed.ncbi.nlm.nih.gov/31892461/ ; characterization: https://arxiv.org/html/2104.02015v2
- **Date:** 2020-02 (TICS)
- **Excerpt (verbatim, from the arXiv characterization):** "Szollosi et al. (2020) argue that preregistration does not directly solve the problem of poor diagnosticity of statistical tests when exploratory findings are confirmed, since these depend critically on how well statistical models map to underlying theories, nor is there good reason to believe that it will encourage researchers to reflect more deeply on their theories, methods, and analyses."
- **Context:** For LOC-1: preregistration constrains *procedure*; the physics case for the measurement (systematics model, calibration chain) must independently be sound. (Also see Pham & Oh 2021, "Preregistration is neither sufficient nor necessary for good science," *J. Consumer Psychology* 31:163–176.)
- **Confidence:** High for the existence and content of the critique; the direct excerpt is from a secondary (but scholarly) characterization.

### F5. Permissive deviation policies quietly re-inflate Type I error

- **Claim:** If a preregistered procedure permits ad hoc "validity-enhancing deviations," the effective number of tests becomes unknown, so the procedure's actual Type I error rate — and hence the severity of the test — cannot be transparently evaluated.
- **Source:** Rubin, M., "Preregistration does not improve the transparent evaluation of severity in Popper's philosophy of science or when deviations are allowed," *Meta-Psychology* (2024).
- **URL:** https://www.researchgate.net/publication/383308354_Preregistration_does_not_improve_the_transparent_evaluation_of_severity_in_Popper's_philosophy_of_science_or_when_deviations_are_allowed
- **Date:** 2024-09-04 (online)
- **Excerpt (verbatim):** "a preregistered test procedure that allows sample-based validity-enhancing deviations in its implementation will include an unknown number of deviations during a hypothetical long run of random sampling. These deviations will cause an unknown inflation of the procedure's Type I (familywise) error rate and, consequently, an unknown reduction of its capability to license Mayoian severity."
- **Context:** Practical upshot for LOC-1: pre-specify a *bounded* deviation policy — allowed deviation classes, a decision tree (§A4), mandatory deviation log with timestamps, and a pre-committed sensitivity analysis over plausible deviations. This is the middle path between rigid adherence (impossible in real apparatus work) and open-ended amendment (which voids the registration).
- **Confidence:** High (peer-reviewed; consistent with Willroth & Atherton 2024 deviation-reporting guidance).

### F6. HARKing: the procedural (not statistical) nature of the remedy

- **Claim:** HARKing is reverse-engineering hypotheses from seen results; it inflates false positives by violating the independence of hypothesis and data, and the remedy is procedural (preregistration separating confirmatory from exploratory), not post-hoc statistical correction.
- **Source:** "Preregistration in experimental linguistics: applications, challenges, and limitations," *Linguistics* (De Gruyter, 2021); abstractopedia HARKing entry.
- **URL:** https://www.degruyter.com/document/doi/10.1515/ling-2019-0048/html?lang=en ; https://abstractopedia.org/domain-specific/harking/
- **Date:** 2021-09-01 (De Gruyter)
- **Excerpt (verbatim, De Gruyter):** "Researchers HARK when they present relationships that have been obtained after data collection as if they were hypothesized in advance, i.e., they reframe exploratory indications as confirmatory results. Researchers selectively report when they explore different analytical options until significant results are found … The consequence of this (often unintentional) behavior is an inflation of false positives in the literature."
- **Context:** LOC-1's protocol should explicitly allocate a labeled exploratory tier (serendipitous anomalies are fine if labeled), which physics collaborations already practice via staged unblinding.
- **Confidence:** High.

---

## G. Concrete recommendations for LOC-1's registered protocol structure

Derived from the evidence above; each item cites its basis.

1. **Two-layer registration.** (i) OSF Preregistration (full template: Study Information / Design Plan / Sampling Plan / Variables / Analysis Plan / Other), frozen and DOI'd *before* any position-dependent data exist, optionally under ≤4-year embargo to protect the blind [^2^][^3^]. (ii) Submit the same protocol for Stage 1 review via **PCI Registered Reports** (discipline-agnostic, STEM-eligible, free; IPA honored by PCI-RR-friendly journals such as Royal Society Open Science), targeting **Level 6 bias control** ("no part of the data … yet exists"); after IPA, lodge the accepted protocol under OSF's "Registered Report Protocol Preregistration" template [^4^][^5^][^6^].
2. **Executable analysis plan, not just hypotheses.** The Brodeur et al. (2024) result shows registration without a constraining PAP does not reduce p-hacking [^12^]. Include: estimators with exact formulae; exclusion/quality-cut rules; inference criteria (α, sidedness, multiple-comparison handling); the randomization seed-handling procedure; and code or pseudocode sufficient to "exactly replicate the proposed … analysis pipeline" per Stage 1 criterion 4 [^4^].
3. **Blinding design in the physics idiom.** Choose from the Klein–Roodman taxonomy [^8^]: for LOC-1 (position assignments) the natural choices are (a) *hidden answer*: a secret offset/label permutation applied to assignment identities (KTeV/g-2 pattern), and (b) *holdout prescale*: reserve e.g. 20–30% of runs (SNO pattern) or develop on MC/"twin" data first (KATRIN pattern) [^9^][^10^][^11^].
4. **Custody of the randomization schedule and blinding secrets.** Separate generation from use: schedule generated by a custodian outside the analysis team; committed as a hash to OSF before the run (timestamped, embargoed); physical/digital redundancy (g-2's two sealed envelopes in two cities; LIGO's Blind Injection Envelope); release to operators only at assignment time (SNOSE/telephone-custodian analog); full disclosure at unblinding [^14^][^15^][^16^][^9^][^10^].
5. **Gated unblinding protocol.** Pre-specify unblinding gates: (i) analysis chain validated on MC twins / open calibration injections (KATRIN, LIGO hardware-injection practice) [^11^][^14^]; (ii) background/sideband or negative-control consistency checks (PADME pattern; RR "outcome-neutral tests" requirement) [^10^][^4^]; (iii) a formal governance act (collaboration vote, g-2 style) with a documented, single unblinding event; (iv) a contingency clause for breakdown ("There is no reason to publish a result known to be wrong, just because the analysis was done blindly. Just publish an account of what you did." — Feldman, MINOS blinding talk) [^17^].
6. **Power/sensitivity section in physics terms.** State the SESOI as the minimum physically meaningful effect (e.g., minimum detectable position-dependent shift given the noise budget), justify it from instrument uncertainty rather than benchmarks, and attach a sensitivity/power curve over effect sizes (sensitivity-analysis style) since literature priors are unreliable [^18^][^19^]. Target ≥90% power at the SESOI where the venue requires it (PCI RR norms) [^4^][^19^].
7. **Null-result machinery.** Commit in the protocol to (a) equivalence bounds / an upper-limit construction (Feldman–Cousins or Lokhov–Tkachov, as KATRIN used) so a null is a quantitative result, and (b) publication regardless of outcome — structurally guaranteed if the RR route (IPA) is used, and field-precedented in metrology by the CIPM "withdrawal is generally not allowed" norm [^20^][^11^][^7^].
8. **Deviation governance.** Pre-commit a bounded amendment policy: allowed deviation classes; a preregistered decision tree for contingent choices; a timestamped deviation log (Willroth & Atherton-style reporting); all post-unblinding analyses labeled exploratory; and a pre-planned sensitivity analysis over plausible deviations to bound the severity cost identified by Rubin [^3^][^13^][^21^].
9. **Anti-PARKing posture.** Because PARKing is undetectable after the fact, make non-prior-knowledge *structural*: registration DOI predating data existence, third-party schedule custody, PCI RR Level 6 certification, and (optionally) timestamped raw-data hashes deposited during collection [^22^][^23^][^6^].
10. **Cite field-native precedent.** Anchor the protocol's legitimacy in physics/metrology practice (Klein & Roodman; LIGO envelopes; g-2 envelopes; KATRIN model blinding; CIPM MRA protocols) rather than importing the psychology framing wholesale — this eases referee acceptance in physics venues [^8^][^9^][^10^][^11^][^7^].

---

## References

[^1^]: Nosek, Ebersole, DeHaven & Mellor (2018). The Preregistration Revolution. *PNAS* 115(11):2600–2606. https://www.pnas.org/doi/10.1073/pnas.1708274114 (2018-03-13).
[^2^]: OSF Help Guide. Welcome to Registrations & Preregistrations! https://help.osf.io/article/330-welcome-to-registrations (2022-01-26).
[^3^]: Center for Open Science (2025). Choosing the Right Preregistration Template: A Guide for Researchers. https://www.cos.io/blog/choosing-preregistration-template-guide-for-researchers (2025-04-24). See also https://timebinder.io/blog/preregistration-vs-timestamp/ on OSF freezing/embargo/DOI mechanics.
[^4^]: Taylor & Francis Author Services (reproducing COS criteria). Registered Reports. https://authorservices.taylorandfrancis.com/publishing-your-research/peer-review/registered-reports/ ; format definition: https://www.medrxiv.org/content/10.1101/2022.08.02.22278318v2.full-text (2022-12-21); CASRAI guide: https://casrai.org/guides/registered-reports-publishing-format (2026-08-24).
[^5^]: OSF registration workflow/templates detail: Cook et al., "A How-To Guide for Open-Science Practices in Special Education Research," https://pmc.ncbi.nlm.nih.gov/articles/PMC9426775/ ; Giehl et al., *Lancet Digital Health* 2024, https://www.thelancet.com/pdfs/journals/landig/PIIS2589-7500(24)00069-4.pdf.
[^6^]: FORRT glossary. PCI Registered Reports. https://forrt.org/glossary/english/pci_registered_reports/ (updated 2026-08-05); PCI RR platform: https://rr.peercommunityin.org/ ; PeerJ–PCI RR announcement: https://peerj.com/blog/post/115284884044/peerj-journals-support-peer-community-in-registered-reports/ (2021-04-19).
[^7^]: BIPM. Measurement comparisons in the CIPM MRA, CIPM MRA-G-11 v1.1. https://www.bipm.org/documents/20126/43742162/CIPM-MRA-G-11.pdf/9fe6fb9a-500c-9995-2911-342f8126226c (2021-01-18); predecessor CIPM MRA-D-05 (March 2016): https://www.nim.ac.cn/sites/default/files/inline-files/01-CIPM-MRA-D-05.pdf.
[^8^]: Klein, J. R. & Roodman, A. (2005). Blind Analysis in Nuclear and Particle Physics. *Annu. Rev. Nucl. Part. Sci.* 55:141–163. https://www.pp.rhul.ac.uk/~cowan/stat/annurev.nucl.55.090704.pdf .
[^9^]: Muon g-2 design/overview (2019): https://arxiv.org/html/1905.00497v2 ; final results (2025-06-02): https://muon-g-2.fnal.gov/result2025.pdf ; LNF 2021 slides (unblinding of 2021-02-25): https://agenda.infn.it/event/27294/contributions/140654/attachments/83992/110980/MS_210421_gm2atLNF.pdf .
[^10^]: PADME Collaboration (2025). Blind unblinding procedure for the PADME X17 data sample. https://arxiv.org/html/2503.05650v1 (2025-03-07).
[^11^]: Aker, M. et al. (KATRIN) (2021). Analysis methods for the first KATRIN neutrino-mass measurement. https://arxiv.org/abs/2101.05253 (2021-01-13); KATRIN review: https://arxiv.org/pdf/2203.08059 (2022); TUM dissertation on KATRIN blinding: https://mediatum.ub.tum.de/doc/1659153/document.pdf .
[^12^]: Brodeur, Cook, Hartley & Heyes (2024). Do Pre-Registration and Pre-Analysis Plans Reduce p-Hacking and Publication Bias? Evidence from 15,992 Test Statistics and Suggestions for Improvement. *J. Political Economy Microeconomics* 2(3):527–561. https://research.birmingham.ac.uk/en/publications/do-pre-registration-and-pre-analysis-plans-reduce-p-hacking-and-p-2/ (2024-03-15); I4R DP 101: https://www.rwi-essen.de/fileadmin/user_upload/RWI/Publikationen/I4R_Discussion_Paper_Series/101_I4R_Brodeur_Cook_Heyes_Hartley.pdf .
[^13^]: Rubin, M. (2024). Preregistration does not improve the transparent evaluation of severity … or when deviations are allowed. https://www.researchgate.net/publication/383308354 (2024-09-04); deviation-reporting guidance: Willroth & Atherton (2024), doi:10.1177/25152459231213802.
[^14^]: LIGO Scientific Collaboration. "Blind injection" stress-tests LIGO and Virgo's search for gravitational waves. https://ligo.org/blind-injection/ ; Biwer et al. (2017). Validating gravitational-wave detections: The Advanced LIGO hardware injection system. *Phys. Rev. D* 95, 062002. https://link.aps.org/accepted/10.1103/PhysRevD.95.062002 ; Blackburn thesis: https://dcc.ligo.org/public/0014/P1000093/001/lindy_blackburn_thesis.pdf .
[^15^]: SPIRIT/CONSORT explanatory guidance, Item 22 Allocation concealment mechanism. https://www.consort-spirit.org/spiriteande21a/item-22-allocation-concealment-mechanism .
[^16^]: Custody exemplars: Springer *Trials* RCT (2026-04-15) https://link.springer.com/article/10.1186/s13741-026-00673-6 ; Dove Press JPR protocol (2026-09-11) https://www.dovepress.com/acupotomy-for-cervical-spondylosis-related-neck-pain-a-study-protocol--peer-reviewed-fulltext-article-JPR ; Cochrane RoB archive (2023-10-23) https://www.cochranelibrary.com/es/cdsr/doi/10.1002/14651858.CD013631.pub2/references/id ; triple-masking protocol, *Int. J. Surgery Protocols* (2025-10-07) https://journals.lww.com/10.1097/SP9.0000000000000056 .
[^17^]: Feldman, G. (2005). Blind Analysis in MINOS (talk notes). http://physics.bu.edu/neppsr/2005/Talks/Blind_Analysis_Feldman.pdf (2005-06-13).
[^18^]: Lakens, D. Justifying the Smallest Effect Size of Interest. https://github.com/Lakens/Equivalence-Testing-for-Psychological-Science/blob/master/sectionJustifying_th.md (2017-10-19); Lakens, D. (2022). Sample Size Justification, ch. 8 of *Improving Your Statistical Inferences*. https://lakens.github.io/statistical_inferences/08-samplesizejustification.html .
[^19^]: eLife reviewed-preprint review record (sensitivity power analysis + SESOI practice). https://elifesciences.org/reviewed-preprints/90013/reviews (2026-01-08); PCI RR review exchange (90% power norm): https://rr.peercommunityin.org/articles/rec?id=378 (2023-09-25).
[^20^]: Equivalence testing in practice: Collabra (2023-01-03) https://online.ucpress.edu/collabra/article/9/1/73641/195906/ ; *Journal of Trial and Error* (2025-11-02) https://journal.trialanderror.org/pub/attentional-bias .
[^21^]: De Gruyter, *Linguistics* (2021). Preregistration in experimental linguistics: applications, challenges, and limitations. https://www.degruyter.com/document/doi/10.1515/ling-2019-0048/html?lang=en (2021-09-01).
[^22^]: Yamada, Y. (2018). How to Crack Pre-registration: Toward Transparent and Open Science. *Front. Psychol.* 9:1831. https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2018.01831/full (2018-09-26).
[^23^]: *J. Neuroscience* 42(45):8432 (2022). Neuroscience Needs to Test Both Statistical and Scientific Hypotheses. https://www.jneurosci.org/content/42/45/8432 (2022-11-09); Szollosi et al. (2020), *TICS* 24(2):94–95, https://pubmed.ncbi.nlm.nih.gov/31892461/ ; characterization in https://arxiv.org/html/2104.02015v2 ; Pham & Oh (2021), *J. Consumer Psychology* 31:163–176.
[^24^]: Blind-analysis toolkit in cosmology: arXiv:0909.2649 (2009), https://arxiv.org/pdf/0909.2649 .
