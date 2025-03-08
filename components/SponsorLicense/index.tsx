"use client";

import React, { useId, useEffect, useRef } from "react";
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
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const CheckIcon: React.FC = () => (
    <motion.svg
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotate: 360 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
      className="shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="20"
      height="20"
      zoomAndPan="magnify"
      viewBox="0 0 375 374.999991"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>
        <clipPath id={clipPathId1}>
          <path
            d="M 31 6.328125 L 375 6.328125 L 375 351 L 31 351 Z M 31 6.328125 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id={clipPathId2}>
          <path
            d="M 0 16 L 352 16 L 352 368.578125 L 0 368.578125 Z M 0 16 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipPathId1})`}>
        <path
          fill="#00a2fb"
          d="M 203.09375 6.347656 C 297.980469 6.347656 375 83.265625 375 178.253906 C 375 273.136719 297.980469 350.15625 203.09375 350.15625 C 108.105469 350.15625 31.085938 273.136719 31.085938 178.253906 C 31.085938 83.265625 108.105469 6.347656 203.09375 6.347656 Z M 179.75 206.972656 C 166.40625 190.511719 146.179688 163.296875 130.488281 173.945312 C 120.488281 180.722656 115.742188 188.464844 119.945312 197.078125 C 124.359375 206.117188 164.058594 244.960938 174.164062 250.652344 C 187.929688 258.390625 197.402344 248.707031 206.003906 232.035156 C 226.230469 192.980469 251.621094 141.5625 310.027344 103.054688 C 288.835938 106.925781 247.734375 135.222656 236.878906 144.367188 C 209.976562 167.167969 186.109375 199.882812 179.75 206.972656 Z M 179.75 206.972656 "
          fillOpacity="1"
          fillRule="evenodd"
        />
      </g>
      <g clipPath={`url(#${clipPathId2})`}>
        <path
          fill="#000000"
          d="M 175.878906 16.890625 C 222.675781 16.890625 267.210938 35.28125 300.34375 68.414062 C 333.371094 101.441406 351.761719 145.976562 351.761719 192.769531 C 351.761719 239.566406 333.371094 284.101562 300.34375 317.128906 C 267.210938 350.261719 222.675781 368.652344 175.878906 368.652344 C 129.085938 368.652344 84.65625 350.261719 51.523438 317.128906 C 18.386719 284.101562 0 239.566406 0 192.769531 C 0 145.976562 18.386719 101.441406 51.523438 68.414062 C 84.65625 35.28125 129.085938 16.890625 175.878906 16.890625 Z M 294.652344 74.015625 C 263.023438 42.390625 220.625 24.859375 175.878906 24.859375 C 131.242188 24.859375 88.738281 42.390625 57.109375 74.015625 C 25.585938 105.644531 7.949219 148.027344 7.949219 192.789062 C 7.949219 237.429688 25.585938 279.933594 57.109375 311.558594 C 88.738281 343.082031 131.222656 360.71875 175.878906 360.71875 C 220.625 360.71875 263.023438 343.082031 294.652344 311.558594 C 326.28125 279.933594 343.808594 237.445312 343.808594 192.789062 C 343.808594 148.027344 326.28125 105.644531 294.652344 74.015625 Z M 294.652344 74.015625 "
          fillOpacity="1"
          fillRule="evenodd"
        />
      </g>
      <g fill="#00a2fb" fillOpacity="1">
        <g transform="translate(187.499992, 155.987039)">
          <g>
            <path d="M 2.109375 0.078125 C 1.804688 0.078125 1.566406 -0.00390625 1.390625 -0.171875 C 1.222656 -0.335938 1.140625 -0.5625 1.140625 -0.84375 C 1.140625 -1.113281 1.222656 -1.332031 1.390625 -1.5 C 1.566406 -1.675781 1.804688 -1.765625 2.109375 -1.765625 C 2.410156 -1.765625 2.644531 -1.679688 2.8125 -1.515625 C 2.988281 -1.347656 3.078125 -1.128906 3.078125 -0.859375 C 3.078125 -0.578125 2.988281 -0.347656 2.8125 -0.171875 C 2.632812 -0.00390625 2.398438 0.078125 2.109375 0.078125 Z M 2.109375 0.078125 " />
          </g>
        </g>
      </g>
    </motion.svg>
  );

  const ListItem: React.FC<ListItemProps> = ({ content, index }) => (
    <motion.li
      variants={listItemVariants}
      className="text-muted-foreground group mb-5 flex gap-4 md:mb-4 lg:items-center"
    >
      <CheckIcon />
      <motion.p
        className="group-hover:text-foreground select-none text-sm font-semibold transition-all duration-300 md:text-base lg:text-lg lg:font-bold"
        whileHover={{ x: 8, transition: { duration: 0.2 } }}
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
    <section className="grid place-items-center py-20" ref={sectionRef}>
      <motion.div
        className="container grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="flex items-center justify-center lg:justify-start">
          <div>
            <motion.h2
              className="section-title relative mb-12 text-3xl font-bold text-[#286096] md:text-4xl lg:mb-14 lg:text-left lg:text-5xl"
              variants={titleVariants}
            >
              Why You Need
              <div className="text-[#00a2fb]">Sponsor Licence?</div>
              <div className="indicator lg:indicator-left lg:w-full">
                <motion.span
                  className="indicator-line"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  }}
                />
              </div>
            </motion.h2>

            <motion.ul variants={listContainerVariants}>
              {listItems.map((item, index) => (
                <ListItem key={index} content={item} index={index} />
              ))}
            </motion.ul>
          </div>
        </div>

        <motion.div
          className="flex items-center justify-center lg:justify-end"
          variants={imageVariants}
        >
          <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200 lg:max-w-xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >
              <Image
                src="/images/hero/sponsor-passport.png"
                alt="UK Sponsor License illustration"
                width={600}
                height={450}
                className="w-full"
                priority={true}
              />
            </motion.div>

            {/* Floating elements animation */}
            <motion.div
              className="absolute right-1/4 top-1/4 h-12 w-12 rounded-full bg-blue-100/30"
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 h-8 w-8 rounded-full bg-blue-200/40"
              animate={{
                y: [0, 15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .section-title {
          position: relative;
        }

        .indicator {
          position: relative;
          display: block;
          margin-top: 15px;
          height: 4px;
        }

        .indicator-line {
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #00a2fb, transparent);
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default SponsorLicenceSection;
