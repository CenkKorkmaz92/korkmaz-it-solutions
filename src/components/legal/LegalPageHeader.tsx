"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

/** Props for `LegalPageHeader`. */
interface Props {
  /** German page title displayed when `lang === "de"`. */
  titleDe: string;
  /** English page title displayed when `lang === "en"`. */
  titleEn: string;
  /** Key into `t.legal` for the subtitle line below the heading. */
  subtitleKey: "impressumSub" | "datenschutzSub";
}

/**
 * Shared hero-style header for legal pages (Impressum & Datenschutz).
 * Shows a "back to home" link, the localised page title, and a subtitle.
 */
export default function LegalPageHeader({ titleDe, titleEn, subtitleKey }: Props) {
  const t = useTranslation();
  const { lang } = useLanguage();
  return (
    <div className="bg-primary text-secondary py-16 sm:py-20">
      <Container>
        <Link
          href="/"
          prefetch={false}
          className="text-base uppercase tracking-widest text-secondary/40 hover:text-accent transition-colors mb-6 inline-block"
        >
          {t.legal.backToHome}
        </Link>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {lang === "en" ? titleEn : titleDe}
        </h1>
        <p className="mt-3 text-secondary/60 text-base">{t.legal[subtitleKey]}</p>
      </Container>
    </div>
  );
}
