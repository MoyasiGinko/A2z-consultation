"use client";

import { useState } from "react";
import { cn } from "@/utils/lib/cn";

interface TabContent {
  id: string;
  title: string;
  color: string;
  content: {
    heading: string;
    description: string;
  };
}

const HowWeCanHelpYou = () => {
  const tabs: TabContent[] = [
    {
      id: "sponsor-licence",
      title: "Sponsor Licence",
      color: "#fdcb03",
      content: {
        heading: "Tranfser money to anyone, instantly! No fees, no BS.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    },
    {
      id: "compliance",
      title: "Compliance",
      color: "#ff4c52",
      content: {
        heading: "Stay compliant with all immigration regulations",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    },
    {
      id: "skilled-worker-visa",
      title: "Skilled Worker Visa",
      color: "#1cd65b",
      content: {
        heading: "Streamlined visa process for skilled workers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    },
  ];

  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="relative mb-10 text-center text-2xl font-bold md:text-3xl lg:mb-12 lg:text-4xl">
          How we can help you?
          <span className="indicator absolute -bottom-4 left-1/2 h-1 w-16 -translate-x-1/2 transform bg-primary"></span>
        </h2>

        <p className="mb-12 text-center text-sm font-semibold lg:mb-16 lg:text-lg">
          Immigration support for your business <br className="md:hidden" /> —
          all through a single platform
        </p>

        <div className="mx-auto mb-8 flex max-w-[300px] flex-col gap-4 md:mb-0 md:max-w-2xl md:translate-y-1/2 md:flex-row md:justify-between">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex h-10 w-full items-center justify-center gap-2 rounded-full font-medium transition-all duration-500 active:scale-110 md:h-12 md:max-w-max md:px-12",
                activeTab === tab.id ? "ring-2 ring-offset-2" : "",
              )}
              style={{ backgroundColor: tab.color }}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div
          className="md:border-border mx-auto rounded-lg border-2 p-4 shadow-xl md:max-w-4xl md:border md:p-6 lg:rounded-2xl lg:p-10 lg:pt-16"
          style={{ borderColor: activeTabData.color }}
        >
          <h2 className="mb-6 text-xl font-bold md:text-2xl lg:text-3xl">
            {activeTabData.content.heading}
          </h2>

          <p className="lg:text-lg">{activeTabData.content.description}</p>
        </div>
      </div>
    </section>
  );
};

export default HowWeCanHelpYou;
