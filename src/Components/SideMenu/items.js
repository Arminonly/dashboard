import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined
  } from '@ant-design/icons';



export const items=[
    {
      label: 'Dashboard',
      icon: <AppstoreOutlined />,
      key: '/'
    },
    {
      label: 'Inventory',
      key: '/inventory',
      icon: <ShopOutlined />
    },
    {
      label: 'Orders',
      key: '/orders',
      icon: <ShoppingCartOutlined />
    },
    {
      label: 'Customers',
      key: '/customers',
      icon: <UserOutlined />
    }
  ]