import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchCitiesSuccess, FetchCitiesError } from "./actions";
import { FETCH_CITIES_REQUEST } from "./types";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/city";

const getCities = () =>
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

function* CitySagaWorker() {
  try {
    const res: ResGenerator = yield call(getCities);
    yield put(
      FetchCitiesSuccess({
        cities: res.data.data,
      })
    );
  } catch (e: any) {
    FetchCitiesError({
      error: e.message,
    });
  }
}

function* CitySagaWatcher() {
  yield takeLatest(FETCH_CITIES_REQUEST, CitySagaWorker);
}
export default CitySagaWatcher;
