import Container from "@/components/layout/Container";

const services = [
  {
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks. From landing pages to complex platforms — fast, accessible and built to scale.",
  },
  {
    title: "IT Consulting",
    description:
      "Strategic guidance on technology decisions, architecture and digital transformation. We help you choose the right tools and build the right systems.",
  },
  {
    title: "Automation Solutions",
    description:
      "Eliminate repetitive workflows with tailored automation. We build integrations and internal tools that save time and reduce operational overhead.",
  },
  {
    title: "Hosting & Deployment",
    description:
      "Reliable, secure deployment pipelines and cloud infrastructure. We handle CI/CD, server configuration and monitoring so you can focus on your product.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" aria-label="Services" className="bg-secondary">
      <Container>
        <div className="py-24 sm:py-32">
          {/* Header */}
          <div className="max-w-2xl mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              What We Offer
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Services Built Around Your Business
            </h2>
            <p className="mt-4 text-base text-primary/60 leading-relaxed">
              We deliver focused, high-quality IT services — no unnecessary
              complexity, no bloated scope. Just the right solution for your
              needs.
            </p>
          </div>

          {/* Service cards */}
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <li
                key={service.title}
                className="flex flex-col gap-4 rounded-xl border border-primary/8 bg-white p-7 shadow-sm"
              >
                <h3 className="text-base font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="text-sm text-primary/60 leading-relaxed">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

