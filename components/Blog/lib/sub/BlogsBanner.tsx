"use client";

// File: /components/Banner/SponsorLicenceBanner.tsx
import React from "react";
import Image from "next/image";

const BlogsBanner = () => {
  return (
    <div className="relative -z-0 mt-20 h-64 w-full overflow-hidden md:h-80 lg:h-[400px]">
      {/* Background Image - Tower Bridge */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/features/blogs-banner.png"
          alt="Tower Bridge London"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Blue gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-slate-900/90"
        aria-hidden="true"
      />

      {/* Title */}
      <div className="relative flex h-full items-center justify-center px-4 md:px-8">
        <h1 className="text-center text-3xl font-bold tracking-wide text-white md:text-4xl lg:text-5xl">
          How to get a Sponsor licence in UK
        </h1>
      </div>
    </div>
  );
};

export default BlogsBanner;
