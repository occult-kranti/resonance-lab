# Five-round continuation — round 1 device / blueprint diagnosis

Perspective: software-agent scientific-documentation and geometry role. Read-only inspection; no product code changed in this round.

Reviewed the current eleven blueprint records, normalized materials and source-defined geometry for three Newton–Tesla setup families, the source renderer `newton-tesla-research-lab/scripts/render_setups.py`, its geometry/manifest, and the host BlueprintLibrary. The upstream source commit is `2faece1d6dde6be63f7758c2754a0369d1a34fce`; the registry separately records observed per-file hashes and built-copy hashes. Existing Blender assets need no further rendering.

## 1. Source geometry exists, but the host does not turn it into an inspectable engineering-style sheet

Evidence: `BlueprintLibrary.tsx` currently shows normalized component table and raw coordinate JSON, then links existing drawings. The coupled setup has a 1.20 × 0.72 m table, coil centres at (0.42,0.42,0.105) and (0.50,0.42,0.105) m, radius 0.028 m, axial length 0.050 m. The source renderer and manifest explicitly distinguish **0.080 m centre separation** from **0.030 m clear axial face gap**. The witness is at (0.84,0.50,0.105) m with the same generic size. The prism uses a 120 mm equilateral section and a screen at x = 450 mm, with stipulated refraction rays. These are proposed coordinates/teaching dimensions, not measured hardware specifications.

Decision proposed: generate a deterministic, downloadable plan/elevation/signal-path sheet from those actual coordinates. A source-referenced caption and parameter table must accompany it. Coil axes are along x in the source renderer; preserve that convention. Do not collapse centre separation and air gap into an ambiguous “gap” field. For the prism, use a ray-plan instead of inventing a thickness/elevation absent from the source.

Acceptance gate 1: baseline sheet dimensions reproduce the source manifest (80 mm centre separation, 30 mm face gap, 105 mm axis height), with m↔mm conversion tested. Plan/elevation projection and bounds tests reject malformed/overlapping scenarios. Unknown turns, gauge, component ratings, insulation and calibration remain explicitly missing.

## 2. Editable geometry is useful only if physical inference remains separate

Evidence: the source `parameterGeometryRelation` states L/M/R/C are stipulated by the R1 contract; unknown turns and wire gauge prevent deriving them from the drawing. R3 similarly says pickup position does not establish nuisance transfer `a` or leakage `β`. The current host correctly keeps a separate RMS series-RLC analogue, but has no local geometry scenario workflow.

Decision proposed: permit a small set of bounded **illustrative geometry scenarios**, such as coupled-coil face gap, witness position, or prism screen distance. Derive only geometric consequences. Changing coil spacing must not silently change L/M/k, power or efficiency. Changing witness position must not infer calibration or sensitivity. Moving the prism screen can extend the frozen outgoing ray directions using `y = y_exit + tan(θ_exit)(x_screen − x_exit)`; it must retain the stipulated refractive indices and source calculation status.

Acceptance gate 2: each scenario exports its exact baseline source pin, modified geometry fields, derived dimensions and an explicit “geometry-only, not physical prediction” result kind. Source records stay unchanged. Invalid input removes outputs/exports, reset restores source values, and closing a disclosure preserves edits. Any ray extension agrees with the original screen intersections at the baseline screen position.

## 3. A lay-reader document should connect the drawing to the observable and signal path

Evidence: normalized materials include generic source/readout boxes and undefined turn counts; existing raw contracts separately define currents, voltages, complex phasors and peak-amplitude conventions. R3 has `y = s + a b`, `w = b + βs`, and calibrated witness-equivalent voltages, not raw pickup readings. A user can read all of this now, but must manually assemble several JSON and SVG views.

Decision proposed: an exportable source-pinned sheet should pair the geometry with a **conceptual readout block diagram** and plain-language variable legend: supplied source → coupled elements → useful load; simultaneous voltage/current channels → signed source/load/loss/storage budget; witness signal/background → separately calibrated observation channels. Keep geometry, electrical fixture, observer calibration and measurement record as four separate statuses. For the optical source, explain wavelength, stipulated refractive index, exit direction and screen position. Avoid suggesting the plan contains fabrication-ready tolerances or verified instrument ratings.

Acceptance gate 3: the generated sheet includes accessible SVG title/description, unit-labeled dimensions, a full text alternative/parameter table, variable definitions, source commit/hash, and a bounded materials/readout/unknowns checklist. Downloaded SVG/JSON retain the same scenario and scope as the visible sheet. No overunity, physical build, new hardware data or manufacturing readiness is inferred.

## Bounded next implementation

One pure `blueprint-diagrams` module with source-geometry normalization, plan/elevation/ray projection, deterministic SVG plus portable JSON/text documentation, and meaningful tests is the strongest next contribution. The UI should stay behind an optional disclosure in the existing BlueprintLibrary. Do not create a new three-coil solver, rerender Blender, install paid software, alter other repositories, or fill missing engineering variables with plausible guesses.
