"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface Brand {
  id: string;
  src: string;
  alt: string;
  width?: number; // Custom width for each logo
  height?: number; // Custom height for each logo
  objectFit?: "cover" | "contain" | "fill"; // Added object-fit control
  animationDelay?: number;
}

const Brands: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Define brands with individual size controls and object-fit properties
  const brands: Brand[] = [
    {
      id: "brand1",
      src: "/images/brands/logo-1.png",
      alt: "Premium Brand Partner",
      width: 140, // Fixed width
      height: 50, // Fixed height
      objectFit: "fill", // Default to contain
      animationDelay: 0.1,
    },
    {
      id: "brand2",
      src: "/images/brands/logo-2.png",
      alt: "Enterprise Solution Partner",
      width: 100,
      height: 50,
      objectFit: "contain", // Example of using cover instead
      animationDelay: 0.2,
    },
    {
      id: "brand3",
      src: "/images/brands/logo-3.png",
      alt: "Technology Innovator",
      width: 100,
      height: 50,
      objectFit: "contain", // Example of using fill
      animationDelay: 0.3,
    },
    {
      id: "brand4",
      src: "/images/brands/logo-4.png",
      alt: "Industry Leader",
      width: 128,
      height: 50,
      objectFit: "fill",
      animationDelay: 0.4,
    },
    {
      id: "brand5",
      src: "/images/brands/logo-5.png",
      alt: "Global Partner",
      width: 100,
      height: 70,
      objectFit: "contain",
      animationDelay: 0.5,
    },
    {
      id: "brand6",
      src: "/images/brands/logo-6.png",
      alt: "Strategic Alliance",
      width: 100,
      height: 50,
      objectFit: "contain",
      animationDelay: 0.6,
    },
    {
      id: "brand7",
      src: "/images/brands/logo-7.png",
      alt: "Innovative Solutions",
      width: 100,
      height: 50,
      objectFit: "contain",
      animationDelay: 0.7,
    },
    {
      id: "brand8",
      src: "/images/brands/logo-8.png",
      alt: "Trusted Partner",
      width: 100,
      height: 50,
      objectFit: "contain",
      animationDelay: 0.8,
    },
  ];

  // Create unique identifiers for each brand in each row
  const renderBrandSet = (rowId: string) => {
    return brands.map((brand) => {
      // Create a unique ID combining row and brand IDs
      const uniqueId = `${rowId}-${brand.id}`;

      return (
        <div
          key={uniqueId}
          className="brand-container relative mx-6 flex items-center justify-center" // Added flex and center alignment
          onMouseEnter={() => setHoveredItem(uniqueId)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div
            className={`logo-container flex items-center justify-center transition-transform duration-300 ${
              hoveredItem === uniqueId ? "scale-110" : ""
            }`}
            style={{
              width: `${brand.width}px`,
              height: `${brand.height}px`,
              position: "relative",
            }}
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              fill
              className={`object-${brand.objectFit || "contain"}`}
            />
          </div>
        </div>
      );
    });
  };

  // Define each set with a specific ID for each row and copy
  const renderMultipleSets = (rowId: string) => {
    return (
      <>
        {renderBrandSet(`${rowId}-set1`)}
        {renderBrandSet(`${rowId}-set2`)}
        {renderBrandSet(`${rowId}-set3`)}
        {renderBrandSet(`${rowId}-set4`)}
      </>
    );
  };

  return (
    <section
      ref={sectionRef}
      className={`brand-showcase py-20 transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}
    >
      <div className="mx-auto max-w-6xl md:max-w-full">
        <div className="mb-12 text-center">
          <h2
            className={`mb-4
            text-3xl font-bold text-gray-950 transition-all
            delay-300 duration-700 md:text-4xl
            ${inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          `}
          >
            Trusted by UK Employers Across Industries
          </h2>
          <p
            className={`
            mx-auto max-w-2xl text-gray-600
            transition-all delay-500 duration-700
            ${inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          `}
          >
            Join the network of leading companies transforming their workforce
            management
          </p>
        </div>

        <div
          ref={sliderRef}
          className="brand-slider-container mx-auto w-[95%] overflow-hidden md:w-[80%]"
        >
          {/* First row - moving left to right */}
          <div className="slider-row relative flex h-16 md:h-20 lg:h-24">
            <div className="slider-track flex" data-direction="left">
              {renderMultipleSets("row1")}
            </div>
          </div>

          {/* Second row - moving right to left */}
          <div className="slider-row relative mt-6 flex h-16 md:h-20 lg:h-24">
            <div className="slider-track flex" data-direction="right">
              {renderMultipleSets("row2")}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .brand-showcase {
          background: linear-gradient(
            180deg,
            rgba(249, 250, 251, 0) 0%,
            rgba(249, 250, 251, 1) 100%
          );
        }

        .logo-container {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          border-radius: 6px;
          padding: 4px;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slider-track {
          width: max-content;
          animation-duration: 30s; /* Adjusted animation speed */
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          will-change: transform; /* Performance optimization */
        }

        .slider-track[data-direction="left"] {
          animation-name: scrollLeft;
        }

        .slider-track[data-direction="right"] {
          animation-name: scrollRight;
        }

        .slider-row::before,
        .slider-row::after {
          content: "";
          position: absolute;
          height: 100%;
          z-index: 2;
          width: var(--fade-width);
          top: 0;
          pointer-events: none;
        }

        .slider-row::before {
          left: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .slider-row::after {
          right: 0;
          background: linear-gradient(
            270deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .slider-row {
          --fade-width: 60px;
        }

        @media (min-width: 768px) {
          .slider-row {
            --fade-width: 100px;
          }
        }

        @media (min-width: 1024px) {
          .slider-row {
            --fade-width: 120px;
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-25%));
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(calc(-25%));
          }
          100% {
            transform: translateX(0);
          }
        }

        /* More subtle floating animation for brands */
        .brand-container {
          animation: float 6s ease-in-out infinite;
        }

        .brand-container:nth-child(2n) {
          animation-delay: 0.5s;
        }

        .brand-container:nth-child(3n) {
          animation-delay: 1s;
        }

        /* Prevent hover effects during animation */
        @media (prefers-reduced-motion: reduce) {
          .slider-track {
            animation: none;
          }
          .brand-container {
            animation: none;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default Brands;
