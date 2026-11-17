# Round 2 — acoustic model and preview review

Reviewer: independent AI acoustics/DSP implementation perspective. This is code inspection and executed computational testing, not human peer review or physical acoustic measurement.

## Artifact reviewed

The changed artifact is `src/App.tsx` after round 1 implementation, together with `src/workbench/dsp.ts`, its vendored Brainwave math, and seven executable controls in `dsp.test.ts`. This review therefore follows the built shape-and-sound board rather than repeating the baseline repository assessment.

## Findings and decisions

| Finding and code evidence | Impact | Decision / owner | Observable acceptance check |
|---|---|---|---|
| `example()` awaited a digest without checking its captured input generation token. | A synthetic control could overwrite a later file or control. | Correct in App, root owner. | Start an example and a replacement before hashing resolves; only the latest input commits. |
| `loadFile()` cleared analysis while retaining the prior `input`; the analysis effect could rerun for a changed anchor/family while the newer file was still pending. Save had no busy guard. | A stale-image study could be saved under pending-import circumstances. | Clear pending input or gate analysis and saving on busy, root owner. | While decoding, no study can be saved or heard from an old analysis. |
| Image queue selection used filenames as identity. | Two distinct files with the same filename could select the wrong input. | Select by queue index or stable id, root owner. | Two same-name images remain independently selectable. |
| Room eigenmodes may lie outside the preview's declared 40–4000 Hz interval. | Passing low modes to synthesis fails; silently transposing them would misrepresent the model. | Filter preview tones only, retain full numerical mode results, root owner. | Invalid preview range is explained; numerical eigenfrequencies are unchanged. |
| `stop()` cuts the current source, closes its owned AudioContext, and clears UI playback. Effects cover parameter/source replacement, navigation, hidden document, pagehide and Escape; `listen()` checks context identity after resume. | Bounded playback and pending-start cleanup are supported by the actual control paths. | Retain these contracts. | Browser tests should exercise stop, restart and input replacement; code inspection alone does not prove physical output. |
| Relative image scores used distinct circular/square masks. | A number could be mistaken for a calibrated cross-family probability. | Added the limitation to the exported `analysis.method`, DSP owner. | Every saved analysis carries the mask/cross-family limit and `ambiguous: true`. |

The candidate table's mode frequencies are user-anchored sonifications. Image pixels supply no absolute object resonance. The room model explicitly names rigid rectangular geometry and does not claim to model a pyramid exterior or a statue. Synthetic control imagery remains marked synthetic.

## DSP verification

`node --experimental-strip-types --test src/workbench/dsp.test.ts` passes seven tests. They exercise synthetic candidate recovery and unchanged rankings under anchor changes, insufficient-contrast rejection, finite/size bounds, analytic room modes and length scaling, extreme room aspect ratios, deterministic tapered quiet PCM/WAV, and invalid audio rejection. These are meaningful computational controls; the image-matching method has not been evaluated on a representative held-out archaeological image corpus.

The new exported method disclosure is the DSP change accepted in this round. App corrections are assigned to the root agent and must be checked in the next artifact. No Brainwave engine behavior or fixture was modified.
