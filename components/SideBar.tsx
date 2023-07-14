import React from 'react'
import { Menu } from 'antd';
import styles from '../styles/Components.module.scss'


export default function SideBar() {

  const items = [
    { label: 'Home', key: 'item-1', icon: './ic_news.svg' },
    { label: 'Crypto', key: 'item-2', icon: './ic_news.svg' },
    { label: 'Exchanges', key: 'item-3', icon: './ic_news.svg' },
    { label: 'News', key: 'item-3', icon: './ic_news.svg' },
  ];
  return (
    <div className={styles.sideBarContainer}>
      <Menu theme="dark" className={styles.sideBar} items={items} />
    </div>
  )
}