import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { SuccessStatusId, ErrorStatusId } from "../statusId/actions";
import { REQUEST_STATUS_ID } from "./types";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/orderStatus";

const getStatusId = () =>
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

function* StatusIdSagaWorker() {
  try {
    const res: ResGenerator = yield call(getStatusId);
    yield put(SuccessStatusId({ statusId: res.data.data }));
  } catch (e: any) {
    ErrorStatusId({
      error: e.message,
    });
  }
}

function* StatusIdSagaWatcher() {
  yield takeLatest(REQUEST_STATUS_ID, StatusIdSagaWorker);
}

export default StatusIdSagaWatcher;
