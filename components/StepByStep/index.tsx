"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
} from "framer-motion";
import StepModal from "./StepModal";
import UnderlineAnimation from "../Common/UnderlineAnimate";
import { steps, additionalInfo } from "./stepsData"; // Importing step data

// Animated path component for journey visualization
// Enhanced animated path component with optimized performance and advanced animations
const JourneyPath = ({ scrollProgress, totalSteps }) => {
  // Use more responsive spring settings for smoother tracking
  const springPathLength = useSpring(scrollProgress, {
    stiffness: 170, // Higher stiffness for faster response
    damping: 26, // Balanced damping for minimal oscillation
    mass: 0.5, // Lower mass for faster movement
  });

  // Direct transform for path dash offset - no useMemo needed
  const pathDashOffset = useTransform(springPathLength, (v) => 100 - v * 100);

  // Use a separate spring for ball position to allow custom easing
  const ballPositionSpring = useSpring(scrollProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.4,
    restDelta: 0.001, // More precise resting position
  });

  // Calculate milestone positions directly
  const milestones = [...Array(totalSteps)].map((_, i) => i / (totalSteps - 1));

  return (
    <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transform">
      {/* Responsive SVG with better viewBox */}
      <svg
        viewBox="0 0 4 100"
        className="absolute h-full w-full overflow-visible"
        preserveAspectRatio="none"
        style={{ left: 0 }}
      >
        {/* Background track with rounded ends */}
        <motion.path
          d="M 2,1 L 2,99"
          stroke="#E2E8F0"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Progress track with gradient and rounded ends */}
        <motion.path
          d="M 2,1 L 2,99"
          stroke="url(#progressGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="100"
          style={{ strokeDashoffset: pathDashOffset }}
        />

        {/* Enhanced gradient definition with more color stops */}
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="25%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#1D4ED8" />
            <stop offset="75%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>

          {/* Gradient for the ball glow effect */}
          <radialGradient
            id="ballGlow"
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.5"
            fy="0.5"
          >
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </radialGradient>
        </defs>
      </svg>

      {/* Advanced ball indicator with dynamic effects */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 transform"
        style={{
          top: useTransform(ballPositionSpring, [0, 1], ["0%", "100%"]),
          zIndex: 30,
        }}
      >
        {/* Ball glow effect */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
          style={{
            width: "24px",
            height: "24px",
            background: "url(#ballGlow)",
            opacity: 0.6,
          }}
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main ball with dynamic color based on scroll position */}
        <motion.div
          className="relative h-7 w-7 rounded-full shadow-lg"
          style={{
            backgroundColor: "#3B82F6", // Default color
            boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
          }}
          animate={{
            scale: [0.95, 1.05, 0.95],
            backgroundColor: milestones.map((_, i) =>
              i === 0
                ? "#3B82F6"
                : i === totalSteps - 1
                  ? "#1E3A8A"
                  : `hsl(${220 - i * 5}, 84%, 54%)`,
            )[
              Math.min(
                Math.floor(scrollProgress.get() * totalSteps),
                totalSteps - 1,
              )
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Inner ball detail */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white"
            animate={{
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

// Morphing blob background for each step
const MorphingBlob = ({ isActive }) => {
  return (
    <motion.div
      className="absolute -right-48 -top-48 z-0 h-96 w-96 rounded-full opacity-30 blur-3xl"
      animate={{
        background: isActive
          ? [
              "radial-gradient(circle, rgba(59,130,246,0.7) 0%, rgba(147,197,253,0.3) 70%, rgba(255,255,255,0) 100%)",
              "radial-gradient(circle, rgba(37,99,235,0.7) 0%, rgba(96,165,250,0.3) 70%, rgba(255,255,255,0) 100%)",
            ]
          : "radial-gradient(circle, rgba(209,213,219,0.5) 0%, rgba(243,244,246,0.2) 70%, rgba(255,255,255,0) 100%)",
        scale: isActive ? [1, 1.1, 1] : 1,
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

// Animated step card with parallax effects - now with modal trigger
const AdvancedStepCard = ({ step, isActive, onLearnMore }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Handler for the Learn More button
  const handleLearnMoreClick = () => {
    onLearnMore(step);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative mx-auto mb-32 max-w-5xl"
      style={{
        scale,
      }}
      animate={{
        opacity: isActive ? 1 : 0.5,
      }}
    >
      <MorphingBlob isActive={isActive} />

      <motion.div
        className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl transition-all duration-500"
        style={{
          y,
          rotateZ: rotate,
        }}
        whileHover={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-50 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            className="relative z-10 p-8 md:p-12"
            style={{ y: contentY }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.span
              className="mb-3 inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
              variants={itemVariants}
            >
              Stage {step.id}
            </motion.span>

            <motion.h3
              className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
              variants={itemVariants}
            >
              {step.title}
            </motion.h3>

            <motion.p
              className="mb-8 text-lg text-gray-600"
              variants={itemVariants}
            >
              {step.description}
            </motion.p>

            <motion.div className="flex items-center" variants={itemVariants}>
              <motion.button
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-t from-sky-500 via-sky-600 to-sky-700 px-6 py-2 font-medium text-white hover:bg-gradient-to-t hover:from-sky-400 hover:via-sky-600 hover:to-sky-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLearnMoreClick}
              >
                <span className="relative">Learn More</span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center p-6 md:p-12"
            style={{ y: imageY }}
          >
            <motion.div
              className="relative h-64 w-full md:h-80"
              animate={{ rotateY: isActive ? [0, 5, 0] : 0 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="group relative h-full w-full transform transition-transform duration-500 md:hover:scale-105">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-sky-100 to-sky-100 opacity-75 blur-lg group-hover:opacity-100" />
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="h-full w-full object-contain p-4"
                  />
                </div>

                <motion.div
                  className="absolute -right-6 -top-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-3xl text-white shadow-lg"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{
                    scale: isActive ? 1 : 0.8,
                    rotate: isActive ? 0 : -45,
                  }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  {step.id}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main component
const StepByStep = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedStep, setSelectedStep] = useState<(typeof steps)[0] | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const scrollYProgressValue = useMotionValue(0);

  // Use useScroll for the main container
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Use a separate scroll instance specifically for the steps section
  const { scrollYProgress: stepsScrollProgress } = useScroll({
    target: stepsContainerRef,
    offset: ["start start", "end end"],
  });

  // Function to handle opening the modal with the selected step
  const handleLearnMore = (step) => {
    setSelectedStep(step);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Update scrollYProgressValue from stepsScrollProgress
  useEffect(() => {
    const unsubscribe = stepsScrollProgress.onChange((value) => {
      scrollYProgressValue.set(value);
    });
    return () => unsubscribe();
  }, [stepsScrollProgress, scrollYProgressValue]);

  // Auto advance steps on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      const stepIndex = Math.min(
        Math.floor(value * (steps.length + 0.5)),
        steps.length - 1,
      );
      setCurrentStep(stepIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, steps.length]);

  // Magic scroll effect variables
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.05, 0.2, 0.05],
  );
  const textX = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  return (
    <div className="relative overflow-hidden bg-white">
      <section ref={containerRef} className="relative min-h-screen py-24">
        <motion.div
          className="container mx-auto max-w-7xl px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Hero header */}
          <div className="relative mb-40 text-center">
            <motion.div
              className="absolute -top-24 left-1/2 h-60 w-60 -translate-x-1/2 transform rounded-full bg-sky-600 opacity-10 blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <motion.h1
              className="relative mb-6 text-3xl font-black tracking-tight text-gray-900 md:text-4xl lg:text-6xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="relative inline-block">
                <span className="relative mb-4 bg-gradient-to-t from-sky-500 via-sky-600 to-sky-700 bg-clip-text text-center text-2xl font-bold tracking-tight text-transparent sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl">
                  Guide to UK Skilled Worker Visa Sponsorship
                </span>
                <UnderlineAnimation />
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mb-8 max-w-2xl text-xl text-gray-600"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your Path In Securing SPONSOR LICENCE & Skilled Worker Visa
              <span className="block">All in One Platform</span>
            </motion.p>
          </div>

          {/* Interactive steps */}
          <div className="relative mt-32" ref={stepsContainerRef}>
            <JourneyPath
              scrollProgress={scrollYProgressValue}
              totalSteps={steps.length}
            />

            <div className="space-y-40">
              {steps.map((step, index) => (
                <AdvancedStepCard
                  key={step.id}
                  step={step}
                  isActive={currentStep === index}
                  onLearnMore={handleLearnMore}
                />
              ))}
            </div>
          </div>

          {/* CTA section */}
          <motion.div
            className="relative mx-auto mt-40 max-w-4xl rounded-3xl bg-gradient-to-r from-sky-500 to-sky-600 p-12 text-center text-white shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{
                background: [
                  "radial-gradient(circle at 80% 70%, rgba(79, 70, 229, 0.4) 0%, transparent 50%)",
                  "radial-gradient(circle at 40% 50%, rgba(79, 70, 229, 0.4) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight">
              Ready to Start Your UK Journey?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Schedule a consultation with our immigration experts today and
              take the first step toward your new life in the United Kingdom.
            </p>
            <a href="/get-in-touch">
              <motion.button
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-white px-8 py-3 font-medium text-sky-600 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute left-0 h-full w-0 bg-sky-50 opacity-20 transition-all duration-300 group-hover:w-full" />
                <span className="relative">Book Your Consultation</span>
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Background elements */}
        <motion.div
          className="absolute -top-96 left-0 right-0 -z-10 text-[400px] font-black leading-none text-blue-900"
          style={{ opacity: bgOpacity, x: textX }}
        >
          UK VISA
        </motion.div>
      </section>

      {/* Modal for displaying additional step information */}
      <AnimatePresence>
        {isModalOpen && selectedStep && (
          <StepModal
            isOpen={isModalOpen}
            step={selectedStep}
            additionalInfo={additionalInfo[selectedStep.id]}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default StepByStep;
