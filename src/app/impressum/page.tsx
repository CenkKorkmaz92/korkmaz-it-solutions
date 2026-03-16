import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import LegalPageHeader from "@/components/legal/LegalPageHeader";
import LegalContentSwitch from "@/components/legal/LegalContentSwitch";
import ImpressumDe from "@/content/legal/impressum-de";
import ImpressumEn from "@/content/legal/impressum-en";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Legal notice for Korkmaz IT Solutions.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <>
      <LegalPageHeader
        titleDe="Impressum"
        titleEn="Legal Notice"
        subtitleKey="impressumSub"
      />

      <main className="py-16 sm:py-20 bg-secondary">
        <Container>
          <article className="max-w-2xl space-y-12">
            <LegalContentSwitch de={<ImpressumDe />} en={<ImpressumEn />} />
          </article>
        </Container>
      </main>
    </>
  );
}

