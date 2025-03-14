"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: "What is a sponsor licence, and why do I need one?",
      answer: (
        <p>
          A <span className="text-black">sponsor licence</span> allows UK
          businesses to legally hire skilled workers from outside the UK.
          Without it, you cannot sponsor visas for international employees.
        </p>
      ),
    },
    {
      question: "Can I sponsor an employee who is already in the UK?",
      answer: (
        <p>
          Yes, you can sponsor an employee already in the UK, provided they have
          the right immigration status and meet the eligibility requirements for
          the specific visa category you're sponsoring them under.
        </p>
      ),
    },
    {
      question: "How long does it take to obtain a sponsor licence?",
      answer: (
        <p>
          The standard processing time for a sponsor licence application is
          typically 8 weeks from the date of submission. However, premium
          processing is available for an additional fee, which can reduce the
          processing time to 10 working days.
        </p>
      ),
    },
    {
      question: "What are the costs associated with a sponsor licence?",
      answer: (
        <div>
          <p>The main costs associated with a sponsor licence include:</p>
          <ul className="mt-2 list-disc pl-5">
            <li>
              Application fee: £536 for small businesses or £1,476 for
              medium/large businesses
            </li>
            <li>Certificate of Sponsorship: £199 per worker</li>
            <li>
              Immigration Skills Charge: £364 to £1,000 per year per worker
            </li>
            <li>
              Additional legal fees if you use a law firm to assist with the
              application
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Can I reapply if my application is refused?",
      answer: (
        <p>
          Yes, you can reapply if your sponsor licence application is refused.
          However, it's important to address the reasons for the refusal before
          submitting a new application. There is no cooling-off period, but
          reapplying without addressing the issues will likely result in another
          refusal.
        </p>
      ),
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <motion.h1
          className="mb-16 text-center text-4xl font-bold text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
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
      </div>
    </div>
  );
};

export default FAQSection;
