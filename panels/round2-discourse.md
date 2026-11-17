# Round 2 — independent AI inference and discourse review

Artifact reviewed: `src/App.tsx`, `src/workbench/{ResearchLibrary,research-data,DeviceBench}.tsx/ts`, `dsp.ts`, and `device-model.ts`, as present during panel round 2. This is code inspection plus two executed module probes, not browser observation or human peer review. The build has materially changed since round 1: native image/model board, explicit room model, source-depth catalogue, local notebook, and circuit-energy teaching analogue now exist.

## Blockers to correct before round 3

### R2-D1 · Collection handoff can misattribute an old image (high)

Evidence: `src/App.tsx:54` (`explore`) sets only title, board mode and navigation. Existing `input` and `analysis` remain. `save` at line 53 serializes current title with the retained image digest. A visitor can analyze a personal sigil, explore Nataraja from Collection, then save the old sigil pixels with the new Nataraja study title. The notice asks for an image, but visible previous results remain valid-looking.

Acceptance: Collection → Explore must clear prior input/results or explicitly offer a labeled “continue using [old filename]” action. No result or save control should imply that catalogue images or dimensions were automatically loaded when they were not. Prefer a structured object ID/title/source link in the study record, distinct from the uploaded filename.

### R2-D2 · Default architecture listening rejects its own valid model (high)

Evidence: `src/App.tsx:49–50` passes the first six room frequencies directly to `synthesize`. `src/workbench/dsp.ts:143` accepts 40–4000 Hz only. Executed import probe with the UI's default 10 × 5 × 4 m returns `[17.15,34.3,34.3,38.3486,42.875,46.1778,…]` Hz; attempting the preview throws `Tone Hz must be 40–4000.` The default Listen button is enabled, then fails. This blocks the user's architecture listening task.

Acceptance: model frequencies remain unaltered. Introduce one explicit common playback scale/octave transposition that moves the selected spectrum into the allowed listening range, preserves ratios, and is displayed and exported. If no one scale can fit a spectrum, give an actionable bounded selection. Never silently call transposed frequencies the room's measured spectrum.

### R2-D3 · Per-candidate clipping destroys the relationship between model and sound (high)

Evidence: `src/workbench/dsp.ts:112` clamps each `anchorHz × ratio` independently to 40–4000 Hz and exposes only the clamped `hz`. Probe: synthetic circular (5,3), anchor 2000 Hz, gives six candidate ratios 6.5286, 5.1308, 3.6475, 5.9765, 2.2954, 4.2304, all at 4000 Hz, despite intended mapping values 13057,10262,7295,11953,4591,8461 Hz. Thus “ratio” and audible Hz disagree in the board; the pitch comparison loses distinctions. The returned interpretation mentions clipping, but the primary UI and saved parameters do not expose the transformation.

Acceptance: keep unbounded mapped/model Hz separate from listening Hz. Use a documented common playback scale (or explicit octave folding with per-tone octave metadata if chosen), show it near playback, and export it. A regression check should verify preservation of chosen frequency ratios for a common-scale policy and no hidden collapse at the upper limit.

### R2-D4 · Saved records omit essential input and implementation provenance (medium)

Evidence: `src/App.tsx:53` saves digest and generated analysis but no original uploaded filename, original pixel dimensions, file MIME, hash interpretation (file bytes versus synthetic RGBA), catalogue ID/source URL, host/engine source revision, or audio mapping/duration/sample-rate manifest. `loadFile` (line 45) letterboxes to 192²; `dsp.ts:117` then describes a centered 40² luminance comparison. The analysis dimensions reflect the prepared 192² raster, not the original source. Filename-derived title can be edited freely, so it cannot replace an input name field.

Acceptance: add a versioned preprocessing/input record containing filename, original dimensions, prepared dimensions, hash kind, source/rights statement (unverified allowed), method version and snapshot/engine revision; record the actual playback/export mapping if audio is saved. Existing records should remain readable with unknown fields marked unknown rather than invented.

## Accepted improvements / no new blocker

- `dsp.ts:115–118` keeps `ambiguous: true`, multiple candidates, a nonprobabilistic interpretation and explicit chosen pitch anchor. This directly resolves the round-1 photo-to-unique-Hz concern in model semantics.
- `App.tsx:60` says empty rigid rectangular cavity, sound speed 343 m/s, and expressly excludes a pyramid exterior or statue from this box model. The room equation and dimension scaling explanation are accurate within the declared model.
- `ResearchLibrary.tsx:51–60` separates cultural records, measured acoustics and resemblance; it does not claim a complete monument catalogue or alien-origin inference.
- `research-data.ts:13–16`, 24–27 and analogous records preserve bibliographic/abstract/full-text distinctions instead of treating metadata as a full source review. Reddit records at 173–193 correctly say no discussion was read and do not invent consensus.
- `ResearchLibrary.tsx:61–64` makes the local queue manual, marks proposals unexecuted, and includes controls. “Marked complete by you” is a manual label, not an execution receipt. Keep this distinction if agents are later connected.
- `DeviceBench.tsx:45–46,63,72` accurately labels its series-RLC teaching analogue, initial energy, periodic steady state and arithmetic residual. It is not presented as a solved coupled transmitter or physical free-energy result.
- Explicit six-second, quiet-gain playback, stop on navigation/input change, no autoplay and digital amplitude checks are visible in code. Audio/browser lifecycle verification remains the audio reviewer's responsibility.

## Deferred integration / factual limits

- The Collection has a second research queue (`resonance-lab.research-queue.v1`) separate from the Experiment notebook (`resonance:tasks:v1`); unify or clearly expose the distinction later to avoid losing research questions between work surfaces.
- The headline “03 documented panel rounds” at `App.tsx:59` is hardcoded while round 3 has not yet happened. It may only ship as completed after round-3 records exist; preferably derive the count from an accepted round ledger.
- Device proposal `coils.falsifier` in `device-model.ts:55` concerns an energy-budget residual, whereas its stated question concerns load dependence. Tie each proposed falsifier to its exact claim/observable and do not treat a residual by itself as identification of a new source.
- No Reddit corpus, measured monument responses, statue material inversion, mantra recording analysis or human usability evidence has been produced by this code review. Retain these as explicitly planned/inaccessible rather than silently expanding claims.

## Executed verification

A direct `node --experimental-strip-types --input-type=module` probe imported the shipped `roomModes`, `synthesize`, `analyzeImage` and `modeField` modules, produced the default-room failure and high-anchor candidate collapse described above. No source code was changed in this review. Acceptance awaits the revised candidate and round-3 recheck.
