import { Space, Table, Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import { getOrders } from '../../API/ApiIndex';
import { columns } from './columns';

export default function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then(res => {
      setDataSource(res.products);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    });
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
    </Space>
  );
}
