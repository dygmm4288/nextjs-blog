"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
  categoriesCounter: { [key: string]: number };
}

const exampleCategoriesCounter: Record<string, number> = {
  javascript: 1,
  typescript: 2,
  react: 3,
  nextjs: 4,
  redux: 5,
  "redux-toolkit": 6,
  "redux-query": 7,
  "react-query": 8,
  zustand: 9,
  "functional-programming": 10,
  nodejs: 11,
  python: 12,
  express: 13,
  koa: 14,
  graphql: 15,
};

export default function PostCategories({ categoriesCounter }: Props) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const isSelected = (category: string) => selectedCategory === category;

  return (
    <ul className='flex flex-row gap-5 flex-wrap justify-center my-16'>
      {/* {Object.keys(categoriesCounter).map((category) => ( */}
      {Object.keys(exampleCategoriesCounter).map((category) => (
        <li
          key={category}
          className={isSelected(category) ? "font-bold text-accentColor" : ""}>
          <Link
            href={
              !isSelected(category) ? `/posts/?category=${category}` : "/posts"
            }>{`${category}(${exampleCategoriesCounter[category]})`}</Link>
        </li>
      ))}
    </ul>
  );
}
