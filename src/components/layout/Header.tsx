"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const sourceData = [
  { src: "/", name: "home" },
  { src: "/works", name: "work" },
  { src: "/posts", name: "post" },
];

export default function Header({}) {
  const pathname = usePathname();
  return (
    <div className='flex flex-row justify-between items-center my-6'>
      <Link href={"/"}>
        <h1 className='text-5xl font-bold'>Ea-Syno.dev</h1>
      </Link>
      <nav>
        <ul className='flex flex-row gap-4'>
          {sourceData.map(({ src, name }) => (
            <li
              key={src}
              className={`relative ${
                pathname === src ? styles.navUnderBar : ""
              }`}>
              <Link
                href={src}
                className='text-2xl font-medium hover:text-primaryColor'>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
