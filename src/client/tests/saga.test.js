import SagaTester from "redux-saga-tester";
import { all, takeEvery } from "redux-saga/effects";
import * as saga from "../sagas";
import { rootReducer } from "../reducers";
import { recordFetched } from "../actions";

function* rootSaga() {
  yield all({
    ...saga
  });
}

describe("root saga", () => {
  const genObject = saga.watchGetData();
  it("should check type of generator function of saga", async () => {
    const sagaTester = new SagaTester({
      reducers: rootReducer
    });
    sagaTester.start(rootSaga);
    sagaTester.dispatch(recordFetched());
    const actions = sagaTester.getCalledActions();
    expect(actions[0].type).toEqual("GET_RECORDS");
  });

  it("should wait for every FETCH_ALL_RECORDS action and call getAllData", () => {
    expect(genObject.next().value).toEqual(
      takeEvery("FETCH_ALL_RECORDS", saga.getAllData)
    );
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});