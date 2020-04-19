import React, { Component } from 'react';
import { Header, Content } from 'components/Page';
import { Dispatch } from 'redux';
import { connect } from 'dva';

interface TestPagePageProps {
  dispatch: Dispatch<any>;
}

@connect()
export default class TestPagePage extends Component<TestPagePageProps> {
  render() {
    return (
      <>
        <Header title='TestPagePage' />
        <Content>
          <p>Hello TestPage</p>
        </Content>
      </>
    );
  }

}
