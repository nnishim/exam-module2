import React from 'react'
import styles from '../styles/Login.module.css'

export default function LoginPage() {
	return (
	<div className={styles.login}>
			<form>
				<div className={styles.input_block}>
					<input className={styles.input_item} type="email" placeholder='Введите электронную почту'/>
				</div>
				<div className={styles.input_block}>
					<input className={styles.input_item} type="password" placeholder='Введите пароль'/>
				</div>
				<div>
					<button>Войти</button>
				</div>
			</form>
		</div>
	)
}
