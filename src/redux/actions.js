import { REQUEST_USERS, REQUEST_CREATE, REQUEST_DELETE, REQUEST_UPDATE, SHOW_MODAL, HIDE_MODAL, SET_FILTER } from "./types"

export const getUsers = () => ({ type: REQUEST_USERS })

export const createUser = payload => ({ type: REQUEST_CREATE, payload })

export const deleteUser = payload => ({ type: REQUEST_DELETE, payload })

export const updateUser = payload => ({ type: REQUEST_UPDATE, payload })

export const showModal = payload => ({ type: SHOW_MODAL, payload })

export const hideModal = () => ({ type: HIDE_MODAL })

export const filterUsers = payload => ({ type: SET_FILTER, payload })