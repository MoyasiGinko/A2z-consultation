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
    <div className="mb-8 rounded-lg bg-white p-6">
      <h3 className="mb-4 text-xl font-bold">Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <a
            key={index}
            className={`${
              index !== categories.length - 1 ? "mb-2" : ""
            } flex cursor-pointer items-center rounded-md p-2 text-black shadow-md hover:bg-gradient-to-r hover:from-sky-500 hover:via-sky-600 hover:to-sky-700 hover:text-white`}
          >
            <svg
              className="mr-2 h-3 w-3 font-extrabold"
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
            <span>{category}</span>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
