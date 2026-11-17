# Connected research dashboard refresh

The active research home and existing workbench now expose a compact four-state guide: proposed work, source material, modeled outputs and measurements. Native help disclosures explain variable names, units and apparatus boundaries. The shared research panel is closed initially and opens the maintained documentation library, experiment worksheets, current US/EPO source dossier, connected research collection and observatories. Those links do not certify an apparatus, patent filing or scientific claim.

The existing R1/R2 circuit calculators, frozen model contracts, calibration boundaries, sources and historical content remain intact. No new calendar or astrology workflow was introduced. The preserved imported historical material is not presented as newly admitted science.

## Shared panel and hosting

The local static module `assets/integration/dashboard-bridge.js` is an exact copy of the canonical integration module. SHA256: `7912c0cb8c323e2acac472609cd6e9bd0df4356474c1e00e1aa7875b9adb1067`. It mounts into its own ShadowRoot and keeps the host dashboard controls intact. Managed `/apps/` hosting uses the current workbench origin. A standalone dashboard starts with explicit Workbench URL settings; it does not guess a deployment address or fetch an external host. Repository data and model output are not transmitted by this panel.

The reviewed managed release snapshot loaded 11 blueprint dossiers, 33 A4 diagrams and 17 experiment worksheets dated 2026-11-17. These are documentation counts from that dated snapshot, not live repository health or physical experiment results. The unavailable-snapshot path was also observed during host assembly and retained honest fallback links.

## Verification

- `npm test`: passed (11 existing UI gates).
- `python3 scripts/build_site.py`: full assembly passed, including the authored static assets.
- Actual Chromium at 1440 × 1000 and 390 × 844: four managed journeys across the two dashboards passed, with no page errors and no horizontal document overflow. Each dashboard retained an edited calculator value when help disclosures were opened and closed.
- One standalone settings journey per dashboard passed with no external network requests while choosing an explicit workbench URL.
- Baseline desktop/mobile screenshots were captured before changes. Final screenshots were visually inspected as a single batch. No visual blocker required a product revision.

`browser-checks.json` records this dashboard's two managed journeys and one standalone journey, including resolved links and snapshot text. `baseline-*.png` and `final-*.png` are the desktop/mobile evidence.

The existing build manifest records the local source HEAD, dirtyWorktree=true and per-output SHA256 values; it does not claim that the output is a pristine HEAD tree. Test/screenshot receipts created after that assembly are review evidence and do not retroactively alter its input manifest. No commit, push or publication was performed.
