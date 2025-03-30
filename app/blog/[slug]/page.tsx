import { Metadata } from "next";
import BlogDetails from "@/components/Blog/blogDetails";
import BlogsBanner from "@/components/Blog/lib/sub/BlogsBanner";
import BookTimeCTA from "@/components/Blog/lib/sub/BookTimeCTA";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog Post | A2Z Consultation",
    description: "Read our latest blog post on A2Z Consultation",
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return [];
}

// The page component
export default async function Page() {
  return (
    <>
      <BlogsBanner />
      <BlogDetails />
      <BookTimeCTA />
    </>
  );
}
