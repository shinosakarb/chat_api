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
    return (
      <div>
        <textarea ref={ (input) => {this.textMessage = input}} rows="4" cols="40" />
        <input type="button" value="register" onClick={this.onsubmit.bind(this)} />
      </div>
    )
  }
}

export default MessageForm
