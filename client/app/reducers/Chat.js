import { combineReducers } from 'redux'
import { HELLO_WORLD_NAME_UPDATE } from '../constants/chat'

export const chatInitialState = [{"id":2,"text":"message2"},{"id":1,"text":"message1"}]

const chat = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return {...state, name: action.text}
    default:
      return state
  }
}

export default chat
