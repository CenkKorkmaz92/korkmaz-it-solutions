"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";

/**
 * Static metadata for each project card — GitHub/live URLs, technology tags, and preview images.
 * Order must match the `t.projects.items` array in translations.
 * Place screenshots in /public/images/projects/ named e.g. portfolio-preview-1.webp
 */
type ProjectType = "web" | "software";

const projectsMeta: {
  type: ProjectType;
  tags: string[];
  liveHref: string;
  comingSoon: boolean;
  ownProduct?: boolean;
  previews: string[];
  altTexts: string[];
}[] = [
  {
    type: "web",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    liveHref: "https://korkmaz-it-solutions.com/projects/portfolio/",
    comingSoon: false,
    previews: [
      "/images/projects/portfolio-preview-1.webp",
      "/images/projects/portfolio-preview-2.webp",
      "/images/projects/portfolio-preview-3.webp",
    ],
    altTexts: [
      "Responsive Portfolio-Website für Freelancer – Webentwicklung mit React und TypeScript",
      "Portfolio-Website Screenshot – moderne Projektdarstellung für Selbstständige",
      "Portfolio-Website Mobilansicht – Webentwicklung Region Stuttgart",
    ],
  },
  {
    type: "web",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveHref: "https://korkmaz-it-solutions.com/projects/online-cv/",
    comingSoon: false,
    previews: [
      "/images/projects/cv-preview-1.webp",
      "/images/projects/cv-preview-2.webp",
      "/images/projects/cv-preview-3.webp",
    ],
    altTexts: [
      "Online-Lebenslauf Website mit Next.js – professionelle Bewerbungspräsenz",
      "Digitaler CV Screenshot – moderne Alternative zum PDF-Lebenslauf",
      "Online CV Mobilansicht – Webentwicklung mit Next.js und TypeScript",
    ],
  },
  {
    type: "web",
    tags: ["Angular", "TypeScript", "SCSS", "RxJS"],
    liveHref: "https://korkmaz-it-solutions.com/projects/madame_pearls/",
    comingSoon: true,
    previews: [
      "/images/projects/madame-pearls-preview-1.webp",
      "/images/projects/madame-pearls-preview-2.webp",
      "/images/projects/madame-pearls-preview-3.webp",
    ],
    altTexts: [
      "Madame Pearls Schmuck-Website – mehrsprachige Produktpräsentation mit Angular",
      "Madame Pearls Website Screenshot – internationale Schmuckmarke, Webentwicklung Stuttgart",
      "Madame Pearls Detailansicht – responsive Webentwicklung mit TypeScript",
    ],
  },
  {
    type: "web",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveHref: "https://korkmaz-it-solutions.com/projects/mr_ink_tattoo/",
    comingSoon: false,
    previews: [
      "/images/projects/mr-ink-preview-1.webp",
      "/images/projects/mr-ink-preview-2.webp",
      "/images/projects/mr-ink-preview-3.webp",
    ],
    altTexts: [
      "Mr. Ink Tattoo Studio Website – lokale Gewerbewebsite mit React, Webentwicklung Rems-Murr-Kreis",
      "Mr. Ink Tattoo Website Screenshot – Portfolio-Darstellung für Tattoo-Künstler",
      "Mr. Ink Tattoo Mobilansicht – responsive Webentwicklung für kleine Unternehmen",
    ],
  },
  {
    type: "software",
    tags: ["Tauri", "React", "TypeScript", "SQLite", "Rust"],
    liveHref: "",
    comingSoon: true,
    ownProduct: true,
    previews: [
      "/images/projects/accounting-demo-1.webp",
      "/images/projects/accounting-demo-2.webp",
      "/images/projects/accounting-demo-3.webp",
    ],
    altTexts: [
      "Buchhaltungs-App für Freelancer – Desktop-Software mit Tauri, React und SQLite",
      "Buchhaltungssoftware Screenshot – Rechnungen und EÜR für Einzelunternehmer",
      "Buchhaltungs-App Auswertung – lokale Software ohne Cloud, entwickelt in Deutschland",
    ],
  },
];

const SLIDE_INTERVAL = 5000;

