import Link from "next/link";
import Container from "@/components/layout/Container";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="bg-primary text-secondary"
    >
      <Container>
        <div className="py-24 sm:py-32 lg:py-40">
          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">
            Web Development &amp; IT Solutions
          </p>

          {/* Headline */}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            Building Digital Products{" "}
            <span className="text-accent">That Work for Your Business</span>
          </h1>

          {/* Supporting copy */}
          <p className="mt-6 max-w-xl text-base sm:text-lg text-secondary/60 leading-relaxed">
            We design and develop modern, scalable web applications and IT
            solutions — built with precision, delivered on time, and engineered
            to grow with your business.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-primary hover:bg-accent/90 transition-colors sm:w-auto sm:py-3"
            >
              Get in Touch
            </Link>
            <Link
              href="/#projects"
              className="inline-flex w-full items-center justify-center rounded-md border border-secondary/20 px-6 py-3.5 text-sm font-semibold text-secondary hover:border-secondary/50 hover:bg-secondary/5 transition-colors sm:w-auto sm:py-3"
            >
              View Projects
            </Link>
          </div>

          {/* Tech stack bar */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-secondary/10">
            <p className="text-xs uppercase tracking-widest text-secondary/30 mb-4">
              Technologies we work with
            </p>
            <ul className="flex flex-wrap gap-3" aria-label="Tech stack">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-secondary/10 bg-secondary/5 px-4 py-1.5 text-xs font-medium text-secondary/60"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
