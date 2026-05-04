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
          title: "Performance & SEO",
          description:
            "Optimierte Ladezeiten, saubere Code-Struktur und Suchmaschinenoptimierung — damit deine Website schnell lädt und bei Google gefunden wird.",
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
        {
          title: "Domain & Hosting",
          description:
            "Domain-Wechsel, DNS-Konfiguration und Hosting-Einrichtung – ich übernehme die technischen Schritte, damit deine Domain sicher und schnell erreichbar ist.",
        },
        {
          title: "E-Mail Migration",
          description:
            "Ich migriere deine E-Mail-Postfächer zu einem neuen Anbieter – zuverlässig, ohne Datenverlust und mit minimalem Ausfall.",
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
      heading: "Beispiele aus meiner Arbeit",
      sub: "Websites, Apps und Software – ausgewählte Projekte aus meiner täglichen Arbeit.",
      items: [
        {
          title: "Beispiel Portfolio-Seite",
          description:
            "Viele Selbstständige haben kein überzeugendes Portfolio. Diese moderne, schnelle Website zeigt Projekte klar, wirkt professionell und ermöglicht direkt neue Kundenanfragen – zweisprachig (DE/EN) und fertig zum Anpassen.",
        },
        {
          title: "Online CV",
          description:
            "Klassische PDFs gehen in Bewerbungsprozessen oft unter. Dieser digitale Lebenslauf ersetzt das PDF durch eine übersichtliche, mobil optimierte Website – professionell und direkt verlinkbar.",
        },
        {
          title: "Madame Pearls",
          description:
            "Das Schmuck-Label brauchte eine moderne Präsenz für internationale Kunden. Die Plattform zeigt Produkte in vier Sprachen, lässt Favoriten speichern und ermöglicht direkte Anfragen – mehr Reichweite, weniger Aufwand.",
        },
        {
          title: "Mr. Ink Tattoo",
          description:
            "Ohne starke Online-Präsenz gehen Tattoo-Studios an Google vorbei. Diese Website zeigt Arbeiten, stellt Künstler vor und ermöglicht Kontaktaufnahme – zweisprachig, mobil optimiert und auf neue Kunden ausgerichtet.",
        },
        {
          title: "Buchhaltungs-App",
          description:
            "Buchhaltung ohne Abo, ohne Cloud, ohne Datenweitergabe. Die App l\u00e4uft lokal auf deinem Rechner \u2013 deine Zahlen bleiben bei dir. Rechnungen erstellen, Einnahmen und Ausgaben erfassen, E\u00dcR und Steuerr\u00fccklagen automatisch berechnen, wiederkehrende Buchungen automatisieren. Der Export f\u00fcr den Steuerberater wird in Zusammenarbeit mit einer Steuerberaterin gepr\u00fcft und optimiert \u2013 damit du deine Unterlagen mit einem Klick \u00fcbergeben kannst. Entwickelt speziell f\u00fcr Freelancer und Einzelunternehmer in Deutschland (\u00a719 und Regelbesteuerung). Kommt demn\u00e4chst: integrierter KI-Assistent, der lokal auf deinen Daten arbeitet \u2013 ohne dass eine einzige Zahl nach au\u00dfen gelangt. Work in Progress.",
        },
      ],
      viewLive: "Live ansehen",
      comingSoon: "In Entwicklung",
      tabWeb: "Webprojekte",
      tabSoftware: "Software",
      ownProduct: "Eigenentwicklung",
      viewScreenshots: "Screenshots ansehen",
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
      form: {
        labelName: "Name / Firmenname",
        placeholderName: "Dein Name oder Firmenname",
        labelEmail: "E-Mail-Adresse",
        placeholderEmail: "deine@email.de",
        labelMessage: "Deine Nachricht",
        placeholderMessage: "Beschreib kurz, was du brauchst …",
        sending: "Wird gesendet …",
        success: "Nachricht gesendet – ich melde mich bald!",
        errorRequired: "Bitte füll alle Felder aus.",
        errorName: "Bitte gib einen g\u00fcltigen Namen ein.",
        errorEmail: "Bitte gib eine g\u00fcltige E-Mail-Adresse ein.",
        errorTooShort: "Deine Nachricht ist zu kurz (mind. 20 Zeichen).",
        errorRateLimit: "Zu viele Anfragen \u2013 bitte warte kurz.",
        errorServer: "Etwas ist schiefgelaufen. Versuch es nochmal.",
      },
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
          title: "Performance & SEO",
          description:
            "Optimised load times, clean code structure and search engine optimisation — so your site loads fast and gets found on Google.",
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
        {
          title: "Domain & Hosting",
          description:
            "Domain transfers, DNS configuration and hosting setup — I handle the technical steps so your domain is secure and reachable fast.",
        },
        {
          title: "Email Migration",
          description:
            "I migrate your email mailboxes to a new provider — reliably, without data loss and with minimal downtime.",
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
      heading: "Examples from My Work",
      sub: "Websites, apps and software — selected projects from my day-to-day work.",
      items: [
        {
          title: "Example Portfolio Site",
          description:
            "Many freelancers lack a convincing portfolio. This fast, modern site presents projects clearly, makes a professional impression, and enables new client inquiries — bilingual (DE/EN) and ready to customise.",
        },
        {
          title: "Online CV",
          description:
            "Traditional PDFs often get lost in recruitment. This digital CV replaces the PDF with a clean, mobile-optimised website — professional and easy to share.",
        },
        {
          title: "Madame Pearls",
          description:
            "The jewellery label needed a modern presence for international customers. The platform showcases products in four languages, lets visitors save favourites and send inquiries directly — more reach, less friction.",
        },
        {
          title: "Mr. Ink Tattoo",
          description:
            "Without a strong online presence, tattoo studios miss out on Google searches. This site showcases work, introduces artists, and makes contact easy — bilingual, mobile-optimised, and built to attract new clients.",
        },
        {
          title: "Accounting App",
          description:
            "Bookkeeping without a subscription, without a cloud, without handing your data to anyone. The app runs locally on your machine \u2014 your numbers stay with you. Create invoices, track income and expenses, automatically calculate your annual surplus (E\u00dcR) and tax reserves, and automate recurring entries. The tax consultant export is being reviewed and optimised in collaboration with a certified tax advisor \u2014 so you can hand over your records with a single click. Built specifically for freelancers and sole traders in Germany (\u00a719 and standard taxation). Coming soon: a built-in AI assistant that works entirely on your local data \u2014 nothing leaves your machine. Work in progress.",
        },
      ],
      viewLive: "View Live",
      comingSoon: "In Progress",
      tabWeb: "Web Projects",
      tabSoftware: "Software",
      ownProduct: "Own Product",
      viewScreenshots: "View Screenshots",
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
      form: {
        labelName: "Name / Company",
        placeholderName: "Your name or company",
        labelEmail: "Email address",
        placeholderEmail: "your@email.com",
        labelMessage: "Your message",
        placeholderMessage: "Briefly describe what you need …",
        sending: "Sending …",
        success: "Message sent — I'll get back to you soon!",
        errorRequired: "Please fill in all fields.",
        errorName: "Please enter a valid name.",
        errorEmail: "Please enter a valid email address.",
        errorTooShort: "Your message is too short (min. 20 characters).",
        errorRateLimit: "Too many requests \u2014 please wait a moment.",
        errorServer: "Something went wrong. Please try again.",
      },
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
