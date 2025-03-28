"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchCategories } from "@/app/utils/api/SanityAPI";
import Link from "next/link";

// Define the Category type
interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  postCount: number;
}

interface CategoryListProps {
  currentCategory?: string;
}

const CategoryList = ({ currentCategory }: CategoryListProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Fetch categories on component mount
  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const fetchedCategories = await fetchCategories();

        // Sort categories by post count (most posts first)
        const sortedCategories = fetchedCategories.sort(
          (a: Category, b: Category) => b.postCount - a.postCount,
        );

        setCategories(sortedCategories);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  return (
    <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
      <motion.h3
        className="mb-4 text-2xl font-bold text-black"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Categories
      </motion.h3>

      {loading ? (
        // Loading state
        <div className="flex h-40 items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
        </div>
      ) : error ? (
        // Error state
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-500">
          {error}
        </div>
      ) : categories.length === 0 ? (
        // Empty state
        <div className="rounded-md bg-gray-50 p-4 text-sm text-gray-500">
          No categories found
        </div>
      ) : (
        // Categories list with animations
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.ul className="space-y-2" variants={containerVariants}>
            {/* All Posts category first */}
            <motion.li variants={itemVariants}>
              <Link href="/blog/category/show-all" passHref>
                <motion.a
                  className={`flex items-center justify-between rounded-md p-2 shadow-sm transition-colors
                    ${
                      !currentCategory
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                        : "bg-white text-black hover:bg-gray-50"
                    }`}
                  whileHover={
                    !currentCategory
                      ? {}
                      : {
                          scale: 1.03,
                          background:
                            "linear-gradient(to right, #f5f5f5, #f0f0f0)",
                        }
                  }
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <motion.svg
                      className="mr-2 h-3 w-3 font-extrabold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                    <span>All Posts</span>
                  </div>
                </motion.a>
              </Link>
            </motion.li>

            {/* Regular categories */}
            {categories.map((category) => (
              <motion.li key={category._id} variants={itemVariants}>
                <Link href={`/blog/category/${category.slug.current}`} passHref>
                  <motion.a
                    className={`flex items-center justify-between rounded-md p-2 shadow-sm transition-colors
                      ${
                        currentCategory === category.slug.current
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                          : "bg-white text-black hover:bg-gray-50"
                      }`}
                    whileHover={
                      currentCategory === category.slug.current
                        ? {}
                        : {
                            scale: 1.03,
                            background:
                              "linear-gradient(to right, #f5f5f5, #f0f0f0)",
                          }
                    }
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <motion.svg
                        className="mr-2 h-3 w-3 font-extrabold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        whileHover={{ rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                      <span>{category.title}</span>
                    </div>

                    {/* Post count badge */}
                    <span
                      className={`ml-2 rounded-full px-2 py-0.5 text-xs font-medium
                      ${
                        currentCategory === category.slug.current
                          ? "bg-blue-500 bg-opacity-40 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {category.postCount}
                    </span>
                  </motion.a>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </div>
  );
};

export default CategoryList;
