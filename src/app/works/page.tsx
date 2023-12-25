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
          ({ slug, title, description, projectImg, startTime, endTime }) => (
            <li key={slug}>
              <Link href={`/works/${slug}`}>
                <section className='p-4 flex flex-col gap-4'>
                  <div className='rounded-2xl overflow-hidden'>
                    <Image
                      className='object-cover w-full h-48 hover:scale-105 transition-transform'
                      src={projectImg[0]!.src}
                      alt='project img'
                      width={projectImg[0]!.width}
                      height={projectImg[0]!.height}
                    />
                  </div>
                  <h3 className='text-lg text-center sm:text-left sm:text-2xl font-bold'>
                    {title}
                  </h3>
                  <span className='text-xs text-center '>{`${formatShort(
                    startTime,
                  )} ~ ${formatShort(endTime)} `}</span>
                  <p className='text-lg opacity-50 hover:opacity-100 hover:text-accentColor'>
                    {description}
                  </p>
                </section>
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
