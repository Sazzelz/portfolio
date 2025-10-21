import type { PortfolioContent } from "@/lib/translations";

type ProjectsSectionProps = {
  content: PortfolioContent["sections"]["projects"];
  label: string;
};

export default function ProjectsSection({ content, label }: ProjectsSectionProps) {
  return (
    <section id="projects" className="scroll-mt-24 space-y-8">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-700">{label}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {content.title}
        </h2>
        <p className="max-w-3xl text-lg text-neutral-700 sm:text-xl">{content.body}</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {content.items.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/10"
          >
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">{project.meta}</p>
              <h3 className="text-xl font-semibold text-neutral-900">{project.title}</h3>
              <p className="text-sm text-neutral-600">{project.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
                Tamil-led
              </span>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 transition hover:text-neutral-900"
                >
                  Case Study →
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
