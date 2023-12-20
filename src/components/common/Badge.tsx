interface Props {
  content: string;
}
export default function Badge({ content }: Props) {
  return (
    <p className='p-2 bg-secondaryColor rounded-lg text-textColor'>{content}</p>
  );
}
