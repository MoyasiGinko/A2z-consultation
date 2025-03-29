import Blog from "@/components/Blog";
import { Metadata } from "next";
import { fetchCategories } from "@/app/utils/api/SanityAPI";
import { notFound } from "next/navigation";

// Generate dynamic metadata for the category page
export async function generateMetadata(): Promise<Metadata> {
  try {
    const categories = await fetchCategories();

    return {
      title: "Blog Category - A2Z",
      description:
        "Find lots of useful information that answers the most common questions",
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

const CategoryPage = () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <Blog />
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default CategoryPage;
