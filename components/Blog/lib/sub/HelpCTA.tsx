"use client";

// File: /components/Blog/HelpCTA.tsx
import React from "react";
import Link from "next/link";

const HelpCTA = () => {
  return (
    <div className="mb-8 mt-8 rounded-lg bg-cyan-100/70 p-6 shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-black">
        Are you not sure what to do next?
      </h3>
      <div className="flex justify-center">
        <Link
          href="/get-in-touch"
          className="mt-3 block w-44 bg-sky-800 px-4 py-2 text-center text-white transition-colors duration-200 hover:bg-sky-900"
        >
          Get Help
        </Link>
      </div>
    </div>
  );
};

export default HelpCTA;
