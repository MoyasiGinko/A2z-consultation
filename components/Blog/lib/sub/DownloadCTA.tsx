"use client";

// File: /components/Blog/DownloadCTA.tsx
import React from "react";
import Link from "next/link";

const DownloadCTA = () => {
  return (
    <div className="mb-8 rounded-lg bg-blue-50 p-6 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold">
        You can also download our free guides here
      </h3>
      <Link
        href="/downloads"
        className="mt-3 block rounded bg-blue-500 px-4 py-2 text-center text-white transition-colors duration-200 hover:bg-blue-600"
      >
        Download Now
      </Link>
    </div>
  );
};

export default DownloadCTA;
