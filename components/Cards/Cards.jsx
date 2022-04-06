import Link from 'next/link'
import React from 'react'

function Cards() {
	return (
		<div className="cards">
			<div className="card">
				<div className="card__top">
					<img src="" alt="" />
				</div>
				<div className="card__text">
					<h1 className="card__title">Новость №1</h1>
					<p className="card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at laboriosam blanditiis cum magnam ipsum, praesentium atque commodi repudiandae facere!</p>
				</div>
				<div className="card__bottom">
					<div className="card__data">02.02.2022</div>
					<Link href=''>
						<a>Подробнее</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Cards