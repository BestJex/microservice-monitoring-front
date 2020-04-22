import React, { Component } from 'react';
import { Header, Content } from 'components/Page';
import { Form } from 'hzero-ui';
import { connect } from 'dva';
import { Bind } from 'lodash-decorators';
import FilterForm from './FilterForm';
import ListTable from './ListTable';

@Form.create({ fieldNameProp: null })
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

  render() {
    const {
      retrieveLoading,
      form,
      emailWarning: { pagination, list, query },
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
        <Header title='邮件预警' />
        <Content>
          <FilterForm {...filterProps} />
          <ListTable {...listProps} />
        </Content>
      </>
    );
  }

}
