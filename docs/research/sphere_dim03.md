# LOC-1 Dimension 03 — Reusable Open-Source Repositories

**Scope:** Open-source repositories (GitHub/GitLab) reusable by experiment LOC-1 (copper-sphere resonance measured at two positions; VNA + laser Doppler vibrometer (LDV) + GPSDO clock; analysis = Lorentzian/resonance fitting, Allan deviation, blinded randomized scheduling, preregistration support).
**Method note:** 25+ independent GitHub repository searches plus 4 web searches were run (queries covered: scikit-rf, lmfit, pymeasure, qcodes, pyvisa, nanovna-saver, resonator circle fitting, resonator_tools, allantools, Polytec/vibrometry, blinding, randomizr, GPSDO, acoustic levitation, sphere/elastic normal modes). Star counts and "updated" dates are GitHub API values observed on the access date (2026-11-16). README/LICENSE excerpts were pulled verbatim from the repositories themselves on 2026-11-16.

---

## 1. VNA control & S11 / S-parameter analysis

### Claim 1 — scikit-rf is the canonical open-source Python library for VNA data handling, Touchstone S-parameter I/O, calibration (SOL/TRL/SOLT), and de-embedding
- **Source:** scikit-rf/scikit-rf GitHub repository (README.md)
- **URL:** https://github.com/scikit-rf/scikit-rf
- **Date:** Accessed 2026-11-16; repo last updated 2026-11-13; created 2012-01-19. ~967 stars, 367 forks, active CI (CodeQL, readthedocs, coveralls badges).
- **Excerpt (verbatim, README.md):**
  > "**scikit-rf** (aka `skrf`) is an Open Source, BSD-licensed package for RF/Microwave engineering implemented in the Python programming language. It provides a modern, object-oriented library which is both flexible and scalable."
  > "scikit-rf is permissively licensed under a [3-clause BSD license](LICENSE.txt)."
- **Context:** For LOC-1 this is the natural hub for the VNA side: read/write Touchstone `.sNp` files of the S11 sweeps around the sphere resonance, perform one-port SOL calibration / de-embedding of cables and fixtures, slice frequency windows, and plot Smith/LogMag/phase. The accompanying peer-reviewed description (IEEE Microwave Magazine / scikit-rf paper) lists "read/write touchstone (.sNp) files", "one port: SOL, least squares, and SDDL" calibration, and "virtual instruments (completeness varies by model): VNAs: PNA, PNAX, ZVA, HP8510, and HP8720"[^1^]. License BSD-3-Clause is maximally permissive for reuse.
- **Confidence:** High (README + LICENSE verified directly).

### Claim 2 — NanoVNA-Saver provides GUI + scriptable acquisition from low-cost NanoVNA/LiteVNA hardware, with Touchstone export and in-app calibration
- **Source:** NanoVNA-Saver/nanovna-saver GitHub repository (README.rst)
- **URL:** https://github.com/NanoVNA-Saver/nanovna-saver
- **Date:** Accessed 2026-11-16; repo updated 2026-11-16; ~1,246 stars, 342 forks.
- **Excerpt (verbatim, README.rst):**
  > "A multiplatform tool to save Touchstone files from the NanoVNA, sweep frequency spans in segments to gain more than 101 data points, and generally display and analyze the resulting data."
  > "Displaying data on multiple chart types, such as Smith, LogMag, Phase and VSWR-charts, for both S11 and S21"
  > "This software is licensed under version 3 of the GNU General Public License."
- **Context:** If LOC-1 uses (or prototypes with) a NanoVNA-class instrument, this gives immediate segmented high-resolution sweeps and Touchstone export that feeds straight into scikit-rf. GPLv3 means code cannot be folded into proprietary analysis pipelines, but running it as a standalone acquisition tool is unrestricted. Its "splitting a frequency range into multiple segments" feature directly supports narrow-span, high-point-density scans across the sphere resonance.
- **Confidence:** High (README verified directly).

### Claim 3 — PyVISA is the standard hardware-agnostic instrument-control layer (GPIB/RS232/USB/LAN SCPI) for driving a benchtop VNA
- **Source:** pyvisa/pyvisa GitHub repository (search metadata)
- **URL:** https://github.com/pyvisa/pyvisa (pure-Python backend: https://github.com/pyvisa/pyvisa-py, 363 stars; mock backend: https://github.com/microsoft/pyvisa-mock, 26 stars)
- **Date:** Accessed 2026-11-16; repo updated 2026-11-15; ~976 stars, 273 forks.
- **Excerpt (verbatim, GitHub repo description):**
  > "A Python package with bindings to the \"Virtual Instrument Software Architecture\" VISA library, in order to control measurement devices and test equipment via GPIB, RS232, or USB."
