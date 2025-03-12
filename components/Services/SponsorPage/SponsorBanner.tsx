"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <div className="font-sans mx-auto flex max-w-6xl flex-col items-center justify-between p-6 md:flex-row md:p-10">
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

      <div className="flex w-full items-center justify-center md:w-1/2">
        <motion.div
          className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col">
            {/* Step 1 */}
            <div className="mb-2 flex items-start">
              <motion.div
                className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#ff7a7a] font-bold text-white"
                animate={{
                  scale: activeStep === 1 ? [1, 1.1, 1] : 1,
                  backgroundColor: "#ff7a7a",
                }}
                transition={{ duration: 0.5 }}
              >
                1
              </motion.div>
              <motion.div
                className="flex flex-col"
                animate={{
                  opacity: activeStep === 1 ? 1 : 0.7,
                  x: activeStep === 1 ? [0, 5, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mb-2 text-sm font-bold tracking-wider text-[#ff7a7a]">
                  A SPONSOR LICENCE IS GREAT!
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  It will help you
                  to................................................................
                </p>
              </motion.div>
            </div>

            {/* Connecting line */}
            <div className="mb-2 ml-5 h-6 w-0.5 bg-gray-200"></div>

            {/* Step 2 */}
            <div className="mb-2 flex items-start">
              <motion.div
                className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#ffb347] font-bold text-white"
                animate={{
                  scale: activeStep === 2 ? [1, 1.1, 1] : 1,
                  backgroundColor: "#ffb347",
                }}
                transition={{ duration: 0.5 }}
              >
                2
              </motion.div>
              <motion.div
                className="flex flex-col"
                animate={{
                  opacity: activeStep === 2 ? 1 : 0.7,
                  x: activeStep === 2 ? [0, 5, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mb-2 text-sm font-bold tracking-wider text-[#ffb347]">
                  SOFT CREDIT CHECK
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  The lender performs a soft credit check assessing your credit
                  score and history
                </p>
              </motion.div>
            </div>

            {/* Connecting line */}
            <div className="mb-2 ml-5 h-6 w-0.5 bg-gray-200"></div>

            {/* Step 3 */}
            <div className="mb-2 flex items-start">
              <motion.div
                className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4e9eff] font-bold text-white"
                animate={{
                  scale: activeStep === 3 ? [1, 1.1, 1] : 1,
                  backgroundColor: "#4e9eff",
                }}
                transition={{ duration: 0.5 }}
              >
                3
              </motion.div>
              <motion.div
                className="flex flex-col"
                animate={{
                  opacity: activeStep === 3 ? 1 : 0.7,
                  x: activeStep === 3 ? [0, 5, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mb-2 text-sm font-bold tracking-wider text-[#4e9eff]">
                  GRANT OR DENY
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  The lender either denies or grants your pre-qualification. If
                  you pre-qualify, you'll receive information about the loan you
                  may receive.
                </p>
              </motion.div>
            </div>

            {/* Connecting line */}
            <div className="mb-2 ml-5 h-6 w-0.5 bg-gray-200"></div>

            {/* Step 4 */}
            <div className="flex items-start">
              <motion.div
                className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4cd964] font-bold text-white"
                animate={{
                  scale: activeStep === 4 ? [1, 1.1, 1] : 1,
                  backgroundColor: "#4cd964",
                }}
                transition={{ duration: 0.5 }}
              >
                4
              </motion.div>
              <motion.div
                className="flex flex-col"
                animate={{
                  opacity: activeStep === 4 ? 1 : 0.7,
                  x: activeStep === 4 ? [0, 5, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mb-2 text-sm font-bold tracking-wider text-[#4cd964]">
                  ACCEPT OR DECLINE
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  You can either accept or decline the pre-qualified offer.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorBanner;
