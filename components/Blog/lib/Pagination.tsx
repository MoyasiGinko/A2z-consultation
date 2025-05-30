"use client";

import React, { useEffect, useRef } from "react";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const prevPageRef = useRef(currentPage);
  // Effect to scroll to top when page changes
  useEffect(() => {
    if (prevPageRef.current !== currentPage) {
      // Try to scroll to blog section with offset, fallback to top of page
      const blogSection =
        document.querySelector("section[data-blog-section]") ||
        document.querySelector("section.bg-gray-50") ||
        document.body;

      if (blogSection && blogSection !== document.body) {
        const rect = blogSection.getBoundingClientRect();
        const offsetTop = window.pageYOffset + rect.top - 100; // 100px offset for breathing room
        
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      prevPageRef.current = currentPage;
    }
  }, [currentPage]);
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mt-12 flex items-center">
      <button
        onClick={handlePrevious}
        className="flex h-10 w-10 items-center justify-center border border-gray-300 hover:bg-gray-100"
        disabled={currentPage === 1}
      >
        <span className="sr-only">Previous</span>
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={`flex h-10 w-10 items-center justify-center border border-gray-300 ${
            currentPage === index + 1
              ? "bg-sky-500 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={handleNext}
        className="flex h-10 w-10 items-center justify-center border border-gray-300 hover:bg-gray-100"
        disabled={currentPage === totalPages}
      >
        <span className="sr-only">Next</span>
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
