import { ProFormText } from '@ant-design/pro-components';
import { Icon } from '@umijs/max';
import { Form, Input } from 'antd';
import React from 'react';

export const AccountLoginForm: React.FC = () => {
  return (
    <>
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
          prefix={
            <Icon icon="ant-design:user-outlined" className={'prefixIcon'} />
          }
          placeholder={'邮箱: name@email.com'}
        />
      </Form.Item>
      <ProFormText.Password
        name="password"
        fieldProps={{
          size: 'large',
          prefix: (
            <Icon icon="ant-design:lock-outlined" className={'prefixIcon'} />
          ),
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
