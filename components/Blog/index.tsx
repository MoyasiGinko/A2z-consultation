"use client";

import { useState, useEffect } from "react";
import BlogHeader from "@/components/Blog/lib/BlogHeader";
import BlogGrid from "@/components/Blog/lib/BlogGrid";
import Sidebar from "@/components/Blog/lib/Sidebar";
import { BlogType } from "@/types/blog";
import FindCTA from "./lib/sub/FindCTA";
import {
  fetchPosts,
  fetchPostsByCategory,
  fetchCategories,
} from "@/app/utils/api/SanityAPI";

interface BlogProps {
  categorySlug?: string;
}

const Blog = ({ categorySlug }: BlogProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryTitle, setCategoryTitle] = useState<string>("");
  const postsPerPage = 9;

  useEffect(() => {
    // Reset to page 1 when category changes
    setCurrentPage(1);
  }, [categorySlug]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        let fetchedPosts;

        if (categorySlug) {
          // Fetch posts for the specific category
          console.log(`Fetching posts for category: ${categorySlug}`);
          fetchedPosts = await fetchPostsByCategory(categorySlug);

          // If we got posts, extract the category title
          if (fetchedPosts.length > 0 && fetchedPosts[0].categories) {
            const category = fetchedPosts[0].categories.find(
              (cat: any) => cat.slug.current === categorySlug,
            );
            if (category) {
              setCategoryTitle(category.title);
            }
          } else {
            // If no posts were found, fetch the category title separately
            const categories = await fetchCategories();
            const category = categories.find(
              (cat: any) => cat.slug.current === categorySlug,
            );
            if (category) {
              setCategoryTitle(category.title);
            } else {
              // If category doesn't exist, show all posts
              fetchedPosts = await fetchPosts();
              setCategoryTitle("");
            }
          }
        } else {
          // Fetch all posts if no category specified
          console.log("Fetching all posts");
          fetchedPosts = await fetchPosts();
          setCategoryTitle("");
        }

        // Format posts to match BlogType
        const formattedPosts = fetchedPosts.map((post: any, index: number) => ({
          id: index + 1,
          title: post.title,
          excerpt: post.excerpt || "Read more about this topic...",
          category:
            post.categories && post.categories.length > 0
              ? post.categories[0].title
              : "Uncategorized",
          date: new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          readTime: post.estimatedReadingTime
            ? `${post.estimatedReadingTime} min read`
            : "5 min read",
          thumbnail: post.mainImage?.asset?.url || "/images/blog/default.jpg",
          slug: post.slug.current,
        }));

        setBlogPosts(formattedPosts);
      } catch (err) {
        console.error("Error loading blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [categorySlug]); // Re-fetch when category changes

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <>
      <BlogHeader categoryTitle={categoryTitle} />

      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="flex-1">
              {error ? (
                <div className="rounded-md bg-red-50 p-4 text-center text-red-600">
                  {error}
                </div>
              ) : loading ? (
                <div className="flex h-96 items-center justify-center">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
                </div>
              ) : blogPosts.length === 0 ? (
                <div className="rounded-md bg-gray-100 p-8 text-center">
                  <h2 className="mb-2 text-2xl font-bold">No posts found</h2>
                  <p className="text-gray-600">
                    {categorySlug
                      ? `There are no posts in the "${categoryTitle}" category yet.`
                      : `There are no blog posts available.`}
                  </p>
                </div>
              ) : (
                <BlogGrid
                  posts={currentPosts}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                />
              )}
            </div>

            {/* Sidebar is outside the loading/error/empty states */}
            <Sidebar currentCategory={categorySlug} />
          </div>
        </div>
      </section>

      <FindCTA />
    </>
  );
};

export default Blog;
