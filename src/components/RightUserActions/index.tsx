import { Link } from '@umijs/max';
import { useModel } from '@umijs/max';
import { Avatar, Dropdown, MenuProps, Space } from 'antd';
import React from 'react';
import { Icon } from '@umijs/max';

export const RightUserActions: React.FC = () => {
  const { user, isLogin, runLoginOut, loading } = useModel('user');
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Link to={{ pathname: '/user/' + user?.objectId }}>我的信息</Link>,
    },
    {
      key: '2',
      danger: true,
      label: <a onClick={runLoginOut}>退出</a>,
    },
  ];

  if (loading) {
    return null;
  }

  return (
    <div className="umi-plugin-layout-right">
      {isLogin ? (
        <Dropdown placement="topRight" menu={{ items }}>
          <span
            className="umi-plugin-layout-action"
            onClick={(e) => e.preventDefault()}
          >
            <Avatar
              size="small"
              style={{ marginRight: 8 }}
              icon={<Icon icon="ant-design:user-outlined" />}
            />
            {user?.nickName}
          </span>
        </Dropdown>
      ) : (
        <Space className="umi-plugin-layout-action" split="/">
          <Link to={{ pathname: '/login' }}>登录</Link>
          <Link to={{ pathname: '/register' }}>注册</Link>
        </Space>
      )}
    </div>
  );
};
