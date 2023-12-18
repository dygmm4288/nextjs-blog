import Link from "next/link";
import LatestPostItem from "./LatestPostItem";

export default function LatestPostContainer() {
  return (
    <div>
      <div>
        <h2>Latest Posts</h2>
        <Link href='/posts'>전체 포스트 보기</Link>
      </div>
      <ul>
        {Array.from({ length: 2 }, (_, index) => (
          <LatestPostItem key={"post-index"} />
        ))}
      </ul>
    </div>
  );
}
