import React from 'react';
import { Button, Result } from 'antd';
import { history } from '@umijs/max';

const App: React.FC = () => (
  <Result
    status="success"
    title="注册成功"
    subTitle="请前往邮箱确认！"
    extra={[
      <Button key="BTN" type="primary" onClick={() => history.push('/login')}>
        已确认，去登录
      </Button>,
    ]}
  />
);

export default App;
