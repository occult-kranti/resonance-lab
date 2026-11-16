import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Copy, NotebookPen, SendHorizonal } from "lucide-react";
import {
  ChatBubble,
  Panel,
  PhaseStepper,
  StatusLED,
  TypingIndicator,
} from "@/components/shared";
import type { PhaseStep } from "@/components/shared";
import { formatSessionTime, useSim } from "@/sim/store";
import type { SimEvent } from "@/sim/store";
import { answer, qualityChecklist, suggestions } from "@/components/copilot/brain";
import type { CopilotAnswer } from "@/components/copilot/brain";
import { appendNotebookEntry } from "@/components/copilot/notebookBridge";
import { loc1Steps } from "@/components/console/loc1";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/* Message model + persistence (per session id → cleared on reset)     */
/* ------------------------------------------------------------------ */

interface ChatMsg extends CopilotAnswer {
  id: string;
  role: "operator" | "copilot";
  t: number;
  wall: number;
}

function storageKey(sessionId: string) {
  return `resonance-lab-copilot-${sessionId}`;
}

function loadMsgs(sessionId: string): ChatMsg[] {
  try {
    const raw = window.localStorage.getItem(storageKey(sessionId));
    return raw ? (JSON.parse(raw) as ChatMsg[]) : [];
  } catch {
    return [];
  }
}

function saveMsgs(sessionId: string, msgs: ChatMsg[]) {
  try {
    window.localStorage.setItem(storageKey(sessionId), JSON.stringify(msgs.slice(-100)));
  } catch {
    /* storage unavailable */
  }
}

function makeMsg(role: ChatMsg["role"], body: CopilotAnswer): ChatMsg {
  const s = useSim.getState();
  return {
    id: Math.random().toString(36).slice(2, 10),
    role,
    t: s.simTime,
    wall: Date.now(),
    ...body,
  };
}

const OPENING: CopilotAnswer = {
  paragraphs: [
    "Welcome to Teaching Bay 3. I'm a scripted assistant — I don't think, but I do watch the facility. Right now the bay is dark. Flip mains power on the **Console** and we'll walk LOC-1 together, one honest step at a time.",
  ],
  links: [{ label: "Open Console", to: "/console" }],
};

