import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetails from "@/components/Blog/blogDetails";
import { fetchPostBySlug } from "@/app/utils/api/SanityAPI";
import BlogsBanner from "@/components/Blog/lib/sub/BlogsBanner";
import BookTimeCTA from "@/components/Blog/lib/sub/BookTimeCTA";

type Props = {
  params: { slug: string };
};

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  try {
    const post = await fetchPostBySlug(slug);

    if (!post) {
      return {
        title: "Blog Post Not Found | A2Z Consultation",
        description: "The requested blog post could not be found.",
      };
    }

    return {
      title: `${post.title} | A2Z Consultation Blog`,
      description:
        post.excerpt ||
        "Read this insightful article from A2Z Consultation's blog",
      openGraph: {
        title: post.title,
        description:
          post.excerpt ||
          "Read this insightful article from A2Z Consultation's blog",
        images: post.mainImage?.asset?.url
          ? [
              {
                url: post.mainImage.asset.url,
                width: 1200,
                height: 630,
                alt: post.title,
              },
            ]
          : [],
      },
    };
  } catch (error) {
    return {
      title: "Blog Post | A2Z Consultation",
      description: "Read our latest blog post on A2Z Consultation",
    };
  }
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return [];
}

// The page component
export default async function Page({ params }: Props) {
  const { slug } = params;

  // Optional: Validate slug
  if (!slug) {
    notFound();
  }

  return (
    <>
      <BlogsBanner />
      <BlogDetails slug={slug} />
      <BookTimeCTA />
    </>
  );
}