- **Context:** LOC-1's automated, scheduled (randomized) measurement runs need programmatic VNA control: PyVISA sends SCPI commands to Keysight/R&S/Anritsu VNAs; `pyvisa-py` removes the NI-VISA dependency (pure Python, works on Linux); `pyvisa-mock` lets the team test the whole measurement script offline against a simulated instrument before touching hardware. License: MIT (per project metadata; not re-verified from LICENSE file this session).
- **Confidence:** High for existence/capability; Medium for license detail.

## 2. Lorentzian / resonance fitting

### Claim 4 — lmfit ships a built-in `LorentzianModel` (plus Voigt, pseudo-Voigt, DampedOscillator, SplitLorentzian) with automatic parameter guessing, bounds, and uncertainty estimates
- **Source:** lmfit/lmfit-py GitHub repository + official documentation
- **URL:** https://github.com/lmfit/lmfit-py ; docs https://lmfit.github.io/lmfit-py/builtin_models.html
- **Date:** Accessed 2026-11-16; repo updated 2026-11-14; ~1,245 stars, 304 forks. License BSD-3-Clause (LICENSE file verified: "BSD-3-Clause ... Copyright 2025 Matthew Newville, The University of Chicago ...").
- **Excerpt (verbatim, README.rst):**
  > "The ``lmfit`` Python library provides tools for non-linear least-squares minimization and curve fitting. ... LMfit also provides methods to explicitly explore and evaluate the confidence intervals in fit results."
- **Excerpt (verbatim, builtin_models.html):**
  > "class LorentzianModel(...) — A model based on a Lorentzian or Cauchy-Lorentz distribution function. The model has three Parameters: amplitude, center, and sigma. In addition, parameters fwhm and height are included as constraints to report full width at half maximum and maximum peak height, respectively."
  > "class DampedOscillatorModel(...) — A model based on the Damped Harmonic Oscillator Amplitude."
- **Context:** This is the primary Lorentzian-fitting engine for LOC-1: fit the sphere's resonance peak in |S11| or LDV velocity spectra; `fwhm` directly yields linewidth → Q = f0/FWHM; constrained/bounded parameters and built-in confidence intervals support preregistered, reproducible analysis. `DampedOscillatorModel` matches a driven mechanical oscillator's amplitude response exactly.
- **Confidence:** High.

### Claim 5 — resonator_tools implements the Probst et al. diameter-corrected circle fit for complex resonator S-parameter data (fr, Qi, Qc, Ql)
- **Source:** sebastianprobst/resonator_tools GitHub repository (README.md)
- **URL:** https://github.com/sebastianprobst/resonator_tools
- **Date:** Accessed 2026-11-16; repo updated 2026-11-07; 58 stars, 67 forks. Created 2015. (License not stated in README; verify before redistribution.)
- **Excerpt (verbatim, README.md):**
  > "A small python library to fit complex resonator scattering data. It supports transmission, reflection and notch-type measurements."
  > "Description of the algorithm: http://scitation.aip.org/content/aip/journal/rsi/86/2/10.1063/1.4907935 (Preprint: https://arxiv.org/abs/1410.3365)"
- **Context:** Far more robust than a 1-D Lorentzian on magnitude when LOC-1 has full complex S11: circle fitting in the complex plane separates cable-delay/impedance-mismatch backgrounds from the true resonance, returning internal vs coupling Q. The method is independently validated (Phys. Rev. Research 6, 013329 (2024) benchmarked "the circle-fitting procedure of Probst et al."[^2^]). `pip install resonator-tools`.
- **Confidence:** High for capability; Medium on license (unstated in README).

### Claim 6 — danielflanigan/resonator offers an alternative lmfit-based complex S21 resonator fitter exposing Qi, coupling loss, and standard errors
- **Source:** danielflanigan/resonator GitHub repository
- **URL:** https://github.com/danielflanigan/resonator
- **Date:** Accessed 2026-11-16 (page content dated 2018-05-22).
- **Excerpt (verbatim, README via GitHub page):**
  > "Fit and analyze scattering parameter data from resonators ... The fitter object (`r` above) makes the best-fit parameters as well as quality factors, energy decay rates, and the standard errors of all of these available for attribute access."
