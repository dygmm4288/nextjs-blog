import { fetchBlogWork } from "@/api/contentfulLib";
import WorkBadge from "@/components/common/WorkBadge";
import format from "@/lib/dayjs/format";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}
export const revalidate = process.env.REVALIDATE_TIME;

const TAG_CSS = "flex flex-row gap-2 items-center";
const LINK_CSS =
  "font-bold hover:underline text-xl text-primaryColor hover:text-accentColor";
const P_CSS = "font-bold text-xl";

export default async function WorkDetail({ params }: Props) {
  const { slug } = params;
  const {
    title,
    description,
    endTime,
    focus,
    githubURL,
    projectImg,
    stack,
    startTime,
    websiteURL,
  } = await fetchBlogWork(slug);

  return (
    <div className='p-6 bg-backgroundColor3 rounded-xl flex flex-col gap-6'>
      <div className='flex flex-row gap-2'>
        <Link
          href='/works'
          className='text-primaryColor font-bold hover:text-accentColor'>
          Works
        </Link>
        <p className='font-bold'>{`> ${title}`}</p>
      </div>
      <p className='text-xl'>{description}</p>
      <ul className='flex flex-col gap-4'>
        <li className={TAG_CSS}>
          <WorkBadge content='website' />
          <a href={websiteURL!} className={LINK_CSS}>
            {websiteURL}
          </a>
        </li>
        <li className={TAG_CSS}>
          <WorkBadge content='github' />
          <a href={githubURL!} className={LINK_CSS}>
            {githubURL}
          </a>
        </li>
        <li className={TAG_CSS}>
          <WorkBadge content='stack' />
          <p className={P_CSS}>{stack.join(", ")}</p>
        </li>
        <li className={TAG_CSS}>
          <WorkBadge content='period' />
          <p className={P_CSS}>
            {format(String(startTime))} ~ {format(String(endTime))}
          </p>
        </li>
        <li className='flex flex-row gap-4 items-baseline'>
          <WorkBadge content='focus' />
          <ul className='list-disc  flex flex-col gap-4 ml-5'>
            {focus?.map((item) => (
              <li key={item} className={P_CSS}>
                {item}
              </li>
            ))}
          </ul>
        </li>
      </ul>
      {projectImg?.map((item) => (
        <Image
          key={item?.src}
          className='rounded-lg'
          src={"https:" + item?.src}
          width={item?.width}
          height={item?.height}
          alt={item?.alt as string}
        />
      ))}
    </div>
  );
}
