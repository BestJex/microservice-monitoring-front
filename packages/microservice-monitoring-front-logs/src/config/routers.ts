import testPageRouterConfig from '../routes/test-page/routers';
import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  // Insert New Router
  ...testPageRouterConfig,
  {
    path: '/microservice-monitoring-front-logs/hello',
    component: () => import('../routes/hello/HelloLogsPage'),
    authorized: true,
    title: 'Hello MicroserviceMonitoringFrontLogs',
  },
  {
    path: '/logs-list',
    component: () => import('../routes/logs/List'),
    authorized: true,
    title: '日志列表',
  },
];

export default config;
