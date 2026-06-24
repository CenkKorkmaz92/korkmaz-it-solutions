import Placeholder from "@/components/legal/Placeholder";

export default function ImpressumDe() {
  return (
    <>
      {/* Angaben gemäß § 5 DDG */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Angaben gemäß § 5 DDG
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-2">
          <p>Cenk Korkmaz</p>
          <p>Korkmaz IT Solutions</p>
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
            <span className="text-primary/70 select-all">+49 177 3613007</span>
          </p>
          <p>
            <span className="text-primary/50">E-Mail:</span>{" "}
            <span className="text-primary/70 select-all">info@korkmaz-it-solutions.com</span>
          </p>
        </div>
      </section>

      {/* Verantwortlich für Inhalt */}
      <section>
        <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <div className="text-base text-primary/70 leading-relaxed space-y-2">
          <p>Cenk Korkmaz</p>
          <p>Korkmaz IT Solutions</p>
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
              Als Diensteanbieter bin ich gemäß § 1 Abs. 1 DDG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 4 bis 7 DDG bin ich
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-primary mb-2">Haftung für Links</h3>
            <p className="text-base text-primary/70 leading-relaxed">
              Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich
              keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen
              werde ich derartige Links umgehend entfernen.
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
          Die durch den Betreiber dieser Seite erstellten Inhalte und Werke unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
          der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung des Betreibers. Downloads und Kopien dieser Seite sind
          nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
      </section>
    </>
  );
}
