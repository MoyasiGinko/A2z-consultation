"use client";
import { BlogType } from "@/types/blog";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchPosts } from "@/app/utils/api/SanityAPI";

interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  author: {
    name: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
  publishedAt: string;
}

const BlogData = (): BlogType[] => {
  const [posts, setPosts] = useState<BlogType[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await fetchPosts();
      const formattedPosts = fetchedPosts.map((post: Post, index: number) => ({
        id: index + 1,
        title: post.title,
        excerpt:
          "Learn all the basics and get started with web development and everything else you need to know.", // You might want to add this field to your Sanity schema
        category: "Web Design", // You might want to add this field to your Sanity schema
        date: new Date(post.publishedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        readTime: "5 min read", // You might want to add this field to your Sanity schema
        thumbnail: post.mainImage.asset.url,
        slug: post.slug,
      }));
      setPosts(formattedPosts);
    };
    loadPosts();
  }, []);

  return posts;
};

export default BlogData;
