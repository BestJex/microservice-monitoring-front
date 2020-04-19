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
  }
];

export default config;