- **Context:** Useful cross-check against resonator_tools for the preregistered analysis (two independent fitters guarding against algorithm-specific bias). Built on lmfit; error propagation included.
- **Confidence:** Medium-High (README excerpt verified; activity low).

## 3. Allan deviation / clock stability

### Claim 7 — allantools (aewallin) is the reference open-source Python implementation of Allan/overlapping/Hadamard/total deviations for clock-stability analysis
- **Source:** aewallin/allantools GitHub repository
- **URL:** https://github.com/aewallin/allantools ; docs https://allantools.readthedocs.org ; PyPI AllanTools
- **Date:** Accessed 2026-11-16; repo updated 2026-11-09; ~277 stars, 90 forks; also archived in the Astrophysics Source Code Library (ascl:1804.021)[^3^].
- **Excerpt (verbatim, README):**
  > "A python library for calculating Allan deviation and related time & frequency statistics. LGPL v3+ license."
  > "`oadev()` | Overlapping Allan deviation | General purpose - most widely used - first choice"
  > "`gradev()` | Gap resistant overlapping Allan deviation"
  > "Input data should be evenly spaced observations of either fractional frequency, or phase in seconds."
- **Context:** Directly serves LOC-1's GPSDO verification and any frequency-stability claim: characterize the 10 MHz GPSDO reference (oadev of fractional-frequency logs), assess drift of the measured resonance frequency over long averaging times, and use `gradev()` if the randomized schedule introduces data gaps. Includes noise generators for pipeline validation. Note license is LGPL v3+ per current README (ASCL record says "GPL v3+" — treat as LGPL/GPL-family; fine for analysis use, check before code inclusion).
- **Confidence:** High.

### Claim 8 — allantoolkit is a modernized allantools fork adding automatic noise identification, bias correction, and chi-squared confidence intervals
- **Source:** amv213/allantoolkit (GitHub) + project site
- **URL:** https://github.com/amv213/allantoolkit ; https://amv213.gitlab.io/allantoolkit/
- **Date:** Accessed 2026-11-16; repo updated 2025-09-11; 7 stars.
- **Excerpt (verbatim, project site):**
  > "This fork was born in an effort to implement some key missing features: automatic noise identification for all frequency stability analysis types, bias correction for all biased frequency stability analysis types, and calculation of confidence intervals based on chi-squared statistics."
- **Context:** If LOC-1 needs automated noise-type classification of the GPSDO/resonance-frequency time series (white-PM vs flicker-PM etc.) for the preregistration's statistical model, this fork supplies it — but it is young and low-adoption; validate against allantools/Stable32 test vectors first.
- **Confidence:** Medium (self-described features; low community validation).

### Claim 9 — paulvee/GPSDO-Monitoring is a worked example of long-term GPSDO data logging pipelines (RPi + Python + systemd + cron)
- **Source:** paulvee/GPSDO-Monitoring GitHub repository (README.md)
- **URL:** https://github.com/paulvee/GPSDO-Monitoring
- **Date:** Accessed 2026-11-16; 14 stars; companion project paulvee/Lars-GPSDO-V1 (44 stars).
- **Excerpt (verbatim, README.md):**
  > "Monitoring, measuring and logging data from a high precision 10MHz GPS disciplined oscillator (GPSDO) ... The RPi runs two scripts, one to capture the serial data, and a second script that runs at mid-night, compresses the log file and sends me an e-mail with the collected results."
- **Context:** A pragmatic template for LOC-1's continuous clock-monitoring infrastructure: serial capture script + systemd service (`ser_mon_gpsdo.service`) + nightly rotation — exactly the pattern needed to generate the long evenly-spaced frequency logs that allantools consumes.
- **Confidence:** High (README verified); note author states "This project is no longer in use by me, but have a look for inspiration."

## 4. Laser Doppler vibrometry (LDV) data handling

