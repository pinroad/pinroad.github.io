import React from "react";
import { Link } from "react-router-dom";

import "./CSS/Project.css";
//imaages;
import thum01 from "../img/thum_01.png";
import thum02 from "../img/thum_02.png";
import thum03 from "../img/thum_03.png";

function Project(props) {
  return (
    <div className="projectinner">
      <section>
        <h1>프로젝트</h1>
        <p>관심있는 기술 혹은 문제 해결을 위한 토이프로젝트 공간입니다.</p>
        <p className="pb-8">
          간단한 서비스 제작부터 클론코딩 등 꾸준하게 공부해나가고 있습니다.
        </p>
        <hr />
      </section>
      <section className="projectEntry">
        <ul className="flex flex-wrap justify-center">
          <Link to={`/personal`}>
            <li>
              <img src={thum03} alt="projectthumnail" />
              <div className="pro_summary">
                <h2>포트폴리오 사이트</h2>
                <p>ReactJS, React Hooks, tailwind CSS</p>
                <p>개인 프로젝트</p>
              </div>
            </li>
          </Link>

          <Link to={`/shapsol`}>
            <li>
              <img src={thum01} alt="projectthumnail" />
              <div className="pro_summary">
                <h2>#SOL</h2>
                <p>ReactJS, React Hooks, tailwind CSS, Axios</p>
                <p>기업협업 팀 프로젝트 (코드스테이츠) </p>
              </div>
            </li>
          </Link>

          <Link to={`/applix`}>
            <li>
              <img src={thum02} alt="projectthumnail" />
              <div className="pro_summary">
                <h2>Applix</h2>
                <p>ReactJS, Axios, AWS</p>
                <p>팀 프로젝트 (코드스테이츠) </p>
              </div>
            </li>
          </Link>
        </ul>
      </section>
    </div>
  );
}

export default Project;
