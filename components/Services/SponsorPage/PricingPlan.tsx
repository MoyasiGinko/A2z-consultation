"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PackageFeature {
  text: string;
}

interface PricingPackage {
  name: string;
  tagline: string;
  text: string;
  color: string;
  ring: string;
  glowColor: string;
  shadowColor: string;
  features: PackageFeature[];
  description: string;
  alwaysExpanded?: boolean;
}

const PricingPackages: React.FC = () => {
  // Expanded states for description sections
  const [expandedStates, setExpandedStates] = useState<{
    [key: string]: boolean;
  }>({
    Gold: false,
    Platinum: true, // Platinum is expanded by default
    VIP: false,
  });

  // State to track each card's height
  const [cardHeights, setCardHeights] = useState<{
    [key: string]: number;
  }>({
    Gold: 0,
    Platinum: 0,
    VIP: 0,
  });

  // Create refs for each card
  const cardRefs = {
    Gold: useRef<HTMLDivElement>(null),
    Platinum: useRef<HTMLDivElement>(null),
    VIP: useRef<HTMLDivElement>(null),
  };

  // Function to update card heights
  const updateCardHeight = (packageName: string) => {
    if (cardRefs[packageName]?.current) {
      const height = cardRefs[packageName].current.offsetHeight;
      setCardHeights((prev) => ({
        ...prev,
        [packageName]: height,
      }));
    }
  };

  // Update all card heights on initial render and window resize
  useEffect(() => {
    const updateAllCardHeights = () => {
      Object.keys(cardRefs).forEach((packageName) => {
        updateCardHeight(packageName);
      });
    };

    // Initial measurement after component mounts
    updateAllCardHeights();

    // Set up resize observer for each card
    const observers = Object.entries(cardRefs)
      .map(([packageName, ref]) => {
        if (!ref.current) return null;

        const observer = new ResizeObserver(() => {
          updateCardHeight(packageName);
        });

        observer.observe(ref.current);
        return observer;
      })
      .filter(Boolean);

    // Also listen for window resize events as a fallback
    window.addEventListener("resize", updateAllCardHeights);

    // Cleanup
    return () => {
      observers.forEach((observer) => observer?.disconnect());
      window.removeEventListener("resize", updateAllCardHeights);
    };
  }, []);

  // Update heights when expanded states change
  useEffect(() => {
    // Use setTimeout to ensure the DOM has updated after state change
    const timeoutId = setTimeout(() => {
      Object.keys(expandedStates).forEach((packageName) => {
        updateCardHeight(packageName);
      });
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [expandedStates]);

  const packages: PricingPackage[] = [
    {
      name: "Gold",
      tagline: "Esse magna sunt pariatur culpa quis",
      color: "#3d6582",
      ring: "#3d6582",
      text: "#ffb900",
      glowColor: "from-[#3d6582]/20",
      shadowColor: "bg-[#3d6582]/10",
      features: [
        { text: "Anim magna proident" },
        { text: "Voluptate labore fugiat amet" },
        { text: "Cillum dolore sit cillum" },
        { text: "Veniam aute mollit veniam" },
      ],
      description:
        "Lorem laboris consequat incididunt reprehenderit dolor tempor exercitation ullamco sunt sint cillum occaecat aliquip. Magna commodo et tempor ipsum ut ut ullamco pariatur excepteur mollit tempor. Anim laborum reprehenderit enim duis in minim culpa amet labore veniam fugiat.",
    },
    {
      name: "Platinum",
      tagline: "Esse magna sunt pariatur culpa quis",
      color: "#7986cb",
      ring: "#7986cb",
      text: "#fff",
      glowColor: "from-[#7986cb]/20",
      shadowColor: "bg-[#7986cb]/10",
      features: [
        { text: "Anim magna proident" },
        { text: "Voluptate labore fugiat amet" },
        { text: "Cillum dolore sit cillum" },
        { text: "Veniam aute mollit veniam" },
      ],
      description:
        "Lorem laboris consequat incididunt reprehenderit dolor tempor exercitation ullamco sunt sint cillum occaecat aliquip. Magna commodo et tempor ipsum ut ut ullamco pariatur excepteur mollit tempor. Anim laborum reprehenderit enim duis in minim culpa amet labore veniam fugiat. Laboris esse qui Lorem in Lorem labore sit magna aliquip consectetur i",
      alwaysExpanded: true,
    },
    {
      name: "VIP",
      tagline: "Esse magna sunt pariatur culpa quis",
      color: "#ffb900",
      ring: "#ffb900",
      text: "#000",
      glowColor: "from-[#ffb900]/20",
      shadowColor: "bg-[#ffb900]/10",
      features: [
        { text: "Anim magna proident" },
        { text: "Voluptate labore fugiat amet" },
        { text: "Cillum dolore sit cillum" },
        { text: "Veniam aute mollit veniam" },
      ],
      description:
        "Lorem laboris consequat incididunt reprehenderit dolor tempor exercitation ullamco sunt sint cillum occaecat aliquip. Magna commodo et tempor ipsum ut ut ullamco pariatur excepteur mollit tempor. Anim laborum reprehenderit enim duis in minim culpa amet labore veniam fugiat.",
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

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {packages.map((pkg) => (
          <div key={pkg.name} className="relative">
            {/* Dynamic Shadow - Using explicit height from state */}
            <motion.div
              className={`absolute -inset-4 rounded-xl ${pkg.shadowColor} blur-md`}
              animate={{
                height: cardHeights[pkg.name]
                  ? `calc(${cardHeights[pkg.name]}px + 2rem)`
                  : "auto",
              }}
              transition={{
                duration: 0.3,
                easings: "easeInOut",
              }}
              initial={false}
            ></motion.div>

            <motion.div
              ref={cardRefs[pkg.name]}
              className="relative overflow-hidden rounded-lg bg-white/50 shadow-xl backdrop-blur-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              layout
            >
              {/* Glow Effect Background */}
              <div
                className={`bg-gradient-radial absolute inset-0 -z-10 ${pkg.glowColor} to-transparent opacity-70 blur-xl`}
              ></div>

              {/* Package Header - Using inline style */}
              <div
                className="px-6 py-4 text-center"
                style={{ backgroundColor: pkg.color }}
              >
                <h2 className="text-3xl font-bold" style={{ color: pkg.text }}>
                  {pkg.name}
                </h2>
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

                {/* Description - Always shown for Platinum, shown if expanded for others */}
                <AnimatePresence>
                  {(pkg.alwaysExpanded || expandedStates[pkg.name]) && (
                    <motion.div
                      className="mt-4 text-sm text-gray-600"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onAnimationComplete={() => {
                        // Update height after animation completes
                        updateCardHeight(pkg.name);
                      }}
                    >
                      {pkg.description}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Read More Button - Only for non-always expanded packages */}
                {!pkg.alwaysExpanded && (
                  <button
                    className="mt-2 flex items-center text-sm text-teal-600"
                    onClick={() => toggleReadMore(pkg.name)}
                  >
                    {expandedStates[pkg.name] ? "Read less" : "Read more"}
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

                {/* CTA Button - Using inline style */}
                <motion.button
                  className="mt-6 w-full rounded-xl border-2 px-4 py-2 "
                  style={{
                    borderColor: pkg.ring,
                    color: pkg.color,
                  }}
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "#7986cb",
                    color: "#fff",
                    borderColor: "#7986cb",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in touch
                </motion.button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPackages;
