import { client } from "@/sanity/lib/client";

export async function fetchPosts() {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    body,
    mainImage {
      asset -> { url }
    },
    author -> {
      name,
      image { asset -> { url } }
    },
    publishedAt
  } | order(publishedAt desc)`;

  return await client.fetch(query);
}
