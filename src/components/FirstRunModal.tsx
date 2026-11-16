import { useState } from "react";
import { Modal } from "@/components/shared";
import { simActions, useSim } from "@/sim/store";

/** First-run teaching disclaimer modal (design.md §10). "Don't show again" persists. */
export default function FirstRunModal() {
  const seenIntro = useSim((s) => s.seenIntro);
  const [dismissed, setDismissed] = useState(false);
  const [dontShow, setDontShow] = useState(true);

  const open = !seenIntro && !dismissed;

  const close = () => {
    if (dontShow) simActions.markIntroSeen();
    setDismissed(true);
  };

  return (
    <Modal open={open} onClose={close} title="Welcome to Resonance Lab">
      <div className="space-y-3 text-sm leading-relaxed text-dim">
        <p>
          This is a <span className="text-ink">teaching simulation</span> of a precision
          resonance metrology lab. The facility, instruments, and readings are fictional
          and generated entirely in your browser.
        </p>
        <p>
          The physics is idealized and strictly energy-conserving: the sphere stores and
          returns a tiny fraction of the energy you drive into it — nothing is created,
          and measured output is always less than input.
        </p>
        <p className="font-mono text-[11px] text-faint">
          Tip: start at the Operator Console and work the LOC-1 checklist — power, vacuum,
          thermal, clock, sweep, blinded runs.
        </p>
      </div>
      <label className="mt-4 flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          checked={dontShow}
          onChange={(e) => setDontShow(e.target.checked)}
          className="h-3.5 w-3.5 accent-[#2dd4c8]"
        />
        <span className="font-mono text-[11px] text-dim">Don't show again</span>
      </label>
      <div className="mt-4 flex justify-end">
        <button
          onClick={close}
          className="rounded-sm bg-trace px-4 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-void transition-transform hover:-translate-y-px active:scale-95"
        >
          Enter the lab
        </button>
      </div>
    </Modal>
  );
}
