import React from 'react'
import { Card, Row , Col } from 'antd';
import styles from '../styles/Components.module.scss'
import millify from "millify";
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Title} from './';


export default function GlobalStats() {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalState = (data) ? data?.data?.stats : {
    totalCoins:0,
    totalExchanges:0,
    totalMarketCap:0,
    total24hVolume:0,
  }

  const span = {
    small: 14,
    medium: 8,
    large: 12,
  }

  return (
    <>
    <Title text = "Global Stats" />
    <Card 
      className={styles.globalStateCard}
      bordered={false}
      loading={isFetching}
      >
      <Row>
        <Col xs = {span.small} md = {span.medium} lg = {span.large}>
          <Data title={"Total Cryptos"} value = {globalState.totalCoins} color="#FC3939" />
        </Col>
        <Col xs = {span.small} md = {span.medium} lg = {span.large}>
          <Data title={"Total Exhance"} value = {millify(globalState.totalExchanges)} color="#6A9DF5" />
        </Col>
      </Row>
      <Row>
        <Col xs = {span.small} md = {span.medium} lg = {span.large}>
          <Data title={"Total market cap"} value ={millify(globalState.totalMarketCap)} color="#39D9FC" />
        </Col>
        <Col xs = {span.small} md = {span.medium} lg = {span.large}>
          <Data title={"Total 24h volume"} value ={millify(globalState.total24hVolume)} color="#FC398B" />
        </Col>
      </Row>
    </Card>
    </>
  )
}

type dataItem = {
  title: string,
  value: string,
  color: string,
}

function Data({title, value, color}:dataItem){

  return (
    <div className={styles.dataContent}>
      <h4 style={{color:"white"}}>{title}</h4>
      <h1 style={{color:color}}>{value}</h1>
    </div>
  )
}
