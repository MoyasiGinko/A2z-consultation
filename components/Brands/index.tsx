"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface Brand {
  id: string;
  src: string;
  alt: string;
  baseWidth: number; // Base width for desktop
  baseHeight: number; // Base height for desktop
  objectFit?: "cover" | "contain" | "fill";
  animationDelay?: number;
}

const Brands: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const sliderRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Update dimensions on window resize
  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Handle resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate responsive sizes based on screen width
  const getResponsiveDimensions = (base: { width: number; height: number }) => {
    // Different scale factors based on breakpoints
    let scaleFactor = 1;

    if (dimensions.width < 480) {
      // Mobile
      scaleFactor = 0.6;
    } else if (dimensions.width < 768) {
      // Small tablets
      scaleFactor = 0.7;
    } else if (dimensions.width < 1024) {
      // Large tablets
      scaleFactor = 0.8;
    } else if (dimensions.width < 1280) {
      // Small desktops
      scaleFactor = 0.9;
    }

    return {
      width: Math.round(base.width * scaleFactor),
      height: Math.round(base.height * scaleFactor),
    };
  };

  // Define brands with individual base sizes
  const brands: Brand[] = [
    {
      id: "brand1",
      src: "/images/brands/logo-1.png",
      alt: "Premium Brand Partner",
      baseWidth: 180,
      baseHeight: 50,
      objectFit: "fill",
      animationDelay: 0.1,
    },
    {
      id: "brand2",
      src: "/images/brands/logo-2.png",
      alt: "Enterprise Solution Partner",
      baseWidth: 100,
      baseHeight: 60,
      objectFit: "contain",
      animationDelay: 0.2,
    },
    {
      id: "brand3",
      src: "/images/brands/logo-3.png",
      alt: "Technology Innovator",
      baseWidth: 100,
      baseHeight: 60,
      objectFit: "contain",
      animationDelay: 0.3,
    },
    {
      id: "brand4",
      src: "/images/brands/logo-4.png",
      alt: "Industry Leader",
      baseWidth: 128,
      baseHeight: 50,
      objectFit: "fill",
      animationDelay: 0.4,
    },
    {
      id: "brand5",
      src: "/images/brands/logo-5.png",
      alt: "Global Partner",
      baseWidth: 100,
      baseHeight: 70,
      objectFit: "contain",
      animationDelay: 0.5,
    },
    {
      id: "brand6",
      src: "/images/brands/logo-6.png",
      alt: "Strategic Alliance",
      baseWidth: 120,
      baseHeight: 60,
      objectFit: "contain",
      animationDelay: 0.6,
    },
    {
      id: "brand7",
      src: "/images/brands/logo-7.png",
      alt: "Innovative Solutions",
      baseWidth: 120,
      baseHeight: 60,
      objectFit: "contain",
      animationDelay: 0.7,
    },
    {
      id: "brand8",
      src: "/images/brands/logo-8.png",
      alt: "Trusted Partner",
      baseWidth: 160,
      baseHeight: 60,
      objectFit: "contain",
      animationDelay: 0.8,
    },
  ];

  // Create unique identifiers for each brand in each row
  const renderBrandSet = (rowId: string) => {
    return brands.map((brand) => {
      // Create a unique ID combining row and brand IDs
      const uniqueId = `${rowId}-${brand.id}`;

      // Calculate responsive dimensions
      const { width, height } = getResponsiveDimensions({
        width: brand.baseWidth,
        height: brand.baseHeight,
      });

      return (
        <div
          key={uniqueId}
          className="brand-container relative mx-3 flex items-center justify-center sm:mx-4 md:mx-6 lg:mx-8"
          onMouseEnter={() => setHoveredItem(uniqueId)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div
            className={`logo-container flex items-center justify-center transition-transform duration-300 ${
              hoveredItem === uniqueId ? "scale-110" : ""
            }`}
            style={{
              width: `${width}px`,
              height: `${height}px`,
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
      className={`brand-showcase py-10 transition-opacity duration-1000 sm:py-14 md:py-20 ${inView ? "opacity-100" : "opacity-0"}`}
    >
      <div className="mx-auto max-w-6xl md:max-w-full">
        <div className="mb-8 text-center md:mb-12">
          <h2
            className={`mb-3 text-2xl
            font-bold text-gray-950 transition-all delay-300 duration-700
            sm:text-3xl md:mb-4 md:text-4xl
            ${inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          `}
          >
            Trusted by UK Employers Across Industries
          </h2>
          <p
            className={`
            mx-auto max-w-2xl px-4 text-sm text-gray-600
            transition-all delay-500 duration-700 sm:text-base
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
          <div className="slider-row relative flex h-12 sm:h-14 md:h-16 lg:h-20">
            <div className="slider-track flex" data-direction="left">
              {renderMultipleSets("row1")}
            </div>
          </div>

          {/* Second row - moving right to left */}
          <div className="slider-row relative mt-4 flex h-12 sm:mt-5 sm:h-14 md:mt-6 md:h-16 lg:h-20">
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
          animation-duration: 30s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          will-change: transform;
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
          --fade-width: 40px;
        }

        @media (min-width: 640px) {
          .slider-row {
            --fade-width: 60px;
          }
        }

        @media (min-width: 768px) {
          .slider-row {
            --fade-width: 80px;
          }
        }

        @media (min-width: 1024px) {
          .slider-row {
            --fade-width: 100px;
          }
        }

        @media (min-width: 1280px) {
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
