import Placeholder from "@/components/legal/Placeholder";

export default function DatenschutzEn() {
  return (
    <>
      {/* Authoritative version notice */}
      <section className="rounded-lg border border-accent/20 bg-accent/5 p-5">
        <p className="text-base text-primary/70 leading-relaxed">
          <span className="font-semibold text-primary">Note:</span> This Privacy Policy is a
          translation provided for convenience. The{" "}
          <strong>German version</strong> (<em>Datenschutzerklärung</em>) is the sole legally
          binding version.
        </p>
      </section>

      {/* 1. Controller */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          1. Controller
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-2">
          <p>Cenk Korkmaz</p>
          <p>Kleinhöchbergerstraße 45</p>
          <p>71560 Sulzbach an der Murr</p>
          <p>
            Email:{" "}
            <a href="mailto:info@korkmaz-it-solutions.com" className="text-accent hover:underline">
              info@korkmaz-it-solutions.com
            </a>
          </p>
        </div>
      </section>

      {/* 2. Server log files */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          2. Server Log Files
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-3">
          <p>
            When you visit this website, the web server automatically collects general
            information (server log files), including: browser type and version, operating
            system, referrer URL, hostname of the accessing device, and time of the server
            request.
          </p>
          <p>
            This data cannot be attributed to any specific individual and is not merged with data
            from other sources. The legal basis for processing is Art. 6(1)(f) GDPR (legitimate
            interest in the secure and functional operation of the website). Server log files are
            managed by our hosting provider (Dogado). Information regarding retention periods can
            be requested from the hosting provider.
          </p>
        </div>
      </section>

      {/* 3. Hosting */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          3. Hosting
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-3">
          <p>
            This website is hosted by: Dogado GmbH, Saarlandstraße 25, 44139 Dortmund, Germany
          </p>
          <p>
            Processing is based on Art. 6(1)(f) GDPR (legitimate interest in reliable and secure
            operation of the website). For more information about data protection at Dogado,
            please visit:{" "}
            <a href="https://www.dogado.de/datenschutz" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              www.dogado.de/datenschutz
            </a>
          </p>
        </div>
      </section>

      {/* 4. Contact by email */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          4. Contact by Email
        </h2>
        <p className="text-base text-primary/70 leading-relaxed">
          If you contact us by email, the data you provide (your email address and the content
          of your message) will be stored to process your enquiry. We will not pass this data on
          without your consent. Processing is based on Art. 6(1)(b) GDPR if your enquiry is
          related to the performance of a contract, or on Art. 6(1)(f) GDPR based on our
          legitimate interest in effectively handling enquiries directed to us.
        </p>
      </section>

      {/* 5. Fonts */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          5. Fonts
        </h2>
        <p className="text-base text-primary/70 leading-relaxed">
          This website uses fonts from the Geist family. The font files are downloaded during
          the build process and served from our own server (self-hosting via Next.js Font
          Optimization). No connection to third-party servers takes place; Google is not
          contacted when the page is loaded.
        </p>
      </section>

      {/* 6. Cookies and tracking */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          6. Cookies and Tracking
        </h2>
        <p className="text-base text-primary/70 leading-relaxed">
          This website does not use tracking cookies, web analytics services (e.g. Google
          Analytics), or cookie consent tools (e.g. Cookiebot). Only technically necessary
          cookies required for the operation of the website are used.
        </p>
      </section>

      {/* 7. External services */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          7. External Services and Third Parties
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-3">
          <p>
            This website links to the following external services:
          </p>
          <ul className="space-y-2 list-none">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">–</span>
              <span>
                <strong>GitHub</strong> (Microsoft Corporation): Privacy policy at{" "}
                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  docs.github.com/privacy
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">–</span>
              <span>
                <strong>LinkedIn</strong> (LinkedIn Corporation): Privacy policy at{" "}
                <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  linkedin.com/legal/privacy-policy
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">–</span>
              <span>
                <strong>Personal Portfolio Website</strong> (hosted by Dogado GmbH)
              </span>
            </li>
          </ul>
          <p className="mt-3">
            When you access these external links, the respective provider's privacy policy
            applies. We have no influence over data processing by these services.
          </p>
        </div>
      </section>

      {/* 8. Your rights */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          8. Your Rights as a Data Subject
        </h2>
        <p className="text-base text-primary/70 leading-relaxed mb-4">
          Under the GDPR you have the following rights:
        </p>
        <ul className="text-base text-primary/70 leading-relaxed space-y-2 list-none">
          {[
            "Right of access to your stored data (Art. 15 GDPR)",
            "Right to rectification of inaccurate data (Art. 16 GDPR)",
            "Right to erasure of your data (Art. 17 GDPR)",
            "Right to restriction of processing (Art. 18 GDPR)",
            "Right to data portability (Art. 20 GDPR)",
            "Right to object to processing (Art. 21 GDPR)",
            "Right to lodge a complaint with a supervisory authority (Art. 77 GDPR)",
          ].map((right) => (
            <li key={right} className="flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">–</span>
              <span>{right}</span>
            </li>
          ))}
        </ul>
        <p className="text-base text-primary/70 leading-relaxed mt-4">
          To exercise your rights, please contact:{" "}
          <a href="mailto:info@korkmaz-it-solutions.com" className="text-accent hover:underline">
            info@korkmaz-it-solutions.com
          </a>
        </p>
        <div className="text-base text-primary/70 leading-relaxed mt-4">
          <p className="font-semibold text-primary mb-2">Competent supervisory authority:</p>
          <p>The State Commissioner for Data Protection and Freedom of Information Baden-Württemberg (LfDI BW)</p>
          <p>Lautenschlagerstraße 20</p>
          <p>70173 Stuttgart</p>
          <p>Germany</p>
          <p className="mt-2">
            <a href="https://www.baden-wuerttemberg.datenschutz.de/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              www.baden-wuerttemberg.datenschutz.de
            </a>
          </p>
        </div>
      </section>

      {/* 9. Currency */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          9. Currency of this Privacy Policy
        </h2>
        <p className="text-base text-primary/70 leading-relaxed">
          We reserve the right to update this Privacy Policy as necessary to comply with current
          legal requirements or to reflect changes to our services. The current version applies
          at all times.
        </p>
        <p className="text-base text-primary/50 mt-3">
          Last updated: March 2026
        </p>
      </section>
    </>
  );
}
