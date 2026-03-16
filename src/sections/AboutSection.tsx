import Container from "@/components/layout/Container";

const values = [
  {
    label: "Full-stack expertise",
    detail:
      "Certified in both frontend and backend development — from UI and TypeScript to server-side logic, databases and cloud infrastructure.",
  },
  {
    label: "Direct collaboration",
    detail:
      "You work directly with the founder, not an account manager. No handoffs, no miscommunication.",
  },
  {
    label: "Long-term thinking",
    detail:
      "We build for sustainability. The goal is software that is easy to extend, maintain and hand over.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" aria-label="About" className="bg-primary">
      <Container>
        <div className="py-24 sm:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 lg:items-start">
            {/* Left — text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                About
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
                The Person Behind the Work
              </h2>
              <div className="mt-6 space-y-4 text-base text-secondary/60 leading-relaxed">
                <p>
                  Korkmaz IT Solutions was founded by{" "}
                  <span className="text-secondary font-medium">
                    Cenk Korkmaz
                  </span>
                  , a full-stack developer with certified training in both
                  frontend and backend development — and hands-on experience
                  delivering modern web applications and IT solutions for
                  businesses.
                </p>
                <p>
                  The company was built on a straightforward principle: clients
                  deserve clear communication, honest advice and software that
                  actually solves the problem — without unnecessary complexity or
                  inflated scope.
                </p>
                <p>
                  From React and Next.js on the frontend to Python, Django,
                  PostgreSQL and Docker on the backend — every project is handled
                  end-to-end, with the same level of technical rigour and
                  personal accountability.
                </p>
              </div>

              {/* Social profiles */}
              <div className="mt-8 flex items-center gap-6">
                <a
                  href="https://github.com/CenkKorkmaz92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-secondary/50 hover:text-accent transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/cenk-korkmaz-2731072a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-secondary/50 hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right — values */}
            <div className="flex flex-col gap-8">
              {values.map(({ label, detail }) => (
                <div key={label} className="flex gap-5">
                  <span
                    className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-secondary mb-1">
                      {label}
                    </p>
                    <p className="text-sm text-secondary/60 leading-relaxed">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

