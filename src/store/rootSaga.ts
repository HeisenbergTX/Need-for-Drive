import { all, fork } from "redux-saga/effects";

import cities from "./city/sagas";
import points from "./point/sagas";
import models from "./models/sagas";
import rates from "./rates/sagas";
import statusId from "./statusId/sagas";
import postOrder from "./compiledOrder/sagas";
import { GetOrderSagaWatcher } from "./compiledOrder/sagas";

export function* rootSaga() {
  yield all([
    fork(cities),
    fork(points),
    fork(models),
    fork(statusId),
    fork(rates),
    fork(postOrder),
    fork(GetOrderSagaWatcher),
  ]);
}
