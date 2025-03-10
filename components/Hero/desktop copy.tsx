"use client";
import React from "react";
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

type HeroDesktopProps = {
  tabContents: Record<string, TabContent>;
  activeTab: string;
  setActiveTab: (tab: "sponsor" | "compliance" | "immigration" | "all") => void;
  setAutoRotate: (autoRotate: boolean) => void;
};

const HeroDesktop: React.FC<HeroDesktopProps> = ({
  tabContents,
  activeTab,
  setActiveTab,
  setAutoRotate,
}) => {
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
    y: [0, -1, 0],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  // Tab selection handler
  const handleTabChange = (
    tab: "sponsor" | "compliance" | "immigration" | "all",
  ) => {
    setActiveTab(tab);
    setAutoRotate(false); // Stop auto rotation when manually changing tabs
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Enhanced 3D background with gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute h-full w-full bg-white opacity-70"></div>

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

      {/* Main content - desktop layout */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-row items-center justify-between gap-8 px-16 py-28 md:px-16 lg:px-12">
        {/* Left Content with Enhanced 3D Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-1/2"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-20 text-left"
          >
            <motion.div
              variants={itemVariants}
              className="mb-2 text-xl font-medium text-sky-800 sm:text-2xl md:text-3xl"
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
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mb-6 text-xl font-medium text-sky-800 sm:text-2xl md:text-3xl"
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

            {/* CTA Button - desktop styling */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transform-gpu"
            >
              <Link href="/consultation" className="group inline-block w-auto">
                <motion.button
                  className="relative overflow-hidden rounded-full bg-gradient-to-r from-sky-500 to-sky-800 px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:shadow-xl"
                  style={{
                    transform: "perspective(1000px)",
                  }}
                >
                  <motion.span className="relative z-10 flex items-center justify-center">
                    Book A Free Consultation
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      style={{ rotate: "-45deg" }}
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

        {/* Desktop - Right Card with Enhanced 3D and Shadow Effects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-[60%] max-w-md"
        >
          {/* Animated 3D highlight effect */}
          <motion.div
            className="absolute -left-4 -top-4 h-full w-full rounded-lg bg-gradient-to-br from-sky-400 to-blue-300 opacity-20"
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

          <motion.div
            className="overflow-hidden rounded-lg bg-gradient-to-r from-[#04A4D8] to-[#025772] shadow-xl"
            style={{
              transform: "perspective(1000px)",
              boxShadow:
                "0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 5px 15px -5px rgba(0, 0, 0, 0.05)",
              height: "auto",
              minHeight: "320px",
            }}
            whileHover={{
              boxShadow:
                "0 20px 40px -5px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Enhanced Tab Header with responsive text sizes */}
            <div className="flex flex-wrap">
              {["sponsor", "compliance", "immigration"].map((tab) => (
                <motion.div
                  key={tab}
                  className={`flex-1 cursor-pointer p-1 text-center font-semibold sm:p-2
          ${activeTab === tab ? "rounded-tl-3xl rounded-tr-3xl bg-transparent text-white" : "bg-gradient-to-b from-gray-100 to-gray-200 text-gray-700"}
          ${
            activeTab === "sponsor"
              ? tab === "compliance"
                ? "rounded-bl-3xl rounded-br-none"
                : tab === "immigration"
                  ? "rounded-none"
                  : ""
              : activeTab === "immigration"
                ? tab === "sponsor"
                  ? "rounded-none"
                  : tab === "compliance"
                    ? "rounded-bl-none rounded-br-3xl"
                    : ""
                : activeTab === "compliance"
                  ? tab === "sponsor"
                    ? "rounded-bl-none rounded-br-3xl"
                    : tab === "immigration"
                      ? "rounded-bl-3xl rounded-br-none"
                      : ""
                  : "rounded-bl-3xl rounded-br-3xl"
          }`}
                  onClick={() => handleTabChange(tab as any)}
                  style={{
                    transform:
                      activeTab === tab
                        ? "perspective(1000px) translateZ(10px)"
                        : "perspective(1000px)",
                    boxShadow: activeTab === tab ? "" : "none",
                  }}
                  whileHover={{
                    backgroundColor:
                      activeTab === tab ? "transparent" : "#e5e7eb",
                    translateZ: 5,
                  }}
                  whileTap={{ scale: 1 }}
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
                      className="mx-auto mt-1 h-1 w-1/2 rounded-full bg-white"
                      layoutId="activeTab"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Card Content with responsive layout */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-between gap-4 p-6 pb-6 text-white"
              >
                {/* Tab Title with enhanced typography */}
                <motion.h3
                  className="text-center text-xl font-bold md:text-2xl"
                  style={{
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {tabContents[activeTab].title}
                </motion.h3>

                {/* Tab Description with enhanced typography */}
                <motion.p
                  className="text-center text-base"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {tabContents[activeTab].description}
                </motion.p>

                {/* Enhanced Image with 3D effect */}
                <motion.div
                  className="relative mx-auto my-4 h-32 w-32"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Image
                    src={`/images/hero/${activeTab}.png`}
                    alt={tabContents[activeTab].title}
                    width={130}
                    height={130}
                    className="object-contain"
                    style={{
                      filter: "drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1))",
                    }}
                  />
                </motion.div>

                {/* Feature List with animations */}
                <motion.div
                  className="mb-4 w-full space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {tabContents[activeTab].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className={`flex items-start rounded-lg p-2 ${
                        feature.highlighted ? "bg-sky-600/30" : ""
                      }`}
                    >
                      <div className="mr-3 text-sky-300">{feature.icon}</div>
                      <div className="text-sm">{feature.text}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button with enhanced 3D effect */}
                <motion.div
                  className="mt-2 w-full"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/consultation"
                    className="group inline-block w-full"
                  >
                    <motion.button
                      className="relative w-full overflow-hidden rounded-lg bg-white px-4 py-2 text-center font-medium text-sky-800 shadow-md transition duration-300 hover:shadow-lg"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        transform: "perspective(1000px) translateZ(0px)",
                      }}
                    >
                      <motion.span className="relative z-10">
                        {tabContents[activeTab].cta}
                      </motion.span>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-r from-gray-100 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Select All Tab - Smaller button below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-4 flex justify-center"
          >
            <motion.button
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-sky-500 to-sky-700 text-white shadow-lg"
                  : "bg-white text-sky-700 shadow"
              }`}
              onClick={() => handleTabChange("all")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All In One Platform
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroDesktop;
