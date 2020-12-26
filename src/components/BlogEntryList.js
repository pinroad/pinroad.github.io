import React from "react";
import { Link } from "react-router-dom";
import tilblog from "../img/tilblog.jpg";
import retroblog from "../img/blog_retro.jpg";

function BlogEntryList(props) {
  const { category, title, summary, postlink } = props.data;

  return (
    <>
      <Link
        to={{
          pathname: `${postlink}`,
        }}
        target="_blank"
      >
        <li>
          <img
            src={category === "TIL" ? tilblog : retroblog}
            alt="blogthumnail"
          />
          <div className="blog_summary">
            <h2>{title}</h2>
            <p>{summary}</p>
          </div>
        </li>
      </Link>
    </>
  );
}

export default BlogEntryList;
