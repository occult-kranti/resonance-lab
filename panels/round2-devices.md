# Panel round 2 — device role

Artifact reviewed: integrated `src/App.tsx`, `src/workbench/DeviceBench.tsx`, `device-model.ts`, and tool/doc outputs after round 1 implementation. Perspective: independent software-agent device-model reviewer, not a human licensed engineer or physical peer review.

## Findings and corrections

1. **Installed-tool truth:** the original UI claimed external CAD tools were not installed. Actual PATH checks found Blender, KiCad, and FreeCAD already present. Corrected the UI and source notes. Executed Blender 4.3.2 and KiCad CLI 9.0.2; KiCad required writable XDG directories. FreeCAD's offscreen `--version` command crashed with SIGSEGV; no working FreeCAD operation is claimed. ngspice was not on PATH.
2. **Proposal/solver scope:** a model export previously attached the selected proposal's limitation without naming that the calculation remains the series RLC analogue. JSON export now carries `selectedProtocol` plus an explicit RLC limitation. The screen also keeps the analogue distinction next to its calculator.
3. **Finite bounds:** new test spans accepted extreme frequency, inductance, capacitance and duration bounds. All outputs remain finite; source/load powers and storage remain nonnegative; passive energy closure stays within scale-aware tolerance. Six tests pass, including independent 20,000-step signed-work integration.
4. **Blueprint accessibility:** authored SVG contains role/image title/description, component labels, source/current labels and an explicit teaching-model caption. Inputs are label-associated via `useId`; numerical errors remove outputs and disable model export. Native `<details>` preserves input state while hiding equations, glossary and protocol details.
5. **Actual external software output:** wrote and executed `scripts/render_device_blender.py` using installed Blender. The cloud build lacks OpenImageDenoise; first render failed, then ordinary 48-sample path tracing was used. A first successful image was overexposed; illumination was corrected before accepting a final image. Rendered outputs and geometry assumptions live in `public/assets/devices/`. This is illustrative geometry, not an assembly-ready blueprint or electrical solver result.

## Acceptance status

- Model arithmetic, invalid-input rejection, source-off control, passive power closure, independent finite-window work: passed six native tests.
- TypeScript application build check: passed after component integration.
- UI code has optional details, associated input labels and SVG alternative text; actual browser behavior remains for root's acceptance pass.
- Blender scene is editable; all dimensions are chosen for visual layout and listed in the manifest. No component selection, insulation rating, manufacturing tolerance or physical validation is inferred.

## Limits retained

The implemented solver is ideal series RLC, not the full selected coupled-coil proposal. The source window begins in periodic steady state with a charged capacitor. Zero residual is model arithmetic, not proof of hardware behavior. Free-energy and antigravity remain unvalidated hypotheses. No proprietary reverse-engineering assets or cracked software were obtained.
