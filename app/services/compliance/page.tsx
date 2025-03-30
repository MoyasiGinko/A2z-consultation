import React from "react";
import { Metadata } from "next";
import Brands from "@/components/Brands";
import StatsSection from "@/components/Stats";
import PricingPackages from "@/components/Pricing/PricingPlan";
import WhoLovesUs from "@/components/WhoLoveUs";
import FAQSection from "@/components/FAQ/FAQ-Section";
import ComplianceBanner from "@/components/Services/CompliancePage/ComplianceBanner";
import WhyCompliance from "@/components/Services/CompliancePage/WhyCompliance";
import ComplianceServices from "@/components/Services/CompliancePage/Compliance-Services";
import ComplianceDetails from "@/components/Services/CompliancePage/Compliance-Details";
import ComplianceCTA from "@/components/Services/CompliancePage/Compliance-CTA";
import packages from "@/components/Services/CompliancePage/compliancePriceData";
import faqItems from "@/components/Services/CompliancePage/compliancefaqData";

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
      <PricingPackages packages={packages} />
      <ComplianceCTA />
      <ComplianceServices />
      <WhoLovesUs />
      <FAQSection faqItems={faqItems} />
    </div>
  );
};

export default CompliancePage;
