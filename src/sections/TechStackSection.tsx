"use client";

import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";
import { useEffect, useState } from "react";

/**
 * Tech stack items grouped by category.
 * Order matches `t.techStack.categories` — [Frontend, Backend, Infrastructure].
 */
const techItems = [
  ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular"],
  ["Python", "Django", "Node.js", "PostgreSQL", "Redis"],
  ["Docker", "Linux", "Git", "Firebase", "Cloud"],
];

/**
 * Tech stack section — three columns of technology tags with an
 * idle glow animation that pulses every few seconds.
 */
export default function TechStackSection() {
  const t = useTranslation();
  const headerRef = useReveal();
  const gridRef = useReveal();
  const [idleGlow, setIdleGlow] = useState(false);

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    let mounted = true;
    const cycle = () => {
      id = setTimeout(() => {
        if (!mounted) return;
        setIdleGlow(true);
        id = setTimeout(() => {
          if (!mounted) return;
          setIdleGlow(false);
          cycle();
        }, 700);
      }, 3000 + Math.random() * 2000);
    };
    cycle();
    return () => {
      mounted = false;
      clearTimeout(id);
    };
  }, []);

  return (
    <section id="tech-stack" aria-label="Tech Stack" className="relative bg-primary overflow-hidden fade-to-surface">
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <Container>
        <div className="relative z-10 py-24 sm:py-32">
          {/* Header */}
          <div ref={headerRef} className="reveal max-w-2xl mb-10 sm:mb-14">
            <p className="text-base font-semibold uppercase tracking-widest text-accent mb-4 glow-text">
              {t.techStack.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              {t.techStack.heading}
            </h2>
            <p className="mt-4 text-base text-secondary/50 leading-relaxed">
              {t.techStack.sub}
            </p>
          </div>

          {/* Tech grid */}
          <div ref={gridRef} className="reveal grid grid-cols-1 gap-12 sm:gap-16 sm:grid-cols-3">
            {t.techStack.categories.map((category, i) => (
              <div
                key={category}
                style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <h3 className="text-base font-semibold uppercase tracking-widest text-accent/30 mb-5">
                  {category}
                </h3>
                <ul className="flex flex-col gap-3">
                  {techItems[i].map((tech, j) => (
                    <li
                      key={tech}
                      className={`group flex items-center gap-3 rounded-lg px-4 py-2.5 text-base font-medium text-secondary/40 cursor-default transition-all duration-500 hover:-translate-y-px hover:text-secondary/80 hover:bg-accent/[6%] ${
                        idleGlow
                          ? "bg-accent/[3%] shadow-[0_0_8px_rgba(0,212,255,0.05)]"
                          : "bg-transparent"
                      }`}
                      style={{ "--delay": `${i * 100 + j * 40}ms` } as React.CSSProperties}
                    >
                      <span
                        className="h-1 w-1 rounded-full bg-accent/40 flex-shrink-0 transition-all duration-500 group-hover:bg-accent/70"
                        aria-hidden="true"
                      />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
