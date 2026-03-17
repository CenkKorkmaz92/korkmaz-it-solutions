import type { Metadata } from "next";
import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import TechStackSection from "@/sections/TechStackSection";
import ProjectsSection from "@/sections/ProjectsSection";
import AboutSection from "@/sections/AboutSection";
import ProcessSection from "@/sections/ProcessSection";
import ContactCtaSection from "@/sections/ContactCtaSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://korkmaz-it-solutions.com",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechStackSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactCtaSection />
    </main>
  );
}
