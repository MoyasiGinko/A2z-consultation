"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface PackageFeature {
  text: string;
}

interface PricingPackage {
  name: string;
  tagline: string;
  color: string;
  features: PackageFeature[];
  description?: string;
}

const PricingPackages: React.FC = () => {
  const [expandedStates, setExpandedStates] = useState<{
    [key: string]: boolean;
  }>({
    Gold: false,
    Platinum: false,
    VIP: false,
  });

  const packages: PricingPackage[] = [
    {
      name: "Gold",
      tagline: "Esse magna sunt pariatur culpa quis",
      color: "bg-[#3d6582]",
      features: [
        { text: "Anim magna proident" },
        { text: "Voluptate labore fugiat amet" },
        { text: "Cillum dolore sit cillum" },
        { text: "Veniam aute mollit veniam" },
      ],
    },
    {
      name: "Platinum",
      tagline: "Esse magna sunt pariatur culpa quis",
      color: "bg-[#7986cb]",
      features: [
        { text: "Anim magna proident" },
        { text: "Voluptate labore fugiat amet" },
        { text: "Cillum dolore sit cillum" },
        { text: "Veniam aute mollit veniam" },
      ],
      description:
        "Lorem laboris consequat incididunt reprehenderit dolor tempor exercitation ullamco sunt sint cillum occaecat aliquip. Magna commodo et tempor ipsum ut ut ullamco pariatur excepteur mollit tempor.Anim laborum reprehenderit enim duis in minim culpa amet labore veniam fugiat. Laboris esse qui Lorem in Lorem labore sit magna aliquip consectetur i",
    },
    {
      name: "VIP",
      tagline: "Esse magna sunt pariatur culpa quis",
      color: "bg-[#ffb900]",
      features: [
        { text: "Anim magna proident" },
        { text: "Voluptate labore fugiat amet" },
        { text: "Cillum dolore sit cillum" },
        { text: "Veniam aute mollit veniam" },
      ],
    },
  ];

  const toggleReadMore = (packageName: string) => {
    setExpandedStates((prevState) => ({
      ...prevState,
      [packageName]: !prevState[packageName],
    }));
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 via-white to-amber-50 px-4 py-16">
      <h1 className="mb-12 text-center text-4xl font-bold text-teal-600">
        Our Packages
      </h1>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <motion.div
            key={pkg.name}
            className="overflow-hidden rounded-lg bg-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            {/* Package Header */}
            <div className={`${pkg.color} px-6 py-4 text-center`}>
              <h2 className="text-3xl font-bold text-yellow-300">{pkg.name}</h2>
            </div>

            {/* Package Content */}
            <div className="p-6">
              <p className="mb-4 italic text-gray-700">{pkg.tagline}</p>

              <div className="mb-4">
                <h3 className="mb-3 font-medium">Features</h3>
                <ul className="space-y-2">
                  {pkg.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <svg
                        className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Description - Only for Platinum or if expanded */}
              {(pkg.name === "Platinum" || expandedStates[pkg.name]) &&
                pkg.description && (
                  <motion.div
                    className="mt-4 text-sm text-gray-600"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {pkg.description}
                  </motion.div>
                )}

              {/* Read More Button - Only for packages with description */}
              {pkg.description && pkg.name !== "Platinum" && (
                <button
                  className="mt-2 flex items-center text-sm text-teal-600"
                  onClick={() => toggleReadMore(pkg.name)}
                >
                  Read more
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${expandedStates[pkg.name] ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              )}

              {/* CTA Button */}
              <motion.button
                className={`mt-6 w-full border px-4 py-2 ${pkg.name === "Platinum" ? "bg-[#7986cb] text-white" : "border-gray-300 text-teal-600"} rounded-md transition-colors hover:bg-opacity-90`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in touch
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPackages;
