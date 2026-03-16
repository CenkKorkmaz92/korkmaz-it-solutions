"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = useTranslation();
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState("/");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHref(pathname);
      return;
    }
    const sectionIds = ["hero", "services", "tech-stack", "projects", "about", "process", "contact"];
    const handleScroll = () => {
      // Near bottom of page → always Contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 300) {
        setActiveHref("/#contact");
        return;
      }
      // Walk sections top→bottom; last one whose top has passed 80px wins
      let active = "/";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) {
          active = id === "hero" ? "/" : `/#${id}`;
        }
      }
      setActiveHref(active);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? activeHref === "/" : activeHref === href;

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.projects, href: "/#projects" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-secondary/10">
      <Container>
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Hauptnavigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-secondary text-base sm:text-lg font-semibold tracking-tight hover:text-accent transition-colors link-underline"
          >
            Korkmaz IT Solutions
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors link-underline ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-secondary/70 hover:text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right: language toggle + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <div
              className="flex items-center gap-1.5 text-xs font-semibold"
              aria-label="Sprache wählen"
            >
              <button
                onClick={() => setLang("de")}
                className={`transition-colors ${
                  lang === "de"
                    ? "text-secondary"
                    : "text-secondary/30 hover:text-secondary/60"
                }`}
                aria-pressed={lang === "de"}
                aria-label="Deutsch"
              >
                DE
              </button>
              <span className="text-secondary/20 select-none" aria-hidden="true">
                |
              </span>
              <button
                onClick={() => setLang("en")}
                className={`transition-colors ${
                  lang === "en"
                    ? "text-secondary"
                    : "text-secondary/30 hover:text-secondary/60"
                }`}
                aria-pressed={lang === "en"}
                aria-label="English"
              >
                EN
              </button>
            </div>
            <Link
              href="/#contact"
              className="inline-block rounded-md bg-accent px-5 py-2 text-sm font-semibold text-primary hover:bg-accent/90 hover:-translate-y-px active:scale-[0.98] hover:shadow-md hover:shadow-accent/25 transition-all duration-150"
            >
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex flex-col gap-1.5 p-2 text-secondary"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-transform origin-center ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform origin-center ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-accent bg-accent/5"
                        : "text-secondary/80 hover:bg-secondary/10 hover:text-secondary"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-3">
              <Link
                href="/#contact"
                className="block w-full rounded-md bg-accent px-5 py-2.5 text-center text-sm font-semibold text-primary hover:bg-accent/90 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.cta}
              </Link>
            </div>
            <div
              className="mt-3 px-3 flex items-center gap-2"
              aria-label="Sprache wählen"
            >
              <button
                onClick={() => setLang("de")}
                className={`text-sm font-medium transition-colors ${
                  lang === "de"
                    ? "text-secondary"
                    : "text-secondary/40 hover:text-secondary/70"
                }`}
                aria-pressed={lang === "de"}
                aria-label="Deutsch"
              >
                DE
              </button>
              <span className="text-secondary/20 select-none" aria-hidden="true">
                |
              </span>
              <button
                onClick={() => setLang("en")}
                className={`text-sm font-medium transition-colors ${
                  lang === "en"
                    ? "text-secondary"
                    : "text-secondary/40 hover:text-secondary/70"
                }`}
                aria-pressed={lang === "en"}
                aria-label="English"
              >
                EN
              </button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
