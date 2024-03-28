"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const sourceData = [
  { src: "/", name: "home" },
  { src: "/works", name: "work" },
  { src: "/posts", name: "post" },
];
function isCurrentSrc(src: string, pathname: string) {
  if (src === "/") return src === pathname;
  return pathname.startsWith(src);
}

export default function Header({}) {
  const pathname = usePathname();
  return (
    <div className='flex flex-col gap-4 justify-between items-center my-6 sm:flex-row'>
      <Link href={"/"}>
        <h1 className='text-5xl font-bold'>Ea-Syno.dev</h1>
      </Link>
      <nav>
        <ul className='flex flex-row gap-4'>
          {sourceData.map(({ src, name }) => (
            <li
              key={src}
              className={`relative ${
                isCurrentSrc(src, pathname) ? styles.navUnderBar : ""
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
