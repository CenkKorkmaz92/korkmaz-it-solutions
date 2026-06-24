import Placeholder from "@/components/legal/Placeholder";

export default function ImpressumEn() {
  return (
    <>
      {/* Authoritative version notice */}
      <section className="rounded-lg border border-accent/20 bg-accent/5 p-5">
        <p className="text-base text-primary/70 leading-relaxed">
          <span className="font-semibold text-primary">Note:</span> This Legal Notice fulfils a
          requirement of German law (§ 5 DDG / § 18 Abs. 2 MStV). The{" "}
          <strong className="text-primary">German version</strong> is the sole legally binding
          version. The English text below is provided for informational purposes only.
        </p>
      </section>

      {/* Service provider — § 5 DDG */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Service Provider — § 5 DDG
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-2">
          <p>Cenk Korkmaz</p>
          <p>Korkmaz IT Solutions</p>
          <p>Kleinhöchbergerstraße 45</p>
          <p>71560 Sulzbach an der Murr</p>
          <p>Germany</p>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Contact
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-2">
          <p>
            <span className="text-primary/50">Phone:</span>{" "}
            <span className="text-primary/70 select-all">+49 177 3613007</span>
          </p>
          <p>
            <span className="text-primary/50">Email:</span>{" "}
            <span className="text-primary/70 select-all">info@korkmaz-it-solutions.com</span>
          </p>
        </div>
      </section>

      {/* Responsible for content */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Person Responsible for Content — § 18 (2) MStV
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-2">
          <p>Cenk Korkmaz</p>
          <p>Korkmaz IT Solutions</p>
          <p>Kleinhöchbergerstraße 45</p>
          <p>71560 Sulzbach an der Murr</p>
        </div>
      </section>

      {/* Disclaimer */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Disclaimer
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-base font-semibold text-primary mb-2">Liability for content</h3>
            <p className="text-base text-primary/70 leading-relaxed">
              As a service provider I am responsible for my own content on these pages in
              accordance with § 1 (1) DDG and general law. According to §§ 4 to 7 DDG, however,
              I am not obligated as a service provider to monitor transmitted or stored
              third-party information or to investigate circumstances that indicate illegal
              activity. Obligations to remove or block the use of information under general law
              remain unaffected by this.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-primary mb-2">Liability for links</h3>
            <p className="text-base text-primary/70 leading-relaxed">
              My website contains links to external third-party websites over whose content I
              have no influence. I therefore cannot accept any liability for this external
              content. The respective provider or operator of the pages is always responsible for
              the content of linked pages. If I become aware of any legal infringements, I will
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
        <p className="text-base text-primary/70 leading-relaxed">
          The content and works created by the site operator on these pages are subject to German
          copyright law. Reproduction, editing, distribution and any kind of exploitation outside
          the limits of copyright require the written consent of the operator.
          Downloads and copies of this site are only permitted for private, non-commercial use.
        </p>
      </section>
    </>
  );
}
