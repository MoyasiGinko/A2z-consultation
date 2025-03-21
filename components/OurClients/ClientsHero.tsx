"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FC, useRef, useState, useEffect } from "react";

type Client = {
  name: string;
  industry: string;
};

const ClientsHero: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Featured clients that will rotate through
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const featuredClients: Client[] = [
    { name: "Tesla", industry: "Automotive" },
    { name: "Microsoft", industry: "Technology" },
    { name: "Adidas", industry: "Sportswear" },
    { name: "Airbnb", industry: "Hospitality" },
  ];

  // Auto rotate through clients
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClientIndex((prev) => (prev + 1) % featuredClients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [featuredClients.length]);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative h-[70vh] w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="/images/features/blogs-banner.png"
          alt="Our Clients"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-gray-600/80 to-gray-900/90" />

      {/* Animated Particles Background */}
      {/* <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/30 md:h-3 md:w-3"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div> */}

      {/* Text Content */}
      <div className="container relative z-10 mx-auto mt-12 flex h-full flex-col justify-center px-4">
        <motion.div style={{ opacity }}>
          {/* <motion.span
            className="mb-6 inline-block rounded-full bg-sky-500/50 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Trusted by industry leaders
          </motion.span> */}

          <motion.h1
            className="mb-6 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold leading-tight text-transparent  md:text-7xl"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Our{" "}
            <span className="bg-gradient-to-b from-blue-600 to-sky-500/80 bg-clip-text text-transparent">
              Clients
            </span>
          </motion.h1>

          <motion.p
            className="mb-8 max-w-xl text-xl text-white/90 md:text-2xl"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Building innovative solutions for forward-thinking organizations
            worldwide.
          </motion.p>

          {/* Animated Client Showcase */}
          <motion.div
            className="max-w-sm rounded-lg bg-white/10 p-6 backdrop-blur-md"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <p className="mb-2 text-white/80">Featured Client</p>
            <motion.div
              key={currentClientIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <h3 className="text-2xl font-bold text-white">
                {featuredClients[currentClientIndex].name}
              </h3>
              <p className="text-white/70">
                {featuredClients[currentClientIndex].industry}
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <p className="mb-2 text-sm text-white/80">Scroll to explore</p>
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
          <motion.div
            className="mt-2 h-2 w-1 rounded-full bg-white/80"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div> */}
    </motion.div>
  );
};

export default ClientsHero;
