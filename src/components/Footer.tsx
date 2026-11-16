/** Global 28px disclaimer strip (design.md §1, §4). Always visible. */
export default function Footer() {
  return (
    <footer className="flex h-7 shrink-0 items-center justify-center border-t border-line bg-shell px-4">
      <p className="truncate text-center font-mono text-[10px] leading-none text-faint">
        Educational simulator. Physics is idealized and energy-conserving — measured
        output is always less than input. Not a real measurement device.
      </p>
    </footer>
  );
}
