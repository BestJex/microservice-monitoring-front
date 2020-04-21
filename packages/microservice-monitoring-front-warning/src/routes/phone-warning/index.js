import React, { Component } from 'react';
import { Header, Content } from 'components/Page';
import { Form } from 'hzero-ui';
import { connect } from 'dva';
import { Bind } from 'lodash-decorators';
import FilterForm from './FilterForm';
import ListTable from './ListTable';

@Form.create({ fieldNameProp: null })
@connect(({ phoneWarning, loading }) => ({
  phoneWarning,
  loading,
  retrieveLoading: loading.effects['phoneWarning/retrieve '],
}))
export default class PhoneWarning extends Component {

  componentDidMount() {
    this.handleSearch();
  }


  @Bind()
  handleSearch(query = {}) {
    const { dispatch } = this.props;
    dispatch({
      type: 'phoneWarning/retrieve',
      payload: {
        warningType: "手机短信预警",
        ...query,
      },
    });
  }

  render() {
    const {
      retrieveLoading,
      form,
      phoneWarning: { pagination, list, query, warningTypeList },
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
        <Header title='手机短信预警' />
        <Content>
          <FilterForm {...filterProps} />
          <ListTable {...listProps} />
        </Content>
      </>
    );
  }

}
