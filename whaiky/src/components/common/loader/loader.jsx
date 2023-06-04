import React from 'react'
import { Space, Spin } from 'antd';

export default function Loader() {
  return (
    <div className='loader'> 
    <h2>Loading ...</h2>
        <Space size="middle">
        <Spin size="large" />
        </Space>
    </div>
  )
}
