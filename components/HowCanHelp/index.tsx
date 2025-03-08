"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiSend } from "react-icons/fi";

interface TabContent {
  id: string;
  title: string;
  color: string;
  icon: React.ReactNode;
  content: {
    heading: string;
    description: string;
  };
}

const HowWeCanHelpYou = () => {
  const tabs: TabContent[] = [
    {
      id: "sponsor-licence",
      title: "Sponsor Licence",
      color: "#0ea5e9",
      icon: <FiSend className="h-5 w-5" />,
      content: {
        heading: "Transfer money to anyone, instantly! No fees, no BS.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    },
    {
      id: "compliance",
      title: "Compliance",
      color: "#0ea5e9",
      icon: <FiArrowRight className="h-5 w-5" />,
      content: {
        heading: "Stay compliant with all immigration regulations",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    },
    {
      id: "skilled-worker-visa",
      title: "Skilled Worker Visa",
      color: "#0ea5e9",
      icon: <FiArrowRight className="h-5 w-5" />,
      content: {
        heading: "Streamlined visa process for skilled workers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    },
  ];

  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab || isAnimating) return;
    setIsAnimating(true);
    setActiveTab(tabId);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Staggered animations for tabs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const tabVariants = {
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

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.6,
      },
    },
  };

  const pulseCircle = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white py-16 md:py-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky-100 opacity-30 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-sky-200 opacity-20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative mb-10 text-center text-3xl font-bold tracking-tight text-sky-950 md:text-4xl lg:mb-12 lg:text-5xl"
        >
          How we can help you?
          <motion.span
            className="absolute -bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 transform rounded-full bg-sky-500"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          ></motion.span>
        </motion.h2>

        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mb-16 text-center text-sm font-medium text-sky-700 md:text-base lg:mb-20 lg:text-lg"
        >
          Immigration Support For Your Business
          <br />
          All Through A Single Platform
        </motion.p>

        <div className="rounded-[40px] bg-gradient-to-r from-sky-600 to-sky-800 p-6 md:p-8 lg:p-10">
          <motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="relative z-10 mx-auto mb-8 flex max-w-4xl flex-col gap-4 md:mb-0 md:flex-row md:justify-center md:gap-8"
            >
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  variants={tabVariants}
                  onClick={() => handleTabChange(tab.id)}
                  className={`group relative flex h-12 items-center justify-center rounded-full px-8 font-medium text-black shadow-lg transition-all duration-300 hover:shadow-xl md:h-12 md:px-10 ${
                    activeTab === tab.id
                      ? "scale-105 font-semibold text-sky-600"
                      : "hover:scale-105"
                  }`}
                  style={{ backgroundColor: "#fff" }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.title}
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full ring-2 ring-sky-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative mx-auto mt-12 overflow-hidden rounded-2xl bg-transparent p-1  md:mt-16 md:max-w-4xl"
            >
              {/* Blue background shape */}
              <div className="absolute inset-0 rounded-2xl bg-transparent" />

              {/* Content container */}
              <div className="relative rounded-xl bg-transparent p-6 md:p-8 lg:p-10">
                <motion.div
                  className="absolute -right-0 bottom-0 h-44 w-44 rounded-full bg-sky-50/50"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative flex gap-6"
                  >
                    <div className="hidden h-16 w-16 flex-shrink-0 items-start justify-center rounded-full bg-sky-500 p-4 text-white sm:flex">
                      {activeTabData.icon}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        variants={pulseCircle}
                        animate="animate"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-4 text-xl font-bold text-sky-950 md:text-2xl lg:text-3xl">
                        {activeTabData.content.heading}
                      </h3>
                      <p className="text-sky-800 lg:text-lg">
                        {activeTabData.content.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeCanHelpYou;
