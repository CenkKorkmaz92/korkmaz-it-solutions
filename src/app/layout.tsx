import type { Metadata } from "next";
import { Geist, Geist_Mono, Black_Ops_One } from "next/font/google";
import "./globals.css";
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
    default: "Korkmaz IT Solutions",
    template: "%s | Korkmaz IT Solutions",
  },

  description:
    "Korkmaz IT Solutions delivers professional web development, IT consulting and digital solutions for businesses. Founded by Cenk Korkmaz — modern, scalable software built with precision.",

  keywords: [
    "web development",
    "IT consulting",
    "software development",
    "Next.js",
    "TypeScript",
    "digital solutions",
    "Korkmaz IT Solutions",
    "Cenk Korkmaz",
  ],

  authors: [{ name: "Cenk Korkmaz", url: "https://korkmaz-it-solutions.com" }],

  creator: "Cenk Korkmaz",

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://korkmaz-it-solutions.com",
    siteName: "Korkmaz IT Solutions",
    title: "Korkmaz IT Solutions — Web Development & IT Services",
    description:
      "Professional web development, IT consulting and digital solutions for businesses. Modern, scalable software built with precision.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Korkmaz IT Solutions — Web Development & IT Services",
    description:
      "Professional web development, IT consulting and digital solutions for businesses.",
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
