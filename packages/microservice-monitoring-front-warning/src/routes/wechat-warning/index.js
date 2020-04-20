import React, { Component } from 'react';
import { Header, Content } from 'components/Page';
import FilterForm from './FilterForm';
import ListTable from './ListTable';


export default class WeChatWarning extends Component {

  render() {
    return (
      <>
        <Header title='微信预警' />
        <Content>
          <FilterForm />
          <ListTable />
        </Content>
      </>
    );
  }

}
