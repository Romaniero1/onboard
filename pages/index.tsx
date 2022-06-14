import Head from 'next/head'
import { Footer } from '../components/footer/footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="text-white">
      <Head>
        <title>Tiny Colony MVP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Quantico:ital,wght@0,400;0,700;1,700&display=swap"
          }
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
      </main>

      <Footer/>
    </div>
  )
}
