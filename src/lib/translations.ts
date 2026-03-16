export type Lang = "de" | "en";

export const translations = {
  de: {
    nav: {
      home: "Start",
      services: "Leistungen",
      projects: "Projekte",
      about: "Über uns",
      contact: "Kontakt",
      cta: "Kontakt aufnehmen",
    },
    hero: {
      eyebrow: "Webentwicklung & IT-Lösungen",
      headline: "Webentwicklung und IT\u00a0\u2014",
      headlineAccent: "Für Lösungen, die wirklich funktionieren",
      sub: "Von Webanwendungen bis zu internen Tools — sauber entwickelt, klar erklärt und so übergeben, dass Sie wirklich besitzen, wofür Sie bezahlt haben.",
      cta1: "Kontakt aufnehmen",
      cta2: "Projekte ansehen",
      techLabel: "Technologien, mit denen wir arbeiten",
    },
    services: {
      eyebrow: "Leistungsangebot",
      heading: "Vier Dinge, die wir gut können",
      sub: "Fokussierte Arbeit, ehrliche Planung, keine unnötige Komplexität — nur die richtige Lösung für das, was Sie wirklich brauchen.",
      items: [
        {
          title: "Webentwicklung",
          description:
            "Individuelle Webanwendungen mit der richtigen Technologie für die jeweilige Aufgabe — von einfachen Marketingseiten bis hin zu mehrschichtigen Plattformen.",
        },
        {
          title: "IT-Beratung",
          description:
            "Ehrliche Begleitung bei Technologieentscheidungen, Architektur und Tool-Auswahl. Praktische Empfehlungen, keine Vendor-Präferenzen.",
        },
        {
          title: "Automationslösungen",
          description:
            "Wiederkehrende Prozesse werden durch Code übernommen. Integrationen und interne Tools, die Zeit freisetzen und Fehlerquellen reduzieren.",
        },
        {
          title: "Hosting & Betrieb",
          description:
            "Deployment richtig gemacht — Container, Pipelines, Konfiguration und Monitoring. Damit das, was wir bauen, auch nach der Übergabe zuverlässig läuft.",
        },
      ],
    },
    techStack: {
      eyebrow: "Technologie",
      heading: "Die richtigen Werkzeuge für die Aufgabe",
      sub: "Keine exotischen Frameworks, keine unnötigen Abhängigkeiten. Das sind die Tools, die ich gut kenne und denen ich für zuverlässige Ergebnisse vertraue.",
      categories: ["Frontend", "Backend", "Infrastruktur"],
    },
    projects: {
      eyebrow: "Ausgewählte Arbeiten",
      heading: "Ausgewählte Projekte",
      sub: "Echte Projekte, echter Code — ein Querschnitt aus fokussierten Frontend-Arbeiten bis hin zu Full-Stack-Plattformen.",
      items: [
        {
          title: "Coderr",
          description:
            "Ein RESTful-Backend für eine Freelancer-Plattform — Benutzerauthentifizierung, Projektlisten, Bietlogik und Profilverwaltung. API-First-Architektur, klar vom Frontend getrennt.",
        },
        {
          title: "VideoFlix",
          description:
            "Eine Full-Stack-Video-Streaming-Plattform mit Benutzerregistrierung, Abonnementsystem und adaptiver Videoauslieferung. Inklusive Chunk-Upload-Handling und Hintergrundpipeline für die Videokodierung.",
        },
        {
          title: "Madame Pearls",
          description:
            "Eine mehrsprachige Präsentationswebsite für eine Schmuckmarke — responsive auf allen Geräten, lokalisierungsbereit und so strukturiert, dass Inhalte ohne Entwicklerbeteiligung gepflegt werden können.",
        },
        {
          title: "Mr. Ink Tattoo",
          description:
            "Eine stimmungsvolle Startseite für einen Tätowierer — gestaltet, um Portfolio-Arbeiten zu präsentieren, die Ästhetik des Studios zu vermitteln und Besucher zu Terminanfragen zu bewegen.",
        },
      ],
      viewOnGitHub: "Auf GitHub ansehen",
      viewLive: "Live ansehen",
    },
    about: {
      eyebrow: "Über mich",
      heading: "Die Person hinter der Arbeit",
      para1: "Korkmaz IT Solutions wurde gegründet von Cenk Korkmaz — einem Softwareentwickler mit fundierter Full-Stack-Ausbildung und einem Hintergrund, der lange vor dem ersten Code in industriellen Umgebungen begann.",
      para2: "Das Unternehmen wurde auf einem klaren Grundsatz aufgebaut: Kunden verdienen klare Kommunikation, ehrliche Beratung und Software, die das Problem tatsächlich löst — ohne unnötige Komplexität oder aufgeblähten Scope.",
      para3: "Von React und Next.js im Frontend bis zu Python, Django, PostgreSQL und Docker im Backend — jedes Projekt wird von Anfang bis Ende von derselben Person betreut, vom ersten Gespräch bis zur finalen Übergabe.",
      values: [
        {
          label: "Full-Stack von vorne bis hinten",
          detail:
            "Sicher über den gesamten Stack — vom Komponentendesign und TypeScript bis hin zu serverseitiger Logik, Datenbanken und containerisierten Deployments.",
        },
        {
          label: "Direkte Zusammenarbeit",
          detail:
            "Sie arbeiten direkt mit dem Gründer zusammen, nicht mit einem Account Manager. Keine Zwischenschritte, keine Missverständnisse.",
        },
        {
          label: "Langfristiges Denken",
          detail:
            "Entwickelt für Nachhaltigkeit — Code, der sich leicht erweitern, warten und an zukünftige Entwickler übergeben lässt.",
        },
      ],
    },
    process: {
      eyebrow: "So arbeiten wir",
      heading: "Ein klarer Ablauf von Anfang bis Ende",
      sub: "Drei Schritte, die Projekte auf Kurs halten — und Kunden in jeder Phase informiert.",
      steps: [
        {
          number: "01",
          title: "Analyse",
          description:
            "Ein strukturiertes Gespräch über Ihre Ziele, Rahmenbedingungen und bestehende Systeme. Das definiert den Scope und stellt sicher, dass wir das richtige Problem lösen — bevor eine einzige Zeile Code geschrieben wird.",
        },
        {
          number: "02",
          title: "Entwicklung",
          description:
            "Die Arbeit erfolgt in klaren, überprüfbaren Phasen. Sie werden in jedem Schritt informiert — keine Blackbox-Entwicklung. Code wird nach hohem Standard entwickelt und von Anfang an dokumentiert.",
        },
        {
          number: "03",
          title: "Übergabe",
          description:
            "Die Lieferung umfasst Deployment, eine abschließende Prüfung und eine ordentliche Übergabe. Sie verlassen das Projekt mit vollem Eigentum an dem, was gebaut wurde — und einem klaren Verständnis seiner Funktionsweise.",
        },
      ],
    },
    contact: {
      eyebrow: "Jetzt starten",
      heading: "Lassen Sie uns herausfinden, was Sie brauchen",
      sub: "Egal ob detailliertes Briefing oder grobe Idee — schreiben Sie eine Nachricht und wir klären gemeinsam, was Sinn ergibt. Unverbindlich, kein Verkaufsgespräch.",
      cta1: "Nachricht schreiben",
      cta2: "Leistungen ansehen",
    },
    footer: {
      tagline: "Webentwicklung und IT — solide gebaut.",
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
      eyebrow: "Web Development & IT Solutions",
      headline: "Web Development and IT\u00a0\u2014",
      headlineAccent: "Built to Solve Real Problems",
      sub: "From web applications to internal tools — built properly, explained clearly, and handed over so you actually own what you paid for.",
      cta1: "Get in Touch",
      cta2: "View Projects",
      techLabel: "Technologies we work with",
    },
    services: {
      eyebrow: "What We Offer",
      heading: "Four Things We Do Well",
      sub: "Focused work, honest scoping, no unnecessary complexity — just the right solution for what you actually need.",
      items: [
        {
          title: "Web Development",
          description:
            "Custom web applications built with the right technology for the job — from straightforward marketing sites to multi-layer platforms.",
        },
        {
          title: "IT Consulting",
          description:
            "Honest guidance on technology decisions, architecture and tool selection. You get practical advice, not a vendor recommendation.",
        },
        {
          title: "Automation Solutions",
          description:
            "Repetitive processes handled by code instead of people. Integrations and internal tools that free up time and reduce room for error.",
        },
        {
          title: "Hosting & Deployment",
          description:
            "Deployment done properly — containers, pipelines, configuration and monitoring. So what we build stays running after handover.",
        },
      ],
    },
    techStack: {
      eyebrow: "Technology",
      heading: "Built with the Right Tools",
      sub: "No exotic frameworks, no unnecessary dependencies. These are the tools I know well and trust to deliver reliable results.",
      categories: ["Frontend", "Backend", "Infrastructure"],
    },
    projects: {
      eyebrow: "Selected Work",
      heading: "Selected Projects",
      sub: "Real projects, real code — a cross-section of work from focused frontend builds to full-stack platforms.",
      items: [
        {
          title: "Coderr",
          description:
            "A RESTful backend for a freelance marketplace — user authentication, project listings, bidding logic and profile management. Designed with an API-first architecture, cleanly separated from any frontend client.",
        },
        {
          title: "VideoFlix",
          description:
            "A full-stack video streaming platform with user registration, subscription management and adaptive video delivery. Includes chunked upload handling and a background processing pipeline for video encoding.",
        },
        {
          title: "Madame Pearls",
          description:
            "A polished multilingual presentation website for a jewellery brand — responsive across all devices, localisation-ready and structured for straightforward content updates without developer involvement.",
        },
        {
          title: "Mr. Ink Tattoo",
          description:
            "An atmospheric homepage for a tattoo artist — designed to showcase portfolio work, communicate the studio's aesthetic and convert visitors into appointment bookings.",
        },
      ],
      viewOnGitHub: "View on GitHub",
      viewLive: "View Live",
    },
    about: {
      eyebrow: "About",
      heading: "The Person Behind the Work",
      para1: "Korkmaz IT Solutions was founded by Cenk Korkmaz — a software developer with formal training in full-stack development and a background that started in industrial environments long before it moved into code.",
      para2: "The company was built on a straightforward principle: clients deserve clear communication, honest advice and software that actually solves the problem — without unnecessary complexity or inflated scope.",
      para3: "From React and Next.js on the frontend to Python, Django, PostgreSQL and Docker on the backend — every project is handled end-to-end, by the same person, from first conversation to final handover.",
      values: [
        {
          label: "Full-stack, front to back",
          detail:
            "Comfortable across the full stack — from component design and TypeScript to server-side logic, databases and containerised deployments.",
        },
        {
          label: "Direct collaboration",
          detail:
            "You work directly with the founder, not an account manager. No handoffs, no miscommunication.",
        },
        {
          label: "Long-term thinking",
          detail:
            "Built for sustainability — code that is easy to extend, maintain and hand over to whoever comes next.",
        },
      ],
    },
    process: {
      eyebrow: "How We Work",
      heading: "A Clear Process from Start to Finish",
      sub: "Three steps that keep projects on track — and clients informed at every stage.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "A structured conversation about your goals, constraints and existing setup. This defines the scope and ensures we're solving the right problem before writing a single line of code.",
        },
        {
          number: "02",
          title: "Development",
          description:
            "Work happens in clear, reviewable stages. You stay informed at every step — no surprises, no black-box development. Code is written to a high standard and documented as we go.",
        },
        {
          number: "03",
          title: "Handover",
          description:
            "Delivery includes deployment, a final review and a proper handover. You leave with full ownership of what was built — and a clear understanding of how it works.",
        },
      ],
    },
    contact: {
      eyebrow: "Get Started",
      heading: "Let's Figure Out What You Need",
      sub: "Whether you have a detailed brief or just a rough idea — send a message and we will work out what makes sense. No obligation, no sales pitch.",
      cta1: "Send a Message",
      cta2: "View Services",
    },
    footer: {
      tagline: "Web development and IT — built to last.",
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
