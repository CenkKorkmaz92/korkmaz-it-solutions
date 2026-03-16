import Placeholder from "@/components/legal/Placeholder";

export default function ImpressumEn() {
  return (
    <>
      {/* Authoritative version notice */}
      <section className="rounded-lg border border-accent/20 bg-accent/5 p-5">
        <p className="text-sm text-primary/70 leading-relaxed">
          <span className="font-semibold text-primary">Note:</span> This Legal Notice fulfils a
          requirement of German law (§ 5 TMG / § 18 Abs. 2 MStV). The{" "}
          <strong className="text-primary">German version</strong> is the sole legally binding
          version. The English text below is provided for informational purposes only.
        </p>
      </section>

      {/* Service provider — § 5 TMG */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Service Provider — § 5 TMG
        </h2>
        <div className="text-sm text-primary/70 leading-relaxed space-y-2">
          <p><Placeholder>Full name / company name</Placeholder></p>
          <p><Placeholder>Street and house number</Placeholder></p>
          <p><Placeholder>Post code and city</Placeholder></p>
          <p>Germany</p>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Contact
        </h2>
        <div className="text-sm text-primary/70 leading-relaxed space-y-2">
          <p>
            <span className="text-primary/50">Phone:</span>{" "}
            <Placeholder>Enter phone number</Placeholder>
          </p>
          <p>
            <span className="text-primary/50">Email:</span>{" "}
            <a href="mailto:info@korkmaz-it-solutions.com" className="text-accent hover:underline">
              info@korkmaz-it-solutions.com
            </a>
          </p>
        </div>
      </section>

      {/* Professional regulations */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Professional Regulations
        </h2>
        <div className="text-sm text-primary/70 leading-relaxed space-y-2">
          <p>
            <span className="text-primary/50">Professional title:</span>{" "}
            <Placeholder>e.g. Freelance IT Consultant / Software Developer</Placeholder>
          </p>
          <p>
            <span className="text-primary/50">Competent chamber:</span>{" "}
            <Placeholder>if applicable — otherwise remove this section</Placeholder>
          </p>
        </div>
      </section>

      {/* VAT */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          VAT Identification Number
        </h2>
        <p className="text-sm text-primary/70 leading-relaxed">
          <Placeholder>VAT ID pursuant to § 27a German VAT Act — if applicable, otherwise remove this section</Placeholder>
        </p>
      </section>

      {/* Responsible for content */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Person Responsible for Content — § 18 (2) MStV
        </h2>
        <div className="text-sm text-primary/70 leading-relaxed space-y-2">
          <p><Placeholder>Name of responsible person</Placeholder></p>
          <p><Placeholder>Address — if different from above</Placeholder></p>
        </div>
      </section>

      {/* Disclaimer */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Disclaimer
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-primary mb-2">Liability for content</h3>
            <p className="text-sm text-primary/70 leading-relaxed">
              As a service provider we are responsible for our own content on these pages in
              accordance with § 7 (1) TMG and general law. According to §§ 8 to 10 TMG, however,
              we are not obligated as a service provider to monitor transmitted or stored
              third-party information or to investigate circumstances that indicate illegal
              activity. Obligations to remove or block the use of information under general law
              remain unaffected by this.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary mb-2">Liability for links</h3>
            <p className="text-sm text-primary/70 leading-relaxed">
              Our website contains links to external third-party websites over whose content we
              have no influence. We therefore cannot accept any liability for this external
              content. The respective provider or operator of the pages is always responsible for
              the content of linked pages. If we become aware of any legal infringements, we will
              remove such links immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Copyright
        </h2>
        <p className="text-sm text-primary/70 leading-relaxed">
          The content and works created by the site operators on these pages are subject to German
          copyright law. Reproduction, editing, distribution and any kind of exploitation outside
          the limits of copyright require the written consent of the respective author or creator.
          Downloads and copies of this site are only permitted for private, non-commercial use.
        </p>
      </section>
    </>
  );
}
