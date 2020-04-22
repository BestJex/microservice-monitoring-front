import React, { Component } from 'react';
import { Header, Content } from 'components/Page';
import { Modal } from 'hzero-ui';
import { connect } from 'dva';
import { Bind } from 'lodash-decorators';
import FilterForm from './FilterForm';
import ListTable from './ListTable';

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

  @Bind()
  showDetail(record) {
    Modal.info({
      width: 500,
      title: '微信内容',
      content: (
        <div dangerouslySetInnerHTML={{__html: record.warningContent}} />
      ),
      okText: '确定',
    });
  }

  render() {
    const {
      retrieveLoading,
      wechatWarning: { pagination, list, query },
    } = this.props;
    const filterProps = {
      onSearch: this.handleSearch,
    };
    const listProps = {
      loading: retrieveLoading,
      pagination,
      dataSource: list,
      showDetail: this.showDetail,
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
