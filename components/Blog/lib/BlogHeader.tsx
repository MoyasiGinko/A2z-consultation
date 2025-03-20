"use client";

// File: /components/Blog/BlogHeader.tsx
import React from "react";
import { motion } from "framer-motion";

const BlogHeader = () => {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="mb-4 inline-block bg-gradient-to-r from-[#459ed2] via-[#0383c8] to-[#0c7cb0] bg-clip-text text-center text-4xl font-bold text-transparent">
            Our Blogs
          </h1>
        </motion.div>
        <p className="mx-auto max-w-3xl text-center text-gray-600">
          Below you'll find lots of useful information that answers the most
          common questions just like you. Feel free to browse through relevant
          categories to find what you're looking for.
        </p>
      </div>
    </section>
  );
};

export default BlogHeader;
