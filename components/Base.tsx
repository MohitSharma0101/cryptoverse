
import {  Layout, Menu, Typography,Grid } from 'antd';
import React, { useState } from 'react';
import styles from '../styles/Components.module.scss'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import {GlobalStats , Top10Crypto , News} from './';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;


export default function Base() {
  const {md} = useBreakpoint();
  const items = [
    { label: 'Home', key: 'item-1', icon: <HomeOutlined /> }, 
    { label: 'Crypto', key: 'item-2', icon: <FundOutlined /> },
    { label: 'Exchanges', key: 'item-3', icon: <MoneyCollectOutlined /> }, 
    { label: 'News', key: 'item-4', icon: <BulbOutlined/> }, 
  ];
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className={styles.appContainer} style={{ minHeight: '100vh', backgroundColor: 'black'}}>
      {
        (md)
        ?
        <Sider 
  
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex:1,
        }}
        
        collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
            <Menu className={styles.sideBar} defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
      :<></>
      }
 
      <Layout  className={styles.content}>
        <Content>
          <div  style={{ padding: 24, minHeight: 360 }}>
            <GlobalStats />
            <Top10Crypto count={10}/>
            <News />
          </div>
        </Content>
        <Footer style={{ backgroundColor: 'transparent' ,color: 'white', textAlign: 'center' }}>Cryptoverse ©2022 Created by Mohit Sharma</Footer>
      </Layout>
    </Layout>
  )
}



