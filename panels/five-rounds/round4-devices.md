# Five-round continuation — round 4 device visual review

Artifact incoming: compiled round 3, identified in `docs/five-panels/artifacts/round3.json`, plus actual generated packets in `docs/five-panels/blueprint-packets/`. This role reviewed scientific labels, dimensions, source conventions and geometry-only scenario status, not human usability or hardware performance.

## Actual visual evidence

Rendered and inspected the first page of the actual coupled-coil and prism PDFs using `pdftoppm`. The coupled PDF reports 25 pages; this role inspected its first page, not every page. Both first pages show the proposed/reconstruction and nonmanufacturing boundaries near the title, an embedded readable diagram and a source-versus-authored caption. The prism depicts a 120 mm cross-section and screen at 450 mm without inventing thickness. Source amplitudes remain separately documented by the packet/terms roles.

Also rendered four actual delivered SVGs with installed Chromium/Playwright: prism, witness, magnetic-work and dual-channel plan. This identified two concrete documentation issues and prompted one bounded correction pass below. The previous source files and the revised render evidence are distinguished; packet PDFs must be regenerated before final round 5 acceptance of the revised generator.

Persistent visual receipts:

- `screenshots/round4-device-coupled-pdf-page1.png`
- `screenshots/round4-device-prism-pdf-page1.png`
- `screenshots/round4-device-nt-environmental-witness-plan.png`
- `screenshots/round4-device-nt-environmental-witness-elevation.png`
- `screenshots/round4-device-atlas-v4-dual-channel-plan-flow.png`

Paths above are relative to `docs/five-panels/`. The last three are revised-generator confirmation renders, not old round 3 packets. The witness elevation intentionally uses a user annotation at x = 900 mm and visibly labels that status.

## Findings and owned fixes

1. **Witness dimensions were buried:** the delivered witness plan showed W and coordinate axes but omitted a visible radius/length/centre legend even though those quantities were in SVG metadata and the inspector. Added a readable source/scenario callout with centre x/y/z, 28 mm generic radius and 50 mm axial length (or exact metre conversion), plus unknown turns/ratings/calibration. The confirmation renders show the callout without diagram overlap; annotated coordinates say Annotated rather than Source.
2. **Atlas flow semantics were too generic:** an acoustic two-channel record inherited “Calibrated readout” and a generic load/energy chain, which could imply a calibration not supplied by that source. Changed sound views to excitation/pilot → sample/room → microphone channels → recorded mixture/reference, explicitly retaining mixed source/path/recorder uncertainty. Magnetic force views now mention source support and balance interference; magnetic work separately names supplied energy, storage, work/heat and the complete budget. These are clearly editorial observation maps, with no invented dimensional geometry or actual sensor readings.

No diagram coordinates, mathematical model, physical parameter or source record changed. The witness callout reports existing geometry. Existing Blender assets were not rerendered.

## Verification and convention review

Nine device-sketch tests pass, zero failed/skipped. The new ninth test asserts exact witness callout values, source-versus-annotation metre conversion, acoustic calibration limitation and magnetic force/work wording. Baseline source dimensions, gap/centre distinction, scenario immutability, all eleven scoped term maps, optical coordinate projection, XML escaping and supported-view boundaries remain passing. Targeted ESLint and application TypeScript build pass.

The audio/terms role independently reported all 60 declared field values/units match the embedded frozen contracts and retained 1 V peak versus 0.15 V RMS conventions. No speculative glossary expansion or new physics was introduced here.

## Remaining round 5 action

Root must regenerate the eleven final SVG/JSON/HTML/PDF packets and compiled artifact after these owned generator corrections, then pin their exact hashes. The inspected incoming PDFs remain evidence of round 3 output; this report does not label them revised round 4 output. No physical construction, calibration, overunity or antigravity validation is claimed.

## Exact reviewed / revised hashes

| File | SHA-256 |
|---|---|
| `src/workbench/blueprint-sketch.ts` | `c701460401ee7be90f9f322d95477234235e2de1959e047ffa2fae220b020e58` |
| `src/workbench/blueprint-sketch.test.ts` | `ece9ee47b971ae792bbcf5a5c42f4d0a5749914fbf1843ceae8c27fab58afe5a` |
| `docs/five-panels/blueprint-packets/nt-coupled-coils.pdf` | `606f393a1a72330a14c13e7ec65584d5958bb9d350f419d120fadbacdb7a3e97` |
| `docs/five-panels/blueprint-packets/nt-newton-prism.pdf` | `3beb0afbbface1c7b86c282860a7b4a7a3510ac7e79d78aa21c25b349f1e0927` |
| `docs/five-panels/blueprint-packets/nt-environmental-witness.svg` | `13d7b7af3157c39d796412af48e1132e1173488be4dccced8cbdf262398f8a52` |
