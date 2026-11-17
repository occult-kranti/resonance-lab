# RESONANCE LAB — Precision Resonance Metrology Simulator

An original, self-contained **educational web simulator** of a precision resonance
metrology lab. A shielded, temperature-controlled vacuum chamber holds a copper sphere
on a motorized XYZ stage; instruments (VNA, LDV, oscilloscope, GPSDO/Rb frequency
reference, pumps, thermal controller) run a guided blinded experiment on the sphere's
breathing-mode resonance.

**Educational simulator. Physics is idealized and energy-conserving — measured output
is always less than input. Not a real measurement device.**

## Features

- **16 pages**: Lab Overview · Operator Console · 3D Chamber & Stage (React Three Fiber) ·
  AI Copilot · Live Timeline · Spatial Field Explorer · VNA Analysis · LDV Scanner ·
  Oscilloscope · Frequency Reference · Experiment Runs · Lab Notebook · Learning Paths ·
  Training & Checklist · Challenge Mode · Fault Injector · Research Findings
- **Tick-based simulation engine** (`src/sim/store.ts`): interlocked facility state
  machine (power → vacuum → thermal → clock), passive Lorentzian resonance model at
  20.75 kHz (solid 100 mm Cu sphere breathing mode, Q ≈ 10⁵ in vacuum, TCf −3.3 Hz/K),
  blinding engine, fault injector, event bus, localStorage persistence.
- **Honest physics throughout**: S11 hard-capped at 0 dB (passive), disclaimer footer on
  every page.

## Tech stack

Vite 7 · React 19 + TypeScript · Tailwind CSS 3.4 · zustand · React Three Fiber ·
Framer Motion · GSAP · hand-rolled canvas plotting.

```bash
npm install
npm run dev
npm run build
```

## Documentation (`docs/`)

- `docs/report/LOC-1_v2_improved_hypothesis.md` — the improved experiment protocol
  produced by a 10-agent deep-research swarm + a 3-round, 5-expert adversarial panel
  (precision metrology, RF engineering, precision-tests physics, statistics,
  methodology). Panel verdict: **viable as amended — conditional GO**.
- `docs/research/` — the full research record: 10 dimension reports
  (`sphere_dim01..10` — patents, open-source stack, sphere physics, error budgets,
  null-test design, preregistration, prior art), cross-verification, insight
  extraction, and all 15 panel-round transcripts.
- `docs/claude_prompt_resonant_sphere.md` — a self-contained prompt for reproducing
  the spherical resonator visualization/design work.

## Key findings baked into v2 of the sim

| Claim | Finding |
|---|---|
| 230 kHz breathing mode on a 10 cm sphere | Physically impossible — real mode is 20.75 kHz; sim corrected |
| Static A/B position comparison | Drift ≡ signal; replaced by ABBA hop blocks + witness sphere |
| "≥3 valid pairs" reveal gate | Vacuous (p ≥ 0.25); replaced by staged gates G1–G4 |
| VNA as primary readout | ~23 mHz floor; demoted to survey — DMTD beat-count readout instead |

*All copy and code in this repository are original.*
