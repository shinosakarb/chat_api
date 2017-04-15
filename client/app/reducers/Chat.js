import { combineReducers } from 'redux'
import { ADD_MESSAGE, CREATE_MESSAGE_LIST, TOGGLE_DISPLAY_STATE } from '../constants/chat'

export const chatInitialState = [{"id":2,"text":"message2"},{"id":1,"text":"message1"}]

const chat = (state = '', action) => {
  switch (action.type) {
    case CREATE_MESSAGE_LIST:
      return action.messages.map( (message) => {
        message['displayState'] = true
        return message
      })
    case ADD_MESSAGE:
      const message = action.message
      message['displayState'] = true
      return [ ...state, message ]
    case TOGGLE_DISPLAY_STATE:
      return state.map( (message) => {
        if( message.id === action.message_id ) {
          message['displayState'] = !message['displayState']
          return message
        }
        else {
          return message
        }
      })
    default:
      return state
  }
}

export default chat
