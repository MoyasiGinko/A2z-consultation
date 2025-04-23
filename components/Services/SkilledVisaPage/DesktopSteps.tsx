"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const DesktopVisaSteps: React.FC = () => {
  return (
    <div className="w-full">
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="mb-12 inline-block bg-gradient-to-r from-[#459ed2] via-[#0383c8] to-[#0c7cb0] bg-clip-text text-center text-4xl font-bold text-transparent">
          Steps of Visa
        </h1>
      </motion.div>

      <div className="bg-sky-200 px-4 py-0">
        <div className="mx-auto flex max-w-4xl flex-col md:flex-row">
          {/* Left side - vertical timeline with image */}
          <div className="flex w-full justify-center md:w-1/4">
            <div className="relative h-full">
              <div className="h-full">
                <Image
                  src="/images/features/desktop-pillar.svg"
                  alt="Steps timeline"
                  width={100}
                  height={400}
                  className="h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* <div className="hidden w-1/6 md:block"></div> */}

          {/* Right side - steps content */}
          <div className="items-right justify-right mt-8 flex w-full flex-col py-10 md:mt-0 md:w-3/4">
            <h2 className="mb-6 text-center text-lg font-semibold md:text-left">
              STEP BY STEP PROCESS
            </h2>

            <div className="space-y-4">
              <div className="rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 hover:transform hover:bg-sky-50 hover:shadow-md">
                <div className="flex items-center">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700">01.</span>
                  </div>
                  <div>
                    <p className="text-sm">
                      <strong>Verify Job Eligibility:</strong> Ensure the role
                      qualifies for a Skilled Worker Visa under UK rules.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 hover:transform hover:bg-sky-50 hover:shadow-md">
                <div className="flex items-center">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700">02.</span>
                  </div>
                  <div>
                    <p className="text-sm">
                      <strong>Follow Recruitment Compliance:</strong> Adhere to
                      proper hiring procedures for visa approval.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 hover:transform hover:bg-sky-50 hover:shadow-md">
                <div className="flex items-center">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700">03.</span>
                  </div>
                  <div>
                    <p className="text-sm">
                      <strong>Manage CoS & Renewals:</strong> Assign and renew
                      Certificates of Sponsorship on time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 hover:transform hover:bg-sky-50 hover:shadow-md">
                <div className="flex items-center">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700">04.</span>
                  </div>
                  <div>
                    <p className="text-sm">
                      <strong>Submit & Support Application:</strong> Complete
                      the visa process and prepare candidates for interviews.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopVisaSteps;
