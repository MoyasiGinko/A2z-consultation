import React from "react";
import { Metadata } from "next";
import BoosterCard from "@/components/Boosters";
import SponsorBanner from "@/components/Services/SponsorPage/SponsorBanner";
import Brands from "@/components/Brands";
import StatsSection from "@/components/Stats";
import TabContainer from "@/components/Services/SponsorPage/TabContainer";
import CTAsection from "@/components/Services/SponsorPage/CTA-Section";
import PricingPackages from "@/components/Pricing/PricingPlan";
import SponsorSecured from "@/components/Services/SponsorPage/Sponsor-Services";
import WhoLovesUs from "@/components/WhoLoveUs";
import FAQSection from "@/components/FAQ/FAQ-Section";
import ComplianceBanner from "@/components/Services/CompliancePage/ComplianceBanner";
import WhyCompliance from "@/components/Services/CompliancePage/WhyCompliance";
import ComplianceServices from "@/components/Services/CompliancePage/Compliance-Services";
import ComplianceDetails from "@/components/Services/CompliancePage/Compliance-Details";

export const metadata: Metadata = {
  title: "Compliance Page - A2Z",
  description: "A2Z Immigration",
  // other metadata
};

const CompliancePage = () => {
  return (
    <div className="pb-20 pt-40">
      <ComplianceBanner />
      <Brands />
      <StatsSection />
      <WhyCompliance />
      <ComplianceDetails />
      <PricingPackages />
      <CTAsection />
      <ComplianceServices />
      <WhoLovesUs />
      <FAQSection />
    </div>
  );
};

export default CompliancePage;