### Claim 10 — PolytecController (imec-int) is an MIT-licensed Python package to read Polytec .svd/.pvd vibrometer files and to trigger PSV/VibSoft scans via COM automation
- **Source:** imec-int/PolytecController GitHub repository (README.md, LICENSE)
- **URL:** https://github.com/imec-int/PolytecController
- **Date:** Accessed 2026-11-16; repo updated 2026-09-08; 1 star (very new, created 2025-12-03). License: MIT (LICENSE file verified, "Copyright (c) 2025 imec International").
- **Excerpt (verbatim, README.md):**
  > "A package to control polytec laser doppler vibrometers and extract data from the files they create" (repo description)
  > "Make sure polytec file access is installed on your computer. ... This will allow you to use the functions defined in the polyfile.py file of this repository, which are useful to extract data from .svd or .pvb files."
  > "with Svd(\"mypath\\my_file.svd\") as svd: ... x,y,usd=svd.get_point_data(domain_name=\"FFT\",channel_name=\"Vib\",signal_name=\"Velocity\",display_name=\"Magnitude\",point_index=-1, frame= 0)"
- **Context:** If LOC-1's LDV is a Polytec unit (PSV scanning vibrometer or VibSoft single-point), this handles both halves of the problem: scripted scan triggering (`psv.trigger_scan(...)`) for the randomized measurement schedule, and scripted extraction of velocity FFT data for the Lorentzian fit. Caveats: requires proprietary Polytec File Access / PSV Acquisition installed (Windows COM), and the repo itself warns it is community-maintained and not endorsed by Polytec.
- **Confidence:** High for existence/license; Medium for maturity (1 star, 2025 creation).

### Claim 11 — ifsm/pylotec analyses Polytec-exported .uff time-domain files (modal-analysis oriented)
- **Source:** ifsm/pylotec GitHub repository (search metadata)
- **URL:** https://github.com/ifsm/pylotec
- **Date:** Accessed 2026-11-16; 0 stars, 3 forks; updated 2024-07-12.
- **Excerpt (verbatim, repo description):**
  > "This library analyses .uff files in the time domain that were exported from a Polytec vibrometer."
- **Context:** Fallback/alternative route when data is exported from Polytec software as Universal File Format (.uff) rather than read natively; .uff is also readable by other modal-analysis tools (e.g., pyuff), giving LOC-1 a vendor-neutral archival format. Low maturity — use as reference code, not as a dependency.
- **Confidence:** Medium.

## 5. Lab automation frameworks

### Claim 12 — PyMeasure provides instrument classes plus a Procedure/Results/queue system for scripted, repeatable experiments
- **Source:** pymeasure/pymeasure GitHub repository (README.rst, LICENSE.txt)
- **URL:** https://github.com/pymeasure/pymeasure
- **Date:** Accessed 2026-11-16; repo updated 2026-11-12; ~796 stars, 476 forks. License: MIT (LICENSE.txt verified: "Copyright (c) 2013-2026 PyMeasure Developers ... Permission is hereby granted, free of charge...").
- **Excerpt (verbatim, README.rst):**
  > "PyMeasure makes scientific measurements easy to set up and run. The package contains a repository of instrument classes and a system for running experiment procedures, which provides graphical interfaces for graphing live data and managing queues of experiments."
- **Context:** Best fit for LOC-1's orchestration layer: wrap the VNA (PyVISA) and any serial/GPIB auxiliaries as PyMeasure instruments; encode each measurement run as a `Procedure` whose parameters (position, timestamp, blinded condition code) come from the preregistered randomized schedule; results are auto-logged in a consistent CSV format. The companion catalog pymeasure/python-lab-automation-landscape[^4^] and the LECO protocol (pymeasure/leco-protocol, pyleco) offer a path to distributed control if instruments live on different machines.
- **Confidence:** High.

### Claim 13 — QCoDeS is a heavier-weight, database-backed data-acquisition framework used by the quantum-nanoelectronics community
- **Source:** QCoDeS/Qcodes (microsoft/Qcodes) GitHub repository (README.rst, LICENSE)
- **URL:** https://github.com/microsoft/Qcodes (mirrors to QCoDeS org)
- **Date:** Accessed 2026-11-16; repo updated 2026-11-12; ~470 stars, 369 forks. License: MIT (LICENSE verified: "MIT License. Copyright (c) 2015-2023 by Microsoft Corporation and Københavns Universitet.").
- **Excerpt (verbatim, README.rst):**
  > "QCoDeS is a Python-based data acquisition framework developed by the Copenhagen / Delft / Sydney / Microsoft quantum computing consortium. While it has been developed to serve the needs of nanoelectronic device experiments, it is not inherently limited to such experiments, and can be used anywhere a system with many degrees of freedom is controllable by computer."
