import React, { Component } from 'react'
import $ from 'jquery'
import Message from '../Message'
import MessageForm from '../MessageForm'

class MessageList extends Component {
  componentDidMount() {
    const { actions } = this.props
    $.ajax({
      type: 'GET',
      url: '/api/messages',
      success: ( (data)=>actions.createMessageList(data) )
    })
  }

  renderMessage(actions, message) {
    return(
      message.displayState ?
        <Message key={message.id} actions={actions} text={message.text} id={message.id} /> :
        <MessageForm key={message.id} actions={actions} message={message} />
    )
  }

  render() {
    const { actions, messages } = this.props
    return (
      <div>
      {
        messages.map(
          (message) => this.renderMessage(actions, message)
        )
      }
      </div>
    )
  }
}

export default MessageList
