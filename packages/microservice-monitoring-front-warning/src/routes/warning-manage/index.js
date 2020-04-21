import React, { Component } from 'react';
import { Header, Content } from 'components/Page';
import { Form } from 'hzero-ui';
import { connect } from 'dva';
import { Bind } from 'lodash-decorators';
import notification from 'utils/notification';
import FilterForm from './FilterForm';
import ListTable from './ListTable';



@Form.create({ fieldNameProp: null })
@connect(({ warningManage, loading }) => ({
  warningManage,
  loading,
  retrieveLoading: loading.effects['warningManage/retrieve '],
}))
export default class WarningManageIndex extends Component {

  componentDidMount() {
    this.handleSearch();
  }


  @Bind()
  handleSearch(query = {}) {
    const { dispatch } = this.props;
    dispatch({
      type: 'warningManage/retrieve',
      payload: {
        ...query,
      },
    });
  }

  @Bind()
  onChangeStatus(record) {
    const { dispatch } = this.props;
    const data = record;
    if (record.status === "1") {
      data.status = "0";
    } else {
      data.status = "1";
    }
    dispatch({
      type: 'warningManage/update',
      payload: {
        ...data,
      },
    }).then(res => {
      if (res) {
        notification.success();
        this.handleSearch();
      } else {
        notification.warn();
      }
    });
  }

  render() {
    const {
      retrieveLoading,
      form,
      warningManage: { pagination, list, query, warningTypeList },
    } = this.props;
    const filterProps = {
      onSearch: this.handleSearch,
      warningTypeList,
    };
    const listProps = {
      loading: retrieveLoading,
      pagination,
      dataSource: list,
      warningTypeList,
      onChangeStatus: this.onChangeStatus,
    };
    return (
      <>
        <Header title='预警管理' />
        <Content>
          <FilterForm {...filterProps} />
          <ListTable {...listProps} />
        </Content>
      </>
    );
  }

}
