import React, { PureComponent } from 'react';
import { Table, Switch } from 'hzero-ui';
import intl from 'utils/intl';
import { createPagination } from 'utils/utils';
import { connect } from 'dva';
import { yesOrNoRender } from 'utils/renderer';

@connect()
export default class ListTable extends PureComponent {

  render() {
    const {
      loading,
      dataSource = [],
      pagination = {},
      onSearch,
      onChangeStatus,
    } = this.props;
    const paginations = {
      ...createPagination(dataSource),
      ...pagination,
    };
    const preCode = 'o2.customer.tag.model.tag';
    const columns = [
      {
        title: '序号',
        dataIndex: 'sortId',
        // width: 60,
        align: 'center',
      },
      {
        dataIndex: 'type',
        title: intl.get(`${preCode}.type`).d('预警类型'),
        align: 'center',
      },
      {
        dataIndex: 'status',
        title: intl.get(`${preCode}.status`).d('预警状态'),
        align: 'center',
        render: (text, record) => {
          return <Switch checked={text === "1"} onChange={() => onChangeStatus(record)} />;
        },
      },
    ];

    return (
      <Table
        bordered
        rowKey="warningType"
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={paginations}
        onChange={onSearch}
      />
    );
  }
}
