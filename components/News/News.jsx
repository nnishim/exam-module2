import React from "react";
import { SERVER_URL } from "../../api/urls";
import { BiCalendar } from "react-icons/bi";
import Link from "next/link";

function News({ news }) {
  const removeItem = (id) => {
    news.filter((news) => news.id !== id);
    axios.delete(`/cards/${id}?populate=cardImg`);
  };
	const changePost = () => {
		
	}
  return (
    <>
      <div className="news">
        <ul className="news-list">
          {news.map((newsItem) => {
            return (
              <li key={newsItem.id} className="news-list__item">
                <div className="card__image-item">
                  <img
                    className="card_img"
                    src={SERVER_URL + newsItem.cardImg?.formats?.large?.url}
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
                      <BiCalendar />
                      <span>{newsItem.date}</span>
                    </div>
                    <Link href={`/news/${newsItem.id}`}>
                      <a className="news-list__btn">Подробнее</a>
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
				<div className="paginations">
					<button className="pagination__btn">1</button>
					<button className="pagination__btn">2</button>
					<button className="pagination__btn">3</button>
					<button className="pagination__btn">4</button>
				</div>
      </div>

      <style jsx>
        {`
          .news-list {
            font-family: Calibri;
            list-style: none;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
          }
          .news-list__item {
            display: flex;
            margin-bottom: 25px;
            border: 1px solid #778ca3;
            border-radius: 5px;
            overflow: hidden;
            width: 100%;
          }
          .news-item__title {
            margin-bottom: 15px;
            font-size: 24px;
            font-weight: normal;
          }
          .author {
            font-size: 18px;
            margin-bottom: 25px;
            font-family: Calibri;
          }
          .news-item__desc {
            margin-bottom: 20px;
            font-size: 18px;
          }
          .news-item__date {
            display: flex;
            align-items: center;
            gap: 5px;
          }
          .news-list__info {
            padding: 20px;
            width: 100%;
          }
          .news-list__item-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .news-list__btn {
            padding: 10px 35px;
            border: 1px solid #778ca3;
            cursor: pointer;
            border-radius: 5px;
            color: #778ca3;
            transition: 0.3s ease-in-out;
          }
          .news-list__btn:hover {
            background-color: #778ca3;
            color: #fff;
          }
          .card__image-item {
            max-width: 400px;
          }
          .card_img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>
    </>
  );
}

export default News;
