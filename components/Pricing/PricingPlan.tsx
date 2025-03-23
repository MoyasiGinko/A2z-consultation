"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PackageFeature {
  text: string;
}

interface PricingPackage {
  name: string;
  tagline: string;
  text: string;
  color: string;
  ring: string;
  shadowColor: string;
  features: PackageFeature[];
  description: string;
  alwaysExpanded?: boolean;
}

const PricingPackages: React.FC = () => {
  // Expanded states for description sections
  const [expandedStates, setExpandedStates] = useState<{
    [key: string]: boolean;
  }>({
    Gold: false,
    Platinum: false,
    VIP: false,
  });

  // Create refs for each card
  const cardRefs = {
    Gold: useRef<HTMLDivElement>(null),
    Platinum: useRef<HTMLDivElement>(null),
    VIP: useRef<HTMLDivElement>(null),
  };

  const packages: PricingPackage[] = [
    {
      name: "Gold",
      tagline: "Esse magna sunt pariatur culpa quis",
      color: "#3d6582",
      ring: "#3d6582",
      text: "#ffb900",
      shadowColor: "rgba(135, 206, 235, 0.1)", // Sky color with alpha
      features: [
        { text: "Anim magna proident" },
        { text: "Voluptate labore fugiat amet" },
        { text: "Cillum dolore sit cillum" },
        { text: "Veniam aute mollit veniam" },
      ],
      description:
        "Lorem laboris consequat incididunt reprehenderit dolor tempor exercitation ullamco sunt sint cillum occaecat aliquip. Magna commodo et tempor ipsum ut ut ullamco pariatur excepteur mollit tempor. Anim laborum reprehenderit enim duis in minim culpa amet labore veniam fugiat.",
    },
    {
      name: "Platinum",
      tagline: "Esse magna sunt pariatur culpa quis",
      color: "#7986cb",
      ring: "#7986cb",
      text: "#fff",
      shadowColor: "rgba(121, 134, 203, 0.1)", // RGB version of #7986cb with alpha
      features: [
        { text: "Anim magna proident" },
        { text: "Voluptate labore fugiat amet" },
        { text: "Cillum dolore sit cillum" },
        { text: "Veniam aute mollit veniam" },
      ],
      description:
        "Lorem laboris consequat incididunt reprehenderit dolor tempor exercitation ullamco sunt sint cillum occaecat aliquip. Magna commodo et tempor ipsum ut ut ullamco pariatur excepteur mollit tempor. Anim laborum reprehenderit enim duis in minim culpa amet labore veniam fugiat. Laboris esse qui Lorem in Lorem labore sit magna aliquip consectetur i",
    },
    {
      name: "VIP",
      tagline: "Esse magna sunt pariatur culpa quis",
      color: "#ffb900",
      ring: "#ffb900",
      text: "#000",
      shadowColor: "rgba(255, 185, 0, 0.1)", // RGB version of #ffb900 with alpha
      features: [
        { text: "Anim magna proident" },
        { text: "Voluptate labore fugiat amet" },
        { text: "Cillum dolore sit cillum" },
        { text: "Veniam aute mollit veniam" },
      ],
      description:
        "Lorem laboris consequat incididunt reprehenderit dolor tempor exercitation ullamco sunt sint cillum occaecat aliquip. Magna commodo et tempor ipsum ut ut ullamco pariatur excepteur mollit tempor. Anim laborum reprehenderit enim duis in minim culpa amet labore veniam fugiat.",
    },
  ];

  const toggleReadMore = (packageName: string) => {
    setExpandedStates((prevState) => ({
      ...prevState,
      [packageName]: !prevState[packageName],
    }));
  };

  // Generate box shadow style string with glow effect and blur
  const getGlowBoxShadow = (color: string) => {
    return `0 0 30px 10px ${color}, 0 15px 45px 7px ${color}, 0 20px 60px 20px ${color}, 0 25px 75px 25px ${color}`;
  };

  // Enhanced animation variants for main container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Enhanced animation variants for card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Enhanced animation variants for feature items
  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-50 via-white to-amber-50 px-4 py-24">
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="mb-12 inline-block bg-gradient-to-r from-[#459ed2] via-[#0383c8] to-[#0c7cb0] bg-clip-text text-center text-4xl font-bold text-transparent">
          Our Packages
        </h1>
      </motion.div>

      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            className="relative"
            variants={cardVariants}
            layout
            transition={{
              layout: { duration: 0.4, ease: "easeInOut" },
            }}
          >
            <motion.div
              ref={cardRefs[pkg.name]}
              className="relative overflow-hidden rounded-xl bg-white backdrop-blur-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                type: "spring",
              }}
              whileHover={{
                y: -5,
                boxShadow: getGlowBoxShadow(pkg.shadowColor),
                transition: {
                  y: { type: "spring", stiffness: 300, damping: 10 },
                  boxShadow: { duration: 0.2 },
                },
              }}
              layout
              style={{
                boxShadow: getGlowBoxShadow(pkg.shadowColor),
              }}
            >
              {/* Package Header - Using inline style */}
              <motion.div
                className="px-6 py-4 text-center"
                style={{ backgroundColor: pkg.color }}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.h2
                  className="text-3xl font-bold"
                  style={{ color: pkg.text }}
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(0,0,0,0)",
                      "0 0 5px rgba(0,0,0,0.2)",
                      "0 0 0px rgba(0,0,0,0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  {pkg.name}
                </motion.h2>
              </motion.div>
              <div className="z-999 bg-white py-2">
                {/* Package Content */}
                <div className="p-6">
                  <p className="mb-4 italic text-gray-700">{pkg.tagline}</p>

                  <div className="mb-4">
                    <h3 className="mb-3 font-medium">Features</h3>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start"
                          variants={featureVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: index * 0.1 + idx * 0.1 }}
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <motion.svg
                            className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: 1,
                              opacity: 1,
                              rotate: [0, 10, 0],
                            }}
                            transition={{
                              delay: index * 0.1 + idx * 0.1 + 0.2,
                              duration: 0.5,
                              rotate: {
                                duration: 0.3,
                                delay: index * 0.1 + idx * 0.1 + 0.2,
                              },
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </motion.svg>
                          <span>{feature.text}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Description - with improved animation */}
                  <AnimatePresence mode="sync">
                    {(pkg.alwaysExpanded || expandedStates[pkg.name]) && (
                      <motion.div
                        className="mt-4 text-sm text-gray-600"
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          y: 0,
                          transition: {
                            height: {
                              duration: 0.4,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            },
                            opacity: { duration: 0.4, delay: 0.1 },
                            y: { duration: 0.3, delay: 0.1 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          y: -10,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2 },
                            y: { duration: 0.2 },
                          },
                        }}
                      >
                        <p className="mb-4">{pkg.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Read More Button */}
                  <motion.button
                    className="mt-4 flex items-center text-sm text-teal-600"
                    onClick={() => toggleReadMore(pkg.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedStates[pkg.name] ? "Read less" : "Read more"}
                    <motion.svg
                      className="ml-1 h-4 w-4"
                      animate={{
                        rotate: expandedStates[pkg.name] ? 180 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </motion.button>

                  {/* CTA Button - Using inline style */}
                  <a href="/get-in-touch">
                    <motion.button
                      className="mb-4 mt-8 w-full rounded-xl border-2 px-4 py-2"
                      style={{
                        borderColor: pkg.ring,
                        color: pkg.color,
                      }}
                      whileHover={{
                        scale: 1.03,
                        backgroundColor: pkg.color,
                        color: pkg.text,
                        borderColor: pkg.color,
                        transition: {
                          duration: 0.2,
                          ease: "easeOut",
                        },
                      }}
                      whileTap={{
                        scale: 0.98,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        },
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.5 + index * 0.2,
                          duration: 0.3,
                        },
                      }}
                    >
                      Get in touch
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PricingPackages;
