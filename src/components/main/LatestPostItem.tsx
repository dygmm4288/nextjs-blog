import Image from "next/image";
import Study from "../../assets/images/study.png";

export default function LastPostItem() {
  return (
    <li>
      <Image
        src={Study}
        alt={"스터디 썸네일 불타는 꼬마 요정이 열심히 타자를 뚜드리고 있음"}
      />
      <div>
        <p>category</p>
        <p>created At</p>
      </div>
      <h2>header</h2>
      <p>description</p>
      <ul>
        <li>tag1</li>
        <li>tag2</li>
        <li>tag3</li>
      </ul>
    </li>
  );
}
