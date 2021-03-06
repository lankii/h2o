import React, {Component} from 'react'
import {
  Row,
  Col,
  Table,
  Popconfirm,
  Button,
  message
} from 'antd'
import {injectIntl, intlShape, FormattedMessage} from 'react-intl'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {CopyToClipboard} from 'react-copy-to-clipboard'

import Layout from '../../../layout'
import {get, _delete, backend} from '../../../ajax'
import PlainText from '../../../components/PlainText'

class Widget extends Component {
  state = {
    items: []
  }
  componentDidMount() {
    get('/reading/notes').then((rst) => {
      this.setState({items: rst})
    }).catch(message.error);
  }
  handleRemove = (id) => {
    const {formatMessage} = this.props.intl
    _delete(`/reading/notes/${id}`).then((rst) => {
      message.success(formatMessage({id: 'helpers.success'}))
      var items = this.state.items.filter((it) => it.id !== id)
      this.setState({items})
    }).catch(message.error)
  }
  render() {
    const {push} = this.props
    return (<Layout breads={[{
          href: "/reading/notes",
          label: <FormattedMessage id={"reading.notes.index.title"}/>
        }
      ]}>
      <Row>
        <Col>
          <Table bordered={true} rowKey="id" dataSource={this.state.items} columns={[
              {
                title: <FormattedMessage id="attributes.body"/>,
                key: 'body',
                render: (text, record) => <PlainText body={record.body} length={255}/>
              }, {
                title: 'Action',
                key: 'action',
                render: (text, record) => (<span>
                  <CopyToClipboard text={backend(`/reading/htdocs/books/${record.bookId}#${record.id}`)}><Button shape="circle" icon="copy"/></CopyToClipboard>
                  <Button onClick={(e) => window.open(backend(`/reading/htdocs/books/${record.bookId}#${record.id}`), '_blank').focus()} shape="circle" icon="eye"/>
                  <Button onClick={(e) => push(`/reading/notes/edit/${record.id}`)} shape="circle" icon="edit"/>
                  <Popconfirm title={<FormattedMessage id = "helpers.are-you-sure" />} onConfirm={(e) => this.handleRemove(record.id)}>
                    <Button type="danger" shape="circle" icon="delete"/>
                  </Popconfirm>
                </span>)
              }
            ]}/>
        </Col>
      </Row>
    </Layout>);
  }
}

Widget.propTypes = {
  intl: intlShape.isRequired
}

const WidgetI = injectIntl(Widget)

export default connect(state => ({}), {
  push
},)(WidgetI)
