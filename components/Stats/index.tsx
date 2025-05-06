"use client";
// components/StatsSection.tsx
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface StatItem {
  id: number;
  value: string;
  description: string;
}

const stats: StatItem[] = [
  {
    id: 1,
    value: "121+",
    description: "Companies Trust Us",
  },
  {
    id: 2,
    value: "75+",
    description: "Sponsor Licences Granted",
  },
  {
    id: 3,
    value: "200+",
    description: "Visas Granted",
  },
  {
    id: 4,
    value: "99%",
    description: "Home Office Approval Rate",
  },
];

const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={sectionRef} className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-2 text-center text-2xl font-bold text-black sm:text-3xl md:text-4xl lg:mb-4 lg:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
          }}
        >
          Hundreds of companies trust us
        </motion.h2>

        <motion.p
          className="mb-8 text-center font-medium text-gray-600"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.2,
              },
            },
          }}
        >
          We handle all the immigration paperwork-- You focus on finding the
          right people
        </motion.p>

        <div className="mx-auto flex flex-col items-center justify-between gap-10 lg:w-[80%] lg:flex-row">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <motion.p
                className="bg-gradient-to-t from-[#459ed2] via-[#0383c8] to-[#0c7cb0] bg-clip-text text-4xl font-black text-transparent"
                initial={{ scale: 0.8 }}
                animate={controls}
                variants={{
                  visible: {
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <CountUp target={stat.value} />
              </motion.p>
              <motion.p
                className="mt-2 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 bg-clip-text font-medium text-transparent"
                initial={{ opacity: 0 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 0.7,
                      delay: 0.6 + index * 0.1,
                    },
                  },
                }}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Custom CountUp component for animating numbers
interface CountUpProps {
  target: string;
}

const CountUp: React.FC<CountUpProps> = ({ target }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = React.useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse the target value to get the number portion
    const numericPart = parseInt(target.replace(/\D/g, ""));
    const suffix = target.replace(/[0-9]/g, "");

    let startValue = 0;
    const duration = 2000; // 2 seconds
    const step = Math.ceil(numericPart / (duration / 16)); // 16ms per frame

    const updateValue = () => {
      startValue += step;
      if (startValue > numericPart) {
        startValue = numericPart;
        setDisplayValue(`${numericPart}${suffix}`);
        clearInterval(interval);
      } else {
        setDisplayValue(`${startValue}${suffix}`);
      }
    };

    const interval = setInterval(updateValue, 16);
    return () => clearInterval(interval);
  }, [isInView, target]);

  return <span ref={ref}>{displayValue}</span>;
};

export default StatsSection;
