import React from "react";
import { Metadata } from "next";
import Brands from "@/components/Brands";
import StatsSection from "@/components/Stats";
import WhoLovesUs from "@/components/WhoLoveUs";
import VisaBanner from "@/components/Services/ProcessingPage/VisaBanner";
import VisaSteps from "@/components/Services/ProcessingPage/VisaSteps";
import VisaCTA from "@/components/Services/ProcessingPage/Visa-CTA";
import VisaServices from "@/components/Services/ProcessingPage/VIsa-Services";
import PricingPackages from "@/components/Pricing/PricingPlan";
import FAQSection from "@/components/FAQ/FAQ-Section";

export const metadata: Metadata = {
  title: "Sponsor Licence Page - A2Z",
  description: "A2Z Immigration",
  // other metadata
};

const ProcessingPage = () => {
  return (
    <div className="pb-20 pt-40">
      <VisaBanner />
      <Brands />
      <StatsSection />
      <VisaSteps />
      <PricingPackages />
      <VisaCTA />
      <WhoLovesUs />
      <VisaServices />
      <FAQSection />
    </div>
  );
};

export default ProcessingPage;
