import React, { Component } from 'react';
import { Header, Content } from 'components/Page';
import { connect } from 'dva';
import { isEmpty } from 'lodash';
import { Modal, Button, Input } from 'hzero-ui';
import notification from 'utils/notification';
import { Bind } from 'lodash-decorators';
import FilterForm from './FilterForm';
import ListTable from './ListTable';


const { TextArea } = Input;
@connect(({ logs, loading }) => ({
  logs,
  loading,
  retrieveLoading: loading.effects['logs/retrieve'],
  syncDataLoading: loading.effects['logs/syncData'],
  deleteRowsLoading: loading.effects['logs/deleteLogs'],
}))
export default class LogsList extends Component {

  state = {
    selectedRows: [],
  };

  componentDidMount() {
    this.handleSearch();
  }


  @Bind()
  handleSearch(query = {}) {
    const { dispatch } = this.props;
    dispatch({
      type: 'logs/retrieve',
      payload: {
        ...query,
      },
    });
    this.setSelectedRows([]);
  }

  @Bind()
  handleSync(query = {}) {
    const { dispatch } = this.props;
    dispatch({
      type: 'logs/syncData',
      payload: {...query},
    }).then(res => {
      if (res) {
        this.handleSearch();
        notification.success();
      } else {
        notification.warning();
      }
    });
  }

  @Bind()
  handleDelete() {
    const { dispatch } = this.props;
    const { selectedRows } = this.state;
    selectedRows.forEach(val => {
      dispatch({
        type: 'logs/deleteLogs',
        payload: val,
      }).then(res => {
        if (res) {
          this.handleSearch();
          notification.success();
        } else {
          notification.warn();
        }
      });
    });
  }

  /**
   * 批量选中行
   */
  @Bind()
  setSelectedRows(selectedRows) {
    this.setState({
      selectedRows,
    });
  };

  @Bind()
  showDetail(record) {
    Modal.info({
      width: 1000,
      title: '日志信息',
      content: (
        <TextArea
          rows={20}
          value={record.logMessage}
          disabled
        />
      ),
      okText: '确定',
    });
  }

  render() {
    const {
      retrieveLoading,
      syncDataLoading,
      deleteRowsLoading,
      logs: { pagination, list, query },
    } = this.props;
    const filterProps = {
      onSearch: this.handleSearch,
    };
    const listProps = {
      loading: retrieveLoading,
      pagination,
      dataSource: list,
      showDetail: this.showDetail,
      setSelectedRows: this.setSelectedRows,
      selectedRows: this.state.selectedRows,
      onChange: page =>
        this.handleSearch({ ...query, page: page.current - 1, size: page.pageSize }),
    };
    return (
      <>
        <Header title='日志列表'>
          <Button
            icon="delete"
            type="danger"
            loading={deleteRowsLoading}
            disabled={isEmpty(this.state.selectedRows)}
            onClick={this.handleDelete}
          >
            删除
          </Button>
          <Button
            type='primary'
            icon='sync'
            loading={syncDataLoading}
            onClick={this.handleSync}
          >
            同步日志
          </Button>
        </Header>
        <Content>
          <FilterForm {...filterProps} />
          <ListTable {...listProps} />
        </Content>
      </>
    );
  }

}
