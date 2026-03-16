"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";

export default function Footer() {
  const t = useTranslation();
  const currentYear = new Date().getFullYear();
  const legalLinks = [
    { label: t.legal.impressumLabel, href: "/impressum" },
    { label: t.legal.datenschutzLabel, href: "/datenschutz" },
  ];
  const footerLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.projects, href: "/#projects" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <footer className="bg-primary text-secondary">
      <Container>
        <div className="py-14 sm:py-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight hover:text-accent transition-colors link-underline w-fit"
            >
              Korkmaz IT Solutions
            </Link>
            <p className="text-sm text-secondary/60 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-secondary/40">
              {t.footer.navigation}
            </h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary/60 hover:text-secondary transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-secondary/40">
              {t.footer.contact}
            </h3>
            <a
              href="mailto:info@korkmaz-it-solutions.com"
              className="text-sm text-secondary/60 hover:text-accent transition-colors"
            >
              info@korkmaz-it-solutions.com
            </a>
            <div className="flex items-center gap-5 pt-1">
              <a
                href="https://github.com/CenkKorkmaz92"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary/60 hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/cenk-korkmaz-2731072a5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary/60 hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary/10 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-secondary/40">
            &copy; {currentYear} Korkmaz IT Solutions. {t.footer.rights}
          </p>
          <ul className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-secondary/40 hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
