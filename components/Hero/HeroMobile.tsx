"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const HeroMobile: React.FC = () => {
  // Service card data stored in an object array
  const serviceCards = [
    {
      id: 1,
      type: "SPONSOR LICENCE",
      title: "Free Expert Eligibility Assessment",
      imageName: "sponsor",
    },
    {
      id: 2,
      type: "COMPLIANCE",
      title: "Stay Compliant & Audit Ready",
      imageName: "compliance",
    },
    {
      id: 3,
      type: "SKILLED WORKER VISA",
      title: "Successful Skilled Worker VISA",
      imageName: "immigration",
    },
    {
      id: 4,
      type: "All IN ONE",
      title: "All In One Platform",
      imageName: "all-in-one",
    },
  ];

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

  // Background blob configuration for more dynamic generation
  const backgroundBlobs = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    width: Math.random() * 200 + 100,
    height: Math.random() * 200 + 100,
    left: Math.random() * 100,
    top: Math.random() * 100,
    rotateX: Math.random() * 30,
    rotateY: Math.random() * 30,
    duration: Math.random() * 20 + 15,
  }));

  // 3D surface elements configuration
  const surfaceElements = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    rotateX: i * 5,
    rotateY: i * 3,
    translateZ: i * 10,
    duration: 10 + i * 2,
  }));

  // Service card renderer for mobile view - now using the data from the array
  const renderServiceCard = (card) => (
    <motion.div
      key={card.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + card.id * 0.1 }}
      className="relative min-h-40 min-w-full max-w-56 overflow-hidden rounded-lg bg-gradient-to-r from-[#04A4D8] to-[#025772] p-2 text-white shadow-lg sm:h-48 md:h-56"
    >
      <div className="mb-1 text-center text-xs font-semibold uppercase sm:text-sm md:text-base">
        {card.type}
      </div>
      <div className="mb-1 flex items-center justify-center">
        <div className="relative h-32 min-h-24 w-full sm:h-32 sm:w-full md:h-36 md:w-full">
          <Image
            src={`/images/hero/${card.imageName}.png`}
            alt={`${card.type} illustration`}
            layout="fill"
            className="rounded-md object-cover"
          />
        </div>
      </div>
      <div className="text-center text-xs sm:text-sm md:text-base">
        {card.title}
      </div>
    </motion.div>
  );

  // Animation letters - stored as array for dynamic generation
  const expertInText = "Expert in".split("");

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Enhanced 3D background with gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute h-full w-full bg-white opacity-70"></div>

        {/* 3D surface effect with gradient blobs - dynamically generated */}
        {backgroundBlobs.map((blob) => (
          <motion.div
            key={`blob-${blob.id}`}
            className="absolute rounded-full bg-gradient-to-b from-blue-300 to-blue-100 opacity-30 backdrop-blur-md"
            style={{
              width: `${blob.width}px`,
              height: `${blob.height}px`,
              left: `${blob.left}%`,
              top: `${blob.top}%`,
              filter: "blur(40px)",
              transform: `perspective(1000px) rotateX(${blob.rotateX}deg) rotateY(${blob.rotateY}deg)`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
              rotateX: [blob.rotateX, -blob.rotateX, blob.rotateX],
              rotateY: [blob.rotateY, -blob.rotateY, blob.rotateY],
            }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Additional 3D surface elements - dynamically generated */}
        <div className="absolute h-full w-full overflow-hidden">
          {surfaceElements.map((element) => (
            <motion.div
              key={`surface-${element.id}`}
              className="absolute bg-gradient-to-br from-blue-200 to-transparent"
              style={{
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                opacity: 0.1,
                transform: `perspective(1000px) rotateX(${element.rotateX}deg) rotateY(${element.rotateY}deg) translateZ(${element.translateZ}px)`,
              }}
              animate={{
                rotateX: [
                  element.rotateX,
                  element.rotateX + 2,
                  element.rotateX,
                ],
                rotateY: [
                  element.rotateY,
                  element.rotateY + 2,
                  element.rotateY,
                ],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content - mobile layout */}
      <div className="relative z-10 mx-auto flex flex-col items-center px-6 py-32">
        {/* Left Content with Enhanced 3D Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-20 text-center"
          >
            {/* Animated "Expert in" text with individual letter animations */}
            <motion.div variants={itemVariants} className="mb-2 text-xl ">
              {expertInText.map((letter, index) => (
                <span
                  key={`letter-${index}`}
                  className="inline-block font-medium text-sky-900"
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mb-1 text-xl font-medium text-sky-900"
            >
              Sponsor Licence
            </motion.h2>

            <motion.div variants={itemVariants} className="relative mb-3">
              <h1 className="text-2xl font-bold text-sky-900 ">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="inline-block bg-gradient-to-r from-[#1DA1C9] to-[#0C87AF] bg-clip-text text-transparent"
                  style={{
                    textShadow: "0 2px 10px rgba(29, 161, 201, 0.3)",
                  }}
                >
                  & Work Permit Visas
                </motion.span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="relative mb-8">
              <p className="text-sm text-gray-600">
                Comprehensive Immigration Support
                <br />
                All In One Platform
              </p>
            </motion.div>

            {/* CTA Button - mobile styling */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transform-gpu"
            >
              <Link href="/consultation" className="group inline-block w-full">
                <motion.button
                  className="relative w-56 overflow-hidden rounded-lg bg-gradient-to-r from-sky-500 to-sky-800 px-4 py-3 text-center font-medium text-white shadow-lg transition duration-300 hover:shadow-xl"
                  style={{
                    transform: "perspective(1000px)",
                  }}
                >
                  <motion.span className="relative z-10 flex items-center justify-center">
                    Book Your Consultation
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
        </motion.div>

        {/* Mobile View - Grid of Service Cards - now using map to render dynamic content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-8 grid w-full grid-cols-2 justify-items-center gap-4"
        >
          {serviceCards.map((card) => renderServiceCard(card))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroMobile;
