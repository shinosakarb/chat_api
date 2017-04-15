import React, { Component } from 'react'
import $ from 'jquery'

class MessageForm extends Component {
  onsubmit() {
    const { actions } = this.props
    $.ajax({
      type: 'POST',
      url: '/api/messages',
      data: {
        message: {text: this.textMessage.value}
      },
      success: ( (data)=>actions.addMessage(data) )
    })
  }

  render() {
    const { message } = this.props
    return (
      <div>
        <textarea ref={ (input) => {this.textMessage = input}} rows="4" cols="40" />
        { message ? <input type="button" value="cancel" /> : null }
        <input type="button" value={message ? "update":"register"} onClick={this.onsubmit.bind(this)} />
      </div>
    )
  }
}

export default MessageForm
