import React from "react";
import { Metadata } from "next";
import Brands from "@/components/Brands";
import StatsSection from "@/components/Stats";
import WhoLovesUs from "@/components/WhoLoveUs";
import VisaBanner from "@/components/Services/SkilledVisaPage/VisaBanner";
import VisaSteps from "@/components/Services/SkilledVisaPage/VisaSteps";
import VisaCTA from "@/components/Services/SkilledVisaPage/Visa-CTA";
import VisaServices from "@/components/Services/SkilledVisaPage/VIsa-Services";
import PricingPackages from "@/components/Pricing/PricingPlan";
import FAQSection from "@/components/FAQ/FAQ-Section";
import packages from "@/components/Services/SkilledVisaPage/visaPriceData";

export const metadata: Metadata = {
  title: "Skilled Worker Visa Page - A2Z",
  description: "A2Z Immigration",
  // other metadata
};

const SkilledVisaPage = () => {
  return (
    <div className="pb-20 pt-40">
      <VisaBanner />
      <Brands />
      <StatsSection />
      <VisaSteps />
      <PricingPackages packages={packages} />
      <WhoLovesUs />
      <VisaCTA />
      <VisaServices />
      <FAQSection />
    </div>
  );
};

export default SkilledVisaPage;
