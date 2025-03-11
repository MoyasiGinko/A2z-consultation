"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const StepModal = ({ isOpen, onClose, step, additionalInfo }) => {
  // Stop propagation to prevent closing when clicking inside modal content
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  // Modal animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
  };

  // Content animation variants
  const contentVariants = {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            variants={modalVariants}
            onClick={handleContentClick}
          >
            {/* Close button */}
            <button
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition-all hover:bg-gray-100 hover:text-gray-900"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal header gradient */}
            <div className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-sky-100 to-transparent" />

            <div className="grid max-h-[90vh] grid-cols-1 overflow-auto md:grid-cols-5">
              {/* Image section */}
              <div className="col-span-2 flex items-center justify-center bg-sky-50 p-8">
                <div className="relative h-64 w-full md:h-80">
                  <div className="group relative h-full w-full">
                    <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-sky-200 to-sky-100 opacity-75 blur-lg" />
                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-white p-4">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="h-full w-full object-contain p-4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content section */}
              <motion.div
                className="col-span-3 flex flex-col p-8"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="mb-3 inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
                  variants={itemVariants}
                >
                  Stage {step.id}
                </motion.div>

                <motion.h3
                  className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
                  variants={itemVariants}
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  className="mb-6 text-lg text-gray-600"
                  variants={itemVariants}
                >
                  {step.description}
                </motion.p>

                {/* Additional information section */}
                <motion.div className="mt-2 space-y-6" variants={itemVariants}>
                  <h4 className="text-xl font-semibold text-gray-800">
                    What to Expect
                  </h4>

                  <p className="text-gray-600">{additionalInfo.expectation}</p>

                  <h4 className="text-xl font-semibold text-gray-800">
                    Required Documents
                  </h4>

                  <ul className="ml-5 list-disc space-y-2 text-gray-600">
                    {additionalInfo.documents.map((doc, idx) => (
                      <li key={idx}>{doc}</li>
                    ))}
                  </ul>

                  <h4 className="text-xl font-semibold text-gray-800">
                    Timeline
                  </h4>

                  <p className="text-gray-600">{additionalInfo.timeline}</p>
                </motion.div>

                {/* CTA button */}
                <motion.div className="mt-8" variants={itemVariants}>
                  <motion.button
                    className="group relative inline-flex items-center overflow-hidden rounded-full bg-sky-600 px-6 py-3 font-medium text-white transition-all hover:bg-sky-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="absolute left-0 h-full w-0 bg-white opacity-20 transition-all duration-300 group-hover:w-full" />
                    <span className="relative">Schedule a Consultation</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StepModal;
