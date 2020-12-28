import React from 'react';
import { NavLink } from 'react-router-dom';
import './CSS/Nav.css';
//icons
//icons;
import { SiGithub } from 'react-icons/si';

function Nav(props) {
  const linkToGithub = () => {
    window.open('https://github.com/pinroad', '_blank');
  };

  return (
    <div className="menu w-full inline-flex items-center justify-center">
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
      <button
        className="githubbox ml-auto mb-2 inline-flex items-center justify-center"
        onClick={linkToGithub}
      >
        <div className="ml-2 pr-2 border-r">
          <SiGithub size={20} />
        </div>
        <p className="githubPtag">GitHub</p>
      </button>
    </div>
  );
}

export default Nav;
