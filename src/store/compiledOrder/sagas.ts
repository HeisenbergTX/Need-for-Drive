import { POST_ORDER_CREATOR } from "./types";
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { chooseIdOrder } from "./actions";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/order/";

const postOrder = (payload: any) => {
  return axios.post(
    urlAddress,
    {
      ...payload,
    },
    {
      headers: {
        "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
};

interface ResGenerator {
  data?: any;
  headers?: string;
  request?: any;
  status?: number;
  statusText?: string;
}

function* PostOrderSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(postOrder, payload);
    yield put(chooseIdOrder(res.data.data.id));
  } catch (e: any) {
    console.log("error");
  }
}

function* PostOrderSagaWatcher() {
  yield takeLatest(POST_ORDER_CREATOR, PostOrderSagaWorker);
}

export default PostOrderSagaWatcher;
