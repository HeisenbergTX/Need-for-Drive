import { POST_ORDER, POST_ORDER_CREATOR } from "./types";
import { call, takeLatest } from "redux-saga/effects";
import axios from "axios";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/order/";

const postOrder = (payload: any) => {
  console.log(payload);
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
   
    console.log(res.data.data);
  } catch (e: any) {
    console.log("error");
  }
}

function* PostOrderSagaWatcher() {
  yield takeLatest(POST_ORDER_CREATOR, PostOrderSagaWorker);
}

export default PostOrderSagaWatcher;
