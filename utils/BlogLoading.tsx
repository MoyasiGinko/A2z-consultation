"use client";

import React from "react";

const BlogLoading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        <p className="mt-4 text-lg font-medium text-gray-600">
          Loading posts...
        </p>
      </div>
    </div>
  );
};

export default BlogLoading;
