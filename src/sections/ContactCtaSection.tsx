import Link from "next/link";
import Container from "@/components/layout/Container";

export default function ContactCtaSection() {
  return (
    <section id="contact" aria-label="Contact" className="bg-primary">
      <Container>
        <div className="py-24 sm:py-32">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Get Started
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Ready to Build Something?
            </h2>
            <p className="mt-4 text-base text-secondary/60 leading-relaxed max-w-xl">
              Whether you have a clear brief or just an idea — get in touch and
              we will figure out the right path forward together. No obligation,
              no sales pitch.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="mailto:info@korkmaz-it-solutions.com"
                className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-primary hover:bg-accent/90 transition-colors sm:w-auto sm:py-3"
              >
                Get in Touch
              </a>
              <Link
                href="/#services"
                className="inline-flex w-full items-center justify-center rounded-md border border-secondary/20 px-6 py-3.5 text-sm font-semibold text-secondary hover:border-secondary/50 hover:bg-secondary/5 transition-colors sm:w-auto sm:py-3"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

