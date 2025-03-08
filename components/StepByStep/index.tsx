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

// Custom cursor component that follows mouse position with delay
// const CustomCursor = () => {
//   const cursorX = useMotionValue(0);
//   const cursorY = useMotionValue(0);

//   const springConfig = { damping: 25, stiffness: 700 };
//   const cursorXSpring = useSpring(cursorX, springConfig);
//   const cursorYSpring = useSpring(cursorY, springConfig);

//   // useEffect(() => {
//   //   const moveCursor = (e) => {
//   //     cursorX.set(e.clientX);
//   //     cursorY.set(e.clientY);
//   //   };

//   //   window.addEventListener("mousemove", moveCursor);
//   //   return () => {
//   //     window.removeEventListener("mousemove", moveCursor);
//   //   };
//   // }, [cursorX, cursorY]);

//   return (
//     <motion.div
//       className="pointer-events-none fixed left-0 top-0 z-50 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-600 mix-blend-difference lg:block"
//       style={{
//         x: cursorXSpring,
//         y: cursorYSpring,
//       }}
//     />
//   );
// };

// 3D rotating cube for step navigation
// const RotatingCube = ({ currentStep, setCurrentStep, steps }) => {
//   const [isHovering, setIsHovering] = useState(null);
//   const cubeRef = useRef(null);

