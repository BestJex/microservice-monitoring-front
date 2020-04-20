import testPageRouterConfig from '../routes/test-page/routers';
import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  // Insert New Router
  ...testPageRouterConfig,
  {
    path: '/microservice-monitoring-front-warning/hello',
    component: () => import('../routes/hello/HelloWarningPage'),
    authorized: true,
    title: 'Hello MicroserviceMonitoringFrontWarning',
  },
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
];

export default config;
