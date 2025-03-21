// components/ClientGrid.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ClientGrid = ({ clients, openCaseStudy }) => {
  const [hoveredClient, setHoveredClient] = useState(null);

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const clientVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
        {clients.length > 0
          ? "Our Success Stories"
          : "No clients match your search criteria"}
      </h2>

      {clients.length === 0 && (
        <div className="py-12 text-center">
          <svg
            className="mx-auto h-16 w-16 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <p className="mt-4 text-gray-600">
            Try adjusting your filters or search terms
          </p>
        </div>
      )}

      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {clients.map((client) => (
          <motion.div
            key={client.id}
            variants={clientVariants}
            onHoverStart={() => setHoveredClient(client.id)}
            onHoverEnd={() => setHoveredClient(null)}
            onClick={() => openCaseStudy(client)}
            className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            <div className="relative h-48 overflow-hidden bg-blue-50">
              {/* Client Logo */}
              <motion.div
                className="absolute right-4 top-4 rounded-lg bg-white p-2 shadow-md"
                initial={{ opacity: 0.8, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                <img
                  src={client.logo || "/images/clients/placeholder-logo.png"}
                  alt={`${client.name} logo`}
                  className="h-8 w-auto"
                />
              </motion.div>

              {/* Client Image */}
              <div className="absolute inset-0 flex items-end">
                <motion.div
                  className="mb-6 ml-6 h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-blue-500 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Category Badge */}
              <div className="absolute left-4 top-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold
                  ${
                    client.category === "influencer"
                      ? "bg-purple-100 text-purple-700"
                      : client.category === "startup"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {client.category.charAt(0).toUpperCase() +
                    client.category.slice(1)}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 transition-colors group-hover:text-blue-600">
                    {client.name}
                  </h3>
                  <p className="text-blue-600">{client.title}</p>
                </div>

                <div className="flex space-x-2">
                  {Object.entries(client.social).map(([platform, handle]) => (
                    <motion.button
                      key={platform}
                      className={`flex h-8 w-8 items-center justify-center rounded-full
                        ${
                          platform === "instagram"
                            ? "bg-pink-50 text-pink-600"
                            : platform === "youtube"
                              ? "bg-red-50 text-red-600"
                              : platform === "twitter"
                                ? "bg-blue-50 text-blue-400"
                                : "bg-blue-50 text-blue-700"
                        }`}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {/* Social icons as needed */}
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {platform === "instagram" ? (
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        ) : platform === "youtube" ? (
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        ) : platform === "twitter" ? (
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        ) : (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        )}
                      </svg>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="line-clamp-3 text-gray-600">
                  {client.description}
                </p>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {client.results &&
                  client.results.map((result, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {result}
                    </span>
                  ))}
              </div>

              <div className="mt-6 border-t border-gray-100 pt-4">
                <motion.button
                  className="flex items-center font-medium text-blue-600"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  View Case Study
                  <FaArrowRight className="ml-2 text-sm" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination - if needed */}
      {clients.length > 0 && (
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="rounded border border-gray-300 px-3 py-1 text-gray-500 hover:bg-gray-50">
              &laquo; Previous
            </button>
            <button className="rounded bg-blue-600 px-3 py-1 text-white">
              1
            </button>
            <button className="rounded border border-gray-300 px-3 py-1 text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="rounded border border-gray-300 px-3 py-1 text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="rounded border border-gray-300 px-3 py-1 text-gray-500 hover:bg-gray-50">
              Next &raquo;
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default ClientGrid;
