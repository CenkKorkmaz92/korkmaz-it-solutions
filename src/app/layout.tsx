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
    default: "Korkmaz IT Solutions — Freelance Webentwickler & IT-Dienstleister",
    template: "%s | Korkmaz IT Solutions",
  },

  description:
    "Freelance Webentwickler & IT-Dienstleister aus Deutschland. Individuelle Websites, Web-Apps, Domain-Migrationen und E-Mail-Setup — direkt mit dem Entwickler, ohne Agentur-Overhead.",

  keywords: [
    "Freelance Webentwickler",
    "Webentwickler Deutschland",
    "Webseite erstellen lassen",
    "Web App entwickeln",
    "IT-Dienstleister",
    "IT-Beratung",
    "Next.js Entwickler",
    "React Entwickler",
    "TypeScript Entwickler",
    "Domain Migration",
    "E-Mail Migration",
    "Buchhaltungssoftware Freelancer",
    "Korkmaz IT Solutions",
    "Cenk Korkmaz",
    "Freelancer Website",
    "Einzelunternehmer Software",
  ],

  authors: [{ name: "Cenk Korkmaz", url: "https://korkmaz-it-solutions.com" }],

  creator: "Cenk Korkmaz",

  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_GB",
    url: "https://korkmaz-it-solutions.com",
    siteName: "Korkmaz IT Solutions",
    title: "Korkmaz IT Solutions — Freelance Webentwickler & IT-Dienstleister",
    description:
      "Freelance Webentwickler & IT-Dienstleister aus Deutschland. Individuelle Websites, Web-Apps, Domain-Migrationen und E-Mail-Setup.",
    images: [{ url: "/OG-image-SEO.png", width: 1200, height: 630, alt: "Korkmaz IT Solutions" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Korkmaz IT Solutions — Freelance Webentwickler & IT-Dienstleister",
    description:
      "Individuelle Websites, Web-Apps, Domain-Migrationen und E-Mail-Setup — direkt mit dem Entwickler.",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Korkmaz IT Solutions",
              url: "https://korkmaz-it-solutions.com",
              email: "info@korkmaz-it-solutions.com",
              founder: {
                "@type": "Person",
                name: "Cenk Korkmaz",
                jobTitle: "Freelance Webentwickler & IT-Dienstleister",
                url: "https://korkmaz-it-solutions.com",
              },
              description:
                "Freelance Webentwickler & IT-Dienstleister aus Deutschland. Individuelle Websites, Web-Apps, Domain-Migrationen und E-Mail-Setup.",
              areaServed: {
                "@type": "Country",
                name: "Germany",
              },
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
            }),
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
