"use client";
import React from "react";
import Image from "next/image";

interface Brand {
  src: string;
  alt: string;
  className: string;
}

const Brands: React.FC = () => {
  const brands: Brand[] = [
    {
      src: "/images/brands/logo-1.png",
      alt: "brand logo",
      className: "w-28 md:w-36 md:mr-4 lg:mr-8 lg:w-44",
    },
    {
      src: "/images/brands/logo-2.png",
      alt: "brand logo",
      className: "w-28 md:w-36 md:mr-4 lg:mr-8 lg:w-44",
    },
    {
      src: "/images/brands/logo-3.png",
      alt: "brand logo",
      className: "w-12 -ml-2 mr-7 md:w-14 md:mr-12 lg:mr-20 lg:w-20",
    },
    {
      src: "/images/brands/logo-4.png",
      alt: "brand logo",
      className: "w-20 mr-7 md:w-24 md:mr-10 lg:mr-16 lg:w-36",
    },
    {
      src: "/images/brands/logo-5.png",
      alt: "brand logo",
      className: "w-12 mr-4 md:w-14 md:mr-8 lg:mr-10 lg:w-20",
    },
    {
      src: "/images/brands/logo-6.png",
      alt: "brand logo",
      className: "w-16 mr-6 md:w-20 md:mr-12 lg:mr-20 lg:w-28",
    },
  ];

  const Slide = () => (
    <>
      {[0, 1, 2].map((index) => (
        <div key={index} className="slide flex shrink-0 items-center">
          {brands.map((brand, brandIndex) => (
            <Image
              key={brandIndex}
              src={brand.src}
              alt={brand.alt}
              width={100}
              height={50}
              className={`${brand.className} transition-transform duration-500 hover:scale-125`}
            />
          ))}
        </div>
      ))}
    </>
  );

  return (
    <div className="grid place-items-center py-20">
      <div className="w-full overflow-hidden">
        <h3 className="mb-10 px-4 text-center font-bold md:mb-16 md:text-xl lg:text-2xl">
          Trusted by UK Employers Across Industries
        </h3>

        <div className="slider relative flex h-20 lg:mb-6 lg:h-28">
          <Slide />
        </div>
        <div className="slider row-2 relative flex h-20 lg:h-28">
          <Slide />
        </div>
      </div>

      <style jsx>{`
        .slide {
          animation: marquee 35s linear infinite;
        }

        .row-2 .slide {
          animation-direction: reverse;
        }

        .slider::before,
        .slider::after {
          content: "";
          position: absolute;
          height: 100%;
          z-index: 2;
          width: var(--size);
          top: 0;
          left: 0;
          background: linear-gradient(
            90deg,
            white 51.55%,
            rgba(255, 255, 255, 0.1) 85.21%
          );
        }

        .slider::after {
          left: auto;
          right: 0;
          background: linear-gradient(
            270deg,
            white 51.55%,
            rgba(255, 255, 255, 0.1) 85.21%
          );
        }

        .slider {
          --size: 60px;
        }

        @media (min-width: 768px) {
          .slider {
            --size: 80px;
          }
        }

        @media (min-width: 1024px) {
          .slider {
            --size: 160px;
          }
        }

        @media (min-width: 1280px) {
          .slider {
            --size: 200px;
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Brands;
