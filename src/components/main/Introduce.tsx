import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import Avatar from "../../assets/images/avatar.png";

const logos = [
  "https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  "https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  "https://img.shields.io/badge/with%20a%20logo-grey?style=for-the-badge&logo=javascript",
  "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white",
  "https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=for-the-badge",
];

export default function Introduce() {
  return (
    <div className='relative p-5 mt-10 bg-backgroundColor3 rounded-xl'>
      <div className='absolute'>
        <Image
          src={Avatar}
          alt='진호가 바다 앞에서 서있다.'
          className='w-20 h-20 rounded-full'
        />
      </div>
      <section className='flex flex-col gap-6'>
        <header className='ml-24  flex flex-col gap-4'>
          <span className='opacity-50'>저에 대해 소개 합니다.</span>
          <div className='flex flex-row gap-3 items-center'>
            <h2 className='text-3xl font-bold'>이 진호</h2>
            <a href='https://github.com/dygmm4288'>
              <FaGithub className='text-3xl hover:text-accentColor' />
              <span className='w-0 h-0 absolute overflow-hidden'>
                https://github.com/dygmm4288
              </span>
            </a>
            <a href='https://naver.com'>
              <MdOutlineLocalPostOffice className='text-3xl hover:text-accentColor' />
              <span className='w-0 h-0 absolute overflow-hidden'>
                dlwlsghgk124@naver.com
              </span>
            </a>
          </div>
        </header>
        <main>
          <p className='text-lg'>
            안녕하세요. 저는 생각하는 개발자가 되고 싶은 사람입니다.
            <strong className='font-bold'>
              더 나은 개발 방식, 진행한 프로젝트 회고, 개발 과정
            </strong>
            등 제가 생각한 과정들을 작성할 것입니다. 블로그를 읽는 모든 분들에게
            많은 도움이 됐으면 좋겠습니다.
          </p>
        </main>
        <footer>
          <p className='font-bold text-center'>
            HTML/CSS, Javascript, Typescript, React, NextJS, Redux(RTK,
            Redux-Query), React-Query, Zustand, Functional Programming, NodeJS,
            python, Express, Koa, GraphQL
          </p>
        </footer>
      </section>
    </div>
  );
}
