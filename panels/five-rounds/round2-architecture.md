# Five-panel round 2 — export/validation correction

Reviewed the first compiled studio artifact after round 1, then changed the actual packet and registry-validation implementation. This is round 2, not the fifth/final release verdict.

Owned modules: `blueprint-packet.ts`, packet tests, and conservative validation in `blueprint-data.ts`. The packet API is reusable outside the UI: `createPacket` (alias `buildBlueprintPacket`), `packetJson`, `packetHtml`, and `safePacketSvg`. Options accept structural bounded JSON for the authored scenario, full sketch, terms, equations and reading handbook, plus explicit review revision/notes. Source record and served/source pins remain separate from authored content.

## Changed artifact

The initial packet's data-only presentation was insufficient for an offline engineering review. The changed HTML now contains a rendered authored sketch, source-defined component table, authored dimension/component tables, stacked technical definitions and equation/convention cards, and human reading sections: goal, signal steps, known/unknown specifications, measurement checklist, research questions and source hierarchy. It contains no external scripts, fonts or loaded images. The sketch is an inert data image after strict SVG allowlisting; no arbitrary SVG markup is inserted into the HTML document. Original pinned artifact/source links remain separate navigation links.

The registry validator now rejects unsafe primary-source URLs (the concrete round-1 finding), unsafe nested URL/href fields, credential-bearing or non-HTTP(S) links, unpinned/mismatched documentation/contract/geometry/source identities, unsafe local asset paths, and nonportable/oversized nested values. Source URLs must identify the exact declared repository/commit/file; source and served-copy observations are not merged. Active proposal/count exclusions remain unchanged.

## Independent critique and repair

The critic independently found two malformed SVG cases accepted by the first allowlist: multiple root elements and an invalid zero character reference. The changed validator requires exactly one SVG root with its namespace, balanced allowed elements, valid XML text/entities, allowed attributes and restricted benign CSS. Scripts, event attributes, foreignObject, DTD/entities, hrefs, external paint/style references and encoded external references are rejected. Generated metadata is text, not active markup. Unknown turns, ratings, tolerances and calibration remain unknown; no export claims manufacturing approval.

## Verification

- Eleven native registry/packet checks pass, including every currently rendered nested source-link position, hostile labels/notes, credential-bearing links, encoded/double-encoded traversal, supported generated family views, unsafe SVG content, malformed XML and portable JSON bounds.
- Actual Chromium HTML DOM and SVG XML parsing executed: zero scripts, event attributes, external images and XML parser errors; one rendered inert sketch. Hostile title text remained literal. Evidence: `round2-packet-browser.json`.
- TypeScript and targeted lint are run for the current correction. The root's next compiled artifact and panel 3 source-bound draft review remain separate gates.

No neighboring repository, engine, notebook core, App or package declaration was changed by this role. No deployment or physical apparatus approval occurred.
