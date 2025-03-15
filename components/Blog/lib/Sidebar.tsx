"use client";
import React from "react";
import Link from "next/link";
import CategoryList from "./sub/CategoryList";
import TrendingPosts from "./sub/TrendingPosts";
import DownloadCTA from "./sub/DownloadCTA";
import HelpCTA from "./sub/HelpCTA";

const Sidebar = () => {
  return (
    <div className="lg:w-1/3">
      <CategoryList />
      <TrendingPosts />
      <DownloadCTA />
      <HelpCTA />
    </div>
  );
};

export default Sidebar;
