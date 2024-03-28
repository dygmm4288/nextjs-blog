import { parseImgSrc } from "@/api/contentfulImage";
import Image from "next/image";
import Link from "next/link";

const ImageWithLink = (props: JSX.IntrinsicElements["img"] | undefined) => {
  if (!props) return null;
  const { src, alt, width, height } = props;

  return (
    <Link href={src || ""} target='_blank'>
      <Image
        src={parseImgSrc(src) || ""}
        alt={alt || ""}
        width={(width && +width) || 1200}
        height={(height && +height) || 300}
      />
    </Link>
  );
};

export default ImageWithLink;
