"use client";
import { fetchPostBySlug } from "@/app/utils/api/SanityAPI";
import { format } from "date-fns";
import { DataTable } from "@/types/blog";

interface BlogPost {
  id: string;
  title: string;
  author: string;
  publishDate: string;
  category: string;
  mainImage: string;
  content: string[] | any;
  estimatedReadingTime?: string;
  additionalImages?: string[];
  dataTables?: DataTable[];
  relatedPosts?: Array<{
    id: string;
    title: string;
    slug: string;
    mainImage: string;
    publishDate: string;
  }>;
}

export async function getSingleBlogPost(
  slug: string,
): Promise<BlogPost | null> {
  try {
    // Validate slug input
    if (!slug || typeof slug !== "string" || slug.trim() === "") {
      console.warn("Invalid slug provided:", slug);
      return null;
    }

    // Only trim whitespace but preserve case
    const trimmedSlug = slug.trim();

    // Attempt to fetch the post
    const post = await fetchPostBySlug(trimmedSlug);

    // Handle post not found
    if (!post) {
      console.warn(`Post with slug "${trimmedSlug}" not found`);
      return null;
    }

    // Format the post data to match BlogPost interface
    const formattedPost: BlogPost = {
      id: post._id || `temp-id-${Date.now()}`,
      title: post.title || "Untitled Post",
      author: post.author?.name || "Anonymous",
      publishDate: post.publishedAt
        ? format(new Date(post.publishedAt), "MMMM d, yyyy")
        : "No date",
      category:
        post.categories && post.categories.length > 0
          ? post.categories[0].title
          : "Uncategorised",
      mainImage: post.mainImage?.asset?.url || "/images/blog/blog-01.png",
      content: post.body || [],
      estimatedReadingTime: post.estimatedReadingTime
        ? `${post.estimatedReadingTime} min read`
        : undefined,
      additionalImages: post.additionalImages?.map(
        (image: any) => image?.asset?.url || "/images/blog/blog-01.png",
      ),
      // Map data tables if available
      dataTables: post.dataTables || [],
      // Format related posts if available
      relatedPosts: post.relatedPosts?.map((relatedPost) => ({
        id: relatedPost._id || `related-${Date.now()}`,
        title: relatedPost.title || "Related Post",
        slug: relatedPost.slug?.current || "related-post",
        mainImage:
          relatedPost.mainImage?.asset?.url || "/images/blog/blog-01.png",
        publishDate: relatedPost.publishedAt
          ? format(new Date(relatedPost.publishedAt), "MMMM d, yyyy")
          : "No date",
      })),
    };

    return formattedPost;
  } catch (error: any) {
    // Enhanced error logging and handling
    if (error.message && error.message.includes("not found")) {
      console.warn(`Post with slug "${slug}" not found:`, error.message);
    } else {
      console.error("Error fetching blog post:", error);
    }

    // Always return null on error to trigger fallback in the parent component
    return null;
  }
}

// Fallback data for when the API fails
const fallbackDetailsData = [
  {
    id: "fallback-post",
    title: "Kobe Steel plant that supplied",
    author: "Jhon Doe",
    publishDate: "July 30, 2023",
    category: "Events",
    mainImage: "/images/blog/blog-01.png",

    // Content formatted as PortableText blocks instead of strings
    content: [
      {
        _type: "block",
        _key: "paragraph1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "paragraph2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span2",
            text: "Aenean augue ex, condimentum vel metus vitae, aliquam porta elit. Quisque non metus ac orci mollis posuere. Mauris vel ipsum a diam interdum ultricies sed vitae neque. Nulla porttitor quam vitae pulvinar placerat. Nulla fringilla elit sit amet justo feugiat sodales.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
    additionalImages: ["/images/blog/blog-01.png", "/images/blog/blog-02.png"],

    // Add sample data tables to the fallback data
    dataTables: [
      {
        _id: "sample-table-1",
        title: "Sample Data Table",
        description: "This is a sample data table for demonstration purposes.",
        headers: ["Feature", "Basic Plan", "Pro Plan", "Enterprise"],
        rows: [
          { cells: ["Users", "5", "25", "Unlimited"] },
          { cells: ["Storage", "10GB", "100GB", "1TB"] },
          { cells: ["Support", "Email", "Email & Chat", "24/7 Phone"] },
          { cells: ["API Access", "Limited", "Full", "Full + Priority"] },
        ],
        tableStyle: "striped" as const,
        slug: { current: "sample-table" },
      },
    ],

    // Add some related posts to the fallback data
    relatedPosts: [
      {
        id: "fallback-related-1",
        title: "How to Improve Your Marketing Strategy",
        slug: "marketing-strategy",
        mainImage: "/images/blog/blog-02.png",
        publishDate: "August 5, 2023",
      },
      {
        id: "fallback-related-2",
        title: "The Future of Digital Transformation",
        slug: "digital-transformation",
        mainImage: "/images/blog/blog-03.png",
        publishDate: "August 12, 2023",
      },
    ],
  },
];

export default fallbackDetailsData;
