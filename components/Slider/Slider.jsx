import React from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { SERVER_URL } from "../../api/urls";

function Slider({ slides }) {
  console.log(slides);
  return (
    <Swiper
      autoplay={true}
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            <div className="slide-item">
							<img
								className="slide-img"
								src={SERVER_URL + slide.image?.formats?.large?.url}
								alt=""
							/>
						</div>
          </SwiperSlide>
        );
      })}
      <style jsx>
        {`
          .slide-item {
            width: 100%;
            height: 550px;
						overflow: hidden;
          }
          .slide-img {
						object-fit: cover;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </Swiper>
  );
}

export default Slider;
