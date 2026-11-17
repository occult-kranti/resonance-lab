# Five-panel continuation — round 3 curator interaction corrections

## Changed artifact reviewed

Root compiled and pinned the round-2 Studio before this round. Round 3 reviews the actual selected-record Studio, handbook, original-drawing adapter, complete printable packet and shared-notebook save, rather than repeating the original library audit. Current terminology covers 64 scoped terms and sixty actual frozen state/parameter keys; this is selected source coverage, not an exhaustive dictionary.

## Implemented corrections

- Integrated the architecture specialist’s **source-bound explicit draft API**. Save, Load and Delete are direct user actions; neither editing controls, changing records nor opening/closing a panel silently saves or reloads data. Matching drafts restore only after explicit Load. Source identity includes the selected record’s source SHA/commit and its geometry, contract and asset hashes. A source-conflict result does not change current tab state or overwrite the stored draft. The returned draft receipt can be exported for inspection before an explicit deletion.
- Kept per-record in-tab view/scenario state. A saved draft can survive page navigation or reload, while later unsaved changes do not alter the saved bytes. The interface explains that draft changes are not autosaved. Storage failures, invalid drafts and source conflicts are displayed through the module’s truthful result messages.
- **Explain this part’s variables** now moves keyboard focus to the scoped term search after the inspector changes. **Back to [component]** restores the selected part and focus to its actual component button. SVG clicking remains optional; the complete native component-button list is the keyboard and touch alternative.
- Invalid geometry gets one explicit alert and a **Recover source settings** action. Generated sketch export, both packet exports, notebook scenario save and draft save are disabled while invalid. The packet builder also has an event-handler guard so stale or programmatic invocation cannot produce a valid-looking scenario from invalid settings. Immutable original source artifacts remain separate source links; their bytes do not depend on user scenario edits.

No source geometry, scientific engine, notebook core, collection dossier or CSS was edited by this role.

## Actual interaction evidence

`round3-curator-smoke.json` records nine Chromium checks against the running Vite candidate: keyboard component selection; Explain search focus; Back focus restoration; an explicit draft writes the chosen source-bound geometry; a later edit does not autosave; reload requires explicit matching draft load; a forged/changed source identity is rejected without changing current geometry; blank invalid geometry disables the five generated-data actions; explicit recovery restores the declared source setting. There were no browser page errors.

The first smoke selector used the prior short label `L1`; the device specialist’s concurrently improved label became `Primary coil L₁`. The harness was updated to the actual accessible name, then the complete sequence passed. This was a selector correction, not a product failure or skipped assertion.

TypeScript and ESLint passed on the UI changes. The focused round-2 and round-3 interaction scripts are retained in `docs/five-panels/interaction-scripts/`; they accept `TEST_BASE_URL` and default to the isolated Vite port used for these checks. Architecture owns native draft validation/storage tests. Root owns the combined round-4 browser/screenshot gate; no additional screenshot-polish loop was run here.

This is round 3 of the requested five. Round-4 combined evidence and round-5 release acceptance remain outstanding.
