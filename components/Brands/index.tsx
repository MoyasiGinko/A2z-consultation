"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface Brand {
  id: string;
  src: string;
  alt: string;
  className: string;
  animationDelay?: number;
}

const Brands: React.FC = () => {
  const [isHovering, setIsHovering] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const brands: Brand[] = [
    {
      id: "brand1",
      src: "/images/brands/logo-1.png",
      alt: "Premium Brand Partner",
      className: "w-32 md:w-40 md:mr-4 lg:mr-8 lg:w-52", // Increased sizes
      animationDelay: 0.1,
    },
    {
      id: "brand2",
      src: "/images/brands/logo-2.png",
      alt: "Enterprise Solution Partner",
      className: "w-32 md:w-40 md:mr-4 lg:mr-8 lg:w-52", // Increased sizes
      animationDelay: 0.2,
    },
    {
      id: "brand3",
      src: "/images/brands/logo-3.png",
      alt: "Technology Innovator",
      className: "w-16 -ml-2 mr-7 md:w-20 md:mr-12 lg:mr-20 lg:w-24", // Increased sizes
      animationDelay: 0.3,
    },
    {
      id: "brand4",
      src: "/images/brands/logo-4.png",
      alt: "Industry Leader",
      className: "w-24 mr-7 md:w-28 md:mr-10 lg:mr-16 lg:w-44", // Increased sizes
      animationDelay: 0.4,
    },
    {
      id: "brand5",
      src: "/images/brands/logo-5.png",
      alt: "Global Partner",
      className: "w-16 mr-4 md:w-20 md:mr-8 lg:mr-10 lg:w-24", // Increased sizes
      animationDelay: 0.5,
    },
    {
      id: "brand6",
      src: "/images/brands/logo-6.png",
      alt: "Strategic Alliance",
      className: "w-20 mr-6 md:w-24 md:mr-12 lg:mr-20 lg:w-36", // Increased sizes
      animationDelay: 0.6,
    },
  ];

  const renderBrandSet = () => {
    return brands.map((brand) => (
      <div
        key={brand.id}
        className="brand-container relative mx-2"
        onMouseEnter={() => setIsHovering(brand.id)}
        onMouseLeave={() => setIsHovering(null)}
      >
        <div
          className={`
            brand-wrapper transition-all duration-500 ease-in-out
            ${isHovering === brand.id ? "scale-130 z-10" : "scale-100"}
          `}
        >
          <Image
            src={brand.src}
            alt={brand.alt}
            width={180}
            height={90}
            className={`
              ${brand.className} mx-4
              filter transition-all
              duration-300 hover:drop-shadow-xl
              ${isHovering === brand.id ? "brightness-110" : "brightness-100"}
            `}
          />
          {isHovering === brand.id && (
            <div className="brand-tooltip animate-fade-in absolute -bottom-8 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0">
              {brand.alt}
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className={`brand-showcase py-20 transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2
            className={`
            mb-4 text-3xl font-bold transition-all
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
          className="brand-slider-container w-full overflow-hidden"
        >
          {/* First row - moving left to right */}
          <div className="slider-row relative flex h-8 md:h-12 lg:h-18">
            {" "}
            {/* Increased height */}
            <div className="slider-track flex" data-direction="left">
              {renderBrandSet()}
              {renderBrandSet()}
              {renderBrandSet()}
              {renderBrandSet()}
              {/* Multiple copies to ensure continuous flow */}
            </div>
          </div>

          {/* Second row - moving right to left */}
          <div className="slider-row relative mt-2 flex h-8 md:h-12 lg:h-18">
            {" "}
            {/* Increased height */}
            <div className="slider-track flex" data-direction="right">
              {renderBrandSet()}
              {renderBrandSet()}
              {renderBrandSet()}
              {renderBrandSet()}
              {/* Multiple copies to ensure continuous flow */}
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

        .scale-130 {
          transform: scale(1.3);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s forwards;
        }

        .slider-track {
          width: max-content;
          animation-duration: 20s; /* Faster animation - was 40s */
          animation-iteration-count: infinite;
          animation-timing-function: linear;
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

        /* Floating animation for brands */
        .brand-container {
          animation: float 6s ease-in-out infinite;
        }

        .brand-container:nth-child(2n) {
          animation-delay: 0.5s;
        }

        .brand-container:nth-child(3n) {
          animation-delay: 1s;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
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
