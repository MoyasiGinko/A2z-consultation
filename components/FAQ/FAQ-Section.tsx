"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: React.ReactNode; // Changed from string to ReactNode
}

interface FAQSectionProps {
  faqItems: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAllItems, setShowAllItems] = useState<boolean>(false);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Initial display shows only first 5 items
  const initialItemsToShow = 5;

  // Determine which items to display based on showAllItems state
  const displayedFaqItems = showAllItems
    ? faqItems
    : faqItems.slice(0, initialItemsToShow);

  // Check if we need to show the "See More" button
  const showSeeMoreButton = faqItems.length > initialItemsToShow;

  return (
    <div id="faq" className="w-full bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <motion.h1
          className="mb-16 text-center text-3xl font-bold  text-black sm:text-3xl md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="space-y-4">
          {displayedFaqItems.map((item, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200 pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className="flex w-full items-center justify-between py-2 text-left focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-lg font-medium text-black">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 text-gray-600">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* See More / See Less button */}
        {showSeeMoreButton && (
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setShowAllItems(!showAllItems)}
              className="rounded-full bg-gradient-to-t from-sky-500 via-sky-600 to-sky-700 px-4 py-2 text-white transition-colors hover:brightness-110"
            >
              {showAllItems
                ? "See Less"
                : `See More (${faqItems.length - initialItemsToShow} more)`}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FAQSection;
