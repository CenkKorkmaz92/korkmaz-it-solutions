import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Legal notice for Korkmaz IT Solutions.",
  robots: { index: false, follow: false },
};

/** Visually flags text that must be replaced before going live. */
function Placeholder({ children }: { children: string }) {
  return (
    <span className="inline-block rounded border border-accent/40 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
      ⚠ {children}
    </span>
  );
}

export default function ImpressumPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-primary text-secondary py-16 sm:py-20">
        <Container>
          <Link
            href="/"
            className="text-xs uppercase tracking-widest text-secondary/40 hover:text-accent transition-colors mb-6 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Impressum
          </h1>
          <p className="mt-3 text-secondary/60 text-sm">Legal Notice</p>
        </Container>
      </div>

      {/* Content */}
      <main className="py-16 sm:py-20 bg-secondary">
        <Container>
          <article className="max-w-2xl space-y-12">

            {/* Angaben gemäß § 5 TMG */}
            <section>
              <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="text-sm text-primary/70 leading-relaxed space-y-2">
                <p><Placeholder>Vollständiger Name / Unternehmensname</Placeholder></p>
                <p><Placeholder>Straße und Hausnummer</Placeholder></p>
                <p><Placeholder>PLZ und Ort</Placeholder></p>
                <p>Deutschland</p>
              </div>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
                Kontakt
              </h2>
              <div className="text-sm text-primary/70 leading-relaxed space-y-2">
                <p>
                  <span className="text-primary/50">Telefon:</span>{" "}
                  <Placeholder>Telefonnummer eintragen</Placeholder>
                </p>
                <p>
                  <span className="text-primary/50">E-Mail:</span>{" "}
                  <a
                    href="mailto:info@korkmaz-it-solutions.com"
                    className="text-accent hover:underline"
                  >
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
              <div className="text-sm text-primary/70 leading-relaxed space-y-2">
                <p>
                  <span className="text-primary/50">Berufsbezeichnung:</span>{" "}
                  <Placeholder>z. B. Freiberuflicher IT-Berater / Softwareentwickler</Placeholder>
                </p>
                <p>
                  <span className="text-primary/50">Zuständige Kammer:</span>{" "}
                  <Placeholder>sofern zutreffend — andernfalls Abschnitt entfernen</Placeholder>
                </p>
              </div>
            </section>

            {/* Umsatzsteuer */}
            <section>
              <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <p className="text-sm text-primary/70 leading-relaxed">
                <Placeholder>
                  USt-IdNr. gemäß § 27a UStG — sofern vorhanden, sonst Abschnitt entfernen
                </Placeholder>
              </p>
            </section>

            {/* Verantwortlich für Inhalt */}
            <section>
              <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <div className="text-sm text-primary/70 leading-relaxed space-y-2">
                <p><Placeholder>Name der verantwortlichen Person</Placeholder></p>
                <p><Placeholder>Anschrift — sofern abweichend von oben</Placeholder></p>
              </div>
            </section>

            {/* Haftungsausschluss */}
            <section>
              <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
                Haftungsausschluss
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-2">
                    Haftung für Inhalte
                  </h3>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
                    diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
                    TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                    forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                    Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                    Gesetzen bleiben hiervon unberührt.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-2">
                    Haftung für Links
                  </h3>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
                    wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
                    keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei
                    Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
                    entfernen.
                  </p>
                </div>
              </div>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="text-base font-semibold text-primary mb-4 pb-2 border-b border-primary/10">
                Urheberrecht
              </h2>
              <p className="text-sm text-primary/70 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>

          </article>
        </Container>
      </main>
    </>
  );
}
