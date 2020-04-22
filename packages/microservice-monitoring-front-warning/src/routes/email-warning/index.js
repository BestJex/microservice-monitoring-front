import React, { Component } from 'react';
import { Header, Content } from 'components/Page';
import { Modal } from 'hzero-ui';
import { connect } from 'dva';
import { Bind } from 'lodash-decorators';
import FilterForm from './FilterForm';
import ListTable from './ListTable';

@connect(({ emailWarning, loading }) => ({
  emailWarning,
  loading,
  retrieveLoading: loading.effects['emailWarning/retrieve'],
}))
export default class EmailWarning extends Component {

  componentDidMount() {
    this.handleSearch();
  }


  @Bind()
  handleSearch(query = {}) {
    const { dispatch } = this.props;
    dispatch({
      type: 'emailWarning/retrieve',
      payload: {
        warningType: "邮件预警",
        ...query,
      },
    });
  }

  @Bind()
  showDetail(record) {
    Modal.info({
      width: 500,
      title: '邮件内容',
      content: (
        <div dangerouslySetInnerHTML={{__html: record.warningContent}} />
      ),
      okText: '确定',
    });
  }

  render() {
    const {
      retrieveLoading,
      emailWarning: { pagination, list, query },
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
        <Header title='邮件预警' />
        <Content>
          <FilterForm {...filterProps} />
          <ListTable {...listProps} />
        </Content>
      </>
    );
  }

}
