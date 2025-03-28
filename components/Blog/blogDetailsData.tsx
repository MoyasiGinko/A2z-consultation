"use client";
import { fetchPostBySlug } from "@/app/utils/api/SanityAPI";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  author: string;
  publishDate: string;
  category: string;
  mainImage: string;
  content: string[];
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

export async function getSingleBlogPost(
  slug: string,
): Promise<BlogPost | null> {
  try {
    const post = await fetchPostBySlug(slug);

    if (!post) {
      console.error(`Post with slug "${slug}" not found`);
      return null;
    }

    // Extract text content from Portable Text blocks
    const extractTextContent = (blocks: any[]): string[] => {
      if (!blocks || !Array.isArray(blocks)) return ["No content available"];

      return blocks
        .filter((block) => block._type === "block" && block.children)
        .map((block) => {
          return block.children
            .filter((child: any) => child._type === "span" && child.text)
            .map((child: any) => child.text)
            .join("");
        })
        .filter((text) => text.trim().length > 0);
    };

    // Format the post data to match BlogPost interface
    const formattedPost: BlogPost = {
      id: post._id,
      title: post.title || "Untitled Post",
      author: post.author?.name || "Anonymous",
      publishDate: post.publishedAt
        ? format(new Date(post.publishedAt), "MMMM d, yyyy")
        : "No date",
      category:
        post.categories && post.categories.length > 0
          ? post.categories[0].title
          : "Uncategorized",
      mainImage: post.mainImage?.asset?.url || "/images/blog/blog-01.png",
      content: extractTextContent(post.body || []),
      estimatedReadingTime: post.estimatedReadingTime
        ? `${post.estimatedReadingTime} min read`
        : undefined,
      // Format related posts if available
      relatedPosts: post.relatedPosts?.map((relatedPost) => ({
        id: relatedPost._id,
        title: relatedPost.title,
        slug: relatedPost.slug.current,
        mainImage:
          relatedPost.mainImage?.asset?.url || "/images/blog/blog-01.png",
        publishDate: relatedPost.publishedAt
          ? format(new Date(relatedPost.publishedAt), "MMMM d, yyyy")
          : "No date",
      })),
    };

    return formattedPost;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

// Fallback data for when the API fails
const detailsData = [
  {
    id: "fallback-post",
    title: "Kobe Steel plant that supplied",
    author: "Jhon Doe",
    publishDate: "July 30, 2023",
    category: "Events",
    mainImage: "/images/blog/blog-01.png",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus quam sed condimentum. Curabitur vel turpis in dolor volutpat imperdiet in ut mi. Integer non volutpat nulla. Nunc elementum elit viverra, tempus quam non, interdum ipsum.",
      "Aenean augue ex, condimentum vel metus vitae, aliquam porta elit. Quisque non metus ac orci mollis posuere. Mauris vel ipsum a diam interdum ultricies sed vitae neque. Nulla porttitor quam vitae pulvinar placerat. Nulla fringilla elit sit amet justo feugiat sodales.",
    ],
    additionalImages: ["/images/blog/blog-01.png", "/images/blog/blog-02.png"],
  },
];

export default detailsData;
