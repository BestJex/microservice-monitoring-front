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
      onSearch,
      setSelectedRows,
    } = this.props;
    // const dataSource = [
    //   {
    //     sortId: 1,
    //     emailId: "E00001",
    //     emailTitle: "测试预警微信",
    //     emailContent: "请注意，您线上系统出现错误预警",
    //     emailStatus: "发送成功",
    //     emailFrom: "Admin",
    //     emailTo: "Test",
    //     creationDate: "2020-03-27",
    //   },
    //   {
    //     sortId: 2,
    //     emailId: "E00002",
    //     emailTitle: "测试预警微信2",
    //     emailContent: "测试错误预警",
    //     emailStatus: "发送成功",
    //     emailFrom: "Admin",
    //     emailTo: "Test2",
    //     creationDate: "2020-03-30",
    //   },
    //   {
    //     sortId: 3,
    //     emailId: "E00003",
    //     emailTitle: "测试预警微信3",
    //     emailContent: "预警",
    //     emailStatus: "发送失败",
    //     emailFrom: "Admin",
    //     emailTo: "LiSi",
    //     creationDate: "2020-04-20",
    //   },
    //   {
    //     sortId: 4,
    //     emailId: "E00004",
    //     emailTitle: "测试预警微信4",
    //     emailContent: "预警",
    //     emailStatus: "发送失败",
    //     emailFrom: "Admin",
    //     emailTo: "LiSi",
    //     creationDate: "2020-04-20",
    //   },
    //   {
    //     sortId: 5,
    //     emailId: "E00005",
    //     emailTitle: "测试",
    //     emailContent: "预警",
    //     emailStatus: "发送失败",
    //     emailFrom: "Admin",
    //     emailTo: "测试",
    //     creationDate: "2020-04-14",
    //   },
    //   {
    //     sortId: 6,
    //     emailId: "E00006",
    //     emailTitle: "测试6",
    //     emailContent: "预警",
    //     emailStatus: "发送失败",
    //     emailFrom: "Admin",
    //     emailTo: "LiSi",
    //     creationDate: "2020-04-11",
    //   },
    //   {
    //     sortId: 7,
    //     emailId: "E00007",
    //     emailTitle: "测试7",
    //     emailContent: "预警测试",
    //     emailStatus: "发送失败",
    //     emailFrom: "Admin",
    //     emailTo: "赵六",
    //     creationDate: "2020-04-21",
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
        title: intl.get(`${preCode}.warningTitle`).d('微信标题'),
        align: 'left',
      },
      {
        dataIndex: 'warningStatus',
        title: intl.get(`${preCode}.warningStatus`).d('微信状态'),
        align: 'left',
      },
      {
        dataIndex: 'warningRecipient',
        title: intl.get(`${preCode}.warningRecipient`).d('接收人'),
        align: 'left',
      },
      {
        dataIndex: 'warningSender',
        title: intl.get(`${preCode}.warningSender`).d('发送人'),
        align: 'left',
      },
      {
        dataIndex: 'creationDate',
        title: intl.get(`${preCode}.creationDate`).d('发送时间'),
        align: 'left',
      },
      {
        dataIndex: 'warningContent',
        title: intl.get(`${preCode}.warningContent`).d('微信内容'),
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
