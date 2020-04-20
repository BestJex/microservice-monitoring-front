import React, { Component } from 'react';
import { Header, Content } from 'components/Page';
import FilterForm from './FilterForm';
import ListTable from './ListTable';


export default class PhoneWarning extends Component {

  render() {
    return (
      <>
        <Header title='手机短信预警' />
        <Content>
          <FilterForm />
          <ListTable />
        </Content>
      </>
    );
  }

}
