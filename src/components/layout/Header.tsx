import Link from "next/link";
const sourceData = [
  { src: "/", name: "home" },
  { src: "/works/", name: "work" },
  { src: "/posts/", name: "post" },
];

export default function Header() {
  return (
    <div>
      <Link href={"/"}>
        <h1 className='bg-blue-500'>Ea-Syno-dev</h1>
      </Link>
      <nav>
        <ul>
          {sourceData.map(({ src, name }) => (
            <li key={src}>
              <Link href={src}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
