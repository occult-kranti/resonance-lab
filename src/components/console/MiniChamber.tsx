import { useNavigate } from "react-router";
import { Panel } from "@/components/shared";
import { useSim } from "@/sim/store";
import type { FaultId } from "@/sim/store";
import { cn } from "@/lib/utils";

/**
 * Mini chamber view (console.md §Row 4G): 2D SVG cross-section.
 * Copper sphere breathes (scale 1.000→1.004, 2 s) while driven at resonance;
 * stage crosshair tracks stage X/Y; LDV beam pulses; door bolts show interlock.
 */
export default function MiniChamber() {
  const navigate = useNavigate();
  const stage = useSim((s) => s.stage);
  const power = useSim((s) => s.power);
  const hasFit = useSim((s) => s.lastFit !== null);
  const faults = useSim((s) => s.faults);
  const pressure = useSim((s) => s.pressure);

  const anyFault = (Object.keys(faults) as FaultId[]).some((k) => faults[k]);
  const on = power === "FACILITY_ON";
  const driven = on && hasFit; // driven at resonance once characterized
  const evacuated = pressure < 1e-3;

  // map stage mm → svg px offsets (viewBox 200×140, sphere home at 100,66)
  const sx = (stage.x / 35) * 34;
  const sy = (-stage.y / 35) * 18;

  return (
    <Panel
      accent="blue"
      title="Chamber · cross-section"
      className="h-full transition-transform duration-150 hover:-translate-y-0.5"
    >
      <button
        onClick={() => navigate("/chamber")}
        className="block w-full"
        aria-label="Open 3D chamber view"
      >
        <svg
          viewBox="0 0 200 140"
          className="block w-full rounded-sm border border-line bg-[#070b10]"
          role="img"
          aria-label="Vacuum chamber cross-section with copper sphere on XYZ stage"
        >
          <defs>
            <radialGradient id="mc-copper" cx="38%" cy="34%" r="75%">
              <stop offset="0%" stopColor="#e8a06c" />
              <stop offset="55%" stopColor="#c47a4a" />
              <stop offset="100%" stopColor="#6e3f22" />
            </radialGradient>
          </defs>

          {/* chamber wall */}
          <rect
            x="14"
            y="12"
            width="172"
            height="104"
            rx="18"
            fill="none"
            stroke="#2c3d52"
            strokeWidth="2.5"
          />
          <rect
            x="20"
            y="18"
            width="160"
            height="92"
            rx="14"
            fill={evacuated ? "rgba(90,162,240,0.03)" : "none"}
            stroke="rgba(30,42,56,0.8)"
            strokeWidth="1"
          />

          {/* door bolts — interlock state */}
          {[30, 70, 130, 170].map((bx) => (
            <circle
              key={bx}
              cx={bx}
              cy="12"
              r="2.4"
              className={cn(
                anyFault ? "fill-bad" : on ? "fill-go" : "fill-faint/50",
                !anyFault && on && "led-glow",
              )}
            />
          ))}

          {/* pump port */}
          <rect x="88" y="116" width="24" height="12" fill="#0e141d" stroke="#2c3d52" strokeWidth="1.5" />
          <text x="100" y="136" textAnchor="middle" fontSize="6.5" fill="#4b5b6e" fontFamily="'JetBrains Mono', monospace">
            PUMP {evacuated ? "· HV" : ""}
          </text>

          {/* stage crosshair */}
          <g stroke="#8296ab" strokeWidth="0.7" strokeDasharray="2 3" opacity="0.7">
            <line x1={100 + sx} y1="26" x2={100 + sx} y2="108" />
            <line x1="30" y1={66 + sy} x2="170" y2={66 + sy} />
          </g>
          {/* stage table */}
          <rect x={100 + sx - 16} y={66 + sy + 13} width="32" height="4" rx="1" fill="#1e2a38" />

          {/* sphere + stem (breathing scale when driven) */}
          <g
            style={{
              transformOrigin: `${100 + sx}px ${66 + sy}px`,
              transformBox: "view-box",
            }}
            className={driven ? "animate-[sphere-breathe_2s_ease-in-out_infinite]" : undefined}
          >
            <line
              x1={100 + sx}
              y1={66 + sy + 9}
              x2={100 + sx}
              y2={66 + sy + 13}
              stroke="#8296ab"
              strokeWidth="1.4"
            />
            <circle cx={100 + sx} cy={66 + sy} r="9" fill="url(#mc-copper)" stroke="#e8a06c" strokeOpacity="0.5" strokeWidth="0.7" />
          </g>

          {/* LDV beam */}
          <g className={on ? "animate-[ldv-pulse_2s_ease-in-out_infinite]" : undefined} opacity={on ? 1 : 0.25}>
            <line
              x1="22"
              y1={40 + sy * 0.4}
              x2={100 + sx - 8}
              y2={66 + sy - 2}
              stroke="#2dd4c8"
              strokeWidth="1"
            />
            <rect x="16" y={36 + sy * 0.4} width="7" height="8" rx="1" fill="#131b26" stroke="#2dd4c8" strokeWidth="0.8" />
          </g>

          {/* labels */}
          <text x="24" y="28" fontSize="6.5" fill="#4b5b6e" fontFamily="'JetBrains Mono', monospace">
            LDV
          </text>
          <text x="170" y="106" textAnchor="end" fontSize="6.5" fill="#4b5b6e" fontFamily="'JetBrains Mono', monospace">
            {on ? "SPHERE · Cu" : "DARK"}
          </text>
        </svg>
        <p className="mt-2 text-left font-mono text-[10px] text-faint">
          x {stage.x.toFixed(2)} · y {stage.y.toFixed(2)} · z {stage.z.toFixed(2)} mm — open 3D view
        </p>
      </button>
    </Panel>
  );
}
