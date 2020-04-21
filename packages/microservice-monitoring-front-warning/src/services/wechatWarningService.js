import request from 'utils/request';
/**
 * 请求API前缀
 * @type {string}
 */
const prefix = `/msms`;

export async function retrieve(params) {
  return request(`${prefix}/v1/warning-history`, {
    method: 'GET',
    query: params,
  });
}

/**
 * 新建/编辑
 *
 * @param {String} params
 */
export async function deleteWarningHistory(params) {
  return request(`${prefix}/v1/warning-history`, {
    method: 'DELETE',
    body: params,
  });
}





