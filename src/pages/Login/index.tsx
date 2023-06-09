import { LoginFormPage } from '@ant-design/pro-components';
import { Tabs } from 'antd';
import { useState } from 'react';
import { AccountLoginForm } from './components/AccountLoginForm';
import { PhoneLoginForm } from './components/PhoneLoginForm';
import { history, useModel } from '@umijs/max';

type LoginType = 'phone' | 'account';

export default () => {
  const [loginType, setLoginType] = useState<LoginType>('account');
  const { runLoginUser } = useModel('user');

  const onFinish = async (values: API.EmailLoginV0) => {
    runLoginUser(values);
  };
  return (
    <div style={{ backgroundColor: 'white', height: '100vh' }}>
      <LoginFormPage
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        logo="http://lc-4LnrY9uq.cn-n1.lcfile.com/YXGbpxaYdUU8q7Wp8TaTBDRiud7w79x0/favicon.png"
        title="Cheerless"
        subTitle="为什么西瓜这么贵"
        onFinish={onFinish}
        // actions={
        //   <div
        //     style={{
        //       display: 'flex',
        //       justifyContent: 'center',
        //       alignItems: 'center',
        //       flexDirection: 'column',
        //     }}
        //   >
        //     <Divider plain>
        //       <span style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}>
        //         其他登录方式
        //       </span>
        //     </Divider>
        //     <Space align="center" size={24}>
        //       <div
        //         style={{
        //           display: 'flex',
        //           justifyContent: 'center',
        //           alignItems: 'center',
        //           flexDirection: 'column',
        //           height: 40,
        //           width: 40,
        //           border: '1px solid #D4D8DD',
        //           borderRadius: '50%',
        //         }}
        //       >
        //         <QqOutlined style={{ ...iconStyles, color: '#1677FF' }} />
        //       </div>
        //     </Space>
        //   </div>
        // }
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
        >
          <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
          <Tabs.TabPane disabled key={'phone'} tab={'手机号登录'} />
        </Tabs>
        {loginType === 'account' && <AccountLoginForm />}
        {loginType === 'phone' && <PhoneLoginForm />}
        <div
          style={{
            marginBlockEnd: 24,
            marginBottom: 24,
          }}
        >
          <a onClick={() => history.push('/register')}>注册账号</a>
          <a
            style={{ float: 'right' }}
            onClick={() => {
              console.log(process.env.APP_ID);
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginFormPage>
    </div>
  );
};
