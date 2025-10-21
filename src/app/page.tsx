"use client";

import { useMemo, useState } from "react";

const translations = {
  de: {
    hero: {
      greeting: "Vanakkam, ich bin",
      name: "Sasmitha Sinnathurai",
      roles: "Tamilische Produktdesignerin & Creative Technologist",
      description:
        "Ich verbinde südindische Erzähltraditionen mit digitalen Marken, damit sich Technologie warm, zugänglich und menschlich anfühlt.",
      primaryCta: "Projekt anfragen",
      secondaryCta: "Arbeitsproben ansehen",
    },
    nav: {
      about: "Über mich",
      projects: "Projekte",
      culture: "Kulturelle Wurzeln",
      contact: "Kontakt",
    },
    highlights: [
      {
        label: "7+ Jahre Erfahrung",
        detail: "Produktdesign, Markenstrategie, Creative Coding",
      },
      {
        label: "Aufgewachsen in Chennai",
        detail: "Basierend in Berlin & global vernetzt",
      },
      {
        label: "Stärken",
        detail: "Storytelling, Systemdesign, inklusive Experiences",
      },
    ],
    sections: {
      about: {
        title: "Elegantes Design mit tamilischer Seele",
        body: "Ich bin in einer Unternehmerinnen-Familie in Chennai aufgewachsen, wo jede Farbe und jedes Muster eine Geschichte erzählt. Heute gestalte ich digitale Produkte, die genau diese Wärme transportieren – reduziert, strukturiert und dennoch voller Persönlichkeit.",
        focus: [
          "Brand Storytelling",
          "Inclusive Product Design",
          "Creative Tech Installationen",
        ],
      },
      projects: {
        title: "Ausgewählte Projekte",
        body: "Eine kuratierte Auswahl an Arbeiten, die Tradition und Innovation miteinander verweben.",
        items: [
          {
            title: "Saffron Routes",
            description:
              "Travel-Plattform, die Diaspora-Geschichten sammelt und visuell durch handgezeichnete Muster verankert.",
            meta: "Experience Design · 2024",
          },
          {
            title: "Vanakkam Studio",
            description:
              "Brand-Refresh für ein tamilisch geführtes Designkollektiv. Fokus auf klare Typografie, matte Terrakotta-Farben und Motion Design.",
            meta: "Brand & Motion · 2023",
          },
          {
            title: "Aram Wellness",
            description:
              "Web-App für achtsame Routinen, inspiriert von Siddha-Heilkunst. Kombiniert moderne UI Patterns mit traditionellen Symbolen.",
            meta: "Product Design · 2022",
          },
        ],
      },
      culture: {
        title: "Design, das Wurzeln sichtbar macht",
        body: "Meine Arbeit erinnert an Tanjore-Gold, Jasmin-Duft und Kanjivaram-Stoffe – übersetzt in klar strukturierte Interfaces. Jede Experience trägt eine subtile Reminiszenz an tamilische Ästhetik.",
        values: [
          {
            title: "Sinnliche Schlichtheit",
            description:
              "Warme Farbübergänge und minimalistische Typografie sorgen für ruhige Eleganz.",
          },
          {
            title: "Erzählende Systeme",
            description:
              "Jedes Interface erzählt eine Geschichte, die Menschen sofort verstehen und fühlen.",
          },
          {
            title: "Community im Fokus",
            description:
              "Ich arbeite mit tamilischen Gründerinnen, Künstlerinnen und Technologinnen zusammen – sichtbar, laut, stolz.",
          },
        ],
      },
      contact: {
        title: "Lass uns zusammenarbeiten",
        body: "Ich freue mich auf Projekte, die Charakter zeigen – von kuratierten Marken bis zu immersiven digitalen Erlebnissen.",
        emailLabel: "Schreib mir",
        locationLabel: "Aktuelle Basis",
        locationValue: "Berlin · Remote weltweit",
      },
    },
    switchLabel: "Sprache",
    footerNote: "Handgemacht mit tamilischer Seele und klaren Linien.",
  },
  en: {
    hero: {
      greeting: "Vanakkam, I'm",
      name: "Anjali Raman",
      roles: "Tamil Product Designer & Creative Technologist",
      description:
        "I weave South Indian storytelling into digital brands so technology feels warm, accessible, and deeply human.",
      primaryCta: "Start a project",
      secondaryCta: "View selected work",
    },
    nav: {
      about: "About",
      projects: "Projects",
      culture: "Cultural Roots",
      contact: "Contact",
    },
    highlights: [
      {
        label: "7+ years experience",
        detail: "Product design, brand strategy, creative coding",
      },
      {
        label: "Raised in Chennai",
        detail: "Based in Berlin & collaborating worldwide",
      },
      {
        label: "Focus areas",
        detail: "Storytelling, system design, inclusive experiences",
      },
    ],
    sections: {
      about: {
        title: "Elegant design with Tamil soul",
        body: "Growing up in an entrepreneurial family in Chennai taught me that every color and motif carries a story. I now craft digital products that deliver the same warmth—reduced, structured, and full of personality.",
        focus: [
          "Brand storytelling",
          "Inclusive product design",
          "Creative tech installations",
        ],
      },
      projects: {
        title: "Selected work",
        body: "A curated selection of pieces that interlace tradition and innovation.",
        items: [
          {
            title: "Saffron Routes",
            description:
              "Travel platform archiving diaspora narratives, grounded by hand-drawn pattern systems.",
            meta: "Experience Design · 2024",
          },
          {
            title: "Vanakkam Studio",
            description:
              "Brand refresh for a Tamil-led design collective. Matte terracotta hues, refined typography, and motion-led storytelling.",
            meta: "Brand & Motion · 2023",
          },
          {
            title: "Aram Wellness",
            description:
              "Mindful routines web app inspired by Siddha healing. Marries contemporary UI patterns with traditional symbolism.",
            meta: "Product Design · 2022",
          },
        ],
      },
      culture: {
        title: "Design that honours roots",
        body: "My work nods to Tanjore gold, jasmine garlands, and Kanjivaram weaves—translated into calmly structured interfaces. Each experience carries a subtle Tamil signature.",
        values: [
          {
            title: "Sensory minimalism",
            description:
              "Warm gradients and considered typography keep the aesthetic soft and composed.",
          },
          {
            title: "Narrative systems",
            description:
              "Every interface tells a story people can recognise and feel instantly.",
          },
          {
            title: "Community first",
            description:
              "I champion Tamil founders, artists, and technologists—visible, confident, proud.",
          },
        ],
      },
      contact: {
        title: "Let's collaborate",
        body: "I'm excited about projects with character—from curated brands to immersive digital experiences.",
        emailLabel: "Write me",
        locationLabel: "Currently based in",
        locationValue: "Berlin · Remote worldwide",
      },
    },
    switchLabel: "Language",
    footerNote: "Crafted with Tamil spirit and clean lines.",
  },
} as const;

