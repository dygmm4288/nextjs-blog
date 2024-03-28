import Link from "next/link";

const ImageWithLink = (props: JSX.IntrinsicElements["img"] | undefined) => {
  if (!props) return null;
  const { src, alt, width, height } = props;

  return (
    <Link href={src || ""}>
      <img
        src={src || ""}
        alt={alt || ""}
        width={(width && +width) || 1200}
        height={(height && +height) || 300}
      />
    </Link>
  );
};

export default ImageWithLink;
