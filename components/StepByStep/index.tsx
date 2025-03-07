"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

interface StepData {
  id: number;
  image: string;
  title: string;
  description: string;
}

const steps: StepData[] = [
  {
    id: 1,
    image: "/images/steps/step-1.png",
    title: "Initial Assessment",
    description:
      "We evaluate your eligibility for the UK Skilled Worker Visa based on your qualifications and experience.",
  },
  {
    id: 2,
    image: "/images/steps/step-2.png",
    title: "Documentation Preparation",
    description:
      "Our team helps you gather and prepare all necessary documentation for your visa application.",
  },
  {
    id: 3,
    image: "/images/steps/step-3.png",
    title: "Visa Application",
    description:
      "We guide you through the entire application process, ensuring all requirements are met.",
  },
  {
    id: 4,
    image: "/images/steps/step-4.png",
    title: "Moving to the UK",
    description:
      "Once approved, we help you with the transition to starting your new life in the UK.",
  },
];

const StepCard: React.FC<{ step: StepData; isEven: boolean }> = ({
  step,
  isEven,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, x: isEven ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-[${isEven ? "0.78fr_1fr" : "1fr_0.78fr"}] lg:${isEven ? "-mt-8" : isEven === false && step.id > 1 ? "-mt-10" : ""}`}
    >
      <div className={isEven ? "order-1" : ""}>
        <motion.figure
          initial="hidden"
          animate={controls}
          variants={variants}
          className="relative h-full"
        >
          <Image
            src={step.image}
            alt={`Step ${step.id}`}
            className="w-full"
            width={500}
            height={400}
            layout="responsive"
          />
        </motion.figure>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            },
          },
        }}
        className={`flex items-center ${isEven ? "pr-6" : "pl-6"} py-6`}
      >
        <div className="transform rounded-xl bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105">
          <span className="text-4xl font-bold text-blue-600 opacity-30">
            Step {step.id}
          </span>
          <h3 className="mb-3 mt-2 text-2xl font-bold">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const StepByStep: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(titleRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={titleRef}
          className="relative mb-20 text-center text-4xl font-bold lg:mb-32 lg:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            },
          }}
        >
          Step-by-Step Guide to UK
          <br /> Skilled Worker Visa Sponsorship
          <motion.span
            className="mx-auto mt-4 block h-2 w-40 bg-blue-600"
            initial={{ width: 0 }}
            animate={controls}
            variants={{
              visible: {
                width: "300px",
                transition: {
                  duration: 1,
                  delay: 0.5,
                  ease: "easeOut",
                },
              },
            }}
          />
        </motion.h2>
        <div className="mx-auto max-w-[600px] lg:max-w-[1140px]">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} isEven={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepByStep;