- **Context:** Alternative to PyMeasure if LOC-1 wants every sweep logged into a versioned SQLite dataset with full metadata capture (valuable for preregistration audit trails and blinding provenance). Ecosystem add-ons: QCoDeS/Qcodes_contrib_drivers (72 stars, community instrument drivers), toolsforexperiments/plottr (55 stars, live plotting). Heavier learning curve than PyMeasure.
- **Confidence:** High.

## 6. Blinding & randomization frameworks

### Claim 14 — blindr (U8NWXD) is a dedicated, safeguards-rich tool for reversible blinding of data files by random renaming, with a citable track record in an RCT
- **Source:** U8NWXD/blindr GitHub repository (README.md)
- **URL:** https://github.com/U8NWXD/blindr
- **Date:** Accessed 2026-11-16; created 2018-06-26; 0 stars; MATLAB/Octave. License: GNU AGPL v3-or-later (README copyright section verbatim: "This program is free software ... under the terms of the GNU Affero General Public License ... either version 3 of the License, or (at your option) any later version.").
- **Excerpt (verbatim, README.md):**
  > "If the names of the data-files reveal their source, your analysis could be biased by your expectations of which sources should show which results. Blinding the data, hiding identifying information from the analyzer, is one way to mitigate this kind of bias. ... This program automates both blinding and un-blinding files, and it includes safeguards against destroying any information in the process."
  > "Upon blinding, in the same directory as the blinded files, a file `blindingKey.csv` is created. ... stores the original file names in its first column and the blinded file names in its second column."
- **Context:** Almost exactly LOC-1's blinding need: rename the per-run VNA/LDV data files so the analyst cannot tell sphere-position-A from position-B; keep `blindingKey.csv` with a trusted third party until unblinding. Used in a published trial protocol (BMJ Open 2022;12:e058683: "IC-H will use the blindr (https://github.com/U8NWXD/blindr) software to encode the results"[^5^]). MATLAB/Octave code — would likely be re-implemented in Python for LOC-1 (AGPL applies to derivatives).
- **Confidence:** High.

### Claim 15 — randomizr (DeclareDesign) provides formally specified random-assignment procedures (simple/complete/block/cluster) for the randomized measurement schedule
- **Source:** DeclareDesign/randomizr GitHub repository (README.md)
- **URL:** https://github.com/DeclareDesign/randomizr ; docs https://declaredesign.org/r/randomizr/
- **Date:** Accessed 2026-11-16; repo updated 2026-10-27; 38 stars; R package on CRAN.
- **Excerpt (verbatim, README.md):**
  > "**randomizr** generates random assignments for common experimental designs, including simple random assignment, complete random assignment, block random assignment, and cluster random assignment."
  > "`block_ra()`: Under block random assignment, complete random assignment is used within blocks."
- **Context:** Generates the preregistered position-order schedule: e.g., `complete_ra(N = 100, m = 50)` for 50 runs at each sphere position, or `block_ra()` to force balance within time blocks (guarding against slow drift confounding position). Being R, it slots into the preregistration document rather than the Python acquisition stack; assignment CSVs can be exported and fed to PyMeasure procedures. (Note: v2.0.1 README contains an unusual disclosure that it "has been built from the ground up with considerable support from Claude and other AI models" — the team may weigh that when choosing dependencies.)
- **Confidence:** High.

### Claim 16 — VICR (Video & Image Cutter & Randomizer) is a published blinding-by-randomization tool, but with restrictive licensing (patent + CC-BY-NC-ND)
- **Source:** kkihnphd/VICR GitHub repository (README.md); PLOS ONE 2024 paper[^6^]
- **URL:** https://github.com/kkihnphd/VICR
- **Date:** Accessed 2026-11-16; paper 2024-06-26.
- **Excerpt (verbatim, README.md):**
  > "The content of this repository is protected by US provisional patent number 63/659,034, filed on June 12, 2024, and is released for academic use only under the provisions stated in License-CC-BY-NC-ND-4.0.md."
- **Context:** Conceptually relevant (single-researcher blinding via segmentation + randomization; aimed at video/image scoring rather than time-series physics data). The NC-ND license and patent assertion make it unsuitable as LOC-1 code; cite only as prior art demonstrating the blinding-randomization pattern in experimental science.
- **Confidence:** High on content; recommendation: do NOT reuse code.

