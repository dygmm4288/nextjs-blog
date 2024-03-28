import Link from "next/link";
import { PropsWithChildren } from "react";

const AWithBlank = (
  props: PropsWithChildren<JSX.IntrinsicElements["a"] | undefined>,
) => {
  if (!props) return null;
  const { href, children } = props;

  return (
    <Link href={href || ""} target='_blank'>
      {children}
    </Link>
  );
};

export default AWithBlank;
