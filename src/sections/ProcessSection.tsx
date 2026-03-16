"use client";

import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";

export default function ProcessSection() {
  const t = useTranslation();
  const headerRef = useReveal();
  const stepsRef = useReveal();
  return (
    <section id="process" aria-label="Process" className="bg-secondary">
      <Container>
        <div className="py-24 sm:py-32">
          {/* Header */}
          <div ref={headerRef} className="reveal max-w-2xl mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              {t.process.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {t.process.heading}
            </h2>
            <p className="mt-4 text-base text-primary/60 leading-relaxed">
              {t.process.sub}
            </p>
          </div>

          {/* Steps */}
          <ol ref={stepsRef} className="reveal grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-10">
            {t.process.steps.map(({ number, title, description }, i) => (
              <li
                key={number}
                className="flex flex-col gap-5"
                style={{ "--delay": `${i * 120}ms` } as React.CSSProperties}
              >
                <span className="text-5xl font-bold text-accent/20 leading-none select-none">
                  {number}
                </span>
                <div className="h-px w-12 bg-accent/40" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold text-primary mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-primary/60 leading-relaxed">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
