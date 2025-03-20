"use client";

// File: /components/Blog/DownloadCTA.tsx
import React from "react";
import Link from "next/link";

const DownloadCTA = () => {
  return (
    <div className="mb-8 mt-8 rounded-lg bg-cyan-100/70 p-6 shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-black">
        You can also download our free guides here
      </h3>
      <div className="flex justify-center">
        <Link
          href="/free-stuff"
          className="mt-3 block w-44 bg-sky-800 px-4 py-2 text-center text-white transition-colors duration-200 hover:bg-sky-900"
        >
          Download Now
        </Link>
      </div>
    </div>
  );
};

export default DownloadCTA;
