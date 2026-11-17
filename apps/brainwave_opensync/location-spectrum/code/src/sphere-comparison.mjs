import { validateWorkbenchUrl } from './dashboard-bridge.js';
export const SPHERE_COMPARISON = {
  "reviewedAt": "2026-11-17",
  "capturedAt": "2026-11-17T06:21:51.663637+00:00",
  "status": "Dated comparison with directly read OSF registered metadata; no measurements, calibration or PDF verification",
  "sources": [
    {
      "id": "sphere-about",
      "title": "About Project S.P.H.E.R.E.",
      "url": "https://spheredesci.org/about/",
      "httpStatus": 200,
      "htmlSha256": "61488b44b54a7c3d34ae70643c4474cd30a3d20969bba1f4730f5f564394c8b9",
      "textSha256": "ef7136ef48f55b6aebd7eccca1f3d715da5eaa12b08034e818e45dbb29e0843c",
      "readingDepth": "Archived public page full extracted text read; compared with separately archived OSF registered metadata. Linked PDF text not independently read in this review."
    },
    {
      "id": "sphere-home",
      "title": "Sphere home and technical overview",
      "url": "https://spheredesci.org/",
      "httpStatus": 200,
      "htmlSha256": "2920f2be4a4d36c8398fd59a1d39986f8a9f9c4abd39194aded44abda8be54d0",
      "textSha256": "cb86f6f30a40309a3fe18d5fc34eb068dcdc7f10133881506a75fe0e0eb88623",
      "readingDepth": "Archived public page full extracted text read; compared with separately archived OSF registered metadata. Linked PDF text not independently read in this review."
    },
    {
      "id": "sphere-protocol",
      "title": "Protocol LOC-1 overview",
      "url": "https://spheredesci.org/protocol/",
      "httpStatus": 200,
      "htmlSha256": "82d39e1d0b6cd8db0d215d9e7a81d1050f5d74802438b17e00a4351f6e618f06",
      "textSha256": "138c634d82f7a9520a9f4d358f3a90e544857a93643612ac8b8d9ba2b22bcac2",
      "readingDepth": "Archived public page full extracted text read; compared with separately archived OSF registered metadata. Linked PDF text not independently read in this review."
    },
    {
      "id": "sphere-osf-registration-pd3st",
      "title": "OSF LOC-1 registration pd3st \u00b7 registered metadata",
      "url": "https://api.osf.io/v2/nodes/5b6mj/registrations/",
      "httpStatus": 200,
      "jsonSha256": "f31cf900ac8f710f91ac82769d6a6196538e6b03234c895bea2f7d075c42c08e",
      "capture": "./research/sphere-osf-registration.json",
      "readingDepth": "Directly read registration flags and registered_meta344-2,344-38,344-40,344-47,344-51,344-55,344-58,344-62,344-66,344-71,344-77,344-79; no data reported by the record. PDF text not independently read here."
    }
  ],
  "findings": [
    "The archived OSF API identifies public registration pd3st, registered 23 October 2026, not withdrawn, with has_data=false. Registration verifies a frozen plan record, not a measured result or validated apparatus.",
    "The proposed four-object simultaneous variant is explicitly an amendment for review, not the registered two-sphere plan. A shared frequency reference alone does not prove simultaneous sample clocks or verified trigger delays.",
    "The proposal selects one identified mechanical mode above 230 kHz. That is a proposed measurement band, not a validated threshold, a 230 kHz position shift or a complete spectrum.",
    "This recreation computes an ideal breathing mode and support/readout controls. It does not reproduce the LOC-1 test-to-reference ratio, calibrated instruments, blinding, registered decision rules or an actual experiment.",
    "The registered metadata specifies a 0.40 m position separation. This recreation uses dimensionless A/B coordinates x/L and supplies no calibrated table length; those controls are not a reproduction of that separation.",
    "The local 12-ABBA-block pilot and editable uncertainty defaults are illustrative. Registered LOC-1 instead states 80 placements (40 A/40 B), 10 blocks of 8 and default 30-minute settling; no numeric equivalence margin is inferred from local controls.",
    "Registered r = f_T/f_R and Delta_ppb = 10^9*(mean(r_A) - mean(r_B)) use a reference ratio and A-minus-B contrast. This recreation displays an absolute B-minus-A frequency difference in Hz; its sign, units and estimator are different. The local k-times-uncertainty comparison is not a registered TOST equivalence decision.",
    "The host teaching model uses D = 10^6*(r_B/r_A - 1) in ppm, not the registered A-minus-B ratio contrast. In an independently recalculated synthetic fixture with r_A=1.25 and D=-1 ppm, the registered contrast is +1250 ppb rather than +1000 ppb. Conversion needs the baseline ratio as well as sign and scale."
  ],
  "controls": [
    "Measure each specimen\u2019s temperature coefficient before position comparison; ambient temperature alone does not establish equal specimen temperatures.",
    "Include same-position lift/replace sham moves, orientation changes, portable-support controls and randomized blinded position labels.",
    "Retain reference ratios, clock-lock and timing records, raw waveforms, excluded data, covariance and differential environmental effects. Common-mode rejection is not guaranteed.",
    "Prespecify equivalence bounds and an inconclusive outcome. Failure to detect a difference does not itself establish equivalence; a residual does not identify its cause.",
    "A shared multiplicative clock factor cancels only if it is the same in test and reference channels at each observation. A 1 ppm test-channel mismatch alone can mimic a 1 ppm ratio signal; the host toy does not simulate that mismatch or differential reference temperature."
  ],
  "registration": {
    "id": "pd3st",
    "dateRegistered": "2026-10-23T03:12:22.719799",
    "registration": true,
    "public": true,
    "withdrawn": false,
    "hasData": false,
    "placements": 80,
    "placementsPerPosition": 40,
    "blocks": 10,
    "placementsPerBlock": 8,
    "positionSeparationM": 0.4,
    "defaultSettlingMinutes": 30,
    "ratio": "r = f_T / f_R",
    "contrast": "Delta_ppb = 10^9 * (mean(r_A) - mean(r_B))",
    "numericEquivalenceBound": "Not supplied in the registered_meta passages read; qualification-stage bounds must not be invented."
  },
  "independentControl": {
    "path": "./research/sphere-ratio-controls.json",
    "method": "60-digit Decimal reconstruction from raw frequency estimates; synthetic controls, not measurements",
    "status": "passed"
  }
};
export function sphereModelCoverage(frequencyHz) {
 if(!Number.isFinite(frequencyHz)||frequencyHz<=0)throw Error('The comparison needs a positive finite modeled frequency in Hz.');
 const aboveProposedBandFloor=frequencyHz>230000;
 return {frequencyHz,aboveProposedBandFloor,kind:'modeled-frequency-not-measurement',message:aboveProposedBandFloor?'The current modeled frequency lies above the proposed 230 kHz band floor. This does not validate the mode, apparatus or location hypothesis.':'The current modeled breathing frequency lies below the proposed 230 kHz band floor. It is a model-control example, not a numerical reproduction of the proposed LOC-1 target mode.'};
}
export function sphereReviewHref({pathname,origin},explicitWorkbenchUrl=null){
 if(pathname.startsWith('/resonance-lab/apps/'))return new URL('#sphere',validateWorkbenchUrl(origin+'/')).href;
 return explicitWorkbenchUrl?new URL('#sphere',validateWorkbenchUrl(explicitWorkbenchUrl)).href:null;
}
