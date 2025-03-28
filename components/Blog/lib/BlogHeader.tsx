import React from "react";
import Link from "next/link";

interface BlogHeaderProps {
  categoryTitle?: string;
}

const BlogHeader = ({ categoryTitle }: BlogHeaderProps) => {
  return (
    <div className="relative z-10 overflow-hidden bg-gradient-to-b from-blue-900 to-indigo-900 px-4 pb-16 pt-24 text-white md:px-8 lg:pb-20 lg:pt-28">
      <div className="mx-auto max-w-c-1280">
        <div className="text-center">
          <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {categoryTitle ? `${categoryTitle} Blog Posts` : "Blog & Resources"}
          </h1>
          <p className="mx-auto max-w-3xl text-lg opacity-90">
            {categoryTitle
              ? `Browse our collection of articles about ${categoryTitle}`
              : "Find lots of useful information that answers the most common questions"}
          </p>

          {/* Breadcrumb */}
          <div className="mt-8 flex justify-center space-x-2 text-sm">
            <Link href="/" className="opacity-70 hover:opacity-100">
              Home
            </Link>
            <span>•</span>
            <Link href="/blog" className="opacity-70 hover:opacity-100">
              Blog
            </Link>
            {categoryTitle && (
              <>
                <span>•</span>
                <span className="font-medium">{categoryTitle}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 z-[-1] opacity-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect width="1" height="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default BlogHeader;
