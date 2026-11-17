# Five-panel continuation · Round1 independent critic

Scope: current blueprint/source drawings, actual circuit/room keywords and SVG/export rendering. Read-only product review; only this receipt was written. This is a new baseline for the requested five-round refinement, not a relabeling of earlier accepted research panels. No physical experiment, source-paper reread or browser exploit was performed.

## Consequential gap1 · The dictionary does not disambiguate the actual equations

**Evidence:** `BlueprintLibrary.tsx` renders every contract as nested raw JSON and then the same ten-entry `BLUEPRINT_GLOSSARY` regardless of record/domain. The coupled-coil R1 contract uses `i` for an electrical current vector and also `iωM` for the imaginary unit. The displayed glossary defines only `q/i/v` as charge/current/voltage. R2 introduces effective source voltages `e1,e2`, impedance `Z`, Re/Im components, real rank/nullity, Jacobian and kernel; none has an explicit dictionary entry. R3 introduces `s,b,y,w`, error radii epsilon_y/epsilon_w and Delta_a; the global `a/β` row does not explain the observation equations. The optional room receipt uses a pressure-amplitude coefficient, discrete impulse L1 and fractional delay; electrical β as witness leakage is not their definition.

**Task impact:** a visitor can find a source diagram yet cannot read its governing symbols or tell two uses of the same letter apart. More raw equations will increase that gap. Existing state-and-units JSON preserves source truth but is not a usable scoped explanation next to the drawing.

**Acceptance:** introduce record/domain-scoped terms tied to symbols actually used, with plain meaning, units/convention and boundary. Specifically disambiguate imaginary `i` from current `i(t)`; source e from energy E; peak from RMS; model rank/nullity from confidence; witness leakage from acoustic pressure reflection; L1 digital sample-sum bound from physical acoustic energy. Place a short readable interpretation with the selected sketch/model and keep deeper exact contracts available. Coverage tests should inspect the actual required-symbol set; unrelated global dictionary entries do not count as explanation of a selected record.

## Consequential gap2 · Primary source links escape the registry's URL checks

**Evidence:** current `validateBlueprintRegistry` validates sourcePins and asset references but does not validate the `registry.sources` rows rendered by `BlueprintDetail` as `<a href={String(s.url)}>`. Native adversarial probe cloned the actual `public/data/blueprints.json`, replaced a used source (`NT-NEWTON-LIGHT1672`) URL with `javascript:alert(...)`, then called the actual validator. It accepted the mutated object. The payload was not rendered or executed. Documentation/contract/geometry links also need the same field-level invariant rather than relying on a different pin collection being validated.

**Task impact:** a malformed or poisoned source ledger can produce an unsafe clickable link. The surface is source-derived, and its new editable/exportable drawings must not convert arbitrary source text to executable HTML/SVG attributes.

**Acceptance:** validate every rendered source/documentation/contract/geometry URL as HTTP(S) without credentials, independently of whether some other pin is valid. Unsafe references should be rejected with an accurate unavailable/error state or displayed inertly as text; never guessed into a different source. React text remains escaped. Any new SVG text/labels must escape XML characters before insertion and must not allow markup/event attributes, external resource injection or arbitrary HTML. Use a literal label such as `<script>&"` in the actual generator's countercheck and parse the exported SVG; it must stay text while valid Unicode/symbols survive. This is a concrete extension of the demonstrated source-link hole, not a claim that current numeric-only `blueprintSvg()` is injectable.

## Existing boundaries accepted / preserve through changes

The current UI truthfully distinguishes proposed apparatus, numerical fixtures, drawing views and certified physical construction. Fifteen proposal IDs are not fifteen built devices. Source-defined coordinates and generic component proxies are labeled as such; unknown turns/ratings/calibration remain unknown. Static teaching SVG and Blender concept dimensions are not derived component specifications. Source hashes, served-copy hashes and current preview availability are separate observations. The first-order room model is not a measured monument response and its reflection coefficient is not an energy-absorption percentage.

No third blocker is invented. These two changes have concrete user impact and observable adverse inputs; the earlier energy and room physics were not rerun merely to fill another panel report. Subsequent rounds should inspect the changed selected-sketch/dictionary/link/export artifact, challenge its actual new inputs and then record a revised acceptance rather than repeat the same critique.

## Baseline file identities

UTC 2026-11-17T04:10:33.752275+00:00

```json
{
  "src/workbench/BlueprintLibrary.tsx": "cafd290522fcbbd825598d4f1b4875b936aca2990c2281d641283e0e2aa4cec5",
  "src/workbench/blueprint-data.ts": "ce7873a02ab1ce9c9c7686708881202d949f814dc2c7f6bc10f294109ea3e576",
  "src/workbench/DeviceBench.tsx": "b31a4ec6319f62a6a8c570e2a2b288732abb73215d1bab2cb6076869ede99416",
  "src/workbench/RoomListening.tsx": "df4002c4f6a7973385c649d0fc369132f1fc1c7f35186525ca0a2b913a491bfc",
  "src/workbench/room-response.ts": "f73078d891a67dff0482c0ebd04cc9ea622e7a8d4f03f699c8edf3a8b465ece5"
}
```
