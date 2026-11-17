# Five-panel round 4 — actual offline/PDF and lifecycle review

Reviewed the compiled artifact pinned in `artifacts/round3.json` and actual exported packet set. This is round 4 of 5; final release/Docker evidence remains a round-5 gate.

## Actual execution evidence

Verified all 55 exported file hashes against the set manifest and parsed all eleven PDFs with pdfinfo: each had pages and no PDF JavaScript. Visually inspected the coupled-coil first page, extracted the coupled/witness PDF text and examined a rendered frozen-contract table. The packet set preserves record IDs, authored revision, source geometry/proposal status, exact source pins, source/served distinction and explicit unknown specifications. No source scenario or manufacturing approval is inferred from a diagram.

Separately executed the actual HTML packet in an offline Chromium context. Its inert SVG decoded without any external request, no script was present, all 42 coupled field rows existed, and the source_peak_V row displayed the stipulated 1 V peak rather than the host RMS value. Exact offline results are in `round4-packet-offline.json`.

Reviewed source-bound drafts and the curator's explicit-action browser evidence: save/load/delete do not autosave, a changed source is not silently restored or overwritten, and invalid geometry disables generated exports while preserving immutable source links. No new lifecycle blocker was found.

## Real findings and corrections

1. The PDF component table exposed JSON `null` for unknown turn/radius/length fields. The human renderer now prints **Not specified**; JSON/source values remain unchanged.
2. The research specialist found actual page-spanning table rows and an orphan section-label suffix. Print CSS now avoids breaking rows, repeats headers, gives the field column 22% width and breaks field identifiers at underscore opportunities. A separately rendered corrected PDF and its field-page image show complete rows, readable source_peak_V/parameters labels and unchanged 1 V peak. This is print layout, not a correction to physics.
3. Derived dimensions exposed floating-point tails. Authored dimension labels now display ten significant digits with a visible rounding note; exact JSON scenario/source values are preserved. The curator separately applies the same UI-only display policy.

Ten packet native tests and five draft tests pass; targeted lint passes. A regression asserts readable rounded HTML while JSON retains the original floating-point value. Current corrected source hashes and actual PDF metadata/file verification are in `round4-architecture-validation.json`. The root must regenerate the complete packet set from this changed renderer before final round-5 release acceptance.

No neighboring source, notebook core, App or package declarations were edited by this role. No deployment or hardware operation occurred.
