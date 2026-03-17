import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

/**
 * Returns the translation object for the currently active language.
 * Must be used inside a `LanguageProvider`.
 */
export function useTranslation() {
  const { lang } = useLanguage();
  return translations[lang];
}
