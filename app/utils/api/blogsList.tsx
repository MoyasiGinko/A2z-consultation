"use client";
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

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    };
    loadPosts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="my-8 text-3xl font-bold">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post._id}
            className="overflow-hidden rounded-lg border shadow-lg"
          >
            {post.mainImage && (
              <div className="relative h-48">
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
              <div className="flex items-center gap-2">
                {post.author.image && (
                  <Image
                    src={post.author.image.asset.url}
                    alt={post.author.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                )}
                <span className="text-sm text-gray-600">
                  {post.author.name}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
