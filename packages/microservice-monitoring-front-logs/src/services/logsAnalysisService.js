import request from 'utils/request';
/**
 * 请求API前缀
 * @type {string}
 */
const prefix = `/msms`;

export async function retrieve(params) {
  return request(`${prefix}/v1/logs-analysiss`, {
    method: 'GET',
    query: params,
  });
}

/**
 * 删除
 *
 * @param {String} params
 */
export async function deleteLogs(params) {
  return request(`${prefix}/v1/logs-analysiss`, {
    method: 'DELETE',
    body: params,
  });
}





