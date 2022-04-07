import Head from 'next/head'
import React from 'react'
import axios from '../api/axios-strapi'
import News from '../components/News/News';
import styles from '../styles/Contact.module.css'

export default function NewsPage({card}) {
	return (
		<div className="news">
			<div className={styles.container}>
				<Head>
					<title>Новости</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div className="title__block">
					<h1 className="news__title">Список всех новостей</h1>
				</div>
				<News news={card}/>
			</div>
		</div>
	)
}

export async function getStaticProps() {
  const cards = await axios.get('/cards');
  const card = cards.data.data

  return {props: {card}}
}