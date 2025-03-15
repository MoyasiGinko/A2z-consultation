"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";
import { BlogType } from "@/types/blog";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // This would come from your actual data source
  const blogPosts: BlogType[] = BlogData || [];

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <>
      {/* Header Section */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
          <h1 className="mb-4 text-center text-3xl font-bold text-gray-800">
            Our Blogs
          </h1>
          <p className="mx-auto max-w-3xl text-center text-gray-600">
            Below you'll find lots of useful information that answers the most
            common questions just like you. Feel free to browse through relevant
            categories to find what you're looking for.
          </p>
        </div>
      </section>

      {/* Main Blog Grid and Sidebar */}
      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col gap-10 lg:flex-row">
            {/* Blog Posts Grid */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {currentPosts.map((post, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    <div className="relative">
                      <Image
                        src={post.thumbnail || "/images/blog/placeholder.jpg"}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="h-48 w-full object-cover"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="mb-3 flex items-center text-xs text-gray-500">
                        <span className="mr-3">{post.date}</span>
                        <span className="flex items-center">
                          <svg
                            className="mr-1 h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold">
                        {post.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-600">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-xs font-semibold uppercase tracking-wider text-blue-500 hover:text-blue-700"
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-10 flex justify-center">
                <nav className="inline-flex">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`mx-1 px-3 py-1 ${
                        currentPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      } rounded`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Categories */}
              <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">Categories</h3>
                <ul>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Updates/News</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Web Development</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Helpful Tips & Tricks</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Keyword Research</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Email Marketing</span>
                  </li>
                </ul>
              </div>

              {/* Trending Posts */}
              <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">Trending Posts</h3>
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/blog/placeholder.jpg"
                          alt="Trending post"
                          width={60}
                          height={60}
                          className="h-16 w-16 rounded object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <Link
                          href={`/blog/trending-${index + 1}`}
                          className="text-sm font-medium text-teal-600 hover:text-teal-800"
                        >
                          Lorem ipsum dolor sit amet dolores est
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Downloads CTA */}
              <div className="mb-8 rounded-lg bg-blue-50 p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold">
                  You can also download our free guides here
                </h3>
                <Link
                  href="/downloads"
                  className="mt-3 block rounded bg-blue-500 px-4 py-2 text-center text-white transition-colors duration-200 hover:bg-blue-600"
                >
                  Download Now
                </Link>
              </div>

              {/* Need Help CTA */}
              <div className="rounded-lg bg-blue-50 p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold">
                  Are you not sure what to do next?
                </h3>
                <Link
                  href="/contact"
                  className="mt-3 block rounded bg-blue-500 px-4 py-2 text-center text-white transition-colors duration-200 hover:bg-blue-600"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
