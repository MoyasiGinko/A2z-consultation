"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import tabsData from "./TabData";
import TabModal from "./TabModal";

const TabContainer: React.FC = () => {
  // Create dynamic tab content data
  const [hoveredTab, setHoveredTab] = useState<string>(tabsData[0].key);
  const [tabPositions, setTabPositions] = useState<
    Array<{ left: number; width: number }>
  >([]);
  const navRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  // New state for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get the tabs array from tabsData
  const tabs = tabsData.map((tab) => tab.key);

  // Get the active tab content
  const activeTabContent =
    tabsData.find((tab) => tab.key === hoveredTab) || tabsData[0];

  // Function to open modal when Learn More is clicked
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  // Animation variants for images
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
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
      <div className="flex justify-center">
        <motion.h1
          className="mb-12 inline-block bg-gradient-to-r from-[#3985ad] via-[#0369a0] to-[#075178] bg-clip-text pb-2 text-center  text-3xl font-bold text-transparent sm:text-3xl md:mb-12 md:text-4xl lg:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Process of Obtaining Sponsor Licence
        </motion.h1>
      </div>

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
            {tabsData.map((tab, index) => (
              <motion.div
                key={tab.key}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                className={`relative z-10 flex items-center justify-center rounded-md px-6 py-2.5 transition-all
                duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:flex-1 md:py-3
                ${hoveredTab === tab.key ? "rounded-lg bg-[#00257C] md:bg-transparent" : ""}
                hover:rounded-lg hover:bg-[#00257C] hover:md:bg-transparent`}
                onMouseEnter={() => setHoveredTab(tab.key)}
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
                  ${hoveredTab === tab.key ? "text-white" : "text-gray-800"}`}
                  animate={{
                    scale: hoveredTab === tab.key ? 1.05 : 1,
                    transition: { duration: 0.2 },
                  }}
                >
                  {tab.title}
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
                    {activeTabContent.title}
                  </motion.h1>

                  <motion.h2
                    className="font-serif md:font-sans mb-6 text-xl font-normal leading-tight text-[#1a1a1a] sm:text-3xl md:mb-8 md:text-4xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {activeTabContent.description}
                  </motion.h2>

                  {/* Update the button to open modal */}
                  <motion.button
                    className="font-mono md:font-sans rounded-lg bg-[#FFF9EB] px-4 py-2.5 text-sm uppercase tracking-wider text-[#533900] transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white md:px-6 md:py-3"
                    variants={buttonVariants}
                    initial="idle"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    style={{ boxShadow: "0 4px 2px 0 rgba(0, 0, 0, 0.25)" }}
                    onClick={handleOpenModal} // Add onClick handler here
                  >
                    LEARN MORE
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side image content with dynamic images */}
            <div className="relative h-64 overflow-hidden md:h-auto md:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredTab}
                  className="absolute inset-0"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={imageVariants}
                >
                  <Image
                    src={activeTabContent.imageSrc}
                    alt={activeTabContent.imageAlt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Add TabModal component */}
      <TabModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={activeTabContent}
      />
    </motion.section>
  );
};

export default TabContainer;
