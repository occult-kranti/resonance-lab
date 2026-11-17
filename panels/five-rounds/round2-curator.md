# Five-panel continuation — round 2 curator review and corrections

## Artifact reviewed

The compiled round-1 selected-record Studio replaced the eleven nested dossiers. Before this round's changes, UI file SHA-256 values were:

- `BlueprintStudio.tsx`: `25f23b194b380bdbac250c0c9f7c2b3841941c411e70fadd1f4dbc0f77b8d0db`
- `BlueprintLibrary.tsx`: `65fc45211612d8b6e08e791fb69c12bcd36ca39930407188b1a8f3f299cd97fa`

These identify the first UI artifact; root owns the full compiled-candidate pin. Review is an AI implementation/interaction review, not human user research.

## Findings and implemented changes

1. **A packet needs the selected drawing and a readable explanation.** Round 1 passed only sketch metadata, so a printable packet lacked its authored sketch. The Studio now passes the complete generated sketch through the architecture-owned strict SVG packet sanitizer and embeds the record-specific `buildHandbook` DTO. A new **Read this plan** inspector presents the goal, signal/force sequence, source declarations, explicit unknowns, future measurement checklist and critical questions. This does not turn the source proposal into a validated construction specification.

2. **Selected view and notation must describe what is actually shown.** The active view indication and generated SVG filename now follow the sketch builder's actual supported view; unsupported projections remain disabled with an explanation. Terms show their plain-language meaning and unit immediately, with conventions, precise definitions and cautions behind disclosure. The term search resolves full domain-scoped IDs supplied by component callouts. An executed cross-module check found every generated component term ID within its selected record's terminology scope across all eleven records.

3. **Raw contracts are insufficient explanations of variables.** The Symbols inspector now offers **Every declared variable and parameter**, using the audio specialist's explicit field bindings. Each row keeps the frozen source value beside the plain definition, unit and convention, with buttons to matching scoped terms. Missing source sections or unnormalized fields are displayed as missing rather than interpreted. The upstream peak-phasor versus host RMS distinction stays explicit; no source value is converted or rewritten.

4. **Actual interaction exposed an export defect.** The terminology DTO includes optional undefined equation fields. Strict portable validation correctly rejected them, but the Studio's export handler had passed the raw DTO. The Studio now serializes its known authored DTO before packet creation, omitting optional undefined properties without weakening validation or allowing non-finite geometry. Packet export, printable output and shared-notebook save then succeeded through real browser interactions.

5. **The initial header markup did not fit its container contract.** Grouped header content now sits within the root-owned flex header rather than rendering each paragraph as a peer column. Viewing scale remains a display setting, while per-record scenario state persists during local selection changes. Source-original export downloads the actual selected source asset; generated-view export downloads the active authored sketch.

## Executed checks and limits

An isolated Vite service on port 4181 was used for focused Chromium interaction checks. Evidence is `round2-curator-smoke.json`: selected-view semantics, no hidden asset HEAD requests on initial Studio mount, handbook navigation, immediate contextual units, exposed attached contract fields, only one HEAD request for the selected source drawing, printable HTML with embedded SVG and handbook, notebook scenario save, and no page-wide overflow at 390 px. The expected contract-field count is derived from the actual selected record's frozen `state_and_units` and `parameters` keys, not from a duplicated hardcoded count. Browser page errors are recorded separately.

TypeScript and ESLint passed for the changed UI surfaces. The architecture specialist owns SVG injection/security tests; the audio specialist owns all sixty field-binding coverage tests. These focused checks do not replace root's complete browser/regression gate. This is round 2 of five, not final release acceptance. Durable source-bound drafts, deeper help focus and subsequent changed-artifact reviews remain for rounds 3–5.
