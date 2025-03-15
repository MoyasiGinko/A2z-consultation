"use client";
// File: /components/Banner/FullWidthBanner.tsx
import React from "react";
import Image from "next/image";

interface FullWidthBannerProps {
  title: string;
  backgroundImage: string;
  height?: string;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
}

const FullWidthBanner: React.FC<FullWidthBannerProps> = ({
  title,
  backgroundImage,
  height = "h-64 md:h-80 lg:h-96", // Default height - half-height on various screens
  overlay = true,
  overlayColor = "bg-blue-900",
  overlayOpacity = 40,
}) => {
  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay for better text readability */}
      {overlay && (
        <div
          className={`absolute inset-0 ${overlayColor} opacity-${overlayOpacity}`}
          aria-hidden="true"
        />
      )}

      {/* Content Container */}
      <div className="relative flex h-full items-center justify-center px-4 md:px-8">
        <h1 className="text-center text-3xl font-bold tracking-wide text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default FullWidthBanner;

// <FullWidthBanner
//   title="How to get a Sponsor licence in UK"
//   backgroundImage="/images/tower-bridge-london.jpg"
//   height="h-72 md:h-96 lg:h-[400px]"
//   overlayColor="bg-blue-900"
//   overlayOpacity={50}
// />;
