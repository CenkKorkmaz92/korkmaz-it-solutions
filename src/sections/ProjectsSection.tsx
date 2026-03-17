"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";

/**
 * Static metadata for each project card — GitHub/live URLs and technology tags.
 * Order must match the `t.projects.items` array in translations.
 */
const projectsMeta = [
  { tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"], href: "https://github.com/CenkKorkmaz92/my_portfolio", liveHref: "https://korkmaz-it-solutions.com/projects/portfolio/", comingSoon: false },
  { tags: ["Django", "Python", "JavaScript", "Docker", "Redis"], href: "https://github.com/CenkKorkmaz92/videoflix_DA", liveHref: null, comingSoon: false },
  { tags: ["Angular", "TypeScript", "SCSS", "RxJS"], href: "https://github.com/CenkKorkmaz92/madame_pearls_2.0", liveHref: "https://korkmaz-it-solutions.com/projects/madame_pearls/", comingSoon: true },
  { tags: ["React", "TypeScript", "Vite", "Tailwind CSS"], href: "https://github.com/CenkKorkmaz92/mr.ink_tatto_homepage", liveHref: "https://korkmaz-it-solutions.com/projects/mr_ink_tattoo/", comingSoon: false },
];

/** Projects section — grid of project cards with tags, GitHub and live links. */
export default function ProjectsSection() {
  const t = useTranslation();
  const headerRef = useReveal();
  const gridRef = useReveal<HTMLUListElement>();
  return (
    <section id="projects" aria-label="Projects" className="relative bg-surface overflow-hidden fade-to-surface">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <Container>
        <div className="relative z-10 py-24 sm:py-32">
          {/* Header */}
          <div ref={headerRef} className="reveal max-w-2xl mb-10 sm:mb-14">
            <p className="text-base font-semibold uppercase tracking-widest text-accent mb-4 glow-text">
              {t.projects.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              {t.projects.heading}
            </h2>
            <p className="mt-4 text-base text-secondary/50 leading-relaxed">
              {t.projects.sub}
            </p>
          </div>

          <ul ref={gridRef} className="reveal grid grid-cols-1 gap-6 md:grid-cols-2">
            {t.projects.items.map((project, i) => {
              const meta = projectsMeta[i];
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
                    <p className="text-base text-secondary/50 leading-relaxed">
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
                          className="cyber-bracket rounded-sm border border-accent/15 bg-accent/5 px-3 py-1 text-base font-medium text-accent/60 hover:border-accent/40 hover:text-accent transition-all duration-150"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-5 border-t border-accent/10 flex items-center gap-5 flex-wrap">
                    <Link
                      href={meta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-base font-semibold text-accent hover:text-accent/80 transition-colors"
                      aria-label={`${t.projects.viewOnGitHub}: ${project.title}`}
                    >
                      {t.projects.viewOnGitHub}
                      <span aria-hidden="true" className="inline-block transition-transform duration-150 group-hover:translate-x-1">&rarr;</span>
                    </Link>

                    {meta.liveHref && (
                      <Link
                        href={meta.liveHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent/10 px-3 py-1.5 text-base font-semibold text-accent hover:bg-accent/20 hover:border-accent/60 transition-all duration-150"
                        aria-label={`${t.projects.viewLive}: ${project.title}`}
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        {t.projects.viewLive}
                      </Link>
                    )}
                    {meta.comingSoon && (
                      <span
                        className="inline-flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-base font-bold text-yellow-300 uppercase tracking-wide"
                        style={{
                          background: "repeating-linear-gradient(45deg, #1a1a1a 0px, #1a1a1a 8px, #854d0e 8px, #854d0e 16px)",
                          textShadow: "0 1px 3px rgba(0,0,0,0.9)",
                        }}
                      >
                        {t.projects.comingSoon}
                      </span>
                    )}
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
