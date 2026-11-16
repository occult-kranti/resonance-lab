import type { AccentColor } from "@/components/shared/Panel";

export type WidgetKind = "oscillator" | "qdip" | "tempwalk";

export interface LessonBlock {
  type: "p" | "key" | "warn";
  text: string;
}

export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number; // index into options
  why: string; // one-line explanation shown after answering
}

export interface ModuleDef {
  id: string;
  number: number;
  title: string;
  abstract: string;
  minutes: number;
  accent: AccentColor;
  widget?: WidgetKind;
  widgetCaption?: string;
  tryLive: { label: string; to: string };
  blocks: LessonBlock[];
  quiz: QuizQuestion[];
}

export const PASS_MARK = 2; // pass at ≥ 2 of 3

export const MODULES: ModuleDef[] = [
  {
    id: "resonance",
    number: 1,
    title: "Resonance, honestly",
    abstract:
      "What a resonance is: stored energy sloshing between two forms, leaking a little each cycle. Q counts the leaks. Nothing comes out that didn't go in.",
    minutes: 6,
    accent: "trace",
    widget: "oscillator",
    widgetCaption:
      "Drive a damped oscillator. Slide the drive frequency across the resonance and watch the response swell — then fall.",
    tryLive: { label: "Watch a live dip on the VNA", to: "/vna" },
    blocks: [
      {
        type: "p",
        text: "Tap a glass and it rings at one pitch. That pitch is not a property of your finger — it is the glass voting for the frequency at which it can store energy most comfortably. A resonance is exactly that: a system that shuttles energy back and forth between two forms — kinetic and elastic, electric and magnetic — and does it best at one particular frequency.",
      },
      {
        type: "key",
        text: "Key idea: resonance is storage, not creation. The sphere in Bay 3 does not make energy; it stores and returns a tiny fraction of what you drive into it.",
      },
      {
        type: "p",
        text: "Every cycle, a little energy leaks out — into heat, into sound, into the mounting hardware. The quality factor Q counts those leaks: Q is 2π times the energy stored divided by the energy lost per cycle. Q of 100,000 means the mode rings for tens of thousands of cycles before the stored energy drains away.",
      },
      {
        type: "warn",
        text: "Misconception: a sharper peak means more energy. It means less loss. A high-Q resonance is a narrower appetite, not a bigger meal.",
      },
      {
        type: "p",
        text: "This is why the simulator's resonance is drawn as a dip, not a spike. When the drive frequency lands on the resonance, the sphere absorbs power from the line — and what is absorbed cannot be reflected. Less comes back. The meter reads a dip, and the dip is honest: every watt you measure started as a watt you supplied.",
      },
      {
        type: "p",
        text: "A note on honesty: this simulator originally rang its sphere near 230 kHz, a figure the first draft inherited from an unverified claim. An engineering review of the actual physics — the breathing mode of a 100 mm solid copper sphere — put the resonance at 20.75 kHz, and the simulator was corrected to match. That is the honest scientific process working as intended: claims get checked, errors get found, and the record is updated rather than defended.",
      },
    ],
    quiz: [
      {
        q: "The quality factor Q is best described as…",
        options: [
          "2π × energy stored ÷ energy lost per cycle",
          "The peak frequency divided by the drive power",
          "The energy created by the resonator each cycle",
          "The ratio of reflected to incident voltage",
        ],
        answer: 0,
        why: "Q compares what the mode holds to what it leaks each cycle — a count of the leaks.",
      },
      {
        q: "You double the drive power into a passive resonator. The power it can return…",
        options: [
          "More than doubles — resonance amplifies",
          "At most doubles — output never exceeds input",
          "Stays fixed — Q sets an absolute ceiling",
          "Drops — the resonance detunes under load",
        ],
        answer: 1,
        why: "A passive device conserves energy: you can only ever get back a fraction of what you sent.",
      },
      {
        q: "On an S11 sweep, a dip at 20.750 kHz means…",
        options: [
          "The instrument lost calibration there",
          "The sphere radiated extra energy at that frequency",
          "The sphere absorbed drive power at that frequency",
          "The cable resonated and added gain",
        ],
        answer: 2,
        why: "Absorbed power is not reflected, so the reflection reading dips. The dip is the appetite.",
      },
    ],
  },
  {
    id: "vna",
    number: 2,
    title: "The VNA's question",
    abstract:
      "S11 asks: of the power I sent, how much came back? A dip means the device drank some. Sweeping the question across frequency maps the appetite.",
    minutes: 7,
    accent: "trace",
    widget: "qdip",
    widgetCaption:
      "Drag Q and watch the dip sharpen. Higher Q is a narrower, deeper appetite — and a harder fit if your points are sparse.",
    tryLive: { label: "Sweep it yourself on the VNA", to: "/vna" },
    blocks: [
      {
        type: "p",
        text: "A vector network analyzer is a polite instrument. It sends a known tone down a cable and listens to what returns. S11 — the reflection coefficient — is the answer to one question, asked at each frequency: of the power I sent, how much came back? In decibels, 0 dB means everything returned; −18 dB means only about a sixty-fourth of the power returned.",
      },
      {
        type: "p",
        text: "Sweep the question across frequency and you map the device's appetite. Off resonance, our sphere reflects nearly everything — the trace sits near zero dB. On resonance, the sphere drinks — the trace dips. Because the device is passive, S11 never rises above 0 dB. If you ever see gain, you are looking at an amplifier or an artifact, not a resonance.",
      },
      {
        type: "key",
        text: "Key idea: calibration moves the reference plane. Open/short/load standards teach the VNA what the cables and fixtures do, so what remains is the device.",
      },
      {
        type: "warn",
        text: "Misconception: more points make the physics better. Points make the picture denser; IF bandwidth makes each point quieter. You pay for both in sweep time.",
      },
      {
        type: "p",
        text: "The IF bandwidth is the width of the ear the VNA listens with. Narrow it and the noise floor falls — but each point takes longer to measure. Fitting a Lorentzian to the dip gives you f₀ and Q with honest error bars, and those error bars shrink with more points, quieter bandwidth, and a calmer facility.",
      },
    ],
    quiz: [
      {
        q: "S11 reads −18 dB at the dip. Roughly what fraction of the sent power came back?",
        options: ["About half", "About 1/64", "About 1/6", "Essentially all of it"],
        answer: 1,
        why: "−18 dB in power terms is 10^(−1.8) ≈ 0.016 — about a sixty-fourth returned, the rest absorbed.",
      },
      {
        q: "Why run open/short/load standards before measuring?",
        options: [
          "To warm up the source oscillators",
          "To prove the sphere is passive",
          "To teach the VNA the cable and fixture behavior, so the reference plane sits at the device",
          "To discharge static from the chamber",
        ],
        answer: 2,
        why: "Calibration subtracts the measurement plumbing so the dip you fit belongs to the sphere.",
      },
      {
        q: "Narrowing the IF bandwidth from 1 kHz to 100 Hz…",
        options: [
          "Raises the noise floor and speeds the sweep",
          "Lowers the noise floor and slows the sweep",
          "Moves the resonance to a quieter frequency",
          "Has no effect below 1 MHz",
        ],
        answer: 1,
        why: "A narrower listening window admits less noise — and takes longer to settle per point.",
      },
    ],
  },
  {
    id: "clock",
    number: 3,
    title: "Time and its keepers",
    abstract:
      "Counting needs a ruler. GPSDO + rubidium: one is stable, one is accurate, the marriage is both. Allan deviation tells you when averaging stops helping.",
    minutes: 6,
    accent: "violet",
    tryLive: { label: "Watch the reference lock", to: "/reference" },
    blocks: [
      {
        type: "p",
        text: "Measuring a frequency means counting cycles against a ruler of time. If your ruler drifts, every frequency you report drifts with it — silently, because the error is inside the thing you trust. The 10 MHz reference on the rack is that ruler, and every instrument in Bay 3 counts against it.",
      },
      {
        type: "p",
        text: "A rubidium oscillator is beautifully stable over seconds — it barely wanders while you watch — but its absolute frequency ages and drifts over days. GPS is the opposite: second-to-second it is noisy, but averaged over hours it is steered by atomic clocks you will never have to maintain. A GPSDO marries them: rubidium holds the short term, GPS disciplines the long term.",
      },
      {
        type: "key",
        text: "Key idea: stability and accuracy are different virtues. Stability is not wobbling; accuracy is being right. The disciplined oscillator is both, on different timescales.",
      },
      {
        type: "warn",
        text: "Misconception: a locked reference makes frequency error zero. It makes it small and known. The residual wander belongs in your uncertainty budget.",
      },
      {
        type: "p",
        text: "Allan deviation is the metrologist's honesty test: average your frequency over longer and longer windows and watch the scatter fall — until it stops falling. That floor is where averaging stops helping and systematic wander takes over. Past it, longer measurements buy you nothing but confidence you have not earned.",
      },
    ],
    quiz: [
      {
        q: "A rubidium oscillator and a GPS-disciplined oscillator differ mainly in that…",
        options: [
          "Rb is accurate long-term; GPS is stable short-term",
          "Rb is stable short-term; GPS discipline keeps it accurate long-term",
          "Rb runs at 10 MHz; GPS runs at 1 Hz, so they cannot be combined",
          "GPS is immune to all drift",
        ],
        answer: 1,
        why: "The marriage works because each partner covers the other's weak timescale.",
      },
      {
        q: "Why does the VNA refuse to calibrate before the reference locks?",
        options: [
          "The calibration kit is stored in the same rack",
          "Frequency accuracy of every swept point depends on the shared 10 MHz timebase",
          "Locking cools the VNA's mixer",
          "It is a purely ceremonial interlock",
        ],
        answer: 1,
        why: "An unlocked timebase makes every frequency reading quietly wrong — calibration would certify the error.",
      },
      {
        q: "The Allan deviation curve flattens into a floor. That floor means…",
        options: [
          "The instrument is broken",
          "Averaging longer stops helping — systematic wander dominates",
          "The oscillator has reached absolute zero noise",
          "The measurement bandwidth is too narrow",
        ],
        answer: 1,
        why: "White noise averages down forever; real oscillators eventually hit wander that averaging cannot remove.",
      },
    ],
  },
  {
    id: "vacuum",
    number: 4,
    title: "Nothing, on purpose",
    abstract:
      "Vacuum isn't the absence of measurement problems; it's the removal of one: gas damping. Watch Q climb as pressure falls.",
    minutes: 5,
    accent: "blue",
    tryLive: { label: "Run the pumps from the Console", to: "/console" },
    blocks: [
      {
        type: "p",
        text: "At atmosphere, every vibration of the copper sphere pushes against a sea of gas molecules, and each collision carries a little energy away. That is gas damping, and it caps Q near 3,000 no matter how well the sphere is made. Pump the gas out and the collisions stop. Q climbs toward 100,000 — limited now by the sphere's own internal losses, not by the air.",
      },
      {
        type: "key",
        text: "Key idea: vacuum is not nothing; it is the removal of a specific loss channel. You are not making the sphere better — you are stopping the gas from making it worse.",
      },
      {
        type: "p",
        text: "Two pumps work as a relay. The roughing pump bullies the pressure from 1013 hPa down to a few hPa — the bulk of the molecules gone. Only then can the turbomolecular pump spin up: its blades need the gas thin enough that molecules fly between collisions, otherwise it stirs the gas instead of pumping it. That is why the turbo's interlock refuses to start above a few hPa.",
      },
      {
        type: "warn",
        text: "Misconception: a leak shows up as pressure rising forever. Usually it shows up as a floor — the pumps and the leak reach an equilibrium, and the gauge simply refuses to fall further.",
      },
      {
        type: "p",
        text: "Watch for that floor. A healthy pump-down curve falls smoothly through each decade. A curve that stalls at 8×10⁻² hPa, or drifts back up with the roughing pump valved off, is telling you about a leak — and it will tell you before any alarm does, if you are looking.",
      },
    ],
    quiz: [
      {
        q: "Why does Q climb as pressure falls?",
        options: [
          "Low pressure cools the copper",
          "Fewer gas collisions means less energy carried away per cycle",
          "The turbo pump adds energy to the mode",
          "The sphere expands slightly at low pressure",
        ],
        answer: 1,
        why: "Gas damping is a loss channel; remove the gas and the mode keeps more of its stored energy.",
      },
      {
        q: "Why does the turbo refuse to start at 500 hPa?",
        options: [
          "Its blades need gas thin enough that molecules fly ballistically between collisions",
          "The roughing pump would run backwards",
          "Turbo blades dissolve in oxygen",
          "The interlock is only there to slow you down",
        ],
        answer: 0,
        why: "At high pressure a turbo stirs gas rather than pumping it — and the interlock knows it.",
      },
      {
        q: "A pump-down curve stalls and holds at a fixed pressure. The likely cause is…",
        options: [
          "A perfect vacuum has been reached",
          "The gauge battery is low",
          "A leak balancing the pumping speed — an equilibrium floor",
          "The sphere outgassing resonance",
        ],
        answer: 2,
        why: "Leaks announce themselves as floors, not spikes. Compare against a healthy curve on the Timeline.",
      },
    ],
  },
  {
    id: "thermal",
    number: 5,
    title: "Millikelvins matter",
    abstract:
      "Copper's stiffness drifts with temperature; so does your f₀. 3.3 Hz per kelvin is small until your error bars are smaller.",
    minutes: 6,
    accent: "copper",
    widget: "tempwalk",
    widgetCaption:
      "Slide the chamber temperature and watch f₀ walk. −3.3 Hz per kelvin feels like nothing — until your σ is 0.5 Hz.",
    tryLive: { label: "See thermal state on the Console", to: "/console" },
    blocks: [
      {
        type: "p",
        text: "Copper gets softer as it warms — imperceptibly, but measurably. The breathing mode's restoring force is the metal's stiffness, so the resonant frequency slides down as temperature rises: about −3.3 Hz per kelvin in this simulator. That coefficient is small, boring, and absolutely capable of ruining a precision measurement.",
      },
      {
        type: "key",
        text: "Key idea: a drift of −3.3 Hz/K is harmless next to a 30 Hz error bar and fatal next to a 0.5 Hz one. Precision doesn't remove small effects; it promotes them to leading effects.",
      },
      {
        type: "p",
        text: "This is why the quality gate demands |T − 22.000 °C| < 5 mK held for five seconds. Not because 22 °C is magic, but because a stable temperature is a stable frequency. The A/B position runs differ by tens of hertz; let the chamber wander half a degree between runs and the temperature term is nearly two hertz of fake position signal.",
      },
      {
        type: "warn",
        text: "Misconception: hitting the setpoint means you are stable. Convergence and stability are different — the controller can cross 22.000 °C while still moving fast enough to matter. Wait for the drift rate.",
      },
      {
        type: "p",
        text: "The drift readout in °C/min is your forward-looking instrument. Temperature is where the chamber was; drift is where it is going. A good operator reads the drift before trusting the digits, and logs the limiting term honestly when the run is done.",
      },
    ],
    quiz: [
      {
        q: "The chamber is 0.25 °C above setpoint. What happens to f₀?",
        options: [
          "Nothing measurable",
          "It rises by 0.8 Hz",
          "It falls by about 0.8 Hz",
          "It falls by 3.3 Hz exactly",
        ],
        answer: 2,
        why: "−3.3 Hz/K × 0.25 K = −0.8 Hz. Small — until your error bars are smaller.",
      },
      {
        q: "The gate requires |ΔT| < 5 mK for 5 seconds because…",
        options: [
          "22.000 °C is the only legal temperature",
          "A stable, known temperature makes the frequency term stable and known",
          "The controller overheats otherwise",
          "Five seconds is how long copper takes to notice heat",
        ],
        answer: 1,
        why: "The gate is buying frequency stability, not comfort.",
      },
      {
        q: "The temperature sits at setpoint but drift reads +0.4 °C/min. You should…",
        options: [
          "Start the sweep — the setpoint is met",
          "Wait — the frequency is still walking even though the number looks right",
          "Increase drive power to outrun the drift",
          "Recalibrate the VNA",
        ],
        answer: 1,
        why: "Crossing the setpoint is not stability. Drift is the honest signal.",
      },
    ],
  },
  {
    id: "blinding",
    number: 6,
    title: "Bias and the blind",
    abstract:
      "If you know which position you're measuring, you'll find what you expect. Blinding is how you keep yourself honest. Also: uncertainty budgets, and why two runs prove nothing.",
    minutes: 7,
    accent: "go",
    tryLive: { label: "Commit blinded runs", to: "/runs" },
    blocks: [
      {
        type: "p",
        text: "Here is an uncomfortable fact about humans who measure things: expectation leaks into results. If you know the stage is at position A and you expect A to read high, you will — through a hundred tiny choices about when to sweep and which run to keep — find A reading high. Not because you are dishonest, but because you are human. Blinding exists to protect you from yourself.",
      },
      {
        type: "key",
        text: "Key idea: the simulator hides which stage position each label maps to and adds an unknown offset per position. You measure labels, commit runs, and only unblind after the statistics are in. The answer is decided before you see the answer.",
      },
      {
        type: "p",
        text: "Why staged gates before unblinding? The protocol walks G1 hash verification, G2 sham/injection recovery, and G3 blinded diagnostics, and only opens at G4 when the B=40 ABBA block schedule is complete — because two runs prove almost nothing. One pair gives you a difference with no idea of its scatter; the scatter of f₀ from run to run is the ruler against which the A−B difference must be judged. Repetition is still small at the gate — but it is enough to see whether the difference stands above the noise of repetition.",
      },
      {
        type: "warn",
        text: "Misconception: unblinding early to 'just check' is harmless. Every peek converts your measurement into a search for what you saw. The protocol integrity flag is not decoration.",
      },
      {
        type: "p",
        text: "Finally: the uncertainty budget. Every honest result is a number plus a list of everything that could move it — fit σ, thermal drift, reference wander, stage repeatability. Write them down, name the biggest one, and report it. A measurement without its budget is an opinion with decimal places.",
      },
    ],
    quiz: [
      {
        q: "The main purpose of blinding the A/B assignment is…",
        options: [
          "To make the experiment harder for grading",
          "To prevent the operator's expectations from steering the result",
          "To hide faults from the safety system",
          "To encrypt the data against other bays",
        ],
        answer: 1,
        why: "Blinding is a firewall between what you hope and what you record.",
      },
      {
        q: "Why does the protocol stage gates G1–G4 before unblinding?",
        options: [
          "The grade S requires it and grades are law",
          "One pair gives a difference but no estimate of its scatter — repetition is the ruler",
          "The stage wears in after six runs",
          "Statistics only works in multiples of forty",
        ],
        answer: 1,
        why: "You judge the A−B difference against run-to-run scatter; you need repeats to know the scatter.",
      },
      {
        q: "Which of these belongs in an uncertainty budget?",
        options: [
          "Only the fit σ — the rest is paperwork",
          "Fit σ, thermal drift, reference wander, stage repeatability — with the largest named",
          "Whatever term makes the result look best",
          "None, if the reference is locked",
        ],
        answer: 1,
        why: "An honest result is a number plus the list of things that could move it.",
      },
    ],
  },
];
