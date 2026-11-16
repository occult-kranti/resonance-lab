import { useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Tooltip (design.md §5.12): mono 11px, panel-2 bg, line-bright border, 120ms delay. */
export default function Tooltip({
  content,
  children,
  side = "top",
  className,
}: {
  content: ReactNode;
  children: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}) {
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState<number | undefined>(undefined);

  const pos = {
    top: "bottom-full left-1/2 mb-1.5 -translate-x-1/2",
    bottom: "top-full left-1/2 mt-1.5 -translate-x-1/2",
    left: "right-full top-1/2 mr-1.5 -translate-y-1/2",
    right: "left-full top-1/2 ml-1.5 -translate-y-1/2",
  }[side];

  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setTimer(window.setTimeout(() => setShow(true), 120))}
      onMouseLeave={() => {
        window.clearTimeout(timer);
        setShow(false);
      }}
    >
      {children}
      {show && (
        <span
          role="tooltip"
          className={cn(
            "pointer-events-none absolute z-50 whitespace-nowrap rounded-sm border border-line-bright bg-panel-2 px-2 py-1 font-mono text-[11px] text-dim",
            pos,
          )}
        >
          {content}
        </span>
      )}
    </span>
  );
}
