import Head from 'next/head'
import { Footer } from '../components/footer';
import { MobileCard } from '../components/mobile-pages';
import { ConnectCard } from '../components/mvp/connect-card';
import { PlayCard } from '../components/mvp/play-card';
import { SelectCard } from '../components/mvp/select-card';

export default function Mvp() {
    return (
        <div className="text-white">
            <Head>
                <title>Tiny Colony MVP</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="hidden lg:block">
                <main>
                    <ConnectCard />
                    <SelectCard />
                    <PlayCard />
                </main>
                <Footer />
            </div>
            <div className="block lg:hidden">
                <MobileCard />
            </div>

        </div>
    )
}