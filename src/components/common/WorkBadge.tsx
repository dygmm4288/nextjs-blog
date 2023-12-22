export default function WorkBadge({ content }: { content: string }) {
  return (
    <span
      className='
  py-2 px-6 bg-primaryColor rounded-lg font-bold text-xl uppercase basis-1/6
  text-center
  '
      style={{ color: "white", flexGrow: 0 }}>
      {content}
    </span>
  );
}
