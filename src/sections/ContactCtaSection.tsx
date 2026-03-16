"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";

export default function ContactCtaSection() {
  const t = useTranslation();
  const ref = useReveal();
  return (
    <section id="contact" aria-label="Contact" className="bg-primary">
      <Container>
        <div className="py-24 sm:py-32">
          <div ref={ref} className="reveal max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              {t.contact.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              {t.contact.heading}
            </h2>
            <p className="mt-4 text-base text-secondary/60 leading-relaxed max-w-xl">
              {t.contact.sub}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="mailto:info@korkmaz-it-solutions.com"
                className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-primary hover:bg-accent/90 hover:-translate-y-px active:scale-[0.98] hover:shadow-md hover:shadow-accent/25 transition-all duration-150 sm:w-auto sm:py-3"
              >
                {t.contact.cta1}
              </a>
              <Link
                href="/#services"
                className="inline-flex w-full items-center justify-center rounded-md border border-secondary/20 px-6 py-3.5 text-sm font-semibold text-secondary hover:border-secondary/50 hover:bg-secondary/5 hover:-translate-y-px active:scale-[0.98] transition-all duration-150 sm:w-auto sm:py-3"
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
