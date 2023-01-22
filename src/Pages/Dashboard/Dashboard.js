import { Space, Typography, Card } from 'antd';
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined
} from '@ant-design/icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import React, { useState, useEffect } from 'react';
import {
  getOrders,
  getRevenue,
  getInventory,
  getCustomers
} from '../../API/ApiIndex';
import RecentOrders from './RecentOrders/RecentOrders';
import DashboardCard from './DashboardCard/DashboardCard';
import DashboardChart from './DashboardChart/DashboardChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then(res => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then(res => {
      setInventory(res.total);
    });
    getCustomers().then(res => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: 'green',
                backgroundColor: 'rgba(0,255,0,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8
              }}
            />
          }
          title="Orders"
          value={orders}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: 'blue',
                backgroundColor: 'rgba(0,0,255,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8
              }}
            />
          }
          title="Customers"
          value={customers}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: 'purple',
                backgroundColor: 'rgba(0,255,255,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8
              }}
            />
          }
          title="Inventors"
          value={inventory}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: 'red',
                backgroundColor: 'rgba(255,0,0,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8
              }}
            />
          }
          title="Revenue"
          value={revenue}
        />
      </Space>

      <Space>
        <RecentOrders getOrders={getOrders} />
        <DashboardChart getRevenue={getRevenue} Card={Card} Bar={Bar} />
      </Space>
    </Space>
  );
}
