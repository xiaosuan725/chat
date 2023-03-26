import { LoginFormPage } from '@ant-design/pro-components';
import { message, Tabs } from 'antd';
import { useState } from 'react';
import { AccountLoginForm } from './components/AccountLoginForm';
import { PhoneLoginForm } from './components/PhoneLoginForm';
import { history, useModel, useRequest } from '@umijs/max';
import { loginUser } from '@/services/webapi/LoginController';

type LoginType = 'phone' | 'account';

export default () => {
  const [loginType, setLoginType] = useState<LoginType>('account');
  const { getUser } = useModel('user');

  const { run: runLoginUser } = useRequest(loginUser, {
    manual: true,
    debounceInterval: 300,
    onSuccess(r) {
      localStorage.setItem('sessionToken', r.sessionToken);
      setTimeout(() => {
        getUser();
      }, 0);
      message.success('登录成功', 0.5, () => {
        history.push('/home');
      });
    },
  });
  const onFinish = async (values: API.EmailLoginV0) => {
    runLoginUser(values);
  };
  return (
    <div style={{ backgroundColor: 'white', height: '100vh' }}>
      <LoginFormPage
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        logo="http://lc-hJZjFmDL.cn-n1.lcfile.com/bpfBETN9BcwikEohxSQi4R4jwwFC951N/favicon.png"
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
