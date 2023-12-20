import { BlogPost } from "@/api/contentfulLib";
import format from "@/lib/dayjs/format";
import Image from "next/image";
import Link from "next/link";
import Badge from "../common/Badge";
interface Props {
  post: Omit<BlogPost, "content" | "references" | "relatedPost">;
}

export default function LastPostItem({ post }: Props) {
  const { thumbnail, createdAt, tags, slug, description, category, title } =
    post;

  return (
    <li className='p-10 flex flex-col gap-5'>
      <Link href={`/posts/${slug}`} className='flex flex-col gap-5'>
        <div className='flex flex-row justify-between items-center'>
          <p className='text-2xl font-semibold'>{category}</p>
          <p>{format(createdAt)}</p>
        </div>
        <h2 className='text-5xl font-bold'>{title}</h2>
        {thumbnail && (
          <Image
            className='w-full max-h-96 rounded-2xl object-cover'
            src={"https:" + thumbnail.src}
            alt={thumbnail.alt}
            width={thumbnail.width}
            height={thumbnail.height}
          />
        )}
      </Link>
      <p>{description}</p>
      <ul className='flex flex-row gap-5'>
        {tags.map((tag: string) => (
          <li key={slug + tag}>
            <Badge content={tag} />
          </li>
        ))}
      </ul>
    </li>
  );
}