type Language = keyof typeof translations;

const languageOptions: { code: Language; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
];

export default function Home() {
  const [language, setLanguage] = useState<Language>("de");

  const content = useMemo(() => translations[language], [language]);
  const navItems = useMemo(
    () => [
      { id: "about", label: content.nav.about },
      { id: "projects", label: content.nav.projects },
      { id: "culture", label: content.nav.culture },
      { id: "contact", label: content.nav.contact },
    ],
    [content.nav]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-rose-50 text-neutral-900">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 pb-16 pt-10 sm:px-10 lg:px-20">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
              {content.hero.greeting}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              {content.hero.name}
            </h1>
            <p className="text-lg text-neutral-600 sm:text-xl">
              {content.hero.roles}
            </p>
          </div>
          <div className="flex items-center gap-3 self-start rounded-full border border-neutral-200 bg-white/70 px-3 py-1 shadow-sm backdrop-blur">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
              {content.switchLabel}
            </span>
            <div className="flex overflow-hidden rounded-full border border-neutral-200">
              {languageOptions.map(({ code, label }) => {
                const isActive = code === language;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLanguage(code)}
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
        </header>

        <main className="mt-16 flex flex-1 flex-col gap-24">
          <section className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start">
            <div className="space-y-6">
              <p className="max-w-xl text-lg text-neutral-700 sm:text-xl">
                {content.hero.description}
              </p>
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
            <ul className="space-y-5 rounded-3xl border border-amber-100 bg-white/60 p-6 shadow-sm backdrop-blur">
              {content.highlights.map((highlight) => (
                <li
                  key={highlight.label}
                  className="border-b border-neutral-200/70 pb-4 last:border-0 last:pb-0"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
                    {highlight.label}
                  </p>
                  <p className="mt-2 text-base text-neutral-700">
                    {highlight.detail}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <nav className="sticky top-4 z-10 mx-auto w-full max-w-3xl rounded-full border border-neutral-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <ul className="flex flex-wrap justify-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="rounded-full px-3 py-1 transition hover:bg-neutral-900 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section id="about" className="scroll-mt-24 space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
              {content.nav.about}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              {content.sections.about.title}
            </h2>
            <p className="max-w-3xl text-lg text-neutral-700 sm:text-xl">
              {content.sections.about.body}
            </p>
            <div className="flex flex-wrap gap-3">
              {content.sections.about.focus.map((focus) => (
                <span
                  key={focus}
                  className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600"
                >
                  {focus}
                </span>
              ))}
            </div>
          </section>

          <section id="projects" className="scroll-mt-24 space-y-8">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
                {content.nav.projects}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                {content.sections.projects.title}
              </h2>
              <p className="max-w-3xl text-lg text-neutral-700 sm:text-xl">
                {content.sections.projects.body}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {content.sections.projects.items.map((project) => (
                <article
                  key={project.title}
                  className="flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/10"
                >
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                      {project.meta}
                    </p>
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
                      Tamil-led
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="culture" className="scroll-mt-24 space-y-8">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
                {content.nav.culture}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                {content.sections.culture.title}
              </h2>
              <p className="max-w-3xl text-lg text-neutral-700 sm:text-xl">
                {content.sections.culture.body}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {content.sections.culture.values.map((value) => (
                <article
                  key={value.title}
                  className="rounded-3xl border border-amber-100 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10"
                >
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-600">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="scroll-mt-24 rounded-3xl border border-neutral-200 bg-white/80 p-10 shadow-lg shadow-neutral-900/10 backdrop-blur"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
              {content.nav.contact}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              {content.sections.contact.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-neutral-700 sm:text-xl">
              {content.sections.contact.body}
            </p>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="mailto:hello@anjaliraman.com"
                className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-neutral-900/20"
              >
                {content.sections.contact.emailLabel} · hello@anjaliraman.com
              </a>
              <div className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                {content.sections.contact.locationLabel}:{" "}
                {content.sections.contact.locationValue}
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-24 border-t border-neutral-200 pt-8 text-xs uppercase tracking-[0.3em] text-neutral-500">
          {content.footerNote}
        </footer>
      </div>
    </div>
  );
}
