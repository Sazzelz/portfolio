"use client";

import { useCallback, useMemo, useState } from "react";
import HeroSection from "./sections/hero/HeroSection";
import Navigation from "./sections/navigation/Navigation";
import AboutSection from "./sections/about/AboutSection";
import ProjectsSection from "./sections/projects/ProjectsSection";
import CultureSection from "./sections/culture/CultureSection";
import ContactSection from "./sections/contact/ContactSection";
import { translations, type Language } from "./_config/translations";

const navKeys = ["about", "projects", "culture", "contact"] as const;

export default function PortfolioPage() {
  const [language, setLanguage] = useState<Language>("de");

  const content = useMemo(() => translations[language], [language]);
  const navItems = useMemo(
    () => navKeys.map((id) => ({ id, label: content.nav[id] })),
    [content.nav]
  );

  const handleLanguageChange = useCallback((code: Language) => {
    setLanguage(code);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-red-900/10 via-white to-rose-50 text-neutral-900">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 pb-16 pt-10 sm:px-10 lg:px-20">
        <HeroSection
          content={content}
          language={language}
          onLanguageChange={handleLanguageChange}
        />

        <main className="mt-16 flex flex-1 flex-col gap-24">
          <Navigation items={navItems} />
          <AboutSection
            content={content.sections.about}
            label={content.nav.about}
          />
          <ProjectsSection
            content={content.sections.projects}
            label={content.nav.projects}
          />
          <CultureSection
            content={content.sections.culture}
            label={content.nav.culture}
          />
          <ContactSection
            content={content.sections.contact}
            label={content.nav.contact}
          />
        </main>

        <footer className="mt-24 border-t border-neutral-200 pt-8 text-xs uppercase tracking-[0.3em] text-neutral-500">
          {content.footerNote}
        </footer>
      </div>
    </div>
  );
}
