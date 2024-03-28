import { fetchBlogWork } from "@/api/contentfulLib";
import ImageWithLink from "@/components/works/ImageWithLink";
import Breadcrumb from "@/components/common/Breadcrumb";
import ReactMarkdown from "react-markdown";
import styles from "./markdown.module.scss";

interface Props {
  params: {
    slug: string;
  };
}
export const revalidate = process.env.REVALIDATE_TIME;

export default async function WorkDetail({ params }: Props) {
  const { slug } = params;
  const { title, description } = await fetchBlogWork(slug);

  return (
    <div className='p-4 sm:p-6 bg-backgroundColor3 rounded-xl flex flex-col gap-6'>
      <div className='flex flex-row gap-2 items-center'>
        <Breadcrumb>
          <Breadcrumb.Path title={"Work"} href='/works' />
          <Breadcrumb.Current title={title} />
        </Breadcrumb>
      </div>
      <div className={styles["markdown"]}>
        <ReactMarkdown components={{ img: ImageWithLink }}>
          {description}
        </ReactMarkdown>
      </div>
    </div>
  );
}
