import React from "react";
import { Navigation , Pagination, Mousewheel, Keyboard } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { SERVER_URL } from "../../api/urls";

function Slider({ slides }) {
  // SwiperCore.use([Autoplay])
  return (
    <Swiper
      loop={true}
      autoplay={{delay: 4000}}
      cssMode={true}
      navigation={true}
      pagination={{clickable: true }}
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
          {/* .swiper-button-next, .swiper-button-prev{
            color: #fff !important;
          } 
          .swiper-button-prev{
            left: 25px;
          }
          .swiper-button-next{
            right: 25px;
          } */}
          
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
