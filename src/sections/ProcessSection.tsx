"use client";

import { useState, useEffect } from "react";
import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";

export default function ProcessSection() {
  const t = useTranslation();
  const headerRef = useReveal();
  const stepsRef = useReveal<HTMLOListElement>();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="process" aria-label="Process" className="relative bg-surface overflow-hidden fade-to-primary">
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <Container>
        <div className="relative z-10 py-24 sm:py-32">
          {/* Header */}
          <div ref={headerRef} className="reveal max-w-2xl mb-10 sm:mb-14">
            <p className="text-base font-semibold uppercase tracking-widest text-accent mb-4 glow-text">
              {t.process.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              {t.process.heading}
            </h2>
            <p className="mt-4 text-base text-secondary/50 leading-relaxed">
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
                <span
                  className={activeStep === i ? "cyber-step-num leading-none" : "leading-none"}
                  style={{
                    fontFamily: "var(--font-black-ops)",
                    fontSize: "5rem",
                    color: activeStep === i ? undefined : "rgba(0,212,255,0.2)",
                    animation: activeStep === i ? undefined : "none",
                    transition: "color 0ms",
                  }}
                >
                  {number}
                </span>
                <div className="h-px w-12 bg-accent/40" style={{ boxShadow: "0 0 8px rgba(0,212,255,0.4)" }} aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold text-secondary mb-2">
                    {title}
                  </h3>
                  <p className="text-base text-secondary/50 leading-relaxed">
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
