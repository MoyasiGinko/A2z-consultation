"use client";

import { useState } from "react";
import BlogHeader from "@/components/Blog/lib/BlogHeader";
import BlogGrid from "@/components/Blog/lib/BlogGrid";
import Sidebar from "@/components/Blog/lib/Sidebar";
import BlogData from "@/components/Blog/blogData";
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
      <BlogHeader />

      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col gap-10 lg:flex-row">
            <BlogGrid
              posts={currentPosts}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
