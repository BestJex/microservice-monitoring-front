import React, { Component } from 'react';
import { Header, Content } from 'components/Page';
import FilterForm from './FilterForm';
import ListTable from './ListTable';


export default class LogsList extends Component {

  render() {
    return (
      <>
        <Header title='日志列表' />
        <Content>
          <FilterForm />
          <ListTable />
        </Content>
      </>
    );
  }

}
