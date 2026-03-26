"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";

/**
 * Static metadata for each project card — GitHub/live URLs, technology tags, and preview images.
 * Order must match the `t.projects.items` array in translations.
 * Place screenshots in /public/images/projects/ named e.g. portfolio-preview-1.webp
 */
const projectsMeta = [
  {
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    liveHref: "https://korkmaz-it-solutions.com/projects/portfolio/",
    comingSoon: false,
    previews: [
      "/images/projects/portfolio-preview-1.webp",
      "/images/projects/portfolio-preview-2.webp",
      "/images/projects/portfolio-preview-3.webp",
    ],
  },
  {
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveHref: "https://korkmaz-it-solutions.com/projects/bilal-cevik/",
    comingSoon: false,
    previews: [
      "/images/projects/cv-preview-1.webp",
      "/images/projects/cv-preview-2.webp",
      "/images/projects/cv-preview-3.webp",
    ],
  },
  {
    tags: ["Angular", "TypeScript", "SCSS", "RxJS"],
    liveHref: "https://korkmaz-it-solutions.com/projects/madame_pearls/",
    comingSoon: true,
    previews: [
      "/images/projects/madame-pearls-preview-1.webp",
      "/images/projects/madame-pearls-preview-2.webp",
      "/images/projects/madame-pearls-preview-3.webp",
    ],
  },
  {
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveHref: "https://korkmaz-it-solutions.com/projects/mr_ink_tattoo/",
    comingSoon: false,
    previews: [
      "/images/projects/mr-ink-preview-1.webp",
      "/images/projects/mr-ink-preview-2.webp",
      "/images/projects/mr-ink-preview-3.webp",
    ],
  },
];

const SLIDE_INTERVAL = 5000;

function PreviewSlider({ previews, title }: { previews: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % previews.length;
      });
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [previews.length]);

  const handleDot = (i: number) => {
    setPrev(current);
    setCurrent(i);
  };

  return (
    <div className="relative w-full h-full">
      {previews.map((src, i) => {
        const isActive = i === current;
        const isPrev = i === prev;
        return (
          <Image
            key={src}
            src={src}
            alt={`${title} preview ${i + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 320px"
            className="object-cover object-top"
            style={{
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
              transition: isActive ? "opacity 1000ms ease-in-out" : "opacity 1000ms ease-in-out",
            }}
          />
        );
      })}
      {/* Dot indicators */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5" style={{ zIndex: 3 }}>
        {previews.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            aria-label={`Show preview ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-accent w-3" : "bg-accent/30 w-1.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/** Projects section — grid of project cards with tags, GitHub and live links. */
export default function ProjectsSection() {
  const t = useTranslation();
  const headerRef = useReveal();
  const gridRef = useReveal<HTMLUListElement>(0.04);
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

          <ul ref={gridRef} className="reveal grid grid-cols-1 gap-6">
            {t.projects.items.map((project, i) => {
              const meta = projectsMeta[i];
              return (
                <li
                  key={project.title}
                  className="group/card cyber-card flex flex-col lg:flex-row rounded-xl hover:-translate-y-1 transition-transform duration-200 ease-out"
                  style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
                >
                  {/* Content — left side */}
                  <div className="flex-1 flex flex-col justify-between p-7">
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
                  </div>

                  {/* Preview — right side */}
                  <div className="relative lg:w-80 lg:shrink-0 h-52 lg:h-auto border-t lg:border-t-0 lg:border-l border-accent/10 overflow-hidden bg-primary">
                    <PreviewSlider previews={meta.previews} title={project.title} />
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
