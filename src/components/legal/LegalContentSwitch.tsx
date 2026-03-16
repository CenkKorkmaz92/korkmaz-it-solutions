"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  de: ReactNode;
  en: ReactNode;
}

export default function LegalContentSwitch({ de, en }: Props) {
  const { lang } = useLanguage();
  return <>{lang === "en" ? en : de}</>;
}
