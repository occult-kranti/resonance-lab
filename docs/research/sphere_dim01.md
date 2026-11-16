# LOC-1 Deep-Research — Dimension 01: Patent Landscape for Resonance-Based Position/Location/Displacement Sensing and Spherical/Cavity Resonators

**Sub-agent:** sphere_dim01 (patent landscape)
**Date of research:** 2025 (this session)
**Method:** ~40 distinct English-language queries (coarse-to-fine) against web search engines, Google Patents surrogates (Justia, Patsnap/Eureka, patentimages), EPO Publication Server (data.epo.org full-text PDFs), OEPM/Invenes, OSTI, and NASA NTRS patent archives. Direct patents.google.com and worldwide.espacenet.com fetches were blocked in this environment; verbatim excerpts were instead obtained from EPO full-text PDFs, USPTO-grant PDFs mirrored on NTRS/uknowledge/cws.auburn/traskbritt, and Justia. All patent numbers, dates, and quoted text were cross-checked against at least one primary (EPO/USPTO/NTRS/OSTI) source where possible.

**Bottom line up front:** The patent record is *extensive* for resonance-shift position/displacement sensing (cavity-length → resonant-frequency transduction is a 40-year-old, repeatedly patented idea), and *extensive* for spherical/cavity/shell resonators used as metrological references (acoustic gas-constant spheres, dielectric resonator thermometers, hemispherical resonator gyroscopes). **No patent located — and none plausibly exists — claiming that an object's intrinsic resonance encodes its absolute position in space ("position memory").** Every located claim traces the resonance shift to an *external, ordinary cause*: changed cavity geometry, changed boundary conditions, mass/stress/temperature loading, electromagnetic coupling to a target, or Coriolis forces. The closest fringe patent (Woodward's Mach-effect mass-fluctuation patent US 5,280,864) concerns acceleration-dependent inertia, not position-dependent resonance, and is not experimentally accepted.

---

## A. Resonance-shift displacement / position sensing (ordinary external-field/geometry mechanisms)

### Finding A1 — Caterpillar EP0303595B1: hydraulic cylinder *is* the resonant cavity; position read from resonant frequency

**Claim:** Apparatus detecting the linear position of a piston/rod in a hydraulic cylinder by exciting a variable-length annular resonant cavity in TEM mode and reading out the resonant frequency, which maps one-to-one to cavity length.
**Source:** European Patent EP 0 303 595 B1, "Linear position sensor" (EPO publication server, granted specification).
**URL:** https://data.epo.org/publication-server/rest/v1.2/patents/EP0303595NWB1/document.pdf ; Google Patents family page https://patents.google.com/patent/EP0303595B1/en
**Date:** Filed via PCT/US87/00107 (international publication WO 88/03652, 19.05.1988); EP granted and published **10.03.1993**.
**Excerpt (verbatim, description):** "This invention relates generally to an apparatus for detecting linear position using electromagnetic radiation, and more particularly, to an apparatus for detecting linear position of a movable element by introducing a radio frequency (RF) signal into an annular resonant cavity." … "Operation of the apparatus 10 is based upon the unusual similarities exhibited between the coaxial cavity 20 of the cylinder 12 and a coaxial cable. Both devices support transverse electromagnetic waves, and the cavity 20 accepts maximum R.F. power at resonant frequencies. **The resonant frequency of the cavity 20 is primarily dependent upon the length of the cavity Lc.** From this principle, one recognizes that by determining the resonant frequency of the cavity 20, the length of the cavity Lc can be derived and hence, the position of the work implement is directly proportional to the resonant frequency."
**Excerpt (verbatim, claim 1):** "An apparatus (10) for detecting the linear position of a piston (18) and a piston rod (16) movable relative to a cylinder (14), the piston, piston rod and cylinder defining a variable length annular resonant cavity (20), … characterised in that the microwave energy is excited by the means (42) in a transverse electromagnetic wave mode (TEM); and the means (42) for exciting the microwave energy is located to excite the TEM in the annular cavity between the rod (16) and the cylinder (14)."
**Context:** Canonical "cavity-length → resonance → position" patent. The resonance shift is *fully accounted for by classical cavity geometry* (f_res = nc/(2L_c√ε_r)). Nothing about position of the cavity *in space*; the cavity's own extension changes. Direct precedent: resonance-based position readout is old, licensed-industrial technology (Caterpillar).
**Confidence:** high.

### Finding A2 — Caterpillar US5325063A and DE19537877A1: piston position sensing via microwave resonance

**Claim:** Position of a piston inside a cylinder determined from microwave resonant behavior of the cylinder cavity; companion patent handles suppression of spurious harmonic detections.
**Source:** Liebherr paper reference list (TU Dresden Qucosa repository), citing the Caterpillar patents.
**URL:** https://tud.qucosa.de/api/qucosa:29406/attachment/ATT-0/
**Date:** US 5,325,063 A granted **28.06.1994**; DE 195 37 877 A1 filed 11.10.1994.
**Excerpt (verbatim):** "/1/ Caterpillar Inc., Piston position-sensing system for hydraulic cylinder, Patent DE 19537877 A1 (11.10.94). /2/ Caterpillar Inc., Linear position sensor with means to eliminate spurians harmonic detections, Patent US 5325063A (28.06.94)."
**Context:** Confirms an industrial patent family around resonance-based piston position sensing, active 1987–1994. Ordinary-geometry mechanism throughout.
**Confidence:** high (existence/title/date), med (claim detail not re-read in full).

