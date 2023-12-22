import { fetchBlogPostCategories, fetchBlogPosts } from "@/api/contentfulLib";
import PostCategories from "@/components/posts/PostCategories";
import PostItem from "@/components/posts/PostItem";
import PostSearchWrapper from "@/components/posts/PostSearchWrapper";
export const revalidate = process.env.REVALIDATE_TIME;
// 서버 컴포넌트로 최대한 구현하는게 좋다.(사용자 입장에서 빠르게 볼 수 아ㅣㅆ음. )
// 필요한 부분만 클라이언트 컴포넌트로 구현
// 최대한 SSG를 지향하고 dㅏㄴ되는것을 SSR을 하고 그럼에도 불구하고 안되면  ISR(예외적인 내용)
interface Props {
  searchParams?: {
    category?: string;
    search?: string;
  };
}
export default async function PostsPage({ searchParams }: Props) {
  const [blogPosts, categoriesCounter] = await Promise.all([
    fetchBlogPosts(searchParams),
    fetchBlogPostCategories(),
  ]);

  return (
    <main className='flex flex-col gap-4'>
      <PostCategories categoriesCounter={categoriesCounter} />
      <PostSearchWrapper />
      <ul className='bg-backgroundColor3 rounded-2xl p-4'>
        {blogPosts.map(({ slug, title, description, category, createdAt }) => (
          <li
            key={slug}
            className='relative hover:before:h-full hover:before:w-2 sm:hover:before:w-3 hover:before:absolute hover:before:-left-2 hover:before:bg-accentColor hover:before:rounded-lg'>
            <PostItem
              title={title}
              description={description}
              category={category}
              createdAt={createdAt}
              slug={slug}
            />
          </li>
        ))}
        {blogPosts.length === 0 && <li>포스트가 존재하지 않습니다.</li>}
      </ul>
    </main>
  );
}
