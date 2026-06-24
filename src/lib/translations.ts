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
      eyebrow: "Für Selbstständige, Unternehmen & lokale Betriebe",
      headline: "Websites und Web-Apps",
      headlineAccent: "die Ergebnisse bringen.",
      sub: "Direkt mit dem Entwickler.\nKeine Agentur. Keine Umwege.",
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
            "Du brauchst eine Website die Kunden überzeugt, auf dem Handy funktioniert und zu deinem Betrieb passt — keine Template-Lösung vom Reißbrett. Ich entwickle sie direkt auf dein Geschäft zugeschnitten.",
        },
        {
          title: "Performance & SEO",
          description:
            "Deine Website wird bei Google gefunden — und wenn jemand draufklickt, bleibt er auch. Ich sorge dafür, dass sie schnell lädt, auf allen Geräten funktioniert und in den Suchergebnissen sichtbar ist.",
        },
        {
          title: "Automatisierung",
          description:
            "Anfragen, Terminbuchungen, Benachrichtigungen — ich automatisiere die Abläufe, die du gerade noch von Hand erledigst. Du gewinnst Zeit, ohne dass etwas verloren geht.",
        },
        {
          title: "Beratung",
          description:
            "Bevor du Geld ausgibst, reden wir. Ich sage dir ehrlich, was dein Vorhaben braucht — und was nicht. Keine Paketpreise, keine Upsells.",
        },
        {
          title: "Domain & Hosting",
          description:
            "Deine Website soll einfach laufen — ohne Ausfälle, ohne Sicherheitslücken, ohne dass du dich damit beschäftigen musst. Domain, Hosting und alles Technische dahinter: das ist mein Job.",
        },
        {
          title: "E-Mail Migration",
          description:
            "Du willst professionelle E-Mail-Adressen mit deiner eigenen Domain — oder wechselst zu einem neuen Anbieter. Ich kümmere mich um den Umzug: kein Datenverlust, keine Unterbrechung, du musst nichts wissen.",
        },
      ],
    },
    techStack: {
      eyebrow: "Technologie",
      heading: "Womit ich arbeite",
      sub: "Next.js, React, TypeScript, Node.js, Tailwind CSS und PostgreSQL — moderne Technologien für stabile, schnelle und skalierbare Lösungen.",
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
      para1: "Ich bin Cenk — Freelance Webentwickler aus Sulzbach an der Murr im Rems-Murr-Kreis. Ich baue Websites und Web-Apps für Selbstständige, Handwerker und kleine Unternehmen, die online ernst genommen werden wollen.",
      para2: "Bei mir arbeitest du direkt mit dem Entwickler. Keine Agentur die deine Anforderungen intern weitergibt, kein Projektmanager als Zwischenschicht. Du erreichst mich direkt — und bekommst eine ehrliche Antwort, nicht eine Verkaufspräsentation.",
      para3: "Ich arbeite vollständig remote und bin für Unternehmen in ganz Deutschland tätig. Das Ergebnis ist dasselbe wie vor Ort — aber ohne Anfahrt, ohne Wartezeit und ohne regionale Einschränkung.",
      para4: "Zu meinen Projekten gehören Websites für ein Tattoo-Studio, ein Schmuck-Label, Freelancer und Einzelunternehmer — sowie eine lokale Buchhaltungssoftware speziell für Selbstständige in Deutschland. Jedes Projekt hat ein klares Ziel, und das setze ich um.",
      para5: "Mein Maßstab ist nicht der technisch aufwendigste Stack. Mein Maßstab ist, ob deine Website das tut, wofür sie gebaut wurde.",
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
      ],      cta: {
        text: "Klingt nach dem, was du brauchst? Das erste Gespräch ist kostenlos.",
        button: "Jetzt anfragen",
      },    },
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
        dsgvoText: "Ich habe die ",
        dsgvoLinkText: "Datenschutzerklärung",
        dsgvoTextEnd: " gelesen und stimme der Verarbeitung meiner Daten zu.",
        errorDsgvo: "Bitte stimme der Datenschutzerklärung zu.",
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
      eyebrow: "For Freelancers, Businesses & Local Companies",
      headline: "Websites & Web Apps",
      headlineAccent: "that deliver results.",
      sub: "Work directly with the developer.\nNo agency. No unnecessary layers.",
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
            "You need a website that convinces customers, works on mobile and actually fits your business — not an off-the-shelf template. I build it tailored directly to what you do.",
        },
        {
          title: "Performance & SEO",
          description:
            "Your website gets found on Google — and when someone clicks, they stay. I make sure it loads fast, works on all devices and shows up in search results.",
        },
        {
          title: "Automation",
          description:
            "Enquiries, bookings, notifications — I automate the tasks you're currently doing by hand. You save time without anything slipping through.",
        },
        {
          title: "Consulting",
          description:
            "Before you spend money, we talk. I give you an honest assessment of what your project actually needs — and what it doesn't. No bundled packages, no upsells.",
        },
        {
          title: "Domain & Hosting",
          description:
            "Your website should just work — no outages, no security gaps, no need to think about it. Domain, hosting and everything technical: that's my job.",
        },
        {
          title: "Email Migration",
          description:
            "You want professional email addresses with your own domain — or you're switching providers. I handle the migration: no data loss, no interruption, no technical knowledge required.",
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
      para1: "I'm Cenk — freelance web developer from Sulzbach an der Murr in the Rems-Murr district. I build websites and web apps for freelancers, tradespeople and small businesses who want to be taken seriously online.",
      para2: "With me, you work directly with the developer — no agency passing your brief along internally, no project manager in between. You reach me directly and get an honest answer, not a sales pitch.",
      para3: "I work fully remote and take on projects from businesses across Germany. The result is the same as working on-site — without the travel, the delays or the geographic limitations.",
      para4: "My projects include websites for a tattoo studio, a jewellery label, freelancers and sole traders — as well as a local accounting app built specifically for self-employed people in Germany. Every project has a clear goal, and I deliver it.",
      para5: "My benchmark isn't the most technically impressive stack. My benchmark is whether your website does what it was built to do.",
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
      cta: {
        text: "Sounds like what you need? The first call is free.",
        button: "Get in touch",
      },
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
        dsgvoText: "I have read the ",
        dsgvoLinkText: "Privacy Policy",
        dsgvoTextEnd: " and consent to the processing of my data.",
        errorDsgvo: "Please accept the Privacy Policy to continue.",
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
