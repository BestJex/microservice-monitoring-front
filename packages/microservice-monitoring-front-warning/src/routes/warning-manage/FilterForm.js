import React, { Component, Fragment } from 'react';
import { Form, Input, Row, Col } from 'hzero-ui';
import { Button as PermissionButton } from 'components/Permission';
import intl from 'utils/intl';
import { Bind } from 'lodash-decorators';

const formlayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};
@Form.create({ fieldNameProp: null })
export default class FilterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }

  /**
 *重置
 *
 * @memberof FilterForm
 */
  @Bind()
  handleFormReset() {
    const { form } = this.props;
    form.resetFields();
    form.setFieldsValue({ 'statusCode': '' });
  };

  /**
   *查询
   *
   * @memberof FilterForm
   */
  @Bind()
  handleSearch() {
    const { onSearch, form } = this.props;
    if (onSearch) {
      form.validateFields((err, values) => {
        if (!err) {
          // 如果验证成功,则执行search
          onSearch(values);
        }
      });
    }
  }


  /**
   *展示更多查询条件
   *
   * @memberof FilterForm
   */
  @Bind()
  toggleForm() {
    const { display } = this.state;
    this.setState({
      display: !display,
    });
  }

  render() {
    const preCode = 'o2.customer.tag.model.tag';
    const { form: { getFieldDecorator }, path} = this.props;
    return (
      <Fragment>
        <Form>
          <Row>
            <Col span={18}>
              <Row>
                <Col span={8}>
                  <Form.Item label={intl.get(`${preCode}.type`).d('预警类型')} {...formlayout}>
                    {getFieldDecorator('type', {})(
                      <Input />
                    )}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label={intl.get(`${preCode}.status`).d('预警状态')} {...formlayout}>
                    {getFieldDecorator('status', {
                    })(
                      <Input />
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Form.Item>
                <PermissionButton
                  data-code="search"
                  style={{ marginLeft: 8 }}
                  type='primary'
                  htmlType="submit"
                  onClick={this.handleSearch}
                  permissionList={[
                    {
                      code: `${path}.button.search`,
                      type: 'button',
                      meaning: '查询',
                    },
                  ]}
                > 查询
                </PermissionButton>
                <PermissionButton
                  data-code="reset"
                  style={{ marginLeft: 8 }}
                  onClick={this.handleFormReset}
                  permissionList={[
                    {
                      code: `${path}.button.reset`,
                      type: 'button',
                      meaning: '重置',
                    },
                  ]}
                >
                  {intl.get('hzero.common.button.reset').d('重置')}
                </PermissionButton>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Fragment>
    );
  }
}


