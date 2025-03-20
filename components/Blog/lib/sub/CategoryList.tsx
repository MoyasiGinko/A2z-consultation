"use client";

import React from "react";
import { motion } from "framer-motion";

const CategoryList = () => {
  const categories = [
    "Updates/News",
    "Web Development",
    "Helpful Tips & Tricks",
    "Keyword Research",
    "Email Marketing",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      className="mb-8 rounded-lg bg-white p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3
        className="mb-4 text-xl font-bold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Categories
      </motion.h3>
      <motion.ul variants={containerVariants}>
        {categories.map((category, index) => (
          <motion.a
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              background:
                "linear-gradient(to right, #0ea5e9, #0284c7, #0369a1)",
              color: "white",
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.98 }}
            className={`${
              index !== categories.length - 1 ? "mb-2" : ""
            } flex cursor-pointer items-center rounded-md p-2 text-black shadow-md`}
          >
            <motion.svg
              className="mr-2 h-3 w-3 font-extrabold"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </motion.svg>
            <span>{category}</span>
          </motion.a>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default CategoryList;
