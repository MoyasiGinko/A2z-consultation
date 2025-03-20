"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clients from "./ClientsData";

const ClientsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovering, setIsHovering] = useState<null | number>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % clients.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [clients.length]);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const imageVariants = {
    hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } },
    tap: { scale: 0.95, rotate: 0 },
  };

  const socialButtonVariants = {
    hover: { scale: 1.2, y: -5, transition: { duration: 0.2 } },
    tap: { scale: 0.9 },
  };

  const testimonialCardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  const highlightVariants = {
    initial: { width: "0%" },
    animate: { width: "100%", transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Render client grid
  const renderClientGrid = () => {
    return (
      <motion.div
        className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            className={`transform overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-500 ${isHovering === client.id ? "scale-105 shadow-xl" : ""}`}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            onHoverStart={() => setIsHovering(client.id)}
            onHoverEnd={() => setIsHovering(null)}
            onClick={() => setCurrentTestimonial(index)}
          >
            <div className="p-6">
              <div className="flex items-center">
                <motion.div
                  className="relative mr-4"
                  variants={imageVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-500 opacity-30 blur-md"
                    animate={
                      isHovering === client.id ? { scale: 1.2 } : { scale: 1 }
                    }
                    transition={{ duration: 0.5 }}
                  />
                  <img
                    src={client.image}
                    alt={client.name}
                    className="relative z-10 h-16 w-16 rounded-full border-2 border-blue-500 object-cover"
                  />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {client.name}
                  </h3>
                  <p className="text-sm text-blue-600">{client.title}</p>
                  <div className="mt-2 flex space-x-2">
                    {client.social.instagram && (
                      <motion.button
                        variants={socialButtonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="text-pink-600"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </motion.button>
                    )}
                    {client.social.youtube && (
                      <motion.button
                        variants={socialButtonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="text-red-600"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                      </motion.button>
                    )}
                    {client.social.twitter && (
                      <motion.button
                        variants={socialButtonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="text-blue-400"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </motion.button>
                    )}
                    {client.social.linkedin && (
                      <motion.button
                        variants={socialButtonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="text-blue-700"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>

              <motion.div
                className="mt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={
                  isHovering === client.id
                    ? { opacity: 1, height: "auto" }
                    : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm leading-relaxed text-gray-600">
                  {client.description}
                </p>
              </motion.div>

              <motion.div
                className="mt-4 h-1 rounded-full bg-blue-500"
                initial={{ width: "0%" }}
                animate={
                  isHovering === client.id
                    ? { width: "100%" }
                    : { width: "30%" }
                }
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  // Render featured testimonial
  const renderFeaturedTestimonial = () => {
    const client = clients[currentTestimonial];

    return (
      <div className="relative mb-12 mt-24 overflow-hidden bg-gray-100 py-16">
        <motion.div
          className="absolute inset-0 bg-blue-500 opacity-5"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              What Our Clients Say
            </h2>
            <motion.div
              className="mx-auto mt-4 h-1 w-24 bg-blue-500"
              variants={highlightVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={client.id}
                className="relative z-10 mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-xl md:p-12"
                variants={testimonialCardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="flex flex-col items-center md:flex-row md:items-start">
                  <motion.div
                    className="relative mb-6 md:mb-0 md:mr-8"
                    whileHover={{ scale: 1.05, rotate: 3 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-500 opacity-30 blur-md"
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                    <img
                      src={client.image}
                      alt={client.name}
                      className="relative z-10 h-24 w-24 rounded-full border-4 border-blue-500 object-cover"
                    />
                    <motion.div
                      className="absolute -bottom-2 -right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </motion.div>
                  </motion.div>

                  <div className="flex-1 text-center md:text-left">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <svg
                        className="mx-auto mb-4 h-12 w-12 text-blue-500 opacity-30 md:mx-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </motion.div>

                    <motion.blockquote
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="mb-6 text-xl font-medium italic text-gray-800 md:text-2xl"
                    >
                      "{client.testimonial}"
                    </motion.blockquote>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <div className="text-lg font-bold text-gray-900">
                        {client.name}
                      </div>
                      <div className="text-blue-600">{client.position}</div>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="mt-8 border-t border-gray-200 pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <h4 className="mb-3 font-bold text-gray-800">
                    The Challenge:
                  </h4>
                  <p className="mb-4 text-gray-600">{client.challenge}</p>

                  <h4 className="mb-3 font-bold text-gray-800">
                    Our Solution:
                  </h4>
                  <p className="text-gray-600">{client.solution}</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-center">
              {clients.map((_, index) => (
                <motion.button
                  key={index}
                  className={`mx-1 h-3 w-3 rounded-full ${currentTestimonial === index ? "bg-blue-600" : "bg-gray-300"}`}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentTestimonial(index)}
                  animate={
                    currentTestimonial === index
                      ? { scale: [1, 1.2, 1] }
                      : { scale: 1 }
                  }
                  transition={
                    currentTestimonial === index
                      ? { duration: 1.5, repeat: Infinity }
                      : {}
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl font-bold text-gray-800 md:text-5xl"
            animate={{
              textShadow: [
                "0px 0px 0px rgba(0,0,0,0)",
                "0px 4px 4px rgba(0,0,0,0.1)",
                "0px 0px 0px rgba(0,0,0,0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Our Clients
          </motion.h1>
          <motion.div
            className="mx-auto mt-4 h-1 w-24 bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            We're proud to work with amazing entrepreneurs and businesses who
            trust us with their financial success. Here's what they have to say
            about our services.
          </motion.p>
        </motion.div>

        {renderClientGrid()}
        {renderFeaturedTestimonial()}

        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Ready to join our success stories?
          </h2>
          <motion.button
            className="rounded-full bg-blue-600 px-8 py-3 font-bold text-white shadow-lg hover:bg-blue-700"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Consultation
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientsPage;
