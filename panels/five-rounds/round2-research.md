# Five panels · round 2: read the changed artifact

Independent Codex AI research/technical-writing review. Compared the implemented handbook, 55-term dictionary, studio guide and current packet generator with the actual R1/R2/R3 source contracts and eleven source records. Module hashes are in `round2-research-receipt.json`. This is a code/contract review; visual/print rendering is a later panel check.

## 1. A numerical example must not merge peak and RMS fixtures

The frozen R1 coupled circuit declares `source_peak_V = 1.0`. The host's separate ideal series-RLC default declares `voltageRms = 0.15`. These are different topologies and examples. The conversion for a sine would put 0.15 V RMS near 0.212 V peak; it does not make the host default the frozen R1 fixture.

**Implemented correction:** the coupled-coil handbook now reads the actual attached R1 parameter and current host default, states both conventions and explicitly says no normalization or parameter transfer is implied. The four handbook tests pass after this change. It supplements, rather than rewrites, the original source contract and its half-factor in peak-phasor average power.

## 2. Selected glossary coverage is not exact contract-key coverage

The new scoped terms resolve the serious first-pass `Δa` unit error: transfer uncertainty is dimensionless, while reconstructed voltage-disk radii are volts. The generic Δ explanation now allows a contract-defined bound or a change instead of forcing every symbol into a time difference. Those fixes were independently inspected and the combined eight handbook/terminology tests passed.

The R1/R2/R3 `state_and_units` and `parameters` sections still require an **explicit key-binding audit**. Examples that cannot be inferred safely from a character are R3's dimensionless cross-leak path `t` versus time `t`, phase-grid values in radians, sample/point counts as counts, source complex pairs as real/imaginary values in volts, and a frequency ratio versus frequency in hertz. The audio owner is implementing that bounded binding layer. A guide existing for all eleven record IDs does not prove every visible key has a normalized explanation.

**Acceptance for the next artifact:** each selected source key either resolves to a contextual term/meaning or appears as an explicit unnormalized audit gap with its original source text. No parser should guess that every `m` means metres, every `C` means capacitance, every `W` means watts, or every `β` is an acoustic coefficient. This review does not pre-claim the pending audit's result.

## 3. Reader-grade explanation must survive screen and print

The actual revised Studio now imports `buildHandbook`, passes it into the packet and renders an on-screen guide as a goal paragraph, ordered signal/force steps, known/unknown lists and prospective questions/checklists. That code-derived behavior is accepted. Unknown coil turns, real ratings, material properties and calibration remain visible; the source's millimetre prism geometry is distinguished from metre fields and centimetre captions.

The packet generator inspected at this stage still used a generic object renderer for the handbook, producing raw field names and JSON arrays inside definition-list values. A structured object alone is not a readable teaching document. The architecture owner was asked for a specialized escaped-text renderer with paragraphs, lists, contextual term articles and equation cards; raw structures may remain advanced provenance. Its revised output will be checked in round 3 and visually in round 4.

## Source and scope decisions retained

The handbook's source hierarchy now includes both record source relations and publication URLs preserved from attached contracts. Frozen reading-status statements are labeled **“Frozen contract reports … This is not a new primary-source reading.”** This avoids falsely promoting archived references to fresh scholarly verification.

Fifteen proposal IDs still differ from thirteen active in-scope hypotheses and eleven setup/view records. No physical device, material parameter, measurement, historical inference or all-monuments corpus is created by a clearer guide. No new source acquisition was needed to repair this artifact.
