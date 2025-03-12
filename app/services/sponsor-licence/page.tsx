import React from "react";
import { Metadata } from "next";
import BoosterCard from "@/components/Boosters";
import SponsorBanner from "@/components/Services/SponsorPage/SponsorBanner";
import Brands from "@/components/Brands";
import StatsSection from "@/components/Stats";
import TabContainer from "@/components/Services/SponsorPage/TabContainer";
import CTAsection from "@/components/Services/SponsorPage/CTA-Section";

export const metadata: Metadata = {
  title: "Sponsor Licence Page - A2Z",
  description: "A2Z Immigration",
  // other metadata
};

const SponsorPage = () => {
  return (
    <div className="pb-20 pt-40">
      <SponsorBanner />
      <Brands />
      <StatsSection />
      <TabContainer />
      <CTAsection />
    </div>
  );
};

export default SponsorPage;
