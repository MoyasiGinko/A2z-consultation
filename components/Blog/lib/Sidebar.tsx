import React from "react";
import CategoryList from "./sub/CategoryList";
import TrendingPosts from "./sub/TrendingPosts";
import BookCall from "./sub/BookCall";

interface SidebarProps {
  currentCategory?: string; // Add this prop
}

const Sidebar = ({ currentCategory }: SidebarProps) => {
  return (
    <div className="lg:w-1/3">
      <div className="space-y-8">
        <CategoryList currentCategory={currentCategory} />
        <TrendingPosts />
        <BookCall />
      </div>
    </div>
  );
};

export default Sidebar;