## 7. Sphere / acoustic-levitation / resonator simulation codes

### Claim 17 — slkiser/acousticLevitation implements the matrix method for acoustic-levitator pressure fields in validated Python code
- **Source:** slkiser/acousticLevitation GitHub repository (README.md)
- **URL:** https://github.com/slkiser/acousticLevitation (based on gitlab.com/ss32/acoustic-levitation by Scott Sexton)
- **Date:** Accessed 2026-11-16; repo updated 2026-10-25; 9 stars. License: MIT ("Distributed under the MIT License." — README).
- **Excerpt (verbatim, README.md):**
  > "This repository implements the matrix method used in the publication [\"Matrix Method for Acoustic Levitation Simulation\"]. Specifically, the results of Section II are written in Python, which describes an acoustic levitator composed of only one circular flat transducer (and with a hole if needed) and one planar reflector."
  > "[`validation.py`](validation.py) is a script that recreated Fig. 2 (a) in [1]."
- **Context:** If LOC-1's sphere is acoustically levitated/coupled, this provides a validated forward model of the trapping pressure field between transducer and reflector — useful for estimating acoustic loading on the sphere resonance and for designing the fixture. Includes an experimental-literature validation case.
- **Confidence:** High for what it does; relevance depends on LOC-1 using acoustic levitation (Medium).

### Claim 18 — mhawarey/eigen-earth-modes is an MIT-licensed single-file visualizer of spheroidal/toroidal free oscillations of an elastic sphere (PREM-referenced mode table)
- **Source:** mhawarey/eigen-earth-modes GitHub repository (README.md)
- **URL:** https://github.com/mhawarey/eigen-earth-modes
- **Date:** Accessed 2026-11-16; created 2026-05-17; 0 stars. License: MIT (README badge + section).
- **Excerpt (verbatim, README.md):**
  > "Interactive visualizer of Earth's free oscillations (normal modes) — both **spheroidal** (`nSl`) and **toroidal** (`nTl`) — with reference periods compiled from PREM and Masters & Widmer (AGU 1995)."
  > "**27 reference modes** including the famous \"football mode\" ₀S₂ (T ≈ 53.9 min) and radial mode ₀S₀."
- **Context:** The same spherical-harmonic mode taxonomy (ₙSₗ, ₙTₗ) governs the LOC-1 copper sphere's elastic eigenmodes; this repo is a didactic visualization and frequency table for Earth-scale, NOT a general elastic-sphere eigenfrequency solver. It is useful for mode-nomenclature/geometry intuition; the actual copper-sphere eigenfrequencies should be computed from elastic theory (e.g., via FEM or analytic Rayleigh-Lamb sphere solutions) — no mature open-source "solid elastic sphere eigenmode" package was found in these searches (gap).
- **Confidence:** Medium-High (README verified; limited direct applicability).

### Claim 19 — python-lab-automation-landscape is a curated catalog of Python lab-automation packages, useful as a discovery hub for further LOC-1 tooling
- **Source:** pymeasure/python-lab-automation-landscape GitHub repository (search metadata)
- **URL:** https://github.com/pymeasure/python-lab-automation-landscape
- **Date:** Accessed 2026-11-16; repo updated 2026-10-30; 19 stars.
- **Excerpt (verbatim, repo description):**
  > "A catalog/overview of Python packages in the area of lab automation."
- **Context:** Meta-resource: maintained by the PyMeasure team; the right place to check for any additional niche drivers (e.g., LDV controllers, stage controllers for moving between the two sphere positions) before writing new code.
- **Confidence:** High.

---

## Summary table

