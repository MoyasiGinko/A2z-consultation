"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiSend } from "react-icons/fi";

interface TabContent {
  id: string;
  title: string;
  color: string;
  icon: React.ReactNode;
  image: string;
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
      image: "/images/icon/upload.png",
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
      image: "/images/icon/upload.png",
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
      image: "/images/icon/upload.png",
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

  // Enhanced staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
        stiffness: 120,
        damping: 14,
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
        stiffness: 110,
        damping: 15,
        duration: 0.7,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
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
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.7,
      },
    },
  };

  const pulseCircle = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  // Enhanced background and gradient animations
  const gradientAnimation = {
    animate: {
      background: [
        "linear-gradient(135deg, rgb(2, 132, 199) 0%, rgb(3, 105, 161) 100%)",
        "linear-gradient(165deg, rgb(1, 87, 134) 0%, rgb(3, 105, 161) 100%)",
        "linear-gradient(195deg, rgb(2, 132, 199) 0%, rgb(3, 105, 161) 100%)",
        "linear-gradient(225deg, rgb(1, 87, 134) 0%, rgb(3, 105, 161) 100%)",
        "linear-gradient(135deg, rgb(2, 132, 199) 0%, rgb(3, 105, 161) 100%)",
      ],
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "linear",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky-100 opacity-30 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
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
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100 opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
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
          className="relative mb-8 text-center text-2xl font-bold tracking-tight text-sky-700 sm:text-3xl md:mb-10 md:text-4xl lg:mb-12 lg:text-5xl"
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
          className="mb-10 text-center text-sm font-medium text-gray-600 sm:text-base md:mb-12 lg:mb-16 lg:text-lg"
        >
          Immigration Support For Your Business
          <br className="md:hidden" />
          <span className="hidden md:inline"> - </span>
          All Through A Single Platform
        </motion.p>

        <motion.div
          className="relative mx-auto max-w-7xl rounded-[30px] p-[2px] sm:rounded-[40px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            background:
              "linear-gradient(to right, rgba(2, 132, 199, 0.2), rgba(14, 165, 233, 0.2))",
            boxShadow: "0 0 40px rgba(14, 165, 233, 0.15)",
          }}
        >
          <motion.div
            className="rounded-[30px] sm:rounded-[40px]"
            variants={gradientAnimation}
            animate="animate"
            style={{
              boxShadow: "0 20px 50px rgba(3, 105, 161, 0.3)",
            }}
          >
            <div className="relative w-full rounded-[30px] p-5 sm:rounded-[40px] sm:p-6 md:p-8 lg:p-10">
              {/* White dots at corners */}
              <div className="absolute left-4 top-4 h-3 w-3 rounded-full bg-white sm:left-6 sm:top-6 sm:h-4 sm:w-4 md:left-8 md:top-8"></div>
              <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-white sm:right-6 sm:top-6 sm:h-4 sm:w-4 md:right-8 md:top-8"></div>
              <div className="absolute bottom-4 left-4 h-3 w-3 rounded-full bg-white sm:bottom-6 sm:left-6 sm:h-4 sm:w-4 md:bottom-8 md:left-8"></div>
              <div className="absolute bottom-4 right-4 h-3 w-3 rounded-full bg-white sm:bottom-6 sm:right-6 sm:h-4 sm:w-4 md:bottom-8 md:right-8"></div>

              <motion.div>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  className="relative z-10 mx-auto mb-6 flex max-w-4xl flex-wrap justify-center gap-3 sm:gap-4 md:mb-8 md:flex-row md:justify-center md:gap-6 lg:gap-8"
                >
                  {tabs.map((tab, index) => (
                    <motion.button
                      key={tab.id}
                      variants={tabVariants}
                      custom={index}
                      onClick={() => handleTabChange(tab.id)}
                      className={`group relative flex h-10 items-center justify-center rounded-full px-4 font-medium shadow-lg transition-all duration-300 sm:h-11 sm:px-5 md:h-12 md:px-8 lg:px-10 ${
                        activeTab === tab.id
                          ? "scale-110 bg-white text-sky-600 shadow-xl"
                          : "bg-white/90 text-sky-800 hover:scale-105 hover:bg-white"
                      }`}
                      style={{
                        boxShadow:
                          activeTab === tab.id
                            ? "0 10px 25px rgba(14, 165, 233, 0.25)"
                            : "0 4px 15px rgba(14, 165, 233, 0.15)",
                      }}
                      whileHover={{
                        y: -4,
                        boxShadow: "0 14px 30px rgba(14, 165, 233, 0.25)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tab.title}
                      {/* {activeTab === tab.id && (
                        <motion.span
                          layoutId="activeTab"
                          className="absolute inset-0 rounded-full ring-2 ring-sky-300"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )} */}
                      <motion.span
                        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 opacity-0 blur-sm transition-opacity duration-300"
                        animate={{
                          opacity: activeTab === tab.id ? 0.3 : 0,
                        }}
                      />
                    </motion.button>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={
                    isVisible ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }
                  }
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="relative mx-auto mt-2 overflow-hidden rounded-xl bg-transparent p-1 sm:mt-3 md:mt-4 md:max-w-4xl"
                >
                  {/* Blue background shape */}

                  {/* Content container */}
                  <div className="relative rounded-lg bg-transparent p-4 sm:p-5 md:p-6 lg:p-8">
                    <motion.div
                      className="absolute -right-0 bottom-1 h-40 w-40 rounded-full bg-sky-50/30"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, -10, 0],
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
                        className="relative flex flex-col gap-4 sm:flex-row sm:gap-6"
                      >
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-transparent text-white sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40">
                          <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20">
                            <Image
                              src={activeTabData.image}
                              alt={`${activeTabData.title} icon`}
                              fill
                              className="object-contain"
                            />
                          </div>
                          {/* <motion.div
                            className="absolute inset-0 rounded-full bg-sky-400/10"
                            variants={pulseCircle}
                            animate="animate"
                          /> */}
                        </div>

                        <div className="flex-1">
                          <h3 className="mb-3 text-lg font-bold text-white sm:text-xl md:mb-4 md:text-2xl lg:text-3xl">
                            {activeTabData.content.heading}
                          </h3>
                          <p className="text-sm text-gray-100/80 sm:text-base lg:text-lg">
                            {activeTabData.content.description}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeCanHelpYou;
