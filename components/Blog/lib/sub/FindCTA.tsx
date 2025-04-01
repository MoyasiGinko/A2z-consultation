"use client";

// File: /components/Blog/HelpCTA.tsx
import React from "react";
import Link from "next/link";

const FindCTA = () => {
  return (
    <div className=" mt-8 p-6 text-center">
      <h1 className="mb-2 bg-gradient-to-r from-sky-500 via-sky-700 to-sky-800  bg-clip-text text-4xl font-bold text-transparent">
        Find out if we’re the right match for you
      </h1>
      <h3 className="mb-2 bg-gradient-to-r from-sky-600/80 via-sky-700/80 to-sky-800/80  bg-clip-text text-lg font-bold text-transparent">
        Call us today: +44 7441398273, contact us or book a consultation below.
      </h3>
      <div className="flex justify-center">
        <Link
          href="/get-in-touch"
          className="mt-3 block w-44 rounded-lg bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 px-4 py-2 text-center text-white transition-colors duration-200 hover:bg-sky-900 hover:from-sky-700 hover:via-sky-800 hover:to-sky-900"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default FindCTA;
