import { useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  Flame,
  Lock,
  RotateCcw,
} from "lucide-react";
import { Panel, Modal } from "@/components/shared";
import { ToggleSwitch } from "@/components/shared/ToggleSwitch";
import { cn } from "@/lib/utils";
import { useSim } from "@/sim/store";
import { MODULES, PASS_MARK } from "@/components/learning/content";
import type { ModuleDef } from "@/components/learning/content";
import { useLearningStore } from "@/components/learning/learningStore";
import {
  OscillatorWidget,
  QDipWidget,
  TempWalkWidget,
} from "@/components/learning/widgets";
import { emitUiEvent, shortHash } from "@/components/learning/simBus";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------------------------------------------------------------- */
/* Progress ring (SVG)                                               */
/* ---------------------------------------------------------------- */
function ProgressRing({ frac }: { frac: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <svg width="68" height="68" viewBox="0 0 68 68" className="shrink-0">
      <circle cx="34" cy="34" r={r} fill="none" stroke="#1e2a38" strokeWidth="4" />
      <motion.circle
        cx="34"
        cy="34"
        r={r}
        fill="none"
        stroke="#2dd4c8"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={false}
        animate={{ strokeDashoffset: c * (1 - frac) }}
        transition={{ duration: 0.6, ease: EASE }}
        transform="rotate(-90 34 34)"
        style={{ filter: "drop-shadow(0 0 4px rgba(45,212,200,0.4))" }}
      />
      <text
        x="34"
        y="38"
        textAnchor="middle"
        className="fill-ink font-mono"
        fontSize="13"
        fontWeight="700"
      >
        {Math.round(frac * 100)}%
      </text>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Quiz                                                              */
/* ---------------------------------------------------------------- */
function Quiz({ mod, onPassed }: { mod: ModuleDef; onPassed: () => void }) {
  const recordQuiz = useLearningStore((s) => s.recordQuiz);
  const [answers, setAnswers] = useState<(number | null)[]>(
    mod.quiz.map(() => null),
  );
  const [round, setRound] = useState(0);

  const answeredAll = answers.every((a) => a !== null);
  const score = answers.filter((a, i) => a === mod.quiz[i].answer).length;

  const finish = (finalAnswers: (number | null)[]) => {
    const sc = finalAnswers.filter((a, i) => a === mod.quiz[i].answer).length;
    const newly = recordQuiz(mod.id, sc, PASS_MARK);
    if (newly) {
      emitUiEvent(
        "experiment",
        "NOMINAL",
        `Learning module complete: ${mod.title} (quiz ${sc}/${mod.quiz.length})`,
      );
      onPassed();
    }
  };

  return (
    <div className="mt-5 border-t border-line pt-4">
      <h3 className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-dim">
        Quiz — {mod.quiz.length} questions, pass at {PASS_MARK}+
      </h3>
      <div className="mt-3 space-y-5">
        {mod.quiz.map((q, qi) => {
          const answered = answers[qi] !== null;
          return (
            <div key={`${round}-${qi}`}>
              <p className="text-sm text-ink">
                <span className="mr-2 font-mono text-[11px] text-faint">
                  Q{qi + 1}
                </span>
                {q.q}
              </p>
              <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
                {q.options.map((opt, oi) => {
                  const chosen = answers[qi] === oi;
                  const correct = q.answer === oi;
                  return (
                    <motion.button
                      key={oi}
                      disabled={answered}
                      onClick={() => {
                        const next = [...answers];
                        next[qi] = oi;
                        setAnswers(next);
                        if (next.every((a) => a !== null)) finish(next);
                      }}
                      animate={
                        answered && chosen && !correct
                          ? { x: [0, -5, 5, -3, 3, 0] }
                          : {}
                      }
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "rounded-sm border px-3 py-2 text-left text-[13px] transition-colors",
                        !answered &&
                          "border-line bg-panel-2 text-dim hover:border-line-bright hover:text-ink",
                        answered && correct && "border-go/60 bg-go/10 text-go",
                        answered &&
                          chosen &&
                          !correct &&
                          "border-bad/60 bg-bad/10 text-bad",
                        answered &&
                          !chosen &&
                          !correct &&
                          "border-line text-faint",
                      )}
                    >
                      {opt}
                    </motion.button>
                  );
                })}
              </div>
              <AnimatePresence>
                {answered && (
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "mt-1.5 text-[12px] leading-relaxed",
                      answers[qi] === q.answer ? "text-go" : "text-dim",
                    )}
                  >
                    {answers[qi] === q.answer ? "Correct — " : "Not quite — "}
                    {q.why}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {answeredAll && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "mt-4 flex items-center justify-between rounded-sm border px-3 py-2.5",
            score >= PASS_MARK
              ? "border-go/50 bg-go/10"
              : "border-warn/50 bg-warn/5",
          )}
        >
          <span
            className={cn(
              "font-mono text-[11px] uppercase tracking-[0.12em]",
              score >= PASS_MARK ? "text-go" : "text-warn",
            )}
          >
            {score >= PASS_MARK
              ? `Module complete — ${score}/${mod.quiz.length}`
              : `${score}/${mod.quiz.length} — ${PASS_MARK} needed. Retake below.`}
          </span>
          {score >= PASS_MARK ? (
            <motion.span
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 18 }}
              className="flex items-center gap-1.5 rounded-full border border-go/60 bg-go/15 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-go"
            >
              <Check size={11} strokeWidth={2.5} /> Stamped
            </motion.span>
          ) : (
            <button
              onClick={() => {
                setAnswers(mod.quiz.map(() => null));
                setRound((r) => r + 1);
              }}
              className="flex items-center gap-1.5 rounded-sm border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-dim transition-colors hover:border-line-bright hover:text-ink"
            >
              <RotateCcw size={11} strokeWidth={1.5} /> Retake
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Lesson overlay                                                    */
/* ---------------------------------------------------------------- */
function LessonOverlay({
  mod,
  onClose,
}: {
  mod: ModuleDef;
  onClose: () => void;
}) {
  const complete = useLearningStore((s) => s.progress[mod.id]?.complete ?? false);
  const [justStamped, setJustStamped] = useState(false);

  return (
    <Modal open onClose={onClose} className="max-w-3xl">
      <div className="max-h-[78vh] overflow-y-auto pr-1">
        <header className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
              Module {String(mod.number).padStart(2, "0")} /{" "}
              {String(MODULES.length).padStart(2, "0")}
            </p>
            <h2 className="mt-1 font-display text-lg font-semibold uppercase tracking-[0.1em] text-ink">
              {mod.title}
            </h2>
          </div>
          {(complete || justStamped) && (
            <span className="mt-1 flex shrink-0 items-center gap-1.5 rounded-full border border-go/60 bg-go/10 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-go">
              <Check size={11} strokeWidth={2.5} /> Complete
            </span>
          )}
        </header>

        <div className="mt-4 space-y-3">
          {mod.blocks.map((b, i) =>
            b.type === "p" ? (
              <p key={i} className="text-sm leading-relaxed text-dim">
                {b.text}
              </p>
            ) : (
              <div
                key={i}
                className={cn(
                  "rounded-sm border-l-2 px-3 py-2.5 text-[13px] leading-relaxed",
                  b.type === "key"
                    ? "border-go bg-go/5 text-ink"
                    : "border-trace-2 bg-trace-2/5 text-ink",
                )}
              >
                <span
                  className={cn(
                    "mr-2 font-mono text-[9px] uppercase tracking-[0.14em]",
                    b.type === "key" ? "text-go" : "text-trace-2",
                  )}
                >
                  {b.type === "key" ? "Key idea" : "Misconception"}
                </span>
                {b.text}
              </div>
            ),
          )}
        </div>

        {mod.widget && (
          <div className="mt-4">
            {mod.widget === "oscillator" && (
              <OscillatorWidget caption={mod.widgetCaption ?? ""} />
            )}
            {mod.widget === "qdip" && <QDipWidget caption={mod.widgetCaption ?? ""} />}
            {mod.widget === "tempwalk" && (
              <TempWalkWidget caption={mod.widgetCaption ?? ""} />
            )}
          </div>
        )}

        <div className="mt-4">
          <Link
            to={mod.tryLive.to}
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-sm border border-trace/50 bg-trace/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-trace transition-colors hover:bg-trace/20"
          >
            Try it live — {mod.tryLive.label}
            <ArrowRight size={12} strokeWidth={1.5} />
          </Link>
        </div>

        <Quiz mod={mod} onPassed={() => setJustStamped(true)} />
      </div>
    </Modal>
  );
}

/* ---------------------------------------------------------------- */
/* Module card                                                       */
/* ---------------------------------------------------------------- */
function ModuleCard({
  mod,
  locked,
  index,
  onOpen,
}: {
  mod: ModuleDef;
  locked: boolean;
  index: number;
  onOpen: () => void;
}) {
  const prog = useLearningStore((s) => s.progress[mod.id]);
  const state = prog?.complete ? "complete" : locked ? "locked" : "available";

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: EASE }}
      whileHover={state !== "locked" ? { y: -3 } : {}}
      onClick={() => state !== "locked" && onOpen()}
      disabled={state === "locked"}
      className={cn(
        "group relative overflow-hidden rounded-md border border-line bg-panel p-4 text-left transition-colors",
        state === "locked"
          ? "cursor-not-allowed opacity-55"
          : "hover:border-line-bright",
      )}
    >
      {/* ghost number */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-2 -top-5 font-mono text-[88px] font-bold leading-none transition-colors duration-300",
          state === "complete"
            ? "text-go/10 group-hover:text-go/20"
            : "text-faint/15 group-hover:text-trace/20",
        )}
      >
        {String(mod.number).padStart(2, "0")}
      </span>

      <div className="relative">
        <div className="flex items-center gap-2">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-ink">
            {mod.title}
          </h3>
          {state === "complete" && (
            <span className="flex items-center gap-1 rounded-full border border-go/60 bg-go/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-go">
              <Check size={9} strokeWidth={2.5} /> Done
            </span>
          )}
          {state === "locked" && <Lock size={12} strokeWidth={1.5} className="text-faint" />}
        </div>
        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-dim">
          {mod.abstract}
        </p>
        <div className="mt-3 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
          <span>{mod.minutes} min</span>
          <span aria-hidden>·</span>
          <span>{mod.blocks.length} sections</span>
          <span aria-hidden>·</span>
          <span>quiz ×{mod.quiz.length}</span>
          {prog && prog.attempts > 0 && !prog.complete && (
            <>
              <span aria-hidden>·</span>
              <span className="text-warn">best {prog.bestScore}/3</span>
            </>
          )}
        </div>
        {/* progress hairline */}
        <div className="mt-3 h-px w-full bg-line">
          <motion.div
            className={cn("h-px", state === "complete" ? "bg-go" : "bg-trace")}
            initial={false}
            animate={{ width: state === "complete" ? "100%" : prog?.attempts ? "45%" : "0%" }}
            transition={{ duration: 0.5, ease: EASE }}
          />
        </div>
      </div>
    </motion.button>
  );
}

/* ---------------------------------------------------------------- */
/* Page                                                              */
/* ---------------------------------------------------------------- */
export default function Learning() {
  const progress = useLearningStore((s) => s.progress);
  const unlockAll = useLearningStore((s) => s.unlockAll);
  const setUnlockAll = useLearningStore((s) => s.setUnlockAll);
  const streak = useLearningStore((s) => s.streak);
  const sessionId = useSim((s) => s.sessionId);
  const serial = shortHash(`${sessionId}-resonance-metrologist`, 8);

  const [openId, setOpenId] = useState<string | null>(null);
  const openMod = MODULES.find((m) => m.id === openId) ?? null;

  const completedCount = MODULES.filter((m) => progress[m.id]?.complete).length;
  const frac = completedCount / MODULES.length;
  const allDone = completedCount === MODULES.length;

  const isLocked = (i: number) =>
    !unlockAll && i > 0 && !progress[MODULES[i - 1].id]?.complete;

  return (
    <div className="mx-auto max-w-6xl p-4 md:p-6">
      {/* header + progress band */}
      <div className="flex flex-wrap items-center gap-5">
        <div className="min-w-0 flex-1">
          <h1 className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
            Learning Paths
          </h1>
          <p className="mt-1 text-sm text-dim">
            Six short modules between you and a measurement you'd sign your name to.
          </p>
        </div>
        <div className="flex items-center gap-4 rounded-md border border-line bg-panel px-4 py-3 panel-inset">
          <ProgressRing frac={frac} />
          <div>
            <p className="font-mono text-[11px] tabular-nums text-ink">
              {completedCount} / {MODULES.length} modules
            </p>
            <p className="mt-0.5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
              <Flame size={11} strokeWidth={1.5} className={streak > 0 ? "text-trace-2" : "text-faint"} />
              {streak > 0 ? `${streak}-day streak` : "no streak yet"}
            </p>
          </div>
          <div className="border-l border-line pl-4">
            <ToggleSwitch on={unlockAll} onChange={setUnlockAll} label="Unlock all" />
            <p className="mt-1 max-w-44 font-mono text-[9px] leading-relaxed text-faint">
              The order is the pedagogy, but it's your time.
            </p>
          </div>
        </div>
      </div>

      {/* module cards */}
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {MODULES.map((mod, i) => (
          <ModuleCard
            key={mod.id}
            mod={mod}
            index={i}
            locked={isLocked(i)}
            onOpen={() => setOpenId(mod.id)}
          />
        ))}
      </div>

      {/* completion band */}
      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mt-6"
          >
            <Panel accent="go" bezel>
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-go/60 bg-go/10 text-go led-glow">
                  <Award size={22} strokeWidth={1.5} />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-go readout-glow">
                    Certified: Resonance Metrologist (Simulated)
                  </h2>
                  <p className="mt-1 font-mono text-[11px] tabular-nums text-dim">
                    SERIAL RM-{serial} · {MODULES.length}/{MODULES.length} MODULES ·{" "}
                    {new Date().toISOString().slice(0, 10)}
                  </p>
                  <p className="mt-1.5 text-[12px] italic leading-relaxed text-faint">
                    Certifies completion of a simulator's curriculum. Frames nicely;
                    licenses nothing.
                  </p>
                </div>
                <BookOpen size={18} strokeWidth={1.5} className="hidden text-faint sm:block" />
              </div>
            </Panel>
          </motion.div>
        )}
      </AnimatePresence>

      {openMod && (
        <LessonOverlay
          key={openMod.id}
          mod={openMod}
          onClose={() => setOpenId(null)}
        />
      )}
    </div>
  );
}
