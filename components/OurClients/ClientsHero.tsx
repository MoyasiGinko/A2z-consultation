// components/ClientsHero.jsx
import React from "react";
import { motion } from "framer-motion";

const ClientsHero = () => {
  return (
    <div className="relative overflow-hidden bg-blue-50">
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad1)"
            d="M0,0 C30,40 70,20 100,60 L100,100 L0,100 Z"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6 inline-block rounded-full bg-blue-100 px-6 py-2 font-semibold text-blue-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Success Stories
          </motion.div>

          <motion.h1
            className="mb-6 text-4xl font-bold text-gray-800 md:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Meet Our
            <br />
            <span className="text-blue-600">Amazing Clients</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Discover how we've helped entrepreneurs and businesses achieve
            financial success. From influencers to startups and enterprises, see
            how our clients transformed their financial challenges into growth
            opportunities.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="rounded-full bg-white p-2 shadow-lg">
              <img
                src="/images/clients/logo-1.png"
                alt="Client Logo"
                className="h-12 w-auto grayscale transition-all hover:grayscale-0"
              />
            </div>
            <div className="rounded-full bg-white p-2 shadow-lg">
              <img
                src="/images/clients/logo-2.png"
                alt="Client Logo"
                className="h-12 w-auto grayscale transition-all hover:grayscale-0"
              />
            </div>
            <div className="rounded-full bg-white p-2 shadow-lg">
              <img
                src="/images/clients/logo-3.png"
                alt="Client Logo"
                className="h-12 w-auto grayscale transition-all hover:grayscale-0"
              />
            </div>
            <div className="rounded-full bg-white p-2 shadow-lg">
              <img
                src="/images/clients/logo-4.png"
                alt="Client Logo"
                className="h-12 w-auto grayscale transition-all hover:grayscale-0"
              />
            </div>
            <div className="rounded-full bg-white p-2 shadow-lg">
              <img
                src="/images/clients/logo-5.png"
                alt="Client Logo"
                className="h-12 w-auto grayscale transition-all hover:grayscale-0"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientsHero;
