# Round 2 · research curator reviews implementation

Reviewer: independent Codex AI `research` agent. Review is code-derived; no rendered-browser or human usability claim is made.

Artifact reviewed: the newly implemented `resonance-lab/src/workbench/ResearchLibrary.tsx`, normalized `research-data.ts`, and `dsp.ts`. This differs from Round 1's baseline legacy exhibits: the candidate now has an integrated object catalogue, source search/filter, local research queue, image/membrane comparison, room-mode calculation and bounded audio rendering.

| Finding | Evidence | Impact | Decision / acceptance |
| --- | --- | --- | --- |
| Source depth survives normalization | Source cards render `readingDepth`, `status`, `limit`, and source URLs | Prevents metadata-only paper records appearing fully validated | Accepted; retain in final candidate |
| Community retrieval failures stay explicit | Reddit source records carry inaccessible and login-wall statuses | No fabricated discussion or consensus | Accepted; do not describe leads as completed Reddit corpus research |
| Cultural object data retain origin | Nataraja card carries Tamil Nadu/Chola attribution and Met object source; separate ritual/glyph categories | Prevents treating unrelated practices as one lost technology | Accepted; use genuine image credit and permit user-provided attribution |
| Queue state is clearly planning | Queue text says changing status does not run agents, measurements or experiments | Prevents simulated task statuses implying actual research execution | Accepted |
| Image score has bounded meaning | `dsp.ts` returns absolute Pearson candidate score, `ambiguous: true`, and a chosen anchor with sonification clamp | Compatible images do not uniquely determine physical Hz | Accepted if UI exports method and anchor alongside candidates |
| Physical model terminology needs consistency | DSP method names fixed-rim circular / fixed-edge square **membrane** templates | A membrane and an elastic plate have different dispersion relations | Require UI to use membrane/template names; do not claim material plate eigenfrequencies |
| Null comparison not yet executed | Research queue proposes scrambled/rotated controls; image API only returns candidate rankings | Highest score always exists in a searched family and is not confidence | Report this limit beside results. A deterministic control may be added but is exploratory until a null distribution and search correction are calibrated |

The recent-literature ledger remains a screened bounded search with abstracts/metadata, not a systematic state-of-the-art review. Four proposed computational/recording experiment protocols are in `experiment-protocols.json`; no heritage-site measurement or human study is reported as executed.
