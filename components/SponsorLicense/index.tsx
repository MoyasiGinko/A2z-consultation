"use client";

import React, { useId, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

interface ListItemProps {
  content: string;
  index: number;
}

const SponsorLicenceSection: React.FC = () => {
  // Generate unique IDs for SVG elements
  const clipPathId1 = useId();
  const clipPathId2 = useId();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Handle image loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 1, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 1, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const listContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 1, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingElementVariants = {
    animate: (custom: number) => ({
      y: [0, custom, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3 + custom / 10,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    }),
  };

  const CheckIcon: React.FC = () => (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, rotate: 360 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
      className="flex shrink-0 items-center justify-center text-[#00a2fb]"
      style={{ width: "24px", height: "24px" }} // Fixed dimensions using style
    >
      <Image
        src="/images/icon/bulletin.svg"
        alt="Check mark"
        width={24}
        height={24}
        className="h-[24px] w-[24px] object-contain text-[#00a2fb]" // Fixed size with CSS
      />
    </motion.div>
  );

  const ListItem: React.FC<ListItemProps> = ({ content, index }) => (
    <motion.li
      variants={listItemVariants}
      className="group mb-5 flex items-center gap-3 md:mb-4" // Fixed alignment to center for all screens
    >
      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
        {" "}
        {/* Fixed container size */}
        <CheckIcon />
      </div>
      <motion.p
        className="group-hover:text-foreground select-none text-sm font-semibold transition-all duration-300 md:text-base lg:text-lg lg:font-bold"
        whileHover={{ x: 5, transition: { duration: 0.2 } }}
      >
        {content}
      </motion.p>
    </motion.li>
  );

  const listItems = [
    "Recruit Skilled Workers from Outside UK to fill talent gaps.",
    "Hire Right Talent to drive Innovation and Business Growth.",
    "Support your Business Expansion Plan",
    "Stay Competitive in your Industry with Highly Skilled Workers",
    "Allow you to legally employ non-UK workers",
    "Long term Staff Retention & Peace of Mind",
  ];

  return (
    <section
      className="relative overflow-hidden py-12 md:py-16 lg:py-20"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-300 blur-3xl"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        // initial="hidden"
        animate={controls}
      >
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Content Section */}
          <div className="order-1 flex flex-col justify-center sm:order-2 md:order-2 lg:order-2">
            <motion.div
              variants={titleVariants}
              className="mb-8 md:mb-10 lg:mb-12"
            >
              <h2 className="relative bg-gradient-to-t from-sky-500 via-sky-600 to-sky-700 bg-clip-text text-left text-2xl font-bold tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl">
                Why You Need
                <div className="mt-1">Sponsor Licence?</div>
                <div className="relative mt-3 h-1 w-full overflow-hidden rounded-full bg-gray-100 md:mt-4">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#00a2fb] to-transparent"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </div>
              </h2>
            </motion.div>

            <motion.ul
              variants={listContainerVariants}
              className="space-y-4 md:space-y-5"
            >
              {listItems.map((item, index) => (
                <ListItem key={index} content={item} index={index} />
              ))}
            </motion.ul>

            <motion.div className="mt-6 flex items-center justify-start md:mt-8 lg:mt-10">
              <a
                href="/get-in-touch"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-sky-500 to-sky-800 px-6 py-3 text-base font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get Started
              </a>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            className="order-2 flex items-center justify-center md:order-1 lg:order-1 lg:justify-center"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200 p-1 sm:max-w-md md:p-2 lg:w-96 lg:max-w-lg xl:max-w-xl">
              <div className="relative overflow-hidden rounded-2xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isLoaded ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/images/hero/sponsor-passport.png"
                    alt="UK Sponsor License illustration"
                    width={600}
                    height={450}
                    className="w-full object-cover"
                    priority={true}
                    onLoad={() => setIsLoaded(true)}
                  />
                </motion.div>

                {/* Floating elements animation */}
                <motion.div
                  className="absolute right-1/4 top-1/4 h-12 w-12 rounded-full bg-blue-100/30 "
                  custom={-15}
                  variants={floatingElementVariants}
                  animate="animate"
                />
                <motion.div
                  className="absolute bottom-1/4 left-1/4 h-8 w-8 rounded-full bg-blue-200/40 "
                  custom={15}
                  variants={floatingElementVariants}
                  animate="animate"
                />
                <motion.div
                  className="left-1/6 absolute top-1/3 h-6 w-6 rounded-full bg-blue-300/30 "
                  custom={-10}
                  variants={floatingElementVariants}
                  animate="animate"
                />
                <motion.div
                  className="right-1/6 absolute bottom-1/3 h-10 w-10 rounded-full bg-blue-400/20 "
                  custom={20}
                  variants={floatingElementVariants}
                  animate="animate"
                />
              </div>

              {/* Image frame glow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-50"
                animate={{
                  boxShadow: [
                    "0 0 10px 2px rgba(0,162,251,0.3)",
                    "0 0 20px 5px rgba(0,162,251,0.5)",
                    "0 0 10px 2px rgba(0,162,251,0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SponsorLicenceSection;
