"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export type Lang = "de" | "en";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "de",
  setLang: () => {},
});

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

export function useLanguage() {
  return useContext(LanguageContext);
}

