"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

/** Props for `LegalContentSwitch`. */
interface Props {
  /** Content to render when the active language is German. */
  de: ReactNode;
  /** Content to render when the active language is English. */
  en: ReactNode;
}

/**
 * Renders the `de` or `en` child based on the currently active language.
 * Used to swap full legal-page content blocks without re-routing.
 */
export default function LegalContentSwitch({ de, en }: Props) {
  const { lang } = useLanguage();
  return <>{lang === "en" ? en : de}</>;
}
