import React, { Component } from 'react'
import $ from 'jquery'
import Message from '../Message'

class MessageList extends Component {
  componentDidMount() {
    const { actions } = this.props
    $.ajax({
      type: 'GET',
      url: '/api/messages',
      success: ( (data)=>actions.createMessageList(data) )
    })
  }

  render() {
    const { messages } = this.props
    return (
      <div>
      {
        messages.map(
          (message) =>
            <Message key={message.id} text={message.text} />
        )
      }
      </div>
    )
  }
}

export default MessageList
