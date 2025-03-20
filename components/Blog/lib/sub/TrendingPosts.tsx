"use client";

// File: /components/Blog/TrendingPosts.tsx
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TrendingPosts = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="w-full">
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        className="mb-4 text-2xl font-bold text-black"
      >
        Trending Posts
      </motion.h2>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col space-y-2"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex gap-2"
            whileHover={{
              scale: 1.02,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 15,
              },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="flex-shrink-0 overflow-hidden"
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                },
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.8 },
                }}
              >
                <Image
                  src={`/images/blog/blog-0${(index % 3) + 1}.png`}
                  alt="Trending post"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="flex flex-1 items-center bg-gradient-to-t from-sky-500/80 via-sky-500 to-sky-500/90 px-4"
              whileHover={{
                x: 5,
                background:
                  "linear-gradient(to top, rgba(14, 165, 233, 0.9), rgb(14, 165, 233), rgba(12, 162, 233, 0.95))",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                },
              }}
            >
              <Link
                href={`/blog/trending-${index + 1}`}
                className="text-sm text-gray-100 hover:text-white"
              >
                <motion.span
                  whileHover={{
                    x: 3,
                    transition: { type: "spring", stiffness: 500 },
                  }}
                  className="block"
                >
                  Lorem ipsum dolor sit amet adipis elit
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrendingPosts;
