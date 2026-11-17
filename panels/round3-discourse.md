# Round 3 — independent AI discourse and inference acceptance

Decision: **ACCEPTED for the bounded local computational workbench**, with the limitations below. This is the third review of a revised implemented artifact; it does not relabel round 2 or claim human expert participation. Browser interaction and final release gates remain separate root-agent checks.

## Round-2 disposition

- **R2-D1 / old-image misattribution: resolved by code inspection.** `App.tsx:55` increments the image-processing token, clears input, analysis, queue and error, and navigates to an empty board with explicit notice that catalogue images/dimensions were not inferred. Pending load work cannot repopulate the new catalogue study because `loadFile` checks the same token. `loadFile` also clears input before awaiting new bytes; saving is withheld during `busy`. This is a meaningful invalidation boundary. Browser assertion of the catalogue→empty-board interaction remains pending the root pass.
- **R2-D2 / default room playback: resolved by a narrower explicit policy.** `App.tsx:50` selects only listed frequencies from 40 to 4000 Hz; the nearby transport note displays the included count and explicitly states no pitch shifting. Counterprobe of default 10×5×4 m room preserved all eight modeled frequencies and rendered the four audible-range modes at 42.875, 46.1778, 48.5075 and 51.45 Hz. It omitted the four lower listed modes instead of mislabeling shifted tones. This is accepted because the limitation is visible and the default action now works; it is not a reconstruction of an entire building response. A larger room may have no audible listed mode and should retain the disabled transport rather than invent a tone.
- **R2-D3 / collapsed image pitches: resolved and independently counterchecked.** `dsp.ts:112–122` separates `rawHz` from listening `hz`, applies one `listeningScale` across the returned candidate set, records it per candidate and in analysis, and preserves the ratio relation. The repeated high-anchor circular (5,3) control now yields six distinct audible frequencies (4000, 3143.5586, 2234.7482, 3661.7522, 1406.3737, 2591.9377 Hz) with common scale 0.3063438081, while retaining the original mapped values. Every `hz/rawHz` and relative ratio assertion passed. The UI identifies this as a chosen listening transformation, not recovered physical Hz.
- **R2-D4 / input provenance: accepted with residual reproducibility limits.** `App.tsx:47,49,54` now records original filename/dimensions, byte-vs-synthetic-RGBA hash kind, full letterbox→bilinear luminance preprocessing, method version, inherited engine commit, host snapshot commit/local-change status, selected raw Hz and listening scale for image studies. Existing scientific interpretations remain qualified. The host is locally modified: the recorded base commit does not pin these new changes, and image bytes deliberately are not retained in the notebook. Reproduction therefore still requires the original image and a copy/commit of this working tree. Do not claim the JSON alone is a complete executable research archive.

## Additional accepted scientific boundaries

The image board remains an exploratory fixed-rim/fixed-edge membrane template comparison, not statue inversion, geological material inference, hieroglyph translation, an alien-origin test or a measured spectrum. Circular and square similarity scores use different masks and are explicitly described as uncalibrated across families. The room remains an empty rigid rectangular cavity with 343 m/s sound speed; it does not simulate a pyramid exterior, absorption, occupancy, statue elasticity or real impulse response.

The research source catalogue still distinguishes metadata, abstracts, selected passages and unavailable Reddit leads. Zero Reddit community items were collected by this reviewer. The executed mathematical controls remain synthetic tests, not archaeological or biological findings. Manual queue completion does not execute experiments or establish an independent review.

## Nonblocking limits carried into delivery

- Room study exports preserve dimensions, sound speed, boundary and all frequencies, but do not yet record the exact played subset, sample rate/duration or host/method revision as richly as image-study exports. The visible playback policy is truthful; a reusable audio manifest is a sensible next improvement.
- The inherited-engine source commit identifies the imported numerical helper's origin, while the local image matcher and sonification are new code. Host base commit plus an explicit local-change flag must not be described as an exact source pin for the changed implementation.
- No original user image is stored, no model checkpoint is trained, no live container control exists, no hardware apparatus was run, and no measured monument dataset or new Reddit corpus was produced.
- Collection and main notebook still have distinct local planning queues. This is a disclosed usability/integration limitation rather than a scientific correctness blocker.

## Executed bounded counterchecks

Imported shipped modules using Node's type-stripping loader. Assertions passed for: default room audible subset rendering (4800 samples for 0.1 s at 48 kHz); unchanged full modeled room frequencies; raw image anchor×ratio equality; common listening scale equality; relative-ratio preservation to 1e-12; allowed audible bounds; distinct pitches for distinct test ratios. Code-level provenance/invalidation checks were read directly. No app source was edited by this reviewer.

## Reviewed file identities

Reviewed at 2026-11-17T01:10:19.321383+00:00; SHA-256 values:

```json
{
  "src/App.tsx": "d29c3307f47d880d61ed004853e51697a9b20a467fa50ca85f9e54c917860df9",
  "src/workbench/dsp.ts": "f824baa73730ecbe0f3c3099c7d34196c6ff717f58efd17d788da2d9effa16b6",
  "src/workbench/dsp.test.ts": "4d495f64bfa9087b29d2ece33e2f3a18163e435e2a99c8c72028408ed440f199",
  "src/workbench/ResearchLibrary.tsx": "c24ac7c61a4ce29b61d2fafd3d819056b18200fc0c6952ea632eb5ceaa4cbac2",
  "src/workbench/research-data.ts": "5205be061d963d71d51e34867d1f257432cac359e6ed57ecdef459749672bcf8",
  "src/workbench/DeviceBench.tsx": "10437f20c15808a7df27cf2bcc66ad481468bb8a236b46405fcd72827c6ab612",
  "src/workbench/device-model.ts": "a65a02dda8c644e1efccc359b02c2a1447fea9416fe929519b30bb66790d48f0"
}
```
