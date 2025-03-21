import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import SponsorLicenceSection from "@/components/SponsorLicense";
import HowWeCanHelpYou from "@/components/HowCanHelp";
import StartYourJourney from "@/components/StartYourJourney";
import StepByStep from "@/components/StepByStep";
import StatsSection from "@/components/Stats";
import BlogSection from "@/components/Blog/BlogSection";
import WhoLovesUs from "@/components/WhoLoveUs";

export const metadata: Metadata = {
  title: "A2Z Immigration",
  description: "Find the best",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      {/* <Feature /> */}
      <SponsorLicenceSection />
      <HowWeCanHelpYou />
      <StartYourJourney />
      <StepByStep />

      <StatsSection />
      {/* <About /> */}
      {/* <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
      {/* <Blog /> */}
      <WhoLovesUs />
      <BlogSection />
    </main>
  );
}
