import Head from 'next/head'
import React from 'react'
import axios from '../../api/axios-strapi'
import Footer from '../../components/Footer/Footer';
import News from '../../components/News/News';
import styles from '../../styles/Contact.module.css'

export default function NewsPage({newsItem}) {
	return (
		<div className="news">
			<div className={styles.container}>
				<Head>
					<title>Новости</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div className="title__block">
					<h1 className={styles.title}>Список всех новостей</h1>
				</div>
				<News news={newsItem}/>
			</div>
			<Footer/>
		</div>
	)
}

export async function getStaticProps() {
  const news = await axios.get('/cards?pagination[pageSize]=3&pagination[page]=1&populate=cardImg');
  const newsItem = news.data.data

  return {props: {newsItem}}
}