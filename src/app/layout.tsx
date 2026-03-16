import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
