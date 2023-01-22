import { Space, Table, Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import { getInventory } from '../../API/ApiIndex';
import { columns } from './columns';

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
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 5
        }}
      />
    </Space>
  );
}
