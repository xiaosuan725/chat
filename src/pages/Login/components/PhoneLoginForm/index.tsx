import { ProFormCaptcha, ProFormText } from '@ant-design/pro-components';
import { Icon } from '@umijs/max';
import { message } from 'antd';
import React from 'react';

export const PhoneLoginForm: React.FC = () => {
  return (
    <>
      <ProFormText
        fieldProps={{
          size: 'large',
          prefix: (
            <Icon icon="ant-design:mobile-outlined" className={'prefixIcon'} />
          ),
        }}
        name="mobile"
        placeholder={'手机号'}
        rules={[
          {
            required: true,
            message: '请输入手机号！',
          },
          {
            pattern: /^1\d{10}$/,
            message: '手机号格式错误！',
          },
        ]}
      />
      <ProFormCaptcha
        fieldProps={{
          size: 'large',
          prefix: (
            <Icon icon="ant-design:lock-outlined" className={'prefixIcon'} />
          ),
        }}
        captchaProps={{
          size: 'large',
        }}
        placeholder={'请输入验证码'}
        captchaTextRender={(timing, count) => {
          if (timing) {
            return `${count} ${'获取验证码'}`;
          }
          return '获取验证码';
        }}
        name="captcha"
        rules={[
          {
            required: true,
            message: '请输入验证码！',
          },
        ]}
        onGetCaptcha={async () => {
          message.success('获取验证码成功！验证码为：1234');
        }}
      />
    </>
  );
};
