import Placeholder from "@/components/legal/Placeholder";

export default function DatenschutzDe() {
  return (
    <>
      {/* 1. Verantwortlicher */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          1. Verantwortlicher
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-2">
          <p>Cenk Korkmaz</p>
          <p>Kleinhöchbergerstraße 45</p>
          <p>71560 Sulzbach an der Murr</p>
          <p>
            E-Mail:{" "}
            <a href="mailto:info@korkmaz-it-solutions.com" className="text-accent hover:underline">
              info@korkmaz-it-solutions.com
            </a>
          </p>
        </div>
      </section>

      {/* 2. Server-Logfiles */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          2. Server-Logfiles
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-3">
          <p>
            Beim Aufruf dieser Website werden durch den Webserver automatisch allgemeine
            Informationen erfasst (sog. Server-Logfiles). Dazu gehören unter anderem:
            Browser-Typ und -Version, verwendetes Betriebssystem, Referrer-URL, Hostname des
            zugreifenden Rechners sowie Uhrzeit der Serveranfrage.
          </p>
          <p>
            Diese Daten sind nicht einer bestimmten Person zuordenbar und werden nicht mit Daten
            aus anderen Quellen zusammengeführt. Rechtsgrundlage für die Verarbeitung ist Art. 6
            Abs. 1 lit. f DSGVO (berechtigtes Interesse an dem sicheren und funktionsfähigen
            Betrieb der Website). Die Server-Logfiles werden von unserem Hosting-Provider (Dogado) verwaltet.
            Informationen zur Speicherdauer können beim Hosting-Provider erfragt werden.
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
            Diese Website wird gehostet bei: Dogado GmbH, Saarlandstraße 25, 44139 Dortmund
          </p>
          <p>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse am zuverlässigen und sicheren Betrieb der Website). Weitere Informationen zum
            Datenschutz bei Dogado finden Sie unter:{" "}
            <a href="https://www.dogado.de/datenschutz" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              www.dogado.de/datenschutz
            </a>
          </p>
        </div>
      </section>

      {/* 4. Kontaktaufnahme per E-Mail */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          4. Kontaktaufnahme per E-Mail
        </h2>
        <p className="text-base text-primary/70 leading-relaxed">
          Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen angegebenen Daten (Ihre
          E-Mail-Adresse sowie der Inhalt Ihrer Nachricht) bei uns gespeichert, um Ihre Anfrage
          zu bearbeiten. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die
          Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
          mit der Erfüllung eines Vertrags zusammenhängt, oder auf Grundlage von Art. 6 Abs. 1
          lit. f DSGVO aufgrund unseres berechtigten Interesses an der effektiven Bearbeitung der
          an uns gerichteten Anfragen.
        </p>
      </section>

      {/* 5. Schriftarten */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          5. Schriftarten
        </h2>
        <p className="text-base text-primary/70 leading-relaxed">
          Diese Website verwendet die Schriftarten der Geist-Familie. Die Schriftartdateien
          werden beim Build-Prozess heruntergeladen und vom eigenen Server ausgeliefert
          (Self-Hosting via Next.js Font Optimization). Es findet keine Verbindung zu Servern
          Dritter statt; Google wird bei Seitenaufruf nicht kontaktiert.
        </p>
      </section>

      {/* 6. Cookies und Tracking */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          6. Cookies und Tracking
        </h2>
        <p className="text-base text-primary/70 leading-relaxed">
          Diese Website verwendet keine Tracking-Cookies, keine Dienste zur Webanalyse
          (z. B. Google Analytics) und keine Cookie-Consent-Tools (z. B. Cookiebot).
          Es werden ausschließlich technisch notwendige Cookies verwendet, die für den
          Betrieb der Website erforderlich sind.
        </p>
      </section>

      {/* 7. Externe Dienste */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          7. Externe Dienste und Drittanbieter
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-3">
          <p>
            Diese Website verlinkt auf folgende externe Dienste:
          </p>
          <ul className="space-y-2 list-none">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">–</span>
              <span>
                <strong>GitHub</strong> (Microsoft Corporation): Datenschutzrichtlinie unter{" "}
                <a href="https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  docs.github.com/privacy
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">–</span>
              <span>
                <strong>LinkedIn</strong> (LinkedIn Corporation): Datenschutzrichtlinie unter{" "}
                <a href="https://de.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  linkedin.com/legal/privacy-policy
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">–</span>
              <span>
                <strong>Persönliche Portfolio-Website</strong> (gehostet bei Dogado GmbH)
              </span>
            </li>
          </ul>
          <p className="mt-3">
            Beim Aufrufen dieser externen Links gelten die jeweiligen Datenschutzbestimmungen der
            Anbieter. Wir haben keinen Einfluss auf die Datenverarbeitung durch diese Dienste.
          </p>
        </div>
      </section>

      {/* 8. Ihre Rechte */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          8. Ihre Rechte als betroffene Person
        </h2>
        <p className="text-base text-primary/70 leading-relaxed mb-4">
          Ihnen stehen gemäß DSGVO folgende Rechte zu:
        </p>
        <ul className="text-base text-primary/70 leading-relaxed space-y-2 list-none">
          {[
            "Recht auf Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)",
            "Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
            "Recht auf Löschung Ihrer Daten (Art. 17 DSGVO)",
            "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
            "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
            "Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)",
            "Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)",
          ].map((right) => (
            <li key={right} className="flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">–</span>
              <span>{right}</span>
            </li>
          ))}
        </ul>
        <p className="text-base text-primary/70 leading-relaxed mt-4">
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
          <a href="mailto:info@korkmaz-it-solutions.com" className="text-accent hover:underline">
            info@korkmaz-it-solutions.com
          </a>
        </p>
        <div className="text-base text-primary/70 leading-relaxed mt-4">
          <p className="font-semibold text-primary mb-2">Zuständige Aufsichtsbehörde:</p>
          <p>Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW)</p>
          <p>Lautenschlagerstraße 20</p>
          <p>70173 Stuttgart</p>
          <p>Deutschland</p>
          <p className="mt-2">
            <a href="https://www.baden-wuerttemberg.datenschutz.de/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              www.baden-wuerttemberg.datenschutz.de
            </a>
          </p>
        </div>
      </section>

      {/* 9. Aktualität */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          9. Aktualität dieser Datenschutzerklärung
        </h2>
        <p className="text-base text-primary/70 leading-relaxed">
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie stets
          den aktuellen rechtlichen Anforderungen zu entsprechen oder um Änderungen unserer
          Leistungen umzusetzen. Es gilt die jeweils aktuelle Fassung.
        </p>
        <p className="text-base text-primary/50 mt-3">
          Stand: März 2026
        </p>
      </section>
    </>
  );
}
