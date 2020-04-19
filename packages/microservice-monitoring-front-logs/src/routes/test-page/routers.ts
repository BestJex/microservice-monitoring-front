import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  {
    path: '/microservice-monitoring-front-logs/test-page',
    component: () => import('./TestPagePage'),
    authorized: true,
    title: 'Hello-TestPage',
  }
];

export default config;
