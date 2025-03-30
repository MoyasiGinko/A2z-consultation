import { redirect } from "next/navigation";

export default function BlogPage() {
  redirect("/blog/category/show-all");
}
