import Image from "next/image";
import Avatar from "../../assets/images/avatar.png";

export default function Introduce() {
  return (
    <div>
      <div>
        <Image src={Avatar} alt='진호가 바다 앞에서 서있다.' />
      </div>

      <section>
        <header>
          <h2>저에 대해 소개 합니다.</h2>
          <span>이 진호</span>
          <a href='https://github.com/dygmm4288'>
            <span>https://github.com/dygmm4288</span>
          </a>
          <a href='https://naver.com'>
            <span>dlwlsghgk124@naver.com</span>
          </a>
        </header>
        <main>
          <p>안녕하세요. 저는 생각하는 개발자가 되고 싶은 사람입니다.</p>
          <p>
            더 나은 개발 방식, 진행한 프로젝트 회고, 개발 과정 등 제가 생각한
            과정들을 작성할 것입니다.
          </p>
          <p>블로그를 읽는 모든 분들에게 많은 도움이 됐으면 좋겠습니다.</p>
        </main>
        <footer>
          <p>
            HTML/CSS, Javascript, Typescript, React, NextJS, Redux(RTK,
            Redux-Query), React-Query, Zustand, Functional Programming, NodeJS,
            python, Express, Koa, GraphQL
          </p>
        </footer>
      </section>
    </div>
  );
}
