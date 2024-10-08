import { Avatar, Card, Col, Row, Typography, Button } from 'antd'
import moment from 'moment'
import React, { useState } from 'react'
import { useGetNewsQuery } from '../services/cryptoNewsApi'
import { Title } from './'

type Article = {
  name: string,
  description: string,
  image: {
    type: string,
    thumbnail: {
      type: string,
      contentUrl: string
    }
  }
  url: string,
  datePublished: string,
  provider: [{
    name: string,
    image: {
      thumbnail: {
        contentUrl: string,
      }
    }
  }
  ],
}

export default function News() {
  const [pageCount, setpageCount] = useState(20);
  const param = {
    q: "crypto",
    count: pageCount
  }
  const { data, isLoading } = useGetNewsQuery(param);

  const news = data?.value
  if (isLoading || !news) return (<></>);
  return (
    <>
      <Title text="News" />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Row gutter={[12, 16]}>
          {
            news?.map((article: Article) => (
              <Col xs={24} sm={12} lg={8} key={article.name}>
                <NewsCard {...article} />
              </Col>
            ))
          }
        </Row>
        <Button type='primary' style={{ margin: "20px 0" }} onClick={
          () => { setpageCount(pageCount + 10) }
        } loading={isLoading}> Show More </Button>
      </div>
    </>
  )
}

const NewsCard = ({ image, name, description, url, datePublished, provider }: Article) => {
  return (
    <Card hoverable style={{ backgroundColor: '#21242C' }} bordered={false}>
      <a href={url} target="_blank" rel="noreferrer">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
          <Typography.Title style={{ color: 'white' }} level={4}>{name}</Typography.Title>
          <img src={image?.thumbnail?.contentUrl} alt="" />
        </div>
        <p style={{ color: '#D4D4D4' }}>{description.length > 100 ? `${description.substring(0, 100)}...` : description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Avatar src={provider[0]?.image?.thumbnail?.contentUrl} alt="" />
            <Typography.Text style={{ color: 'white', marginLeft: '8px' }}>{provider[0]?.name}</Typography.Text>
          </div>
          <Typography.Text style={{ color: 'white' }}>{moment(datePublished).fromNow()}</Typography.Text>
        </div>
      </a>
    </Card>
  )
}