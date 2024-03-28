import format from "@/lib/dayjs/format";
import Link from "next/link";

interface Props {
  title: string;
  description: string | undefined;
  category: string;
  createdAt: string | Date | number;
  slug: string;
}
export default function PostItem({
  category,
  createdAt,
  title,
  description,
  slug,
}: Props) {
  return (
    <Link href={`/posts/${slug}`}>
      <div className='min-h-64 max-h-64 hover:translate-x-2 transition-transform'>
        <div className='flex flex-row justify-between font-bold'>
          <span className='text-xl'>{category}</span>
          <span>{format(createdAt)}</span>
        </div>
        <div>
          <h3 className='text-4xl font-bold'>{title}</h3>
          <p className='text-lg overflow-clip'>{description}</p>
        </div>
      </div>
    </Link>
  );
}
