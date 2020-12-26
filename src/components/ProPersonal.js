import React from "react";
import "./CSS/ProCommon.css";
import { BiCodeBlock, BiCog, BiTask } from "react-icons/bi";
import thum03 from "../img/thum_03.png";

function P_personal({ handlePrev }) {
  return (
    <div className="cmpprowrap">
      <h1 className="">포트폴리오 사이트</h1>
      <span className="badge solo">SOLO</span>
      <span className="badge toy">TOY</span>
      <p className="date">2020.12 - 2일 프로젝트</p>
      <hr />
      <img src={thum03} alt="thumnail" />

      <section>
        <h2 className="inline-flex items-center">
          <BiTask size={24} />
          <span className="ml-1"> 프로젝트 </span>
        </h2>
        <p>· 개요 : 개인 포트폴리오 사이트</p>
        <p>· 인원 : 1인</p>
        <h2 className="inline-flex items-center">
          <BiCog size={24} />
          <span className="ml-1"> 기술스택</span>
        </h2>
        <p>· Common : Javascript </p>
        <p>· Client : React, React-Hooks, tailwind CSS</p>
        <p>· Etc : Miro(UI design) </p>
        <h2 className="inline-flex items-center">
          <BiCodeBlock size={24} />
          <span className="ml-1"> 작업내용</span>
        </h2>
        <p>· UI 디자인 설계 </p>
        <p>· 반응형 웹 구현 진행 중</p>
        <hr />
        <button onClick={handlePrev}>목록으로</button>
      </section>
    </div>
  );
}

export default P_personal;
