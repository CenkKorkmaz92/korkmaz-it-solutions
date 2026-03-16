"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-secondary/10">
      <Container>
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          {/* Logo / Brand */}
          <Link
            href="/"
            className="text-secondary text-base sm:text-lg font-semibold tracking-tight hover:text-accent transition-colors"
          >
            Korkmaz IT Solutions
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-secondary/70 hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="inline-block rounded-md bg-accent px-5 py-2 text-sm font-semibold text-primary hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex flex-col gap-1.5 p-2 text-secondary"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-transform origin-center ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform origin-center ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-secondary/80 hover:bg-secondary/10 hover:text-secondary transition-colors"
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
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
