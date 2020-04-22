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
      dataSource = [],
      pagination = {},
      onSearch,
      setSelectedRows,
    } = this.props;
    // const dataSource = [
    //   {
    //     sortId: 1,
    //     emailId: "E00001",
    //     emailTitle: "测试预警短信",
    //     emailContent: "请注意，您线上系统出现错误预警",
    //     emailStatus: "发送成功",
    //     emailFrom: "Admin",
    //     emailTo: "Test",
    //     creationDate: "2020-03-27",
    //   },
    //   {
    //     sortId: 2,
    //     emailId: "E00002",
    //     emailTitle: "测试预警短信2",
    //     emailContent: "测试错误预警",
    //     emailStatus: "发送成功",
    //     emailFrom: "Admin",
    //     emailTo: "Test2",
    //     creationDate: "2020-03-30",
    //   },
    //   {
    //     sortId: 3,
    //     emailId: "E00003",
    //     emailTitle: "测试预警短信3",
    //     emailContent: "预警",
    //     emailStatus: "发送失败",
    //     emailFrom: "Admin",
    //     emailTo: "LiSi",
    //     creationDate: "2020-04-20",
    //   },
    // ];
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
        dataIndex: 'warningTitle',
        title: intl.get(`${preCode}.warningTitle`).d('短信标题'),
        align: 'left',
      },
      {
        dataIndex: 'warningStatus',
        title: intl.get(`${preCode}.warningStatus`).d('短信状态'),
        align: 'left',
      },
      {
        dataIndex: 'warningSender',
        title: intl.get(`${preCode}.warningSender`).d('发件人'),
        align: 'left',
      },
      {
        dataIndex: 'warningRecipient',
        title: intl.get(`${preCode}.warningRecipient`).d('收件人'),
        align: 'left',
      },
      {
        dataIndex: 'creationDate',
        title: intl.get(`${preCode}.creationDate`).d('发送时间'),
        align: 'left',
      },
      {
        dataIndex: 'warningContent',
        title: intl.get(`${preCode}.warningContent`).d('短信内容'),
        align: 'left',
        render: (_, record) => {
          return (
            <a onClick={() => this.props.showDetail(record)}>
              点击查看
            </a>
          );
        },
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
