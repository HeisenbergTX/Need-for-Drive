import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchModelsSuccess, FetchModelsError } from "./actions";
import { FETCH_MODELS_REQUEST } from "./types";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/car?limit=5";

const getModels = () =>
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

function* ModelSagaWorker() {
  try {
    const res: ResGenerator = yield call(getModels);
    yield put(
      FetchModelsSuccess({
        models: res.data.data,
      })
    );
  } catch (e: any) {
    FetchModelsError({
      error: e.message,
    });
  }
}

function* ModelSagaWatcher() {
  yield takeLatest(FETCH_MODELS_REQUEST, ModelSagaWorker);
}
export default ModelSagaWatcher;
