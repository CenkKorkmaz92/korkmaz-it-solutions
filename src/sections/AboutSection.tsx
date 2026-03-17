"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";

export default function AboutSection() {
  const t = useTranslation();
  const headerRef = useReveal();
  const bioRef = useReveal();
  const valuesRef = useReveal();

  return (
    <section id="about" aria-label="About" className="relative bg-primary overflow-hidden fade-to-surface">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <Container>
        <div className="relative z-10 py-24 sm:py-32 flex flex-col gap-16">

          {/* ── Header ───────────────────────────────────────────────── */}
          <div ref={headerRef} className="reveal max-w-2xl">
            <p className="text-base font-semibold uppercase tracking-widest text-accent mb-4 glow-text">
              {t.about.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              {t.about.heading}
            </h2>
          </div>

          {/* ── Bio row: image left, text right ──────────────────────── */}
          <div ref={bioRef} className="reveal grid grid-cols-1 gap-10 sm:grid-cols-[auto_1fr] sm:gap-14 sm:items-start">

            {/* Profile image */}
            <div className="group relative w-56 h-56 sm:w-64 sm:h-64 flex-shrink-0 rounded-2xl overflow-hidden cursor-default ring-1 ring-white/5 shadow-[0_0_40px_rgba(0,212,255,0.07)] transition-all duration-500 hover:shadow-[0_0_56px_rgba(0,212,255,0.2)] hover:ring-accent/30 mx-auto sm:mx-0">
              <Image
                src="/images/profile-default.webp"
                alt="Cenk Korkmaz"
                fill
                className="object-cover object-top"
                priority
              />
              <Image
                src="/images/profile-hover.webp"
                alt=""
                fill
                className="object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              />
            </div>

            {/* Text + socials */}
            <div className="flex flex-col justify-center gap-5">
              <div className="space-y-4 text-base text-secondary/55 leading-relaxed">
                <p>{t.about.para1}</p>
                <p>{t.about.para2}</p>
                <p>{t.about.para3}</p>
                <p>{t.about.para4}</p>
                <p>{t.about.para5}</p>
              </div>
              <div className="flex items-center gap-6 pt-2">
                <a
                  href="https://github.com/CenkKorkmaz92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-secondary/50 hover:text-accent transition-colors link-underline"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/cenk-korkmaz-2731072a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-secondary/50 hover:text-accent transition-colors link-underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* ── Value cards — full width row ─────────────────────────── */}
          <div ref={valuesRef} className="reveal grid grid-cols-1 gap-4 sm:grid-cols-3">
            {t.about.values.map(({ label, detail }, i) => (
              <div
                key={label}
                className="cyber-card flex gap-4 rounded-xl p-5"
                style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <span
                  className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent shadow-[0_0_6px_rgba(0,212,255,0.8)]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-base font-semibold text-secondary mb-1">{label}</p>
                  <p className="text-base text-secondary/50 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
