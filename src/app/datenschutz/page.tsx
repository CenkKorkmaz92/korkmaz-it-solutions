import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import LegalPageHeader from "@/components/legal/LegalPageHeader";
import LegalContentSwitch from "@/components/legal/LegalContentSwitch";
import DatenschutzDe from "@/content/legal/datenschutz-de";
import DatenschutzEn from "@/content/legal/datenschutz-en";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Privacy policy for Korkmaz IT Solutions.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <LegalPageHeader
        titleDe="Datenschutzerklärung"
        titleEn="Privacy Policy"
        subtitleKey="datenschutzSub"
      />

      <main className="py-16 sm:py-20 bg-secondary">
        <Container>
          <article className="max-w-2xl space-y-12">
            <LegalContentSwitch de={<DatenschutzDe />} en={<DatenschutzEn />} />
          </article>
        </Container>
      </main>
    </>
  );
}
