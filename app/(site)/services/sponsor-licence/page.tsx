import React from "react";
import { Metadata } from "next";
import SponsorBanner from "@/components/Services/SponsorPage/SponsorBanner";
import Brands from "@/components/Brands";
import StatsSection from "@/components/Stats";
import TabContainer from "@/components/Services/SponsorPage/TabContainer";
import CTAsection from "@/components/Services/SponsorPage/CTA-Section";
import PricingPackages from "@/components/Pricing/PricingPlan";
import WhoLovesUs from "@/components/WhoLoveUs";
import FAQSection from "@/components/FAQ/FAQ-Section";
import SponsorServices from "@/components/Services/SponsorPage/Sponsor-Services";
import packages from "@/components/Services/SponsorPage/sponsorPriceData";
import faqItems from "@/components/Services/SponsorPage/sponsorfaqData";

export const metadata: Metadata = {
  title: "Sponsor Licence Page - A2Z",
  description: "A2Z Immigration",
  // other metadata
};

const SponsorPage = () => {
  return (
    <div className="pb-20 pt-20">
      <SponsorBanner />
      <Brands />
      <StatsSection />
      <TabContainer />
      <CTAsection />
      <PricingPackages packages={packages} />
      <SponsorServices />
      <WhoLovesUs />
      <FAQSection faqItems={faqItems} />
    </div>
  );
};

export default SponsorPage;
