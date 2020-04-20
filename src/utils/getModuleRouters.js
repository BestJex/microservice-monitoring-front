import { getModuleRouters } from 'utils/utils';
import * as hzeroFrontHpfmRouters from 'hzero-front-hpfm/lib/utils/router';
import * as hzeroFrontHiamRouters from 'hzero-front-hiam/lib/utils/router';
import * as microServiceMonitoringLogsRouters from '../../packages/microservice-monitoring-front-logs/lib/utils/router';
import * as microServiceMonitoringWarningRouters from '../../packages/microservice-monitoring-front-warning/lib/utils/router';

export default app => getModuleRouters(app, [
  hzeroFrontHpfmRouters,
  hzeroFrontHiamRouters,
  microServiceMonitoringLogsRouters,
  microServiceMonitoringWarningRouters,
]);
