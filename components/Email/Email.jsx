import React from 'react'

function Email() {
	return (
		<div className="email-subscribe">
			<div className="email-subscribe__field">
				<input className='email-subscribe__input' type="email" placeholder='Введите свой email' />
			</div>
			<div className="email-subscribe__button">
				<button className='email-subscribe__btn'>Подписаться на новости</button>
			</div>
		</div>
	)
}

export default Email