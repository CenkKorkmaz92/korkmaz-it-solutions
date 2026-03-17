"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  titleDe: string;
  titleEn: string;
  subtitleKey: "impressumSub" | "datenschutzSub";
}

export default function LegalPageHeader({ titleDe, titleEn, subtitleKey }: Props) {
  const t = useTranslation();
  const { lang } = useLanguage();
  return (
    <div className="bg-primary text-secondary py-16 sm:py-20">
      <Container>
        <Link
          href="/"
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
