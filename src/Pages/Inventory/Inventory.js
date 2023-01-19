import {Avatar, Rate, Space, Table, Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import { getInventory } from '../../API/ApiIndex';

export default function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then(res => {
      setDataSource(res.products);
      setTimeout(() => {
        setLoading(false);
      }, 300);
      
    });
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
      loading={loading}
        const
        columns={[
          {
            title: 'Thumbnail',
            dataIndex: 'thumbnail',
            render:(link)=>{
                return <Avatar src={link}/>
            }
          },
          {
            title: 'Title',
            dataIndex: 'title'
          },
          {
            title: 'Price',
            dataIndex: 'price',
            render:(value)=><span>${value}</span>
          },
          {
            title: 'Rating',
            dataIndex: 'rating',
            render:(rating)=>{
                return <Rate value={rating}  allowHalf disabled/>
            }
          },
          {
            title: 'Stock',
            dataIndex: 'stock'
          },

          {
            title: 'Brand',
            dataIndex: 'brand'
          },
          {
            title: 'Category',
            dataIndex: 'category'
          }
        ]}
        dataSource={dataSource} 
        pagination={{
pageSize:5
        }}
      />
    </Space>
  );
}
