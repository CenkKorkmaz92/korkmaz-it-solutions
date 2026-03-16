import Placeholder from "@/components/legal/Placeholder";

export default function DatenschutzDe() {
  return (
    <>
      {/* 1. Verantwortlicher */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          1. Verantwortlicher
        </h2>
        <div className="text-sm text-primary/70 leading-relaxed space-y-2">
          <p><Placeholder>Vollständiger Name / Unternehmensname</Placeholder></p>
          <p><Placeholder>Straße und Hausnummer</Placeholder></p>
          <p><Placeholder>PLZ und Ort</Placeholder></p>
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
        <div className="text-sm text-primary/70 leading-relaxed space-y-3">
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
            Betrieb der Website). Die Daten werden nach{" "}
            <Placeholder>Speicherdauer eintragen, z. B. 7 Tage</Placeholder>{" "}
            automatisch gelöscht.
          </p>
        </div>
      </section>

      {/* 3. Hosting */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          3. Hosting
        </h2>
        <div className="text-sm text-primary/70 leading-relaxed space-y-3">
          <p>
            Diese Website wird gehostet bei:{" "}
            <Placeholder>Name und Adresse des Hosting-Anbieters, z. B. Vercel Inc., Netlify, Hetzner</Placeholder>
          </p>
          <p>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Mit dem
            Anbieter besteht ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO.{" "}
            <Placeholder>AVV-Details oder Link ergänzen, sofern verfügbar</Placeholder>
          </p>
        </div>
      </section>

      {/* 4. Kontaktaufnahme per E-Mail */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          4. Kontaktaufnahme per E-Mail
        </h2>
        <p className="text-sm text-primary/70 leading-relaxed">
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
        <p className="text-sm text-primary/70 leading-relaxed">
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
        <div className="text-sm text-primary/70 leading-relaxed space-y-3">
          <p>
            Diese Website verwendet keine Tracking-Cookies und keine Dienste zur Webanalyse
            (z. B. Google Analytics) in der aktuellen Version.
          </p>
          <p>
            <Placeholder>
              Sollten künftig Cookies oder Analyse-Dienste eingesetzt werden, diesen Abschnitt
              ergänzen und ein Cookie-Consent-Banner implementieren.
            </Placeholder>
          </p>
        </div>
      </section>

      {/* 7. Externe Dienste */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          7. Externe Dienste und Drittanbieter
        </h2>
        <div className="text-sm text-primary/70 leading-relaxed space-y-3">
          <p>
            Diese Website verlinkt auf externe Dienste Dritter (z. B. GitHub, LinkedIn). Beim
            Aufrufen dieser externen Links gelten die jeweiligen Datenschutzbestimmungen der
            Anbieter. Wir haben keinen Einfluss auf die Datenverarbeitung durch diese Dienste.
          </p>
          <p>
            <Placeholder>
              Weitere externe Dienste oder eingebettete Inhalte hier aufführen, sofern vorhanden
              (z. B. YouTube-Embeds, Stripe, Calendly).
            </Placeholder>
          </p>
        </div>
      </section>

      {/* 8. Ihre Rechte */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          8. Ihre Rechte als betroffene Person
        </h2>
        <p className="text-sm text-primary/70 leading-relaxed mb-4">
          Ihnen stehen gemäß DSGVO folgende Rechte zu:
        </p>
        <ul className="text-sm text-primary/70 leading-relaxed space-y-2 list-none">
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
        <p className="text-sm text-primary/70 leading-relaxed mt-4">
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
          <a href="mailto:info@korkmaz-it-solutions.com" className="text-accent hover:underline">
            info@korkmaz-it-solutions.com
          </a>
        </p>
        <p className="text-sm text-primary/70 leading-relaxed mt-3">
          Zuständige Aufsichtsbehörde:{" "}
          <Placeholder>
            Name und URL der zuständigen Landesdatenschutzbehörde eintragen,
            z. B. LfDI Baden-Württemberg
          </Placeholder>
        </p>
      </section>

      {/* 9. Aktualität */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          9. Aktualität dieser Datenschutzerklärung
        </h2>
        <p className="text-sm text-primary/70 leading-relaxed">
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie stets
          den aktuellen rechtlichen Anforderungen zu entsprechen oder um Änderungen unserer
          Leistungen umzusetzen. Es gilt die jeweils aktuelle Fassung.
        </p>
        <p className="text-sm text-primary/50 mt-3">
          Stand: <Placeholder>Datum eintragen, z. B. März 2026</Placeholder>
        </p>
      </section>
    </>
  );
}
