"use client";

import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";

const techItems = [
  ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular"],
  ["Python", "Django", "Node.js", "PostgreSQL", "Redis"],
  ["Docker", "Linux", "Git", "Firebase", "Cloud"],
];

export default function TechStackSection() {
  const t = useTranslation();
  const headerRef = useReveal();
  const gridRef = useReveal();
  return (
    <section id="tech-stack" aria-label="Tech Stack" className="bg-primary">
      <Container>
        <div className="py-24 sm:py-32">
          {/* Header */}
          <div ref={headerRef} className="reveal max-w-2xl mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              {t.techStack.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              {t.techStack.heading}
            </h2>
            <p className="mt-4 text-base text-secondary/60 leading-relaxed">
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
                <h3 className="text-xs font-semibold uppercase tracking-widest text-secondary/30 mb-5">
                  {category}
                </h3>
                <ul className="flex flex-col gap-3">
                  {techItems[i].map((tech, j) => (
                    <li
                      key={tech}
                      className="group flex items-center gap-3 rounded-lg border border-secondary/10 bg-secondary/5 px-4 py-2.5 text-sm font-medium text-secondary/80 hover:border-accent/40 hover:bg-accent/5 hover:text-secondary hover:-translate-y-px cursor-default transition-all duration-150"
                      style={{ "--delay": `${i * 100 + j * 40}ms` } as React.CSSProperties}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 group-hover:scale-125 transition-transform duration-150"
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
