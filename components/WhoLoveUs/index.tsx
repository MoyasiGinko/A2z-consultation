"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronDown, ChevronUp } from "lucide-react";

interface Testimonial {
  id: number;
  content: string;
  name: string;
  position: string;
  location: string;
  avatar?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "Working with this team has transformed our business completely. Their attention to detail and innovative solutions helped us increase our revenue by 40% in just six months. I couldn't recommend them more highly!",
    name: "John Smith",
    position: "CEO",
    location: "London, UK",
    avatar: "/images/user/user-01.png",
    rating: 5,
  },
  {
    id: 2,
    content:
      "I was skeptical at first, but their results speak for themselves. The team consistently delivered beyond our expectations and made the entire process smooth and stress-free. They're truly experts in their field.",
    name: "Sarah Johnson",
    position: "Marketing Director",
    location: "New York, USA",
    avatar: "/images/user/user-02.png",
    rating: 5,
  },
  {
    id: 3,
    content:
      "The level of creativity and technical expertise is outstanding. They understood our vision immediately and brought it to life better than we could have imagined. Worth every penny and more.",
    name: "David Chen",
    position: "Product Manager",
    location: "Tokyo, Japan",
    avatar: "/images/user/user-01.png",
    rating: 4,
  },
  {
    id: 4,
    content:
      "Our collaboration was seamless from start to finish. They not only met our requirements but also provided valuable insights that helped us improve our original concept. I'll definitely work with them again.",
    name: "Emma Garcia",
    position: "Founder",
    location: "Barcelona, Spain",
    avatar: "/images/user/user-02.png",
    rating: 5,
  },
  {
    id: 5,
    content:
      "The team's ability to solve complex problems with elegant solutions is remarkable. They're responsive, professional, and truly care about delivering quality work. A rare find in today's market.",
    name: "Alex Taylor",
    position: "CTO",
    location: "Berlin, Germany",
    avatar: "/images/user/user-01.png",
    rating: 5,
  },
  {
    id: 6,
    content:
      "I've worked with many agencies over the years, but none have delivered the level of quality and attention to detail as this team. They're true partners in our success.",
    name: "Maria Rodriguez",
    position: "VP of Operations",
    location: "Sydney, Australia",
    avatar: "/images/user/user-02.png",
    rating: 5,
  },
  {
    id: 7,
    content:
      "The strategic guidance we received was invaluable. They don't just execute tasks but provide insights that make a real impact on your business. Couldn't be happier with our choice.",
    name: "Ryan Park",
    position: "Startup Founder",
    location: "San Francisco, USA",
    avatar: "/images/user/user-01.png",
    rating: 4,
  },
  {
    id: 8,
    content:
      "From day one, the communication was clear and the delivery exceeded our timeline requirements. A true pleasure to work with professionals who take such pride in their craft.",
    name: "Sophia Müller",
    position: "Creative Director",
    location: "Munich, Germany",
    avatar: "/images/user/user-02.png",
    rating: 5,
  },
  {
    id: 9,
    content:
      "Their ability to take our complex requirements and transform them into an elegant solution was remarkable. The ROI has been incredible and our customers love the results.",
    name: "James Wilson",
    position: "Head of Digital",
    location: "Toronto, Canada",
    avatar: "/images/user/user-01.png",
    rating: 5,
  },
];

const WhoLovesUs: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Animation variants - simplified for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  const moreCardsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        delay: 0.05 * custom,
      },
    }),
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 },
    },
  };

  // Get initial visible testimonials and hidden ones
  const firstSixTestimonials = testimonials.slice(0, 6);
  const remainingTestimonials = testimonials.slice(6, 9);

  return (
    <section className="bg-gradient-to-b from-sky-600 to-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-white/40"></div>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Discover why our clients love working with us. Real stories from
            real people who have experienced the difference our services make.
          </p>
        </motion.div>

        {/* First 6 Testimonial Cards */}
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {firstSixTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                onHoverStart={() => setActiveCard(testimonial.id)}
                onHoverEnd={() => setActiveCard(null)}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300"
              >
                <div className="p-6 lg:p-7">
                  {/* Border top with gradient */}
                  {/* <div className="absolute inset-x-0 top-0 h-0 bg-gradient-to-r from-primary to-primary/60"></div> */}

                  {/* Card content with smooth hover state */}
                  <div className="relative">
                    {/* Rating stars */}
                    {/* <div className="mb-4 flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div> */}

                    {/* Testimonial text */}
                    <div className="relative mb-6">
                      {/* <Quote className="absolute -left-1 -top-1 h-8 w-8 text-primary/15" /> */}
                      <p className="pl-2 pt-2 leading-relaxed text-gray-700">
                        {testimonial.content}
                      </p>
                    </div>

                    {/* Author info with smooth hover effect */}
                    <motion.div
                      className="mt-6 flex items-center gap-4"
                      animate={{
                        scale: activeCard === testimonial.id ? 1.02 : 1,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary/10 shadow-sm">
                        {testimonial.avatar ? (
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-primary/10 text-2xl font-bold text-primary">
                            {testimonial.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm font-medium text-gray-600">
                          {testimonial.position}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Remaining Cards (Shown when expanded) */}
        <div className="relative">
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, height: 0, transition: { duration: 0.3 } }}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {remainingTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    custom={index}
                    variants={moreCardsVariants}
                    onHoverStart={() => setActiveCard(testimonial.id)}
                    onHoverEnd={() => setActiveCard(null)}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.2 },
                    }}
                    className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300"
                  >
                    <div className="p-6 lg:p-7">
                      {/* Border top with gradient */}
                      {/* <div className="absolute inset-x-0 top-0 h-0 bg-gradient-to-r from-primary to-primary/60"></div> */}

                      {/* Card content with smooth hover state */}
                      <div className="relative">
                        {/* Rating stars */}
                        {/* <div className="mb-4 flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div> */}

                        {/* Testimonial text */}
                        <div className="relative mb-6">
                          {/* <Quote className="absolute -left-1 -top-1 h-8 w-8 text-primary/15" /> */}
                          <p className="pl-2 pt-2 leading-relaxed text-gray-700">
                            {testimonial.content}
                          </p>
                        </div>

                        {/* Author info with smooth hover effect */}
                        <motion.div
                          className="mt-6 flex items-center gap-4"
                          animate={{
                            scale: activeCard === testimonial.id ? 1.02 : 1,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary/10 shadow-sm">
                            {testimonial.avatar ? (
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-primary/10 text-2xl font-bold text-primary">
                                {testimonial.name.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-800">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm font-medium text-gray-600">
                              {testimonial.position}
                            </p>
                            <p className="text-xs text-gray-500">
                              {testimonial.location}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fade effect for hidden cards */}
        </div>

        {/* Toggle button - improved with subtle animation */}
        <motion.div
          className="mt-8 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={buttonVariants}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover="hover"
            variants={buttonVariants}
            className="z-30 flex items-center gap-2 rounded-full bg-sky-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:bg-sky-500"
          >
            {showAll ? (
              <>
                See Less <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                See More <ChevronDown className="h-5 w-5" />
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
      {!showAll && (
        <div className="relative -bottom-20 z-10 w-full">
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white via-white/95 to-transparent"></div>
        </div>
      )}
    </section>
  );
};

export default WhoLovesUs;
