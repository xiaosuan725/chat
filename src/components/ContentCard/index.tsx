import { Card, Space } from 'antd';
import React from 'react';
import { Icon } from '@umijs/max';

const { Meta } = Card;
type Props = {
  avatarUrl: string;
  username: string;
  createAt: string;
  description: string;
};

export const ContentCard: React.FC<Props> = ({
  username,
  createAt,
  description,
}) => {
  return (
    <Card style={{ marginBottom: 8 }}>
      <Meta
        // avatar={<Avatar src={avatarUrl} />}

        title={
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <div>{username}</div>
            <div
              style={{
                flex: 1,
                marginLeft: 8,
                fontSize: 12,
                color: 'rgba(0, 0, 0, 0.45)',
                fontWeight: 'normal',
              }}
            >
              {createAt}
            </div>
            <Space>
              <Icon icon="ant-design:edit-outlined" />
              <Icon icon="ant-design:delete-outlined" />
            </Space>
          </div>
        }
        description={description}
      />
    </Card>
  );
};
