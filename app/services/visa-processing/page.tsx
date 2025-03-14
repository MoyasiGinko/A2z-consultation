import React from "react";
import { Metadata } from "next";
import BoosterCard from "@/components/Boosters";
import SponsorBanner from "@/components/Services/SponsorPage/SponsorBanner";
import Brands from "@/components/Brands";
import StatsSection from "@/components/Stats";
import TabContainer from "@/components/Services/SponsorPage/TabContainer";
import CTAsection from "@/components/Services/SponsorPage/CTA-Section";
import PricingPackages from "@/components/Services/SponsorPage/PricingPlan";
import SponsorSecured from "@/components/Services/SponsorPage/Sponsor-Services";
import WhoLovesUs from "@/components/WhoLoveUs";
import FAQ from "@/components/Services/SponsorPage/FAQ-Section";
import VisaBanner from "@/components/Services/ProcessingPage/VisaBanner";
import VisaSteps from "@/components/Services/ProcessingPage/VisaSteps";
import VisaCTA from "@/components/Services/ProcessingPage/Visa-CTA";
import VisaServices from "@/components/Services/ProcessingPage/VIsa-Services";

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
      <FAQ />
    </div>
  );
};

export default ProcessingPage;
