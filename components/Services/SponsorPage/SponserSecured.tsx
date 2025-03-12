"use client";
import React from "react";
import { motion } from "framer-motion";

const SponsorSecured: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
    tap: { scale: 0.98 },
  };

  return (
    <div className="w-full bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.h1
          className="mb-6 text-center text-4xl font-bold text-[#0e9dcc]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sponsor Licence Secured?
        </motion.h1>

        <motion.p
          className="mx-auto mb-4 max-w-4xl text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Why not Look for how we can help you to Maintain your Compliance in
          order to reduce risk of losing licence
        </motion.p>

        <motion.p
          className="mx-auto mb-12 max-w-4xl text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Looking for candidates & Visa Application - Seamless process and Visa
          guranteed <span className="font-medium">FAQ</span>
        </motion.p>

        {/* Info Card tooltip */}
        {/* <motion.div
          className="relative mx-auto mb-6 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute -top-12 right-0">
            <div className="rounded-md bg-gray-900 px-4 py-2 text-sm text-white">
              icon name "stamp"
            </div>
            <div className="absolute -bottom-1 right-6 h-3 w-3 rotate-45 bg-gray-900"></div>
          </div>
        </motion.div> */}

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Compliance Card */}
          <motion.div
            className="rounded-lg bg-[#f7fbff] p-8 shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-md bg-[#1565c0] p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Compliance
              </h2>
            </div>

            <p className="mb-6 text-gray-600">
              Cillum qui nulla qui eu ullamco est. Ipsum esse occaecat proident
              nulla nostrud laborum enim cillum reprehenderit sunt voluptate
              consequat. Ad cillum cup
            </p>

            <motion.button
              className="flex w-full items-center justify-center rounded-md bg-[#1565c0] px-4 py-3 text-white"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </motion.button>
          </motion.div>

          {/* Skilled Worker Visa Card */}
          <motion.div
            className="rounded-lg bg-[#f7fbff] p-8 shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            whileHover="hover"
          >
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-md bg-[#1565c0] p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Skilled Worker Visa
              </h2>
            </div>

            <p className="mb-6 text-gray-600">
              Cillum qui nulla qui eu ullamco est. Ipsum esse occaecat proident
              nulla nostrud laborum enim cillum reprehenderit sunt voluptate
              consequat. Ad cillum cup
            </p>

            <motion.button
              className="flex w-full items-center justify-center rounded-md bg-[#1565c0] px-4 py-3 text-white"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SponsorSecured;
