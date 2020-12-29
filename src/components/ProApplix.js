import React from 'react';
import './CSS/ProCommon.css';
import { BiBookmark, BiCodeBlock, BiCog, BiTask } from 'react-icons/bi';
import thum02 from '../img/thum_02.png';

function P_applix({ handlePrev }) {
  const linkToGithub = () => {
    window.open('https://github.com/codestates/16-applix-client', '_blank');
  };

  const linkToBlog = () => {
    window.open(
      'https://velog.io/@leobit/%EB%82%B4-%EC%83%9D%EC%95%A0-%EC%B2%AB-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0',
      '_blank'
    );
  };

  return (
    <div className="cmpprowrap">
      <h1 className="">Applix</h1>
      <span className="badge team">TEAM</span>
      <span className="badge code">CODESTATES</span>
      <p className="date">2020.11 - 2주 프로젝트</p>
      <hr />
      <img src={thum02} alt="thumnail" />
      <button className="mb-4" onClick={linkToGithub}>
        깃허브
      </button>
      <section>
        <h2 className="inline-flex items-center">
          <BiTask size={24} />
          <span className="ml-1"> 프로젝트</span>
        </h2>
        <p>· 개요 : 취미공유서비스</p>
        <p>· 역할 : 팀장</p>
        <p>· 인원 : 4인</p>

        <h2 className="inline-flex items-center">
          <BiCog size={24} />
          <span className="ml-1"> 기술스택</span>
        </h2>
        <p>· Common : Javascript </p>
        <p>· Client : React, Axios, NAVER open API, AWS(S3), AWS-CLI</p>
        <p>· Server : NodeJS, Express, MySQL, Sequelize, JWT, AWS(EC2 & RDS)</p>
        <p>· Etc : Slack, Git, Git-hub, Postman</p>

        <h2 className="inline-flex items-center">
          <BiCodeBlock size={24} />
          <span className="ml-1"> 작업내용</span>
        </h2>
        <p>· 프로젝트 기획 및 개발 상황 정리와 일정 관리</p>
        <p>· JWT 토큰 인증 로그인 구현</p>
        <p>· Naver API를 활용한 영화 장르별 검색/일반 검색 구축</p>
        <p>· 영화 찜하기 기능</p>
        <p>· 글로벌 공유를 위한 모달창 제작</p>
        <p>· 반응형 웹 디자인</p>
        <p>· AWS CLI 를 사용한 S3 버킷 파일 동기화</p>

        <h2 className="inline-flex items-center">
          <BiBookmark size={22} />
          <span className="ml-1"> 회고</span>
        </h2>

        <p onClick={linkToBlog} className="cursor-pointer hover:text-blue-500 ">
          · 내 생애 첫 프로젝트 후기
        </p>
        <hr />
        <button onClick={handlePrev}>목록으로</button>
      </section>
    </div>
  );
}

export default P_applix;
