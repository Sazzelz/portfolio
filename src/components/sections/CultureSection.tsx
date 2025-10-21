import type { PortfolioContent } from "@/lib/translations";

type CultureSectionProps = {
  content: PortfolioContent["sections"]["culture"];
  label: string;
};

export default function CultureSection({ content, label }: CultureSectionProps) {
  return (
    <section id="culture" className="scroll-mt-24 space-y-8">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-700">{label}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {content.title}
        </h2>
        <p className="max-w-3xl text-lg text-neutral-700 sm:text-xl">{content.body}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {content.values.map((value) => (
          <article
            key={value.title}
            className="rounded-3xl border border-amber-100 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10"
          >
            <h3 className="text-lg font-semibold text-neutral-900">{value.title}</h3>
            <p className="mt-3 text-sm text-neutral-600">{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
