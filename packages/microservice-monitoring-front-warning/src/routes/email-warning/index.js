import React, { Component } from 'react';
import { Header, Content } from 'components/Page';
import FilterForm from './FilterForm';
import ListTable from './ListTable';


export default class EmailWarning extends Component {

  render() {
    return (
      <>
        <Header title='邮件预警' />
        <Content>
          <FilterForm />
          <ListTable />
        </Content>
      </>
    );
  }

}