| # | Repo | Category | Stars (2026-11-16) | License | LOC-1 role |
|---|------|----------|--------------------:|---------|------------|
| 1 | scikit-rf/scikit-rf | VNA/S11 analysis | 967 | BSD-3 | Touchstone I/O, SOL cal, de-embedding |
| 2 | NanoVNA-Saver/nanovna-saver | VNA acquisition | 1246 | GPL-3 | NanoVNA sweeps → Touchstone |
| 3 | pyvisa/pyvisa (+pyvisa-py, pyvisa-mock) | Instrument control | 976 | MIT (metadata) | SCPI control of bench VNA; offline test mocks |
| 4 | lmfit/lmfit-py | Lorentzian fitting | 1245 | BSD-3 | LorentzianModel/DampedOscillatorModel → f0, FWHM, Q |
| 5 | sebastianprobst/resonator_tools | Complex circle fit | 58 | unstated in README | Complex S11 circle fit → Qi/Qc/Ql |
| 6 | danielflanigan/resonator | Complex S21 fit | n/a (low) | see repo | Independent fitter cross-check |
| 7 | aewallin/allantools | Allan deviation | 277 | LGPL v3+ | GPSDO + resonance-frequency stability |
| 8 | amv213/allantoolkit | Allan fork | 7 | see repo | Noise-ID, bias-corrected ADEV |
| 9 | paulvee/GPSDO-Monitoring | GPSDO logging | 14 | see repo | 10 MHz clock logging pipeline template |
| 10 | imec-int/PolytecController | LDV handling | 1 | MIT | Polytec .svd/.pvd read + scan trigger |
| 11 | ifsm/pylotec | LDV handling | 0 | see repo | Polytec .uff time-data analysis |
| 12 | pymeasure/pymeasure | Lab automation | 796 | MIT | Scheduled/blinded run orchestration |
| 13 | QCoDeS/Qcodes | Lab automation | 470 | MIT | DB-backed acquisition, audit trail |
| 14 | U8NWXD/blindr | Blinding | 0 | AGPL-3+ | Reversible file blinding w/ key CSV |
| 15 | DeclareDesign/randomizr | Randomization | 38 | see CRAN | Preregistered block-random schedule |
| 16 | kkihnphd/VICR | Blinding (bio) | n/a | CC-BY-NC-ND + patent | Prior art only — do not reuse code |
| 17 | slkiser/acousticLevitation | Acoustic sim | 9 | MIT | Levitation pressure-field forward model |
| 18 | mhawarey/eigen-earth-modes | Sphere modes | 0 | MIT | nSl/nTl mode taxonomy intuition |
| 19 | pymeasure/python-lab-automation-landscape | Catalog | 19 | see repo | Discovery hub for extra drivers |

## Gaps and cautions
- **No mature open-source solver for elastic solid-sphere (Rayleigh–Lamb) eigenfrequencies was found**; closest are the Earth-science normal-mode tools (#18, and Gravity-Geodesy-China-Community/pyNormalMode, 0 stars). Expect to implement analytic sphere-mode formulas or use FEM (e.g., FEniCS-based codes such as MicheleCozzolino2000/Thermoviscous-fem-solver exist for acoustics).
- **resonator_tools license is not stated in its README** — confirm with the author before vendoring.
- **PolytecController depends on proprietary Polytec File Access / PSV software** (Windows COM); it automates but does not replace the vendor stack.
- **allantools license reported inconsistently** as LGPL v3+ (README) vs GPL v3+ (ASCL record) — treat as copyleft-family either way.
- **VICR is patent-encumbered (US provisional 63/659,034) and CC-BY-NC-ND** — excluded from reuse.
- Preregistration itself is a platform workflow (OSF), not a repo; randomizr/blindr cover the *implementable* parts (randomization sequence + blinding key management).

## Footnotes
[^1^]: Arsenovic et al., "scikit-rf: An Open Source Python Package for Microwave Network Creation, Analysis, and Calibration," feature list excerpt retrieved via https://www.researchgate.net/publication/357489706 (accessed 2026-11-16); project site http://scikit-rf.org.
[^2^]: "Circle fit optimization for resonator quality factor measurements," Phys. Rev. Research 6, 013329 (2024-03-27), https://link.aps.org/doi/10.1103/PhysRevResearch.6.013329 (accessed 2026-11-16).
[^3^]: Astrophysics Source Code Library record ascl:1804.021, https://ascl.net/1804.021 (accessed 2026-11-16): "allantools calculates Allan deviation and related time & frequency statistics."
[^4^]: pymeasure/python-lab-automation-landscape, https://github.com/pymeasure/python-lab-automation-landscape (accessed 2026-11-16).
[^5^]: "Neuromuscular and structural tendon adaptations ... protocol for a randomised controlled trial," BMJ Open 2022;12:e058683, https://bmjopen.bmj.com/content/12/7/e058683 (accessed 2026-11-16).
[^6^]: Kihn, Thomas & Brelidze, "VICR: A novel software for unbiased video and image analysis in scientific research," PLOS ONE 19(10):e0312619 (2024), via https://ouci.dntb.gov.ua/en/works/4V2mWqY4/ (accessed 2026-11-16).
