"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Swiper from "swiper";
import { Navigation, Autoplay, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Star, Quote } from "lucide-react";

// Import required modules
Swiper.use([Navigation, Autoplay, Mousewheel, Keyboard]);

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
];

const WhoLovesUs: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = new Swiper(
      swiperRef.current.querySelector(".swiper") as HTMLElement,
      {
        speed: 700,
        loop: true,
        autoHeight: false,
        followFinger: true,
        freeMode: true,
        slideToClickedSlide: true,
        slidesPerView: "auto",
        spaceBetween: 24,
        rewind: false,
        centeredSlides: false,
        mousewheel: {
          forceToAxis: true,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 24,
          },
          1024: {
            spaceBetween: 32,
          },
        },
      },
    );

    return () => {
      swiper.destroy();
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div ref={ref}>
      <motion.div
        ref={swiperRef}
        className="testimonials-section"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto mb-12 px-4">
          <motion.div
            className="mb-12 flex items-center justify-between"
            variants={titleVariants}
          >
            <h2 className="relative inline-block text-3xl font-bold md:text-4xl lg:text-5xl">
              Who Loves Us
              <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transform bg-primary transition-transform duration-500 group-hover:scale-x-100"></span>
            </h2>
            <div className="hidden space-x-4 md:flex">
              <button className="swiper-button-prev rounded-full bg-primary p-3 text-white transition-colors hover:bg-primary/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button className="swiper-button-next rounded-full bg-primary p-3 text-white transition-colors hover:bg-primary/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        <section className="relative overflow-hidden bg-primary bg-cover bg-bottom py-16 text-white lg:py-24">
          {/* Background particles effect */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="animate-float absolute rounded-full bg-white/10"
                style={{
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 10 + 15}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          <div className="container relative z-10 mx-auto">
            <div className="swiper">
              <div className="swiper-wrapper flex">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="swiper-slide bg-background min-w-[300px] shrink-0 transform rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl md:min-w-[400px] lg:min-w-[480px] lg:p-8"
                  >
                    <div className="mb-4 flex gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>

                    <div className="relative mb-6">
                      <Quote className="absolute -left-2 -top-2 h-10 w-10 text-primary/20" />
                      <p className="text-foreground leading-relaxed">
                        {testimonial.content}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-4 lg:gap-6">
                      <div className="bg-muted relative size-16 overflow-hidden rounded-full lg:size-20">
                        {testimonial.avatar ? (
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        ) : null}
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-bold">
                          {testimonial.name}
                        </h3>
                        <p className="text-muted-foreground text-sm font-medium leading-none">
                          {testimonial.position}
                        </p>
                        <p className="text-muted-foreground text-sm font-medium">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default WhoLovesUs;