/** Render **bold** segments as mono ink values. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i} className="font-mono font-semibold text-ink">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

function MessageBody({ msg }: { msg: ChatMsg }) {
  const [copied, setCopied] = useState(false);
  const plainText = useMemo(
    () =>
      msg.paragraphs
        .map((p) => p.replaceAll("**", ""))
        .join("\n\n"),
    [msg],
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(plainText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      /* clipboard unavailable */
    }
  };

  const toNotebook = () => {
    appendNotebookEntry({
      author: "COPILOT",
      tag: "copilot",
      title: `Copilot — ${plainText.slice(0, 60)}${plainText.length > 60 ? "…" : ""}`,
      body: plainText,
    });
  };

  return (
    <div className="group/msg relative">
      {msg.role === "copilot" && (
        <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
          Copilot
        </p>
      )}
      {msg.paragraphs.map((p, i) =>
        p.includes("\n") ? (
          <pre
            key={i}
            className="mb-1.5 whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-dim last:mb-0"
          >
            <RichText text={p} />
          </pre>
        ) : (
          <p key={i} className="mb-1.5 last:mb-0">
            <RichText text={p} />
          </p>
        ),
      )}
      {msg.checklist && (
        <ul className="mt-2 space-y-1">
          {msg.checklist.map((c) => (
            <li key={c.label} className="flex items-center gap-2 font-mono text-[11px]">
              <StatusLED state={c.ok ? "on" : "off"} />
              <span className={c.ok ? "text-dim" : "text-warn"}>{c.label}</span>
            </li>
          ))}
        </ul>
      )}
      {msg.links && msg.links.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          {msg.links.map((l) => (
            <Link
              key={l.to + l.label}
              to={l.to}
              className="font-mono text-[11px] text-trace underline decoration-trace/40 underline-offset-4 transition-colors hover:decoration-trace"
            >
              → {l.label}
            </Link>
          ))}
        </div>
      )}
      <div className="mt-1.5 flex items-center gap-3">
        <span className="font-mono text-[9px] text-faint">
          {formatSessionTime(msg.t)}
        </span>
        <button
          onClick={copy}
          aria-label="Copy message"
          className="text-faint opacity-0 transition-opacity hover:text-ink group-hover/msg:opacity-100"
        >
          {copied ? (
            <span className="font-mono text-[9px] text-go">copied</span>
          ) : (
            <Copy size={11} strokeWidth={1.5} />
          )}
        </button>
        {msg.role === "copilot" && (
          <button
            onClick={toNotebook}
            aria-label="Insert into Notebook"
            title="Insert into Notebook"
            className="text-faint opacity-0 transition-opacity hover:text-trace group-hover/msg:opacity-100"
          >
            <NotebookPen size={11} strokeWidth={1.5} />
          </button>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* "Copilot sees" context card                                         */
/* ------------------------------------------------------------------ */

function ContextCard() {
  const steps: PhaseStep[] = useSim((s) =>
    loc1Steps(s).map((st) => ({
      index: st.index,
      title: st.title,
      status: st.done ? "done" : "locked",
    })),
  );
  // recompute current marker (loc1Steps doesn't tag current)
  const currentIdx = steps.findIndex((st) => st.status === "locked");
  const withCurrent = steps.map((st, i) => ({
    ...st,
    status: (st.status === "done" ? "done" : i === currentIdx ? "current" : "locked") as PhaseStep["status"],
  }));

  const checklist = useSim((s) => qualityChecklist(s));
  const faults = useSim((s) => s.faults);
  const hidden = useSim((s) => s.hiddenFaults);
  const events = useSim((s) => s.events);
  const activeCount = Object.values(faults).filter(Boolean).length;
  const last3: SimEvent[] = events.slice(-3).reverse();

  return (
    <Panel title="Copilot sees" className="w-full">
      <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
        LOC-1 phase
      </p>
      <PhaseStepper steps={withCurrent} orientation="vertical" />

      <p className="mb-2 mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
        Quality gates
      </p>
      <ul className="space-y-1">
        {checklist.map((c) => (
          <li key={c.label} className="flex items-center gap-2 font-mono text-[10px]">
            <StatusLED state={c.ok ? "on" : "off"} />
            <span className={c.ok ? "text-dim" : "text-warn"}>{c.label}</span>
          </li>
        ))}
      </ul>

      <p className="mb-1 mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
        Faults
      </p>
      <p className={cn("font-mono text-[11px]", activeCount ? "text-bad" : "text-dim")}>
        {activeCount === 0 ? "none" : hidden ? "diagnosis mode active" : `${activeCount} active`}
      </p>

      <p className="mb-1 mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
        Latest events
      </p>
      {last3.length === 0 ? (
        <p className="font-mono text-[10px] text-faint">nothing yet</p>
      ) : (
        <ul className="space-y-1.5">
          {last3.map((e) => (
            <li key={e.id} className="min-w-0">
              <span className="font-mono text-[9px] text-faint">
                {formatSessionTime(e.t)}{" "}
              </span>
              <span className="block truncate font-mono text-[10px] text-dim" title={e.message}>
                {e.message}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Copilot() {
  const sessionId = useSim((s) => s.sessionId);
  const [msgs, setMsgs] = useState<ChatMsg[]>(() => {
    const stored = loadMsgs(sessionId);
    if (stored.length > 0) return stored;
    return [makeMsg("copilot", OPENING)];
  });
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const [atBottom, setAtBottom] = useState(true);
  const [pending, setPending] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // persist + session reset handling
  useEffect(() => {
    saveMsgs(sessionId, msgs);
  }, [msgs, sessionId]);

  useEffect(() => {
    // session id changed → session reset → fresh conversation
    const stored = loadMsgs(sessionId);
    setMsgs(stored.length > 0 ? stored : [makeMsg("copilot", OPENING)]);
  }, [sessionId]);

  // ⌘K focuses the composer from anywhere
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollToBottom = (smooth = true) => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: smooth ? "smooth" : "auto" });
  };

  // auto-scroll when new content arrives and the user is at the bottom
  useEffect(() => {
    if (atBottom) scrollToBottom(false);
    else setPending((n) => n + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msgs.length, typing]);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const at = el.scrollHeight - el.scrollTop - el.clientHeight < 48;
    setAtBottom(at);
    if (at) setPending(0);
  };

  const send = (text: string) => {
    const clean = text.trim().slice(0, 500);
    if (!clean || typing) return;
    const userMsg = makeMsg("operator", { paragraphs: [clean] });
    setMsgs((m) => [...m, userMsg]);
    setDraft("");
    setTyping(true);
    window.setTimeout(() => {
      const reply = makeMsg("copilot", answer(clean, useSim.getState()));
      setTyping(false);
      setMsgs((m) => [...m, reply]);
    }, 900);
  };

  // recompute chips only when the underlying conditions change
  const chipSeed = useSim((s) =>
    [
      s.power,
      s.pressure < 1e-3,
      s.vnaCalibrated,
      s.lastFit !== null,
      Object.values(s.faults).some(Boolean),
      s.hiddenFaults,
    ].join("|"),
  );
  const chips = useMemo(() => {
    void chipSeed; // re-derive suggestions only when conditions change
    return suggestions(useSim.getState());
  }, [chipSeed]);

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-12rem)] max-w-4xl flex-col p-4 md:p-6">
      {/* header */}
      <header className="mb-4">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
            AI Copilot
          </h1>
          <span className="rounded-full border border-line bg-panel px-3 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
            Scripted teaching assistant — runs 100% in your browser
          </span>
        </div>
        <p className="mt-1 text-sm text-dim">
          Ask about the experiment, the instruments, or why something won't turn on.
        </p>
      </header>

      <div className="flex min-h-0 flex-1 items-start gap-4">
        {/* chat column */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* context card above chat on <xl */}
          <div className="mb-4 xl:hidden">
            <ContextCard />
          </div>

          <div className="relative flex min-h-[320px] flex-1 flex-col overflow-hidden rounded-md border border-line bg-panel/40">
            <div
              ref={scrollRef}
              onScroll={onScroll}
              className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4"
            >
              <AnimatePresence initial={false}>
                {msgs.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: EASE }}
                  >
                    <ChatBubble role={m.role}>
                      <MessageBody msg={m} />
                    </ChatBubble>
                  </motion.div>
                ))}
              </AnimatePresence>
              {typing && (
                <ChatBubble role="copilot">
                  <TypingIndicator />
                </ChatBubble>
              )}
            </div>

            {/* new-message pill */}
            <AnimatePresence>
              {!atBottom && pending > 0 && (
                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => {
                    scrollToBottom();
                    setPending(0);
                  }}
                  className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-trace/50 bg-panel-2 px-3 py-1 font-mono text-[10px] text-trace shadow-lg"
                >
                  <ArrowDown size={11} strokeWidth={1.5} />
                  {pending} new
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* suggestion chips */}
          <div className="mt-3 flex flex-wrap gap-2">
            {chips.map((c, i) => (
              <motion.button
                key={c}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.18, ease: EASE }}
                onClick={() => send(c)}
                disabled={typing}
                className="rounded-full border border-line bg-panel px-3 py-1 font-mono text-[11px] text-dim transition-colors hover:border-trace/60 hover:text-trace disabled:opacity-40"
              >
                {c}
              </motion.button>
            ))}
          </div>

          {/* composer */}
          <form
            className="mt-3 flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              send(draft);
            }}
          >
            <input
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value.slice(0, 500))}
              placeholder="Ask the copilot…"
              maxLength={500}
              className="min-w-0 flex-1 rounded-sm border border-line bg-void px-3 py-2 font-mono text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-line-bright"
              aria-label="Ask the copilot"
            />
            <button
              type="submit"
              disabled={!draft.trim() || typing}
              aria-label="Send"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-trace/60 bg-trace/10 text-trace transition-all hover:bg-trace/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <SendHorizonal size={14} strokeWidth={1.5} />
            </button>
          </form>
          <p className="mt-1 text-right font-mono text-[9px] text-faint">
            {draft.length}/500 · ⌘K to focus
          </p>
        </div>

        {/* right rail (xl only) */}
        <aside className="sticky top-16 hidden w-80 shrink-0 xl:block">
          <ContextCard />
        </aside>
      </div>
    </div>
  );
}
