import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Nav.css";

function Nav(props) {
  return (
    <div className="menu w-full">
      <ul className="inline-flex">
        <NavLink exact to="/" className="0" activeClassName="active">
          <li>프최(F-Choi)</li>
          <span className="spanActive"></span>
        </NavLink>
        <NavLink to="/resume" className="1" activeClassName="active">
          <li>소개</li>
          <span className="spanActive"></span>
        </NavLink>
        <NavLink to="/project" className="2" activeClassName="active">
          <li>프로젝트</li>
          <span className="spanActive"></span>
        </NavLink>
        <NavLink to="/blog" className="3" activeClassName="active">
          <li>블로그</li>
          <span className="spanActive"></span>
        </NavLink>
      </ul>
    </div>
  );
}

export default Nav;
