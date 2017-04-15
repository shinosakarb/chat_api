import { ADD_MESSAGE, CREATE_MESSAGE_LIST } from '../constants/chat'

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
})

export const createMessageList = (messages) => ({
  type: CREATE_MESSAGE_LIST,
  messages,
})
