"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { supportTabs } from "./SupportData";

const OtherSupport = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionIndex) => {
    setExpandedSection(expandedSection === sectionIndex ? null : sectionIndex);
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            Support Services
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            Comprehensive assistance tailored to your unique needs. Explore our
            range of specialized support options.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Tab Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 rounded-xl bg-white p-1 shadow-lg dark:bg-slate-800">
              <div className="flex flex-col space-y-1">
                {supportTabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left transition-all duration-200 ease-in-out ${
                      selectedTab === index
                        ? "bg-gradient-to-l from-blue-500 to-sky-400 text-white shadow-md"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                    }`}
                    onClick={() => setSelectedTab(index)}
                  >
                    <div
                      className={`flex h-10 w-10 min-w-[2.5rem] items-center justify-center rounded-full shadow-sm dark:bg-slate-700 ${
                        selectedTab === index
                          ? "bg-gradient-to-r from-green-500 to-green-400"
                          : "bg-gradient-to-r from-sky-500 to-sky-400"
                      }`}
                    >
                      <div className="h-6 min-h-[1.5rem] w-6 min-w-[1.5rem] text-center font-bold opacity-80">
                        {/* Placeholder for icon - replace with actual icon component */}
                        <span className="text-sm text-white">{tab.id}</span>
                      </div>
                    </div>
                    <span className="font-medium">{tab.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Panels */}
          <div className="lg:w-3/4">
            <div className="mt-2 lg:mt-0">
              <AnimatePresence mode="wait">
                {supportTabs.map((tab, idx) => (
                  <div
                    key={tab.id}
                    className={`${selectedTab === idx ? "block" : "hidden"}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-slate-800"
                    >
                      {/* Hero Section with Image */}
                      <div className="relative h-72 w-full">
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-6 left-6 z-20 text-white">
                          <h3 className="text-3xl font-bold">
                            {tab.content.heading}
                          </h3>
                        </div>
                        <div className="relative h-full w-full">
                          {/* Use a placeholder image if the actual image is not available */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400"></div>
                          <div className="absolute inset-0 opacity-60 mix-blend-overlay">
                            <svg
                              className="h-full w-full"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M0,0 L100,0 L100,100 L0,100 Z"
                                fill="url(#grid)"
                              />
                            </svg>
                            <defs>
                              <pattern
                                id="grid"
                                width="10"
                                height="10"
                                patternUnits="userSpaceOnUse"
                              >
                                <path
                                  d="M 10 0 L 0 0 0 10"
                                  fill="none"
                                  stroke="rgba(255,255,255,0.2)"
                                  strokeWidth="0.5"
                                />
                              </pattern>
                            </defs>
                          </div>
                        </div>
                      </div>

                      <div className="p-8">
                        {/* Main Description */}
                        <p className="mb-8 text-lg text-slate-700 dark:text-slate-200">
                          {tab.content.description}
                        </p>

                        {/* Main Content Sections */}
                        {tab.content.mainContent && (
                          <div className="mb-10 space-y-6">
                            {tab.content.mainContent.map(
                              (section, sectionIndex) => (
                                <motion.div
                                  key={sectionIndex}
                                  className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700"
                                >
                                  {/* Section Header - Clickable to expand/collapse */}
                                  <button
                                    className="flex w-full items-center justify-between bg-slate-50 px-6 py-4 text-left transition-colors hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700"
                                    onClick={() => toggleSection(sectionIndex)}
                                  >
                                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
                                      {section.title}
                                    </h4>
                                    <svg
                                      className={`h-5 w-5 transform text-slate-500 transition-transform dark:text-slate-300 ${
                                        expandedSection === sectionIndex
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                      />
                                    </svg>
                                  </button>

                                  {/* Expandable Content */}
                                  <AnimatePresence>
                                    {(expandedSection === sectionIndex ||
                                      expandedSection === null) && (
                                      <motion.div
                                        initial={
                                          expandedSection !== null
                                            ? { height: 0, opacity: 0 }
                                            : { opacity: 1 }
                                        }
                                        animate={{
                                          height: "auto",
                                          opacity: 1,
                                        }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 py-4"
                                      >
                                        <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                                          {section.paragraphs.map(
                                            (paragraph, pIndex) => (
                                              <li
                                                key={pIndex}
                                                className="flex items-start"
                                              >
                                                <svg
                                                  className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-blue-500 dark:text-blue-400"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="currentColor"
                                                >
                                                  <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                  />
                                                </svg>
                                                <span>{paragraph}</span>
                                              </li>
                                            ),
                                          )}
                                        </ul>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </motion.div>
                              ),
                            )}
                          </div>
                        )}

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                          {tab.content.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                              }}
                              className="rounded-lg bg-slate-50 p-6 transition-all hover:scale-105 hover:transform hover:shadow-md dark:bg-slate-700/50"
                            >
                              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                                <div className="h-6 w-6 text-blue-500 dark:text-blue-300">
                                  {/* Placeholder for icon */}
                                  <svg
                                    className="h-full w-full"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <h4 className="mb-2 text-xl font-semibold text-slate-800 dark:text-white">
                                {feature.title}
                              </h4>
                              <p className="text-slate-600 dark:text-slate-300">
                                {feature.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>

                        {/* Call to Action Section */}
                        <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-700">
                          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 p-6 dark:bg-gradient-to-br dark:from-blue-900/20 dark:to-sky-900/20">
                            {tab.content.callToAction && (
                              <>
                                <h4 className="mb-3 text-xl font-bold text-blue-800 dark:text-blue-300">
                                  {tab.content.callToAction.title}
                                </h4>
                                <p className="mb-4 text-slate-600 dark:text-slate-300">
                                  {tab.content.callToAction.description}
                                </p>
                              </>
                            )}
                            <button className="mt-2 rounded-full bg-gradient-to-l from-blue-500 to-sky-400 px-6 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl">
                              Schedule Consultation
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherSupport;
