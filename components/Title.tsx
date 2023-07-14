import { Typography } from 'antd'
import React from 'react'

export default function Title(param:{text:string}) {
  return (
    <Typography.Title level={3} style={{color: 'white', margin: '20px 0' }}>
        {param.text}
    </Typography.Title>
  )
}