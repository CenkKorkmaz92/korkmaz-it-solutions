"use client";

import Container from "@/components/layout/Container";
import { useTranslation } from "@/hooks/useTranslation";
import { useReveal } from "@/hooks/useReveal";

export default function ServicesSection() {
  const t = useTranslation();
  const headerRef = useReveal();
  const gridRef = useReveal();
  return (
    <section id="services" aria-label="Services" className="bg-secondary">
      <Container>
        <div className="py-24 sm:py-32">
          {/* Header */}
          <div ref={headerRef} className="reveal max-w-2xl mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              {t.services.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {t.services.heading}
            </h2>
            <p className="mt-4 text-base text-primary/60 leading-relaxed">
              {t.services.sub}
            </p>
          </div>

          {/* Service cards */}
          <ul ref={gridRef} className="reveal grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((service, i) => (
              <li
                key={service.title}
                className="flex flex-col gap-4 rounded-xl border border-primary/8 bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-accent/20 transition-all duration-200 ease-out"
                style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
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
