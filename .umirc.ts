import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Cheerless',
  },
  favicons: [
    'http://lc-4LnrY9uq.cn-n1.lcfile.com/YXGbpxaYdUU8q7Wp8TaTBDRiud7w79x0/favicon.png',
  ],
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      icon: 'Home',
    },
    {
      name: '搜索',
      path: '/explore',
      component: './Explore',
      icon: 'Search',
    },

    {
      name: '登录',
      path: '/login',
      component: './Login',
      headerRender: false,
      footerRender: false,
      menuRender: false,
      menuHeaderRender: false,
      hideInMenu: true,
    },
    {
      name: '注册',
      path: '/register',
      component: './Register',
      headerRender: false,
      footerRender: false,
      menuRender: false,
      menuHeaderRender: false,
      hideInMenu: true,
    },
    {
      path: '/user/:objectId',
      component: './Detail',
      hideInMenu: true,
    },
  ],
  npmClient: 'pnpm',
  define: {
    'process.env.APP_ID': '4LnrY9uqqvki34G9kxvUH644-gzGzoHsz',
    'process.env.APP_KEY': 'HX7FFlFQSSmk12yBKejcHM1n',
  },
  reactQuery: {},
  icons: {},
});
