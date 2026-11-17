# Five-panel continuation — round 1 curator / product UX baseline

Perspective: AI curator and interaction designer; this is source-derived baseline evidence, not observed human research or a rendered-browser critique. Reviewed current `BlueprintLibrary.tsx`, `DeviceBench.tsx`, `blueprint-data.ts`, device SVG/model code, the generated eleven-record registry, and shared CSS. No product edits are made in this round.

## 1. The source library needs a selected-plan studio, not eleven nested dossiers

**Evidence.** `BlueprintLibrary` maps all eleven `visible` records to cards and mounts `BlueprintDetail` inside each closed disclosure. Detail includes every asset, raw geometry, every numerical contract and the whole glossary. `AssetPreview` performs its HEAD request on mount, so closing a details element hides its appearance without avoiding its resource work. The current registry has five assets in the coupled-coil family, three in the witness family, one prism asset and eight Atlas drawing views. `DeviceBench` places this library inside another disclosure before a separate proposal list, circuit model and Blender concept section.

**Task impact.** Someone asking to inspect a blueprint must first understand the library’s nesting, then keep an arbitrary drawing and many assumptions in working memory while scrolling. Repeated source provenance is necessary data but not the best first reading order. A rendering of a drawing also needs an obvious distinction from a dimensioned or validated construction document.

**Decision proposal.** Replace the eleven long cards with a **Blueprint Studio**: searchable/filterable record index, one selected record and one active sketch, with the selected plan’s title, source family, status and model boundary always visible. Within the inspector, use purposeful sections: **Drawing**, **Parts & measurements**, **Model & symbols**, **Source record**. Keep the provenance and unavailable-preview recovery available without forcing them into the default first viewport. Mount/inspect only the selected detail and selected active asset. Preserve the current three-record comparison as an explicit secondary task, with selected records shown even when filters hide them. Do not rename multiple drawing views as multiple built devices.

**Acceptance.** Opening the studio shows one explicitly selected record and one drawing/placeholder, not eleven expanded records or seventeen hidden preview probes. Changing the selected record updates every inspector section together. Filters with zero results show reset and retain a truthful selected-record state; no stale drawing is relabelled as the new selection. Registry/asset errors remain visible with retry and pinned-source recovery.

## 2. Definitions should follow the displayed term and reveal depth progressively

**Evidence.** `BLUEPRINT_GLOSSARY` has ten grouped tuples and is repeated inside each record’s equations disclosure. It defines some physical symbols, but displayed terms elsewhere include **RMS**, **SI**, **SHA-256**, **mW**, **mA**, **µJ**, **ΔE**, **X**, and **Rloss/Rload**. Device input help explains several units, while the energy result, sketch and export affordances use shorthand in separate places. Some raw contract JSON contains further source-specific notation. A single distant glossary cannot establish which convention applies to a currently displayed amplitude.

**Task impact.** A reader can find a word without learning whether it is an input, output, unit, provenance identifier or upstream convention. In particular, upstream peak-amplitude phasors and the host’s RMS teaching model cannot be combined by matching a letter alone.

**Decision proposal.** Use a shared symbol/shortform registry, linked by stable IDs from rendered labels and sketch annotations. At first contact, show a plain-language name and unit; a keyboard/touch-operable **Explain** action opens the matching definition in the studio inspector. Progress from (1) everyday meaning and whether it is input/model output/source notation, to (2) unit/conversion and the currently relevant numerical value, to (3) equation, convention and limits. Keep a searchable **Symbols & units** view as an alternative; do not rely only on hover or eleven repeated definition blocks. Clearly distinguish “known symbol” from unnormalized source notation; show an honest missing-definition state rather than inventing a meaning.

**Acceptance.** Every user-visible studio/control/output/annotated-sketch abbreviation has a reachable definition in the relevant context, including RMS/SI/hash terminology. Keyboard and touch can open, read and close explanations without losing selection or editing values. The host RMS convention and upstream peak convention are named at the point they matter. Definitions do not alter calculations or silently convert frozen upstream numbers.

## 3. A useful blueprint is navigable and exportable without changing its evidence status

**Evidence.** Current comparison exports JSON, record detail exports JSON, and the circuit teaching analogue exports an SVG. Source previews are capped at 340 px with separate pinned-source links; no selected-drawing fit/zoom or direct view export is exposed. The parts table can overflow horizontally and the view has no explicit focused-sketch navigation. The raw geometry and contract disclosures retain useful exact records, while many materials, ratings, turns and calibration values remain unspecified.

**Task impact.** A user cannot comfortably study a detailed diagram on a narrow screen or package the selected drawing with its parts/assumptions. It would be misleading to fill gaps merely to make a blueprint look complete.

**Decision proposal.** Give the active sketch a labelled **Fit / enlarge / previous view / next view** toolbar and a textual drawing description. Use native buttons and an accessible index; at phone widths stack the index and inspector rather than squeeze two desktop columns. Export the selected record plus a readable sketch/parts/specification receipt using existing available assets and exact source identities. Preserve missing values as **Not specified** and label proposed geometry, generic proxies and teaching analogues distinctly. No auto-generated fabrication tolerances, material grades, coil turns or safety ratings. The current notebook/dossier context remains untouched.

**Acceptance.** At 390 px width, record selection, drawing navigation, source recovery and export controls remain usable with no page-wide overflow; the parts table scrolls within its labelled region. Every export identifies the selected record, source commit/hash, drawing status, unit convention, limitations and unknown specifications. Enlarging a source drawing changes only its viewing scale, not the underlying geometry or evidence claims.

## Proposed curator implementation ownership after the merged design

Own a selected-record `BlueprintStudio` React surface and its accessible inspector/view controls; root owns CSS and the DeviceBench integration point. Use the existing validated registry adapter and export source identity. Coordinate one shared terminology API with the specialist assigned the glossary/data layer. Preserve object dossiers, room/image study context, notebook storage, and existing scientific engines. Subsequent rounds must review the changed studio and its actual interactions rather than repeat this baseline.

## Accepted round-1 implementation artifact

`BlueprintStudio.tsx` and the BlueprintLibrary selection wiring now implement the selected-plan surface. Search and the maximum-three comparison remain. View state is retained separately per record; one generated projection or selected original asset is shown. Component buttons provide a keyboard/touch alternative to optional SVG click selection. Plan/elevation availability follows the sketch module's declared views; source absence remains an explicit state. Units, fit/enlargement, geometry-only scenarios and source restoration are usable controls.

The inspector opens with parts/dimensions, with separate scoped symbols/equations and evidence/source sections. Advanced original contracts mount only when requested. The former all-record asset-preview components were removed; only the selected original view probes local availability. Source-view download refers to the actual selected original asset, while generated-view export refers to the active generated SVG.

Packet exports and direct shared-notebook save are wired with explicit documentation-scenario status and return validation/storage notices. Notebook core and existing dossier context are unchanged. First-artifact isolated TypeScript and ESLint checks passed after the sketch, terms and packet modules landed. Packet SVG/handbook integration and actual-browser task checks remain for the next review round; this is not final five-round acceptance.
