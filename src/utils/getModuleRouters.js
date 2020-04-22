import { getModuleRouters } from 'utils/utils';
import * as hzeroFrontHpfmRouters from 'hzero-front-hpfm/lib/utils/router';
import * as hzeroFrontHiamRouters from 'hzero-front-hiam/lib/utils/router';
import * as hzeroFrontHcnfRouters from 'hzero-front-hcnf/lib/utils/router';
import * as hzeroFrontHmsgRouters from 'hzero-front-hmsg/lib/utils/router';
import * as hzeroFrontHcuzRouters from 'hzero-front-hcuz/lib/utils/router';
import * as hzeroFrontHsdrRouters from 'hzero-front-hsdr/lib/utils/router';
// import * as hzeroFrontHadmRouters from 'hzero-front-hadm/lib/utils/router';
// import * as hzeroFrontHmntRouters from 'hzero-front-hmnt/lib/utils/router';
import * as microServiceMonitoringLogsRouters from '../../packages/microservice-monitoring-front-logs/lib/utils/router';
import * as microServiceMonitoringWarningRouters from '../../packages/microservice-monitoring-front-warning/lib/utils/router';

export default app => getModuleRouters(app, [
  hzeroFrontHpfmRouters,
  hzeroFrontHiamRouters,
  hzeroFrontHcnfRouters,
  hzeroFrontHmsgRouters,
  hzeroFrontHcuzRouters,
  hzeroFrontHsdrRouters,
  // hzeroFrontHadmRouters,
  // hzeroFrontHmntRouters,
  microServiceMonitoringLogsRouters,
  microServiceMonitoringWarningRouters,
]);
