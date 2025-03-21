"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SponsorBanner: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Animation to cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 4 ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans mx-auto flex max-w-6xl flex-col items-center justify-between p-6 md:flex-row md:gap-8 md:p-10">
      <div className="mb-10 w-full md:mb-0 md:w-1/2 md:pr-10">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-[#0096c7]">
          How Sponsor Licence
          <br />
          Will Help to Stay Ahead
          <br />
          of the Game?
        </h1>
        <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-600">
          Securing your sponsor licence doesn't have to be difficult or
          expensive. Apply instantly via our platform and let our in-house
          immigration experts handle everything - starting from 995.
        </p>
        <button className="rounded bg-[#0096c7] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#0077b6]">
          Get in touch
        </button>
      </div>

      <div className="flex h-full w-full items-center justify-center md:w-1/2">
        <motion.div
          className="w-full max-w-[600px] rounded-2xl bg-white p-20 shadow-2xl shadow-sky-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/features/sponsor-banner.svg"
            alt="Sponsor Licence"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorBanner;
