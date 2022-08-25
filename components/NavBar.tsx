import React from 'react'
import styles from '../styles/Components.module.scss'
import { Button, Menu, Typography, Avatar } from 'antd';
import Image from 'next/image';
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className={styles.navBar}>
        <Logo/>
    </div>
  )
}

function Logo(){
    return (
    <Link href="/">
        <div className={styles.logoContainer}>
        <Avatar src = {`./logo.svg`} size="large" />
            <h1>Cryptoverse</h1>
        </div>
    </Link>
    )
}
