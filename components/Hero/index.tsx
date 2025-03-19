"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@/utils/useMediaQuery";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

// Main Hero component that switches between mobile and desktop versions
const Hero: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? <HeroMobile /> : <HeroDesktop />;
};

export default Hero;
