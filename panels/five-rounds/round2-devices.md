# Five-round panel — round 2 device implementation checkpoint

## Artifact following round 1

`src/workbench/blueprint-sketch.ts` implements `buildSketch(record, options)` as a pure, bounded source-coordinate documentation generator. The result includes deterministic SVG, available views, stable component IDs, scoped terminology IDs, normalized components, unit-labeled dimensions with status, exact source pins, explicit geometry-only scenario changes and limitations. It does not mutate the input source record or any neighboring repository.

### Actual view contract

- Coupled-coil setup: orthographic x–y plan and x–z elevation, preserving the source's coil axes along x; source-defined generic component boxes/coils; centre-separation and clear-face-gap extension lines.
- Environmental witness: source-defined pickup plan/elevation and a separate calibrated-observation flow map. The flow preserves both `y = s + a·b` and `w = b + β·s`, with four explicitly labeled contribution arrows. The crossing arrows are not an electrical connection. The mathematical witness variable is not automatically a raw pickup reading.
- Prism: source-defined optical cross-section and calculated ray paths. The source supplies no thickness/elevation, so an elevation request returns the supported plan with an explicit limitation. Source lengths convert between metres and millimetres; wavelengths retain nanometres and angles retain degrees.
- Eight Atlas views: no normalized dimensional geometry is present in these registry records. Only a clearly editorial, non-dimensional flow map is generated. The source images and captions remain available through the Blueprint Library; no new dimensional plan is invented.

### Source / scenario / engineering separation

The baseline reproduces 80 mm coil-centre separation, 30 mm clear axial face gap and 105 mm axis height from the pinned source geometry. Optional user annotations may change coil clear gap (0–200 mm) or witness x position (500–1100 mm). These alter cloned layout coordinates only. The scenario explicitly records unchanged electrical parameters and no inferred calibration; existing wire paths, L/M/k, instrument transfer, ratings and efficiency are not recomputed. A zero gap means geometric face contact in the proxy model, not construction suitability.

The generated SVG contains an accessible title/description, stable component identifiers, unit-labeled dimensions, source commit footer and escaped machine-readable source/scenario metadata. Imported labels are escaped. Omitted turns, gauge, materials, tolerances and ratings remain unknown. The source's physical dimensions are stipulated layout assumptions, not measured actual components. No manufacturing or build approval is implied.

## Executed gates

Five native tests passed, zero failed/skipped:

1. Source baseline separation/clearance/height and exact m↔mm conversions.
2. Source immutability and scenario-only clone changes with source pins preserved.
3. Prism source mm/nm preservation and honest unsupported-elevation / Atlas non-dimensional scope.
4. Rejection of out-of-range/nonfinite/scalar-overflow geometry and escaped imported XML labels.
5. Correct two-input/two-output witness contribution map and calibrated-voltage limits.

Commands: `node --experimental-strip-types --test src/workbench/blueprint-sketch.test.ts`; targeted ESLint; application `tsc -b`. The UI integration role owns actual browser inspection, component selection controls and export workflows. The packet role separately owns portable HTML/JSON assembly; raw untrusted packet SVG must not be blindly injected into HTML.

## Next review

The independent critic received the actual module/tests for formula/scope review. Round 3 should inspect source labels and baseline/scenario behavior in the integrated Studio, including narrow-layout readability and component-to-terminology navigation. Do not count these drawings as a new hardware experiment or physical result.

## Round 2 actual integrated-artifact audit and correction

Inspected the now-integrated BlueprintStudio consumer and actual shared terminology registry. Found one concrete defect: the sketch's recorder used `measurement.coherence`, while the actual registry defines `measurement.phase`. Removed the duplicated ad-hoc term map and delegated all component IDs to the shared `componentTermIds(componentId,family)` resolver. Added a sixth native test requiring every emitted component term ID across all eleven records to resolve in the actual dictionary. This preserves the family-specific witness W meaning instead of guessing from one letter.

Added a visible axis-height extension annotation in coupled-coil elevation, while keeping centre-separation and clear-gap dimensions separate. Exported SVG now carries exact source/scenario/dimension/warning JSON in escaped XML metadata as well as a visible source-commit footer.

The actual coupled-coil plan SVG was rendered in installed Chromium through Playwright and visually inspected. Source components, dimension extensions, units, centre/face-gap labels, source footer and unknown-specification limits are legible without obvious text overlap. This is artifact inspection; root's integrated desktop/mobile UI inspection remains separate. Sixty-six generated SVG documents (eleven records × three requested views × two unit modes) were parsed with Chromium DOMParser as `image/svg+xml`; none produced an XML parser error. Unsupported requested views retain explicit warnings and resolve only to supported documentation views.

Final local device-sketch gates after correction: six native tests passed; targeted ESLint passed; application TypeScript build passed. No new physical model, measurements, source geometry mutation or neighboring repository changes occurred.
