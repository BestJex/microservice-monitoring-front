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
@connect(({ logsAnalysis, loading }) => ({
  logsAnalysis,
  loading,
  retrieveLoading: loading.effects['logsAnalysis/retrieve'],
  deleteRowsLoading: loading.effects['logsAnalysis/deleteLogs'],
}))
export default class LogsAnalysis extends Component {

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
      type: 'logsAnalysis/retrieve',
      payload: {
        ...query,
      },
    });
    this.setSelectedRows([]);
  }

  @Bind()
  handleDelete() {
    const { dispatch } = this.props;
    const { selectedRows } = this.state;
    selectedRows.forEach(val => {
      dispatch({
        type: 'logsAnalysis/deleteLogs',
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
      deleteRowsLoading,
      logsAnalysis: { pagination, list, query },
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
        </Header>
        <Content>
          <FilterForm {...filterProps} />
          <ListTable {...listProps} />
        </Content>
      </>
    );
  }

}
