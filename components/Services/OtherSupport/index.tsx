"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tab } from "@headlessui/react";
import { cn } from "@/utils/lib/cn";
import Image from "next/image";

type SupportTab = {
  id: number;
  title: string;
  icon: string;
  content: {
    heading: string;
    description: string;
    image: string;
    features: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
};

const OtherSupport = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const supportTabs: SupportTab[] = [
    {
      id: 1,
      title: "Visit Visa",
      icon: "/icons/mental-health.svg",
      content: {
        heading: "Visit Visa Support",
        description:
          "Our comprehensive visit visa services provide personalized assistance for individuals planning temporary stays in the UK. Our team of experienced professionals is dedicated to helping you navigate the application process and ensure compliance with all requirements.",
        image: "/images/mental-health-support.jpg",
        features: [
          {
            title: "Application Guidance",
            description: "Step-by-step assistance with visa application forms",
            icon: "/icons/therapy.svg",
          },
          {
            title: "Document Review",
            description: "Thorough review of supporting documentation",
            icon: "/icons/group.svg",
          },
          {
            title: "Interview Preparation",
            description: "Comprehensive preparation for visa interviews",
            icon: "/icons/crisis.svg",
          },
        ],
      },
    },
    {
      id: 2,
      title: "ADR Visa",
      icon: "/icons/education.svg",
      content: {
        heading: "ADR Visa Assistance",
        description:
          "We offer specialized ADR visa support services to help applicants successfully navigate this specific visa category. Our programs are designed to address diverse requirements and provide the guidance necessary for application success.",
        image: "/images/education-support.jpg",
        features: [
          {
            title: "Eligibility Assessment",
            description: "Personalized evaluation of qualification criteria",
            icon: "/icons/tutoring.svg",
          },
          {
            title: "Documentation Support",
            description: "Comprehensive guidance on required documentation",
            icon: "/icons/assessment.svg",
          },
          {
            title: "Application Strategy",
            description:
              "Building effective strategies for successful outcomes",
            icon: "/icons/study.svg",
          },
        ],
      },
    },
    {
      id: 3,
      title: "Student Visa",
      icon: "/icons/financial.svg",
      content: {
        heading: "Student Visa Services",
        description:
          "Comprehensive support for international students seeking to study in the UK, including application guidance, documentation preparation, and compliance assistance.",
        image: "/images/financial-aid.jpg",
        features: [
          {
            title: "CAS Guidance",
            description: "Support with Confirmation of Acceptance for Studies",
            icon: "/icons/financial.svg",
          },
          {
            title: "Financial Requirements",
            description: "Assistance with financial evidence preparation",
            icon: "/icons/assessment.svg",
          },
          {
            title: "Student Status Support",
            description: "Ongoing assistance with maintaining student status",
            icon: "/icons/study.svg",
          },
        ],
      },
    },
    {
      id: 4,
      title: "Graduate Visa",
      icon: "/icons/legal.svg",
      content: {
        heading: "Graduate Visa Support",
        description:
          "Specialized assistance for international graduates seeking to remain in the UK after completing their studies, with comprehensive guidance throughout the application process.",
        image: "/images/legal-assistance.jpg",
        features: [
          {
            title: "Eligibility Verification",
            description: "Confirming qualification for graduate route visa",
            icon: "/icons/legal.svg",
          },
          {
            title: "Timeline Planning",
            description: "Strategic planning for optimal application timing",
            icon: "/icons/assessment.svg",
          },
          {
            title: "Documentation Support",
            description: "Assistance with gathering required evidence",
            icon: "/icons/document.svg",
          },
        ],
      },
    },
    {
      id: 5,
      title: "Skilled Worker Visa",
      icon: "/icons/housing.svg",
      content: {
        heading: "Skilled Worker Visa Services",
        description:
          "Expert guidance for professionals seeking employment in the UK through the Skilled Worker route, including sponsor liaison and application preparation.",
        image: "/images/housing-support.jpg",
        features: [
          {
            title: "Sponsor Coordination",
            description: "Liaison with UK employers and sponsors",
            icon: "/icons/housing.svg",
          },
          {
            title: "Points Assessment",
            description: "Evaluation of points-based eligibility criteria",
            icon: "/icons/assessment.svg",
          },
          {
            title: "Salary Threshold Guidance",
            description: "Assistance with meeting financial requirements",
            icon: "/icons/financial.svg",
          },
        ],
      },
    },
    {
      id: 6,
      title: "Entrepreneur Extension Visa",
      icon: "/icons/career.svg",
      content: {
        heading: "Entrepreneur Extension Services",
        description:
          "Specialized support for business owners seeking to extend their stay in the UK through entrepreneurship routes, with comprehensive business plan and documentation assistance.",
        image: "/images/career-guidance.jpg",
        features: [
          {
            title: "Business Plan Review",
            description: "Expert evaluation of business documentation",
            icon: "/icons/career.svg",
          },
          {
            title: "Investment Evidence",
            description: "Assistance with financial documentation",
            icon: "/icons/financial.svg",
          },
          {
            title: "Extension Strategy",
            description: "Strategic planning for successful visa extension",
            icon: "/icons/strategy.svg",
          },
        ],
      },
    },
    {
      id: 7,
      title: "Ukraine Sponsorship Scheme",
      icon: "/icons/community.svg",
      content: {
        heading: "Ukraine Sponsorship Support",
        description:
          "Dedicated assistance for Ukrainian nationals and sponsors under the Ukraine Sponsorship Scheme, providing comprehensive guidance throughout the application process.",
        image: "/images/community-resources.jpg",
        features: [
          {
            title: "Sponsor Matching",
            description: "Support with finding suitable sponsors",
            icon: "/icons/community.svg",
          },
          {
            title: "Application Processing",
            description: "Step-by-step guidance through application procedures",
            icon: "/icons/document.svg",
          },
          {
            title: "Settlement Assistance",
            description: "Support with integration and settlement resources",
            icon: "/icons/housing.svg",
          },
        ],
      },
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
            Additional Support Services
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            Comprehensive assistance tailored to your unique needs. Explore our
            range of specialized support options.
          </p>
        </div>

        <Tab.Group onChange={setSelectedTab} defaultIndex={0}>
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="lg:w-1/4">
              <div className="sticky top-24 rounded-xl bg-white p-1 shadow-lg dark:bg-slate-800">
                <Tab.List className="flex flex-col space-y-1">
                  {supportTabs.map((tab) => (
                    <Tab
                      key={tab.id}
                      className={({ selected }) =>
                        cn(
                          "flex items-center gap-3 rounded-lg px-4 py-3 text-left transition-all duration-200 ease-in-out",
                          selected
                            ? "bg-gradient-to-l from-blue-500 to-sky-400 text-white shadow-md"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700",
                        )
                      }
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm dark:bg-slate-700">
                        <div className="h-5 w-5 opacity-80">
                          {/* Placeholder for icon - replace with actual icon component */}
                          <span className="text-xs">{tab.id}</span>
                        </div>
                      </div>
                      <span className="font-medium">{tab.title}</span>
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <div className="lg:w-3/4">
              <Tab.Panels className="mt-2 lg:mt-0">
                <AnimatePresence mode="wait">
                  {supportTabs.map((tab, idx) => (
                    <Tab.Panel
                      key={tab.id}
                      static
                      className={cn(selectedTab === idx ? "block" : "hidden")}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-slate-800"
                      >
                        <div className="relative h-72 w-full">
                          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-transparent" />
                          <div className="absolute bottom-6 left-6 z-20 text-white">
                            <h3 className="text-3xl font-bold">
                              {tab.content.heading}
                            </h3>
                          </div>
                          <div className="relative h-full w-full">
                            {/* Replace with actual Image component when images are available */}
                            <div className="absolute inset-0 animate-pulse bg-slate-200 dark:bg-slate-700"></div>
                          </div>
                        </div>

                        <div className="p-8">
                          <p className="mb-8 text-lg text-slate-700 dark:text-slate-200">
                            {tab.content.description}
                          </p>

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
                                className="rounded-lg bg-slate-50 p-6 transition-shadow hover:shadow-md dark:bg-slate-700/50"
                              >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                                  <div className="h-6 w-6 text-blue-500 dark:text-blue-300">
                                    {/* Placeholder for icon */}
                                    <span className="text-xs">{index + 1}</span>
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

                          <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-700">
                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                              <p className="text-slate-600 dark:text-slate-300">
                                Need more information about our{" "}
                                {tab.title.toLowerCase()} services?
                              </p>
                              <button className="rounded-full bg-gradient-to-l from-blue-500 to-sky-400 px-6 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl">
                                Schedule Consultation
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Tab.Panel>
                  ))}
                </AnimatePresence>
              </Tab.Panels>
            </div>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
};

export default OtherSupport;
