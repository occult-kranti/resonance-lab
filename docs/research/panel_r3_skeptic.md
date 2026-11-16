# ROUND 3 (FINAL) — Dr. E. (Methodologist / Skeptic)

## 1. Final verdict

**Assent, conditional.** The amended design (20.75 kHz solid sphere, Stage-0 gate, 3-sphere + swaps, warm-dummy gate at ≤300 µK with ADEV flat to 1e5 s and no f_mod line >1 mHz, hidden offset, ≥10% shams + ≥5% recovered injections, single confirmatory bin with look-elsewhere control, D's replication clause at same-sign >SESOI both runs / combined p<1e-4) now carries anti-self-deception machinery exceeding most published precision metrology. It has earned the right to take data.

The **both-sides bet survives as a hard requirement** — it is the load-bearing element. The proponent signs the claim sheet (mode, magnitude, sign, disconfirmation condition, update condition) before hardware lock. Signature → experiment proceeds. Refusal → panel proceeds anyway on the as-channeled claim and the final report states verbatim that no update condition was offered; the work is then published as a demonstration, not an experiment. This is non-negotiable and costs the proponent nothing if their claim is sincere.

My honest probability statement for the record: P(true novel effect) is very small [dim10, dim01]; the deliverable is a quotable upper bound plus a reusable template for extraordinary-claim testing. That is a successful outcome, not a consolation prize.

## 2. Motion profile — ruling from the self-deception standpoint

I withdraw my Round-2 Hz-band preference. A/B's objection is decisive on exactly my own criterion: a 10 mN reaction force at f_mod injects a contaminant *coherent at the signal frequency*, and lock-in is structurally blind to coherent contaminants — no amount of averaging separates a real Δf from a vibration-coupled fake at the same frequency. Ring-up τ≈1.5 s compounds it. The hardest-to-alias design is therefore:

- **Primary estimand: D's slow 0.40 m ABBA hops** — time-symmetric cancels linear drift; post-hop settling gate ≥10 s (≈7τ) discards transients; **hop times jittered** (randomized inter-hop intervals) so the schedule itself creates no stable spectral line for drift to alias onto — this is the direct anti-Miller fix.
- **Independent cross-check: C's continuous rotary 3–10 mHz** — different modulation structure, different failure modes. The claim is credible only if *both* estimators, analyzed under separate preregistered pipelines, agree within bounds. Divergence = unresolved systematic, publish as such.
- **Hz-band dither: diagnostic only** — systematics witness, barred from the confirmatory estimand.
- **Universal coherence veto:** any line at the modulation frequency or hop-rate harmonics in the warm dummy or LC witness channel above 1 mHz vetoes the contemporaneous data, automatically, preregistered. Plus **null hops**: motion commanded, stage disabled, ≥5% of hops, blind — the pipeline must null them.

## 3. SESOI digit

**30 mHz**, rule-anchored rather than bare: SESOI = max(30 mHz, 5× demonstrated σ). At σ ≤ 5 mHz, 30 mHz is defensible and quotable ("no shift >30 mHz at 0.40 m displacement, 95%," ≈1.4e-6 fractional at 20.75 kHz). If the empty-chamber/warm-dummy runs deliver only σ ≈ 10 mHz, the rule lifts SESOI to 50 mHz automatically — no post-hoc negotiation. Proponent's committed magnitude overrides upward; a committed magnitude below achievable SESOI renders the claim untestable with this apparatus, which we say and publish.

## 4. Final governance additions (≤10 lines)

1. Claim sheet + both-sides bet signed and hashed on OSF before hardware lock; refusal recorded verbatim.
2. Stage-0 (LDV mode map, Q ≈ 1e5 check) and warm-dummy gate (≤300 µK, ADEV flat to 1e5 s, no f_mod line >1 mHz) pass before position data; results published regardless.
3. Single confirmatory frequency bin; all other bins labeled exploratory with look-elsewhere control.
4. Jittered ABBA schedule, hashed, third-party custody; ≥5% null hops; coherence veto automatic.
5. Two independent estimators (ABBA + rotary), separate frozen pipelines, cross-agreement required.
6. Hidden offset unblinded only at the gated ceremony; ≤2 looks, α=0.01.
7. Raw data immutable and auto-archived; exclusion criteria preregistered with quantitative thresholds only.
8. Internal positive = "unconfirmed anomaly"; no press until independent replication (same-sign >SESOI, combined p<1e-4) on different hardware.
9. Public amendment log: every post-unblinding reinterpretation is a new hypothesis requiring new preregistration.
10. Final report carries the provenance paragraph (below) and the signed claim sheet as supplementary material.

## 5. Provenance paragraph (for the final report)

"This experiment originated from a claim obtained through a non-empirical (channeled) source, which asserted a position-dependent resonance near 230 kHz. The panel treats the provenance as irrelevant to the evidential weight of the result — hypotheses are licensed by their testability, not their origin — while noting that the literal claim as received is falsified on physical grounds before data-taking: a 230 kHz breathing mode is incompatible with a 100 mm copper sphere, for which theory and prior measurement give 10.5–20.75 kHz [dim04, dim05]. With the proponent's written amendment [or: absent the proponent's amendment], the confirmatory test targets the physically real breathing mode at 20.75 kHz. We report this history in full because the credibility of a null experiment rests on the claim being pinned down before, not after, the data; readers should apply the same standard to any future re-specification of the claim."

**Panel verdict: PROCEED — conditional on signature. Absent signature: proceed anyway, publish as demonstration with refusal on record.**
