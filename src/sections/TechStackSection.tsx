import Container from "@/components/layout/Container";

const techCategories = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular"],
  },
  {
    category: "Backend",
    items: ["Python", "Django", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Linux", "Git", "Firebase", "Cloud"],
  },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" aria-label="Tech Stack" className="bg-primary">
      <Container>
        <div className="py-24 sm:py-32">
          {/* Header */}
          <div className="max-w-2xl mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Technology
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Built with the Right Tools
            </h2>
            <p className="mt-4 text-base text-secondary/60 leading-relaxed">
              We work with a modern, proven technology stack — chosen for
              reliability, performance and long-term maintainability.
            </p>
          </div>

          {/* Tech grid */}
          <div className="grid grid-cols-1 gap-12 sm:gap-16 sm:grid-cols-3">
            {techCategories.map(({ category, items }) => (
              <div key={category}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-secondary/30 mb-5">
                  {category}
                </h3>
                <ul className="flex flex-col gap-3">
                  {items.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-3 text-sm font-medium text-secondary/80"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"
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

