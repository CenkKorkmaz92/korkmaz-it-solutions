"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const [activeHref, setActiveHref] = useState("/");

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      // Already on homepage -> scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // On other page -> navigate to homepage
      router.push("/");
    }
  };

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHref(pathname);
      return;
    }
    const sectionIds = ["hero", "about", "services", "tech-stack", "projects", "process", "contact"];
    const handleScroll = () => {
      // Near bottom of page → always Contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 300) {
        setActiveHref("/#contact");
        return;
      }
      // Find section closest to top of viewport (accounting for navbar height)
      let active = "/";
      const navbarHeight = 100; // Navbar + buffer
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Section is considered active if its top is above middle of screen
          if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
            active = id === "hero" ? "/" : `/#${id}`;
            break; // Use first match
          }
          // Or if section top has passed navbar
          if (rect.top <= navbarHeight) {
            active = id === "hero" ? "/" : `/#${id}`;
          }
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
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.projects, href: "/#projects" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  const legalLinks = [
    { label: t.legal.impressumLabel, href: "/impressum" },
    { label: t.legal.datenschutzLabel, href: "/datenschutz" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary/90 backdrop-blur-md border-b border-accent/10" style={{ boxShadow: "0 1px 20px rgba(0,212,255,0.06)" }}>
      <Container>
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Hauptnavigation"
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 text-secondary text-base sm:text-lg font-semibold tracking-tight hover:text-accent transition-colors group"
          >
            <Image 
              src="/icon.png" 
              alt="Korkmaz IT Solutions Logo" 
              width={32} 
              height={32}
              className="w-8 h-8 transition-transform group-hover:scale-110"
            />
            <span className="link-underline">Korkmaz IT Solutions</span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-base font-medium transition-colors link-underline ${
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
              className="flex items-center gap-1.5 text-base font-semibold"
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
              className="inline-block rounded-md bg-accent px-5 py-2 text-base font-semibold text-primary hover:bg-accent/90 hover:-translate-y-px active:scale-[0.98] hover:shadow-md hover:shadow-accent/25 transition-all duration-150"
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

        {/* Mobile menu — fixed overlay, slides in below navbar, no layout shift */}
        <div
          id="mobile-menu"
          aria-hidden={!mobileOpen}
          className={`md:hidden fixed inset-x-0 top-16 z-40 transition-all duration-300 ease-in-out ${
            mobileOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-primary/95 backdrop-blur-md border-b border-accent/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] px-4 pb-5 pt-3">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-md px-3 py-2.5 text-base font-medium transition-colors ${
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
            
            {/* Legal Links */}
            <div className="mt-4 pt-4 border-t border-accent/10">
              <ul className="flex flex-col gap-1">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-md px-3 py-2.5 text-base font-medium text-secondary/60 hover:bg-secondary/10 hover:text-secondary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 px-3">
              <Link
                href="/#contact"
                className="block w-full rounded-md bg-accent px-5 py-2.5 text-center text-base font-semibold text-primary hover:bg-accent/90 transition-colors"
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
                className={`text-base font-medium transition-colors ${
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
                className={`text-base font-medium transition-colors ${
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
        </div>
      </Container>
    </header>
  );
}
