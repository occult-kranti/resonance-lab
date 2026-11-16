import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ChatRole = "operator" | "copilot";

/**
 * ChatBubble / CopilotMessage (design.md §5.9).
 * Operator: right-aligned, panel-2. Copilot: left with trace avatar dot.
 */
export function ChatBubble({
  role,
  children,
  className,
}: {
  role: ChatRole;
  children: ReactNode;
  className?: string;
}) {
  const isOperator = role === "operator";
  return (
    <div
      className={cn(
        "flex w-full",
        isOperator ? "justify-end" : "justify-start",
        className,
      )}
    >
      <div className={cn("flex max-w-[80%] items-start gap-2", isOperator && "flex-row-reverse")}>
        {!isOperator && (
          <span
            aria-hidden
            className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-trace led-glow text-trace"
          />
        )}
        <div
          className={cn(
            "rounded-md border px-3 py-2 text-sm leading-relaxed",
            isOperator
              ? "border-line-bright bg-panel-2 text-ink"
              : "border-line bg-panel text-ink",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/** Alias kept for page agents that import CopilotMessage by name. */
export const CopilotMessage = ChatBubble;

export function TypingIndicator({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1 px-1 py-2", className)}>
      <span className="h-2 w-2 rounded-full bg-trace/70 led-glow text-trace" />
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="animate-typing-dot h-1.5 w-1.5 rounded-full bg-dim"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </div>
  );
}
