import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import {
  Activity,
  Bot,
  Bug,
  ChevronDown,
  Clock3,
  Radio,
  Radar,
  Scan,
  Thermometer,
  Waves,
  Wind,
  Move3d,
} from "lucide-react";
import Panel from "@/components/shared/Panel";
import Readout from "@/components/shared/Readout";
import GradedBadge from "@/components/shared/GradedBadge";
import {
  computeGrade,
  formatPressure,
  useFacility,
  useSim,
} from "@/sim/store";
import type { Grade } from "@/sim/store";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/* ------------------------------------------------------------------ */
/* Boot-scramble digits: hex noise for ~300ms then settle              */
/* ------------------------------------------------------------------ */
function Scramble({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    const chars = "0123456789ABCDEF";
    const start = performance.now();
    const id = window.setInterval(() => {
      const t = performance.now() - start;
      if (t >= 300) {
        setDisplay(text);
        window.clearInterval(id);
        return;
      }
      setDisplay(
        text
          .split("")
          .map((c) => (/[0-9A-Za-z]/.test(c) ? chars[Math.floor(Math.random() * 16)] : c))
          .join(""),
      );
    }, 40);
    return () => window.clearInterval(id);
  }, [text]);
  return <>{display}</>;
}

/* ------------------------------------------------------------------ */
/* Mini animated canvas for instrument cards                           */
/* ------------------------------------------------------------------ */
type MiniKind =
  | "dip"
  | "beam"
  | "sine"
  | "clock"
  | "temp"
  | "vacuum"
  | "stage"
  | "field"
  | "chat"
  | "fault";

