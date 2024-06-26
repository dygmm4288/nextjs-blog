import { fetchBlogWorks } from "@/api/contentfulLib";
import { formatShort } from "@/lib/dayjs/format";
import Image from "next/image";
import Link from "next/link";

export const revalidate = process.env.REVALIDATE_TIME;
export default async function Works() {
  const works = await fetchBlogWorks();

  return (
    <div className='w-full h-full'>
      <ul className='p-4 grid grid-cols-2 gap-4'>
        {works.map(
          ({ slug, title, projectImg, startTime, endTime, participants }) => (
            <li
              key={slug}
              className='rounded-2xl shadow-xl hover:scale-105 transition-transform'>
              <Link href={`/works/${slug}`}>
                <section className='p-4 flex flex-col gap-4'>
                  <div className='rounded-2xl overflow-hidden border-b-2'>
                    <Image
                      className='object-cover w-full h-48 '
                      src={projectImg[0]!.src}
                      alt='project img'
                      width={projectImg[0]!.width}
                      height={projectImg[0]!.height}
                    />
                  </div>
                  <h3 className='text-lg text-left sm:text-2xl font-bold border-t-2 border-solid border-t-primaryColor pt-2'>
                    {title}
                  </h3>
                  <span className='text-xl'>{`${formatShort(
                    startTime,
                  )} ~ ${formatShort(endTime)} `}</span>
                  <span>{participants}</span>
                </section>
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
