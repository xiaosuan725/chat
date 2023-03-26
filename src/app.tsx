// 运行时配置
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
import type { RequestConfig } from '@umijs/max';
import { FloatButton, message } from 'antd';
import { sessionToken } from './constants';
import './utils/init-leancloud-sdk';
import { RightUserActions } from './components/RightUserActions';

// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'Cheerless' };
}

export const layout = () => {
  return {
    logo: 'http://lc-hJZjFmDL.cn-n1.lcfile.com/bpfBETN9BcwikEohxSQi4R4jwwFC951N/favicon.png',
    rightContentRender: () => <RightUserActions />,
    menu: {
      locale: false,
    },
  };
};

export const request: RequestConfig = {
  requestInterceptors: [
    (options: any) => {
      // 拦截请求配置，进行个性化处理。
      options.headers = {
        'X-LC-Id': process.env.APP_ID,
        'X-LC-Key': process.env.APP_KEY,
        'X-LC-Session': sessionToken,
        'Content-Type': 'application/json',
      };
      return options;
    },
  ],
  errorConfig: {
    errorHandler: (error: any) => {
      message.error(error.response.data.error);
    },
  },
};

export const reactQuery = {
  queryClient: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        cacheTime: Infinity,
      },
    },
  },
};

export function rootContainer(container: any) {
  return (
    <>
      {container}
      <FloatButton onClick={() => console.log('click')} />
    </>
  );
}
