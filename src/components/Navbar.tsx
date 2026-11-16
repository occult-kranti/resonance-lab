import { useState } from "react";
import { NavLink } from "react-router";
import {
  Activity,
  Bot,
  Boxes,
  Bug,
  ClipboardCheck,
  Clock3,
  FlaskConical,
  GraduationCap,
  LayoutDashboard,
  Microscope,
  NotebookPen,
  PanelLeftClose,
  PanelLeftOpen,
  Radar,
  Radio,
  Scan,
  Trophy,
  Waves,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSim } from "@/sim/store";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
  liveDot?: boolean;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const NAV: NavGroup[] = [
  {
    title: "Operations",
    items: [
      { to: "/", label: "Overview", icon: LayoutDashboard },
      { to: "/console", label: "Console", icon: Activity, liveDot: true },
      { to: "/chamber", label: "Chamber", icon: Boxes },
      { to: "/copilot", label: "Copilot", icon: Bot },
      { to: "/timeline", label: "Timeline", icon: Clock3, liveDot: true },
    ],
  },
  {
    title: "Instruments",
    items: [
      { to: "/field-explorer", label: "Field Explorer", icon: Radar },
      { to: "/vna", label: "VNA", icon: Waves, liveDot: true },
      { to: "/ldv", label: "LDV", icon: Scan },
      { to: "/oscilloscope", label: "Oscilloscope", icon: Radio },
      { to: "/reference", label: "Reference", icon: Clock3 },
    ],
  },
  {
    title: "Research",
    items: [
      { to: "/runs", label: "Runs", icon: FlaskConical },
      { to: "/notebook", label: "Notebook", icon: NotebookPen },
      { to: "/findings", label: "Findings", icon: Microscope },
    ],
  },
  {
    title: "Learning",
    items: [
      { to: "/learning", label: "Learning Paths", icon: GraduationCap },
      { to: "/training", label: "Training", icon: ClipboardCheck },
      { to: "/challenge", label: "Challenge", icon: Trophy },
      { to: "/faults", label: "Fault Injector", icon: Bug },
    ],
  },
];

/** Collapsible left sidebar nav (design.md §4). 240px ↔ 64px icon rail. */
export default function Navbar() {
  const [collapsed, setCollapsed] = useState(false);
  const facilityOn = useSim((s) => s.power === "FACILITY_ON");

  return (
    <aside
      className={cn(
        "sticky top-0 flex h-[100dvh] shrink-0 flex-col border-r border-line bg-shell transition-[width] duration-250 ease-out",
        collapsed ? "w-16" : "w-60",
      )}
      style={{ transitionDuration: "250ms" }}
    >
      {/* logo */}
      <div className="flex h-12 items-center gap-2 border-b border-line px-3">
        <img src="/logo.svg" alt="Resonance Lab" className="h-7 w-auto shrink-0" />
        {!collapsed && (
          <span className="sr-only">Resonance Lab</span>
        )}
      </div>

      {/* nav groups */}
      <nav className="min-h-0 flex-1 overflow-y-auto py-3">
        {NAV.map((group) => (
          <div key={group.title} className="mb-3">
            {!collapsed && (
              <p className="px-4 pb-1 font-display text-[9px] font-semibold uppercase tracking-[0.18em] text-faint">
                {group.title}
              </p>
            )}
            {group.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                title={collapsed ? item.label : undefined}
                className={({ isActive }) =>
                  cn(
                    "group relative flex items-center gap-3 px-4 py-1.5 text-sm transition-colors",
                    isActive ? "text-ink" : "text-dim hover:text-ink",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {/* 3px slide indicator */}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-trace transition-transform duration-150",
                        isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-50",
                      )}
                    />
                    <item.icon
                      size={16}
                      strokeWidth={1.5}
                      className={cn("shrink-0", isActive ? "text-trace" : "text-dim group-hover:text-ink")}
                    />
                    {!collapsed && <span className="truncate font-body">{item.label}</span>}
                    {!collapsed && item.liveDot && (
                      <span
                        aria-hidden
                        className={cn(
                          "ml-auto h-1.5 w-1.5 rounded-full",
                          facilityOn ? "bg-go led-glow text-go" : "bg-faint/40",
                        )}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      {/* collapse toggle */}
      <button
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="flex h-10 items-center justify-center border-t border-line text-faint transition-colors hover:text-ink"
      >
        {collapsed ? (
          <PanelLeftOpen size={16} strokeWidth={1.5} />
        ) : (
          <PanelLeftClose size={16} strokeWidth={1.5} />
        )}
      </button>
    </aside>
  );
}
