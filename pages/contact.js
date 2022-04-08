import React from 'react'
import styles from '../styles/Contact.module.css'
import {FiTwitter, FiFacebook, FiInstagram, FiLinkedin} from 'react-icons/fi'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'

export default function ContactPage() {
	return (
		<div className="contact">
			<Head>
        <title>Контакты</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<div className={styles.container}>
				<div className="title__block">
					<h1 className={styles.title}>Контакты</h1>
				</div>
				<div className={styles.contact__info}>
					<div className={styles.contact__info_item}>
						<div>
							<h2 className={styles.contact__title}>Электронная почта:</h2>
						</div>
						<div>
							<a href='#' className={styles.email__link}>news@news@gmail.com</a>
						</div>
					</div>
					<div className={styles.contact__info_item}>
						<div>
							<h2 className={styles.contact__title}>Телефон:</h2>
						</div>
						<div>
							<span className={styles.information}>+996 - 888 - 888 - 888</span>
						</div>
					</div>
					<div className={styles.contact__info_item}>
						<div>
							<h2 className={styles.contact__title}>Адрес:</h2>
						</div>
						<div>
							<span className={styles.information}>г. Бишкек, пр-т Чуй, 225</span>
						</div>
					</div>
					<div className={styles.contact__info_item}>
						<div>
							<h2 className={styles.contact__title}>Социальные сети:</h2>
						</div>
						<div className={styles.social__items}>
							<div className={styles.social__item}>
								<a href='#' className='social__info information'>
									<FiInstagram className={styles.social__icon}/>
								</a>
							</div>
							<div className={styles.social__item}>
								<a href='#' className='social__info information'>
									<FiTwitter className={styles.social__icon}/>
								</a>
							</div>
							<div className={styles.social__item}>
								<a href='#' className='social__info information'>
									<FiFacebook className={styles.social__icon}/>
								</a>
							</div>
							<div className={styles.social__item}>
								<a href='#' className='social__info information'>
									<FiLinkedin className={styles.social__icon}/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.80849678554!2d74.59139991501571!3d42.876886010299096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7df8c6064d9%3A0x5e0f4e166983dc74!2z0J_RgNC-0YTQtdGB0YHQuNC-0L3QsNC70YzQvdGL0Lkg0LvQuNGG0LXQuSDihJY5OA!5e0!3m2!1sru!2skg!4v1649235466296!5m2!1sru!2skg" width="100%" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			<Footer/>
		</div>
	)
}
