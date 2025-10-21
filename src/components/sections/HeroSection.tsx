import Image from "next/image";
import { languageOptions, type Language, type PortfolioContent } from "@/lib/translations";

type HeroSectionProps = {
  content: PortfolioContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export default function HeroSection({ content, language, onLanguageChange }: HeroSectionProps) {
  return (
    <section className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start">
      <div className="space-y-6">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="relative aspect-square w-24 overflow-hidden rounded-3xl border border-amber-100 shadow-sm sm:w-32">
            <Image
              src="/profile_picture.jpg"
              alt={`${content.hero.name} portrait`}
              fill
              sizes="128px"
              className="object-cover"
              priority
            />
            <span className="absolute -left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[10px] uppercase tracking-[0.45em] text-amber-700 sm:block">
              Tamil design
            </span>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
              {content.hero.greeting}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              {content.hero.name}
            </h1>
            <p className="text-lg text-neutral-600 sm:text-xl">{content.hero.roles}</p>
          </div>
        </div>
        <p className="max-w-xl text-lg text-neutral-700 sm:text-xl">{content.hero.description}</p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-neutral-900/10 transition hover:-translate-y-0.5 hover:shadow-neutral-900/20"
          >
            {content.hero.primaryCta}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900"
          >
            {content.hero.secondaryCta}
          </a>
        </div>
      </div>
      <aside className="space-y-5 rounded-3xl border border-amber-100 bg-white/60 p-6 shadow-sm backdrop-blur">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
            {content.switchLabel}
          </span>
          <div className="flex overflow-hidden rounded-full border border-neutral-200">
            {languageOptions.map(({ code, label }) => {
              const isActive = code === language;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => onLanguageChange(code)}
                  className={`px-3 py-1 text-sm font-medium transition ${
                    isActive
                      ? "bg-neutral-900 text-white"
                      : "bg-white text-neutral-500 hover:text-neutral-800"
                  }`}
                  aria-pressed={isActive}
                  aria-label={`Switch to ${label}`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
        <ul className="space-y-5">
          {content.highlights.map((highlight) => (
            <li
              key={highlight.label}
              className="border-b border-neutral-200/70 pb-4 last:border-0 last:pb-0"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
                {highlight.label}
              </p>
              <p className="mt-2 text-base text-neutral-700">{highlight.detail}</p>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
