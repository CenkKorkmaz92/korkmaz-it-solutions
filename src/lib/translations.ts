export type Lang = "de" | "en";

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
      headlineAccent: "die einfach funktionieren",
      sub: "Ich baue was du brauchst – sauber und direkt.",
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
            "Websites, Shops oder Web-Apps – ich baue was passt. Von der einfachen Seite bis zur komplexeren Plattform.",
        },
        {
          title: "IT-Beratung",
          description:
            "Du hast eine Frage zu Technik, Tools oder Aufbau? Ich gebe dir eine ehrliche Einschätzung – ohne Eigeninteresse.",
        },
        {
          title: "Automatisierung",
          description:
            "Was du immer wieder von Hand machst, kann Code übernehmen. Weniger Aufwand, weniger Fehler.",
        },
        {
          title: "Hosting & Betrieb",
          description:
            "Ich sorge dafür, dass das, was gebaut wurde, auch läuft – mit sauberem Deployment, Monitoring und Konfiguration.",
        },
      ],
    },
    techStack: {
      eyebrow: "Technologie",
      heading: "Womit ich arbeite",
      sub: "Bewährte, stabile Tools. Nichts Exotisches, nichts Unnötiges.",
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
            "Modernes, responsives Portfolio mit Projektübersicht, Kontaktformular, EmailJS-Integration und zweisprachiger Oberfläche (DE/EN). Gebaut als Vorlage – zeigt was eine Portfolio-Seite können sollte.",
        },
        {
          title: "VideoFlix",
          description:
            "Full-Stack-Videostreaming-App mit Django REST API, JWT-Authentifizierung, E-Mail-Verifizierung und automatischer Videoverarbeitung in 480p, 720p und 1080p. Frontend als Vanilla JS SPA.",
        },
        {
          title: "Madame Pearls",
          description:
            "Elegante Schmuck-Präsentationsseite in 4 Sprachen (Deutsch, Englisch, Griechisch, Kroatisch). Besucher können Favoriten auswählen und direkt über ein Kontaktformular anfragen. Wird noch finalisiert und demnächst live geschaltet.",
        },
        {
          title: "Mr. Ink Tattoo",
          description:
            "Professionelle Webseite für ein Tattoo- und Piercingstudio in Nürtingen. Bildergalerie mit über 90 Fotos, Künstlerprofile, Kontaktformular und zweisprachige Oberfläche (DE/EN).",
        },
      ],
      viewOnGitHub: "Auf GitHub ansehen",
      viewLive: "Live ansehen",
      comingSoon: "In Entwicklung",
    },
    about: {
      eyebrow: "Über mich",
      heading: "Die Person hinter der Arbeit",
      para1: "Hi, ich bin Cenk. Ich baue Websites und Web-Apps.",
      para2: "Nicht mehr, nicht weniger. Sauber, direkt, ohne Umwege.",
      para3: "Ich habe vorher in der Industrie gearbeitet – das prägt wie ich denke: Systeme sollen laufen, nicht nur gut klingen.",
      para4: "Du arbeitest immer direkt mit mir. Kein Team, kein Mittelmann.",
      para5: "Ich bin dabei von der Idee bis zur Übergabe.",
      values: [
        {
          label: "Frontend bis Backend",
          detail:
            "Ich arbeite über den ganzen Stack – von der UI bis zur Datenbank. Full-Stack bedeutet für mich: ein Projekt von der ersten Zeile bis zum Launch komplett zu betreuen.",
        },
        {
          label: "Direkt mit mir",
          detail:
            "Du arbeitest mit mir, nicht mit jemandem, der mich vertritt. Was du sagst, kommt bei mir an – und umgekehrt.",
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
      sub: "Schreib mir kurz was du brauchst – ich melde mich.",
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
      eyebrow: "Web Development & IT",
      headline: "Websites and Web Apps",
      headlineAccent: "That Actually Work",
      sub: "I build what you need — clean and direct.",
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
            "Websites, shops or web apps — I build what fits. From a simple site to a more complex platform.",
        },
        {
          title: "IT Consulting",
          description:
            "Got a question about tech, tools or architecture? I give you an honest take — no agenda, no vendor preference.",
        },
        {
          title: "Automation",
          description:
            "What you keep doing by hand can often be handled by code. Less effort, fewer mistakes.",
        },
        {
          title: "Hosting & Deployment",
          description:
            "I make sure what was built keeps running — clean deployment, monitoring and configuration included.",
        },
      ],
    },
    techStack: {
      eyebrow: "Technology",
      heading: "What I Work With",
      sub: "Proven, stable tools. Nothing exotic, nothing unnecessary.",
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
            "Modern, responsive portfolio with project showcase, contact form, EmailJS integration, and bilingual interface (DE/EN). Built as a template — showing what a portfolio site should do.",
        },
        {
          title: "VideoFlix",
          description:
            "Full-stack video streaming app with Django REST API, JWT authentication, email verification, and automatic video processing at 480p, 720p, and 1080p. Frontend is a vanilla JS SPA.",
        },
        {
          title: "Madame Pearls",
          description:
            "Elegant jewellery showcase in 4 languages (German, English, Greek, Croatian). Visitors can save favourites and reach the owner directly through a contact form. Still being finalised — going live soon.",
        },
        {
          title: "Mr. Ink Tattoo",
          description:
            "Professional site for a tattoo and piercing studio in Nürtingen. Gallery of 90+ images, artist profiles, contact form, and bilingual interface (DE/EN).",
        },
      ],
      viewOnGitHub: "View on GitHub",
      viewLive: "View Live",
      comingSoon: "In Progress",
    },
    about: {
      eyebrow: "About",
      heading: "The Person Behind the Work",
      para1: "Hi, I'm Cenk. I build websites and web apps.",
      para2: "Nothing more, nothing less. Clean, direct, no detours.",
      para3: "I worked in industry before coding full-time — that shapes how I think: things should run, not just sound good.",
      para4: "You always work directly with me. No team, no middleman.",
      para5: "I'm there from the idea to handover.",
      values: [
        {
          label: "Frontend to backend",
          detail:
            "I work across the full stack — from UI to database. Full-stack means seeing a project through completely — from the first line of code to launch.",
        },
        {
          label: "Direct line to me",
          detail:
            "You work with me, not someone who represents me. What you say reaches me directly — and the other way around.",
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
      sub: "Tell me briefly what you need — I'll get back to you.",
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

export type Translations = (typeof translations)[Lang];
