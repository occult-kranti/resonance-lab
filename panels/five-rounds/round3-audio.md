# Five-panel sequence — round 3, physics and mathematics pedagogy

## Actual changed artifact and counterchecks

This round inspected the compiled round-2 studio's field-table code, the handbook's source-amplitude example, the source-coordinate sketch scenarios and the expanded dictionary. It follows the round-2 implementation rather than repeating a baseline glossary review.

The studio reads each field value from `contract.record[field.section][field.key]` and displays its raw string or JSON value alongside the contextual unit/meaning. An executed countercheck read **all sixty actual fields** through the same section/key relation: R1 26, R2 16, R3 18, with no missing values or unknown fields in the current frozen contracts. Source state descriptions remain descriptions, not invented numeric observations. Missing-section and unknown-key notices are present in the changed studio, and native mutation fixtures verify the audit reports future keys rather than guessing their meaning.

The handbook now explicitly states the actual R1 source is **1 V peak**, while the independent host series-RLC default is **0.15 V RMS**, approximately **0.212 V peak** for a sine. It also names the different topologies and disclaims normalization or parameter transfer. The separate equation card's 1 Ω example gives 0.5 W for 1 V peak versus 1 W for 1 V RMS; that is an expressly selected resistor example, not an altered R1 winding value.

The R3 leakage-path `t` binding remains dimensionless, while R1 `transient_end_s` and acoustic delay have seconds units. Transfer radius Δa is dimensionless; receiver/witness voltage-error radii are volts. Counts are integer sampling choices. These distinctions are verified against actual keys and source declarations, not inferred from their letter names alone.

An executed geometry scenario changed the coupled-coil face gap to 90 mm and the center separation from approximately 80 to 140 mm. Serialized source contracts remained identical; the scenario explicitly returned `electricalParametersChanged:false` and no inferred calibration. This is a one-sided coordinate annotation, not an inductance/coupling prediction.

## Real defect found and corrected

The field definitions for R3 `signal_amplitude_V` and `background_amplitude_V` referenced `measurement.peak`, but that term was absent from the environmental-witness record's own search context. A global id-resolution test passed while the actual “Explain” action could show no definition. The research peer independently found the same gap.

The witness mapping now includes the peak term. The existing sixty-field test now requires **every referenced field term to resolve inside its record's contextual dictionary**, not merely exist globally. Seven native terminology tests pass after this repair. No scientific formula, source parameter or model engine changed, and no speculative vocabulary was added to inflate coverage counts.

## Reviewed source identities

- Pre-repair terminology: `c4f06f9625ebec99db8c81cf5ed456b6358c418bbb7d7e5566ba56d50d2d76eb`
- Repaired terminology: `9e7b4b3376de841ae5725999a6254312b38a528f8722566f64409bf221b11da9`
- Studio field-table artifact inspected: `23ffdda49b41c193d8ec29fb7c6b3c6a91a64ed3d80694611673df49befd44e7`
- Handbook amplitude-example artifact inspected: `0f26b77022b71bfc3fcf134806a2e29b936c78a4ff900326e9227ffda60a22ec`
- Sketch scenario artifact inspected: `f4041905f8b0a4e589a068e0569497651704d23555e12e831600db270b037765`

These identify this review's artifacts. Later source-bound workflow or handbook/packet changes require their own next-round checks; no unchanged artifact is counted as a new round. Browser interaction and offline packet completeness are the next acceptance surfaces, not established by this source-only review.
