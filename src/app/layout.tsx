import type { Metadata } from "next";
import { Geist, Geist_Mono, Black_Ops_One } from "next/font/google";
import "./globals.css";
import "@/styles/custom.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import CursorGlow from "@/components/ui/CursorGlow";
import ClickRipple from "@/components/ui/ClickRipple";
import DisableContextMenu from "@/components/ui/DisableContextMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const blackOpsOne = Black_Ops_One({
  variable: "--font-black-ops",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://korkmaz-it-solutions.com"),

  title: {
    default: "Freelance Webentwickler Rems-Murr-Kreis & Region Stuttgart — Korkmaz IT Solutions",
    template: "%s | Korkmaz IT Solutions",
  },

  description:
    "Freelance Webentwickler & IT-Dienstleister, bundesweit remote tätig. Aus dem Rems-Murr-Kreis für Kunden in ganz Deutschland — Stuttgart, Berlin, Hamburg, München, Frankfurt und überall sonst. Individuelle Websites, Web-Apps, Domain-Migrationen und E-Mail-Setup. Direkt mit dem Entwickler, ohne Agentur-Overhead.",

  keywords: [
    // Lokal (Rems-Murr-Kreis & Region Stuttgart)
    "Freelance Webentwickler Stuttgart",
    "Webentwickler Stuttgart",
    "Webentwickler Esslingen",
    "Webentwickler Nürtingen",
    "Webentwickler Backnang",
    "Webentwickler Waiblingen",
    "Webentwickler Schorndorf",
    "Webentwickler Winnenden",
    "Webentwickler Rems-Murr-Kreis",
    "Webentwickler Sulzbach an der Murr",
    "Webentwickler Region Stuttgart",
    "Webentwickler Kreis Esslingen",
    "Webentwickler Göppingen",
    "Webentwickler Ludwigsburg",
    "Webentwickler Heidelberg",
    "Webentwickler Karlsruhe",
    "Webentwickler Mannheim",
    "Webentwickler Heilbronn",
    "Webentwickler Ulm",
    "Webentwickler Freiburg",
    // Bundesweit — Großstädte
    "Webentwickler Berlin",
    "Webentwickler Hamburg",
    "Webentwickler München",
    "Webentwickler Frankfurt",
    "Webentwickler Köln",
    "Webentwickler Düsseldorf",
    "Webentwickler Dörtmund",
    "Webentwickler Leipzig",
    "Webentwickler Nürnberg",
    "Webentwickler Bremen",
    // Remote / bundesweit allgemein
    "Freelance Webentwickler remote",
    "Freelance Webentwickler Deutschland",
    "Webentwickler remote",
    "Webentwickler bundesweit",
    "Webseite erstellen lassen Deutschland",
    "Webseite erstellen lassen",
    "IT-Dienstleister Deutschland",
    "IT-Dienstleister Stuttgart",
    "IT-Beratung remote",
    "Web App entwickeln Deutschland",
    "Next.js Entwickler",
    "React Entwickler",
    "TypeScript Entwickler",
    "Freelance Webentwickler",
    // Spezifisch
    "Buchhaltungssoftware Freelancer",
    "Einzelunternehmer Software",
    "Korkmaz IT Solutions",
    "Cenk Korkmaz",
  ],

  authors: [{ name: "Cenk Korkmaz", url: "https://korkmaz-it-solutions.com" }],

  creator: "Cenk Korkmaz",

  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_GB",
    url: "https://korkmaz-it-solutions.com",
    siteName: "Korkmaz IT Solutions",
    title: "Freelance Webentwickler Rems-Murr-Kreis & Region Stuttgart — Korkmaz IT Solutions",
    description:
      "Freelance Webentwickler & IT-Dienstleister aus dem Rems-Murr-Kreis — Sulzbach an der Murr, Stuttgart, Esslingen, Nürtingen, Backnang. Individuelle Websites, Web-Apps, Domain-Migrationen und E-Mail-Setup.",
    images: [{ url: "/OG-image-SEO.png", width: 1200, height: 630, alt: "Korkmaz IT Solutions" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Freelance Webentwickler Rems-Murr-Kreis & Region Stuttgart — Korkmaz IT Solutions",
    description:
      "Individuelle Websites, Web-Apps, Domain-Migrationen und E-Mail-Setup — Rems-Murr-Kreis, Stuttgart, Esslingen, Nürtingen, Backnang.",
    images: ["/OG-image-SEO.png"],
    creator: "@cenkkorkmaz",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },

  alternates: {
    canonical: "https://korkmaz-it-solutions.com",
    languages: {
      "de": "https://korkmaz-it-solutions.com",
      "en": "https://korkmaz-it-solutions.com",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Korkmaz IT Solutions",
                url: "https://korkmaz-it-solutions.com",
                inLanguage: ["de", "en"],
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://korkmaz-it-solutions.com/#contact",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Cenk Korkmaz",
                jobTitle: "Freelance Webentwickler & IT-Dienstleister",
                url: "https://korkmaz-it-solutions.com",
                email: "info@korkmaz-it-solutions.com",
                address: {
                  "@type": "PostalAddress",
                  postalCode: "71560",
                  addressLocality: "Sulzbach an der Murr",
                  addressRegion: "Baden-Württemberg",
                  addressCountry: "DE",
                },
                knowsLanguage: ["de", "en"],
                sameAs: ["https://korkmaz-it-solutions.com"],
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "Korkmaz IT Solutions",
                url: "https://korkmaz-it-solutions.com",
                email: "info@korkmaz-it-solutions.com",
                founder: {
                  "@type": "Person",
                  name: "Cenk Korkmaz",
                },
                description:
                  "Freelance Webentwickler & IT-Dienstleister aus dem Rems-Murr-Kreis (Sulzbach an der Murr). Individuelle Websites, Web-Apps, Domain-Migrationen und E-Mail-Setup.",
                address: {
                  "@type": "PostalAddress",
                  postalCode: "71560",
                  addressLocality: "Sulzbach an der Murr",
                  addressRegion: "Baden-Württemberg",
                  addressCountry: "DE",
                },
                areaServed: [
                  // Lokal (Heimatregion)
                  { "@type": "City", name: "Sulzbach an der Murr" },
                  { "@type": "AdministrativeArea", name: "Rems-Murr-Kreis" },
                  { "@type": "City", name: "Stuttgart" },
                  { "@type": "City", name: "Esslingen am Neckar" },
                  { "@type": "City", name: "Nürtingen" },
                  { "@type": "City", name: "Backnang" },
                  { "@type": "City", name: "Waiblingen" },
                  { "@type": "City", name: "Schorndorf" },
                  { "@type": "City", name: "Winnenden" },
                  { "@type": "City", name: "Göppingen" },
                  { "@type": "City", name: "Ludwigsburg" },
                  // Baden-Württemberg
                  { "@type": "City", name: "Karlsruhe" },
                  { "@type": "City", name: "Mannheim" },
                  { "@type": "City", name: "Heidelberg" },
                  { "@type": "City", name: "Heilbronn" },
                  { "@type": "City", name: "Ulm" },
                  { "@type": "City", name: "Freiburg im Breisgau" },
                  { "@type": "State", name: "Baden-Württemberg" },
                  // Bundesweit
                  { "@type": "City", name: "Berlin" },
                  { "@type": "City", name: "Hamburg" },
                  { "@type": "City", name: "München" },
                  { "@type": "City", name: "Frankfurt am Main" },
                  { "@type": "City", name: "Köln" },
                  { "@type": "City", name: "Düsseldorf" },
                  { "@type": "Country", name: "Germany" },
                ],
                serviceType: [
                  "Webentwicklung",
                  "Web App Entwicklung",
                  "IT-Beratung",
                  "Domain Migration",
                  "E-Mail Migration",
                  "Software Entwicklung",
                ],
                knowsLanguage: ["de", "en"],
                inLanguage: "de",
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${blackOpsOne.variable} antialiased font-sans`}
      >
        <LanguageProvider>
          <DisableContextMenu />
          <CursorGlow />
          <ClickRipple />
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
