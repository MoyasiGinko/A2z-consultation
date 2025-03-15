"use client";

// File: /components/Blog/BlogGrid.tsx
import React from "react";
import BlogItem from "./BlogItem";
import Pagination from "./Pagination";
import { BlogType } from "@/types/blog";

interface BlogGridProps {
  posts: BlogType[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const BlogGrid: React.FC<BlogGridProps> = ({
  posts,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <div className="lg:w-2/3">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {posts.map((post, index) => (
          <BlogItem key={index} post={post} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default BlogGrid;