function PreviewSlider({ previews, altTexts, title, onImageClick }: { previews: string[]; altTexts: string[]; title: string; onImageClick?: (index: number) => void }) {
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
    <div
      className={`relative w-full h-full${onImageClick ? " cursor-zoom-in" : ""}`}
      onClick={onImageClick ? () => onImageClick(current) : undefined}
      role={onImageClick ? "button" : undefined}
      aria-label={onImageClick ? `${title} vergrößern` : undefined}
    >
      {previews.map((src, i) => {
        const isActive = i === current;
        const isPrev = i === prev;
        return (
          <Image
            key={src}
            src={src}
            alt={altTexts[i] ?? `${title} preview ${i + 1}`}
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
            onClick={(e) => { e.stopPropagation(); handleDot(i); }}
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

/** Lightbox modal for full-size screenshot viewing. */
function Lightbox({ previews, altTexts, title, initialIndex, onClose }: { previews: string[]; altTexts: string[]; title: string; initialIndex: number; onClose: () => void }) {
  const [current, setCurrent] = useState(initialIndex);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % previews.length);
    if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + previews.length) % previews.length);
  }, [onClose, previews.length]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Schließen"
          className="absolute -top-10 right-0 text-secondary/50 hover:text-secondary transition-colors text-2xl font-light leading-none"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
          <Image
            src={previews[current]}
            alt={altTexts[current] ?? `${title} screenshot ${current + 1}`}
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
            priority
          />
        </div>

        {/* Nav */}
        {previews.length > 1 && (
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => setCurrent((c) => (c - 1 + previews.length) % previews.length)}
              className="px-4 py-2 rounded-md border border-accent/20 text-accent/60 hover:text-accent hover:border-accent/50 transition-all"
            >
              ←
            </button>
            <div className="flex gap-2">
              {previews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Screenshot ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-accent/30 w-3"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % previews.length)}
              className="px-4 py-2 rounded-md border border-accent/20 text-accent/60 hover:text-accent hover:border-accent/50 transition-all"
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


export default function ProjectsSection() {
  const t = useTranslation();
  const headerRef = useReveal();
  const gridRef = useReveal<HTMLUListElement>(0.04);
  const [activeTab, setActiveTab] = useState<ProjectType>("web");
  const [lightbox, setLightbox] = useState<{ previews: string[]; altTexts: string[]; title: string; index: number } | null>(null);

  const visibleItems = t.projects.items
    .map((project, i) => ({ project, meta: projectsMeta[i] }))
    .filter(({ meta }) => meta.type === activeTab);

  return (
    <>
    {lightbox && (
      <Lightbox
        previews={lightbox.previews}
        altTexts={lightbox.altTexts}
        title={lightbox.title}
        initialIndex={lightbox.index}
        onClose={() => setLightbox(null)}
      />
    )}
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

          {/* Tab toggle */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab("web")}
              className={`relative px-5 py-2 rounded-md text-base font-semibold transition-all duration-150 border ${
                activeTab === "web"
                  ? "bg-accent/15 border-accent/50 text-accent"
                  : "bg-transparent border-accent/15 text-secondary/40 hover:border-accent/30 hover:text-secondary/60"
              }`}
            >
              {activeTab !== "web" && (
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
              )}
              {t.projects.tabWeb}
            </button>
            <button
              onClick={() => setActiveTab("software")}
              className={`relative px-5 py-2 rounded-md text-base font-semibold transition-all duration-150 border ${
                activeTab === "software"
                  ? "bg-accent/15 border-accent/50 text-accent"
                  : "bg-transparent border-accent/15 text-secondary/40 hover:border-accent/30 hover:text-secondary/60"
              }`}
            >
              {activeTab !== "software" && (
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
              )}
              {t.projects.tabSoftware}
            </button>
          </div>

          <ul ref={gridRef} className="reveal grid grid-cols-1 gap-6">
            {visibleItems.map(({ project, meta }) => (
                <li
                  key={project.title}
                  className="group/card cyber-card flex flex-col lg:flex-row rounded-xl hover:-translate-y-1 transition-transform duration-200 ease-out"
                >
                  {/* Content — left side */}
                  <div className="flex-1 flex flex-col justify-between p-7">
                    <div>
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <h3 className="text-base font-semibold text-secondary link-underline w-fit group-hover/card:after:w-full">
                          {project.title}
                        </h3>
                        {meta.ownProduct && (
                          <span className="text-xs font-semibold uppercase tracking-widest border border-accent/30 text-accent/70 px-2 py-0.5 rounded-sm">
                            {t.projects.ownProduct}
                          </span>
                        )}
                      </div>
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
                      {meta.previews.length > 0 && meta.type === "software" && (
                        <button
                          onClick={() => setLightbox({ previews: meta.previews, altTexts: meta.altTexts, title: project.title, index: 0 })}
                          className="inline-flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent/10 px-3 py-1.5 text-base font-semibold text-accent hover:bg-accent/20 hover:border-accent/60 transition-all duration-150"
                        >
                          {t.projects.viewScreenshots}
                        </button>
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
                  {meta.previews.length > 0 ? (
                  <div className="relative lg:w-80 lg:shrink-0 h-52 lg:h-auto border-t lg:border-t-0 lg:border-l border-accent/10 overflow-hidden bg-primary">
                    <PreviewSlider
                      previews={meta.previews}
                      altTexts={meta.altTexts}
                      title={project.title}
                      onImageClick={meta.type === "software" ? (index) => setLightbox({ previews: meta.previews, altTexts: meta.altTexts, title: project.title, index }) : undefined}
                    />
                  </div>
                  ) : (
                  <div
                    className="relative lg:w-80 lg:shrink-0 h-52 lg:h-auto border-t lg:border-t-0 lg:border-l border-accent/10 overflow-hidden flex items-center justify-center"
                    style={{ background: "repeating-linear-gradient(45deg, #080c18 0px, #080c18 12px, #0d1220 12px, #0d1220 24px)" }}
                  >
                    <span className="text-accent/25 text-xs font-semibold uppercase tracking-widest px-4 text-center">Screenshots coming soon</span>
                  </div>
                  )}
                </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
    </>
  );
}
