# Round 1 · source and object curator

This is an independent AI-agent review by the `research` role in the current Codex team, not human archaeological peer review. Scope is a bounded representative set of acoustic spaces, objects and cultural practices. It is not an inventory of all monuments, all crop formations, or the complete state of research.

## Material inspected

Local code/content inspected: `brainwave_opensync/src/archaeoacoustics/{architecture,india,listening}.ts`, `brainwave_opensync/docs/archaeoacoustics-panel.md`, Crop Circle README, data and previous panel notes. These already make important distinctions between field measurements, scale models, idealized formulas, cultural texts and unsupported pitch assignments. Preserve those distinctions in the integrated product.

Current source access is recorded in `retrieval-log.json`, `additional-retrievals.json` and `tool-cultural-retrievals.json`; retrieved bodies accompany these records. The semantic source ledger is `source-catalog.json`, and a bounded object/input catalogue is `object-catalog.json`. Numerical values in inherited exhibits have not all been independently checked against full papers in this run. No UI should silently promote an abstract or metadata check to a full-paper validation.

## Consequential findings

1. **The existing repositories contain more than a tracker.** Brainwave already has a source-qualified Sound in Stone exhibit, room and staircase models, synthetic listening presets, ritual-sound context and plate comparisons. Crop Circle has a reverse-mode exercise and explicit inverse ambiguity. Link or reuse the tested engines with source revision and license records; avoid a new universal-frequency algorithm that discards those contracts.
2. **Photographs do not identify an object's unique frequency.** Plate patterns depend on elastic properties, thickness, supports, exciter position and anisotropy (open Chladni paper, abstract/introduction read). Image-derived pitch can be an artistic sonification or a candidate match under a specified virtual plate. Material vibration requires geometry, material and mounting; architecture requires room geometry, absorption, source and receiver, or an actual impulse response. These are separate modes of work.
3. **Current research supports auralization and situated listening.** A date-bounded Crossref search found a 2025 Annual Review of Anthropology archaeoacoustics review, 2023 multimedia/VR work, and 2025 fluid–structure Chladni manipulation. Abstracts were read. These are current leads and useful methods, not proof of hidden ancient codes. Search relevance included irrelevant records; only screened records appear in the source ledger.
4. **Culture is data.** The Met identifies Nataraja object 39328 as late-11th-century Tamil Nadu, copper alloy, 68.3 cm high, and its image as public domain. The object record provides no modal measurement. The Māṇḍūkya passage was read in Sanskrit, transliteration and Sri Aurobindo translation: it supplies no fixed pitch for OM. Preserve language, lineage, object attribution and performance tonic. Do not merge mantra, tantra, hieroglyphic writing and personal sigils into one historical claim.
5. **Reddit is currently a lead queue, not a researched corpus.** `www.reddit.com` queries returned HTTP403. `old.reddit.com/r/Cymatics/.json` returned HTTP200 containing a login page, not post JSON. No threads, quotations, popularity counts or consensus claims are reported. A product should expose this failed-access status and let the user attach public thread URLs later.
6. **Open tools have bounded roles.** Pyroomacoustics docs and upstream MIT license were read; image-source/ray-tracing RIR simulation is applicable with declared geometric/material assumptions. scikit-image Radon documentation was inspected for visual projections/registration. Neither tool was installed or exercised in this research task. A scikit-fem destination was denied by the proxy; it is not a verified capability.

## Proposed acceptance gates

- Every catalogue object links to sources and states whether its sound is measured, simulated, or mapped.
- Uploaded crop images and architecture do not automatically receive an intrinsic-Hz label or alien-origin verdict.
- An image match exports its crop, normalization, chosen plate, candidate range, similarity rule and at least one control/null comparison; frequency anchors remain visible.
- A room-mode result exports units, dimensions, boundary assumptions, sound speed, source/receiver where applicable and whether it is an idealized box.
- Cultural records keep origin and language separate from analysis settings. A replica or authorized recording should be used for heritage objects; no destructive excitation is proposed.
- Community links remain visibly inaccessible/unreviewed until real discussion text can be inspected. The source UI must not derive an evidence score from HTTP status alone.
- Sonification audio starts explicitly, stays bounded in duration/level, supports global stop and identifies synthetic content.

## Artifact contract

`source-catalog.json`: `id,title,url,kind,year,readingDepth,status,finding,limit`.

`object-catalog.json`: `id,title,category,culture,description,sourceIds,evidence,analysisMode,frequencyPolicy`; selected entries also have `image,imageCredit,dimensions`.

`nataraja-image.jpg`: downloaded directly from the Met image endpoint, public-domain status confirmed by its object API. Use the supplied credit text, not a generated depiction.

All sources were accessed during this task. Machine retrieval logs use UTC timestamps; user-facing review date is 16 November 2026 in America/New_York.
