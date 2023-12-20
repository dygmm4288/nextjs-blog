import { fetchBlogPosts } from "@/api/contentfulLib";
import Introduce from "@/components/main/Introduce";
import LatestPostContainer from "@/components/main/LatestPostContainer";

export const revalidate = process.env.REVALIDATE_TIME;

export default async function Home() {
  const blogPosts = await fetchBlogPosts();

  const latestBlogPosts = blogPosts.slice(0, 2);
  return (
    <main>
      <Introduce />
      <LatestPostContainer latestBlogPosts={latestBlogPosts} />
    </main>
  );
}
