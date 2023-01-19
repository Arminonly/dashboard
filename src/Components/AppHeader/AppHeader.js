import React, { useEffect, useState } from 'react';
import { Image, Space, Typography, Badge, Drawer, List } from 'antd';
import { BellFilled, MailOutlined } from '@ant-design/icons';
import { getComments, getOrders } from '../../API/ApiIndex';

export default function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  useEffect(() => {
    getComments().then(res => {
      setComments(res.comments);
    });
    getOrders().then(res => {
      setOrders(res.products);
    });
  }, []);
  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
      />
      <Typography.Title>DashBoard</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: '24px' }}
            onClick={() => setCommentsOpen(true)}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: '24px' }}
            onClick={() => setNotificationsOpen(true)}
          />
        </Badge>
      </Space>
      <Drawer
        title="comments"
        open={commentsOpen}
        onClose={() => setCommentsOpen(false)}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={item => {
            return (
              <List.Item>
                {item.body}
              </List.Item>
            );
          }}
        />
      </Drawer>
      <Drawer
        title="notifications"
        open={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        maskClosable
      >
        {' '}<List
          dataSource={orders}
          renderItem={item => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text>has been
                ordered!!!
              </List.Item>
            );
          }}
        />
      </Drawer>
    </div>
  );
}
