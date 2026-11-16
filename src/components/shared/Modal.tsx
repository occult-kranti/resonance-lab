import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Modal (design.md §5.11): scale 0.96→1 + fade, 180 ms, blurred void backdrop. */
export function Modal({
  open,
  onClose,
  title,
  children,
  className,
}: {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-void/70 backdrop-blur-[4px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: EASE }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className={cn(
              "w-full max-w-md rounded-md border border-line-bright bg-panel p-5 panel-inset",
              className,
            )}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.18, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            {(title || onClose) && (
              <header className="mb-3 flex items-center justify-between">
                {title && (
                  <h2 className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-dim">
                    {title}
                  </h2>
                )}
                {onClose && (
                  <button
                    aria-label="Close"
                    onClick={onClose}
                    className="text-faint transition-colors hover:text-ink"
                  >
                    <X size={14} strokeWidth={1.5} />
                  </button>
                )}
              </header>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Drawer (design.md §5.11): slides from right, 400px. */
export function Drawer({
  open,
  onClose,
  title,
  children,
  className,
}: {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-void/70 backdrop-blur-[4px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: EASE }}
          onClick={onClose}
        >
          <motion.aside
            className={cn(
              "absolute right-0 top-0 flex h-full w-[400px] max-w-[90vw] flex-col border-l border-line bg-shell",
              className,
            )}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.22, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex items-center justify-between border-b border-line px-4 py-3">
              <h2 className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-dim">
                {title}
              </h2>
              {onClose && (
                <button
                  aria-label="Close"
                  onClick={onClose}
                  className="text-faint transition-colors hover:text-ink"
                >
                  <X size={14} strokeWidth={1.5} />
                </button>
              )}
            </header>
            <div className="min-h-0 flex-1 overflow-y-auto p-4">{children}</div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
