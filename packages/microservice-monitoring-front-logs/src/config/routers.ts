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
  }
];

export default config;