function MiniTrace({ kind, color, active }: { kind: MiniKind; color: string; active: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  void active; // reserved: hover can speed up traces later; canvas loops continuously

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = 120;
    const H = 36;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    let raf = 0;
    const t0 = performance.now();
    const draw = (now: number) => {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      const N = 80;
      for (let i = 0; i < N; i++) {
        const x = (i / (N - 1)) * W;
        let y = H / 2;
        const u = i / (N - 1);
        switch (kind) {
          case "dip": {
            const c = 0.5 + Math.sin(t * 0.4) * 0.02;
            const det = u - c;
            y = H * 0.25 + Math.exp(-(det * det) / 0.002) * H * 0.55;
            break;
          }
          case "beam":
            y = H / 2 + Math.sin(u * 40 - t * 6) * 4 * (0.6 + 0.4 * Math.sin(t * 3.1));
            break;
          case "sine":
            y = H / 2 + Math.sin(u * 18 - t * 5) * H * 0.3;
            break;
          case "clock":
            y = H / 2 + Math.sin(u * 60 - t * 10) * H * 0.32;
            break;
          case "temp":
            y = H * 0.7 - Math.min(1, t / 6) * H * 0.35 + Math.sin(u * 30 + t) * 1.2;
            break;
          case "vacuum":
            y = H * 0.15 + (1 - Math.exp(-u * 3 - t * 0.15)) * H * 0.6;
            break;
          case "stage":
            y = H / 2 + Math.round(Math.sin(u * 4 - t) * 3) * 3;
            break;
          case "field": {
            const r = Math.abs(u - 0.5);
            y = H / 2 - Math.cos(r * 25 - t * 2) * Math.exp(-r * 4) * H * 0.35;
            break;
          }
          case "chat":
            y = H / 2 + (Math.sin(u * 8 + t * 1.5) > 0.3 ? -H * 0.2 : H * 0.15);
            break;
          case "fault":
            y = H / 2 + (Math.random() < 0.06 ? (Math.random() - 0.5) * H : Math.sin(u * 20 - t * 4) * 3);
            break;
        }
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [kind, color]);

  return <canvas ref={ref} style={{ width: "100%", height: 36 }} aria-hidden />;
}

/* ------------------------------------------------------------------ */
/* Facility snapshot strip (hero) + status board (footer section)      */
/* ------------------------------------------------------------------ */
function FacilitySnapshot({ compact = false }: { compact?: boolean }) {
  const f = useFacility();
  const grade: Grade = useSim(computeGrade);
  const clockLabel =
    f.clock === "LOCKED" ? "LOCKED" : f.clock === "COLD" ? "COLD" : f.clock === "WARMING" ? "WARMING" : "LOCKING";

  const items = (
    <>
      <Readout
        label="Facility"
        value={f.power === "FACILITY_ON" ? "ONLINE" : f.power === "BOOTING" ? "BOOT" : "OFF"}
        size={compact ? "sm" : "md"}
        tone={f.power === "FACILITY_ON" ? "go" : "dim"}
      />
      <Readout
        label="Pressure"
        value={<Scramble text={f.power === "POWER_OFF" ? "—" : formatPressure(f.pressure)} />}
        size={compact ? "sm" : "md"}
        tone={f.pressure < 1e-3 ? "go" : "ink"}
      />
      <Readout
        label="Chamber temp"
        value={f.power === "POWER_OFF" ? "—" : f.temperature.toFixed(3)}
        unit={f.power === "POWER_OFF" ? undefined : "°C"}
        size={compact ? "sm" : "md"}
        tone={f.thermalStable ? "go" : "ink"}
        live={f.power !== "POWER_OFF"}
      />
      <Readout
        label="10 MHz ref"
        value={clockLabel}
        size={compact ? "sm" : "md"}
        tone={f.clock === "LOCKED" ? "go" : f.clock === "COLD" ? "dim" : "warn"}
      />
      <div className="flex flex-col gap-0.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
          Quality
        </span>
        <GradedBadge grade={grade} className={compact ? "h-6 px-2 text-[10px]" : ""} />
      </div>
    </>
  );

  if (compact) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">{items}</div>
    );
  }
  return (
    <Panel title="Live facility state" bezel className="w-full max-w-3xl">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">{items}</div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* LOC-1 phase data                                                    */
/* ------------------------------------------------------------------ */
const PHASES = [
  {
    title: "Power up",
    body: "Bring the bay online. PCs boot, interlocks arm, the rack wakes in sequence.",
  },
  {
    title: "Pump down",
    body: "Roughing pump to single-digit hPa, then the turbo spools to high vacuum.",
  },
  {
    title: "Stabilize at 22.000 °C",
    body: "The thermal loop settles the chamber to millikelvin steadiness. Watch the drift rate, not just the number.",
  },
  {
    title: "Lock the reference",
    body: "The GPSDO-disciplined rubidium warms, disciplines, and locks. Every frequency you report traces back to this 10 MHz.",
  },
  {
    title: "Sweep & fit",
    body: "The VNA sweeps S11 across the breathing mode. Fit the Lorentzian; report f₀ and Q with uncertainties.",
  },
  {
    title: "Blinded A/B runs",
    body: "The scheduler moves the stage between two hidden positions 0.40 m apart. You measure without knowing which is which.",
  },
  {
    title: "Grade the measurement",
    body: "Conditions, statistics, and honesty produce your grade: INVALID, C, B, A, or S.",
  },
];

const INSTRUMENTS: {
  to: string;
  name: string;
  role: string;
  color: string;
  cssColor: string;
  icon: typeof Waves;
  kind: MiniKind;
}[] = [
  { to: "/vna", name: "VNA Analysis", role: "S11 sweeps across the breathing mode", color: "text-trace", cssColor: "#2dd4c8", icon: Waves, kind: "dip" },
  { to: "/ldv", name: "LDV Scanner", role: "Non-contact velocity, laser-read", color: "text-trace", cssColor: "#2dd4c8", icon: Scan, kind: "beam" },
  { to: "/oscilloscope", name: "Oscilloscope", role: "Time-domain truth", color: "text-trace", cssColor: "#2dd4c8", icon: Radio, kind: "sine" },
  { to: "/reference", name: "Frequency Reference", role: "10 MHz of discipline", color: "text-violet", cssColor: "#9d8df1", icon: Clock3, kind: "clock" },
  { to: "/console", name: "Thermal Controller", role: "22.000 °C, millikelvin nerves", color: "text-copper", cssColor: "#c47a4a", icon: Thermometer, kind: "temp" },
  { to: "/console", name: "Vacuum System", role: "From atmosphere to 10⁻⁵ hPa", color: "text-blue", cssColor: "#5aa2f0", icon: Wind, kind: "vacuum" },
  { to: "/chamber", name: "XYZ Stage", role: "±35 mm of blinded travel", color: "text-dim", cssColor: "#8296ab", icon: Move3d, kind: "stage" },
  { to: "/field-explorer", name: "Spatial Field Explorer", role: "Probe the mode shape", color: "text-trace-2", cssColor: "#f0b64c", icon: Radar, kind: "field" },
  { to: "/copilot", name: "AI Copilot", role: "Your patient lab partner", color: "text-go", cssColor: "#3ddc84", icon: Bot, kind: "chat" },
  { to: "/faults", name: "Fault Injector", role: "Break it, then diagnose it", color: "text-bad", cssColor: "#f0524f", icon: Bug, kind: "fault" },
];

/* ------------------------------------------------------------------ */
/* Lorentzian dip diagram (draws itself on scroll)                     */
/* ------------------------------------------------------------------ */
function LorentzianDiagram() {
  const ref = useRef<SVGPathElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const len = el.getTotalLength();
    gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
    const st = gsap.to(el, {
      strokeDashoffset: 0,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 80%" },
    });
    return () => {
      st.scrollTrigger?.kill();
      st.kill();
    };
  }, []);

  // passive Lorentzian dip path (y grows downward = more negative dB)
  const pts: string[] = [];
  for (let i = 0; i <= 100; i++) {
    const u = i / 100;
    const x = 20 + u * 280;
    const det = (u - 0.5) * 6;
    const dip = 1 / (1 + det * det);
    const y = 30 + dip * 90;
    pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }

  return (
    <svg viewBox="0 0 320 150" className="h-auto w-full">
      {/* axes */}
      <line x1="20" y1="130" x2="300" y2="130" stroke="#1e2a38" strokeWidth="1" />
      <line x1="20" y1="10" x2="20" y2="130" stroke="#1e2a38" strokeWidth="1" />
      {/* 0 dB line */}
      <line x1="20" y1="30" x2="300" y2="30" stroke="#2c3d52" strokeWidth="1" strokeDasharray="4 4" />
      <text x="296" y="26" textAnchor="end" fontSize="8" fill="#4b5b6e" fontFamily="'JetBrains Mono', monospace">
        0 dB — passive limit
      </text>
      <text x="296" y="142" textAnchor="end" fontSize="8" fill="#4b5b6e" fontFamily="'JetBrains Mono', monospace">
        f₀ ≈ 20.750 kHz
      </text>
      <text x="24" y="142" fontSize="8" fill="#4b5b6e" fontFamily="'JetBrains Mono', monospace">
        S11 (dB) ↓
      </text>
      <path ref={ref} d={pts.join(" ")} stroke="#2dd4c8" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/** Quality-gate checklist graphic. */
function ChecklistDiagram() {
  const rows = ["Facility power on", "Pressure < 1×10⁻³ hPa", "Thermally stable (5 mK / 5 s)", "10 MHz reference locked", "VNA calibrated"];
  return (
    <svg viewBox="0 0 320 150" className="h-auto w-full">
      {rows.map((r, i) => (
        <g key={r} className="ov-check-row" style={{ opacity: 0 }}>
          <rect x="20" y={14 + i * 26} width="280" height="20" rx="3" fill="#0e141d" stroke="#1e2a38" strokeWidth="1" />
          <circle cx="34" cy={24 + i * 26} r="5" fill="none" stroke="#3ddc84" strokeWidth="1.2" />
          <path d={`M31.5 ${24 + i * 26} l2 2 l3.5 -4`} stroke="#3ddc84" strokeWidth="1.2" fill="none" />
          <text x="48" y={28 + i * 26} fontSize="9" fill="#8296ab" fontFamily="'JetBrains Mono', monospace">
            {r}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** Energy-flow Sankey-style SVG: input 100% → stored 4% → returned 96%. */
function SankeyDiagram() {
  return (
    <svg viewBox="0 0 320 150" className="h-auto w-full">
      {/* input bar */}
      <rect x="20" y="55" width="70" height="40" fill="#2dd4c8" opacity="0.25" />
      <text x="24" y="50" fontSize="8" fill="#8296ab" fontFamily="'JetBrains Mono', monospace">drive in · 100%</text>
      {/* stored sliver */}
      <path d="M90 55 L170 55 L170 64 L90 64 Z" fill="#f0b64c" opacity="0.5" />
      <text x="130" y="50" fontSize="8" fill="#f0b64c" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">stored 4%</text>
      {/* returned flow */}
      <path d="M90 64 L170 64 L170 95 L90 95 Z" fill="#2dd4c8" opacity="0.18" />
      <text x="130" y="84" fontSize="8" fill="#8296ab" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">returned 96%</text>
      {/* sphere */}
      <circle cx="210" cy="75" r="26" fill="none" stroke="#c47a4a" strokeWidth="1.5" />
      <circle cx="210" cy="75" r="26" fill="#c47a4a" opacity="0.08" />
      <text x="210" y="79" fontSize="8" fill="#c47a4a" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">sphere</text>
      {/* losses hatched */}
      <g opacity="0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1={244 + i * 10} y1="60" x2={250 + i * 10} y2="90" stroke="#4b5b6e" strokeWidth="1" />
        ))}
      </g>
      <text x="258" y="105" fontSize="8" fill="#4b5b6e" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">losses — never gain</text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Main page                                                           */
/* ------------------------------------------------------------------ */
export default function Overview() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* Hero headline: word-level SplitText */
        const split = new SplitText(".ov-headline", { type: "words" });
        gsap.from(split.words, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.15,
        });
        gsap.from(".ov-eyebrow", { opacity: 0, y: 10, duration: 0.5, ease: "power2.out" });
        gsap.from(".ov-subcopy", { opacity: 0, y: 16, duration: 0.6, delay: 0.55, ease: "power2.out" });
        gsap.from(".ov-cta", { opacity: 0, y: 16, duration: 0.6, delay: 0.7, ease: "power2.out" });
        gsap.from(".ov-snapshot", { opacity: 0, y: 40, duration: 0.7, delay: 0.95, ease: "power2.out" });

        /* Hero scroll pin: 120vh — bg scales 1→1.08, content parallaxes up + fades */
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".ov-hero",
              start: "top top",
              end: "+=120%",
              pin: true,
              scrub: true,
            },
          })
          .to(heroBgRef.current, { scale: 1.08, ease: "none" }, 0)
          .to(".ov-hero-overlay", { opacity: 0.85, ease: "none" }, 0)
          .to(heroContentRef.current, { y: -60, opacity: 0, ease: "none" }, 0);

        /* Section 2: progress hairline draws left→right; steps activate */
        const steps = gsap.utils.toArray<HTMLElement>(".ov-phase");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".ov-phases",
            start: "top 75%",
            end: "bottom 55%",
            scrub: 0.5,
          },
        });
        tl.fromTo(
          ".ov-phase-line",
          { scaleX: 0 },
          { scaleX: 1, ease: "none", duration: steps.length },
          0,
        );
        steps.forEach((step, i) => {
          tl.to(
            step,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              onStart: () => step.classList.add("ov-phase-active"),
              onReverseComplete: () => step.classList.remove("ov-phase-active"),
            },
            i + 0.3,
          );
        });

        /* Section 3: instrument cards stagger in */
        gsap.from(".ov-card", {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".ov-rack", start: "top 80%" },
        });

        /* Section 4: explainer blocks fade/slide in */
        gsap.utils.toArray<HTMLElement>(".ov-explainer").forEach((el) => {
          gsap.from(el, {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 75%" },
          });
        });
        gsap.to(".ov-check-row", {
          opacity: 1,
          duration: 0.4,
          stagger: 0.15,
          scrollTrigger: { trigger: ".ov-check-row", start: "top 80%" },
        });

        /* Section 5: tiles cascade + CTA glow pulse */
        gsap.from(".ov-board", {
          y: 24,
          opacity: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: { trigger: ".ov-board", start: "top 85%" },
        });
        gsap.to(".ov-begin", {
          boxShadow: "0 0 24px rgba(45,212,200,0.35)",
          duration: 1.2,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });

        return () => {
          split.revert();
        };
      });
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="overflow-x-clip">
      {/* ============ Section 1 — Hero ============ */}
      <section className="ov-hero relative flex min-h-[calc(100dvh-76px)] items-center justify-center">
        {/* background image at 35% + gradient overlay + noise */}
        <div ref={heroBgRef} className="absolute inset-0 overflow-hidden">
          <img
            src="/hero-chamber.png"
            alt=""
            className="h-full w-full object-cover opacity-35"
          />
        </div>
        <div
          className="ov-hero-overlay absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(5,8,13,0.9) 0%, rgba(5,8,13,0.3) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(/noise-texture.png)", backgroundRepeat: "repeat" }}
        />

        {/* foreground stack */}
        <div
          ref={heroContentRef}
          className="relative z-10 flex max-w-3xl flex-col items-center gap-6 px-6 text-center"
        >
          <img src="/logo.svg" alt="Resonance Lab" className="h-[72px] w-auto" />
          <p className="ov-eyebrow font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-trace">
            Meridian Standards Laboratory — Teaching Bay 3
          </p>
          <h1 className="ov-headline font-display text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.05] text-ink">
            Hear a sphere breathe.
          </h1>
          <p className="ov-subcopy max-w-xl text-sm leading-relaxed text-dim md:text-base">
            A solid copper sphere in a vacuum chamber breathes at 20.75 kHz. Your job:
            measure that resonance to microkelvin discipline, under blinding, with real
            metrology practice — and prove the result is honest.
          </p>
          <div className="ov-cta flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/console"
              className="rounded-sm bg-trace px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.12em] text-void transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Enter Operator Console →
            </Link>
            <a
              href="#how-it-works"
              className="rounded-sm border border-line-bright px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.12em] text-dim transition-colors hover:border-trace/50 hover:text-ink"
            >
              How the simulator works
            </a>
          </div>
          <div className="ov-snapshot mt-2 w-full">
            <FacilitySnapshot />
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2">
          <div className="animate-scroll-cue flex flex-col items-center gap-1 text-faint">
            <span className="h-6 w-px bg-line-bright" />
            <ChevronDown size={14} strokeWidth={1.5} />
          </div>
        </div>
      </section>

      {/* ============ Section 2 — The experiment (LOC-1 arc) ============ */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[280px_1fr]">
          <div className="md:sticky md:top-20 md:self-start">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-trace">
              Experiment LOC-1
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
              Localized Oscillation Characterization
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-dim">
              Seven phases, one discipline: conditions before numbers. Each phase gates the
              next, exactly as it would on a real standards bench.
            </p>
          </div>
          <div className="ov-phases relative">
            <span
              aria-hidden
              className="ov-phase-line absolute left-0 top-[13px] hidden h-px w-full origin-left bg-trace/50 md:block"
              style={{ transform: "scaleX(0)" }}
            />
            <div className="grid gap-6 md:grid-cols-7 md:gap-3">
              {PHASES.map((p, i) => (
                <div key={p.title} className="ov-phase opacity-0" style={{ transform: "translateY(20px)" }}>
                  <span className="ov-phase-dot z-10 mb-2 flex h-7 w-7 items-center justify-center rounded-full border border-line bg-panel font-mono text-[11px] text-faint transition-colors">
                    {i + 1}
                  </span>
                  <p className="font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-dim">
                    {p.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-faint">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ Section 3 — Instrument rack ============ */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-trace">
          The rack
        </p>
        <h2 className="mt-2 font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
          Ten instruments, one sphere
        </h2>
        <div className="ov-rack mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          {INSTRUMENTS.map((inst, i) => (
            <Link
              key={inst.name}
              to={inst.to}
              className="ov-card group"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Panel bezel className="h-full transition-all duration-150 group-hover:-translate-y-0.5 group-hover:border-line-bright">
                <div className="flex flex-col gap-2">
                  <inst.icon
                    size={18}
                    strokeWidth={1.5}
                    className={cn("text-dim transition-colors group-hover:saturate-150", `group-hover:${inst.color}`)}
                    style={{ color: hoveredCard === i ? inst.cssColor : undefined }}
                  />
                  <div>
                    <p className="font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-ink">
                      {inst.name}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-faint">{inst.role}</p>
                  </div>
                  <MiniTrace kind={inst.kind} color={inst.cssColor} active={hoveredCard === i} />
                </div>
              </Panel>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ Section 4 — Honest physics ============ */}
      <section id="how-it-works" className="mx-auto max-w-3xl scroll-mt-16 px-6 py-20">
        <p className="text-center font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-trace">
          Honest physics
        </p>
        <h2 className="mt-2 text-center font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
          How the simulator works
        </h2>

        <div className="mt-12 space-y-14">
          <div className="ov-explainer grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                What it simulates
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">
                A driven, damped oscillator. You inject energy with a piezo drive; the
                sphere stores a little, returns a little less, and the VNA sees the
                difference as a dip in reflected power. Nothing is created.{" "}
                <span className="text-ink">
                  Every watt you measure started as a watt you supplied.
                </span>
              </p>
            </div>
            <Panel pad={false} className="p-2">
              <LorentzianDiagram />
            </Panel>
          </div>

          <div className="ov-explainer grid items-center gap-6 md:grid-cols-2">
            <Panel pad={false} className="p-2 md:order-1 order-2">
              <ChecklistDiagram />
            </Panel>
            <div className="md:order-2 order-1">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                What it teaches
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">
                Metrology is mostly discipline: interlocks, warm-up, calibration, blinding,
                uncertainty. The simulator models the boring parts faithfully, because the
                boring parts are the measurement.
              </p>
            </div>
          </div>

          <div className="ov-explainer grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                What it is not
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">
                Not a real instrument. Not a claim about the world. An educational
                simulator with idealized, energy-conserving physics — output is always
                less than input.{" "}
                <span className="text-ink">
                  The sphere does not create energy; it stores and returns a tiny fraction
                  of what you drive into it.
                </span>
              </p>
            </div>
            <Panel pad={false} className="p-2">
              <SankeyDiagram />
            </Panel>
          </div>
        </div>
      </section>

      {/* ============ Section 5 — Status board + footer CTA ============ */}
      <section className="border-t border-line bg-shell">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="ov-board">
            <Panel title="Facility status board" bezel>
              <FacilitySnapshot compact />
            </Panel>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6 text-center">
            <Link
              to="/console"
              className="ov-begin rounded-sm bg-trace px-8 py-3 font-display text-sm font-semibold uppercase tracking-[0.14em] text-void transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              Begin LOC-1 →
            </Link>
            <p className="max-w-2xl text-xs leading-relaxed text-faint">
              Resonance Lab is an educational simulator. All instruments, readings, and the
              facility are fictional and simulated in your browser. Physics is idealized
              and strictly energy-conserving: measured output is always less than input.
              No real measurements are taken and no performance claims are made.
            </p>
            <div className="flex items-center gap-2 text-faint">
              <Activity size={12} strokeWidth={1.5} />
              <span className="font-mono text-[10px] uppercase tracking-[0.14em]">
                Meridian Standards Laboratory — Teaching Bay 3
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