//   return (
//     <div className="perspective-1000 mx-auto my-12 h-40 w-40">
//       <motion.div
//         ref={cubeRef}
//         className="transform-style-3d relative h-full w-full"
//         animate={{
//           rotateY: currentStep * 90,
//         }}
//         transition={{
//           type: "spring",
//           damping: 20,
//           stiffness: 100,
//         }}
//       >
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             className="backface-hidden absolute inset-0 flex cursor-pointer items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-white"
//             style={{
//               transform: `rotateY(${index * 90}deg) translateZ(80px)`,
//             }}
//             whileHover={{ scale: 1.05 }}
//             onClick={() => setCurrentStep(index)}
//             onHoverStart={() => setIsHovering(index)}
//             onHoverEnd={() => setIsHovering(null)}
//           >
//             <div className="text-center">
//               <span className="block text-3xl font-bold">{step.id}</span>
//               <motion.span
//                 className="mt-2 block text-xs"
//                 animate={{
//                   opacity: isHovering === index ? 1 : 0.7,
//                   y: isHovering === index ? 0 : 5,
//                 }}
//               >
//                 {step.title}
//               </motion.span>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// Particle effect component
// const ParticleEffect = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {[...Array(100)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute h-1 w-1 rounded-full bg-blue-500"
//           initial={{
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//             opacity: Math.random() * 0.5,
//             scale: Math.random() * 3,
//           }}
//           animate={{
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//             opacity: [0.1, 0.5, 0.1],
//             scale: [1, 2, 1],
//           }}
//           transition={{
//             duration: Math.random() * 20 + 10,
//             repeat: Infinity,
//             repeatType: "mirror",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// Animated path component for journey visualization
const JourneyPath = ({ currentStep, totalSteps }) => {
  const pathLength = useMotionValue(0);
  const springPathLength = useSpring(pathLength, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    pathLength.set(currentStep / (totalSteps - 1));
  }, [currentStep, totalSteps, pathLength]);

  return (
    <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2">
      <svg
        viewBox="0 0 2 100"
        className="h-full w-full overflow-visible"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 1,0 L 1,100"
          stroke="#E2E8F0"
          strokeWidth="2"
          fill="none"
        />
        <motion.path
          d="M 1,0 L 1,100"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="100"
          style={{
            strokeDashoffset: useTransform(
              springPathLength,
              (v) => 100 - v * 100,
            ),
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
      </svg>

      {[...Array(totalSteps)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 h-4 w-4 -translate-x-1/2 transform rounded-full bg-white shadow-md"
          style={{ top: `${(i / (totalSteps - 1)) * 100}%` }}
          animate={{
            scale: currentStep >= i ? 1.2 : 0.8,
            backgroundColor: currentStep >= i ? "#2B92F5" : "#E2E8F0",
          }}
        />
      ))}
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

// Animated step card with parallax effects
const AdvancedStepCard = ({ step, isActive }) => {
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
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-sky-600 px-6 py-2 font-medium text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute left-0 h-full w-0 bg-white opacity-20 transition-all duration-300 group-hover:w-full" />
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

// Timeline line with animated segments
// const TimelineSegment = ({ progress }) => {
//   return (
//     <div className="relative h-1 w-full bg-gray-200">
//       <motion.div
//         className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-600 to-indigo-600"
//         style={{ width: `${progress}%` }}
//         transition={{ type: "spring", damping: 40, stiffness: 90 }}
//       />
//     </div>
//   );
// };

// Main component
const StepByStep = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const steps = [
    {
      id: 1,
      image: "/images/steps/step-1.png",
      title: "Initial Assessment",
      description:
        "We evaluate your eligibility for the UK Skilled Worker Visa based on your qualifications and experience.",
    },
    {
      id: 2,
      image: "/images/steps/step-2.png",
      title: "Documentation Preparation",
      description:
        "Our team helps you gather and prepare all necessary documentation for your visa application.",
    },
    {
      id: 3,
      image: "/images/steps/step-3.png",
      title: "Visa Application",
      description:
        "We guide you through the entire application process, ensuring all requirements are met.",
    },
    {
      id: 4,
      image: "/images/steps/step-4.png",
      title: "Moving to the UK",
      description:
        "Once approved, we help you with the transition to starting your new life in the UK.",
    },
  ];

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
      {/* <CustomCursor /> */}

      {/* Background effects */}
      {/* <div className="fixed inset-0 -z-10 opacity-10">
        <ParticleEffect />
      </div> */}

      {/* Floating text */}
      {/* <div className="pointer-events-none fixed left-0 right-0 top-1/2 -z-10 overflow-hidden whitespace-nowrap text-[20vw] font-black uppercase leading-none text-blue-600 opacity-5">
        <motion.div style={{ x: textX }}>
          UK Visa Journey UK Visa Journey
        </motion.div>
      </div> */}

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
              className="relative mb-6 text-5xl font-black tracking-tight text-gray-900 md:text-6xl lg:text-7xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="relative inline-block">
                <span className="relative z-10">Your Path to the UK</span>
                <motion.span
                  className="absolute -bottom-2 left-0 -z-10 h-6 w-full bg-blue-200 opacity-70"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mb-8 max-w-2xl text-xl text-gray-600"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our innovative approach to securing your UK Skilled
              Worker Visa with our expert guidance and support at every step.
            </motion.p>

            {/* <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <TimelineSegment
                progress={((currentStep + 1) / steps.length) * 100}
              />
            </motion.div> */}
          </div>

          {/* 3D Navigation cube */}
          {/* <RotatingCube
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            steps={steps}
          /> */}

          {/* Interactive steps */}
          <div className="relative mt-32">
            <JourneyPath currentStep={currentStep} totalSteps={steps.length} />

            <div className="space-y-40">
              {steps.map((step, index) => (
                <AdvancedStepCard
                  key={step.id}
                  step={step}
                  isActive={currentStep === index}
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
                  "radial-gradient(circle at 20% 30%, rgba(79, 70, 229, 0.4) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 70%, rgba(79, 70, 229, 0.4) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />

            <motion.h2
              className="mb-6 text-4xl font-bold"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Begin Your UK Journey Today
            </motion.h2>

            <motion.p
              className="mb-8 text-lg text-blue-100"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Take the first step towards your new life in the United Kingdom
              with our expert guidance.
            </motion.p>

            <motion.button
              className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-sky-700 shadow-lg transition-all duration-300 hover:shadow-xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Start Assessment</span>
              <span className="absolute bottom-0 left-0 h-0 w-full bg-gradient-to-r from-blue-200 to-indigo-200 transition-all duration-300 group-hover:h-full"></span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default StepByStep;
