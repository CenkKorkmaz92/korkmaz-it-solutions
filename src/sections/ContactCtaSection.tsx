"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";

export default function ContactCtaSection() {
  const t = useTranslation();
  const ref = useReveal();
  return (
    <section id="get-in-touch" aria-label="Contact" className="relative bg-primary overflow-hidden cyber-scanline fade-to-surface">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)" }}
      />
      <Container>
        <div className="relative z-10 py-24 sm:py-32">
          <div ref={ref} className="reveal max-w-2xl">
            <p className="text-base font-semibold uppercase tracking-widest text-accent mb-4 glow-text">
              {t.contact.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              {t.contact.heading}
            </h2>
            <p className="mt-4 text-base text-secondary/50 leading-relaxed max-w-xl">
              {t.contact.sub}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="mailto:info@korkmaz-it-solutions.com"
                className="btn-cyber inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-primary hover:bg-accent/90 hover:-translate-y-px active:scale-[0.98] transition-all duration-150 sm:w-auto sm:py-3"
              >
                {t.contact.cta1}
              </a>
              <Link
                href="/#services"
                className="inline-flex w-full items-center justify-center rounded-md border border-accent/30 px-6 py-3.5 text-base font-semibold text-secondary hover:border-accent/70 hover:bg-accent/5 hover:shadow-[0_0_16px_rgba(0,212,255,0.15)] hover:-translate-y-px active:scale-[0.98] transition-all duration-150 sm:w-auto sm:py-3"
              >
                {t.contact.cta2}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
