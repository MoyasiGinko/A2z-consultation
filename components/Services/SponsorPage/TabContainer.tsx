"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TabContainer: React.FC = () => {
  const [hoveredTab, setHoveredTab] = useState<string>("EXPERT REVIEW");
  const [tabPositions, setTabPositions] = useState<
    Array<{ left: number; width: number }>
  >([]);
  const navRef = useRef<HTMLDivElement>(null);

  const tabs = [
    "EXPERT REVIEW",
    "SUBMIT APPLICATION",
    "ONGOING SUPPORT",
    "SPONSORSHIP APPROVED",
  ];

  // Measure tabs once on mount and when window resizes
  useEffect(() => {
    const measureTabs = () => {
      if (!navRef.current) return;

      const navElement = navRef.current;
      const tabElements = Array.from(navElement.querySelectorAll("[data-tab]"));
      const navRect = navElement.getBoundingClientRect();

      const positions = tabElements.map((tab) => {
        const rect = tab.getBoundingClientRect();
        return {
          left: rect.left - navRect.left,
          width: rect.width,
        };
      });

      setTabPositions(positions);
    };

    // Initial measurement
    measureTabs();

    // Add debounced resize listener
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measureTabs, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Get current tab index
  const activeTabIndex = tabs.indexOf(hoveredTab);

  return (
    <section className="py-16">
      <div className="font-sans mx-auto max-w-6xl shadow-2xl md:mx-auto">
        <nav
          ref={navRef}
          className="rounded-t-lg bg-gradient-to-r from-sky-400 via-sky-500 to-sky-400 p-3 md:p-2"
        >
          <div className="relative flex w-full flex-col gap-2.5 md:flex-row md:gap-0">
            {tabs.map((tab, index) => (
              <div
                key={tab}
                data-tab={index}
                className={`relative z-10 flex items-center justify-center rounded-md px-6 py-2.5 transition-all
              duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:flex-1 md:py-3
              ${hoveredTab === tab ? "rounded-lg bg-[#1a1a1a] md:bg-transparent" : ""}
              hover:rounded-lg hover:bg-black hover:bg-opacity-5 hover:md:bg-transparent`}
                onMouseEnter={() => setHoveredTab(tab)}
              >
                <span
                  className={`font-mono md:font-sans whitespace-nowrap
                text-sm font-medium transition-colors
                duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${hoveredTab === tab ? "text-white" : "text-gray-800"}`}
                >
                  {tab}
                </span>
              </div>
            ))}

            {/* Optimized highlighter with precomputed positions */}
            {tabPositions.length > 0 && (
              <motion.div
                className="pointer-events-none absolute top-0 hidden h-full rounded-md bg-[#1a1a1a] will-change-transform md:block"
                initial={false}
                animate={{
                  x: tabPositions[activeTabIndex]?.left || 0,
                  width: tabPositions[activeTabIndex]?.width || 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 1,
                }}
              />
            )}
          </div>
        </nav>

        {/* Fixed height container with responsive layout */}
        <div className="overflow-hidden rounded-b-lg bg-white">
          <div className="flex  flex-col md:h-[500px] md:flex-row">
            {/* Left side text content */}
            <div className="flex flex-col justify-center p-6 md:w-1/2 md:p-12">
              <div className="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
                <h1 className="font-mono md:font-sans mb-4 text-sm font-semibold text-gray-800 md:text-xl">
                  {hoveredTab}
                </h1>
                {hoveredTab === "EXPERT REVIEW" && (
                  <h2 className="font-serif md:font-sans mb-6 text-2xl font-normal leading-tight text-[#1a1a1a] md:mb-8 md:text-4xl">
                    Our team of experts will review your eligibility and help
                    you prepare for a successful application.
                  </h2>
                )}
                {hoveredTab === "SUBMIT APPLICATION" && (
                  <h2 className="font-serif md:font-sans mb-6 text-2xl font-normal leading-tight text-[#1a1a1a] md:mb-8 md:text-4xl">
                    We'll guide you through every step of submitting your
                    sponsor licence application.
                  </h2>
                )}
                {hoveredTab === "ONGOING SUPPORT" && (
                  <h2 className="font-serif md:font-sans mb-6 text-2xl font-normal leading-tight text-[#1a1a1a] md:mb-8 md:text-4xl">
                    Our support continues throughout the application process
                    with dedicated assistance.
                  </h2>
                )}
                {hoveredTab === "SPONSORSHIP APPROVED" && (
                  <h2 className="font-serif md:font-sans mb-6 text-2xl font-normal leading-tight text-[#1a1a1a] md:mb-8 md:text-4xl">
                    Congratulations on your approved sponsor licence! We'll help
                    you understand your new responsibilities.
                  </h2>
                )}
                <button className="font-mono md:font-sans rounded border border-[#1a1a1a] bg-transparent px-4 py-2.5 text-sm uppercase tracking-wider text-[#1a1a1a] transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white md:px-6 md:py-3">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Right side image content */}
            <div className="relative h-64 md:h-auto md:w-1/2">
              <Image
                src="/images/features/tab-container.png"
                alt="Illustration for content"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabContainer;
