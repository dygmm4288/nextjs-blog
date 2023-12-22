interface Props {
  content: string;
}
export default function Badge({ content }: Props) {
  return (
    <p className='p-2 text-sm sm:text-base bg-secondaryColor rounded-lg text-textColor'>
      {content}
    </p>
  );
}
