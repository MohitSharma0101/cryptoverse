import React from 'react'
import styles from '../styles/Components.module.scss'
import { Button, Menu, Typography, Avatar } from 'antd';
import Image from 'next/image';
import Link from 'next/link'

export default function NavBar() {
  return (
    <div 
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: "20px",
      position:'sticky',
      top: 0,
      zIndex: 1,
      backgroundColor:"#191B1F",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    }}
    >
        <Logo/>
    </div>
  )
}

function Logo(){
    return (
    <Link href="/">
        <div style={{
          display: 'flex', alignItems: 'center' ,
        }}>
          <Avatar src = {`./logo.svg`} size="large" />
          <Typography.Title level={3} style={{color:"white",marginLeft:"10px",textAlign:"center"}}>Cryptoverse</Typography.Title>
        </div>
    </Link>
    )
}
