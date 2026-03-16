import Link from "next/link";
import Container from "@/components/layout/Container";

interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  actionLabel: string;
}

const projects: Project[] = [
  {
    title: "Coderr",
    description:
      "A RESTful backend for a freelance marketplace — user authentication, project listings, bidding logic and profile management. Designed with an API-first architecture, cleanly separated from any frontend client.",
    tags: ["Python", "Django REST Framework", "PostgreSQL", "JWT"],
    href: "#", // TODO: replace with GitHub or live URL
    actionLabel: "View on GitHub",
  },
  {
    title: "VideoFlix",
    description:
      "A full-stack video streaming platform with user registration, subscription management and adaptive video delivery. Includes chunked upload handling and a background processing pipeline for video encoding.",
    tags: ["Django", "Python", "JavaScript", "Docker", "PostgreSQL", "Redis"],
    href: "#", // TODO: replace with GitHub or live URL
    actionLabel: "View on GitHub",
  },
  {
    title: "Madame Pearls",
    description:
      "A polished multilingual presentation website for a jewellery brand — responsive across all devices, localisation-ready and structured for straightforward content updates without developer involvement.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "#", // TODO: replace with live URL
    actionLabel: "View Live",
  },
  {
    title: "Mr. Ink Tattoo",
    description:
      "An atmospheric homepage for a tattoo artist — designed to showcase portfolio work, communicate the studio's aesthetic and convert visitors into appointment bookings.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "#", // TODO: replace with live URL
    actionLabel: "View Live",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" aria-label="Projects" className="bg-secondary">
      <Container>
        <div className="py-24 sm:py-32">
          {/* Header */}
          <div className="max-w-2xl mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Selected Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Projects We Are Proud Of
            </h2>
            <p className="mt-4 text-base text-primary/60 leading-relaxed">
              A selection of real projects across full-stack development, REST
              API design and frontend engineering — each built to solve a
              concrete problem.
            </p>
          </div>

          {/* Project cards */}
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <li
                key={project.title}
                className="flex flex-col justify-between rounded-xl border border-primary/8 bg-white p-7 shadow-sm"
              >
                <div>
                  <h3 className="text-base font-semibold text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary/60 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <ul
                    className="mt-5 flex flex-wrap gap-2"
                    aria-label="Technologies used"
                  >
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary/50"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action */}
                <div className="mt-8 pt-5 border-t border-primary/8">
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                    aria-label={`${project.actionLabel}: ${project.title}`}
                  >
                    {project.actionLabel}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

