# Five panels · round 4: actual portable and printed guides

Independent Codex AI research/technical-writing review of compiled artifact 3 and the actual generated packet collection. Inspected all eleven JSON/HTML/Markdown/PDF sets for content, extracted actual PDF text, and visually viewed rendered PDF pages from the coupled-coil and witness field tables. This review does not claim human user testing, hardware validation or inspection of every printed page by eye.

## Content and source-value gates

All eleven portable handbooks retain a plain-language goal, signal/force steps, known/unknown statements, prospective measurement checklist, questions and source hierarchy. Actual PDF text from every record retains the goal, **What remains unknown**, the manufacturing-approval limitation, source identity and reading-depth text. Status matches each source record.

The coupled-coil packet has **42** unchanged R1/R2 fields; the witness packet has **18** unchanged R3 fields. An executed comparison checked every exported field value against its actual attached source section/key. All values match. Every expected field identity is present in its HTML `data-contract-field` attribute. The other nine records have no attached R1/R2/R3 field tables; their absence is preserved rather than inventing contracts.

A first exact-string search in layout-preserving PDF text failed for some long field names because the printed labels wrap. That was investigated rather than treated as missing data. Raw PDF reading-order text with whitespace removed contains every expected field key, including `source_peak_V` and `crossleak_path_t`. The complete outcome, including this extraction limit, is retained in `round4-research-content-checks.json`.

The actual printed peak-source row shows **1 / V peak** and explicitly says it is not the host RMS default. The R3 leakage-path row shows a dimensionless value and states `t=1` is singular and this `t` is not time. Frozen reading-status text prints **“This is not a new primary-source reading.”** No source assertion or model parameter became a measured device property during export.

## Actual readability finding

The rendered sample pages have readable column headings, values, physical units, conventions and source limitations. The witness page also preserves its source hierarchy and provenance distinction in ordinary paragraphs. However, the coupled PDF shows an actual row split across pages: a trailing **“rs”** from a broken **“parameters”** label begins the next page. Long field names also wrap at arbitrary letters in the narrow first column. This does not change the numerical value, but it makes the technical packet harder to read.

The packet-renderer owner was asked for a bounded repair: avoid splitting table rows during print, retain repeated table headings and widen the field-name column or break labels at meaningful boundaries. This is a print-rendering change, not a request to change source keys or handbook semantics. Root will regenerate packets; the revised print output is an explicit round 5 acceptance check.

Representative viewed evidence is preserved as:

- `artifacts/research-r4-coupled-page18.png`
- `artifacts/research-r4-witness-page14.png`

These depict the artifact reviewed in this round. They are not updated screenshots of a later packet revision.

## Bounded acceptance

Source content, all eleven guides, the 42+18 actual field values, unknown specifications and interpretation limits are accepted. Original source geometry, authored scenarios, file identities and engineering readiness remain separate. The source inventory still counts fifteen proposal IDs, thirteen active hypotheses and eleven setup/view records. A printable booklet does not turn proposals into working devices.

No handbook-owned semantic repair was necessary in this round. Final print acceptance waits for the renderer revision and regenerated output. Exact sample hashes and review scope are in `round4-research-receipt.json`; browser interaction and root’s screenshot batch are separate evidence.
