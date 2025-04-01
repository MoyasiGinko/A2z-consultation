import React from "react";
import { Metadata } from "next";
import OtherSupport from "@/components/Services/OtherSupport";
import SupportCTA from "@/components/Services/OtherSupport/SupportCTA";

export const metadata: Metadata = {
  title: "Skilled Worker Visa Page - A2Z",
  description: "A2Z Immigration",
  // other metadata
};

const OtherSupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <OtherSupport />
      <SupportCTA />
    </div>
  );
};

export default OtherSupportPage;
