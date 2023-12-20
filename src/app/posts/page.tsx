import { fetchBlogPosts, getCategoriesCounter } from "@/api/contentfulLib";
import PostCategories from "@/components/posts/PostCategories";
import PostItem from "@/components/posts/PostItem";
import PostSearchWrapper from "@/components/posts/PostSearchWrapper";
export const revalidate = process.env.REVALIDATE_TIME;

export default async function PostsPage() {
  const blogPosts = await fetchBlogPosts();

  const categoriesCounter = getCategoriesCounter(blogPosts);

  return (
    <main className='flex flex-col gap-4'>
      <PostCategories categoriesCounter={categoriesCounter} />
      <PostSearchWrapper />
      <ul className='bg-backgroundColor3 rounded-2xl p-6'>
        {blogPosts.map(({ slug, title, description, category, createdAt }) => (
          <li
            key={slug}
            className='relative  hover:before:h-full hover:before:w-3 hover:before:absolute hover:before:-left-4 hover:before:bg-accentColor hover:before:rounded-lg'>
            <PostItem
              title={title}
              description={description}
              category={category}
              createdAt={createdAt}
              slug={slug}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
