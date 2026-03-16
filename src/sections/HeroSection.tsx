"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";
import CyberChip from "@/components/ui/CyberChip";

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
      className="relative bg-primary text-secondary overflow-hidden cyber-scanline fade-to-surface"
    >
      {/* Dot-grid background */}
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />

      {/* Radial glow behind content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)" }}
      />

      {/* Animated cyber chip — blurred background decoration */}
      <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] pointer-events-none blur-[2px]">
        <CyberChip className="cyber-chip-bg w-full h-full" />
      </div>

      <Container>
        <div ref={ref} className="reveal relative z-10 py-24 sm:py-32 lg:py-40">
          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6 glow-text">
            {t.hero.eyebrow}
          </p>

          {/* Headline */}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            {t.hero.headline}{" "}
            <span className="text-accent glow-text">{t.hero.headlineAccent}</span>
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
              className="btn-cyber inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-primary hover:bg-accent/90 hover:-translate-y-px active:scale-[0.98] transition-all duration-150 sm:w-auto sm:py-3"
            >
              {t.hero.cta1}
            </Link>
            <Link
              href="/#projects"
              className="inline-flex w-full items-center justify-center rounded-md border border-accent/30 px-6 py-3.5 text-sm font-semibold text-secondary hover:border-accent/70 hover:bg-accent/5 hover:shadow-[0_0_16px_rgba(0,212,255,0.15)] hover:-translate-y-px active:scale-[0.98] transition-all duration-150 sm:w-auto sm:py-3"
            >
              {t.hero.cta2}
            </Link>
          </div>

          {/* Tech stack bar */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-accent/10">
            <p className="text-xs uppercase tracking-widest text-secondary/30 mb-4">
              {t.hero.techLabel}
            </p>
            <ul className="flex flex-wrap gap-3" aria-label="Tech stack">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="cyber-bracket rounded-sm border border-accent/15 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent/70 hover:border-accent/50 hover:text-accent hover:bg-accent/10 hover:shadow-[0_0_10px_rgba(0,212,255,0.15)] transition-all duration-150 cursor-default"
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
