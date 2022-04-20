import Head from "next/head";
import React from "react";
import axios from "../../api/axios-strapi";
import Footer from "../../components/Footer/Footer";
import News from "../../components/News/News";
import styles from "../../styles/Contact.module.css";

export default function NewsPage({ news, page, pagination }) {
  
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
        <News news={news} page={page} pagination={pagination}/>
      </div>
      <Footer />
    </div>
  );
}
NewsPage.getInitialProps = async ({ query: { page = 1 } }) => {
	const res = await axios.get(
		`/cards?pagination[pageSize]=3&pagination[page]=${page}&populate=cardImg`
	);
	const {data: news, meta: {pagination}} = res.data;
	return {
    news,
    pagination,
    page: parseInt(page, 10)
	};
}