import { sessionToken } from '@/constants';
import { getUser } from '@/services/webapi/UserController';
import { useRequest } from '@umijs/max';

export default () => {
  const { data, run, loading } = useRequest(getUser, {
    ready: Boolean(sessionToken),
  });

  return {
    userInfo: data,
    getUser: run,
    loading,
  };
};
