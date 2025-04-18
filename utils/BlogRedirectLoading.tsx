"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const BlogRedirectLoading = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect after showing the loading state
    const redirectTimeout = setTimeout(() => {
      router.push("/blog/category/show-all");
    }, 1000); // Small delay to show the loading animation

    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        <p className="mt-4 text-lg font-medium text-gray-600">
          Loading blogs...
        </p>
      </div>
    </div>
  );
};

export default BlogRedirectLoading;
