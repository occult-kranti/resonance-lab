# Prompt for Claude — "Resonant Sphere" Device: Full Setup, Experiment & Video Specification

Copy everything below the line into Claude (or any capable AI assistant) as a single prompt.

---

## ROLE

You are assisting with a science-visualization and experimental-verification project. A device was described in channeled/esoteric source material as an "over-unity resonant energy device." Our goal is **two-fold and honest**:

1. **Visualize** what the described device would look like when built and energized (video + images).
2. **Specify** a rigorous real-world experiment that would test its central claim ("output power greater than input power") with proper instrumentation and controls.

Do not endorse the over-unity claim. Treat the device as what physics says it is: a spherical capacitor + cavity resonator + fractal multi-band antenna. All outputs must keep this framing.

---

## PART 1 — DEVICE SPECIFICATION (the object to model/build)

**Geometry (from the source text, decoded):**
- Three concentric spherical shells of **copper**, centered on one point.
- Shell spacing follows the golden ratio: radii are in ratio **1 : φ : φ²** (φ = 1.618).
- Bench-top scale (our chosen build size): inner shell radius r₁ = 10 cm →
  - Inner shell: ∅ 20 cm (r₁ = 10.0 cm)
  - Middle shell: ∅ 32.4 cm (r₂ = φ·r₁ = 16.2 cm)
  - Outer shell: ∅ 52.4 cm (r₃ = φ²·r₁ = 26.2 cm)
  - Air gaps: 6.2 cm (inner↔middle), 10.0 cm (middle↔outer)
- Shell wall thickness: **1.6 mm Cu (1/16 in)** preferred; up to 3.2 mm (1/8 in) allowed.
- Each shell = two spun copper hemispheres joined at the equator.

**Core ("merkaba"):**
- At the exact center, electrically **isolated** from all shells: two interpenetrating tetrahedra (star tetrahedron / merkaba), built from copper plate cut in a **Sierpiński-gasket fractal pattern** (3 iterations).
- Overall core diameter ≈ 16 cm (fits inside the inner shell with clearance).

**Antennas:**
- Six straight copper spike antennas (Cu rod ∅ 6 mm, sharpened tips), aligned with ±x, ±y, ±z axes, radiating from the core region outward.
- Each spike passes through all three shells via **white PTFE insulating bushings** (18 total: 6 spikes × 3 shells), electrically isolated from every shell.
- Spikes protrude ≈ 6 cm beyond the outer shell.

**Feed:**
- One spike (bottom, −z) is the **input**: RF energy arrives by coaxial cable through a bulkhead feed-through connector (SHV or BNC rated for the voltage) and drives the device.
- The opposite spike (or a designated pickup probe) is the **output tap**, connected to a 50 Ω load through a true-RMS RF power meter.
- The assembly sits on a machined **PTFE stand** (insulating) on a grounded optical bench.

---

## PART 2 — PHYSICS BASELINE (keep the project honest)

- Spherical capacitor: C = 4πε₀·(r₁r₂/(r₂−r₁)) ≈ **29 pF** for r₁ = 0.1 m geometry.
- Stored energy at 1 kV: U = ½CV² ≈ **15 µJ** — a spark, not a power source.
- Resonance (Q up to ~10³ in a good RF cavity) multiplies **voltage and current**, never energy.
- Energy balance: P_out = P_in − P_copper(I²R) − P_radiation − P_feed → **P_out < P_in always** (Poynting theorem).
- Real physics the geometry genuinely has: exact textbook capacitance, cavity resonance, corona at spike tips under high voltage, and documented multi-band behavior of Sierpiński fractal antennas (since 1996).
- The over-unity claim ("output > input") is graded **D — falsified**; no controlled replication exists in ~200 years of electromagnetism. Past demos fail on battery chemistry, ambient RF pickup, and phase/power-factor measurement errors.

---

## PART 3 — EXPERIMENT SETUP (what to depict / how to build the test)

**Instrumentation chain:**
- RF signal generator (sweep around resonance f₀) → amplifier + **directional wattmeter** (reads P_fwd and P_refl → true P_in) → coax → bulkhead feed-through → DEVICE.
- Device output probe → **true-RMS power meter** on 50 Ω load; **oscilloscope** on V(t), I(t) with phase φ (power factor!); **spectrum analyzer** for harmonics/parasitic pickup.
- Two **thermocouples** (TC1/TC2) taped to the shells for an independent **calorimetry** cross-check.
- DAQ laptop logging P_in, P_out, and temperatures vs time.
- Entire device inside an **RF-shielded enclosure** (dashed-line box in diagrams) to rule out ambient radio/WiFi pickup — otherwise any "free energy" reading is just a crystal radio.

**Test protocol (must appear in any experimental depiction):**
1. Remove all batteries from the device and its mounts.
2. Measure P_in and P_out **simultaneously** on calibrated meters.
3. Run calorimetry as an independent energy audit.
4. Repeat inside the shielded enclosure.
5. Predicted result per physics: efficiency η = P_out/P_in < 1.

**Safety:** resonance can Q-multiply voltage at spike tips into corona range; treat as a high-voltage experiment (interlocks, no-touch rule while energized, discharge before handling).

---

## PART 4 — VIDEO SPECIFICATION (what to generate)

**Style:** photorealistic, cinematic, warm laboratory lighting with cold violet-blue corona accents; no people; no on-screen text (or minimal engineering labels).

**Shot list (total 8–12 s per clip, or a 30–60 s sequence):**
1. **Establishing (2–3 s):** slow orbit around the inactive device on the bench — polished copper sphere with six spike antennas, PTFE stand, instruments around it.
2. **Activation (3–4 s):** RF drive ramps up; a faint violet-blue **corona glow** and tiny crackling discharges appear at the six spike tips and grow; subtle reflections shimmer on the copper shells.
3. **Instruments respond (2–3 s):** oscilloscope sine wave grows in amplitude; spectrum analyzer peaks rise; power meter needles/displays move; laptop plots scrolling data.
4. **Cutaway shot (3–4 s):** camera moves into a quarter-cut view of the sphere, revealing the three thin copper shells with air gaps, the glowing merkaba/Sierpiński core at center, and the white PTFE bushings where spikes pierce the shells.
5. **Honest closing beat (optional, 2 s):** corona fades; a caption-style frame: "Resonance multiplies voltage — never energy. η < 1."

**Key visual details to get right:** three concentric shells (ratio 1:1.618:2.618 in radius), thin 1.6 mm copper walls, fractal triangular lattice on the central star-tetrahedron core, white ceramic-looking bushings at every shell crossing, coax entering from below, corona localized at the sharp tips (not the whole sphere).

---

## PART 5 — DELIVERABLES TO PRODUCE

1. A text-to-video prompt per shot (or a full sequence prompt) matching Part 4.
2. A dimensioned parts list and assembly sequence for a physical build (Part 1 dimensions).
3. A wiring/block diagram of the experiment (Part 3 chain).
4. A narration script (optional) that explains the device accurately — including that it is a resonator, not an energy source.

**Hard rules:**
- Never state or imply the device produces more energy than it consumes.
- Distinguish clearly between *visualization* (the video) and *evidence* (the instrumented test).
- If asked to "make it work," respond with the physics: it works as a resonant cavity and multi-band fractal antenna — that is all.
