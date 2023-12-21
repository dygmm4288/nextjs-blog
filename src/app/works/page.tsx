import { fetchBlogWorks } from "@/api/contentfulLib";
import Image from "next/image";
import Link from "next/link";

export const revalidate = process.env.REVALIDATE_TIME;
export default async function Works() {
  const works = await fetchBlogWorks();
  return (
    <div className='w-full h-full'>
      <ul className='p-4 grid grid-cols-2 gap-4'>
        {works.map(({ slug, title, description, projectImg }) => (
          <li key={slug}>
            <Link href={`/works/${slug}`}>
              <section className='p-4 flex flex-col gap-4'>
                <Image
                  className='rounded-2xl object-cover w-full h-48'
                  src={"https:" + projectImg[0]!.src}
                  alt='project img'
                  width={projectImg[0]!.width}
                  height={projectImg[0]!.height}
                />
                <h3 className='text-2xl font-bold'>{title}</h3>
                <p className='text-lg opacity-50 hover:opacity-100 hover:text-accentColor'>
                  {description}
                </p>
              </section>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
