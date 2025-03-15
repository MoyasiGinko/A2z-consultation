"use client";

// File: /components/Blog/TrendingPosts.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const TrendingPosts = () => {
  return (
    <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-bold">Trending Posts</h3>
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <Image
                src="/images/blog/placeholder.jpg"
                alt="Trending post"
                width={60}
                height={60}
                className="h-16 w-16 rounded object-cover"
              />
            </div>
            <div className="flex-1">
              <Link
                href={`/blog/trending-${index + 1}`}
                className="text-sm font-medium text-teal-600 hover:text-teal-800"
              >
                Lorem ipsum dolor sit amet dolores est
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
