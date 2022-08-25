import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import styles from '../styles/Components.module.scss'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

export default function Base() {

  const items = [
    { label: 'Home', key: 'item-1', icon: <HomeOutlined /> }, 
    { label: 'Crypto', key: 'item-2', icon: <FundOutlined /> },
    { label: 'Exchanges', key: 'item-3', icon: <FundOutlined /> }, 
    { label: 'News', key: 'item-4', icon: <FundOutlined /> }, 
  ];
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout  style={{ minHeight: '100vh', backgroundColor: 'white'}}>
      
      <Sider className={styles.sideBar} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        <Menu className={styles.sideBar} defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout  className="site-layout">
        <Content className = {styles.content}style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Cryptoverse ©2022 Created by Mohit Sharma</Footer>
      </Layout>
    </Layout>
  )
}
