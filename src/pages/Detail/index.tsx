import { useModel, useParams, useQuery } from '@umijs/max';
import { ProCard } from '@ant-design/pro-components';
import React, { Fragment } from 'react';
import { getUserById } from '@/services/webapi/UserController';
import { Avatar, Button, Space, Tabs, TabsProps } from 'antd';
import {
  CalendarOutlined,
  UserOutlined,
  MailOutlined,
} from '@ant-design/icons';
import styles from './style.less';

export default () => {
  const params = useParams();
  const objectId = params.objectId;
  const { user } = useModel('user');

  const isSelf = objectId === user?.objectId;

  const { data, isFetching } = useQuery(['user', 'detail', objectId], () =>
    getUserById({ objectId }),
  );

  console.log('data', data);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '推文',
      children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: '回复',
      disabled: true,
    },
    {
      key: '3',
      label: '喜欢',
      disabled: true,
    },
  ];

  if (isFetching) {
    return 'loading...';
  }

  return (
    <ProCard split="vertical" style={{ minHeight: '100vh' }}>
      <div className={styles['main-container']}>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}
        >
          <Avatar
            size={{ xs: 64, sm: 72, md: 80, lg: 104, xl: 120, xxl: 164 }}
            style={{ marginRight: 16, minWidth: 64 }}
            icon={<UserOutlined />}
          />
          <div
            style={{
              flex: 1,
              marginRight: 8,
              width: 'clamp(100px, 10%, 100%)',
            }}
          >
            <div className={styles['text']} style={{ fontSize: 21 }}>
              {data?.nickName}
            </div>
            <div className={styles['text']}>{'@' + data?.username}</div>
          </div>
          {isSelf ? (
            <Button shape="round">编辑资料</Button>
          ) : (
            <Fragment>
              <Button
                shape="round"
                style={{ marginRight: 8 }}
                icon={<MailOutlined />}
              />
              <Button shape="round">关注</Button>
            </Fragment>
          )}
        </div>

        <div style={{ marginBottom: 8 }}>
          <Space>
            <CalendarOutlined />
            <div>{data?.createdAt}</div>
            <div>加入</div>
          </Space>
        </div>

        <div style={{ marginBottom: 8 }}>
          <Space>
            <div>
              <span style={{ fontWeight: 'bold' }}>0</span> 正在关注
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>1</span> 关注者
            </div>
          </Space>
        </div>

        <Tabs size="large" defaultActiveKey="1" items={items} />
      </div>
    </ProCard>
  );
};
