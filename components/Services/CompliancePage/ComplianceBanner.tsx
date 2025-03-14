"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ComplianceBanner: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Animation to cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 4 ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans mx-auto flex max-w-6xl flex-col items-center justify-between p-6 md:flex-row md:p-10">
      <div className="mb-10 w-full md:mb-0 md:w-1/2 md:pr-10">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-[#0096c7]">
          Seamless visa processing
        </h1>
        <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-600">
          A2zimmigration solution takes care of all things immigration,
          requesting and assigning certificates of sponsorship and submitting
          visa applications, all overseen by immigration experts.
        </p>
        <button className="rounded bg-[#0096c7] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#0077b6]">
          Get in touch
        </button>
      </div>

      <div className="relative flex w-full items-center justify-center md:w-1/2">
        <motion.div
          className="absolute inset-0 max-h-[300px] max-w-[500px] rounded-full bg-gradient-to-br from-red-400 to-sky-500 opacity-90"
          style={{
            filter: "blur(200px)",
            transform: "perspective(1000px) rotateX(10deg) rotateY(-10deg)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
            rotateX: [10, 15, 10],
            rotateY: [-10, -15, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="relative w-full max-w-md rounded-2xl bg-white p-0 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/features/visa-banner.png"
            alt="Sponsor Licence"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ComplianceBanner;
