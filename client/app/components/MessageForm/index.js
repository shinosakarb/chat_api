import React, { Component } from 'react'
import $ from 'jquery'

class MessageForm extends Component {
  onsubmit() {
    const { message, actions } = this.props
    if( message ) {
      $.ajax({
        type: 'PATCH',
        url: '/api/messages/' + message.id,
        data: {
          message: {text: this.textMessage.value}
        },
        success: (data) => actions.updateMessage( message.id, this.textMessage.value )
      })
    }
    else {
      $.ajax({
        type: 'POST',
        url: '/api/messages',
        data: {
          message: {text: this.textMessage.value}
        },
        success: ( (data)=>actions.addMessage(data) )
      })
    }
  }

  onCancel() {
    const { actions, message } = this.props
    actions.toggleDisplayState( message.id )
  }

  render() {
    const { message } = this.props
    return (
      <div>
        <textarea ref={ (input) => {this.textMessage = input}} rows="4" cols="40" defaultValue={message?message.text:null} />
        { message ? <input type="button" value="cancel" onClick={this.onCancel.bind(this)} /> : null }
        <input type="button" value={message ? "update":"register"} onClick={this.onsubmit.bind(this)} />
      </div>
    )
  }
}

export default MessageForm
