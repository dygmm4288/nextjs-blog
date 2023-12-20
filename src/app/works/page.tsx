import { fetchBlogWorks } from "@/api/contentfulLib";

export const revalidate = process.env.REVALIDATE_TIME;
export default async function Works() {
  const works = await fetchBlogWorks();
  console.log(works);
  return (
    <div>
      <ul>
        {works.map((work) => (
          <li key={work.slug}>{work.title}</li>
        ))}
      </ul>
    </div>
  );
}
