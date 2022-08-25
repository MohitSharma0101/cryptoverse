import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import styles from '../styles/Components.module.scss'
import Link from 'next/link'

export default function SideBar() {
    const items = [
        { label: 'Home', key: 'item-1', icon: <HomeOutlined /> }, 
        { label: 'Crypto', key: 'item-2', icon: <FundOutlined /> },
        { label: 'Exchanges', key: 'item-3', icon: <FundOutlined /> }, 
        { label: 'News', key: 'item-3', icon: <FundOutlined /> }, 
      ];
  return (
    <div className={styles.sideBarContainer}>
        <Menu theme="dark" className={styles.sideBar} items = {items} />
    </div>
  )
}


