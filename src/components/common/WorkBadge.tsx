export default function WorkBadge({ content }: { content: string }) {
  return (
    <span
      className='
  py-2 px-4 sm:px-6 bg-primaryColor rounded-lg font-bold  uppercase basis-1/6
  text-center text-sm sm:text-xl
  '
      style={{ color: "white", flexGrow: 0 }}>
      {content}
    </span>
  );
}
