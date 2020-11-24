import { SHOW_MODAL, HIDE_MODAL, SET_ALERT, SET_FILTER } from "../types"

const initialState = {
  modal: false,
  selectedId: null,
  alert: null,
  filter: ''
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modal: true,
        selectedId: action.payload
      }
    case HIDE_MODAL:
      return {
        ...state,
        modal: false,
        selectedId: null
      }
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload
      }  
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      }    
    default:
      return state
  }
}