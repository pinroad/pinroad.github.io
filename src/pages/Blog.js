import React, { useState } from "react";
import "./CSS/Blog.css";
import BlogEntryList from "../components/BlogEntryList";
import postdata from "../data/blogpost.json";

function Blog(props) {
  let postArr = postdata.data;

  //? 날짜순 정렬(최신순)
  let sortArr = postArr.sort((a, b) => {
    var dateA = new Date(a.createdAt).getTime();
    var dateB = new Date(b.createdAt).getTime();
    return dateA < dateB ? 1 : -1;
  });

  const [postData, setPostData] = useState(sortArr);

  const linkToBlog = () => {
    window.open("https://velog.io/@leobit", "_blank");
  };

  return (
    <div className="bloginner">
      <section>
        <h1>블로그</h1>
        <p>
          개발 공부와 프로젝트를 진행하면서 있었던 일들을 중심으로 기록하고
          있습니다.
        </p>
        <p>Velog 에서 기록한 포스팅 중 일부만 연결하였습니다.</p>{" "}
        <button onClick={linkToBlog}> Velog에서 더 보기 </button>
        <hr />
      </section>
      <section className="blogEntry">
        <ul className="flex flex-wrap justify-center">
          {postData.map((ele) => (
            <BlogEntryList key={ele.id} data={ele} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Blog;
