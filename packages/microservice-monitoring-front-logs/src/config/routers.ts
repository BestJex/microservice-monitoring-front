import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  // Insert New Router
  {
    path: '/logs-list',
    component: () => import('../routes/logs/List'),
    models: ['logs'],
    title: '日志列表',
  },
];

export default config;
