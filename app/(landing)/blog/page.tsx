import { constructMetadata, getBlurDataURL } from "@/lib/utils";
import { BlogPosts } from "@/components/content/blog-posts";
import { allPosts } from "@/.contentlayer/generated";

export const metadata = constructMetadata({
  title: "Blog – DialEdge AI",
  description:
    "Read the latest insights on conversational AI, business automation, and enterprise communication solutions from the DialEdge AI team.",
});

export default async function BlogPage() {
  const posts = await Promise.all(
    allPosts
      .filter((post) => post.published)
      .sort((a, b) => b.date.localeCompare(a.date))
      .map(async (post) => ({
        ...post,
        blurDataURL: await getBlurDataURL(post.image),
      }))
  );

  return <BlogPosts posts={posts} />;
}
