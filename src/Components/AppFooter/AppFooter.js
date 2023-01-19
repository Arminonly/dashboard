import { Typography } from 'antd';
import React from 'react';

export default function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+375258123456">+375258123456</Typography.Link>
      <Typography.Link href="https://google.com" target={"_blank"}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://google.com" target={"_blank"}>Terms of Use</Typography.Link>
    </div>
  );
}
