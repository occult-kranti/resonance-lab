# Five-panel continuation — round 1 architecture diagnosis

Baseline: working v0.3 source and blueprint registry, read-only review at 2026-11-17 04:08–04:11 UTC. This is round 1 of the newly requested five changed-artifact panels; previous rounds are not counted again. The eight neighboring repositories remain clean and unchanged; resonance-lab is the modified integration host. All nine actual local HEAD/status records were checked.

## 1. Introduce one selected-blueprint controller instead of disconnected cards

Evidence: `BlueprintLibrary.tsx` owns search/filter/comparison state and renders eleven record disclosures, but has no selected-record workflow or connection to the notebook. `DeviceBench.tsx` separately owns generic series-RLC inputs and a proposal button selection. Selecting an upstream coupled-coil or environmental-witness record never initializes a corresponding engineering workspace; the generic analogue is correctly qualified but is functionally disconnected. `blueprint-data.ts` already provides stable record IDs, source pins, source-owned geometry, contract snapshots, material records and proposal relations.

Acceptance for the first changed artifact: selecting a record opens a shared studio with a stable record ID and source snapshot/hash, explicit active view and part selection. Switching records clears obsolete selection/results while keeping authored drafts under their own record IDs. Saving and reloading a review through the existing notebook retains selected record, source identity, view, edits/annotations and scope without mutating the original registry. A source blueprint, a chosen annotation and the generic RLC teaching analogue must have visibly distinct identities. Unsupported views should say so; a card count is not an interactive studio.

## 2. Make engineering sketch exports reflect the selected record and authored revision

Evidence: `DeviceBench.tsx` calls `blueprintSvg()` with no selected record or parameters; `device-model.ts:blueprintSvg` returns a single static series-RLC drawing. BlueprintLibrary exports record/comparison JSON, but not an engineering-style view of the selected apparatus. The registry has three coordinate-defined Newton setup families and eight Atlas drawing views; only the former have normalized geometry/materials. Existing upstream plan/elevation/3D files must retain their source identity rather than becoming interchangeable generated illustrations.

Acceptance: provide a bounded engineering-style 2D studio view for supported coordinate-defined records, with labelled plan/elevation axes, explicit metres or millimetres, scale/view convention, dimensions that actually exist in the source, and selectable parts. Exported SVG and JSON must contain the selected record ID, source commit/file hash, draft/revision identity, units, view/assumptions and "proposed, not physically validated" scope. Changing a supported authored dimension/annotation must change both preview and export deterministically. Preserve source coordinates separately from user edits; never fill unknown coil turns, insulation/rating, materials or calibration from a drawing. For Atlas records without normalized geometry, show the pinned artifact and explain the unsupported editor state. Validate export text escaping and reject non-finite/out-of-range geometry before allocation; no external script/font/image dependencies in the engineering SVG.

## 3. Turn glossary prose into contextual navigation

Evidence: `BLUEPRINT_GLOSSARY` is a flat tuple list. BlueprintDetail places its entire definition list inside a nested "Equations, parameters, symbols and source hierarchy" disclosure. Schematic labels, parts, parameter controls and frozen-contract symbols do not navigate to relevant definitions. General and source-specific conventions (peak phasors versus RMS) are currently adjacent prose rather than a selected-model contract.

Acceptance: give symbols stable semantic IDs and source/context tags. A schematic part label or parameter help action opens the matching glossary definition with its unit, role, relevant model boundary and source/contract link, then returns keyboard focus predictably. Search aliases should resolve Ω/ohm/resistance and ω/angular frequency separately. Preserve peak/RMS conventions explicitly per selected contract. Tests must exercise real label→definition navigation and keyboard recovery, not only search for glossary strings.

## Preserved contracts

- Keep all eight neighboring source trees and their deployment bases unchanged; source pins, served copies, authored drafts and physical measurements stay separate.
- Existing 11 records/15 proposal inventory/13 active IDs retain their interpretation and exclusions; calendars/charts remain excluded.
- Preserve the existing validated notebook migration/import limits, reversible archive, exact source/build pins, quiet audio lifecycle, API security and no-Docker-socket boundary.
- A visual plan, deterministic geometry, numerical fixture, component recommendation, build approval and operated apparatus are distinct deliverables. Missing source specifications remain unknown.
- No GitHub push, environment publication, deployment or operation of hardware is part of this diagnosis.
