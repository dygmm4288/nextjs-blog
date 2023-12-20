"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function PostSearchWrapper() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("검색 기능은 아직 구현되지 않았습니다.");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='w-full flex flex-row items-center gap-2'>
      <input
        className='w-full p-4 bg-backgroundColor2 border-b-4 border-accentColor'
        id='search-input'
        value={searchKeyword}
        onChange={handleChange}
      />
      <button type='submit'>
        <IoIosSearch className='text-4xl cursor-pointer' />
      </button>
    </form>
  );
}
