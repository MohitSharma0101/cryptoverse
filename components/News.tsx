import { Avatar, Card, Col, Row, Typography } from 'antd'
import moment from 'moment'
import React from 'react'
import { useGetNewsQuery } from '../services/cryptoNewsApi'
import {Title} from './'
 

type Article = {
  name: string,
  description: string,
  image:{
    type:string,
    thumbnail:{
      type:string,
      contentUrl:string
    }
  }
  url:string,
  datePublished:string,
  provider:[{
    name:string,
    image:{
      thumbnail:{
        contentUrl:string,
      }
    }}
  ],
}

export default function News() {
  const { data, isLoading } = useGetNewsQuery("Crypto");

  const news = data?.value
  if(isLoading) return <></>
  return (
    <>
     <Title text = "News" />
     <Row gutter={[12,16]}>
      {
      news.map((article:Article) =>(
        <Col xs={24} sm={12} lg={8} key={article.name}>
          <NewsCard {...article}/>
        </Col>
       ))
     }
   
     </Row>
    </>
   
  )
}

const  NewsCard = ( {image,name,description,url,datePublished,provider}:Article) =>{
return(
  <Card hoverable style={{ backgroundColor: '#21242C' }} bordered={false}>
  <a href={url} target="_blank" rel="noreferrer">
    <div style={{display:'flex',justifyContent: 'space-between',alignItems: 'start'}}>
      <Typography.Title style={{color: 'white'}} level={4}>{name}</Typography.Title>
      <img src={image?.thumbnail?.contentUrl } alt="" />
    </div>
    <p style={{color: '#D4D4D4'}}>{description.length > 100 ? `${description.substring(0, 100)}...` : description}</p>
    <div style={{display:'flex',justifyContent: 'space-between',alignItems: 'center'}}>
      <div>
        <Avatar src={provider[0]?.image?.thumbnail?.contentUrl } alt="" />
        <Typography.Text style={{color:'white',marginLeft:'8px'}}>{provider[0]?.name}</Typography.Text>
      </div>
      <Typography.Text style={{color: 'white'}}>{moment(datePublished).fromNow()}</Typography.Text>
    </div>
  </a>
</Card>
)
}
