import React from "react";
import { SERVER_URL } from "../../api/urls";
import {BiCalendar} from 'react-icons/bi'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function News({news}) {
	const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
		<>
			<Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
					<ul className="news-list">
						{news.map((newsItem) => {
							return (
								<li key={newsItem.id} className='news-list__item'>
									<div className="card__image-item">
										<img
											src={SERVER_URL + newsItem.cardImg}
											alt=""
										/>
									</div>
									<div className="news-list__info">
										<div>
											<h2 className="news-item__title">{newsItem.title}</h2>
											<p className="news-item__desc">{newsItem.description}</p>
										</div>
										<div className="news-list__item-bottom">
											<div className="news-item__date">
												<BiCalendar/>
												<span>{newsItem.date}</span>
											</div>
											<Link href='#'>
												<a>Подробнее</a>
											</Link>
										</div>
									</div>
								</li>
							);
						})}
						<style jsx>
							{`
								*{
									margin: 0;
									padding: 0;
								}
								
								.news-list{
									list-style: none;
									display: flex;
									align-items: flex-start;
									justify-content: center;
									flex-direction: column;
								}
								.news-list__item{
									display: flex;
									align-items: center;
									margin-bottom: 15px;
									border: 1px solid #778ca3;
									width: 100%;
								}
								.news-item__title{
									margin-bottom: 25px;
									font-size: 24px;
									font-weight: 300;
								}
								.news-item__desc{
									margin-bottom: 20px;
									font-size: 18px;
								}
								.news-item__date{
									display: flex;
									gap: 5px;
								}
								.news-list__info{
									padding: 20px;
									width: 100%;
								}
								.news-list__item-bottom{
									display: flex;
									align-items: center;
									justify-content: space-between;
								}
							`}
						</style>
					</ul>
				</SwiperSlide>
      </Swiper>
		</>
  );
}

export default News;
