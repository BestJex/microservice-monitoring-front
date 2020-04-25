import { getResponse, createPagination } from 'utils/utils';
import {
  retrieve,
  deleteLogs,
} from '../services/logsAnalysisService';

export default {
  namespace: 'logsAnalysis',
  state: {
    list: [], // 数据列表
    query: {}, // 查询参数
    pagination: {}, // 分页器
  },
  effects: {
    *retrieve({ payload }, { call, put }) {
      const { page = 0, size = 10, ...query } = payload;
      let result = yield call(retrieve, { page, size, ...query });
      result = getResponse(result);
      if (result) {
        if (result) {
          result.content.forEach((val, index) => {
            const arr = val;
            arr.sortId = page*size+index + 1;
          });
        }
        yield put({
          type: 'updateState',
          payload: {
            query,
            list: result.content,
            pagination: createPagination(result),
          },
        });
      }
    },
    *deleteLogs({ payload }, { call }) {
      const res = yield call(deleteLogs, payload);
      return getResponse(res);
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