### Finding A3 — Balluff DE 10 2009 055 363 A1 / DE 10 2009 055 445 A1: microwave piston-position sensing

**Claim:** Method and microwave sensor device for determining the position of a piston in a piston-cylinder unit using microwaves (cavity/waveguide resonance detuning by piston position).
**Source:** Same Liebherr reference list (TU Dresden Qucosa).
**URL:** https://tud.qucosa.de/api/qucosa:29406/attachment/ATT-0/
**Date:** DE 10 2009 055 363 A1 published **30.06.2011**; DE 10 2009 055 445 A1 published **07.07.2011**.
**Excerpt (verbatim):** "/3/ Balluff GmbH, Verfahren zur Bestimmung der Position eines Kolbens eines Kolbenzylinders und Mikrowellen-Sensorvorrichtung, Offenlegungsschrift DE 10 2009 055 363 A1 (2011.06.30). /4/ Balluff GmbH, Verfahren und Vorrichtung zur Ermittlung der Position eines Kolbens eines Kolbenzylinders mit Mikrowellen, Offenlegungsschrift DE 102009 055 445 A1 (2011.07.07)."
**Context:** A second industrial actor independently patenting microwave-resonance position sensing two decades after Caterpillar — evidence the concept is mainstream sensor engineering, not novelty physics.
**Confidence:** high (existence/date/title), med (claim scope).

### Finding A4 — UPV/EHU ES2377405: nanometre-resolution displacement sensor from RF resonant cavities

