import { useState } from "react";
import { CornerDownLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import type { EntryTag } from "./store";

const TAGS: EntryTag[] = ["note", "fit", "run", "fault"];

/**
 * Manual composer (notebook.md): sticky at the bottom of the entries stream.
 * Markdown-lite supported; ⌘⏎ / Ctrl+Enter submits.
 */
export default function Composer({
  onAdd,
}: {
  onAdd: (body: string, tag: EntryTag) => void;
}) {
  const [body, setBody] = useState("");
  const [tag, setTag] = useState<EntryTag>("note");

  const submit = () => {
    const trimmed = body.trim();
    if (!trimmed) return;
    onAdd(trimmed, tag);
    setBody("");
  };

  return (
    <div className="sticky bottom-3 mt-4 rounded-md border border-line-bright bg-panel-2 p-3 shadow-[0_-8px_24px_rgba(5,8,13,0.6)]">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        onKeyDown={(e) => {
          if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
            e.preventDefault();
            submit();
          }
        }}
        rows={3}
        placeholder="Note for the record…"
        aria-label="New notebook entry"
        className="w-full resize-y rounded-sm border border-line bg-void p-2 font-mono text-sm text-ink placeholder:text-faint focus:border-trace/60 focus:outline-none"
      />
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
          Tag
        </span>
        {TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={cn(
              "rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors",
              tag === t
                ? "border-trace/60 bg-trace/10 text-trace"
                : "border-line text-faint hover:border-line-bright hover:text-dim",
            )}
          >
            {t}
          </button>
        ))}
        <button
          onClick={submit}
          disabled={!body.trim()}
          className="ml-auto flex items-center gap-1.5 rounded-sm border border-trace/60 bg-trace/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-trace transition-colors hover:bg-trace/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <CornerDownLeft size={11} strokeWidth={1.5} />
          Add entry
          <span className="text-faint">⌘⏎</span>
        </button>
      </div>
    </div>
  );
}
