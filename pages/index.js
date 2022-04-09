import axios from '../api/axios-strapi'
import Head from 'next/head'
import Slider from '../components/Slider/Slider'
import styles from '../styles/Home.module.css'
import Email from '../components/Email/Email'
import Footer from '../components/Footer/Footer'
import Cards from '../components/Cards/Cards'

export default function Home({slides, card}) {
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
      <Cards cards={card}/>
      <Email/>
      <Footer/>
    </div>
  )
}

export async function loadSlides() {
  const slidres = await axios.get('/sliders?populate=image');
  const slidesData = slidres.data.data
  
  return slidesData
}
export async function loadCards() {
  const cards = await axios.get('/cards?pagination[pageSize]=3&pagination[page]=1&populate=cardImg')
  const cardData = cards.data.data;
  
  return cardData
}

export async function getStaticProps() {
  const slides = await loadSlides()
  const card = await loadCards()
  return {props: {slides, card}}
}