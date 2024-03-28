import { fetchBlogPost } from "@/api/contentfulLib";
import Badge from "@/components/common/Badge";
import format from "@/lib/dayjs/format";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styles from "./markdown.module.scss";

interface Props {
  params: {
    slug: string;
  };
}
export const revalidate = process.env.REVALIDATE_TIME;
export default async function Post({ params }: Props) {
  const { slug } = params;
  const {
    title,
    category,
    content,
    createdAt,
    references,
    relatedPost,
    tags,
    thumbnail,
  } = await fetchBlogPost(slug);
  return (
    <section className='flex flex-col gap-6 rounded-2xl bg-backgroundColor3 p-6'>
      <header className='flex flex-col gap-4'>
        <Link
          href={`/posts?category=${category}`}
          className='font-bold hover:text-accentColor'>
          {`< ${category}`}
        </Link>
        <Image
          className='rounded-2xl w-full h-96 object-cover'
          src={thumbnail?.src || ""}
          alt={thumbnail?.alt as string}
          width={thumbnail?.width}
          height={thumbnail?.height}
        />

        <div className='flex flex-col sm:items-center justify-between'>
          <h1 className='text-4xl sm:text-6xl font-bold my-2'>{title}</h1>
          <p className='self-end sm:self-auto'>{format(createdAt)}</p>
        </div>
        <ul className='flex flex-row justify-center sm:justify-start gap-4 sm:gap-6'>
          {tags.map((tag) => (
            <Badge key={tag} content={tag} />
          ))}
        </ul>
      </header>
      <div className={styles["markdown"]}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </section>
  );
}
