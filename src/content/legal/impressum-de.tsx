import Placeholder from "@/components/legal/Placeholder";

export default function ImpressumDe() {
  return (
    <>
      {/* Angaben gemäß § 5 TMG */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Angaben gemäß § 5 TMG
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-2">
          <p>Cenk Korkmaz</p>
          <p>Kleinhöchbergerstraße 45</p>
          <p>71560 Sulzbach an der Murr</p>
          <p>Deutschland</p>
        </div>
      </section>

      {/* Kontakt */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Kontakt
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-2">
          <p>
            <span className="text-primary/50">Telefon:</span>{" "}
            <a href="tel:+49015734376057" className="text-primary/70 hover:text-accent">+49 157 34376057</a>
          </p>
          <p>
            <span className="text-primary/50">E-Mail:</span>{" "}
            <a href="mailto:info@korkmaz-it-solutions.com" className="text-accent hover:underline">
              info@korkmaz-it-solutions.com
            </a>
          </p>
        </div>
      </section>

      {/* Berufsrechtliche Regelungen */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Berufsrechtliche Regelungen
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-2">
          <p>
            <span className="text-primary/50">Berufsbezeichnung:</span>{" "}
            Freiberuflicher Softwareentwickler
          </p>
        </div>
      </section>

      {/* Steuernummer */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Steuernummer
        </h2>
        <p className="text-base text-primary/70 leading-relaxed">
          Die Steuernummer wird nach Erhalt vom Finanzamt hier angezeigt.
        </p>
      </section>

      {/* Verantwortlich für Inhalt */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-2">
          <p>Cenk Korkmaz</p>
          <p>Kleinhöchbergerstraße 45</p>
          <p>71560 Sulzbach an der Murr</p>
        </div>
      </section>

      {/* Haftungsausschluss */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Haftungsausschluss
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-base font-semibold text-primary mb-2">Haftung für Inhalte</h3>
            <p className="text-base text-primary/70 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-primary mb-2">Haftung für Links</h3>
            <p className="text-base text-primary/70 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Links umgehend entfernen.
            </p>
          </div>
        </div>
      </section>

      {/* Urheberrecht */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Urheberrecht
        </h2>
        <p className="text-base text-primary/70 leading-relaxed">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
          der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
          nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
      </section>
    </>
  );
}
