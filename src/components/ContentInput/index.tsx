import { Button, Card, Space, Tabs, TabsProps } from 'antd';
import { Input } from 'antd';
import React from 'react';
import { Icon } from '@umijs/max';

const { TextArea } = Input;

export const ContentInput = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '编辑',
      children: (
        <TextArea
          style={{ height: 100 }}
          allowClear
          placeholder="记录点什么吧..."
          bordered={false}
        />
      ),
    },
    {
      key: '2',
      label: '预览',
      children: <div style={{ height: 100, padding: '4px 11px' }}>123</div>,
    },
  ];

  return (
    <Card style={{ marginBottom: 8 }} bodyStyle={{ padding: '12px 24px' }}>
      <Tabs size="small" items={items} />

      <div style={{ display: 'flex', marginTop: 8 }}>
        <Space style={{ flex: 1, fontSize: 16 }}>
          <Icon icon="ant-design:file-image-outlined" />
          <Icon icon="ant-design:unordered-list-outlined" />
        </Space>
        <Button>小记</Button>
      </div>
    </Card>
  );
};
