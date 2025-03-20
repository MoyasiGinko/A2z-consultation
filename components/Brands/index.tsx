"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface Brand {
  id: string;
  src: string;
  alt: string;
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
      animationDelay: 0.1,
    },
    {
      id: "brand2",
      src: "/images/brands/logo-2.png",
      alt: "Enterprise Solution Partner",
      animationDelay: 0.2,
    },
    {
      id: "brand3",
      src: "/images/brands/logo-3.png",
      alt: "Technology Innovator",
      animationDelay: 0.3,
    },
    {
      id: "brand4",
      src: "/images/brands/logo-4.png",
      alt: "Industry Leader",
      animationDelay: 0.4,
    },
    {
      id: "brand5",
      src: "/images/brands/logo-5.png",
      alt: "Global Partner",
      animationDelay: 0.5,
    },
    {
      id: "brand6",
      src: "/images/brands/logo-6.png",
      alt: "Strategic Alliance",
      animationDelay: 0.6,
    },
  ];

  const renderBrandSet = () => {
    return brands.map((brand) => (
      <div key={brand.id} className="brand-container relative mx-4">
        <div className="logo-container h-12 w-24 md:h-14 md:w-28 lg:h-16 lg:w-32">
          <Image
            src={brand.src}
            alt={brand.alt}
            fill
            className="object-contain"
          />
        </div>
      </div>
    ));
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
              {renderBrandSet()}
              {renderBrandSet()}
              {renderBrandSet()}
              {renderBrandSet()}
              {/* Multiple copies to ensure continuous flow */}
            </div>
          </div>

          {/* Second row - moving right to left */}
          <div className="slider-row relative mt-4 flex h-16 md:h-20 lg:h-24">
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

        .logo-container {
          position: relative;
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
