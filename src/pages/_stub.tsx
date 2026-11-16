import Panel from "@/components/shared/Panel";

export default function PageStub({ title, blurb }: { title: string; blurb: string }) {
  return (
    <div className="p-4 md:p-6">
      <h1 className="mb-4 font-display text-xl font-semibold uppercase tracking-[0.12em] text-ink md:text-2xl">
        {title}
      </h1>
      <Panel title="Under construction" bezel>
        <p className="text-sm leading-relaxed text-dim">{blurb}</p>
        <p className="mt-2 font-mono text-[11px] text-faint">
          This console is being wired up. Facility state is live — check the LED strip above.
        </p>
      </Panel>
    </div>
  );
}
