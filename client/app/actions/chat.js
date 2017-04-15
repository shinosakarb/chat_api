import { ADD_MESSAGE, CREATE_MESSAGE_LIST, TOGGLE_DISPLAY_STATE } from '../constants/chat'

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
})

export const createMessageList = (messages) => ({
  type: CREATE_MESSAGE_LIST,
  messages,
})

export const toggleDisplayState = (message_id) => ({
  type: TOGGLE_DISPLAY_STATE,
  message_id,
})
