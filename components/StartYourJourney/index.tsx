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

const StartYourJourney = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Floating animation for passport
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Staggered text animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Particle system for background
  const Particles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/20"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: [
                Math.random() * 0.5 + 0.1,
                Math.random() * 0.8 + 0.2,
                Math.random() * 0.5 + 0.1,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative mt-10 overflow-hidden bg-primary bg-cover bg-center py-16 text-white lg:mt-40 lg:py-24"
      style={{
        backgroundImage: "url(/images/hero/bg-section.png)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/hero/bg-section.png)",
          y: backgroundY,
          scale: 1.2,
        }}
      />

      {/* Particles overlay */}
      <Particles />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-950/80 to-sky-900/80" />

      <div className="container relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-20">
        {/* Image Section with animations */}
        <motion.figure
          className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-3xl md:h-[300px] lg:order-1 lg:col-span-7 lg:h-[400px] lg:justify-end"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, type: "spring", damping: 20 }}
        >
          {/* Animated glow effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="h-[80%] w-[80%] rounded-2xl bg-white/5 blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Passport with floating animation */}
          {isMounted && (
            <motion.div
              className="relative h-[85%] w-[85%] overflow-hidden rounded-2xl shadow-2xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/hero/uk-passport.png"
                alt="UK Passport"
                fill
                className="object-cover"
                style={{ objectPosition: "center" }}
              />

              {/* Passport shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          )}

          {/* Decorative elements */}
          <motion.div
            className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-2xl"
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
            className="absolute -left-8 top-8 h-16 w-16 rounded-full  blur-xl"
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

        {/* Text Section with staggered animations */}
        <motion.div
          className="lg:col-span-5 lg:grid lg:place-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div>
            <motion.h2
              className="mb-2 text-2xl font-black leading-tight md:mb-3 md:text-3xl lg:mb-6 lg:text-4xl xl:mb-6 xl:text-5xl"
              variants={itemVariants}
            >
              <span className="block">Start your journey</span>
              <span className="relative block">
                with us
                <motion.span
                  className="absolute -right-4 -top-1 h-8 w-8 text-3xl"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  ✨
                </motion.span>
              </span>
            </motion.h2>

            <motion.p
              className="mb-8 text-sm font-medium leading-relaxed text-white/90 md:text-base lg:mb-10 xl:mb-16 xl:text-lg"
              variants={itemVariants}
            >
              Expand your team with international talent
              <br className="hidden md:block" /> — worry-free
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.button
                className="relative overflow-hidden rounded-full bg-white px-8 py-3 font-bold text-primary transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get in touch</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StartYourJourney;
