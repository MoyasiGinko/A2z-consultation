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
  // Initialize with null dimensions to indicate they haven't been measured yet
  const [dimensions, setDimensions] = useState({
    width: null as number | null,
    height: null as number | null,
  });
  const [isInitialized, setIsInitialized] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const leftTrackRef = useRef<HTMLDivElement>(null);
  const rightTrackRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Calculate size based on current dimensions or screen width breakpoints
  const calculateSize = (brand: Brand) => {
    // Default to a safe size if dimensions haven't been measured yet
    if (!dimensions.width) {
      // Use a mobile-first approach for initial rendering
      const safeFactor = 0.8;
      const height = Math.round(brand.baseHeight * safeFactor);
      const aspectRatio = brand.baseWidth / brand.baseHeight;
      const width = Math.round(height * aspectRatio);
      return { width, height };
    }

    // Apply scale factors based on actual measured screen width
    let scaleFactor = 1.2; // For large desktop

    if (dimensions.width < 480) {
      scaleFactor = 0.8;
    } else if (dimensions.width < 768) {
      scaleFactor = 0.95;
    } else if (dimensions.width < 1024) {
      scaleFactor = 1.1;
    } else if (dimensions.width < 1280) {
      scaleFactor = 1.15;
    }

    // Calculate height based on base height and scale factor
    const height = Math.round(brand.baseHeight * scaleFactor);

    // Calculate width based on aspect ratio
    const aspectRatio = brand.baseWidth / brand.baseHeight;
    const width = Math.round(height * aspectRatio);

    return { width, height };
  };

  // Measure window dimensions immediately on client-side
  useEffect(() => {
    // Skip in SSR
    if (typeof window === "undefined") return;

    // Immediately measure window dimensions
    const measureDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Measure immediately
    measureDimensions();

    // Set up resize listener with debounce
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measureDimensions, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Update responsive styles when dimensions change
  useEffect(() => {
    // Only proceed if we have measured dimensions
    if (dimensions.width !== null) {
      updateResponsiveStyles();
      setIsInitialized(true);
    }
  }, [dimensions]);

  // Function to update all responsive styles based on screen width
  const updateResponsiveStyles = () => {
    try {
      // Check refs exist
      if (!leftTrackRef.current || !rightTrackRef.current) {
        console.warn("Brand slider tracks not found in DOM");
        return;
      }

      // Safeguard for SSR
      if (typeof document === "undefined" || !dimensions.width) return;

      let duration, floatDistance, gapSize, brandMargin;

      // Set values based on screen size
      if (dimensions.width < 480) {
        // Mobile
        duration = "35s";
        floatDistance = "1px";
        gapSize = "1rem";
        brandMargin = "2px";
      } else if (dimensions.width < 768) {
        // Small tablets
        duration = "30s";
        floatDistance = "1.5px";
        gapSize = "1.5rem";
        brandMargin = "4px";
      } else if (dimensions.width < 1024) {
        // Large tablets
        duration = "25s";
        floatDistance = "2px";
        gapSize = "2.5rem";
        brandMargin = "8px";
      } else if (dimensions.width < 1280) {
        // Small desktops
        duration = "22s";
        floatDistance = "2.5px";
        gapSize = "2.8rem";
        brandMargin = "10px";
      } else {
        // Large desktops
        duration = "20s";
        floatDistance = "3px";
        gapSize = "3rem";
        brandMargin = "12px";
      }

      // Apply animation duration to both slider tracks
      leftTrackRef.current.style.animationDuration = duration;
      rightTrackRef.current.style.animationDuration = duration;

      // Apply gap size to slider tracks
      leftTrackRef.current.style.gap = gapSize;
      rightTrackRef.current.style.gap = gapSize;

      // Apply CSS variables for other styles
      document.documentElement.style.setProperty(
        "--float-distance",
        floatDistance,
      );
      document.documentElement.style.setProperty("--brand-margin", brandMargin);

      // Also update all brand containers directly for consistent margins
      const brandContainers = document.querySelectorAll(".brand-container");
      brandContainers.forEach((container) => {
        (container as HTMLElement).style.margin = `0 ${brandMargin}`;
      });
    } catch (error) {
      console.error("Error updating responsive styles:", error);
      // Continue execution - fall back to CSS defaults
    }
  };

  // If image fails to load, handle with fallback
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    target.src = "/images/brands/fallback-logo.png";
    target.onerror = null; // Prevent infinite error loop
  };

  // Define brands with individual base sizes
  const brands: Brand[] = [
    {
      id: "brand1",
      src: "/images/brands/logo-1.png",
      alt: "Premium Brand Partner",
      baseWidth: 140,
      baseHeight: 50,
      objectFit: "contain",
      animationDelay: 0.1,
    },
    {
      id: "brand2",
      src: "/images/brands/logo-2.png",
      alt: "Enterprise Solution Partner",
      baseWidth: 100,
      baseHeight: 50,
      objectFit: "contain",
      animationDelay: 0.2,
    },
    {
      id: "brand3",
      src: "/images/brands/logo-3.png",
      alt: "Technology Innovator",
      baseWidth: 100,
      baseHeight: 40,
      objectFit: "contain",
      animationDelay: 0.3,
    },
    {
      id: "brand4",
      src: "/images/brands/logo-4.png",
      alt: "Industry Leader",
      baseWidth: 128,
      baseHeight: 50,
      objectFit: "contain",
      animationDelay: 0.4,
    },
    {
      id: "brand5",
      src: "/images/brands/logo-5.png",
      alt: "Global Partner",
      baseWidth: 64,
      baseHeight: 64,
      objectFit: "contain",
      animationDelay: 0.5,
    },
    {
      id: "brand6",
      src: "/images/brands/logo-6.png",
      alt: "Strategic Alliance",
      baseWidth: 100,
      baseHeight: 50,
      objectFit: "contain",
      animationDelay: 0.6,
    },
    {
      id: "brand7",
      src: "/images/brands/logo-7.png",
      alt: "Innovative Solutions",
      baseWidth: 80,
      baseHeight: 50,
      objectFit: "contain",
      animationDelay: 0.7,
    },
    {
      id: "brand8",
      src: "/images/brands/logo-8.png",
      alt: "Trusted Partner",
      baseWidth: 100,
      baseHeight: 50,
      objectFit: "contain",
      animationDelay: 0.8,
    },
  ];

  // Create unique identifiers for each brand in each row
  const renderBrandSet = (rowId: string) => {
    return brands.map((brand) => {
      // Create a unique ID combining row and brand IDs
      const uniqueId = `${rowId}-${brand.id}`;

      // Calculate size based on device
      const { width, height } = calculateSize(brand);

      return (
        <div
          key={uniqueId}
          className="brand-container relative flex items-center justify-center"
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
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                fill
                sizes={`(max-width: 480px) 80px, (max-width: 768px) 120px, (max-width: 1024px) 160px, 200px`}
                className={`object-${brand.objectFit || "contain"}`}
                priority={uniqueId.includes("row1-set1")}
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      );
    });
  };

  // Define each set with a specific ID for each row
  const renderMultipleSets = (rowId: string) => {
    return (
      <>
        {renderBrandSet(`${rowId}-set1`)}
        {renderBrandSet(`${rowId}-set2`)}
      </>
    );
  };

  // Don't render content until dimensions are measured to prevent flickering
  const shouldRenderContent = dimensions.width !== null;

  return (
    <section
      ref={sectionRef}
      className={`brand-showcase bg-transparent  py-10 transition-opacity duration-1000 sm:py-12 md:py-16 lg:py-20 xl:py-24 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
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

        {shouldRenderContent && (
          <div
            ref={sliderRef}
            className="brand-slider-container mx-auto w-[95%] overflow-hidden md:w-[80%]"
          >
            {/* First row - moving left to right */}
            <div className="slider-row relative flex h-10 sm:h-12 md:h-14 lg:h-20">
              <div
                ref={leftTrackRef}
                className="slider-track flex"
                data-direction="left"
              >
                {renderMultipleSets("row1")}
              </div>
            </div>

            {/* Second row - moving right to left */}
            <div className="slider-row relative mt-3 flex h-10 sm:mt-4 sm:h-12 md:mt-5 md:h-14 lg:h-20">
              <div
                ref={rightTrackRef}
                className="slider-track flex"
                data-direction="right"
              >
                {renderMultipleSets("row2")}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        /* Fallback values in case JS fails */
        :root {
          --float-distance: 2px;
          --brand-margin: 20px;
        }

        .logo-container {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          border-radius: 6px;
          padding: 8px 12px;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }

        /* Base styles that will be overridden by JS, with fallbacks */
        .brand-container {
          margin: 0 var(--brand-margin, 20px);
        }

        .slider-track {
          width: max-content;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          will-change: transform;
          /* Fallback animation duration if JS fails */
          animation-duration: 25s;
          /* Fallback gap if JS fails */
          gap: 2rem;
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
          --fade-width: 30px;
        }

        @media (min-width: 640px) {
          .slider-row {
            --fade-width: 40px;
          }
        }

        @media (min-width: 768px) {
          .slider-row {
            --fade-width: 60px;
          }
        }

        @media (min-width: 1024px) {
          .slider-row {
            --fade-width: 80px;
          }
        }

        @media (min-width: 1280px) {
          .slider-row {
            --fade-width: 100px;
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

        /* Float animation with dynamic distance set by JS */
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
            animation: none !important;
          }
          .brand-container {
            animation: none !important;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(calc(-1 * var(--float-distance)));
          }
          100% {
            transform: translateY(0px);
          }
        }

        /* Optimizations for smaller screens */
        @media (max-width: 640px) {
          /* Smaller brands on mobile need less margin between items */
          .brand-container {
            transition: transform 0.2s ease-out;
          }

          /* Quicker hover transition on mobile */
          .logo-container {
            transition-duration: 0.2s;
          }
        }
      `}</style>
    </section>
  );
};

export default Brands;