**Claim:** Displacement sensor in which a conductive vessel forming one or more resonant electromagnetic cavities is joined to a member; displacement of the member changes cavity geometry, which changes resonance parameters; displacement down to nanometres computed therefrom.
**Source:** Universidad del País Vasco patent registry (application P200930648), confirmed by OEPM Invenes entry.
**URL:** https://ekoizpen-zientifikoa.ehu.eus/patentes/P200930648 ; OEPM: https://consultas2.oepm.es/InvenesWeb/detalle?referencia=P200930648
**Date:** Application P200930648 filed **04.09.2009**; published **ES2377405A1, 27.03.2012**; granted ES2377405B1, 29.01.2013. Inventors: Víctor Echevarría Ecenarro, Julio Lucas Torralba (also Elytt Energy S.L.).
**Excerpt (verbatim, abstract, Spanish):** "La invención consiste en un sensor de desplazamiento mediante cavidades electromagnéticas resonantes (7, 8). Un recipiente (1) conductor que forma una o varias cavidades resonantes, unido a un miembro solidario (3), varía su geometría en función de un desplazamiento del miembro. La variación en la geometría de la/las cavidades resulta en una variación de los parámetros de resonancia. Dichos parámetros son mesurables y a partir de los mismos se calcula el desplazamiento. Gracias a este sistema se pueden medir con gran precisión desplazamientos en el orden de los nanómetros." (Translation: a displacement sensor using resonant electromagnetic cavities; a conductive vessel joined to a member changes its geometry with the member's displacement; the geometry change varies the resonance parameters, which are measured to compute the displacement; nanometre-scale displacements can be measured.)
**Context:** Same group's thesis (J. Lucas Torralba, UPV) states: "the main idea is to use the strong dependency of a high-Q resonant cavity with respect to its geometry in order to use it as a displacement sensor … a patent was achieved on the novel idea of using resonant RF cavities for very accurate displacement sensing." Their follow-on work used exactly the LOC-1-style instrumentation (VCO sweeps, resonant-frequency tracking; cf. Jauregui-Duran et al., Rev. Sci. Instrum. 86, 034709 (2015) "Reliable and integrated technique for determining resonant frequency in RF resonators. Application to a high-precision resonant cavity-based displacement sensor"). Again: sensitivity derives from *geometry change*, not from position in space.
**Confidence:** high.

### Finding A5 — US 11,828,628 (2023): slow-wave-structure resonant position sensor; explicit statement of the physics

**Claim:** Position sensing apparatus for harsh environments: a coupled slow-wave structure resonator plus conductive target; target motion changes resonant frequency/impedance/phase, converted to position.
**Source:** Justia mirror of granted US patent.
**URL:** https://patents.justia.com/patent/11828628
**Date:** Granted **28.11.2023** (application filed 15.05.2020).
**Excerpt (verbatim, background — the canonical statement of how this entire patent class works):** "The usefulness of an RF (radio frequency) or microwave electromagnetic field for the purpose of linear position measurement is known. **When an electromagnetic field is excited near a movable object, the parameters of the electromagnetic field, such as resonant frequency, phase, or amplitude, vary with the change of position of the movable object.** The electromagnetic field parameters may be converted into an electronic indication of position, displacement, velocity, or acceleration of the movable object." … (describing prior-art US 7,216,054 "DIST" sensor): "If a conductive surface begins to cover the coil, the capacitance and resonant frequency of the sensing element change dramatically… The change in frequency is linear with the movement of the conductive surface… Because frequency can easily be measured to better than one part in one million, this translates to a reproducibility (and accuracy after mapping) of better than one micron over sensor lengths up to one meter."
**Context:** Explicit articulation, in a 2023 granted patent, that position sensing via resonance works through *near-field electromagnetic interaction with a movable target* — an external, geometry/coupling-based mechanism. This is the exact analog of the "ordinary" interpretation available for any LOC-1 resonance shift (chamber walls, mounts, vibrometer standoff).
**Confidence:** high.

### Finding A6 — NASA US 7,086,593 B2: passive L-C resonant sensors measuring "location, rotation" among other quantities

**Claim:** Wireless interrogation of inductively powered L-C resonant sensors whose response frequency/amplitude/bandwidth encode physical states, including displacement/location, via changes in capacitance/inductance (e.g., antenna–sensor separation, plate overlap).
**Source:** USPTO grant PDF mirrored on NASA NTRS.
**URL:** https://ntrs.nasa.gov/api/citations/20060050108/downloads/20060050108.pdf
**Date:** Filed **30.04.2004**; granted **08.08.2006** (Woodard, Taylor, Shams, Fox, Bryant; NASA Langley). Continuation US 7,159,774 B2 (09.01.2007).
**Excerpt (verbatim):** "The interrogator and software can be used with L-C sensors that measure a variety of parameters, including temperature, pressure, strain, **location**, rotation, and other parameters. The sensors convey basic information (e.g., frequency, bandwidth, etc.) that is dependent solely on the properties being measured…" … "**Inductive variations can result from position variations to conductive surfaces. The position variations change both frequency and amplitude of the sensor 16 response.** When a sensor's 16 constituent values remain fixed, changes to the antenna/sensor separation produce an inverse variation of response amplitude."
**Context:** Even when a patent says a resonant sensor measures "location," the mechanism is explicitly electromagnetic coupling geometry (separation, overlap), not an intrinsic spatial memory of the resonator. Directly relevant counter-evidence template for LOC-1.
**Confidence:** high.

### Finding A7 — EP1828722B1 (and cited US5796250A): inductive position sensing with passive resonant circuits

**Claim:** Inductive position detector: a first body carries transmit/receive windings, a second body carries an electrically resonant passive intermediate device whose geometry varies along the measurement axis; mutual inductance (and hence resonant-circuit response) encodes relative position.
**Source:** EPO publication server HTML of granted EP 1 828 722 B1, "Inductive position sensor."
**URL:** https://data.epo.org/publication-server/rest/v1.2/patents/EP1828722NWB1/document.html
**Date:** Granted (B1 publication) **02.11.2011**.
**Excerpt (verbatim):** "[0013] In its broadest aspect, the invention provides a device for measuring the position of a first body relative to a second body comprising: a first body which further comprises an antenna arrangement of transmit and receive windings and a second body which comprises an electrically resonant intermediate device whose inductor width, measured at right angles to the measurement axis, varies such that the level of mutual inductance between the transmit and receive windings varies according to the position of the two bodies." … "[0007] Patent US 5,796,250 discloses a rotary displacement encoder in which various rotors each contain an electrically resonant, passive circuit." … "[0074] To a significant extent, variation in the position of the electrical intermediate device [2] relative to the antenna [1] in axes other than the main measurement axis does not affect the measured value."
**Context:** Resonant *tags* whose coupling varies along a track — position is encoded by designed geometry variation, demonstrating again that "resonant position sensing" patents are all about engineered external coupling. US5796250A (rotary encoder with resonant passive rotors) verified via this citation.
**Confidence:** high.

### Finding A8 — MEMS resonant accelerometer / vibrating-beam patent class: resonance shift from inertial loading, not position

**Claim (representative):** Resonant beam accelerometer in which tuning-fork resonant frequencies shift in opposite directions under acceleration acting on a proof mass; acceleration inferred from frequency shift.
**Source:** Patsnap Eureka patent-landscape analysis of MEMS vibrating beam accelerometer patents (108 records, 2009–2026), representative record US 12,379,391 B2 (Sandia).
**URL:** https://www.patsnap.com/resources/blog/rd-blog/mems-vibrating-beam-accelerometer-patent-landscape-patent-landscape/
**Date:** US12379391B2 published **05.08.2025**; landscape data cut-off 31.08.2026 (per page).
**Excerpt (verbatim):** "A vibrating beam accelerometer (also called a resonant beam accelerometer) infers acceleration from a shift in the resonant frequency of a beam or tuning fork attached to a proof mass, rather than from static deflection." … "The resonant frequencies of the tuning forks shift in opposite directions under acceleration parallel to the beams; a lid and stator cap seal the active portions in vacuum to raise sensitivity."
**Context:** The entire navigation-grade accelerometer industry rests on resonance shifts caused by *stress/inertia*, i.e., by the object's dynamics, never by its static location. Relevant because LOC-1's sphere is on a mount in a vacuum chamber: mount stress/thermal paths are the patent-recognized lever arms on resonance.
**Confidence:** med-high (landscape page is secondary, but consistent with the primary resonant-accelerometer literature; e.g., NTRS-mirrored Tang NASA vibrating-gyro/accelerometer patent text, https://ntrs.nasa.gov/api/citations/20080004534/downloads/20080004534.pdf).

### Finding A9 — Quartz resonator force/pressure transducer family (Quartex/Quartzdyne): resonance as a *force* reference

**Claim:** Vibratory (double-ended tuning fork / thickness-shear) quartz transducer whose natural resonant frequency changes with applied axial force/pressure; dimensions chosen to avoid spurious modes.
**Source:** EPO publication server, EP 0 050 307 A2, "Resonator force transducer" (Quartex Inc.; inventors Errol P. EerNisse, Jerome M. Paros); plus US 9,528,896 B2 (Quartzdyne) grant PDF.
**URL:** https://data.epo.org/publication-server/rest/v1.2/patents/EP0050307NWA2/document.pdf ; https://traskbritt.com/wp-content/uploads/2024/03/US9528896B2.pdf
**Date:** EP0050307A2 filed **14.10.1981**, published 28.04.1982 (priority US 20.10.1980). US9528896B2 granted **27.12.2016**.
**Excerpt (verbatim, EP0050307A2):** "This desired resonant frequency changes with a change in the application of compressive or tensile forces in the longitudinal direction to the transducer, and this characteristic enables use of the device as a force transducer." … "When either a compressive or tensile force (longitudinal or axial) is applied to the bars 8 and 12, the frequency of vibration of the bars is caused to change, and the magnitude of the change serves as a measure of the applied force."
**Excerpt (verbatim, US9528896B2 reference list, showing the patent lineage):** "4,550,610 A 11/1985 EerNisse … 4,660,420 A 4/1987 EerNisse …" and EerNisse/Ward US 4,545,638; US 4,592,663 "Resonator Temperature Transducer."
**Context:** Decades of patents establish the known levers on a resonator's frequency: force, stress, temperature. None list "position in space." This is the reference-resonator art that LOC-1's GPSDO-disciplined frequency measurement would be judged against.
**Confidence:** high.

---

## B. Spherical / cavity / shell resonators used as references (metrology)

### Finding B1 — US 5,355,731: sphere resonance spectrum used to grade spheres (sphericity), i.e., resonance ⇐ geometry/material

**Claim:** Method for grading spherical objects (e.g., bearing balls): generate a resonant ultrasound spectrum, identify degenerate sphere-resonance frequencies, derive Poisson's ratio and "best" spherical diameter, then extract asphericity from fine-structure splitting for accept/reject.
**Source:** OSTI record of US patent (Dixon, Migliori, Visscher; Los Alamos).
**URL:** https://www.osti.gov/biblio/869554 and https://www.osti.gov/biblio/7173812
**Date:** Issued **18.10.1994** (per OSTI biblio 7173812; the other OSTI record uses the Jan-1994 database convention).
**Excerpt (verbatim):** "A method is provided for grading production quantities of spherical objects, such as roller balls for bearings. A resonant ultrasound spectrum (RUS) is generated for each spherical object and a set of degenerate sphere-resonance frequencies is identified. From the degenerate sphere-resonance frequencies and known relationships between degenerate sphere-resonance frequencies and Poisson's ratio, a Poisson's ratio can be determined, along with a 'best' spherical diameter, to form spherical parameters for the sphere. From the RUS, fine-structure resonant frequency spectra are identified … an asphericity value is determined … compared with predetermined values to provide a measure for accepting or rejecting the sphere."
**Context:** The most on-point sphere-resonance patent: a sphere's resonance spectrum is treated as a *fingerprint of its geometry and elastic constants* — used industrially for QA. Nothing in the claim set ties the spectrum to where the sphere is located. For LOC-1 this is the strongest patented statement of the orthodox view: sphere resonances = f(shape, material, boundary conditions).
**Confidence:** high.

### Finding B2 — Moldover quasi-spherical resonators (NIST) and US 8,123,399 B2 dielectric resonator thermometer: cavity resonators as *primary standards*

**Claim:** (a) Quasi-spherical acoustic cavity resonators used for best-in-world measurements of the Boltzmann constant and thermodynamic temperature (not patented as such; NIST contextual record). (b) US8123399B2 "Dielectric resonator thermometer and a method of using the same": temperature inferred from the temperature-dependent resonant frequency of a dielectric resonator.
**Source:** NIST staff pages (Moldover; Strouse); Florida virtual licensing (flintbox) entry for US8123399.
**URL:** https://www.nist.gov/people/michael-r-moldover ; https://www.nist.gov/people/gregory-f-strouse ; https://flc.flintbox.com/technologies/049385e7-9231-47b7-907e-36a56db8f3dc
**Date:** US8123399B2 issued **2012** (per NIST Strouse page). Moldover et al. gas-constant measurement 1988.
**Excerpt (verbatim, NIST):** "Moldover invented quasi-spherical cavity resonators; NIST and others used them to make the best-in-the-world measurements of the Boltzmann constant and of the thermodynamic temperature from 7 K to 550 K." … "one U.S. Patent (2012): Dielectric resonator thermometer and a method of using the same (w/ M. Moldover and D. Ripple), Patent No. US 8,123,399 B2".
**Excerpt (verbatim, Physics Today obituary, 09.10.2025):** "Further diversification included the experimental and theoretical development of resonators that could host acoustic and microwave resonances that led to two US patents. These tools have been used at NIST and elsewhere to measure properties of fluids, determine the thermodynamic temperature, and fix the value of the gas constant R."
**Context:** The exact instrumental lineage of LOC-1's hollow copper sphere: metal quasi-spherical resonators are the world's most precise acoustic references, and their frequencies are modeled entirely from dimensions, gas properties, and thermal expansion. These resonators have been *moved between labs/countries* (NIST, LNE-CNAM, INRIM, NPL, NIM) in international comparisons with no position-dependent frequency anomaly ever claimed or patented — had one existed, it would have disrupted the 2019 kelvin redefinition.
**Confidence:** high (for existence and use); med (patent claim detail of US8123399 not fully re-read).

### Finding B3 — Hemispherical resonator gyroscope patents (e.g., US 10,584,967, Northrop Grumman): shell resonance senses *rotation*, via standing-wave precession

**Claim:** HRG sensing system: fused-quartz hemispherical ("wine-glass") shell driven into n=2 standing-wave resonance; rotation about the symmetry axis causes the standing-wave pattern to lag the housing; rotation read from pattern position.
**Source:** Justia mirror of US patent 10,584,967 and application US20180231383A1; corroborating HRG literature (PMC9607085; DTIC ADA581016).
**URL:** https://patents.justia.com/patent/10584967 ; https://patents.justia.com/patent/20180231383 ; landscape: https://www.patsnap.com/resources/blog/rd-blog/hemispherical-resonator-gyroscope-vibrating-shell-design-patent-landscape-patent-landscape/ (194 HRG records, Northrop/Litton top assignees)
**Date:** US10584967 granted **10.03.2020** (application published 16.08.2018).
**Excerpt (verbatim):** "Another example of a CVG is a Hemispherical Resonator Gyroscope (HRG) in which a 'wine glass' shaped resonator is caused to vibrate at a fundamental resonant frequency. In a fundamental or N=2 mode, the displacement of points on the vibrating resonator is in the form of a standing wave with antinodes and nodes that are separated by 45° in the circumferential direction. … In an HRG, an angular rotation applied about the axis of symmetry of the resonator (e.g., input axis) can cause the standing wave to lag in angular displacement relative to the housing, which can thus be indicative of rotation of the HRG about the sensitive axis."
**Context:** Closest patented technology to LOC-1's vibrating metal shell. Crucially, HRGs sense *orientation change* through Coriolis-induced precession of the standing-wave *pattern* — a local inertial effect (Bryan's 1890 wave-inertia effect) — while the resonant *frequency* itself carries no position information. A shell resonator that has flown on >200 spacecraft has never revealed a location-dependent frequency; if intrinsic position memory existed, HRG/INS navigation error budgets would show it.
**Confidence:** high.

### Finding B4 — EP3652500B1 (UCL Business): whispering-gallery-mode inertial sensor

**Claim:** Inertial (acceleration) sensing via a whispering-gallery-mode optical resonator: displacement of a proof element shifts WGM resonance frequency.
**Source:** EPO publication server, granted specification EP 3 652 500 B1, "A whispering gallery mode inertial sensor and method."
**URL:** https://data.epo.org/publication-server/rest/v1.0/publication-dates/20210901/patents/EP3652500NWB1/document.pdf
**Date:** Filed **20.06.2018** (PCT/GB2018/051712; WO 2019/012245); EP granted **01.09.2021**. Proprietor: UCL Business Ltd; inventors Y. Li, P. F. Barker.
**Excerpt (verbatim, bibliographic header):** "(54) A WHISPERING GALLERY MODE INERTIAL SENSOR AND METHOD … (73) Proprietor: UCL BUSINESS LTD London W1T 4TP (GB) (72) Inventors: LI, Ying Lia … BARKER, Peter Francis … (30) Priority: 11.07.2017 GB 201711156".
**Context:** Optical-cavity analog of the same principle: WGM frequency shifts encode *relative displacement within the device* (proof mass vs. cavity). Adds a modern, high-sensitivity cavity-metrology patent to the pattern.
**Confidence:** high (bibliographic), med (claim text not fully excerpted).

### Finding B5 — NASA acoustic levitation patents (US 4,393,706; US 4,573,356; US 4,800,756): cavity resonances used to *control* position of objects

**Claim:** Systems applying acoustic energy at chamber-resonant wavelengths to levitate an object at standing-wave nodes and control its rotation/orientation (Barmatz et al., NASA/JPL).
**Source:** USPTO grant PDFs mirrored on NASA NTRS.
**URL:** https://ntrs.nasa.gov/api/citations/19830024245/downloads/19830024245.pdf (US 4,393,706) ; https://ntrs.nasa.gov/api/citations/19900002973/downloads/19900002973.pdf (US 4,800,756)
**Date:** US4393706 granted **19.07.1983** (filed 18.09.1981); US4800756 granted **31.01.1989** (filed 29.10.1986).
**Excerpt (verbatim, US4800756 abstract):** "Acoustic energy is applied to a pair of locations spaced about a chamber, to control rotation of an object levitated in the chamber. Two acoustic transducers applying energy of a single acoustic mode, one at each location, can (one or both) serve to levitate the object in three dimensions as well as control its rotation." … "As is described in the earlier mentioned U.S. Pat. No. 4,573,356, the levitation positions depend upon the number n, with n = 2 resulting in a single levitation position along the axis halfway between the opposite ends 40, 42 of the cylinder."
**Context:** Inverse configuration to LOC-1: here the *cavity mode structure* fixes the object's equilibrium position in space. Reinforces that in the patent literature, position and resonance are linked through the acoustic/EM field geometry, never through an intrinsic property of the object.
**Confidence:** high.

### Finding B6 — US 6,688,162 B2 magnetoelastic resonant sensors: resonance = f(mass, modulus, geometry); position-sensor use acknowledged

**Claim:** Remote-query magnetoelastic (magnetostrictive ribbon) sensor whose resonant frequency shifts with mass loading/coating; used for thin-film/viscosity/bio measurements; specification expressly notes existing use of magnetoelastic elements in position sensors.
**Source:** USPTO grant PDF mirrored at University of Kentucky (uknowledge) and NASA NTRS.
**URL:** https://ntrs.nasa.gov/api/citations/20080007441/downloads/20080007441.pdf ; https://uknowledge.uky.edu/cgi/viewcontent.cgi?article=1025&context=chemistry_patents
**Date:** Filed 20.10.2001; granted **10.02.2004** (Bachas, Barrett, Grimes, Kouzoudis, Schmidt; Univ. of Kentucky Research Foundation).
**Excerpt (verbatim):** "Although magnetoelastic materials are currently used in connection with position sensors, identification markers, and in the commercial retail arena as anti-theft or, electronic article surveillance (EAS) tags, according to the unique technique of the invention, by examining the shift in the resonant frequency of a magnetoelastic sensor element of the invention to which a given mass load (coating/film/layer) has been applied, the elastic modulus Y of the mass load can be determined…"
**Context:** Another resonant-frequency transduction family. Its governing formula (visible in the patent) makes resonant frequency a function of density, length, mass, and modulus — again a closed list of ordinary material/geometric parameters.
**Confidence:** high.

---

## C. Claims of position-dependent intrinsic resonance ("position memory") — search results

### Finding C1 — Negative result: no patent claims position-dependent intrinsic resonance of an object

**Claim:** (Absence) No located patent claims that an object's intrinsic (mechanical, acoustic, EM cavity) resonant frequency depends on its absolute position/location in space or encodes a memory of prior locations.
**Source:** Multiple targeted queries (see Search Log), e.g. patent "natural frequency of an object" indicates "its position" location → **0 relevant results**; patent "resonant frequency" "independent of position" OR "varies with the location" sensor claim → only ordinary coupling-based sensors (e.g., US7086593B2, RFID antenna sensors); patent resonant frequency "location in space" / "position in space" intrinsic object → only acoustic-levitation and near-field sensor art.
**URL:** (searches; representative returns: https://www.mdpi.com/1424-8220/18/7/2130 — RFID antenna sensor: resonant frequency insensitive to relative position; https://ntrs.nasa.gov/api/citations/20060050108/downloads/20060050108.pdf)
**Date:** searches run this session.
**Excerpt (verbatim, illustrative of what the search space actually contains — MDPI RFID antenna sensor):** "However, this relative position has a little influence on the resonant frequency of the antenna sensor." (i.e., even position-sensitive RF resonant structures are engineered for position *in*variance where possible.)
**Context:** Absence-of-evidence finding. Given that (i) cavity-geometry→resonance sensing is heavily patented since 1987, (ii) sphere/shell resonators are patented metrological references, and (iii) fringe physics (Mach-effect mass fluctuation) *did* get patented, the total absence of any "resonance encodes position" claim is a meaningful signal: no inventor has even attempted to stake such a claim in the patent system, despite low barriers to filing speculative patents.
**Confidence:** med-high (cannot prove universal absence; based on ~10 targeted negative queries across US/EP/ES/DE corpora).

### Finding C2 — US 5,280,864 (Woodward): the nearest fringe analog claims *mass fluctuation with acceleration*, not position-dependent resonance

**Claim:** "Method for transiently altering the mass of objects to facilitate their transport or change their stationary apparent weights" — Mach-effect-based transient mass fluctuations driven by simultaneous acceleration and energy-density change in capacitors.
**Source:** Encyclopedia.pub Woodward Effect entry (citing espacenet records); NASA NTRS bibliographies (Assessing Potential Propulsion Breakthroughs; Prospects for Breakthrough Propulsion).
**URL:** https://encyclopedia.pub/entry/34880 ; https://ntrs.nasa.gov/api/citations/20040070788/downloads/20040070788.pdf
**Date:** Issued **25.01.1994** (J. F. Woodward). Related: US 6,347,766 (Woodward & Mahood, 2002); US 9,287,840 (2016, Space Studies Institute).
**Excerpt (verbatim, NASA bibliography):** "Woodward, J.F. (1994), 'Method for Transiently Altering the Mass of an Object to Facilitate Their Transport or Change their Stationary Apparent Weights,' US Patent # 5,280,864."
**Context:** This is what a patent looks like when someone *does* claim anomalous inertia/position-cosmology coupling: it is about acceleration-synchronized mass fluctuation, not about a resonator's natural frequency encoding where it sits. Even this fringe family does not claim position-dependent resonance. Its experimental status is contested/unconfirmed (NASA BPP assessments) — useful as a cautionary template for evaluating LOC-1's prior-plausibility.
**Confidence:** high (patent existence/date/title), high (that it does not claim position-dependent resonance), n/a (validity of underlying physics — widely doubted).

---

## D. Analysis: what the patent landscape implies for LOC-1

1. **Resonance-shift position sensing is old, crowded art — all external-coupling mechanisms.** Caterpillar (EP0303595B1, US5325063A, DE19537877A1; 1987–1994), Balluff (DE102009055363A1/445A1; 2011), UPV/EHU (ES2377405; 2009–2013), NASA (US7086593B2; 2006), slow-wave/DIST sensors (US7216054, US11828628; through 2023), inductive resonant encoders (EP1828722B1, US5796250A). Every mechanism is: motion changes cavity length / geometry / target coupling → resonant frequency changes. None require or suggest any intrinsic spatial memory.
2. **Sphere/shell/cavity resonators as references are equally well patented/documented** (US5355731 sphere-RUS QA; Moldover quasi-spherical resonators; US8123399B2; HRG family US10584967 + 194-record landscape; WGM EP3652500B1). Their frequencies are modeled and exploited as functions of geometry, material, stress, temperature, and (for HRG) rotation-induced standing-wave precession. Position-in-space never appears as a variable — including in metrology campaigns where resonators were physically relocated between national labs.
3. **The closest "anomaly" patents (Woodward US5280864 family) claim a different effect** (acceleration-locked mass fluctuation) and are experimentally unconfirmed; they establish that the patent system *would* have accepted an intrinsic-position-resonance claim had anyone formulated one — none was found (Finding C1).
4. **Counter-arguments / caveats for the lead:**
   - Absence of a patent claim is not proof of physical impossibility; it is evidence about prior art and about what inventors considered plausible enough to file.
   - Ordinary confounders patented and known to shift a copper sphere's resonance at the ppm–percent level: temperature (thermal expansion — explicitly the basis of US8123399B2), mount stress (EP0050307A2 force-transduction art), residual gas, mode coupling to the vacuum chamber's own EM/acoustic resonances (EP0303595B1-style cavity coupling between the sphere and chamber walls at two different positions — a *real* expected LOC-1 signal source that is entirely mundane), and boundary-condition changes (US5355731 treats support/contact as determining fine-structure splitting).
   - A genuine LOC-1 "two positions give two frequencies" result would most parsimoniously be read as differential chamber-coupling/thermal/mounting systematics — precisely the mechanisms the cited patents exploit.
   - Google Patents/Espacenet were not directly crawlable here; a follow-up pass on those platforms (plus CPC class G01B 7/00, G01H, G01L 1/10, G01C 19/56xx, H03H) is recommended for exhaustive coverage. Non-English full texts (DE/ES) were verified via bibliographic records and third-party reference lists, not full claim reads (med confidence on claim scope for A2/A3/B4).

---

## E. Search log (coarse → fine; all English; ≥15 independent queries)

1. patent resonant frequency shift displacement sensor Google Patents
2. patent spherical acoustic resonator reference frequency metrology
3. patent cavity resonator position sensor location measurement
4. patent "resonant frequency" "position sensor" cavity
5. EP0303595 linear position sensor resonant cavity patent
6. patent microwave cavity resonator displacement measurement piston position
7. patent spherical resonator speed of sound gas constant Moldover
8. patent whispering gallery mode resonator displacement position sensor
9. Feutchwanger Etxebarria patent resonant cavity displacement sensor Google Patents
10. patent inductive resonant position sensor encoder resonant frequency coil
11. patent spherical microwave cavity resonator GPSDO atomic clock frequency reference
12. patent resonant tag position location resonant frequency RFID
13. Google Patents "spherical resonator" acoustic thermometer patent US
14. patent cavity resonator radio altimeter resonant frequency height
15. Etxebarria patente "cavidades resonantes" sensor desplazamiento ES2370669
16. patent quartz resonator force displacement sensor vibrating beam resonant frequency strain
17. patent magnetoelastic resonant ribbon position sensor resonant frequency bias field
18. patent acoustic resonance liquid level sensor resonant frequency cavity
19. US5487994 patent spherical (exploratory; not pursued)
20. patent "Mach effect" OR "Mach's principle" inertial mass fluctuation thrust Woodward patent number
21. ES2340167 OR WO2011 "sensor de desplazamiento" "cavidades resonantes" Universidad País Vasco
22. US4751849 force-sensitive resonator load cell patent Paros date
23. EP0303595 "linear position sensor" inventor assignee filing date resonant cavity piston
24. patent "resonant frequency" "location in space" OR "position in space" intrinsic object
25. DE102009055363 Balluff Mikrowellen Sensorvorrichtung Kolbenposition patent abstract
26. NASA patent magnetoelastic sensor resonant frequency Grimes patent number US
27. "P200930648" OR "ES2359123" sensor desplazamiento cavidades resonantes patente
28. patent "spherical cavity resonator" maser OR hydrogen OR frequency standard
29. hemispherical resonator gyroscope patent vibrating shell standing wave position
30. Moldover patent resonator NIST "spherical resonator" patent number
31. Etxebarria patents.google.com "displacement sensor" resonant cavities ES patent
32. resonant ultrasound spectroscopy patent sphere sample resonance frequencies
33. patent resonant frequency "depends on" "position of the object" location sensing claim
34. patent cavity resonator distance measurement "resonant frequency" displacement claim G01B
35. "sensor de desplazamiento basado en cavidades resonantes" patente ES Etxebarria Lucas número
36. EP3652500 whispering gallery mode inertial sensor applicant BAE filing date
37. patent "natural frequency of an object" indicates OR determines "its position" location (0 results)
38. US5325063 linear position sensor spurious harmonic detections Caterpillar resonant
39. ES2377405 sensor desplazamiento cavidades resonantes WO abstract
40. US8123399 "dielectric resonator thermometer" Moldover abstract
41. US7216054 DIST sensor position resonant frequency patent abstract
42. EP0050307 resonator force transducer Quartex EerNisse patent
43. US5280864 Woodward "transiently altering the mass" patent 1994
44. Barmatz acoustic levitation controlling rotation patent number US 1983 NASA
45. US20230072687 resonant accelerometer patent abstract frequency
46. patent magnetoelastic position sensor resonant frequency "magnetoelastic" linear position claim
47. patent "resonant frequency" "independent of position" OR "varies with the location" sensor claim
48. NASA patent "magnetic field response" acquisition system L-C sensor Woodard Taylor patent number
49. US5355731 "sphericity determination" issued October 1994 Migliori

**Primary full-text sources actually opened:** EPO EP0303595B1 PDF (complete: description + claims); EPO EP0050307A2 PDF (complete); EPO EP1828722B1 HTML (partial, incl. claims); EPO EP3652500B1 PDF header; NTRS US4800756 PDF (complete); NTRS US4393706 PDF (header/abstract); NTRS/UKY US6688162B2 PDF (complete); NTRS US7086593B2 PDF (complete); TraskBritt US9528896B2 PDF (header/refs); Justia US11828628 (extensive text); Justia US10584967/US20180231383 (background). Blocked: patents.google.com, worldwide.espacenet.com, consultas2.oepm.es (detail page), ekoizpen ehu patent page (content recovered via search snippets).

## F. Footnotes (source URLs)

[^1^]: EP0303595B1 full text (EPO): https://data.epo.org/publication-server/rest/v1.2/patents/EP0303595NWB1/document.pdf
[^2^]: Liebherr cylinder paper, reference list (Caterpillar DE19537877A1, US5325063A; Balluff DE102009055363A1, DE102009055445A1): https://tud.qucosa.de/api/qucosa:29406/attachment/ATT-0/
[^3^]: UPV/EHU patent registry P200930648 (ES2377405A1): https://ekoizpen-zientifikoa.ehu.eus/patentes/P200930648 ; OEPM Invenes: https://consultas2.oepm.es/InvenesWeb/detalle?referencia=P200930648
[^4^]: US11828628 (Justia): https://patents.justia.com/patent/11828628
[^5^]: US7086593B2 (NTRS mirror): https://ntrs.nasa.gov/api/citations/20060050108/downloads/20060050108.pdf
[^6^]: EP1828722B1 (EPO HTML): https://data.epo.org/publication-server/rest/v1.2/patents/EP1828722NWB1/document.html
[^7^]: MEMS vibrating-beam accelerometer patent landscape (Patsnap/Eureka): https://www.patsnap.com/resources/blog/rd-blog/mems-vibrating-beam-accelerometer-patent-landscape-patent-landscape/
[^8^]: EP0050307A2 (EPO): https://data.epo.org/publication-server/rest/v1.2/patents/EP0050307NWA2/document.pdf
[^9^]: US9528896B2 PDF (TraskBritt): https://traskbritt.com/wp-content/uploads/2024/03/US9528896B2.pdf
[^10^]: US5355731 OSTI records: https://www.osti.gov/biblio/869554 ; https://www.osti.gov/biblio/7173812
[^11^]: NIST Moldover page: https://www.nist.gov/people/michael-r-moldover ; NIST Strouse page (US8123399B2): https://www.nist.gov/people/gregory-f-strouse ; flintbox: https://flc.flintbox.com/technologies/049385e7-9231-47b7-907e-36a56db8f3dc
[^12^]: US10584967 (Justia): https://patents.justia.com/patent/10584967 ; US20180231383A1: https://patents.justia.com/patent/20180231383 ; HRG landscape: https://www.patsnap.com/resources/blog/rd-blog/hemispherical-resonator-gyroscope-vibrating-shell-design-patent-landscape-patent-landscape/
[^13^]: EP3652500B1 (EPO): https://data.epo.org/publication-server/rest/v1.0/publication-dates/20210901/patents/EP3652500NWB1/document.pdf
[^14^]: US4800756 (NTRS): https://ntrs.nasa.gov/api/citations/19900002973/downloads/19900002973.pdf ; US4393706 (NTRS): https://ntrs.nasa.gov/api/citations/19830024245/downloads/19830024245.pdf
[^15^]: US6688162B2 (NTRS): https://ntrs.nasa.gov/api/citations/20080007441/downloads/20080007441.pdf ; (UKY): https://uknowledge.uky.edu/cgi/viewcontent.cgi?article=1025&context=chemistry_patents
[^16^]: Woodward US5280864 references: https://encyclopedia.pub/entry/34880 ; NASA NTRS bibliography: https://ntrs.nasa.gov/api/citations/20040070788/downloads/20040070788.pdf
[^17^]: RFID antenna sensor position-invariance example: https://www.mdpi.com/1424-8220/18/7/2130
[^18^]: UPV resonant-cavity sensor thesis context (Lucas Torralba): https://addi.ehu.es/bitstream/handle/10810/23527/TESIS_LUCAS_TORRALBA_JULIO.pdf?sequence=1 ; Asua et al. 2019 (Sensors & Actuators A, accepted ms): https://addi.ehu.es/bitstream/handle/10810/71913/Asua_sensors_cavidad_arduino.pdf?sequence=3&isAllowed=y
