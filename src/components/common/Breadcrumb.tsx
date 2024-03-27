import Link from "next/link";
import { PropsWithChildren } from "react";

type Breadcrumb = {
  href: string;
  title: string;
};

const Breadcrumb = ({ children }: PropsWithChildren) => {
  return <ol className='flex flex-row items-center'>{children}</ol>;
};

const BreadcrumbPath = ({ href, title }: { href: string; title: string }) => {
  return (
    <li>
      <Link
        className='text-primaryColor font-bold hover:text-accentColor'
        href={href}>
        {title}
      </Link>
      <span className='mx-2'>{">"}</span>
    </li>
  );
};
const BreadcrumbCurrent = ({ title }: { title: string }) => {
  return (
    <li>
      <h1 className='font-bold text-sm sm:text-2xl'>{title}</h1>
    </li>
  );
};

Breadcrumb.Path = BreadcrumbPath;
Breadcrumb.Current = BreadcrumbCurrent;

export default Breadcrumb;
