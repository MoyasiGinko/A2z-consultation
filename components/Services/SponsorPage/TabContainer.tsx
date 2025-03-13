"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const TabContainer: React.FC = () => {
  const [hoveredTab, setHoveredTab] = useState<string>("IMMIGRATION");
  const tabs = ["IMMIGRATION", "COMPLIANCE", "RECRUITMENT", "SPONSOR LICENCE"];

  return (
    <div className="font-sans mx-auto max-w-6xl md:mx-auto">
      <nav className="rounded-2xl rounded-t-lg bg-[#ffd4c2] p-3 md:rounded-t-lg md:p-2">
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
                className={`md:font-sans font-mono whitespace-nowrap
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

      <div className="mt-0 mt-4 min-h-[400px] rounded-2xl rounded-b-lg bg-[#f8f5f2] bg-white p-6 md:mt-0 md:rounded-b-lg md:bg-white md:p-12">
        <div className="max-w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:max-w-[600px]">
          <h1 className="md:font-sans font-mono mb-4 text-sm font-semibold text-[#1a1a1a] text-gray-800 md:text-xl md:font-semibold">
            {hoveredTab}
          </h1>
          {hoveredTab === "RECRUITMENT" ? (
            <h2 className="md:font-sans font-serif mb-6 mb-8 text-2xl font-normal leading-relaxed leading-tight text-[#1a1a1a] md:mb-8 md:text-4xl md:font-normal md:leading-tight">
              Borderless helps you screen and identify the top candidates,
              wherever they are.
            </h2>
          ) : (
            <h2 className="md:font-sans font-serif mb-6 mb-8 text-2xl font-normal leading-relaxed leading-tight text-[#1a1a1a] md:mb-8 md:text-4xl md:font-normal md:leading-tight">
              Content for {hoveredTab} tab
            </h2>
          )}
          <button className="md:font-sans font-mono rounded border border-[#1a1a1a] bg-transparent px-4 py-2.5 text-sm uppercase tracking-wider text-[#1a1a1a] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#1a1a1a] hover:text-white md:px-6 md:py-3">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabContainer;
