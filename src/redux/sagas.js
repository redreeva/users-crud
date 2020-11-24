import { takeEvery, call, put } from 'redux-saga/effects'
import ApiService from './service/apiService'
import { GET_USERS, CREATE_USER, REQUEST_USERS, REQUEST_CREATE, REQUEST_DELETE, REQUEST_UPDATE, UPDATE_USER, SET_ALERT, GET_NEW_USERS_LIST } from './types'

const apiService = new ApiService()

const hideAlert = () => new Promise(res => setTimeout(res, 2000))

export function* sagaWatcher() {
  yield takeEvery(REQUEST_USERS, getWorker)
  yield takeEvery(REQUEST_CREATE, createWorker)
  yield takeEvery(REQUEST_DELETE, deleteWorker)
  yield takeEvery(REQUEST_UPDATE, updateWorker)
}

function* getWorker() {
  try {
    const payload = yield call(() => apiService.getUsers())
    yield put({ type: GET_USERS, payload })
  } catch(e) {
    yield put({ type: SET_ALERT, payload: 'Can\'t get data from url.' })
  }
}

function* createWorker(action) {
  try {
    const data = yield call(() => apiService.createUser(action.payload))
    yield put({ type: CREATE_USER, payload: data })
  } catch(e) {
    yield errorHandler('Can\'t create new user.')
  }
}

function* deleteWorker(action) {
  try {
    yield call(() => apiService.deleteUser(action.payload))
    yield put({ type: GET_NEW_USERS_LIST, payload: action.payload })
  } catch(e) {
    yield errorHandler('Can\'t delete user.')
  }
}

function* updateWorker(action) {
  try {
    const data = yield call(() => apiService.updateUser(action.payload))
    yield put({ type: UPDATE_USER, payload: data })
  } catch(e) {
    yield errorHandler('Can\'t update user.')
  }
}

function* errorHandler(message) {
  yield put({ type: SET_ALERT, payload: message })
  yield call(hideAlert)
  yield put({ type: SET_ALERT, payload: null })
}