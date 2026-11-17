# Five-panel round 3 — source-bound durable drafts and complete field packets

Reviewed the actual second compiled artifact pinned in `artifacts/round2.json`. Its studio state was tab-only and its print handbook did not expose every frozen source field. This round changes those artifacts; it does not claim the five-round process is complete.

## Durable source-bound state

Added `studio-drafts.ts` with explicit `readStudioDraft`, `saveStudioDraft` and `deleteStudioDraft` actions. The bounded state is view, unit convention, selected source asset/part, coil-face gap, witness position and zoom. Storage is separate from legacy/notebook keys. Identity binds record ID, source SHA and commit plus geometry, numerical-contract and asset source hashes. Changing any pinned source yields a conflict; neither read nor save silently reapplies or overwrites an old-source draft. Corrupt records remain untouched until explicit deletion. Denied reads/writes/quota errors return visible results while the in-memory studio remains usable. No automatic effect-driven restoration is implemented by this module.

Five native draft checks pass: explicit restoration, source/geometry conflict and no overwrite, corrupt-store preservation/scoped deletion, unavailable storage without tab mutation, and invalid/nonfinite/out-of-range/unsafe-key state rejection. The independent critic additionally tested own/geometry/contract/asset conflicts and denied storage; no new blocker was found.

## Reusable print packets

The packet renderer now includes reviewed frozen-contract field tables, not raw JSON alone: source field/section, frozen value or explicit absence, meaning, unit and convention. Coverage gaps remain visible. The coupled record prints 42 actual fields (R1 26 + R2 16), including the stipulated source value 1 V peak rather than a converted host RMS value. The witness record's 18 fields remain in its own context.

An independent devices review found that the standalone packet API could accept a scenario different from its sketch. Recognized sketch results now require the selected record family, source pins belonging to that record, and a canonically equivalent supplied scenario. The actual studio already supplied coherent state; the reusable API now enforces it. Source records are not mutated.

Actual new handbook DTOs initially carried undefined optional equation fields. The research owner corrected their reusable JSON DTO; the studio already normalized export input. This was a real changed-artifact finding, not a passing claim about the prior artifact.

Nine packet checks and five draft checks pass. The earlier SVG/URL counterexamples remain rejected. TypeScript/targeted lint accompany this gate. Root UI integrates explicit buttons and performs the next compiled/browser check; root/module evidence and final round-4/5 release checks remain separate.

No neighboring repository, notebook core, App or package declarations were edited by this role. No manufacturing, hardware, scientific-validation or deployment claim is made.
