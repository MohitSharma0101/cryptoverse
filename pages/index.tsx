import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import 'antd/dist/antd.css';
import {NavBar, SideBar,Main, Base} from '../components/'



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cryptoverse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar/>
      <Base />
    </div>
  )
}

export default Home
