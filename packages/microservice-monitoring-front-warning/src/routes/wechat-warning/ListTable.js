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
        emailId: "E00001",
        emailTitle: "测试预警微信",
        emailContent: "请注意，您线上系统出现错误预警",
        emailStatus: "发送成功",
        emailFrom: "Admin",
        emailTo: "Test",
        creationDate: "2020-03-27",
      },
      {
        sortId: 2,
        emailId: "E00002",
        emailTitle: "测试预警微信2",
        emailContent: "测试错误预警",
        emailStatus: "发送成功",
        emailFrom: "Admin",
        emailTo: "Test2",
        creationDate: "2020-03-30",
      },
      {
        sortId: 3,
        emailId: "E00003",
        emailTitle: "测试预警微信3",
        emailContent: "预警",
        emailStatus: "发送失败",
        emailFrom: "Admin",
        emailTo: "LiSi",
        creationDate: "2020-04-20",
      },
      {
        sortId: 4,
        emailId: "E00004",
        emailTitle: "测试预警微信4",
        emailContent: "预警",
        emailStatus: "发送失败",
        emailFrom: "Admin",
        emailTo: "LiSi",
        creationDate: "2020-04-20",
      },
      {
        sortId: 5,
        emailId: "E00005",
        emailTitle: "测试",
        emailContent: "预警",
        emailStatus: "发送失败",
        emailFrom: "Admin",
        emailTo: "测试",
        creationDate: "2020-04-14",
      },
      {
        sortId: 6,
        emailId: "E00006",
        emailTitle: "测试6",
        emailContent: "预警",
        emailStatus: "发送失败",
        emailFrom: "Admin",
        emailTo: "LiSi",
        creationDate: "2020-04-11",
      },
      {
        sortId: 7,
        emailId: "E00007",
        emailTitle: "测试7",
        emailContent: "预警测试",
        emailStatus: "发送失败",
        emailFrom: "Admin",
        emailTo: "赵六",
        creationDate: "2020-04-21",
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
        dataIndex: 'emailId',
        title: intl.get(`${preCode}.activityId`).d('微信编码'),
        align: 'left',
        render: (text, record) => {
          return <a onClick={() => onHandleToDetail(record)}>{text}</a>;
        },
      },
      {
        dataIndex: 'emailTitle',
        title: intl.get(`${preCode}.emailTitle`).d('微信标题'),
        align: 'left',
      },
      {
        dataIndex: 'emailContent',
        title: intl.get(`${preCode}.emailContent`).d('微信内容'),
        align: 'left',
      },
      {
        dataIndex: 'emailStatus',
        title: intl.get(`${preCode}.emailStatus`).d('微信状态'),
        align: 'left',
      },
      {
        dataIndex: 'emailFrom',
        title: intl.get(`${preCode}.emailFrom`).d('接收人'),
        align: 'left',
      },
      {
        dataIndex: 'emailTo',
        title: intl.get(`${preCode}.emailTo`).d('发送人'),
        align: 'left',
      },
      {
        dataIndex: 'creationDate',
        title: intl.get(`${preCode}.creationDate`).d('发送时间'),
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
