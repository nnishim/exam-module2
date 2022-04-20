import React from "react";
import { Navigation , Pagination, Keyboard, EffectFade } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { SERVER_URL } from "../../api/urls";

function Slider({ slides }) {
  SwiperCore.use([Autoplay])
  return (
    <Swiper
      loop={true}
      autoplay={true}
      navigation={true}
      effect={"fade"}
      pagination={{clickable: true }}
      keyboard={true}
      modules={[Navigation, Pagination, Keyboard, Autoplay, EffectFade]}
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
