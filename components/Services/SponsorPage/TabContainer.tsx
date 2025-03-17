"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const TabContainer: React.FC = () => {
  const [hoveredTab, setHoveredTab] = useState<string>("EXPERT REVIEW");
  const [tabPositions, setTabPositions] = useState<
    Array<{ left: number; width: number }>
  >([]);
  const navRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const tabs = [
    "EXPERT REVIEW",
    "SUBMIT APPLICATION",
    "ONGOING SUPPORT",
    "SPONSORSHIP APPROVED",
  ];

  // Measure tabs precisely using refs for each tab
  useEffect(() => {
    const measureTabs = () => {
      if (!navRef.current) return;

      const navElement = navRef.current;
      const navRect = navElement.getBoundingClientRect();

      const positions = tabRefs.current.map((tabRef) => {
        if (!tabRef) return { left: 0, width: 0 };

        const rect = tabRef.getBoundingClientRect();
        return {
          left: rect.left - navRect.left,
          width: rect.width,
        };
      });

      setTabPositions(positions);
    };

    // Initial measurement
    measureTabs();

    // Add debounced resize listener
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measureTabs, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Get current tab index
  const activeTabIndex = tabs.indexOf(hoveredTab);

  // Animation variants for content transitions
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  // Animation variants for the button
  const buttonVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.section
      className="mb-12 py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.h1
        className="text-shadow-md mb-6 bg-gradient-to-r from-[#4fb4dc] via-[#0971a9] to-[#146185] bg-clip-text text-center text-3xl font-bold text-transparent md:mb-12 md:text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Process of Obtaining Sponsor Licence
      </motion.h1>

      <motion.div
        className="font-sans mx-auto max-w-6xl overflow-hidden rounded-lg shadow-2xl md:mx-auto"
        whileHover={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          transition: { duration: 0.3 },
        }}
      >
        <nav
          ref={navRef}
          className="rounded-t-lg bg-gradient-to-r from-[#FFE199] via-[#FFE099] to-[#FFE199] p-3 md:p-2"
        >
          <div className="relative flex w-full flex-col gap-2.5 md:flex-row md:gap-0">
            {tabs.map((tab, index) => (
              <motion.div
                key={tab}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                className={`relative z-10 flex items-center justify-center rounded-md px-6 py-2.5 transition-all
                duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:flex-1 md:py-3
                ${hoveredTab === tab ? "rounded-lg bg-[#00257C] md:bg-transparent" : ""}
                hover:rounded-lg hover:bg-[#00257C] hover:md:bg-transparent`}
                onMouseEnter={() => setHoveredTab(tab)}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                  delay: index * 0.1,
                }}
              >
                <motion.span
                  className={`font-mono md:font-sans whitespace-nowrap
                  text-sm font-medium transition-colors
                  duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                  ${hoveredTab === tab ? "text-white" : "text-gray-800"}`}
                  animate={{
                    scale: hoveredTab === tab ? 1.05 : 1,
                    transition: { duration: 0.2 },
                  }}
                >
                  {tab}
                </motion.span>
              </motion.div>
            ))}

            {/* Improved highlighter with precise positioning and enhanced animation */}
            {tabPositions.length > 0 && (
              <motion.div
                className="pointer-events-none absolute top-0 -ml-2 hidden h-full rounded-md bg-gradient-to-r from-[#12488C] via-[#12388C] to-[#12488C] will-change-transform md:block"
                initial={false}
                animate={{
                  x: tabPositions[activeTabIndex]?.left || 0,
                  width: tabPositions[activeTabIndex]?.width || 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 1,
                }}
                style={{
                  position: "absolute",
                  top: "0",
                  height: "100%",
                  borderRadius: "0.375rem",
                }}
              />
            )}
          </div>
        </nav>

        {/* Fixed height container with responsive layout */}
        <div className="overflow-hidden rounded-b-lg bg-white">
          <div className="flex flex-col md:h-[500px] md:flex-row">
            {/* Left side text content */}
            <div className="flex flex-col justify-center p-6 md:w-1/2 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredTab}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={contentVariants}
                  className="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                >
                  <motion.h1
                    className="font-mono md:font-sans mb-4 text-sm font-semibold text-gray-800 md:text-xl"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {hoveredTab}
                  </motion.h1>

                  {hoveredTab === "EXPERT REVIEW" && (
                    <motion.h2
                      className="font-serif md:font-sans mb-6 text-2xl font-normal leading-tight text-[#1a1a1a] md:mb-8 md:text-4xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Our team of experts will review your eligibility and help
                      you prepare for a successful application.
                    </motion.h2>
                  )}

                  {hoveredTab === "SUBMIT APPLICATION" && (
                    <motion.h2
                      className="font-serif md:font-sans mb-6 text-2xl font-normal leading-tight text-[#1a1a1a] md:mb-8 md:text-4xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      We'll guide you through every step of submitting your
                      sponsor licence application.
                    </motion.h2>
                  )}

                  {hoveredTab === "ONGOING SUPPORT" && (
                    <motion.h2
                      className="font-serif md:font-sans mb-6 text-2xl font-normal leading-tight text-[#1a1a1a] md:mb-8 md:text-4xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Our support continues throughout the application process
                      with dedicated assistance.
                    </motion.h2>
                  )}

                  {hoveredTab === "SPONSORSHIP APPROVED" && (
                    <motion.h2
                      className="font-serif md:font-sans mb-6 text-2xl font-normal leading-tight text-[#1a1a1a] md:mb-8 md:text-4xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Congratulations on your approved sponsor licence! We'll
                      help you understand your new responsibilities.
                    </motion.h2>
                  )}

                  <motion.button
                    className="font-mono md:font-sans rounded-xl bg-[#FFF9EB] px-4 py-2.5 text-sm uppercase tracking-wider text-[#533900] transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white md:px-6 md:py-3"
                    variants={buttonVariants}
                    initial="idle"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    style={{ boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.25)" }}
                  >
                    LEARN MORE
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side image content */}
            <motion.div
              className="relative h-64 md:h-auto md:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src="/images/features/tab-container.png"
                alt="Illustration for content"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default TabContainer;
