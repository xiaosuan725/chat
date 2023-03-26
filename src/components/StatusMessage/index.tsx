import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import React from 'react';

export const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const StatusMessage: React.FC = ({ item }: any) => {
  return (
    <List.Item
      actions={[
        <IconText icon={StarOutlined} text="0" key="list-vertical-star-o" />,
        <IconText icon={LikeOutlined} text="0" key="list-vertical-like-o" />,
        <IconText
          icon={MessageOutlined}
          text="0"
          key="list-vertical-message"
        />,
      ]}
      style={{ padding: '16px 0' }}
    >
      <List.Item.Meta
        avatar={<Avatar src={item.avatar} />}
        title={
          <Space>
            <a href={item.href} style={{ color: '#000000' }}>
              {item.title}
            </a>
            <span
              style={{ fontSize: 12, color: '#939393', fontWeight: 'normal' }}
            >
              @1323
            </span>
            <span
              style={{ fontSize: 12, color: '#939393', fontWeight: 'normal' }}
            >
              2022-1-1
            </span>
          </Space>
        }
        style={{ marginBottom: 0 }}
      />
      <div style={{ paddingLeft: 48 }}>
        <div style={{ marginBottom: 16 }}>{item.content}</div>
        <img
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
      </div>
    </List.Item>
  );
};
