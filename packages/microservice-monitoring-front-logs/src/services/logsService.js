import request from 'utils/request';
/**
 * 请求API前缀
 * @type {string}
 */
const prefix = `/msms`;

export async function retrieve(params) {
  return request(`${prefix}/v1/logss`, {
    method: 'GET',
    query: params,
  });
}


/**
 * 同步数据
 *
 * @param {String} params
 */
export async function syncData(params) {
  return request(`${prefix}/v1/es-logs`, {
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
  return request(`${prefix}/v1/logss`, {
    method: 'DELETE',
    body: params,
  });
}





