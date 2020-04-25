import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  // Insert New Router
  {
    path: '/logs-list',
    component: () => import('../routes/logs/List'),
    models: ['logs'],
    title: '日志列表',
  },
  {
    path: '/logs-analysis',
    component: () => import('../routes/logsAnalysis'),
    models: ['logsAnalysis'],
    title: '日志分析',
  },
];

export default config;
