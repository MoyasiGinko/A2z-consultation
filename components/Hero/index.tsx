"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Define tab content types
type TabContent = {
  title: string;
  description: string;
  cta: string;
  features: {
    icon: React.ReactNode;
    text: string;
    highlighted: boolean;
  }[];
};

const Hero: React.FC = () => {
  // Define tab state
  const [activeTab, setActiveTab] = useState<
    "sponsor" | "compliance" | "immigration"
  >("sponsor");

  // Define content for each tab
  const tabContents: Record<
    "sponsor" | "compliance" | "immigration",
    TabContent
  > = {
    sponsor: {
      title: "SECURE YOUR SPONSOR LICENCE WITH US!",
      description: "WHY NOT CALL US TODAY?",
      cta: "BOOK A FREE ELIGIBILITY ASSESSMENT",
      features: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
          text: "Affordable Services",
          highlighted: true,
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          ),
          text: "Peace of Mind",
          highlighted: false,
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          ),
          text: "Customer Focus",
          highlighted: true,
        },
      ],
    },
    compliance: {
      title: "ENSURE YOUR COMPLIANCE TODAY",
      description: "STAY AHEAD OF REGULATIONS",
      cta: "GET A COMPLIANCE AUDIT",
      features: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
          text: "Full Documentation",
          highlighted: true,
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
          text: "Fast Turnaround",
          highlighted: false,
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          ),
          text: "Expert Analysis",
          highlighted: true,
        },
      ],
    },
    immigration: {
      title: "STREAMLINE YOUR IMMIGRATION PROCESS",
      description: "LET US GUIDE YOUR JOURNEY",
      cta: "SCHEDULE A STRATEGY CALL",
      features: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          ),
          text: "Secure Process",
          highlighted: true,
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
          ),
          text: "Family Support",
          highlighted: false,
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 21v-4m0 0V5a2 2 0 012-2h6.5L15 7h5a2 2 0 012 2v8a2 2 0 01-2 2h-15a2 2 0 01-2-2zm12-10v.01"
              />
            </svg>
          ),
          text: "Document Management",
          highlighted: true,
        },
      ],
    },
  };

  // Tab selection handler
  const handleTabChange = (tab: "sponsor" | "compliance" | "immigration") => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen w-full  overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white px-4 py-28 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        {/* Left Content with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-2 text-2xl font-medium text-slate-700 md:text-3xl"
          >
            Expert in
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-3 text-4xl font-bold text-[#1DA1C9] md:text-5xl"
          >
            Sponsor Licence
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-6 text-2xl font-medium text-slate-700 md:text-3xl"
          >
            & Work Permit Visas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mb-8 text-lg text-gray-600"
          >
            Comprehensive Immigration Support
            <br />
            All In One Platform
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
          >
            <Link href="/consultation" className="inline-block">
              <motion.button
                className="flex items-center rounded-full bg-[#1DA1C9] px-6 py-3 font-medium text-white transition duration-300 hover:bg-[#178AAD]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book A Free Consultation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Card with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md md:w-1/2"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            {/* Tab Header */}
            <div className="flex">
              <motion.div
                className={`cursor-pointer px-6 py-3 ${activeTab === "sponsor" ? "rounded-tl-lg bg-[#1DA1C9] text-white" : "bg-gray-200 text-gray-700"} transition-colors duration-300`}
                onClick={() => handleTabChange("sponsor")}
                whileHover={{
                  backgroundColor:
                    activeTab === "sponsor" ? "#1DA1C9" : "#e5e7eb",
                }}
              >
                SPONSOR LICENCE
              </motion.div>
              <motion.div
                className={`cursor-pointer px-6 py-3 ${activeTab === "compliance" ? "bg-[#1DA1C9] text-white" : "bg-gray-200 text-gray-700"} transition-colors duration-300`}
                onClick={() => handleTabChange("compliance")}
                whileHover={{
                  backgroundColor:
                    activeTab === "compliance" ? "#1DA1C9" : "#e5e7eb",
                }}
              >
                COMPLIANCE
              </motion.div>
              <motion.div
                className={`cursor-pointer px-6 py-3 ${activeTab === "immigration" ? "rounded-tr-lg bg-[#1DA1C9] text-white" : "bg-white text-gray-700"} transition-colors duration-300`}
                onClick={() => handleTabChange("immigration")}
                whileHover={{
                  backgroundColor:
                    activeTab === "immigration" ? "#1DA1C9" : "#f9fafb",
                }}
              >
                IMMIGRATION
              </motion.div>
            </div>

            {/* Card Content with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1DA1C9] p-6 text-white"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6 text-2xl font-bold"
                >
                  {tabContents[activeTab].title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-1"
                >
                  {tabContents[activeTab].description}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6"
                >
                  {tabContents[activeTab].cta}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="flex justify-end"
                >
                  <div className="h-32 w-32 overflow-hidden rounded-lg bg-white p-4 shadow-md">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Image
                        src="/checklist-image.png"
                        alt="Checklist illustration"
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Feature Cards with Animation */}
                <div className="mt-4 flex gap-2">
                  {tabContents[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`${feature.highlighted ? "border border-white bg-[#1DA1C9] text-white" : "bg-white text-gray-700"} flex items-center rounded p-2 text-xs transition-all duration-300`}
                    >
                      <div
                        className={`${feature.highlighted ? "bg-white text-[#1DA1C9]" : "bg-[#1DA1C9] text-white"} mr-2 rounded p-1`}
                      >
                        {feature.icon}
                      </div>
                      {feature.text}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
