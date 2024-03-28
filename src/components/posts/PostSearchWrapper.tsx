"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function PostSearchWrapper() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryParams = searchParams.get("category");
  const searchKeywordParams = searchParams.get("search");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (categoryParams) {
      router.push(`/posts/?category=${categoryParams}&search=${searchKeyword}`);
      return;
    }
    router.push(`/posts/?search=${searchKeyword}`);
    setSearchKeyword("");
  };
  return (
    <div className='p-2'>
      <form
        onSubmit={handleSubmit}
        className='w-full flex flex-row items-center gap-2 p-5 sm:p-0'>
        <input
          className='w-full p-2 sm:p-4 bg-backgroundColor2 border-b-4 border-accentColor'
          id='search-input'
          value={searchKeyword}
          onChange={handleChange}
        />
        <button type='submit'>
          <IoIosSearch className='text-4xl cursor-pointer' />
        </button>
      </form>
      {searchKeywordParams && (
        <>
          <p className='text-center'>
            현재 검색어 :{" "}
            <span className='font-bold'>{searchKeywordParams}</span>
          </p>
          <small className='text-center text-sm block opacity-50 mt-2'>
            원래대로 돌아가려면 빈 내용을 검색하세요
          </small>
        </>
      )}
    </div>
  );
}
