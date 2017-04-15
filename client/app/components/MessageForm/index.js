import React, { Component } from 'react'

class MessageForm extends Component {
  onsubmit() {
    const { actions } = this.props
    actions.addMessage( this.textMessage.value )
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
