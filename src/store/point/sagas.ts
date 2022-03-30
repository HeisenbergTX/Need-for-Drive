import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchPointsSuccess, FetchPointsError } from "./actions";
import { FETCH_POINTS_REQUEST } from "./types";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/point";

const getPoints = () =>
  axios.get(urlAddress, {
    headers: {
      "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
    },
  });

interface ResGenerator {
  data?: any;
  headers?: string;
  request?: any;
  status?: number;
  statusText?: string;
}

function* PointSagaWorker() {
  try {
    const res: ResGenerator = yield call(getPoints);
    yield put(
      FetchPointsSuccess({
        points: res.data.data,
      })
    );
  } catch (e: any) {
    FetchPointsError({
      error: e.message,
    });
  }
}

function* PointSagaWatcher() {
  yield takeLatest(FETCH_POINTS_REQUEST, PointSagaWorker);
}
export default PointSagaWatcher;
