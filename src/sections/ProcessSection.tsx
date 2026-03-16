import Container from "@/components/layout/Container";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a structured conversation about your goals, constraints and existing systems. This defines the scope, clarifies requirements and ensures we are solving the right problem before writing a single line of code.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Work is carried out in clear, reviewable stages. You stay informed throughout — no black-box development. Code is written to a high standard, tested and documented as we go.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Delivery includes deployment, final review and a handover that leaves you in full control. We make sure everything works as expected and that you understand what has been built.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" aria-label="Process" className="bg-secondary">
      <Container>
        <div className="py-24 sm:py-32">
          {/* Header */}
          <div className="max-w-2xl mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              How We Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              A Clear Process from Start to Finish
            </h2>
            <p className="mt-4 text-base text-primary/60 leading-relaxed">
              No surprises, no scope creep. Every project follows a focused
              three-step process that keeps things transparent and on track.
            </p>
          </div>

          {/* Steps */}
          <ol className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-10">
            {steps.map(({ number, title, description }) => (
              <li key={number} className="flex flex-col gap-5">
                {/* Step number */}
                <span className="text-5xl font-bold text-accent/20 leading-none select-none">
                  {number}
                </span>

                {/* Divider */}
                <div className="h-px w-12 bg-accent/40" aria-hidden="true" />

                {/* Content */}
                <div>
                  <h3 className="text-base font-semibold text-primary mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-primary/60 leading-relaxed">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

