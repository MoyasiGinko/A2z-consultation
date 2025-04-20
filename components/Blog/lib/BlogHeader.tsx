import React from "react";
import Link from "next/link";

interface BlogHeaderProps {
  categoryTitle?: string;
}

const BlogHeader = ({ categoryTitle }: BlogHeaderProps) => {
  return (
    <div
      className="relative z-10 overflow-hidden bg-cover bg-center px-4 pb-16 pt-24 text-white md:px-8 lg:pb-20 lg:pt-28"
      style={{
        backgroundImage: `url('/images/features/blog-header.png')`, // Replace with your image path
      }}
    >
      <div className="mx-auto max-w-c-1280">
        <div className="text-center">
          <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {categoryTitle ? `${categoryTitle} Blog Posts` : "Blogs & Articles"}
          </h1>
          <p className="mx-auto max-w-3xl text-lg">
            {categoryTitle
              ? `Browse our collection of articles about ${categoryTitle}`
              : "Find lots of useful information that answers the most common questions"}
          </p>

          {/* Breadcrumb */}
          <div className="mt-8 flex justify-center space-x-2 text-sm">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span>•</span>
            <Link href="/blog/category/show-all" className=" hover:text-black">
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

      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-white/80 via-sky-500/70 to-sky-600/60"></div>
    </div>
  );
};

export default BlogHeader;
