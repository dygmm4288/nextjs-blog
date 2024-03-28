import { BlogPost } from "@/api/contentfulLib";
import Link from "next/link";
import LatestPostItem from "./LatestPostItem";
interface Props {
  latestBlogPosts: BlogPost[];
}

export default function LatestPostContainer({ latestBlogPosts }: Props) {
  return (
    <div className='bg-backgroundColor3 p-6 mt-6 rounded-xl'>
      <div className='flex flex-row justify-between items-center'>
        <h2 className='font-bold text-3xl text-accentColor'>Latest Posts</h2>
        <Link href='/posts' className='hover:underline'>
          전체 포스트 보기
        </Link>
      </div>
      <ul className='flex flex-col gap-10'>
        {latestBlogPosts.map((post) => (
          <LatestPostItem key={"post-index"} post={post} />
        ))}
      </ul>
    </div>
  );
}
