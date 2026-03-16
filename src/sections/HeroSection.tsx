"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
];

export default function HeroSection() {
  const t = useTranslation();
  const ref = useReveal(0.05);
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="bg-primary text-secondary"
    >
      <Container>
        <div ref={ref} className="reveal py-24 sm:py-32 lg:py-40">
          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">
            {t.hero.eyebrow}
          </p>

          {/* Headline */}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            {t.hero.headline}{" "}
            <span className="text-accent">{t.hero.headlineAccent}</span>
          </h1>

          {/* Accent line under headline */}
          <span className="hero-accent-line mt-3 max-w-xs" aria-hidden="true" />

          {/* Supporting copy */}
          <p className="mt-6 max-w-xl text-base sm:text-lg text-secondary/60 leading-relaxed">
            {t.hero.sub}
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-primary hover:bg-accent/90 hover:-translate-y-px active:scale-[0.98] hover:shadow-md hover:shadow-accent/25 transition-all duration-150 sm:w-auto sm:py-3"
            >
              {t.hero.cta1}
            </Link>
            <Link
              href="/#projects"
              className="inline-flex w-full items-center justify-center rounded-md border border-secondary/20 px-6 py-3.5 text-sm font-semibold text-secondary hover:border-secondary/50 hover:bg-secondary/5 hover:-translate-y-px active:scale-[0.98] transition-all duration-150 sm:w-auto sm:py-3"
            >
              {t.hero.cta2}
            </Link>
          </div>

          {/* Tech stack bar */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-secondary/10">
            <p className="text-xs uppercase tracking-widest text-secondary/30 mb-4">
              {t.hero.techLabel}
            </p>
            <ul className="flex flex-wrap gap-3" aria-label="Tech stack">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-secondary/10 bg-secondary/5 px-4 py-1.5 text-xs font-medium text-secondary/60 hover:border-accent/40 hover:text-secondary hover:bg-secondary/10 transition-all duration-150 cursor-default"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
