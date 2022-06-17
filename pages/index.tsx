import Head from 'next/head'
import { Footer } from '../components/footer/footer'
import { Header } from '../components/header/header'
import { EnterCard } from '../components/main/EnterCard/EnterCard'
import { GoCard } from '../components/main/GoCard/goCard'
import { HandbookCard } from '../components/main/handbookCard/handbookCard'
import { HelpCard } from '../components/main/HelpCard/HelpCard'
import { HistoryCard } from '../components/main/HistoryCard/historyCard'
import { VideoCard } from '../components/main/VideoCard/videoCard'

export default function Home() {
  return (
    <div className="text-white">
      <Head>
        <title>Tiny Colony MVP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden lg:block"> 
        <Header />
        <main>
          <HistoryCard />
          <VideoCard />
          <HandbookCard />
          <EnterCard />
          <HelpCard/>
          <GoCard/>
        </main>
      </div>
      <div className="block lg:hidden"> 

      </div>
      <Footer />
    </div>
  )
}
