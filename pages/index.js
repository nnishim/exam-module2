import Head from 'next/head'
import Slider from '../components/Slider/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News Blog</title>
        <meta name="description" content="news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.slider}>
        <Slider/>
      </main>
    </div>
  )
}
