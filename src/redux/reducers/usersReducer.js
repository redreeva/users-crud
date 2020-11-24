import { GET_USERS, CREATE_USER, UPDATE_USER, GET_NEW_USERS_LIST } from '../types'

const initialState = {
  users: []
}

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS:
      return {
        users: action.payload
      }
    case CREATE_USER:
      return {
        users: state.users.concat(action.payload)
      }
    case UPDATE_USER:
      const updatedUser = action.payload

      return {
        users: state.users.map(el => {
          if (el.id === updatedUser.id) return {...el, ...updatedUser}
          return el
        })
      }
    case GET_NEW_USERS_LIST:
      return {
        users: state.users.filter(user => user.id !== action.payload)
      } 
    default:
      return state  
  }
}