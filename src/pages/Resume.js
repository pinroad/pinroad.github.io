import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Resume.css";
//images;
import front from "../img/browser_icon-icons.com_66536.png";
import back from "../img/database_icon-icons.com_66531.png";
import common from "../img/desktop_icon-icons.com_66537.png";
//icons;
import {
  SiNotion,
  SiCss3,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiRedux,
  SiPostman,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { GrMysql, GrDocumentPdf } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io";
import { FaGitSquare, FaUbuntu, FaAws } from "react-icons/fa";

function Resume(props) {
  return (
    <div className="introinner">
      <div className="resumeArea flex flex-col justify-end">
        <div className="inline-flex items-center w-full">
          {/* <Link
            to={{
              pathname:
                "https://www.notion.so/376bda7ac4cd4f4781cf5cc72100ec7a",
            }}
            target="_blank"
            style={{
              width: "100%",
            }}
          >
            <div className="notionresume  w-full inline-flex items-center cursor-pointer">
              <SiNotion size={20} style={{ marginRight: "10px" }} />
              노션 이력서
            </div>
          </Link> */}
        </div>
        <Link
          to={{
            pathname:
              " https://drive.google.com/file/d/1rAMj_XrZBHH0VNay9yIwgSfbZ3bhNiOz/view?usp=sharing",
          }}
          target="_blank"
          style={{
            width: "100%",
          }}
        >
          <div className="notionresume  w-full inline-flex items-center cursor-pointer pt-2">
            <GrDocumentPdf
              size={20}
              style={{ marginRight: "10px", color: "var(--main-color)" }}
            />
            이력서 다운
          </div>
        </Link>
      </div>
      <section className="introheader">
        <h1>프론트엔드 개발자 최희정입니다!</h1>
        <h2>개발자 소개</h2>
        <p>
          평소 자바스크립트를 이용한 UI 개발에 관심이 많아 개발 공부를
          시작했습니다. <br />
          <br />
          국비 지원 웹 개발 단과 과정과 공부 방법을 찾아가며 나 홀로 스터디를
          진행하다 20주 웹 개발 부트캠프인 코드스테이츠를 수료했습니다. 수료
          이후 부트캠프에서 다뤘던 프로젝트 리팩토링 및 사이드 프로젝트를
          진행하기 위해 Redux 와 다양한 CSS 라이브러리를 공부하고 있습니다.
          <br />
          <br /> 항상 배운 것을 블로깅을 통해 되새기고 개선해나갈 수 있는 방향을
          스스로 찾아가며, 끊임없이 발전해나가는 개발자가 되기 위해 노력합니다.
        </p>
      </section>
      <hr />
      <section className="introstack">
        <h2>기술 스택 소개</h2>
        <p>
          프로젝트를 진행하거나 학습해본 경험이 있는 기술 스택입니다.
          <br />
          기초 단계는 관심있게 학습 중이며 추후 토이 프로젝트를 진행할 계획이
          있습니다.
        </p>
        <div className="stackArea">
          <div className="stack w-full">
            <div>
              <img src={front} alt="frontend" />
              <span className="caption">
                HTML·CSS
                <br />
                React SPA 개발
              </span>
            </div>
            <ul className="w-full inline-flex flex-wrap justify-center">
              <li>
                <div>
                  <AiFillHtml5 size={40} />
                </div>
                <div className="flex flex-col w-full">
                  <p>HTML</p>
                  <span className="w-full">
                    시맨틱 태그 이해 · 태그를 이용한 마크업
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <SiCss3 size={32} />
                </div>
                <div className="flex flex-col w-full">
                  <p>CSS</p>
                  <span className="w-full">PSD, XD 화면 퍼블리싱</span>
                </div>
              </li>
              <li>
                <div>
                  <SiJavascript size={30} />
                </div>
                <div className="flex flex-col w-full">
                  <p>Javascript</p>
                  <span className="w-full">ES6 기본 문법 활용</span>
                </div>
              </li>
              <li>
                <div>
                  <SiReact size={30} />
                </div>
                <div className="flex flex-col w-full">
                  <p>ReactJS</p>
                  <span className="w-full">JSX · Hook ·Router 이해</span>
                </div>
              </li>
              <li>
                <div>
                  <SiTypescript size={30} />
                </div>
                <div className="flex flex-col w-full">
                  <p>
                    TypeScript
                    <span
                      style={{
                        color: "tomato",
                        paddingLeft: "5px",
                      }}
                    >
                      기초
                    </span>
                  </p>
                  <span className="w-full">기본 이해</span>
                </div>
              </li>
              <li>
                <div>
                  <SiRedux size={30} />
                </div>
                <div className="flex flex-col w-full">
                  <p>
                    Redux{" "}
                    <span
                      style={{
                        color: "tomato",
                        paddingLeft: "5px",
                      }}
                    >
                      기초
                    </span>
                  </p>
                  <span className="w-full">Flux 이해</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="stack w-full inline-flex mt-8">
            <div>
              <img src={back} alt="backend" />
              <span className="caption">
                MVC 패턴 웹 개발
                <br />
                REST API 구축
              </span>
            </div>
            <ul className="w-full inline-flex flex-wrap justify-center">
              <li>
                <div>
                  <IoLogoNodejs size={40} />
                </div>
                <div className="flex flex-col w-full">
                  <p>NodeJS</p>
                  <span className="w-full">Express 기반의 REST API 구축</span>
                </div>
              </li>
              <li>
                <div>
                  <GrMysql size={32} />
                </div>
                <div className="flex flex-col w-full">
                  <p>MySQL</p>
                  <span className="w-full">SQL 이해</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="stack w-full inline-flex mt-8">
            <div>
              <img src={common} alt="depopt" />
              <span className="caption">DEV TOOLS</span>
            </div>
            <ul className="w-full inline-flex flex-wrap justify-center">
              <li>
                <div>
                  <FaAws size={35} />
                </div>
                <div className="flex flex-col w-full">
                  <p>AWS</p>
                  <span className="w-full">
                    AWS-CLI를 이용한 S3 배포 · EC2 & RDMS 이해
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <FaUbuntu size={32} />
                </div>
                <div className="flex flex-col w-full">
                  <p>Ubuntu</p>
                  <span className="w-full">Linux 기본 명령어 숙지</span>
                </div>
              </li>
              <li>
                <div>
                  <FaGitSquare size={32} />
                </div>
                <div className="flex flex-col w-full">
                  <p>Git</p>
                  <span className="w-full">
                    기본 사용법 숙지 및 git workflow 이해
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <SiPostman size={32} />
                </div>
                <div className="flex flex-col w-full">
                  <p>Postman</p>
                  <span className="w-full">서버 연동 · API 테스트</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr />
      <section className="introsubmenu ">
        <ul className="inline-flex items-center w-full">
          <Link to="/project">
            <li>프로젝트 보러가기</li>
          </Link>
          <Link to="/blog">
            <li>블로그 보러가기</li>
          </Link>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
