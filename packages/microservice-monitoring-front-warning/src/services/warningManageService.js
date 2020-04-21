import request from 'utils/request';
import { HZERO_PLATFORM } from 'utils/config';
/**
 * 请求API前缀
 * @type {string}
 */
const prefix = `/msms`;

export async function retrieve(params) {
  return request(`/msms/v1/warning-types`, {
    method: 'GET',
    query: params,
  });
}

/**
 * 查询单个独立值集值-处理状态
 *
 * @param {String} params
 */
export async function getWarningTypeList() {
  return request(`${HZERO_PLATFORM}/v1/lovs/value`, {
    query: {
      lovCode: 'MSMS.WARNING_TYPE',
    },
  });
}

/**
 * 新建/编辑
 *
 * @param {String} params
 */
export async function update(params) {
  return request(`${prefix}/v1/warning-types`, {
    method: 'PUT',
    body: params,
  });
}





