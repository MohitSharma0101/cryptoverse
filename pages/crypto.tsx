import React from 'react'
import { Top10Crypto } from '../components'

export default function crypto() {
  return (
    <div style={{backgroundColor: "#191B1F" ,padding: "10px",margin:"20px"}}>
    <Top10Crypto count={50}/>
    </div>
  )
}
