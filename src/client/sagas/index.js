/* eslint-disable no-constant-condition */
import axios from 'axios';
import { put, call, takeEvery, all } from 'redux-saga/effects'
import { updatedRecord } from '../reducers'
import * as actions from '../actions'

const getListData = async () => {
      return axios.get('http://localhost:5000')
      .then(response => {
          return response.data.list;
        })
      .catch(error => {
          return Promise.reject({error, status:error.statusText});
      })
}

export function* getAllData() {
  const listData = yield call(getListData)
  yield put(actions.recordFetched(listData))
}

export function* watchGetData() {
  yield takeEvery(actions.FETCH_ALL_RECORDS, getAllData);
}

export function* updateData() {
  yield put(actions.recordUpdated(updatedRecord))
}

export default function* root() {
  yield all([call(watchGetData)])
}
