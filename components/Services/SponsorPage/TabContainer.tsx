"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TabContainer: React.FC = () => {
  const [hoveredTab, setHoveredTab] = useState<string>("IMMIGRATION");
  const tabs = ["IMMIGRATION", "COMPLIANCE", "RECRUITMENT", "SPONSOR LICENCE"];

  return (
    <div className="font-sans mx-auto max-w-6xl md:mx-auto">
      <nav className="rounded-t-lg bg-[#ffd4c2] p-3 md:p-2">
        <div className="relative flex w-full flex-col gap-2.5 md:flex-row md:gap-0">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`relative z-10 flex items-center justify-center rounded-md px-6 py-2.5 transition-all
              duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:flex-1 md:py-3
              ${hoveredTab === tab ? "rounded-lg bg-[#1a1a1a] md:bg-transparent" : ""}
              hover:rounded-lg hover:bg-black hover:bg-opacity-5 hover:md:bg-transparent`}
              onMouseEnter={() => setHoveredTab(tab)}
            >
              <span
                className={`font-mono md:font-sans whitespace-nowrap
                text-sm font-medium transition-colors
                duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${hoveredTab === tab ? "text-white" : "text-gray-800"}`}
              >
                {tab}
              </span>
            </div>
          ))}
          <motion.div
            className="pointer-events-none absolute hidden h-full w-1/4 rounded-md bg-[#1a1a1a] will-change-transform md:block"
            initial={{ x: 0 }}
            animate={{
              x: `${tabs.indexOf(hoveredTab) * 100}%`,
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        </div>
      </nav>

      {/* Fixed height container with responsive layout */}
      <div className="overflow-hidden rounded-b-lg bg-white">
        <div className="flex flex-col md:h-96 md:flex-row">
          {/* Left side text content */}
          <div className="flex flex-col justify-center p-6 md:w-1/2 md:p-12">
            <div className="transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
              <h1 className="font-mono md:font-sans mb-4 text-sm font-semibold text-gray-800 md:text-xl">
                {hoveredTab}
              </h1>
              {hoveredTab === "RECRUITMENT" ? (
                <h2 className="font-serif md:font-sans mb-6 text-2xl font-normal leading-tight text-[#1a1a1a] md:mb-8 md:text-4xl">
                  Borderless helps you screen and identify the top candidates,
                  wherever they are.
                </h2>
              ) : (
                <h2 className="font-serif md:font-sans mb-6 text-2xl font-normal leading-tight text-[#1a1a1a] md:mb-8 md:text-4xl">
                  Content for {hoveredTab} tab
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
  );
};

export default TabContainer;
