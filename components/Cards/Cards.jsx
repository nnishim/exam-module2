import Link from "next/link";
import React from "react";
import { SERVER_URL } from "../../api/urls";
import { BiCalendar } from "react-icons/bi";

function Cards({ cards }) {
  return (
    <div className="container">
			<div className="cards">
				<div className="cards__content">
					{cards.map((card) => {
						return (
							<div key={card.id} className="card">
								<div className="card-image__block">
									<img
										className="card__img"
										src={SERVER_URL + card.cardImg?.formats?.large?.url}
										alt=""
									/>
								</div>
								<div className="card__info">
									<div>
										<h2 className="card__title">{card.title}</h2>
										<p className="card__desc">{card.description}</p>
									</div>
									<div className="card__bottom">
										<div className="card__date">
											<BiCalendar />
											<span>{card.date}</span>
										</div>
										<Link href={`/news/${card.id}`}>
											<a className="card__btn">Подробнее</a>
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className="cards__button">
					<Link href='/news'>
						<a className="cards__btn">Все новости</a>
					</Link>
				</div>
			</div>
			<style jsx>
				{`
					.container{
						max-width: 1200px;
						margin: 0 auto;
					}
					.cards{
						margin-bottom: 100px;
					}
					.cards__content {
						display: grid;
						grid-template-columns: repeat(3, 1fr);
						align-items: flex-start;
						margin-bottom: 50px;
					}
					.card{
						max-width: 350px;
						border: 1px solid #778ca3;
						border-radius: 5px;
						overflow: hidden;
						font-family: Calibri;
					}
					.card-image__block{
						width: 100%;
						height: 220px;
						overflow: hidden;
					}
					.card__img{
						object-fit: cover;
						width: 100%;
						height: 100%;
						transform: scale(1);
						transition: .3s ease-in-out;
					}
					.card__img:hover{
						transform: scale(1.2);
					}
					.card__info{
						padding: 15px;
					}
					.card__title{
						font-size: 24px;
						font-weight: normal;
						margin-bottom: 20px;
					}
					.card__desc{
						font-size: 18px;
						margin-bottom: 20px;
					}
					.card__bottom{
						display: flex;
						align-items: center;
						justify-content: space-between;
					}
					.card__btn{
						padding: 10px 35px;
						border: 1px solid #778ca3;
						cursor: pointer;
						border-radius: 5px;
						color: #778ca3;
						transition: .3s ease-in-out;
					}
					.card__btn:hover{
						background-color: #778ca3;
						color: #fff;
					}
					.card__date{
						display: flex;
						align-items: center;
						gap: 5px;
					}
					.cards__btn{
						display: inline-block;
						padding: 15px 0;
						width: 200px;
						display: flex;
						align-items: center;
						justify-content: center;
						background-color: #1abc9c;
						border-radius: 5px;
						color: #fff;
						margin: 0 auto;
						border: 1px solid #1abc9c;
						transition: .3s ease-in-out;
					}
					.cards__btn:hover{
						background-color: transparent;
						color: #1abc9c;
					}
				`}
			</style>
    </div>
  );
}

export default Cards;
