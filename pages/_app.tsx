import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css';
import { store } from '../app/store'
import { Provider } from 'react-redux'
import {NavBar} from '../components/'
import { useState } from 'react';
import {  Layout, Menu, Typography,Grid } from 'antd';
import styles from '../styles/Components.module.scss'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { useBreakpoint } = Grid;
  const {md} = useBreakpoint();

  const items = [
    { label: 'Home', key: 'item-1', icon: <HomeOutlined /> }, 
    { label: 'Crypto', key: 'item-2', icon: <FundOutlined /> },
    { label: 'Exchanges', key: 'item-3', icon: <MoneyCollectOutlined /> }, 
    { label: 'News', key: 'item-4', icon: <BulbOutlined/> }, 
  ];

  return( 
  <div style={{backgroundColor: '#191B1F'}}>
    <NavBar/>
      <Layout className={styles.appContainer} style={{ minHeight: '100vh', backgroundColor: 'black'}}>
      {
        (md)
        ?
        <Sider className={styles.sideBar}  collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        <Menu className={styles.sideBar} defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      :<></>
      }
      <Layout  className={styles.content}>
        <Content>
        <Provider store={store}>
          
          <Component {...pageProps} />
        </Provider>
        </Content>
        <Footer style={{ backgroundColor: 'transparent' ,color: 'white', textAlign: 'center' }}>Cryptoverse ©2022 Created by Mohit Sharma</Footer>
      </Layout>
        
      </Layout>
    
  </div>
  )

}

export default MyApp
