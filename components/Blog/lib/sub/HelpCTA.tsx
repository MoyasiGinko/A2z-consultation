"use client";

// File: /components/Blog/HelpCTA.tsx
import React from "react";
import Link from "next/link";

const HelpCTA = () => {
  return (
    <div className="rounded-lg bg-blue-50 p-6 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold">
        Are you not sure what to do next?
      </h3>
      <Link
        href="/contact"
        className="mt-3 block rounded bg-blue-500 px-4 py-2 text-center text-white transition-colors duration-200 hover:bg-blue-600"
      >
        Get Help
      </Link>
    </div>
  );
};

export default HelpCTA;
