"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";

const VisaCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Enhanced parallax for multiple elements
  const passportY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

  // Device detection for performance optimization
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
      setIsMounted(false);
    };
  }, []);

  // Enhanced staggered text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative overflow-hidden py-4 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced gradient overlay with better visual depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002A62] via-blue-800 to-[#002A62]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:gap-5 md:gap-6 lg:flex-row lg:gap-8 xl:gap-10">
          {/* Enhanced Image Section with better animations */}
          <motion.figure
            className="relative mx-auto flex h-[260px] w-[90%] max-w-md items-center justify-center overflow-hidden rounded-3xl sm:h-[280px] md:h-[300px] lg:order-1 lg:col-span-7 lg:h-[360px] lg:w-full lg:max-w-none lg:justify-end xl:h-[400px]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, type: "spring", damping: 18 }}
            style={{ y: passportY }}
          >
            {/* Enhanced animated glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="bg-gradient-radial h-[85%] w-[85%] rounded-2xl from-white/10 to-transparent blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Enhanced Passport with floating animation */}
            {isMounted && (
              <motion.div
                className="relative h-[85%] w-[100%] overflow-hidden rounded-2xl shadow-2xl"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 0.8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/features/gift-1.png"
                  alt="Gift Image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
                  priority
                  style={{ objectPosition: "center" }}
                />

                {/* Enhanced passport shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            )}

            {/* Enhanced decorative elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-sky-400/10 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -left-8 top-8 h-16 w-16 rounded-full bg-sky-300/10 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.figure>

          {/* Enhanced Text Section with staggered animations */}
          <motion.div
            className="mx-auto w-full max-w-[500px] pb-4 text-center lg:col-span-5 lg:mx-0 lg:grid lg:max-w-full lg:place-items-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ y: textY }}
          >
            <div>
              <motion.h2
                className="mb-2 text-2xl font-thin leading-tight sm:text-3xl md:mb-3 lg:mb-5 lg:text-4xl xl:mb-6 xl:text-5xl"
                variants={itemVariants}
              >
                <span className="block">
                  DOWNLOAD OUR FREE GUIDE EXCLUSIVE FOR IMMIGRANTS!
                </span>
                {/* <span className="relative block">
                  IMMIGRANTS!
                  <motion.span
                    className="absolute h-8 w-8 text-lg"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 15, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    ✨
                  </motion.span>
                </span> */}
              </motion.h2>
              <motion.div variants={itemVariants}>
                <motion.button
                  className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-50 to-sky-50 px-6 py-3 font-bold text-blue-950 shadow-lg transition duration-300 hover:shadow-sky-500/30 focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-95 sm:px-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:text-sky-950">
                    Download Here
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/90 via-white to-white/90"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Add subtle button glow effect */}
                  <motion.span
                    className="absolute -inset-1 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(56,189,248,0.4) 0%, rgba(14,165,233,0.4) 100%)",
                    }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default VisaCTA;
