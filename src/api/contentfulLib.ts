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

export const fetchBlogPosts = cache(async function () {
  const contentfulClient = client;

  const blogPostsResult = await contentfulClient.getEntries<TypePostSkeleton>({
    content_type: "post",
    order: ["fields.createdAt"],
  });

  return blogPostsResult.items.map(parseContenfulBlogPost) as BlogPost[];
});
export const fetchBlogWorks = cache(async function () {
  const contentfulClient = client;

  const blogWorksResult = await contentfulClient.getEntries<TypeWorkSkeleton>({
    content_type: "work",
  });
  console.log(blogWorksResult);

  return blogWorksResult.items.map(parseContentfulBlogWork) as BlogWork[];
});
export const getCategoriesCounter = cache(function (BlogPosts: BlogPost[]) {
  return BlogPosts.reduce((acc, cur) => {
    if (!acc[cur.category]) acc[cur.category] = 0;
    acc[cur.category] += 1;
    return acc;
  }, {} as Record<string, number>);
});
