"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MobileVisaSteps: React.FC = () => {
  return (
    <div className="w-full px-4">
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="mb-12 inline-block bg-gradient-to-r from-[#459ed2] via-[#0383c8] to-[#0c7cb0] bg-clip-text text-center text-3xl font-bold text-transparent sm:text-3xl md:text-4xl lg:text-5xl">
          Steps of Visa
        </h1>
      </motion.div>

      <div className="flex flex-row items-stretch justify-center">
        {/* Left column - Timeline pillar */}
        <div className="relative mr-4 flex-shrink-0">
          <div className="flex h-full items-stretch">
            <Image
              src="/images/features/mobile-pillar.svg"
              alt="Steps timeline"
              width={60}
              height={800}
              className="h-full w-auto object-fill"
              style={{ minHeight: "100%" }}
              priority
            />
          </div>
        </div>

        {/* Right column - Steps content */}
        <div className="flex flex-col justify-between py-2">
          {/* Step 1 */}
          <div className="relative w-full max-w-xs">
            <div className="rounded-lg bg-yellow-100 p-4">
              <div className="mb-2 flex items-center">
                <div className="mr-3 rounded-full bg-cyan-500 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-xs">
                <strong>Verify Job Eligibility:</strong> Ensure the role
                qualifies for a Skilled Worker Visa under UK rules.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative w-full max-w-xs">
            <div className="rounded-lg bg-blue-100 p-4">
              <div className="mb-2 flex items-center">
                <div className="mr-3 rounded-full bg-cyan-500 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-xs">
                <strong>Follow Recruitment Compliance:</strong> Adhere to proper
                hiring procedures for visa approval.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative w-full max-w-xs">
            <div className="rounded-lg bg-purple-100 p-4">
              <div className="mb-2 flex items-center">
                <div className="mr-3 rounded-full bg-cyan-500 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-xs">
                <strong>Manage CoS & Renewals:</strong> Assign and renew
                Certificates of Sponsorship on time.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative w-full max-w-xs">
            <div className="rounded-lg bg-amber-100 p-4">
              <div className="mb-2 flex items-center">
                <div className="mr-3 rounded-full bg-cyan-500 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-xs">
                <strong>Submit & Support Application:</strong> Complete the visa
                process and prepare candidates for interviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileVisaSteps;
