"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  date: string;
  image: string;
  title: string;
  description: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: "DECEMBER 19, 2024",
    image: "/images/blog/blog-01.png",
    title: "Unlock Your Future in the UK: All About the New Entrant Skill Visa",
    description:
      "Start your UK career with the New Entrant Skill Visa—low barriers, great opportunities, tailored support.",
    slug: "new-entrant-skill-visa",
  },
  {
    id: 2,
    date: "NOVEMBER 29, 2024",
    image: "/images/blog/blog-02.png",
    title:
      "Everything You Need to Know About the UK's New Travel Authorization (ETA) for 2025",
    description:
      "Starting January 2025, non-European travelers must apply for the UK ETA, a digital travel authorization streamlining UK entry processes.",
    slug: "uk-travel-authorization-eta",
  },
  {
    id: 3,
    date: "NOVEMBER 22, 2024",
    image: "/images/blog/blog-03.png",
    title: "Unlock Your Dream UK Trip: The Ultimate Tourist Visa Guide",
    description: "Your guide to a smooth UK visa!",
    slug: "uk-tourist-visa-guide",
  },
];

const BlogCard: React.FC<{ post: BlogPost; index: number }> = ({
  post,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={cardRef}
      className="relative z-10 flex h-full flex-col rounded-xl border border-slate-200 bg-white"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.2,
            ease: "easeOut",
          },
        },
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <div className="relative aspect-square max-h-[350px] w-full overflow-hidden rounded-xl">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full"
        >
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
          />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col p-4 lg:p-6">
        <motion.span
          className="mb-1 text-xs font-bold uppercase text-blue-600"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.1 + index * 0.2,
              },
            },
          }}
        >
          {post.date}
        </motion.span>

        <motion.h3
          className="mb-4 text-lg font-bold text-slate-700"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.2 + index * 0.2,
              },
            },
          }}
        >
          {post.title}
        </motion.h3>

        <motion.p
          className="mb-4 font-medium text-slate-600"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.3 + index * 0.2,
              },
            },
          }}
        >
          {post.description}
        </motion.p>

        <motion.div
          className="mt-auto"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.4 + index * 0.2,
              },
            },
          }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="group flex items-center gap-2 py-2 text-sm font-bold uppercase text-slate-600 transition-colors duration-300 hover:text-blue-600"
          >
            Read more
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight
                size={18}
                className="transition-colors duration-300 group-hover:text-blue-600"
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

const BlogSection: React.FC = () => {
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
        <motion.div
          className="relative mb-20"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <motion.h2
            className="text-center text-3xl font-bold lg:text-4xl"
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
            Blog & News
          </motion.h2>
          <motion.div
            className="mx-auto mt-4 block h-2 bg-blue-600"
            initial={{ width: 0 }}
            animate={{ width: ["0%", "15%", "0%"] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
