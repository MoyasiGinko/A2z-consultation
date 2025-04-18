"use client";

import { useState, useEffect } from "react";
import SharePost from "@/components/Blog/lib/SharePost";
import BookCallSidebar from "@/components/Blog/lib/sub/BookCall";
import CategoryList from "@/components/Blog/lib/sub/CategoryList";
import TrendingPosts from "@/components/Blog/lib/sub/TrendingPosts";
import Image from "next/image";
import Link from "next/link";
import { getSingleBlogPost } from "@/components/Blog/blogDetailsData";
import fallbackDetailsData from "@/components/Blog/blogDetailsData";
import { useRouter, usePathname } from "next/navigation";
import { PortableText } from "@/utils/PortableText";

// Define types
interface BlogPost {
  id: string;
  title: string;
  author: string;
  publishDate: string;
  category: string;
  mainImage: string;
  content: string[] | any; // Support both array of strings and PortableText blocks
  estimatedReadingTime?: string;
  additionalImages?: string[];
  relatedPosts?: Array<{
    id: string;
    title: string;
    slug: string;
    mainImage: string;
    publishDate: string;
  }>;
}

interface BlogDetailsProps {
  slug?: string;
}

const BlogDetails = ({ slug: propSlug }: BlogDetailsProps) => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Determine slug from props, URL, or data attribute
  const getSlug = () => {
    // Check if slug was passed as prop
    if (propSlug) {
      return propSlug;
    }

    // Check if we can extract from pathname
    if (pathname) {
      const pathParts = pathname.split("/");
      const slugFromPath = pathParts[pathParts.length - 1];
      return slugFromPath;
    }

    // Check for data attribute as fallback
    const dataElement = document.getElementById("blog-post-slug");
    if (dataElement) {
      const slugFromData = dataElement.getAttribute("data-slug");
      return slugFromData;
    }

    return null;
  };

  useEffect(() => {
    async function loadBlogPost() {
      try {
        setLoading(true);
        const effectiveSlug = getSlug();

        // Handle missing slug
        if (!effectiveSlug) {
          console.warn("No slug provided, using fallback data");
          setError("No post ID provided");
          setBlogPost(fallbackDetailsData[0]);
          return;
        }

        console.log(`Attempting to fetch post with slug: "${effectiveSlug}"`);

        // Try to get the post
        const post = await getSingleBlogPost(effectiveSlug);

        // Post found successfully
        if (post) {
          console.log(`Successfully loaded post: "${post.title}"`);
          setError(null);
          setBlogPost(post);
        }
        // Post not found (null returned)
        else {
          console.warn(
            `Post with slug "${effectiveSlug}" not found, using fallback data`,
          );
          setError(`Post "${effectiveSlug}" not found`);
          setBlogPost(fallbackDetailsData[0]);
        }
      } catch (err: any) {
        // Handle any unexpected errors
        const errorMessage = err?.message || "Unknown error occurred";
        console.error(`Error loading blog post: ${errorMessage}`, err);

        // Check for specific error types
        if (errorMessage.includes("not found")) {
          setError(`Post not found: ${errorMessage}`);
        } else {
          setError(`Failed to load blog post: ${errorMessage}`);
        }

        // Always use fallback data in case of error
        setBlogPost(fallbackDetailsData[0]);
      } finally {
        setLoading(false);
      }
    }

    loadBlogPost();
  }, [propSlug, pathname]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-lg">Loading blog post...</p>
        </div>
      </div>
    );
  }

  // Always show content since we're using fallback data
  if (!blogPost) {
    return (
      <div className="mx-auto my-16 max-w-3xl rounded-lg bg-yellow-50 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold text-yellow-600">
          Post Not Found
        </h2>
        <p className="mb-6 text-yellow-700">
          We couldn't find the blog post you're looking for.
        </p>
        <Link
          href="/blog/category/show-all"
          className="rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
        >
          Browse All Posts
        </Link>
      </div>
    );
  }

  // Render function to handle content display with error info
  const renderContent = () => {
    // Always show fallback content when there's an error
    const isShowingFallback = error !== null;

    return (
      <section className="pb-20 pt-20 lg:pb-25 lg:pt-25 xl:pb-30 xl:pt-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Error notification */}
          {isShowingFallback && (
            <div className="mb-8 rounded-md bg-yellow-50 p-4 text-yellow-700">
              <p className="font-medium">{error}</p>
              <p className="text-sm">Showing alternative content instead.</p>
              <button
                onClick={() => router.push("/blog/category/show-all")}
                className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                View all blog posts
              </button>
            </div>
          )}

          <div className="flex flex-col gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13  md:p-10">
                {/* Main Blog Image */}
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={blogPost.mainImage}
                      alt={blogPost.title}
                      fill
                      className="rounded-md object-cover object-center"
                      priority
                    />
                  </div>
                </div>

                {/* Blog Title */}
                <h1 className="mb-5 mt-11 text-3xl font-semibold text-black  2xl:text-sectiontitle2">
                  {blogPost.title}
                </h1>

                {/* Blog Metadata */}
                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li className="flex items-center">
                    <span className="mr-1 text-black ">Author: </span>
                    {blogPost.author}
                  </li>
                  <li className="flex items-center">
                    <span className="mr-1 text-black ">Published On:</span>
                    {blogPost.publishDate}
                  </li>
                  <li className="flex items-center">
                    <span className="mr-1 text-black ">Category:</span>
                    {blogPost.category}
                  </li>
                  {blogPost.estimatedReadingTime && (
                    <li className="flex items-center">
                      <svg
                        className="mr-1.5 h-4 w-4 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {blogPost.estimatedReadingTime}
                    </li>
                  )}
                </ul>

                {/* Blog Content */}
                <div className="blog-details text-body-color space-y-6 text-base leading-relaxed">
                  <div className="mb-6">
                    {/* Safe rendering of content with explicit error handling for PortableText */}
                    {(() => {
                      try {
                        return <PortableText value={blogPost.content} />;
                      } catch (contentError) {
                        console.error("Error rendering content:", contentError);
                        // Fallback to rendering plain text if PortableText fails
                        return (
                          <div>
                            {Array.isArray(blogPost.content) ? (
                              blogPost.content.map((paragraph, i) =>
                                typeof paragraph === "string" ? (
                                  <p key={i} className="mb-4">
                                    {paragraph}
                                  </p>
                                ) : null,
                              )
                            ) : typeof blogPost.content === "string" ? (
                              <p className="mb-4">{blogPost.content}</p>
                            ) : (
                              <p className="mb-4 text-red-500">
                                Content could not be displayed
                              </p>
                            )}
                          </div>
                        );
                      }
                    })()}
                  </div>

                  {/* Additional Images */}
                  {blogPost.additionalImages &&
                    blogPost.additionalImages.length > 0 && (
                      <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {blogPost.additionalImages.map((img, index) => (
                          <div
                            key={index}
                            className="overflow-hidden rounded-lg"
                          >
                            <Image
                              src={img}
                              width={500}
                              height={300}
                              alt={`Blog image ${index + 1}`}
                              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                </div>

                <SharePost />

                {/* Related Posts Section */}
                {blogPost.relatedPosts && blogPost.relatedPosts.length > 0 && (
                  <div className="mt-16 border-t border-gray-200 pt-12 ">
                    <h3 className="mb-8 text-2xl font-semibold text-black ">
                      Related Articles
                    </h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {blogPost.relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          href={`/blog/${relatedPost.slug}`}
                        >
                          <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg ">
                            <div className="relative h-48 w-full overflow-hidden">
                              <Image
                                src={relatedPost.mainImage}
                                alt={relatedPost.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <div className="p-4">
                              <h4 className="line-clamp-2 font-medium text-black ">
                                {relatedPost.title}
                              </h4>
                              <p className="text-body-color  mt-2 text-sm">
                                {relatedPost.publishDate}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="sticky top-24 space-y-10">
                <CategoryList />
                <BookCallSidebar />
                <TrendingPosts />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Return the rendered content
  return renderContent();
};

export default BlogDetails;
