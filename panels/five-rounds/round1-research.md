# Five-panel continuation · round 1 source and technical-writing audit

Role: independent Codex AI research/technical-writing perspective. Baseline review only; no application code or sibling source was changed. No new web search was needed. Inspected all nine connected repositories' roles/revisions, the host's actual eleven blueprint records, current glossary, and all three frozen Newton–Tesla contracts (`docs/contracts/R1.json`, `R2.json`, `R3.json`). A report is not a physical or human-review result.

## 1. The ten-entry glossary leaves the inverse/witness contracts inaccessible

**Evidence.** `src/workbench/blueprint-data.ts` currently groups `q/i/v`, `P/E/W` and `a/β`. R2 and R3 introduce peak complex source voltages, current-error radii, gain/phase error, real-domain rank/nullity, kernel rivals, transfer uncertainty, witness-equivalent voltages and the singular determinant `1−aβ`. Those meanings do not follow from the drawings or the existing ten entries. A bare symbol also changes meaning by context: `i` can mean instantaneous current or the imaginary unit in a printed equation; `C` is a capacitance symbol but also the unit coulomb; `W` can be a work symbol but is the unit watt; `t` is time in R1 and a dimensionless cross-leak path parameter in R3.

**Proposed change.** Publish a context-specific plain-language handbook whose entries carry symbol/shortform, exact contract, quantity, SI unit, simple interpretation and a nearby use/example. Do not invent one global definition for overloaded notation. Minimum coverage:

| Context | Terms that require individual definitions |
| --- | --- |
| R1 circuit and energy | `q` charge/C; instantaneous `i`/A versus peak phasor `I`/A; `v,V` voltage/V and source peak versus RMS; `L,L1,L2` inductance/H; `M` signed mutual inductance/H; `k` dimensionless coupling; `C,C1,C2` capacitance/F; `R1,R2,RL` winding versus useful-load resistance/Ω; `Z` complex impedance/Ω; `f` cycles/s versus `ω` radians/s; `E` stored energy/J; work/J; `P` average real power/W; `t` time/s; transpose and complex conjugate |
| R2 reconstruction | `e1,e2` unknown effective complex peak drives/V; `I1,I2` coherent current readings/A; squared magnitude/A², not power by itself; amplitude versus phase/rad; hats as estimates; `δ` error/change; `ΔM` inductance-error bound/H; `ε1,ε2` current-error radii/A; observation map; real domain dimension/rank/nullity; kernel/exact rival; deterministic error disk/V, not a probability interval |
| R3 witness | `s` stipulated signal/V peak; `b` nuisance/V peak; `y` reconstructed mixed receiver voltage/V peak; `w` calibrated witness-equivalent voltage/V peak, not automatically raw coil voltage; `a` complex dimensionless nuisance transfer; `β` complex dimensionless signal leakage; `εy,εw` supplied voltage-error radii/V; `Δa` supplied dimensionless transfer uncertainty; `1−aβ` determinant and singularity; `t` dimensionless leakage-path parameter, distinct from R1 time |
| Optical and listening references | prism `n` dimensionless refractive index; ray angle and its stated degree/radian convention; RLC/resistance–inductance–capacitance; SI/international units; AC/alternating-current analysis; DC/steady operating-point analysis; RMS/root mean square; Hz/hertz; dBFS/digital amplitude relative to full scale, not sound pressure; RIR/room impulse response; first-order path versus full room response; SHA-256/content digest, not signature or scientific validation |

**Acceptance.** Every symbol used in the three frozen `state_and_units`/`model` sections resolves to an entry or an explicit contextual alias. Peak-phasor power keeps its factor ½; RMS does not borrow that factor. Error bounds remain supplied deterministic assumptions, not confidence levels. Unknown ratings remain unknown.

## 2. A print packet must keep the distinction between proposals, views and engineered devices

**Evidence.** The live registry has **15 proposal IDs, 13 active in scope, 2 excluded**, but **11 blueprint records: 3 setup families and 8 Atlas drawing views**. Only the coupled-coil family links R1/R2 and the witness family links R3. The prism record has no numerical circuit contract; Atlas view records intentionally have no normalized materials/contracts. Coil `turn_count` is null. Existing limits say layout dimensions do not determine inductance, mutual coupling, sensor performance or component ratings. Missing fields are source facts, not a formatting gap.

**Proposed change.** Offer a per-record printable study packet with title/status, source commit/path/hash and reading depth, the original view/caption, interpreted variables/units, declared component geometry, explicit unknown specifications, observables/controls/falsifier, and an unambiguous model boundary. A coupled-coil packet should preserve separate primary and receiving currents, source work, winding loss, useful-load energy and stored-energy change. An Atlas figure packet should say “drawing view” rather than synthesize a parts list.

**Acceptance.** Printed/exported packets state their record kind and original status. They never turn eleven records into eleven built devices or imply thirteen fully specified apparatus designs. Source and already-served asset hashes remain separate. No null turn count, material, rating or calibration is filled with a guessed value. Excluded calendar/chronology IDs remain excluded.

## 3. Method sources and cultural sources need different places in a lay packet

**Evidence.** The nine repositories span historical dossiers/correction ledgers, actual numerical contracts, deterministic audio, image-model comparisons and sigil geometry. A historical Tesla passage, a museum image, a modern computational fixture and an external schematic establish different things. The host's v0.3 room receipts now correctly cite the Allen–Berkley abstract and pyroom documentation at their actual reading depth; an object source cannot substitute for the method source. The externally archived Adafruit amplifier is a real published schematic with CC BY-SA attribution, but is not the RLC teaching circuit or a realization of a proposed Tesla bench.

**Proposed change.** Give every packet two clear source layers: **why this subject/object is here** (history, archaeology, cultural attribution) and **how this computation/drawing was made** (model contract, equations, source version and assumptions). Explain a content hash as a file identity check, not evidence of physical truth. Keep source limitations close to the claims they qualify. State the small independent controls the user can inspect before interpreting a result.

**Acceptance.** A reader can distinguish observed measurement, computed result, proposed protocol, historical statement, artistic/sonification mapping and unknown. No default monochrome printer layout drops the reading-depth, model-boundary or unknown-specification text. The packet does not imply new measurements, universal object frequencies, healing, alien makers or an exhaustive monument corpus.

## Bounded recommendation

Build the handbook and print packet from the existing pinned registry/contracts first. Coordinate exact notation with the audio/physics and device owners, then review the implemented artifacts in rounds 2–5. No extra source acquisition or catalogue expansion is required to repair these three concrete comprehension/provenance gaps.
