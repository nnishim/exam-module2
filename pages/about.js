import React from 'react'
import Footer from '../components/Footer/Footer'
import styles from '../styles/Contact.module.css'

export default function AboutPage() {
	return (
		<div className="about">
			<div className={styles.container}>
				<div className="title-block">
					<h1 className={styles.title}>О нас</h1>
				</div>
			</div>
			<Footer/>
		</div>
	)
}
