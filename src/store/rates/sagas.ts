import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchRatesSuccess, FetchRatesError } from "./actions";
import { FETCH_RATES_REQUEST } from "./types";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/rate";

const getRates = () =>
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

function* RatesSagaWorker() {
  try {
    const res: ResGenerator = yield call(getRates);
    yield put(FetchRatesSuccess({ rates: res.data.data }));
  } catch (e: any) {
    FetchRatesError({
      error: e.message,
    });
  }
}

function* RatesSagaWatcher() {
  yield takeLatest(FETCH_RATES_REQUEST, RatesSagaWorker);
}

export default RatesSagaWatcher;
