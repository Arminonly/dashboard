import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Customers from '../../Pages/Customers/Customers';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Inventory from '../../Pages/Inventory/Inventory';
import Orders from '../../Pages/Orders/Orders';

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}
