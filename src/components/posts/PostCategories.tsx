"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
  categoriesCounter: { [key: string]: number };
}

export default function PostCategories({ categoriesCounter }: Props) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const search = searchParams.get("search");

  const isSelected = (category: string) => selectedCategory === category;

  return (
    <ul className='flex flex-row gap-5 flex-wrap justify-center my-6 sm:my-16'>
      {/* {Object.keys(categoriesCounter).map((category) => ( */}
      {Object.keys(categoriesCounter).map((category) => (
        <li
          key={category}
          className={isSelected(category) ? "font-bold text-accentColor" : ""}>
          <Link
            href={
              !isSelected(category)
                ? `/posts?category=${category}${
                    search ? "&search=" + search : ""
                  }`
                : `/posts${search ? "?search=" + search : ""}`
            }>{`${category}(${categoriesCounter[category]})`}</Link>
        </li>
      ))}
    </ul>
  );
}
