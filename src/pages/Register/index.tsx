import { Button, Checkbox, Form, Input, Select } from 'antd';
import React from 'react';
import {
  PasswordStrengthCalculator,
  Validator,
} from '@/components/PasswordStrengthCalculator';
import { ProCard } from '@ant-design/pro-components';
import { registerUser } from '@/services/webapi/UserController';
import { history, useMutation } from '@umijs/max';
import { Icon } from '@umijs/max';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const defaultRules: Validator[] = [
  {
    validate: (val) => val.length > 8,
    message: '至少8个字符',
  },
  {
    validate: (val) => {
      if (/[a-z]+/.test(val) && /[A-Z]+/.test(val)) {
        return true;
      }
      return false;
    },
    message: '包含小写字母(a-z)和大写字母(A-Z)',
  },
  {
    message: '至少包含一个数字(0-9)或是一个符号',
    validate: (val) => {
      return /([0-9]|[@$!%*#?&_])+/.test(val);
    },
    optional: true,
  },
  {
    validate: (val) => {
      if (val.includes('example@antgroup.com') || val.includes('example')) {
        return false;
      }
      return true;
    },
    message: '不包含您的姓名或电子邮件地址',
    optional: true,
  },
];

const App: React.FC = () => {
  const [form] = Form.useForm();

  const registerUserMutation = useMutation(registerUser, {
    onSuccess() {
      history.push('/login');
    },
  });

  const onFinish = (values: API.UserInfoV0) => {
    registerUserMutation.mutate(values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <ProCard
      title={
        <div>
          <Icon
            onClick={() => window.history.back()}
            style={{ marginRight: 8 }}
            icon="ant-design:arrow-left-outlined"
          />
          注册表单
        </div>
      }
      headerBordered
      bordered
      style={{ minHeight: '100vh', maxWidth: '850px', margin: '0 auto' }}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{ prefix: '86' }}
        style={{ maxWidth: 600 }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
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
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <PasswordStrengthCalculator rules={defaultRules} />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="确认密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match!'),
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="username"
          label="用户名"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="nickName"
          label="昵称"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: 'Please input your nickName!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="手机号"
          // rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="intro" label="介绍">
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="性别"
          rules={[{ required: true, message: '请选择你的性别!' }]}
        >
          <Select placeholder="请选择你的性别">
            <Option value="male">男</Option>
            <Option value="female">女</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </ProCard>
  );
};

export default App;
