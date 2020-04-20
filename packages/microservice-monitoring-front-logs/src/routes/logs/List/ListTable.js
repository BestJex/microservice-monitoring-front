import React, { PureComponent } from 'react';
import { Table } from 'hzero-ui';
import intl from 'utils/intl';
import { createPagination } from 'utils/utils';
import { connect } from 'dva';
import { yesOrNoRender } from 'utils/renderer';

@connect()
export default class ListTable extends PureComponent {

  render() {
    const {
      loading,
      // dataSource = [],
      pagination = {},
      onSearch,
      setSelectedRows,
      onHandleToDetail,

    } = this.props;
    const dataSource = [
      {
        sortId: 1,
        logId: "L00001",
        logName: "测试日志",
        logInfo: "测试日志内容",
        logSource: "测试日志来源",
        logStatus: "状态健康",
        creationDate: "2020-04-18",
      },
      {
        sortId: 2,
        logId: "L00002",
        logName: "测试日志2",
        logInfo: "测试日志内容2",
        logSource: "测试日志来源2",
        logStatus: "状态良好",
        creationDate: "2020-04-19",
      },
      {
        sortId: 3,
        logId: "L00003",
        logName: "测试日志3",
        logInfo: "测试日志内容3",
        logSource: "测试日志来源3",
        logStatus: "状态预警",
        creationDate: "2020-04-20",
      },
      {
        sortId: 4,
        logId: "L00004",
        logName: "测试日志4",
        logInfo: "测试日志内容4",
        logSource: "测试日志来源4",
        logStatus: "状态健康",
        creationDate: "2020-04-18",
      },
      {
        sortId: 5,
        logId: "L00005",
        logName: "测试日志5",
        logInfo: "测试日志内容5",
        logSource: "测试日志来源5",
        logStatus: "状态健康",
        creationDate: "2020-04-17",
      },
    ];
    const paginations = {
      ...createPagination(dataSource),
      ...pagination,
    };
    const preCode = 'o2.customer.tag.model.tag';
    const rowSelection = {
      onChange: (_, selectedRows) => {
        setSelectedRows(selectedRows);
      },
    };
    const columns = [
      {
        title: '序号',
        dataIndex: 'sortId',
        // width: 60,
        align: 'left',
      },
      {
        dataIndex: 'logId',
        title: intl.get(`${preCode}.logId`).d('日志编码'),
        align: 'left',
        render: (text, record) => {
          return <a onClick={() => onHandleToDetail(record)}>{text}</a>;
        },
      },
      {
        dataIndex: 'logName',
        title: intl.get(`${preCode}.logName`).d('日志名称'),
        align: 'left',
      },
      {
        dataIndex: 'logInfo',
        title: intl.get(`${preCode}.logInfo`).d('日志信息'),
        align: 'left',
      },
      {
        dataIndex: 'logSource',
        title: intl.get(`${preCode}.logSource`).d('日志来源'),
        align: 'left',
      },
      {
        dataIndex: 'logStatus',
        title: intl.get(`${preCode}.logStatus`).d('日志状态'),
        align: 'left',
      },
      {
        dataIndex: 'creationDate',
        title: intl.get(`${preCode}.creationDate`).d('创建时间'),
        align: 'left',
      },
    ];

    return (
      <Table
        bordered
        rowKey="activityId"
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={paginations}
        rowSelection={rowSelection}
        onChange={onSearch}
      />
    );
  }
}
