"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

/** Supported UI language codes. */
export type Lang = "de" | "en";

/** Value exposed by `LanguageContext`. */
interface LanguageContextValue {
  /** The currently active language. */
  lang: Lang;
  /** Switches the active language and persists the choice to localStorage. */
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "de",
  setLang: () => {},
});

/**
 * Provides language state to the component tree.
 * Reads the initial value from `localStorage` on mount.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const stored = localStorage.getItem("preferred-lang");
    if (stored === "en") setLangState("en");
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("preferred-lang", l);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Convenience hook for consuming `LanguageContext`. */
export function useLanguage() {
  return useContext(LanguageContext);
}

