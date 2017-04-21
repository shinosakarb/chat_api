import { ADD_MESSAGE, CREATE_MESSAGE_LIST, TOGGLE_DISPLAY_STATE, UPDATE_MESSAGE, DELETE_MESSAGE } from '../constants/chat'

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

export const updateMessage = (message_id, new_text) => ({
  type: UPDATE_MESSAGE,
  message_id,
  new_text,
})

export const deleteMessage = (message_id) => ({
  type: DELETE_MESSAGE,
  message_id
})
