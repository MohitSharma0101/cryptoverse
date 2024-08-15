import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { MenuProps } from 'antd';
import 'antd/dist/antd.css';
import { store } from '../app/store'
import { Provider } from 'react-redux'
import { useState } from 'react';
import { Layout, Menu, Typography, Avatar, Button, Grid, Popover } from 'antd';
import { HomeOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link'
import Image from 'next/image';

const { Header, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

type Label = {
  name: string, link: string
}

function GetLabel({ name, link }: Label) {
  return (
    <Link href={link} >
      <a>{name}</a>
    </Link>
  )
}

const items = [
  { label: (<GetLabel name={"Home"} link={"/"} />), key: 'item-1', icon: <HomeOutlined /> },
  { label: (<GetLabel name={"Crypto"} link={"/crypto"} />), key: 'item-2', icon: <FundOutlined /> },
  // { label: (<GetLabel name={"News"} link={"/news"} />), key: 'item-4', icon: <BulbOutlined /> },
];

function Minimal({ Component, pageProps }: AppProps) {
  const [openMenu, setOpenMenu] = useState(false);

  const [current, setCurrent] = useState('mail');
  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
    setOpenMenu(false);
  };
  const { md } = useBreakpoint();

  return (
    <div style={{ backgroundColor: '#191B1F' }}>
      <Layout style={{ minHeight: '100vh', backgroundColor: '#191B1F' }}>

        <Header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          backgroundColor: '#191B1F'
        }}>
          <Logo />
          {
            (!md) ?
              <Popover
                placement='bottom'
                color='#21242c'
                content={
                  <Menu
                    onClick={onClick}
                    style={{ backgroundColor: '#21242c' }}
                    theme="dark"
                    mode="inline"
                    selectedKeys={[current]}
                    defaultSelectedKeys={['item-1']}
                    items={items} />
                }
                trigger="click"
                visible={openMenu}
                onVisibleChange={() => {
                  setOpenMenu(!openMenu)
                }}
              >
                <Button type="primary">
                  <MenuOutlined />
                </Button>
              </Popover>
              :
              <Menu
                onClick={onClick}
                style={{ backgroundColor: '#191B1F' }}
                theme="dark"
                mode="horizontal"
                selectedKeys={[current]}
                defaultSelectedKeys={['item-1']}
                items={items} />
          }

        </Header>
        <Content className="site-layout" style={{ padding: `0 ${(md)?'50px' : '0'}` }}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Content>
        <Footer style={{ backgroundColor: 'transparent', color: 'white', textAlign: 'center' }}>
          Cryptoverse ©2024 Developed by Mohit Sharma
        </Footer>
      </Layout>
    </div>
  )
}


function Logo() {
  return (
    <Link href="/">
      <div style={{
        display: 'flex', alignItems: 'center',
      }}>
        <Avatar
          style={{ backgroundColor: 'transparent' }}
          icon={
            <Image src={`/logo.svg`}
              alt="logo"
              width={100}
              height={100} />
          }
          size="large" />
        <Typography.Title
          level={4}
          style={{ color: "white", margin: "0 20px 0 20px", textAlign: "center" }}
        >
          Cryptoverse
        </Typography.Title>
      </div>
    </Link>
  )
}

export default Minimal