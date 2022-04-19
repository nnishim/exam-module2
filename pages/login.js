import React from 'react'

export default function LoginPage() {
	return (
		<div className="login">
			<form>
				<div>
					<input type="email" placeholder='Введите электронную почту'/>
				</div>
				<div>
					<input type="password" placeholder='Введите пароль'/>
				</div>
			</form>
		</div>
	)
}
