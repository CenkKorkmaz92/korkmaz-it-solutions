# Korkmaz IT Solutions — Official Website

> The official portfolio website for **Korkmaz IT Solutions** — freelance web development and IT services by Cenk Korkmaz.

Built with modern web technologies, focused on performance, clarity, and real results. No overhead, no middlemen.

---

## About

Korkmaz IT Solutions is a one-person operation run by Cenk Korkmaz — a freelance web developer building websites and web applications for freelancers and businesses. Direct contact, clean code, delivered.

**Contact:**
- **Name:** Cenk Korkmaz
- **Email:** info@korkmaz-it-solutions.com
- **Phone:** +49 157 34376057
- **Website:** [korkmaz-it-solutions.com](https://korkmaz-it-solutions.com)

---

## Tech Stack

| Technology | Role |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with Turbopack, static export |
| [React 19](https://react.dev/) | UI library |
| [TypeScript 5](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [Geist Font](https://vercel.com/font) | Typography |
| [ESLint 9](https://eslint.org/) | Code quality & linting |

---

## Features

- **Static export** (`output: "export"`) — zero server required, deployable anywhere
- **Bilingual (DE/EN)** — language switching via React Context with localStorage persistence
- **SEO optimised** — full metadata API, Open Graph, Twitter cards, canonical URLs
- **Icons & PWA-ready** — favicon.ico, apple-touch-icon, android-chrome icons, site.webmanifest
- **Scroll reveal** — IntersectionObserver-based animations per section
- **Cyber card effect** — animated conic-gradient border on project cards
- **Image slider** — auto-rotating preview images per project (crossfade, 5s interval)
- **Legal compliance** — Impressum and Datenschutzerklärung for German law requirements
- **Fully responsive** — mobile-first layout across all sections

---

## Project Structure

```
├── public/
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── site.webmanifest
│   └── images/
│       └── projects/       # Project preview images (webp)
├── src/
│   ├── app/                # Next.js App Router (layout, page, legal pages)
│   ├── components/         # Reusable UI and layout components
│   ├── content/            # Static legal content (Impressum, Datenschutz DE/EN)
│   ├── contexts/           # LanguageContext (DE/EN switching)
│   ├── hooks/              # useReveal, useTranslation, useMediaQuery
│   ├── lib/                # translations.ts, utils.ts
│   ├── sections/           # Page sections (Hero, Services, Projects, About, …)
│   ├── styles/             # custom.css
│   └── types/              # TypeScript type definitions
└── ...config files
```

---

## Live Website

[korkmaz-it-solutions.com](https://korkmaz-it-solutions.com)

---

## Author

**Cenk Korkmaz**  
Freelance Web Developer  
[korkmaz-it-solutions.com](https://korkmaz-it-solutions.com)

---

## Copyright

© 2026 Korkmaz IT Solutions. All rights reserved.

The source code, design, and all associated assets are the exclusive property of Korkmaz IT Solutions. Unauthorized copying, modification, distribution, or use without prior written permission is strictly prohibited.

