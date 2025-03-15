"use client";

import React from "react";

const CategoryList = () => {
  const categories = [
    "Updates/News",
    "Web Development",
    "Helpful Tips & Tricks",
    "Keyword Research",
    "Email Marketing",
  ];

  return (
    <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-bold">Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`${index !== categories.length - 1 ? "mb-2" : ""} flex items-center`}
          >
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
            <span className="text-gray-700">{category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
