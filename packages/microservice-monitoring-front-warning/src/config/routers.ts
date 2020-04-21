import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  // Insert New Router
  {
    path: '/email-warning',
    component: () => import('../routes/email-warning'),
    authorized: true,
    title: '邮件预警',
  },
  {
    path: '/phone-warning',
    component: () => import('../routes/phone-warning'),
    authorized: true,
    title: '手机短信预警',
  },
  {
    path: '/wechat-warning',
    component: () => import('../routes/wechat-warning'),
    authorized: true,
    title: '微信预警',
  },
  {
    path: '/warning-manage',
    component: () => import('../routes/warning-manage'),
    models: ['warningManage'],
    // authorized: true,
    title: '预警管理',
  },
];

export default config;
