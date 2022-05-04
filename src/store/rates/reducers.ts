import { IAction, IRate } from "./../types";
import {
  FETCH_RATES_REQUEST,
  FETCH_RATES_SUCCESS,
  FETCH_RATES_ERROR,
} from "./types";

interface IState {
  pending: boolean;
  rates: IRate[];
  error: null | string;
}

const initialState: IState = {
  pending: false,
  rates: [],
  error: null,
};

export default (
  state = initialState,
  { type, payload }: IAction<{ rates: IRate[]; error: string }>
) => {
  switch (type) {
    case FETCH_RATES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_RATES_SUCCESS:
      return {
        ...state,
        pending: false,
        rates: payload.rates,
      };
    case FETCH_RATES_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};
