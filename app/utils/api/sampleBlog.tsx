"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fetchPosts } from "@/app/utils/context/SanityClient";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";

// Types for blog posts
interface Author {
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  body: any[];
  mainImage: {
    asset: {
      url: string;
    };
  };
  author: Author;
  publishedAt: string;
}

// Blog Card Component
const BlogCard: React.FC<{ post: Post; index: number }> = ({ post, index }) => {
  // Format date for display
  const formattedDate = post.publishedAt
    ? format(new Date(post.publishedAt), "MMMM dd, yyyy")
    : "No date";

  // Extract a preview of the blog content
  const getTextPreview = (body: any[]) => {
    if (!body || !body.length) return "No content available";

    // Find the first text block
    const textBlock = body.find(
      (block) => block._type === "block" && block.children,
    );

    if (!textBlock) return "No content available";

    // Extract text from the block
    const text = textBlock.children
      .filter((child: any) => child._type === "span" && child.text)
      .map((child: any) => child.text)
      .join(" ");

    // Return a truncated preview
    return text.length > 120 ? `${text.substring(0, 120)}...` : text;
  };

  return (
    <motion.div
      className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Image Section */}
      <div className="relative h-60 w-full overflow-hidden">
        {post.mainImage?.asset?.url ? (
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <span className="text-gray-400">No image available</span>
          </div>
        )}

        {/* Date badge */}
        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
          {formattedDate}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900">{post.title}</h3>

        <p className="mb-4 flex-1 text-gray-600">{getTextPreview(post.body)}</p>

        {/* Author and Read More Section */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {post.author?.image?.asset?.url ? (
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                <span className="text-xs font-medium text-blue-600">
                  {post.author?.name?.charAt(0) || "A"}
                </span>
              </div>
            )}
            <span className="text-sm text-gray-600">
              {post.author?.name || "Anonymous"}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug?.current}`}
            className="rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-100"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// Featured Blog Component
const FeaturedBlog: React.FC<{ post: Post }> = ({ post }) => {
  const formattedDate = post.publishedAt
    ? format(new Date(post.publishedAt), "MMMM dd, yyyy")
    : "No date";

  return (
    <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 shadow-xl">
      <div className="absolute inset-0 opacity-20">
        {post.mainImage?.asset?.url && (
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      <div className="relative grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:p-12">
        {/* Content Side */}
        <div className="flex flex-col justify-center text-white">
          <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
            Featured Post
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{post.title}</h2>

          <div className="mb-6 flex items-center space-x-3">
            {post.author?.image?.asset?.url ? (
              <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/30">
                <Image
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <span className="text-sm font-medium text-white">
                  {post.author?.name?.charAt(0) || "A"}
                </span>
              </div>
            )}
            <div>
              <p className="font-medium">{post.author?.name || "Anonymous"}</p>
              <p className="text-sm text-blue-100">{formattedDate}</p>
            </div>
          </div>

          <div className="mb-8 text-blue-100">
            <PortableText
              value={post.body ? post.body.slice(0, 1) : []}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="line-clamp-3">{children}</p>
                  ),
                },
              }}
            />
          </div>

          <Link
            href={`/blog/${post.slug?.current}`}
            className="inline-block w-fit rounded-full bg-white px-6 py-3 font-medium text-blue-700 transition-transform hover:scale-105"
          >
            Read Full Article
          </Link>
        </div>

        {/* Image Side - Only shown on desktop */}
        <div className="relative hidden overflow-hidden rounded-xl md:block">
          {post.mainImage?.asset?.url ? (
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-blue-800">
              <span className="text-blue-200">No image available</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Blog Component
const BlogComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Categories - You can fetch these from Sanity or define them statically
  const categories = [
    "All",
    "Technology",
    "Business",
    "Immigration",
    "Consulting",
  ];

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const blogPosts = await fetchPosts();
        setPosts(blogPosts);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Get featured post (latest post)
  const featuredPost = posts.length > 0 ? posts[0] : null;

  // Get remaining posts
  const remainingPosts = posts.length > 1 ? posts.slice(1) : [];

  // Filter posts by category (if needed)
  const filteredPosts =
    activeCategory === "All"
      ? remainingPosts
      : remainingPosts.filter((post) => {
          // Assuming posts have categories; adapt this to your schema
          return post.categories?.includes(activeCategory);
        });

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
            Our Blog
          </span>
          <h1 className="mb-4 mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
            Latest Insights & News
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Stay informed with the latest industry trends, expert advice, and
            success stories from our team of specialists.
          </p>
        </div>

        {/* Featured Post */}
        {loading ? (
          <div className="mb-16 flex h-80 items-center justify-center rounded-xl bg-white p-8 shadow-md">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          </div>
        ) : error ? (
          <div className="mb-16 rounded-xl bg-red-50 p-8 text-center text-red-600">
            {error}
          </div>
        ) : featuredPost ? (
          <FeaturedBlog post={featuredPost} />
        ) : (
          <div className="mb-16 rounded-xl bg-white p-8 text-center text-gray-500 shadow-md">
            No posts available.
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="flex h-60 items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          </div>
        ) : error ? (
          <div className="rounded-xl bg-red-50 p-8 text-center text-red-600">
            {error}
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post._id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-white p-8 text-center text-gray-500 shadow-md">
            No posts available in this category.
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 6 && (
          <div className="mt-12 text-center">
            <button className="rounded-full bg-white px-6 py-3 font-medium text-blue-600 shadow transition-colors hover:bg-blue-50">
              Load More Articles
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mx-auto mt-20 max-w-3xl rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center shadow-xl md:p-12">
          <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-6 text-blue-100">
            Get the latest articles, resources, and updates delivered straight
            to your inbox.
          </p>

          <form className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full bg-white/10 px-5 py-3 text-white placeholder-blue-200 outline-none ring-white/30 backdrop-blur focus:ring-2"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 font-medium text-blue-700 transition-transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
