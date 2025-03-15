"use client";

// File: /components/Blog/BlogHeader.tsx
import React from "react";

const BlogHeader = () => {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
        <h1 className="mb-4 text-center text-3xl font-bold text-gray-800">
          Our Blogs
        </h1>
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
