const paths = require('hzero-webpack-scripts/config/paths');
const path = require('path');

module.exports = {
  '@common': path.resolve(paths.appRootPath, 'packages', 'microservice-monitoring-front-common/lib'),
  'hzero-boot-customize-init-config': path.resolve(
    __dirname,
    '../../packages/microservice-monitoring-front-common/lib/config/customize'
  ),
  '@/assets': path.resolve(
    paths.appRootPath,
    'src/assets'
  ),
  '@': path.resolve(paths.appPath, 'src'),

  components: 'hzero-front/lib/components/',
  utils: 'hzero-front/lib/utils/',
  services: 'hzero-front/lib/services/',

};
