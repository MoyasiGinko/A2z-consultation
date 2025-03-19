"use client";
import React from "react";
import MobileVisaSteps from "./MobileSteps";
import DesktopVisaSteps from "./DesktopSteps";
import { useMediaQuery } from "@/utils/useMediaQuery";

// Main component that switches between mobile and desktop versions
const VisaSteps: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? <MobileVisaSteps /> : <DesktopVisaSteps />;
};

export default VisaSteps;
