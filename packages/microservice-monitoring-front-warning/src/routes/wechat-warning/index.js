import React, { Component } from 'react';
import { Header, Content } from 'components/Page';
import { Form } from 'hzero-ui';
import { connect } from 'dva';
import { Bind } from 'lodash-decorators';
import FilterForm from './FilterForm';
import ListTable from './ListTable';

@Form.create({ fieldNameProp: null })
@connect(({ wechatWarning, loading }) => ({
  wechatWarning,
  loading,
  retrieveLoading: loading.effects['wechatWarning/retrieve '],
}))
export default class WeChatWarning extends Component {

  componentDidMount() {
    this.handleSearch();
  }


  @Bind()
  handleSearch(query = {}) {
    const { dispatch } = this.props;
    dispatch({
      type: 'wechatWarning/retrieve',
      payload: {
        warningType: "微信预警",
        ...query,
      },
    });
  }

  render() {
    const {
      retrieveLoading,
      form,
      wechatWarning: { pagination, list, query },
    } = this.props;
    const filterProps = {
      onSearch: this.handleSearch,
    };
    const listProps = {
      loading: retrieveLoading,
      pagination,
      dataSource: list,
    };
    return (
      <>
        <Header title='微信预警' />
        <Content>
          <FilterForm {...filterProps} />
          <ListTable {...listProps} />
        </Content>
      </>
    );
  }

}
