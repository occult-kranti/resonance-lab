# Five-panel sequence — round 4, physics and mathematics pedagogy

## Changed export artifact inspected

This round inspected the actual generated packet files in `docs/five-panels/blueprint-packets`, not only the live dictionary or mapping counts. Eleven record packets exist in each of HTML, SVG and PDF; JSON/Markdown directories also contain index and shared handbook files, which are not counted as extra apparatus records.

An executed audit compared every portable handbook field's `valueOrNull` with the corresponding embedded frozen source `record[section][key]`, and checked `hasValue`. All **60 field values matched**, with no missing values or changed conventions. Spot checks included:

- R1 `source_peak_V`: numeric `1`, unit `V peak`.
- R2 `squared_magnitudes`: source description and unit `A²`.
- R3 `Delta_a` and `transfer_error_bound`: dimensionless; the supplied transfer bound remains `0.02`.
- R3 `crossleak_path_t`: `[0,0.25,0.5,0.9,0.99,1,1.01,1.1]`, dimensionless, not seconds.

The generated coil and witness PDFs were read through `pdftotext`. Their actual text retains the source's 1 V peak versus host 0.15 V RMS / approximately 0.212 V peak explanation, the pure-sine convention caveat, voltage-versus-transfer units, and dimensionless leakage-path `t` distinct from time. The text extractor can split long keys/units across table lines; this is not reported as a missing source field. Full visual layout is checked separately by the root's browser/screenshot pass.

## Real integration defect corrected

The strict portable JSON validator rejected native terms because the term builder explicitly emitted `equation: undefined` for entries without an equation. Source-only mapping tests and pre-generated serialized files did not expose this reusable-API failure. The research peer reproduced it through `buildHandbook → createPacket`.

The owned term builder now omits the optional equation property when absent. No portable validator was weakened. A new regression iterates all eleven actual record contexts, runs `validateBlueprintPortable`, and verifies an exact JSON round trip. The combined terminology, handbook and packet native run executed **21 passing tests**, no skips or expected failures. This repair changes serialization only; scientific definitions, numerical models and source contracts remain unchanged.

## Artifact identities at inspection

- Revised terminology: `15a5143f25c6fcbf516f137d27dd6b4e36864b2185813899012796768dd5653e`
- Coupled-coil packet JSON: `965d6bee864027dc2ed81910bbde589ea6baadaa8cd14e3a1daf6763b201c08d`
- Coupled-coil packet HTML: `db7a094befcd5ae0d5f4163be64be9ff30b613c90eb09058e9e1ed6fb09df67f`
- Coupled-coil packet PDF: `606f393a1a72330a14c13e7ec65584d5958bb9d350f419d120fadbacdb7a3e97`
- Witness packet JSON: `976b35ea4ff75f52bcd8338866aed943397da3ab38e2bb2d334e69fc3f900968`

These hashes identify inspected files, not evidence that a physical apparatus was built, measured or approved. A subsequent packet regeneration may have a new timestamp/hash and must be identified in the final manifest.

## Next-round boundary

Round 5 must inspect the repaired strict-export behavior and final packet/build identities after the root's rendered workflow checks. No new speculative terms or physics features were added merely to create another panel iteration. The scope remains source-bound documentation, explicit assumptions and portable explanations.
