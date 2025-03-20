"use client";

// File: /components/Blog/TrendingPosts.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const TrendingPosts = () => {
  return (
    <div className="w-full">
      <h2 className="mb-4 text-2xl font-bold text-black">Trending Posts</h2>
      <div className="flex flex-col space-y-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex gap-2">
            <div className="flex-shrink-0">
              <Image
                src={`/images/blog/blog-0${(index % 3) + 1}.png`}
                alt="Trending post"
                width={80}
                height={80}
                className="h-20 w-20 object-cover"
              />
            </div>
            <div className="flex flex-1 items-center bg-gradient-to-t from-sky-500/80 via-sky-500 to-sky-500/90 px-4 transition-colors duration-300 hover:bg-gradient-to-t hover:from-sky-500/90 hover:via-sky-500 hover:to-sky-500">
              <Link
                href={`/blog/trending-${index + 1}`}
                className="text-sm text-gray-100 hover:text-white"
              >
                Lorem ipsum dolor sit amet adipis elit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
