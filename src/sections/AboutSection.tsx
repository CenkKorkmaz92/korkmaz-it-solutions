"use client";

import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";

export default function AboutSection() {
  const t = useTranslation();
  const leftRef = useReveal();
  const rightRef = useReveal();
  return (
    <section id="about" aria-label="About" className="relative bg-primary overflow-hidden fade-to-surface">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <Container>
        <div className="relative z-10 py-24 sm:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 lg:items-start">
            {/* Left - text */}
            <div ref={leftRef} className="reveal">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 glow-text">
                {t.about.eyebrow}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
                {t.about.heading}
              </h2>
              <div className="mt-6 space-y-4 text-base text-secondary/50 leading-relaxed">
                <p>
                  {t.about.para1.split("Cenk Korkmaz")[0]}
                  <span className="text-accent glow-text font-medium">
                    Cenk Korkmaz
                  </span>
                  {t.about.para1.split("Cenk Korkmaz")[1]}
                </p>
                <p>{t.about.para2}</p>
                <p>{t.about.para3}</p>
              </div>

              {/* Social profiles */}
              <div className="mt-8 flex items-center gap-6">
                <a
                  href="https://github.com/CenkKorkmaz92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-secondary/50 hover:text-accent transition-colors link-underline"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/cenk-korkmaz-2731072a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-secondary/50 hover:text-accent transition-colors link-underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right - values */}
            <div ref={rightRef} className="reveal flex flex-col gap-5">
              {t.about.values.map(({ label, detail }, i) => (
                <div
                  key={label}
                  className="cyber-card flex gap-5 rounded-xl p-5"
                  style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
                >
                  <span
                    className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent shadow-[0_0_6px_rgba(0,212,255,0.8)]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-secondary mb-1">
                      {label}
                    </p>
                    <p className="text-sm text-secondary/50 leading-relaxed">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
