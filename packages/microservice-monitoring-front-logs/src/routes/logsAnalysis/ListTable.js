import React, { PureComponent } from 'react';
import { Table } from 'hzero-ui';
import intl from 'utils/intl';
import { createPagination } from 'utils/utils';
import { connect } from 'dva';

@connect()
export default class ListTable extends PureComponent {

  render() {
    const {
      loading,
      dataSource = [],
      pagination = {},
      onChange,
      selectedRows,
      setSelectedRows,
    } = this.props;
    const paginations = {
      ...createPagination(dataSource),
      ...pagination,
    };
    const preCode = 'o2.customer.tag.model.tag';
    const rowSelection = {
      selectedRowKeys: selectedRows.map(val => val.logId),
      // eslint-disable-next-line no-shadow
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
      },
      {
        dataIndex: 'logHost',
        title: intl.get(`${preCode}.logHost`).d('日志HOST'),
        align: 'left',
      },
      {
        dataIndex: 'logCagetory',
        title: intl.get(`${preCode}.logCagetory`).d('日志类别'),
        align: 'left',
      },
      {
        dataIndex: 'logLevel',
        title: intl.get(`${preCode}.logLevel`).d('日志级别'),
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
        rowKey="logId"
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={paginations}
        rowSelection={rowSelection}
        onChange={onChange}
      />
    );
  }
}
