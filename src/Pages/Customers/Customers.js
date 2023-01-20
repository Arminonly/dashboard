import { Avatar, Space, Table, Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import { getCustomers } from '../../API/ApiIndex';
import {columns} from './columns';

export default function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then(res => {
      setDataSource(res.users);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    });
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
            pageSize:5
        }}
      />
    </Space>
  );
}
