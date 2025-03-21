"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  logo: string;
  testimonial: string;
  position: string;
}

interface TestimonialSliderProps {
  clients: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ clients }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Filter clients that have testimonials
  const testimonials = clients.filter((client) => client.testimonial);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  }, [testimonials.length]);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  }, [testimonials.length]);

  // Autoplay logic
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // Animation variants
  const slideVariants = {
    incoming: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    active: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    outgoing: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  if (!testimonials.length) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="bg-gradient-to-b from-blue-50 to-white py-24"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="mx-auto mb-12 h-1 w-24 bg-blue-600"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        {/* Testimonial slider */}
        <div className="relative mx-auto max-w-4xl">
          {/* Left/Right navigation arrows */}
          <button
            onClick={handlePrevious}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-blue-50 md:-left-6"
          >
            <FaChevronLeft className="text-blue-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-blue-50 md:-right-6"
          >
            <FaChevronRight className="text-blue-600" />
          </button>

          {/* Testimonial content */}
          <div className="overflow-hidden rounded-xl bg-white shadow-xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                className="relative flex flex-col items-center md:flex-row"
                variants={slideVariants}
                initial="incoming"
                animate="active"
                exit="outgoing"
                custom={direction}
              >
                {/* Client image */}
                <div className="relative h-80 w-full bg-gradient-to-r from-blue-600 to-blue-500 md:h-96 md:w-2/5">
                  <div className="absolute inset-0 overflow-hidden bg-blue-600">
                    <motion.div
                      className="h-full w-full"
                      initial={{ opacity: 0.7, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 2 }}
                    >
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        fill
                        className="h-full w-full object-cover opacity-40 mix-blend-luminosity"
                      />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-6 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-inner">
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        width={120}
                        height={120}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="mb-1 text-2xl font-bold text-white">
                      {currentTestimonial.name}
                    </h3>
                    <p className="mb-2 text-blue-200">
                      {currentTestimonial.title}
                    </p>
                    <div className="h-12 w-auto rounded bg-white/20 p-2 backdrop-blur-md">
                      <img
                        src={currentTestimonial.logo}
                        alt="Company logo"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Testimonial content */}
                <div className="flex flex-col justify-center p-8 md:w-3/5 md:p-12">
                  <FaQuoteLeft className="mb-6 text-4xl text-blue-200" />
                  <blockquote className="mb-6 text-lg font-medium italic text-gray-700 md:text-xl">
                    "{currentTestimonial.testimonial}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600">
                      {currentTestimonial.position}
                    </p>

                    {/* Dots navigation */}
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                          }}
                          className={`h-2.5 w-2.5 rounded-full ${
                            index === currentIndex
                              ? "bg-blue-600"
                              : "bg-gray-300"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        ></button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
