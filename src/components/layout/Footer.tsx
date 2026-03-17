"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";

export default function Footer() {
  const t = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };
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
    <footer id="contact" className="relative bg-surface text-secondary overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <Container>
        <div className="relative z-10 py-14 sm:py-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center gap-3 text-base font-semibold tracking-tight text-accent hover:text-accent/80 transition-colors group w-fit"
            >
              <Image 
                src="/icon.png" 
                alt="Korkmaz IT Solutions Logo" 
                width={28} 
                height={28}
                className="w-7 h-7 transition-transform group-hover:scale-110"
              />
              <span className="glow-text">Korkmaz IT Solutions</span>
            </Link>
            <p className="text-base text-secondary/50 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold uppercase tracking-widest text-accent/50">
              {t.footer.navigation}
            </h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-secondary/50 hover:text-accent transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold uppercase tracking-widest text-accent/50">
              {t.footer.contact}
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold text-secondary">
                Cenk Korkmaz
              </p>
              <a
                href="mailto:info@korkmaz-it-solutions.com"
                className="text-base text-secondary/50 hover:text-accent transition-colors"
              >
                info@korkmaz-it-solutions.com
              </a>
              <a
                href="tel:+49015734376057"
                className="text-base text-secondary/50 hover:text-accent transition-colors"
              >
                +49 157 34376057
              </a>
            </div>
            <div className="flex items-center gap-5 pt-1">
              <a
                href="https://github.com/CenkKorkmaz92"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-secondary/50 hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/cenk-korkmaz-2731072a5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-secondary/50 hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 border-t border-accent/10 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-secondary/30">
            &copy; {currentYear} Korkmaz IT Solutions. {t.footer.rights}
          </p>
          <ul className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  prefetch={false}
                  className="text-base text-secondary/30 hover:text-accent transition-colors"
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
