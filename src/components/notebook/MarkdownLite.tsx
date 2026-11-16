import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   Markdown-lite rendering (notebook.md): **bold**, `code`, - lists
   ------------------------------------------------------------------ */

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  // split on `code` first, then **bold** inside the remaining text
  const out: ReactNode[] = [];
  const codeSplit = text.split(/(`[^`]+`)/g);
  codeSplit.forEach((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      out.push(
        <code
          key={key}
          className="rounded-sm border border-line bg-void px-1 py-px font-mono text-[11px] text-trace"
        >
          {part.slice(1, -1)}
        </code>,
      );
      return;
    }
    const boldSplit = part.split(/(\*\*[^*]+\*\*)/g);
    boldSplit.forEach((seg, j) => {
      if (seg.startsWith("**") && seg.endsWith("**") && seg.length > 4) {
        out.push(
          <strong key={`${key}-${j}`} className="font-semibold text-ink">
            {seg.slice(2, -2)}
          </strong>,
        );
      } else if (seg) {
        out.push(<span key={`${key}-${j}`}>{seg}</span>);
      }
    });
  });
  return out;
}

/** Render a markdown-lite notebook body as React nodes. */
export default function MarkdownLite({ body }: { body: string }) {
  const lines = body.split("\n");
  const blocks: ReactNode[] = [];
  let list: string[] = [];
  const flushList = (key: string) => {
    if (list.length === 0) return;
    const items = list;
    blocks.push(
      <ul key={key} className="ml-4 list-disc space-y-0.5 marker:text-faint">
        {items.map((li, i) => (
          <li key={i}>{renderInline(li, `${key}-${i}`)}</li>
        ))}
      </ul>,
    );
    list = [];
  };
  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("- ")) {
      list.push(trimmed.slice(2));
      return;
    }
    flushList(`ul-${i}`);
    if (trimmed === "") {
      blocks.push(<div key={`sp-${i}`} className="h-2" />);
    } else {
      blocks.push(<p key={`p-${i}`}>{renderInline(line, `p-${i}`)}</p>);
    }
  });
  flushList("ul-end");
  return <div className="space-y-1">{blocks}</div>;
}
