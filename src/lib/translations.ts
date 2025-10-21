export const translations = {
  de: {
    hero: {
      greeting: "Vanakkam, ich bin",
      name: "Sasmitha Sinnathurai",
      roles: "Tamilische Produktdesignerin & Creative Technologist",
      description:
        "Ich verbinde tamilische Erzähltraditionen mit digitalen Marken, damit sich Technologie warm, zugänglich und menschlich anfühlt.",
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
        label: "2+ Jahre Erfahrung",
        detail: "Produktdesign, Markenstrategie, Creative Coding",
      },
      {
        label: "Stärken",
        detail: "Storytelling, Systemdesign, inklusive Experiences",
      },
    ],
    sections: {
      about: {
        title: "Elegantes Design mit tamilischer Seele",
        body: "Als Tochter tamilischer Eltern, geboren in Deutschland, betrachte ich die Welt durch zwei kulturelle Linsen – jede geprägt von Farbe, Rhythmus und Geschichte. Diese Dualität prägt heute meine Gestaltung: durchdacht, menschlich und voller feiner Verbindungen.",
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
            title: "Gotrip",
            description:
              "Web-App zur effizienten Abstimmung von Gruppenreisen mit Funktionen für Budgetverwaltung, Terminplanung und gemeinsame Aktivitäten.",
            meta: "Group Traveling",
            link: "https://sasmitha.notion.site/Group-Travel-Planning-Web-App-Developing-an-App-b9097d48953b43c382e33ca8384b729d?source=copy_link",
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
        ],
      },
      contact: {
        title: "Lass uns zusammenarbeiten",
        body: "Ich freue mich auf Projekte, die Charakter zeigen – von kuratierten Marken bis zu immersiven digitalen Erlebnissen.",
        emailLabel: "Schreib mir",
        locationLabel: "Aktuelle Basis",
        locationValue: "Hamburg · Remote weltweit",
      },
    },
    switchLabel: "Sprache",
    footerNote: "Handgemacht mit tamilischer Seele und klaren Linien.",
  },
  en: {
    hero: {
      greeting: "Vanakkam, I'm",
      name: "Sasmitha Sinnathurai",
      roles: "Tamil Product Designer & Creative Technologist",
      description:
        "I weave Tamil storytelling into digital brands so technology feels warm, accessible, and deeply human.",
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
        label: "2+ years experience",
        detail: "Product design, brand strategy, creative coding",
      },
      {
        label: "Focus areas",
        detail: "Storytelling, system design, inclusive experiences",
      },
    ],
    sections: {
      about: {
        title: "Elegant design with Tamil soul",
        body: "As the daughter of Tamil parents born in Germany, I’ve always seen the world through two lenses—each rich in color, rhythm, and story. That duality now shapes the way I design: thoughtful, human, and full of subtle connections.",
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
            title: "Gotrip",
            description:
              "Web app for efficient coordination of group trips, featuring budget management, scheduling, and shared activity planning.",
            meta: "Group Traveling",
            link: "https://sasmitha.notion.site/Group-Travel-Planning-Web-App-Developing-an-App-b9097d48953b43c382e33ca8384b729d?source=copy_link",
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
        ],
      },
      contact: {
        title: "Let's collaborate",
        body: "I'm excited about projects with character—from curated brands to immersive digital experiences.",
        emailLabel: "Write me",
        locationLabel: "Currently based in",
        locationValue: "Hamburg · Remote worldwide",
      },
    },
    switchLabel: "Language",
    footerNote: "Crafted with Tamil spirit and clean lines.",
  },
} as const;

export type Language = keyof typeof translations;
export type PortfolioContent = (typeof translations)[Language];

export const languageOptions: { code: Language; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
];
