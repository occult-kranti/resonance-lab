# Five-panel round 5 — final architecture/export acceptance

Reviewed the revised compiled candidate pinned by `artifacts/round4.json`, live service on port 4182, and regenerated packet set. This is the fifth review in the requested sequence, after four genuinely changed artifacts; earlier v0.2/v0.3 panels are not counted into these five.

## Accepted final artifact gates

- All 60 packet-set file hashes match the manifest. Eleven actual stored JSON packets re-export through the current validators to **byte-identical JSON and HTML**; valid creation dates/revisions and the generated set were not rewritten.
- Regenerated coupled PDF parses with no PDF JavaScript; source_peak_V, its value 1, V peak and parameters are intact on a row. Human unknown fields say Not specified, and the prior orphan-row suffix is absent. Display rounding remains separate from exact JSON/source numbers. The coupled complete packet has 23 pages of explanation/contracts/source provenance; it is not advertised as a one-page manufacturing drawing.
- Prior actual offline Chromium acceptance remains applicable because valid renderer output is byte-identical: inert local sketch decode, no external requests/scripts, exact field table and source/interpretation boundaries. Native SVG and nested URL counterexamples remain rejected.
- Source-bound draft tests still pass explicit restoration, source/geometry conflict/no overwrite, corrupt-store preservation/scoped deletion, unavailable storage and invalid/out-of-range/unsafe-key rejection. Curator's compiled interaction sweep covers all eleven records, generated downloads, notebook scenarios, source views, explicit drafts and narrow-screen operation.
- The live workspace API reports nine readable adapters and complete built/live pins. During this review the accepted validation fix intentionally makes matchesLiveSource false against the older compiled candidate; the root final build must capture the corrected source. This is correctly disclosed drift, not evidence of a bad sibling or a deployed final release.

## Failed probe and accepted repair

A new reusable API probe mutated a packet's authored scenario after createPacket, or parsed an altered JSON packet, then called packetJson/packetHtml. The first round-5 candidate allowed those inconsistent exports even though createPacket already rejected the same inconsistency. The actual Studio's immediate create/export path was coherent, but the reusable exporter boundary was incomplete.

The accepted bounded repair shares authored schema/family/scenario/source validation at creation and both export boundaries. It validates required authored fields and review identity without changing a valid packet's creation date/revision. For new sparse createPacket callers, an omitted scenario is populated from the recognized selected sketch; contradictory supplied scenarios remain rejected. A focused regression covers post-create and parsed mutation in both exporters, malformed authored schema and valid identity immutability. The independent critic retargeted eight mutated/parsed variants and accepted their rejection; all eleven real exported packets remain valid.

Focused verification: eleven packet tests, five durable-draft tests, TypeScript and targeted lint passed. Exact corrected source hashes and the valid-file byte-equivalence checks are in `round5-architecture-validation.json`. No blocker remains in this role's architecture, source/scenario or offline packet scope. Root final metadata/build/native/browser gates and the explicitly authorized final Docker check are separate release operations; no image rebuild was started prematurely.

The eight neighboring source trees, notebook core, App and package declarations remain unchanged by this role. No hardware validation, manufacturing approval, GitHub push, public deployment or environment publication is implied.
