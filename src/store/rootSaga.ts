import { all, fork } from "redux-saga/effects";

import cities from "./city/sagas";
import points from "./point/sagas";
import models from "./models/sagas";

export function* rootSaga() {
  yield all([fork(cities), fork(points), fork(models)]);
}
