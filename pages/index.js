import axios from '../api/axios-strapi'
import Head from 'next/head'
import Slider from '../components/Slider/Slider'
import styles from '../styles/Home.module.css'

export default function Home({slides}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>News Blog</title>
        <meta name="description" content="news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.slider}>
        <Slider slides={slides}/>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const slidres = await axios.get('/sliders?populate=image');
  const slides = slidres.data.data

  return {props: {slides}}
}
