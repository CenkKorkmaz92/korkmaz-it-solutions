/** Supported language codes for the application. */
export type Lang = "de" | "en";

/**
 * All UI translations keyed by language code.
 * Add new languages by extending the `Lang` type and adding a matching key here.
 */
export const translations = {
  de: {
    nav: {
      home: "Start",
      services: "Leistungen",
      projects: "Projekte",
      about: "Über mich",
      contact: "Kontakt",
      cta: "Kontakt aufnehmen",
    },
    hero: {
      eyebrow: "Webentwicklung & IT",
      headline: "Websites und Web-Apps",
      headlineAccent: "die Ergebnisse bringen.",
      sub: "Ich baue schnelle, saubere Weblösungen für Selbstständige und Unternehmen. Direkt, ohne Umwege.",
      cta1: "Kontakt aufnehmen",
      cta2: "Projekte ansehen",
      techLabel: "Damit arbeite ich",
    },
    services: {
      eyebrow: "Was ich mache",
      heading: "Was du bekommst",
      sub: "Klar definiert, sauber umgesetzt. Nur das, was du wirklich brauchst.",
      items: [
        {
          title: "Webentwicklung",
          description:
            "Individuelle Websites und Web-Apps – schnell, responsive und auf dein Business abgestimmt.",
        },
        {
          title: "Performance",
          description:
            "Optimierte Ladezeiten, saubere Struktur und starke Nutzererfahrung.",
        },
        {
          title: "Automatisierung",
          description:
            "Formulare, APIs und Prozesse, die dir Zeit sparen und Arbeit abnehmen.",
        },
        {
          title: "Beratung",
          description:
            "Klare Empfehlungen statt Technik-Blabla – ich sage dir, was wirklich Sinn macht.",
        },
      ],
    },
    techStack: {
      eyebrow: "Technologie",
      heading: "Womit ich arbeite",
      sub: "Moderne Technologien für stabile und skalierbare Lösungen.",
      categories: ["Frontend", "Backend", "Infrastruktur"],
    },
    projects: {
      eyebrow: "Projekte",
      heading: "Was ich gebaut habe",
      sub: "Echte Projekte, echter Code.",
      items: [
        {
          title: "Beispiel Portfolio-Seite",
          description:
            "Eine Vorlage für professionelle Portfolio-Websites. Zweisprachig (DE/EN), mit Projektübersicht und direktem Kontaktformular – fertig zum Anpassen.",
        },
        {
          title: "Online CV",
          description:
            "Digitaler Lebenslauf für einen Logistik-Manager. Übersichtlich, professionell, mobil optimiert – als persönliche Online-Präsenz statt PDF.",
        },
        {
          title: "Madame Pearls",
          description:
            "Präsentationsseite für ein Schmuck-Label – in vier Sprachen (DE, EN, GR, HR). Besucher können Favoriten markieren und direkt eine Anfrage senden. In finaler Entwicklungsphase.",
        },
        {
          title: "Mr. Ink Tattoo",
          description:
            "Website für ein Tattoo- und Piercingstudio in Nürtingen. Mit Bildergalerie, Künstlerprofilen und Kontaktformular – zweisprachig (DE/EN), damit auch internationale Kunden sich zurechtfinden.",
        },
      ],
      viewLive: "Live ansehen",
      comingSoon: "In Entwicklung",
    },
    about: {
      eyebrow: "Über mich",
      heading: "Die Person hinter der Arbeit",
      para1: "Hi, ich bin Cenk. Ich entwickle moderne Websites und Web-Apps mit Fokus auf Performance, Klarheit und echte Ergebnisse. Kein Agentur-Overhead, kein unnötiger Prozess – du arbeitest direkt mit mir. Von der Idee bis zum Livegang.",
      para2: "",
      para3: "",
      para4: "",
      para5: "",
      values: [
        {
          label: "Frontend bis Backend",
          detail:
            "Ich arbeite über den ganzen Stack – von der UI bis zur Datenbank. Full-Stack bedeutet für mich: ein Projekt von der ersten Zeile bis zum Launch komplett zu betreuen.",
        },
        {
          label: "Direkt mit mir",
          detail:
            "Ich bin direkt erreichbar und unkompliziert. Du sagst was du brauchst – ich höre zu und setze um, was möglich ist. Kein Aufwand, kein Drumherum.",
        },
        {
          label: "Code, der bleibt",
          detail:
            "Ich baue so, dass andere – oder du selbst – später problemlos weiterarbeiten können. Kein Wegwerfcode.",
        },
      ],
    },
    process: {
      eyebrow: "Ablauf",
      heading: "So läuft ein Projekt",
      sub: "Kein Durcheinander, keine Überraschungen. Drei klare Schritte.",
      steps: [
        {
          number: "01",
          title: "Gespräch",
          description:
            "Wir reden über dein Ziel, dein Budget und was du schon hast. Daraus ergibt sich was gebaut werden muss – bevor irgendjemand Code schreibt.",
        },
        {
          number: "02",
          title: "Umsetzung",
          description:
            "Ich arbeite in klaren Phasen und halte dich auf dem Laufenden. Du weißt immer wo wir stehen. Kein Raten, keine Blackbox.",
        },
        {
          number: "03",
          title: "Übergabe",
          description:
            "Du bekommst das fertige Projekt – deployed, getestet, erklärt. Der Code gehört dir, und du verstehst was er macht.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      heading: "Lass uns dein Projekt umsetzen",
      sub: "Das erste Gespräch ist kostenlos. Schreib mir kurz, was du brauchst – ich melde mich direkt bei dir.",
      cta1: "Projekt anfragen",
      cta2: "Leistungen ansehen",
    },
    footer: {
      tagline: "Sauber gebaut. Ehrlich erklärt.",
      navigation: "Navigation",
      contact: "Kontakt",
      rights: "Alle Rechte vorbehalten.",
    },
    legal: {
      backToHome: "← Zur Startseite",
      impressumSub: "Rechtliche Angaben",
      datenschutzSub: "Datenschutzerklärung",
      impressumLabel: "Impressum",
      datenschutzLabel: "Datenschutz",
    },
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      cta: "Get in Touch",
    },
    hero: {
      eyebrow: "Freelance Web Developer",
      headline: "No middleman.",
      headlineAccent: "You talk to the developer.",
      sub: "You talk to me — I plan it, I build it, I deliver it. No agency overhead, no getting lost in translation.",
      cta1: "Get in Touch",
      cta2: "View Projects",
      techLabel: "What I work with",
    },
    services: {
      eyebrow: "What I Do",
      heading: "What You Get",
      sub: "Clearly scoped, cleanly built. Only what you actually need.",
      items: [
        {
          title: "Web Development",
          description:
            "Individual websites and web apps — fast, responsive and tailored to your business.",
        },
        {
          title: "Performance",
          description:
            "Optimised load times, clean structure and a strong user experience.",
        },
        {
          title: "Automation",
          description:
            "Forms, APIs and processes that save you time and take work off your plate.",
        },
        {
          title: "Consulting",
          description:
            "Clear recommendations instead of tech jargon — I tell you what actually makes sense.",
        },
      ],
    },
    techStack: {
      eyebrow: "Technology",
      heading: "What I Work With",
      sub: "Modern technologies for stable and scalable solutions.",
      categories: ["Frontend", "Backend", "Infrastructure"],
    },
    projects: {
      eyebrow: "Projects",
      heading: "What I've Built",
      sub: "Real projects, real code.",
      items: [
        {
          title: "Example Portfolio Site",
          description:
            "A template for professional portfolio websites. Bilingual (DE/EN), with project showcase and contact form — ready to customise.",
        },
        {
          title: "Online CV",
          description:
            "A digital CV for a logistics manager. Clean, professional, mobile-optimised — a personal online presence instead of a PDF.",
        },
        {
          title: "Madame Pearls",
          description:
            "Showcase site for a jewellery label — in four languages (DE, EN, GR, HR). Visitors can mark favourites and send an inquiry directly. Currently being finalised.",
        },
        {
          title: "Mr. Ink Tattoo",
          description:
            "Website for a tattoo and piercing studio in Nürtingen. Gallery, artist profiles, and contact form — bilingual (DE/EN) so international customers can navigate it too.",
        },
      ],
      viewLive: "View Live",
      comingSoon: "In Progress",
    },
    about: {
      eyebrow: "About",
      heading: "The Person Behind the Work",
      para1: "Hi, I'm Cenk. I build modern websites and web apps with a focus on performance, clarity and real results. No agency overhead, no unnecessary process — you work directly with me. From idea to go-live.",
      para2: "",
      para3: "",
      para4: "",
      para5: "",
      values: [
        {
          label: "Frontend to backend",
          detail:
            "I work across the full stack — from UI to database. Full-stack means seeing a project through completely — from the first line of code to launch.",
        },
        {
          label: "Direct line to me",
          detail:
            "I'm directly reachable and easy to work with. Tell me what you need — I listen and make it happen. No hassle, no runaround.",
        },
        {
          label: "Code that lasts",
          detail:
            "I build so others — or you — can work on it later without trouble. No throwaway code.",
        },
      ],
    },
    process: {
      eyebrow: "How It Works",
      heading: "How a Project Runs",
      sub: "No confusion, no surprises. Three clear steps.",
      steps: [
        {
          number: "01",
          title: "Conversation",
          description:
            "We talk about your goal, your budget and what you already have. That defines what needs to be built — before anyone writes a line of code.",
        },
        {
          number: "02",
          title: "Build",
          description:
            "I work in clear phases and keep you updated. You always know where things stand. No guessing, no black box.",
        },
        {
          number: "03",
          title: "Handover",
          description:
            "You get the finished project — deployed, tested, explained. The code is yours and you understand what it does.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's Build Your Project",
      sub: "The first consultation is free. Tell me briefly what you need — I'll get back to you directly.",
      cta1: "Request a Project",
      cta2: "View Services",
    },
    footer: {
      tagline: "Built clean. Explained honestly.",
      navigation: "Navigation",
      contact: "Contact",
      rights: "All rights reserved.",
    },
    legal: {
      backToHome: "← Back to Home",
      impressumSub: "Legal Notice",
      datenschutzSub: "Privacy Policy",
      impressumLabel: "Legal Notice",
      datenschutzLabel: "Privacy Policy",
    },
  },
} as const;

/** The shape of the translation object for a single language. */
export type Translations = (typeof translations)[Lang];
