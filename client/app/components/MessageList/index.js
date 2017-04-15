import React from 'react'
import Message from '../Message'

const MessageList = ({messages}) => {
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

export default MessageList
