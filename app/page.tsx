import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import SponsorLicenceSection from "@/components/SponsorLicense";
import HowWeCanHelpYou from "@/components/HowCanHelp";
import StartYourJourney from "@/components/StartYourJourney";
import StepByStep from "@/components/StepByStep";
import StatsSection from "@/components/Stats";
import BlogSection from "@/components/Blog/BlogSection";

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
      <BlogSection />
    </main>
  );
}
