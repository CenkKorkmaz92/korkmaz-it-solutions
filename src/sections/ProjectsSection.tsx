"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";

const projectsMeta = [
  { tags: ["Python", "Django REST Framework", "PostgreSQL", "JWT"], href: "#", actionKey: "viewOnGitHub" as const },
  { tags: ["Django", "Python", "JavaScript", "Docker", "PostgreSQL", "Redis"], href: "#", actionKey: "viewOnGitHub" as const },
  { tags: ["HTML", "CSS", "JavaScript"], href: "#", actionKey: "viewLive" as const },
  { tags: ["HTML", "CSS", "JavaScript"], href: "#", actionKey: "viewLive" as const },
];

export default function ProjectsSection() {
  const t = useTranslation();
  const headerRef = useReveal();
  const gridRef = useReveal();
  return (
    <section id="projects" aria-label="Projects" className="relative bg-surface overflow-hidden fade-to-primary">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <Container>
        <div className="relative z-10 py-24 sm:py-32">
          {/* Header */}
          <div ref={headerRef} className="reveal max-w-2xl mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 glow-text">
              {t.projects.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              {t.projects.heading}
            </h2>
            <p className="mt-4 text-base text-secondary/50 leading-relaxed">
              {t.projects.sub}
            </p>
          </div>

          {/* Project cards */}
          <ul ref={gridRef} className="reveal grid grid-cols-1 gap-6 md:grid-cols-2">
            {t.projects.items.map((project, i) => {
              const meta = projectsMeta[i];
              const actionLabel =
                meta.actionKey === "viewOnGitHub"
                  ? t.projects.viewOnGitHub
                  : t.projects.viewLive;
              return (
                <li
                  key={project.title}
                  className="group/card cyber-card flex flex-col justify-between rounded-xl p-7 hover:-translate-y-1 transition-all duration-200 ease-out"
                  style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
                >
                  <div>
                    <h3 className="text-base font-semibold text-secondary mb-3 link-underline w-fit group-hover/card:after:w-full">
                      {project.title}
                    </h3>
                    <p className="text-sm text-secondary/50 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <ul
                      className="mt-5 flex flex-wrap gap-2"
                      aria-label="Technologies used"
                    >
                      {meta.tags.map((tag) => (
                        <li
                          key={tag}
                          className="cyber-bracket rounded-sm border border-accent/15 bg-accent/5 px-3 py-1 text-xs font-medium text-accent/60 hover:border-accent/40 hover:text-accent transition-all duration-150"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <div className="mt-8 pt-5 border-t border-accent/10">
                    <Link
                      href={meta.href}
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                      aria-label={`${actionLabel}: ${project.title}`}
                    >
                      {actionLabel}
                      <span aria-hidden="true" className="inline-block transition-transform duration-150 group-hover:translate-x-1">&rarr;</span>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
