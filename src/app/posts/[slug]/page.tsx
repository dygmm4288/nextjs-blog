interface Props {
  params: {
    slug: string;
  };
}
export default function Post({ params }: Props) {
  const { slug } = params;
  return <div>{slug} page</div>;
}
