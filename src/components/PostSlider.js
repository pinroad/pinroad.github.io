import React from "react";
import { Link } from "react-router-dom";
import "./CSS/PostSlider.css";
import tilblog from "../img/tilblog.jpg";
import retroblog from "../img/blog_retro.jpg";
// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function PostSlider(props) {
  const postData = props.data;

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      autoplay={true}
    >
      {postData.map((ele) => (
        <SwiperSlide key={ele.id}>
          <Link
            to={{
              pathname: `${ele.postlink}`,
            }}
            target="_blank"
          >
            <div className="blogbox p-4 flex mt-8 ">
              <div className="blogentry">
                <img
                  className="sum_img"
                  src={ele.category === "TIL" ? tilblog : retroblog}
                  alt="tilblog"
                />
                <div className="blog_caption w-full pl-4 pt-4">
                  <h3>{ele.title}</h3>
                  <p>{ele.summary}</p>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PostSlider;
