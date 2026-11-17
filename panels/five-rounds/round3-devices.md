# Five-round continuation — round 3 device audit

Perspective: independent software-agent geometry/documentation reviewer, not a human engineering approval. Artifact reviewed: compiled selected BlueprintStudio, source-coordinate sketch generator, scoped term dictionary and portable packet API after round 2.

## Actual findings and repairs

1. **Scenario origin labels:** the generated SVG header and a moved component's notes still said source-stipulated/source-defined after an explicit geometry annotation. Repaired the header to say USER GEOMETRY ANNOTATION and the modified component's notes to identify the user annotation. Unmodified source records remain unchanged. The scenario still explicitly says no electrical parameter change and no inferred calibration.
2. **Contextual unknowns:** one generic footer described omitted coil turns/gauge and L/M/k even on a prism or non-dimensional Atlas flow. Repaired the footer by actual family: optical thickness/dispersion/aperture/intensity/calibration for prism, pickup transfer/ratings for witness, coil/electrical unknowns for coupled setup, and absent normalized dimensional/readout information for Atlas. No missing property was filled in.
3. **Lay-reader component roles:** terse source identifiers R1/C1/L1/RL were valid but not sufficient as standalone component-button labels. Added plain role labels such as “Primary winding resistance R₁” and “Receiving coil L₂”, retaining exact source identifiers/original labels in notes and unchanged scoped term IDs. Original source data/contract values remain separate.

## Numerical and representation checks executed

Eight native sketch tests passed, zero failed/skipped; targeted ESLint and application TypeScript check passed.

- Baseline coupled geometry: 80 mm centre separation, 30 mm clear face gap, 105 mm coil-axis height; exact conversion to metres within numerical tolerance.
- A 90 mm clear-gap annotation produces 140 mm centre separation; source bytes remain unchanged. Witness horizontal coordinate bounds 500–1100 mm are enforced. Negative/nonfinite/overlapping gap and unbounded source numeric input are refused.
- Prism cross-section preserves the source 120 mm side and 450 mm screen position. Every source entry/exit/screen ray coordinate is projected into SVG using the declared affine map; no ray angle, refraction, index or physical result is recomputed. Source wavelengths remain 650/550/450 nm when drawing length units switch to metres. Unsupported elevation stays explicitly unsupported and resolves to the plan, not invented thickness.
- Across all eleven registry records, every emitted component terminology ID resolves in the actual shared dictionary. Eight Atlas records remain non-dimensional documentation flows with no invented component dimensions. Witness flow preserves two contributions to each output rather than a misleading sequential chain.
- Imported labels are XML-escaped. SVG carries source/scenario/dimension identity in escaped metadata plus a visible abbreviated commit footer. The prior round's 66 actual generated-SVG XML parse gate passed.

## Packet/source lifecycle review

The actual BlueprintStudio constructs a sketch from its selected record, view, units and geometry controls, and passes `scenario: sketch.scenario` with that same sketch into createPacket. Its notebook result also uses that scenario, the selected source hash/commit and rendered/requested views. Thus the implemented UI export preserves source versus authored scenario and the displayed geometry.

A separate portable-API robustness concern was sent to the packet owner: direct createPacket callers can currently provide an arbitrary scenario that disagrees with a supplied recognized sketch. The existing packet unit test itself does this (100 mm authored field with a default 30 mm sketch). This does not describe the current Studio call site, but the packet owner should normalize or reject inconsistent recognized sketch/scenario inputs for stronger portability. No packet-owner file was edited here.

## Accepted scope and remaining review

Accepted: source-coordinate documentation, explicit user annotations, units, supported-view limitations and component-to-dictionary references. These are not manufactured parts, a measured apparatus, optical calibration or a CAD-to-electrical solver. Existing Blender scene remains untouched; all eight neighboring repositories remain outside this implementation's mutation scope.

Round 4 should inspect the actual desktop/mobile Studio and printed export with updated plain component labels. Round 5 is the final artifact acceptance; it is not asserted here.

## Exact reviewed hashes

These pin this review pass; later owner changes must be distinguished from this state.

| File | SHA-256 |
|---|---|
| `src/workbench/blueprint-sketch.ts` | `e45b5f13229af0ea629e5ccfcd4116aecb47cfa5f1a7df10e0d0a1e0647f0fee` |
| `src/workbench/blueprint-sketch.test.ts` | `83b9a7fa66203bac3e8ab732115b889abf990fefe8a21eba30c284e147087dfe` |
| `src/workbench/technical-terms.ts` | `9e7b4b3376de841ae5725999a6254312b38a528f8722566f64409bf221b11da9` |
| `src/workbench/BlueprintStudio.tsx` | `cc7b986049e8413075e7168ece780e617a2c6bea5fafd74fe3a8e82ab4f8b9b6` |
| `src/workbench/blueprint-packet.ts` | `98b3d1e0502fb61bbbe6add468c46300139addbb97f53c832747b1706d45ef9e` |
