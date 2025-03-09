"use client";
import React, { useState, useEffect } from "react";
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

  // Auto rotation for tabs
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setActiveTab((current) => {
        if (current === "sponsor") return "compliance";
        if (current === "compliance") return "immigration";
        return "sponsor";
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [autoRotate]);

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
    setAutoRotate(false); // Stop auto rotation when manually changing tabs
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Enhanced 3D background with gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute h-full w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 opacity-70"></div>

        {/* 3D surface effect with gradient blobs */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-b from-blue-300 to-blue-100 opacity-30 backdrop-blur-md"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(40px)",
              transform: `perspective(1000px) rotateX(${Math.random() * 30}deg) rotateY(${Math.random() * 30}deg)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              rotateX: [
                Math.random() * 30,
                Math.random() * -30,
                Math.random() * 30,
              ],
              rotateY: [
                Math.random() * 30,
                Math.random() * -30,
                Math.random() * 30,
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Additional 3D surface elements */}
        <div className="absolute h-full w-full overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`surface-${i}`}
              className="absolute bg-gradient-to-br from-blue-200 to-transparent"
              style={{
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                opacity: 0.1,
                transform: `perspective(1000px) rotateX(${i * 5}deg) rotateY(${i * 3}deg) translateZ(${i * 10}px)`,
              }}
              animate={{
                rotateX: [i * 5, i * 5 + 2, i * 5],
                rotateY: [i * 3, i * 3 + 2, i * 3],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 py-16 md:flex-row md:px-8 md:py-28 lg:px-12">
        {/* Left Content with Enhanced 3D Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full md:w-1/2"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-20"
          >
            <motion.div
              variants={itemVariants}
              className="mb-2 text-xl font-medium text-slate-700 sm:text-2xl md:text-3xl"
            >
              <span className="inline-block">E</span>
              <span className="inline-block">x</span>
              <span className="inline-block">p</span>
              <span className="inline-block">e</span>
              <span className="inline-block">r</span>
              <span className="inline-block">t</span>
              <span className="inline-block">&nbsp;</span>
              <span className="inline-block">i</span>
              <span className="inline-block">n</span>
            </motion.div>

            <motion.div variants={itemVariants} className="relative mb-3">
              <h1 className="text-3xl font-bold text-[#1DA1C9] sm:text-4xl md:text-5xl">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="inline-block"
                  style={{
                    textShadow: "0 2px 10px rgba(29, 161, 201, 0.3)",
                    background: "linear-gradient(to bottom, #1DA1C9, #0C87AF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Sponsor Licence
                </motion.span>
              </h1>
              <motion.div
                className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mb-6 text-xl font-medium text-slate-700 sm:text-2xl md:text-3xl"
            >
              & Work Permit Visas
            </motion.h2>

            <motion.div variants={itemVariants} className="relative mb-8">
              <p className="text-base text-gray-600 sm:text-lg">
                Comprehensive Immigration Support
                <br />
                All In One Platform
              </p>
              <motion.div
                className="absolute -right-10 bottom-0 h-10 w-10 rounded-full bg-gradient-to-b from-blue-300 to-blue-400 opacity-30"
                animate={floatingAnimation}
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transform-gpu"
            >
              <Link href="/consultation" className="group inline-block">
                <motion.button
                  className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#1DA1C9] to-[#0C87AF] px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:shadow-xl"
                  style={{
                    textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    transform: "perspective(1000px)",
                  }}
                >
                  <motion.span className="relative z-10 flex items-center">
                    Book A Free Consultation
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </motion.svg>
                  </motion.span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-r from-[#0A7A9E] to-[#065E7A] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced 3D decorative elements */}
          <motion.div
            className="absolute -left-10 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 opacity-70 shadow-xl"
            style={{
              filter: "blur(2px)",
              transform: "perspective(1000px) rotateX(10deg) rotateY(-10deg)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 10, 0],
              y: [0, -10, 0],
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
            className="absolute -bottom-20 -right-10 h-40 w-40 rounded-full bg-gradient-to-tr from-blue-200 to-blue-100 opacity-70 shadow-xl"
            style={{
              filter: "blur(2px)",
              transform: "perspective(1000px) rotateX(-10deg) rotateY(10deg)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -10, 0],
              y: [0, 10, 0],
              rotateX: [-10, -15, -10],
              rotateY: [10, 15, 10],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </motion.div>

        {/* Right Card with Enhanced 3D and Shadow Effects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md md:w-1/2"
        >
          {/* Animated 3D highlight effect */}
          <motion.div
            className="absolute -left-4 -top-4 h-full w-full rounded-lg bg-gradient-to-br from-blue-400 to-blue-300 opacity-20"
            style={{
              transform: "perspective(1000px) rotateX(3deg) rotateY(-2deg)",
              filter: "blur(2px)",
            }}
            animate={{
              rotate: [-1, 1, -1],
              x: [0, 4, 0],
              y: [0, -4, 0],
              rotateX: [3, 5, 3],
              rotateY: [-2, -3, -2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          {/* full animated cards */}
          <motion.div
            className="overflow-hidden rounded-lg bg-gradient-to-br from-[#1DA1C9] to-[#0C87AF]"
            transition={{ duration: 0.3 }}
          >
            {/* Tab Progress Indicator */}
            {autoRotate && (
              <motion.div
                className="h-1 bg-transparent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            )}

            {/* Enhanced Tab Header */}
            <div className="flex ">
              {["sponsor", "compliance", "immigration"].map((tab) => (
                <motion.div
                  key={tab}
                  className={`flex-1 cursor-pointer p-2 text-center transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-transparent text-white"
                      : "bg-gradient-to-b from-gray-100 to-gray-200 text-gray-700"
                  } ${tab === "sponsor" ? "rounded-tl-lg" : ""} ${
                    tab === "immigration" ? "rounded-tr-lg" : ""
                  }`}
                  onClick={() => handleTabChange(tab as any)}
                  whileHover={{
                    backgroundColor:
                      activeTab === tab ? "transparent" : "#e5e7eb",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    initial={{ y: 5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay:
                        0.1 *
                        ["sponsor", "compliance", "immigration"].indexOf(tab),
                    }}
                    className="text-xs sm:text-sm"
                  >
                    {tab.toUpperCase()}
                  </motion.div>
                  {activeTab === tab && (
                    <motion.div
                      className="mx-auto mt-0 h-1 w-1/2 rounded-full bg-transparent"
                      layoutId="activeTab"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Card Content with Enhanced 3D Animation || cards color*/}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-transparent p-4 text-white sm:p-6"
                style={{
                  transform: "perspective(1000px)",
                }}
              >
                {/* Enhanced 3D Background Pattern */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-8 w-8 rotate-45 rounded-md border border-white"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        transform: `perspective(1000px) rotateX(${Math.random() * 45}deg) rotateY(${Math.random() * 45}deg) translateZ(${Math.random() * 20}px)`,
                      }}
                      animate={{
                        rotate: ["45deg", "135deg", "45deg"],
                        scale: [1, 1.2, 1],
                        rotateX: [
                          Math.random() * 45,
                          Math.random() * -45,
                          Math.random() * 45,
                        ],
                        rotateY: [
                          Math.random() * 45,
                          Math.random() * -45,
                          Math.random() * 45,
                        ],
                      }}
                      transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row">
                  <div className="flex flex-col">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="mb-4 text-xl font-bold sm:mb-6 sm:text-2xl"
                      style={{
                        textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                      }}
                    >
                      {tabContents[activeTab].title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-1"
                    >
                      {tabContents[activeTab].description}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mb-6"
                    >
                      {tabContents[activeTab].cta}
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="mt-4 flex justify-center sm:mt-0 sm:justify-end"
                  >
                    <div className="h-28 w-28 overflow-hidden bg-transparent sm:h-32 sm:w-32">
                      <motion.div
                        animate={floatingAnimation}
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          transform: "perspective(1000px) rotateY(10deg)",
                        }}
                      >
                        <Image
                          src={`/images/hero/${activeTab}.png`}
                          alt={`${activeTab} illustration`}
                          width={120}
                          height={120}
                          className="rounded-md object-contain drop-shadow-lg"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Enhanced 3D Feature Cards with Gradient Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {tabContents[activeTab].features.map((feature, index) => (
              <motion.div
                key={`feature-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className={`relative flex flex-1 items-center rounded-lg p-3 shadow-md transition-all duration-300 hover:shadow-lg ${
                  feature.highlighted
                    ? "bg-gradient-to-br from-[#1DA1C9] to-[#0C87AF] text-white"
                    : "bg-gradient-to-br from-white to-blue-50 text-gray-700"
                }`}
                style={{
                  transform: "perspective(1000px) rotateX(2deg)",
                  minWidth: "130px",
                }}
                whileHover={{
                  scale: 1.03,
                  rotateX: 0,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 overflow-hidden rounded-lg opacity-20"
                  style={{ zIndex: 0 }}
                >
                  <motion.div
                    className={`h-full w-full ${
                      feature.highlighted
                        ? "bg-gradient-to-r from-blue-300 to-blue-400"
                        : "bg-gradient-to-r from-blue-100 to-blue-200"
                    }`}
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 5 + index,
                    }}
                  />
                </motion.div>

                <div className="relative z-10 mr-3 flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="relative z-10 text-xs sm:text-sm">
                  {feature.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
