import React from "react";
import "./CSS/ProCommon.css";
import { BiBookmark, BiCodeBlock, BiCog, BiTask } from "react-icons/bi";
import thum01 from "../img/thum_01.png";

function P_shapsol({ handlePrev }) {
  const linkToNotion = () => {
    window.open(
      "https://www.notion.so/1-45325530348544029e91ba4c9a53a474",
      "_blank"
    );
  };

  const linkToSite = () => {
    window.open("https://www.shop-sol.com/", "_blank");
  };

  const linkToBlog = () => {
    window.open(
      "https://velog.io/@leobit/%EC%BD%94%EB%93%9C%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%B8%A0-%EA%B8%B0%EC%97%85-%ED%98%91%EC%97%85-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0",
      "_blank"
    );
  };

  return (
    <div className="cmpprowrap">
      <h1 className="">#SOL</h1>
      <span className="badge team">TEAM</span>
      <span className="badge code">CODESTATES</span>
      <p className="date">2020.11 - 2020.12- 4주 프로젝트</p>
      <hr />
      <img src={thum01} alt="thumnail" />
      <button className="mr-8" onClick={linkToNotion}>
        프로젝트 노션
      </button>
      <button className="mb-4" onClick={linkToSite}>
        서비스 소개
      </button>
      <section>
        <h2 className="inline-flex items-center">
          <BiTask size={24} />
          <span className="ml-1"> 프로젝트 ( 기업협업 )</span>
        </h2>
        <p>
          · 개요 : 자영업자을 위한 종합 솔루션 샵솔 서비스 React 컨버전 작업
        </p>
        <p>· 역할 : 팀원</p>
        <p>· 인원 : 4인</p>
        <h2 className="inline-flex items-center">
          <BiCog size={24} />
          <span className="ml-1"> 기술스택</span>
        </h2>
        <p>· Common : Javascript </p>
        <p>· Client : React, React-Hooks, Axios</p>
        <p>· Server : NodeJS, Express, MySQL, JWT, AWS(EC2 & RDS)</p>
        <p>· Etc : Slack, Notion, Git, Git-hub, Postman, Adobe XD</p>
        <h2 className="inline-flex items-center">
          <BiCodeBlock size={24} />
          <span className="ml-1"> 작업내용</span>
        </h2>
        <p>· JWT 토큰 인증 로그인 구현</p>
        <p>· 상단 헤더 메뉴 및 관리사업장 사이드바 서브메뉴 폴딩 제작</p>
        <p>· 단일 페이지 상태관리 ( useReducer )</p>
        <p>
          · 사업장페이지 - 신규 사업장 추가 등록 및 리스트 출력 (Daum Postcode
          주소찾기 활용)
        </p>
        <p>
          · 초대페이지
          <br />
          <span className="subwork">
            - 개별/단체 초대 팝업창 및 초대발송 직원 개별 검색
            <br />
          </span>
          <span className="subwork">
            - 직원 상세 정보 입력과 추가 조건에 따른 별도 옵션 구현
            (React-Hook-Form)
          </span>
        </p>
        <p>
          · 업무일지페이지 <br />
          <span className="subwork">
            - 지시사항 등록/수정 및 Dropzone을 이용한 사진 기능 첨부
            <br />
          </span>{" "}
          <span className="subwork">
            - 지시/특이사항 내 댓글 등록과 핀 버튼을 이용한 공지사항 상단 고정
            구현
            <br />
          </span>
        </p>{" "}
        <p>· 근무현황페이지 - UI 및 세부 모달창과 현재상황 그래프 적용</p>
        <p>· 요금안내페이지</p>
        <h2 className="inline-flex items-center">
          <BiBookmark size={22} />
          <span className="ml-1"> 회고</span>
        </h2>
        <p onClick={linkToBlog} className="cursor-pointer hover:text-blue-500 ">
          · 기업협업 프로젝트 후기
        </p>
        <hr />
        <button onClick={handlePrev}>목록으로</button>
      </section>
    </div>
  );
}

export default P_shapsol;
