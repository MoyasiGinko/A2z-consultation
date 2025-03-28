import Blog from "@/components/Blog";
import { Metadata } from "next";
import { fetchCategories } from "@/app/utils/api/SanityAPI";
import { notFound } from "next/navigation";

type Props = {
  params: { category: string };
};

// Generate dynamic metadata for the category page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const categorySlug = params.category;

    // Fetch categories to get the current category details
    const categories = await fetchCategories();
    const currentCategory = categories.find(
      (cat: any) => cat.slug.current === categorySlug,
    );

    if (!currentCategory) {
      return {
        title: "Category Not Found - A2Z",
        description: "The requested category could not be found",
      };
    }

    return {
      title: `${currentCategory.title} Blog Posts - A2Z`,
      description:
        currentCategory.description ||
        `Browse our collection of blog posts about ${currentCategory.title}`,
    };
  } catch (error) {
    console.error("Error generating category metadata:", error);
    return {
      title: "Blog Category - A2Z",
      description:
        "Find lots of useful information that answers the most common questions",
    };
  }
}

const CategoryPage = ({ params }: Props) => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <Blog categorySlug={params.category} />
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default CategoryPage;
