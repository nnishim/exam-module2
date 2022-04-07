import axios from '../api/axios-strapi'
import Head from 'next/head'
import Slider from '../components/Slider/Slider'
import styles from '../styles/Home.module.css'
import Email from '../components/Email/Email'
import Footer from '../components/Footer/Footer'

export default function Home({slides}) {
  return (
    <div>
      <Head>
        <title>Главная</title>
        <meta name="description" content="news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.slider}>
        <Slider slides={slides}/>
      </main>
      <Email/>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const slidres = await axios.get('/sliders?populate=image');
  const slides = slidres.data.data

  return {props: {slides}}
}