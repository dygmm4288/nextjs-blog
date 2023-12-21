import { TypeWorkSkeleton } from "@/contentful/types";
import { Entry } from "contentful";
import { cache } from "react";
import { TypePostSkeleton } from "../contentful/types/TypePost";
import { client } from "./contentfulApi";
import { parseContentfulContentImage } from "./contentfulImage";

type BlogPostEntry = Entry<TypePostSkeleton, undefined, string>;
type BlogWorkEntry = Entry<TypeWorkSkeleton, undefined, string>;

export type BlogPost = ReturnType<typeof parseContenfulBlogPost>;
export type BlogWork = ReturnType<typeof parseContentfulBlogWork>;

function parseContenfulBlogPost(blogPostEntry: BlogPostEntry) {
  return {
    slug: blogPostEntry.fields.slug,
    title: blogPostEntry.fields.title,
    description: blogPostEntry.fields?.description,
    content: blogPostEntry.fields.content,
    createdAt: new Date(String(blogPostEntry.fields.createdAt)),
    tags: blogPostEntry.fields.tags,
    thumbnail: parseContentfulContentImage(blogPostEntry.fields.thumbnail),
    references: blogPostEntry.fields?.references,
    relatedPost: blogPostEntry.fields?.relatedPost,
    category: blogPostEntry.fields.category,
  };
}

function parseContentfulBlogWork(blogWorkEntry: BlogWorkEntry) {
  return {
    slug: blogWorkEntry.fields.slug,
    title: blogWorkEntry.fields.title,
    websiteURL: blogWorkEntry.fields.websiteURL,
    stack: blogWorkEntry.fields.stack,
    startTime: blogWorkEntry.fields.startTime,
    endTime: blogWorkEntry.fields.endTime,
    focus: blogWorkEntry.fields.focus,
    githubURL: blogWorkEntry.fields.githubURL,
    projectImg:
      blogWorkEntry.fields.projectImg?.map((img) =>
        parseContentfulContentImage(img),
      ) || [],
    description: blogWorkEntry.fields.description,
  };
}

export const fetchBlogPost = cache(async function (slug: string) {
  const contentfulClient = client;

  const blogPostResult = await contentfulClient.getEntries<TypePostSkeleton>({
    content_type: "post",
    "fields.slug[match]": slug,
  });

  return parseContenfulBlogPost(blogPostResult.items[0] as BlogPostEntry);
});
export const fetchBlogPosts = cache(async function (searchParams?: {
  category?: string;
  search?: string;
}) {
  const contentfulClient = client;

  const blogPostsResult = await contentfulClient.getEntries<TypePostSkeleton>({
    content_type: "post",
    order: ["fields.createdAt"],
  });
  return blogPostsResult.items
    .filter(
      (item) =>
        filterByCategory(item, searchParams?.category) &&
        filterBySearch(item, searchParams?.search),
    )
    .map(parseContenfulBlogPost) as BlogPost[];
});
export const fetchBlogPostCategories = cache(async function () {
  const contentfulClient = client;

  const blogPostsResult = await contentfulClient.getEntries<TypePostSkeleton>({
    content_type: "post",
  });
  return blogPostsResult.items.reduce((categories, item) => {
    if (!categories[item.fields.category]) categories[item.fields.category] = 0;
    categories[item.fields.category] += 1;
    return categories;
  }, {} as Record<string, number>);
});
export const fetchBlogWorks = cache(async function () {
  const contentfulClient = client;

  const blogWorksResult = await contentfulClient.getEntries<TypeWorkSkeleton>({
    content_type: "work",
  });
  console.log(blogWorksResult);

  return blogWorksResult.items.map(parseContentfulBlogWork) as BlogWork[];
});

function filterByCategory(post: BlogPostEntry, category?: string) {
  if (!category) return true;
  return post.fields.category === category;
}
function filterBySearch(post: BlogPostEntry, search?: string) {
  if (!search) return true;
  return (
    post.fields.title.includes(search) ||
    post.fields.description?.includes(search)
  );
}
