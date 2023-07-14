import React, { useState } from 'react'
import millify from "millify";
import { useGetCryptosQuery } from '../services/cryptoApi';

import styles from '../styles/Components.module.scss'
import { Card  , Avatar , Typography , Row , Col , Grid , Tag, Button} from 'antd'
import {Title} from './';
const {  Text } = Typography;

const defaultCoin = {
    uuid:"Qwsogvtv82FCd",
    symbol:"BTC",
    name:"Bitcoin",
    color:"#f7931A",
    iconUrl:"https://cdn.coinranking.com/Sy33Krudb/btc.svg",
    marketCap:"159393904304",
    price:"9370.9993109108",
    btcPrice:"1",
    listedAt:1483228800,
    change:"-0.52",
    rank:1,
}

type coinType = typeof defaultCoin

export default function Top10Crypto(p:{count:number}) {
    const [pageCount , setpageCount ] = useState(p.count)
    const { data, isLoading } = useGetCryptosQuery(pageCount)
    const {lg} = useBreakpoint();
    const span = (lg) ? 8 : 12
    const coins = (data) ? data?.data?.coins : [defaultCoin]
    console.log(data?.data?.coins);
  return (
    <div className={styles.top10Crypto}>
         <Title text = "Top Crypto's" />
        <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center'}}> 
           <Row gutter={[12,16]}>
            {
                coins.map((coin:coinType) => (
                    <Col
                        xs = {{span: 24}}
                        md = {{span: 12}}
                        lg = {{span: 8}}
                        className="crypto-card"
                        key={coin.uuid}
                        > 
                        <Crypto key={coin.uuid} coin={coin} loading={isLoading} /> 
                    </Col>
                ))
            }
            </Row>
            <Button type='primary' style={{margin:"20px 0"}} onClick={
                () => {setpageCount(pageCount + 10)}
            } loading={isLoading}> Show More </Button>
        </div>
    </div>
  )
}

const { useBreakpoint } = Grid;


export function Crypto(p:{coin:coinType,loading:boolean}) {
    const {lg} = useBreakpoint(); // lg is one of the elements returned if screenwidth exceeds 991
    const {coin,loading} = p
  const lvl = lg ? 5 : 5;
  return (
    <>
    <Card hoverable className={styles.crypto} bordered={false} style={{color:"white"}} loading={loading}>
        <Row align="middle">
            <Col flex={2}>
                <Avatar src={coin.iconUrl}/>
            </Col>
            <Col flex={20}>
                <Typography.Title level={lvl} style={{color:"white",marginBottom: "0"}}> 
                    {`${coin.rank}. ${coin.name}`} 
                </Typography.Title>
                <Text style={{
                    color:"white", 
                    }}> {coin.symbol} </Text>
            </Col>
            <Col flex={2}>
                <Typography.Title level={lvl} style={{color:"#39FCAA"}}> 
                    {millify(Number(coin.price))} 
                </Typography.Title>
            </Col>
        </Row>
    </Card>
    </>
  )
}

