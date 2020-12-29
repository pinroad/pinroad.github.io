import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Home.css';
//images
import front from '../img/browser_icon-icons.com_66536.png';
import back from '../img/database_icon-icons.com_66531.png';
import common from '../img/desktop_icon-icons.com_66537.png';
import pro01 from '../img/p01_logo.png';
import pro02 from '../img/p02_logo.png';
//silder
import PostSlider from '../components/PostSlider';
import postdata from '../data/blogpost.json';

function Home(props) {
  let postArr = postdata.data;

  //? 날짜순 정렬(최신순)
  let sortArr = postArr.sort((a, b) => {
    var dateA = new Date(a.createdAt).getTime();
    var dateB = new Date(b.createdAt).getTime();
    return dateA < dateB ? 1 : -1;
  });

  const [postData, setPostData] = useState(sortArr);

  const linkToBlog = () => {
    window.open('https://velog.io/@leobit', '_blank');
  };

  return (
    <div className="inner">
      <section className="introheader w-full">
        <h2>안녕하세요!</h2>
        <p>즐거움과 행복을 담고싶은 프론트엔드 개발자 최희정입니다</p>
      </section>
      <section className="introskills flex flex-col items-center">
        <h3>Skills</h3>
        <p>웹 개발 파트별로 간략하게 정리한 기술 스택입니다.</p>
        <p>소개 페이지에서 자세히 확인하실 수 있습니다.</p>
        <div className="skillset w-full inline-flex mt-16">
          <div className="skills">
            <img src={front} alt="front" />
            <p className="mt-6">Javascript</p>
            <p>HTML·CSS</p>
            <p>React SPA 개발</p>
          </div>
          <div className="skills">
            <img src={back} alt="back" />
            <p className="mt-6">NodeJS API 구축</p>
            <p>Express</p>
            <p>MySQL</p>
          </div>
          <div className="skills">
            <img src={common} alt="common" />
            <p className="mt-6">AWS, AWS-CLI</p>
            <p>Postman</p>
            <p>Git</p>
          </div>
        </div>
      </section>
      <section className="introprojects  flex flex-col items-center">
        <h3>Project</h3>
        <p>관심있는 기술을 공부하며 개발한 포트폴리오입니다.</p>
        <p>
          간단한 서비스 제작, 클론코딩 등을 도전하며 학습한 개발 활동입니다.
        </p>
        <div className="projectset w-full inline-flex flex-wrap items-center mt-10">
          <div className="projectbox flex justify-center items-center">
            <img src={pro01} alt="finalproject" style={{ width: '250px' }} />
            <span className="pro_caption flex flex-col justify-end items-end pr-6 pb-6">
              <p>
                기업협업
                <br /> 4주 팀 프로젝트
              </p>
              <p></p>
              <p>
                ReactJS · React Hooks
                <br /> tailwind CSS · Axios
              </p>
              <p>2020.11 - 2020.12</p>

              <button>
                <Link to="/shapsol">보러가기 → </Link>
              </button>
            </span>
          </div>
          <div className="projectbox flex justify-center items-center">
            <img src={pro02} alt="firstproject" style={{ width: '250px' }} />
            <span className="pro_caption flex flex-col justify-end items-end pr-6 pb-6">
              <p>2주 팀 프로젝트 </p>
              <p>
                ReactJS · Axios
                <br />
                AWS(S3), AWS-CLI
              </p>
              <p>2020.11 - 2020.11</p>
              <button>
                <Link to="/applix">보러가기 → </Link>
              </button>
            </span>
          </div>
        </div>
      </section>
      <section className="introblog h-full  flex flex-col items-center">
        <h3>Blog</h3>
        <p className="pb-2">개발 공부와 회고를 담고 있는 TIL 블로그입니다.</p>
        <button onClick={linkToBlog}> Velog에서 더 보기 </button>
        <PostSlider data={postData} />
      </section>
    </div>
  );
}

export default Home;
