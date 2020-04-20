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
        emailTitle: "测试预警短信",
        emailContent: "请注意，您线上系统出现错误预警",
        emailStatus: "发送成功",
        emailFrom: "Admin",
        emailTo: "Test",
        creationDate: "2020-03-27",
      },
      {
        sortId: 2,
        emailId: "E00002",
        emailTitle: "测试预警短信2",
        emailContent: "测试错误预警",
        emailStatus: "发送成功",
        emailFrom: "Admin",
        emailTo: "Test2",
        creationDate: "2020-03-30",
      },
      {
        sortId: 3,
        emailId: "E00003",
        emailTitle: "测试预警短信3",
        emailContent: "预警",
        emailStatus: "发送失败",
        emailFrom: "Admin",
        emailTo: "LiSi",
        creationDate: "2020-04-20",
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
        title: intl.get(`${preCode}.activityId`).d('短信编码'),
        align: 'left',
        render: (text, record) => {
          return <a onClick={() => onHandleToDetail(record)}>{text}</a>;
        },
      },
      {
        dataIndex: 'emailTitle',
        title: intl.get(`${preCode}.emailTitle`).d('短信标题'),
        align: 'left',
      },
      {
        dataIndex: 'emailContent',
        title: intl.get(`${preCode}.emailContent`).d('短信内容'),
        align: 'left',
      },
      {
        dataIndex: 'emailStatus',
        title: intl.get(`${preCode}.emailStatus`).d('短信状态'),
        align: 'left',
      },
      {
        dataIndex: 'emailFrom',
        title: intl.get(`${preCode}.emailFrom`).d('发件人'),
        align: 'left',
      },
      {
        dataIndex: 'emailTo',
        title: intl.get(`${preCode}.emailTo`).d('收件人'),
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
