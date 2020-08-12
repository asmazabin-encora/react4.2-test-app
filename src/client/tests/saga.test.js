import { runSaga } from 'redux-saga';
import { getAllData } from '../../client/sagas';
import FETCH_ALL_RECORDS from '../actions';
import mockData from '../store/mockData';

const runFetchPostsSaga = (dispatchedActions) => (
  runSaga({
    dispatch: (action) => dispatchedActions.push(action),
  }, getAllData)
);

describe('fetch records using saga', () => {
  it('Should call API and dispatch FETCH_ALL_RECORDS action with response data as payload', async () => {
    const dispatchedActions = [];
    await runFetchPostsSaga(dispatchedActions);
    await Promise.resolve();

    expect(dispatchedActions).toEqual({ type: FETCH_ALL_RECORDS, payload: JSON.parse(mockData)});
  });
});