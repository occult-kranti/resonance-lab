import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Pencil, Pin, PinOff, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatSessionTime } from "@/sim/store";
import Tooltip from "@/components/shared/Tooltip";
import type { EntryAuthor, EntryTag } from "./store";
import type { MiniPlotKind } from "./MiniPlot";
import MiniPlot from "./MiniPlot";
import MarkdownLite from "./MarkdownLite";

const AUTHOR_STYLES: Record<EntryAuthor, string> = {
  AUTOLOG: "border-violet/40 text-violet/80",
  OPERATOR: "border-trace/50 text-trace",
  COPILOT: "border-go/50 text-go",
};

const ATTACHMENT_CAPTION: Record<MiniPlotKind, string> = {
  dip: "S11 dip — live snapshot",
  temp: "Chamber temperature — live trace",
  pressure: "Chamber pressure (log) — live trace",
  residuals: "Fit residuals — live snapshot",
};

export interface EntryCardProps {
  /** DOM anchor id for jump-to-entry links */
  anchorId: string;
  t: number;
  wall: number;
  author: EntryAuthor;
  authorLabel: string;
  tag: EntryTag;
  body: string;
  /** manual entries support edit/delete + markdown-lite */
  manual: boolean;
  pinned: boolean;
  attachment?: MiniPlotKind | null;
  onPin: () => void;
  onEdit?: (body: string) => void;
  onDelete?: () => void;
}

/** Notebook entry card (notebook.md §Entries stream). */
export default function EntryCard({
  anchorId,
  t,
  wall,
  author,
  authorLabel,
  tag,
  body,
  manual,
  pinned,
  attachment,
  onPin,
  onEdit,
  onDelete,
}: EntryCardProps) {
  const [copied, setCopied] = useState(false);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(body);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  const iconBtn =
    "rounded-sm border border-line p-1 text-faint transition-colors hover:border-line-bright hover:text-ink";

  return (
    <motion.article
      id={anchorId}
      layout="position"
      initial={{ opacity: 0, y: -12, backgroundColor: "rgba(45,212,200,0.08)" }}
      animate={{ opacity: 1, y: 0, backgroundColor: "rgba(14,20,29,1)" }}
      exit={{ opacity: 0, height: 0, marginBottom: 0, overflow: "hidden" }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative mb-3 rounded-md border bg-panel transition-colors",
        pinned ? "border-trace/40" : "border-line hover:border-line-bright",
      )}
    >
      {/* header row */}
      <header className="flex flex-wrap items-center gap-2 border-b border-line px-3 py-2">
        <Tooltip content={new Date(wall).toLocaleString()}>
          <span className="font-mono text-[11px] tabular-nums text-dim">
            {formatSessionTime(t)}
          </span>
        </Tooltip>
        <span
          className={cn(
            "rounded-full border px-2 py-px font-mono text-[9px] uppercase tracking-[0.12em]",
            AUTHOR_STYLES[author],
          )}
        >
          {authorLabel}
        </span>
        <span className="rounded-full border border-line px-2 py-px font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
          {tag}
        </span>
        <span className="ml-auto flex items-center gap-1.5">
          <Tooltip content={pinned ? "Unpin" : "Pin to rail"}>
            <button aria-label="Pin entry" onClick={onPin} className={cn(iconBtn, pinned && "border-trace/50 text-trace")}>
              {pinned ? <PinOff size={12} strokeWidth={1.5} /> : <Pin size={12} strokeWidth={1.5} />}
            </button>
          </Tooltip>
          <Tooltip content="Copy entry text">
            <button aria-label="Copy entry" onClick={copy} className={iconBtn}>
              {copied ? (
                <Check size={12} strokeWidth={1.5} className="text-go" />
              ) : (
                <Copy size={12} strokeWidth={1.5} />
              )}
            </button>
          </Tooltip>
          {manual && onEdit && (
            <Tooltip content="Edit entry">
              <button
                aria-label="Edit entry"
                onClick={() => {
                  setDraft(body);
                  setEditing(true);
                }}
                className={iconBtn}
              >
                <Pencil size={12} strokeWidth={1.5} />
              </button>
            </Tooltip>
          )}
          {manual && onDelete ? (
            <Tooltip content="Delete entry (undo available)">
              <button aria-label="Delete entry" onClick={onDelete} className={cn(iconBtn, "hover:border-bad/60 hover:text-bad")}>
                <Trash2 size={12} strokeWidth={1.5} />
              </button>
            </Tooltip>
          ) : (
            <Tooltip content="Autolog entries are read-only — honesty by design. They clear only on session reset.">
              <span className={cn(iconBtn, "cursor-not-allowed opacity-40 hover:border-line hover:text-faint")}>
                <Trash2 size={12} strokeWidth={1.5} />
              </span>
            </Tooltip>
          )}
        </span>
      </header>

      {/* body */}
      <div className="px-3 py-2.5 text-sm leading-relaxed text-dim">
        {editing ? (
          <div>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={Math.max(3, draft.split("\n").length)}
              className="w-full resize-y rounded-sm border border-line-bright bg-void p-2 font-body text-sm text-ink outline-none focus:border-trace/60"
            />
            <div className="mt-2 flex justify-end gap-2">
              <button
                onClick={() => setEditing(false)}
                className="rounded-sm border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-dim hover:text-ink"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const trimmed = draft.trim();
                  if (trimmed) onEdit?.(trimmed);
                  setEditing(false);
                }}
                className="rounded-sm border border-trace/60 bg-trace/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-trace hover:bg-trace/20"
              >
                Save
              </button>
            </div>
          </div>
        ) : manual ? (
          <MarkdownLite body={body} />
        ) : (
          <p>{body}</p>
        )}

        {attachment && !editing && (
          <figure className="mt-2">
            <MiniPlot kind={attachment} />
            <figcaption className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
              {ATTACHMENT_CAPTION[attachment]}
            </figcaption>
          </figure>
        )}
      </div>
    </motion.article>
  );
}
