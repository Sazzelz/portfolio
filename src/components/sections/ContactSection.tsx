import type { PortfolioContent } from "@/lib/translations";

type ContactSectionProps = {
  content: PortfolioContent["sections"]["contact"];
  label: string;
};

export default function ContactSection({
  content,
  label,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="scroll-mt-24 rounded-3xl border border-neutral-200 bg-white/80 p-10 shadow-lg shadow-neutral-900/10 backdrop-blur"
    >
      <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
        {label}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
        {content.title}
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-neutral-700 sm:text-xl">
        {content.body}
      </p>
      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="mailto:sasmitha@hotmail.com"
          className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-neutral-900/20"
        >
          {content.emailLabel} · sasmitha@hotmail.com
        </a>
        <div className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
          {content.locationLabel}: {content.locationValue}
        </div>
      </div>
    </section>
  );
}
