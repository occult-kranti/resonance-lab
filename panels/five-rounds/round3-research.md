# Five panels · round 3: exact source keys and portable teaching content

Independent Codex AI research/technical-writing review of the changed R2 artifact. Reviewed exact frozen source values, the dictionary's new field-binding layer, the on-screen guide and readable-packet renderer. This round also implements the portable-field correction identified during the review. Module hashes and executed outcomes are in `round3-research-receipt.json`.

## Immediate code-quality repair

The handbook Markdown sanitizer originally triggered two lint rules. It now filters control characters using character codes, preserving tab, carriage return and newline, and escapes a literal set of Markdown characters. HTML characters remain escaped and active/credentialed URL schemes remain excluded. Focused lint passes. The four handbook tests pass, including a regression for control removal, preserved whitespace, bracket escaping and unsafe links. No safety check or lint rule was disabled.

## Exact bindings accepted after independent inspection

All **60 current `state_and_units` and `parameters` keys** resolve to explicit contextual definitions: R1 has 26, R2 has 16 and R3 has 18. The Studio reads the frozen value directly from the attached contract section/key; it does not convert or replace it with the host's controls. The explanatory audit makes future unknown keys or missing source sections visible rather than guessing a meaning.

The independent review checked that:

- R1's `source_peak_V = 1` remains **1 V peak**, while the separate host default remains **0.15 V RMS**, about **0.212 V peak for a sine**. The guide states that these are different examples and topologies, with no implied normalization or parameter transfer.
- R3's `crossleak_path_t` is a **dimensionless leakage-path parameter**, distinct from R1 time in seconds or acoustic delay. `Delta_a` is dimensionless transfer uncertainty; voltage-error radii stay in volts.
- Complex source pairs are real/imaginary coordinates, not two samples; point/sample counts remain computational counts; frequency-ratio bounds remain dimensionless rather than hertz.
- Peak-phasor average power retains its factor one-half. Deterministic reconstruction disks are not relabeled as confidence intervals or measured sensor performance.

A real integration defect was found: two R3 amplitude-field “Explain” links referenced the peak-amplitude term but the witness record's selected dictionary did not include that term. The audio owner added it and extended the regression to require every field-linked term to resolve **within the selected record**. Independent rechecking finds no unresolved per-record term IDs. Seven terminology tests pass.

These checks cover the named source sections/keys. They do not establish automatic interpretation of all equation prose, every raw symbol in linked papers, or future records.

## Portable-packet correction implemented in the handbook

The earlier readable packet now has specialized paragraphs/lists for the guide and contextual term/equation articles, replacing the generic handbook-object dump. Its escaped-text source hierarchy retains original reading-status statements as statements of the frozen contract, not a claim of fresh primary reading.

However, the on-screen 60-field table initially had no equivalent in the exported handbook DTO. A readable export could therefore lose precisely the variable/value explanations the user requested. The handbook now supplies `contractFields` for each attached contract, with path, explicit coverage result and fields containing section/key, **unchanged JSON source value**, presence flag, plain meaning, unit, convention and contextual term IDs. Undefined values become explicit null/missing representations; missing declarations are not invented.

The coupled-coil handbook contains its **42** R1/R2 fields and the witness handbook its **18** R3 fields. The tests verify the actual 1 V peak value/unit, complete current key coverage and strict portable JSON. Markdown also includes the source field explanations. The architecture owner is integrating these DTO rows into the readable HTML field tables; final rendered usability and print evidence are reserved for round 4.

## Limits retained

All eleven records retain reviewed plain-language guides, actual source status, source-defined geometry and visible unknowns. Metre fields, millimetre prism coordinates and centimetre source captions are not silently unified into one raw scale. Coil turns, ratings, materials and calibration remain unknown where their sources leave them unknown. Fifteen proposal IDs, thirteen active hypotheses and eleven setup/view records remain different counts.

A teaching guide, exported packet or matching content digest is not a new physical observation, manufacturing approval, physiological finding or historical-source validation. No new web acquisition or monument catalogue growth was needed for this round.

## Integration checkpoint after the portable-field change

A direct `buildHandbook → createPacket` execution exposed another real boundary failure: optional dictionary equations were represented as JavaScript `undefined`, which the strict portable-JSON validator correctly rejects. The handbook now JSON-normalizes its copied term/equation entries before returning its DTO. The four native handbook tests now include the strict portable validator **and actual packet creation**, not merely `JSON.stringify`; both pass. The audio owner is also removing undefined optional properties at their dictionary source. No JSON validation rule was weakened.

The revised architecture renderer now reads `contractFields` into escaped human tables. A direct coupled-coil packet execution succeeded with 42 structured frozen fields, produced valid portable JSON and included `source_peak_V` in the readable HTML output. Its approximately 185,000-character JSON is an actual exported metadata size, not an experimental outcome. Source values retain their native peak/complex/array conventions. Final visual and print readability remain round 4 checks.
