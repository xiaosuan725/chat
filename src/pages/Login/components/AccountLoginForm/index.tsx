import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ProFormText } from '@ant-design/pro-components';
import { Form, Input } from 'antd';
import React from 'react';

export const AccountLoginForm: React.FC = () => {
  return (
    <>
      {/* <ProFormText
      name="username"
      fieldProps={{
        size: 'large',
        prefix: <UserOutlined className={'prefixIcon'} />,
      }}
      placeholder={'用户名: admin or user'}
      rules={[
        {
          required: true,
          message: '请输入用户名!',
        },
      ]}
    /> */}
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input
          size="large"
          prefix={<UserOutlined className={'prefixIcon'} />}
          placeholder={'邮箱: name@email.com'}
        />
      </Form.Item>
      <ProFormText.Password
        name="password"
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined className={'prefixIcon'} />,
        }}
        placeholder={'密码: password'}
        rules={[
          {
            required: true,
            message: '请输入密码！',
          },
        ]}
      />
    </>
  );
};
