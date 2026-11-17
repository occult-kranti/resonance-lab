# Round 3 · revised candidate research acceptance

Reviewer: independent Codex AI-agent research curator. This review inspected the changed source code and source ledger; it is not human peer review, a new physical measurement, or a browser-observed usability study. Exact reviewed file SHA-256 values are in [`round3-research-checks.json`](round3-research-checks.json). The App and DSP were reviewed again after the Round 2 findings; this is a review of an implemented revision, not a third report about an unchanged design.

## Accepted changes

| Round 2 concern | Revised artifact evidence | Verdict |
| --- | --- | --- |
| Individual frequency clamps collapse different candidate intervals | `dsp.ts` retains `rawHz`, calculates one shared `listeningScale` over the six returned candidates, and derives mapped `hz` from it. The App exposes raw pitch, shared scale and mapped pitch in method details. | Accepted as a chosen listening transformation, with ratios preserved by the formula. Root owns executed numerical test results. |
| Scores might be mistaken for physical identification or confidence | DSP method explicitly states absolute Pearson similarity and different circular/square spatial masks. App states scores are uncalibrated across families, exploratory, and not object identification. | Accepted. No calibrated probability or recovered material frequency is claimed. |
| Wrong physical-model vocabulary | App's model selector names circular and square **membranes**; DSP method names fixed-rim and fixed-edge membrane templates. | Accepted. Catalogue references to real Chladni plates describe the source literature, not an assertion that the host's membrane model simulates elastic plates. |
| Catalogue handoff could retain a previous image under a new study title | `explore()` increments the generation token, clears input/analysis/batch/error, sets the title, and says no image or dimensions were inferred from the catalogue. Pending file loads clear their preceding state. | Accepted by code inspection; no stale study result should be relabeled as an imported Nataraja or monument analysis. |
| Reproducibility requires mapping and input identity | Saved image studies include original-file SHA-256 or explicitly named synthetic-pixel digest, original dimensions, preprocessing, model family/anchor, selected candidate, engine-source commit, host source with local-change disclosure, listening scale and gain. | Accepted for reconstructing assumptions. The original image is not persisted: exact replay still requires the user's original bytes. A source commit plus local-change flag is not itself an immutable release of local code. |

## Source and culture acceptance

An executed ledger check found **17 unique source records and 12 object records**, with all nonempty source references resolved. Every source retains a reading-depth statement, access/review status and limit. No calendar/chart object family is present. The Nataraja image in `public/assets/research/` has the same SHA-256 as the downloaded public-domain Met image, and the catalogue keeps its credit and Tamil Nadu/Chola attribution.

The implemented collection calls itself bounded and explicitly says it is not a catalogue of every monument. Reviewed current literature includes a 2025 archaeoacoustics review and a 2025 fluid–structure Chladni abstract. Metadata-only entries, abstracts, selected full-text sections, museum records and the Māṇḍūkya passage remain distinguishable. Source-level numerical claims from uninspected full texts were not promoted into new measurements.

The source collection still reports inaccessible Reddit requests and an HTML login response instead of claiming thread research, quotations or community consensus. A successful HTTP status on the old Reddit route was correctly treated as a login wall. The tantric-diagram placeholder has no verified source text and does not fabricate one.

Selected compact captures now live in [`../research/source-captures/`](../research/source-captures/), with filenames, byte counts and SHA-256 values in its `manifest.json`. This includes the screened Crossref scholarly records, PubMed abstract, Met object metadata, corrected date-bounded search summary and exact retrieval logs. No credential or Reddit user content was copied. The initial broad newest-first query was rejected for future-dated/unrelated hits; the corrected search limits publication dates to 2023-01-01 through 2026-11-16. This is a screened search, not an exhaustive systematic review or proof that the selected method is the sole state of the art.

## Requested exclusions and integration boundary

The host inventory includes all nine connected repositories. `scripts/workspace.mjs` limits the astrology repository's capability scope to sigil geometry and exports. `scripts/serve.mjs` permits only its sigil page and assets through that adapter. No calendar or chart engine was imported into the host's image/room DSP. Repository source links remain navigation to separately preserved work, not a claimed unified physical model.

## Remaining research limits

- A highest-similarity template is always selected from a searched family. There is no representative held-out archaeological image validation, null-distribution calibration, multiple-comparison correction, or inferred confidence level. The synthetic radial control is a demonstrator; proposed research-queue controls remain unexecuted plans.
- The room solver is an ideal rigid rectangular empty cavity. It does not recover irregular monument geometry, a pyramid exterior, statue material modes, real damping, wall transmission, historical occupancy or acoustic sound pressure at a listener.
- New site recordings, apparatus measurements, consented performance data and heritage access were not collected. Hypothetical experiment protocols remain proposed.
- No mode match establishes makers, ancient acoustic intent, alien origin, ritual efficacy, healing, or a universal frequency for a cultural symbol or person.
- Finite file batches and the selected seed collection do not ingest every crop-circle photograph or all monuments automatically. Broader ingestion requires rights-cleared inputs and provenance work.
- The browser's research states are manual local records. They do not constitute autonomous agents conducting studies in the background.

Research verdict: **accept the revised candidate within these explicit bounds**. Wider corpus research and calibrated physical inference remain future work, not completion claims for this release.
