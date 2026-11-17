# Five-panel continuation · Round2 independent critic

Reviewed the actual selected-studio sketch, scoped vocabulary, handbook and HTML/JSON packet modules after the first implemented artifact. Its baseline compiled receipt is `artifacts/round1.json`; the working source identities reviewed here are recorded below because later changes are in progress. This is code inspection and bounded native/XML probes, not a browser session or physical engineering validation.

## One new consequential blocker · malformed SVG can pass the standalone check

`safePacketSvg()` accepted these two independent minimal inputs:

```xml
<svg xmlns="http://www.w3.org/2000/svg"></svg><svg xmlns="http://www.w3.org/2000/svg"></svg>
```

```xml
<svg xmlns="http://www.w3.org/2000/svg"><text>&#0;</text></svg>
```

Both fail an independent XML parser: multiple document roots and an invalid XML character reference, respectively. Neither was rendered or executed. The packet uses an inert image plus a restrictive CSP, so this is **not claimed as an executable-script bypass**. It is a concrete fidelity defect: a validated packet sketch can become an unreadable image while being described as standalone SVG.

Acceptance: require exactly one SVG document element; accept only valid XML character references/text; reject malformed text/attribute XML before creating a downloadable review packet. Keep useful Unicode, escaped markup-like labels and legitimate authored metadata. The architecture worker received exact counterexamples and owns the targeted repair. No other blocker is invented.

## Round1 source-link finding: independently resolved

Repeated the earlier adverse source-ledger mutation against the revised `validateBlueprintRegistry`: a used primary-source URL changed to `javascript:...` is now rejected. The updated validator applies HTTP(S), no-credential and bounded-portable invariants across primary source rows and nested URL/href fields, plus stronger identity checks on documentation/contracts/geometry/assets. A code-only source URL check is separate from the HTML escaping below.

## Independent source-geometry / units checks: passed

Native probe used actual registry `nt:coupled-coils`, not a mirror fixture. The baseline is80mm between centres,30mm clear axial face gap and105mm coil-axis height. All compared dimension values converted between millimetres and metres by1000 consistently. A100mm face-gap annotation gave150mm centre spacing because both50mm axial coil lengths remain included. The source record's serialized bytes did not mutate and the scenario explicitly left electrical parameters/calibration unchanged.

The sketch code distinguishes source box-corner coordinates from coil centre coordinates. Prism cross-section remains source-defined millimetres, wavelengths remain nanometres and the apex retains degrees; unsupported elevation is not fabricated. Atlas views without normalized geometry remain editorial flow maps rather than dimensioned layouts. Witness flow preserves both observation contributions `y=s+a·b` and `w=b+β·s`, avoiding a misleading one-way chain or an implied raw-sensor calibration.

These checks do not derive L, M, k, turns, material or efficiency from the drawn coordinates. Source-defined layout is still an assumption, not a measured component specification. The geometry scenario warning correctly says original wire paths/source assets are not recomputed.

## Independent text/export checks: passed within the valid generated subset

Cloned the actual source record and supplied a title containing `Ω <script>&" <img src=x onerror=1>` plus a component label containing XML punctuation. The generated SVG passed an independent ElementTree parse and retained text through escaping. The generated HTML packet contained no active script element or remotely loaded image; its SVG appears as a base64 data image, not injected raw HTML. Review notes containing closing tags and script-looking text remained escaped. The source pin/scenario metadata stayed inside SVG metadata as text.

These generated-safe cases passing do not erase the malformed-XML blocker above. The exported packet's authored scenario, pinned source and status remain distinct; no packet is a manufacturing approval.

## Keyword and convention review: materially improved

The new scoped technical terms address the concrete earlier gaps: current i(t) versus imaginary i/j; source-port voltage e1/e2 versus energy E; peak versus RMS phasors; impedance/reactance; Re/Im and magnitude; matrices/rank/nullity/Jacobian; witness s,b,y,w and deterministic error disks; force/contact loss versus mass; refractive index/wavelength; pressure reflection versus absorption; discrete L1 listening bound versus physical acoustic energy.

Actual record mappings were inspected for coupled coils, witness, prism, magnetic-force plan and phone-witness plan. Equations keep conventions local: peak source/load powers use½; RMS resistor heating does not; magnetic contact formula N=mg−Fm is limited to N≥0; Snell's law remains an assumed optical model. The mapping explicitly declines automatic all-raw-token coverage. Raw contracts remain source truth rather than being silently rewritten by character matching.

The improved handbook explains a selected record's purpose, signal chain, knowns, unknowns, measurement needs and discriminating questions. Root owns improving the selected visual/handbook presentation; this critic does not claim a full browser usability pass from reading the modules.

## Next review boundary

Round3 should challenge the corrected strict SVG parser and actual packet/handbook selected-state integration. Preserve source identities, actual units, arbitrary annotation status, unknown component specifications and exact raw-versus-authored distinctions. Do not rerun unrelated room or energy suites merely to count another panel round. Current acceptance is bounded: valid generated sketches and source-link fixes passed; malformed SVG export validation remains blocked pending correction.

## Reviewed source identities

UTC 2026-11-17T04:18:52.026833+00:00

```json
{
  "src/workbench/blueprint-sketch.ts": "f4041905f8b0a4e589a068e0569497651704d23555e12e831600db270b037765",
  "src/workbench/blueprint-packet.ts": "259b2af953072b18cfbafee630162d05b992390458e49d42b253e29370f53c2f",
  "src/workbench/blueprint-data.ts": "f747952098f0872a41237f89b1f493ff5c5f128524005cabc97d7ffd90ad0b0c",
  "src/workbench/technical-terms.ts": "03adac71e1256efbbd1048e24014f44ea054599be8ce38a3cc9dafd9b5e1fff6",
  "src/workbench/blueprint-handbook.ts": "0597c1ec77a0e9d4e2119d0818e4532a24a4b689c1bd14cadc2f5ed32f79a571",
  "src/workbench/BlueprintStudio.tsx": "bd95fcc354c3b5f6256d78c7633e34f1a626ec5d62dea322329b7dcc6a41769e"
}
```
