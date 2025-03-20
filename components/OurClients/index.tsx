"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ClientsHero from "./ClientsHero";
import TestimonialSlider from "./TestimonialSlider";
import Image from "next/image";
import {
  FaQuoteLeft,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const ClientsPage = () => {
  const [activeClient, setActiveClient] = useState(0);
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);
  interface Client {
    id: number;
    name: string;
    title: string;
    social: {
      instagram?: string;
      youtube?: string;
      twitter?: string;
      linkedin?: string;
    };
    category: string;
    industry: string;
    image: string;
    logo: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    testimonial?: {
      quote: string;
      author: string;
      position: string;
    };
    imagePath: string;
  }

  const [selectedCase, setSelectedCase] = useState<Client | null>(null);

  // Client data array
  const clients = [
    {
      id: 1,
      name: "Mike Thurston",
      title: "Founder of THRST",
      social: {
        instagram: "@mikethurston",
        youtube: "Mike Thurston",
      },
      category: "influencer",
      industry: "Fitness",
      image: "/images/user/user-01.png",
      logo: "/images/clients/logo-thrst.png",
      description:
        "Mike Thurston is a British fitness guru who co-founded the health and fitness company Aurora Athletic. He runs a self-titled YouTube channel where he uploads vlogs and fitness training videos for over 1.3 million subscribers.",
      challenge:
        "Mike approached us as he had outgrown his accountant and was looking for a specialist that could manage the A-Z of his finances and taxes so he could concentrate on building his brand and content creation.",
      solution:
        "We took over the headache of managing Mike's accounts, bookkeeping and taxes and provided him with just the information he needed to know how his business was performing, what cash he could take from the business and what his tax liabilities were. We also assisted Mike with moving to Dubai, setting up a company there and becoming non-resident for tax purposes in the UK so he could keep more of what he earns.",
      results: [
        "Streamlined financial management",
        "Successful Dubai relocation",
        "Significant tax savings",
      ],
      testimonial: {
        quote:
          "For years, my accounts were an absolute mess! Capture sorted out my accounts, and helped me relocate and set up my business in Dubai!",
        author: "Mike Thurston",
        position: "YouTuber with 1.4M+ subs",
      },
      imagePath: "/images/clients/mike-case.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "CEO of FitLife",
      social: {
        instagram: "@fitlifesarah",
        twitter: "@sarahjohnson",
      },
      category: "startup",
      industry: "Health Tech",
      image: "/images/user/user-02.png",
      logo: "/images/clients/logo-fitlife.png",
      description:
        "Sarah Johnson is the visionary behind FitLife, an online platform offering personalized nutrition plans and workout routines. Her company serves over 50,000 active subscribers across Europe and North America.",
      challenge:
        "Sarah came to us when FitLife was experiencing rapid growth. She needed guidance on international tax implications, structured revenue management, and strategies to scale her business operations efficiently.",
      solution:
        "We implemented a comprehensive financial system that automated her revenue tracking across multiple currencies. Our team developed tax-efficient strategies for her expanding international customer base and provided monthly performance analytics that informed her business decisions. We also restructured her company to optimize for future investment opportunities.",
      results: [
        "300% growth over 12 months",
        "Optimized international tax structure",
        "Secured Series A funding",
      ],
      testimonial: {
        quote:
          "The financial clarity and strategic guidance provided by this team has been instrumental in our 300% growth over the past year. They don't just manage numbers – they're true business partners.",
        author: "Sarah Johnson",
        position: "CEO, FitLife International",
      },
      imagePath: "/images/clients/sarah-case.jpg",
    },
    {
      id: 3,
      name: "David Chen",
      title: "Founder of TechNova",
      social: {
        linkedin: "davidchen",
        twitter: "@davidchen",
      },
      category: "enterprise",
      industry: "SaaS",
      image: "/images/user/user-03.png",
      logo: "/images/clients/logo-technova.png",
      description:
        "David Chen revolutionized the SaaS industry with TechNova, a platform that simplifies cloud computing for small businesses. His innovative approach has attracted venture capital and a loyal customer base of over 10,000 businesses.",
      challenge:
        "David needed assistance with managing investor relations, complex funding rounds, and creating a financial roadmap that would support aggressive growth while maintaining profitability metrics that would attract further investment.",
      solution:
        "Our team created a sophisticated financial modeling system that projected various growth scenarios. We established investor reporting protocols, managed two successful funding rounds, and implemented financial controls that reduced operational costs by 22% while supporting 175% year-over-year growth.",
      results: [
        "22% reduction in operational costs",
        "Successfully secured Series B funding",
        "175% year-over-year growth",
      ],
      testimonial: {
        quote:
          "Their expertise in the tech sector and understanding of SaaS metrics made all the difference. They've helped us navigate complex funding rounds and build a financial foundation that impresses even the most scrutinizing investors.",
        author: "David Chen",
        position: "Founder & CTO, TechNova",
      },
      imagePath: "/images/clients/david-case.jpg",
    },
  ];

  // Filter clients based on category and search
  const filteredClients = clients.filter((client) => {
    const matchesCategory =
      filterCategory === "all" || client.category === filterCategory;
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle case study modal
  const openCaseStudy = (client) => {
    setSelectedCase(client);
    setShowCaseStudyModal(true);
  };

  // Client section variants
  const clientVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <ClientsHero />

      {/* Client Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Our Success Stories
          </h2>

          {filteredClients.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-xl text-gray-600">
                No clients match your search criteria.
              </p>
              <button
                className="mt-4 rounded-full bg-blue-600 px-6 py-2 text-white"
                onClick={() => {
                  setFilterCategory("all");
                  setSearchQuery("");
                }}
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredClients.map((client, i) => (
                <motion.div
                  key={client.id}
                  custom={i}
                  variants={clientVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="overflow-hidden rounded-xl bg-white shadow-lg"
                  onClick={() => openCaseStudy(client)}
                >
                  {/* Client header */}
                  <div className="relative flex h-48 items-end bg-gradient-to-r from-blue-600 to-blue-400">
                    <div className="absolute right-4 top-4 rounded-lg bg-white p-2 shadow-md">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={60}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute left-4 top-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium
                        ${
                          client.category === "influencer"
                            ? "bg-purple-100 text-purple-700"
                            : client.category === "startup"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {client.industry}
                      </span>
                    </div>
                    <div className="flex items-end p-6">
                      <div className="flex items-center">
                        <div className="mr-4 h-20 w-20 overflow-hidden rounded-full border-4 border-white">
                          <Image
                            src={client.image}
                            alt={client.name}
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {client.name}
                          </h3>
                          <p className="text-blue-100">{client.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Client content */}
                  <div className="p-6">
                    <p className="mb-6 line-clamp-3 text-gray-600">
                      {client.description}
                    </p>

                    {/* Social links */}
                    <div className="mb-6 flex space-x-3">
                      {client.social.instagram && (
                        <span className="flex items-center text-sm text-pink-500">
                          <FaInstagram className="mr-1" />{" "}
                          {client.social.instagram}
                        </span>
                      )}
                      {client.social.youtube && (
                        <span className="flex items-center text-sm text-red-500">
                          <FaYoutube className="mr-1" /> {client.social.youtube}
                        </span>
                      )}
                      {client.social.twitter && (
                        <span className="flex items-center text-sm text-blue-400">
                          <FaTwitter className="mr-1" /> {client.social.twitter}
                        </span>
                      )}
                      {client.social.linkedin && (
                        <span className="flex items-center text-sm text-blue-700">
                          <FaLinkedinIn className="mr-1" />{" "}
                          {client.social.linkedin}
                        </span>
                      )}
                    </div>

                    {/* Results preview */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {client.results.map((result, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                        >
                          {result}
                        </span>
                      ))}
                    </div>

                    {/* Testimonial preview */}
                    {client.testimonial && (
                      <div className="relative rounded-lg bg-gray-50 p-4">
                        <FaQuoteLeft className="absolute left-2 top-2 text-3xl text-blue-300 opacity-20" />
                        <p className="line-clamp-2 pl-6 text-sm italic text-gray-600">
                          "{client.testimonial.quote}"
                        </p>
                      </div>
                    )}

                    {/* Call to action */}
                    <div className="mt-6 flex justify-end border-t border-gray-100 pt-4">
                      <button className="flex items-center px-4 py-1 text-sm font-medium text-blue-600">
                        View Case Study
                        <svg
                          className="ml-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to become our next success story?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Join our growing list of satisfied clients and see how we can
            transform your business.
          </p>
          <button className="transform rounded-full bg-blue-600 px-8 py-3 font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700">
            Book Your Consultation
          </button>
        </div>
      </section>

      {/* Modal for case studies */}
      {showCaseStudyModal && selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-xl bg-white">
            {/* Close button */}
            <button
              className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowCaseStudyModal(false)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Case study content */}
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedCase.imagePath}
                alt={`${selectedCase.name} case study`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
                <div className="p-6">
                  <div className="mb-3 inline-block rounded-lg bg-white p-2 shadow-lg">
                    <Image
                      src={selectedCase.logo}
                      alt={selectedCase.name}
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {selectedCase.name}
                  </h2>
                  <p className="text-blue-200">{selectedCase.title}</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-8">
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  Challenge
                </h3>
                <p className="text-gray-600">{selectedCase.challenge}</p>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  Solution
                </h3>
                <p className="text-gray-600">{selectedCase.solution}</p>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 text-xl font-bold text-gray-800">
                  Results
                </h3>
                <ul className="space-y-2">
                  {selectedCase.results.map((result, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <svg
                        className="mr-2 h-5 w-5 flex-shrink-0 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedCase.testimonial && (
                <div className="rounded-lg bg-blue-50 p-6">
                  <FaQuoteLeft className="mb-4 text-xl text-blue-300" />
                  <blockquote className="mb-4 text-lg italic text-gray-700">
                    "{selectedCase.testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-medium text-gray-900">
                      {selectedCase.testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {selectedCase.testimonial.position}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientsPage;
