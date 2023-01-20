import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { items } from './items';

export default function SideMenu() {
  const location = useLocation();
  const [selectedkeys, setSelectedkeys] = useState('/');

  useEffect(
    () => {
      const pathName = location.pathname;
      setSelectedkeys(pathName);
    },
    [location.pathname]
  );

  const navigate = useNavigate();
  
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        onClick={item => {
          navigate(item.key);
        }}
        mode="vertical"
        selectedKeys={[selectedkeys]}
        items={items}
      />
    </div>
  );
}
