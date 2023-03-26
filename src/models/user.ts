import { sessionToken } from '@/constants';
import { loginUser } from '@/services/webapi/LoginController';
import { getUser } from '@/services/webapi/UserController';
import { useMutation, history, useRequest } from '@umijs/max';
import { message } from 'antd';
import { useState } from 'react';

export default () => {
  const [user, setUser] = useState<API.UserInfoV0>();

  const isLogin = Boolean(user);

  const { run: runGetUser, loading } = useRequest(getUser, {
    ready: Boolean(sessionToken),
    formatResult(r) {
      return r;
    },
    onSuccess(r) {
      setUser(r);
    },
  });

  const { mutate: runLoginUser } = useMutation(loginUser, {
    onSuccess(r) {
      localStorage.setItem('sessionToken', r.sessionToken);
      setUser(r);
      message.success('登录成功', 0.5, () => {
        history.push('/home');
      });
    },
  });

  const runLoginOut = () => {
    setUser(undefined);
    localStorage.removeItem('sessionToken');
    message.success('退出成功');
  };

  console.log('user', user);
  return {
    runGetUser,
    runLoginUser,
    runLoginOut,
    loading,
    user,
    setUser,
    isLogin,
  };
};
