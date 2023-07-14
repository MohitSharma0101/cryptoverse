import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { GlobalStats, Top10Crypto, News } from '../components';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cryptoverse</title>
        <meta name="description" content="Get Top Crypto Currencies Price and News." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ padding: 24, minHeight: 360 }}>
        <GlobalStats />
        <Top10Crypto count={10} />
        <News />
      </div>
    </div>
  )
}

export default Home
