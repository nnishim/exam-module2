import React, { useRef, useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from '..//..//api/axios-strapi'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';


function Slider() {
	async () => {
		const res = await axios.get('/sliders');
		const sliders = res.data.data;
	}
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
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
	)
}

export default Slider