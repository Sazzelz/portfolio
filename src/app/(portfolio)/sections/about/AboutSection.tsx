import type { PortfolioContent } from "../../_config/translations";

type AboutSectionProps = {
  content: PortfolioContent["sections"]["about"];
  label: string;
};

export default function AboutSection({ content, label }: AboutSectionProps) {
  return (
    <section id="about" className="scroll-mt-24 space-y-6">
      <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
        {content.title}
      </h2>
      <p className="max-w-3xl text-lg text-neutral-700 sm:text-xl">
        {content.body}
      </p>
      <div className="flex flex-wrap gap-3">
        {content.focus.map((focus) => (
          <span
            key={focus}
            className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600"
          >
            {focus}
          </span>
        ))}
      </div>
    </section>
  );
}
