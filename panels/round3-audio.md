# Round 3 — revised acoustic model acceptance

Reviewer: AI acoustics/DSP implementation perspective. Evidence: revised `src/App.tsx`, `src/workbench/dsp.ts`, and the executed Node control suite. This is computational and code-derived review, not a physical acoustic measurement, professional endorsement, or human usability study.

## Accepted correction from the round-2 challenge

The earlier individual 4000 Hz frequency clamps could map several high candidate modes to the same pitch. The revised result retains each candidate's `rawHz = anchorHz × ratio` and uses one shared `listeningScale = min(1, 4000 / max(rawHz))` across the six returned candidates. Its audible `hz` equals that raw value times the scale. This preserves all candidate intervals. Every image-analysis JSON records both raw and listening values and names the transformation explicitly.

The new upper-anchor control tests the formerly failing 2000 Hz case: raw values remain reproducible, all candidate scales agree, the highest audible pitch is 4000 Hz, pairwise ratios are preserved, and distinct ratios do not collapse. This joins seven preceding controls; **eight tests pass**, with no skipped or expected-failure tests.

## Revised App checks

Code inspection confirms pending file imports clear the prior input and analysis, the synthetic-example digest uses a current-generation guard, saving rejects pending imports, and source/anchor/family/candidate/navigation changes stop previews. Room playback filters to the declared 40–4000 Hz range without altering the numerical eigenmodes. The interface describes this subset and names the geometry and sound-speed assumptions. Model-method and interpretation details now accompany the image matches.

Three presentation/identity details were handed back to the root owner for the final artifact: controlled queue selection should retain a same-name file's index, the square model canvas should use a square boundary, and the active numerical raw pitch/listening scale should be visible in method details. These are specific checks against the changed artifact, not additional research rounds.

Final source inspection confirms these three corrections are present: independent `queueIndex` state drives the batch selector; `fieldPattern()` uses `abs(x) <= 1 && abs(y) <= 1` for square candidates and a disk mask for circular candidates; method details display the selected raw frequency and shared listening-scale value. The image study export also includes these mapping values. These findings are accepted on code evidence; browser behavior is verified separately by the integration owner.

## Accepted limits

- Image scores compare declared ideal nodal templates; they do not recover an unknown object's physical frequency, material properties, provenance, acoustic response, or maker.
- Circular/square scores use different masks and are not calibrated across families. Image handling includes resampling and crop/letterbox assumptions. There is no representative held-out archaeological-image validation.
- The room solver is an empty rigid rectangular cavity model. A pyramid exterior, irregular monument, plate, glyph, mantra, or statue requires a different model and/or measured source material.
- The generated sound is a quiet, explicitly started, bounded sonification. A −24 dBFS sample ceiling does not establish acoustic output SPL at a listener's ear.
- The mature Brainwave instrument and safety governor remain a preserved subapp, not a rewritten engine. No calendar or chart engine was imported into these DSP features.

The implemented controls prove the stated numerical behaviors and the correction of interval collapse. They do not establish extraordinary historical, biological, or extraterrestrial interpretations.
